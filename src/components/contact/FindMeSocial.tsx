'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

const socialLinks = [
    { label: 'Psychology Today', href: '#', description: 'View my verified profile' },
    { label: 'Instagram', href: '#', description: '@drmayareynolds' },
    { label: 'LinkedIn', href: '#', description: 'Professional network' },
]

export default function FindMeSocial() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <section ref={ref} className="py-14 sm:py-20 lg:py-28 px-5 sm:px-6 lg:px-12 bg-ivory relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-seafoam/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/3" />

            <div className="max-w-7xl mx-auto relative">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sand text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
                            Connect Online
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] font-normal text-primary tracking-tight mb-4 leading-tight">
                            Find Me Online
                        </h2>
                        <p className="text-primary/50 text-base font-light mb-8 max-w-md">
                            Stay connected or learn more about my practice and approach
                            to therapy.
                        </p>

                        <nav className="space-y-0">
                            {socialLinks.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                    className="group flex items-center justify-between py-5 border-b border-primary/10 hover:border-sand/40 transition-all duration-300"
                                >
                                    <div>
                                        <span className="text-primary group-hover:text-sand transition-colors duration-300 text-lg font-medium block">
                                            {link.label}
                                        </span>
                                        <span className="text-primary/35 text-xs font-light">{link.description}</span>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-primary/20 group-hover:text-sand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                </motion.a>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-10"
                        >
                            <a
                                href="/contact#book"
                                className="group inline-flex items-center gap-3 text-primary text-sm tracking-[0.12em] uppercase font-semibold hover:text-sand transition-colors duration-300"
                            >
                                Book a Consultation
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="space-y-4">
                            <div className="relative h-[200px] sm:h-[280px] overflow-hidden">
                                <Image
                                    src="/images/office1.jpeg"
                                    alt="Dr. Maya Reynolds therapy office"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    sizes="25vw"
                                />
                            </div>
                            <div className="relative h-[140px] sm:h-[180px] overflow-hidden">
                                <Image
                                    src="/images/meditation-calm.jpg"
                                    alt="Mindfulness and meditation practice"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    sizes="25vw"
                                />
                            </div>
                        </div>
                        <div className="space-y-4 pt-8">
                            <div className="relative h-[140px] sm:h-[180px] overflow-hidden">
                                <Image
                                    src="/images/maya_Reynolds.png"
                                    alt="Dr. Maya Reynolds"
                                    fill
                                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                    sizes="25vw"
                                />
                            </div>
                            <div className="relative h-[200px] sm:h-[280px] overflow-hidden">
                                <Image
                                    src="/images/office2.jpeg"
                                    alt="Therapy counseling room"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    sizes="25vw"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
