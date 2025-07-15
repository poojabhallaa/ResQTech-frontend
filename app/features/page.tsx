import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  DrillIcon as Drone,
  Map,
  Brain,
  Upload,
  Clock,
  Shield,
  BarChart3,
  Globe,
  Languages,
  Smartphone,
  Zap,
  Users,
  AlertTriangle,
  FileText,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#003049] text-white py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#C1121F] hover:bg-[#C1121F] text-4xl font-semibold rounded-[0.3rem] p-3 text-white">Features</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">Powerful Tools for Disaster Response</h1>
              <p className="text-xl text-gray-300">
                Explore the comprehensive suite of features that make ResQ-Tech the leading platform for emergency
                management.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src="/features.png"
                alt="ResQ-Tech features overview"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#365f79] hover:bg-[#669BBC] text-4xl font-semibold rounded-[0.3rem] p-3 text-white mb-4">Core Capabilities</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-4">Essential Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technologies to provide a comprehensive solution for disaster
              management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Drone className="h-12 w-12 text-[#C1121F]" />,
                title: "Drone Reconnaissance",
                description:
                  "YOLOv8-based aerial computer vision for rapid damage assessment and situational awareness.",
                details: [
                  "Real-time aerial imagery and video feeds",
                  "Automated damage classification and severity assessment",
                  "Heat mapping of affected areas",
                  "Obstacle detection for ground team navigation",
                ],
              },
              {
                icon: <Map className="h-12 w-12 text-[#C1121F]" />,
                title: "Smart Aid Routing",
                description:
                  "ML-based logistics optimization to ensure resources reach those who need them most efficiently.",
                details: [
                  "Dynamic route planning based on real-time conditions",
                  "Priority-based resource allocation algorithms",
                  "Bottleneck identification and resolution",
                  "Multi-vehicle coordination system",
                ],
              },
              {
                icon: <Brain className="h-12 w-12 text-[#C1121F]" />,
                title: "GenAI Briefings",
                description: "Multilingual situation summaries generated in real-time for all stakeholders.",
                details: [
                  "Automated report generation from multiple data sources",
                  "Real-time translation into 40+ languages",
                  "Customizable detail levels for different stakeholders",
                  "Voice-to-text and text-to-voice capabilities",
                ],
              },
              {
                icon: <Clock className="h-12 w-12 text-[#C1121F]" />,
                title: "Live Log Dashboard",
                description: "Real-time data and metrics to monitor response efforts and resource allocation.",
                details: [
                  "Customizable KPI tracking and visualization",
                  "Real-time activity feeds and status updates",
                  "Resource utilization monitoring",
                  "Automated alerting for critical thresholds",
                ],
              },
              {
                icon: <Upload className="h-12 w-12 text-[#C1121F]" />,
                title: "Citizen Uploads (ArPut)",
                description: "User-generated visual data to enhance situational awareness and response.",
                details: [
                  "Mobile app for civilian reporting",
                  "AI-powered verification of submitted content",
                  "Geolocation tagging and timestamp validation",
                  "Integration with main assessment database",
                ],
              },
              {
                icon: <Shield className="h-12 w-12 text-[#C1121F]" />,
                title: "Secure Communications",
                description: "Encrypted channels for reliable information exchange during critical operations.",
                details: [
                  "End-to-end encrypted messaging",
                  "Offline-capable communication tools",
                  "Low-bandwidth optimization",
                  "Role-based access controls",
                ],
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-[#003049] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#C1121F] mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Spotlight */}
      <section className="py-20 px-6 md:px-10 bg-[#FDF0D5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#003049] hover:bg-[#003049] text-4xl font-semibold rounded-[0.3rem] p-3 text-white mb-4">Feature Spotlight</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-4">Drone Reconnaissance System</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A closer look at our flagship feature that revolutionizes disaster area assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src="/drone.png"
                alt="Drone reconnaissance system"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#003049]">How It Works</h3>
              <p className="text-gray-600">
                Our drone reconnaissance system combines autonomous flight capabilities with advanced computer vision to
                provide immediate situational awareness in disaster zones.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-[#003049] mb-2">1. Deployment</h4>
                  <p className="text-sm text-gray-600">
                    Drones are rapidly deployed to affected areas, automatically mapping optimal flight paths to
                    maximize coverage.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-[#003049] mb-2">2. Data Collection</h4>
                  <p className="text-sm text-gray-600">
                    High-resolution imagery, thermal scanning, and LiDAR data are collected in real-time and transmitted
                    to the central system.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-[#003049] mb-2">3. AI Analysis</h4>
                  <p className="text-sm text-gray-600">
                    YOLOv8-based computer vision algorithms analyze the data to identify damaged structures, blocked
                    roads, stranded individuals, and other critical elements.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-[#003049] mb-2">4. Actionable Intelligence</h4>
                  <p className="text-sm text-gray-600">
                    Results are immediately integrated into the ResQ-Tech platform, generating prioritized action items
                    for response teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#345b72] hover:bg-[#669BBC] text-4xl font-semibold rounded-[0.3rem] p-3 text-white mb-4">Enhanced Capabilities</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-4">Additional Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond our core capabilities, ResQ-Tech offers a range of specialized tools to address every aspect of
              disaster management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <BarChart3 className="h-8 w-8 text-[#669BBC]" />,
                title: "Predictive Analytics",
                description:
                  "Forecast resource needs and potential developments based on historical data and current conditions.",
              },
              {
                icon: <Globe className="h-8 w-8 text-[#669BBC]" />,
                title: "Offline Functionality",
                description:
                  "Critical features remain operational even when internet connectivity is limited or unavailable.",
              },
              {
                icon: <Languages className="h-8 w-8 text-[#669BBC]" />,
                title: "Cross-Agency Integration",
                description:
                  "Seamless data sharing and coordination between different organizations and government entities.",
              },
              {
                icon: <Smartphone className="h-8 w-8 text-[#669BBC]" />,
                title: "Mobile Field App",
                description: "Dedicated application for response teams with optimized interfaces for field conditions.",
              },
              {
                icon: <Zap className="h-8 w-8 text-[#669BBC]" />,
                title: "Resource Tracking",
                description:
                  "Real-time monitoring of supplies, equipment, and personnel with automated inventory management.",
              },
              {
                icon: <Users className="h-8 w-8 text-[#669BBC]" />,
                title: "Training Simulations",
                description: "Virtual scenarios for team preparation and skill development before actual deployments.",
              },
              {
                icon: <AlertTriangle className="h-8 w-8 text-[#669BBC]" />,
                title: "Early Warning System",
                description: "Integration with meteorological and geological data sources to provide advance alerts.",
              },
              {
                icon: <FileText className="h-8 w-8 text-[#669BBC]" />,
                title: "After-Action Reporting",
                description:
                  "Comprehensive analytics and documentation tools for post-disaster assessment and improvement.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-[#F0F9FF] rounded-lg">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#003049] mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-20 px-6 md:px-10 bg-[#003049] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#C1121F] hover:bg-[#C1121F] text-4xl font-semibold rounded-[0.3rem] p-3 text-white mb-4">Ecosystem</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Integration Capabilities</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              ResQ-Tech is designed to work seamlessly with existing systems and technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Government Systems",
                items: [
                  "Emergency Management Information Systems",
                  "Public Safety Networks",
                  "Weather Services",
                  "Transportation Management Systems",
                  "Public Health Databases",
                ],
              },
              {
                title: "NGO Platforms",
                items: [
                  "Relief Organization Databases",
                  "International Aid Coordination Systems",
                  "Volunteer Management Tools",
                  "Donation Tracking Platforms",
                  "Humanitarian Information Systems",
                ],
              },
              {
                title: "Technical Integrations",
                items: [
                  "GIS and Mapping Services",
                  "Satellite Imagery Providers",
                  "IoT Sensor Networks",
                  "Telecommunications Systems",
                  "Supply Chain Management Software",
                ],
              },
            ].map((category, index) => (
              <Card key={index} className="bg-[#003c5f] border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl text-teal-200 font-bold mb-4">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#669BBC] mt-1.5 mr-2 flex-shrink-0"></span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Roadmap */}
      <section className="py-20 px-6 md:px-10 bg-[#FDF0D5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#003049] hover:bg-[#003049] text-3xl font-semibold rounded-[0.5rem] p-3 text-white mb-4">Looking Ahead</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-[#003049] mb-4">Future Roadmap</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to innovation continues with these upcoming features and enhancements.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                quarter: "Q2 2025",
                features: [
                  "Enhanced satellite integration for global coverage",
                  "Multi-language voice command support",
                  "Expanded offline capabilities for remote areas",
                  "Advanced resource prediction algorithms",
                ],
              },
              {
                quarter: "Q3 2025",
                features: [
                  "AR/VR support for field teams",
                  "AI-powered scenario simulation",
                  "Blockchain-based resource tracking",
                  "Expanded IoT sensor integration",
                ],
              },
              {
                quarter: "Q4 2025",
                features: [
                  "Autonomous drone swarm coordination",
                  "Predictive evacuation modeling",
                  "Enhanced citizen reporting tools",
                  "Cross-border operation protocols",
                ],
              },
              {
                quarter: "Q1 2026",
                features: [
                  "Advanced climate data integration",
                  "Real-time medical resource matching",
                  "Expanded satellite imagery analysis",
                  "Next-gen communication resilience",
                ],
              },
            ].map((roadmap, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <span className="inline-block px-4 py-2 bg-[#003049] text-white font-bold rounded-lg">
                        {roadmap.quarter}
                      </span>
                    </div>
                    <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {roadmap.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="inline-block h-2 w-2 rounded-full bg-[#C1121F] mt-1.5 mr-2 flex-shrink-0"></span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
