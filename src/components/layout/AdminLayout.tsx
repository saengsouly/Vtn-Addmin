import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Users, 
  FileText, 
  BarChart3, 
  Settings, 
  Menu, 
  X,
  Home,
  ShoppingCart,
  CreditCard,
  UserCheck,
  FileBarChart,
  Shield,
  Bell,
  Search
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { 
      title: "ໜ້າຫຼັກ", 
      icon: Home, 
      path: "/admin", 
      description: "ພາບລວມລະບົບ" 
    },
    { 
      title: "ຈັດການລົດ", 
      icon: Car, 
      path: "/admin/vehicles", 
      description: "ເພີ່ມ, ແກ້ໄຂ, ລຶບລົດ",
      badge: "12"
    },
    { 
      title: "ຈັດການລູກຄ້າ", 
      icon: Users, 
      path: "/admin/customers", 
      description: "ຂໍ້ມູນລູກຄ້າ ແລະ CRM",
      badge: "45"
    },
    { 
      title: "ການຂາຍ", 
      icon: ShoppingCart, 
      path: "/admin/sales", 
      description: "ບັນທຶກການຂາຍ ແລະ ໃບຮັບ"
    },
    { 
      title: "ການເງິນ", 
      icon: CreditCard, 
      path: "/admin/finance", 
      description: "ລາຍຮັບ, ລາຍຈ່າຍ, ຜ່ອນ"
    },
    { 
      title: "ເອກະສານ", 
      icon: FileText, 
      path: "/admin/documents", 
      description: "ທະບຽນ, ປະກັນ, ສັນຍາ"
    },
    { 
      title: "ພະນັກງານ", 
      icon: UserCheck, 
      path: "/admin/staff", 
      description: "ຈັດການພະນັກງານ ແລະ ສິດ"
    },
    { 
      title: "ລາຍງານ", 
      icon: BarChart3, 
      path: "/admin/reports", 
      description: "ວິເຄາະ ແລະ ສະຖິຕິ"
    },
    { 
      title: "ຄວາມປອດໄພ", 
      icon: Shield, 
      path: "/admin/security", 
      description: "ການຄຸ້ມຄອງຄວາມປອດໄພ"
    },
    { 
      title: "ຕັ້ງຄ່າ", 
      icon: Settings, 
      path: "/admin/settings", 
      description: "ການຕັ້ງຄ່າລະບົບ"
    }
  ];

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className={cn(
        "bg-sidebar border-r border-sidebar-border transition-all duration-300 relative",
        sidebarOpen ? "w-80" : "w-16"
      )}>
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <div>
                <h1 className="text-xl font-bold text-sidebar-primary">VTN MOTOR</h1>
                <p className="text-sm text-sidebar-foreground/70">ລະບົບຈັດການລົດມື 2</p>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="h-8 w-8 p-0"
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <div className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Card className={cn(
                "group hover:bg-sidebar-accent transition-all duration-200 cursor-pointer",
                isActiveRoute(item.path) && "bg-sidebar-accent border-sidebar-primary/20"
              )}>
                <CardContent className="p-3">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "p-2 rounded-lg transition-colors",
                      isActiveRoute(item.path) 
                        ? "bg-sidebar-primary text-sidebar-primary-foreground" 
                        : "bg-sidebar-background group-hover:bg-sidebar-primary group-hover:text-sidebar-primary-foreground"
                    )}>
                      <item.icon className="h-4 w-4" />
                    </div>
                    {sidebarOpen && (
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-sidebar-foreground truncate">
                            {item.title}
                          </h3>
                          {item.badge && (
                            <Badge variant="secondary" className="ml-2 text-xs">
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-sidebar-foreground/70 truncate">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-card border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="ຄົ້ນຫາທົ່ວໄປ..."
                  className="pl-10 pr-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring w-96"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-medium">A</span>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Admin</p>
                  <p className="text-muted-foreground">VTN Motor</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;