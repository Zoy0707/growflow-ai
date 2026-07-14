'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf8]/95 backdrop-blur-sm border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18" style={{ height: '4.5rem' }}>

          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/logo-primary.png"
              alt="GrowFlow AI"
              width={180}
              height={52}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-stone-500 hover:text-stone-900 font-medium transition-colors text-sm tracking-wide">
              Services
            </Link>
            <Link href="/#about" className="text-stone-500 hover:text-stone-900 font-medium transition-colors text-sm tracking-wide">
              About
            </Link>
            <Link href="/contact" className="text-stone-500 hover:text-stone-900 font-medium transition-colors text-sm tracking-wide">
              Contact
            </Link>
            <Link
              href="/contact"
              className="border border-stone-900 hover:bg-stone-900 hover:text-white text-stone-900 font-semibold px-5 py-2.5 rounded-md transition-colors text-sm"
            >
              Book a Free Call
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-stone-500 hover:text-stone-900"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-5 border-t border-stone-100 flex flex-col gap-5">
            <Link href="/services" className="text-stone-700 font-medium text-sm" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="/#about" className="text-stone-700 font-medium text-sm" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="text-stone-700 font-medium text-sm" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link
              href="/contact"
              className="border border-stone-900 text-stone-900 font-semibold px-5 py-3 rounded-md text-center text-sm"
              onClick={() => setOpen(false)}
            >
              Book a Free Call
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
