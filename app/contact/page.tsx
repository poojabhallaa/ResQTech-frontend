"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    inquiry: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState(prev => ({ ...prev, inquiry: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        organization: "",
        inquiry: "",
        message: ""
      })
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#003049] text-white py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#C1121F] hover:bg-[#C1121F] text-4xl font-semibold rounded-[0.3rem] p-3 text-white">Contact Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
              <p className="text-xl text-gray-300">
                Have questions about ResQ-Tech? Want to learn more about our platform or partnership opportunities? We're here to help.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden">
              <Image 
                src="/cnt.png" 
                alt="ResQ-Tech contact team" 
                fill 
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#003049] mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold text-green-700 mb-2">Thank You!</h3>
                    <p className="text-green-600">
                      Your message has been received. A member of our team will be in touch with you shortly.
                    </p>
                    <Button 
                      className="mt-4 bg-[#003049] hover:bg-[#00436A]"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Full Name <span className="text-[#C1121F]">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="border-gray-300 focus-visible:ring-[#669BBC]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address <span className="text-[#C1121F]">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="border-gray-300 focus-visible:ring-[#669BBC]"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="organization" className="text-sm font-medium text-gray-700">
                        Organization
                      </label>
                      <Input
                        id="organization"
                        name="organization"
                        value={formState.organization}
                        onChange={handleChange}
                        placeholder="Your organization (optional)"
                        className="border-gray-300 focus-visible:ring-[#669BBC]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="inquiry" className="text-sm font-medium text-gray-700">
                        Inquiry Type <span className="text-[#C1121F]">*</span>
                      </label>
                      <Select 
                        value={formState.inquiry} 
                        onValueChange={handleSelectChange}
                        required
                      >
                        <SelectTrigger className="border-gray-300 focus:ring-[#669BBC]">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Information</SelectItem>
                          <SelectItem value="demo">Request a Demo</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="media">Media Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message <span className="text-[#C1121F]">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        rows={5}
                        className="border-gray-300 focus-visible:ring-[#669BBC]"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#C1121F] hover:bg-[#780000]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy" className="text-[#669BBC] hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#003049] mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-[#FDF0D5] mr-4">
                      <MapPin className="h-6 w-6 text-[#C1121F]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#003049] mb-1">Headquarters</h3>
                      <p className="text-gray-600">XYZ Emergency Lane</p>
                      <p className="text-gray-600">ABC City, TC 10101</p>
                      <p className="text-gray-600">PYQ Country</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-[#FDF0D5] mr-4">
                      <Phone className="h-6 w-6 text-[#C1121F]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#003049] mb-1">Phone</h3>
                      <p className="text-gray-600">+1 (555) 911-RESQ</p>
                      <p className="text-gray-600">Monday - Friday, 9am - 5pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-[#FDF0D5] mr-4">
                      <Mail className="h-6 w-6 text-[#C1121F]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#003049] mb-1">Email</h3>
                      <p className="text-gray-600">info@resq-tech.com</p>
                      <p className="text-gray-600">support@resq-tech.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-[#003049] mb-6">Regional Offices</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      region: "ABC",
                      address: "xx Efg Road",
                      city: "Abc, _x_x_x",
                      email: "abc@resq-tech.com"
                    },
                    {
                      region: "PYQ",
                      address: "xx Hij Avenue",
                      city: "Pyq, xx-_a_a",
                      email: "pyq@resq-tech.com"
                    },
                    {
                      region: "RST",
                      address: "xx Rst Emergencia",
                      city: "Rst, 0xa00",
                      email: "rst@resq-tech.com"
                    },
                    {
                      region: "XYZ",
                      address: "xx Xyz Road",
                      city: "Xyz, 00x00",
                      email: "xyz@resq-tech.com"
                    }
                  ].map((office, index) => (
                    <Card key={index} className="border-none shadow-md">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-[#003049] mb-1">{office.region}</h3>
                        <p className="text-sm text-gray-600">{office.address}</p>
                        <p className="text-sm text-gray-600">{office.city}</p>
                        <p className="text-sm text-[#669BBC]">{office.email}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-[#003049] mb-6">Connect With Us</h2>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="p-3 rounded-lg bg-[#FDF0D5] text-[#003049] hover:bg-[#003049] hover:text-white transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 rounded-lg bg-[#FDF0D5] text-[#003049] hover:bg-[#003049] hover:text-white transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 rounded-lg bg-[#FDF0D5] text-[#003049] hover:bg-[#003049] hover:text-white transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 rounded-lg bg-[#FDF0D5] text-[#003049] hover:bg-[#003049] hover:text-white transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 md:px-10 bg-[#FDF0D5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-[#003049] hover:bg-[#003049] text-4xl font-semibold rounded-[0.3rem] p-3 text-white mb-4">Our Location</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-[#003049] mb-4">Visit Our Headquarters</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our main office is located in Tech City, with easy access to major transportation hubs.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image 
                src="/head.jpg" 
                alt="Map showing ResQ-Tech headquarters location" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-[#20455c] hover:bg-[#669BBC] text-4xl font-semibold rounded-[0.3rem] p-3 text-white mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-[#003049] mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about ResQ-Tech.
            </p>
          </div>
        </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How can I request a demo of the ResQ-Tech platform?",
                answer: "You can request a demo by filling out the contact form on this page or by emailing demo@resq-tech.com. Our team will get back to you within 24 hours to schedule a personalized demonstration."
              },
              {
                question: "What kind of training do you provide for new users?",
                answer: "We offer comprehensive training programs tailored to different user roles, including admin training, field team training, and technical integration training. All training can be conducted remotely or on-site depending on your needs."
              },
              {
                question: "Is ResQ-Tech available for deployment worldwide?",
                answer: "Yes, ResQ-Tech is designed for global deployment and has been successfully implemented across 6 continents. Our platform supports multiple languages and can be adapted to various regulatory environments."
              },
              {
                question: "How does ResQ-Tech handle data security and privacy?",
                answer: "We implement industry-leading security measures including end-to-end encryption, role-based access controls, and regular security audits. All data is stored in compliance with relevant regulations including GDPR and HIPAA where applicable."
              },
              {
                question: "Can ResQ-Tech integrate with our existing systems?",
                answer: "Yes, ResQ-Tech is built with integration in mind. We offer APIs and pre-built connectors for common emergency management systems, GIS platforms, and communication tools. Our team can work with you to develop custom integrations as needed."
              },
              {
                question: "What kind of support does ResQ-Tech provide?",
                answer: "We offer 24/7 technical support for all customers, with guaranteed response times based on issue severity. Our support team includes disaster management experts who understand both the technical and operational aspects of emergency response."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#003049] mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
            </div>
            </section>
            </>
  )
}

