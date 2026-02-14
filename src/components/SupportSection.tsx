'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'

const challenges = [
    'Constant worry that never fully quiets down',
    'Tension in your body or difficulty sleeping',
    'Overthinking and second-guessing every decision',
    'Feeling like you are always bracing for something',
    'Exhaustion from years of pushing through stress',
    'Feeling disconnected from yourself or your emotions',
]

export default function SupportSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="w-full relative">
            <div className="grid lg:grid-cols-2 gap-0 min-h-0 lg:min-h-[750px]">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative h-[280px] sm:h-[400px] lg:h-auto order-1 overflow-hidden"
                >
                    <Image
                        src="/images/person-sunset.jpg"
                        alt="Person finding peace and clarity at sunset"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-seafoam-dark/10" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col justify-between order-2 relative bg-seafoam-dark text-ivory overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-12 sm:py-16 relative">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-ivory/50 text-sm tracking-[0.3em] uppercase font-semibold mb-8"
                        >
                            You Are Not Alone
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="font-serif text-2xl sm:text-3xl lg:text-[2.8rem] font-normal leading-[1.15] mb-8 sm:mb-10"
                        >
                            You don&apos;t have to carry <br className="hidden lg:block" />
                            this alone.
                        </motion.h2>

                        <p className="text-ivory/70 text-base lg:text-lg mb-8 font-light leading-relaxed">
                            If any of this sounds familiar, there&apos;s hope:
                        </p>

                        <ul className="space-y-4 mb-10">
                            {challenges.map((item, i) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                                    className="flex items-start gap-3 text-ivory/85 text-base leading-relaxed font-light"
                                >
                                    <Check className="w-4 h-4 text-sand mt-1 flex-shrink-0" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="text-ivory/60 text-base leading-relaxed italic border-l-2 border-sand/40 pl-6"
                        >
                            My goal is not just symptom relief, but helping clients develop
                            insight, resilience, and a stronger relationship with themselves
                            over time.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}