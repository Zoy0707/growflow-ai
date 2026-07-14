'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-stone-100">
      {items.map((item, i) => (
        <div key={i} className="py-6">
          <button
            className="w-full flex items-center justify-between gap-4 text-left group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="text-base font-semibold text-stone-800 group-hover:text-[#2d5a3d] transition-colors">
              {item.question}
            </span>
            <span
              className="shrink-0 w-7 h-7 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 transition-transform duration-200"
              style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          {openIndex === i && (
            <div className="mt-4 pr-10">
              <p className="text-stone-500 leading-relaxed text-sm">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
