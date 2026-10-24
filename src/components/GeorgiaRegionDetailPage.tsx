import { ChevronRight, MapPin, Sparkles } from "lucide-react"
import { findGeorgiaRegion, GEORGIA_REGIONS } from "@/data/georgiaRegions"

type GeorgiaRegionDetailPageProps = {
  regionId: string
  onNavigateHome: () => void
  onNavigateCountry: () => void
  onSelectRegion: (regionId: string) => void
}

export default function GeorgiaRegionDetailPage({
  regionId,
  onNavigateHome,
  onNavigateCountry,
  onSelectRegion,
}: GeorgiaRegionDetailPageProps) {
  const region = findGeorgiaRegion(regionId) ?? GEORGIA_REGIONS[0]
  const others = GEORGIA_REGIONS.filter((r) => r.id !== region.id)

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <section className="relative h-[42svh] min-h-[280px] sm:h-[55vh] flex items-end overflow-hidden">
        <img src={region.image} alt={region.landmark} className="absolute inset-0 w-full h-full object-cover bg-gray-800" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/40 to-transparent" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10 pt-20 sm:pt-24 w-full">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-3">
            <button onClick={onNavigateHome} className="text-white/60 text-sm hover:text-white cursor-pointer">Home</button>
            <ChevronRight className="w-4 h-4 text-white/40 shrink-0" />
            <button onClick={onNavigateCountry} className="text-white/60 text-sm hover:text-white cursor-pointer">Georgia</button>
            <ChevronRight className="w-4 h-4 text-white/40 shrink-0" />
            <span className="text-white/60 text-sm truncate">{region.name}</span>
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
            <MapPin className="h-4 w-4" />
            {region.name} · {region.nameEn}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white break-words">{region.landmark}</h1>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-[#111827] mb-4">{region.name}-ს შესახებ</h2>
          <p className="text-[#475569] leading-relaxed text-base sm:text-lg">{region.description}</p>

          <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-4 w-4 text-[#1677FF]" />
              <h3 className="font-bold text-[#111827]">საინტერესო ფაქტები</h3>
            </div>
            <ul className="space-y-3">
              {region.facts.map((fact) => (
                <li key={fact} className="flex gap-3 text-sm sm:text-base text-[#475569]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1677FF] shrink-0" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={onNavigateCountry}
            className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 bg-[#1677FF] text-white rounded-xl text-sm font-semibold hover:bg-blue-600 transition-colors cursor-pointer"
          >
            დაბრუნება საქართველოს გვერდზე <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mb-4">სხვა კუთხეები</h3>
          <div className="space-y-3">
            {others.map((r) => (
              <button
                key={r.id}
                onClick={() => onSelectRegion(r.id)}
                className="group flex w-full items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 text-left hover:border-[#1677FF]/30 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-gray-200">
                  <img src={r.image} alt={r.landmark} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-[#111827] text-sm truncate">{r.name}</p>
                  <p className="text-[#94A3B8] text-xs truncate">{r.landmark}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
