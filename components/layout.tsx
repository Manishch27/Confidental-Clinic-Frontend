"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { BookingDialog } from "@/components/booking-dialog"
import { Toaster } from 'react-hot-toast'
import { WhatsAppButton } from "@/components/whatsapp-button"
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BookingDialog />
        <Toaster position="bottom-right" />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  )
}

