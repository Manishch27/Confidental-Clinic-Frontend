"use client"

import { useEffect, useRef, useState } from 'react'
// import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, MessageCircle, User } from 'lucide-react'
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Rohan Sharma",
    image: User,
    content: "Confidental transformed my smile and boosted my confidence. The team's expertise and care are unmatched!",
    rating: 5,
    location: "Balajipuram, Mathura",
    date: "2 weeks ago",
    treatment: "Dental Implants"
  },
  {
    name: "Saurabh",
    image: User,
    content: "I've never felt more at ease at a dental clinic. The staff is friendly, and the results are amazing!",
    rating: 5,
    location: "Chandandanvan Phase-I, Mathura",
    date: "15 days ago",
    treatment: "Invisalign"
  },
  {
    name: "Vishal Chaudhary",
    image: User,
    content: "From routine cleanings to complex procedures, Confidental always delivers top-notch care. Highly recommended!",
    rating: 5,
    location: "Pushpanjali, Township, Mathura",
    date: "3 weeks ago",
    treatment: "Teeth Whitening"
  },
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="group relative mx-auto w-full max-w-none sm:max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-white to-blue-50/50 p-4 sm:p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:from-blue-950/50 dark:to-blue-900/20 md:p-8">
      {/* Background Elements */}
      <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-blue-500/5" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-blue-500/5" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-blue-500/20 transition-all duration-300 group-hover:ring-blue-500/40">
                <testimonial.image
                  className="h-16 w-16 text-blue-500 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 rounded-full bg-blue-500 p-1 text-white">
                <MessageCircle className="h-3 w-3" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
            
            </div>
          </div>
          <div className="mt-2 flex gap-1 text-yellow-400 sm:mt-0">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mt-4 text-muted-foreground">
          <Quote className="mb-2 h-6 w-6 text-blue-500/20" />
          <p className="text-base sm:text-lg">{testimonial.content}</p>
        </div>

        {/* Footer */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <div className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
            {testimonial.treatment}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{testimonial.location}</span>
            <span>•</span>
            <span>{testimonial.date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50/50 py-16 dark:from-background dark:to-blue-950/10">
      {/* Background Elements */}
      <div className="absolute left-0 top-0 -translate-x-1/2">
        <div className="h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
      <div className="absolute right-0 top-0 translate-x-1/2">
        <div className="h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="lg:px-16 px-4 relative">
        <div className="mx-auto mb-12 sm:mb-16 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-600"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Patient Stories</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Patients Say
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4"
          >
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
          </motion.div>
        </div>

        <div ref={containerRef} className="relative mx-auto w-full max-w-none px-2 sm:max-w-6xl sm:px-4">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex-shrink-0 px-4"
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-4 sm:mt-8 flex justify-center gap-2 sm:gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full transition-transform hover:scale-110"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full transition-transform hover:scale-110"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

