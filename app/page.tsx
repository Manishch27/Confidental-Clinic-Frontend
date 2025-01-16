import { Layout } from "@/components/layout"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ExpertDoctorsSection } from "@/components/expert-doctors-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BeforeAfterSection } from "@/components/before-after-section"
import { AppointmentSection } from "@/components/appointment-section"

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <ExpertDoctorsSection />
      <TestimonialsSection />
      <BeforeAfterSection />
      <AppointmentSection />
    </Layout>
  )
}

