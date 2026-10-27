import { useEffect, useMemo, useRef, useState, type FormEvent } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion, type Variants } from "framer-motion"
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Info, MapPin, Search, ShieldAlert, Sparkles,
  Star, Store, X, Zap,
} from "lucide-react"
import AnimatedNumber from "./AnimatedNumber"
import {
  EXPRESS_RATE, GROUPS, canExpress, expressPrice, gel, inGroup, priceText, regionDirectory,
  type GroupFilter, type PricedService, type RegionCategory,
} from "./regionDirectory"
import type { Region } from "./regions"

// The regions map's region views, both keyed by region in RegionsMap so a new pick replays their entrances:
// RegionSummary sits beside the map; RegionServices is the dark full-width band under it — filter groups,
// category photo cards, and the picked category as an editorial spread over its service cards (photo + price),
// each of which opens a ServiceDialog with the service's price, price level, region and similar services.
// The parent's MotionConfig turns the motion off for reduced-motion users; the glows' drift is in travelword.css.

const EASE = [0.22, 1, 0.36, 1] as const
const GLASS_BTN = "w-9 h-9 rounded-full bg-forest-950/35 hover:bg-forest-950/60 backdrop-blur-md text-white flex items-center justify-center transition-colors cursor-pointer"
export const SERVICES_ID = "region-services"

const pad = (n: number) => String(n).padStart(2, "0")
/** a Commons thumbnail at another standard width step */
const sized = (url: string, width: number) => url.replace(/\/\d+px-/, `/${width}px-`)
const lowest = (directory: RegionCategory[]) => {
  const all = directory.map((c) => c.from).filter((n): n is number => n !== null)
  return all.length ? Math.min(...all) : null
}
const priceLabel = (s: PricedService) => priceText(s.price)
/** a plain amount (gel() says "უფასო" for 0, which reads wrong in a range) */
const amount = (n: number) => `${n.toLocaleString("en-US", { maximumFractionDigits: 2 })} ₾`
const CARD_GRID = "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4"

interface PriceQuery { min: number; max: number; express: boolean }

/** the services priced within the query (express prices when asked), cheapest first; `i` is the place in the category */
function searchPrices(services: PricedService[], q: PriceQuery) {
  return services
    .map((s, i) => ({ s, i, price: q.express ? (canExpress(s) ? expressPrice(s.price!) : null) : s.price }))
    .filter((r): r is { s: PricedService; i: number; price: number } => r.price !== null && r.price >= q.min && r.price <= q.max)
    .sort((a, b) => a.price - b.price)
}
const queryLabel = (q: PriceQuery) =>
  q.max === Infinity ? (q.min === 0 ? "ყველა ფასი" : `${amount(q.min)}-დან`)
    : q.min === 0 ? `${amount(q.max)}-მდე` : `${amount(q.min)} – ${amount(q.max)}`
const queryKey = (q: PriceQuery) => `${q.min}-${q.max}-${q.express}`

/** the search results are grouped into these price tiers */
const TIERS = [
  { name: "ეკონომი", band: "20 ₾-მდე", upTo: 20, dot: "bg-forest-400 shadow-[0_0_12px_2px_rgba(111,163,131,0.6)]" },
  { name: "სტანდარტი", band: "20 – 100 ₾", upTo: 100, dot: "bg-sand-300 shadow-[0_0_12px_2px_rgba(211,193,156,0.6)]" },
  { name: "კომფორტი", band: "100 – 500 ₾", upTo: 500, dot: "bg-gold-300 shadow-[0_0_12px_2px_rgba(221,187,114,0.6)]" },
  { name: "პრემიუმი", band: "500 ₾-დან", upTo: Infinity, dot: "bg-[#d08a6e] shadow-[0_0_12px_2px_rgba(208,138,110,0.6)]" },
]
const tierOf = (price: number) => TIERS.find((t) => price <= t.upTo)!

function PriceField({ id, label, suffix, value, placeholder, onChange }: {
  id: string
  label: string
  suffix: string
  value: string
  placeholder: string
  onChange: (v: string) => void
}) {
  return (
    <label htmlFor={id} className="block rounded-2xl bg-forest-950/60 ring-1 ring-white/10 focus-within:ring-2 focus-within:ring-gold-400 px-4 py-3 transition-shadow cursor-text">
      <span className="block text-[11px] text-white/50">{label}</span>
      <span className="mt-1 flex items-baseline gap-1.5">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
          step="any"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-w-0 bg-transparent text-2xl font-black tabular-nums text-white placeholder:text-white/25 focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <span className="shrink-0 text-sm font-bold text-white/50">₾{suffix}</span>
      </span>
    </label>
  )
}

const unfold: Variants = {
  hidden: { opacity: 0, y: 28, clipPath: "inset(0% 0% 100% 0% round 24px)" },
  show: { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 24px)", transition: { duration: 0.75, ease: EASE } },
  exit: { opacity: 0, y: -14, transition: { duration: 0.25, ease: "easeIn" } },
}
const stagger = (each: number, delay = 0): Variants => ({ show: { transition: { staggerChildren: each, delayChildren: delay } } })
const popIn: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } },
}
const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}
/** mosaic tiles wipe up from their bottom edge */
const wipe: Variants = {
  hidden: { clipPath: "inset(100% 0% 0% 0% round 20px)" },
  show: { clipPath: "inset(0% 0% 0% 0% round 20px)", transition: { duration: 1, ease: EASE } },
}

export function RegionSummary({ region, index, total, onStep }: {
  region: Region
  index: number
  total: number
  onStep: (d: number) => void
}) {
  const directory = useMemo(() => regionDirectory(region), [region])
  const count = directory.reduce((n, c) => n + c.priced.length, 0)
  const from = lowest(directory)

  return (
    <motion.article
      variants={unfold} initial="hidden" animate="show" exit="exit"
      className="bg-cream rounded-3xl border border-sand-200 shadow-xl shadow-forest-900/5 overflow-hidden"
    >
      <header className="relative isolate h-48 sm:h-56 overflow-hidden text-white">
        <motion.img
          src={sized(region.photo, 960)} alt={region.alt}
          initial={{ scale: 1.25 }} animate={{ scale: 1 }} transition={{ duration: 1.8, ease: EASE }}
          className={`absolute inset-0 -z-10 w-full h-full object-cover ${region.occupied ? "grayscale-[60%]" : ""}`}
        />
        <span className="absolute inset-0 -z-10 bg-linear-to-t from-forest-950/90 via-forest-950/35 to-forest-950/10" />
        <div className="absolute top-3 right-3 flex gap-1.5">
          <button type="button" onClick={() => onStep(-1)} aria-label="წინა რეგიონი" className={GLASS_BTN}><ChevronLeft className="w-4 h-4" /></button>
          <button type="button" onClick={() => onStep(1)} aria-label="შემდეგი რეგიონი" className={GLASS_BTN}><ChevronRight className="w-4 h-4" /></button>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
            className="flex items-center gap-1.5 text-xs text-white/75"
          >
            <b className="text-white tabular-nums">{pad(index + 1)}</b> / {pad(total)} <span className="text-white/40">·</span>
            <MapPin className="w-3.5 h-3.5 text-gold-300 shrink-0" /> <span className="truncate">{region.places}</span>
          </motion.span>
          {/* the clip hides the title until it rises in; the padding keeps Georgian descenders inside it */}
          <span className="block overflow-hidden pt-0.5 pb-1.5">
            <motion.h3
              initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              className="font-heading text-3xl sm:text-4xl font-bold leading-tight text-cream"
            >
              {region.name}
            </motion.h3>
          </span>
        </div>
      </header>

      <div className="p-5">
        <p className="text-sm text-ink leading-relaxed">{region.desc}</p>
        {region.occupied ? (
          <p className="mt-4 flex items-start gap-2 rounded-xl bg-rose-50 border border-rose-200 p-3 text-xs text-rose-800 leading-relaxed">
            <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
            ოკუპირებული ტერიტორია: TravelWord ამ მხარეში სერვისებს არ ათავსებს.
          </p>
        ) : (
          <>
            <motion.dl variants={stagger(0.08, 0.35)} initial="hidden" animate="show" className="mt-4 grid grid-cols-3 gap-2">
              {[
                [<AnimatedNumber key="n" value={count} />, "სერვისი"],
                [<AnimatedNumber key="c" value={directory.length} />, "კატეგორია"],
                [from === null ? "—" : `${gel(from)}-დან`, "ფასი"],
              ].map(([value, label]) => (
                <motion.div key={label as string} variants={popIn} className="flex flex-col-reverse rounded-2xl bg-paper border border-sand-100 px-3 py-2.5">
                  <dt className="text-[11px] text-ink-soft">{label}</dt>
                  <dd className="text-lg sm:text-xl font-black text-forest-900 leading-tight">{value}</dd>
                </motion.div>
              ))}
            </motion.dl>
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => document.getElementById(SERVICES_ID)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="group inline-flex items-center gap-2 bg-forest-900 hover:bg-forest-800 text-cream text-sm font-bold px-5 py-2.5 rounded-full shadow-lg shadow-forest-900/20 transition-colors cursor-pointer"
              >
                სერვისების ნახვა <ArrowDown className="w-4 h-4 motion-safe:animate-bounce" />
              </button>
            </div>
          </>
        )}
      </div>
    </motion.article>
  )
}

export default function RegionServices({ region, onAddBusiness }: { region: Region; onAddBusiness: () => void }) {
  const directory = useMemo(() => regionDirectory(region), [region])
  const [group, setGroup] = useState<GroupFilter>("priority")
  const [picked, setPicked] = useState(directory[0]?.id ?? "")
  const detailRef = useRef<HTMLDivElement>(null)
  const shown = directory.filter((c) => inGroup(c, group))
  const active = shown.find((c) => c.id === picked) ?? shown[0]
  const count = directory.reduce((n, c) => n + c.priced.length, 0)
  const from = lowest(directory)
  const groupCount = (id: GroupFilter) => directory.filter((c) => inGroup(c, id)).length

  if (region.occupied) return null

  const pick = (id: string) => {
    setPicked(id)
    requestAnimationFrame(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }))
  }

  return (
    // no overflow clip here: the filter bar is sticky inside this band (the glows clip themselves)
    <motion.div
      id={SERVICES_ID}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 0.6 }}
      className="relative isolate bg-forest-900 text-white scroll-mt-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <span className="absolute -top-40 -left-32 w-[42rem] h-[42rem] rounded-full bg-forest-500/25 blur-[120px] motion-safe:animate-[tw-drift_18s_ease-in-out_infinite_alternate]" />
        <span className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] rounded-full bg-gold-400/10 blur-[120px] motion-safe:animate-[tw-drift_22s_ease-in-out_infinite_alternate-reverse]" />
        <span className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
        {/* a faint dot grid gives the dark a surface */}
        <span className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      </div>

      <motion.header
        variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
        className="container mx-auto px-4 pt-16 md:pt-24 pb-8 grid lg:grid-cols-12 gap-8 items-end"
      >
        <div className="lg:col-span-7">
          <motion.span variants={rise} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shadow-[0_0_10px_2px_rgba(221,187,114,0.7)]" />
            {region.name} · სერვისები და ფასები
          </motion.span>
          <motion.h3 variants={rise} className="mt-5 font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] text-balance text-cream">
            ყველაფერი, რაც მოგზაურს{" "}
            <span className="bg-linear-to-r from-gold-300 via-gold-200 to-white bg-clip-text text-transparent">ადგილზე სჭირდება</span>
          </motion.h3>
        </div>
        <motion.dl variants={rise} className="lg:col-span-5 grid grid-cols-3 rounded-3xl bg-white/[0.04] ring-1 ring-white/10 backdrop-blur-md divide-x divide-white/10">
          {([
            [<AnimatedNumber key="n" value={count} />, "სერვისი"],
            [<AnimatedNumber key="c" value={directory.length} />, "კატეგორია"],
            [from === null ? "—" : gel(from), "მინიმალური ფასი"],
          ] as const).map(([value, label]) => (
            <div key={label} className="flex flex-col-reverse px-4 py-5 sm:px-6">
              <dt className="text-[11px] sm:text-xs text-white/55 mt-1">{label}</dt>
              <dd className="text-2xl sm:text-3xl font-black tabular-nums">{value}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.header>

      {/* the filter stays under the page header while the band scrolls by */}
      <div className="sticky top-16 z-20 border-y border-white/5 bg-forest-950/75 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex gap-1 overflow-x-auto rounded-full bg-white/5 ring-1 ring-white/10 p-1 [scrollbar-width:none]">
            {GROUPS.map((g) => {
              const on = group === g.id
              const priority = g.id === "priority"
              return (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setGroup(g.id)}
                  aria-pressed={on}
                  title={priority ? "მოგზაურისთვის ყველაზე საჭირო სერვისები" : undefined}
                  className={`relative shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors cursor-pointer ${
                    on ? "text-forest-950" : priority ? "text-gold-200 hover:text-gold-100" : "text-white/70 hover:text-white"
                  }`}
                >
                  {/* the priority tab's pill is warm, the others white; one pill glides between them */}
                  {on && (
                    <motion.span
                      layoutId="tw-rs-group"
                      className={`absolute inset-0 rounded-full ${
                        priority ? "bg-linear-to-r from-gold-200 to-gold-300 shadow-[0_8px_24px_-8px_rgba(221,187,114,0.7)]" : "bg-cream shadow-[0_8px_24px_-8px_rgba(255,255,255,0.5)]"
                      }`}
                      transition={{ type: "spring", stiffness: 420, damping: 36 }}
                    />
                  )}
                  {priority && <Star className={`relative w-3.5 h-3.5 ${on ? "fill-forest-950" : "fill-gold-300 text-gold-300"}`} />}
                  <span className="relative">{g.label}</span>
                  <span className={`relative text-[10px] tabular-nums rounded-full px-1.5 py-px ${on ? "bg-forest-950/10" : "bg-white/10"}`}>{groupCount(g.id)}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 pb-20 md:pb-28">
        {/* keyed by group, so a new filter replays the cards' entrance. The priority tab is a bento: its first
            (most important) card is wide, so its 7 cards fill 2 × 4 on wide screens and 4 × 2 on phones */}
        <motion.ul
          key={group}
          variants={stagger(0.04)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
          className={`grid gap-3 sm:gap-4 ${group === "priority" ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"}`}
        >
          {shown.map((c, i) => (
            <CategoryCard
              key={c.id} category={c} on={c.id === active?.id} onPick={() => pick(c.id)}
              bento={group === "priority"} wide={group === "priority" && i === 0}
            />
          ))}
        </motion.ul>

        <div ref={detailRef} className="mt-16 md:mt-20 scroll-mt-36">
          <AnimatePresence mode="wait" initial={false}>
            {active && (
              <CategoryDetail
                key={active.id} category={active} region={region}
                index={directory.indexOf(active)} total={directory.length} onAddBusiness={onAddBusiness}
              />
            )}
          </AnimatePresence>
        </div>

        <p className="mt-10 flex items-start gap-1.5 text-[11px] text-white/45 leading-relaxed">
          <Info className="w-3.5 h-3.5 shrink-0 mt-px" />
          ფასები სავარაუდოა (ლარში) და დამოკიდებულია მომწოდებელზე, სეზონსა და მოცულობაზე — დაჯავშნამდე გადაამოწმეთ.
        </p>
      </div>
    </motion.div>
  )
}

function CategoryCard({ category: c, on, onPick, bento = false, wide = false }: {
  category: RegionCategory
  on: boolean
  onPick: () => void
  /** fixed-height tile of the priority bento instead of a portrait card */
  bento?: boolean
  /** the bento's lead tile, two columns wide, with the category's description */
  wide?: boolean
}) {
  return (
    <motion.li variants={popIn} className={`relative ${wide ? "col-span-2" : ""}`}>
      {/* the active glow glides from card to card */}
      {on && (
        <motion.span
          layoutId="tw-rs-picked"
          className="absolute -inset-1 rounded-[1.4rem] bg-linear-to-br from-gold-300 via-gold-500 to-gold-400 shadow-[0_20px_50px_-12px_rgba(201,161,90,0.65)]"
          transition={{ type: "spring", stiffness: 380, damping: 34 }}
        />
      )}
      <button
        type="button"
        onClick={onPick}
        aria-pressed={on}
        className={`group relative isolate block w-full ${bento ? "h-52 sm:h-60" : "aspect-[4/5] sm:aspect-[5/6]"} overflow-hidden rounded-[1.1rem] text-left ring-1 ring-white/10 hover:-translate-y-1 transition-[translate] duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold-400`}
      >
        <img src={sized(c.photo, wide ? 960 : 500)} alt="" loading="lazy" className="absolute inset-0 -z-10 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
        <span className="absolute inset-0 -z-10 bg-linear-to-t from-forest-950 via-forest-950/50 to-forest-950/5" />
        <span className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
          <span className="w-10 h-10 rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur-md flex items-center justify-center text-lg transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
            {c.emoji}
          </span>
          {on ? (
            <span className="w-6 h-6 rounded-full bg-gold-400 text-forest-950 flex items-center justify-center shadow-lg"><Check className="w-3.5 h-3.5" strokeWidth={3} /></span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white/80 bg-forest-950/40 backdrop-blur-md ring-1 ring-white/15 px-2 py-0.5 rounded-full tabular-nums">
              {c.priority && <Star className="w-2.5 h-2.5 fill-gold-300 text-gold-300" aria-label="პრიორიტეტული" />}
              {c.priced.length}
            </span>
          )}
        </span>
        <span className="absolute inset-x-0 bottom-0 p-3.5">
          <span className={`block font-heading font-bold leading-snug line-clamp-2 text-cream ${wide ? "text-lg sm:text-2xl" : "text-[15px]"}`}>{c.name}</span>
          {wide && <span className="hidden sm:block mt-1 max-w-md text-sm text-white/70 leading-snug line-clamp-2">{c.desc}</span>}
          <span className="mt-2 flex items-center justify-between gap-2">
            {c.from !== null && <span className="text-xs font-semibold text-gold-300 tabular-nums">{gel(c.from)}-დან</span>}
            <ArrowRight className="w-4 h-4 text-white/70 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </span>
        </span>
      </button>
    </motion.li>
  )
}

function CategoryDetail({ category: c, region, index, total, onAddBusiness }: {
  category: RegionCategory
  region: Region
  index: number
  total: number
  onAddBusiness: () => void
}) {
  /** the service whose dialog is open */
  const [open, setOpen] = useState<number | null>(null)
  const paid = c.priced.map((s) => s.price).filter((p): p is number => p !== null && p > 0)
  const lo = paid.length ? Math.min(...paid) : 0
  const hi = paid.length ? Math.max(...paid) : 0
  const range = paid.length ? `${amount(lo)} – ${amount(hi)}` : "—"

  // the price search: typed values, and the search they were applied as
  const [minIn, setMinIn] = useState("")
  const [maxIn, setMaxIn] = useState("")
  const [express, setExpress] = useState(false)
  const [query, setQuery] = useState<PriceQuery | null>(null)
  const resultsRef = useRef<HTMLDivElement>(null)
  const results = query ? searchPrices(c.priced, query) : null

  const submit = (e: FormEvent) => {
    e.preventDefault()
    let min = minIn === "" ? 0 : Math.max(0, Number(minIn))
    let max = maxIn === "" ? Infinity : Math.max(0, Number(maxIn))
    if (min > max) [min, max] = [max, min]
    setQuery({ min, max, express })
    requestAnimationFrame(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }))
  }
  const reset = () => {
    setMinIn("")
    setMaxIn("")
    setExpress(false)
    setQuery(null)
  }
  // the spread's photos: the category's own, then the first distinct service photos
  const mosaic = [...new Set([c.photo, ...c.priced.map((s) => s.photo)].map((p) => sized(p, 960)))].slice(0, 3)

  return (
    <motion.section
      initial="hidden" animate="show" exit={{ opacity: 0, y: -24, transition: { duration: 0.3, ease: "easeIn" } }}
      variants={stagger(0.12)}
      aria-label={c.name}
    >
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <motion.div variants={stagger(0.08)} className="lg:col-span-5 order-2 lg:order-1">
          <motion.span variants={rise} className="flex items-center gap-3 text-sm text-white/55 tabular-nums">
            <span className="text-3xl">{c.emoji}</span>
            <span><b className="text-white">{pad(index + 1)}</b> / {pad(total)}</span>
            <span className="h-px flex-1 bg-linear-to-r from-white/20 to-transparent" />
          </motion.span>
          <motion.h4 variants={rise} className="mt-4 font-heading text-3xl md:text-5xl font-bold leading-[1.25] text-balance text-cream">{c.name}</motion.h4>
          <motion.p variants={rise} className="mt-4 text-base md:text-lg text-white/70 leading-relaxed">{c.desc}</motion.p>
          <motion.form variants={rise} onSubmit={submit} className="mt-7 rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-300">ფასით ძებნა</span>
              <span className="text-[11px] text-white/40 tabular-nums">{c.priced.length} სერვისი · {range}</span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <PriceField id={`tw-min-${c.id}`} label="მინიმალური ფასი" suffix="-დან" value={minIn} placeholder={String(lo)} onChange={setMinIn} />
              <PriceField id={`tw-max-${c.id}`} label="მაქსიმალური ფასი" suffix="-მდე" value={maxIn} placeholder={String(hi)} onChange={setMaxIn} />
            </div>
            <label className="mt-3 flex items-center justify-between gap-3 rounded-2xl bg-forest-950/40 ring-1 ring-white/10 has-[:checked]:ring-gold-300/50 has-[:checked]:bg-gold-300/10 px-4 py-3 cursor-pointer transition-colors">
              <span className="flex items-center gap-3 min-w-0">
                <span className="w-9 h-9 shrink-0 rounded-xl bg-gold-300/15 text-gold-300 flex items-center justify-center"><Zap className="w-4 h-4" /></span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">+ დაჩქარებული</span>
                  <span className="block text-[11px] text-white/50">იმავე დღეს · ფასი დაახლ. +{Math.round((EXPRESS_RATE - 1) * 100)}%</span>
                </span>
              </span>
              <input type="checkbox" checked={express} onChange={(e) => setExpress(e.target.checked)} className="peer sr-only" />
              <span
                aria-hidden="true"
                className="relative shrink-0 w-11 h-6 rounded-full bg-white/15 peer-checked:bg-gold-400 peer-focus-visible:ring-2 peer-focus-visible:ring-gold-300 transition-colors after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:rounded-full after:bg-cream after:shadow after:transition-transform after:duration-300 peer-checked:after:translate-x-5"
              />
            </label>
            <div className="mt-4 flex items-center gap-4">
              <button
                type="submit"
                className="group flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-cream text-forest-950 font-bold text-sm px-5 py-3 shadow-[0_12px_40px_-12px_rgba(255,255,255,0.45)] hover:bg-gold-300 transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" /> მოძებნე
              </button>
              {query && (
                <button type="button" onClick={reset} className="shrink-0 text-sm text-white/60 hover:text-white underline-offset-4 hover:underline cursor-pointer">
                  გასუფთავება
                </button>
              )}
            </div>
          </motion.form>
        </motion.div>

        <motion.div variants={stagger(0.14)} className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-3 grid-rows-2 gap-3 h-64 sm:h-80 lg:h-[26rem]">
          {mosaic.map((src, i) => (
            <motion.div
              key={src}
              variants={wipe}
              className={`relative overflow-hidden rounded-[20px] ring-1 ring-white/10 ${
                mosaic.length === 1 ? "col-span-3 row-span-2" : i === 0 ? "col-span-2 row-span-2" : mosaic.length === 2 ? "row-span-2" : ""
              }`}
            >
              <motion.img
                src={src} alt={i === 0 ? c.alt : ""}
                initial={{ scale: 1.35 }} animate={{ scale: 1 }} transition={{ duration: 1.8, delay: 0.15 * i, ease: EASE }}
                className="w-full h-full object-cover"
              />
              {i === 0 && (
                <span className="absolute bottom-2 left-3 right-3 text-[10px] text-white/60 truncate drop-shadow">
                  ფოტო: {c.credit ? `${c.credit} · ` : ""}Wikimedia Commons
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div ref={resultsRef} className="mt-14 scroll-mt-36 flex flex-wrap items-end justify-between gap-3">
        <h5 className="font-heading text-xl md:text-2xl font-bold text-cream">სერვისები და ფასები</h5>
        <span className="flex flex-wrap items-center gap-2 text-xs">
          {query && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-400/10 ring-1 ring-gold-400/30 text-gold-200 font-semibold px-3 py-1 tabular-nums">
              {queryLabel(query)}
              {query.express && <><span className="text-gold-200/40">·</span><Zap className="w-3 h-3 text-gold-300" /> დაჩქარებული</>}
            </span>
          )}
          <span className="text-white/45 tabular-nums">{(results ?? c.priced).length} შეთავაზება</span>
        </span>
      </div>

      {/* keyed by the search, so every new search replays the cards' entrance */}
      <AnimatePresence mode="wait" initial={false}>
        {results === null ? (
          <motion.ul
            key="all"
            variants={stagger(0.035, 0.1)} initial="hidden" whileInView="show" exit={{ opacity: 0, transition: { duration: 0.2 } }}
            viewport={{ once: true, amount: 0.05 }}
            className={`mt-5 ${CARD_GRID}`}
          >
            {c.priced.map((s, i) => <ServiceCard key={s.name} service={s} n={i + 1} onOpen={() => setOpen(i)} />)}
          </motion.ul>
        ) : results.length === 0 ? (
          <motion.div
            key={queryKey(query!)}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: EASE }}
            className="mt-5 rounded-3xl bg-white/[0.03] ring-1 ring-white/10 py-14 px-6 text-center"
          >
            <Search className="w-8 h-8 mx-auto text-white/30" />
            <p className="mt-4 font-semibold">ამ ფასით შეთავაზება ვერ მოიძებნა</p>
            <p className="mt-1 text-sm text-white/50">
              {query!.express ? "დაჩქარებით მხოლოდ ერთჯერადი მომსახურებაა ხელმისაწვდომი. " : ""}სცადეთ სხვა ფასი — ამ კატეგორიაში {range}.
            </p>
            <button type="button" onClick={reset} className="mt-6 inline-flex items-center gap-2 rounded-full bg-cream text-forest-950 font-bold text-sm px-5 py-2.5 hover:bg-gold-300 transition-colors cursor-pointer">
              ყველა სერვისის ნახვა
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={queryKey(query!)}
            variants={stagger(0.12)} initial="hidden" animate="show" exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {TIERS.map((tier) => {
              const items = results.filter((r) => tierOf(r.price) === tier)
              if (!items.length) return null
              return (
                <motion.section key={tier.name} variants={rise} className="mt-8" aria-label={tier.name}>
                  <div className="flex items-center gap-3">
                    <span className={`w-2.5 h-2.5 rounded-full ${tier.dot}`} />
                    <h6 className="text-base font-bold">{tier.name}</h6>
                    <span className="text-xs text-white/45 tabular-nums">{tier.band}</span>
                    <span className="h-px flex-1 bg-linear-to-r from-white/15 to-transparent" />
                    <span className="text-xs text-white/50 tabular-nums">{items.length} შეთავაზება</span>
                  </div>
                  <motion.ul variants={stagger(0.04)} className={`mt-4 ${CARD_GRID}`}>
                    {items.map(({ s, i }) => (
                      <ServiceCard key={s.name} service={s} n={i + 1} express={query!.express} onOpen={() => setOpen(i)} />
                    ))}
                  </motion.ul>
                </motion.section>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open !== null && (
          <ServiceDialog
            category={c} region={region} index={open} express={query?.express ?? false}
            onIndex={setOpen} onClose={() => setOpen(null)}
            onAddBusiness={() => { setOpen(null); onAddBusiness() }}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE }}
        className="relative isolate mt-14 overflow-hidden rounded-3xl bg-sand-100 ring-1 ring-sand-200 text-forest-900 px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
      >
        <span className="absolute -right-16 -top-20 -z-10 w-72 h-72 rounded-full bg-gold-200/50 blur-3xl" aria-hidden="true" />
        <div>
          <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-700"><Sparkles className="w-3.5 h-3.5" /> TravelWord ბიზნესი</p>
          <p className="mt-2 font-heading text-xl md:text-2xl font-bold leading-snug">მუშაობ სფეროში „{c.name}“? შენი მომსახურება მოგზაურებმა აქ უნდა ნახონ.</p>
        </div>
        <button
          type="button"
          onClick={onAddBusiness}
          className="shrink-0 inline-flex items-center gap-2 rounded-full bg-forest-900 hover:bg-forest-800 text-cream font-bold text-sm px-6 py-3 shadow-xl shadow-forest-950/20 transition-colors cursor-pointer"
        >
          <Store className="w-4 h-4" /> ბიზნესის დამატება
        </button>
      </motion.div>
    </motion.section>
  )
}

function ServiceCard({ service: s, n, express = false, onOpen }: {
  service: PricedService
  n: number
  /** show the express price (results of a "+ დაჩქარებული" search) */
  express?: boolean
  onOpen: () => void
}) {
  const hurried = express && canExpress(s)
  const price = hurried ? expressPrice(s.price!) : s.price
  return (
    <motion.li variants={popIn} className="flex">
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        className="group relative flex-1 flex flex-col overflow-hidden rounded-[1.1rem] text-left bg-white/[0.04] ring-1 ring-white/10 hover:ring-gold-400/50 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(201,161,90,0.45)] transition-[translate,box-shadow,background-color] duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold-400"
      >
        <span className="relative block aspect-[4/3] overflow-hidden">
          <img src={sized(s.photo, 500)} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
          <span className="absolute inset-0 bg-linear-to-t from-forest-950/80 via-transparent to-forest-950/20" />
          <span className="absolute top-2.5 left-2.5 text-[10px] font-bold tabular-nums text-white/80 bg-forest-950/40 backdrop-blur-md ring-1 ring-white/15 rounded-full px-2 py-0.5">{pad(n)}</span>
          {hurried && (
            <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 text-[10px] font-bold text-forest-950 bg-gold-300 rounded-full px-2 py-0.5 shadow-lg">
              <Zap className="w-3 h-3" /> დაჩქარებული
            </span>
          )}
          {/* hover hint: the card opens the service's dialog */}
          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="inline-flex items-center gap-1 rounded-full bg-cream text-forest-950 text-xs font-bold px-3.5 py-1.5 shadow-xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              დეტალები <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </span>
          <span className="absolute bottom-1.5 left-2.5 right-2.5 text-[9px] text-white/55 truncate" title={s.credit || "Wikimedia Commons"}>
            ფოტო: {s.credit || "Wikimedia Commons"}
          </span>
        </span>
        <span className="flex-1 flex flex-col p-3.5 sm:p-4">
          <span className="block mb-3 text-[13px] sm:text-sm font-semibold leading-snug text-white/90 line-clamp-2">{s.name}</span>
          <span className="mt-auto pt-3 flex items-end justify-between gap-2 border-t border-white/10">
            <span className={`text-lg sm:text-xl font-black tabular-nums leading-none ${price === 0 ? "text-gold-300" : hurried ? "text-gold-200" : "text-white"}`}>{priceText(price)}</span>
            {price !== null && price > 0 && <span className="text-[10px] sm:text-[11px] text-white/50 text-right leading-tight">/ {s.unit}</span>}
          </span>
        </span>
      </button>
    </motion.li>
  )
}

// the dialog's text slides in from the side it was stepped to; its blocks rise one after another
const slideText: Variants = {
  enter: (d: number) => ({ opacity: 0, x: d * 40 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE, staggerChildren: 0.06 } },
  exit: (d: number) => ({ opacity: 0, x: d * -30, transition: { duration: 0.2, ease: "easeIn" } }),
}
const textItem: Variants = {
  enter: { opacity: 0, y: 16 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}
const ROUND_BTN = "w-10 h-10 rounded-full ring-1 ring-white/15 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors cursor-pointer"

/** where a price sits among 3 or more services priced in the same unit: the category's, or (`wide`) the region's */
function PriceScale({ service: s, peers, wide }: { service: PricedService; peers: PricedService[]; wide: boolean }) {
  const sorted = [...peers].sort((a, b) => (a.price ?? 0) - (b.price ?? 0))
  const pos = sorted.findIndex((p) => p.name === s.name) / (sorted.length - 1)
  const [level, tone] = pos < 0.34 ? ["ხელმისაწვდომი", "bg-forest-400/15 text-forest-400 ring-forest-400/30"]
    : pos < 0.67 ? ["საშუალო", "bg-gold-300/15 text-gold-200 ring-gold-300/30"]
    : ["მაღალი", "bg-[#d08a6e]/15 text-[#e3a58c] ring-[#d08a6e]/30"]
  return (
    <div className="mt-5 pt-4 border-t border-white/10">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[11px] text-white/50">ფასის დონე</span>
        <span className={`rounded-full ring-1 px-2.5 py-0.5 text-[11px] font-bold ${tone}`}>{level}</span>
      </div>
      <div className="relative mt-3 h-1.5 rounded-full bg-linear-to-r from-forest-400 via-gold-300 to-[#d08a6e]">
        <motion.span
          initial={{ left: "0%", opacity: 0 }} animate={{ left: `${pos * 100}%`, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.35 }}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cream ring-4 ring-forest-950 shadow-[0_0_0_6px_rgba(255,255,255,0.12)]"
        />
      </div>
      <div className="mt-2 flex justify-between gap-3 text-[11px] text-white/45 tabular-nums">
        <span>{gel(sorted[0].price ?? 0)}</span>
        <span className="truncate">{sorted.length} სერვისი{wide ? " რეგიონში" : ""} · / {s.unit}</span>
        <span>{gel(sorted[sorted.length - 1].price ?? 0)}</span>
      </div>
    </div>
  )
}

// portal: the page deck's transforms would otherwise trap the fixed overlay; outside the deck its wheel and swipe
// handlers leave the dialog alone, and its key handler stands down while an aria-modal dialog is open
function ServiceDialog({ category: c, region, index, express, onIndex, onClose, onAddBusiness }: {
  category: RegionCategory
  region: Region
  index: number
  /** opened from a "+ დაჩქარებული" search: also show the express price */
  express: boolean
  onIndex: (i: number) => void
  onClose: () => void
  onAddBusiness: () => void
}) {
  const n = c.priced.length
  const s = c.priced[index]
  const [dir, setDir] = useState(1)
  const closeRef = useRef<HTMLButtonElement>(null)
  const jump = (i: number, d: number) => { setDir(d); onIndex((i + n) % n) }
  // the price level compares the category's services in the same unit; when it has too few, or they all cost the
  // same (the sights' excursions), the whole region's (a name can repeat across categories)
  const everywhere = useMemo(() => regionDirectory(region).flatMap((d) => d.priced), [region])
  const sameUnit = (p: PricedService) => p.unit === s.unit && p.price !== null && p.price > 0
  const comparable = (list: PricedService[]) => list.length >= 3 && new Set(list.map((p) => p.price)).size > 1
  const inCategory = c.priced.filter(sameUnit)
  const wide = !comparable(inCategory)
  const peers = wide ? [...new Map(everywhere.filter(sameUnit).map((p) => [p.name, p])).values()] : inCategory
  // same-unit services first: they are the closest alternatives
  const similar = c.priced
    .map((p, i) => ({ p, i }))
    .filter(({ i }) => i !== index)
    .sort((a, b) => Number(b.p.unit === s.unit) - Number(a.p.unit === s.unit))
    .slice(0, 4)

  // focus the close button, and hand focus back to the card that opened the dialog
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    return () => opener?.focus({ preventScroll: true })
  }, [])

  // re-bound every render so the arrows always step from the current service
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      else if (e.key === "ArrowRight") jump(index + 1, 1)
      else if (e.key === "ArrowLeft") jump(index - 1, -1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  })

  return createPortal(
    <div className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-6 font-['Noto_Sans_Georgian',Inter,sans-serif]">
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}
        onClick={onClose}
        className="absolute inset-0 bg-forest-950/80 backdrop-blur-md"
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="tw-svc-title"
        initial={{ opacity: 0, y: 48, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97, transition: { duration: 0.25, ease: "easeIn" } }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="relative isolate w-full max-w-5xl max-h-[92svh] overflow-y-auto md:overflow-hidden overscroll-contain rounded-[28px] bg-forest-900 text-white ring-1 ring-gold-400/25 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.85)] grid md:grid-cols-[1.05fr_1fr]"
      >
        <span className="pointer-events-none absolute -top-32 -right-24 -z-10 w-96 h-96 rounded-full bg-gold-400/15 blur-[100px]" aria-hidden="true" />

        {/* photo: crossfades when the next service has a different one */}
        <div className="relative isolate h-60 sm:h-72 md:h-auto md:min-h-[36rem] overflow-hidden">
          <AnimatePresence initial>
            <motion.img
              key={s.photo}
              src={sized(s.photo, 960)} alt={s.name}
              initial={{ opacity: 0, scale: 1.18 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 0.5 }, scale: { duration: 1.6, ease: EASE } }}
              className="absolute inset-0 -z-10 w-full h-full object-cover"
            />
          </AnimatePresence>
          <span className="absolute inset-0 -z-10 bg-linear-to-t md:bg-linear-to-r from-forest-950/70 via-forest-950/10 to-transparent md:from-transparent md:via-transparent md:to-forest-950/60" />
          <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-forest-950/45 backdrop-blur-md ring-1 ring-white/15 pl-1.5 pr-3 py-1 text-xs font-semibold">
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center text-sm">{c.emoji}</span> {c.name}
          </span>
          <span className="absolute bottom-3 left-4 right-4 text-[10px] text-white/60 truncate drop-shadow">
            ფოტო: {s.credit ? `${s.credit} · ` : ""}Wikimedia Commons
          </span>
        </div>

        <div className="relative p-6 sm:p-8 md:max-h-[92svh] md:overflow-y-auto overscroll-contain">
          <AnimatePresence mode="wait" initial custom={dir}>
            <motion.div key={s.name} custom={dir} variants={slideText} initial="enter" animate="center" exit="exit">
              <motion.p variants={textItem} className="flex items-center gap-3 pr-12 text-sm text-white/55 tabular-nums">
                <span><b className="text-white">{pad(index + 1)}</b> / {pad(n)}</span>
                <span className="h-px flex-1 bg-linear-to-r from-white/20 to-transparent" />
              </motion.p>
              <motion.h3 id="tw-svc-title" variants={textItem} className="mt-4 font-heading text-3xl sm:text-4xl font-bold leading-[1.25] text-balance text-cream">
                {s.name}
              </motion.h3>
              <motion.p variants={textItem} className="mt-3 text-sm sm:text-base text-white/70 leading-relaxed">{s.desc || c.desc}</motion.p>

              <motion.div variants={textItem} className="mt-6 rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-5">
                <div className="flex items-end justify-between gap-3">
                  <div className="flex flex-col-reverse">
                    <span className="text-[11px] text-white/50 mt-1">სავარაუდო ფასი</span>
                    <span className={`text-4xl font-black tabular-nums leading-none ${s.price === 0 ? "text-gold-300" : "text-white"}`}>{priceLabel(s)}</span>
                  </div>
                  {s.price !== null && s.price > 0 && <span className="text-sm font-semibold text-gold-300">/ {s.unit}</span>}
                </div>
                {express && canExpress(s) && (
                  <p className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-gold-300/10 ring-1 ring-gold-300/30 px-3.5 py-2.5 text-sm">
                    <span className="flex items-center gap-2 text-gold-200 font-semibold"><Zap className="w-4 h-4" /> დაჩქარებით, იმავე დღეს</span>
                    <b className="text-gold-200 tabular-nums">~{amount(expressPrice(s.price!))}</b>
                  </p>
                )}
                {s.price !== null && s.price > 0 && comparable(peers) && <PriceScale service={s} peers={peers} wide={wide} />}
              </motion.div>

              <motion.dl variants={textItem} className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="min-w-0 flex flex-col-reverse rounded-2xl bg-white/[0.04] ring-1 ring-white/10 px-4 py-3">
                  <dt className="text-[11px] text-white/50 mt-0.5 flex items-center gap-1 min-w-0">
                    <MapPin className="w-3 h-3 shrink-0" /> <span className="truncate">{region.places}</span>
                  </dt>
                  <dd className="text-base font-bold">{region.name}</dd>
                </div>
                <div className="flex flex-col-reverse rounded-2xl bg-white/[0.04] ring-1 ring-white/10 px-4 py-3">
                  <dt className="text-[11px] text-white/50 mt-0.5">ფასის ერთეული</dt>
                  <dd className="text-base font-bold">{s.price === null ? "შეთანხმებით" : s.unit}</dd>
                </div>
              </motion.dl>

              <motion.div variants={textItem} className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onAddBusiness}
                  className="group inline-flex items-center gap-2 rounded-full bg-cream text-forest-950 font-bold text-sm pl-5 pr-2 py-2 shadow-[0_12px_40px_-12px_rgba(255,255,255,0.45)] hover:bg-gold-300 transition-colors cursor-pointer"
                >
                  <Store className="w-4 h-4" /> დაამატე შენი ბიზნესი
                  <span className="w-8 h-8 rounded-full bg-forest-900 text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
                <span className="ml-auto flex gap-2">
                  <button type="button" onClick={() => jump(index - 1, -1)} aria-label="წინა სერვისი" className={ROUND_BTN}><ChevronLeft className="w-4 h-4" /></button>
                  <button type="button" onClick={() => jump(index + 1, 1)} aria-label="შემდეგი სერვისი" className={ROUND_BTN}><ChevronRight className="w-4 h-4" /></button>
                </span>
              </motion.div>

              {similar.length > 0 && (
                <motion.div variants={textItem} className="mt-8">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-300">მსგავსი სერვისები</h4>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {similar.map(({ p, i }) => (
                      <li key={p.name}>
                        <button
                          type="button"
                          onClick={() => jump(i, i > index ? 1 : -1)}
                          className="group w-full flex items-center gap-3 rounded-xl bg-white/[0.04] ring-1 ring-white/10 hover:ring-gold-400/50 hover:bg-white/[0.08] p-2 text-left transition-colors cursor-pointer"
                        >
                          <span className="w-12 h-12 shrink-0 overflow-hidden rounded-lg">
                            <img src={sized(p.photo, 330)} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-xs font-semibold leading-snug line-clamp-2">{p.name}</span>
                            <span className="block mt-0.5 text-[11px] font-bold text-gold-300 tabular-nums">{priceLabel(p)}</span>
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <motion.p variants={textItem} className="mt-6 flex items-start gap-1.5 text-[11px] text-white/40 leading-relaxed">
                <Info className="w-3.5 h-3.5 shrink-0 mt-px" />
                ფასები სავარაუდოა და დამოკიდებულია მომწოდებელზე, სეზონსა და მოცულობაზე — დაჯავშნამდე გადაამოწმეთ.
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button" ref={closeRef} onClick={onClose} aria-label="დახურვა"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-forest-950/50 hover:bg-cream hover:text-forest-950 backdrop-blur-md ring-1 ring-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </div>,
    document.body,
  )
}
