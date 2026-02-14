'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function IntroSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="py-16 sm:py-24 lg:py-36 px-5 sm:px-6 lg:px-12 bg-ivory-mid relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto relative">
                <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-8"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="inline-block text-sand text-sm tracking-[0.3em] uppercase font-semibold"
                        >
                            About Dr. Maya
                        </motion.span>

                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.5rem] font-normal text-primary leading-[1.1] tracking-tight">
                            Hi, I&apos;m <span className="text-sand italic">Dr. Maya.</span>
                        </h2>

                        <div className="w-16 h-[2px] bg-sand" />

                        <p className="text-primary/75 font-normal text-base lg:text-[1.1rem] leading-[1.8] max-w-lg">
                            I&apos;m a licensed clinical psychologist based in Santa Monica,
                            California, offering therapy for adults who feel overwhelmed by
                            anxiety, stress, or the lingering effects of past experiences. With
                            empathy and evidence-based methods, we&apos;ll work together to
                            build resilience and reconnect with yourself.
                        </p>

                        <p className="text-primary/60 font-normal text-base leading-[1.8] max-w-lg">
                            Many of my clients are high-achieving professionals, entrepreneurs,
                            and creatives&mdash;people who appear &ldquo;functional&rdquo; on the outside
                            while quietly struggling with constant internal pressure.
                        </p>

                        <motion.a
                            href="/contact"
                            whileHover={{ x: 5 }}
                            className="group inline-flex items-center gap-3 text-primary font-semibold text-sm tracking-[0.1em] uppercase hover:text-sand transition-colors duration-300 pt-2"
                        >
                            Work with me
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        <div className="relative mx-auto lg:mx-0 max-w-md">
                            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-sand/20" />

                            <div className="relative aspect-[3/4] overflow-hidden">
                                <Image
                                    src="/images/maya_Reynolds.png"
                                    alt="Dr. Maya Reynolds, Licensed Clinical Psychologist in Santa Monica"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="absolute -bottom-4 sm:-bottom-6 -left-3 sm:-left-6 bg-ivory px-4 sm:px-6 py-3 sm:py-4 shadow-lg"
                            >
                                <p className="font-serif text-lg text-primary">PsyD</p>
                                <p className="text-primary/60 text-sm font-medium">
                                    Licensed Clinical Psychologist
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}