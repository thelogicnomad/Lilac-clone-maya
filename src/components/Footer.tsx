'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <footer ref={ref}>
      <div className="bg-primary py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="font-serif text-ivory text-3xl lg:text-[2.5rem] font-normal leading-tight mb-4">
              Dr. Maya Reynolds
            </h3>
            <p className="text-ivory/40 text-sm tracking-[0.2em] uppercase font-semibold">
              Licensed Clinical Psychologist &mdash; PsyD
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-sand text-xs tracking-[0.3em] uppercase font-semibold mb-6">
                Contact
              </h4>
              <div className="space-y-2 text-ivory/70 text-sm font-light">
                <p>123th Street 45 W</p>
                <p>Santa Monica, CA 90401</p>
              </div>
              <div className="space-y-2 pt-4">
                <a
                  href="mailto:hello@drmayareynolds.com"
                  className="block text-ivory/70 text-sm font-light hover:text-sand transition-colors duration-300"
                >
                  hello@drmayareynolds.com
                </a>
                <a
                  href="tel:3105551234"
                  className="block text-ivory/70 text-sm font-light hover:text-sand transition-colors duration-300"
                >
                  (310) 555-1234
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-sand text-xs tracking-[0.3em] uppercase font-semibold mb-6">
                Hours
              </h4>
              <div className="text-ivory/70 text-sm font-light space-y-2">
                <p>Monday &ndash; Friday</p>
                <p>9:00 AM &ndash; 6:00 PM</p>
              </div>
              <div className="pt-4">
                <p className="text-ivory/40 text-xs font-light">
                  In-person &amp; Telehealth available
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h4 className="text-sand text-xs tracking-[0.3em] uppercase font-semibold mb-6">
                Navigate
              </h4>
              <nav className="flex flex-col gap-3">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/blog', label: 'Blog' },
                  { href: '/contact', label: 'Contact' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-ivory/70 text-sm font-light hover:text-sand transition-colors duration-300"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                ))}
              </nav>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-primary border-t border-ivory/8 py-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4 text-ivory/35 text-xs font-light">
            <Link href="#privacy" className="hover:text-ivory/60 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-ivory/60 transition-colors duration-300">
              Terms
            </Link>
            <Link href="#good-faith" className="hover:text-ivory/60 transition-colors duration-300">
              Good Faith Estimate
            </Link>
          </div>

          <p className="text-ivory/30 text-xs font-light">
            &copy; 2025 Dr. Maya Reynolds, PsyD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
