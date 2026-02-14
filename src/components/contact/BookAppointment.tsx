'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Loader2, Calendar, Video, Users } from 'lucide-react'

export default function BookAppointment() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        sessionType: '',
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            if (!res.ok) throw new Error('Failed to send message')
            setStatus('success')
            setFormData({ name: '', email: '', phone: '', service: '', sessionType: '', message: '' })
        } catch {
            setStatus('error')
        }
    }

    const inputClasses =
        'w-full h-14 px-5 bg-ivory border border-primary/10 text-primary text-sm font-light placeholder-primary/30 focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand/20 transition-all duration-300'

    const sessionTypes = [
        { id: 'in-person', label: 'In-Person', desc: 'Santa Monica Office', icon: Users },
        { id: 'telehealth', label: 'Telehealth', desc: 'Secure Video Session', icon: Video },
    ]

    return (
        <section ref={ref} className="py-14 sm:py-20 lg:py-28 px-5 sm:px-6 lg:px-12 bg-ivory-mid relative overflow-hidden" id="book">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto relative">
                <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sand text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
                            Book a Session
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.8rem] font-normal text-primary tracking-tight mb-3 leading-tight">
                            Request Your Free <br className="hidden lg:block" />
                            <span className="text-sand italic">Consultation</span>
                        </h2>
                        <p className="text-primary/50 text-base font-light mb-10 max-w-md">
                            Fill out the form below and I will respond within 24 hours to
                            schedule your free 15-minute consultation.
                        </p>

                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="py-20 space-y-4 text-center bg-ivory p-12"
                            >
                                <CheckCircle className="w-14 h-14 text-seafoam mx-auto" />
                                <h3 className="font-serif text-2xl text-primary">Message Sent</h3>
                                <p className="text-primary/50 text-sm font-light max-w-sm mx-auto">
                                    Thank you for reaching out. I will get back to you within 24 hours
                                    to schedule your consultation.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.form
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        maxLength={100}
                                        className={inputClasses}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        maxLength={200}
                                        className={inputClasses}
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone (optional)"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        maxLength={20}
                                        className={inputClasses}
                                    />
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className={`${inputClasses} appearance-none cursor-pointer`}
                                    >
                                        <option value="">Select a Service</option>
                                        <option value="anxiety">Anxiety & Panic</option>
                                        <option value="trauma">Trauma & EMDR</option>
                                        <option value="burnout">Burnout & Perfectionism</option>
                                        <option value="general">General Inquiry</option>
                                    </select>
                                </div>

                                <div>
                                    <p className="text-primary/40 text-xs tracking-[0.15em] uppercase font-semibold mb-3">
                                        Preferred Session Type
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {sessionTypes.map((type) => (
                                            <label
                                                key={type.id}
                                                className={`relative flex items-center gap-4 p-4 cursor-pointer border transition-all duration-300 ${formData.sessionType === type.id
                                                    ? 'border-sand bg-sand/5'
                                                    : 'border-primary/10 bg-ivory hover:border-primary/20'
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="sessionType"
                                                    value={type.id}
                                                    checked={formData.sessionType === type.id}
                                                    onChange={handleChange}
                                                    className="sr-only"
                                                />
                                                <type.icon className={`w-5 h-5 flex-shrink-0 ${formData.sessionType === type.id ? 'text-sand' : 'text-primary/30'
                                                    }`} />
                                                <div>
                                                    <p className={`text-sm font-medium ${formData.sessionType === type.id ? 'text-primary' : 'text-primary/70'
                                                        }`}>{type.label}</p>
                                                    <p className="text-xs text-primary/40 font-light">{type.desc}</p>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <textarea
                                    name="message"
                                    placeholder="Tell me a bit about what brings you here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    required
                                    maxLength={2000}
                                    className={`${inputClasses} h-auto py-4 resize-none`}
                                />

                                <div className="flex items-center justify-between pt-2">
                                    <p className="text-primary/30 text-xs font-light hidden sm:block">
                                        Your information is kept strictly confidential.
                                    </p>

                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 bg-primary text-ivory text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-semibold overflow-hidden transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                                    >
                                        <span className="absolute inset-0 bg-sand translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                                        <span className="relative flex items-center gap-2">
                                            {status === 'loading' ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                                </>
                                            )}
                                        </span>
                                    </button>
                                </div>

                                {status === 'error' && (
                                    <p className="text-red-600 text-sm font-light">
                                        Something went wrong. Please try again or email me directly.
                                    </p>
                                )}
                            </motion.form>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="space-y-6 hidden lg:block lg:pt-16"
                    >
                        <div className="relative h-[300px] overflow-hidden">
                            <Image
                                src="/images/office1.jpeg"
                                alt="Dr. Maya Reynolds therapy office in Santa Monica"
                                fill
                                className="object-cover brightness-[0.95] contrast-[1.02] saturate-[0.85]"
                                sizes="45vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-sand/5 to-transparent" />
                        </div>

                        <div className="relative h-[250px] overflow-hidden">
                            <Image
                                src="/images/office2.jpeg"
                                alt="Counseling room interior - calm and welcoming space"
                                fill
                                className="object-cover brightness-[0.95] contrast-[1.02] saturate-[0.85]"
                                sizes="45vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-sand/5 to-transparent" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex items-center gap-4 p-5 bg-primary"
                        >
                            <Calendar className="w-5 h-5 text-sand flex-shrink-0" />
                            <div>
                                <p className="text-ivory text-sm font-medium">Free 15-Minute Consultation</p>
                                <p className="text-ivory/50 text-xs font-light mt-0.5">
                                    No commitment required. Let&apos;s see if we&apos;re a good fit.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
