import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Image src="/lux-africa-logo.png" alt="Lux Africa" width={160} height={60} className="mb-4" />
            <p className="font-inter text-white/80 mb-6 max-w-md leading-relaxed">
              Experience the ultimate luxury travel in Africa with our premium tours, wildlife safaris, and car hire
              services across the continent's most breathtaking destinations.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {["Tours", "Safaris", "Car Hire", "About Us", "Gallery", "Blog"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-inter text-white/80 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4 text-primary">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-primary mr-3" />
                <span className="font-inter text-white/80">info@luxafrica.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-primary mr-3" />
                <span className="font-inter text-white/80">+254 700 123 456</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-primary mr-3 mt-1" />
                <span className="font-inter text-white/80">
                  Nairobi, Kenya
                  <br />
                  East Africa
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-inter text-white/60 text-sm">© 2024 Lux Africa. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="font-inter text-white/60 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-inter text-white/60 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
