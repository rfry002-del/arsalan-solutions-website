"use client"
import Image from "next/image"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#naics", label: "NAICS Codes" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "Federal Contract Sourcing",
  "Proposal Development",
  "LPTA Strategy",
  "Procurement & Supply Chain",
  "Logistics Support",
  "IT Solutions",
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-3 mb-6 group">
            <Image
              src="/images/logo2.jpeg"
              alt="Arsalan Solutions"
              width={180}
              
              height={100}
              className="h-14 w-auto object-contain"
              priority
            />
              <span className="text-xl font-bold text-foreground">
                Arsalan Solutions
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Delivering federal contracting excellence with precision, compliance, 
              and results-driven solutions.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:abarekzay@arsalansolutions.com" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                abarekzay@arsalansolutions.com
              </a>
              <a 
                href="tel:+15406429453" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                540-642-9453
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Fredericksburg, VA
              </div>
            </div>
            {/* Social Media */}
<div className="flex items-center gap-4 mt-6">
  <a
    href="https://facebook.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
  >
    <Facebook className="w-4 h-4" />
  </a>

  <a
    href="https://youtube.com/yourchannel"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
  >
    <Youtube className="w-4 h-4" />
  </a>

  <a
    href="https://instagram.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
  >
    <Instagram className="w-4 h-4" />
  </a>
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Compliance</h3>
            <div className="flex flex-wrap gap-2">
              {["FAR", "BAA", "TAA", "NDAA", "SAM"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold"
                >
                  {badge}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
              Fully compliant with all federal acquisition regulations and standards.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Arsalan Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
