import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Globe, { type GlobeMethods } from "react-globe.gl"
import {
  ACESFilmicToneMapping,
  AmbientLight,
  DirectionalLight,
  Mesh,
  MeshPhongMaterial,
  SRGBColorSpace,
  SphereGeometry,
  TextureLoader,
} from "three"
import { findCountry } from "../data/countries"
import { COUNTRIES_GEOJSON, globeTextures, pickTextureQuality } from "./globe/assets"
import { createDayNightMaterial, sunPositionAt } from "./globe/dayNightMaterial"
import { featureCameraTarget, featureName, type GeoFeature } from "./globe/geo"

type HomeGlobeProps = {
  featuredCountries: string[]
  onCountrySelect: (countryName: string) => void
}

function resolveCountryName(geoName: string): string | null {
  return findCountry(geoName)?.name ?? null
}

const FLY_MS = 1700
const HOLD_MS = 380
const FADE_MS = 520

export default function HomeGlobe({ featuredCountries, onCountrySelect }: HomeGlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<GlobeMethods | undefined>(undefined)
  const stopRotateRef = useRef<(() => void) | null>(null)
  const cloudsRef = useRef<Mesh | null>(null)
  const cloudsRafRef = useRef(0)
  const sunLightRef = useRef<DirectionalLight | null>(null)
  const transitioningRef = useRef(false)
  const materialRef = useRef<Awaited<ReturnType<typeof createDayNightMaterial>> | null>(null)
  const hasInteracted = useRef(false)
  const timersRef = useRef<number[]>([])
  const mountedRef = useRef(true)

  const quality = useMemo(() => pickTextureQuality(), [])
  const textures = useMemo(() => globeTextures(quality), [quality])

  const [countries, setCountries] = useState<GeoFeature[]>([])
  const [hoverD, setHoverD] = useState<GeoFeature | null>(null)
  const [selectedD, setSelectedD] = useState<GeoFeature | null>(null)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const [hoveredLabel, setHoveredLabel] = useState("")
  const [ready, setReady] = useState(false)
  const [globeMaterial, setGlobeMaterial] = useState<Awaited<
    ReturnType<typeof createDayNightMaterial>
  > | null>(null)
  const [phase, setPhase] = useState<"loading" | "live" | "flying" | "fading">("loading")

  const featuredSet = useMemo(() => new Set(featuredCountries), [featuredCountries])

  useEffect(() => {
    let cancelled = false
    fetch(COUNTRIES_GEOJSON)
      .then((r) => r.json())
      .then((geo) => {
        if (!cancelled) setCountries(geo.features ?? [])
      })
      .catch(() => {
        if (!cancelled) setCountries([])
      })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    let cancelled = false
    createDayNightMaterial(textures.day, textures.night, textures.bump)
      .then((mat) => {
        if (cancelled) {
          mat.dispose()
          return
        }
        materialRef.current = mat
        setGlobeMaterial(mat)
      })
      .catch(() => {
        if (!cancelled) setGlobeMaterial(null)
      })
    return () => {
      cancelled = true
      materialRef.current?.dispose()
      materialRef.current = null
    }
  }, [textures.day, textures.night, textures.bump])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => setSize({ w: el.clientWidth, h: el.clientHeight })
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
      timersRef.current.forEach((id) => window.clearTimeout(id))
      timersRef.current = []
      cancelAnimationFrame(cloudsRafRef.current)
      const globe = globeRef.current
      const stop = stopRotateRef.current
      if (globe && stop) globe.controls().removeEventListener("start", stop)
      if (cloudsRef.current && globe) {
        globe.scene().remove(cloudsRef.current)
        cloudsRef.current.geometry.dispose()
        const mat = cloudsRef.current.material
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose())
        else mat.dispose()
        cloudsRef.current = null
      }
    }
  }, [])

  const schedule = useCallback((fn: () => void, ms: number) => {
    const id = window.setTimeout(() => {
      timersRef.current = timersRef.current.filter((t) => t !== id)
      if (mountedRef.current) fn()
    }, ms)
    timersRef.current.push(id)
  }, [])

  const setupScene = useCallback(() => {
    const globe = globeRef.current
    if (!globe) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    globe.pointOfView({ lat: 18, lng: 12, altitude: 2.25 }, 0)

    const controls = globe.controls()
    controls.enableDamping = true
    controls.dampingFactor = 0.065
    controls.rotateSpeed = 0.55
    controls.zoomSpeed = 0.7
    controls.minDistance = 140
    controls.maxDistance = 480
    controls.enablePan = false

    const renderer = globe.renderer()
    renderer.outputColorSpace = SRGBColorSpace
    renderer.toneMapping = ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.12
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality === "high" ? 2 : 1.5))

    const scene = globe.scene()
    scene.background = null

    // Soft fill + sun key light
    if (!scene.getObjectByName("tw-ambient")) {
      const amb = new AmbientLight(0x6b8cbe, 0.55)
      amb.name = "tw-ambient"
      scene.add(amb)
    }
    if (!sunLightRef.current) {
      const sun = new DirectionalLight(0xfff2dd, 1.35)
      sun.name = "tw-sun"
      sun.position.set(1, 0.35, 0.6)
      scene.add(sun)
      sunLightRef.current = sun
    }

    if (stopRotateRef.current) {
      controls.removeEventListener("start", stopRotateRef.current)
    }
    const stopRotate = () => {
      hasInteracted.current = true
      controls.autoRotate = false
    }
    stopRotateRef.current = stopRotate
    controls.addEventListener("start", stopRotate)

    if (!reduceMotion && !hasInteracted.current && !transitioningRef.current) {
      controls.autoRotate = true
      controls.autoRotateSpeed = 0.32
    }

    // Animated cloud shell
    if (!cloudsRef.current) {
      const loader = new TextureLoader()
      loader.load(textures.clouds, (cloudsTexture) => {
        const g = globeRef.current
        if (!g || cloudsRef.current) return
        cloudsTexture.colorSpace = SRGBColorSpace
        const radius = g.getGlobeRadius() * 1.004
        const clouds = new Mesh(
          new SphereGeometry(radius, textures.cloudSegments, textures.cloudSegments),
          new MeshPhongMaterial({
            map: cloudsTexture,
            transparent: true,
            opacity: 0.55,
            depthWrite: false,
            shininess: 2,
          }),
        )
        clouds.name = "tw-clouds"
        g.scene().add(clouds)
        cloudsRef.current = clouds

        const spin = () => {
          if (cloudsRef.current) {
            cloudsRef.current.rotation.y -= 0.00035
          }
          cloudsRafRef.current = requestAnimationFrame(spin)
        }
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          cloudsRafRef.current = requestAnimationFrame(spin)
        }
      })
    }

    setReady(true)
    setPhase((p) => (p === "loading" ? "live" : p))
  }, [quality, textures.cloudSegments, textures.clouds])

  // Sun position + terminator updates
  useEffect(() => {
    if (!ready || !globeMaterial) return
    let raf = 0
    let last = 0

    const tick = (t: number) => {
      if (t - last > 250) {
        last = t
        const [lng, lat] = sunPositionAt(Date.now())
        globeMaterial.uniforms.sunPosition.value.set(lng, lat)
        const sun = sunLightRef.current
        if (sun) {
          const phi = ((90 - lat) * Math.PI) / 180
          const theta = ((90 - lng) * Math.PI) / 180
          sun.position.set(
            Math.sin(phi) * Math.cos(theta),
            Math.cos(phi),
            Math.sin(phi) * Math.sin(theta),
          )
          sun.position.normalize().multiplyScalar(400)
        }
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [ready, globeMaterial])

  const isKnown = useCallback((d: GeoFeature) => Boolean(resolveCountryName(featureName(d))), [])

  const isFeatured = useCallback(
    (d: GeoFeature) => {
      const resolved = resolveCountryName(featureName(d))
      return Boolean(resolved && featuredSet.has(resolved))
    },
    [featuredSet],
  )

  const handleHover = useCallback(
    (d: GeoFeature | null) => {
      if (transitioningRef.current) return
      setHoverD(d)
      if (!d) {
        setHoveredLabel("")
        if (containerRef.current) containerRef.current.style.cursor = "grab"
        return
      }
      const geo = featureName(d)
      const resolved = resolveCountryName(geo)
      const country = resolved ? findCountry(resolved) : undefined
      setHoveredLabel(country ? `${country.flag} ${country.name}` : geo)
      if (containerRef.current) {
        containerRef.current.style.cursor = resolved ? "pointer" : "grab"
      }
    },
    [],
  )

  const handleClick = useCallback(
    (d: GeoFeature) => {
      if (transitioningRef.current) return
      const resolved = resolveCountryName(featureName(d))
      if (!resolved) return

      const globe = globeRef.current
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

      transitioningRef.current = true
      setSelectedD(d)
      setHoverD(d)
      setPhase("flying")
      hasInteracted.current = true

      if (globe) {
        const controls = globe.controls()
        controls.autoRotate = false
        controls.enabled = false
      }

      const finish = () => {
        setPhase("fading")
        schedule(() => onCountrySelect(resolved), FADE_MS)
      }

      if (!globe || reduceMotion) {
        schedule(finish, 120)
        return
      }

      const target = featureCameraTarget(d)
      globe.pointOfView(
        { lat: target.lat, lng: target.lng, altitude: target.altitude },
        FLY_MS,
      )

      schedule(finish, FLY_MS + HOLD_MS)
    },
    [onCountrySelect, schedule],
  )

  const showLoader = phase === "loading" || (!ready && !globeMaterial)
  const isTransitioning = phase === "flying" || phase === "fading"

  return (
    <div
      ref={containerRef}
      className={`home-globe${isTransitioning ? " home-globe--transitioning" : ""}`}
    >
      {size.w > 0 && size.h > 0 && (
        <Globe
          ref={globeRef}
          width={size.w}
          height={size.h}
          backgroundColor="rgba(1, 4, 14, 0)"
          backgroundImageUrl={textures.stars}
          globeMaterial={globeMaterial ?? undefined}
          globeImageUrl={globeMaterial ? undefined : textures.day}
          bumpImageUrl={globeMaterial ? undefined : textures.bump}
          atmosphereColor="#4da3ff"
          atmosphereAltitude={textures.atmosphereAltitude}
          rendererConfig={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          polygonsData={countries}
          polygonAltitude={(d) => {
            const feat = d as GeoFeature
            if (feat === selectedD) return 0.085
            if (feat === hoverD) return 0.055
            if (isFeatured(feat)) return 0.028
            if (isKnown(feat)) return 0.014
            return 0.006
          }}
          polygonCapColor={(d) => {
            const feat = d as GeoFeature
            if (feat === selectedD) return "rgba(22, 119, 255, 0.95)"
            if (feat === hoverD) return "rgba(22, 119, 255, 0.82)"
            if (isFeatured(feat)) return "rgba(22, 119, 255, 0.48)"
            if (isKnown(feat)) return "rgba(22, 119, 255, 0.2)"
            return "rgba(255, 255, 255, 0.05)"
          }}
          polygonSideColor={() => "rgba(8, 24, 48, 0.4)"}
          polygonStrokeColor={() => "rgba(255, 255, 255, 0.28)"}
          polygonsTransitionDuration={220}
          onGlobeReady={setupScene}
          onZoom={(pov) => {
            const mat = materialRef.current
            if (mat) mat.uniforms.globeRotation.value.set(pov.lng, pov.lat)
          }}
          onPolygonHover={(d) => handleHover((d as GeoFeature) ?? null)}
          onPolygonClick={(d) => handleClick(d as GeoFeature)}
        />
      )}

      {showLoader && (
        <div className="home-globe__loader" aria-busy="true" aria-live="polite">
          <div className="home-globe__loader-orb" />
          <p className="home-globe__loader-title">TravelWorld</p>
          <p className="home-globe__loader-sub">Preparing Earth…</p>
        </div>
      )}

      {hoveredLabel && !isTransitioning && (
        <div className="home-globe__tooltip" aria-live="polite">
          {hoveredLabel}
          <span className="home-globe__tooltip-hint"> · Open guide</span>
        </div>
      )}

      {phase === "flying" && selectedD && (
        <div className="home-globe__fly-label" aria-live="polite">
          {(() => {
            const name = resolveCountryName(featureName(selectedD))
            const c = name ? findCountry(name) : undefined
            return c ? `${c.flag} ${c.name}` : featureName(selectedD)
          })()}
        </div>
      )}

      <div
        className={`home-globe__fade${phase === "fading" ? " home-globe__fade--on" : ""}`}
        aria-hidden
      />
    </div>
  )
}
