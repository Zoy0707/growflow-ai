interface MetricCardProps {
  metric: string
  label: string
  description: string
}

export default function MetricCard({ metric, label, description }: MetricCardProps) {
  return (
    <div className="text-center p-10 rounded-xl bg-white border border-stone-100">
      <div className="text-5xl md:text-6xl font-black text-[#2d5a3d] mb-2 leading-none">{metric}</div>
      <div className="text-base font-bold text-stone-900 mb-3">{label}</div>
      <div className="text-stone-400 text-sm leading-relaxed">{description}</div>
    </div>
  )
}
