'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const symptoms = [
  { text: 'A mind that won\'t stop racing, even at night', delay: 0 },
  { text: 'Physical tension, tightness, or trouble sleeping', delay: 0.08 },
  { text: 'Old wounds that still shape how you relate to others', delay: 0.16 },
  { text: 'A pattern of pushing through until you hit a wall', delay: 0.24 },
  { text: 'Feeling disconnected despite doing everything "right"', delay: 0.32 },
]

export default function ChallengeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1])

  return (
    <section ref={ref} className="py-0 relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 min-h-0 lg:min-h-[700px]">
          <motion.div
            className="relative h-[280px] sm:h-[400px] lg:h-auto order-1 overflow-hidden"
          >
            <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
              <Image
                src="/images/yoga-wellness.jpg"
                alt="Mindful wellness practice - anxiety relief therapy Santa Monica"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-sand-pale px-6 sm:px-10 lg:px-20 py-12 sm:py-16 lg:py-24 flex flex-col justify-center order-2 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-[200px] h-[200px] border border-sand/20 rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-[150px] h-[150px] border border-sand/10 rounded-full" />

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sand text-sm tracking-[0.3em] uppercase font-semibold mb-6"
            >
              Common Experiences
            </motion.span>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl lg:text-[2.5rem] font-serif text-primary leading-tight mb-8 sm:mb-10"
            >
              You might be <br />experiencing:
            </motion.h3>

            <ul className="space-y-5 mb-10 relative">
              {symptoms.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + item.delay }}
                  className="flex items-start gap-4 text-primary/80 text-base lg:text-[1.05rem] leading-relaxed font-light"
                >
                  <span className="w-2 h-2 rounded-full bg-sand mt-2 flex-shrink-0" />
                  {item.text}
                </motion.li>
              ))}
            </ul>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-primary/60 text-base leading-relaxed mb-8 font-light"
            >
              These are signals, not flaws. Together, we can understand
              what they are telling you.
            </motion.p>

            <motion.a
              href="/contact"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="group inline-flex items-center gap-3 text-primary font-semibold text-sm tracking-[0.15em] uppercase hover:text-sand transition-colors duration-300"
            >
              Begin Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
