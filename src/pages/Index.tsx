import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Users, Settings, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">VTN Motor Hub</h1>
          <p className="text-xl mb-8">ລະບົບຈັດການຮ້ານລົດມື 2 VTN MOTOR</p>
          {/* <Link to="/admin">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              ເຂົ້າສູ່ລະບົບ Admin
            </Button>
          </Link> */}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">ຄຸນສົມບັດຂອງລະບົບ</h2>
            <p className="text-muted-foreground text-lg">ລະບົບການຈັດການຮ້ານຂາຍລົດ ມື2 vtn motor</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Car className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <CardTitle>ຈັດການລົດ</CardTitle>
                <CardDescription>
                  ເພີ່ມ, ແກ້ໄຂ, ລຶບ ແລະ ຕິດຕາມລາຍການລົດທັງໝົດ
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <CardTitle>ຈັດການລູກຄ້າ</CardTitle>
                <CardDescription>
                  ບັນທຶກຂໍ້ມູນລູກຄ້າ, ປະຫວັດການຊື້, ການຕິດຕໍ່
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <BarChart3 className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <CardTitle>ລາຍງານການຂາຍ</CardTitle>
                <CardDescription>
                  ດູສະຖິຕິການຂາຍ, ກຳໄລ, ແລະ ການວິເຄາະ
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <Settings className="h-12 w-12 mx-auto mb-4 text-yellow-600" />
                <CardTitle>ການຕັ້ງຄ່າ</CardTitle>
                <CardDescription>
                  ຈັດການພະນັກງານ, ສິດການເຂົ້າເຖິງ, ແລະ ການຕັ້ງຄ່າລະບົບ
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">ເລີ່ມຕົ້ນໃຊ້ງານມື້ນີ້</h2>
          <p className="text-muted-foreground text-lg mb-8">
            ລະບົບການຈັດການ Addmin ສຳລັບຮ້ານລົດມື 2 ຂອງຮ້ານ vtn mortor
          </p>
          <Link to="/admin">
            <Button size="lg" className="mr-4">
              ເຂົ້າສູ່ລະບົບ
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            ຕິດຕໍ່ເພື່ອທີ່ປືກສາ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
