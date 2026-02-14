'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

const blogData = [
    {
        slug: 'understanding-anxiety-vs-stress',
        title: 'Understanding the Difference Between Stress and Anxiety',
        excerpt: 'While stress and anxiety share similar symptoms, understanding their distinct patterns is the first step toward managing both effectively.',
        image: '/images/meditation-calm.jpg',
        date: 'Jan 15, 2025',
        readTime: '5 min',
        category: 'Anxiety',
    },
    {
        slug: 'emdr-what-to-expect',
        title: 'What to Expect from Your First EMDR Session',
        excerpt: 'EMDR can feel unfamiliar at first. Here is a guide to understanding the process and how it helps heal trauma safely.',
        image: '/images/nature-morning.jpg',
        date: 'Jan 8, 2025',
        readTime: '7 min',
        category: 'Trauma',
    },
    {
        slug: 'burnout-high-achievers',
        title: 'Why High Achievers Are More Prone to Burnout',
        excerpt: 'The same qualities that drive success can also fuel exhaustion. Recognizing the cycle is key to building sustainable habits.',
        image: '/images/yoga-wellness.jpg',
        date: 'Dec 20, 2024',
        readTime: '6 min',
        category: 'Burnout',
    },
    {
        slug: 'mindfulness-daily-life',
        title: 'Practical Mindfulness for Your Daily Routine',
        excerpt: 'Mindfulness does not require hours of meditation. Small, intentional moments throughout your day can meaningfully shift your nervous system.',
        image: '/images/person-sunset.jpg',
        date: 'Dec 12, 2024',
        readTime: '4 min',
        category: 'Wellness',
    },
]

export default function BlogGrid() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <section ref={ref} className="py-12 lg:py-20 px-6 lg:px-12 bg-ivory">
            <div className="max-w-7xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
                    {blogData.map((post, i) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            className="group"
                        >
                            <Link href={`/blog/${post.slug}`} className="block">
                                <div className="relative overflow-hidden mb-5 h-[260px] lg:h-[320px]">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />

                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-ivory/90 text-primary text-xs tracking-[0.15em] uppercase font-semibold">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mb-3 text-primary/40 text-xs tracking-wider">
                                    <span>{post.date}</span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h3 className="font-serif text-xl lg:text-2xl font-normal text-primary mb-3 group-hover:text-sand transition-colors duration-300 leading-tight">
                                    {post.title}
                                </h3>

                                <p className="text-primary/55 text-sm font-light leading-relaxed mb-4">
                                    {post.excerpt}
                                </p>

                                <span className="inline-flex items-center gap-2 text-primary text-xs tracking-[0.15em] uppercase font-semibold group-hover:text-sand transition-colors duration-300">
                                    Read More
                                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
