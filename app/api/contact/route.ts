// app/api/contact/route.ts
import { Resend } from 'resend'

export const dynamic = 'force-dynamic'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    const to = process.env.CONTACT_EMAIL_TO
    if (!to) {
      console.error('Missing CONTACT_EMAIL_TO')
      return new Response(JSON.stringify({ error: 'Missing CONTACT_EMAIL_TO env var' }), { status: 500, headers: { 'Content-Type': 'application/json' } })
    }

    const from = process.env.CONTACT_EMAIL_FROM || 'Contact Form <onboarding@resend.dev>'

    const data = await resend.emails.send({
      from,
      to, // ✅ this is your Gmail address
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    })

    return new Response(JSON.stringify({ success: true, data }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  } catch (error) {
    console.error('Resend error:', error)
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }
}
