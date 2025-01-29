"use client"

import { useState } from "react"
import Image from "next/image"
import { motion} from "framer-motion"
import { ArrowRight, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog"
import generalDentistry from "@/public/general-dentistry.webp"
import cosmeticDentistry from "@/public/cosmetic-dentistry.webp"
import dentalImplants from "@/public/dental-implants.webp"
import orthodontics from "@/public/orthodontics.webp"
import pediatricDentistry from "@/public/pediatric-dentistry.webp"
import oralSurgery from "@/public/oral-surgery.webp"



const services = [
  {
    title: "General Dentistry",
    description: "Comprehensive dental care including cleanings, fillings, and preventive treatments for optimal oral health.",
    features: ["Regular Checkups", "Dental Cleaning", "Cavity Prevention", "Oral Health Education"],
    image: generalDentistry,
    longDescription: "Our general dentistry services form the foundation of good oral health. We offer comprehensive care that includes regular checkups, professional cleanings, and preventive treatments. Our team is dedicated to educating patients about proper oral hygiene practices and early detection of potential issues. From filling cavities to performing routine examinations, we ensure your teeth and gums stay healthy for years to come."
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our advanced cosmetic dental procedures and expert care.",
    features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeover"],
    image: cosmeticDentistry,
    longDescription: "Our cosmetic dentistry services are designed to enhance the appearance of your smile. Whether you're looking for a brighter smile through professional teeth whitening, or a complete transformation with veneers, our expert team can help. We use the latest techniques and materials to ensure natural-looking results that boost your confidence. From minor touch-ups to complete smile makeovers, we're here to help you achieve the smile of your dreams."
  },
  {
    title: "Dental Implants",
    description: "Restore your smile with state-of-the-art dental implants that look and feel like natural teeth.",
    features: ["Titanium Implants", "Crown Fitting", "Bone Grafting", "Full Mouth Restoration"],
    image: dentalImplants,
    longDescription: "Dental implants offer a permanent solution for missing teeth. Our implant procedures use cutting-edge technology to place titanium posts that act as artificial tooth roots. These are then fitted with custom-made crowns that match your natural teeth. For patients needing multiple teeth replaced, we offer full mouth restoration options. Our experienced team ensures a comfortable experience and stunning results, giving you back your full, confident smile."
  },
  {
    title: "Orthodontics",
    description: "Achieve the perfect smile with our comprehensive orthodontic treatments and solutions.",
    features: ["Invisible Braces", "Traditional Braces", "Clear Aligners", "Retainers"],
    image: orthodontics,
    longDescription: "Our orthodontic treatments cater to patients of all ages, helping to straighten teeth and correct bite issues. We offer a range of options including traditional braces, clear aligners, and invisible braces to suit different preferences and needs. Our team of orthodontists uses advanced 3D imaging to plan your treatment, ensuring precise and efficient results. We're committed to creating beautiful, aligned smiles that not only look great but also contribute to better oral health."
  },
  {
    title: "Pediatric Dentistry",
    description: "Specialized dental care for children in a friendly and comfortable environment.",
    features: ["Child-Friendly Atmosphere", "Preventive Care", "Early Orthodontic Treatment", "Dental Education for Kids"],
    image: pediatricDentistry,
    longDescription: "Our pediatric dentistry services are tailored to make dental visits enjoyable for children. We've created a warm, welcoming environment that puts young patients at ease. Our pediatric specialists are trained to handle the unique dental needs of children, from infants to teenagers. We focus on preventive care, early detection of orthodontic issues, and educating both children and parents about good oral hygiene habits. Our goal is to establish a positive association with dental care that lasts a lifetime."
  },
  {
    title: "Oral Surgery",
    description: "Expert oral surgical procedures to address complex dental issues and improve oral health.",
    features: ["Wisdom Teeth Removal", "Dental Extractions", "Jaw Surgery", "Bone Grafting"],
    image: oralSurgery,
    longDescription: "Our oral surgery services cover a wide range of procedures to treat more complex dental issues. From wisdom teeth removal to corrective jaw surgery, our skilled oral surgeons use the latest techniques to ensure safe, effective treatments. We also offer bone grafting for patients preparing for dental implants. Our team is committed to patient comfort, using advanced anesthesia options and providing comprehensive pre- and post-operative care to ensure a smooth recovery process."
  },
]

function ServiceCard({ service, index}: { service: typeof services[0]; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-900/30">
        <CardHeader className="relative pb-0">
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={400}
            className="rounded-t-xl object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="mb-2 text-2xl">{service.title}</CardTitle>
          <CardDescription className="mb-4">{service.description}</CardDescription>
          <div className="grid grid-cols-2 gap-2">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-1 rounded-lg bg-blue-500/5 px-2 py-1 text-xs text-blue-600"
              >
                <div className="h-1 w-1 rounded-full bg-blue-600" />
                {feature}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50/50 to-white py-20 dark:from-blue-950/10 dark:to-background">
        <div className="lg:px-16 px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-400/10 dark:text-blue-400"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Dental Care
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
              Experience excellence in dental care with our comprehensive range of services
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>

          <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-2xl">
                  {selectedService?.title}
                </DialogTitle>
              </DialogHeader>
              <div className="relative mt-4 aspect-video overflow-hidden rounded-xl">
                <Image
                  src={selectedService?.image || ''}
                  alt={selectedService?.title || ''}
                  fill
                  className="object-cover"
                />
              </div>
              <DialogDescription className="mt-4 text-foreground">
                {selectedService?.longDescription}
              </DialogDescription>
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedService?.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-600"
                  >
                    <Plus className="h-4 w-4" />
                    {feature}
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button className="rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-8">
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 flex justify-center"
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
      </div>
    </Layout>
    )}