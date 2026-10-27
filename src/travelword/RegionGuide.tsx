import { useState } from "react"
import { AnimatePresence, MotionConfig, motion } from "framer-motion"
import { ArrowUpRight, Building2, ChevronRight, Landmark, MapPin, Mountain, Route, ShieldAlert } from "lucide-react"
import type { MonumentKind } from "@/data/monuments"
import { monumentsOf } from "./regionDirectory"
import { REGION_GUIDES, osmEmbed, osmLink, type RegionGuide as Guide } from "./regionGuides"
import { REGIONS, type RegionId } from "./regions"
import { MONUMENT_PHOTOS } from "./servicePhotos"

// "რეგიონის გზამკვლევი": the trip planner's region page after the Discover Georgia template — the region's photo and
// administrative centre, its towns and natural sights, its monuments with photos, routes, and a real map. It follows
// the region picked on the regions map, and its own pills pick one too.

export const GUIDE_ID = "guide"

const EASE = [0.22, 1, 0.36, 1] as const
const KIND: Record<MonumentKind, string> = { church: "ტაძარი · მონასტერი", fortress: "ციხე-სიმაგრე", bridge: "ხიდი" }
/** a Commons thumbnail at another width step (originals narrower than 960px pass unchanged) */
const sized = (url: string, width: number) => url.replace(/\/\d+px-/, `/${width}px-`)
const EYEBROW = "text-xs font-bold uppercase tracking-[0.2em] text-gold-700"

export default function RegionGuide({ selected, onSelect }: { selected: RegionId; onSelect: (id: RegionId) => void }) {
  const open = REGIONS.filter((r) => !r.occupied)
  const region = REGIONS.find((r) => r.id === selected) ?? open[0]
  const guide = REGION_GUIDES[region.id]

  return (
    <section id={GUIDE_ID} data-fp-label="რეგიონის გზამკვლევი">
      <div className="container mx-auto px-4 pt-24 pb-20">
        <div className="tw-fp-in flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className={EYEBROW}>რეგიონის გზამკვლევი · {open.length} მხარე</span>
            <h2 className="mt-2 font-heading text-3xl md:text-5xl font-bold text-forest-900 leading-tight">{region.name}</h2>
            <p className="mt-2 text-sm md:text-base text-ink-soft">{region.desc}</p>
          </div>
          <div className="flex gap-2 overflow-x-auto lg:flex-wrap lg:justify-end lg:max-w-xl pb-1 [scrollbar-width:none]">
            {open.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => onSelect(r.id)}
                aria-pressed={r === region}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  r === region ? "bg-forest-900 border-forest-900 text-cream" : "bg-cream border-sand-200 text-ink-soft hover:border-gold-400 hover:text-forest-800"
                }`}
              >
                {r.name}
              </button>
            ))}
          </div>
        </div>

        {region.occupied || !guide ? (
          <p className="tw-fp-in [--i:1] mt-8 flex items-start gap-2 rounded-2xl bg-rose-50 border border-rose-200 p-4 text-sm text-rose-800 leading-relaxed">
            <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0" />
            ოკუპირებული ტერიტორია: მოგზაურობა შეზღუდულია, გზამკვლევი ამ მხარეს არ მოიცავს.
          </p>
        ) : (
          // keyed by region: the old guide fades out, the new one rises in
          <MotionConfig reducedMotion="user">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, ease: EASE }}
                className="tw-fp-in [--i:1]"
              >
                <Overview region={region} guide={guide} monuments={monumentsOf(region).length} />
                <Places guide={guide} />
                <Monuments region={region} />
                <Routes guide={guide} />
                <p className="mt-10 text-[11px] text-ink-mute leading-relaxed">
                  წყაროები: Wikipedia, Wikimedia Commons, OpenStreetMap. კოორდინატები მიახლოებითია — რუკა მიმოხილვისთვისაა, არა ნავიგაციისთვის.
                </p>
              </motion.div>
            </AnimatePresence>
          </MotionConfig>
        )}
      </div>
    </section>
  )
}

type Region = (typeof REGIONS)[number]

function Overview({ region, guide, monuments }: { region: Region; guide: Guide; monuments: number }) {
  const facts: Array<[number, string]> = [
    [guide.towns.length, "ქალაქი და დაბა"],
    [monuments, "ისტორიული ძეგლი"],
    [guide.routes.length, "მარშრუტი"],
  ]
  return (
    <div className="mt-8 grid lg:grid-cols-12 gap-6">
      <div className="lg:col-span-7 flex flex-col gap-4">
        <figure className="relative isolate h-64 sm:h-80 overflow-hidden rounded-3xl ring-1 ring-sand-200">
          <img src={sized(region.photo, 960)} alt={region.alt} className="absolute inset-0 -z-10 w-full h-full object-cover" />
          <span className="absolute inset-0 -z-10 bg-linear-to-t from-forest-950/85 via-forest-950/25 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-cream">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">ადმინისტრაციული ცენტრი</span>
            <span className="mt-1 flex items-center gap-2 font-heading text-2xl sm:text-3xl font-bold">
              <MapPin className="w-5 h-5 text-gold-300 shrink-0" /> {guide.center}
            </span>
            <span className="mt-1 block text-sm text-cream/75">{region.places}</span>
          </figcaption>
        </figure>
        <dl className="grid grid-cols-3 gap-3">
          {facts.map(([n, label]) => (
            <div key={label} className="flex flex-col-reverse rounded-2xl bg-cream ring-1 ring-sand-200 px-4 py-3">
              <dt className="text-[11px] text-ink-soft">{label}</dt>
              <dd className="font-heading text-2xl font-bold text-forest-900">{n}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="lg:col-span-5 min-h-80">
        <MapFrame guide={guide} name={region.name} />
      </div>
    </div>
  )
}

// the map takes the pointer only once asked to, so the wheel keeps moving the page's slides past it
function MapFrame({ guide, name }: { guide: Guide; name: string }) {
  const [live, setLive] = useState(false)
  return (
    <figure className="relative h-full min-h-80 overflow-hidden rounded-3xl ring-1 ring-sand-200 bg-sand-100">
      <iframe
        title={`${name} — რუკა`}
        src={osmEmbed(guide)}
        loading="lazy"
        className={`absolute inset-0 w-full h-full border-0 ${live ? "" : "pointer-events-none"}`}
      />
      {!live && (
        <button
          type="button"
          onClick={() => setLive(true)}
          className="absolute inset-0 flex items-end justify-center pb-5 bg-linear-to-t from-forest-950/40 to-transparent cursor-pointer"
        >
          <span className="rounded-full bg-cream/95 px-4 py-2 text-xs font-bold text-forest-900 shadow-lg">რუკის გააქტიურება — გადაადგილება და ზუმი</span>
        </button>
      )}
      <figcaption className="absolute top-3 left-3 rounded-full bg-cream/95 px-3 py-1.5 text-xs font-semibold text-forest-900 shadow">
        რუკა · {guide.center}
      </figcaption>
      <a
        href={osmLink(guide)} target="_blank" rel="noopener noreferrer"
        className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-forest-900 px-3 py-1.5 text-xs font-semibold text-cream shadow hover:bg-forest-800"
      >
        OpenStreetMap <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </figure>
  )
}

function Places({ guide }: { guide: Guide }) {
  const lists: Array<[typeof Building2, string, string[]]> = [
    [Building2, "ქალაქები და დაბები", guide.towns],
    [Mountain, "ბუნება", guide.nature],
  ]
  return (
    <div className="mt-6 grid md:grid-cols-2 gap-4">
      {lists.map(([Icon, title, items]) => (
        <div key={title} className="rounded-3xl bg-cream ring-1 ring-sand-200 p-5 sm:p-6">
          <h3 className="flex items-center gap-2 font-heading text-xl font-bold text-forest-900">
            <Icon className="w-5 h-5 text-gold-600" /> {title}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {items.map((item) => (
              <li key={item} className="inline-flex items-center gap-2 rounded-full bg-paper ring-1 ring-sand-200 px-3 py-1.5 text-sm text-ink">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

// a monument without a photo of its own gets a plain tile, not the region's photo under its name
function Monuments({ region }: { region: Region }) {
  const monuments = monumentsOf(region)
  return (
    <div className="mt-12">
      <span className={EYEBROW}>ისტორია</span>
      <h3 className="mt-1 flex items-center gap-2 font-heading text-2xl md:text-3xl font-bold text-forest-900">
        <Landmark className="w-6 h-6 text-gold-600" /> ისტორიული ძეგლები
      </h3>
      {monuments.length === 0 ? (
        <p className="mt-3 text-sm text-ink-soft">ამ მხარის ძეგლები მონაცემებში ჯერ არ არის.</p>
      ) : (
        <ul className="mt-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {monuments.map((m) => {
            const p = MONUMENT_PHOTOS[m.en]
            return (
              <li key={m.en}>
                <figure className="group h-full overflow-hidden rounded-2xl bg-cream ring-1 ring-sand-200">
                  <div className="relative h-36 sm:h-44 overflow-hidden">
                    {p ? (
                      <>
                        <img src={sized(p.photo, 500)} alt={m.ka} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <span className="absolute bottom-1.5 left-2.5 right-2.5 text-[9px] text-white/80 truncate drop-shadow">ფოტო: {p.credit}</span>
                      </>
                    ) : (
                      <span className="w-full h-full flex flex-col items-center justify-center gap-2 bg-sand-100 text-sand-400">
                        <Landmark className="w-8 h-8" />
                        <span className="text-[11px] font-semibold text-ink-mute">ფოტო ჯერ არ არის</span>
                      </span>
                    )}
                  </div>
                  <figcaption className="p-4">
                    <span className="block font-heading font-bold text-forest-900 leading-snug">{m.ka}</span>
                    <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.15em] text-gold-700">{KIND[m.kind]}</span>
                  </figcaption>
                </figure>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

function Routes({ guide }: { guide: Guide }) {
  return (
    <div className="mt-12 rounded-3xl bg-sand-100 ring-1 ring-sand-200 p-5 sm:p-8">
      <span className={EYEBROW}>მარშრუტები</span>
      <h3 className="mt-1 flex items-center gap-2 font-heading text-2xl md:text-3xl font-bold text-forest-900">
        <Route className="w-6 h-6 text-gold-600" /> საიდან დავიწყოთ
      </h3>
      <div className="mt-5 grid md:grid-cols-2 gap-4">
        {guide.routes.map((r) => (
          <div key={r.title} className="rounded-2xl bg-cream ring-1 ring-sand-200 p-5">
            <span className="inline-flex rounded-full bg-gold-100 text-gold-700 text-xs font-bold px-2.5 py-1">{r.days}</span>
            <h4 className="mt-3 font-heading text-lg font-bold text-forest-900">{r.title}</h4>
            <ol className="mt-3 flex flex-wrap items-center gap-y-2">
              {r.stops.map((s, i) => (
                <li key={s} className="flex items-center">
                  {i > 0 && <ChevronRight className="w-3.5 h-3.5 mx-1 text-gold-500" aria-hidden="true" />}
                  <span className="rounded-full bg-paper ring-1 ring-sand-200 px-3 py-1 text-sm text-ink">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  )
}
