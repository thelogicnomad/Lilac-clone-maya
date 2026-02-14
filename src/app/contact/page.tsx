'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactHero from '@/components/contact/ContactHero'
import BookAppointment from '@/components/contact/BookAppointment'
import MyOffice from '@/components/contact/MyOffice'
import FindMeSocial from '@/components/contact/FindMeSocial'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHero />
      <BookAppointment />
      <MyOffice />
      <FindMeSocial />
      <Footer />
    </main>
  )
}
