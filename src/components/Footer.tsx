import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo-primary.png"
                alt="GrowFlow AI"
                width={160}
                height={46}
                className="h-9 w-auto object-contain brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-stone-400">
              AI that works while you sleep. Helping Australian small and medium businesses automate the busy work so they can focus on what matters.
            </p>
            <p className="text-xs mt-5 text-stone-600">ABN: 34 698 898 029</p>
          </div>

          <div>
            <h3 className="text-stone-200 font-semibold text-xs uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services#marketing" className="hover:text-stone-200 transition-colors">Marketing Automation</Link></li>
              <li><Link href="/services#documents" className="hover:text-stone-200 transition-colors">Document Automation</Link></li>
              <li><Link href="/services#support" className="hover:text-stone-200 transition-colors">Customer Support AI</Link></li>
              <li><Link href="/services#workflows" className="hover:text-stone-200 transition-colors">Workflow Integration</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-stone-200 font-semibold text-xs uppercase tracking-widest mb-5">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/#about" className="hover:text-stone-200 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-stone-200 transition-colors">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-stone-200 transition-colors">Book a Free Call</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-600">
          <p>© GrowFlow AI 2025. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-stone-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-stone-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
