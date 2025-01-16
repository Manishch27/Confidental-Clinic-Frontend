"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { User2, Phone, Building2, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

type FormData = {
  name: string
  phone: string
  location: string
}

export function BookingDialog() {
  const [open, setOpen] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  useEffect(() => {
    const hasSeenDialog = localStorage.getItem('hasSeenBookingDialog')
    if (!hasSeenDialog) {
      const timer = setTimeout(() => {
        setOpen(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    setIsSubmitting(false)
    toast.success("Booking request submitted successfully!")
    setOpen(false)
    setHasSubmitted(true)
    localStorage.setItem('hasSeenBookingDialog', 'true')
  }

  if (hasSubmitted) {
    return null
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md mx-auto rounded-3xl overflow-hidden pt-8">
          <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Exclusive Offer!
          </DialogTitle>
          <p className="text-center text-sm text-muted-foreground mt-2">
            Fill out this form now and enjoy a 20% discount on your first visit. Limited time offer!
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                id="name"
                className="pl-10"
                {...register("name", { required: "Name is required" })}
              />
            </div>
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                id="phone"
                className="pl-10"
                type="tel"
                {...register("phone", { required: "Phone number is required" })}
              />
            </div>
            {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Nearest Clinic Location</Label>
            <Select onValueChange={(value) => register("location").onChange({ target: { value } })}>
              <SelectTrigger id="location" className="pl-10">
                <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="township">Township</SelectItem>
                <SelectItem value="balajipuram">Balajipuram</SelectItem>
              </SelectContent>
            </Select>
            {errors.location && <p className="text-sm text-red-500">{errors.location.message}</p>}
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-400" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

