import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Users, DollarSign, FileText, Plus, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/layout/AdminLayout";

const AdminDashboard = () => {
  const stats = [
    {
      title: "ລົດທັງໝົດ",
      value: "45",
      description: "ລົດໃນສາງ",
      icon: Car,
      color: "text-blue-600"
    },
    {
      title: "ລູກຄ້າ",
      value: "127",
      description: "ລູກຄ້າທັງໝົດ",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "ຍອດຂາຍເດືອນນີ້",
      value: "12",
      description: "ຄັນ",
      icon: DollarSign,
      color: "text-yellow-600"
    },
    {
      title: "ລາຍງານ",
      value: "8",
      description: "ລາຍງານໃໝ່",
      icon: FileText,
      color: "text-purple-600"
    }
  ];

  const quickActions = [
    {
      title: "ເພີ່ມລົດໃໝ່",
      description: "ເພີ່ມລົດເຂົ້າສາງ",
      icon: Plus,
      link: "/admin/vehicles/add",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      title: "ດູລາຍການລົດ",
      description: "ຈັດການລົດທັງໝົດ",
      icon: Eye,
      link: "/admin/vehicles",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      title: "ລູກຄ້າໃໝ່",
      description: "ເພີ່ມລູກຄ້າໃໝ່",
      icon: Plus,
      link: "/admin/customers/add",
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      title: "ບັນທຶກການຂາຍ",
      description: "ບັນທຶກການຂາຍໃໝ່",
      icon: DollarSign,
      link: "/admin/sales/add",
      color: "bg-yellow-500 hover:bg-yellow-600"
    }
  ];

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">VTN Motor Admin</h1>
          <p className="text-muted-foreground">ລະບົບຈັດການຮ້ານລົດມື 2</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">ການດຳເນີນງານດ່ວນ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.link}>
                <Button className={`w-full h-auto p-6 ${action.color} text-white`}>
                  <div className="flex flex-col items-center space-y-2">
                    <action.icon className="h-8 w-8" />
                    <div className="text-center">
                      <div className="font-semibold">{action.title}</div>
                      <div className="text-sm opacity-90">{action.description}</div>
                    </div>
                  </div>
                </Button>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>ກິດຈະກຳຫຼ້າສຸດ</CardTitle>
            <CardDescription>ກິດຈະກຳທີ່ເກີດຂຶ້ນຫຼ້າສຸດຂອງລະບົບ</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">ຂາຍລົດ Toyota Camry 2020 ສຳເລັດ</p>
                  <p className="text-xs text-muted-foreground">5 ນາທີຜ່ານມາ</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">ເພີ່ມລົດ Honda City 2019 ເຂົ້າສາງ</p>
                  <p className="text-xs text-muted-foreground">15 ນາທີຜ່ານມາ</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">ລູກຄ້າໃໝ່ ນາງ ສົມໃຈ ລົງທະບຽນ</p>
                  <p className="text-xs text-muted-foreground">30 ນາທີຜ່ານມາ</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;