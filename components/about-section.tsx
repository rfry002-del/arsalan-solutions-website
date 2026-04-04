"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Target, Users, Award } from "lucide-react"

const stats = [
  { icon: Building2, value: "2024", label: "Founded" },
  { icon: Target, value: "100%", label: "Compliance Rate" },
  { icon: Users, value: "50+", label: "Agency Partners" },
  { icon: Award, value: "AAA", label: "Rating" },
]

export function AboutSection() {
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
      id="about"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary text-sm font-medium">About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Building Trust Through{" "}
              <span className="text-primary">Excellence</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Arsalan Solutions, founded in 2024 by Mohammad Alyas Barekzay, delivers efficient, 
              compliant, and results-driven solutions for federal contracting. We specialize in 
              supporting U.S. government agencies with comprehensive procurement and supply chain solutions.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Our commitment to excellence, compliance, and innovation positions us as a trusted partner 
              for federal agencies seeking reliable contracting services. We navigate the complexities 
              of federal acquisition to deliver results that matter.
            </p>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-2 gap-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
