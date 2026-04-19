"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Target, Users, Award, Linkedin, Instagram, Facebook } from "lucide-react"

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
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className={`${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"} transition-all duration-700`}>

            {/* TOP ROW: TITLE + IMAGE */}
            <div className="flex flex-col lg:flex-row items-start gap-8">

              {/* TEXT */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <span className="text-primary text-sm font-medium">About Us</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Building Trust Through{" "}
                  <span className="text-primary">Excellence</span>
                </h2>
              </div>

              {/* 🔥 IMAGE CARD (NOW NEXT TO TITLE) */}
              <div className="bg-gray-100 dark:bg-card p-5 rounded-2xl text-center w-60 shadow-md">
                <img
                  src="/images/founder.jpg"
                  alt="Founder"
                  className="w-28 h-28 rounded-full object-cover mx-auto mb-3"
                />

                <h4 className="text-xs font-bold tracking-wide text-foreground">
                  MOHAMMAD ALYAS BAREKZAY
                </h4>

                <p className="text-xs text-muted-foreground mb-2">
                  Founder & Director
                </p>

                <div className="flex justify-center gap-4 mt-2">

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    <Facebook size={16} />
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    <Instagram size={16} />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    <Linkedin size={16} />
                  </a>

                </div>
              </div>

            </div>

            {/* DESCRIPTION */}
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed mt-6">
              Arsalan Solutions, founded in 2024 by Mohammad Alyas Barekzay, delivers efficient,
              compliant, and results-driven solutions for federal contracting. We specialize in
              supporting U.S. government agencies with procurement and supply chain expertise.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our commitment to excellence, compliance, and innovation makes us a trusted partner
              for agencies seeking reliable contracting services and measurable results.
            </p>

          </div>

          {/* RIGHT SIDE STATS */}
          <div className={`grid grid-cols-2 gap-6 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"} transition-all duration-700 delay-200`}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>

                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>

                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}