'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="about" className="w-full relative">
      <div className="grid lg:grid-cols-2 gap-0 min-h-0 lg:min-h-[750px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col justify-between order-2 lg:order-1 relative bg-primary text-ivory"
        >
          <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-12 sm:py-16 relative">
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-sand/30 to-transparent hidden lg:block" />

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sand text-sm tracking-[0.3em] uppercase font-semibold mb-8"
            >
              My Approach
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl sm:text-4xl lg:text-[3.2rem] font-normal leading-[1.1] mb-8 sm:mb-10 tracking-tight"
            >
              Reclaim your <br />
              <span className="text-sand italic">sense of calm.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-5 text-ivory/80 text-base lg:text-[1.1rem] leading-[1.75] font-light max-w-lg"
            >
              <p>
                I take a warm, collaborative, and grounded approach to therapy.
                Sessions are structured enough to feel supportive, while still
                leaving space for reflection and depth.
              </p>
              <p>
                I integrate evidence-based methods&mdash;CBT, EMDR, mindfulness,
                and body-oriented techniques&mdash;to help you understand both the
                emotional and physiological sides of what you&apos;re experiencing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-8 sm:gap-12 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-ivory/10"
            >
              <div>
                <p className="font-serif text-3xl text-sand">CBT</p>
                <p className="text-ivory/50 text-xs tracking-wider uppercase mt-1">Cognitive-Behavioral</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-sand">EMDR</p>
                <p className="text-ivory/50 text-xs tracking-wider uppercase mt-1">Trauma Processing</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-sand">MBSR</p>
                <p className="text-ivory/50 text-xs tracking-wider uppercase mt-1">Mindfulness-Based</p>
              </div>
            </motion.div>
          </div>

          <a
            href="/contact"
            className="group w-full relative block"
          >
            <div className="w-full h-px bg-ivory/10" />
            <div className="py-8 flex justify-center items-center transition-colors duration-500 hover:bg-sand text-ivory">
              <span className="inline-flex items-center gap-3 uppercase tracking-[0.2em] text-xs font-semibold">
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.4 }}
          className="relative h-[280px] sm:h-[350px] lg:h-auto order-1 lg:order-2 overflow-hidden"
        >
          <Image
            src="/images/nature-morning.jpg"
            alt="Peaceful nature vista representing calm and clarity"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}