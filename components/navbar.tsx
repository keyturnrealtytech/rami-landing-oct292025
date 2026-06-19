"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CalendlyLink } from "@/components/calendly-link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#eef7f5]/85 backdrop-blur-xl border-b border-[#e4ece8]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-semibold tracking-tight">Rami Rafeh</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <a
              href="#destinations"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Listings
            </a>
            <a href="#about" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#reviews" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Reviews
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#15211f] text-white hover:bg-[#15211f]/90 rounded-full px-6"
            >
              <CalendlyLink>Consultation</CalendlyLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-6 py-6 space-y-4">
            <a href="#destinations" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Listings
            </a>
            <a href="#about" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              About
            </a>
            <a href="#reviews" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Reviews
            </a>
            <a href="#contact" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Contact
            </a>
            <Button
              asChild
              className="w-full bg-[#15211f] text-white hover:bg-[#15211f]/90 rounded-full"
            >
              <CalendlyLink>Consultation</CalendlyLink>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
