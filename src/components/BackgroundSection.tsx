'use client'

import { useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import { Plus, Minus } from 'lucide-react'

const backgrounds = [
    {
        title: 'Education',
        content:
            'Doctor of Psychology (PsyD) in Clinical Psychology. Extensive training in evidence-based therapeutic modalities including cognitive-behavioral therapy, EMDR, and mindfulness-based approaches. Specialized focus on anxiety disorders, trauma recovery, and stress-related conditions.',
    },
    {
        title: 'Licensure',
        content:
            'Licensed Clinical Psychologist in the State of California. Fully credentialed to provide therapy from my Santa Monica office and secure telehealth sessions for clients located anywhere in California.',
    },
    {
        title: 'Certifications & Training',
        content:
            'EMDR Certified Therapist. Additional specialized training in cognitive-behavioral therapy (CBT), mindfulness-based stress reduction (MBSR), and body-oriented therapeutic techniques. Ongoing professional development in trauma-informed care.',
    },
]

export default function BackgroundSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section ref={ref} className="py-16 sm:py-24 lg:py-36 px-5 sm:px-6 lg:px-12 bg-ivory-mid relative overflow-hidden">
            <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-sand/5 rounded-full blur-3xl" />

            <div className="max-w-3xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-sand text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
                        Credentials
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3rem] font-normal text-primary tracking-tight">
                        Professional Background
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {backgrounds.map((item, index) => (
                        <div key={item.title} className="border-t border-primary/15">
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full flex items-center justify-between py-7 text-left group"
                                aria-expanded={openIndex === index}
                            >
                                <div className="flex items-center gap-6">
                                    <span className="text-sand/40 text-sm font-mono">
                                        0{index + 1}
                                    </span>
                                    <span className="font-serif text-xl lg:text-2xl font-normal text-primary group-hover:text-sand transition-colors duration-300">
                                        {item.title}
                                    </span>
                                </div>
                                <motion.span
                                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-sand flex-shrink-0"
                                >
                                    <Plus className="w-5 h-5" />
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-primary/65 font-light text-base lg:text-[1.05rem] leading-[1.8] pb-8 pl-12 lg:pl-16 max-w-xl">
                                            {item.content}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    <div className="border-t border-primary/15" />
                </motion.div>
            </div>
        </section>
    )
}
