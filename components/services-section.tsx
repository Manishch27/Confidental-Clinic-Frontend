"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Stethoscope, SmileIcon as Tooth, Syringe, Smile, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link';

const services = [
  {
    title: "General Dentistry",
    description: "Comprehensive dental care including cleanings, fillings, and preventive treatments for optimal oral health.",
    icon: <Stethoscope className="h-8 w-8" />,
    features: ["Regular Checkups", "Dental Cleaning", "Cavity Prevention", "Oral Health Education"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Dental Implants",
    description: "Restore your smile with state-of-the-art dental implants that look and feel like natural teeth.",
    icon: <Tooth className="h-8 w-8" />,
    features: ["Titanium Implants", "Crown Fitting", "Bone Grafting", "Full Mouth Restoration"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Cosmetic Surgery",
    description: "Transform your smile with our advanced cosmetic dental procedures and expert care.",
    icon: <Syringe className="h-8 w-8" />,
    features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeover"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Orthodontics",
    description: "Achieve the perfect smile with our comprehensive orthodontic treatments and solutions.",
    icon: <Smile className="h-8 w-8" />,
    features: ["Invisible Braces", "Traditional Braces", "Clear Aligners", "Retainers"],
    image: "/placeholder.svg?height=600&width=800",
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-white/40 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:from-blue-950/80 dark:to-blue-950/40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
        
        <div className="relative z-10 space-y-6">
          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <div className="inline-flex rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 p-4 text-white shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 group-hover:w-24" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-blue-500/10 hover:text-blue-600"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <p className="text-muted-foreground">{service.description}</p>
          
          <div className="grid grid-cols-2 gap-4">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-xl bg-blue-500/5 px-3 py-2 text-sm text-muted-foreground"
              >
                <div className="h-1 w-1 rounded-full bg-blue-600" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50/50 py-20 dark:from-background dark:to-blue-950/10">
      <div className="lg:px-16 px-4 relative">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-400/10 dark:text-blue-400"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Dental Care
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
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-muted-foreground"
          >
            Experience excellence in dental care with our comprehensive range of services
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Link href="/services">
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 px-8 hover:shadow-lg hover:shadow-blue-500/25"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

