import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function TechStackPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#003049] text-white py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#C1121F] hover:bg-[#C1121F] text-4xl font-semibold p-3 rounded-[0.3rem] text-white">Tech Stack</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">Cutting-Edge Technology</h1>
              <p className="text-xl text-gray-300">
                Explore the powerful technologies that power ResQ-Tech's disaster management platform.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src="/tech.png"
                alt="Technology visualization"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Overview */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#2a5169] hover:bg-[#669BBC] text-4xl font-semibold p-3 rounded-[0.3rem] text-white mb-4">Technology Overview</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-4">Our Technology Stack</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ResQ-Tech leverages the latest advancements across multiple technology domains to create a powerful,
              reliable platform for disaster response.
            </p>
          </div>

          <TooltipProvider>
            <div className="space-y-16">
              {/* Computer Vision */}
              <div>
                <h3 className="text-2xl font-bold text-[#003049] mb-6 flex items-center">
                  <Badge className="mr-3 bg-[#C1121F] text-white">01</Badge>
                  Computer Vision
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {[
                    {
                      name: "YOLOv8",
                      image: "/yolo.svg",
                      description:
                        "Ultra-fast object detection model used for identifying structures, people, and hazards in aerial imagery.",
                    },
                    {
                      name: "OpenCV",
                      image: "/ocv.png",
                      description:
                        "Computer vision library used for image processing, feature detection, and video analysis.",
                    },
                    {
                      name: "TensorFlow",
                      image: "/tf.svg.png",
                      description: "Machine learning framework used for training and deploying custom vision models.",
                    },
                    {
                      name: "NVIDIA CUDA",
                      image: "/cuda.svg",
                      description: "Parallel computing platform for GPU-accelerated processing of visual data.",
                    },
                    {
                      name: "PyTorch",
                      image: "/pyt.png",
                      description: "Deep learning framework used for developing specialized computer vision models.",
                    },
                  ].map((tech, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 cursor-help">
                          <CardContent className="p-4 flex flex-col items-center">
                            <div className="relative h-16 w-16 mb-3">
                              <Image
                                src={tech.image || "/placeholder.svg"}
                                alt={tech.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <h4 className="font-bold text-[#003049] text-center">{tech.name}</h4>
                          </CardContent>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs p-4">
                        <p>{tech.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>

              {/* AI/ML */}
              <div>
                <h3 className="text-2xl font-bold text-[#003049] mb-6 flex items-center">
                  <Badge className="mr-3 bg-[#669BBC] text-white">02</Badge>
                  AI/ML
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {[
                    {
                      name: "PyTorch",
                      image: "/pyt.png",
                      description: "Deep learning framework used for developing and training custom AI models.",
                    },
                    {
                      name: "Scikit-learn",
                      image: "/sck.png",
                      description: "Machine learning library used for data analysis and predictive modeling.",
                    },
                    {
                      name: "Google OR Tools",
                      image: "/gt.png",
                      description: "Optimization library used for resource allocation and routing problems.",
                    },
                    {
                      name: "TensorFlow",
                      image: "/tf.svg.png",
                      description: "End-to-end machine learning platform for model development and deployment.",
                    },
                    {
                      name: "Keras",
                      image: "/ker.svg.png",
                      description: "High-level neural networks API for rapid prototyping and experimentation.",
                    },
                  ].map((tech, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 cursor-help">
                          <CardContent className="p-4 flex flex-col items-center">
                            <div className="relative h-16 w-16 mb-3">
                              <Image
                                src={tech.image || "/placeholder.svg"}
                                alt={tech.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <h4 className="font-bold text-[#003049] text-center">{tech.name}</h4>
                          </CardContent>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs p-4">
                        <p>{tech.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>

              {/* Web Technologies */}
              <div>
                <h3 className="text-2xl font-bold text-[#003049] mb-6 flex items-center">
                  <Badge className="mr-3 bg-[#003049] text-white">03</Badge>
                  Web Technologies
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {[
                    {
                      name: "React",
                      image: "/rct.png",
                      description: "JavaScript library for building user interfaces, powering our web dashboard.",
                    },
                    {
                      name: "Next.js",
                      image: "/nxt.svg",
                      description: "React framework for server-rendered applications with optimized performance.",
                    },
                    {
                      name: "Firebase",
                      image: "/fb.png",
                      description: "Platform for real-time database, authentication, and cloud functions.",
                    },
                    {
                      name: "Mapbox",
                      image: "/mp.png",
                      description: "Mapping platform for custom, interactive maps with real-time data visualization.",
                    },
                    {
                      name: "WebSockets",
                      image: "/web.png",
                      description: "Protocol for real-time, bidirectional communication between clients and servers.",
                    },
                  ].map((tech, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 cursor-help">
                          <CardContent className="p-4 flex flex-col items-center">
                            <div className="relative h-16 w-16 mb-3">
                              <Image
                                src={tech.image || "/placeholder.svg"}
                                alt={tech.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <h4 className="font-bold text-[#003049] text-center">{tech.name}</h4>
                          </CardContent>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs p-4">
                        <p>{tech.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>

              {/* GenAI */}
              <div>
                <h3 className="text-2xl font-bold text-[#003049] mb-6 flex items-center">
                  <Badge className="mr-3 bg-[#C1121F] text-white">04</Badge>
                  GenAI
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {[
                    {
                      name: "GPT-4",
                      image: "/gpt.webp",
                      description:
                        "Advanced language model used for generating situation reports and multilingual communications.",
                    },
                    {
                      name: "Langchain",
                      image: "/lc.webp",
                      description:
                        "Framework for developing applications powered by language models with enhanced capabilities.",
                    },
                    {
                      name: "HuggingFace",
                      image: "/hgf.svg",
                      description:
                        "Platform providing pre-trained models for natural language processing and computer vision.",
                    },
                    {
                      name: "DALL-E",
                      image: "/dle.jpg",
                      description:
                        "AI system that creates images from textual descriptions for visualization purposes.",
                    },
                    {
                      name: "Whisper",
                      image: "/wsp.webp",
                      description: "Speech recognition system for transcribing field audio in multiple languages.",
                    },
                  ].map((tech, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 cursor-help">
                          <CardContent className="p-4 flex flex-col items-center">
                            <div className="relative h-16 w-16 mb-3">
                              <Image
                                src={tech.image || "/placeholder.svg"}
                                alt={tech.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <h4 className="font-bold text-[#003049] text-center">{tech.name}</h4>
                          </CardContent>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs p-4">
                        <p>{tech.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>

              {/* Mobile */}
              <div>
                <h3 className="text-2xl font-bold text-[#003049] mb-6 flex items-center">
                  <Badge className="mr-3 bg-[#669BBC] text-white">05</Badge>
                  Mobile
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {[
                    {
                      name: "Flutter",
                      image: "/flt.png",
                      description:
                        "UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
                    },
                    {
                      name: "GPS Integration",
                      image: "/gps.jpg",
                      description: "Location services for precise positioning and navigation in the field.",
                    },
                    {
                      name: "ARCore/ARKit",
                      image: "/ark.jpg",
                      description:
                        "Augmented reality development platforms for creating immersive field visualization tools.",
                    },
                    {
                      name: "Firebase",
                      image: "/fb.png",
                      description:
                        "Backend services for mobile applications including authentication, storage, and messaging.",
                    },
                    {
                      name: "Offline Storage",
                      image: "/ofs.png",
                      description: "Local data persistence solutions for operation in areas with limited connectivity.",
                    },
                  ].map((tech, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 cursor-help">
                          <CardContent className="p-4 flex flex-col items-center">
                            <div className="relative h-16 w-16 mb-3">
                              <Image
                                src={tech.image || "/placeholder.svg"}
                                alt={tech.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <h4 className="font-bold text-[#003049] text-center">{tech.name}</h4>
                          </CardContent>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs p-4">
                        <p>{tech.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </div>
          </TooltipProvider>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 px-6 md:px-10 bg-[#FDF0D5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#003049] hover:bg-[#003049] text-3xl font-semibold rounded-[0.3rem] p-3 text-white mb-4">System Design</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-[#003049] mb-4">Technical Architecture</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A look at how our technologies work together to create a robust, scalable platform.
            </p>
          </div>

          <div className="bg-[#f8f9fa] p-8 rounded-xl shadow-lg">
            <div className="relative h-[400px] md:h-[600px] w-full">
              <Image
                src="/wfl.png"
                alt="ResQ-Tech Technical Architecture Diagram"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Layer",
                description:
                  "Our distributed database architecture ensures data integrity and availability even in challenging network conditions.",
                details: [
                  "Distributed NoSQL databases for scalability",
                  "Data replication across multiple regions",
                  "Offline-first design with synchronization",
                  "End-to-end encryption for sensitive information",
                ],
              },
              {
                title: "Processing Layer",
                description:
                  "High-performance computing infrastructure processes vast amounts of data in real-time to deliver actionable insights.",
                details: [
                  "GPU-accelerated AI processing",
                  "Edge computing for low-latency analysis",
                  "Serverless functions for scalable operations",
                  "Stream processing for real-time data flows",
                ],
              },
              {
                title: "Application Layer",
                description:
                  "Intuitive interfaces across web and mobile platforms make complex data accessible to all stakeholders.",
                details: [
                  "Responsive web dashboard for command centers",
                  "Field-optimized mobile apps for response teams",
                  "API-first design for third-party integration",
                  "Progressive enhancement for varying connectivity",
                ],
              },
            ].map((layer, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#003049] mb-3">{layer.title}</h3>
                  <p className="text-gray-600 mb-4">{layer.description}</p>
                  <ul className="space-y-2">
                    {layer.details.map((detail, idx) => (
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

      {/* Technical Innovations */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#34627f] hover:bg-[#669BBC] text-4xl font-semibold rounded-[0.3rem] p-3 text-white mb-4">Innovations</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-4">Technical Breakthroughs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ResQ-Tech has pioneered several technological innovations specifically for disaster response scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Resilient Mesh Networking",
                description:
                  "Our proprietary mesh network technology enables communication in areas where traditional infrastructure has been damaged or destroyed.",
                image: "/mesh.png.webp",
                points: [
                  "Device-to-device communication without central infrastructure",
                  "Dynamic routing to optimize bandwidth and battery usage",
                  "Automatic network healing and reconfiguration",
                  "Integration with satellite uplinks when available",
                ],
              },
              {
                title: "Low-Resource AI Processing",
                description:
                  "We've optimized AI models to run efficiently on edge devices with limited computational resources and power constraints.",
                image: "/ai.png",
                points: [
                  "Model quantization reducing memory footprint by 75%",
                  "Selective computation focusing on critical features",
                  "Adaptive power management based on battery levels",
                  "Progressive model loading prioritizing essential functions",
                ],
              },
              {
                title: "Multi-Source Data Fusion",
                description:
                  "Our platform integrates data from diverse sources to create a comprehensive operational picture despite incomplete information.",
                image: "/mlt.png",
                points: [
                  "Bayesian inference for combining uncertain data points",
                  "Temporal alignment of asynchronous information streams",
                  "Cross-validation between complementary data sources",
                  "Confidence scoring for decision support",
                ],
              },
              {
                title: "Adaptive User Interfaces",
                description:
                  "Interfaces that automatically adjust to environmental conditions, user roles, and device capabilities.",
                image: "/adpt.png",
                points: [
                  "High-contrast modes for outdoor visibility",
                  "One-handed operation for field personnel",
                  "Role-based information prioritization",
                  "Bandwidth-aware content delivery",
                ],
              },
            ].map((innovation, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-[200px] md:h-full">
                    <Image
                      src={innovation.image || "/placeholder.svg"}
                      alt={innovation.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#003049] mb-3">{innovation.title}</h3>
                    <p className="text-gray-600 mb-4">{innovation.description}</p>
                    <ul className="space-y-2">
                      {innovation.points.map((point, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#C1121F] mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-20 px-6 md:px-10 bg-[#003049] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#C1121F] hover:bg-[#C1121F] text-4xl font-semibold rounded-[0.3rem] p-3 text-white mb-4">R&D</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & Development</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our ongoing research initiatives pushing the boundaries of what's possible in disaster response
              technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Predictive Disaster Modeling",
                description:
                  "Advanced simulations to forecast disaster progression and optimize preemptive resource positioning.",
                status: "Active Research",
              },
              {
                title: "Autonomous Rescue Robotics",
                description:
                  "Developing AI systems for robotic search and rescue operations in hazardous environments.",
                status: "Prototype Testing",
              },
              {
                title: "Quantum-Secured Communications",
                description:
                  "Implementing quantum cryptography for ultra-secure data transmission in sensitive operations.",
                status: "Early Research",
              },
              {
                title: "Biometric Health Monitoring",
                description: "Non-invasive systems to monitor vital signs of disaster victims and first responders.",
                status: "Field Trials",
              },
              {
                title: "Neuromorphic Computing",
                description: "Brain-inspired computing architectures for ultra-efficient AI processing in the field.",
                status: "Concept Development",
              },
              {
                title: "Satellite-Drone Coordination",
                description: "Integrated systems linking orbital assets with aerial drones for comprehensive coverage.",
                status: "Implementation Phase",
              },
            ].map((research, index) => (
              <Card key={index} className="bg-[#00436A] border-none">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl text-teal-200 font-bold">{research.title}</h3>
                    <Badge className="bg-[#2c5168] text-white rounded-[0.3rem] hover:bg-[#669BBC]">{research.status}</Badge>
                  </div>
                  <p className="text-gray-300">{research.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
