import React from "react"
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapist in Santa Monica, CA',
  description: 'Licensed clinical psychologist in Santa Monica offering therapy for anxiety, trauma, burnout, and perfectionism. In-person and telehealth sessions for adults in California.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
