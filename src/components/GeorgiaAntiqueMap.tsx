import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronDown, MapPin, Minus, Plus, RotateCcw } from "lucide-react"
import "./antique-map.css"
import { AREAS, COAST_XY, INNER_BORDERS_D, MOUNTAIN_XY, OUTLINE_D, type MapAreaId } from "./georgiaMapGeo"
import { serviceCategoryIcon } from "./serviceCategoryIcons"
import { SERVICE_DIRECTORY, serviceItemLabel } from "@/data/regionServices"
import { ADJARA_MUNICIPAL_BORDERS_D, ADJARA_MUNICIPALITIES } from "@/data/adjaraVillages"

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
const xy = (list: [number, number][]) => list.map(([x, y]) => `${x},${y}`).join(" ")
const line = (list: [number, number][]) => "M" + xy(list).replace(/ /g, " L")
const MAX_ZOOM = 24
// keep the zoomed map covering the whole frame
const clampPan = (k: number, tx: number, ty: number) => ({
  k,
  tx: Math.min(0, Math.max(W - W * k, tx)),
  ty: Math.min(0, Math.max(H - H * k, ty)),
})
const geo = (list: [number, number][]) => list.map(([lo, la]) => [+px(lo).toFixed(1), +py(la).toFixed(1)] as [number, number])

// the real outline, coast, region shapes and mountain positions live in georgiaMapGeo.ts
const SEA: [number, number][] = [
  ...geo([[38.4, 44.4], [39.3, 43.95], [39.7, 43.6]]),
  ...COAST_XY.slice().reverse(),
  ...geo([[41.2, 41.35], [40.6, 41.12], [39.6, 41.05], [38.4, 41.0]]),
]

// hand-coloured atlas tints — neighbouring regions never share a wash
const WASH = { sand: "#E2CF9C", sage: "#C8D3A8", peach: "#EBC7A4", rose: "#DDBDB8", slate: "#BFCCCB" }
// `label` is drawn on the map only for regions without a monument marker; `name` heads the services panel
const AREA_STYLE: Record<MapAreaId, { tint: string; name: string; label?: boolean; at?: [number, number] }> = {
  abkhazia: { tint: WASH.sand, name: "აფხაზეთი" },
  svaneti: { tint: WASH.sage, name: "სვანეთი" },
  samegrelo: { tint: WASH.peach, name: "სამეგრელო" },
  racha: { tint: WASH.rose, name: "რაჭა-ლეჩხუმი" },
  imereti: { tint: WASH.slate, name: "იმერეთი" },
  guria: { tint: WASH.sage, name: "გურია", label: true, at: [415, 478] },
  adjara: { tint: WASH.rose, name: "აჭარა" },
  samtskhe: { tint: WASH.sand, name: "სამცხე-ჯავახეთი" },
  kartli: { tint: WASH.peach, name: "შიდა ქართლი", label: true, at: [690, 432] },
  kvemo: { tint: WASH.sage, name: "ქვემო ქართლი", label: true, at: [700, 560] },
  tbilisi: { tint: WASH.rose, name: "თბილისი" },
  mtiuleti: { tint: WASH.sand, name: "მთიულეთი", label: true, at: [852, 420] },
  khevi: { tint: WASH.sage, name: "ხევი" },
  khevsureti: { tint: WASH.rose, name: "ხევსურეთი" },
  tusheti: { tint: WASH.sage, name: "თუშეთი" },
  kakheti: { tint: WASH.slate, name: "კახეთი" },
}

// regions with village data; the map shows these villages once zoomed in
const VILLAGES: Partial<Record<MapAreaId, typeof ADJARA_MUNICIPALITIES>> = { adjara: ADJARA_MUNICIPALITIES }
const VILLAGES_FROM_ZOOM = 1.8
const VILLAGE_LABELS_FROM_ZOOM = 3
const VILLAGE_FONT = 10.5 * 0.9 // .amap-village text font-size × the village marker's extra scale

/** ids of villages whose names fit on screen without overlapping — focused first, then in list order */
function placeVillageLabels(zoom: { k: number; tx: number; ty: number }, focused: string | null, municipalities: typeof ADJARA_MUNICIPALITIES) {
  const fs = VILLAGE_FONT * Math.pow(zoom.k, 0.25) // on-screen size in viewBox units
  const all = municipalities.flatMap((m) => m.villages.map(([name, lon, lat]) => ({ id: `${m.id}:${name}`, name, lon, lat })))
  const ordered = focused ? [...all.filter((v) => v.id === focused), ...all.filter((v) => v.id !== focused)] : all
  const boxes: [number, number, number, number][] = []
  const shown = new Set<string>()
  for (const v of ordered) {
    const x = px(v.lon) * zoom.k + zoom.tx
    const y = py(v.lat) * zoom.k + zoom.ty
    if (x < 0 || x > W || y < 0 || y > H) continue
    const w = v.name.length * fs * 0.7
    // label box above the dot, plus the dot itself
    const box: [number, number, number, number] = [x - w / 2 - 2, y - fs * 1.9, x + w / 2 + 2, y + 4]
    if (boxes.some((b) => box[0] < b[2] && box[2] > b[0] && box[1] < b[3] && box[3] > b[1])) continue
    boxes.push(box)
    shown.add(v.id)
  }
  return shown
}
const SUBCATEGORY_TOTAL =SERVICE_DIRECTORY.reduce((n, c) => n + c.items.length, 0)
// marker key (English name) → the region it sits in
const MARKER_AREA: Record<string, MapAreaId> = {
  Svaneti: "svaneti", Kakheti: "kakheti", Tbilisi: "tbilisi", Adjara: "adjara", Samegrelo: "samegrelo",
  Imereti: "imereti", Tusheti: "tusheti", Khevsureti: "khevsureti", Khevi: "khevi",
  "Samtskhe-Javakheti": "samtskhe", "Racha-Lechkhumi": "racha", Abkhazia: "abkhazia",
}

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

// labelY: where the name sits relative to the peak glyph (above when a marker sits just below)
const PEAKS: { lon: number; lat: number; label: string; labelY?: number }[] = [
  { lon: 44.52, lat: 42.7, label: "მყინვარწვერი", labelY: -18 },
  { lon: 43.11, lat: 43.06, label: "შხარა" },
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
  const activeArea = activeKey ? MARKER_AREA[activeKey] : undefined
  const markerOf = (area: MapAreaId) => regions.find((r) => MARKER_AREA[r.key] === area)
  // the services panel follows the last region touched, so it stays put while the reader scrolls it
  const [panelArea, setPanelArea] = useState<MapAreaId>("adjara")
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  useEffect(() => {
    if (activeArea) setPanelArea(activeArea)
  }, [activeArea])
  const half = Math.ceil(medallions.length / 2)

  /* ---------- zoom & pan: the map content is one group under translate(tx ty) scale(k) ---------- */
  const svgRef = useRef<SVGSVGElement>(null)
  const [zoom, setZoom] = useState({ k: 1, tx: 0, ty: 0 })
  const [dragging, setDragging] = useState(false)
  const drag = useRef<{ x: number; y: number; tx: number; ty: number; moved: boolean } | null>(null)
  const suppressClick = useRef(false)
  // markers and labels grow only gently with the map (k^0.25), so they stay readable without crowding
  const s = Math.pow(zoom.k, -0.75)
  const at = (x: number, y: number, extra = 1) => `translate(${x} ${y}) scale(${+(s * extra).toFixed(4)})`

  const toSvg = (clientX: number, clientY: number) => {
    const r = svgRef.current!.getBoundingClientRect()
    return { x: ((clientX - r.left) / r.width) * W, y: ((clientY - r.top) / r.height) * H, unit: W / r.width }
  }
  const zoomAt = (factor: number, cx = W / 2, cy = H / 2) =>
    setZoom((z) => {
      const k = Math.min(MAX_ZOOM, Math.max(1, z.k * factor))
      return clampPan(k, cx - (cx - z.tx) * (k / z.k), cy - (cy - z.ty) * (k / z.k))
    })

  const zoomRef = useRef(1)
  zoomRef.current = zoom.k
  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    // native listener: React's wheel handler is passive and cannot stop the page from scrolling
    const onWheel = (e: WheelEvent) => {
      const zoomingOut = e.deltaY > 0
      if (zoomingOut && zoomRef.current <= 1) return // let the page scroll when there is nothing to zoom out of
      e.preventDefault()
      const p = toSvg(e.clientX, e.clientY)
      zoomAt(zoomingOut ? 1 / 1.25 : 1.25, p.x, p.y)
    }
    svg.addEventListener("wheel", onWheel, { passive: false })
    return () => svg.removeEventListener("wheel", onWheel)
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 || zoom.k <= 1) return
    drag.current = { x: e.clientX, y: e.clientY, tx: zoom.tx, ty: zoom.ty, moved: false }
  }
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current
    if (!d) return
    const unit = toSvg(0, 0).unit
    const dx = (e.clientX - d.x) * unit
    const dy = (e.clientY - d.y) * unit
    if (!d.moved && Math.hypot(dx, dy) < 5 * unit) return
    if (!d.moved) {
      d.moved = true
      setDragging(true)
      svgRef.current?.setPointerCapture(e.pointerId)
    }
    setZoom((z) => clampPan(z.k, d.tx + dx, d.ty + dy))
  }
  const onPointerUp = () => {
    if (drag.current?.moved) suppressClick.current = true
    drag.current = null
    setDragging(false)
  }

  const [panelTab, setPanelTab] = useState<"services" | "villages">("services")
  const [focusedVillage, setFocusedVillage] = useState<string | null>(null)
  const panelVillages = VILLAGES[panelArea]
  const focusOn = (lon: number, lat: number, k = 10) => setZoom(clampPan(k, W / 2 - px(lon) * k, H / 2 - py(lat) * k))
  const showVillages = zoom.k >= VILLAGES_FROM_ZOOM
  const labelled = useMemo(
    () => (zoom.k >= VILLAGE_LABELS_FROM_ZOOM ? placeVillageLabels(zoom, focusedVillage, ADJARA_MUNICIPALITIES) : new Set<string>()),
    [zoom, focusedVillage],
  )

  const screen = (x: number, y: number) => ({ x: x * zoom.k + zoom.tx, y: y * zoom.k + zoom.ty })
  const tipAt = active ? screen(px(active.lon), py(active.lat)) : null
  const tipVisible = tipAt && tipAt.x >= 0 && tipAt.x <= W && tipAt.y >= 0 && tipAt.y <= H

  const servicesPanel = (
    <aside className="amap-services" aria-label="კუთხის სერვისები">
      <header>
        <span className="eyebrow"><MapPin size={13} /> კუთხე</span>
        <h3 key={panelArea}>{AREA_STYLE[panelArea].name}</h3>
        <p>{SERVICE_DIRECTORY.length} კატეგორია · {SUBCATEGORY_TOTAL} ქვეკატეგორია</p>
        {panelVillages && (
          <div className="tabs" role="tablist">
            <button role="tab" aria-selected={panelTab === "services"} onClick={() => setPanelTab("services")}>სერვისები</button>
            <button role="tab" aria-selected={panelTab === "villages"} onClick={() => setPanelTab("villages")}>
              სოფლები <span>{panelVillages.reduce((n, m) => n + m.villages.length, 0)}</span>
            </button>
          </div>
        )}
      </header>
      {panelVillages && panelTab === "villages" ? (
        <div className="villages">
          {panelVillages.map((m) => (
            <section key={m.id}>
              <button className="muni" onClick={() => focusOn(m.lon, m.lat, 3)}>
                {m.name} <span>{m.villages.length}</span>
              </button>
              <ol>
                {m.villages.map(([name, lon, lat], i) => {
                  const id = `${m.id}:${name}`
                  return (
                    <li key={id}>
                      <button
                        className={focusedVillage === id ? "on" : undefined}
                        onClick={() => {
                          setFocusedVillage(id)
                          focusOn(lon, lat)
                        }}
                      >
                        <span className="num">{i + 1}</span>
                        {name}
                      </button>
                    </li>
                  )
                })}
              </ol>
            </section>
          ))}
        </div>
      ) : (
      <ol>
        {SERVICE_DIRECTORY.map((c, i) => {
          const Icon = serviceCategoryIcon(c.id)
          const open = openCategory === c.id
          return (
            <li key={c.id} className={open ? "open" : undefined}>
              <button onClick={() => setOpenCategory(open ? null : c.id)} aria-expanded={open}>
                <span className="num">{i + 1}</span>
                <Icon size={16} strokeWidth={1.8} />
                <span className="title">{c.title}</span>
                <span className="count">{c.items.length}</span>
                <ChevronDown size={15} className="chev" />
              </button>
              {open && (
                <ul>
                  {c.items.map((item) => <li key={item}>{serviceItemLabel(item, panelArea)}</li>)}
                </ul>
              )}
            </li>
          )
        })}
      </ol>
      )}
    </aside>
  )

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
        {servicesPanel}

        <div className="amap-stage" onMouseLeave={() => setHovered(null)}>
          <svg
            ref={svgRef}
            viewBox={`0 0 ${W} ${H}`}
            className={`amap-svg${zoom.k > 1 ? " zoomed" : ""}${dragging ? " dragging" : ""}`}
            role="img"
            aria-label="ქართული ხუროთმოძღვრების ძეგლების რუკა"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onClickCapture={(e) => {
              if (suppressClick.current) {
                suppressClick.current = false
                e.stopPropagation()
              }
            }}
          >
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

            <g className="amap-zoom" style={{ transform: `translate(${zoom.tx}px, ${zoom.ty}px) scale(${zoom.k})` }}>
            {/* graticule */}
            <g className="amap-grid">
              {[40, 41, 42, 43, 44, 45, 46].map((lo) => <line key={lo} x1={px(lo)} y1={0} x2={px(lo)} y2={H} />)}
              {[41, 41.5, 42, 42.5, 43, 43.5].map((la) => <line key={la} x1={0} y1={py(la)} x2={W} y2={py(la)} />)}
            </g>

            {/* sea with coastal ripples */}
            <polygon points={xy(SEA)} className="amap-sea" />
            {[10, 20, 31, 44].map((d, i) => (
              <path key={d} d={line(COAST_XY)} className="amap-ripple" transform={`translate(${-d} ${d * 0.25})`} style={{ opacity: 0.55 - i * 0.12 }} />
            ))}
            <text x={px(40.15)} y={py(42.05)} className="amap-sea-label" transform={`rotate(-62 ${px(40.15)} ${py(42.05)})`}>შ ა ვ ი &nbsp; ზ ღ ვ ა</text>

            {/* ship */}
            <g className="amap-ship" transform={at(px(40.55), py(41.55))}>
              <g>
                <path d="M-16 0H16L10 7H-10Z" />
                <path d="M-1 0V-26" />
                <path d="M0-25L13-4H0Z" className="sail" />
                <path d="M-2-22L-12-5H-2Z" className="sail" />
                <path d="M-1-26L5-24-1-22" className="thin" />
              </g>
            </g>

            {/* land, split into historical regions; the ink wobble is dropped up close, where it would look smeared */}
            <g filter={zoom.k < 2.5 ? "url(#amap-ink)" : undefined}>
              <path d={OUTLINE_D} className="amap-land" />
              <g className={`amap-areas${activeArea ? " has-active" : ""}`}>
                {AREAS.map((a, i) => {
                  const marker = markerOf(a.id)
                  return (
                    <path
                      key={a.id}
                      d={a.d}
                      fill={AREA_STYLE[a.id].tint}
                      className={`amap-area${activeArea === a.id || (!activeArea && panelArea === a.id) ? " active" : ""}`}
                      style={{ animationDelay: `${0.9 + i * 0.05}s` }}
                      onMouseEnter={marker ? () => setHovered(marker.key) : undefined}
                      onClick={() => {
                        setPanelArea(a.id)
                        if (!marker) setPinned(null)
                        else if (pinned === marker.key) onOpen(marker.key)
                        else setPinned(marker.key)
                      }}
                    />
                  )
                })}
              </g>
              <path d={OUTLINE_D} fill="url(#amap-land)" pointerEvents="none" />
              <path d={INNER_BORDERS_D} className="amap-borders" />
              <path d={OUTLINE_D} className="amap-outline" pathLength={1} />
            </g>

            {/* names of regions that have no monument marker */}
            {AREAS.filter((a) => AREA_STYLE[a.id].label).map((a) => {
              const [x, y] = AREA_STYLE[a.id].at ?? [a.cx, a.cy]
              return <g key={a.id} transform={at(x, y)}><text className="amap-area-label">{AREA_STYLE[a.id].name}</text></g>
            })}

            {/* mountains */}
            <g className="amap-mountains">
              {MOUNTAIN_XY.map(([x, y], i) => (
                <g key={i} transform={at(x, y, 0.8 + ((i * 37) % 5) / 10)} style={{ animationDelay: `${1 + i * 0.03}s` }}>
                  <path d="M-11 6L-3-7 1-1 4-5 11 6" />
                  <path d="M-3-7L-1 6M4-5L5 6" className="thin" />
                </g>
              ))}
              {PEAKS.map((p) => (
                <g key={p.label} transform={at(px(p.lon), py(p.lat))}>
                  <path d="M-14 8L0-12 14 8" />
                  <path d="M-5-5L0-1 5-5" className="thin" />
                  <text y={p.labelY ?? 22} className="amap-peak">{p.label}</text>
                </g>
              ))}
            </g>

            {/* rivers */}
            {RIVERS.map((r, i) => (
              <path key={i} d={line(r)} className="amap-river" pathLength={1} style={{ animationDelay: `${1.4 + i * 0.15}s` }} />
            ))}

            {/* villages + municipal borders, only once zoomed in */}
            {showVillages && (
              <g className="amap-villages">
                <path d={ADJARA_MUNICIPAL_BORDERS_D} className="amap-muni-borders" />
                {ADJARA_MUNICIPALITIES.map((m) => (
                  <g key={m.id}>
                    {m.villages.map(([name, lon, lat]) => {
                      const id = `${m.id}:${name}`
                      return (
                        <g
                          key={id}
                          className={`amap-village${focusedVillage === id ? " on" : ""}`}
                          transform={at(px(lon), py(lat), 0.9)}
                          onClick={() => setFocusedVillage(id)}
                        >
                          <circle r="3.2" />
                          <text
                            y="-6"
                            className={labelled.has(id) || focusedVillage === id ? "show" : undefined}
                          >
                            {name}
                          </text>
                        </g>
                      )
                    })}
                    <g transform={at(px(m.lon), py(m.lat), 1.1)}><text className="amap-muni-label">{m.name}</text></g>
                  </g>
                ))}
              </g>
            )}

            {/* neighbours */}
            {NEIGHBOURS.map((n) => (
              <g key={n.label} transform={at(px(n.lon), py(n.lat))}><text className="amap-neighbour">{n.label}</text></g>
            ))}

            {/* decorative monuments */}
            {DECOR.map((d, i) => (
              <g key={d.label} className="amap-decor" transform={at(px(d.lon), py(d.lat))}>
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
                  transform={at(px(r.lon), py(r.lat))}
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
            </g>

            {/* compass rose — map furniture, stays put while the map zooms */}
            <g className="amap-compass" transform={`translate(${px(40.5)} ${py(42.55)})`}>
              <g className="spin">
                <circle r="34" className="ring" />
                <circle r="27" className="ring thin" />
                <path d="M0-44L6-6 0 0-6-6ZM0 44L6 6 0 0-6 6ZM-44 0L-6-6 0 0-6 6ZM44 0L6-6 0 0 6 6Z" className="star" />
                <path d="M-22-22L-3-3M22 22L3 3M22-22L3-3M-22 22L-3 3" className="thin" />
              </g>
              <text y="-50" className="amap-n">N</text>
            </g>

            {/* title cartouche */}
            {/* the unroll animation sets `transform`, so it must live on an inner group or it wipes the translate */}
            <g transform={`translate(${W / 2} 52)`}>
            <g className="amap-title">
              <path d="M-330-30H330Q350-30 350-10V10Q350 30 330 30H-330Q-350 30-350 10V-10Q-350-30-330-30Z" className="banner" />
              <path d="M-350-10Q-372-24-382-6Q-372 4-350 6M350-10Q372-24 382-6Q372 4 350 6" className="curl" />
              <circle cx="-312" r="17" className="seal" />
              <circle cx="312" r="17" className="seal" />
              <path d="M-312-9V9M-321 0H-303M312-9V9M303 0H321" className="seal-cross" />
              <text y="11" className="amap-title-text">ქართული ხუროთმოძღვრების ძეგლები</text>
              <text y="48" className="amap-title-sub">MONUMENTS OF GEORGIAN ARCHITECTURE</text>
            </g>
            </g>
          </svg>

          <div className="amap-zoom-ctl">
            <button onClick={() => zoomAt(1.6)} disabled={zoom.k >= MAX_ZOOM} aria-label="გადიდება"><Plus size={18} /></button>
            <button onClick={() => zoomAt(1 / 1.6)} disabled={zoom.k <= 1} aria-label="დაპატარავება"><Minus size={18} /></button>
            <button onClick={() => setZoom({ k: 1, tx: 0, ty: 0 })} disabled={zoom.k <= 1} aria-label="საწყისი ხედი"><RotateCcw size={16} /></button>
          </div>

          {/* the region card would cover the villages, so it only appears at overview zoom */}
          {active && tipAt && tipVisible && !showVillages && (
            <div
              className={`amap-tip${tipAt.x > W * 0.62 ? " flip" : ""}${tipAt.y < H * 0.4 ? " below" : ""}`}
              style={{ left: `${(tipAt.x / W) * 100}%`, top: `${(tipAt.y / H) * 100}%` }}
              key={active.key}
            >
              <img src={active.img} alt={active.name} />
              <div className="amap-tip-body">
                <b>{active.name}</b>
                <span className="sub">{active.sub}</span>
                <p>{active.desc}</p>
                {active.linked && <button onClick={() => onOpen(active.key)}>კუთხის გვერდი →</button>}
              </div>
            </div>
          )}
        </div>

        {medallionColumn(medallions.slice(0, half), "right")}
      </div>
    </div>
  )
}
