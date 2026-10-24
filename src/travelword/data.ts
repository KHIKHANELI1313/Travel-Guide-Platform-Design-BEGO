import { DESTINATION_CATALOG } from "../data/destinations/catalog"

/** Wikimedia Commons thumbnail URL at a standard width (Commons serves fixed width steps). */
const wm = (path: string, file: string, width = 1280) =>
  `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}/${file}/${width}px-${file}`

export const HERO_IMAGE = {
  src: wm("2/2c", "The_eastern_slopes_of_Mount_Kazbek%2C_Georgia.jpg", 1920),
  alt: "The eastern slopes of Mount Kazbek in the Greater Caucasus, Georgia",
}

export const PANORAMA_IMAGE = {
  src: wm("c/c2", "Panorama_of_Battlements_-_Sighnaghi_-_Georgia_%2818312892865%29.jpg", 1920),
  alt: "Panorama of the Sighnaghi town walls above the Alazani Valley, Kakheti",
}

// ——————————————————————————————————————————————————
// DESTINATIONS
// ——————————————————————————————————————————————————

export type Place = { name: string; lat: number; lng: number }

export type Destination = {
  id: string
  name: string
  nameKa: string
  tagline: string
  image: string
  alt: string
  places: Place[]
}

export const DESTINATIONS: Destination[] = [
  {
    id: "tbilisi", name: "Tbilisi", nameKa: "თბილისი", tagline: "Sulphur baths, balconies and Narikala",
    image: wm("d/db", "Old_Town_and_Narikala%2C_Tbilisi.jpg"), alt: "Old Tbilisi and Narikala fortress",
    places: [{ name: "Tbilisi", lat: 41.7151, lng: 44.8271 }],
  },
  {
    id: "adjara", name: "Batumi & Adjara", nameKa: "აჭარა", tagline: "Black Sea coast and green mountains",
    image: wm("a/af", "Batumi_Beach.jpg"), alt: "Batumi beach on the Black Sea",
    places: [{ name: "Batumi", lat: 41.6168, lng: 41.6367 }, { name: "Kobuleti", lat: 41.8214, lng: 41.7792 }],
  },
  {
    id: "kazbegi", name: "Kazbegi", nameKa: "ყაზბეგი", tagline: "Gergeti Trinity under Mount Kazbek",
    image: wm("4/4c", "Gergeti_Trinity_Church_09.23.jpg"), alt: "Gergeti Trinity Church below Mount Kazbek",
    places: [{ name: "Stepantsminda", lat: 42.6566, lng: 44.6433 }, { name: "Gudauri", lat: 42.4775, lng: 44.48 }],
  },
  {
    id: "svaneti", name: "Svaneti", nameKa: "სვანეთი", tagline: "Medieval towers at 2,100 m",
    image: wm("f/f9", "Ushguli_Svaneti_Georgia.JPG"), alt: "Svan towers of Ushguli",
    places: [{ name: "Mestia", lat: 43.045, lng: 42.729 }, { name: "Ushguli", lat: 42.9167, lng: 43.0167 }],
  },
  {
    id: "kakheti", name: "Kakheti", nameKa: "კახეთი", tagline: "Qvevri wine and the Alazani Valley",
    image: wm("b/bc", "Alaverdi_Monastery%2C_Kakheti%2C_Georgia.jpg"), alt: "Alaverdi Monastery among vineyards in Kakheti",
    places: [{ name: "Telavi", lat: 41.9198, lng: 45.4731 }, { name: "Sighnaghi", lat: 41.6205, lng: 45.9218 }],
  },
  {
    id: "imereti", name: "Imereti", nameKa: "იმერეთი", tagline: "Caves, canyons and Gelati",
    image: wm("4/49", "2014_Imeretia%2C_Gelati%2C_Monastyr_Gelati_%2819%29.jpg"), alt: "Gelati Monastery near Kutaisi",
    places: [{ name: "Kutaisi", lat: 42.2662, lng: 42.718 }],
  },
  {
    id: "samegrelo", name: "Samegrelo", nameKa: "სამეგრელო", tagline: "Emerald canyons and spicy cuisine",
    image: wm("0/09", "Martvili_Canyon_Natural_Monument_June_2017.jpg"), alt: "Martvili Canyon in Samegrelo",
    places: [{ name: "Zugdidi", lat: 42.5088, lng: 41.8709 }, { name: "Martvili", lat: 42.4142, lng: 42.3788 }],
  },
  {
    id: "guria", name: "Guria", nameKa: "გურია", tagline: "Tea hills and alpine Bakhmaro",
    image: wm("7/76", "Bakhmaroview.jpg"), alt: "Bakhmaro mountain resort in Guria",
    places: [{ name: "Ozurgeti", lat: 41.9244, lng: 42.0068 }],
  },
  {
    id: "racha", name: "Racha", nameKa: "რაჭა", tagline: "Quiet valleys and Khvanchkara",
    image: wm("e/e6", "View_to_Ambrolauri_-_panoramio.jpg"), alt: "View over Ambrolauri in Racha",
    places: [{ name: "Ambrolauri", lat: 42.5203, lng: 43.15 }],
  },
  {
    id: "samtskhe-javakheti", name: "Samtskhe-Javakheti", nameKa: "სამცხე-ჯავახეთი", tagline: "Vardzia cave city and Borjomi",
    image: wm("2/20", "2025-05-25_Vardzia_9.jpg"), alt: "Vardzia cave monastery",
    places: [{ name: "Akhaltsikhe", lat: 41.639, lng: 42.9826 }, { name: "Borjomi", lat: 41.84, lng: 43.39 }, { name: "Vardzia", lat: 41.3811, lng: 43.2847 }],
  },
  {
    id: "mtskheta-mtianeti", name: "Mtskheta-Mtianeti", nameKa: "მცხეთა-მთიანეთი", tagline: "Ancient capital and Ananuri",
    image: wm("e/ee", "Ananuri_%2835283019603%29.jpg"), alt: "Ananuri fortress on the Zhinvali reservoir",
    places: [{ name: "Mtskheta", lat: 41.845, lng: 44.7188 }],
  },
  {
    id: "shida-kartli", name: "Shida Kartli", nameKa: "შიდა ქართლი", tagline: "Uplistsikhe rock town",
    image: wm("3/3f", "Middle_ages_Basilica_on_the_top_of_the_cave%2C_Uplistsikhe_20230920_%28II%29.jpg"), alt: "Basilica above the caves of Uplistsikhe",
    places: [{ name: "Gori", lat: 41.9842, lng: 44.1158 }],
  },
  {
    id: "kvemo-kartli", name: "Kvemo Kartli", nameKa: "ქვემო ქართლი", tagline: "Dmanisi and the southern plateau",
    image: wm("a/ab", "%E1%83%93%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98%E1%83%A1%E1%83%98%E1%83%A1_%E1%83%9E%E1%83%90%E1%83%A0%E1%83%99%E1%83%98.JPG"), alt: "Dmanisi archaeological site",
    places: [{ name: "Rustavi", lat: 41.5495, lng: 45.011 }, { name: "Dmanisi", lat: 41.33, lng: 44.204 }],
  },
]

export const ALL_PLACES = DESTINATIONS.flatMap(d => d.places.map(p => ({ ...p, destinationId: d.id })))

// ——————————————————————————————————————————————————
// SERVICE CATEGORIES
// ——————————————————————————————————————————————————

export type CategoryId =
  | "hotels" | "guesthouses" | "restaurants" | "cuisine" | "airport" | "taxi" | "intercity" | "car-rental"
  | "tours" | "museums" | "hiking" | "beaches" | "ski" | "sim" | "pharmacy" | "parking"
  | "guides" | "everyday" | "events" | "emergency"

export type Category = {
  id: CategoryId
  name: string
  image?: { src: string; alt: string }
  /** price metrics in the catalog that belong to this category */
  metrics: MetricId[]
}

export const CATEGORIES: Category[] = [
  { id: "hotels", name: "Hotels", metrics: ["hotel-budget", "hotel-standard", "hotel-luxury"] },
  { id: "guesthouses", name: "Apartments & guesthouses", metrics: ["hotel-budget"],
    image: { src: wm("f/f1", "Panorama_over_Sighnaghi_from_Guesthouse_Balcony_-_Sighnaghi_-_Georgia_%2818308941142%29.jpg"), alt: "View from a guesthouse balcony in Sighnaghi" } },
  { id: "restaurants", name: "Restaurants & cafes", metrics: ["meal-breakfast", "meal-lunch", "meal-dinner"],
    image: { src: wm("5/5c", "Georgian_Feast_%287%29.jpg"), alt: "A Georgian feast table" } },
  { id: "cuisine", name: "Georgian cuisine", metrics: ["meal-lunch", "meal-dinner"],
    image: { src: wm("0/02", "Khachapuri_Adjaruli_with_egg_and_butter_2016.jpg"), alt: "Adjarian khachapuri with egg and butter" } },
  { id: "airport", name: "Airport transfers", metrics: ["airport-transfer"],
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Tbilisi_airport_1.jpg", alt: "Tbilisi International Airport" } },
  { id: "taxi", name: "Taxis & drivers", metrics: ["taxi", "private-driver"],
    image: { src: wm("3/36", "Taxi%2C_Rustaveli.jpg"), alt: "Taxi on Rustaveli Avenue, Tbilisi" } },
  { id: "intercity", name: "Buses & trains", metrics: [],
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Stadler_KISS_for_Georgian_Railways.jpg", alt: "Stadler KISS train of Georgian Railway" } },
  { id: "car-rental", name: "Car rentals", metrics: ["car-rental"] },
  { id: "tours", name: "Guided tours", metrics: ["activity"],
    image: { src: wm("1/16", "Old_Tbilisi_town_in_Tbilisi%2C_Georgia.jpg"), alt: "Streets of Old Tbilisi" } },
  { id: "museums", name: "Museums & heritage", metrics: ["activity"],
    image: { src: wm("1/15", "Georgian_National_Museum_%D9%85%D9%88%D8%B2%D9%87_%D9%85%D9%84%DB%8C_%D8%AA%D9%81%D9%84%DB%8C%D8%B3-_%DA%AF%D8%B1%D8%AC%D8%B3%D8%AA%D8%A7%D9%86_10.jpg"), alt: "Georgian National Museum, Tbilisi" } },
  { id: "hiking", name: "Mountains & hiking", metrics: ["activity"],
    image: { src: wm("e/e0", "Sadzele_Pass_hiking_trail_to_Juta_%28Kazbegi%29_and_Mt_Roshkakhorkhi.jpg"), alt: "Sadzele Pass hiking trail to Juta, Kazbegi" } },
  { id: "beaches", name: "Beaches & water", metrics: ["activity"],
    image: { src: wm("a/ae", "Shipwreck_Batumi_Georgia_R_Bartz.jpg"), alt: "Shipwreck on the beach near Batumi" } },
  { id: "ski", name: "Ski resorts", metrics: [],
    image: { src: wm("e/e9", "Gudauri_%2825%29.jpg"), alt: "Gudauri ski resort" } },
  { id: "sim", name: "SIM & eSIM", metrics: [] },
  { id: "pharmacy", name: "Pharmacies & medical", metrics: [] },
  { id: "parking", name: "Parking & luggage", metrics: [] },
  { id: "guides", name: "Guides & interpreters", metrics: ["guide"] },
  { id: "everyday", name: "Everyday services", metrics: [] },
  { id: "events", name: "Events & activities", metrics: ["activity"],
    image: { src: wm("4/45", "Supra.jpg"), alt: "A traditional Georgian supra" } },
  { id: "emergency", name: "Emergency & assistance", metrics: [] },
]

// ——————————————————————————————————————————————————
// EXPERIENCES (no prices — "Price on request" until a provider publishes one)
// ——————————————————————————————————————————————————

export const EXPERIENCES = [
  { title: "Truso Valley", kind: "Hiking", region: "kazbegi", image: wm("f/fc", "Truso_Valley_views_33.jpg"), alt: "Truso Valley, Kazbegi" },
  { title: "Prometheus Cave", kind: "Nature", region: "imereti", image: wm("6/6c", "Prometheus_Cave_2017.jpg"), alt: "Prometheus Cave near Kutaisi" },
  { title: "Svetitskhoveli", kind: "Heritage", region: "mtskheta-mtianeti", image: wm("5/59", "Mtskheta_and_Svetitskhoveli_Cathedral_3x2.jpg"), alt: "Mtskheta and Svetitskhoveli Cathedral" },
  { title: "Khinkali in the mountains", kind: "Food", region: "kazbegi", image: wm("c/c3", "Kazbegi%2C_Khinkali%2C_Georgia.jpg"), alt: "Khinkali served in Kazbegi" },
  { title: "Svaneti range from Mestia", kind: "Mountains", region: "svaneti", image: wm("3/3f", "Svaneti_Range_%28view_from_Mestia%29.jpg"), alt: "Svaneti range seen from Mestia" },
  { title: "Martvili waterfalls", kind: "Nature", region: "samegrelo", image: wm("2/21", "Martvili_Canyon_Waterfalls.jpg", 960), alt: "Waterfalls in Martvili Canyon" },
]

// ——————————————————————————————————————————————————
// PRICES
// ——————————————————————————————————————————————————

export type MetricId =
  | "hotel-budget" | "hotel-standard" | "hotel-luxury" | "meal-breakfast" | "meal-lunch" | "meal-dinner"
  | "airport-transfer" | "taxi" | "car-rental" | "private-driver" | "guide" | "activity"

export const METRICS: Record<MetricId, { label: string; unit: string; perPerson: boolean }> = {
  "hotel-budget": { label: "Budget stay", unit: "per night", perPerson: false },
  "hotel-standard": { label: "Hotel", unit: "per night", perPerson: false },
  "hotel-luxury": { label: "Luxury hotel", unit: "per night", perPerson: false },
  "meal-breakfast": { label: "Breakfast", unit: "per person", perPerson: true },
  "meal-lunch": { label: "Lunch", unit: "per person", perPerson: true },
  "meal-dinner": { label: "Dinner", unit: "per person", perPerson: true },
  "airport-transfer": { label: "Airport transfer", unit: "per ride", perPerson: false },
  "taxi": { label: "City taxi", unit: "per ride", perPerson: false },
  "car-rental": { label: "Car rental", unit: "per day", perPerson: false },
  "private-driver": { label: "Private driver", unit: "per day", perPerson: false },
  "guide": { label: "Local guide", unit: "per day", perPerson: false },
  "activity": { label: "Activity", unit: "per person", perPerson: true },
}

/**
 * verified  — confirmed with the provider or an official price list (none yet)
 * estimate  — TravelWord's internal catalog figure, not confirmed with any provider
 */
export type PriceStatus = "verified" | "estimate"

export type Price = {
  id: string
  metric: MetricId
  name: string
  city: string
  destinationId: string
  amount: number
  currency: "GEL"
  status: PriceStatus
  source: string
  updated: string | null
}

const CATALOG_SOURCE = "TravelWord internal catalog"
const CITY_TO_DESTINATION: Record<string, string> = {
  Batumi: "adjara", Kobuleti: "adjara", Tbilisi: "tbilisi", Kutaisi: "imereti", Stepantsminda: "kazbegi",
}

/** Flatten the existing pricing catalog into individually labelled price records. */
function buildPrices(): Price[] {
  const out: Price[] = []
  for (const region of Object.values(DESTINATION_CATALOG.Georgia.regions)) {
    for (const c of Object.values(region.cities)) {
      const destinationId = CITY_TO_DESTINATION[c.name]
      if (!destinationId) continue
      const add = (metric: MetricId, amount: number, name = METRICS[metric].label, id: string = metric) =>
        out.push({ id: `${c.name}-${id}`, metric, name, city: c.name, destinationId, amount, currency: "GEL", status: "estimate", source: CATALOG_SOURCE, updated: null })
      add("hotel-budget", c.hotels.budget)
      add("hotel-standard", c.hotels.standard)
      add("hotel-luxury", c.hotels.luxury)
      add("meal-breakfast", c.restaurants.breakfast)
      add("meal-lunch", c.restaurants.lunch)
      add("meal-dinner", c.restaurants.dinner)
      add("airport-transfer", c.transport.airportTransfer)
      add("taxi", c.transport.taxi)
      add("car-rental", c.transport.carRental)
      for (const a of c.activities) add("activity", a.price, a.name, a.id)
      for (const e of c.extras) {
        const metric: MetricId = /driver/i.test(e.name) ? "private-driver" : /guide/i.test(e.name) ? "guide" : "activity"
        add(metric, e.price, e.name, e.id)
      }
    }
  }
  return out
}

export const PRICES = buildPrices()
export const PRICED_CITIES = [...new Set(PRICES.map(p => p.city))]

export const priceFor = (city: string, metric: MetricId) => PRICES.find(p => p.city === city && p.metric === metric)
