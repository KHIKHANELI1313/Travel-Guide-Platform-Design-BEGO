import { motion } from "framer-motion"
import { CalendarRange, Users } from "lucide-react"

type BookingSectionProps = {
  days: number
  travelers: number
  onDaysChange: (n: number) => void
  onTravelersChange: (n: number) => void
}

export default function BookingSection({
  days,
  travelers,
  onDaysChange,
  onTravelersChange,
}: BookingSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-white/60 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur-xl sm:p-6"
    >
      <p className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8]">Trip setup</p>
      <p className="mt-1 text-sm text-slate-500">
        Set days and travelers — then tick only the services you need below
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <CalendarRange className="h-3.5 w-3.5 text-[#1677FF]" />
            Number of days
          </span>
          <input
            type="number"
            min={1}
            max={30}
            value={days}
            onChange={(e) => onDaysChange(Math.max(1, Number(e.target.value) || 1))}
            className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none focus:border-[#1677FF] focus:ring-2 focus:ring-[#1677FF]/15"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <Users className="h-3.5 w-3.5 text-[#1677FF]" />
            Number of people
          </span>
          <input
            type="number"
            min={1}
            max={12}
            value={travelers}
            onChange={(e) => onTravelersChange(Math.max(1, Number(e.target.value) || 1))}
            className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none focus:border-[#1677FF] focus:ring-2 focus:ring-[#1677FF]/15"
          />
        </label>
      </div>
    </motion.div>
  )
}
