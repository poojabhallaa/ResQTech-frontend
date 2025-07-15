"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, AlertTriangle } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useMobile()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "PROBLEM & IMPACT", href: "/impact" },
    { name: "FEATURES", href: "/features" },
    { name: "TECH STACK", href: "/tech" },
    { name: "DASHBOARD", href: "/dashboard" },
    { name: "PARTNERS", href: "/partners" },
    { name: "CONTACT", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "w-full py-4 px-6 md:px-10 transition-all duration-300 z-50 sticky top-0",
        isScrolled ? "bg-[#003049] shadow-md" : "bg-gray-800",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <AlertTriangle className="h-8 w-8 text-[#C1121F]" />
          <span className="font-bold text-xl text-white">ResQ-Tech</span>
        </Link>

        {isMobile ? (
          <Button variant="ghost" size="icon" className="text-white" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        ) : (
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white hover:text-[#a0b4c1] transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-[#C1121F] hover:bg-[#780000] text-white">Request Demo</Button>
          </nav>
        )}

        {/* Mobile menu */}
        {isMobile && isOpen && (
          <div className="fixed inset-0 top-[72px] bg-[#003049] z-50 flex flex-col p-6">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white hover:text-[#669BBC] transition-colors uppercase tracking-wider"
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-[#C1121F] hover:bg-[#780000] text-white w-full mt-4">Request Demo</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
