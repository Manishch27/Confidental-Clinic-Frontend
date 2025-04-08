"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Wallet, Clock, Users, Laptop2, UserCheck, Heart, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link";
import aboutImage1 from "@/public/about-image1.jpeg"
import aboutImage2 from "@/public/about-image2.jpeg"
import aboutImage3 from "@/public/about-image3.jpeg"

const features = [
  {
    icon: <Wallet className="h-6 w-6" />,
    title: "Transparent Pricing",
    description: "Clear and honest pricing with no hidden fees"
  },
  {
    icon: <Laptop2 className="h-6 w-6" />,
    title: "Modern Technology",
    description: "State-of-the-art dental equipment and procedures"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Low Waiting Times",
    description: "Efficient scheduling to respect your time"
  },
  {
    icon: <UserCheck className="h-6 w-6" />,
    title: "Personalized Care",
    description: "Tailored treatment plans for your unique needs"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Skilled Team",
    description: "Experienced professionals dedicated to your care"
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Patient Comfort",
    description: "Creating a relaxing and comfortable environment"
  }
]

const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "20k+", label: "Happy Patients" },
  { value: "10+", label: "Expert Dentists" },
]

function FeatureItem({ feature, index }: { feature: typeof features[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
    >
      <div className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
        {feature.icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
      </div>
    </motion.div>
  )
}

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white py-20 dark:from-blue-950/10 dark:to-gray-900">
      <div className="absolute inset-0 bg-grid-blue-500/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.6))]" />
      <div className="lg:px-16 px-4 relative">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-400/10 dark:text-blue-400"
              >
                About Confidental
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
              >
                Transforming Dental Care in{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Your Community
                </span>
              </motion.h2>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              One of the leading dental clinics in the region, Confidental was founded with a vision to provide exceptional dental care using cutting-edge technology and a patient-first approach.
            </motion.p>

            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2 text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.slice(0, 4).map((feature, index) => (
                <FeatureItem key={index} feature={feature} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Link href="/about">
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-8 text-white dark:text-black transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative grid gap-6">
              {/* Main Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
                <Image
                  src={aboutImage1}
                  alt="Modern Dental Clinic"
                  fill
                  className="object-cover object-[25%_center]"
                />
              </div>

              {/* Secondary Images */}
              <div className="grid grid-cols-2 gap-6">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
                  <Image
                    src={aboutImage2}
                    alt="Dental Equipment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
                  <Image
                    src={aboutImage3}
                    alt="Patient Care"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 left-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 text-white shadow-lg"
              >
                <p className="text-sm font-medium">10+ Years of Excellence</p>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -left-8 top-1/4 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400/30 to-blue-300/10 blur-2xl" />
            <div className="absolute -bottom-8 right-1/4 h-40 w-40 rounded-full bg-gradient-to-br from-blue-600/30 to-blue-400/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

