'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const scrollUpDistance = useRef(0)

  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)

      const delta = currentScrollY - lastScrollY.current

      if (delta > 0 && currentScrollY > 80) {
        setHidden(true)
        scrollUpDistance.current = 0
      } else if (delta < 0) {
        scrollUpDistance.current += Math.abs(delta)
        if (scrollUpDistance.current > 40) {
          setHidden(false)
        }
      }

      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? '-100%' : 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      >
        <motion.div
          className="absolute inset-0 backdrop-blur-xl"
          style={{
            opacity: headerOpacity,
            backgroundColor: 'rgba(250, 247, 242, 0.85)',
            boxShadow: scrolled ? '0 1px 20px rgba(27, 40, 56, 0.06)' : 'none',
          }}
        />

        <div className="relative px-6 lg:px-16 py-4">
          <div className="flex items-center justify-between max-w-[1500px] mx-auto">
            <Link
              href="/"
              className="relative group"
            >
              <span
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)' }}
                className="font-serif font-normal tracking-wide text-primary transition-colors duration-300"
              >
                Dr. Maya Reynolds
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[1.5px] bg-sand"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group text-primary/80 hover:text-primary transition-colors duration-300 text-[0.85rem] tracking-[0.12em] uppercase font-medium"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-sand transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              <Link
                href="/contact"
                className="ml-4 px-6 py-2.5 bg-primary text-ivory text-[0.75rem] tracking-[0.15em] uppercase font-semibold hover:bg-primary-light transition-colors duration-300"
              >
                Book Now
              </Link>
            </nav>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-primary hover:text-sand transition-colors relative z-50"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMobileMenu}
              className="fixed inset-0 bg-primary/30 backdrop-blur-sm z-40 md:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-ivory z-40 md:hidden shadow-2xl"
            >
              <nav className="flex flex-col gap-1 p-8 mt-20">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={toggleMobileMenu}
                      className="block py-3 text-lg text-primary hover:text-sand transition-colors duration-300 font-light border-b border-primary/10"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <Link
                    href="/contact"
                    onClick={toggleMobileMenu}
                    className="block text-center py-4 bg-primary text-ivory text-sm tracking-[0.15em] uppercase font-semibold hover:bg-primary-light transition-colors duration-300"
                  >
                    Book Now
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
