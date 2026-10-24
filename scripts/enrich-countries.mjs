/**
 * Enrich src/data/countries.ts with RestCountries facts + travel content.
 * Run: node scripts/enrich-countries.mjs
 */
import { writeFileSync, readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")

const NAME_OVERRIDES = {
  "United States": ["United States", "United States of America", "USA"],
  "United Kingdom": ["United Kingdom", "United Kingdom of Great Britain and Northern Ireland"],
  "Czech Republic": ["Czechia", "Czech Republic"],
  Congo: ["Republic of the Congo", "Congo"],
  "Democratic Republic of the Congo": [
    "DR Congo",
    "Democratic Republic of the Congo",
    "Congo (Democratic Republic of the)",
  ],
  "Côte d'Ivoire": ["Ivory Coast", "Côte d'Ivoire"],
  "North Korea": ["North Korea", "Korea (Democratic People's Republic of)"],
  "South Korea": ["South Korea", "Korea (Republic of)"],
  "North Macedonia": ["North Macedonia", "Macedonia"],
  Eswatini: ["Eswatini", "Swaziland"],
  "Cabo Verde": ["Cape Verde", "Cabo Verde"],
  "Timor-Leste": ["East Timor", "Timor Leste", "Timor-Leste"],
  Vatican: ["Vatican City", "Holy See"],
  "Vatican City": ["Vatican City", "Holy See"],
  Palestine: ["Palestine", "State of Palestine"],
  Micronesia: ["Micronesia", "Micronesia (Federated States of)"],
  "Sao Tome and Principe": ["São Tomé and Príncipe", "Sao Tome and Principe"],
  Turkey: ["Turkey", "Türkiye"],
  Russia: ["Russia", "Russian Federation"],
  Iran: ["Iran", "Iran (Islamic Republic of)"],
  Syria: ["Syria", "Syrian Arab Republic"],
  Laos: ["Laos", "Lao People's Democratic Republic"],
  Brunei: ["Brunei", "Brunei Darussalam"],
  Moldova: ["Moldova", "Republic of Moldova"],
  Tanzania: ["Tanzania", "United Republic of Tanzania"],
  Vietnam: ["Vietnam", "Viet Nam"],
  Bahamas: ["Bahamas", "The Bahamas"],
  Gambia: ["Gambia", "The Gambia"],
}

const REGION_MAP = {
  Asia: "Asia",
  Europe: "Europe",
  Africa: "Africa",
  Oceania: "Oceania",
  Americas: "America",
  Antarctic: "America",
}

const REGION_IMAGES = {
  Asia: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
  Europe: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
  Africa: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
  America: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
  Oceania: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
}

const FEATURED_IMAGES = {
  Japan: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
  Italy: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&h=700&fit=crop&auto=format",
  France: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
  Spain: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&h=700&fit=crop&auto=format",
  Thailand: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=700&fit=crop&auto=format",
  Greece: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&h=700&fit=crop&auto=format",
  "United States": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
  Australia: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
  Brazil: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=700&fit=crop&auto=format",
  Morocco: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&h=700&fit=crop&auto=format",
  Turkey: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=700&fit=crop&auto=format",
  Portugal: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200&h=700&fit=crop&auto=format",
  Georgia: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&h=700&fit=crop&auto=format",
  "United Kingdom": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=700&fit=crop&auto=format",
  Germany: "https://images.unsplash.com/photo-1467269204594-be2d87b333ae?w=1200&h=700&fit=crop&auto=format",
  Egypt: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200&h=700&fit=crop&auto=format",
  India: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=700&fit=crop&auto=format",
  China: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&h=700&fit=crop&auto=format",
  "South Korea": "https://images.unsplash.com/photo-1538481199705-c710c4e965ba?w=1200&h=700&fit=crop&auto=format",
  Canada: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&h=700&fit=crop&auto=format",
  Mexico: "https://images.unsplash.com/photo-1518659526054-0473a713fbf3?w=1200&h=700&fit=crop&auto=format",
  "New Zealand": "https://images.unsplash.com/photo-1469521669194-babb455f259e?w=1200&h=700&fit=crop&auto=format",
}

const REGION_TAGS = {
  Asia: ["Culture", "Food", "History"],
  Europe: ["Culture", "History", "Food"],
  Africa: ["Nature", "Adventure", "Culture"],
  America: ["Nature", "Adventure", "Culture"],
  Oceania: ["Beach", "Nature", "Adventure"],
}

const SEASON = {
  Asia: "Oct–Apr",
  Europe: "May–Sep",
  Africa: "Jun–Oct",
  America: "Dec–Apr",
  Oceania: "Nov–Apr",
}

const FOOD_IMAGES = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format",
]

function formatPopulation(n) {
  if (n == null || Number.isNaN(n)) return "—"
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(2).replace(/\.00$/, "")}B`
  if (n >= 1_000_000) {
    const m = n / 1_000_000
    return `${m >= 10 ? Math.round(m) : m.toFixed(1).replace(/\.0$/, "")}M`
  }
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`
  return String(n)
}

function isoToFlag(iso2) {
  return [...iso2.toUpperCase()].map((c) => String.fromCodePoint(127397 + c.charCodeAt(0))).join("")
}

function ratingFromPop(pop) {
  // Stable pseudo-rating 4.4–4.9 for travel UI
  const h = Math.abs(Math.sin((pop || 1) * 0.0000013))
  return Math.round((4.4 + h * 0.5) * 10) / 10
}

function parseExisting() {
  const src = readFileSync(join(root, "src", "data", "countries.ts"), "utf8")
  const match = src.match(/export const COUNTRIES: Country\[\] = (\[[\s\S]*?\n\])\n/)
  if (!match) throw new Error("Could not parse COUNTRIES array")
  return JSON.parse(match[1])
}

async function fetchJson(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return res.json()
}

async function fetchSources() {
  const [facts, langs] = await Promise.all([
    fetchJson(
      "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/refs/heads/master/json/countries.json",
    ),
    fetchJson("https://raw.githubusercontent.com/mledoze/countries/master/countries.json"),
  ])
  console.log(`Fetched facts=${facts.length}, langs=${langs.length}`)
  return { facts, langs }
}

function buildIndexes({ facts, langs }) {
  const byName = new Map()
  const byIso2 = new Map()
  for (const c of facts) {
    byName.set(c.name.toLowerCase(), c)
    byIso2.set(String(c.iso2 || "").toLowerCase(), c)
  }

  const langByName = new Map()
  const langByIso2 = new Map()
  for (const c of langs) {
    langByName.set(c.name.common.toLowerCase(), c)
    langByName.set(c.name.official.toLowerCase(), c)
    langByIso2.set(String(c.cca2 || "").toLowerCase(), c)
  }
  return { byName, byIso2, langByName, langByIso2 }
}

function findFact(country, index) {
  const keys = [
    country.name,
    ...(NAME_OVERRIDES[country.name] || []),
    ...(country.aliases || []),
  ]
  for (const key of keys) {
    const hit = index.byName.get(key.toLowerCase())
    if (hit) return hit
  }
  if (country.iso2) {
    const hit = index.byIso2.get(country.iso2.toLowerCase())
    if (hit) return hit
  }
  return null
}

function findLang(country, fact, index) {
  const keys = [
    country.name,
    fact?.name,
    ...(NAME_OVERRIDES[country.name] || []),
    ...(country.aliases || []),
  ].filter(Boolean)
  for (const key of keys) {
    const hit = index.langByName.get(String(key).toLowerCase())
    if (hit) return hit
  }
  const iso = (fact?.iso2 || country.iso2 || "").toLowerCase()
  if (iso) return index.langByIso2.get(iso) || null
  return null
}

function languagesOf(langRec, fallback) {
  if (!langRec?.languages) return fallback || "—"
  return Object.values(langRec.languages).slice(0, 3).join(" / ")
}

function currencyOf(fact, langRec, fallback) {
  if (fact?.currency_name) {
    return fact.currency_symbol
      ? `${fact.currency_name} (${fact.currency_symbol})`
      : fact.currency_name
  }
  if (langRec?.currencies) {
    return Object.values(langRec.currencies)
      .map((c) => (c.symbol ? `${c.name} (${c.symbol})` : c.name))
      .slice(0, 2)
      .join(" / ")
  }
  return fallback || "—"
}

function phoneOf(fact, langRec) {
  if (fact?.phonecode) return `+${String(fact.phonecode).replace(/^\+/, "")}`
  const root = langRec?.idd?.root
  const suffixes = langRec?.idd?.suffixes
  if (!root) return null
  if (suffixes?.length === 1) return `${root}${suffixes[0]}`
  return root
}

function mapRegion(fact, langRec, fallback) {
  const r = fact?.region || langRec?.region
  if (r && REGION_MAP[r]) return REGION_MAP[r]
  if (r === "Americas") return "America"
  return fallback || "Asia"
}

function buildContent(base, fact, langRec) {
  const name = base.name
  const capital = fact?.capital || langRec?.capital?.[0] || base.capital
  const region = mapRegion(fact, langRec, base.region)
  const subregion = fact?.subregion || langRec?.subregion || region
  const language = languagesOf(langRec, base.language)
  const currency = currencyOf(fact, langRec, base.currency)
  const populationNum = fact?.population ?? null
  const population = populationNum != null ? formatPopulation(populationNum) : base.population
  const iso2 = String(fact?.iso2 || langRec?.cca2 || base.iso2 || "").toLowerCase()
  const phone = phoneOf(fact, langRec)
  const emergency = phone
    ? `Local emergency · dialing code ${phone}`
    : base.emergency || "Local emergency services"

  const tags = REGION_TAGS[region] || base.tags
  const bestSeason = SEASON[region] || base.bestSeason
  const rating = name === "Japan" ? 4.9 : ratingFromPop(populationNum || 1)
  const image = FEATURED_IMAGES[name] || REGION_IMAGES[region] || base.image

  const about =
    name === "Japan"
      ? "Japan is an island nation in East Asia, renowned worldwide for its unique blend of ancient traditions and cutting-edge modernity. From the neon-lit streets of Tokyo to the serene Zen gardens of Kyoto, Japan offers an extraordinary range of experiences that captivate millions of visitors each year. The country's four distinct seasons — cherry blossoms in spring, festivals in summer, red foliage in autumn, and snow-capped mountains in winter — each offer their own spectacular beauty."
      : `${name} is a country in ${subregion}, with ${capital} as its capital. About ${population} people live here. Official / major languages include ${language}, and everyday transactions typically use the ${currency}. Travelers visit for ${tags.map((t) => t.toLowerCase()).join(", ")} experiences — cities, landscapes, food, and local culture.`

  const history =
    name === "Japan"
      ? "Japan’s history stretches from ancient imperial courts and samurai eras to rapid modernization after the Meiji Restoration. Today’s temples, castles, and museums sit alongside futuristic cities — a living timeline travelers can explore from Kyoto to Tokyo."
      : `${name}’s story is shaped by its place in ${subregion}. Historic centers around ${capital}, museums, and monuments help travelers understand how the country developed into the modern state it is today. Layer visits with cultural sites and neighborhood walks for a fuller picture.`

  const culture =
    name === "Japan"
      ? "Japanese culture balances respect, craftsmanship, and a deep appreciation for nature and aesthetics — from tea ceremony and seasonal festivals to contemporary design, anime, and street fashion."
      : `Culture in ${name} is closely tied to ${language.split(" / ")[0]} language and everyday life in ${capital}. Expect festivals, markets, arts, and hospitality traditions that reflect ${region} influences. Learning a few local phrases goes a long way.`

  const foods =
    name === "Japan"
      ? [
          { name: "Sushi", desc: "Fresh fish over seasoned rice — a Japanese art form", price: "¥3,000–8,000", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop&auto=format" },
          { name: "Ramen", desc: "Rich broth noodles with toppings — Tokyo style", price: "¥800–1,500", image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop&auto=format" },
          { name: "Tempura", desc: "Light battered seafood and vegetables", price: "¥1,200–3,000", image: "https://images.unsplash.com/photo-1606502973842-f64bc2785fe5?w=400&h=300&fit=crop&auto=format" },
          { name: "Wagyu", desc: "World-renowned marbled beef", price: "¥8,000–25,000", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop&auto=format" },
        ]
      : [
          { name: `${name} classics`, desc: `Signature dishes and home-style cooking from ${name}`, price: "Local prices", image: FOOD_IMAGES[0] },
          { name: "Street food", desc: `Markets and casual bites around ${capital}`, price: "Budget-friendly", image: FOOD_IMAGES[1] },
          { name: "Regional flavors", desc: `${subregion} ingredients and ${language.split(" / ")[0]} culinary traditions`, price: "Varies", image: FOOD_IMAGES[2] },
          { name: "Dining out", desc: `Cafés and restaurants popular with visitors in ${capital}`, price: "Mid–premium", image: FOOD_IMAGES[3] },
        ]

  const places =
    name === "Japan"
      ? [
          { name: "Tokyo", desc: "Neon streets meet temples and world-class dining", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop&auto=format", rating: 4.9 },
          { name: "Kyoto", desc: "Ancient temples, geisha districts, bamboo forests", image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=400&fit=crop&auto=format", rating: 4.9 },
          { name: "Mount Fuji", desc: "Japan’s iconic peak and surrounding lakes", image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=600&h=400&fit=crop&auto=format", rating: 4.8 },
          { name: "Osaka", desc: "Food capital with vibrant street life", image: "https://images.unsplash.com/photo-1589452271712-64b8a66c7b71?w=600&h=400&fit=crop&auto=format", rating: 4.7 },
        ]
      : [
          { name: capital, desc: `Capital city and main gateway to ${name}`, image, rating },
          { name: "Historic center", desc: `Heritage streets, museums and landmarks near ${capital}`, image, rating: Math.max(4.2, rating - 0.1) },
          { name: "Nature & outdoors", desc: `Parks, coasts or countryside popular with travelers`, image, rating: Math.max(4.1, rating - 0.2) },
          { name: "Cultural quarter", desc: `Neighborhoods for food, markets and local life`, image, rating: Math.max(4.0, rating - 0.15) },
        ]

  const transport = `Most international travelers arrive via ${capital}, then continue by rail, bus, taxi or domestic flights. Keep some ${currency.split(" (")[0]} for short hops. Check local transit apps and airport transfer options before you land.`

  const safety =
    name === "Japan"
      ? "Japan is widely considered one of the world’s safest destinations, with excellent healthcare and reliable public transport. Emergency numbers: Police 110 · Ambulance/Fire 119."
      : `Check current travel advisories for ${name} before you go. Register important numbers, keep copies of documents, and use licensed transport in ${capital}. Emergency info: ${emergency}.`

  const aliases = [
    ...new Set(
      [
        ...(base.aliases || []),
        name,
        fact?.name,
        langRec?.name?.common,
        langRec?.name?.official,
      ].filter(Boolean),
    ),
  ]

  return {
    name,
    nameKa: base.nameKa,
    capital,
    iso2,
    flag: iso2 ? isoToFlag(iso2) : base.flag,
    language,
    currency,
    population,
    populationRaw: populationNum,
    rating,
    image,
    region,
    subregion,
    tags,
    tagline: name === "Japan" ? "Land of Tradition and Innovation" : `Discover ${name}`,
    about,
    history,
    culture,
    foods,
    places,
    transport,
    safety,
    bestSeason,
    emergency: name === "Japan" ? "110 (Police) / 119 (Ambulance & Fire)" : emergency,
    callingCode: phone || "",
    aliases,
  }
}

async function main() {
  const existing = parseExisting()
  console.log(`Loaded ${existing.length} local countries`)
  const sources = await fetchSources()
  const index = buildIndexes(sources)

  let matched = 0
  const enriched = existing.map((c) => {
    const fact = findFact(c, index)
    const langRec = findLang(c, fact, index)
    if (fact || langRec) matched++
    else console.warn("No API match:", c.name)
    return buildContent(c, fact, langRec)
  })

  console.log(`Matched ${matched}/${existing.length}`)

  const out = `/* Auto-enriched by scripts/enrich-countries.mjs — ${enriched.length} countries */
export type CountryRegion = "Asia" | "Europe" | "Africa" | "America" | "Oceania"

export type CountryFood = {
  name: string
  desc: string
  price: string
  image: string
}

export type CountryPlace = {
  name: string
  desc: string
  image: string
  rating: number
}

export type Country = {
  name: string
  nameKa: string
  capital: string
  iso2: string
  flag: string
  language: string
  currency: string
  population: string
  populationRaw?: number | null
  rating: number
  image: string
  region: CountryRegion
  subregion: string
  tags: string[]
  tagline: string
  about: string
  history: string
  culture: string
  foods: CountryFood[]
  places: CountryPlace[]
  transport: string
  safety: string
  bestSeason: string
  emergency: string
  callingCode: string
  aliases: string[]
}

export const COUNTRIES: Country[] = ${JSON.stringify(enriched, null, 2)}

const aliasIndex = new Map<string, Country>()
for (const country of COUNTRIES) {
  for (const alias of country.aliases) {
    aliasIndex.set(alias.toLowerCase(), country)
  }
  aliasIndex.set(country.nameKa.toLowerCase(), country)
}

export function findCountry(query: string | undefined | null): Country | undefined {
  if (!query) return undefined
  return aliasIndex.get(query.trim().toLowerCase())
}

export function getCountryOrDefault(query: string | undefined | null): Country {
  return findCountry(query) ?? COUNTRIES.find((c) => c.name === "Japan") ?? COUNTRIES[0]
}
`

  writeFileSync(join(root, "src", "data", "countries.ts"), out, "utf8")
  const japan = enriched.find((c) => c.name === "Japan")
  console.log("Japan sample:", {
    population: japan?.population,
    capital: japan?.capital,
    language: japan?.language,
    currency: japan?.currency,
    region: japan?.region,
    rating: japan?.rating,
  })
  console.log("Done.")
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
