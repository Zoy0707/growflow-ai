import { NextResponse } from 'next/server'

const SERVICE_LABELS: Record<string, string> = {
  marketing: 'Marketing Automation',
  documents: 'Document Automation',
  support: 'Customer Support AI',
  workflows: 'Workflow Integration',
  unsure: "Not sure — let's chat",
}

export async function POST(request: Request) {
  const { name, business, email, phone, service, message } = await request.json()

  if (!name || !business || !email || !service) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const serviceLabel = SERVICE_LABELS[service] ?? service

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1c1c1c;">
      <div style="background: #2d5a3d; padding: 24px 32px; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">New Website Enquiry</h1>
      </div>
      <div style="background: #fafaf8; padding: 32px; border: 1px solid #e5e5e0; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e0; width: 140px; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e0; font-size: 14px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e0; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Business</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e0; font-size: 14px;">${business}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e0; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e0; font-size: 14px;"><a href="mailto:${email}" style="color: #2d5a3d;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e0; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e0; font-size: 14px;">${phone || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e0; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Service</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e0; font-size: 14px;">${serviceLabel}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; font-size: 14px; line-height: 1.6;">${message ? message.replace(/\n/g, '<br>') : '—'}</td>
          </tr>
        </table>
        <div style="margin-top: 28px; padding: 16px; background: white; border: 1px solid #e5e5e0; border-radius: 6px;">
          <p style="margin: 0; font-size: 13px; color: #6b7280;">Reply directly to this email to respond to ${name}.</p>
        </div>
      </div>
    </div>
  `

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'GrowFlow AI <noreply@growflowai.com.au>',
      to: ['info@growflowai.com.au'],
      reply_to: email,
      subject: `New enquiry from ${name} — ${business}`,
      html,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
