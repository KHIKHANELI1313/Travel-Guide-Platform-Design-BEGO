import { useEffect, useRef, useState, type ReactNode } from "react"
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, MapPin, Pause, Play, type LucideIcon } from "lucide-react"

// Full-screen slideshow used by the trip planner's service categories: one slide at a time,
// auto-advancing, plus a grid of every slide that the "ყველა ... ნახვა" button opens below it.
// The tw-* keyframes live in index.css; with reduced motion nothing animates and slides only change by hand.

export interface ShowcaseSlide {
  id: string
  title: string
  /** shorter name for the strip under the slide */
  short?: string
  icon: LucideIcon
  tone: string
  /** Wikimedia Commons thumbnail at 1280px (the grid swaps in the 960px step) */
  photo: string
  alt: string
  desc: string
  /** places line, shown with a pin */
  places?: string
  /** examples shown as chips on the slide */
  chips?: string[]
  badge?: { text: string; alert?: boolean }
  /** greyed out and without an action (occupied territory) */
  muted?: boolean
  action?: { label: string; onClick: () => void }
}

const pad = (n: number) => String(n).padStart(2, "0")
const RISE = "motion-safe:animate-[tw-rise_0.9s_cubic-bezier(0.2,0.7,0.2,1)_backwards]"
// backwards fill so the hover lift still works once the entrance has played
const CARD_IN = "motion-safe:animate-[tw-card-in_0.7s_cubic-bezier(0.2,0.7,0.2,1)_backwards]"
const GLASS_BTN = "rounded-full border border-white/25 bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors cursor-pointer"

const badgeCls = (alert?: boolean) =>
  alert ? "text-rose-100 bg-rose-500/25 border-rose-300/40" : "text-white bg-white/15 border-white/25 backdrop-blur-md"

export default function Showcase({ id, navLabel, eyebrow, title, subtitle, allLabel, slides }: {
  id: string
  /** short name for the page's slide-deck dots */
  navLabel?: string
  eyebrow: string
  title: string
  subtitle: string
  /** "ყველა რეგიონის ნახვა" — the count is appended */
  allLabel: string
  slides: ShowcaseSlide[]
}) {
  const n = slides.length
  const gridId = `${id}-grid`
  const [active, setActive] = useState(0)
  const [leaving, setLeaving] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)
  const [hover, setHover] = useState(false)
  const [inView, setInView] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const stageRef = useRef<HTMLDivElement>(null)
  const stripRef = useRef<HTMLDivElement>(null)
  const touchX = useRef<number | null>(null)

  const go = (i: number) => {
    const next = (i + n) % n
    if (next === active) return
    setLeaving(active)
    setActive(next)
  }

  // autoplay only while the slideshow is on screen; inside a page slide deck every slide overlaps the screen,
  // so there it also waits for its slide to be the visible one (data-show)
  const [onSlide, setOnSlide] = useState(true)
  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.5 })
    io.observe(el)
    const slide = el.closest<HTMLElement>("[data-fp]")
    const mo = slide && new MutationObserver(() => setOnSlide(slide.hasAttribute("data-show")))
    if (slide && mo) {
      setOnSlide(slide.hasAttribute("data-show"))
      mo.observe(slide, { attributes: true, attributeFilter: ["data-show"] })
    }
    return () => { io.disconnect(); mo?.disconnect() }
  }, [])

  // keep the current slide in sight in the strip (it scrolls sideways on phones)
  useEffect(() => {
    const strip = stripRef.current
    const item = strip?.children[active] as HTMLElement | undefined
    if (!strip || !item) return
    strip.scrollTo({ left: item.offsetLeft - (strip.clientWidth - item.clientWidth) / 2, behavior: "smooth" })
  }, [active])

  const toggleAll = () => {
    setShowAll(!showAll)
    if (!showAll) requestAnimationFrame(() => document.getElementById(gridId)?.scrollIntoView({ behavior: "smooth", block: "start" }))
  }
  const closeAll = () => {
    setShowAll(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const slide = slides[active]
  const Icon = slide.icon
  const running = inView && onSlide && !paused && !hover

  return (
    <section id={id} className="bg-white" data-no-reveal data-fp-label={navLabel}>
      <div
        ref={stageRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={title}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(active + 1)
          else if (e.key === "ArrowLeft") go(active - 1)
        }}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX }}
        onTouchEnd={(e) => {
          const start = touchX.current
          touchX.current = null
          if (start === null) return
          const dx = e.changedTouches[0].clientX - start
          if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1))
        }}
        className="relative isolate h-svh min-h-[640px] overflow-hidden bg-slate-950 text-white"
      >
        {/* photos: only the current slide, the one fading out under it and the next one (preloading) are mounted */}
        <div className="absolute inset-0 -z-10">
          {slides.map((s, i) => {
            const isActive = i === active
            if (!isActive && i !== leaving && i !== (active + 1) % n) return null
            return (
              <div
                key={s.id}
                className={`absolute inset-0 ${
                  isActive ? "z-10 motion-safe:animate-[tw-slide-in_1.2s_cubic-bezier(0.2,0.7,0.2,1)_both]" : i === leaving ? "" : "opacity-0"
                }`}
                onAnimationEnd={isActive ? (e) => { if (e.animationName === "tw-slide-in") setLeaving(null) } : undefined}
              >
                <img
                  src={s.photo}
                  alt={isActive ? s.alt : ""}
                  className={`w-full h-full object-cover ${s.muted ? "grayscale-[40%]" : ""} ${
                    isActive ? "motion-safe:animate-[tw-hero-zoom_9s_ease-out_both]" : ""
                  }`}
                />
              </div>
            )
          })}
        </div>
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-slate-950/85 via-slate-950/45 to-slate-950/10" />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-slate-950/90 via-transparent to-slate-950/60" />

        <div className="h-full container mx-auto px-4 flex flex-col pt-24 pb-6">
          {/* tw-fp-in: blocks that rise in when the page deck brings this section on screen */}
          <div className="tw-fp-in flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-green-300 text-xs font-bold uppercase tracking-widest">{eyebrow}</span>
              <h2 className="text-2xl md:text-3xl font-extrabold mt-1">{title}</h2>
              <p className="hidden sm:block text-white/70 text-sm md:text-base mt-1">{subtitle}</p>
            </div>
            <button
              type="button"
              onClick={toggleAll}
              aria-expanded={showAll}
              aria-controls={gridId}
              className={`self-start md:self-auto shrink-0 inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 ${GLASS_BTN}`}
            >
              {showAll ? "ნაკლების ჩვენება" : `${allLabel} (${n})`}
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* keyed by slide, so the text entrance replays every time */}
          <div className="tw-fp-in [--i:1] flex-1 flex items-center py-6" aria-live={running ? "off" : "polite"}>
            <div key={slide.id} className="max-w-3xl min-w-0">
              <div className={`flex flex-wrap items-center gap-3 mb-5 ${RISE}`}>
                <span className={`w-11 h-11 rounded-xl ${slide.tone} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-5 h-5" />
                </span>
                <span className="text-sm tracking-[0.2em] text-white/60 tabular-nums">
                  <b className="text-white text-lg font-bold">{pad(active + 1)}</b> / {pad(n)}
                </span>
                {slide.badge && (
                  <span className={`text-[11px] font-semibold border px-2.5 py-1 rounded-full ${badgeCls(slide.badge.alert)}`}>{slide.badge.text}</span>
                )}
              </div>
              {/* the clip hides the title until it rises in; the padding keeps Georgian descenders (ლ, ფ, ქ) inside it */}
              <div className="overflow-hidden pt-1 pb-3">
                <h3 className="text-[2rem] sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.2] text-balance break-words motion-safe:animate-[tw-rise-full_1s_cubic-bezier(0.2,0.7,0.2,1)_0.1s_backwards]">
                  {slide.title}
                </h3>
              </div>
              {slide.places && (
                <p style={{ animationDelay: "0.25s" }} className={`flex items-center gap-1.5 text-sm md:text-base text-white/75 mt-4 ${RISE}`}>
                  <MapPin className="w-4 h-4 text-green-300 shrink-0" /> {slide.places}
                </p>
              )}
              <p style={{ animationDelay: "0.35s" }} className={`text-lg md:text-2xl text-white/90 font-light leading-relaxed mt-3 max-w-xl text-pretty ${RISE}`}>
                {slide.desc}
              </p>
              {slide.chips && (
                <div style={{ animationDelay: "0.4s" }} className={`flex flex-wrap gap-2 mt-5 ${RISE}`}>
                  {slide.chips.map((c) => (
                    <span key={c} className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">{c}</span>
                  ))}
                </div>
              )}
              {slide.action && !slide.muted && (
                <button
                  type="button"
                  onClick={slide.action.onClick}
                  style={{ animationDelay: "0.5s" }}
                  className={`group mt-8 inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-green-950/40 transition-colors cursor-pointer ${RISE}`}
                >
                  {slide.action.label} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              )}
            </div>
          </div>

          {/* controls and the strip pause the autoplay while the pointer is over them */}
          <div className="tw-fp-in [--i:2]" onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
            <div className="flex items-center gap-2 mb-4">
              <button type="button" onClick={() => go(active - 1)} aria-label="წინა" className={`w-11 h-11 flex items-center justify-center ${GLASS_BTN}`}>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "გაგრძელება" : "პაუზა"} className={`w-11 h-11 flex items-center justify-center motion-reduce:hidden ${GLASS_BTN}`}>
                {paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </button>
              <button type="button" onClick={() => go(active + 1)} aria-label="შემდეგი" className={`w-11 h-11 flex items-center justify-center ${GLASS_BTN}`}>
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="ml-auto text-[10px] text-white/40">ფოტოები: Wikimedia Commons</span>
            </div>
            <div ref={stripRef} className="relative flex gap-3 overflow-x-auto snap-x [scrollbar-width:none]">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => go(i)}
                  title={s.title}
                  aria-label={`${s.title} (${i + 1} / ${n})`}
                  aria-current={i === active ? "true" : undefined}
                  className={`relative snap-start shrink-0 w-28 md:w-auto md:flex-1 md:min-w-0 pt-3 text-left cursor-pointer transition-opacity duration-300 ${
                    i === active ? "opacity-100" : "opacity-50 hover:opacity-90"
                  }`}
                >
                  <span className="absolute top-0 inset-x-0 h-0.5 rounded-full bg-white/20 overflow-hidden">
                    {i === active ? (
                      // 7s per slide: when the bar fills up, the next slide comes in
                      <span
                        onAnimationEnd={() => go(active + 1)}
                        style={{ animationPlayState: running ? "running" : "paused" }}
                        className="absolute inset-0 origin-left bg-green-400 motion-safe:animate-[tw-progress_7s_linear_both] motion-reduce:hidden"
                      />
                    ) : i < active && <span className="absolute inset-0 bg-white/60" />}
                  </span>
                  <span className="block text-[11px] text-white/60 tabular-nums">{pad(i + 1)}</span>
                  <span className="block text-xs md:text-sm font-semibold truncate">{s.short ?? s.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showAll && (
        <div id={gridId} className="container mx-auto px-4 py-14 scroll-mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {slides.map((s, i) => <ShowcaseCard key={s.id} slide={s} delay={i * 60} />)}
          </div>
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={closeAll}
              className="inline-flex items-center gap-2 rounded-full border border-green-600/30 bg-green-50 hover:bg-green-100 text-green-700 font-semibold text-sm px-5 py-2.5 transition-colors cursor-pointer"
            >
              ნაკლების ჩვენება <ChevronDown className="w-4 h-4 rotate-180" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

function ShowcaseCard({ slide, delay }: { slide: ShowcaseSlide; delay: number }) {
  const { icon: Icon, muted, action } = slide
  const actionable = action && !muted
  const body: ReactNode = (
    <>
      <img
        src={slide.photo.replace("/1280px-", "/960px-")}
        alt={slide.alt}
        loading="lazy"
        className={`absolute inset-0 -z-10 w-full h-full object-cover transition-transform duration-700 ease-out ${muted ? "grayscale-[60%]" : "group-hover:scale-110"}`}
      />
      <span className="absolute inset-0 -z-10 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-slate-950/10" />

      <span className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
        <span className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${slide.tone} flex items-center justify-center shadow-md transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
        </span>
        {slide.badge && (
          <span className={`text-[10px] sm:text-[11px] font-semibold border px-2 py-0.5 rounded-full ${badgeCls(slide.badge.alert)}`}>{slide.badge.text}</span>
        )}
      </span>

      <span className="absolute inset-x-0 bottom-0 p-3 sm:p-5 text-white">
        <span className="block text-base sm:text-xl font-bold leading-tight">{slide.title}</span>
        {(slide.places || slide.chips) && (
          <span className="flex items-center gap-1 text-[11px] sm:text-xs text-white/75 mt-1 truncate">
            {slide.places ? <><MapPin className="w-3 h-3 shrink-0" /> {slide.places}</> : slide.chips?.join(" · ")}
          </span>
        )}
        <span className="hidden sm:block text-sm text-white/85 mt-2 leading-snug line-clamp-2">{slide.desc}</span>
        {actionable && (
          <span className="hidden sm:inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-green-300 group-hover:text-green-200">
            {action.label} <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        )}
      </span>
    </>
  )
  const cls = `group relative isolate h-56 sm:h-72 overflow-hidden rounded-2xl text-left shadow-sm ring-1 ring-slate-900/5 ${CARD_IN}`

  if (!actionable) {
    return <div style={{ animationDelay: `${delay}ms` }} className={cls}>{body}</div>
  }
  return (
    <button
      type="button"
      onClick={action.onClick}
      style={{ animationDelay: `${delay}ms` }}
      className={`${cls} hover:shadow-2xl hover:shadow-slate-900/25 hover:-translate-y-1 transition-[translate,box-shadow] duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-500`}
    >
      {body}
    </button>
  )
}
