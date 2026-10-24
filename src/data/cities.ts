import type { Country } from "./countries"
import { TRAVEL_RECORDS } from "./travelRecords"

export type CityOption = {
  name: string
  isCapital?: boolean
}

/** Extra well-known cities beyond capital / package data. */
const EXTRA_CITIES: Record<string, string[]> = {
  Japan: ["Tokyo", "Kyoto", "Osaka", "Sapporo", "Fukuoka", "Nagoya"],
  France: ["Paris", "Nice", "Lyon", "Marseille", "Bordeaux"],
  Italy: ["Rome", "Milan", "Florence", "Venice", "Naples"],
  Spain: ["Madrid", "Barcelona", "Seville", "Valencia"],
  Greece: ["Athens", "Thessaloniki", "Heraklion", "Oia"],
  Georgia: ["Tbilisi", "Batumi", "Kutaisi", "Stepantsminda"],
  Thailand: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya"],
  Turkey: ["Istanbul", "Ankara", "Antalya", "Izmir"],
  "United States": ["New York", "Los Angeles", "Chicago", "Miami", "San Francisco"],
  "United Kingdom": ["London", "Edinburgh", "Manchester", "Liverpool"],
  Egypt: ["Cairo", "Giza", "Luxor", "Alexandria"],
  Brazil: ["Rio de Janeiro", "São Paulo", "Salvador", "Brasília"],
  Australia: ["Sydney", "Melbourne", "Brisbane", "Perth", "Canberra"],
  Germany: ["Berlin", "Munich", "Hamburg", "Cologne", "Frankfurt"],
  Portugal: ["Lisbon", "Porto", "Faro"],
  "South Korea": ["Seoul", "Busan", "Jeju"],
  Mexico: ["Mexico City", "Cancún", "Guadalajara"],
  India: ["New Delhi", "Mumbai", "Jaipur", "Bengaluru"],
  China: ["Beijing", "Shanghai", "Guangzhou", "Chengdu"],
  Netherlands: ["Amsterdam", "Rotterdam", "Utrecht"],
}

const PLACE_SKIP = new Set([
  "historic center",
  "nature & outdoors",
  "cultural quarter",
  "heritage streets",
])

function looksLikeCity(name: string): boolean {
  const n = name.trim().toLowerCase()
  if (!n || PLACE_SKIP.has(n)) return false
  if (n.includes("center") || n.includes("outdoors") || n.includes("quarter")) return false
  return true
}

/** Cities available for a selected country (capital first). */
export function getCitiesForCountry(country: Country): CityOption[] {
  const seen = new Set<string>()
  const cities: CityOption[] = []

  const push = (name: string, isCapital = false) => {
    const key = name.trim().toLowerCase()
    if (!key || seen.has(key)) return
    seen.add(key)
    cities.push({ name: name.trim(), isCapital })
  }

  if (country.capital) push(country.capital, true)

  for (const record of TRAVEL_RECORDS) {
    if (record.country.toLowerCase() === country.name.toLowerCase()) {
      push(record.city)
    }
  }

  for (const place of country.places ?? []) {
    if (looksLikeCity(place.name)) push(place.name)
  }

  for (const name of EXTRA_CITIES[country.name] ?? []) {
    push(name, name.toLowerCase() === country.capital.toLowerCase())
  }

  if (cities.length === 0 && country.capital) {
    push(country.capital, true)
  }

  return cities
}
