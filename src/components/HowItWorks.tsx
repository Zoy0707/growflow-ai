interface Step {
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We spend an hour with you to map your current workflows, find the biggest time-drains, and identify where AI can make the biggest impact — fast.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'Our team sets up AI automations tailored to your exact business. No technical knowledge needed on your side. We handle everything from integrations to testing.',
  },
  {
    number: '03',
    title: 'Launch',
    description:
      'Go live in days, not months. We train your team with simple walkthroughs and stay available for support so you\'re never left on your own.',
  },
]

export default function HowItWorks() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
      {steps.map((step, i) => (
        <div key={i} className="relative">
          <div className="text-6xl font-black text-stone-300 mb-4 leading-none select-none">{step.number}</div>
          <h3 className="text-xl font-bold text-stone-900 mb-3 -mt-2">{step.title}</h3>
          <p className="text-stone-500 leading-relaxed text-sm">{step.description}</p>
        </div>
      ))}
    </div>
  )
}
