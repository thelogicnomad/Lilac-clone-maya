'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import BlogHero from '@/components/blog/BlogHero'
import BlogGrid from '@/components/blog/BlogGrid'
import SubscribeSection from '@/components/blog/SubscribeSection'

export default function BlogPage() {
  return (
    <main className="min-h-screen">

      <Header />
      <BlogHero />
      <BlogGrid />
      <SubscribeSection />
      <Footer />
    </main>
  )
}
