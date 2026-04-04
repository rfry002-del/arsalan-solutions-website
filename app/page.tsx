import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { DifferentiatorsSection } from "@/components/differentiators-section"
import { ComplianceSection } from "@/components/compliance-section"
import { NAICSSection } from "@/components/naics-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <DifferentiatorsSection />
      <ComplianceSection />
      <NAICSSection />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  )
}
