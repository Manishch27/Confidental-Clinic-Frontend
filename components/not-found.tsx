import Link from 'next/link'
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 flex items-center justify-center p-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-blue-500/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.5))]" />
        
        {/* Animated background shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 dark:bg-blue-700 dark:opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 dark:bg-purple-700 dark:opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <div className="relative z-10 text-center">
          <motion.h1 
            className="text-9xl font-bold text-gray-200 dark:text-gray-700"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            404
          </motion.h1>
          <motion.div
            className="mt-4 space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Oops! Page Not Found</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
              We couldn&apos;t find the page you&apos;re looking for. It might have been removed, renamed, or doesn&apos;t exist.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <Button asChild>
                <Link href="/" className="inline-flex items-center">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact" className="inline-flex items-center">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

