export type RegionalCulture = {
  title: string
  summary: string
  highlights: string[]
  traditions: string[]
  food: string[]
  image: string
}

/** Culture by country → region. Extend as you add destinations. */
export const REGIONAL_CULTURE: Record<string, Record<string, RegionalCulture>> = {
  Georgia: {
    Adjara: {
      title: "Adjara",
      summary:
        "Black Sea coast culture with Adjarian warmth — Batumi’s modern boulevard meets mountain villages, Laz heritage, and a cuisine built around mchadi, Adjarian khachapuri, and fresh seafood.",
      highlights: [
        "Batumi boulevard & Alphabet Tower nights",
        "Adjarian hospitality and coastal festivals",
        "Hill villages above Kobuleti and Keda",
      ],
      traditions: [
        "Polyphonic singing in village gatherings",
        "Seaside supra with local wines and chacha",
        "Craft markets with Laz and Adjarian motifs",
      ],
      food: ["Adjarian khachapuri", "Sinori", "Borano", "Fresh Black Sea fish"],
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=700&fit=crop&auto=format",
    },
    Tbilisi: {
      title: "Tbilisi",
      summary:
        "Georgia’s cultural capital — sulfur baths, old-town courtyards, wine bars, galleries, and a mix of Orthodox heritage with a creative modern scene.",
      highlights: [
        "Abanotubani sulfur baths & Narikala views",
        "Rustaveli Avenue theaters and museums",
        "Nightlife from wine bars to jazz clubs",
      ],
      traditions: [
        "Urban supra and tamada toasting culture",
        "Street art and contemporary galleries",
        "Sunday church bells over the old town",
      ],
      food: ["Khinkali", "Churchkhela", "Lobio", "Natural wine tastings"],
      image:
        "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&h=700&fit=crop&auto=format",
    },
    Imereti: {
      title: "Imereti",
      summary:
        "West Georgia’s heartland around Kutaisi — generous tables, cave country gateways, and a softer dialect of everyday Georgian life.",
      highlights: [
        "Kutaisi markets and Bagrati views",
        "Gateway to Prometheus Cave & canyons",
        "Village hospitality between vineyards and hills",
      ],
      traditions: [
        "Imeretian cheese and home-baked mchadi",
        "Family feasts with local amber wine",
        "Folk dances at regional celebrations",
      ],
      food: ["Imeretian khachapuri", "Pkhali", "Kupati", "Churchkhela"],
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=700&fit=crop&auto=format",
    },
    "Mtskheta-Mtianeti": {
      title: "Mtskheta-Mtianeti",
      summary:
        "Sacred and alpine Georgia — UNESCO Mtskheta, Gergeti Trinity above Kazbegi, and highland traditions shaped by mountains and faith.",
      highlights: [
        "Svetitskhoveli & Jvari near Mtskheta",
        "Gergeti Trinity Church and Kazbegi peaks",
        "Military Highway mountain villages",
      ],
      traditions: [
        "Pilgrimage routes and monastery festivals",
        "Mountain guest houses and supra in the highlands",
        "Shepherd culture and alpine folklore",
      ],
      food: ["Khinkali (mountain style)", "Guda cheese", "Shotis puri", "Herbal mountain tea"],
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=700&fit=crop&auto=format",
    },
  },
}

export function getRegionalCulture(countryName: string, regionName: string) {
  return REGIONAL_CULTURE[countryName]?.[regionName]
}

export function hasRegionalCulture(countryName: string): boolean {
  return Boolean(REGIONAL_CULTURE[countryName] && Object.keys(REGIONAL_CULTURE[countryName]).length)
}
