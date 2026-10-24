import { useEffect, useState } from "react"
import { CURRENCY_BY_ISO2, currencyCodeForIso2, formatExchangeRate } from "@/data/currencyByCountry"

type RateState =
  | { status: "loading"; code: string | null }
  | { status: "ready"; code: string; rate: number; label: string }
  | { status: "error"; code: string | null; message: string }

const rateCache = new Map<string, number>()
let usdRatesPromise: Promise<Record<string, number>> | null = null

async function fetchUsdRatesForDate(date: string): Promise<Record<string, number>> {
  const res = await fetch(`https://${date}.currency-api.pages.dev/v1/currencies/usd.json`)
  if (!res.ok) throw new Error("Rate fetch failed")
  const data = (await res.json()) as { usd?: Record<string, number> }
  const rates = data.usd
  if (!rates) throw new Error("Invalid rate payload")
  return rates
}

async function fetchUsdRates(): Promise<Record<string, number>> {
  if (!usdRatesPromise) {
    usdRatesPromise = fetchUsdRatesForDate("latest").catch((err) => {
      usdRatesPromise = null
      throw err
    })
  }
  return usdRatesPromise
}

export function useUsdExchangeRate(iso2: string): RateState {
  const code = currencyCodeForIso2(iso2)
  const [state, setState] = useState<RateState>({ status: "loading", code })

  useEffect(() => {
    let cancelled = false
    const nextCode = currencyCodeForIso2(iso2)

    if (!nextCode) {
      setState({ status: "error", code: null, message: "Currency unknown" })
      return
    }

    if (nextCode === "USD") {
      setState({
        status: "ready",
        code: "USD",
        rate: 1,
        label: formatExchangeRate(1, "USD"),
      })
      return
    }

    const cached = rateCache.get(nextCode.toLowerCase())
    if (cached != null) {
      setState({
        status: "ready",
        code: nextCode,
        rate: cached,
        label: formatExchangeRate(cached, nextCode),
      })
      return
    }

    setState({ status: "loading", code: nextCode })

    fetchUsdRates()
      .then((rates) => {
        if (cancelled) return
        const rate = rates[nextCode.toLowerCase()]
        if (rate == null || !Number.isFinite(rate)) {
          setState({ status: "error", code: nextCode, message: "Rate unavailable" })
          return
        }
        rateCache.set(nextCode.toLowerCase(), rate)
        setState({
          status: "ready",
          code: nextCode,
          rate,
          label: formatExchangeRate(rate, nextCode),
        })
      })
      .catch(() => {
        if (!cancelled) {
          setState({ status: "error", code: nextCode, message: "Rate unavailable" })
        }
      })

    return () => {
      cancelled = true
    }
  }, [iso2])

  return state
}

export type CurrencyTrend = {
  code: string
  rate: number
  changePercent: number
}

type TrendsState =
  | { status: "loading" }
  | { status: "ready"; asOf: string; trends: CurrencyTrend[] }
  | { status: "error"; message: string }

const dateRatesCache = new Map<string, Promise<Record<string, number>>>()

function cachedRatesForDate(date: string): Promise<Record<string, number>> {
  let promise = dateRatesCache.get(date)
  if (!promise) {
    promise = fetchUsdRatesForDate(date).catch((err) => {
      dateRatesCache.delete(date)
      throw err
    })
    dateRatesCache.set(date, promise)
  }
  return promise
}

function isoDateDaysAgo(days: number): string {
  const d = new Date()
  d.setUTCDate(d.getUTCDate() - days)
  return d.toISOString().slice(0, 10)
}

/** Currencies that strengthened or weakened against the USD over the trailing window. */
export function useUsdRateTrends(daysBack = 7): TrendsState {
  const [state, setState] = useState<TrendsState>({ status: "loading" })

  useEffect(() => {
    let cancelled = false
    setState({ status: "loading" })
    const pastDate = isoDateDaysAgo(daysBack)

    Promise.all([cachedRatesForDate("latest"), cachedRatesForDate(pastDate)])
      .then(([latest, past]) => {
        if (cancelled) return
        const codes = new Set(Object.values(CURRENCY_BY_ISO2))
        const trends: CurrencyTrend[] = []
        codes.forEach((rawCode) => {
          if (rawCode === "USD") return
          const code = rawCode.toLowerCase()
          const latestRate = latest[code]
          const pastRate = past[code]
          if (latestRate == null || pastRate == null || pastRate === 0) return
          // rate = units of X per 1 USD, so a falling rate means X strengthened
          const changePercent = ((pastRate - latestRate) / latestRate) * 100
          trends.push({ code: rawCode, rate: latestRate, changePercent })
        })
        trends.sort((a, b) => b.changePercent - a.changePercent)
        setState({ status: "ready", asOf: pastDate, trends })
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error", message: "Trends unavailable" })
      })

    return () => {
      cancelled = true
    }
  }, [daysBack])

  return state
}
