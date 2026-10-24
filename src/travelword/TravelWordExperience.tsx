import { useMemo, useRef, useState, type ReactNode } from "react"
import { AnimatePresence, MotionConfig, motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight, ArrowUpRight, BedDouble, Building2, Bus, Calendar, Car, CarTaxiFront, Compass, Cross,
  Info, Landmark, LifeBuoy, Luggage, MapPin, Mountain, PartyPopper, Plane, Search, ShieldCheck,
  Smartphone, Snowflake, Users, Utensils, UtensilsCrossed, Waves, Languages, ShoppingBag, Wallet,
} from "lucide-react"
import GeorgiaMap from "./GeorgiaMap"
import AnimatedNumber from "./AnimatedNumber"
import {
  CATEGORIES, DESTINATIONS, EXPERIENCES, HERO_IMAGE, METRICS, PANORAMA_IMAGE, PRICED_CITIES, PRICES,
  priceFor, type CategoryId, type MetricId, type Price,
} from "./data"
import "./travelword.css"

const EASE = [0.22, 1, 0.36, 1] as const

const CATEGORY_ICON: Record<CategoryId, typeof BedDouble> = {
  hotels: BedDouble, guesthouses: Building2, restaurants: Utensils, cuisine: UtensilsCrossed, airport: Plane,
  taxi: CarTaxiFront, intercity: Bus, "car-rental": Car, tours: Compass, museums: Landmark, hiking: Mountain,
  beaches: Waves, ski: Snowflake, sim: Smartphone, pharmacy: Cross, parking: Luggage, guides: Languages,
  everyday: ShoppingBag, events: PartyPopper, emergency: LifeBuoy,
}

const METRIC_ICON: Partial<Record<MetricId, typeof BedDouble>> = {
  "hotel-budget": BedDouble, "hotel-standard": BedDouble, "hotel-luxury": BedDouble,
  "meal-breakfast": Utensils, "meal-lunch": Utensils, "meal-dinner": Utensils,
  "airport-transfer": Plane, taxi: CarTaxiFront, "car-rental": Car, "private-driver": Car, guide: Languages, activity: Compass,
}

const nightsBetween = (from: string, to: string) => {
  if (!from || !to) return 0
  const n = Math.round((new Date(to).getTime() - new Date(from).getTime()) / 86_400_000)
  return n > 0 ? n : 0
}

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })

// ——————————————————————————————————————————————————
// SHARED PIECES
// ——————————————————————————————————————————————————

function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

function Heading({ eyebrow, title, id }: { eyebrow: string; title: string; id?: string }) {
  return (
    <Reveal className="mb-8 sm:mb-10">
      <p className="text-[#1769FF] text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] mb-3">{eyebrow}</p>
      <h2 id={id} className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101B35] leading-[1.05]">{title}</h2>
    </Reveal>
  )
}

function StatusBadge({ price }: { price?: Price }) {
  if (!price) return <span className="tw-badge tw-badge--none">Price not verified</span>
  return price.status === "verified"
    ? <span className="tw-badge tw-badge--ok"><ShieldCheck className="w-3 h-3" />Verified</span>
    : <span className="tw-badge tw-badge--est"><Info className="w-3 h-3" />Estimate · not verified</span>
}

function PriceMeta({ price }: { price: Price }) {
  return (
    <p className="text-[11px] leading-relaxed text-[#64748B]">
      {price.currency} · {METRICS[price.metric].unit} · Source: {price.source} · Updated: {price.updated ?? "not recorded"}
    </p>
  )
}

const selectCls = "w-full bg-transparent text-sm font-medium text-[#101B35] outline-none cursor-pointer"

function Field({ icon: Icon, label, children }: { icon: typeof BedDouble; label: string; children: ReactNode }) {
  return (
    <label className="tw-field">
      <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">
        <Icon className="w-3.5 h-3.5 text-[#1769FF]" />{label}
      </span>
      {children}
    </label>
  )
}

// ——————————————————————————————————————————————————
// MAIN
// ——————————————————————————————————————————————————

type Filters = {
  destination: string // destination id or ""
  category: CategoryId | ""
  from: string
  to: string
  guests: number
  budget: number // max GEL total, 0 = any
}

const BUDGET_STEPS = [0, 50, 100, 200, 400, 800, 1500]

export default function TravelWordExperience() {
  const [draft, setDraft] = useState<Filters>({ destination: "", category: "", from: "", to: "", guests: 2, budget: 0 })
  const [filters, setFilters] = useState<Filters>(draft)
  const [compareCities, setCompareCities] = useState<string[]>(PRICED_CITIES.slice(0, 4))
  const [compareMetric, setCompareMetric] = useState<MetricId>("hotel-standard")
  const [mapDestination, setMapDestination] = useState<string | null>(null)

  const runSearch = (next: Partial<Filters> = {}) => {
    const f = { ...draft, ...next }
    setDraft(f)
    setFilters(f)
    requestAnimationFrame(() => scrollTo("tw-results"))
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="tw" data-no-reveal>
        <Hero draft={draft} setDraft={setDraft} onSearch={() => runSearch()} />
        <Results filters={filters} onClear={() => runSearch({ destination: "", category: "", budget: 0 })} />
        <Destinations onPick={id => runSearch({ destination: id })} />
        <Panorama />
        <Categories onPick={id => runSearch({ category: id })} />
        <Compare
          cities={compareCities} setCities={setCompareCities}
          metric={compareMetric} setMetric={setCompareMetric}
        />
        <MapSection
          active={mapDestination} setActive={setMapDestination}
          onSelectCity={city => {
            setCompareCities(c => (c.includes(city) ? c : [...c, city]))
            scrollTo("tw-compare")
          }}
        />
        <Experiences />
        <Budget />
      </div>
    </MotionConfig>
  )
}

// ——————————————————————————————————————————————————
// HERO + SEARCH
// ——————————————————————————————————————————————————

function Hero({ draft, setDraft, onSearch }: { draft: Filters; setDraft: (f: Filters) => void; onSearch: () => void }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18])
  const set = <K extends keyof Filters>(k: K, v: Filters[K]) => setDraft({ ...draft, [k]: v })
  const nights = nightsBetween(draft.from, draft.to)

  return (
    <section ref={ref} className="relative">
      <div className="relative h-[86svh] min-h-[560px] max-h-[920px] overflow-hidden bg-[#101B35]">
        <motion.img
          src={HERO_IMAGE.src} alt={HERO_IMAGE.alt} fetchPriority="high"
          style={{ y, scale }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, ease: EASE }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101B35]/55 via-[#101B35]/10 to-[#101B35]/75" />
        <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-end pb-40 sm:pb-36">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="text-white/80 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4"
          >TravelWord · Georgia</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45, ease: EASE }}
            className="text-white font-extrabold tracking-tight leading-[0.95] text-[2.75rem] sm:text-7xl lg:text-8xl max-w-5xl"
          >Discover Georgia,<br />Your Way.</motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
            className="text-white/85 text-lg sm:text-2xl font-light mt-5 tracking-wide"
          >Stay. Explore. Experience.</motion.p>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="absolute bottom-36 right-4 sm:right-10 hidden md:block text-[11px] text-white/60"
          >Mount Kazbek · Wikimedia Commons</motion.p>
        </div>
      </div>

      {/* floating search panel */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 -mt-28">
        <motion.form
          role="search"
          onSubmit={e => { e.preventDefault(); onSearch() }}
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
          className="bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(16,27,53,0.35)] p-3 sm:p-4 grid grid-cols-2 lg:grid-cols-[1.3fr_1.2fr_1fr_1fr_0.7fr_1fr_auto] gap-2"
        >
          <div className="col-span-2 lg:col-span-1">
            <Field icon={MapPin} label="Destination">
              <select value={draft.destination} onChange={e => set("destination", e.target.value)} className={selectCls}>
                <option value="">All of Georgia</option>
                {DESTINATIONS.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
              </select>
            </Field>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Field icon={Compass} label="Service">
              <select value={draft.category} onChange={e => set("category", e.target.value as CategoryId | "")} className={selectCls}>
                <option value="">All services</option>
                {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </Field>
          </div>
          <Field icon={Calendar} label="Check-in">
            <input type="date" value={draft.from} onChange={e => set("from", e.target.value)} className={selectCls} />
          </Field>
          <Field icon={Calendar} label={nights ? `Check-out · ${nights}n` : "Check-out"}>
            <input type="date" value={draft.to} min={draft.from || undefined} onChange={e => set("to", e.target.value)} className={selectCls} />
          </Field>
          <Field icon={Users} label="Guests">
            <select value={draft.guests} onChange={e => set("guests", Number(e.target.value))} className={selectCls}>
              {Array.from({ length: 12 }, (_, i) => i + 1).map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </Field>
          <Field icon={Wallet} label="Budget (total)">
            <select value={draft.budget} onChange={e => set("budget", Number(e.target.value))} className={selectCls}>
              {BUDGET_STEPS.map(b => <option key={b} value={b}>{b ? `Up to ₾${b}` : "Any"}</option>)}
            </select>
          </Field>
          <motion.button
            type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="col-span-2 lg:col-span-1 min-h-14 rounded-2xl bg-[#1769FF] hover:bg-[#0F57E0] text-white font-semibold px-7 flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <Search className="w-5 h-5" />Search
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

// ——————————————————————————————————————————————————
// SEARCH RESULTS
// ——————————————————————————————————————————————————

function totalFor(p: Price, nights: number, guests: number) {
  const m = METRICS[p.metric]
  if (p.metric.startsWith("hotel")) return nights ? { amount: p.amount * nights, note: `${nights} night${nights > 1 ? "s" : ""}` } : null
  if (m.perPerson && guests > 1) return { amount: p.amount * guests, note: `${guests} guests` }
  return null
}

function Results({ filters, onClear }: { filters: Filters; onClear: () => void }) {
  const [showAll, setShowAll] = useState(false)
  const nights = nightsBetween(filters.from, filters.to)
  const category = CATEGORIES.find(c => c.id === filters.category)
  const destination = DESTINATIONS.find(d => d.id === filters.destination)

  const results = useMemo(() => PRICES.filter(p => {
    if (filters.destination && p.destinationId !== filters.destination) return false
    if (category && !category.metrics.includes(p.metric)) return false
    if (filters.budget) {
      const total = totalFor(p, nights, filters.guests)?.amount ?? p.amount
      if (total > filters.budget) return false
    }
    return true
  }).sort((a, b) => a.amount - b.amount), [filters, category, nights])

  const visible = showAll ? results : results.slice(0, 6)
  const label = [destination?.name ?? "All of Georgia", category?.name ?? "All services"].join(" · ")

  return (
    <section id="tw-results" className="tw-section scroll-mt-24 pt-20 sm:pt-24">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-[#1769FF] text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] mb-3">Results</p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#101B35]">{label}</h2>
          <p className="text-sm text-[#64748B] mt-2">
            <AnimatedNumber value={results.length} /> priced items · {filters.guests} guest{filters.guests > 1 ? "s" : ""}{nights ? ` · ${nights} nights` : ""}{filters.budget ? ` · up to ₾${filters.budget}` : ""}
          </p>
        </div>
        {(filters.destination || filters.category || filters.budget > 0) && (
          <button onClick={onClear} className="text-sm font-semibold text-[#1769FF] hover:underline cursor-pointer">Clear filters</button>
        )}
      </div>

      <div className="tw-note mb-6">
        <Info className="w-4 h-4 shrink-0 text-[#1769FF]" />
        No provider has verified prices on TravelWord yet. Figures below are internal estimates, shown so you can compare — confirm with the provider before booking.
      </div>

      {results.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-dashed border-[#CBD5E1] bg-white p-10 text-center">
          <p className="text-lg font-bold text-[#101B35]">No price data for this search yet</p>
          <p className="text-sm text-[#64748B] mt-2 max-w-md mx-auto">
            {category && category.metrics.length === 0
              ? `${category.name} listings are not connected yet.`
              : "Try another destination, service or budget."} Catalog estimates currently cover {PRICED_CITIES.join(", ")}.
          </p>
          <span className="tw-badge tw-badge--none mt-4">Price not verified</span>
        </motion.div>
      ) : (
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => {
              const Icon = METRIC_ICON[p.metric] ?? Compass
              const total = totalFor(p, nights, filters.guests)
              return (
                <motion.article
                  layout key={p.id}
                  initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.06, ease: EASE }}
                  className="tw-price-card"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="tw-icon"><Icon className="w-4 h-4" /></span>
                      <div className="min-w-0">
                        <p className="font-semibold text-[#101B35] truncate">{p.name}</p>
                        <p className="text-xs text-[#64748B] flex items-center gap-1"><MapPin className="w-3 h-3" />{p.city}</p>
                      </div>
                    </div>
                    <StatusBadge price={p} />
                  </div>
                  <div className="mt-6 flex items-baseline gap-2">
                    <AnimatedNumber value={p.amount} prefix="₾" className="text-4xl font-extrabold tracking-tight text-[#101B35]" />
                    <span className="text-sm text-[#64748B]">{METRICS[p.metric].unit}</span>
                  </div>
                  {total && (
                    <p className="text-sm text-[#101B35] mt-1">
                      ≈ <AnimatedNumber value={total.amount} prefix="₾" className="font-semibold" /> for {total.note}
                    </p>
                  )}
                  <p className="text-[11px] text-[#64748B] mt-1">Taxes and extra fees: not specified</p>
                  <div className="mt-5 pt-4 border-t border-[#EEF2F7]"><PriceMeta price={p} /></div>
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(`${p.name} ${p.city} Georgia price`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="tw-cta mt-4"
                  >Check with providers <ArrowUpRight className="w-4 h-4" /></a>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>
      )}

      {results.length > 6 && (
        <div className="text-center mt-8">
          <button onClick={() => setShowAll(s => !s)} className="tw-ghost-btn">
            {showAll ? "Show fewer" : `Show all ${results.length}`}
          </button>
        </div>
      )}
    </section>
  )
}

// ——————————————————————————————————————————————————
// DESTINATIONS
// ——————————————————————————————————————————————————

function Destinations({ onPick }: { onPick: (id: string) => void }) {
  return (
    <section className="tw-section">
      <Heading eyebrow="Destinations" title="Thirteen regions. One country." />
      <div className="tw-dest-grid">
        {DESTINATIONS.map((d, i) => {
          const from = PRICES.filter(p => p.destinationId === d.id && p.metric === "hotel-budget").sort((a, b) => a.amount - b.amount)[0]
          return (
            <motion.button
              key={d.id} onClick={() => onPick(d.id)}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: EASE }}
              className={`tw-dest group ${i === 0 ? "tw-dest--hero" : i === 3 || i === 8 ? "tw-dest--wide" : ""}`}
              aria-label={`Explore ${d.name}`}
            >
              <img src={d.image} alt={d.alt} loading="lazy" decoding="async" className="tw-dest__img" />
              <span className="tw-dest__shade" />
              <span className="tw-dest__body">
                <span className="text-white/70 text-xs font-medium">{d.nameKa}</span>
                <span className="tw-dest__title">{d.name}</span>
                <span className="tw-dest__more">
                  {d.tagline}
                  {from && <span className="block mt-1 text-white/90">Stays from ₾{from.amount}/night · estimate</span>}
                </span>
              </span>
              <span className="tw-dest__arrow"><ArrowRight className="w-4 h-4" /></span>
            </motion.button>
          )
        })}
      </div>
    </section>
  )
}

function Panorama() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const x = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"])
  return (
    <section ref={ref} className="relative h-[46vh] min-h-[300px] overflow-hidden my-6 sm:my-10">
      <motion.img style={{ x, scale: 1.12 }} src={PANORAMA_IMAGE.src} alt={PANORAMA_IMAGE.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#101B35]/70 to-transparent" />
      <div className="relative h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center">
        <Reveal>
          <p className="text-white text-3xl sm:text-6xl font-extrabold tracking-tight max-w-xl leading-[1.02]">Every valley<br />has a table set.</p>
          <p className="text-white/70 text-sm mt-4">Sighnaghi, Kakheti</p>
        </Reveal>
      </div>
    </section>
  )
}

// ——————————————————————————————————————————————————
// CATEGORIES
// ——————————————————————————————————————————————————

const TILE_TONES = ["#1769FF", "#101B35", "#36C9B4", "#4F8BFF", "#0E7C86", "#24365E"]

function Categories({ onPick }: { onPick: (id: CategoryId) => void }) {
  return (
    <section className="tw-section">
      <Heading eyebrow="Services" title="Everything a trip needs." />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {CATEGORIES.map((c, i) => {
          const Icon = CATEGORY_ICON[c.id]
          const count = PRICES.filter(p => c.metrics.includes(p.metric)).length
          return (
            <motion.button
              key={c.id} onClick={() => onPick(c.id)}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: (i % 5) * 0.05, ease: EASE }}
              className="tw-cat group"
              style={c.image ? undefined : { background: TILE_TONES[i % TILE_TONES.length] }}
            >
              {c.image && <>
                <img src={c.image.src} alt={c.image.alt} loading="lazy" decoding="async" className="tw-cat__img" />
                <span className="absolute inset-0 bg-gradient-to-t from-[#101B35]/85 via-[#101B35]/20 to-transparent" />
              </>}
              {!c.image && <Icon className="tw-cat__glyph" aria-hidden />}
              <span className="relative z-10 mt-auto text-left">
                <span className="tw-cat__icon"><Icon className="w-4 h-4" /></span>
                <span className="block text-white font-semibold leading-tight mt-3">{c.name}</span>
                <span className="block text-white/70 text-xs mt-1">{count ? `${count} estimates` : "Not connected yet"}</span>
              </span>
            </motion.button>
          )
        })}
      </div>
    </section>
  )
}

// ——————————————————————————————————————————————————
// PRICE COMPARISON
// ——————————————————————————————————————————————————

const COMPARE_METRICS: MetricId[] = ["hotel-budget", "hotel-standard", "hotel-luxury", "meal-lunch", "meal-dinner", "airport-transfer", "taxi", "car-rental", "private-driver", "guide"]

function Compare({ cities, setCities, metric, setMetric }: {
  cities: string[]; setCities: (f: (c: string[]) => string[]) => void
  metric: MetricId; setMetric: (m: MetricId) => void
}) {
  const rows = cities.map(city => ({ city, price: priceFor(city, metric) }))
  const amounts = rows.flatMap(r => (r.price ? [r.price.amount] : []))
  const max = Math.max(1, ...amounts)
  const min = amounts.length ? Math.min(...amounts) : 0
  const unpriced = DESTINATIONS.filter(d => !PRICES.some(p => p.destinationId === d.id))

  return (
    <section id="tw-compare" className="tw-section scroll-mt-24">
      <Heading eyebrow="Compare" title="Same service. Different city." />

      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 tw-noscroll">
        {COMPARE_METRICS.map(m => (
          <button key={m} onClick={() => setMetric(m)} className={`tw-chip ${metric === m ? "tw-chip--on" : ""}`}>
            {metric === m && <motion.span layoutId="tw-metric" className="tw-chip__bg" transition={{ duration: 0.4, ease: EASE }} />}
            <span className="relative">{METRICS[m].label}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mt-3 mb-8">
        {PRICED_CITIES.map(c => {
          const on = cities.includes(c)
          return (
            <button
              key={c} aria-pressed={on}
              onClick={() => setCities(cur => (on ? (cur.length > 1 ? cur.filter(x => x !== c) : cur) : [...cur, c]))}
              className={`tw-city ${on ? "tw-city--on" : ""}`}
            >{on ? "✓ " : "+ "}{c}</button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
        <AnimatePresence mode="popLayout">
          {rows.map(({ city, price }, i) => {
            const diff = price && min && price.amount > min ? Math.round(((price.amount - min) / min) * 100) : 0
            return (
              <motion.article
                key={city} layout
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                className="tw-price-card"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="font-bold text-[#101B35] text-lg">{city}</p>
                  <StatusBadge price={price} />
                </div>
                <p className="text-xs text-[#64748B] mt-0.5">{METRICS[metric].label} · {METRICS[metric].unit}</p>
                {price ? (
                  <>
                    <div className="mt-5 flex items-baseline gap-3">
                      <AnimatedNumber value={price.amount} prefix="₾" className="text-5xl font-extrabold tracking-tight text-[#101B35]" />
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={`${metric}-${diff}`}
                          initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                          className={`text-xs font-semibold px-2 py-1 rounded-full ${diff ? "bg-[#EAF2FF] text-[#1769FF]" : "bg-[#E6F8F5] text-[#0E7C6B]"}`}
                        >{diff ? `+${diff}% vs lowest` : "Lowest selected"}</motion.span>
                      </AnimatePresence>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-[#EEF2F7] overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#1769FF] to-[#36C9B4]"
                        initial={{ width: 0 }} animate={{ width: `${(price.amount / max) * 100}%` }}
                        transition={{ duration: 0.9, ease: EASE }}
                      />
                    </div>
                    <div className="mt-5 pt-4 border-t border-[#EEF2F7]"><PriceMeta price={price} /></div>
                  </>
                ) : (
                  <p className="mt-6 text-2xl font-bold text-[#94A3B8]">Price on request</p>
                )}
              </motion.article>
            )
          })}
        </AnimatePresence>
      </div>

      <Reveal className="mt-8">
        <p className="text-sm text-[#64748B]">
          <span className="font-semibold text-[#101B35]">No price data yet:</span> {unpriced.map(d => d.name).join(", ")}.
        </p>
      </Reveal>
    </section>
  )
}

// ——————————————————————————————————————————————————
// MAP
// ——————————————————————————————————————————————————

function MapSection({ active, setActive, onSelectCity }: {
  active: string | null; setActive: (id: string | null) => void; onSelectCity: (city: string) => void
}) {
  return (
    <section className="tw-section">
      <Heading eyebrow="Map" title="Find it on the map." />
      <Reveal>
        <div className="relative rounded-[28px] overflow-hidden border border-[#E2E8F0] bg-[#EAF2FF] h-[70svh] min-h-[440px] max-h-[680px] shadow-[0_30px_60px_-30px_rgba(16,27,53,0.3)]">
          <GeorgiaMap activeDestination={active} onSelectCity={(city) => onSelectCity(city)} />
          <div className="absolute top-3 left-3 right-3 z-[500] flex gap-2 overflow-x-auto tw-noscroll">
            <button onClick={() => setActive(null)} className={`tw-map-chip ${!active ? "tw-map-chip--on" : ""}`}>All regions</button>
            {DESTINATIONS.map(d => (
              <button key={d.id} onClick={() => setActive(d.id)} className={`tw-map-chip ${active === d.id ? "tw-map-chip--on" : ""}`}>{d.name}</button>
            ))}
          </div>
          <div className="absolute bottom-3 left-3 z-[500] bg-white/95 rounded-xl px-3 py-2 text-[11px] text-[#64748B] flex gap-3 shadow">
            <span className="flex items-center gap-1.5"><i className="w-2.5 h-2.5 rounded-full bg-[#1769FF]" />Price estimates</span>
            <span className="flex items-center gap-1.5"><i className="w-2.5 h-2.5 rounded-full bg-[#36C9B4]" />Town</span>
          </div>
        </div>
      </Reveal>
      <p className="text-xs text-[#64748B] mt-3">Town locations only. Business markers appear once verified listings with confirmed addresses are added.</p>
    </section>
  )
}

// ——————————————————————————————————————————————————
// EXPERIENCES
// ——————————————————————————————————————————————————

function Experiences() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <Heading eyebrow="Experiences" title="Go further." />
      </div>
      <div className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 lg:px-10 pb-4 tw-noscroll">
        {EXPERIENCES.map((e, i) => (
          <motion.figure
            key={e.title}
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
            className="tw-exp group snap-start"
          >
            <img src={e.image} alt={e.alt} loading="lazy" decoding="async" className="tw-dest__img" />
            <span className="tw-dest__shade" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/70">{e.kind} · {DESTINATIONS.find(d => d.id === e.region)?.name}</span>
              <span className="block text-2xl font-bold mt-1">{e.title}</span>
              <span className="tw-badge tw-badge--glass mt-3">Price on request</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}

// ——————————————————————————————————————————————————
// BUDGET CALCULATOR
// ——————————————————————————————————————————————————

type Tier = "hotel-budget" | "hotel-standard" | "hotel-luxury"

function Budget() {
  const [city, setCity] = useState(PRICED_CITIES[0] ?? "")
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [people, setPeople] = useState(2)
  const [tier, setTier] = useState<Tier>("hotel-standard")
  const [rooms, setRooms] = useState(1)
  const [meals, setMeals] = useState({ "meal-breakfast": true, "meal-lunch": true, "meal-dinner": true })
  const [transfers, setTransfers] = useState(2)
  const [taxis, setTaxis] = useState(4)
  const [carDays, setCarDays] = useState(0)
  const [activities, setActivities] = useState<string[]>([])
  const [extra, setExtra] = useState(0)

  const nights = nightsBetween(from, to)
  const days = nights + (nights ? 1 : 0)
  const amt = (m: MetricId) => priceFor(city, m)?.amount
  const cityActivities = PRICES.filter(p => p.city === city && (p.metric === "activity" || p.metric === "guide"))

  type Line = { label: string; value: number | null; kind: "estimate" | "input" | "missing" }
  const lines: Line[] = [
    { label: `${METRICS[tier].label} · ${rooms} room${rooms > 1 ? "s" : ""} × ${nights} nights`, value: nights && amt(tier) != null ? amt(tier)! * rooms * nights : null, kind: nights ? "estimate" : "missing" },
    { label: `Meals · ${people} × ${days} days`, value: days ? (Object.entries(meals) as [MetricId, boolean][]).reduce((s, [m, on]) => s + (on ? (amt(m) ?? 0) : 0), 0) * people * days : null, kind: days ? "estimate" : "missing" },
    { label: `Airport transfers × ${transfers}`, value: (amt("airport-transfer") ?? 0) * transfers, kind: "estimate" },
    { label: `Taxi rides × ${taxis}`, value: (amt("taxi") ?? 0) * taxis, kind: "estimate" },
    { label: `Car rental × ${carDays} days`, value: (amt("car-rental") ?? 0) * carDays, kind: "estimate" },
    { label: `Tours & attractions · ${activities.length}`, value: cityActivities.filter(a => activities.includes(a.id)).reduce((s, a) => s + a.amount * (METRICS[a.metric].perPerson ? people : 1), 0), kind: "estimate" },
    { label: "Your additional costs", value: extra, kind: "input" },
  ]
  const total = lines.reduce((s, l) => s + (l.value ?? 0), 0)
  const missing = lines.some(l => l.kind === "missing")

  const num = (v: number, set: (n: number) => void, max = 99) => (
    <input type="number" min={0} max={max} value={v} onChange={e => set(Math.min(max, Math.max(0, Number(e.target.value) || 0)))} className="tw-input w-20 text-center" />
  )

  return (
    <section id="tw-budget" className="tw-section">
      <Heading eyebrow="Budget" title="What will it cost?" />
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-5">
        <Reveal className="bg-white rounded-[28px] p-5 sm:p-8 border border-[#E2E8F0]">
          <div className="grid grid-cols-2 gap-3">
            <label className="col-span-2 sm:col-span-1 tw-field">
              <span className="tw-label">Destination</span>
              <select value={city} onChange={e => { setCity(e.target.value); setActivities([]) }} className={selectCls}>
                {PRICED_CITIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </label>
            <label className="col-span-2 sm:col-span-1 tw-field">
              <span className="tw-label">People</span>
              <select value={people} onChange={e => setPeople(Number(e.target.value))} className={selectCls}>
                {Array.from({ length: 12 }, (_, i) => i + 1).map(n => <option key={n}>{n}</option>)}
              </select>
            </label>
            <label className="tw-field"><span className="tw-label">Arrive</span><input type="date" value={from} onChange={e => setFrom(e.target.value)} className={selectCls} /></label>
            <label className="tw-field"><span className="tw-label">Leave</span><input type="date" value={to} min={from || undefined} onChange={e => setTo(e.target.value)} className={selectCls} /></label>
          </div>

          <p className="tw-label mt-6 mb-2">Stay</p>
          <div className="flex flex-wrap items-center gap-2">
            {(["hotel-budget", "hotel-standard", "hotel-luxury"] as Tier[]).map(t => (
              <button key={t} onClick={() => setTier(t)} className={`tw-city ${tier === t ? "tw-city--on" : ""}`}>{METRICS[t].label} · ₾{amt(t) ?? "—"}</button>
            ))}
            <span className="flex items-center gap-2 text-sm text-[#64748B] ml-auto">Rooms {num(rooms, setRooms, 10)}</span>
          </div>

          <p className="tw-label mt-6 mb-2">Meals per day</p>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(meals) as (keyof typeof meals)[]).map(m => (
              <button key={m} aria-pressed={meals[m]} onClick={() => setMeals(s => ({ ...s, [m]: !s[m] }))} className={`tw-city ${meals[m] ? "tw-city--on" : ""}`}>
                {METRICS[m].label} · ₾{amt(m) ?? "—"}
              </button>
            ))}
          </div>

          <p className="tw-label mt-6 mb-2">Transport</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-[#101B35]">
            <span className="flex items-center justify-between gap-2">Airport transfers {num(transfers, setTransfers, 10)}</span>
            <span className="flex items-center justify-between gap-2">Taxi rides {num(taxis, setTaxis)}</span>
            <span className="flex items-center justify-between gap-2">Car days {num(carDays, setCarDays, 60)}</span>
          </div>

          <p className="tw-label mt-6 mb-2">Tours & attractions</p>
          <div className="flex flex-wrap gap-2">
            {cityActivities.map(a => {
              const on = activities.includes(a.id)
              return (
                <button key={a.id} aria-pressed={on} onClick={() => setActivities(s => (on ? s.filter(x => x !== a.id) : [...s, a.id]))} className={`tw-city ${on ? "tw-city--on" : ""}`}>
                  {a.name} · ₾{a.amount}
                </button>
              )
            })}
          </div>

          <label className="flex items-center justify-between gap-3 mt-6 text-sm text-[#101B35]">
            <span><span className="tw-label block">Other costs (your figure)</span>SIM, souvenirs, tips…</span>
            <span className="flex items-center gap-2">₾ {num(extra, setExtra, 100000)}</span>
          </label>
        </Reveal>

        <Reveal delay={0.1} className="lg:sticky lg:top-28 self-start bg-[#101B35] text-white rounded-[28px] p-6 sm:p-8 overflow-hidden relative">
          <div className="tw-glow" aria-hidden />
          <p className="text-white/60 text-xs uppercase tracking-[0.2em]">Estimated total · {city}</p>
          <AnimatedNumber value={total} prefix="₾" className="block text-5xl sm:text-6xl font-extrabold tracking-tight mt-2" />
          <p className="text-white/60 text-sm mt-1">≈ ₾<AnimatedNumber value={people ? total / people : 0} /> per person</p>
          <div className="mt-6 space-y-2.5">
            {lines.map(l => (
              <div key={l.label} className="flex items-center justify-between gap-3 text-sm">
                <span className="text-white/75 min-w-0 truncate">{l.label}</span>
                <span className="flex items-center gap-2 shrink-0">
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${l.kind === "missing" ? "bg-amber-400/20 text-amber-200" : l.kind === "input" ? "bg-[#36C9B4]/20 text-[#7FE3D4]" : "bg-white/10 text-white/60"}`}>
                    {l.kind === "missing" ? "missing" : l.kind === "input" ? "yours" : "estimate"}
                  </span>
                  <span className="font-semibold tabular-nums w-20 text-right">{l.value == null ? "—" : `₾${Math.round(l.value).toLocaleString("en-US")}`}</span>
                </span>
              </div>
            ))}
          </div>
          <p className={`mt-6 text-xs rounded-xl px-3 py-2.5 ${missing ? "bg-amber-400/15 text-amber-100" : "bg-white/10 text-white/70"}`}>
            {missing ? "Add your dates to include stay and meals. " : ""}
            Built from unverified catalog estimates and your figures — not a final trip cost.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
