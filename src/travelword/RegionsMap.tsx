import { useState } from "react"
import { AnimatePresence, MotionConfig } from "framer-motion"
import { AREAS, OUTLINE_D } from "@/components/georgiaMapGeo"
import RegionServices, { RegionSummary } from "./RegionServices"
import { REGIONS, type Region, type RegionId } from "./regions"

// The trip planner's regions slide: Georgia drawn from the heritage atlas outlines (georgiaMapGeo), one shape per
// region, with the picked region's summary beside it and its services under it (RegionServices). The pill list under
// the map is the keyboard / screen-reader way in; the map itself is pointer-only.

const AREA_BY_ID = new Map(AREAS.map((a) => [a.id, a]))

const pad = (n: number) => String(n).padStart(2, "0")

function shapeCls(r: Region, selected: boolean, hovered: boolean) {
  if (selected) return r.occupied ? "fill-rose-400/45 stroke-rose-200" : "fill-green-500 stroke-green-200"
  if (hovered) return "fill-slate-500 stroke-slate-300"
  return r.occupied ? "fill-slate-800 stroke-slate-900" : "fill-slate-700 stroke-slate-900"
}

export default function RegionsMap({ selected, onSelect, onAdjara, onAddBusiness }: {
  selected: RegionId
  onSelect: (id: RegionId) => void
  /** opens the Adjara services directory */
  onAdjara: () => void
  onAddBusiness: () => void
}) {
  const [hover, setHover] = useState<RegionId | null>(null)
  const n = REGIONS.length
  const index = Math.max(0, REGIONS.findIndex((r) => r.id === selected))
  const region = REGIONS[index]
  const hovered = REGIONS.find((r) => r.id === hover)
  const step = (d: number) => onSelect(REGIONS[(index + d + n) % n].id)
  // the picked region is drawn last, so its outline sits above its neighbours'
  const drawOrder = [...REGIONS.filter((r) => r !== region), region]
  const hoverProps = (id: RegionId) => ({ onPointerEnter: () => setHover(id), onPointerLeave: () => setHover(null) })

  return (
    // the section is the slide and scrolls itself; its padding sits on an inner wrapper, since a scroller's own padding
    // would push the services' sticky filter down
    <section id="regions" data-fp-label="რეგიონები">
      <div className="pt-24">
        {/* the bottom padding sits on the map block, so the services band runs to the slide's bottom edge */}
        <div className="container mx-auto px-4 pb-16">
          <div className="tw-fp-in mb-6 md:mb-8">
            <span className="text-green-600 text-xs font-bold uppercase tracking-widest">{n} მხარე · ინტერაქტიული რუკა</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">საქართველოს რეგიონები</h2>
            <p className="text-xs md:text-sm text-slate-500 mt-1">
              აირჩიეთ მხარე რუკაზე ან სიიდან და ნახეთ მისი სერვისები — ფოტოებით, აღწერით და ფასებით.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 items-start">
            <div className="tw-fp-in [--i:1] min-w-0">
              <div className="relative rounded-3xl bg-slate-900 bg-[radial-gradient(ellipse_at_30%_20%,rgba(34,197,94,0.14),transparent_60%)] p-3 sm:p-5 shadow-xl shadow-slate-900/10">
                <svg viewBox="80 120 1050 560" className="w-full h-auto select-none" aria-hidden="true">
                  <defs>
                    <pattern id="tw-rm-hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="10" className="stroke-slate-500/50" strokeWidth="3" />
                    </pattern>
                  </defs>
                  <text x="150" y="480" className="fill-sky-300/40 text-[18px] italic tracking-[0.3em]">შავი ზღვა</text>

                  {drawOrder.map((r) => (
                    <g key={r.id} onClick={() => onSelect(r.id)} {...hoverProps(r.id)} className="cursor-pointer">
                      {r.areas.map((id) => {
                        const a = AREA_BY_ID.get(id)
                        return a && (
                          <path
                            key={id} d={a.d} strokeWidth="1.5" strokeLinejoin="round"
                            className={`${shapeCls(r, r === region, r.id === hover)} transition-[fill,stroke] duration-300`}
                          />
                        )
                      })}
                      {r.occupied && r.areas.map((id) => {
                        const a = AREA_BY_ID.get(id)
                        return a && <path key={`${id}-hatch`} d={a.d} fill="url(#tw-rm-hatch)" className="pointer-events-none" />
                      })}
                    </g>
                  ))}

                  <path d={OUTLINE_D} fill="none" strokeWidth="2" strokeLinejoin="round" className="stroke-white/35 pointer-events-none" />

                  {/* number markers, in the slideshow's order */}
                  {REGIONS.map((r, i) => {
                    const a = AREA_BY_ID.get(r.areas[0])
                    if (!a) return null
                    const on = r === region
                    return (
                      <g key={r.id} className="pointer-events-none">
                        {on && <circle cx={a.cx} cy={a.cy} r="16" className="fill-white/40 [transform-box:fill-box] origin-center motion-safe:animate-ping" />}
                        <circle
                          cx={a.cx} cy={a.cy} r={on ? 17 : 13} strokeWidth="1.5"
                          className={on ? "fill-white stroke-green-200" : r.occupied ? "fill-slate-600 stroke-slate-400" : "fill-slate-950/75 stroke-white/50"}
                        />
                        <text
                          x={a.cx} y={a.cy} textAnchor="middle" dominantBaseline="central"
                          className={`font-bold tabular-nums ${on ? "text-[14px] fill-green-700" : "text-[12px] fill-white"}`}
                        >
                          {i + 1}
                        </text>
                      </g>
                    )
                  })}
                </svg>

                <p className="hidden sm:block absolute left-8 bottom-7 text-[11px] font-semibold text-white/60 pointer-events-none">
                  {hovered ? hovered.name : "აირჩიეთ რეგიონი"}
                </p>
              </div>

              <div className="mt-4 flex gap-2 overflow-x-auto sm:flex-wrap pb-1 [scrollbar-width:none]">
                {REGIONS.map((r, i) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => onSelect(r.id)}
                    {...hoverProps(r.id)}
                    aria-pressed={r === region}
                    className={`shrink-0 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                      r === region
                        ? "bg-green-600 border-green-600 text-white"
                        : "bg-white border-slate-200 text-slate-600 hover:border-green-500 hover:text-green-700"
                    }`}
                  >
                    <span className="tabular-nums opacity-60">{pad(i + 1)}</span> {r.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="tw-fp-in [--i:2] min-w-0" aria-live="polite">
              {/* keyed by region: the old summary folds away, then the new one unfolds */}
              <MotionConfig reducedMotion="user">
                <AnimatePresence mode="wait" initial={false}>
                  <RegionSummary key={region.id} region={region} index={index} total={n} onStep={step} onAdjara={onAdjara} />
                </AnimatePresence>
              </MotionConfig>
            </div>
          </div>
        </div>

        {/* the region's services: a dark full-width band under the map */}
        <MotionConfig reducedMotion="user">
          <AnimatePresence mode="wait" initial={false}>
            <RegionServices key={region.id} region={region} onAddBusiness={onAddBusiness} />
          </AnimatePresence>
        </MotionConfig>
      </div>
    </section>
  )
}
