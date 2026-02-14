'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const letterVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.04,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  }

  const line1 = 'Find clarity'
  const line2 = 'in the chaos.'

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
      >
        <Image
          src="/images/hero-coastal.jpg"
          alt="Calm Santa Monica coastline at golden hour"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/95 via-ivory/70 to-ivory/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory/60 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        className="relative z-10 px-5 sm:px-6 lg:px-16 w-full max-w-[1500px] mx-auto"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-2xl pt-16 sm:pt-20 lg:pt-0">
          <div className="overflow-hidden mb-2">
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-sand text-sm tracking-[0.3em] uppercase font-semibold mb-6"
            >
              Licensed Clinical Psychologist &mdash; Santa Monica, CA
            </motion.p>
          </div>

          <h1 className="font-serif leading-[1.0] tracking-tight mb-8">
            <span className="block overflow-hidden">
              <span className="flex" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
                {line1.split('').map((char, i) => (
                  <motion.span
                    key={`l1-${i}`}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-primary inline-block"
                    style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </span>

            <span className="block overflow-hidden mt-1">
              <span className="flex" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
                {line2.split('').map((char, i) => (
                  <motion.span
                    key={`l2-${i}`}
                    custom={i + line1.length}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-primary inline-block"
                    style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-primary/70 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-md mb-8 sm:mb-10"
          >
            Therapy for anxiety, trauma, and burnout in adults who are ready to reconnect with themselves.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          >
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 bg-primary text-ivory text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-semibold overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-sand translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative">Book a Free Consultation</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="#about"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary/20 text-primary text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-semibold hover:border-primary/60 transition-all duration-300 w-full sm:w-auto"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >

        <motion.div
          animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1 h-1 bg-primary/50 rounded-full"
        />
      </motion.div>

    </section>
  )
}