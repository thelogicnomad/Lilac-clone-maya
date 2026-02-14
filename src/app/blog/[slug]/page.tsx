'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Clock, ArrowLeft } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const blogPosts = [
    {
        slug: 'understanding-anxiety-vs-stress',
        title: 'Understanding the Difference Between Stress and Anxiety',
        date: 'Jan 15, 2025',
        readTime: '5 min',
        category: 'Anxiety',
        image: '/images/meditation-calm.jpg',
        body: [
            'Stress and anxiety are often used interchangeably, but they are fundamentally different experiences. Stress is typically a response to an external trigger, such as a deadline at work, a conflict in a relationship, or a major life change. Once the stressor is removed, the stress tends to subside.',
            'Anxiety, on the other hand, persists even when there is no immediate external threat. It is an internal experience characterized by excessive worry, a sense of dread, and physical symptoms like a racing heart, shallow breathing, or tension in the body. For many of my clients in Santa Monica, this distinction is the first breakthrough in understanding what they are experiencing.',
            'One of the most common patterns I see in my practice is high-achieving individuals who have been managing stress well for years, only to find themselves suddenly overwhelmed by what feels like an entirely new experience. The truth is, chronic stress that goes unaddressed often transforms into generalized anxiety. The nervous system, after being on high alert for too long, begins to perceive danger even when things are objectively fine.',
            'In therapy, I use a combination of Cognitive Behavioral Therapy (CBT) and mindfulness-based approaches to help clients distinguish between productive concern and anxiety-driven overthinking. CBT helps identify the thought patterns that fuel anxiety, while mindfulness teaches us to observe those thoughts without automatically believing them.',
            'A practical exercise I often recommend is the "5-4-3-2-1" grounding technique. When you notice anxiety building, pause and identify five things you can see, four you can touch, three you can hear, two you can smell, and one you can taste. This simple practice redirects your attention from internal worry to the present moment.',
            'If you are finding it difficult to tell whether what you are experiencing is normal stress or something deeper, that is a good reason to reach out. Understanding the difference is the first step toward feeling more in control.',
        ],
    },
    {
        slug: 'emdr-what-to-expect',
        title: 'What to Expect from Your First EMDR Session',
        date: 'Jan 8, 2025',
        readTime: '7 min',
        category: 'Trauma',
        image: '/images/nature-morning.jpg',
        body: [
            'Eye Movement Desensitization and Reprocessing (EMDR) is one of the most effective evidence-based treatments for trauma, yet many people feel uncertain about what a session actually looks like. If you are considering EMDR therapy, here is what you can expect.',
            'EMDR works on the principle that traumatic memories are stored differently in the brain than ordinary memories. When something overwhelming happens, the brain sometimes fails to fully process the experience. These unprocessed memories can be triggered by present-day situations, causing intense emotional reactions that seem disproportionate to the current event.',
            'In your first session, we will not jump straight into processing. We begin with a thorough history-taking and preparation phase. I want to understand your story, your current symptoms, and what you hope to achieve. We will also establish safety and coping strategies you can use between sessions.',
            'The actual processing phase involves focusing on a specific memory while following a set of bilateral stimulations, usually eye movements or tapping. During this process, many clients report that the memory begins to feel more distant, less emotionally charged, or that new insights arise spontaneously.',
            'One of the most common questions I hear is "Will I have to talk about everything that happened to me?" The answer is no. EMDR does not require you to describe your trauma in detail. You can process a memory without verbalizing every aspect of it, which is one of the reasons many people find it less daunting than traditional talk therapy.',
            'After a session, some clients feel lighter immediately. Others may notice that processing continues over the following days, sometimes through vivid dreams or shifting emotions. This is normal and part of the healing process.',
            'EMDR is not a quick fix; it is a structured approach that respects your pace. As a certified EMDR therapist, I am trained to guide you through the process safely while ensuring you feel supported at every step.',
        ],
    },
    {
        slug: 'burnout-high-achievers',
        title: 'Why High Achievers Are More Prone to Burnout',
        date: 'Dec 20, 2024',
        readTime: '6 min',
        category: 'Burnout',
        image: '/images/yoga-wellness.jpg',
        body: [
            'Burnout does not happen overnight. It builds gradually, disguised as dedication, discipline, and doing "what needs to be done." For high achievers, the very traits that fuel success, such as perfectionism, high standards, and an inability to say no, are often the same traits that lead to complete exhaustion.',
            'In my practice in Santa Monica, I work with many professionals who arrive at my office feeling hollow. They have accomplished a great deal by external measures but feel disconnected from their work, their relationships, and themselves. They describe going through the motions, struggling to find meaning in activities that once energized them.',
            'The World Health Organization classifies burnout as an occupational phenomenon characterized by three dimensions: emotional exhaustion, depersonalization (feeling detached or cynical about your work), and reduced personal accomplishment. If you recognize these in yourself, you are not alone.',
            'What makes high achievers particularly vulnerable is a pattern I call "achievement as identity." When your sense of self-worth is built on productivity and external validation, any slowdown feels like failure. Rest feels lazy. Boundaries feel selfish. And the cycle perpetuates itself.',
            'Recovery from burnout is not just about taking a vacation or reducing your workload, though both may help. It requires examining the underlying beliefs that drive the pattern. In therapy, we explore questions like: Where did you learn that rest was unearned? What would happen if you were less productive? Who would you be without your achievements?',
            'I use a combination of CBT and somatic approaches to help clients reconnect with their bodies and notice the early warning signs of burnout before they reach a crisis point. Learning to recognize the difference between healthy motivation and compulsive productivity is a skill that changes everything.',
        ],
    },
    {
        slug: 'mindfulness-daily-life',
        title: 'Practical Mindfulness for Your Daily Routine',
        date: 'Dec 12, 2024',
        readTime: '4 min',
        category: 'Wellness',
        image: '/images/person-sunset.jpg',
        body: [
            'When most people think of mindfulness, they picture someone sitting cross-legged in silence for thirty minutes. While formal meditation practice has enormous benefits, the truth is that mindfulness can be woven into the smallest moments of your day without requiring any special time or equipment.',
            'Mindfulness simply means paying attention to the present moment without judgment. It is the opposite of the autopilot mode many of us operate in, scrolling through our phones while eating, planning tomorrow while brushing our teeth, rehearsing conversations while driving.',
            'One of the simplest practices I recommend to my clients is mindful transitions. Between activities, such as from a meeting to lunch or from your car to your front door, take three deliberate breaths. Notice where you are. Feel your feet on the ground. This creates a small gap between stimulus and response, and it is in that gap that we find choice.',
            'Another powerful practice is the "one thing at a time" approach. Pick one daily activity, maybe your morning coffee, washing the dishes, or your commute, and commit to doing only that one thing with full attention. Notice the sensations, the temperature, the textures. When your mind wanders, and it will, gently bring it back.',
            'The science behind these small practices is compelling. Research shows that even brief mindfulness exercises reduce cortisol levels, lower blood pressure, and improve emotional regulation. Over time, they can literally change the structure of the brain, strengthening areas associated with attention and reducing activity in regions linked to stress and reactivity.',
            'The goal is not to achieve a perfectly calm mind. The goal is to build a different relationship with your thoughts, one where you can observe them without being consumed by them. Start small, be patient with yourself, and remember that consistency matters more than duration.',
        ],
    },
]

export default function BlogPostPage() {
    const params = useParams()
    const slug = params.slug as string
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
    const post = blogPosts[currentIndex >= 0 ? currentIndex : 0]
    const prevPost = blogPosts[(currentIndex - 1 + blogPosts.length) % blogPosts.length]
    const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length]

    return (
        <main className="min-h-screen bg-ivory">
            <Header />

            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-12 pb-10 lg:pb-14">
                        <div className="max-w-3xl mx-auto">
                            <span className="inline-block px-3 py-1 bg-sand text-primary text-xs tracking-[0.15em] uppercase font-semibold mb-4">
                                {post.category}
                            </span>
                            <h1 className="font-serif text-3xl lg:text-5xl font-normal text-ivory tracking-tight leading-tight">
                                {post.title}
                            </h1>
                        </div>
                    </div>
                </div>

                <article className="px-6 lg:px-12 py-14 lg:py-20">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-6 mb-12 pb-8 border-b border-primary/10">
                            <Link
                                href="/blog"
                                className="group inline-flex items-center gap-2 text-primary/50 text-xs tracking-[0.12em] uppercase font-semibold hover:text-sand transition-colors duration-300"
                            >
                                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-300" />
                                All Articles
                            </Link>
                            <span className="text-primary/20">|</span>
                            <span className="text-primary/45 text-sm font-light">{post.date}</span>
                            <span className="flex items-center gap-1 text-primary/45 text-sm font-light">
                                <Clock className="w-3 h-3" />
                                {post.readTime}
                            </span>
                        </div>

                        <div className="space-y-6">
                            {post.body.map((paragraph, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                    transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                                    className="text-primary/80 text-base lg:text-[1.05rem] leading-[1.9] font-light"
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </div>

                        <div className="mt-16 pt-10 border-t border-primary/10">
                            <div className="flex items-center gap-5">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                                    <Image
                                        src="/images/maya_Reynolds.png"
                                        alt="Dr. Maya Reynolds"
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div>
                                    <p className="font-serif text-lg text-primary">Dr. Maya Reynolds, PsyD</p>
                                    <p className="text-primary/45 text-sm font-light">
                                        Licensed Clinical Psychologist &mdash; Santa Monica, CA
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <div className="border-t border-primary/10">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-0 grid grid-cols-2">
                        <Link
                            href={`/blog/${prevPost.slug}`}
                            className="group flex items-center gap-4 py-8 pr-6 border-r border-primary/10 hover:bg-ivory-mid transition-colors duration-300"
                        >
                            <ChevronLeft className="w-5 h-5 text-primary/30 group-hover:text-sand transition-colors duration-300" />
                            <div>
                                <p className="text-primary/40 text-xs tracking-[0.12em] uppercase font-semibold mb-1">
                                    Previous
                                </p>
                                <p className="font-serif text-lg text-primary group-hover:text-sand transition-colors duration-300 line-clamp-1">
                                    {prevPost.title}
                                </p>
                            </div>
                        </Link>
                        <Link
                            href={`/blog/${nextPost.slug}`}
                            className="group flex items-center justify-end gap-4 py-8 pl-6 hover:bg-ivory-mid transition-colors duration-300"
                        >
                            <div className="text-right">
                                <p className="text-primary/40 text-xs tracking-[0.12em] uppercase font-semibold mb-1">
                                    Next
                                </p>
                                <p className="font-serif text-lg text-primary group-hover:text-sand transition-colors duration-300 line-clamp-1">
                                    {nextPost.title}
                                </p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-primary/30 group-hover:text-sand transition-colors duration-300" />
                        </Link>
                    </div>
                </div>
            </motion.div>

            <Footer />
        </main>
    )
}
