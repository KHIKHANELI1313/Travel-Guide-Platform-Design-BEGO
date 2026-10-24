import { motion } from "framer-motion"
import { MapPin, Star } from "lucide-react"

type DestinationCardProps = {
  name: string
  region: string
  country: string
  image: string
  tagline: string
  selected?: boolean
  onClick?: () => void
}

export default function DestinationCard({
  name,
  region,
  country,
  image,
  tagline,
  selected = false,
  onClick,
}: DestinationCardProps) {
  return (
    <motion.button
      type="button"
      layout
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group relative w-full overflow-hidden rounded-2xl border text-left shadow-lg transition-shadow cursor-pointer ${
        selected
          ? "border-[#1677FF] shadow-[#1677FF]/25 ring-2 ring-[#1677FF]/30"
          : "border-white/50 shadow-black/10 hover:shadow-xl"
      }`}
    >
      <div className="relative h-44 overflow-hidden sm:h-52">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/25 to-transparent" />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#0B1F3A] backdrop-blur">
          <Star className="h-3 w-3 fill-[#1677FF] text-[#1677FF]" />
          Top pick
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-xl font-bold text-white">{name}</p>
          <p className="mt-1 flex items-center gap-1 text-xs text-white/80">
            <MapPin className="h-3.5 w-3.5" />
            {region}, {country}
          </p>
          <p className="mt-1 line-clamp-2 text-xs text-white/70">{tagline}</p>
        </div>
      </div>
    </motion.button>
  )
}
