import { motion } from "framer-motion"
import { Users } from "lucide-react"
import { formatGel, type BudgetBreakdown } from "./calc"

type BudgetCalculatorProps = {
  breakdown: BudgetBreakdown
  travelers: number
  onTravelersChange: (n: number) => void
}

export default function BudgetCalculator({
  breakdown,
  travelers,
  onTravelersChange,
}: BudgetCalculatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-white/60 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur-xl sm:p-6"
    >
      <p className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8]">
        ბიუჯეტი
      </p>

      <label className="mt-4 block max-w-xs">
        <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <Users className="h-3.5 w-3.5 text-[#1677FF]" />
          მოგზაურების რაოდენობა
        </span>
        <input
          type="number"
          min={1}
          max={12}
          value={travelers}
          onChange={(e) => onTravelersChange(Math.max(1, Math.min(12, Number(e.target.value) || 1)))}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#1677FF] focus:ring-2 focus:ring-[#1677FF]/15"
        />
      </label>

      <div className="mt-5 rounded-2xl border border-[#1677FF]/30 bg-[#1677FF] px-5 py-4 text-white shadow-lg shadow-[#1677FF]/25">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/75">ფასის ჯამი</p>
        <p className="mt-1 text-3xl font-bold tracking-tight">
          {breakdown.selectedCount === 0 ? "0 ₾" : formatGel(breakdown.totalGel)}
        </p>
        <p className="mt-1 text-xs text-white/70">
          {breakdown.selectedCount === 0
            ? "აირჩიე სერვისები ზემოთ"
            : `${breakdown.selectedCount} სერვისი · ${travelers} მოგზაური`}
        </p>
      </div>
    </motion.div>
  )
}
