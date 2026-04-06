"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const logos = [
  "/images/logos/a.jpeg",
  "/images/logos/b.jpeg",
  "/images/logos/c.png",
  "/images/logos/d.jpeg",
  "/images/logos/e.png",
  "/images/logos/f.jpeg",
  "/images/logos/g.jpeg",
  "/images/logos/h.png",
  "/images/logos/i.jpeg",
  "/images/logos/j.jpeg",
  "/images/logos/k.png",
  "/images/logos/l.jpeg",
  "/images/logos/m.jpeg",
]

// ⭐ highlighted logo
const featuredLogo = "/images/logos/g.jpeg"

export function PartnersSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Trusted by Federal Agencies
          </h2>
          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Supporting mission-critical operations across U.S. government sectors
          </p>
        </motion.div>

        {/* ⭐ FEATURED LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-16"
        >
          <div className="w-[160px] h-[160px] rounded-2xl bg-white shadow-xl flex items-center justify-center relative overflow-hidden">

            {/* glow effect */}
            <div className="absolute inset-0 bg-blue-500/10 blur-2xl opacity-60" />

            <div className="relative w-[110px] h-[110px]">
              <Image
                src={featuredLogo}
                alt="Featured Agency"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* GRID LOGOS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">

          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex justify-center"
            >
              <div className="w-[100px] h-[100px] bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center group hover:-translate-y-1">

                <div className="relative w-[65px] h-[65px] transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={logo}
                    alt="Agency Logo"
                    fill
                    className="object-contain"
                  />
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}