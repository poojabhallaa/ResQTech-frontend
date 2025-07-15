import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, Users, AlertTriangle, Zap, Globe, BarChart } from "lucide-react"

export default function ImpactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#003049] text-white py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#C1121F] hover:bg-[#C1121F] text-4xl font-semibold rounded-[0.3rem] text-white p-3">Problem & Impact</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">Transforming Disaster Response</h1>
              <p className="text-xl text-gray-300">
                Understanding the challenges in traditional disaster management and how ResQ-Tech is revolutionizing the
                field.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src="/impact.png"
                alt="Disaster response in action"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Problem Side */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#780000] hover:bg-[#473e3e] text-4xl font-semibold rounded-[0.3rem] p-3 text-white">The Problem</Badge>
                <h2 className="text-3xl font-bold text-[#003049]">Critical Challenges in Disaster Response</h2>
                <p className="text-gray-600">
                  Traditional disaster management faces significant hurdles that cost lives and resources during
                  critical moments.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Clock className="h-8 w-8 text-[#C1121F]" />,
                    title: "Delayed Response Times",
                    description: "Manual assessment processes can take days when minutes matter most.",
                  },
                  {
                    icon: <Users className="h-8 w-8 text-[#C1121F]" />,
                    title: "Communication Barriers",
                    description:
                      "Siloed information between agencies leads to duplicated efforts and gaps in coverage.",
                  },
                  {
                    icon: <AlertTriangle className="h-8 w-8 text-[#C1121F]" />,
                    title: "Limited Situational Awareness",
                    description: "Incomplete or outdated information hampers effective decision-making.",
                  },
                  {
                    icon: <Zap className="h-8 w-8 text-[#C1121F]" />,
                    title: "Resource Misallocation",
                    description:
                      "Without real-time data, critical supplies often don't reach those who need them most.",
                  },
                ].map((problem, index) => (
                  <Card key={index} className="border-l-4 border-l-[#C1121F] shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="mr-4 mt-1">{problem.icon}</div>
                        <div>
                          <h3 className="text-lg font-bold text-[#003049] mb-2">{problem.title}</h3>
                          <p className="text-gray-600">{problem.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-[#FDF0D5] p-6 rounded-lg">
                <h3 className="text-lg font-bold text-[#780000] mb-2">The Human Cost</h3>
                <p className="text-gray-700">
                  These challenges result in preventable suffering, with an estimated 30% of disaster-related fatalities
                  attributed to coordination and response delays.
                </p>
              </div>
            </div>

            {/* Solution Side */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#325971] text-4xl font-medium rounded-[0.3rem] p-3 text-white ">The Solution</Badge>
                <h2 className="text-3xl font-bold text-[#003049]">ResQ-Tech's Revolutionary Approach</h2>
                <p className="text-gray-600">
                  Our integrated platform addresses these challenges with cutting-edge technology designed specifically
                  for disaster scenarios.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Globe className="h-8 w-8 text-[#325971]" />,
                    title: "Real-Time Situational Awareness",
                    description:
                      "Drone reconnaissance and AI analysis provide immediate visibility into affected areas.",
                  },
                  {
                    icon: <Users className="h-8 w-8 text-[#325971]" />,
                    title: "Unified Communication Platform",
                    description: "All stakeholders access the same real-time information, breaking down silos.",
                  },
                  {
                    icon: <BarChart className="h-8 w-8 text-[#325971]" />,
                    title: "Data-Driven Decision Making",
                    description: "AI-powered analytics help prioritize resources where they're needed most.",
                  },
                  {
                    icon: <Zap className="h-8 w-8 text-[#325971]" />,
                    title: "Automated Coordination",
                    description:
                      "Smart routing algorithms optimize resource distribution and response team deployment.",
                  },
                ].map((solution, index) => (
                  <Card key={index} className="border-l-4 border-l-[#325971] shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="mr-4 mt-1">{solution.icon}</div>
                        <div>
                          <h3 className="text-lg font-bold text-[#003049] mb-2">{solution.title}</h3>
                          <p className="text-gray-600">{solution.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-[#E6F2FF] p-6 rounded-lg">
                <h3 className="text-lg font-bold text-[#003049] mb-2">The ResQ-Tech Difference</h3>
                <p className="text-gray-700">
                  Our platform has demonstrated a 65% reduction in response time and a 40% improvement in resource
                  utilization across deployments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After Comparison */}
      <section className="py-20 px-6 md:px-10 bg-[#003049] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#C1121F] hover:bg-[#C1121F] text-4xl font-semibold rounded-[0.3rem] p-3 text-white mb-4">The Transformation</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Before vs. After ResQ-Tech</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how our platform transforms every aspect of disaster response operations.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                category: "Assessment",
                before: "Manual surveys taking 48-72 hours to complete",
                after: "AI-powered drone reconnaissance providing insights within 2 hours",
              },
              {
                category: "Resource Allocation",
                before: "Based on historical data and best guesses",
                after: "Driven by real-time needs assessment and predictive analytics",
              },
              {
                category: "Communication",
                before: "Fragmented across multiple channels with language barriers",
                after: "Centralized platform with real-time translation and standardized formats",
              },
              {
                category: "Decision Making",
                before: "Delayed by information gaps and approval chains",
                after: "Accelerated by AI-assisted recommendations and clear data visualization",
              },
              {
                category: "Community Involvement",
                before: "Limited to official channels and formal reporting",
                after: "Enhanced with citizen uploads and two-way communication",
              },
            ].map((comparison, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-8 gap-5 items-center">
                <div className="md:col-span-1 bg-[#62b6cb] p-3 rounded-lg text-center font-bold">
                  {comparison.category}
                </div>
                <div className="md:col-span-3 bg-[#d90429] p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">Before</h3>
                  <p>{comparison.before}</p>
                </div>
                <div className="hidden md:flex justify-center">
                  <ArrowRight className="h-8 w-8" />
                </div>
                <div className="md:col-span-3 bg-[#218380] p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">After</h3>
                  <p>{comparison.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#669BBC] hover:bg-[#669BBC] text-4xl font-semibold rounded-[0.3rem] p-3 text-white mb-4">Measurable Impact</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-[#003049] mb-4">The Numbers Speak for Themselves</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ResQ-Tech has demonstrated significant improvements across all key metrics of disaster response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "85%",
                description: "Faster situation assessment compared to traditional methods",
                color: "#C1121F",
              },
              {
                metric: "65%",
                description: "Reduction in response time from disaster onset to aid delivery",
                color: "#003049",
              },
              {
                metric: "40%",
                description: "Improvement in resource utilization efficiency",
                color: "#669BBC",
              },
              {
                metric: "30%",
                description: "Estimated reduction in disaster-related fatalities",
                color: "#780000",
              },
            ].map((stat, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold mb-4" style={{ color: stat.color }}>
                    {stat.metric}
                  </div>
                  <p className="text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 md:px-10 bg-[#FDF0D5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#003049] hover:bg-[#003049] text-4xl font-semibold rounded-[0.3rem] p-3 text-white mb-4">Real-World Impact</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-[#003049] mb-4">Case Studies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how ResQ-Tech has made a tangible difference in disaster scenarios around the world.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Nepal Earthquake Response",
                location: "Kathmandu Region, Nepal",
                date: "April 2022",
                description:
                  "Following a 7.8 magnitude earthquake, ResQ-Tech deployed within 6 hours, providing comprehensive damage assessment across 120 square kilometers and coordinating 45 relief organizations.",
                results: [
                  "Reduced initial assessment time from 3 days to 8 hours",
                  "Identified 28 isolated communities unreachable by road",
                  "Coordinated airdrops to 15,000 affected individuals",
                  "Optimized medical team deployment, saving an estimated 300 lives",
                ],
                image: "/ern.jpg",
              },
              {
                title: "Hurricane Maria Recovery",
                location: "Puerto Rico",
                date: "September 2021",
                description:
                  "When Hurricane Maria devastated Puerto Rico's infrastructure, ResQ-Tech provided critical communication and coordination capabilities when traditional networks failed.",
                results: [
                  "Established emergency mesh network covering 65% of affected areas",
                  "Mapped 87% of damaged infrastructure within 48 hours",
                  "Coordinated water distribution to 230,000 residents",
                  "Reduced duplicate aid deliveries by 42%",
                ],
                image: "/hpr.jpg",
              },
              {
                title: "Australian Bushfire Crisis",
                location: "New South Wales, Australia",
                date: "January 2023",
                description:
                  "During the unprecedented bushfire season, ResQ-Tech's thermal imaging drones and predictive analytics helped firefighters and emergency services coordinate evacuations and resource deployment.",
                results: [
                  "Identified 23 developing fire fronts before ground teams",
                  "Facilitated evacuation of 12,000 residents from high-risk areas",
                  "Optimized water bomber deployment, increasing effectiveness by 35%",
                  "Reduced response time to new outbreaks by 58%",
                ],
                image: "/wfa.webp",
              },
            ].map((case_study, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-[300px] lg:h-auto">
                    <Image
                      src={case_study.image || "/placeholder.svg"}
                      alt={case_study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#003049]">{case_study.title}</h3>
                        <p className="text-[#C1121F]">
                          {case_study.location} | {case_study.date}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{case_study.description}</p>
                    <div>
                      <h4 className="font-bold text-[#003049] mb-2">Key Results:</h4>
                      <ul className="space-y-2">
                        {case_study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-[#669BBC] mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-10 bg-[#003049] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 ">
            <Badge className="bg-[#669BBC] hover:bg-[#669BBC] text-4xl font-semibold p-3 rounded-[0.3rem] text-white mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Voices from the Field</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Hear from the emergency responders, government officials, and aid workers who have experienced the
              ResQ-Tech difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "ResQ-Tech transformed how we coordinate our teams. What used to take days now happens in hours, and that time difference saves lives.",
                name: "Dr. Maria Sanchez",
                title: "Emergency Response Director, International Red Cross",
              },
              {
                quote:
                  "The drone reconnaissance and AI analysis gave us visibility we never had before. We could see exactly where help was needed most.",
                name: "John Kimathi",
                title: "Field Coordinator, UN Disaster Relief",
              },
              {
                quote:
                  "As a local official, I was amazed by how quickly ResQ-Tech integrated with our existing systems and enhanced our capabilities tenfold.",
                name: "Mayor Robert Chen",
                title: "Coastal City affected by Hurricane Laura",
              },
              {
                quote:
                  "The multilingual capabilities broke down barriers between our international teams. We all worked from the same information for the first time.",
                name: "Sophie Dubois",
                title: "Logistics Manager, Doctors Without Borders",
              },
              {
                quote:
                  "ResQ-Tech's platform gave us the confidence to make critical decisions quickly, knowing we had the most accurate information possible.",
                name: "Commander James Wilson",
                title: "National Guard Emergency Response",
              },
              {
                quote:
                  "The difference between before and after implementing ResQ-Tech was night and day. Our resource utilization improved dramatically.",
                name: "Aisha Mohammed",
                title: "Director, African Disaster Preparedness Initiative",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none bg-[#00436A]">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-4xl text-[#a4cee9] mb-4">"</div>
                  <p className="text-white mb-6 flex-grow">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-teal-200">{testimonial.name}</p>
                    <p className="text-sm text-gray-300">{testimonial.title}</p>
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
