import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Edit, Trash2, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/layout/AdminLayout";

const VehicleManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for vehicles
  const vehicles = [
    {
      id: 1,
      brand: "Toyota",
      model: "Camry",
      year: 2020,
      price: 180000000,
      condition: "ດີເລີດ",
      status: "ໃນສາງ",
      mileage: "45,000 km",
      color: "ສີຂາວ",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      brand: "Honda",
      model: "City",
      year: 2019,
      price: 120000000,
      condition: "ດີ",
      status: "ຂາຍແລ້ວ",
      mileage: "67,000 km",
      color: "ສີດຳ",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      brand: "Mazda",
      model: "CX-5",
      year: 2021,
      price: 250000000,
      condition: "ດີເລີດ",
      status: "ໃນສາງ",
      mileage: "28,000 km",
      color: "ສີແດງ",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      brand: "Nissan",
      model: "Almera",
      year: 2018,
      price: 95000000,
      condition: "ປົກກະຕິ",
      status: "ໃນສາງ",
      mileage: "89,000 km",
      color: "ສີເງິນ",
      image: "/placeholder.svg"
    }
  ];

  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.year.toString().includes(searchTerm)
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ໃນສາງ":
        return "bg-green-100 text-green-800";
      case "ຂາຍແລ້ວ":
        return "bg-gray-100 text-gray-800";
      case "ຈອງແລ້ວ":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('lo-LA').format(price) + " ກີບ";
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">ຈັດການລາຍການລົດ</h1>
            <p className="text-muted-foreground">ຈັດການລົດທັງໝົດໃນສາງ</p>
          </div>
          <Link to="/admin/vehicles/add">
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              ເພີ່ມລົດໃໝ່
            </Button>
          </Link>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">ຄົ້ນຫາ ແລະ ກັ່ນຕອງ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="ຄົ້ນຫາຕາມຍີ່ຫໍ້, ຮຸ່ນ, ປີ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">ກັ່ນຕອງ</Button>
            </div>
          </CardContent>
        </Card>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  className="w-full h-48 object-cover"
                />
                <Badge className={`absolute top-2 right-2 ${getStatusColor(vehicle.status)}`}>
                  {vehicle.status}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">
                  {vehicle.brand} {vehicle.model} {vehicle.year}
                </CardTitle>
                <CardDescription>
                  <div className="space-y-1">
                    <p><span className="font-medium">ລາຄາ:</span> {formatPrice(vehicle.price)}</p>
                    <p><span className="font-medium">ສະພາບ:</span> {vehicle.condition}</p>
                    <p><span className="font-medium">ໄມລ໌:</span> {vehicle.mileage}</p>
                    <p><span className="font-medium">ສີ:</span> {vehicle.color}</p>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-1" />
                    ເບິ່ງ
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="h-4 w-4 mr-1" />
                    ແກ້ໄຂ
                  </Button>
                  <Button variant="destructive" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>ສະຫຼຸບຂໍ້ມູນ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {vehicles.filter(v => v.status === "ໃນສາງ").length}
                </div>
                <div className="text-sm text-muted-foreground">ລົດໃນສາງ</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {vehicles.filter(v => v.status === "ຂາຍແລ້ວ").length}
                </div>
                <div className="text-sm text-muted-foreground">ຂາຍແລ້ວ</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {vehicles.filter(v => v.status === "ຈອງແລ້ວ").length}
                </div>
                <div className="text-sm text-muted-foreground">ຈອງແລ້ວ</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {vehicles.length}
                </div>
                <div className="text-sm text-muted-foreground">ລົດທັງໝົດ</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default VehicleManagement;