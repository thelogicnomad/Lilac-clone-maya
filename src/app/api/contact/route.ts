import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactPayload {
    name: string
    email: string
    phone?: string
    message?: string
}

function validatePayload(body: unknown): body is ContactPayload {
    if (!body || typeof body !== 'object') return false
    const b = body as Record<string, unknown>
    if (typeof b.name !== 'string' || b.name.trim().length === 0) return false
    if (typeof b.email !== 'string' || b.email.trim().length === 0) return false
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(b.email)) return false
    if (b.name.length > 200 || b.email.length > 200) return false
    if (b.phone && (typeof b.phone !== 'string' || b.phone.length > 30)) return false
    if (b.message && (typeof b.message !== 'string' || b.message.length > 5000)) return false
    return true
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        if (!validatePayload(body)) {
            return NextResponse.json(
                { error: 'Invalid input' },
                { status: 400 }
            )
        }

        const { name, email, phone, message } = body

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })

        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`,
            replyTo: email,
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
            subject: `New Appointment Request from ${name}`,
            text: [
                `Name: ${name}`,
                `Email: ${email}`,
                phone ? `Phone: ${phone}` : null,
                message ? `\nMessage:\n${message}` : null,
            ]
                .filter(Boolean)
                .join('\n'),
            html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
      `,
        })

        return NextResponse.json({ success: true })
    } catch (err) {
        console.error('Contact form error:', err instanceof Error ? err.message : 'Unknown error')
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        )
    }
}
