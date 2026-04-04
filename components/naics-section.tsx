"use client"

import { useEffect, useRef, useState } from "react"

const naicsCodes = [
  { code: "541611", description: "Administrative Management & General Management Consulting Services" },
  { code: "541612", description: "Human Resources Consulting Services" },
  { code: "541613", description: "Marketing Consulting Services" },
  { code: "541614", description: "Process, Physical Distribution, & Logistics Consulting Services" },
  { code: "541618", description: "Other Management Consulting Services" },
  { code: "541690", description: "Other Scientific and Technical Consulting Services" },
  { code: "541990", description: "All Other Professional, Scientific, & Technical Services" },
  { code: "561110", description: "Office Administrative Services" },
  { code: "561210", description: "Facilities Support Services" },
  { code: "561320", description: "Temporary Help Services" },
  { code: "561499", description: "All Other Business Support Services" },
  { code: "561990", description: "All Other Support Services" },
]

export function NAICSSection() {
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
      id="naics"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary text-sm font-medium">NAICS Codes</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Service{" "}
            <span className="text-primary">Classifications</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We are registered and qualified to bid on federal contracts across these 
            NAICS code categories.
          </p>
        </div>

        {/* NAICS Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {naicsCodes.map((naics, index) => (
            <div
              key={naics.code}
              className={`group p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="px-3 py-1.5 rounded-lg bg-primary/10 shrink-0">
                  <span className="text-primary font-mono font-semibold text-sm">
                    {naics.code}
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed group-hover:text-foreground transition-colors">
                {naics.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
