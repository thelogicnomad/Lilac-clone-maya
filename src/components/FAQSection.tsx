'use client'

import { useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'

const faqs = [
    {
        question: 'Do you offer telehealth sessions?',
        answer:
            'Yes. I offer secure, HIPAA-compliant telehealth sessions for clients located anywhere in California, in addition to in-person sessions at my Santa Monica office. Many clients choose a blend of both.',
    },
    {
        question: 'What is your therapeutic approach?',
        answer:
            'I integrate evidence-based methods including cognitive-behavioral therapy (CBT), EMDR for trauma processing, mindfulness-based stress reduction (MBSR), and body-oriented techniques. My approach is warm and collaborative, structured enough to feel supportive while leaving space for reflection and depth.',
    },
    {
        question: 'Who do you work with?',
        answer:
            'I primarily work with adults experiencing anxiety, panic, trauma, and burnout. Many of my clients are high-achieving professionals, entrepreneurs, and creatives who feel disconnected after years of pushing through stress. I also support clients navigating the impact of earlier life experiences on their current relationships and confidence.',
    },
    {
        question: 'What does the first session look like?',
        answer:
            'I offer a free 15-minute consultation so we can connect and see if working together feels right. If we decide to move forward, our first full session will focus on understanding your history, current concerns, and goals for therapy. There is no pressure\u2014this is your space.',
    },
    {
        question: 'How long does therapy typically take?',
        answer:
            'The duration varies depending on your specific needs and goals. Some clients benefit from shorter-term work focused on specific concerns, while others prefer ongoing therapy for deeper self-exploration. We will regularly check in on your progress and adjust our approach together.',
    },
]

export default function FAQSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section ref={ref} className="py-16 sm:py-24 lg:py-36 px-5 sm:px-6 lg:px-12 bg-ivory relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-20 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:sticky lg:top-32"
                    >
                        <span className="text-sand text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
                            Questions
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3rem] font-normal text-primary mb-6 sm:mb-8 tracking-tight">
                            Frequently <br />Asked
                        </h2>

                        <div className="relative aspect-[4/5] max-w-sm overflow-hidden hidden lg:block">
                            <Image
                                src="/images/journal-writing.jpg"
                                alt="Journaling for self-reflection and healing"
                                fill
                                className="object-cover"
                                sizes="30vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ivory/30 to-transparent" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:pt-4"
                    >
                        {faqs.map((faq, index) => (
                            <div key={faq.question} className="border-t border-primary/10">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-start gap-5 py-7 text-left group"
                                    aria-expanded={openIndex === index}
                                >
                                    <motion.span
                                        animate={{ rotate: openIndex === index ? 45 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-sand flex-shrink-0 mt-1"
                                    >
                                        <Plus className="w-5 h-5" />
                                    </motion.span>
                                    <span className="font-serif text-lg lg:text-xl font-normal text-primary group-hover:text-sand transition-colors duration-300">
                                        {faq.question}
                                    </span>
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
                                            <p className="text-primary/65 font-light text-base leading-[1.8] pb-7 pl-10 max-w-lg">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                        <div className="border-t border-primary/10" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
