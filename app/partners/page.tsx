import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function PartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#003049] text-white py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#C1121F] hover:bg-[#C1121F] text-4xl font-semibold rounded-[0.3rem] p-3 text-white">Partners</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">Working Together to Save Lives</h1>
              <p className="text-xl text-gray-300">
                ResQ-Tech collaborates with leading organizations around the world to enhance disaster response
                capabilities.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src="/prt.png"
                alt="ResQ-Tech partners collaboration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#29516a] hover:bg-[#669BBC] text-4xl font-semibold p-3 rounded-[0.3rem] text-white mb-4">Our Network</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-4">Our Valued Partners</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're proud to work alongside these organizations to create a more resilient world.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 15 }).map((_, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src="/placeholder-logo.svg"
                      alt={`Partner organization ${index + 1}`}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="font-medium text-center text-[#003049]">
                    {index % 3 === 0 ? "Government Agency" : index % 3 === 1 ? "NGO Partner" : "Technology Provider"}{" "}
                    {index + 1}
                  </p>
                </CardContent>
              </Card>
            ))}
            <Card className="border-none shadow-md bg-[#FDF0D5] hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                <div className="mb-4 p-4 rounded-full bg-[#003049]">
                  <ArrowRight className="h-8 w-8 text-white" />
                </div>
                <p className="font-bold text-[#003049] mb-2">Become a Partner</p>
                <p className="text-sm text-gray-600 mb-4">Join our global network of disaster response organizations</p>
                <Button className="bg-[#C1121F] hover:bg-[#780000]">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 px-6 md:px-10 bg-[#FDF0D5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#003049] hover:bg-[#003049] text-4xl font-semibold p-3 rounded-[0.3rem] text-white mb-4">Partnership Types</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-4">How We Collaborate</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ResQ-Tech partners with different types of organizations to create a comprehensive disaster response
              ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Government Agencies",
                description:
                  "We work with local, national, and international government bodies to integrate our platform with official emergency response systems.",
                examples: ["FEMA", "UN OCHA", "European Civil Protection", "National Disaster Management Authorities"],
                image: "/gvt.png",
              },
              {
                title: "Humanitarian Organizations",
                description:
                  "Our partnerships with NGOs and humanitarian groups ensure our technology reaches those who need it most during crises.",
                examples: [
                  "Red Cross/Red Crescent",
                  "Doctors Without Borders",
                  "World Food Programme",
                  "Save the Children",
                ],
                image: "/human.jpg",
              },
              {
                title: "Technology Companies",
                description:
                  "Strategic alliances with tech companies help us continuously improve our platform with cutting-edge capabilities.",
                examples: [
                  "Cloud Service Providers",
                  "Satellite Imagery Companies",
                  "Drone Manufacturers",
                  "AI Research Labs",
                ],
                image: "/tecl.png",
              },
            ].map((category, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#003049] mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div>
                    <p className="font-medium text-[#003049] mb-2">Examples:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {category.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#C1121F] mr-2"></span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#24475e] hover:bg-[#669BBC] text-4xl font-semibold p-3 rounded-[0.3rem] text-white mb-4">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-4">Featured Partnerships</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn about some of our most impactful collaborations and their real-world results.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                partner: "Global Relief Initiative",
                logo: "/placeholder-logo.svg",
                description:
                  "Our partnership with GRI has transformed emergency response in Southeast Asia, deploying ResQ-Tech in 12 major disaster zones over the past two years.",
                quote:
                  "ResQ-Tech's platform has become an essential part of our emergency toolkit. The technology has helped us coordinate resources more efficiently than we ever thought possible.",
                person: "Dr. Maria Chen",
                title: "Emergency Response Director, GRI",
                image: "/global.jpg",
              },
              {
                partner: "TechDrones International",
                logo: "/placeholder-logo.svg",
                description:
                  "Combining TDI's advanced drone hardware with our AI-powered analysis has created a powerful aerial reconnaissance system that's been deployed in 8 countries.",
                quote:
                  "Working with ResQ-Tech has pushed us to develop more resilient, disaster-specific drone technology. Together, we're seeing our technology save lives in real time.",
                person: "James Wilson",
                title: "CEO, TechDrones International",
                image: "/drone1.png",
              },
              {
                partner: "National Emergency Management Agency",
                logo: "/placeholder-logo.svg",
                description:
                  "Our integration with NEMA has standardized disaster response protocols across an entire nation, reducing response times by 65% on average.",
                quote:
                  "The implementation of ResQ-Tech across our national emergency response system has been transformative. We now have capabilities that were unimaginable just a few years ago.",
                person: "Director Sarah Johnson",
                title: "NEMA Operations",
                image: "/nema.jpg",
              },
            ].map((partner, index) => (
              <Card key={index} className="border-none shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-[300px] lg:h-auto">
                    <Image
                      src={partner.image || "/placeholder.svg"}
                      alt={partner.partner}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="relative h-12 w-24 mr-4">
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={`${partner.partner} logo`}
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-[#003049]">{partner.partner}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{partner.description}</p>
                    <blockquote className="border-l-4 border-[#C1121F] pl-4 italic text-gray-600 mb-4">
                      "{partner.quote}"
                    </blockquote>
                    <div>
                      <p className="font-bold text-[#003049]">{partner.person}</p>
                      <p className="text-sm text-gray-500">{partner.title}</p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-6 md:px-10 bg-[#003049] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#C1121F] hover:bg-[#C1121F] text-4xl font-semibold p-3 rounded-[0.3rem] text-white mb-4">Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of joining the ResQ-Tech partner ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Access to Cutting-Edge Technology",
                description:
                  "Leverage our AI, drone integration, and real-time data analysis capabilities to enhance your disaster response efforts.",
              },
              {
                title: "Customized Solutions",
                description:
                  "We work closely with partners to adapt our platform to their specific needs and operational requirements.",
              },
              {
                title: "Technical Support & Training",
                description: "Comprehensive onboarding, training, and ongoing technical support for your team.",
              },
              {
                title: "Data Sharing Network",
                description:
                  "Join our secure data-sharing ecosystem to improve coordination across organizations during disasters.",
              },
              {
                title: "Research Collaboration",
                description:
                  "Participate in joint research initiatives to advance disaster response technology and methodologies.",
              },
              {
                title: "Global Impact",
                description:
                  "Be part of a worldwide movement to transform disaster response and save lives through technology.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="bg-[#00436A] border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl text-teal-200 font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 px-6 md:px-10 bg-[#FDF0D5]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-[#003049] hover:bg-[#003049] text-4xl font-semibold p-3 rounded-[0.3rem] text-white">Join Us</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-[#003049]">Become a ResQ-Tech Partner</h2>
                <p className="text-lg text-gray-600">
                  We're always looking for new organizations to join our mission of transforming disaster response
                  through technology.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#C1121F] text-white flex items-center justify-center mr-3 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-[#003049] mb-1">Initial Consultation</h3>
                      <p className="text-gray-600">
                        Schedule a call with our partnership team to discuss your organization's needs and goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#C1121F] text-white flex items-center justify-center mr-3 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-[#003049] mb-1">Partnership Proposal</h3>
                      <p className="text-gray-600">
                        We'll develop a customized partnership plan tailored to your specific requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#C1121F] text-white flex items-center justify-center mr-3 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-[#003049] mb-1">Implementation</h3>
                      <p className="text-gray-600">
                        Our team will work with yours to seamlessly integrate ResQ-Tech into your operations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="bg-[#C1121F] hover:bg-[#780000] text-white">Contact Our Partnership Team</Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/join.png"
                  alt="Partnership collaboration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
