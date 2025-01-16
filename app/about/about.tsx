// Page for the use of the use client hook

"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Wallet, Clock, Users, Laptop2, UserCheck, Heart, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout"

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
    { value: "15k+", label: "Happy Patients" },
    { value: "10+", label: "Expert Dentists" },
    { value: "98%", label: "Patient Satisfaction" },
  ]

  const teamMembers = [
    {
      name: "Dr. Pankaj Chaudhary",
      role: "Lead Dentist",
      image: "https://i.ibb.co/vVcV3zN/Whats-App-Image-2024-12-12-at-18-32-39.jpg?height=400&width=300",
      description: "Expert in dental surgery and implants, delivering precise care with over 10 years of experience.",
    },
    {
      name: "Dr. Sunil Fauzdar",
      role: "Oral & maxillofacial surgeon",
      image: "https://i.ibb.co/pw0rLYZ/Whats-App-Image-2024-12-23-at-20-04-46.jpg?height=400&width=300",
      description: "Specializes in oral and facial surgery, ensuring positive and gentle patient experiences.",
    },
    {
      name: "Dr. Anuradha Solanki",
      role: "Dental Surgeon",
      image: "https://i.ibb.co/J7b7gKj/Whats-App-Image-2024-12-23-at-20-06-22.jpg?height=400&width=300",
      description: "Dr. Anuradha Skilled in oral surgeries and implants, focused on advanced procedures and patient care.",
    },
    {
      name: "Dr. Vipin Sharma",
      role: "Dentofacial Orthodontics",
      image: "/placeholder.svg?height=400&width=300",
      description: "Specializing in orthodontics, Dr. Vipin is passionate about creating beautiful smiles.",
    },
  ]

  export function FeatureItem({ feature, index }: { feature: typeof features[0]; index: number }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group flex items-start gap-4 rounded-2xl bg-white/50 p-4 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 dark:bg-white/5 dark:hover:bg-white/10"
      >
        <div className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
          {feature.icon}
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </div>
      </motion.div>
    )
  }

  function TeamMember({ member, index }: { member: typeof teamMembers[0]; index: number }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-white/40 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:from-blue-950/50 dark:to-blue-900/20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative z-10 space-y-4">
          <Image
            src={member.image}
            alt={member.name}
            width={300}
            height={400}
            className="mx-auto rounded-xl object-cover"
          />
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400">{member.role}</p>
          </div>
          <p className="text-center text-sm text-muted-foreground">{member.description}</p>
        </div>
      </motion.div>
    )
  }

  export default function About() {
    return(
      <Layout>
      <div className="bg-gradient-to-b from-blue-50/50 to-white py-20 dark:from-blue-950/10 dark:to-background">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-400/10 dark:text-blue-400"
            >
              About Confidental
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Transforming Dental Care in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Your Community
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4"
            >
              <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              Confidental was founded with a vision to provide exceptional dental care using cutting-edge technology and a patient-first approach.
            </motion.p>
          </div>
  
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-muted-foreground"
              >
                At Confidental, we believe that a healthy smile is the foundation of overall well-being. Our team of experienced professionals is dedicated to providing comprehensive dental care in a comfortable and welcoming environment. We combine the latest advancements in dental technology with personalized treatment plans to ensure the best possible outcomes for our patients.
              </motion.p>
  
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
  
              <div className="grid gap-6 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <FeatureItem key={index} feature={feature} index={index} />
                ))}
              </div>
  
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-8 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Book an Appointment
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
  
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
                <Image
                  src="https://i.ibb.co/qxvpT4Z/Whats-App-Image-2024-12-12-at-10-44-39.jpg?height=800&width=1000"
                  alt="Confidental Clinic"
                  fill
                  className="object-cover object-[25%_center]"
                />
              </div>
            </motion.div>
          </div>
  
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto mb-16 max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Expert Doctors</h2>
              <div className="mt-4 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
              <p className="mt-6 text-lg text-muted-foreground">
                Our team of highly skilled professionals is dedicated to providing you with the best dental care possible.
              </p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} member={member} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      </Layout>
    )
  }