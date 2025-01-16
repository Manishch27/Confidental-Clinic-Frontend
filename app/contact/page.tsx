import { Metadata } from "next"
import { Contact } from "./contact"

export const metadata: Metadata = {
  title: "Contact Us | Confidental Clinic",
  description: "Get in touch with Confidental Clinic for any inquiries or to schedule an appointment. We're here to help you achieve your best smile.",
}


export default function ContactPage() {
  return <Contact />
}