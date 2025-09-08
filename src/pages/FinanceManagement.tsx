import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, TrendingUp, TrendingDown, DollarSign, CreditCard, Calendar, FileText } from "lucide-react";
import AdminLayout from "@/components/layout/AdminLayout";

const FinanceManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock financial data
  const transactions = [
    {
      id: "TXN-001",
      type: "ລາຍຮັບ",
      category: "ການຂາຍລົດ",
      description: "ຂາຍ Toyota Camry 2020",
      amount: 180000000,
      date: "2024-01-15",
      reference: "SALE-001",
      status: "ສຳເລັດ"
    },
    {
      id: "TXN-002", 
      type: "ລາຍຈ່າຍ",
      category: "ຊື້ລົດເຂົ້າ",
      description: "ຊື້ Honda City 2019",
      amount: 95000000,
      date: "2024-01-10",
      reference: "PUR-001",
      status: "ສຳເລັດ"
    },
    {
      id: "TXN-003",
      type: "ລາຍຮັບ",
      category: "ມັດຈຳ",
      description: "ມັດຈຳ Mazda CX-5",
      amount: 125000000,
      date: "2024-01-22",
      reference: "SALE-003",
      status: "ສຳເລັດ"
    },
    {
      id: "TXN-004",
      type: "ລາຍຈ່າຍ", 
      category: "ຄ່າດຳເນີນງານ",
      description: "ຄ່າໄຟ, ນ້ຳ, ອິນເຕີເນັດ",
      amount: 2500000,
      date: "2024-01-01",
      reference: "OPR-001",
      status: "ສຳເລັດ"
    }
  ];

  const installments = [
    {
      id: "INST-001",
      customerName: "ທ້າວ ບຸນມີ ລາວົງ",
      vehicle: "Honda City 2019",
      totalAmount: 120000000,
      monthlyPayment: 3500000,
      paidInstallments: 6,
      totalInstallments: 36,
      nextDueDate: "2024-02-15",
      status: "ປົກກະຕິ"
    },
    {
      id: "INST-002",
      customerName: "ນາງ ມານີ ວົງດາລາ",
      vehicle: "Nissan Almera 2018", 
      totalAmount: 95000000,
      monthlyPayment: 2800000,
      paidInstallments: 12,
      totalInstallments: 48,
      nextDueDate: "2024-02-10",
      status: "ຊ້າ"
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('lo-LA').format(price) + " ກີບ";
  };

  const getTransactionColor = (type: string) => {
    return type === "ລາຍຮັບ" ? "text-green-600" : "text-red-600";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ສຳເລັດ":
      case "ປົກກະຕິ":
        return "bg-green-100 text-green-800";
      case "ຊ້າ":
        return "bg-red-100 text-red-800";
      case "ລໍຖ້າ":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const totalIncome = transactions
    .filter(t => t.type === "ລາຍຮັບ")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === "ລາຍຈ່າຍ")
    .reduce((sum, t) => sum + t.amount, 0);

  const netProfit = totalIncome - totalExpense;

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">ຈັດການການເງິນ</h1>
            <p className="text-muted-foreground">ລາຍຮັບ, ລາຍຈ່າຍ, ແລະ ການຜ່ອນຊຳລະ</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            ເພີ່ມລາຍການໃໝ່
          </Button>
        </div>

        {/* Financial Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">ລາຍຮັບລວມ</p>
                  <p className="text-2xl font-bold text-green-600">{formatPrice(totalIncome)}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">ລາຍຈ່າຍລວມ</p>
                  <p className="text-2xl font-bold text-red-600">{formatPrice(totalExpense)}</p>
                </div>
                <TrendingDown className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">ກຳໄລສຸດທິ</p>
                  <p className={`text-2xl font-bold ${netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatPrice(netProfit)}
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">ລູກຄ້າຜ່ອນ</p>
                  <p className="text-2xl font-bold text-blue-600">{installments.length}</p>
                </div>
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="transactions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="transactions">ລາຍການເງິນ</TabsTrigger>
            <TabsTrigger value="installments">ການຜ່ອນຊຳລະ</TabsTrigger>
            <TabsTrigger value="reports">ລາຍງານການເງິນ</TabsTrigger>
            <TabsTrigger value="banking">ທະນາຄານ</TabsTrigger>
          </TabsList>

          <TabsContent value="transactions" className="space-y-6">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ຄົ້ນຫາລາຍການ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="ຄົ້ນຫາລາຍການເງິນ..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">ກັ່ນຕອງ</Button>
                </div>
              </CardContent>
            </Card>

            {/* Transactions List */}
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <Card key={transaction.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-medium">{transaction.id}</h3>
                          <Badge className={getStatusColor(transaction.status)}>
                            {transaction.status}
                          </Badge>
                          <Badge variant="outline">
                            {transaction.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {transaction.description}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          ວັນທີ່: {new Date(transaction.date).toLocaleDateString('lo-LA')} | 
                          ອ້າງອີງ: {transaction.reference}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className={`text-xl font-bold ${getTransactionColor(transaction.type)}`}>
                          {transaction.type === "ລາຍຮັບ" ? "+" : "-"}{formatPrice(transaction.amount)}
                        </p>
                        <p className="text-sm text-muted-foreground">{transaction.type}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="installments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>ການຜ່ອນຊຳລະ</CardTitle>
                <CardDescription>ຕິດຕາມລູກຄ້າທີ່ຊື້ລົດແບບຜ່ອນ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {installments.map((installment) => (
                    <Card key={installment.id} className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-medium">{installment.customerName}</h4>
                            <Badge className={getStatusColor(installment.status)}>
                              {installment.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {installment.vehicle}
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">ລາຄາລວມ:</p>
                              <p className="font-medium">{formatPrice(installment.totalAmount)}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">ຜ່ອນເດືອນລະ:</p>
                              <p className="font-medium">{formatPrice(installment.monthlyPayment)}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">ຄືນແລ້ວ:</p>
                              <p className="font-medium">
                                {installment.paidInstallments}/{installment.totalInstallments} ງວດ
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">ງວດຕໍ່ໄປ:</p>
                              <p className="font-medium">
                                {new Date(installment.nextDueDate).toLocaleDateString('lo-LA')}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            ບັນທຶກຄືນ
                          </Button>
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-1" />
                            ເບິ່ງລາຍລະອຽດ
                          </Button>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mt-4">
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ 
                              width: `${(installment.paidInstallments / installment.totalInstallments) * 100}%` 
                            }}
                          ></div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          ຄືນແລ້ວ {Math.round((installment.paidInstallments / installment.totalInstallments) * 100)}%
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>ລາຍງານການເງິນ</CardTitle>
                <CardDescription>ສະຫຼຸບການເງິນແບບລາຍເດືອນ ແລະ ປີ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">ລາຍງານເດືອນນີ້</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>ລາຍຮັບ:</span>
                        <span className="text-green-600 font-medium">{formatPrice(totalIncome)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ລາຍຈ່າຍ:</span>
                        <span className="text-red-600 font-medium">{formatPrice(totalExpense)}</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-medium">ກຳໄລ:</span>
                        <span className={`font-bold ${netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {formatPrice(netProfit)}
                        </span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-medium mb-2">ການຂາຍ</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>ລົດຂາຍແລ້ວ:</span>
                        <span className="font-medium">3 ຄັນ</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ລາຄາສະເລ່ຍ:</span>
                        <span className="font-medium">{formatPrice(totalIncome / 3)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ລາຍຮັບລວມ:</span>
                        <span className="font-medium text-green-600">{formatPrice(totalIncome)}</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-medium mb-2">ການຜ່ອນ</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>ລູກຄ້າຜ່ອນ:</span>
                        <span className="font-medium">{installments.length} ຄົນ</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ລາຍຮັບຜ່ອນ:</span>
                        <span className="font-medium text-blue-600">
                          {formatPrice(installments.reduce((sum, inst) => sum + inst.monthlyPayment, 0))}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>ຊ້າຊຳລະ:</span>
                        <span className="font-medium text-red-600">
                          {installments.filter(i => i.status === "ຊ້າ").length} ຄົນ
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="banking" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>ການຮ່ວມມືກັບທະນາຄານ</CardTitle>
                <CardDescription>ຈັດການເງິນກູ້ ແລະ ການຮ່ວມມືກັບສະຖາບັນການເງິນ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <h4 className="font-medium mb-4">ທະນາຄານພາຄີ</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium">ທະນາຄານລາວ-ຫວຽດ</h5>
                        <p className="text-sm text-muted-foreground">ດອກເບ້ຍ: 8.5% ຕໍ່ປີ</p>
                        <p className="text-sm text-muted-foreground">ຜ່ອນສູງສຸດ: 7 ປີ</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium">ທະນາຄານ BCEL</h5>
                        <p className="text-sm text-muted-foreground">ດອກເບ້ຍ: 9.0% ຕໍ່ປີ</p>
                        <p className="text-sm text-muted-foreground">ຜ່ອນສູງສຸດ: 5 ປີ</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-medium mb-4">ສະຖິຕິເງິນກູ້</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>ລູກຄ້າຂໍກູ້:</span>
                        <span className="font-medium">15 ຄົນ</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ອະນຸມັດແລ້ວ:</span>
                        <span className="font-medium text-green-600">12 ຄົນ</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ປະຕິເສດ:</span>
                        <span className="font-medium text-red-600">3 ຄົນ</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span>ອັດຕາສຳເລັດ:</span>
                        <span className="font-bold text-primary">80%</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default FinanceManagement;