import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "@/components/ui/chart"
import {
  Bell,
  Search,
  Settings,
  Menu,
  Home,
  Map,
  Users,
  Package,
  AlertTriangle,
  BarChart3,
  Calendar,
  MessageSquare,
  LogOut,
  ArrowUp,
  ArrowDown,
  DrillIcon as Drone,
  Truck,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#003049] text-white">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-16 lg:w-64 border-r border-[#00436A] p-4">
        <div className="flex items-center justify-center lg:justify-start mb-10 lg:space-x-2">
          <AlertTriangle className="h-8 w-8 text-[#C1121F]" />
          <span className="hidden lg:inline font-bold text-xl">ResQ-Tech</span>
        </div>

        <nav className="flex flex-col space-y-2 flex-1">
          {[
            { icon: <Home className="h-5 w-5" />, label: "Dashboard", active: true },
            { icon: <Map className="h-5 w-5" />, label: "Map View" },
            { icon: <Users className="h-5 w-5" />, label: "Teams" },
            { icon: <Package className="h-5 w-5" />, label: "Resources" },
            { icon: <AlertTriangle className="h-5 w-5" />, label: "Incidents" },
            { icon: <BarChart3 className="h-5 w-5" />, label: "Analytics" },
            { icon: <Calendar className="h-5 w-5" />, label: "Schedule" },
            { icon: <MessageSquare className="h-5 w-5" />, label: "Messages" },
          ].map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "secondary" : "ghost"}
              className={`flex justify-center lg:justify-start items-center h-12 px-3 ${item.active ? "bg-[#00436A] text-teal-200" : "hover:bg-[#00436A] hover:text-teal-200"}`}
            >
              <span className="lg:mr-3">{item.icon}</span>
              <span className="hidden lg:inline">{item.label}</span>
              {item.active && <div className="absolute left-0 w-1 h-12 bg-[#C1121F] rounded-r-full"></div>}
            </Button>
          ))}
        </nav>

        <div className="mt-auto">
          <Button
            variant="ghost"
            className="flex justify-center lg:justify-start items-center w-full h-12 px-3 hover:bg-[#00436A]"
          >
            <span className="lg:mr-3">
              <Settings className="h-5 w-5" />
            </span>
            <span className="hidden lg:inline">Settings</span>
          </Button>
          <Button
            variant="ghost"
            className="flex justify-center lg:justify-start items-center w-full h-12 px-3 hover:bg-[#00436A]"
          >
            <span className="lg:mr-3">
              <LogOut className="h-5 w-5" />
            </span>
            <span className="hidden lg:inline">Logout</span>
          </Button>
        </div>
      </aside>

      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <Button size="icon" className="h-12 w-12 rounded-full bg-[#C1121F] hover:bg-[#780000] shadow-lg">
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Top navbar */}
        <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 border-b border-[#00436A] bg-[#003049]">
          <div className="flex items-center md:hidden">
            <AlertTriangle className="h-6 w-6 text-[#C1121F]" />
            <span className="font-bold text-lg ml-2">ResQ-Tech</span>
          </div>

          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md">
            <Search className="h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search incidents, resources..."
              className="bg-[#00436A] border-[#00436A] focus-visible:ring-[#669BBC] text-white"
            />
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-[#C1121F]"></span>
            </Button>
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-8 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=32&width=32" alt="User avatar" fill className="object-cover" />
              </div>
              <span className="hidden lg:inline font-medium">Dear User</span>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-1">Disaster Response Dashboard</h1>
            <p className="text-gray-400">Hurricane Maria Recovery Operation • Puerto Rico</p>
          </div>

          {/* Status cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              {
                title: "Active Incidents",
                value: "24",
                change: "+3",
                trend: "up",
                icon: <AlertTriangle className="h-8 w-8 text-[#C1121F]" />,
              },
              {
                title: "Deployed Teams",
                value: "18",
                change: "+2",
                trend: "up",
                icon: <Users className="h-8 w-8 text-[#669BBC]" />,
              },
              {
                title: "Resource Utilization",
                value: "78%",
                change: "-5%",
                trend: "down",
                icon: <Package className="h-8 w-8 text-[#FDF0D5]" />,
              },
              {
                title: "Avg. Response Time",
                value: "14 min",
                change: "-3 min",
                trend: "down",
                icon: <Clock className="h-8 w-8 text-[#669BBC]" />,
              },
            ].map((card, index) => (
              <Card key={index} className="bg-[#00436A] border-none">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white text-sm mb-1">{card.title}</p>
                      <p className="text-3xl font-bold">{card.value}</p>
                      <div className="flex items-center mt-1">
                        {card.trend === "up" ? (
                          <ArrowUp className="h-3 w-3 text-[#C1121F] mr-1" />
                        ) : (
                          <ArrowDown className="h-3 w-3 text-[#669BBC] mr-1" />
                        )}
                        <span className={`text-xs ${card.trend === "up" ? "text-[#C1121F]" : "text-[#669BBC]"}`}>
                          {card.change} since yesterday
                        </span>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#003049]">{card.icon}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main content area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Activity chart */}
              <Card className="bg-[#00436A] border-none">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>Incident Activity</CardTitle>
                    <Tabs defaultValue="7days">
                      <TabsList className="bg-[#003049]">
                        <TabsTrigger value="24h">24h</TabsTrigger>
                        <TabsTrigger value="7days">7 days</TabsTrigger>
                        <TabsTrigger value="30days">30 days</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <Image
                      src="/linegraph.jpg"
                      alt="Incident Chart"
                      width={500}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Resource allocation */}
              <Card className="bg-[#00436A] border-none">
                <CardHeader>
                  <CardTitle>Resource Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[518px]">
                     <Image
                      src="/res_alloc.png"
                      alt="Incident Chart"
                      width={500}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              {/* Deployment status */}
              <Card className="bg-[#00436A] border-none">
                <CardHeader>
                  <CardTitle>Deployment Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px]">
                    <Image
                      src="/pie_chart.jpg"
                      alt="Incident Chart"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Active assets */}
              <Card className="bg-[#00436A] border-none">
                <CardHeader>
                  <CardTitle>Active Assets</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      name: "Reconnaissance Drones",
                      count: 8,
                      status: "Operational",
                      icon: <Drone className="h-5 w-5 text-[#669BBC]" />,
                    },
                    {
                      name: "Medical Teams",
                      count: 12,
                      status: "Deployed",
                      icon: <Users className="h-5 w-5 text-[#669BBC]" />,
                    },
                    {
                      name: "Supply Vehicles",
                      count: 15,
                      status: "En Route",
                      icon: <Truck className="h-5 w-5 text-[#669BBC]" />,
                    },
                  ].map((asset, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-[#003049] rounded-lg">
                      <div className="flex items-center">
                        <div className="p-2 rounded-md bg-[#00436A] mr-3">{asset.icon}</div>
                        <div>
                          <p className="font-medium text-teal-200">{asset.name}</p>
                          <p className="text-sm text-gray-400">{asset.status}</p>
                        </div>
                      </div>
                      <Badge className="bg-[#00436A]">{asset.count}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent alerts */}
              <Card className="bg-[#00436A] border-none">
                <CardHeader>
                  <CardTitle>Recent Alerts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      message: "Flash flood warning in Sector 7",
                      time: "10 min ago",
                      severity: "high",
                    },
                    {
                      message: "Medical supplies running low at Camp B",
                      time: "25 min ago",
                      severity: "medium",
                    },
                    {
                      message: "Road cleared to northern district",
                      time: "1 hour ago",
                      severity: "low",
                    },
                  ].map((alert, index) => (
                    <div key={index} className="flex items-start p-3 bg-[#003049] rounded-lg">
                      <div
                        className={`h-2 w-2 rounded-full mt-1.5 mr-3 ${
                          alert.severity === "high"
                            ? "bg-[#C1121F]"
                            : alert.severity === "medium"
                              ? "bg-[#FDF0D5]"
                              : "bg-[#669BBC]"
                        }`}
                      ></div>
                      <div className="flex-1">
                        <p className="font-medium text-teal-200">{alert.message}</p>
                        <p className="text-xs text-gray-400">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="ghost" className="w-full text-[#669BBC] hover:text-[#669BBC] hover:bg-[#003049]">
                    View all alerts
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
