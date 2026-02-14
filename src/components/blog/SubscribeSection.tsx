'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'

export default function SubscribeSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setEmail('')
    }

    return (
        <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-12 bg-primary relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(250,247,242,0.4) 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl mx-auto text-center relative"
            >
                <Mail className="w-6 h-6 text-sand mx-auto mb-6" />

                <h2 className="font-serif text-3xl lg:text-4xl font-normal text-ivory mb-4 tracking-tight">
                    Stay Connected
                </h2>

                <p className="text-ivory/50 text-base font-light leading-relaxed mb-10 max-w-md mx-auto">
                    Subscribe for occasional insights on anxiety management, trauma
                    recovery, and building a more grounded life.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        required
                        className="flex-1 h-12 px-5 bg-ivory/10 border border-ivory/15 text-ivory placeholder-ivory/30 text-sm font-light focus:outline-none focus:border-sand/50 transition-colors duration-300"
                    />
                    <button
                        type="submit"
                        className="group h-12 px-8 bg-sand text-primary text-xs tracking-[0.2em] uppercase font-semibold hover:bg-sand-light transition-colors duration-300 inline-flex items-center justify-center gap-2"
                    >
                        Subscribe
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </form>
            </motion.div>
        </section>
    )
}
