"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />

        {/* LIGHT overlay (FIXED - not washed out anymore) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/35 to-white/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-blue-700 text-sm font-medium">
              Federal Contracting Excellence
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Delivering Federal Contracting Excellence with{" "}
            <span className="text-blue-600">Precision & Compliance</span>
          </h1>

          {/* Subtext */}
          <div
            className={`inline-block bg-white/55 backdrop-blur-md px-6 py-3 rounded-2xl shadow-md border border-white/40 mb-10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <p className="text-gray-800 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Arsalan Solutions supports U.S. government agencies with sourcing,
              bidding, and execution through SAM.gov.
            </p>
          </div>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {/* Primary Button */}
            <Button
              asChild
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 group px-8 py-6 text-base transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Link href="#capabilities">
                View Capabilities
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            {/* Secondary Button (FIXED - now looks clickable) */}
            <Button
              asChild
              size="lg"
              className="bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 px-8 py-6 text-base transition-all duration-300 hover:scale-105 shadow-sm"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </Link>
      </div>
    </section>
  )
}