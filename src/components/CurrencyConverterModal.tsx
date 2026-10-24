import { useMemo, useState } from "react"
import { X, ArrowRightLeft, TrendingUp, TrendingDown } from "lucide-react"
import { COUNTRIES } from "@/data/countries"
import { useUsdExchangeRate, useUsdRateTrends } from "@/components/CountryExchangeRate"

type CurrencyConverterModalProps = {
  isOpen: boolean
  onClose: () => void
}

const SORTED_COUNTRIES = [...COUNTRIES].sort((a, b) => a.name.localeCompare(b.name))

const COUNTRY_BY_CURRENCY: Record<string, { flag: string; name: string }> = {}
for (const c of COUNTRIES) {
  if (!COUNTRY_BY_CURRENCY[c.currency]) {
    COUNTRY_BY_CURRENCY[c.currency] = { flag: c.flag, name: c.name }
  }
}

function TrendRow({ trend }: { trend: { code: string; changePercent: number } }) {
  const info = COUNTRY_BY_CURRENCY[trend.code]
  const up = trend.changePercent >= 0
  return (
    <div className="flex items-center justify-between py-1.5 text-sm">
      <div className="flex items-center gap-2 min-w-0">
        <span className="shrink-0">{info?.flag ?? "🏳️"}</span>
        <span className="truncate text-[#111827]">{info?.name ?? trend.code}</span>
        <span className="shrink-0 text-xs text-gray-400">{trend.code}</span>
      </div>
      <div className={`flex items-center gap-1 shrink-0 font-semibold ${up ? "text-emerald-600" : "text-rose-500"}`}>
        {up ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
        {up ? "+" : ""}
        {trend.changePercent.toFixed(2)}%
      </div>
    </div>
  )
}

function CurrencySelect({
  value,
  onChange,
  label,
}: {
  value: string
  onChange: (iso2: string) => void
  label: string
}) {
  const country = SORTED_COUNTRIES.find((c) => c.iso2 === value)
  return (
    <div className="flex-1 min-w-0">
      <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-gray-400">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 pr-9 text-sm font-medium text-[#111827] outline-none transition-colors focus:border-[#1677FF] focus:ring-2 focus:ring-[#1677FF]/15"
        >
          {SORTED_COUNTRIES.map((c) => (
            <option key={c.iso2} value={c.iso2}>
              {c.flag} {c.name} · {c.currency}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">▾</span>
      </div>
      {country && (
        <p className="mt-1 text-[11px] text-gray-400">
          {country.flag} {country.currency}
        </p>
      )}
    </div>
  )
}

export default function CurrencyConverterModal({ isOpen, onClose }: CurrencyConverterModalProps) {
  const [fromIso2, setFromIso2] = useState("ge")
  const [toIso2, setToIso2] = useState("tr")
  const [amount, setAmount] = useState("100")

  const fromRate = useUsdExchangeRate(fromIso2)
  const toRate = useUsdExchangeRate(toIso2)
  const trends = useUsdRateTrends(7)
  const parsedAmount = Number(amount)
  const hasValidAmount = Number.isFinite(parsedAmount) && amount.trim() !== ""

  const crossRate = useMemo(() => {
    if (fromRate.status !== "ready" || toRate.status !== "ready") return null
    return toRate.rate / fromRate.rate
  }, [fromRate, toRate])

  const converted = useMemo(() => {
    if (crossRate == null || !hasValidAmount) return null
    return parsedAmount * crossRate
  }, [crossRate, parsedAmount, hasValidAmount])

  const isLoading = fromRate.status === "loading" || toRate.status === "loading"
  const errorMessage =
    fromRate.status === "error" ? fromRate.message : toRate.status === "error" ? toRate.message : null

  const swap = () => {
    setFromIso2(toIso2)
    setToIso2(fromIso2)
  }

  const gainers = trends.status === "ready" ? trends.trends.slice(0, 5) : []
  const decliners = trends.status === "ready" ? [...trends.trends].slice(-5).reverse() : []

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-label="Currency converter"
        className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-white/30 bg-white shadow-2xl shadow-black/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between rounded-t-2xl bg-gradient-to-br from-[#1677FF] to-purple-600 px-6 py-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur">
              <ArrowRightLeft className="h-4 w-4" />
            </div>
            <h2 className="text-lg font-bold text-white">Currency Converter</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-6">
          <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            Amount
          </label>
          <input
            type="number"
            min="0"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mb-4 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-lg font-semibold text-[#111827] outline-none transition-colors focus:border-[#1677FF] focus:ring-2 focus:ring-[#1677FF]/15"
            placeholder="100"
          />

          <div className="flex items-end gap-2">
            <CurrencySelect value={fromIso2} onChange={setFromIso2} label="From" />
            <button
              onClick={swap}
              aria-label="Swap currencies"
              className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1677FF] transition-colors hover:bg-[#1677FF] hover:text-white cursor-pointer"
            >
              <ArrowRightLeft className="h-4 w-4" />
            </button>
            <CurrencySelect value={toIso2} onChange={setToIso2} label="To" />
          </div>

          <div className="mt-5 rounded-xl border border-gray-100 bg-[#F5F7FA] p-5 text-center">
            {isLoading && <p className="text-sm text-gray-400">Loading exchange rate…</p>}
            {!isLoading && errorMessage && <p className="text-sm text-rose-500">{errorMessage}</p>}
            {!isLoading && !errorMessage && fromRate.status === "ready" && toRate.status === "ready" && (
              <>
                <p className="text-3xl font-extrabold text-[#111827]">
                  {hasValidAmount
                    ? `${converted!.toLocaleString(undefined, { maximumFractionDigits: 2 })} ${toRate.code}`
                    : "—"}
                </p>
                <p className="mt-1.5 text-xs text-gray-400">
                  1 {fromRate.code} = {crossRate!.toLocaleString(undefined, { maximumFractionDigits: 4 })} {toRate.code}
                </p>
              </>
            )}
          </div>

          <div className="mt-6 border-t border-gray-100 pt-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              7-Day Trend vs USD
            </p>
            {trends.status === "loading" && (
              <p className="text-sm text-gray-400">Loading global rates…</p>
            )}
            {trends.status === "error" && (
              <p className="text-sm text-rose-500">Trend data unavailable</p>
            )}
            {trends.status === "ready" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <TrendingUp className="h-3.5 w-3.5" /> Strengthened
                  </p>
                  <div className="divide-y divide-gray-50">
                    {gainers.map((t) => (
                      <TrendRow key={t.code} trend={t} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-rose-500">
                    <TrendingDown className="h-3.5 w-3.5" /> Weakened
                  </p>
                  <div className="divide-y divide-gray-50">
                    {decliners.map((t) => (
                      <TrendRow key={t.code} trend={t} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
