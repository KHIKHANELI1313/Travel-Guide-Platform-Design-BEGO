import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Search, Store, X } from "lucide-react"
import AnimatedNumber from "./AnimatedNumber"
import { ADJARA_DIRECTORY, DIRECTORY_BANNER, DIRECTORY_TOTAL } from "./adjaraServices"

// "500 სერვისი და ბიზნესი აჭარაში": photo banner with counters and a search over every service, a grid of
// category photo cards, and a dialog listing one category's services. Keyframes (tw-*) live in index.css.

const INITIAL = 8
const SUGGESTIONS = ["ტაქსი", "კურიერი", "ელექტრიკოსი", "სანტექნიკოსი", "ქეითერინგი", "ვეტერინარი", "გიდი"]
const RISE = "motion-safe:animate-[tw-rise_0.6s_cubic-bezier(0.2,0.7,0.2,1)_backwards]"
// backwards fill so the hover lift still works once the entrance has played
const CARD_IN = "motion-safe:animate-[tw-card-in_0.7s_cubic-bezier(0.2,0.7,0.2,1)_backwards]"
const PHOTO_BTN = "w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md text-white flex items-center justify-center transition-colors cursor-pointer"

const thumb = (photo: string) => photo.replace("/1280px-", "/960px-")
const pad = (n: number) => String(n).padStart(2, "0")

function Highlight({ text, query }: { text: string; query: string }) {
  const i = text.toLowerCase().indexOf(query.toLowerCase())
  if (!query || i < 0) return <>{text}</>
  return (
    <>
      {text.slice(0, i)}
      <mark className="bg-green-200/80 text-inherit rounded px-0.5">{text.slice(i, i + query.length)}</mark>
      {text.slice(i + query.length)}
    </>
  )
}

export default function AdjaraDirectory({ onAddBusiness }: { onAddBusiness: () => void }) {
  const [query, setQuery] = useState("")
  const [showAll, setShowAll] = useState(false)
  const [open, setOpen] = useState<number | null>(null)

  // the category cards rise in one after another when the grid first scrolls into view
  const gridRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect() }
    }, { threshold: 0.1 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const q = query.trim()
  const ql = q.toLowerCase()
  // a category whose name matches lists all of its services
  const matches = ql
    ? ADJARA_DIRECTORY.map((c, index) => ({
        c, index,
        hits: c.name.toLowerCase().includes(ql) ? c.services : c.services.filter((s) => s.toLowerCase().includes(ql)),
      })).filter((m) => m.hits.length > 0)
    : []
  const hitCount = matches.reduce((n, m) => n + m.hits.length, 0)
  const stats: Array<[number, string]> = [[DIRECTORY_TOTAL, "სერვისი"], [ADJARA_DIRECTORY.length, "კატეგორია"], [1, "პლატფორმა"]]

  return (
    <div id="adjara">
      <div className="relative isolate overflow-hidden rounded-3xl text-white px-6 py-12 md:px-12 md:py-16">
        <img src={DIRECTORY_BANNER.photo} alt={DIRECTORY_BANNER.alt} loading="lazy" className="absolute inset-0 -z-10 w-full h-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
        <span className="absolute bottom-2 right-4 text-[10px] text-white/40">ფოტო: {DIRECTORY_BANNER.credit} · Wikimedia Commons</span>

        <span className="text-green-300 text-xs font-bold uppercase tracking-widest">აჭარა · ბათუმი</span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-2 max-w-2xl leading-tight">500 სერვისი და ბიზნესი აჭარაში</h2>
        <p className="text-white/80 md:text-lg mt-3 max-w-2xl leading-relaxed">
          მრავალფუნქციური სერვისების პლატფორმა, სადაც მომხმარებელი ერთ ადგილას იპოვის ტაქსს, კურიერს, მაღაზიას, ხელოსანს და სხვა მომსახურებებს.
        </p>

        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          {stats.map(([n, label]) => (
            <div key={label}>
              <AnimatedNumber value={n} className="block text-3xl md:text-4xl font-black text-green-300" />
              <span className="text-white/70 text-sm">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-2xl">
          <label htmlFor="tw-dir-search" className="sr-only">სერვისის ძებნა</label>
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              id="tw-dir-search"
              type="text"
              enterKeyHint="search"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="მოძებნე: ტაქსი, ელექტრიკოსი, ქეითერინგი..."
              className="w-full rounded-full bg-white text-slate-900 pl-12 pr-12 py-3.5 text-sm md:text-base shadow-xl focus:outline-none focus:ring-4 focus:ring-green-400/50"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="ძებნის გასუფთავება"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full hover:bg-slate-100 text-slate-500 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setQuery(s)}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-colors cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {q ? (
        <div className="mt-10" data-no-reveal aria-live="polite">
          <p className="text-sm text-slate-500 mb-5">
            „{q}“ — ნაპოვნია <b className="text-slate-900">{hitCount}</b> სერვისი {matches.length} კატეგორიაში
          </p>
          {matches.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-slate-500">ასეთი სერვისი ჯერ არ გვაქვს.</p>
              <button type="button" onClick={onAddBusiness} className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-5 py-2.5 cursor-pointer">
                <Store className="w-4 h-4" /> დაამატე შენი ბიზნესი
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {matches.map(({ c, index, hits }, i) => (
                <div key={c.id} style={{ animationDelay: `${Math.min(i * 50, 400)}ms` }} className={`rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 ${RISE}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <img src={thumb(c.photo)} alt="" className="w-12 h-12 rounded-xl object-cover shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-slate-900 truncate">{c.emoji} {c.name}</h3>
                      <span className="text-xs text-slate-500">{hits.length} / {c.services.length} სერვისი</span>
                    </div>
                    <button type="button" onClick={() => setOpen(index)} className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-green-700 hover:underline cursor-pointer">
                      გახსნა <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {hits.map((s) => (
                      <span key={s} className="text-sm px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
                        <Highlight text={s} query={q} />
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          <div ref={gridRef} data-no-reveal className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {(showAll ? ADJARA_DIRECTORY : ADJARA_DIRECTORY.slice(0, INITIAL)).map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setOpen(i)}
                style={{ animationDelay: `${(i >= INITIAL ? i - INITIAL : i) * 60}ms` }}
                className={`group relative isolate h-48 sm:h-60 overflow-hidden rounded-2xl text-left shadow-sm ring-1 ring-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/25 hover:-translate-y-1 transition-[translate,box-shadow] duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-500 ${
                  inView ? CARD_IN : "motion-safe:opacity-0"
                }`}
              >
                <img src={thumb(c.photo)} alt={c.alt} loading="lazy" className="absolute inset-0 -z-10 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <span className="absolute inset-0 -z-10 bg-linear-to-t from-slate-950/90 via-slate-950/35 to-slate-950/5" />
                <span className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
                  <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/90 shadow-md flex items-center justify-center text-xl transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                    {c.emoji}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-white bg-white/15 backdrop-blur-md border border-white/25 px-2 py-0.5 rounded-full">
                    {c.services.length} სერვისი
                  </span>
                </span>
                <span className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-white">
                  <span className="block font-bold text-sm sm:text-lg leading-tight">{c.name}</span>
                  <span className="hidden sm:block text-xs text-white/70 mt-1 truncate">{c.services.slice(0, 3).join(" · ")}</span>
                  <span className="hidden sm:inline-flex items-center gap-1 mt-2 text-xs font-semibold text-green-300 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    ყველას ნახვა <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </span>
              </button>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
              className="inline-flex items-center gap-2 rounded-full border border-green-600/30 bg-green-50 hover:bg-green-100 text-green-700 font-semibold text-sm px-5 py-2.5 transition-colors cursor-pointer"
            >
              {showAll ? "ნაკლების ჩვენება" : `ყველა კატეგორიის ნახვა (${ADJARA_DIRECTORY.length})`}
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        </>
      )}

      {open !== null && (
        <CategoryDialog
          index={open}
          onIndex={setOpen}
          onClose={() => setOpen(null)}
          onAddBusiness={() => { setOpen(null); onAddBusiness() }}
        />
      )}
    </div>
  )
}

// portal: the page wrapper's enter animation would otherwise trap the fixed overlay in its stacking context
function CategoryDialog({ index, onIndex, onClose, onAddBusiness }: {
  index: number
  onIndex: (i: number) => void
  onClose: () => void
  onAddBusiness: () => void
}) {
  const n = ADJARA_DIRECTORY.length
  const c = ADJARA_DIRECTORY[index]
  const closeRef = useRef<HTMLButtonElement>(null)
  const go = (step: number) => onIndex((index + step + n) % n)

  // lock the page behind (html is the scroller: body overflow would not propagate past html's overflow-x: clip)
  // and hand focus back to whatever opened the dialog
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    const html = document.documentElement
    const prev = html.style.overflow
    html.style.overflow = "hidden"
    closeRef.current?.focus()
    return () => { html.style.overflow = prev; opener?.focus() }
  }, [])

  // re-bound every render so the arrows always step from the current category
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      else if (e.key === "ArrowRight") go(1)
      else if (e.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  })

  return createPortal(
    <div className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-6 font-['Noto_Sans_Georgian',Inter,sans-serif]">
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm motion-safe:animate-[page-enter-fade_0.3s_ease_both]" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="tw-dir-title"
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden rounded-3xl bg-white shadow-2xl motion-safe:animate-[tw-pop_0.45s_cubic-bezier(0.2,0.7,0.2,1)_both]"
      >
        {/* keyed by category so the photo zoom and the title replay on prev / next */}
        <div key={c.id} className="relative isolate h-44 sm:h-60 shrink-0 overflow-hidden text-white">
          <img src={c.photo} alt={c.alt} className="absolute inset-0 -z-10 w-full h-full object-cover motion-safe:animate-[tw-hero-zoom_8s_ease-out_both]" />
          <div className="absolute inset-0 -z-10 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            <span className={`inline-flex items-center gap-2 text-xs font-semibold text-white/80 tabular-nums ${RISE}`}>
              <span className="text-2xl">{c.emoji}</span> {pad(index + 1)} / {pad(n)}
            </span>
            <h3 id="tw-dir-title" style={{ animationDelay: "0.08s" }} className={`text-2xl sm:text-4xl font-extrabold mt-1 leading-tight ${RISE}`}>{c.name}</h3>
            <span style={{ animationDelay: "0.16s" }} className={`block text-sm text-white/75 mt-1 ${RISE}`}>{c.services.length} სერვისი აჭარაში</span>
          </div>
          {/* top-left on phones, where the title block below would cover it */}
          <span className="absolute top-4 left-4 max-w-[55%] sm:max-w-none sm:top-auto sm:left-auto sm:bottom-2 sm:right-3 text-[10px] text-white/50">ფოტო: {c.credit} · Wikimedia Commons</span>
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          <button type="button" onClick={() => go(-1)} aria-label="წინა კატეგორია" className={PHOTO_BTN}><ChevronLeft className="w-4 h-4" /></button>
          <button type="button" onClick={() => go(1)} aria-label="შემდეგი კატეგორია" className={PHOTO_BTN}><ChevronRight className="w-4 h-4" /></button>
          <button type="button" ref={closeRef} onClick={onClose} aria-label="დახურვა" className={PHOTO_BTN}><X className="w-4 h-4" /></button>
        </div>

        <div key={`list-${c.id}`} className="overflow-y-auto p-4 sm:p-6">
          <ul className="grid sm:grid-cols-2 gap-2">
            {c.services.map((s, i) => (
              <li
                key={s}
                style={{ animationDelay: `${Math.min(i * 25, 600)}ms` }}
                className={`flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 hover:border-green-300 hover:bg-green-50 transition-colors ${RISE}`}
              >
                <span className="w-6 h-6 shrink-0 rounded-full bg-green-100 text-green-700 text-[11px] font-bold flex items-center justify-center tabular-nums">{i + 1}</span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="shrink-0 border-t border-slate-100 bg-slate-50 px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm text-slate-600">მუშაობ ამ სფეროში? განათავსე შენი ბიზნესი TravelWord-ზე.</p>
          <button type="button" onClick={onAddBusiness} className="shrink-0 inline-flex items-center gap-2 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-5 py-2.5 shadow-md transition-colors cursor-pointer">
            <Store className="w-4 h-4" /> ბიზნესის დამატება
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
