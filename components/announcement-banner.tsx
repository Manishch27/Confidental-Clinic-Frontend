"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const announcements = [
  "🦷 New Patients: Free Consultation & x-ray",
  "💫 Same Day Emergency Appointments Available",
  "📅 Book An Appointment Now!",
]

export function AnnouncementBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-3 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-sm lg:font-md text-center"
            >
              {announcements[currentIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

