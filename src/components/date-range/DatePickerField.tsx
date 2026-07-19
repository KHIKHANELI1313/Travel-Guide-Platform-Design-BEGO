import { useEffect, useId, useMemo, useRef, useState } from "react"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import {
  MAX_SELECTABLE_DAY,
  MIN_SELECTABLE_DAY,
  daysInMonth,
  formatDisplayDate,
  isSelectableDay,
  monthLabel,
  startOfCalendarGrid,
  toISODate,
} from "../../lib/dateRange"

type DatePickerFieldProps = {
  label: string
  value: string
  onChange: (iso: string) => void
  minDate?: string
  error?: string | null
  disabled?: boolean
}

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

export default function DatePickerField({
  label,
  value,
  onChange,
  minDate,
  error,
  disabled = false,
}: DatePickerFieldProps) {
  const id = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  const initial = useMemo(() => {
    if (value) {
      const [y, m] = value.split("-").map(Number)
      return { year: y, month: m }
    }
    return { year: 2026, month: 7 }
  }, [value])

  const [viewYear, setViewYear] = useState(initial.year)
  const [viewMonth, setViewMonth] = useState(initial.month)

  useEffect(() => {
    if (open) {
      setViewYear(initial.year)
      setViewMonth(initial.month)
    }
  }, [open, initial.year, initial.month])

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onDoc)
    return () => document.removeEventListener("mousedown", onDoc)
  }, [])

  const cells = useMemo(() => {
    const total = daysInMonth(viewYear, viewMonth)
    const offset = startOfCalendarGrid(viewYear, viewMonth)
    const items: Array<{ day: number | null; iso: string; disabled: boolean }> = []

    for (let i = 0; i < offset; i++) {
      items.push({ day: null, iso: "", disabled: true })
    }

    for (let day = 1; day <= total; day++) {
      const iso = toISODate({ year: viewYear, month: viewMonth, day })
      const outsideWindow = !isSelectableDay(day)
      const beforeMin = Boolean(minDate && iso < minDate)
      items.push({
        day,
        iso,
        disabled: outsideWindow || beforeMin,
      })
    }

    return items
  }, [viewYear, viewMonth, minDate])

  const shiftMonth = (delta: number) => {
    const d = new Date(Date.UTC(viewYear, viewMonth - 1 + delta, 1))
    setViewYear(d.getUTCFullYear())
    setViewMonth(d.getUTCMonth() + 1)
  }

  return (
    <div ref={rootRef} className="relative min-w-0 flex-1">
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {label}
      </label>
      <button
        id={id}
        type="button"
        disabled={disabled}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={`flex w-full items-center gap-2.5 rounded-xl border px-3.5 py-3 text-left text-sm transition-all duration-200
          bg-white/70 backdrop-blur-xl
          dark:bg-slate-900/55 dark:text-slate-100
          ${error
            ? "border-rose-400 ring-2 ring-rose-400/20"
            : "border-white/40 dark:border-white/10 hover:border-[#1677FF]/50 focus:border-[#1677FF] focus:ring-2 focus:ring-[#1677FF]/20"
          }
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
      >
        <Calendar className="h-4 w-4 shrink-0 text-[#1677FF]" />
        <span className={value ? "text-slate-800 dark:text-slate-100" : "text-slate-400"}>
          {value ? formatDisplayDate(value) : "Select date"}
        </span>
      </button>

      {error && (
        <p className="mt-1.5 text-xs font-medium text-rose-500 animate-[fadeSlide_0.25s_ease]" role="alert">
          {error}
        </p>
      )}

      {open && (
        <div
          role="dialog"
          aria-label={label}
          className="absolute left-0 right-0 top-[calc(100%+0.45rem)] z-50 overflow-hidden rounded-2xl border border-white/30 bg-white/90 p-3 shadow-2xl shadow-black/20 backdrop-blur-2xl animate-[fadeSlide_0.2s_ease] dark:border-white/10 dark:bg-slate-900/95"
        >
          <div className="mb-2 flex items-center justify-between px-1">
            <button
              type="button"
              onClick={() => shiftMonth(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              {monthLabel(viewYear, viewMonth)}
            </p>
            <button
              type="button"
              onClick={() => shiftMonth(1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              aria-label="Next month"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <p className="mb-2 px-1 text-[11px] text-slate-400">
            Only days {MIN_SELECTABLE_DAY}–{MAX_SELECTABLE_DAY} are available
          </p>

          <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-slate-400">
            {WEEKDAYS.map((d) => (
              <span key={d} className="py-1">
                {d}
              </span>
            ))}
          </div>

          <div className="mt-1 grid grid-cols-7 gap-1">
            {cells.map((cell, idx) => {
              if (cell.day == null) {
                return <span key={`e-${idx}`} className="h-10" />
              }
              const selected = value === cell.iso
              return (
                <button
                  key={cell.iso}
                  type="button"
                  disabled={cell.disabled}
                  onClick={() => {
                    onChange(cell.iso)
                    setOpen(false)
                  }}
                  className={`h-10 min-h-10 rounded-lg text-sm font-medium transition-all duration-150
                    ${cell.disabled
                      ? "cursor-not-allowed text-slate-300 line-through decoration-slate-300/80 dark:text-slate-600"
                      : "cursor-pointer text-slate-700 hover:bg-[#1677FF]/12 dark:text-slate-200 dark:hover:bg-[#1677FF]/25"
                    }
                    ${selected ? "bg-[#1677FF] text-white shadow-md shadow-[#1677FF]/35 hover:bg-[#1677FF]" : ""}
                  `}
                >
                  {cell.day}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
