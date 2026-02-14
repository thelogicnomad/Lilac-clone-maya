'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function BlogHero() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section ref={ref} className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 lg:pt-40 lg:pb-28 px-5 sm:px-6 lg:px-12 bg-ivory overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

            <div className="max-w-7xl mx-auto relative">
                <div className="grid lg:grid-cols-[60%_40%] gap-8 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-sand text-sm tracking-[0.3em] uppercase font-semibold mb-4 block"
                        >
                            The Journal
                        </motion.span>

                        <h1 className="font-serif text-3xl sm:text-5xl lg:text-[4rem] font-normal text-primary tracking-tight mb-4 sm:mb-6 leading-[1.1]">
                            Insights for <br />
                            <span className="text-sand italic">Your Journey</span>
                        </h1>

                        <p className="text-primary/60 text-base lg:text-lg font-light leading-[1.8] max-w-lg">
                            Thoughts and resources on anxiety, trauma recovery, burnout, and
                            building a more grounded life. Written from my practice in
                            Santa Monica, CA.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative h-[350px] lg:h-[400px] hidden lg:block"
                    >
                        <Image
                            src="/images/journal-writing.jpg"
                            alt="Journaling for self-reflection - Dr. Maya Reynolds' therapy blog"
                            fill
                            className="object-cover"
                            sizes="40vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ivory/20 to-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
