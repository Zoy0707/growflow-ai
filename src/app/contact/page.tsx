import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with GrowFlow AI. Book a free 30-minute discovery call or send us a message — we'll respond within 1 business day.",
  openGraph: {
    title: 'Contact GrowFlow AI',
    description: "Book a free call or send a message. We'll respond within 1 business day.",
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-stone-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-[#6fa882] font-semibold text-xs uppercase tracking-widest mb-6">Get in touch</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 tracking-tight max-w-2xl leading-tight">
            Let&rsquo;s talk about your business
          </h1>
          <p className="text-stone-400 max-w-xl leading-relaxed font-light">
            Tell us what&rsquo;s eating your time and we&rsquo;ll come back to you within 1 business day with practical ideas — no sales pressure.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#fafaf8]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact info */}
            <aside className="lg:col-span-2 space-y-5">
              <div className="bg-white rounded-xl border border-stone-100 p-8">
                <h2 className="text-base font-bold text-stone-900 mb-6">Other ways to reach us</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-[#f0f4f1] rounded-lg flex items-center justify-center text-[#2d5a3d] shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 font-semibold uppercase tracking-wide mb-1">Email</p>
                      <a
                        href="mailto:info@growflowai.com.au"
                        className="text-stone-800 font-semibold hover:text-[#2d5a3d] transition-colors text-sm"
                      >
                        info@growflowai.com.au
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-[#f0f4f1] rounded-lg flex items-center justify-center text-[#2d5a3d] shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 font-semibold uppercase tracking-wide mb-1">Location</p>
                      <p className="text-stone-800 font-semibold text-sm">Kew, Melbourne VIC 3101</p>
                      <p className="text-stone-400 text-xs mt-0.5">Serving businesses nationwide</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#f0f4f1] border border-[#d8e8dc] rounded-xl p-6">
                <p className="text-xs font-bold text-[#2d5a3d] uppercase tracking-widest mb-2">Response time</p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  We respond within 1 business day, Monday to Friday (AEST). For urgent matters, email us directly.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
