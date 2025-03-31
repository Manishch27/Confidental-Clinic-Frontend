"use client";

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Layout } from "@/components/layout"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'
import { useState } from "react"

const clinics = {
    balajipuram: {
      name: "Balajipuram Clinic",
      contactInfo: [
        {
          icon: <Phone className="h-6 w-6" />,
          label: "Phone",
          value: "+91 9876543210",
          description: "Mon-Sat from 9am to 8pm"
        },
        {
          icon: <Mail className="h-6 w-6" />,
          label: "Email",
          value: "balajipuram@myconfidental.in",
          description: "Online support"
        },
        {
          icon: <MapPin className="h-6 w-6" />,
          label: "Address",
          value: "123 Balajipuram Main Road, Mathura, UP 281001",
          description: "Visit us in person"
        },
        {
          icon: <Clock className="h-6 w-6" />,
          label: "Working Hours",
          value: "Mon - Sat, 10:00 - 2PM, 4:00 - 8PM",
          description: "Sunday appointments are only available from 10:00 AM to 2:00 PM"
        },
      ],
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453782.24541579146!2d77.48315364877307!3d27.30774900583918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736f49ad86d7fd%3A0xa49e84a10e25ba20!2sShri%20Radha%20Town!5e0!3m2!1sen!2sin!4v1735219883035!5m2!1sen!2sin"
    },
    township: {
      name: "Township Clinic",
      contactInfo: [
        {
          icon: <Phone className="h-6 w-6" />,
          label: "Phone",
          value: "+91 9876543211",
          description: "Mon-Sat from 10am to 7pm"
        },
        {
          icon: <Mail className="h-6 w-6" />,
          label: "Email",
          value: "township@myconfidental.in",
          description: "Online support"
        },
        {
          icon: <MapPin className="h-6 w-6" />,
          label: "Address",
          value: "447A, B.R. TOWN, township, Mathura-281006",
          description: "Visit us in person"
        },
        {
          icon: <Clock className="h-6 w-6" />,
          label: "Working Hours",
          value: "Mon - Sat, 10:00 - 2PM, 4:00 - 8PM",
          description: "Sunday appointments are only available from 10:00 AM to 2:00 PM"
        },
      ],
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453782.24541579146!2d77.48315364877307!3d27.30774900583918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736f49ad86d7fd%3A0xa49e84a10e25ba20!2sShri%20Radha%20Town!5e0!3m2!1sen!2sin!4v1735220213516!5m2!1sen!2sin"
    }
  }

  function ContactCard({ info, index }: { info: typeof clinics.balajipuram.contactInfo[0]; index: number }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 to-white/40 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:from-blue-950/50 dark:to-blue-900/20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative z-10 flex items-start gap-4">
          <div className="rounded-full bg-blue-500/10 p-3 text-blue-600 transition-colors group-hover:bg-blue-500 group-hover:text-white dark:bg-blue-400/10 dark:text-blue-400 dark:group-hover:bg-blue-400 dark:group-hover:text-white">
            {info.icon}
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{info.label}</h3>
            <p className="text-lg font-medium text-blue-600 dark:text-blue-400">{info.value}</p>
            <p className="text-sm text-muted-foreground">{info.description}</p>
          </div>
        </div>
      </motion.div>
    )
  }

  type FormData = {
    name: string
    email: string
    phone: string
    clinic: string
    subject: string
    message: string
  }

export function Contact(){
    const [selectedClinic, setSelectedClinic] = useState<"balajipuram" | "township">("balajipuram")
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    setIsSubmitting(false)
    toast.success("Message sent successfully!")
  }

  return (
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
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Get in Touch with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Confidental
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
              We&apos;re here to answer any questions you may have about our services or to schedule your appointment.
            </motion.p>
          </div>

          <div className="mb-12 flex justify-center space-x-4">
            <Button
              variant={selectedClinic === "balajipuram" ? "default" : "outline"}
              onClick={() => setSelectedClinic("balajipuram")}
              className="rounded-full"
            >
              Balajipuram Clinic
            </Button>
            <Button
              variant={selectedClinic === "township" ? "default" : "outline"}
              onClick={() => setSelectedClinic("township")}
              className="rounded-full"
            >
              Township Clinic
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2">
                {clinics[selectedClinic].contactInfo.map((info, index) => (
                  <ContactCard key={index} info={info} index={index} />
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="overflow-hidden rounded-3xl"
              >
                <iframe
                  src={clinics[selectedClinic].mapSrc}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <h2 className="mb-6 text-2xl font-bold">Send us a Message</h2>
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                      />
                      {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone", { required: "Phone number is required" })}
                    />
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label>Preferred Clinic</Label>
                    <RadioGroup defaultValue="balajipuram" onValueChange={(value) => register("clinic").onChange({ target: { value } })}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="balajipuram" id="balajipuram" />
                        <Label htmlFor="balajipuram">Balajipuram Clinic</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="township" id="township" />
                        <Label htmlFor="township">Township Clinic</Label>
                      </div>
                    </RadioGroup>
                    {errors.clinic && <p className="text-sm text-red-500">{errors.clinic.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      {...register("subject", { required: "Subject is required" })}
                    />
                    {errors.subject && <p className="text-sm text-red-500">{errors.subject.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      {...register("message", { required: "Message is required" })}
                      className="min-h-[150px]"
                    />
                    {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-400" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  )
}