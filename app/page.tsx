import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, DrillIcon as Drone, Map, Brain, Upload, Clock, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#003049] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-2xl">
              <Badge className="bg-[#C1121F] hover:bg-[#C1121F] text-white px-4 py-1 text-4xl font-semibold rounded-[0.3rem] p-3">
                AI-Powered Disaster Response
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                From Threat to Check — Trust ResQ-Tech!
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                Transforming disaster response using AI, drones, and real-time data to streamline emergency aid
                coordination and save lives.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#C1121F] hover:bg-[#780000] text-white">
                  See How It Works
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white hover:text-[#2e759b]"
                >
                  Request Demo
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
              <Image
                src="/home.png"
                alt="ResQ-Tech in action"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#003049] to-transparent"></div>
      </section>

      {/* Key Stats Section */}
      <section className="bg-[#FDF0D5] py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "85%", text: "Faster Response Time" },
              { number: "10,000+", text: "Lives Saved" },
              { number: "50+", text: "Disaster Zones Managed" },
              { number: "24/7", text: "Real-time Monitoring" },
            ].map((stat, index) => (
              <Card key={index} className="border-none shadow-lg bg-white">
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-[#C1121F]">{stat.number}</p>
                  <p className="text-[#003049] font-medium mt-2">{stat.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#669BBC] hover:bg-[#669BBC] text-4xl font-semibold rounded-[0.3rem] p-3 text-white mb-4 ">Core Capabilities</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-4">
              How ResQ-Tech Transforms Disaster Response
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with practical solutions to overcome the challenges of
              disaster management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Drone className="h-10 w-10 text-[#C1121F]" />,
                title: "Drone Reconnaissance",
                description: "YOLOv8-based aerial computer vision for rapid damage detection and assessment.",
              },
              {
                icon: <Map className="h-10 w-10 text-[#C1121F]" />,
                title: "Smart Aid Routing",
                description: "ML-based logistics optimization to ensure resources reach those who need them most.",
              },
              {
                icon: <Brain className="h-10 w-10 text-[#C1121F]" />,
                title: "GenAI Briefings",
                description: "Multilingual situation summaries generated in real-time for all stakeholders.",
              },
              {
                icon: <Clock className="h-10 w-10 text-[#C1121F]" />,
                title: "Live Log Dashboard",
                description: "Real-time data and metrics to monitor response efforts and resource allocation.",
              },
              {
                icon: <Upload className="h-10 w-10 text-[#C1121F]" />,
                title: "Citizen Uploads (ArPut)",
                description: "User-generated visual data to enhance situational awareness and response.",
              },
              {
                icon: <Shield className="h-10 w-10 text-[#C1121F]" />,
                title: "Secure Communications",
                description: "Encrypted channels for reliable information exchange during critical operations.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-[#003049] mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/features">
              <Button className="bg-[#003049] hover:bg-[#00436A]">
                Explore All Features <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 px-6 md:px-10 bg-[#003049] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#C1121F] hover:bg-[#C1121F] text-white mb-4 text-3xl font-semibold rounded-[0.3rem] p-3">The Challenge</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Traditional Disaster Response Falls Short</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  When disasters strike, every minute counts. Yet traditional response methods face critical challenges:
                </p>
                <ul className="space-y-3">
                  {[
                    "Limited visibility into affected areas",
                    "Communication breakdowns between agencies",
                    "Inefficient resource allocation",
                    "Delayed response due to information gaps",
                    "Language barriers in international operations",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block h-6 w-6 rounded-full bg-[#C1121F] text-white text-center mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <Badge className="bg-[#669BBC] hover:bg-[#669BBC] text-teal-950 mb-4 text-3xl font-semibold rounded-[0.3rem] p-3">Our Solution</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">ResQ-Tech's Integrated Approach</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  ResQ-Tech addresses these challenges with a comprehensive platform that:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Provides real-time aerial assessment",
                    "Centralizes communication channels",
                    "Optimizes resource distribution",
                    "Accelerates decision-making",
                    "Breaks down language barriers",
                    "Enables citizen participation",
                  ].map((item, index) => (
                    <Card key={index} className="bg-[#00436A] text-white border-none">
                      <CardContent className="p-4 flex items-center">
                        <ArrowRight className="h-5 w-5 text-[#669BBC] mr-2" />
                        <span className="text-sm">{item}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/impact">
                    <Button className="bg-[#C1121F] hover:bg-[#780000]">
                      See the Impact <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-[#335c76] hover:bg-[#669BBC] text-white mb-4 text-4xl font-semibold rounded-[0.3rem] p-3">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-4">ResQ-Tech in Action</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our platform has made a difference in real disaster scenarios around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "/ern.jpg",
                title: "Earthquake Response in Nepal",
                description: "How ResQ-Tech helped coordinate relief efforts after a 7.8 magnitude earthquake.",
              },
              {
                image: "/hpr.jpg",
                title: "Hurricane Recovery in Puerto Rico",
                description: "Accelerating aid distribution and infrastructure assessment following Hurricane Maria.",
              },
              {
                image: "/wfa.webp",
                title: "Wildfire Management in Australia",
                description: "Real-time monitoring and evacuation coordination during the bushfire crisis.",
              },
            ].map((case_study, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={case_study.image || "/placeholder.svg"}
                    alt={case_study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#003049] mb-2">{case_study.title}</h3>
                  <p className="text-gray-600 mb-4">{case_study.description}</p>
                  <Link href="#" className="text-[#C1121F] font-medium flex items-center">
                    Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-10 bg-[#FDF0D5]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#003049] rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Disaster Response?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join organizations worldwide that are using ResQ-Tech to save lives and improve emergency coordination.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-[#C1121F] hover:bg-[#780000]">
                Request a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-[#0f618e]"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
