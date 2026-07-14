import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import HowItWorks from '@/components/HowItWorks'
import MetricCard from '@/components/MetricCard'
import FAQAccordion from '@/components/FAQAccordion'

const services = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: 'Marketing Automation',
    description:
      'Set and forget your social, email, and ads. GrowFlow schedules posts, segments your list, and keeps your brand visible — without you touching a thing.',
    href: '/services#marketing',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Document Automation',
    description:
      'Quotes, invoices, contracts — done in seconds. Populate templates from your CRM data and send them with one click. No more copy-pasting between tabs.',
    href: '/services#documents',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: 'Customer Support AI',
    description:
      'Answer enquiries 24/7 without lifting a finger. An AI trained on your business handles common questions, bookings, and follow-ups — even at 2am.',
    href: '/services#support',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: 'Workflow Integration',
    description:
      'Connect your tools. Stop copy-pasting. GrowFlow links your CRM, accounting software, email, and more — so data flows automatically where it needs to go.',
    href: '/services#workflows',
  },
]

const faqItems = [
  {
    question: 'How long does setup take?',
    answer:
      'Most clients are up and running within 2 weeks. We handle everything — discovery, build, testing, and launch — so you only need to give us a couple of hours of your time upfront. After that, your automations run themselves.',
  },
  {
    question: 'Do I need technical knowledge?',
    answer:
      'Not at all. If you can use a smartphone, you can use GrowFlow. We design every solution around your existing skills and provide simple training your whole team can follow. Our goal is to make technology invisible.',
  },
  {
    question: 'Will this work with my existing tools?',
    answer:
      'Yes — GrowFlow integrates with the tools most Australian SMEs already use: Xero, MYOB, Gmail, Google Workspace, Shopify, HubSpot, Mailchimp, Slack, and many more. We map your stack during discovery and build around it.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Pricing depends on the scope of your automation. We offer a free 30-minute discovery call to understand your needs, then provide a fixed-price proposal with no hidden fees or lock-in contracts. Most SME packages start from $1,500 one-time setup.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. All data is encrypted in transit and at rest, hosted on Australian-region servers, and we operate in compliance with the Privacy Act 1988 and the Australian Privacy Principles. We never share or sell your data.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center bg-[#fafaf8] pt-[4.5rem]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="max-w-3xl">
            <p className="text-[#2d5a3d] font-semibold text-sm tracking-widest uppercase mb-8 letter-spacing">
              AI Consulting for Australian Business
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-stone-900 leading-[1.05] mb-8 tracking-tight">
              Still doing<br />
              everything<br />
              <span className="text-[#2d5a3d]">manually?</span>
            </h1>
            <p className="text-lg text-stone-500 leading-relaxed mb-10 max-w-xl font-light">
              GrowFlow puts your marketing, admin, and customer comms on autopilot — so you can focus on the work that actually grows your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#how-it-works"
                className="bg-stone-900 hover:bg-stone-700 text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-center text-sm tracking-wide"
              >
                See How It Works
              </Link>
              <Link
                href="/contact"
                className="border border-stone-300 hover:border-stone-400 text-stone-700 hover:text-stone-900 font-semibold px-8 py-3.5 rounded-md transition-colors text-center text-sm tracking-wide"
              >
                Book a Free Call
              </Link>
            </div>
            <p className="mt-8 text-xs text-stone-400 tracking-wide">
              No lock-in contracts &nbsp;·&nbsp; Setup in 2 weeks &nbsp;·&nbsp; Australian-based support
            </p>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-y border-stone-100 bg-white py-5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest whitespace-nowrap shrink-0">
              Trusted by Australian businesses across
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Building & Construction', 'Travel & Tourism', 'Advertising & Media', 'Accounting & Finance', 'Digital Marketing'].map((name) => (
                <span
                  key={name}
                  className="text-stone-500 text-xs font-medium px-4 py-1.5 rounded-full border border-stone-200 bg-white"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-[#fafaf8]" id="services">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-[#2d5a3d] font-semibold text-xs uppercase tracking-widest mb-4">What we do</p>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mb-4 tracking-tight">
              What we automate for you
            </h2>
            <p className="text-stone-500 max-w-lg leading-relaxed text-sm font-light">
              Four focused services that remove the most common time-wasters in Australian SMEs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((svc) => (
              <ServiceCard key={svc.title} {...svc} />
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#2d5a3d] hover:text-[#1e3d2a] font-semibold text-sm transition-colors"
            >
              Explore all services
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-white" id="how-it-works">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-[#2d5a3d] font-semibold text-xs uppercase tracking-widest mb-4">The process</p>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">How it works</h2>
          </div>
          <HowItWorks />
        </div>
      </section>

      {/* Results */}
      <section className="py-24 lg:py-32 bg-[#fafaf8]" id="about">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-[#2d5a3d] font-semibold text-xs uppercase tracking-widest mb-4">Results</p>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Real results for real businesses
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <MetricCard
              metric="10×"
              label="Faster task completion"
              description="Automations execute in seconds what used to take your team hours each week."
            />
            <MetricCard
              metric="80%"
              label="Less admin overhead"
              description="Your team stops doing busywork and starts focusing on revenue-generating tasks."
            />
            <MetricCard
              metric="2 wks"
              label="Average setup time"
              description="From first discovery call to fully live automations — typically 10–14 business days."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-white" id="faq">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <p className="text-[#2d5a3d] font-semibold text-xs uppercase tracking-widest mb-4">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight mb-5">
                Frequently asked questions
              </h2>
              <p className="text-stone-400 text-sm leading-relaxed">
                Straight answers to the questions we hear most from Australian business owners.
              </p>
            </div>
            <div className="lg:col-span-3">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#2d5a3d] py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Ready to automate your business?
          </h2>
          <p className="text-[#a8c8b3] text-base mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Book a free 30-minute call and we&rsquo;ll show you exactly what we can automate in your business — no commitment required.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-stone-50 text-[#2d5a3d] font-bold px-10 py-3.5 rounded-md transition-colors text-sm tracking-wide"
          >
            Book a Free Call
          </Link>
          <p className="mt-5 text-[#6fa882] text-xs tracking-wide">No lock-in. No tech jargon. Just results.</p>
        </div>
      </section>
    </>
  )
}
