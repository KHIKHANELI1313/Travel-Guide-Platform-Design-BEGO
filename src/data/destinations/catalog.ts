import type { DestinationCatalog } from "./types"

/**
 * Extensible destination pricing catalog.
 * Add new countries / regions / cities as nested JSON-like objects.
 */
export const DESTINATION_CATALOG: DestinationCatalog = {
  Georgia: {
    name: "Georgia",
    currency: "GEL",
    usdRate: 0.37,
    regions: {
      Adjara: {
        name: "Adjara",
        cities: {
          Batumi: {
            name: "Batumi",
            image:
              "https://images.unsplash.com/photo-1565008576549-27539a55bb40?w=1200&h=700&fit=crop&auto=format",
            tagline: "Black Sea boulevard, modern hotels, and mountain cable views",
            hotels: { budget: 120, standard: 280, luxury: 650 },
            restaurants: { breakfast: 25, lunch: 45, dinner: 70 },
            transport: { airportTransfer: 60, taxi: 15, carRental: 120 },
            activities: [
              {
                id: "batumi-cable",
                name: "Argo Cable Car",
                price: 35,
                image:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop&auto=format",
                description: "Panoramic ride above the city and coastline",
              },
              {
                id: "batumi-botanical",
                name: "Botanical Garden",
                price: 25,
                image:
                  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop&auto=format",
                description: "Hillside gardens overlooking the Black Sea",
              },
              {
                id: "batumi-museum",
                name: "Adjara Museums Pass",
                price: 30,
                image:
                  "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop&auto=format",
                description: "City history and art museum entries",
              },
              {
                id: "batumi-tour",
                name: "Old Batumi Walking Tour",
                price: 55,
                image:
                  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=500&fit=crop&auto=format",
                description: "Piazza, alphabet tower corridor, and seafront",
              },
              {
                id: "batumi-adventure",
                name: "Adventure Day (rafting / ATV)",
                price: 180,
                image:
                  "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=500&fit=crop&auto=format",
                description: "Guided adventure activities near Adjara hills",
              },
            ],
            extras: [
              {
                id: "batumi-guide",
                name: "Local guide (full day)",
                price: 150,
                image:
                  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&auto=format",
                description: "English-speaking local host",
              },
              {
                id: "batumi-photo",
                name: "Photographer (2 hours)",
                price: 200,
                image:
                  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=500&fit=crop&auto=format",
                description: "Boulevard & old-town photo session",
              },
              {
                id: "batumi-driver",
                name: "Private driver (8 hours)",
                price: 220,
                image:
                  "https://images.unsplash.com/photo-1449965408869-eaa3f722f40d?w=800&h=500&fit=crop&auto=format",
                description: "Comfortable car with driver for day trips",
              },
              {
                id: "batumi-boat",
                name: "Boat tour",
                price: 90,
                image:
                  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop&auto=format",
                description: "Black Sea coastline cruise",
              },
            ],
          },
          Kobuleti: {
            name: "Kobuleti",
            image:
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=700&fit=crop&auto=format",
            tagline: "Quiet beaches and family-friendly resorts north of Batumi",
            hotels: { budget: 90, standard: 200, luxury: 420 },
            restaurants: { breakfast: 20, lunch: 35, dinner: 55 },
            transport: { airportTransfer: 80, taxi: 12, carRental: 110 },
            activities: [
              {
                id: "kob-tour",
                name: "Coastal village tour",
                price: 45,
                image:
                  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=500&fit=crop&auto=format",
                description: "Local markets and seaside walks",
              },
              {
                id: "kob-museum",
                name: "Local museum visit",
                price: 18,
                image:
                  "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop&auto=format",
                description: "Regional history and culture exhibits",
              },
              {
                id: "kob-cable",
                name: "Nearby cable / viewpoint ride",
                price: 30,
                image:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop&auto=format",
                description: "Panoramic coastal viewpoint access",
              },
              {
                id: "kob-botanical",
                name: "Protected areas & gardens",
                price: 20,
                image:
                  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop&auto=format",
                description: "Nature trails and wetland gardens",
              },
              {
                id: "kob-adventure",
                name: "Beach & adventure day",
                price: 95,
                image:
                  "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=500&fit=crop&auto=format",
                description: "Active coastal experiences",
              },
            ],
            extras: [
              {
                id: "kob-guide",
                name: "Local guide (full day)",
                price: 120,
                image:
                  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&auto=format",
                description: "Relaxed coastal orientation",
              },
              {
                id: "kob-photo",
                name: "Photographer (2 hours)",
                price: 160,
                image:
                  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=500&fit=crop&auto=format",
                description: "Beach and resort photo session",
              },
              {
                id: "kob-driver",
                name: "Private driver (8 hours)",
                price: 200,
                image:
                  "https://images.unsplash.com/photo-1449965408869-eaa3f722f40d?w=800&h=500&fit=crop&auto=format",
                description: "Day trips toward Batumi or mountains",
              },
              {
                id: "kob-boat",
                name: "Boat tour",
                price: 75,
                image:
                  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop&auto=format",
                description: "Black Sea coastline cruise",
              },
            ],
          },
        },
      },
      Tbilisi: {
        name: "Tbilisi",
        cities: {
          Tbilisi: {
            name: "Tbilisi",
            image:
              "https://images.unsplash.com/photo-1565008576549-27539a55bb40?w=1200&h=700&fit=crop&auto=format",
            tagline: "Sulfur baths, wine bars, and layered old-city streets",
            hotels: { budget: 110, standard: 260, luxury: 700 },
            restaurants: { breakfast: 22, lunch: 50, dinner: 85 },
            transport: { airportTransfer: 50, taxi: 12, carRental: 130 },
            activities: [
              {
                id: "tb-tour",
                name: "Old Town & Narikala Tour",
                price: 60,
                image:
                  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=500&fit=crop&auto=format",
                description: "Meidan, sulfur district, cable to fortress",
              },
              {
                id: "tb-museum",
                name: "Museum circuit",
                price: 40,
                image:
                  "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop&auto=format",
                description: "National museum and modern art stops",
              },
              {
                id: "tb-cable",
                name: "Rike–Narikala Cable Car",
                price: 15,
                image:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop&auto=format",
                description: "Skyline views over the Mtkvari",
              },
              {
                id: "tb-botanical",
                name: "National Botanical Garden",
                price: 20,
                image:
                  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop&auto=format",
                description: "Quiet trails under the fortress ridge",
              },
              {
                id: "tb-adventure",
                name: "Mtatsminda adventure park",
                price: 70,
                image:
                  "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=500&fit=crop&auto=format",
                description: "Rides and viewpoints above the city",
              },
            ],
            extras: [
              {
                id: "tb-guide",
                name: "Local guide (full day)",
                price: 160,
                image:
                  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&auto=format",
                description: "History-focused city hosting",
              },
              {
                id: "tb-photo",
                name: "Photographer (2 hours)",
                price: 220,
                image:
                  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=500&fit=crop&auto=format",
                description: "Old town golden-hour session",
              },
              {
                id: "tb-driver",
                name: "Private driver (8 hours)",
                price: 210,
                image:
                  "https://images.unsplash.com/photo-1449965408869-eaa3f722f40d?w=800&h=500&fit=crop&auto=format",
                description: "Mtskheta or Kakheti day support",
              },
              {
                id: "tb-boat",
                name: "Turtle Lake / boat outing",
                price: 80,
                image:
                  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop&auto=format",
                description: "Scenic water outing near the city",
              },
            ],
          },
        },
      },
      Imereti: {
        name: "Imereti",
        cities: {
          Kutaisi: {
            name: "Kutaisi",
            image:
              "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=700&fit=crop&auto=format",
            tagline: "Gateway to caves, canyons, and west Georgia flavors",
            hotels: { budget: 85, standard: 190, luxury: 380 },
            restaurants: { breakfast: 18, lunch: 35, dinner: 55 },
            transport: { airportTransfer: 40, taxi: 10, carRental: 100 },
            activities: [
              {
                id: "ku-tour",
                name: "Prometheus Cave & canyon tour",
                price: 95,
                image:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop&auto=format",
                description: "Half-day nature circuit from Kutaisi",
              },
              {
                id: "ku-museum",
                name: "City museums",
                price: 20,
                image:
                  "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop&auto=format",
                description: "Historical museum entries",
              },
              {
                id: "ku-cable",
                name: "Viewpoint / cable experience",
                price: 25,
                image:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop&auto=format",
                description: "Elevated views around Imereti",
              },
              {
                id: "ku-botanical",
                name: "Botanical & park visit",
                price: 15,
                image:
                  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop&auto=format",
                description: "Green spaces and local gardens",
              },
              {
                id: "ku-adventure",
                name: "Okatse / Martvili adventure",
                price: 140,
                image:
                  "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=500&fit=crop&auto=format",
                description: "Canyons and boat segments",
              },
            ],
            extras: [
              {
                id: "ku-guide",
                name: "Local guide (full day)",
                price: 130,
                image:
                  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&auto=format",
                description: "West Georgia route hosting",
              },
              {
                id: "ku-photo",
                name: "Photographer (2 hours)",
                price: 170,
                image:
                  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=500&fit=crop&auto=format",
                description: "City and nature photo session",
              },
              {
                id: "ku-driver",
                name: "Private driver (8 hours)",
                price: 180,
                image:
                  "https://images.unsplash.com/photo-1449965408869-eaa3f722f40d?w=800&h=500&fit=crop&auto=format",
                description: "Cave and canyon logistics",
              },
              {
                id: "ku-boat",
                name: "Boat tour",
                price: 85,
                image:
                  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop&auto=format",
                description: "Canyon or river boat segment",
              },
            ],
          },
        },
      },
      "Mtskheta-Mtianeti": {
        name: "Mtskheta-Mtianeti",
        cities: {
          Stepantsminda: {
            name: "Stepantsminda",
            image:
              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=700&fit=crop&auto=format",
            tagline: "Kazbegi peaks, Gergeti Trinity, and alpine air",
            hotels: { budget: 100, standard: 240, luxury: 480 },
            restaurants: { breakfast: 22, lunch: 40, dinner: 65 },
            transport: { airportTransfer: 250, taxi: 20, carRental: 150 },
            activities: [
              {
                id: "st-tour",
                name: "Gergeti Trinity hike support",
                price: 70,
                image:
                  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop&auto=format",
                description: "Guided approach to the iconic viewpoint",
              },
              {
                id: "st-museum",
                name: "Local museum & culture stop",
                price: 15,
                image:
                  "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop&auto=format",
                description: "Small highland heritage visit",
              },
              {
                id: "st-cable",
                name: "Mountain viewpoint transfer",
                price: 40,
                image:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop&auto=format",
                description: "Scenic lift / viewpoint access support",
              },
              {
                id: "st-botanical",
                name: "Alpine nature walk",
                price: 25,
                image:
                  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop&auto=format",
                description: "Guided highland flora trails",
              },
              {
                id: "st-adventure",
                name: "Jeep / adventure day",
                price: 160,
                image:
                  "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=500&fit=crop&auto=format",
                description: "Mountain tracks and viewpoints",
              },
            ],
            extras: [
              {
                id: "st-guide",
                name: "Mountain guide (full day)",
                price: 180,
                image:
                  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&auto=format",
                description: "Safety-focused alpine hosting",
              },
              {
                id: "st-photo",
                name: "Photographer (2 hours)",
                price: 210,
                image:
                  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=500&fit=crop&auto=format",
                description: "Peak and monastery frames",
              },
              {
                id: "st-driver",
                name: "Private driver (Tbilisi–Kazbegi)",
                price: 280,
                image:
                  "https://images.unsplash.com/photo-1449965408869-eaa3f722f40d?w=800&h=500&fit=crop&auto=format",
                description: "Scenic Military Highway transfer",
              },
              {
                id: "st-boat",
                name: "Mountain lake boat outing",
                price: 70,
                image:
                  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop&auto=format",
                description: "Seasonal highland water activity",
              },
            ],
          },
        },
      },
    },
  },
}

export function hasPricingCatalog(countryName: string): boolean {
  return Boolean(DESTINATION_CATALOG[countryName])
}

export function getCountryPricing(countryName: string) {
  return DESTINATION_CATALOG[countryName]
}

export function getRegions(countryName: string): string[] {
  const country = DESTINATION_CATALOG[countryName]
  return country ? Object.keys(country.regions) : []
}

export function getCitiesInRegion(countryName: string, regionName: string): string[] {
  const region = DESTINATION_CATALOG[countryName]?.regions[regionName]
  return region ? Object.keys(region.cities) : []
}

export function getCityPricing(countryName: string, regionName: string, cityName: string) {
  return DESTINATION_CATALOG[countryName]?.regions[regionName]?.cities[cityName]
}

export function findCityInCatalog(countryName: string, cityName: string) {
  const country = DESTINATION_CATALOG[countryName]
  if (!country) return null
  for (const [regionKey, region] of Object.entries(country.regions)) {
    const city = region.cities[cityName]
    if (city) return { regionKey, regionName: region.name, city }
  }
  return null
}
