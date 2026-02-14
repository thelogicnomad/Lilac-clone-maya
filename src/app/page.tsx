'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import IntroSection from '@/components/IntroSection'
import AboutSection from '@/components/AboutSection'
import SpecialtiesSection from '@/components/SpecialtiesSection'
import ChallengeSection from '@/components/ChallengeSection'
import SupportSection from '@/components/SupportSection'
import BackgroundSection from '@/components/BackgroundSection'
import OurOffice from '@/components/OurOffice'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">

      <Header />
      <HeroSection />
      <IntroSection />
      <AboutSection />
      <SpecialtiesSection />
      <ChallengeSection />
      <SupportSection />
      <BackgroundSection />
      <OurOffice />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
