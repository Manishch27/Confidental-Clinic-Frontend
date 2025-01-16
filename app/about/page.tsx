import { Metadata } from "next";
import About from "./about";


export const metadata: Metadata = {
  title: "About Us | Confidental Clinic",
  description: "Learn about Confidental Clinic's mission, values, and commitment to providing exceptional dental care with cutting-edge technology and a patient-first approach.",
}

export default function AboutPage() {
  return <About />
}