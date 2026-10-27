import { useEffect, useState } from "react"
import { Check, MapPinned, Sparkles, Utensils } from "lucide-react"
import type { Country } from "../data/countries"
import { getRegions } from "../data/destinations/catalog"
import {
  getRegionalCulture,
  hasRegionalCulture,
} from "../data/destinations/regionalCulture"

type CountryCultureProps = {
  country: Country
}

function CultureTag({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-gold-400/10 px-3 py-1 text-xs font-semibold text-gold-700">
      {label}
    </span>
  )
}

export default function CountryCulture({ country }: CountryCultureProps) {
  const regions = getRegions(country.name)
  const hasRegions = hasRegionalCulture(country.name) && regions.length > 0
  const [selectedRegion, setSelectedRegion] = useState<string | null>(
    hasRegions ? regions[0] : null,
  )

  useEffect(() => {
    if (hasRegions) setSelectedRegion(getRegions(country.name)[0] ?? null)
    else setSelectedRegion(null)
  }, [country.name, hasRegions])

  const culture = selectedRegion
    ? getRegionalCulture(country.name, selectedRegion)
    : undefined

  if (!hasRegions) {
    return (
      <div className="max-w-3xl">
        <h3 className="font-heading mb-4 text-2xl font-bold text-ink">Culture in {country.name}</h3>
        <p className="mb-4 leading-relaxed text-ink-mute">{country.culture}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {country.tags.map((t) => (
            <CultureTag key={t} label={t} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="animate-[fadeSlide_0.3s_ease] rounded-2xl border border-white/50 bg-white/80 p-5 shadow-xl shadow-black/10 backdrop-blur-xl sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-ink-mute">
          Choose a region
        </p>
        <p className="mt-0.5 text-sm text-ink-soft">
          Regions in <span className="font-semibold text-ink">{country.name}</span>
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {regions.map((region) => {
            const active = selectedRegion === region
            return (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-medium transition-all ${
                  active
                    ? "border-gold-500 bg-forest-900 text-white shadow-md shadow-forest-800/30"
                    : "border-sand-200 bg-white/70 text-ink hover:border-gold-500/40"
                }`}
              >
                <MapPinned className={`h-4 w-4 ${active ? "text-white/90" : "text-gold-700"}`} />
                {region}
              </button>
            )
          })}
        </div>
      </div>

      {culture && (
        <div className="animate-[fadeSlide_0.3s_ease] overflow-hidden rounded-2xl border border-white/60 bg-cream shadow-xl shadow-black/5">
          <div className="group relative h-48 overflow-hidden sm:h-56">
            <img src={culture.image} alt="" className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                Culture
              </p>
              <h3 className="font-heading mt-1 text-2xl font-bold text-white sm:text-3xl">
                {country.flag} {culture.title}
              </h3>
            </div>
          </div>

          <div className="space-y-6 p-5 sm:p-6">
            <p className="text-[0.95rem] leading-relaxed text-ink-soft">{culture.summary}</p>

            <div className="grid gap-4 md:grid-cols-3">
              <section className="rounded-2xl border border-sand-100 bg-paper/80 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-gold-700" />
                  <h4 className="text-sm font-bold text-ink">Highlights</h4>
                </div>
                <ul className="space-y-2">
                  {culture.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-sand-100 bg-paper/80 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <MapPinned className="h-4 w-4 text-gold-700" />
                  <h4 className="text-sm font-bold text-ink">Traditions</h4>
                </div>
                <ul className="space-y-2">
                  {culture.traditions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-sand-100 bg-paper/80 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Utensils className="h-4 w-4 text-gold-700" />
                  <h4 className="text-sm font-bold text-ink">Local flavors</h4>
                </div>
                <ul className="space-y-2">
                  {culture.food.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="flex flex-wrap gap-2">
              {country.tags.map((t) => (
                <CultureTag key={t} label={t} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
