import { useState } from "react"
import "./antique-map.css"

export type MonumentIcon = "church" | "tower" | "fortress" | "cave"

export interface AntiqueMapRegion {
  key: string
  name: string
  sub: string
  img: string
  desc: string
  lon: number
  lat: number
  icon: MonumentIcon
  linked: boolean
}

interface GeorgiaAntiqueMapProps {
  regions: AntiqueMapRegion[]
  medallions: { img: string; alt: string }[]
  onOpen: (key: string) => void
}

/* ---------- projection: lon/lat → SVG units (viewBox 1200×720) ---------- */
const W = 1200
const H = 720
const px = (lon: number) => 60 + (lon - 39.75) * 150
const py = (lat: number) => 110 + (43.75 - lat) * 205
const pts = (list: [number, number][]) => list.map(([lo, la]) => `${px(lo).toFixed(1)},${py(la).toFixed(1)}`).join(" ")
const line = (list: [number, number][]) => "M" + pts(list).replace(/ /g, " L")

// Simplified outline of Georgia: north ridge west→east, south border east→west, coast south→north
const NORTH: [number, number][] = [
  [40.0, 43.38], [40.25, 43.58], [40.6, 43.56], [41.0, 43.42], [41.45, 43.32], [41.9, 43.22], [42.3, 43.2],
  [42.7, 43.18], [43.0, 43.08], [43.4, 42.92], [43.8, 42.78], [44.2, 42.73], [44.6, 42.75], [44.95, 42.7],
  [45.25, 42.62], [45.6, 42.55], [45.85, 42.3], [46.1, 42.05], [46.45, 41.95], [46.72, 41.83],
]
const SOUTH: [number, number][] = [
  [46.45, 41.58], [46.62, 41.32], [46.35, 41.15], [45.95, 41.18], [45.6, 41.33], [45.35, 41.45], [45.1, 41.32],
  [44.85, 41.22], [44.55, 41.2], [44.2, 41.2], [43.85, 41.12], [43.47, 41.12], [43.2, 41.27], [42.85, 41.5],
  [42.6, 41.58], [42.3, 41.5], [41.95, 41.52], [41.55, 41.52],
]
const COAST: [number, number][] = [
  [41.55, 41.52], [41.63, 41.65], [41.76, 41.85], [41.67, 42.15], [41.55, 42.4], [41.4, 42.62], [41.15, 42.85],
  [40.95, 43.02], [40.65, 43.1], [40.4, 43.17], [40.25, 43.3], [40.0, 43.38],
]
const OUTLINE = [...NORTH, ...SOUTH, ...COAST.slice(1)]
const SEA: [number, number][] = [
  [38.4, 44.4], [39.3, 43.95], [39.7, 43.6], ...COAST.slice().reverse(), [41.2, 41.35], [40.6, 41.12], [39.6, 41.05], [38.4, 41.0],
]

const RIVERS: [number, number][][] = [
  // Mtkvari
  [[42.85, 41.45], [43.15, 41.7], [43.38, 41.84], [43.6, 41.99], [44.11, 41.98], [44.5, 41.9], [44.72, 41.84], [44.8, 41.7], [45.0, 41.55], [45.4, 41.35], [45.7, 41.3]],
  // Rioni
  [[43.4, 42.75], [43.15, 42.55], [42.9, 42.4], [42.7, 42.27], [42.3, 42.2], [41.67, 42.15]],
  // Enguri
  [[42.95, 43.0], [42.5, 42.95], [42.05, 42.7], [41.6, 42.4]],
  // Alazani
  [[45.65, 42.35], [45.75, 42.05], [46.05, 41.85], [46.5, 41.6]],
  // Aragvi
  [[44.8, 42.45], [44.72, 42.15], [44.72, 41.84]],
]

const DECOR: { lon: number; lat: number; icon: MonumentIcon; label: string }[] = [
  { lon: 44.7, lat: 42.16, icon: "fortress", label: "ანანური" },
  { lon: 44.21, lat: 41.97, icon: "cave", label: "უფლისციხე" },
  { lon: 45.37, lat: 41.45, icon: "cave", label: "დავითგარეჯა" },
  { lon: 44.54, lat: 41.45, icon: "church", label: "ბოლნისის სიონი" },
  { lon: 43.38, lat: 41.84, icon: "fortress", label: "ბორჯომი" },
  { lon: 41.87, lat: 42.51, icon: "fortress", label: "ზუგდიდი" },
  { lon: 40.34, lat: 43.16, icon: "church", label: "ბიჭვინთა" },
  { lon: 44.58, lat: 41.86, icon: "church", label: "მცხეთა" },
]

const PEAKS: { lon: number; lat: number; label: string }[] = [
  { lon: 44.45, lat: 42.76, label: "მყინვარწვერი" },
  { lon: 43.11, lat: 43.06, label: "შხარა" },
]

// mountain hatch along the Greater Caucasus (slightly inside the north border) and the Lesser Caucasus
const MOUNTAINS: [number, number][] = [
  ...NORTH.slice(1, -2).flatMap(([lo, la], i, arr) => {
    const next = arr[i + 1]
    const a: [number, number] = [lo, la - 0.14]
    return next ? [a, [(lo + next[0]) / 2, (la + next[1]) / 2 - 0.24] as [number, number]] : [a]
  }),
  [42.15, 41.72], [42.45, 41.75], [42.75, 41.78], [43.7, 41.55], [44.0, 41.5], [43.9, 41.32],
]

const NEIGHBOURS = [
  { lon: 43.7, lat: 43.52, label: "რ უ ს ე თ ი" },
  { lon: 42.1, lat: 41.17, label: "თ უ რ ქ ე თ ი" },
  { lon: 44.2, lat: 41.0, label: "ს ო მ ხ ე თ ი" },
  { lon: 46.0, lat: 40.98, label: "ა ზ ე რ ბ ა ი ჯ ა ნ ი" },
]

function Icon({ type }: { type: MonumentIcon }) {
  switch (type) {
    case "church":
      return (
        <g>
          <path d="M-10 10V-2L0-8 10-2V10Z" />
          <path d="M-3.5-8V-14H3.5V-8" />
          <path d="M-4.5-14L0-20 4.5-14Z" />
          <path d="M0-20V-26M-2.2-23.8H2.2" className="thin" />
          <path d="M-2 10V5A2 2 0 0 1 2 5V10" className="thin" />
          <path d="M-7 1V5M7 1V5" className="thin" />
        </g>
      )
    case "tower":
      return (
        <g>
          <path d="M-4.5 10L-3.5-15H3.5L4.5 10Z" />
          <path d="M-5-15L0-21 5-15Z" />
          <path d="M-1.2-11V-8M1.2-11V-8M0-3V0M-1 5V8" className="thin" />
          <path d="M-12 10L-11-3H-6L-5.5 10" />
          <path d="M-12-3L-8.5-7-5.5-3" className="thin" />
        </g>
      )
    case "fortress":
      return (
        <g>
          <path d="M-12 10V-2H-9V-5H-6V-2H-3V-5H0V-2H3V-5H6V-2H9V-5H12V-2V10Z" />
          <path d="M-3 10V-10H3V10" />
          <path d="M-4-10L0-15 4-10Z" />
          <path d="M-1.5 10V6A1.5 1.5 0 0 1 1.5 6V10M-8 3V6M8 3V6" className="thin" />
        </g>
      )
    case "cave":
      return (
        <g>
          <path d="M-14 10Q-12-9 0-12Q12-9 14 10Z" />
          <path d="M-8 3A2 2 0 0 1-4 3V6H-8ZM-1 1A2 2 0 0 1 3 1V4H-1ZM5 4A2 2 0 0 1 9 4V7H5ZM-5-4A1.6 1.6 0 0 1-1.8-4V-2H-5ZM2-5A1.6 1.6 0 0 1 5.2-5V-3H2Z" className="thin" />
        </g>
      )
  }
}

export default function GeorgiaAntiqueMap({ regions, medallions, onOpen }: GeorgiaAntiqueMapProps) {
  const [hovered, setHovered] = useState<string | null>(null)
  const [pinned, setPinned] = useState<string | null>(null)
  const activeKey = hovered ?? pinned
  const active = regions.find((r) => r.key === activeKey)
  const half = Math.ceil(medallions.length / 2)

  const medallionColumn = (list: typeof medallions, side: "left" | "right") => (
    <div className={`amap-col ${side}`}>
      {list.map((m, i) => (
        <div key={m.img + i} className="amap-medallion" style={{ animationDelay: `${0.4 + i * 0.12}s` }}>
          <img src={m.img} alt={m.alt} loading="lazy" />
        </div>
      ))}
    </div>
  )

  return (
    <div className="amap-frame">
      <div className="amap-paper">
        {medallionColumn(medallions.slice(0, half), "left")}

        <div className="amap-stage" onMouseLeave={() => setHovered(null)}>
          <svg viewBox={`0 0 ${W} ${H}`} className="amap-svg" role="img" aria-label="ქართული ხუროთმოძღვრების ძეგლების რუკა">
            <defs>
              <filter id="amap-ink">
                <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" />
                <feDisplacementMap in="SourceGraphic" scale="2.2" />
              </filter>
              <pattern id="amap-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
                <line x1="0" y1="0" x2="0" y2="6" className="amap-hatch-line" />
              </pattern>
              <radialGradient id="amap-land" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="rgba(120,90,40,0)" />
                <stop offset="100%" stopColor="rgba(120,90,40,.10)" />
              </radialGradient>
            </defs>

            {/* graticule */}
            <g className="amap-grid">
              {[40, 41, 42, 43, 44, 45, 46].map((lo) => <line key={lo} x1={px(lo)} y1={0} x2={px(lo)} y2={H} />)}
              {[41, 41.5, 42, 42.5, 43, 43.5].map((la) => <line key={la} x1={0} y1={py(la)} x2={W} y2={py(la)} />)}
            </g>

            {/* sea with coastal ripples */}
            <polygon points={pts(SEA)} className="amap-sea" />
            {[10, 20, 31, 44].map((d, i) => (
              <path key={d} d={line(COAST)} className="amap-ripple" transform={`translate(${-d} ${d * 0.25})`} style={{ opacity: 0.55 - i * 0.12 }} />
            ))}
            <text x={px(40.15)} y={py(42.05)} className="amap-sea-label" transform={`rotate(-62 ${px(40.15)} ${py(42.05)})`}>შ ა ვ ი &nbsp; ზ ღ ვ ა</text>

            {/* ship */}
            <g className="amap-ship" transform={`translate(${px(40.55)} ${py(41.55)})`}>
              <g>
                <path d="M-16 0H16L10 7H-10Z" />
                <path d="M-1 0V-26" />
                <path d="M0-25L13-4H0Z" className="sail" />
                <path d="M-2-22L-12-5H-2Z" className="sail" />
                <path d="M-1-26L5-24-1-22" className="thin" />
              </g>
            </g>

            {/* compass rose */}
            <g className="amap-compass" transform={`translate(${px(40.5)} ${py(42.55)})`}>
              <g className="spin">
                <circle r="34" className="ring" />
                <circle r="27" className="ring thin" />
                <path d="M0-44L6-6 0 0-6-6ZM0 44L6 6 0 0-6 6ZM-44 0L-6-6 0 0-6 6ZM44 0L6-6 0 0 6 6Z" className="star" />
                <path d="M-22-22L-3-3M22 22L3 3M22-22L3-3M-22 22L-3 3" className="thin" />
              </g>
              <text y="-50" className="amap-n">N</text>
            </g>

            {/* land */}
            <g filter="url(#amap-ink)">
              <polygon points={pts(OUTLINE)} className="amap-land" />
              <polygon points={pts(OUTLINE)} fill="url(#amap-land)" />
              <polygon points={pts(OUTLINE)} className="amap-outline" pathLength={1} />
            </g>

            {/* mountains */}
            <g className="amap-mountains">
              {MOUNTAINS.map(([lo, la], i) => (
                <g key={i} transform={`translate(${px(lo)} ${py(la)}) scale(${0.8 + ((i * 37) % 5) / 10})`} style={{ animationDelay: `${1 + i * 0.03}s` }}>
                  <path d="M-11 6L-3-7 1-1 4-5 11 6" />
                  <path d="M-3-7L-1 6M4-5L5 6" className="thin" />
                </g>
              ))}
              {PEAKS.map((p) => (
                <g key={p.label} transform={`translate(${px(p.lon)} ${py(p.lat)})`}>
                  <path d="M-14 8L0-12 14 8" />
                  <path d="M-5-5L0-1 5-5" className="thin" />
                  <text y="22" className="amap-peak">{p.label}</text>
                </g>
              ))}
            </g>

            {/* rivers */}
            {RIVERS.map((r, i) => (
              <path key={i} d={line(r)} className="amap-river" pathLength={1} style={{ animationDelay: `${1.4 + i * 0.15}s` }} />
            ))}

            {/* neighbours */}
            {NEIGHBOURS.map((n) => (
              <text key={n.label} x={px(n.lon)} y={py(n.lat)} className="amap-neighbour">{n.label}</text>
            ))}

            {/* decorative monuments */}
            {DECOR.map((d, i) => (
              <g key={d.label} className="amap-decor" transform={`translate(${px(d.lon)} ${py(d.lat)})`}>
                <g className="pop" style={{ animationDelay: `${1.8 + i * 0.07}s` }}>
                  <g transform="scale(.9)"><Icon type={d.icon} /></g>
                  <text y="22" className="amap-decor-label">{d.label}</text>
                </g>
              </g>
            ))}

            {/* region monuments (interactive) */}
            {regions.map((r, i) => {
              const isActive = activeKey === r.key
              return (
                <g
                  key={r.key}
                  className={`amap-marker${isActive ? " active" : ""}`}
                  transform={`translate(${px(r.lon)} ${py(r.lat)})`}
                  onMouseEnter={() => setHovered(r.key)}
                  onClick={() => (pinned === r.key ? onOpen(r.key) : setPinned(r.key))}
                  role="button"
                  tabIndex={0}
                  aria-label={r.name}
                  onKeyDown={(e) => { if (e.key === "Enter") onOpen(r.key) }}
                  onFocus={() => setHovered(r.key)}
                  onBlur={() => setHovered(null)}
                >
                  <g className="pop" style={{ animationDelay: `${2.2 + i * 0.09}s` }}>
                    <circle r="22" className="hit" />
                    <circle r="16" className="pulse" />
                    <g className="icon"><g transform="scale(1.35)"><Icon type={r.icon} /></g></g>
                    <text y="34" className="amap-label">{r.name}</text>
                  </g>
                </g>
              )
            })}

            {/* title cartouche */}
            <g className="amap-title" transform={`translate(${W / 2} 52)`}>
              <path d="M-330-30H330Q350-30 350-10V10Q350 30 330 30H-330Q-350 30-350 10V-10Q-350-30-330-30Z" className="banner" />
              <path d="M-350-10Q-372-24-382-6Q-372 4-350 6M350-10Q372-24 382-6Q372 4 350 6" className="curl" />
              <circle cx="-312" r="17" className="seal" />
              <circle cx="312" r="17" className="seal" />
              <path d="M-312-9V9M-321 0H-303M312-9V9M303 0H321" className="seal-cross" />
              <text y="11" className="amap-title-text">ქართული ხუროთმოძღვრების ძეგლები</text>
              <text y="48" className="amap-title-sub">MONUMENTS OF GEORGIAN ARCHITECTURE</text>
            </g>
          </svg>

          {active && (
            <div
              className={`amap-tip${px(active.lon) > W * 0.62 ? " flip" : ""}${py(active.lat) < H * 0.4 ? " below" : ""}`}
              style={{ left: `${(px(active.lon) / W) * 100}%`, top: `${(py(active.lat) / H) * 100}%` }}
              key={active.key}
            >
              <img src={active.img} alt={active.name} />
              <div className="amap-tip-body">
                <b>{active.name}</b>
                <span className="sub">{active.sub}</span>
                <p>{active.desc}</p>
                <button onClick={() => onOpen(active.key)}>{active.linked ? "კუთხის გვერდი →" : "ბარათის ნახვა ↓"}</button>
              </div>
            </div>
          )}
        </div>

        {medallionColumn(medallions.slice(half), "right")}
      </div>

      <div className="amap-legend">
        {(["church", "tower", "fortress", "cave"] as const).map((t) => (
          <span key={t}>
            <svg viewBox="-16 -28 32 40"><g className="amap-legend-icon"><Icon type={t} /></g></svg>
            {{ church: "ტაძარი", tower: "კოშკი", fortress: "ციხე-სიმაგრე", cave: "კლდის ქალაქი" }[t]}
          </span>
        ))}
        <em>დააჭირეთ ძეგლს — ორჯერ დაჭერით კუთხე გაიხსნება</em>
      </div>
    </div>
  )
}
