import { Check } from "lucide-react"
import { formatGel } from "./calc"

type SelectableOptionProps = {
  title: string
  price: number
  unit?: string
  hint?: string
  selected: boolean
  onToggle: () => void
}

export default function SelectableOption({
  title,
  price,
  unit,
  hint,
  selected,
  onToggle,
}: SelectableOptionProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`flex w-full cursor-pointer items-start gap-3 rounded-2xl border p-4 text-left transition ${
        selected
          ? "border-[#1677FF] bg-[#1677FF]/08 shadow-md shadow-[#1677FF]/10"
          : "border-slate-200 bg-white/80 hover:border-[#1677FF]/40"
      }`}
    >
      <span
        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
          selected
            ? "border-[#1677FF] bg-[#1677FF] text-white"
            : "border-slate-300 bg-white text-transparent"
        }`}
      >
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold text-[#111827]">{title}</span>
        {hint && <span className="mt-0.5 block text-xs text-slate-400">{hint}</span>}
        <span className="mt-1 block text-sm font-semibold text-[#1677FF]">
          {formatGel(price)}
          {unit && <span className="ml-1 text-[11px] font-medium text-slate-400">{unit}</span>}
        </span>
      </span>
    </button>
  )
}
