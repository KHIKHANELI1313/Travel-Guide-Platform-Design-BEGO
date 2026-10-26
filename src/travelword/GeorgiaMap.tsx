import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { ALL_PLACES, PRICED_CITIES } from "./data"

/**
 * Leaflet map of Georgia with a marker per town (real coordinates).
 * Markers for towns that have catalog prices are blue; the rest are teal.
 */
export default function GeorgiaMap({ activeDestination, onSelectCity }: {
  activeDestination: string | null
  onSelectCity: (city: string, destinationId: string) => void
}) {
  const el = useRef<HTMLDivElement>(null)
  const map = useRef<L.Map | null>(null)
  const layer = useRef<L.LayerGroup | null>(null)
  const select = useRef(onSelectCity)
  select.current = onSelectCity

  useEffect(() => {
    if (!el.current) return
    const m = L.map(el.current, { scrollWheelZoom: false, zoomControl: false, attributionControl: true })
      .setView([42.15, 43.6], 7)
    L.control.zoom({ position: "bottomright" }).addTo(m)
    // Esri dark gray canvas — keyless (CARTO basemaps now require an API key)
    const esri = "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas"
    L.tileLayer(`${esri}/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}`, {
      maxZoom: 16,
      attribution: 'Tiles &copy; <a href="https://www.esri.com/">Esri</a> — Esri, HERE, Garmin, &copy; OpenStreetMap contributors',
    }).addTo(m)
    L.tileLayer(`${esri}/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}`, { maxZoom: 16 }).addTo(m)
    map.current = m
    layer.current = L.layerGroup().addTo(m)
    return () => { m.remove(); map.current = null }
  }, [])

  useEffect(() => {
    const m = map.current, g = layer.current
    if (!m || !g) return
    g.clearLayers()
    const shown = ALL_PLACES.filter(p => !activeDestination || p.destinationId === activeDestination)
    for (const p of shown) {
      const priced = PRICED_CITIES.includes(p.name)
      const marker = L.marker([p.lat, p.lng], {
        icon: L.divIcon({ className: "", html: `<span class="tw-pin${priced ? " tw-pin--priced" : ""}"></span>`, iconSize: [16, 16], iconAnchor: [8, 8] }),
        keyboard: true, alt: p.name,
      }).addTo(g)
      const box = document.createElement("div")
      box.className = "tw-pop"
      box.innerHTML = `<p class="tw-pop__name"></p><p class="tw-pop__meta"></p><div class="tw-pop__actions"></div>`
      box.querySelector(".tw-pop__name")!.textContent = p.name
      box.querySelector(".tw-pop__meta")!.textContent = priced ? "Catalog estimates available" : "No price data yet"
      const actions = box.querySelector(".tw-pop__actions")!
      if (priced) {
        const btn = document.createElement("button")
        btn.type = "button"
        btn.textContent = "Compare prices"
        btn.onclick = () => select.current(p.name, p.destinationId)
        actions.appendChild(btn)
      }
      const dir = document.createElement("a")
      dir.href = `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`
      dir.target = "_blank"
      dir.rel = "noopener noreferrer"
      dir.textContent = "Directions ↗"
      actions.appendChild(dir)
      marker.bindPopup(box, { closeButton: false })
      marker.bindTooltip(p.name, { direction: "top", offset: [0, -8] })
    }
    if (shown.length) {
      const bounds = L.latLngBounds(shown.map(p => [p.lat, p.lng] as [number, number]))
      // leave room for the side panel that covers the left of the map on desktop
      const wide = m.getSize().x >= 768
      m.flyToBounds(bounds.pad(activeDestination ? 0.6 : 0.15), {
        maxZoom: activeDestination ? 10 : 8, duration: 0.8,
        paddingTopLeft: wide ? [440, 40] : [20, 170], paddingBottomRight: [40, 40],
      })
    }
  }, [activeDestination])

  return <div ref={el} className="h-full w-full" role="region" aria-label="Map of Georgia" />
}
