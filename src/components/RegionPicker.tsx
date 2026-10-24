import { MapPinned } from "lucide-react"
import { getRegions } from "../data/destinations/catalog"

type RegionPickerProps = {
  countryName: string
  selectedRegion: string | null
  onSelectRegion: (region: string) => void
}

export default function RegionPicker({
  countryName,
  selectedRegion,
  onSelectRegion,
}: RegionPickerProps) {
  const regions = getRegions(countryName)

  if (regions.length === 0) return null

  return (
    <div className="animate-[fadeSlide_0.3s_ease] rounded-2xl border border-white/50 bg-white/80 p-5 shadow-xl shadow-black/10 backdrop-blur-xl sm:p-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8]">Choose a region</p>
      <p className="mt-0.5 text-sm text-slate-600">
        Regions in <span className="font-semibold text-[#111827]">{countryName}</span>
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {regions.map((region) => {
          const active = selectedRegion === region
          return (
            <button
              key={region}
              type="button"
              onClick={() => onSelectRegion(region)}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-medium transition-all ${
                active
                  ? "border-[#1677FF] bg-[#1677FF] text-white shadow-md shadow-[#1677FF]/30"
                  : "border-gray-200 bg-white/70 text-slate-700 hover:border-[#1677FF]/40"
              }`}
            >
              <MapPinned className={`h-4 w-4 ${active ? "text-white/90" : "text-[#1677FF]"}`} />
              {region}
            </button>
          )
        })}
      </div>
    </div>
  )
}
