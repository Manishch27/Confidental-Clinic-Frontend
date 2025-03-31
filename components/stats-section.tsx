"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { SmileIcon as Tooth, Activity, Baby, Star } from 'lucide-react'

interface StatItemProps {
  icon: React.ReactNode
  label: string
  value: number
  suffix?: string
}

function StatItem({ icon, label, value, suffix = "+" }: StatItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const stepValue = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += stepValue
        if (current > value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-white/40 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 dark:from-blue-950/80 dark:to-blue-950/40"
    >
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Content */}
      <div className="relative space-y-4">
        <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 p-4 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-5xl font-bold tracking-tight text-foreground">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {count}
              {suffix}
            </span>
          </h3>
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 group-hover:w-full" />
          <p className="text-lg font-medium text-muted-foreground">{label}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function StatsSection() {
  const stats = [
    {
      icon: <Tooth className="h-8 w-8" />,
      label: "Dental Implants",
      value: 1500,
    },
    {
      icon: <Activity className="h-8 w-8" />,
      label: "Root Canals",
      value: 2500,
    },
    {
      icon: <Baby className="h-8 w-8" />,
      label: "Kids Cases",
      value: 1000,
    },
    {
      icon: <Star className="h-8 w-8" />,
      label: "Orthodontic Cases",
      value: 5000,
    },
  ]

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/20 to-background dark:via-blue-950/20" />
      <div className="lg:px-16 px-4 relative">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-400/10 dark:text-blue-400"
          >
            Our Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Our Achievements in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Numbers
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-muted-foreground"
          >
            Trusted by thousands of patients for their dental care needs
          </motion.p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

