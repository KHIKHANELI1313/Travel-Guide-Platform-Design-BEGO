import { GEORGIA_REGIONS } from "@/data/georgiaRegions"

type GeorgiaRegionsMapProps = {
  onSelectRegion: (regionId: string) => void
}

export default function GeorgiaRegionsMap({ onSelectRegion }: GeorgiaRegionsMapProps) {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-10">
      <div className="text-center mb-8">
        <p className="text-[#1677FF] text-sm font-semibold uppercase tracking-wider mb-2">Regions of Georgia</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">საქართველოს კუთხეები და ტრადიციები</h2>
        <p className="text-[#94A3B8] mt-2 max-w-2xl mx-auto">
          დააჭირეთ თითოეულ კუთხეს, რომ გაიცნოთ მისი ცნობილი ღირსშესანიშნაობა და ტრადიცია
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {GEORGIA_REGIONS.map((region, i) => (
          <button
            key={region.id}
            onClick={() => onSelectRegion(region.id)}
            className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden cursor-pointer bg-gray-300 text-left"
          >
            <img
              src={region.image}
              alt={region.landmark}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute top-3 left-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-[#111827] shadow">
              {i + 1}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-bold text-base sm:text-lg leading-tight">{region.name}</h3>
              <p className="text-white/70 text-xs mt-0.5 truncate">{region.landmark}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
