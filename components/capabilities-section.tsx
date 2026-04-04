"use client"

import { useEffect, useRef, useState } from "react"
import { 
  Search, 
  FileText, 
  TrendingDown, 
  Truck, 
  PackageSearch, 
  Monitor, 
  ClipboardCheck 
} from "lucide-react"

const capabilities = [
  {
    icon: Search,
    title: "Federal Contract Sourcing",
    description: "Expert navigation of SAM.gov to identify and secure optimal contract opportunities for your organization.",
  },
  {
    icon: FileText,
    title: "Proposal Development",
    description: "Comprehensive proposal writing services that highlight your strengths and meet all federal requirements.",
  },
  {
    icon: TrendingDown,
    title: "LPTA Strategy",
    description: "Lowest Price Technically Acceptable strategies that maximize your competitive advantage.",
  },
  {
    icon: Truck,
    title: "Procurement & Supply Chain",
    description: "End-to-end procurement solutions ensuring timely delivery and quality compliance.",
  },
  {
    icon: PackageSearch,
    title: "Logistics Support",
    description: "Comprehensive logistics management to support federal operations nationwide.",
  },
  {
    icon: Monitor,
    title: "IT Solutions",
    description: "Cutting-edge technology solutions tailored to federal agency requirements and security standards.",
  },
  {
    icon: ClipboardCheck,
    title: "Contract Management",
    description: "Full lifecycle contract management ensuring compliance and optimal performance.",
  },
]

export function CapabilitiesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="py-24 lg:py-32 bg-card relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary text-sm font-medium">Core Competencies</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Comprehensive Federal{" "}
            <span className="text-primary">Contracting Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We deliver end-to-end capabilities across the federal contracting lifecycle, 
            from opportunity identification to successful contract execution.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className={`group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <capability.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {capability.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
