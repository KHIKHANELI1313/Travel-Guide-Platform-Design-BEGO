import { motion } from "framer-motion"

type PriceCardProps = {
  label: string
  value: string
  hint?: string
  accent?: boolean
}

export default function PriceCard({ label, value, hint, accent = false }: PriceCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl border p-4 backdrop-blur ${
        accent
          ? "border-[#1677FF]/40 bg-[#1677FF] text-white shadow-lg shadow-[#1677FF]/25"
          : "border-white/60 bg-white/75 text-[#111827] shadow-sm"
      }`}
    >
      <p className={`text-xs font-semibold uppercase tracking-wider ${accent ? "text-white/75" : "text-slate-400"}`}>
        {label}
      </p>
      <p className="mt-1 text-2xl font-bold tracking-tight">{value}</p>
      {hint && (
        <p className={`mt-1 text-xs ${accent ? "text-white/70" : "text-slate-400"}`}>{hint}</p>
      )}
    </motion.div>
  )
}
