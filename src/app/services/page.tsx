import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description:
    "Explore GrowFlow's AI automation services for Australian SMEs — marketing automation, document automation, customer support AI, and workflow integration.",
  openGraph: {
    title: 'Services | GrowFlow AI',
    description: 'AI automation services tailored for Australian small and medium businesses.',
  },
}

const services = [
  {
    id: 'marketing',
    badge: '01',
    title: 'Marketing Automation',
    tagline: 'Set and forget your social, email, and ads.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    whatItDoes: [
      'Automatically schedule and publish social media posts across Facebook, Instagram, and LinkedIn from a single content calendar.',
      'Send targeted email campaigns triggered by customer behaviour — new enquiry, purchase, or abandoned cart — without manual follow-up.',
      'Sync your ad spend data across Google and Meta, pause underperforming ads, and reallocate budget automatically based on rules you set.',
    ],
    whoItsFor:
      'Advertising agencies, digital marketing consultancies, and professional services firms who manage multiple client campaigns and know they should be doing more content — but never have the bandwidth to keep up.',
    useCase:
      "A digital marketing agency managing over a dozen client accounts was spending most of Monday manually scheduling the week's social content across platforms and chasing campaign reports. After GrowFlow automated their content calendar and reporting workflows, the team reclaimed around 10 hours per week — time they redirected into strategy and new business. Client retention improved noticeably in the following quarter.",
  },
  {
    id: 'documents',
    badge: '02',
    title: 'Document Automation',
    tagline: 'Quotes, invoices, contracts — done in seconds.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    whatItDoes: [
      'Generate professional quotes, invoices, and contracts pre-filled with customer and job data from your CRM or spreadsheet — one click, ready to send.',
      'Automatically chase unpaid invoices with polite, scheduled reminders that stop the moment payment is received.',
      'Store all signed documents in organised folders with automatic naming conventions, so you can find anything in seconds.',
    ],
    whoItsFor:
      'Building and construction companies, trades businesses, and any SME that sends a high volume of quotes, contracts, or variation orders — and loses time moving the same details between email, spreadsheets, and Word templates.',
    useCase:
      "A residential building company was spending close to an hour per quote, manually pulling client details, scope items, and pricing into Word documents. Errors crept in, follow-ups were forgotten, and the admin load was slowing down their sales cycle. GrowFlow built an automated quoting system connected to their job management software — quotes are now generated in under a minute, variations are tracked automatically, and nothing falls through the cracks.",
  },
  {
    id: 'support',
    badge: '03',
    title: 'Customer Support AI',
    tagline: 'Answer enquiries 24/7 without lifting a finger.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    whatItDoes: [
      'Deploy an AI chat assistant on your website, trained specifically on your services, pricing, FAQs, and booking process — available around the clock.',
      'Handle booking requests, send confirmations, and add new appointments to your calendar automatically, without any human intervention.',
      'Escalate complex or sensitive queries to a human with full conversation context, so your team picks up exactly where the AI left off.',
    ],
    whoItsFor:
      'Travel agencies, tour operators, and booking-driven businesses that field the same questions — destinations, availability, pricing, itineraries — repeatedly throughout the day and after hours.',
    useCase:
      "A travel agency was fielding the same enquiries dozens of times a day: visa requirements, package pricing, best-time-to-visit questions. Staff were spending hours on email and phone before a booking was even close to confirmed. GrowFlow deployed an AI assistant trained on their destination knowledge and packages — it now handles initial enquiries around the clock, qualifies leads, and hands over to a consultant only when the client is ready to book. Consultant time on unqualified calls dropped significantly.",
  },
  {
    id: 'workflows',
    badge: '04',
    title: 'Workflow Integration',
    tagline: 'Connect your tools. Stop copy-pasting.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    whatItDoes: [
      'Connect your CRM, accounting software (Xero, MYOB), email, project management, and ecommerce platforms so data flows between them without manual entry.',
      'Build automated approval workflows — purchase orders, staff onboarding, client sign-offs — that route tasks to the right person and track progress.',
      'Set up smart notifications so your team gets alerted in Slack or email only when something actually needs their attention, not for every minor event.',
    ],
    whoItsFor:
      'Accounting firms, bookkeeping practices, and professional services businesses with 5–30 staff who have accumulated a mix of practice management, billing, and communication tools that don\'t talk to each other.',
    useCase:
      "An accounting firm was manually moving client data between their practice management system, Xero, and a separate document portal — a process that took staff several hours each week and introduced errors at peak periods like tax time. GrowFlow connected the three platforms and automated the handoffs between onboarding, engagement letters, and billing. The team now handles the same client volume with fewer touch points, and the partners have visibility across jobs without chasing status updates.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-stone-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-[#6fa882] font-semibold text-xs uppercase tracking-widest mb-6">What we offer</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight max-w-3xl">
            Automation services built for{' '}
            <span className="text-[#6fa882]">Australian SMEs</span>
          </h1>
          <p className="text-stone-400 max-w-2xl leading-relaxed font-light">
            We don&rsquo;t sell software licences. We build, install, and maintain AI automations that run your business&rsquo;s most time-consuming tasks — so your team can focus on what matters.
          </p>
        </div>
      </section>

      {/* Services detail */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`py-24 lg:py-32 ${i % 2 === 0 ? 'bg-[#fafaf8]' : 'bg-white'}`}
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-[#f0f4f1] rounded-lg flex items-center justify-center text-[#2d5a3d]">
                    {svc.icon}
                  </div>
                  <span className="text-2xl font-black text-stone-400">{svc.badge}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mb-2 tracking-tight">{svc.title}</h2>
                <p className="text-[#2d5a3d] font-semibold mb-8 text-sm">{svc.tagline}</p>

                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-5">What it does</p>
                <ul className="space-y-4 mb-10">
                  {svc.whatItDoes.map((point, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="mt-1 w-4 h-4 rounded-full bg-[#2d5a3d] flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-stone-600 leading-relaxed text-sm">{point}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-700 text-white font-semibold px-7 py-3 rounded-md transition-colors text-sm tracking-wide"
                >
                  Get started
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="flex flex-col gap-5">
                <div className="bg-white rounded-xl border border-stone-100 p-7">
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">Who it&rsquo;s for</p>
                  <p className="text-stone-600 leading-relaxed text-sm">{svc.whoItsFor}</p>
                </div>
                <div className="bg-[#f0f4f1] rounded-xl p-7 border border-[#d8e8dc]">
                  <p className="text-xs font-bold text-[#2d5a3d] uppercase tracking-widest mb-3">Example use case</p>
                  <p className="text-stone-600 leading-relaxed text-sm">{svc.useCase}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#2d5a3d] py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Not sure which service you need?
          </h2>
          <p className="text-[#a8c8b3] text-base mb-10 max-w-xl mx-auto font-light">
            Book a free discovery call. We&rsquo;ll listen to what&rsquo;s eating your time and recommend exactly what to automate first.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-stone-50 text-[#2d5a3d] font-bold px-10 py-3.5 rounded-md transition-colors text-sm tracking-wide"
          >
            Book a Free Call
          </Link>
        </div>
      </section>
    </>
  )
}
