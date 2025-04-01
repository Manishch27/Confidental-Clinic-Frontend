"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react'
import { useTheme } from "next-themes"

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Doctors", href: "/about#doctors" },
  { name: "Gallery", href: "/gallery" },
  { name: "Book Appointment", href: "/#appointment" },
  { name: "Contact Us", href: "/contact" },
]

const contactInfo = [
  {
    icon: <Phone className="h-5 w-5" />,
    label: "24/7 Emergency",
    value: "+91 0565355388",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email Us",
    value: "contact@myconfidental.in",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Visit Us",
    value: "123 Dental Street, Mathura, UP 281001",
  },
  
  {
    icon: <Clock className="h-5 w-5" />,
    label: "Working Hours",
    value: "Mon - Sat, 10:00 - 2PM, 4:00 - 8PM",
  },

  {
    icon: <Clock className="h-5 w-5" />,
    label: "Working Hours",
    value: "Sun, 10:00 AM - 2:00 PM",
  },
]

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com/confidental", label: "Facebook" },
  { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/confidental", label: "Twitter" },
  { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/confidental", label: "Instagram" },
  { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/company/confidental", label: "LinkedIn" },
]

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="absolute inset-0 bg-grid-blue-500/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.6))]" />
      <div className="lg:px-16 px-4 relative z-10 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* About Section */}
          <div className="space-y-6">
            <Link href="/" className="relative block">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-blue-500/20 blur-2xl dark:bg-blue-400/10" />
                <Image
                  src={theme === "dark" 
                    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2024-12-30_at_10.25.48-removebg-ZR3S2Pty8c61LM6zk9JOMgPt9qT5UL.png"
                    : "https://next-app-rose-rho.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FConfiLogo.889dcac8.png&w=1920&q=75"
                  }
                  alt="Confidental Logo"
                  width={180}
                  height={60}
                  className="relative h-12 w-auto"
                />
              </div>
            </Link>
            <p className="text-muted-foreground">
              Leading the way in dental excellence. Our commitment to your oral health is matched only by our dedication to your comfort and satisfaction.
            </p>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="group relative rounded-full bg-blue-500/10 p-2 text-blue-600 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1 dark:bg-blue-400/10 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 blur transition-all duration-300 group-hover:opacity-50" />
                    <div className="relative">{social.icon}</div>
                    <span className="sr-only">{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-muted-foreground transition-colors hover:text-blue-600"
                  >
                    <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-lg font-semibold text-foreground">Contact Info</h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index} className="group flex items-start gap-3">
                    <div className="rounded-full bg-blue-500/10 p-2 text-blue-600 transition-colors group-hover:bg-blue-500 group-hover:text-white dark:bg-blue-400/10 dark:text-blue-400 dark:group-hover:bg-blue-400 dark:group-hover:text-white">
                      {info?.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info?.label}</p>
                      {index === 0 ? (
                        <a href={`tel:${info.value.replace(/\s/g, '')}`} className="font-medium hover:text-blue-600">
                          {info?.value}
                        </a>
                      ) : index === 1 ? (
                        <a href={`mailto:${info?.value}`} className="font-medium hover:text-blue-600">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info?.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div id="footer-bottom-bar" className="lg:px-16 px-4 relative border-t bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
        <div className="absolute inset-0 bg-grid-white/[0.2] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
        <div className="container relative z-10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-white">
              © {new Date().getFullYear()} Confidental. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-white">
              <span>Website by</span>
              <a 
                href="https://www.instagram.com/tech_strack/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative font-semibold text-white transition-all duration-300 hover:text-blue-200"
              >
              Techstrack
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-200 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <Heart className="h-4 w-4 text-red-300 animate-pulse" />
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-1/4 w-12 h-12 bg-white/10 rounded-full blur-xl" />
        <div className="absolute top-0 right-1/4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      </div>
    </footer>
  )
}

