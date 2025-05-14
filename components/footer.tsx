import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">M</span>
              </div>
              <div>
                <div className="font-bold text-xl text-white">Meister Elite Soccer</div>
                <div className="text-xs text-gray-400">Apex Sports Agency USA</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">Professional soccer training for ages 8-18 in Bryan, Texas.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-400 hover:text-white">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/coaches" className="text-gray-400 hover:text-white">
                  Coaches
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-400 hover:text-white">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  Allen Academy
                  <br />
                  Bryan, TX, USA
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <a href="mailto:apexsportsagencykorea@gmail.com" className="text-gray-400 hover:text-white">
                  apexsportsagencykorea@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to receive updates about our camps and soccer tips.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
              />
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Meister Elite Soccer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
