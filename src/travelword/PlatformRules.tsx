import { useEffect, useMemo, useRef, useState } from "react"
import { ArrowLeft, ArrowRight, Check, Mail, MessageSquareWarning, Scale, Search, X } from "lucide-react"
import AnimatedNumber from "./AnimatedNumber"
import { GENERAL_RULES, RULE_GROUPS, SPHERES, type RuleGroup, type Sphere } from "./codeOfConduct"

// The trip planner's rules slide: the platform's code of conduct (codeOfConduct.ts) — a banner with counters, the ten
// general rules, then the special rules of 100 fields one group at a time, with a search over all of them. The section
// is the slide and scrolls itself; the group bar sticks under the page nav (beside the list on wide screens).

export const RULES_ID = "rules"

const RISE = "motion-safe:animate-[tw-rise_0.6s_cubic-bezier(0.2,0.7,0.2,1)_backwards]"
const RULE_COUNT = SPHERES.reduce((n, s) => n + s.rules.length, 0)
const REPORT_MAIL = `mailto:info@travelword.ge?subject=${encodeURIComponent("წესის დარღვევა")}`

const pad = (n: number) => String(n).padStart(2, "0")
const wide = () => window.matchMedia("(min-width: 1024px)").matches

// the slide scrolls itself: bring `el` up to `offset` px below the top of the screen
function scrollWithin(el: HTMLElement, offset: number) {
  el.closest("[data-fp]")?.scrollBy({ top: el.getBoundingClientRect().top - offset, behavior: "smooth" })
}

/** a group's spheres that match `q` (lower-cased): by number, name or rule text — all of them when the group's title does */
function hitsOf(g: RuleGroup, q: string) {
  if (!q || g.title.toLowerCase().includes(q)) return g.spheres
  return g.spheres.filter((s) =>
    String(s.n) === q || s.name.toLowerCase().includes(q) || s.rules.some((r) => r.toLowerCase().includes(q)))
}

function Highlight({ text, query }: { text: string; query: string }) {
  const i = query ? text.toLowerCase().indexOf(query) : -1
  if (i < 0) return <>{text}</>
  return (
    <>
      {text.slice(0, i)}
      <mark className="bg-gold-200/80 text-inherit rounded px-0.5">{text.slice(i, i + query.length)}</mark>
      {text.slice(i + query.length)}
    </>
  )
}

function PartHeading({ id, numeral, title, note }: { id: string; numeral: string; title: string; note: string }) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <span className="font-heading text-5xl md:text-6xl font-bold text-gold-500/80 leading-none" aria-hidden="true">{numeral}</span>
      <div className="pt-1">
        <h3 id={id} className="font-heading text-2xl md:text-3xl font-bold text-forest-900 leading-tight">{title}</h3>
        <p className="text-sm text-ink-soft mt-1">{note}</p>
      </div>
    </div>
  )
}

function SphereCard({ sphere: s, query }: { sphere: Sphere; query: string }) {
  return (
    <article className="h-full rounded-2xl border border-sand-200 bg-cream p-5 shadow-sm shadow-forest-950/5 hover:border-gold-300 transition-colors">
      <header className="flex items-center gap-3">
        <span className="shrink-0 w-10 h-10 rounded-xl bg-forest-900 text-gold-300 font-heading font-bold text-sm flex items-center justify-center tabular-nums" aria-hidden="true">
          {s.n}
        </span>
        <h5 className="font-heading text-lg font-bold text-forest-900 leading-snug"><Highlight text={s.name} query={query} /></h5>
      </header>
      <ul className="mt-3 space-y-2">
        {s.rules.map((r) => (
          <li key={r} className="flex gap-2 text-sm text-ink-soft leading-relaxed">
            <Check className="w-4 h-4 mt-0.5 shrink-0 text-gold-600" aria-hidden="true" />
            <span><Highlight text={r} query={query} /></span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function PlatformRules() {
  const [group, setGroup] = useState(0)
  const [query, setQuery] = useState("")
  const barRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const q = query.trim().toLowerCase()
  const hits = useMemo(() => RULE_GROUPS.map((g) => hitsOf(g, q)), [q])
  // a search runs over every group; otherwise the picked one shows
  const shown = q ? RULE_GROUPS.map((g, i) => ({ g, spheres: hits[i] })).filter((x) => x.spheres.length > 0)
    : [{ g: RULE_GROUPS[group], spheres: RULE_GROUPS[group].spheres }]
  const hitCount = shown.reduce((n, x) => n + x.spheres.length, 0)

  // when the list's top has scrolled up under the bar (or the nav, on wide screens), bring it back into view
  const toListTop = () => {
    const list = listRef.current, bar = barRef.current
    if (!list || !bar) return
    const offset = wide() ? 88 : bar.getBoundingClientRect().bottom + 12
    if (list.getBoundingClientRect().top < offset) scrollWithin(list, offset)
  }
  const pick = (i: number) => { setGroup(i); setQuery(""); toListTop() }
  const search = (v: string) => { setQuery(v); toListTop() }
  const jump = (id: string) => { const el = document.getElementById(id); if (el) scrollWithin(el, 88) }

  // on phones the chip row scrolls sideways: keep the picked group's chip in it, also when the prev / next buttons pick
  const chipsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const row = chipsRef.current
    const chip = row?.children[group] as HTMLElement | undefined
    if (row && chip && row.scrollWidth > row.clientWidth) row.scrollTo({ left: chip.offsetLeft - row.offsetLeft - 16, behavior: "smooth" })
  }, [group])

  const stats: Array<[number, string]> = [[GENERAL_RULES.length, "ზოგადი წესი"], [SPHERES.length, "სფერო"], [RULE_COUNT, "სპეციალური წესი"]]

  return (
    <section id={RULES_ID} data-fp-label="პლატფორმის წესები">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* banner */}
          <header className="tw-fp-in relative isolate overflow-hidden rounded-3xl bg-forest-900 text-cream px-6 py-10 md:px-12 md:py-14 shadow-xl shadow-forest-950/15">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_0%,rgba(201,161,90,0.25),transparent_55%)]" />
            <Scale className="absolute -right-8 -bottom-10 -z-10 w-56 h-56 md:w-80 md:h-80 text-gold-300/10" strokeWidth={1.25} aria-hidden="true" />

            <span className="text-gold-300 text-xs font-bold uppercase tracking-[0.2em]">TravelWord · ქცევის კოდექსი</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 leading-tight">პლატფორმის წესები</h2>
            <p className="text-cream/80 md:text-lg mt-3 max-w-2xl leading-relaxed">
              ეს წესები ვრცელდება პლატფორმის ყველა მომხმარებელზე და ბიზნესზე: ჯერ ზოგადი წესები, რომლებიც ყველა სფეროს ეხება,
              შემდეგ კი თითოეული სფეროს სპეციალური ქცევის წესები.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {stats.map(([n, label]) => (
                <div key={label}>
                  <AnimatedNumber value={n} className="block text-3xl md:text-4xl font-black text-gold-300" />
                  <span className="text-cream/70 text-sm">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-sm">
              {([["tw-rules-general", "I. ზოგადი წესები"], ["tw-rules-special", "II. სპეციალური წესები"]] as const).map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); jump(id) }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                >
                  {label} <ArrowRight className="w-4 h-4 rotate-90" />
                </a>
              ))}
            </div>
          </header>

          {/* I. general rules */}
          <section aria-labelledby="tw-rules-general" className="tw-fp-in [--i:1] mt-14">
            <PartHeading
              id="tw-rules-general" numeral="I" title="ზოგადი წესები"
              note="ყველა 100 კატეგორიისთვის — ვრცელდება პლატფორმის ყველა მომხმარებელზე და ბიზნესზე."
            />
            <ol className="grid sm:grid-cols-2 xl:grid-cols-5 gap-4">
              {GENERAL_RULES.map((r, i) => (
                <li key={r.title} className="rounded-2xl border border-sand-200 bg-cream p-5 shadow-sm shadow-forest-950/5">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-forest-900 text-gold-300 flex items-center justify-center">
                      <r.icon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="font-heading text-2xl font-bold text-gold-500/70 tabular-nums" aria-hidden="true">{pad(i + 1)}</span>
                  </div>
                  <h4 className="font-heading font-bold text-forest-900 mt-4 leading-snug">{r.title}</h4>
                  <p className="text-sm text-ink-soft mt-1.5 leading-relaxed">{r.text}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* II. special rules by field */}
          <section aria-labelledby="tw-rules-special" className="mt-16">
            <PartHeading
              id="tw-rules-special" numeral="II" title="სპეციალური ქცევის წესები"
              note={`100 სფეროს მიხედვით, ${RULE_GROUPS.length} ჯგუფად. აირჩიე ჯგუფი ან მოძებნე სფერო.`}
            />

            <div className="lg:grid lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-8 lg:items-start">
              {/* group bar: a scrolling chip row under the nav on phones, a sticky list beside the rules on wide screens */}
              <div
                ref={barRef}
                className="sticky top-16 z-20 -mx-4 px-4 py-3 bg-paper/90 backdrop-blur-md border-b border-sand-200 lg:top-20 lg:mx-0 lg:p-0 lg:bg-transparent lg:backdrop-blur-none lg:border-0"
              >
                <label htmlFor="tw-rules-search" className="sr-only">სფეროს ძებნა</label>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-mute pointer-events-none" />
                  <input
                    id="tw-rules-search"
                    type="text"
                    enterKeyHint="search"
                    autoComplete="off"
                    value={query}
                    onChange={(e) => search(e.target.value)}
                    placeholder="მოძებნე სფერო ან წესი..."
                    className="w-full rounded-full bg-cream border border-sand-300 text-forest-900 pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                  {query && (
                    <button
                      type="button"
                      onClick={() => search("")}
                      aria-label="ძებნის გასუფთავება"
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full hover:bg-sand-100 text-ink-soft flex items-center justify-center cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div ref={chipsRef} role="group" aria-label="სფეროების ჯგუფები" className="mt-3 flex gap-2 overflow-x-auto [scrollbar-width:none] lg:flex-col lg:overflow-visible">
                  {RULE_GROUPS.map((g, i) => {
                    const active = !q && i === group
                    const none = q !== "" && hits[i].length === 0
                    return (
                      <button
                        key={g.from}
                        type="button"
                        onClick={() => pick(i)}
                        aria-pressed={active}
                        className={`shrink-0 inline-flex items-center gap-2 rounded-full lg:rounded-xl border px-3.5 py-2 lg:px-3 lg:py-2.5 text-sm text-left transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                          active ? "bg-forest-900 border-forest-900 text-cream" : "bg-cream border-sand-200 text-ink-soft hover:border-gold-300 hover:text-forest-900"
                        } ${none ? "opacity-45" : ""}`}
                      >
                        <g.icon className={`w-4 h-4 shrink-0 ${active ? "text-gold-300" : "text-gold-600"}`} aria-hidden="true" />
                        <span className="font-bold tabular-nums whitespace-nowrap">{g.from}–{g.to}</span>
                        <span className="whitespace-nowrap lg:whitespace-normal lg:flex-1 leading-snug">{g.short}</span>
                        {q && (
                          <span className="ml-auto text-[11px] font-bold tabular-nums rounded-full bg-sand-100 text-forest-800 px-1.5 py-0.5">{hits[i].length}</span>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div ref={listRef} className="mt-6 lg:mt-0 min-w-0" aria-live="polite">
                {q && hitCount > 0 && (
                  <p className="text-sm text-ink-soft mb-5">
                    „{query.trim()}“ — ნაპოვნია <b className="text-forest-900">{hitCount}</b> სფერო {shown.length} ჯგუფში
                  </p>
                )}

                {shown.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-sand-300 bg-cream py-12 px-6 text-center">
                    <p className="text-ink-soft">„{query.trim()}“ — ასეთი სფერო ვერ მოიძებნა.</p>
                    <p className="text-sm text-ink-mute mt-1">ზოგადი წესები (I ნაწილი) ყველა სფეროზე ვრცელდება.</p>
                    <button
                      type="button"
                      onClick={() => search("")}
                      className="mt-5 inline-flex items-center gap-2 rounded-full border border-sand-300 hover:border-gold-400 hover:bg-sand-100 text-forest-800 font-semibold text-sm px-5 py-2.5 transition-colors cursor-pointer"
                    >
                      <X className="w-4 h-4" /> ძებნის გასუფთავება
                    </button>
                  </div>
                ) : (
                  // keyed by the group (or the search), so a new pick replays the cards' entrance
                  <div key={q ? "search" : group} className="space-y-12">
                    {shown.map(({ g, spheres }) => (
                      <section key={g.from} aria-labelledby={`tw-rules-g${g.from}`}>
                        <header className="flex items-center gap-3 mb-5">
                          <span className="w-11 h-11 shrink-0 rounded-xl bg-gold-100 text-gold-700 flex items-center justify-center">
                            <g.icon className="w-5 h-5" aria-hidden="true" />
                          </span>
                          <div>
                            <span className="block text-xs font-bold text-gold-700 tabular-nums tracking-wider">{g.from}–{g.to}</span>
                            <h4 id={`tw-rules-g${g.from}`} className="font-heading text-xl md:text-2xl font-bold text-forest-900 leading-tight">
                              <Highlight text={g.title} query={q} />
                            </h4>
                          </div>
                        </header>
                        <ol className="grid md:grid-cols-2 gap-4">
                          {spheres.map((s, i) => (
                            <li key={s.n} value={s.n} style={{ animationDelay: `${Math.min(i * 40, 400)}ms` }} className={RISE}>
                              <SphereCard sphere={s} query={q} />
                            </li>
                          ))}
                        </ol>
                      </section>
                    ))}

                    {!q && (
                      <nav aria-label="ჯგუფებში გადასვლა" className="flex flex-wrap justify-between gap-3">
                        {group > 0 ? (
                          <button type="button" onClick={() => pick(group - 1)} className="inline-flex items-center gap-2 rounded-full border border-sand-300 bg-cream hover:border-gold-400 hover:bg-sand-100 text-forest-800 font-semibold text-sm px-5 py-2.5 transition-colors cursor-pointer">
                            <ArrowLeft className="w-4 h-4" /> {RULE_GROUPS[group - 1].from}–{RULE_GROUPS[group - 1].to} {RULE_GROUPS[group - 1].short}
                          </button>
                        ) : <span />}
                        {group < RULE_GROUPS.length - 1 && (
                          <button type="button" onClick={() => pick(group + 1)} className="inline-flex items-center gap-2 rounded-full bg-forest-900 hover:bg-forest-800 text-cream font-semibold text-sm px-5 py-2.5 shadow-md transition-colors cursor-pointer">
                            შემდეგი: {RULE_GROUPS[group + 1].from}–{RULE_GROUPS[group + 1].to} {RULE_GROUPS[group + 1].short} <ArrowRight className="w-4 h-4" />
                          </button>
                        )}
                      </nav>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* general rule 10: a way to report a breach */}
          <aside className="mt-16 rounded-2xl border border-sand-200 bg-sand-100 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5">
            <span className="w-12 h-12 shrink-0 rounded-2xl bg-forest-900 text-gold-300 flex items-center justify-center">
              <MessageSquareWarning className="w-6 h-6" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <h3 className="font-heading text-xl font-bold text-forest-900">შეამჩნიე წესის დარღვევა?</h3>
              <p className="text-sm text-ink-soft mt-1 leading-relaxed">
                მოგვწერე ბიზნესის დასახელება, რეგიონი და რა მოხდა. საგანგებო სიტუაციაში დარეკე 112-ზე.
              </p>
            </div>
            <a
              href={REPORT_MAIL}
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-forest-900 hover:bg-forest-800 text-cream font-semibold text-sm px-5 py-2.5 shadow-md transition-colors"
            >
              <Mail className="w-4 h-4" /> info@travelword.ge
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
