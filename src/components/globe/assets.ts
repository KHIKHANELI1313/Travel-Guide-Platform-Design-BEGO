/** CDN Earth / space textures (equirectangular). */

const THREE_GLOBE = "https://cdn.jsdelivr.net/npm/three-globe/example/img"

export type TextureQuality = "high" | "medium" | "low"

export function pickTextureQuality(): TextureQuality {
  if (typeof window === "undefined") return "medium"
  const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory
  const cores = navigator.hardwareConcurrency ?? 4
  const w = Math.max(window.innerWidth, window.innerHeight)
  if (mem != null && mem <= 4) return "low"
  if (cores <= 4 && w < 1280) return "low"
  if (w >= 2560 && cores >= 8 && (mem == null || mem >= 8)) return "high"
  return "medium"
}

export function globeTextures(quality: TextureQuality) {
  return {
    day: `${THREE_GLOBE}/earth-blue-marble.jpg`,
    night: `${THREE_GLOBE}/earth-night.jpg`,
    bump: `${THREE_GLOBE}/earth-topology.png`,
    water: `${THREE_GLOBE}/earth-water.png`,
    stars: `${THREE_GLOBE}/night-sky.png`,
    clouds:
      "https://raw.githubusercontent.com/turban/webgl-earth/master/images/fair_clouds_4k.png",
    cloudSegments: quality === "high" ? 96 : quality === "medium" ? 72 : 48,
    atmosphereAltitude: quality === "low" ? 0.16 : 0.22,
  } as const
}

export const COUNTRIES_GEOJSON =
  "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
