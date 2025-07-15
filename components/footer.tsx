import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertTriangle, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#003049] text-white py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <AlertTriangle className="h-8 w-8 text-[#C1121F]" />
            <span className="font-bold text-xl">ResQ-Tech</span>
          </Link>
          <p className="text-sm text-gray-300 max-w-xs">
            Transforming disaster response using AI, drones, and real-time data to save lives through smart
            coordination.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-300 hover:text-[#669BBC]">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-[#669BBC]">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-[#669BBC]">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-[#669BBC]">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="text-gray-300 hover:text-[#669BBC] text-sm">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-[#669BBC] text-sm">
              About Us
            </Link>
            <Link href="/impact" className="text-gray-300 hover:text-[#669BBC] text-sm">
              Problem & Impact
            </Link>
            <Link href="/features" className="text-gray-300 hover:text-[#669BBC] text-sm">
              Features
            </Link>
            <Link href="/tech" className="text-gray-300 hover:text-[#669BBC] text-sm">
              Tech Stack
            </Link>
            <Link href="/dashboard" className="text-gray-300 hover:text-[#669BBC] text-sm">
              Dashboard
            </Link>
            <Link href="/partners" className="text-gray-300 hover:text-[#669BBC] text-sm">
              Partners
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-[#669BBC] text-sm">
              Contact
            </Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-[#669BBC] mt-0.5" />
              <span className="text-sm text-gray-300">123 Emergency Lane, Tech City, TC 10101</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-[#669BBC]" />
              <span className="text-sm text-gray-300">+1 (555) 911-RESQ</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-[#669BBC]" />
              <span className="text-sm text-gray-300">info@resq-tech.com</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg">Newsletter</h3>
          <p className="text-sm text-gray-300">
            Stay updated with our latest innovations and disaster response efforts.
          </p>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-[#00436A] border-[#669BBC] text-white placeholder:text-gray-400"
            />
            <Button className="w-full bg-[#C1121F] hover:bg-[#780000]">Subscribe</Button>
          </div>
          <p className="text-xs text-gray-400">
            By subscribing, you agree to our{" "}
            <Link href="/privacy" className="underline hover:text-[#669BBC]">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-700">
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} ResQ-Tech. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
