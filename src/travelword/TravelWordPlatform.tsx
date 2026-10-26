import { useEffect, useLayoutEffect, useRef, useState, type FormEvent, type MouseEvent, type ReactNode, type SVGProps } from "react"
import { createPortal } from "react-dom"
import {
  AlertTriangle, BriefcaseMedical, Car, ChevronDown, Compass, ConciergeBell, Hotel, MapPin, MountainSnow, Phone,
  PhoneCall, Search, Send, Store, User, Users, Utensils, X, type LucideIcon,
} from "lucide-react"
import AdjaraDirectory from "./AdjaraDirectory"
import { ADJARA_DIRECTORY } from "./adjaraServices"
import { CATEGORIES } from "./data"
import type { RegionId } from "./regions"
import RegionsMap from "./RegionsMap"
import Showcase, { type ShowcaseSlide } from "./Showcase"
import { showSlideOf, useFullPage } from "@/lib/useFullPage"
import "./travelword.css"

// TravelWord Georgia — regions, the regions map and service categories (the trip-planner page).
// Noto Sans Georgian is loaded by georgian-heritage.css.

type Category = "stay" | "food" | "transport" | "tours" | "attractions" | "activities"

const HERO_IMG = "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1920&q=80"

const SECTIONS: Array<[id: string, label: string]> = [
  ["regions", "რეგიონები"],
  ["services", "სერვისები"],
  ["adjara", "აჭარის სერვისები"],
  ["safety", "უსაფრთხოება & 112"],
]

const REGION_OPTIONS: Array<[RegionId | "all", string]> = [
  ["all", "ყველა რეგიონი"],
  ["tbilisi", "თბილისი"],
  ["adjara", "აჭარა (ბათუმი, ქობულეთი...)"],
  ["kazbegi", "მცხეთა-მთიანეთი (ყაზბეგი, გუდაური...)"],
  ["imereti", "იმერეთი (ქუთაისი, წყალტუბო...)"],
  ["kakheti", "კახეთი (თელავი, სიღნაღი...)"],
  ["svaneti", "სამეგრელო-ზემო სვანეთი (მესტია...)"],
  ["samtskhe", "სამცხე-ჯავახეთი (ბორჯომი, ბაკურიანი...)"],
  ["racha", "რაჭა-ლეჩხუმი"],
  ["guria", "გურია (ურეკი, ბახმარო...)"],
  ["shida-kartli", "შიდა ქართლი (გორი, უფლისციხე...)"],
  ["kvemo-kartli", "ქვემო ქართლი (დმანისი, ბოლნისი...)"],
]

const SERVICE_OPTIONS: Array<[Category | "all", string]> = [
  ["all", "ყველა სერვისი"],
  ["stay", "სასტუმროები & საცხოვრებელი"],
  ["food", "კვება & რესტორნები"],
  ["transport", "ტრანსპორტი & ტრანსფერი"],
  ["tours", "გიდები & ტურები"],
  ["attractions", "ღირსშესანიშნაობები"],
  ["activities", "აქტივობები & გართობა"],
]

const GUEST_OPTIONS: Array<[string, string]> = [
  ["1", "1 სტუმარი"],
  ["2", "2 სტუმარი"],
  ["3", "3-4 სტუმარი"],
  ["5", "5+ სტუმარი / ჯგუფი"],
]

const POPULAR: Array<[RegionId, string]> = [
  ["tbilisi", "თბილისი"],
  ["adjara", "ბათუმი"],
  ["kazbegi", "ყაზბეგი"],
  ["imereti", "ქუთაისი"],
  ["svaneti", "მესტია"],
]

// category photos come from the destination data's Commons images
const categoryPhoto = (id: string) => CATEGORIES.find((c) => c.id === id)?.image?.src ?? ""

// the safety card's slide links to the 112 section
const SERVICE_CATEGORIES: Array<{
  id: string; short: string; icon: LucideIcon; tone: string
  title: string; desc: string; tags: string[]; photo: string; alt: string
}> = [
  {
    id: "stay", short: "საცხოვრებელი", icon: Hotel, tone: "bg-indigo-50 text-indigo-600", title: "სასტუმროები & საცხოვრებელი",
    desc: "სასტუმროები, საოჯახო სახლები, აპარტამენტები, კოტეჯები, გლემპინგი და ჰოსტელები.",
    tags: ["ბათუმის აპარტამენტები", "ყაზბეგის კოტეჯები", "გლემპინგი"],
    photo: categoryPhoto("guesthouses"), alt: "სიღნაღის ხედი საოჯახო სასტუმროს აივნიდან",
  },
  {
    id: "food", short: "კვება", icon: Utensils, tone: "bg-orange-50 text-orange-600", title: "კვება & ადგილობრივი მენიუები",
    desc: "ქართული ტრადიციული რესტორნები, მარნები, კაფეები, ვეგანური და ჰალალ კვების ობიექტები.",
    tags: ["ღვინის მარნები", "მთის სამზარეულო", "საშუალო ფასი"],
    photo: categoryPhoto("restaurants"), alt: "ქართული სუფრა",
  },
  {
    id: "transport", short: "ტრანსპორტი", icon: Car, tone: "bg-emerald-50 text-emerald-600", title: "ტრანსპორტი & ავტომობილები",
    desc: "აეროპორტის ტრანსფერები, 4x4 ჯიპების ქირაობა, ქალაქის ტაქსი, საქალაქთაშორისო ტრანსპორტი.",
    tags: ["ქუთაისის ტრანსფერი", "4x4 იჯარა", "მძღოლით"],
    photo: categoryPhoto("taxi"), alt: "ტაქსი რუსთაველის გამზირზე, თბილისი",
  },
  {
    id: "tours", short: "გიდები", icon: Compass, tone: "bg-sky-50 text-sky-600", title: "სერთიფიცირებული გიდები",
    desc: "ისტორიული, კულტურული, მთისა და ღვინის ტურების გიდები მრავალენოვანი სერვისით.",
    tags: ["ინგლისურენოვანი", "მთის გიდი", "ინდივიდუალური ტური"],
    photo: categoryPhoto("tours"), alt: "ძველი თბილისის ქუჩები",
  },
  {
    id: "activities", short: "აქტივობები", icon: MountainSnow, tone: "bg-rose-50 text-rose-600", title: "აქტივობები & ექსტრიმი",
    desc: "პარაპლანით ფრენა, ჯომარდობა (რაფტინგი), კვადროციკლები, სათხილამურო ექსკურსიები.",
    tags: ["გუდაურის პარაპლანი", "რიონის ჯომარდობა"],
    photo: categoryPhoto("ski"), alt: "გუდაურის სათხილამურო კურორტი",
  },
  {
    id: "safety", short: "უსაფრთხოება", icon: BriefcaseMedical, tone: "bg-teal-50 text-teal-600", title: "საჭიროებები & უსაფრთხოება",
    desc: "24/7 აფთიაქები, ბანკომატები, eSIM ბარათები, ბარგის შენახვა და გადაუდებელი სამუშაოები.",
    tags: ["112 ცხელი ხაზი", "eSIM", "მთის სამაშველო"],
    photo: categoryPhoto("hiking"), alt: "სადზელეს უღელტეხილის ბილიკი, ყაზბეგი",
  },
]

const BUSINESS_REGIONS = [
  "თბილისი", "აჭარა", "გურია", "იმერეთი", "კახეთი", "მცხეთა-მთიანეთი", "რაჭა-ლეჩხუმი",
  "სამეგრელო-ზემო სვანეთი", "სამცხე-ჯავახეთი", "ქვემო ქართლი", "შიდა ქართლი",
]
// a business joins one of the directory's categories
const BUSINESS_CATEGORIES = ADJARA_DIRECTORY.map((c) => `${c.emoji} ${c.name}`)

// the page is a deck of slides: bring the slide holding `id` on screen, then scroll inside that slide
// when `id` sits further down it (offsets are layout-based, so the slide's transition transform doesn't skew them)
function scrollToSection(id: string) {
  const el = document.getElementById(id)
  const slide = el?.closest<HTMLElement>("[data-fp]")
  if (!el || !slide || !showSlideOf(el) || slide === el) return
  let top = 0
  for (let n: HTMLElement | null = el; n && n !== slide; n = n.offsetParent as HTMLElement | null) top += n.offsetTop
  slide.scrollTo({ top: Math.max(0, top - 80), behavior: "smooth" })
}

function SectionLink({ id, className, children }: { id: string; className?: string; children: ReactNode }) {
  const onClick = (e: MouseEvent) => { e.preventDefault(); scrollToSection(id) }
  return <a href={`#${id}`} onClick={onClick} className={className}>{children}</a>
}

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)
const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)

// portal: the page wrapper's enter animation would otherwise trap the fixed overlay in its stacking context
function Modal({ open, onClose, title, subtitle, wide, children }: {
  open: boolean; onClose: () => void; title: string; subtitle: string; wide?: boolean; children: ReactNode
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  if (!open) return null
  return createPortal(
    <div
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-60 flex items-center justify-center p-4 font-['Noto_Sans_Georgian',Inter,sans-serif]"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        className={`bg-white w-full ${wide ? "max-w-lg max-h-[90vh] overflow-y-auto" : "max-w-md"} rounded-2xl p-6 shadow-2xl relative`}
      >
        <button onClick={onClose} aria-label="დახურვა" className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer">
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-xl font-bold text-slate-900 mb-1">{title}</h3>
        <p className="text-xs text-slate-500 mb-6">{subtitle}</p>
        {children}
      </div>
    </div>,
    document.body,
  )
}

const inputCls = "w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
const fieldLabelCls = "block text-xs font-semibold text-slate-600 mb-1"

const pad = (n: number) => String(n).padStart(2, "0")

// page-change curtain (.twc in travelword.css), one shape per slide; the timings match its keyframes:
// the layers cover the screen by SWAP_MS (the slide swaps then) and are gone by CURTAIN_MS
const CURTAINS = ["blinds", "wave", "swipe", "iris", "diagonal", "split"] as const
const SWAP_MS = 800
const CURTAIN_MS = 1650

function Curtain({ to, back, label }: { to: number; back: boolean; label: string }) {
  return (
    <div className="twc" data-variant={CURTAINS[to % CURTAINS.length]} data-back={back || undefined} aria-hidden="true">
      <div className="twc__layers">
        {[0, 1, 2].map((k) => (
          <div key={k} className="twc__p">{Array.from({ length: 6 }, (_, s) => <i key={s} />)}</div>
        ))}
      </div>
      <div className="twc__type">
        <span className="twc__mask"><span className="twc__eyebrow">TravelWord · Georgia</span></span>
        <span className="twc__mask [--t:1]"><span className="twc__num">{pad(to + 1)}</span></span>
        <span className="twc__mask [--t:2]"><span className="twc__title">{label}</span></span>
        <span className="twc__line" />
      </div>
    </div>
  )
}

// one cell of the hero search bar; the whole cell is the select's label, so any click opens it
function SearchField({ id, label, icon: Icon, value, options, onChange, divider }: {
  id: string; label: string; icon: LucideIcon; value: string; options: Array<[string, string]>
  onChange: (v: string) => void; divider?: boolean
}) {
  return (
    <label
      htmlFor={id}
      className={`relative flex items-center gap-3 px-4 py-3 md:py-2.5 rounded-xl md:rounded-full bg-slate-50 md:bg-transparent hover:bg-slate-100 focus-within:bg-slate-100 focus-within:ring-2 focus-within:ring-green-500 transition-colors cursor-pointer ${
        divider ? "md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-8 md:before:w-px md:before:bg-slate-200" : ""
      }`}
    >
      <Icon className="w-5 h-5 text-green-600 shrink-0" />
      <span className="flex-1 min-w-0">
        <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap truncate">{label}</span>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-transparent text-sm font-semibold text-slate-900 focus:outline-none cursor-pointer"
        >
          {options.map(([v, text]) => <option key={v} value={v}>{text}</option>)}
        </select>
      </span>
      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 pointer-events-none" />
    </label>
  )
}

export default function TravelWordPlatform({ onHome, onLogin }: { onHome: () => void; onLogin: () => void }) {
  const [region, setRegion] = useState<RegionId | "all">("all")
  const [service, setService] = useState<Category | "all">("all")
  const [guests, setGuests] = useState("2")
  const [mapRegion, setMapRegion] = useState<RegionId>("tbilisi")
  const [modal, setModal] = useState<"business" | null>(null)
  const closeModal = () => setModal(null)

  // full-screen slides instead of page scrolling: wheel / keys / swipe move between them, each slide with its own
  // transition (useFullPage + .tw-fp in travelword.css)
  const deckRef = useRef<HTMLElement>(null)
  const fp = useFullPage(deckRef, "trip-planner", () => {})

  // fp.index is where the deck is going; `shown` is the slide on screen. A change runs behind a curtain:
  // it covers the screen, `shown` swaps underneath it, then it leaves. Changes asked for meanwhile run after it.
  const [shown, setShown] = useState(0)
  const [curtain, setCurtain] = useState<{ to: number; back: boolean; seq: number } | null>(null)
  const seq = useRef(0)
  const timers = useRef<number[]>([])
  useEffect(() => {
    if (curtain || fp.index === shown) return
    const to = fp.index
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShown(to); return }
    setCurtain({ to, back: to < shown, seq: ++seq.current })
    timers.current.push(
      window.setTimeout(() => setShown(to), SWAP_MS),
      window.setTimeout(() => setCurtain(null), CURTAIN_MS),
    )
  }, [fp.index, shown, curtain])
  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  // mark the visible slide (data-show) and the one being covered (data-leaving) for the CSS in travelword.css
  useLayoutEffect(() => {
    const deck = deckRef.current
    if (!deck) return
    Array.from(deck.children).forEach((el, i) => {
      el.toggleAttribute("data-show", i === shown)
      el.toggleAttribute("data-leaving", curtain !== null && i === shown && i !== curtain.to)
    })
    deck.style.setProperty("--tw-dir", curtain?.back ? "-1" : "1")
  }, [shown, curtain])

  // the nav sits transparent over the hero photo and turns solid on the other slides
  const onPhoto = shown === 0

  // open a region on the regions map slide
  const showRegion = (id: RegionId) => {
    setRegion(id)
    setMapRegion(id)
    scrollToSection("regions")
  }

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    if (region !== "all") showRegion(region)
    else scrollToSection(service === "all" ? "regions" : "services")
  }

  const categorySlides: ShowcaseSlide[] = SERVICE_CATEGORIES.map((c) => ({
    id: c.id, title: c.title, short: c.short, icon: c.icon, tone: c.tone, photo: c.photo, alt: c.alt, desc: c.desc, chips: c.tags,
    action: c.id === "safety" ? { label: "112 და უსაფრთხოება", onClick: () => scrollToSection("safety") } : undefined,
  }))

  return (
    <div className="bg-slate-50 text-slate-800 font-['Noto_Sans_Georgian',Inter,sans-serif] antialiased">
      {/* Page nav — the site header is hidden here; the logo leads back home */}
      <header className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-300 ${onPhoto ? "" : "bg-white/95 backdrop-blur-md shadow-sm"}`}>
        {/* announcement bar folds away once the page scrolls */}
        <div className={`grid transition-[grid-template-rows] duration-300 ${onPhoto ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden" inert={!onPhoto}>
            <div className="bg-slate-950/40 backdrop-blur-sm text-slate-200 text-xs py-2 px-4 border-b border-white/10">
              <div className="container mx-auto flex flex-wrap justify-between items-center gap-x-4 gap-y-1">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  TravelWord: საქართველოს ყველა რეგიონის ტურისტული სერვისების პლატფორმა
                </span>
                <a href="tel:112" className="text-rose-400 font-bold hover:underline flex items-center gap-1">
                  <PhoneCall className="w-3.5 h-3.5" /> გადაუდებელი დახმარება: 112
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`border-b transition-colors duration-300 ${onPhoto ? "border-white/10" : "border-slate-100"}`}>
          <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-3">
            <button onClick={onHome} title="მთავარი გვერდი" className="flex items-center gap-2 group cursor-pointer text-left">
              <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-green-600 to-emerald-400 flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
                TW
              </div>
              <div className="flex flex-col">
                <span className={`font-black text-xl tracking-tight leading-tight transition-colors ${onPhoto ? "text-white" : "text-slate-900"}`}>
                  Travel<span className={onPhoto ? "text-green-400" : "text-green-600"}>Word</span>
                </span>
                <span className={`text-[10px] tracking-widest uppercase font-semibold ${onPhoto ? "text-white/60" : "text-slate-400"}`}>Georgia</span>
              </div>
            </button>

            <nav className={`hidden md:flex items-center gap-6 text-sm font-medium transition-colors ${onPhoto ? "text-white/85" : "text-slate-600"}`}>
              {SECTIONS.map(([id, label]) => (
                <SectionLink key={id} id={id} className={`transition-colors ${onPhoto ? "hover:text-white" : "hover:text-green-600"}`}>{label}</SectionLink>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setModal("business")}
                className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border transition-colors cursor-pointer ${
                  onPhoto ? "border-white/30 text-white hover:bg-white/10" : "border-slate-300 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <Store className={`w-3.5 h-3.5 ${onPhoto ? "text-green-400" : "text-green-600"}`} /> ბიზნესის დამატება
              </button>
              <button
                onClick={onLogin}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 shadow-xs transition-all hover:shadow-sm cursor-pointer"
              >
                <User className="w-3.5 h-3.5" /> შესვლა
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* every child of the deck is one full-screen slide */}
      <main ref={deckRef} className="tw-fp tw-fp--full" data-no-reveal>
        {/* Hero — full-screen photo with the search */}
        <section className="relative isolate min-h-svh flex flex-col overflow-hidden text-white" data-fp-label="მთავარი">
          <div className="absolute inset-0 -z-10 overflow-hidden" data-no-reveal aria-hidden="true">
            <img src={HERO_IMG} alt="" fetchPriority="high" className="w-full h-full object-cover motion-safe:animate-[tw-hero-zoom_16s_ease-out_both]" />
            <div className="absolute inset-0 bg-linear-to-b from-slate-950/75 via-slate-950/40 to-slate-950/85" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(2,6,23,0.5)_100%)]" />
          </div>

          <div className="flex-1 flex items-center px-4 pt-36 pb-28 md:pt-40">
            <div className="container mx-auto max-w-5xl text-center">
              <span className="tw-fp-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-emerald-100 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/20">
                <MapPin className="w-3.5 h-3.5 text-green-400" /> საქართველოს ტურისტული პლატფორმა
              </span>
              <h1 className="tw-fp-in [--i:1] text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-balance drop-shadow-lg">
                აღმოაჩინე საქართველო,{" "}
                <span className="bg-linear-to-r from-green-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent">რეალური ფასებით</span>
              </h1>
              <p className="tw-fp-in [--i:2] text-base md:text-xl text-slate-200/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed text-pretty">
                სასტუმროები, ტრანსპორტი, გიდები, რესტორნები და აქტივობები საქართველოს ყველა რეგიონში — ერთ სივრცეში.
              </p>

              <form
                onSubmit={handleSearch}
                className="tw-fp-in [--i:3] max-w-4xl mx-auto bg-white/95 backdrop-blur-xl text-slate-800 text-left rounded-2xl md:rounded-full shadow-2xl shadow-slate-950/40 ring-1 ring-white/50 p-2 grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_auto] md:items-center gap-1.5 md:gap-0"
              >
                <SearchField
                  id="tw-region" label="მიმართულება / რეგიონი" icon={MapPin}
                  value={region} options={REGION_OPTIONS} onChange={(v) => setRegion(v as RegionId | "all")}
                />
                <SearchField
                  id="tw-service" label="სერვისის ტიპი" icon={ConciergeBell} divider
                  value={service} options={SERVICE_OPTIONS} onChange={(v) => setService(v as Category | "all")}
                />
                <SearchField
                  id="tw-guests" label="სტუმრები" icon={Users} divider
                  value={guests} options={GUEST_OPTIONS} onChange={setGuests}
                />
                <button
                  type="submit"
                  className="md:ml-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-7 rounded-xl md:rounded-full shadow-lg shadow-green-600/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-4 h-4" /> ძებნა
                </button>
              </form>

              <div className="tw-fp-in [--i:4] mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
                <span className="text-white/70 mr-1">პოპულარული:</span>
                {POPULAR.map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => showRegion(id)}
                    className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white/90 hover:text-white transition-colors cursor-pointer"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <SectionLink
            id="regions"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors text-[11px] tracking-widest uppercase"
          >
            გადაახვიე
            <ChevronDown className="w-5 h-5 motion-safe:animate-bounce" />
          </SectionLink>
        </section>

        {/* Regions map — every region on an outline map of Georgia, with the picked one's services beside it */}
        <RegionsMap
          selected={mapRegion} onSelect={setMapRegion}
          onAdjara={() => scrollToSection("adjara")} onAddBusiness={() => setModal("business")}
        />

        {/* Service categories — full-screen slideshow with the grid it opens */}
        <Showcase
          id="services"
          navLabel="სერვისები"
          eyebrow={`${SERVICE_CATEGORIES.length} კატეგორია · ერთ სივრცეში`}
          title="მომსახურების კატეგორიები"
          subtitle="ყველაფერი, რაც გჭირდებათ კომფორტული და უსაფრთხო მოგზაურობისთვის"
          allLabel="ყველა კატეგორიის ნახვა"
          slides={categorySlides}
        />

        {/* 500 services and businesses in Adjara */}
        <div className="pt-24 pb-16" data-fp-label="აჭარის სერვისები">
          <div className="tw-fp-in container mx-auto px-4">
            <AdjaraDirectory onAddBusiness={() => setModal("business")} />
          </div>
        </div>

        {/* last slide: 112 and the footer */}
        <div className="flex flex-col" data-fp-label="112 და კონტაქტი">
          <section id="safety" className="flex-1 flex items-center pt-24 pb-12 bg-rose-50">
            <div className="container mx-auto px-4">
              <div className="tw-fp-in max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-xs border border-rose-200/80 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-rose-600 text-white flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <div className="grow text-center md:text-left">
                  <h3 className="text-xl font-bold text-slate-900">უსაფრთხოება და საგანგებო სამსახურები</h3>
                  <p className="text-xs md:text-sm text-slate-600 mt-1">
                    საქართველოში მოგზაურობისას ნებისმიერი საგანგებო სიტუაციის დროს (სასწრაფო სამედიცინო დახმარება, პოლიცია, სამაშველო, მთის სამაშველო) დარეკეთ ერთიან ნომერზე:
                  </p>
                </div>
                <div className="shrink-0 text-center">
                  <a href="tel:112" className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-2xl font-black px-6 py-3 rounded-xl shadow-md transition-all">
                    <Phone className="w-6 h-6" /> 112
                  </a>
                  <span className="block text-[10px] text-slate-400 mt-1">უფასო / 24-საათიანი</span>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="tw-fp-in [--i:1] bg-slate-900 text-slate-400 text-xs py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center text-white font-bold text-sm">TW</div>
                  <span className="font-bold text-lg text-white">TravelWord</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  საქართველოს ტურისტული სერვისების, რეალური ფასებისა და მარშრუტების ერთიანი ციფრული პლატფორმა.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-3 uppercase text-[11px] tracking-wider">რეგიონები</h4>
                <ul className="space-y-2">
                  {["თბილისი & შემოგარენი", "აჭარა (ბათუმი)", "მცხეთა-მთიანეთი (ყაზბეგი)", "იმერეთი (ქუთაისი)"].map((label) => (
                    <li key={label}><SectionLink id="regions" className="hover:text-white transition-colors">{label}</SectionLink></li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-3 uppercase text-[11px] tracking-wider">კატეგორიები</h4>
                <ul className="space-y-2">
                  {["სასტუმროები & ბინები", "რესტორნები & მენიუები", "ავტომობილები & ტრანსფერი", "გიდები & ექსკურსიები"].map((label) => (
                    <li key={label}><SectionLink id="services" className="hover:text-white transition-colors">{label}</SectionLink></li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-3 uppercase text-[11px] tracking-wider">კონტაქტი & მხარდაჭერა</h4>
                <p className="mb-2">info@travelword.ge</p>
                <p className="mb-4">+995 32 2 00 00 00</p>
                <div className="flex gap-3">
                  <a href="#" aria-label="Facebook" className="hover:text-white"><FacebookIcon className="w-4 h-4" /></a>
                  <a href="#" aria-label="Instagram" className="hover:text-white"><InstagramIcon className="w-4 h-4" /></a>
                  <a href="#" aria-label="Telegram" className="hover:text-white"><Send className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4 mt-8 pt-6 border-t border-slate-800 text-center text-slate-500">
              &copy; 2026 TravelWord Georgia. ყველა უფლება დაცულია.
            </div>
          </footer>
        </div>
      </main>

      {fp.count > 1 && (
        <nav
          aria-label="გვერდის ნაწილები"
          className="fixed right-1.5 sm:right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2 sm:gap-2.5 rounded-full bg-slate-900/40 backdrop-blur-md px-1 sm:px-1.5 py-3"
        >
          <span className="hidden sm:block text-[10px] font-bold text-white tabular-nums mb-1">{pad(fp.index + 1)}</span>
          {fp.labels.map((label, i) => (
            <button
              key={i}
              type="button"
              onClick={() => fp.goTo(i)}
              aria-label={label}
              aria-current={i === fp.index ? "step" : undefined}
              className={`group relative w-1.5 sm:w-2 rounded-full transition-all duration-500 cursor-pointer ${
                i === fp.index ? "h-6 sm:h-7 bg-green-400" : "h-1.5 sm:h-2 bg-white/60 hover:bg-white"
              }`}
            >
              <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-full bg-slate-900/85 px-3 py-1 text-xs text-white opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 hidden sm:block">
                {label}
              </span>
            </button>
          ))}
        </nav>
      )}

      {curtain && <Curtain key={curtain.seq} to={curtain.to} back={curtain.back} label={fp.labels[curtain.to] ?? ""} />}

      <Modal
        open={modal === "business"} onClose={closeModal} wide
        title="ბიზნესის / სერვისის დამატება" subtitle="განათავსეთ თქვენი მომსახურება TravelWord-ის პლატფორმაზე"
      >
        <form
          onSubmit={(e) => { e.preventDefault(); alert("მადლობა! თქვენი განაცხადი მიღებულია და ადმინისტრატორი გადაამოწმებს მონაცემებს."); closeModal() }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="tw-biz-name" className={fieldLabelCls}>ობიექტის / სერვისის დასახელება</label>
            <input id="tw-biz-name" type="text" required className={inputCls} placeholder="მაგ: სასტუმრო ყაზბეგი ვიუ" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="tw-biz-region" className={fieldLabelCls}>რეგიონი</label>
              <select id="tw-biz-region" className={inputCls}>
                {BUSINESS_REGIONS.map((r) => <option key={r}>{r}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="tw-biz-category" className={fieldLabelCls}>კატეგორია</label>
              <select id="tw-biz-category" className={inputCls}>
                {BUSINESS_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="tw-biz-price" className={fieldLabelCls}>სასტარტო ფასი (GEL)</label>
            <input id="tw-biz-price" type="number" placeholder="მაგ: 50" required className={inputCls} />
          </div>
          <div>
            <label htmlFor="tw-biz-phone" className={fieldLabelCls}>საკონტაქტო ტელეფონი</label>
            <input id="tw-biz-phone" type="tel" placeholder="+995 5XX XX XX XX" required className={inputCls} />
          </div>
          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-lg text-sm transition-colors cursor-pointer">
            განაცხადის გაგზავნა
          </button>
        </form>
      </Modal>
    </div>
  )
}
