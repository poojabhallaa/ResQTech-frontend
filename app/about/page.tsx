import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#003049] text-white py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#C1121F] hover:bg-[#C1121F] text-4xl text-white font-semibold rounded-[0.3rem] p-3">About Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">Our Mission & Vision</h1>
              <p className="text-xl text-gray-300">
                At ResQ-Tech, we're dedicated to revolutionizing disaster response through technology that saves lives
                and empowers communities.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src="/abt.png"
                alt="ResQ-Tech team in action"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg bg-[#FDF0D5]">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#003049] mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  To save lives through smart coordination by leveraging cutting-edge technology that transforms how we
                  respond to disasters.
                </p>
                <ul className="space-y-3">
                  {[
                    "Reduce response time in disaster scenarios",
                    "Improve resource allocation efficiency",
                    "Enhance communication between agencies",
                    "Empower local communities with technology",
                    "Create a global standard for disaster management",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#C1121F] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-[#FDF0D5]">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#003049] mb-4">Our Vision</h2>
                <p className="text-lg text-gray-700 mb-6">
                  A world where technology minimizes the impact of disasters, where every affected person receives
                  timely help, and where communities recover faster.
                </p>
                <ul className="space-y-3">
                  {[
                    "Create a global network of disaster response systems",
                    "Develop AI that predicts and prevents disaster impacts",
                    "Build resilient communities through technology access",
                    "Establish international standards for emergency tech",
                    "Reduce disaster-related mortality by 50% by 2030",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#145e8b] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-6 md:px-10 bg-[#003049] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#3e7597] hover:bg-[#669BBC] text-4xl font-semibold rounded-[0.3rem] text-white mb-4 p-5">Our Journey</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">From Concept to Global Impact</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              The evolution of ResQ-Tech from an ambitious idea to a life-saving platform deployed worldwide.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#669BBC]"></div>

            {/* Timeline items */}
            <div className="relative">
              {[
                {
                  year: "2025",
                  title: "The Idea",
                  description:
                    "ResQ-Tech was born from a hackathon focused on disaster relief technology, where our founders identified critical gaps in emergency response coordination.",
                  position: "left",
                },
                {
                  year: "2025",
                  title: "Prototype Development",
                  description:
                    "Our team developed the first prototype integrating drone reconnaissance with AI-powered damage assessment algorithms.",
                  position: "right",
                },
                {
                  year: "2025",
                  title: "First Deployment",
                  description:
                    "ResQ-Tech was deployed for the first time during flood relief efforts in Southeast Asia, reducing response time by 40%.",
                  position: "left",
                },
                {
                  year: "2025",
                  title: "AI Integration",
                  description:
                    "We integrated advanced machine learning models for resource allocation and multilingual communication tools.",
                  position: "right",
                },
                {
                  year: "2027",
                  title: "Global Expansion",
                  description:
                    "ResQ-Tech expanded to 25 countries, partnering with major humanitarian organizations and government agencies.",
                  position: "left",
                },
                {
                  year: "2027",
                  title: "Today & Beyond",
                  description:
                    "Now serving 50+ disaster zones worldwide with continuous innovation in AI, drone technology, and real-time data processing.",
                  position: "right",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${item.position === "left" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`w-5/12 ${item.position === "right" && "order-1"}`}>
                    <Card className={`border-none shadow-lg ${item.position === "left" ? "mr-8" : "ml-8"}`}>
                      <CardContent className="p-6">
                        <span className="inline-block px-3 py-1 rounded-[0.3rem] bg-[#C1121F] text-white text-sm font-bold mb-2 ">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                        <p className="text-black font-medium">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#C1121F] border-4 border-[#003049] z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-10 bg-[#FDF0D5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#003049] hover:bg-[#003049] text-4xl font-medium rounded-[0.3rem] text-white mb-4 p-3">Our Values</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-[#003049] mb-4">The Principles That Guide Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values shape everything we do at ResQ-Tech, from product development to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible in disaster response technology.",
              },
              {
                title: "Compassion",
                description: "Every feature we build is designed with empathy for those affected by disasters.",
              },
              {
                title: "Reliability",
                description: "Our systems are built to work flawlessly when lives depend on them.",
              },
              {
                title: "Collaboration",
                description: "We believe in working together across organizations and borders to save lives.",
              },
              {
                title: "Accessibility",
                description:
                  "We design our technology to be usable by anyone, anywhere, regardless of technical expertise.",
              },
              {
                title: "Adaptability",
                description: "Our solutions evolve to meet the unique challenges of different disaster scenarios.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-none shadow-lg bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#003049] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
