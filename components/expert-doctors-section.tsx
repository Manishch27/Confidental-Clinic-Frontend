"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {Award, Clock } from 'lucide-react'
import drPankaj from "@/public/dr-pankaj-chaudhary.jpeg"
import drSunil from "@/public/dr-sunil-fauzdar.jpeg"
import drSheetal from "@/public/dr-sheetal-sharma.jpeg"
import drVipin from "@/public/dr-vipin-sharma.jpeg"
import drKajal from "@/public/dr-kajal.jpeg"
import drRitu from "@/public/dr-ritu.jpeg"

const doctors = [
  {
    name: "Dr. Pankaj Chaudhary",
    edu: "B.D.S, M.D.S",
    image: drPankaj,
    description: "Expert in dental surgery and implants, delivering precise care with over 10 years of experience.",
    specialties: ["Dental Surgeon", "Dental Implants"],
    experience: '10+',
  },

  {
    name: "Dr. Vipin Sharma",
    edu: "B.D.S, M.D.S",
    image: drVipin,
    description: "Specializing in orthodontics, Dr. Vipin is passionate about creating beautiful smiles.",
    specialties: ["Orthodontics", "Dentofacial Orthodontics"],
    experience: '10+',
  },

  {
    name: "Dr. Sunil Fauzdar",
    edu: "B.D.S, M.D.S",
    image: drSunil,
    description: "Specializes in oral and facial surgery, ensuring positive and gentle patient experiences.",
    specialties: ["Oral", "maxillofacial surgeon"],
    experience: '12+',
  },
  {
    name: "Dr. Sheetal Sharma",
    edu: "B.D.S, M.I.D.A",
    image: drSheetal,
    description: "Specializing in clinical cosmetology and dental surgery, Dr. Sheetal is committed to enhancing smiles and confidence.",
    specialties: ["Dental Surgeon", "Clinical Cosmetologist"],
    experience: '8+',
  },

  {
    name: "Dr. Kajal",
    edu: "B.D.S",
    image: drKajal,
    description: "Dr. Kajal Skilled in oral surgeries and implants, focused on advanced procedures and patient care.",
    specialties: ["Dental Surgeon", "Dental Implants"],
    experience: '8+',
  },

  {
    name: "Dr. Ritu Agrawal",
    edu: "B.D.S, M.D.S",
    image: drRitu,
    description: "Specializing in the prevention, diagnosis, and treatment of gum disease, as well as advanced periodontal surgeries and dental implant placement for optimal oral health.",
    specialties: ["Periodontist", "Oral Implants"],
    experience: '5+',
  },
]

function DoctorCard({ doctor, index }: { doctor: typeof doctors[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 p-6">
        <div className="relative mb-4 h-64 w-full overflow-hidden rounded-xl">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{doctor.name}</h3>
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{doctor.edu}</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{doctor.description}</p>
        <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Award className="mr-2 h-4 w-4" />
          <span>{doctor.specialties.join(", ")}</span>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Clock className="mr-2 h-4 w-4" />
          <span>{doctor.experience} years of experience</span>
        </div>
      </div>
    </motion.div>
  )
}

export function ExpertDoctorsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50/50 py-20 dark:from-gray-900 dark:to-blue-950/10">
      <div className="absolute inset-0 bg-grid-blue-500/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.6))]" />
      <div className="lg:px-16 px-4 relative">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-400/10 dark:text-blue-400"
          >
            Our Expert Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
          >
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Expert Doctors
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
            className="mt-6 text-lg text-gray-600 dark:text-gray-300"
          >
            Our team of highly skilled professionals is dedicated to providing you with the best dental care possible.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

