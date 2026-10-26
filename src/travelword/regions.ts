import {
  Building2, Castle, Church, Footprints, Grape, Landmark, Mountain, ShieldAlert, TreePine, Umbrella, Waves, Wine,
  type LucideIcon,
} from "lucide-react"
import type { MapAreaId } from "@/components/georgiaMapGeo"
import { DESTINATIONS } from "./data"

// The 12 first-level units of Georgia as the trip planner shows them (regions map, search).

export type RegionId =
  | "tbilisi" | "adjara" | "kazbegi" | "imereti" | "kakheti" | "svaneti" | "samtskhe" | "racha"
  | "guria" | "shida-kartli" | "kvemo-kartli" | "abkhazia"

export interface Region {
  id: RegionId
  name: string
  /** the outlines it covers on the regions map; the first one carries its number marker */
  areas: MapAreaId[]
  places: string
  desc: string
  /** Wikimedia Commons thumbnail at 1280px */
  photo: string
  alt: string
  icon: LucideIcon
  tone: string
  /** occupied territory: listed so the map of Georgia is complete, but nothing can be booked there */
  occupied?: boolean
}

const destinationPhoto = (destinationId: string) => DESTINATIONS.find((d) => d.id === destinationId)?.image ?? ""

export const REGIONS: Region[] = [
  {
    id: "tbilisi", areas: ["tbilisi"], name: "თბილისი", places: "ძველი თბილისი, მცხეთა...", icon: Building2, tone: "bg-rose-100 text-rose-600",
    desc: "გოგირდის აბანოები, აივნიანი ქუჩები და ნარიყალას ციხე.",
    photo: destinationPhoto("tbilisi"), alt: "ძველი თბილისი და ნარიყალას ციხე",
  },
  {
    id: "adjara", areas: ["adjara"], name: "აჭარა", places: "ბათუმი, ქობულეთი, ხულო...", icon: Umbrella, tone: "bg-blue-100 text-blue-600",
    desc: "შავი ზღვის სანაპირო, ბათუმის ბულვარი და მწვანე მთები.",
    photo: destinationPhoto("adjara"), alt: "ბათუმის სანაპირო",
  },
  {
    id: "kazbegi", areas: ["mtiuleti", "khevi", "khevsureti"], name: "მცხეთა-მთიანეთი", places: "ყაზბეგი, გუდაური, ფშავი...", icon: Mountain, tone: "bg-emerald-100 text-emerald-600",
    desc: "გერგეტის სამება მყინვარწვერის ძირას და კავკასიონის ბილიკები.",
    photo: destinationPhoto("kazbegi"), alt: "გერგეტის სამება მყინვარწვერის ძირას",
  },
  {
    id: "imereti", areas: ["imereti"], name: "იმერეთი", places: "ქუთაისი, წყალტუბო, ჭიათურა...", icon: Landmark, tone: "bg-amber-100 text-amber-600",
    desc: "გელათი, მღვიმეები, კანიონები და იმერული სამზარეულო.",
    photo: destinationPhoto("imereti"), alt: "გელათის მონასტერი ქუთაისთან",
  },
  {
    id: "kakheti", areas: ["kakheti", "tusheti"], name: "კახეთი", places: "თელავი, სიღნაღი, ყვარელი...", icon: Wine, tone: "bg-purple-100 text-purple-600",
    desc: "ქვევრის ღვინო, ალაზნის ველი და სიღნაღის ქუჩები.",
    photo: destinationPhoto("kakheti"), alt: "ალავერდის მონასტერი ვენახებში",
  },
  {
    id: "svaneti", areas: ["svaneti", "samegrelo"], name: "სვანეთი & სამეგრელო", places: "მესტია, უშგული, ზუგდიდი...", icon: Footprints, tone: "bg-cyan-100 text-cyan-600",
    desc: "უშგულის კოშკები, მარტვილის კანიონი და მეგრული სუფრა.",
    photo: destinationPhoto("svaneti"), alt: "უშგულის სვანური კოშკები",
  },
  {
    id: "guria", areas: ["guria"], name: "გურია", places: "ურეკი, ბახმარო, ოზურგეთი...", icon: Waves, tone: "bg-teal-100 text-teal-600",
    desc: "ჩაის ფერდობები, ურეკის მაგნიტური ქვიშა და ალპური ბახმარო.",
    photo: destinationPhoto("guria"), alt: "ბახმაროს მთის კურორტი",
  },
  {
    id: "samtskhe", areas: ["samtskhe"], name: "სამცხე-ჯავახეთი", places: "ბორჯომი, ბაკურიანი, ვარძია...", icon: TreePine, tone: "bg-lime-100 text-lime-700",
    desc: "ვარძიის კლდის ქალაქი, ბორჯომის წყალი და ბაკურიანი.",
    photo: destinationPhoto("samtskhe-javakheti"), alt: "ვარძიის კლდეში ნაკვეთი მონასტერი",
  },
  {
    id: "racha", areas: ["racha"], name: "რაჭა-ლეჩხუმი", places: "ამბროლაური, შოვი, ონი...", icon: Grape, tone: "bg-fuchsia-100 text-fuchsia-600",
    desc: "მშვიდი ხეობები, შოვის კურორტი და ხვანჭკარა.",
    photo: destinationPhoto("racha"), alt: "ხედი ამბროლაურზე",
  },
  {
    id: "shida-kartli", areas: ["kartli"], name: "შიდა ქართლი", places: "გორი, უფლისციხე, ატენი...", icon: Castle, tone: "bg-orange-100 text-orange-600",
    desc: "უფლისციხის კლდეში ნაკვეთი ქალაქი და ატენის სიონი.",
    photo: destinationPhoto("shida-kartli"), alt: "უფლისციხის ბაზილიკა მღვიმეების თავზე",
  },
  {
    id: "kvemo-kartli", areas: ["kvemo"], name: "ქვემო ქართლი", places: "დმანისი, ბოლნისი, თეთრიწყარო...", icon: Church, tone: "bg-indigo-100 text-indigo-600",
    desc: "დმანისის არქეოლოგიური ძეგლი და სამხრეთის ზეგანი.",
    photo: destinationPhoto("kvemo-kartli"), alt: "დმანისის პარკი",
  },
  {
    id: "abkhazia", areas: ["abkhazia"], name: "აფხაზეთი", places: "სოხუმი, გაგრა, ახალი ათონი...", icon: ShieldAlert, tone: "bg-slate-200 text-slate-600",
    desc: "ოკუპირებული ტერიტორია — მოგზაურობა შეზღუდულია.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Abkhazia._New_Athos_Monastery_P9110347_2600.jpg/1280px-Abkhazia._New_Athos_Monastery_P9110347_2600.jpg",
    alt: "ახალი ათონის მონასტერი", occupied: true,
  },
]
