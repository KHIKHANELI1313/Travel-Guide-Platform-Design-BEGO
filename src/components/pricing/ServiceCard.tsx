import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { formatGel } from "./calc"

type ServiceCardProps = {
  name: string
  description: string
  price: number
  image: string
  selected?: boolean
  onToggle?: () => void
  unit?: string
}

export default function ServiceCard({
  name,
  description,
  price,
  image,
  selected = false,
  onToggle,
  unit = "GEL",
}: ServiceCardProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -2 }}
      onClick={onToggle}
      className={`flex w-full overflow-hidden rounded-2xl border text-left backdrop-blur transition cursor-pointer ${
        selected
          ? "border-[#1677FF] bg-[#1677FF]/08 shadow-md shadow-[#1677FF]/15"
          : "border-white/60 bg-white/70 shadow-sm hover:border-[#1677FF]/35"
      }`}
    >
      <img src={image} alt="" className="h-28 w-28 shrink-0 object-cover sm:h-32 sm:w-32" />
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 p-3 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-bold text-[#111827] sm:text-base">{name}</p>
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
              selected
                ? "border-[#1677FF] bg-[#1677FF] text-white"
                : "border-slate-200 bg-white text-transparent"
            }`}
          >
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
        </div>
        <p className="line-clamp-2 text-xs text-slate-500">{description}</p>
        <p className="text-sm font-semibold text-[#1677FF]">
          {formatGel(price)}
          <span className="ml-1 text-[11px] font-medium text-slate-400">{unit}</span>
        </p>
      </div>
    </motion.button>
  )
}
