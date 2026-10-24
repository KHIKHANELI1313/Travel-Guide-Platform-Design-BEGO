import { Building2, Check } from "lucide-react"
import type { Country } from "../data/countries"
import { getCitiesForCountry, type CityOption } from "../data/cities"

type CityPickerProps = {
  country: Country
  selectedCity: string | null
  onSelectCity: (city: string) => void
}

export default function CityPicker({ country, selectedCity, onSelectCity }: CityPickerProps) {
  const cities = getCitiesForCountry(country)

  return (
    <div className="animate-[fadeSlide_0.3s_ease] rounded-2xl border border-white/50 bg-white/80 p-5 shadow-xl shadow-black/10 backdrop-blur-xl sm:p-6">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8]">
            Choose a city
          </p>
          <p className="mt-0.5 text-sm text-slate-600">
            <span className="mr-1.5 text-lg leading-none">{country.flag}</span>
            Cities in <span className="font-semibold text-[#111827]">{country.name}</span>
          </p>
        </div>
        {selectedCity && (
          <p className="inline-flex items-center gap-1.5 rounded-full bg-[#1677FF]/10 px-3 py-1 text-xs font-semibold text-[#1677FF]">
            <Check className="h-3.5 w-3.5" />
            {selectedCity}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {cities.map((city: CityOption) => {
          const active = selectedCity === city.name
          return (
            <button
              key={city.name}
              type="button"
              onClick={() => onSelectCity(city.name)}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
                active
                  ? "border-[#1677FF] bg-[#1677FF] text-white shadow-md shadow-[#1677FF]/30"
                  : "border-gray-200 bg-white/70 text-slate-700 hover:border-[#1677FF]/40 hover:bg-[#1677FF]/05"
              }`}
            >
              <Building2 className={`h-4 w-4 ${active ? "text-white/90" : "text-[#1677FF]"}`} />
              <span>{city.name}</span>
              {city.isCapital && (
                <span
                  className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                    active ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  Capital
                </span>
              )}
            </button>
          )
        })}
      </div>

      {!selectedCity && (
        <p className="mt-3 text-xs text-slate-400">Select a city to continue with travel dates.</p>
      )}
    </div>
  )
}
