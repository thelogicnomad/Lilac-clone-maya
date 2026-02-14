'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, AlertTriangle } from 'lucide-react'

export default function ContactHero() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const contactCards = [
        {
            icon: Phone,
            label: 'Call or Text',
            value: '(310) 555-1234',
            href: 'tel:3105551234',
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'hello@drmayareynolds.com',
            href: 'mailto:hello@drmayareynolds.com',
        },
        {
            icon: MapPin,
            label: 'Office',
            value: '123th Street 45 W, Santa Monica, CA 90401',
            href: '#office',
        },
        {
            icon: Clock,
            label: 'Hours',
            value: 'Mon - Fri, 9:00 AM - 6:00 PM',
            href: null,
        },
    ]

    return (
        <section ref={ref} className="relative pt-24 sm:pt-28 pb-0 lg:pt-36 overflow-hidden bg-ivory">
            <div className="px-5 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center pb-12 sm:pb-16 lg:pb-24">
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
                                Get in Touch
                            </motion.span>

                            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[3.5rem] font-normal text-primary tracking-tight mb-4 sm:mb-6 leading-[1.1]">
                                Let&apos;s Start the <br />
                                <span className="text-sand italic">Conversation</span>
                            </h1>

                            <p className="text-primary/60 text-base lg:text-lg font-light leading-[1.8] max-w-md mb-10">
                                I offer a free 15-minute consultation so we can connect and see
                                if working together feels right. Reach out whenever you&apos;re
                                ready.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                                {contactCards.map((card, i) => (
                                    <motion.div
                                        key={card.label}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                                        transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                                    >
                                        {card.href ? (
                                            <a
                                                href={card.href}
                                                className="group block p-5 bg-ivory-mid hover:bg-sand-pale/50 transition-colors duration-300 border border-transparent hover:border-sand/20"
                                            >
                                                <card.icon className="w-4 h-4 text-sand mb-3" />
                                                <p className="text-primary/40 text-xs tracking-[0.15em] uppercase font-semibold mb-1">
                                                    {card.label}
                                                </p>
                                                <p className="text-primary text-sm font-light group-hover:text-sand transition-colors duration-300">
                                                    {card.value}
                                                </p>
                                            </a>
                                        ) : (
                                            <div className="p-5 bg-ivory-mid border border-transparent">
                                                <card.icon className="w-4 h-4 text-sand mb-3" />
                                                <p className="text-primary/40 text-xs tracking-[0.15em] uppercase font-semibold mb-1">
                                                    {card.label}
                                                </p>
                                                <p className="text-primary text-sm font-light">{card.value}</p>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex items-start gap-3 p-4 bg-sand-pale/30 border-l-2 border-sand/40"
                            >
                                <AlertTriangle className="w-4 h-4 text-sand flex-shrink-0 mt-0.5" />
                                <p className="text-primary/50 text-xs font-light leading-relaxed">
                                    If you are in crisis, please call <strong className="font-semibold">988</strong> (Suicide & Crisis Lifeline)
                                    or go to your nearest emergency room.
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative">
                                <div className="absolute -top-3 -right-3 w-full h-full border-2 border-sand/15 hidden lg:block" />
                                <div className="relative h-[350px] sm:h-[450px] lg:h-[550px] overflow-hidden">
                                    <Image
                                        src="/images/maya_Reynolds.png"
                                        alt="Dr. Maya Reynolds - Licensed Clinical Psychologist in Santa Monica"
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                    className="absolute -bottom-5 -left-5 bg-primary px-6 py-4 shadow-xl hidden lg:block"
                                >
                                    <p className="font-serif text-lg text-ivory">Dr. Maya Reynolds</p>
                                    <p className="text-ivory/50 text-xs tracking-wider uppercase mt-1">PsyD &mdash; Santa Monica, CA</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
