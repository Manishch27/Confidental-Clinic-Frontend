"use client"

import { useState, useEffect, useRef } from 'react'
import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showText, setShowText] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const footer = document.querySelector('#footer-bottom-bar')
    if (footer) {
      observer.observe(footer)
    }

    return () => {
      if (footer) {
        observer.unobserve(footer)
      }
    }
  }, [])

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300 && !isFooterVisible) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [isFooterVisible])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowText(true)
        playSound()
      }, 1000)

      return () => clearTimeout(timer)
    } else {
      setShowText(false)
    }
  }, [isVisible])

  const playSound = () => {
    const audio = new Audio('/sounds/notification.mp3')
    audio.play().catch(error => console.error('Error playing sound:', error))
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-end">
      {showText && (
        <div className="mr-4 mb-2 animate-fade-in-up">
          <div className="relative rounded-lg bg-white p-4 text-sm font-medium text-gray-800 shadow-lg dark:bg-gray-800 dark:text-white">
            Hey, I&apos;m here!
            <div className="absolute -bottom-2 right-2 h-4 w-4 rotate-45 bg-white dark:bg-gray-800"></div>
          </div>
        </div>
      )}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-8 w-8 animate-pulse" />
      </a>
    </div>
  )
}

