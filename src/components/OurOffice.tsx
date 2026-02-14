'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { MapPin, Monitor, Shield, Sun } from 'lucide-react'

const details = [
    {
        icon: MapPin,
        title: 'Location',
        description: '123th Street 45 W, Santa Monica, CA 90401',
    },
    {
        icon: Monitor,
        title: 'In-Person & Telehealth',
        description: 'In-person from Santa Monica and secure telehealth throughout California.',
    },
    {
        icon: Shield,
        title: 'Privacy & Comfort',
        description: 'A safe, confidential space where you can feel grounded and free to explore.',
    },
    {
        icon: Sun,
        title: 'Natural & Calm',
        description: 'Natural light, comfortable seating, and an uncluttered environment designed for ease.',
    },
]

export default function OurOffice() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const img1Y = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])
    const img2Y = useTransform(scrollYProgress, [0, 1], ['-3%', '3%'])

    return (
        <section ref={ref} className="py-16 sm:py-24 lg:py-36 px-5 sm:px-6 lg:px-12 bg-ivory relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-seafoam/5 rounded-full blur-3xl -translate-x-1/2" />

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 max-w-2xl"
                >
                    <span className="text-sand text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
                        Our Office
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.2rem] font-normal text-primary tracking-tight mb-4 sm:mb-6">
                        A Calm Space <br />for Healing
                    </h2>
                    <p className="text-primary/65 text-base lg:text-lg leading-[1.8] font-light">
                        My Santa Monica office is a quiet, private space designed to feel calm
                        and grounding, with natural light and a comfortable, uncluttered
                        environment. Clients often share that the space itself helps them feel
                        more at ease when they arrive.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="relative overflow-hidden col-span-1 lg:col-span-2 h-[250px] sm:h-[350px] lg:h-[450px]"
                    >
                        <motion.div className="absolute inset-0" style={{ y: img1Y }}>
                            <Image
                                src="/images/office1.jpeg"
                                alt="Dr. Maya Reynolds therapy office - welcoming counseling space in Santa Monica"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 66vw"
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                    </motion.div>

                    <div className="grid grid-rows-2 gap-4 lg:gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative overflow-hidden h-[200px] lg:h-auto"
                        >
                            <motion.div className="absolute inset-0" style={{ y: img2Y }}>
                                <Image
                                    src="/images/office2.jpeg"
                                    alt="Therapy office interior - cozy and bright counseling room"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative overflow-hidden h-[200px] lg:h-auto"
                        >
                            <Image
                                src="/images/office1.jpeg"
                                alt="Cozy therapy office with natural light"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
                >
                    {details.map((detail, i) => (
                        <motion.div
                            key={detail.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                            className="group"
                        >
                            <detail.icon className="w-5 h-5 text-sand mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="font-serif text-lg text-primary mb-2">{detail.title}</h3>
                            <p className="text-primary/55 font-light text-sm leading-relaxed">
                                {detail.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
