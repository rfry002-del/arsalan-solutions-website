"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

const differentiators = [
  "Federal acquisition expertise with deep regulatory knowledge",
  "End-to-end lifecycle management from opportunity to execution",
  "Compliance-driven execution ensuring zero audit findings",
  "Agile approach adapting to changing federal requirements",
  "Cost-effective delivery maximizing value for agencies",
]

export function DifferentiatorsSection() {
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
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-96 bg-gradient-to-l from-primary/5 to-transparent rounded-l-full" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary text-sm font-medium">Why Choose Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              What Sets Us{" "}
              <span className="text-primary">Apart</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our unique combination of expertise, technology, and commitment to excellence 
              makes us the preferred partner for federal contracting success.
            </p>
          </div>

          {/* Checklist */}
          <div className={`space-y-5 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {differentiators.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <Check className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
