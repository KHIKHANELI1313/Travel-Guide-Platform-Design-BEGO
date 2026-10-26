import { useEffect, useMemo, useRef, useState } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { Bridge, Castle, ChevronDown, Church, MapPin, RotateCcw } from "lucide-react"
import "./antique-map.css"
import type { MapAreaId } from "./georgiaMapGeo"
import { serviceCategoryIcon } from "./serviceCategoryIcons"
import { SERVICE_DIRECTORY, serviceItemLabel } from "@/data/regionServices"
import { ADJARA_MUNICIPALITIES } from "@/data/adjaraVillages"
import { MONUMENTS, type MonumentKind } from "@/data/monuments"

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

const AREA_NAME: Record<MapAreaId, string> = {
  abkhazia: "აფხაზეთი", svaneti: "სვანეთი", samegrelo: "სამეგრელო", racha: "რაჭა-ლეჩხუმი", imereti: "იმერეთი",
  guria: "გურია", adjara: "აჭარა", samtskhe: "სამცხე-ჯავახეთი", kartli: "შიდა ქართლი", kvemo: "ქვემო ქართლი",
  tbilisi: "თბილისი", mtiuleti: "მთიულეთი", khevi: "ხევი", khevsureti: "ხევსურეთი", tusheti: "თუშეთი", kakheti: "კახეთი",
}

// region card key (English name) → the region it covers
const MARKER_AREA: Record<string, MapAreaId> = {
  Svaneti: "svaneti", Kakheti: "kakheti", Tbilisi: "tbilisi", Adjara: "adjara", Samegrelo: "samegrelo",
  Imereti: "imereti", Tusheti: "tusheti", Khevsureti: "khevsureti", Khevi: "khevi",
  "Samtskhe-Javakheti": "samtskhe", "Racha-Lechkhumi": "racha", Abkhazia: "abkhazia",
}

const KINDS: { id: MonumentKind; label: string; Icon: typeof Church }[] = [
  { id: "church", label: "ეკლესიები", Icon: Church },
  { id: "fortress", label: "ციხეები", Icon: Castle },
  { id: "bridge", label: "ხიდები", Icon: Bridge },
]
const KIND_LABEL: Record<MonumentKind, string> = { church: "ეკლესია · მონასტერი", fortress: "ციხე-სიმაგრე", bridge: "ხიდი" }
// marker glyphs are rendered once to plain SVG strings for Leaflet's divIcon
const KIND_SVG = Object.fromEntries(
  KINDS.map((k) => [k.id, renderToStaticMarkup(<k.Icon size={15} strokeWidth={2.2} />)]),
) as Record<MonumentKind, string>

const HOME: L.LatLngBoundsExpression = [[41.05, 40.0], [43.6, 46.7]]
const SUBCATEGORY_TOTAL = SERVICE_DIRECTORY.reduce((n, c) => n + c.items.length, 0)
const VILLAGES: Partial<Record<MapAreaId, typeof ADJARA_MUNICIPALITIES>> = { adjara: ADJARA_MUNICIPALITIES }

export default function GeorgiaAntiqueMap({ regions, medallions, onOpen }: GeorgiaAntiqueMapProps) {
  // the services panel follows the last monument or village touched
  const [panelArea, setPanelArea] = useState<MapAreaId>("adjara")
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [panelTab, setPanelTab] = useState<"services" | "villages">("services")
  const [focusedVillage, setFocusedVillage] = useState<string | null>(null)
  const [kinds, setKinds] = useState<Set<MonumentKind>>(() => new Set(KINDS.map((k) => k.id)))
  const panelVillages = VILLAGES[panelArea]
  const half = Math.ceil(medallions.length / 2)

  const regionOf = useMemo(() => {
    const byArea = new Map<MapAreaId, AntiqueMapRegion>()
    for (const r of regions) if (MARKER_AREA[r.key]) byArea.set(MARKER_AREA[r.key], r)
    return byArea
  }, [regions])

  /* ---------- Leaflet ---------- */
  const el = useRef<HTMLDivElement>(null)
  const map = useRef<L.Map | null>(null)
  const layer = useRef<L.LayerGroup | null>(null)
  const villageLayer = useRef<L.LayerGroup | null>(null)
  const open = useRef(onOpen)
  open.current = onOpen

  useEffect(() => {
    if (!el.current) return
    // the wheel zooms around the cursor; Leaflet keeps the zoom smooth with fractional steps
    const m = L.map(el.current, {
      scrollWheelZoom: true, wheelPxPerZoomLevel: 90, zoomSnap: 0.25, zoomDelta: 0.5,
      zoomControl: false, minZoom: 6, maxZoom: 16,
    }).fitBounds(HOME)
    L.control.zoom({ position: "bottomright", zoomInTitle: "გადიდება", zoomOutTitle: "დაპატარავება" }).addTo(m)
    // Esri light gray canvas — keyless (CARTO basemaps now require an API key)
    const esri = "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas"
    L.tileLayer(`${esri}/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}`, {
      maxZoom: 16,
      attribution: 'Tiles &copy; <a href="https://www.esri.com/">Esri</a> — Esri, HERE, Garmin, &copy; OpenStreetMap contributors',
    }).addTo(m)
    L.tileLayer(`${esri}/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}`, { maxZoom: 16 }).addTo(m)
    layer.current = L.layerGroup().addTo(m)
    villageLayer.current = L.layerGroup().addTo(m)
    map.current = m
    return () => { m.remove(); map.current = null }
  }, [])

  // monument markers for the selected kinds
  useEffect(() => {
    const g = layer.current
    if (!g) return
    g.clearLayers()
    for (const mo of MONUMENTS) {
      if (!kinds.has(mo.kind)) continue
      const marker = L.marker([mo.lat, mo.lon], {
        icon: L.divIcon({ className: "", html: `<span class="amap-pin amap-pin--${mo.kind}">${KIND_SVG[mo.kind]}</span>`, iconSize: [30, 30], iconAnchor: [15, 15] }),
        keyboard: true, alt: mo.ka,
      }).addTo(g)
      const region = regionOf.get(mo.area)
      const box = document.createElement("div")
      box.className = "amap-pop"
      box.innerHTML = `<span class="amap-pop__kind"></span><b></b><span class="amap-pop__en"></span><span class="amap-pop__area"></span><div class="amap-pop__actions"></div>`
      box.querySelector(".amap-pop__kind")!.textContent = KIND_LABEL[mo.kind]
      box.querySelector("b")!.textContent = mo.ka
      box.querySelector(".amap-pop__en")!.textContent = mo.en
      box.querySelector(".amap-pop__area")!.textContent = AREA_NAME[mo.area]
      const actions = box.querySelector(".amap-pop__actions")!
      if (region?.linked) {
        const btn = document.createElement("button")
        btn.type = "button"
        btn.textContent = "კუთხის გვერდი →"
        btn.onclick = () => open.current(region.key)
        actions.appendChild(btn)
      }
      const dir = document.createElement("a")
      dir.href = `https://www.google.com/maps/dir/?api=1&destination=${mo.lat},${mo.lon}`
      dir.target = "_blank"
      dir.rel = "noopener noreferrer"
      dir.textContent = "მარშრუტი ↗"
      actions.appendChild(dir)
      marker.bindPopup(box, { closeButton: false, offset: [0, -10] })
      marker.bindTooltip(mo.ka, { direction: "top", offset: [0, -16] })
      marker.on("click", () => setPanelArea(mo.area))
    }
  }, [kinds, regionOf])

  // the focused village gets a marker of its own
  useEffect(() => {
    const g = villageLayer.current
    if (!g) return
    g.clearLayers()
    if (!focusedVillage) return
    const [muniId, name] = focusedVillage.split(":")
    const v = ADJARA_MUNICIPALITIES.find((m) => m.id === muniId)?.villages.find(([n]) => n === name)
    if (!v) return
    L.circleMarker([v[2], v[1]], { radius: 7, weight: 3, color: "#fff", fillColor: "#C8102E", fillOpacity: 1 })
      .bindTooltip(name, { permanent: true, direction: "top", offset: [0, -8] })
      .addTo(g)
  }, [focusedVillage])

  const focusOn = (lon: number, lat: number, zoom = 13) => map.current?.flyTo([lat, lon], zoom, { duration: 0.8 })
  const toggleKind = (k: MonumentKind) =>
    setKinds((s) => {
      const next = new Set(s)
      if (next.has(k)) next.delete(k)
      else next.add(k)
      return next.size ? next : s // keep at least one kind on the map
    })

  const servicesPanel = (
    <aside className="amap-services" aria-label="კუთხის სერვისები">
      <header>
        <span className="eyebrow"><MapPin size={13} /> კუთხე</span>
        <h3 key={panelArea}>{AREA_NAME[panelArea]}</h3>
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
              <button className="muni" onClick={() => focusOn(m.lon, m.lat, 11)}>
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

        <div className="amap-stage">
          <div ref={el} className="amap-leaflet" role="region" aria-label="ქართული ხუროთმოძღვრების ძეგლების რუკა" />

          <div className="amap-head">
            <b>ქართული ხუროთმოძღვრების ძეგლები</b>
            <span>MONUMENTS OF GEORGIAN ARCHITECTURE</span>
          </div>

          <div className="amap-filters" role="group" aria-label="ძეგლების ტიპი">
            {KINDS.map(({ id, label, Icon }) => (
              <button key={id} aria-pressed={kinds.has(id)} className={`amap-filter amap-filter--${id}`} onClick={() => toggleKind(id)}>
                <Icon size={14} strokeWidth={2.2} />
                {label}
                <span>{MONUMENTS.filter((m) => m.kind === id).length}</span>
              </button>
            ))}
          </div>

          <button className="amap-home" onClick={() => map.current?.flyToBounds(HOME, { duration: 0.8 })} aria-label="საწყისი ხედი">
            <RotateCcw size={16} />
          </button>
        </div>

        {medallionColumn(medallions.slice(0, half), "right")}
      </div>
    </div>
  )
}
