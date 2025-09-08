import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Edit, Eye, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/layout/AdminLayout";

const CustomerManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for customers
  const customers = [
    {
      id: 1,
      name: "ນາງ ສົມໃຈ ວົງສະວັນ",
      phone: "020 5555 1234",
      email: "somjai@email.com",
      address: "ບ້ານ ນາໄຜ່, ເມືອງ ຈັນທະບູລີ, ນະຄອນຫຼວງວຽງຈັນ",
      status: "ລູກຄ້າປົກກະຕິ",
      lastContact: "2024-01-15",
      totalPurchases: 1,
      notes: "ສົນໃຈລົດ SUV"
    },
    {
      id: 2,
      name: "ທ້າວ ບຸນມີ ລາວົງ",
      phone: "020 9999 5678",
      email: "bounmee@email.com",
      address: "ບ້ານ ດົງປະລານ, ເມືອງ ໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ",
      status: "ລູກຄ້າ VIP",
      lastContact: "2024-01-20",
      totalPurchases: 3,
      notes: "ປະຈຳລູກຄ້າທີ່ດີ"
    },
    {
      id: 3,
      name: "ນາງ ນອ້ຍ ພັນນະວົງ",
      phone: "020 7777 9876",
      email: "noy@email.com",
      address: "ບ້ານ ຫາດຊາຍ, ເມືອງ ຫາດຊາຍຟອງ, ວຽງຈັນ",
      status: "ລູກຄ້າໃໝ່",
      lastContact: "2024-01-22",
      totalPurchases: 0,
      notes: "ສົນໃຈລົດຂະໜາດນ້ອຍ"
    },
    {
      id: 4,
      name: "ທ້າວ ວິໄລ ຄຳພາ",
      phone: "020 3333 4567",
      email: "vilai@email.com",
      address: "ບ້ານ ສີສັດຕະນາກ, ເມືອງ ສີສັດຕະນາກ, ນະຄອນຫຼວງວຽງຈັນ",
      status: "ລູກຄ້າປົກກະຕິ",
      lastContact: "2024-01-18",
      totalPurchases: 1,
      notes: "ມີຄວາມສົນໃຈໃນລົດໃໝ່"
    }
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ລູກຄ້າ VIP":
        return "bg-yellow-100 text-yellow-800";
      case "ລູກຄ້າປົກກະຕິ":
        return "bg-green-100 text-green-800";
      case "ລູກຄ້າໃໝ່":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">ຈັດການລູກຄ້າ</h1>
            <p className="text-muted-foreground">ຈັດການຂໍ້ມູນລູກຄ້າທັງໝົດ</p>
          </div>
          <Link to="/admin/customers/add">
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              ເພີ່ມລູກຄ້າໃໝ່
            </Button>
          </Link>
        </div>

        {/* Search */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">ຄົ້ນຫາລູກຄ້າ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="ຄົ້ນຫາຕາມຊື່, ເບີໂທ, ອີເມວ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Customer List */}
        <div className="space-y-4">
          {filteredCustomers.map((customer) => (
            <Card key={customer.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{customer.name}</CardTitle>
                    <CardDescription className="mt-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          {customer.phone}
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          {customer.email}
                        </div>
                      </div>
                      <p className="mt-2"><strong>ທີ່ຢູ່:</strong> {customer.address}</p>
                      <p className="mt-1"><strong>ຫມາຍເຫດ:</strong> {customer.notes}</p>
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(customer.status)}>
                    {customer.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium">ຕິດຕໍ່ຄັ້ງສຸດທ້າຍ:</span>
                      <br />
                      {new Date(customer.lastContact).toLocaleDateString('lo-LA')}
                    </div>
                    <div>
                      <span className="font-medium">ຈຳນວນການຊື້:</span>
                      <br />
                      {customer.totalPurchases} ຄັ້ງ
                    </div>
                    <div>
                      <span className="font-medium">ລະຫັດລູກຄ້າ:</span>
                      <br />
                      CUS-{customer.id.toString().padStart(4, '0')}
                    </div>
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
                      <Phone className="h-4 w-4 mr-1" />
                      ໂທ
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customer Statistics */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>ສະຖິຕິລູກຄ້າ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {customers.length}
                </div>
                <div className="text-sm text-muted-foreground">ລູກຄ້າທັງໝົດ</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {customers.filter(c => c.status === "ລູກຄ້າ VIP").length}
                </div>
                <div className="text-sm text-muted-foreground">ລູກຄ້າ VIP</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {customers.filter(c => c.status === "ລູກຄ້າປົກກະຕິ").length}
                </div>
                <div className="text-sm text-muted-foreground">ລູກຄ້າປົກກະຕິ</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {customers.filter(c => c.status === "ລູກຄ້າໃໝ່").length}
                </div>
                <div className="text-sm text-muted-foreground">ລູກຄ້າໃໝ່</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default CustomerManagement;