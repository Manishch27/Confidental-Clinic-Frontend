"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Activity, ArrowRight, Sparkles, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { DentalBackground } from "./dental-background"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-20 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 lg:py-32">
      <div className="absolute inset-0 z-0">
        <DentalBackground />
      </div>
      <div className="lg:px-16 px-4 relative z-10 grid gap-16 md:grid-cols-2 md:gap-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center space-y-8 order-2 md:order-1"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-400/20 px-4 py-2 text-sm font-medium text-blue-600 dark:from-blue-400/10 dark:to-blue-300/10">
              <Sparkles className="h-4 w-4" />
              <span>Committed To Excellence</span>
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl xl:text-7xl/none dark:text-white">
              Your Smile,{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                Our Passion
              </span>
            </h1>
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-[600px] text-lg text-gray-600 dark:text-gray-300 md:text-xl"
          >
            Experience personalized and comfortable dental care at Confidental Clinic. Our expert team is dedicated to your oral health and beautiful smile.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/#appointment">
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Book Appointment
                <Calendar className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950"
              >
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid gap-6 sm:grid-cols-2"
          >
            <div className="group flex items-start gap-4 rounded-2xl bg-white p-4 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 dark:bg-gray-800">
              <div className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Full Protection</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Comprehensive dental care with advanced technology</p>
              </div>
            </div>
            <div className="group flex items-start gap-4 rounded-2xl bg-white p-4 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 dark:bg-gray-800">
              <div className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Activity className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Complete Service</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Expert dental solutions for all your needs</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative flex items-center justify-center order-1 md:order-2"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/30 to-transparent blur-3xl" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-blue-400/30 to-transparent blur-3xl" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-transparent blur-3xl" />
          
          <div className="relative aspect-square w-full max-w-[600px]">
            <div className="absolute -inset-4 rounded-full border-2 border-blue-500/20 dark:border-blue-400/10" />
            <Image
              src="https://i.ibb.co/RSdnvCK/tooth-image-Photoroom.png"
              alt="3D Tooth Illustration"
              fill
              className="object-contain transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-8 py-4 text-white shadow-lg"
          >
            <p className="text-sm font-medium">
              State-of-the-art dental care
            </p>
          </motion.div>

          <div className="absolute -right-4 top-1/4 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400/40 to-blue-300/20 shadow-lg backdrop-blur-sm" />
          <div className="absolute -left-4 bottom-1/4 h-24 w-24 rounded-full bg-gradient-to-tr from-blue-600/40 to-blue-500/20 shadow-lg backdrop-blur-sm" />
        </motion.div>
      </div>
    </section>
  )
}

