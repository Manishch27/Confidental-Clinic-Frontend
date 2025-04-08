"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Phone, Clock, Menu, Sun, Moon, ChevronRight, Mail, MapPin, Home, Info, Stethoscope, ImageIcon, Briefcase, MessageSquare, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import logo from "@/public/logo.webp"
import darkLogo from "@/public/logo-dark.webp"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { usePathname } from 'next/navigation'

const navItems = [
  { name: "Home", href: "/", icon: <Home className="h-5 w-5" /> },
  { name: "About", href: "/about", icon: <Info className="h-5 w-5" /> },
  { name: "Services", href: "/services", icon: <Stethoscope className="h-5 w-5" /> },
  { name: "Our Work", href: "/our-work", icon: <Briefcase className="h-5 w-5" /> },
  { name: "Gallery", href: "/gallery", icon: <ImageIcon className="h-5 w-5" /> },
  { name: "Contact", href: "/contact", icon: <MessageSquare className="h-5 w-5" /> },
]

const quickActions = [
  { name: "Book Appointment", href: "/#appointment", icon: <Calendar className="h-5 w-5" /> },
  { name: "Emergency Care", href: "tel:+9105652444007", icon: <Phone className="h-5 w-5" /> },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const pathname = usePathname()
  const [currentLogo, setCurrentLogo] = useState(
    darkLogo
  )
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme')
    const initialTheme = savedTheme || (systemTheme === 'dark' ? 'dark' : 'light')
    setTheme(initialTheme)
  }, [setTheme, systemTheme])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mounted) {
      const currentTheme = theme === 'system' ? systemTheme : theme
      setCurrentLogo(currentTheme === "dark"
        ? darkLogo : logo
      )
    }
  }, [theme, systemTheme, mounted])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }


  return (
    <>
      <AnnouncementBanner />
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
            ? "border-b bg-background/80 backdrop-blur-md"
            : "bg-background"
          }`}
      >
        <div className="lg:px-16 px-4 flex h-20 items-center justify-between">
          <Link href="/" className="relative flex items-center gap-2">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-blue-500/20 blur-2xl dark:bg-blue-400/10" />
              <Image
                src={currentLogo}
                alt="Confidental Logo"
                width={180}
                height={60}
                className="relative h-12 w-auto md:h-16"
              />
            </div>
          </Link>
          <nav className="hidden gap-8 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-foreground ${pathname === item.href
                    ? "text-blue-600 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-blue-600"
                    : "text-muted-foreground"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-6 xl:flex">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-500/10 p-2 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="text-sm">
                  <a href="tel:9105652444007"><p className="font-medium">+91 05652444007</p></a>
                  <p className="text-xs text-muted-foreground">24/7 Emergency</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-500/10 p-2 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-xs text-muted-foreground">10:00 - 2PM, 4:00 - 8PM</p>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full xl:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-md border-0 bg-white dark:bg-gray-950 p-0">
                <div className="flex h-full flex-col">
                  <SheetHeader className="border-b border-blue-100 dark:border-blue-900 p-6">
                    <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex-1 overflow-y-auto">
                    <div className="space-y-8 p-6">
                      {/* Main Navigation */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary">Navigation</h3>
                        <nav className="grid gap-2">
                          {navItems.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={`group flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-500/10 hover:text-blue-600 ${pathname === item.href ? "bg-blue-500/10 text-blue-600" : "text-muted-foreground"
                                }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className="rounded-lg bg-blue-500 p-2 text-white">
                                  {item.icon}
                                </div>
                                <span className="font-medium">{item.name}</span>
                              </div>
                              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          ))}
                        </nav>
                      </div>

                      {/* Quick Actions */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {quickActions.map((action) => (
                            <Link
                              key={action.name}
                              href={action.href}
                              className="flex flex-col items-center justify-center gap-2 rounded-xl bg-blue-50 dark:bg-blue-900 p-4 text-center text-blue-600 dark:text-blue-300 transition-all hover:bg-blue-100 dark:hover:bg-blue-800"
                            >
                              <div className="rounded-lg bg-blue-500 p-3 text-white">
                                {action.icon}
                              </div>
                              <span className="text-sm font-medium">{action.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary">Contact Us</h3>
                        <div className="rounded-xl bg-blue-50 dark:bg-blue-900 p-6 space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-blue-500 p-2 text-white">
                              <Phone className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-medium text-blue-600 dark:text-blue-300">+91 8979443448</p>
                              <p className="text-sm text-blue-500 dark:text-blue-400">24/7 Emergency</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-blue-500 p-2 text-white">
                              <Mail className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-medium text-blue-600 dark:text-blue-300">contact@myconfidental.in</p>
                              <p className="text-sm text-blue-500 dark:text-blue-400">Email Support</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-blue-500 p-2 text-white">
                              <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-medium text-blue-600 dark:text-blue-300">447A, B.R. TOWN, Township</p>
                              <p className="text-sm text-blue-500 dark:text-blue-400">Mathura, UP 281006</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-blue-500 p-2 text-white">
                              <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-medium text-blue-600 dark:text-blue-300">123 Baljipuram Main Road</p>
                              <p className="text-sm text-blue-500 dark:text-blue-400">Mathura, UP 281001,</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-blue-500 p-2 text-white">
                              <Clock className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-medium text-blue-600 dark:text-blue-300">Mon - Fri: 10:00 - 2PM, <br/> 4:00 - 8PM</p>
                              <p className="font-medium text-blue-600 dark:text-blue-300">Sun: 10:00 - 2PM</p>
                              <p className="text-sm text-blue-500 dark:text-blue-400">Working Hours</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="border-t border-blue-100 dark:border-blue-900 p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-900"
                      >
                        <a href="tel:+9105652444007">
                          <>
                            <Phone className="mr-2 h-4 w-4" />
                            Call Now
                          </>
                        </a>
                      </Button>
                      <Button
                        asChild
                        className="w-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                      >
                        <Link href="/contact">
                          <Mail className="mr-2 h-4 w-4" />
                          Contact Us
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}

