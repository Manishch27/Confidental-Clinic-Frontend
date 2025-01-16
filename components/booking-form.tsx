"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Calendar, User2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import toast from 'react-hot-toast'

type FormData = {
  email: string
  doctor: string
  date: string
  time: string
}

export function BookingForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    setIsSubmitting(false)
    toast.success("Appointment booked successfully!")
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold text-primary">Book Your Appointment</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="doctor">Select Doctor</Label>
            <Select onValueChange={(value) => register("doctor").onChange({ target: { value } })}>
              <SelectTrigger id="doctor">
                <User2 className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Choose doctor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dr-smith">Dr. Smith</SelectItem>
                <SelectItem value="dr-johnson">Dr. Johnson</SelectItem>
                <SelectItem value="dr-williams">Dr. Williams</SelectItem>
              </SelectContent>
            </Select>
            {errors.doctor && <p className="text-sm text-red-500">{errors.doctor.message}</p>}
          </div>
          
          <div className="grid gap-2">
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
          
          <div className="grid gap-2">
            <Label htmlFor="time">Preferred Time</Label>
            <Input
              id="time"
              type="time"
              {...register("time", { required: "Time is required" })}
            />
            {errors.time && <p className="text-sm text-red-500">{errors.time.message}</p>}
          </div>
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Booking..." : "Book Your Dentist"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

