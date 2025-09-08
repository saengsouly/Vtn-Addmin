import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, Eye, Edit, FileText, CreditCard, Clock, CheckCircle, ShoppingCart } from "lucide-react";
import AdminLayout from "@/components/layout/AdminLayout";

const SalesManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for sales
  const sales = [
    {
      id: "SALE-001",
      customerName: "ນາງ ສົມໃຈ ວົງສະວັນ",
      vehicle: "Toyota Camry 2020",
      salePrice: 180000000,
      paymentStatus: "ຊຳລະເຕັມ",
      paymentMethod: "ເງິນສົດ",
      saleDate: "2024-01-15",
      salesperson: "ທ້າວ ວິໄລ",
      commission: 1800000,
      documents: ["ສັນຍາຂາຍ", "ໃບຮັບເງິນ", "ໂອນຊື່"]
    },
    {
      id: "SALE-002", 
      customerName: "ທ້າວ ບຸນມີ ລາວົງ",
      vehicle: "Honda City 2019",
      salePrice: 120000000,
      paymentStatus: "ຜ່ອນ",
      paymentMethod: "ຜ່ອນ 36 ເດືອນ",
      saleDate: "2024-01-20",
      salesperson: "ນາງ ນ້ອຍ",
      commission: 1200000,
      documents: ["ສັນຍາຂາຍ", "ສັນຍາຜ່ອນ"]
    },
    {
      id: "SALE-003",
      customerName: "ນາງ ນ້ອຍ ພັນນະວົງ", 
      vehicle: "Mazda CX-5 2021",
      salePrice: 250000000,
      paymentStatus: "ມັດຈຳ",
      paymentMethod: "ມັດຈຳ 50%",
      saleDate: "2024-01-22",
      salesperson: "ທ້າວ ສົມຊາຍ",
      commission: 2500000,
      documents: ["ສັນຍາຂາຍ", "ໃບຮັບມັດຈຳ"]
    }
  ];

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "ຊຳລະເຕັມ":
        return "bg-green-100 text-green-800";
      case "ຜ່ອນ":
        return "bg-blue-100 text-blue-800";
      case "ມັດຈຳ":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('lo-LA').format(price) + " ກີບ";
  };

  const filteredSales = sales.filter(sale =>
    sale.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sale.vehicle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sale.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">ຈັດການການຂາຍ</h1>
            <p className="text-muted-foreground">ບັນທຶກ ແລະ ຕິດຕາມການຂາຍລົດ</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            ບັນທຶກການຂາຍໃໝ່
          </Button>
        </div>

        <Tabs defaultValue="sales" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="sales">ລາຍການຂາຍ</TabsTrigger>
            <TabsTrigger value="payments">ການຈ່າຍເງິນ</TabsTrigger>
            <TabsTrigger value="receipts">ໃບຮັບເງິນ</TabsTrigger>
            <TabsTrigger value="analytics">ວິເຄາະການຂາຍ</TabsTrigger>
          </TabsList>

          <TabsContent value="sales" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ຄົ້ນຫາການຂາຍ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="ຄົ້ນຫາຕາມລູກຄ້າ, ລົດ, ລະຫັດການຂາຍ..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">ກັ່ນຕອງ</Button>
                </div>
              </CardContent>
            </Card>

            {/* Sales List */}
            <div className="space-y-4">
              {filteredSales.map((sale) => (
                <Card key={sale.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {sale.id}
                          <Badge className={getPaymentStatusColor(sale.paymentStatus)}>
                            {sale.paymentStatus}
                          </Badge>
                        </CardTitle>
                        <CardDescription className="mt-2">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <p><strong>ລູກຄ້າ:</strong> {sale.customerName}</p>
                              <p><strong>ລົດ:</strong> {sale.vehicle}</p>
                            </div>
                            <div>
                              <p><strong>ລາຄາຂາຍ:</strong> {formatPrice(sale.salePrice)}</p>
                              <p><strong>ວິທີຈ່າຍ:</strong> {sale.paymentMethod}</p>
                            </div>
                            <div>
                              <p><strong>ວັນທີ່ຂາຍ:</strong> {new Date(sale.saleDate).toLocaleDateString('lo-LA')}</p>
                              <p><strong>ພະນັກງານຂາຍ:</strong> {sale.salesperson}</p>
                            </div>
                          </div>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {sale.documents.map((doc, index) => (
                          <Badge key={index} variant="outline">
                            <FileText className="h-3 w-3 mr-1" />
                            {doc}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          ເບິ່ງ
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          ແກ້ໄຂ
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" />
                          ພິມໃບຮັບ
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>ການຈ່າຍເງິນ ແລະ ຜ່ອນ</CardTitle>
                <CardDescription>ຕິດຕາມສະຖານະການຈ່າຍເງິນຂອງລູກຄ້າ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sales.filter(s => s.paymentStatus !== "ຊຳລະເຕັມ").map((sale) => (
                    <div key={sale.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">{sale.customerName}</h4>
                          <p className="text-sm text-muted-foreground">{sale.vehicle}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{formatPrice(sale.salePrice)}</p>
                          <p className="text-sm text-muted-foreground">{sale.paymentMethod}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="receipts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>ໃບຮັບເງິນ ແລະ ໃບບິນ</CardTitle>
                <CardDescription>ຈັດການໃບຮັບເງິນ ແລະ ເອກະສານການຂາຍ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sales.map((sale) => (
                    <Card key={sale.id} className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{sale.id}</h4>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" />
                          ດາວໂຫຼດ
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">{sale.customerName}</p>
                      <p className="text-sm font-medium">{formatPrice(sale.salePrice)}</p>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            {/* Sales Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">ການຂາຍເດືອນນີ້</p>
                      <p className="text-2xl font-bold text-primary">{sales.length}</p>
                    </div>
                    <ShoppingCart className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">ລາຍຮັບເດືອນນີ້</p>
                      <p className="text-2xl font-bold text-green-600">
                        {formatPrice(sales.reduce((sum, sale) => sum + sale.salePrice, 0))}
                      </p>
                    </div>
                    <CreditCard className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">ລໍຖ້າຊຳລະ</p>
                      <p className="text-2xl font-bold text-yellow-600">
                        {sales.filter(s => s.paymentStatus === "ມັດຈຳ").length}
                      </p>
                    </div>
                    <Clock className="h-8 w-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">ສຳເລັດແລ້ວ</p>
                      <p className="text-2xl font-bold text-green-600">
                        {sales.filter(s => s.paymentStatus === "ຊຳລະເຕັມ").length}
                      </p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default SalesManagement;