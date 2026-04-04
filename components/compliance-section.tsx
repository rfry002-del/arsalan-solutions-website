"use client"

import { useEffect, useRef, useState } from "react"
import { ShieldCheck } from "lucide-react"

const complianceBadges = [
  { code: "FAR", name: "Federal Acquisition Regulation" },
  { code: "BAA", name: "Buy American Act" },
  { code: "TAA", name: "Trade Agreements Act" },
  { code: "NDAA", name: "National Defense Authorization Act" },
  { code: "SAM", name: "SAM.gov Compliance" },
]

export function ComplianceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-card relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Compliance</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Fully Compliant with{" "}
            <span className="text-primary">Federal Standards</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We maintain rigorous compliance with all federal acquisition regulations 
            and requirements, ensuring your peace of mind.
          </p>
        </div>

        {/* Compliance Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {complianceBadges.map((badge, index) => (
            <div
              key={badge.code}
              className={`group p-6 rounded-2xl bg-background border border-border hover:border-primary transition-all duration-500 text-center hover:shadow-lg hover:shadow-primary/10 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-all duration-300 group-hover:scale-110">
                <span className="text-xl font-bold text-primary group-hover:text-primary-foreground transition-colors">
                  {badge.code}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-tight">{badge.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
