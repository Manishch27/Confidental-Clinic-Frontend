"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Calendar,
  Clock,
  Phone,
  Mail,
  User2,
  Building2,
  CalendarCheck,
  Stethoscope,
  PillIcon as Pills,
  VideoIcon,
  Activity,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

const features = [
  {
    icon: <Stethoscope className="h-6 w-6" />,
    title: "Expert Medical Consultation",
    description: "Get guidance from our experienced dental professionals",
  },
  {
    icon: <Pills className="h-6 w-6" />,
    title: "Treatment Discounts",
    description: "Up to 30% off on dental procedures",
  },
  {
    icon: <VideoIcon className="h-6 w-6" />,
    title: "Virtual Consultations",
    description: "Available for follow-ups and minor concerns",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Complete Dental Care",
    description: "Comprehensive treatment plans tailored for you",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Flexible Hours",
    description: "Mon-Sat: 10AM-2PM, 4PM-8PM, Sun: 10AM-2PM",
  },
]

type FormData = {
  location: string
  doctor: string
  date: string
  time: string
  visited: string
  name: string
  phone: string
  email: string
}

export function AppointmentSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    // Format the message for WhatsApp
    const message = `
*New Appointment Request*
----------------------------
*Name:* ${data.name}
*Phone:* ${data.phone}
*Email:* ${data.email}
*Location:* ${data.location === "downtown" ? "Balajipuram Clinic" : "Township Clinic"}
*Doctor:* ${data.doctor}
*Date:* ${data.date}
*Time:* ${data.time}
*First Visit:* ${data.visited === "yes" ? "No" : "Yes"}
----------------------------
`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)

    // WhatsApp phone number - replace with your actual number
    const phoneNumber = "917500286600" // Add your WhatsApp number here (with country code, no + or spaces)

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    toast.success("Redirecting to WhatsApp...")

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank")
  }

  return (
    <section
      id="appointment"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white py-20 dark:from-blue-950/10 dark:to-background"
    >
      <div className="container relative">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-400/10 dark:text-blue-400"
          >
            Book Appointment
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Start Your Journey to a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Better Smile
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

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-blue-600 to-blue-400 p-8 text-white"
          >
            <div className="absolute inset-0 bg-blue-600/20 opacity-0 blur-xl transition-opacity duration-500 hover:opacity-100" />
            <div className="relative z-10 h-full">
              <h3 className="mb-8 text-2xl font-bold">Why Choose Confidental?</h3>
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex items-start gap-4 rounded-xl bg-white/10 p-4 transition-all duration-300 hover:bg-white/20"
                  >
                    <div className="rounded-lg bg-white/20 p-3 transition-transform duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-sm text-white/80">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden">
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10" />
              <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-blue-500/10" />

              <CardHeader>
                <CardTitle className="text-2xl">Request an Appointment</CardTitle>
                <CardDescription>Fill in your details and preferred time</CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="location">Select Location</Label>
                      <Select onValueChange={(value) => register("location").onChange({ target: { value } })}>
                        <SelectTrigger id="location">
                          <Building2 className="mr-2 h-4 w-4" />
                          <SelectValue placeholder="Choose clinic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="downtown">Balajipuram Clinic</SelectItem>
                          <SelectItem value="uptown">Township Clinic</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.location && <p className="text-sm text-red-500">{errors.location.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="doctor">Select Doctor</Label>
                      <Select onValueChange={(value) => register("doctor").onChange({ target: { value } })}>
                        <SelectTrigger id="doctor">
                          <User2 className="mr-2 h-4 w-4" />
                          <SelectValue placeholder="Choose doctor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dr-pankaj">Dr. Pankaj Chaudhary</SelectItem>
                          <SelectItem value="dr-sunil">Dr. Sunil Fauzdar</SelectItem>
                          <SelectItem value="dr-anuradha">Dr. Anuradha Solanki</SelectItem>
                          <SelectItem value="dr-vipin">Dr. Vipin Sharma</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.doctor && <p className="text-sm text-red-500">{errors.doctor.message}</p>}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="date"
                          type="date"
                          className="pl-10"
                          {...register("date", { required: "Date is required" })}
                        />
                      </div>
                      {errors.date && <p className="text-sm text-red-500">{errors.date.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time</Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="time"
                          type="time"
                          className="pl-10"
                          {...register("time", { required: "Time is required" })}
                        />
                      </div>
                      {errors.time && <p className="text-sm text-red-500">{errors.time.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Have you visited us before?</Label>
                    <RadioGroup
                      defaultValue="no"
                      onValueChange={(value) => register("visited").onChange({ target: { value } })}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes" />
                        <Label htmlFor="yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no">No</Label>
                      </div>
                    </RadioGroup>
                    {errors.visited && <p className="text-sm text-red-500">{errors.visited.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="name" className="pl-10" {...register("name", { required: "Name is required" })} />
                    </div>
                    {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          className="pl-10"
                          {...register("phone", { required: "Phone number is required" })}
                        />
                      </div>
                      {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          className="pl-10"
                          {...register("email", { pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                        />
                      </div>
                      {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-400"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Book Appointment"}
                    <CalendarCheck className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}