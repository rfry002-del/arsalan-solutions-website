"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Michael Anderson",
    role: "Procurement Director",
    organization: "Defense Logistics Agency",
    content: "Outstanding support in federal contract bidding. Highly professional and responsive. Arsalan Solutions exceeded our expectations at every turn.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Contracting Officer",
    organization: "General Services Administration",
    content: "Arsalan Solutions helped us win contracts efficiently with full compliance. Their expertise in federal acquisition is unmatched.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Supply Chain Manager",
    organization: "Department of Veterans Affairs",
    content: "Reliable partner for procurement and logistics support. They understand the unique requirements of federal agencies and deliver consistently.",
    rating: 5,
  },
  {
    name: "Jennifer Williams",
    role: "Program Manager",
    organization: "Department of Homeland Security",
    content: "Their LPTA strategy expertise helped us secure multiple contracts. Professional, thorough, and always compliant with federal regulations.",
    rating: 5,
  },
  {
    name: "Robert Chen",
    role: "IT Director",
    organization: "Federal Emergency Management Agency",
    content: "Exceptional IT solutions tailored to our federal security requirements. They made a complex process simple and efficient.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
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

  const nextTestimonial = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const prevTestimonial = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [nextTestimonial])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-card relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-primary text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Trusted by{" "}
            <span className="text-primary">Federal Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from the agencies and organizations we have had the privilege to serve.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative bg-background rounded-3xl border border-border p-8 md:p-12 shadow-xl">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 md:left-12">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            {/* Content */}
            <div className={`transition-all duration-500 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
              {/* Stars */}
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 text-balance">
                &ldquo;{currentTestimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {currentTestimonial.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{currentTestimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial.role}, {currentTestimonial.organization}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true)
                        setCurrentIndex(index)
                        setTimeout(() => setIsAnimating(false), 500)
                      }
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="border-border hover:border-primary hover:bg-primary/10"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="border-border hover:border-primary hover:bg-primary/10"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
