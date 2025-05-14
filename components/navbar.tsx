"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold">M</span>
            </div>
            <div>
              <div className="font-bold text-xl text-green-700">Meister Elite Soccer</div>
              <div className="text-xs text-gray-500">Summer Camp 2025</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
              Home
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-green-600 font-medium">
              Programs
            </Link>
            <Link href="/schedule" className="text-gray-700 hover:text-green-600 font-medium">
              Schedule
            </Link>
            <Link href="/coaches" className="text-gray-700 hover:text-green-600 font-medium">
              Coaches
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-green-600 font-medium">
              FAQs
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium">
              Contact
            </Link>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/register">Register Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/programs"
              className="block text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/schedule"
              className="block text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule
            </Link>
            <Link
              href="/coaches"
              className="block text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Coaches
            </Link>
            <Link
              href="/faq"
              className="block text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full bg-green-600 hover:bg-green-700">
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                Register Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
