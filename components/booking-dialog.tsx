"use client"

import { useEffect, useState } from "react"
import { User2, Phone, Building2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
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
const API_URL = process.env.NEXT_PUBLIC_API_URL;

type FormData = {
  fullName: string
  phone: string
  nearestClinic: string
}

export function BookingDialog() {
  const [open, setOpen] = useState(false)
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>()
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
    try {
      const response = await axios.post(`${API_URL}api/v1/form/popup-form`, data)
      if (response.status === 200) {
        toast.success("Your 20% discount is applied! Please visit us.")
        setHasSubmitted(true)
        localStorage.setItem('hasSeenBookingDialog', 'true')
        setOpen(false)
      } else {
        toast.error("Failed to submit booking. Please try again.")
      }
    } catch (error){
      console.log(error);
      toast.error("An error occurred while submitting your booking.")
    }
    setIsSubmitting(false)
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
            <Label htmlFor="fullName">Full Name</Label>
            <div className="relative">
              <User2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                id="fullName"
                className="pl-10"
                {...register("fullName", { required: "Name is required" })}
              />
            </div>
            {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
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
            <Label htmlFor="nearestClinic">Nearest Clinic Location</Label>
            <Select onValueChange={(value) => setValue("nearestClinic", value)}>
              <SelectTrigger id="nearestClinic" className="pl-10">
                <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="township">Township</SelectItem>
                <SelectItem value="balajipuram">Balajipuram</SelectItem>
              </SelectContent>
            </Select>
            {/* Hidden input to ensure react-hook-form tracks the field */}
            <input type="hidden" {...register("nearestClinic", { required: "Nearest clinic is required" })} />
            {errors.nearestClinic && <p className="text-sm text-red-500">{errors.nearestClinic.message}</p>}
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-400" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}