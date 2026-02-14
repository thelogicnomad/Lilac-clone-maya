'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={ref} className="relative py-20 sm:py-32 lg:py-44 px-5 sm:px-6 lg:px-12 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-primary"
        style={{ y: bgY }}
      />

      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(250,247,242,0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sand text-sm tracking-[0.3em] uppercase font-semibold block"
          >
            Ready to Begin?
          </motion.span>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[3rem] font-normal text-ivory leading-tight tracking-tight">
            Take the first step <br className="hidden sm:block" />
            <span className="text-sand italic">today.</span>
          </h2>

          <p className="text-ivory/60 font-light text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
            I offer a free 15-minute consultation so we can connect and see if
            working together feels like the right fit. Reach out&mdash;I&apos;m
            here to help.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center pt-4"
          >
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 bg-sand text-primary text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-semibold overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-sand/20 w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-ivory translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative">Book Free Consultation</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="mailto:hello@drmayareynolds.com"
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 border border-ivory/20 text-ivory text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-semibold hover:border-ivory/60 transition-all duration-300 w-full sm:w-auto"
            >
              Email Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
