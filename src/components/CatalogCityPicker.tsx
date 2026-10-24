import { Building2, Check } from "lucide-react"
import { getCitiesInRegion, getCityPricing } from "../data/destinations/catalog"

type CatalogCityPickerProps = {
  countryName: string
  regionName: string
  selectedCity: string | null
  onSelectCity: (city: string) => void
}

export default function CatalogCityPicker({
  countryName,
  regionName,
  selectedCity,
  onSelectCity,
}: CatalogCityPickerProps) {
  const cities = getCitiesInRegion(countryName, regionName)

  return (
    <div className="animate-[fadeSlide_0.3s_ease] rounded-2xl border border-white/50 bg-white/80 p-5 shadow-xl shadow-black/10 backdrop-blur-xl sm:p-6">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8]">Choose a city</p>
          <p className="mt-0.5 text-sm text-slate-600">
            Cities in <span className="font-semibold text-[#111827]">{regionName}</span>
          </p>
        </div>
        {selectedCity && (
          <p className="inline-flex items-center gap-1.5 rounded-full bg-[#1677FF]/10 px-3 py-1 text-xs font-semibold text-[#1677FF]">
            <Check className="h-3.5 w-3.5" />
            {selectedCity}
          </p>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {cities.map((cityName) => {
          const pricing = getCityPricing(countryName, regionName, cityName)
          const active = selectedCity === cityName
          return (
            <button
              key={cityName}
              type="button"
              onClick={() => onSelectCity(cityName)}
              className={`group flex cursor-pointer overflow-hidden rounded-2xl border text-left transition ${
                active
                  ? "border-[#1677FF] ring-2 ring-[#1677FF]/25"
                  : "border-gray-200 hover:border-[#1677FF]/40"
              }`}
            >
              <img
                src={pricing?.image}
                alt=""
                className="h-20 w-20 sm:h-24 sm:w-24 shrink-0 object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 p-3">
                <div className="flex min-w-0 items-center gap-2">
                  <Building2 className="h-4 w-4 shrink-0 text-[#1677FF]" />
                  <span className="truncate text-sm font-bold text-[#111827]">{cityName}</span>
                </div>
                <p className="line-clamp-2 text-xs text-slate-500">{pricing?.tagline}</p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
