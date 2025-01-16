import '@/app/globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from 'react-hot-toast'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Confidental Clinic',
  description: 'Expert dental care for your perfect smile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}

