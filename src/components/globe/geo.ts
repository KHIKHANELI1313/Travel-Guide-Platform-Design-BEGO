export type GeoFeature = {
  type: string
  properties: Record<string, string | number | undefined>
  geometry: {
    type: string
    coordinates: unknown
  }
}

export function featureName(f: GeoFeature): string {
  const p = f.properties
  return String(p.ADMIN || p.NAME || p.name || p.NAME_EN || "")
}

type LngLat = [number, number]

function ringCoords(geom: GeoFeature["geometry"]): LngLat[] {
  const coords = geom.coordinates as number[][][] | number[][][][]
  if (geom.type === "Polygon") {
    return (coords as number[][][])[0] as LngLat[]
  }
  if (geom.type === "MultiPolygon") {
    const polys = coords as number[][][][]
    let best: LngLat[] = polys[0]?.[0] as LngLat[]
    let bestLen = 0
    for (const poly of polys) {
      const ring = poly[0] as LngLat[]
      if (ring?.length > bestLen) {
        best = ring
        bestLen = ring.length
      }
    }
    return best ?? []
  }
  return []
}

/** Spherical centroid + angular span for camera framing. */
export function featureCameraTarget(f: GeoFeature): { lat: number; lng: number; altitude: number } {
  const ring = ringCoords(f.geometry)
  if (!ring.length) return { lat: 20, lng: 0, altitude: 1.2 }

  let x = 0
  let y = 0
  let z = 0
  let minLat = 90
  let maxLat = -90
  let minLng = 180
  let maxLng = -180

  for (const [lng, lat] of ring) {
    const la = (lat * Math.PI) / 180
    const ln = (lng * Math.PI) / 180
    x += Math.cos(la) * Math.cos(ln)
    y += Math.cos(la) * Math.sin(ln)
    z += Math.sin(la)
    minLat = Math.min(minLat, lat)
    maxLat = Math.max(maxLat, lat)
    minLng = Math.min(minLng, lng)
    maxLng = Math.max(maxLng, lng)
  }

  const n = ring.length
  x /= n
  y /= n
  z /= n
  const hyp = Math.sqrt(x * x + y * y)
  const lat = (Math.atan2(z, hyp) * 180) / Math.PI
  const lng = (Math.atan2(y, x) * 180) / Math.PI

  let dLng = maxLng - minLng
  if (dLng > 180) dLng = 360 - dLng
  const span = Math.max(maxLat - minLat, dLng)
  const altitude = Math.min(1.85, Math.max(0.42, 0.28 + span * 0.045))

  return { lat, lng, altitude }
}
