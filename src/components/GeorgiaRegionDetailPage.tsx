import { useState } from "react"
import { ArrowLeft, ChevronDown, ChevronRight, LayoutGrid, MapPin, Search, Sparkles } from "lucide-react"
import { findGeorgiaRegion, GEORGIA_REGIONS } from "@/data/georgiaRegions"
import { SERVICE_DIRECTORY, serviceItemLabel } from "@/data/regionServices"
import { serviceCategoryIcon } from "./serviceCategoryIcons"

type GeorgiaRegionDetailPageProps = {
  regionId: string
  onNavigateHome: () => void
  onNavigateCountry: () => void
  onSelectRegion: (regionId: string) => void
  onBack: () => void
}

// "აჭარა" → "აჭარის", "სვანეთი" → "სვანეთის"
const genitive = (name: string) => name.replace(/[აი]$/, "") + "ის"

function RegionServices({ regionId, regionName }: { regionId: string; regionName: string }) {
  const [open, setOpen] = useState<Set<string>>(() => new Set())
  const [query, setQuery] = useState("")
  const q = query.trim().toLowerCase()
  const categories = SERVICE_DIRECTORY.map((c) => {
    const items = c.items.map((item) => serviceItemLabel(item, regionId))
    const hit = !q || c.title.toLowerCase().includes(q)
    return { ...c, items: hit ? items : items.filter((i) => i.toLowerCase().includes(q)), hit }
  }).filter((c) => c.hit || c.items.length > 0)
  const total = SERVICE_DIRECTORY.reduce((n, c) => n + c.items.length, 0)

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  return (
    <section className="mt-8 rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <LayoutGrid className="h-4 w-4 text-[#1677FF]" />
            <h3 className="font-bold text-[#111827]">{genitive(regionName)} სერვისები</h3>
          </div>
          <p className="text-[#94A3B8] text-sm mt-1">{SERVICE_DIRECTORY.length} კატეგორია · {total} ქვეკატეგორია</p>
        </div>
        <label className="relative w-full sm:w-64">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="მოძებნე სერვისი…"
            className="w-full rounded-xl border border-gray-200 bg-[#F5F7FA] py-2 pl-9 pr-3 text-sm text-[#111827] outline-none focus:border-[#1677FF] focus:bg-white"
          />
        </label>
      </div>

      {categories.length === 0 && <p className="text-sm text-[#94A3B8] py-6 text-center">„{query}“ ვერ მოიძებნა</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
        {categories.map((c) => {
          const Icon = serviceCategoryIcon(c.id)
          const isOpen = Boolean(q) || open.has(c.id)
          const num = SERVICE_DIRECTORY.findIndex((x) => x.id === c.id) + 1
          return (
            <div key={c.id} className={`rounded-xl border transition-colors ${isOpen ? "border-[#1677FF]/30 bg-[#F8FBFF]" : "border-gray-100"}`}>
              <button
                onClick={() => toggle(c.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-3 p-3 text-left cursor-pointer"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1677FF]/10 text-[#1677FF]">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-semibold text-[#94A3B8]">{num}</span>
                  <span className="block text-sm font-semibold text-[#111827] leading-snug">{c.title}</span>
                </span>
                <span className="shrink-0 rounded-full bg-[#F1F5F9] px-2 py-0.5 text-xs font-medium text-[#475569]">{c.items.length}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-[#94A3B8] transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="flex flex-wrap gap-1.5 px-3 pb-3">
                  {c.items.map((item) => (
                    <span key={item} className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-[#475569]">{item}</span>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default function GeorgiaRegionDetailPage({
  regionId,
  onNavigateHome,
  onNavigateCountry,
  onSelectRegion,
  onBack,
}: GeorgiaRegionDetailPageProps) {
  const region = findGeorgiaRegion(regionId) ?? GEORGIA_REGIONS[0]
  const others = GEORGIA_REGIONS.filter((r) => r.id !== region.id)

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <section className="group relative h-[42svh] min-h-[280px] sm:h-[55vh] flex items-end overflow-hidden">
        <img src={region.image} alt={region.landmark} className="absolute inset-0 w-full h-full object-cover bg-gray-800 transition-transform duration-[1500ms] ease-out group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <button
          onClick={onBack}
          className="absolute left-4 sm:left-6 lg:left-10 top-6 sm:top-8 z-20 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md hover:bg-black/55 transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" /> უკან
        </button>
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
          <h2 className="text-2xl font-bold text-[#111827] mb-4">{genitive(region.name)} შესახებ</h2>
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

          <RegionServices key={region.id} regionId={region.id} regionName={region.name} />

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
