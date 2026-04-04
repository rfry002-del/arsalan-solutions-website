"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Send, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const benefits = [
  "Expert guidance through federal contracting",
  "Compliance-first approach to every engagement",
  "Dedicated support from experienced professionals",
  "Proven track record with government agencies",
]

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    contactMethod: "",
    message: "",
  })

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

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        setIsSubmitted(true)
      } else {
        alert("Failed to send message")
      }
    } catch (error) {
      console.error(error)
      alert("Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <div className={`${isVisible ? "opacity-100" : "opacity-0"}`}>
            <h2 className="text-4xl font-bold mb-6">
              Let&apos;s Move Forward{" "}
              <span className="text-primary">With Confidence</span>
            </h2>

            <p className="text-muted-foreground mb-8">
              Get in touch with our team to discuss how we can support your federal contracting goals.
            </p>

            <div className="space-y-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                abarekzay@arsalansolutions.com
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                540-642-9453
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                Fredericksburg, VA
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <div className="bg-card rounded-3xl border p-8 shadow-xl">

              {isSubmitted ? (
                <div className="text-center py-10">
                  <Check className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    We’ll get back to you shortly.
                  </p>
                </div>
              ) : (

                <form onSubmit={handleSubmit} className="space-y-4">

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                    />
                    <Input
                      placeholder="Last Name"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                    />
                  </div>

                  <Input
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />

                  <Input
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />

                  <Input
                    placeholder="Organization"
                    required
                    value={formData.organization}
                    onChange={(e) =>
                      handleChange("organization", e.target.value)
                    }
                  />

                  <Select
                    onValueChange={(value) =>
                      handleChange("contactMethod", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Preferred Contact Method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                    </SelectContent>
                  </Select>

                  <Textarea
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Submit Message <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}