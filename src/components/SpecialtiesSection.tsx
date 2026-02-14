'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const specialties = [
  {
    id: '01',
    title: 'Anxiety & Panic',
    description:
      "Constant worry, tension in your body, difficulty sleeping, or a sense that you're always bracing for something to go wrong. Together, we'll develop practical tools and deeper awareness to ease anxiety at its roots, addressing both the emotional and physiological sides.",
    image: '/images/meditation-calm.jpg',
    keywords: 'Anxiety Therapy Santa Monica',
  },
  {
    id: '02',
    title: 'Trauma & EMDR',
    description:
      "Whether you've experienced a single-incident trauma or more complex, long-standing patterns from childhood or relationships, my approach is paced carefully with emphasis on safety, stabilization, and regulation. EMDR helps process traumatic memories without re-traumatizing.",
    image: '/images/person-sunset.jpg',
    keywords: 'EMDR Trauma Therapist California',
  },
  {
    id: '03',
    title: 'Burnout & Perfectionism',
    description:
      "Many entrepreneurs, creatives, and professionals feel disconnected from themselves after years of pushing through stress. Therapy becomes a space to slow down, reconnect, and build sustainable rhythms that honor both your ambition and your wellbeing.",
    image: '/images/yoga-wellness.jpg',
    keywords: 'Burnout Therapist for Professionals',
  },
]

export default function SpecialtiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-16 sm:py-24 lg:py-36 px-5 sm:px-6 lg:px-12 bg-ivory relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-seafoam/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="text-sand text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
            How I Can Help
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.2rem] font-normal text-primary tracking-tight">
            My Specialties
          </h2>
        </motion.div>

        <div className="space-y-0">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="border-t border-primary/10 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr] gap-3 sm:gap-6 lg:gap-12 items-start lg:items-center py-6 sm:py-10 lg:py-14 cursor-pointer">
                <span className="text-sand/50 text-sm font-mono tracking-wider">
                  {specialty.id}
                </span>

                <div className="flex items-center gap-6">
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-normal text-primary group-hover:text-sand transition-colors duration-500">
                    {specialty.title}
                  </h3>
                </div>

                <div className="flex items-center gap-8">
                  <p className="text-primary/60 text-sm lg:text-base leading-relaxed font-light flex-1">
                    {specialty.description}
                  </p>
                  <ArrowRight className="w-5 h-5 text-primary/30 group-hover:text-sand group-hover:translate-x-2 transition-all duration-500 flex-shrink-0 hidden lg:block" />
                </div>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: hoveredIndex === index ? 300 : 0,
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="relative w-full h-[300px] mb-6">
                  <Image
                    src={specialty.image}
                    alt={specialty.keywords}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          ))}
          <div className="border-t border-primary/10" />
        </div>
      </div>
    </section>
  )
}
