'use client'

import { useState } from 'react'
import Link from 'next/link'

const serviceOptions = [
  { value: '', label: 'What do you need help with?' },
  { value: 'marketing', label: 'Marketing Automation' },
  { value: 'documents', label: 'Document Automation' },
  { value: 'support', label: 'Customer Support AI' },
  { value: 'workflows', label: 'Workflow Integration' },
  { value: 'unsure', label: "Not sure — let's chat" },
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      business: (form.elements.namedItem('business') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.status === 400) {
        setError('Please fill in all required fields (name, business, email, and service).')
        return
      }
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please email us directly at info@growflowai.com.au')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-[#f0f4f1] border border-[#d8e8dc] rounded-xl p-12 text-center">
        <div className="w-14 h-14 bg-[#2d5a3d] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-black text-stone-900 mb-3 tracking-tight">Message received!</h2>
        <p className="text-stone-500 leading-relaxed mb-8 text-sm">
          Thanks for reaching out. We&rsquo;ll review your enquiry and get back to you within 1 business day.
        </p>
        <Link
          href="/"
          className="inline-block bg-stone-900 hover:bg-stone-700 text-white font-semibold px-8 py-3 rounded-md transition-colors text-sm"
        >
          Back to home
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">
            Full name <span className="text-[#2d5a3d]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="w-full px-4 py-3 rounded-lg border border-stone-200 text-stone-900 placeholder-stone-300 focus:outline-none focus:border-[#2d5a3d] focus:ring-2 focus:ring-[#2d5a3d]/10 transition-colors bg-white text-sm"
          />
        </div>
        <div>
          <label htmlFor="business" className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">
            Business name <span className="text-[#2d5a3d]">*</span>
          </label>
          <input
            id="business"
            name="business"
            type="text"
            required
            placeholder="Smith Plumbing Co."
            className="w-full px-4 py-3 rounded-lg border border-stone-200 text-stone-900 placeholder-stone-300 focus:outline-none focus:border-[#2d5a3d] focus:ring-2 focus:ring-[#2d5a3d]/10 transition-colors bg-white text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">
            Email <span className="text-[#2d5a3d]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@smithplumbing.com.au"
            className="w-full px-4 py-3 rounded-lg border border-stone-200 text-stone-900 placeholder-stone-300 focus:outline-none focus:border-[#2d5a3d] focus:ring-2 focus:ring-[#2d5a3d]/10 transition-colors bg-white text-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="0400 000 000"
            className="w-full px-4 py-3 rounded-lg border border-stone-200 text-stone-900 placeholder-stone-300 focus:outline-none focus:border-[#2d5a3d] focus:ring-2 focus:ring-[#2d5a3d]/10 transition-colors bg-white text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">
          What do you need help with? <span className="text-[#2d5a3d]">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full px-4 py-3 rounded-lg border border-stone-200 text-stone-900 focus:outline-none focus:border-[#2d5a3d] focus:ring-2 focus:ring-[#2d5a3d]/10 transition-colors bg-white text-sm"
        >
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">
          Tell us about your biggest time-drain
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="e.g. I spend 3 hours every Monday chasing unpaid invoices and updating spreadsheets..."
          className="w-full px-4 py-3 rounded-lg border border-stone-200 text-stone-900 placeholder-stone-300 focus:outline-none focus:border-[#2d5a3d] focus:ring-2 focus:ring-[#2d5a3d]/10 transition-colors resize-none bg-white text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-stone-900 hover:bg-stone-700 disabled:bg-stone-400 text-white font-semibold px-8 py-3.5 rounded-md transition-colors flex items-center justify-center gap-2 text-sm tracking-wide"
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>

      {error && (
        <p className="text-center text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <p className="text-center text-xs text-stone-400">
        We&rsquo;ll get back to you within 1 business day. No spam, ever.
      </p>
    </form>
  )
}
