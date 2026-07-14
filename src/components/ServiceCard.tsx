import Link from 'next/link'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href?: string
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 border border-stone-100 hover:border-stone-200 hover:shadow-sm transition-all duration-200 flex flex-col">
      <div className="w-10 h-10 rounded-lg bg-[#f0f4f1] flex items-center justify-center mb-6 text-[#2d5a3d]">
        {icon}
      </div>
      <h3 className="text-lg font-700 text-stone-900 mb-3 font-bold">{title}</h3>
      <p className="text-stone-500 leading-relaxed flex-1 text-sm">{description}</p>
      {href && (
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-1 text-[#2d5a3d] hover:text-[#1e3d2a] font-semibold text-sm transition-colors"
        >
          Learn more
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  )
}
