import { useCallback, useEffect, useState } from "react"
import {
  Check,
  ChevronDown,
  Clock,
  Compass,
  Loader2,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react"
import DatePickerField from "./DatePickerField"
import { formatDisplayDate, validateDateRange } from "../../lib/dateRange"
import {
  searchTravelRecordsInRange,
  type TravelRecord,
} from "../../data/travelRecords"

type DateRangeSearchProps = {
  countryQuery?: string
  cityQuery?: string
}

type SearchState = "idle" | "loading" | "done"

export default function DateRangeSearch({
  countryQuery = "",
  cityQuery = "",
}: DateRangeSearchProps) {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [touched, setTouched] = useState(false)
  const [searchState, setSearchState] = useState<SearchState>("idle")
  const [results, setResults] = useState<TravelRecord[] | null>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setDark(prefersDark)
  }, [])

  const validation = validateDateRange(startDate, endDate)
  const showErrors = touched

  const runSearch = useCallback(async () => {
    setTouched(true)
    const next = validateDateRange(startDate, endDate)
    if (!next.isValid) {
      setResults(null)
      setSearchState("idle")
      setExpandedId(null)
      return
    }

    setSearchState("loading")
    setResults(null)
    setExpandedId(null)

    await new Promise((r) => window.setTimeout(r, 450))

    const found = searchTravelRecordsInRange(startDate, endDate, countryQuery, cityQuery)
    setResults(found)
    setSearchState("done")
    if (found.length === 1) setExpandedId(found[0].id)
  }, [startDate, endDate, countryQuery, cityQuery])

  const clearSearch = useCallback(() => {
    setStartDate("")
    setEndDate("")
    setTouched(false)
    setResults(null)
    setSearchState("idle")
    setExpandedId(null)
  }, [])

  const handleStartChange = (iso: string) => {
    setStartDate(iso)
    if (endDate && endDate < iso) setEndDate("")
  }

  return (
    <div className={dark ? "dark" : undefined}>
      <div className="rounded-2xl border border-white/50 bg-white/65 p-5 shadow-xl shadow-black/10 backdrop-blur-2xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/40 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Travel dates
            </p>
            <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">
              {cityQuery
                ? `Dates for ${cityQuery}${countryQuery ? `, ${countryQuery}` : ""}`
                : "Choose dates, then Search — packages open in this panel"}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setDark((v) => !v)}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-white/40 bg-white/50 px-3 py-1.5 text-xs font-medium text-slate-600 backdrop-blur transition hover:bg-white/80 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-200"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
            {dark ? "Light" : "Dark"}
          </button>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
          <DatePickerField
            label="Start Date"
            value={startDate}
            onChange={handleStartChange}
            error={showErrors ? validation.startError : null}
          />
          <DatePickerField
            label="End Date"
            value={endDate}
            onChange={setEndDate}
            minDate={startDate || undefined}
            error={showErrors ? validation.endError : null}
          />

          <div className="flex shrink-0 flex-col gap-2 lg:pt-6">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={runSearch}
                disabled={searchState === "loading"}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#1677FF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1677FF]/30 transition hover:bg-blue-600 disabled:cursor-wait disabled:opacity-70"
              >
                {searchState === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Search className="h-4 w-4" />
                )}
                Search
              </button>
              <button
                type="button"
                onClick={clearSearch}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-white/50 px-4 py-3 text-sm font-semibold text-slate-600 backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <X className="h-4 w-4" />
                Clear Search
              </button>
            </div>
          </div>
        </div>

        {showErrors && validation.rangeError && (
          <p
            className="mt-3 animate-[fadeSlide_0.25s_ease] rounded-xl border border-rose-300/50 bg-rose-50/80 px-3 py-2 text-sm font-medium text-rose-600 backdrop-blur dark:border-rose-500/30 dark:bg-rose-950/40 dark:text-rose-300"
            role="alert"
          >
            {validation.rangeError}
          </p>
        )}

        {searchState === "loading" && (
          <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-200/80 bg-white/40 py-12 dark:border-white/10 dark:bg-slate-800/40">
            <Loader2 className="h-8 w-8 animate-spin text-[#1677FF]" />
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Searching travel packages…
            </p>
          </div>
        )}

        {searchState === "done" && results && results.length === 0 && (
          <div className="mt-6 flex animate-[fadeSlide_0.3s_ease] flex-col items-center justify-center gap-2 rounded-2xl border border-white/40 bg-gradient-to-b from-white/70 to-slate-50/60 px-6 py-14 text-center backdrop-blur dark:border-white/10 dark:from-slate-800/70 dark:to-slate-900/60">
            <div className="mb-1 flex h-14 w-14 items-center justify-center rounded-full bg-[#1677FF]/10">
              <Compass className="h-7 w-7 text-[#1677FF]" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">No Results Found</h3>
            <p className="max-w-sm text-sm text-slate-500 dark:text-slate-400">
              No trips fall between {formatDisplayDate(startDate)} and {formatDisplayDate(endDate)}
              {countryQuery.trim() ? ` for “${countryQuery.trim()}”` : ""}. Try widening your dates.
            </p>
          </div>
        )}

        {searchState === "done" && results && results.length > 0 && (
          <div className="mt-6 space-y-3 animate-[fadeSlide_0.3s_ease]">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {results.length} package{results.length === 1 ? "" : "s"} ·{" "}
              {formatDisplayDate(startDate)} – {formatDisplayDate(endDate)}
            </p>
            <ul className="space-y-3">
              {results.map((record) => {
                const open = expandedId === record.id
                return (
                  <li
                    key={record.id}
                    className="overflow-hidden rounded-2xl border border-white/40 bg-white/70 shadow-md shadow-black/5 backdrop-blur transition dark:border-white/10 dark:bg-slate-800/55"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedId(open ? null : record.id)}
                      aria-expanded={open}
                      className="flex w-full cursor-pointer gap-3 p-3 text-left transition hover:bg-white/50 dark:hover:bg-slate-800/80 sm:gap-4 sm:p-4"
                    >
                      <img
                        src={record.image}
                        alt=""
                        className="h-20 w-20 shrink-0 rounded-xl object-cover sm:h-28 sm:w-28"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <div className="mb-1 flex flex-wrap items-center gap-2">
                              <span className="text-lg leading-none">{record.flag}</span>
                              <span className="text-xs font-semibold uppercase tracking-wide text-[#1677FF]">
                                {record.type}
                              </span>
                            </div>
                            <p className="truncate text-sm font-bold text-slate-800 dark:text-slate-100 sm:text-base">
                              {record.title}
                            </p>
                            <p className="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400">
                              {record.city}, {record.country} · {formatDisplayDate(record.date)}
                            </p>
                          </div>
                          <ChevronDown
                            className={`mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                              open ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        <div className="mt-2 flex flex-wrap items-center gap-3">
                          <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
                            {record.priceFrom}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                            <Clock className="h-3.5 w-3.5" />
                            {record.duration}
                          </span>
                          <span className="text-xs font-medium text-[#1677FF]">
                            {open ? "Hide what’s included" : "What’s included"}
                          </span>
                        </div>
                      </div>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-slate-100 px-4 pb-4 pt-3 dark:border-white/10 sm:px-5">
                          <p className="mb-2 text-sm text-slate-600 dark:text-slate-300">
                            {record.description}
                          </p>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Included in this price
                          </p>
                          <ul className="space-y-2">
                            {record.includes.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200"
                              >
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                                  <Check className="h-3 w-3" strokeWidth={3} />
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="mt-3 text-[11px] text-slate-400 dark:text-slate-500">
                            Price shown is per person for the listed travel day. Flights & hotel are not included unless listed above.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
