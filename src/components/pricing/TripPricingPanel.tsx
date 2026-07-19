import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Check, ChevronDown } from "lucide-react"
import { getCountryPricing } from "../../data/destinations/catalog"
import { TOURISM_CATEGORIES, unitLabel } from "../../data/destinations/tourismServices"
import BudgetCalculator from "./BudgetCalculator"
import { calculateSelectedServices, formatGel, toggleInList } from "./calc"

type TripPricingPanelProps = {
  country: string
  region: string
  city: string
}

export default function TripPricingPanel({ country }: TripPricingPanelProps) {
  const countryData = getCountryPricing(country)
  const usdRate = countryData?.usdRate ?? 0.37
  const days = 4

  const [travelers, setTravelers] = useState(2)
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [openCategory, setOpenCategory] = useState<string | null>(
    TOURISM_CATEGORIES[0]?.id ?? null,
  )
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const categoryMeta = useMemo(
    () =>
      TOURISM_CATEGORIES.map((c) => ({
        id: c.id,
        title: c.title,
        itemIds: c.items.map((i) => i.id),
      })),
    [],
  )

  const breakdown = useMemo(
    () => calculateSelectedServices(selectedIds, categoryMeta, usdRate, days, travelers),
    [selectedIds, categoryMeta, usdRate, travelers],
  )

  const visibleCategories =
    activeFilter === "all"
      ? TOURISM_CATEGORIES
      : TOURISM_CATEGORIES.filter((c) => c.id === activeFilter)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl shadow-black/5 backdrop-blur-xl sm:p-5">
        <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-base font-bold text-[#111827] sm:text-lg">ტურისტული სერვისები</h2>
          <p className="text-xs font-semibold text-[#1677FF]">მონიშნულია: {selectedIds.length}</p>
        </div>
        <p className="mb-4 text-xs text-slate-500 sm:text-sm">
          აირჩიე მხოლოდ ის სერვისები, რაც გჭირდება. არაფერი არ ემატება ავტომატურად.
        </p>

        <div className="flex gap-2 overflow-x-auto overscroll-x-contain pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`min-h-10 shrink-0 cursor-pointer rounded-full px-3.5 py-2.5 text-xs font-semibold transition sm:text-sm ${
              activeFilter === "all"
                ? "bg-[#1677FF] text-white shadow-md shadow-[#1677FF]/25"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            ყველა
          </button>
          {TOURISM_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveFilter(cat.id)
                setOpenCategory(cat.id)
              }}
              className={`min-h-10 shrink-0 cursor-pointer rounded-full px-3.5 py-2.5 text-xs font-semibold transition sm:text-sm ${
                activeFilter === cat.id
                  ? "bg-[#1677FF] text-white shadow-md shadow-[#1677FF]/25"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.title.replace(/^\d+\.\s*/, "")}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {visibleCategories.map((category) => {
            const open = openCategory === category.id || activeFilter === category.id
            const selectedInCat = category.items.filter((i) => selectedIds.includes(i.id)).length

            return (
              <motion.section
                key={category.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-md shadow-black/5 backdrop-blur-xl"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenCategory((prev) => (prev === category.id ? null : category.id))
                  }
                  className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5"
                >
                  <span>
                    <span className="block text-sm font-bold text-[#111827]">{category.title}</span>
                    <span className="text-xs text-slate-400">
                      {category.items.length} სერვისი
                      {selectedInCat > 0 ? ` · ${selectedInCat} არჩეული` : ""}
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-2 border-t border-slate-100 px-3 pb-4 pt-3 sm:px-4">
                      {category.items.map((item) => {
                        const selected = selectedIds.includes(item.id)
                        return (
                          <li key={item.id}>
                            <button
                              type="button"
                              onClick={() => setSelectedIds((prev) => toggleInList(prev, item.id))}
                              className={`flex w-full cursor-pointer items-center gap-3 rounded-xl border px-3 py-3 text-left transition sm:px-4 ${
                                selected
                                  ? "border-[#1677FF] bg-[#1677FF]/08 shadow-sm"
                                  : "border-slate-200 bg-white/70 hover:border-[#1677FF]/35"
                              }`}
                            >
                              <span
                                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                                  selected
                                    ? "border-[#1677FF] bg-[#1677FF] text-white"
                                    : "border-slate-300 bg-white text-transparent"
                                }`}
                              >
                                <Check className="h-3.5 w-3.5" strokeWidth={3} />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="block text-sm font-semibold text-[#111827]">
                                  {item.name}
                                </span>
                                <span className="mt-0.5 block text-xs text-slate-400">
                                  {item.unit === "info"
                                    ? "უფასო ინფორმაცია"
                                    : `${formatGel(item.price)} ${unitLabel(item.unit)}`}
                                </span>
                              </span>
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </motion.section>
            )
          })}
        </AnimatePresence>
      </div>

      <BudgetCalculator
        breakdown={breakdown}
        travelers={travelers}
        onTravelersChange={setTravelers}
      />
   
    </motion.div>
  )
}
