export type TravelRecordType = "festival" | "tour" | "deal" | "event"

export type TravelRecord = {
  id: string
  title: string
  country: string
  flag: string
  /** Inclusive activity date (YYYY-MM-DD), always day 1–20. */
  date: string
  type: TravelRecordType
  city: string
  description: string
  image: string
  priceFrom: string
  /** What’s included in the package price during the trip. */
  includes: string[]
  duration: string
}

type TravelRecordSeed = Omit<TravelRecord, "includes" | "duration"> & {
  includes?: string[]
  duration?: string
}

function packageIncludes(type: TravelRecordType, city: string, extras: string[] = []): string[] {
  const shared = [
    "Licensed local guide for the activity day",
    "All listed entrance / access tickets",
    "Small-group logistics & on-site support",
    "Digital day plan with meeting point",
  ]

  const byType: Record<TravelRecordType, string[]> = {
    tour: [
      `Guided walking / transport segments in ${city}`,
      "Bottled water during the tour",
      "Photo stops at key viewpoints",
    ],
    deal: [
      "Promotional package rate (limited dates)",
      "Priority check-in where available",
      "One complimentary local snack or drink",
    ],
    festival: [
      "Festival / event access pass",
      "Reserved viewing or seating area",
      "Welcome tasting or cultural activity",
    ],
    event: [
      "Timed entry to the featured experience",
      "Host narration in English",
      "Souvenir digital booklet",
    ],
  }

  return [...shared, ...byType[type], ...extras]
}

const SEEDS: TravelRecordSeed[] = [
  {
    id: "jp-hanami-01",
    title: "Tokyo Spring Lights Tour",
    country: "Japan",
    flag: "🇯🇵",
    date: "2026-07-03",
    type: "tour",
    city: "Tokyo",
    description: "Guided evening walk through neon alleys and temple gardens.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$189",
    duration: "4 hours",
    includes: packageIncludes("tour", "Tokyo", [
      "Evening temple garden access",
      "Street-food tasting stop (2 bites)",
    ]),
  },
  {
    id: "jp-fuji-02",
    title: "Mount Fuji Day Escape",
    country: "Japan",
    flag: "🇯🇵",
    date: "2026-07-12",
    type: "tour",
    city: "Fujikawaguchiko",
    description: "Lakeside views and cable-car panoramas around Fuji.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$149",
    duration: "Full day",
    includes: packageIncludes("tour", "Fujikawaguchiko", [
      "Round-trip coach from central pickup",
      "Cable-car ticket",
    ]),
  },
  {
    id: "fr-seine-03",
    title: "Paris Seine Sunset Cruise",
    country: "France",
    flag: "🇫🇷",
    date: "2026-07-05",
    type: "deal",
    city: "Paris",
    description: "Early-month deal on a golden-hour river cruise.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$79",
    duration: "1.5 hours",
    includes: packageIncludes("deal", "Paris", [
      "Seine cruise ticket",
      "Audio commentary headset",
    ]),
  },
  {
    id: "fr-louvre-04",
    title: "Louvre After-Hours Access",
    country: "France",
    flag: "🇫🇷",
    date: "2026-07-18",
    type: "event",
    city: "Paris",
    description: "Small-group evening visit with a local art host.",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$120",
    duration: "2.5 hours",
    includes: packageIncludes("event", "Paris", [
      "Timed Louvre entry",
      "Host-led highlights route (Mona Lisa area logistics)",
    ]),
  },
  {
    id: "gr-santorini-05",
    title: "Santorini Caldera Festival",
    country: "Greece",
    flag: "🇬🇷",
    date: "2026-07-08",
    type: "festival",
    city: "Oia",
    description: "Music and sunset gathering along the caldera rim.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$95",
    duration: "3 hours",
    includes: packageIncludes("festival", "Oia", [
      "Sunset terrace access",
      "One glass of local wine",
    ]),
  },
  {
    id: "it-rome-06",
    title: "Rome Classics Express",
    country: "Italy",
    flag: "🇮🇹",
    date: "2026-07-10",
    type: "tour",
    city: "Rome",
    description: "Colosseum, Forum, and trattoria lunch in one day.",
    image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$135",
    duration: "6 hours",
    includes: packageIncludes("tour", "Rome", [
      "Colosseum & Roman Forum tickets",
      "Trattoria lunch (main course + water)",
    ]),
  },
  {
    id: "it-venice-07",
    title: "Venice Morning Markets",
    country: "Italy",
    flag: "🇮🇹",
    date: "2026-07-16",
    type: "deal",
    city: "Venice",
    description: "Rialto produce walk with cicchetti tasting stops.",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$68",
    duration: "3 hours",
    includes: packageIncludes("deal", "Venice", [
      "3 cicchetti tastings",
      "Rialto market walk with guide",
    ]),
  },
  {
    id: "es-barcelona-08",
    title: "Barcelona Beach & Gothic",
    country: "Spain",
    flag: "🇪🇸",
    date: "2026-07-04",
    type: "tour",
    city: "Barcelona",
    description: "Old town morning, Barceloneta afternoon.",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$110",
    duration: "5 hours",
    includes: packageIncludes("tour", "Barcelona", [
      "Gothic Quarter guided route",
      "Beachside soft drink",
    ]),
  },
  {
    id: "ge-tbilisi-09",
    title: "Tbilisi Wine Courtyards",
    country: "Georgia",
    flag: "🇬🇪",
    date: "2026-07-07",
    type: "festival",
    city: "Tbilisi",
    description: "Old-city courtyards with qvevri wine tastings.",
    image: "https://images.unsplash.com/photo-1565008576549-27539a55bb40?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$55",
    duration: "3 hours",
    includes: packageIncludes("festival", "Tbilisi", [
      "3 wine tastings (qvevri styles)",
      "Cheese & bread pairing plate",
    ]),
  },
  {
    id: "ge-kazbegi-10",
    title: "Kazbegi Highland Weekend",
    country: "Georgia",
    flag: "🇬🇪",
    date: "2026-07-14",
    type: "tour",
    city: "Stepantsminda",
    description: "Mountain viewpoints and Gergeti Trinity hike support.",
    image: "https://images.unsplash.com/photo-1605649480213-a6b4b6f5e0e0?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$99",
    duration: "Full day",
    includes: packageIncludes("tour", "Stepantsminda", [
      "Shared transfer from Tbilisi",
      "Trail support to Gergeti viewpoint",
    ]),
  },
  {
    id: "tr-istanbul-11",
    title: "Istanbul Bosphorus Lights",
    country: "Turkey",
    flag: "🇹🇷",
    date: "2026-07-02",
    type: "event",
    city: "Istanbul",
    description: "Night cruise with skyline narration.",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$72",
    duration: "2 hours",
    includes: packageIncludes("event", "Istanbul", [
      "Bosphorus night cruise seat",
      "Welcome Turkish tea",
    ]),
  },
  {
    id: "th-bangkok-12",
    title: "Bangkok Street Food Trail",
    country: "Thailand",
    flag: "🇹🇭",
    date: "2026-07-11",
    type: "tour",
    city: "Bangkok",
    description: "Chinatown and riverside hawkers with a local guide.",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$48",
    duration: "3 hours",
    includes: packageIncludes("tour", "Bangkok", [
      "5 street-food tastings",
      "Chinatown & riverside route",
    ]),
  },
  {
    id: "us-nyc-13",
    title: "New York Midtown Highlights",
    country: "United States",
    flag: "🇺🇸",
    date: "2026-07-09",
    type: "deal",
    city: "New York",
    description: "Skyline lookouts and museum skip-the-line bundle.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$160",
    duration: "5 hours",
    includes: packageIncludes("deal", "New York", [
      "Skip-the-line museum pass (1 venue)",
      "Observation deck ticket",
    ]),
  },
  {
    id: "uk-london-14",
    title: "London Royal Parks Picnic",
    country: "United Kingdom",
    flag: "🇬🇧",
    date: "2026-07-15",
    type: "event",
    city: "London",
    description: "Guided Hyde Park stroll with afternoon tea kit.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$86",
    duration: "2.5 hours",
    includes: packageIncludes("event", "London", [
      "Afternoon tea picnic kit",
      "Hyde Park guided stroll",
    ]),
  },
  {
    id: "eg-cairo-15",
    title: "Giza Sunrise Access",
    country: "Egypt",
    flag: "🇪🇬",
    date: "2026-07-06",
    type: "tour",
    city: "Giza",
    description: "Early entry near the pyramids before crowds arrive.",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$130",
    duration: "4 hours",
    includes: packageIncludes("tour", "Giza", [
      "Pyramid plateau entry",
      "Sunrise viewpoint transfer",
    ]),
  },
  {
    id: "br-rio-16",
    title: "Rio Coastal Morning",
    country: "Brazil",
    flag: "🇧🇷",
    date: "2026-07-13",
    type: "festival",
    city: "Rio de Janeiro",
    description: "Beachside samba breakfast and city overlooks.",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$75",
    duration: "3.5 hours",
    includes: packageIncludes("festival", "Rio de Janeiro", [
      "Samba breakfast tasting",
      "Coastal overlook visit",
    ]),
  },
  {
    id: "au-sydney-17",
    title: "Sydney Harbour Walk",
    country: "Australia",
    flag: "🇦🇺",
    date: "2026-07-17",
    type: "tour",
    city: "Sydney",
    description: "Opera House to Bondi coastal path highlights.",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$88",
    duration: "4 hours",
    includes: packageIncludes("tour", "Sydney", [
      "Harbour & coastal guided segments",
      "Bondi transfer support",
    ]),
  },
  {
    id: "jp-kyoto-18",
    title: "Kyoto Temple Dawn",
    country: "Japan",
    flag: "🇯🇵",
    date: "2026-07-19",
    type: "event",
    city: "Kyoto",
    description: "Quiet shrine circuit before midday heat.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$102",
    duration: "3 hours",
    includes: packageIncludes("event", "Kyoto", [
      "Early shrine circuit with host",
      "Matcha tasting",
    ]),
  },
  {
    id: "fr-nice-19",
    title: "Nice Promenade Deal",
    country: "France",
    flag: "🇫🇷",
    date: "2026-07-01",
    type: "deal",
    city: "Nice",
    description: "Côte d’Azur walking tour with gelato stop.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$59",
    duration: "2.5 hours",
    includes: packageIncludes("deal", "Nice", [
      "Promenade & old-town walk",
      "Artisan gelato",
    ]),
  },
  {
    id: "it-florence-20",
    title: "Florence Art Morning",
    country: "Italy",
    flag: "🇮🇹",
    date: "2026-07-20",
    type: "tour",
    city: "Florence",
    description: "Duomo viewpoints and artisan workshop visit.",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$115",
    duration: "4 hours",
    includes: packageIncludes("tour", "Florence", [
      "Duomo complex viewpoint ticket",
      "Artisan workshop visit",
    ]),
  },
  {
    id: "es-madrid-21",
    title: "Madrid Tapas Night",
    country: "Spain",
    flag: "🇪🇸",
    date: "2026-08-03",
    type: "festival",
    city: "Madrid",
    description: "Neighborhood hop across classic tapas bars.",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$70",
    duration: "3 hours",
    includes: packageIncludes("festival", "Madrid", [
      "4 tapas tastings",
      "1 drink per guest",
    ]),
  },
  {
    id: "th-phuket-22",
    title: "Phuket Island Hop",
    country: "Thailand",
    flag: "🇹🇭",
    date: "2026-08-12",
    type: "deal",
    city: "Phuket",
    description: "Speedboat day across nearby turquoise bays.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=500&fit=crop&auto=format",
    priceFrom: "$140",
    duration: "Full day",
    includes: packageIncludes("deal", "Phuket", [
      "Speedboat island hopping",
      "Snorkel gear & lunch box",
    ]),
  },
]

export const TRAVEL_RECORDS: TravelRecord[] = SEEDS.map((seed) => ({
  ...seed,
  duration: seed.duration ?? "Half day",
  includes: seed.includes ?? packageIncludes(seed.type, seed.city),
}))

export function searchTravelRecordsInRange(
  startISO: string,
  endISO: string,
  countryQuery = "",
  cityQuery = "",
): TravelRecord[] {
  const country = countryQuery.trim().toLowerCase()
  const city = cityQuery.trim().toLowerCase()
  return TRAVEL_RECORDS.filter((record) => {
    if (record.date < startISO || record.date > endISO) return false
    if (country && record.country.toLowerCase() !== country) return false
    if (city && record.city.toLowerCase() !== city) return false
    return true
  }).sort((a, b) => a.date.localeCompare(b.date))
}
