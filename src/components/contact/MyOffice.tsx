'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Clock, Phone, Mail, ArrowUpRight } from 'lucide-react'

export default function MyOffice() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <section ref={ref} id="office" className="py-0 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-primary px-6 sm:px-10 lg:px-20 py-12 sm:py-16 lg:py-24 flex flex-col justify-center relative overflow-hidden order-2 lg:order-1"
                >
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(250,247,242,0.4) 1px, transparent 0)`,
                            backgroundSize: '40px 40px',
                        }}
                    />

                    <div className="relative">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-sand text-sm tracking-[0.3em] uppercase font-semibold mb-6 block"
                        >
                            Visit the Office
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] font-normal text-ivory tracking-tight mb-8 sm:mb-10 leading-tight"
                        >
                            A Calm Space <br />for Healing
                        </motion.h2>

                        <div className="space-y-6 mb-10">
                            {[
                                { icon: MapPin, label: 'Address', value: '123th Street 45 W, Santa Monica, CA 90401' },
                                { icon: Clock, label: 'Hours', value: 'Monday - Friday, 9:00 AM - 6:00 PM' },
                                { icon: Phone, label: 'Phone', value: '(310) 555-1234' },
                                { icon: Mail, label: 'Email', value: 'hello@drmayareynolds.com' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                                    className="flex items-start gap-4"
                                >
                                    <item.icon className="w-4 h-4 text-sand mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-ivory/40 text-xs tracking-[0.12em] uppercase font-semibold mb-0.5">
                                            {item.label}
                                        </p>
                                        <p className="text-ivory/80 text-sm font-light">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="flex flex-wrap gap-4 pt-4 border-t border-ivory/10"
                        >
                            <a
                                href="https://maps.google.com/?q=Santa+Monica+CA+90401"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 text-ivory/60 text-xs tracking-[0.15em] uppercase font-semibold hover:text-sand transition-colors duration-300"
                            >
                                Get Directions
                                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </a>
                            <span className="text-ivory/20">|</span>
                            <p className="text-ivory/40 text-xs font-light">
                                In-person & telehealth available
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[300px] sm:h-[400px] lg:h-auto overflow-hidden order-1 lg:order-2"
                >
                    <iframe
                        title="Office Location - Dr. Maya Reynolds, Santa Monica CA"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.095!2d-118.49!3d34.015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAwJzU0LjAiTiAxMTjCsDI5JzI0LjAiVw!5e0!3m2!1sen!2sus!4v1700000000000"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'saturate(0.7) contrast(1.1)', minHeight: '400px' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </motion.div>
            </div>
        </section>
    )
}
