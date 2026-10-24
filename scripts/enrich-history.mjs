/**
 * Fill Country.history from CIA World Factbook "background" text.
 * Run: node scripts/enrich-history.mjs
 */
import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, "..", "src", "data", "countries.ts")
const FACTBOOK_URL =
  "https://raw.githubusercontent.com/iancoleman/cia_world_factbook_api/master/data/factbook.json"

/** Our country name → Factbook key when slugify is not enough */
const KEY_OVERRIDES = {
  "United States": "united_states",
  "United Kingdom": "united_kingdom",
  "United Arab Emirates": "united_arab_emirates",
  "Democratic Republic of the Congo": "congo_democratic_republic_of_the",
  Congo: "congo_republic_of_the",
  "North Korea": "korea_north",
  "South Korea": "korea_south",
  "Czech Republic": "czechia",
  "Côte d'Ivoire": "cote_d'_ivoire",
  "Vatican City": "holy_see_vatican_city",
  Palestine: "west_bank",
  "North Macedonia": "north_macedonia",
  Eswatini: "eswatini",
  "Cabo Verde": "cabo_verde",
  "Timor-Leste": "timor_leste",
  "Sao Tome and Principe": "sao_tome_and_principe",
  Micronesia: "micronesia_federated_states_of",
  Bahamas: "bahamas_the",
  Gambia: "gambia_the",
  "Antigua and Barbuda": "antigua_and_barbuda",
  "Bosnia and Herzegovina": "bosnia_and_herzegovina",
  "Burkina Faso": "burkina_faso",
  "Central African Republic": "central_african_republic",
  "Costa Rica": "costa_rica",
  "Dominican Republic": "dominican_republic",
  "El Salvador": "el_salvador",
  "Equatorial Guinea": "equatorial_guinea",
  "Guinea-Bissau": "guinea_bissau",
  "Marshall Islands": "marshall_islands",
  "New Zealand": "new_zealand",
  "Papua New Guinea": "papua_new_guinea",
  "Saint Kitts and Nevis": "saint_kitts_and_nevis",
  "Saint Lucia": "saint_lucia",
  "Saint Vincent and the Grenadines": "saint_vincent_and_the_grenadines",
  "San Marino": "san_marino",
  "Saudi Arabia": "saudi_arabia",
  "Sierra Leone": "sierra_leone",
  "Solomon Islands": "solomon_islands",
  "South Africa": "south_africa",
  "South Sudan": "south_sudan",
  "Sri Lanka": "sri_lanka",
  "Trinidad and Tobago": "trinidad_and_tobago",
  Myanmar: "burma",
}

function slugify(name) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "")
}

function cleanHistory(text) {
  if (!text) return ""
  let t = text.replace(/\s+/g, " ").trim()
  // Factbook often uses note markers
  t = t.replace(/\$[0-9]+/g, "")
  if (t.length > 1200) {
    const cut = t.slice(0, 1200)
    const last = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "), cut.lastIndexOf("? "))
    t = last > 500 ? cut.slice(0, last + 1) : `${cut.trim()}…`
  }
  return t
}

function parseCountries() {
  const src = readFileSync(dataPath, "utf8")
  const startMark = "export const COUNTRIES: Country[] = "
  const endMark = "\n\nconst aliasIndex"
  const start = src.indexOf(startMark)
  const end = src.indexOf(endMark, start)
  if (start < 0 || end < 0) throw new Error("Could not locate COUNTRIES array")
  const json = src.slice(start + startMark.length, end)
  return { src, countries: JSON.parse(json), startMark, endMark, start, end }
}

function findFactbookEntry(countriesMap, name) {
  const keys = [
    KEY_OVERRIDES[name],
    slugify(name),
    slugify(name.replace(/^The /i, "")),
  ].filter(Boolean)

  for (const key of keys) {
    const background = countriesMap[key]?.data?.introduction?.background
    if (background && background.trim().length > 80) {
      return { key, background }
    }
  }

  // Exact slug match only (avoid fuzzy false positives like guinea → papua_new_guinea)
  const slug = slugify(name)
  const exact = countriesMap[slug]?.data?.introduction?.background
  if (exact && exact.trim().length > 80) {
    return { key: slug, background: exact }
  }
  return null
}

const MANUAL = {
  "Côte d'Ivoire":
    "Côte d'Ivoire was home to several powerful West African states before French colonial rule in the late 19th century. It became a French colony and later gained independence in 1960 under Félix Houphouët-Boigny, who led the country for decades and promoted relative stability and agricultural exports, especially cocoa. After his death in 1993, political rivalry and identity conflicts deepened, leading to coups and civil conflict in the 2000s. A peace process and elections helped restore civilian government, and today the country is rebuilding as one of West Africa’s major economies while still navigating the legacy of conflict and regional diversity.",
  "Equatorial Guinea":
    "Equatorial Guinea comprises a mainland region (Río Muni) and islands including Bioko, historically linked to Bantu migrations and later Portuguese and Spanish colonial claims. Spain formally controlled the territory as Spanish Guinea until independence in 1968. Post-independence rule under Francisco Macías Nguema was marked by repression, followed by a 1979 coup that brought Teodoro Obiang Nguema to power. Large offshore oil discoveries in the 1990s transformed the economy, but wealth has been unevenly distributed. The country’s modern history is shaped by authoritarian governance, oil revenues, and efforts to diversify beyond hydrocarbons.",
  Eswatini:
    "Eswatini, formerly Swaziland, is one of Africa’s last absolute monarchies, with deep roots in the Ngwane/Swazi kingdom formed in the 18th–19th centuries under leaders such as Sobhuza I and later Mswati II. It became a British protectorate in the colonial era while retaining a strong monarchy. Independence came in 1968 under King Sobhuza II. The country later renamed itself Eswatini in 2018 under King Mswati III. Its history blends indigenous kingship traditions with colonial borders, and contemporary politics still center on royal authority alongside calls for democratic reform.",
  Gambia:
    "The Gambia occupies a narrow corridor along the Gambia River, historically part of West African trade networks and later contested by European powers. Britain established a presence centered on Bathurst (now Banjul), and the territory became a crown colony and protectorate. Independence arrived in 1965 under Dawda Jawara, followed by a long period of relative stability until a 1994 coup brought Yahya Jammeh to power. Jammeh’s rule ended after the 2016 election and a regional intervention that seated Adama Barrow. The Gambia’s history is closely tied to the river, coastal trade, and its unusual geography nearly enclosed by Senegal.",
  Haiti:
    "Haiti’s history is defined by Indigenous Taíno life, Spanish colonization of Hispaniola, and later French plantation rule in Saint-Domingue built on enslaved African labor. The Haitian Revolution (1791–1804) overthrew slavery and colonial rule, making Haiti the first independent Black republic in the modern world. The 19th and 20th centuries brought political turmoil, foreign interventions (including a U.S. occupation), dictatorship under the Duvaliers, and repeated struggles for democracy. Natural disasters and economic hardship have compounded political crises. Despite adversity, Haiti’s revolutionary legacy remains central to its national identity and world history.",
}

async function main() {
  const parsed = parseCountries()
  const { src, countries, startMark, endMark } = parsed
  console.log(`Loaded ${countries.length} local countries`)
  console.log("Downloading CIA World Factbook…")
  const res = await fetch(FACTBOOK_URL)
  if (!res.ok) throw new Error(`Factbook download failed: ${res.status}`)
  const factbook = await res.json()
  const map = factbook.countries || {}
  console.log(`Factbook entries: ${Object.keys(map).length}`)

  let ok = 0
  let miss = 0

  for (const c of countries) {
    const hit = findFactbookEntry(map, c.name)
    if (hit && hit.background && hit.background.trim().length > 80) {
      c.history = cleanHistory(hit.background)
      ok++
      console.log(`✓ ${c.name} ← ${hit.key}`)
    } else {
      miss++
      console.log(`✗ ${c.name}`)
    }
  }

  // Manual fills where Factbook background is empty
  for (const [name, history] of Object.entries(MANUAL)) {
    const c = countries.find((x) => x.name === name)
    if (c) {
      c.history = history
      console.log(`✓ ${name} ← manual`)
    }
  }

  // Myanmar is listed as Burma in Factbook
  const myanmar = countries.find((c) => c.name === "Myanmar")
  if (myanmar) {
    const bg = map.burma?.data?.introduction?.background
    if (bg) {
      myanmar.history = cleanHistory(bg)
      console.log("✓ Myanmar ← burma")
    }
  }

  const start2 = src.indexOf(startMark)
  const end2 = src.indexOf(endMark, start2)
  const out =
    src.slice(0, start2 + startMark.length) +
    JSON.stringify(countries, null, 2) +
    src.slice(end2)
  writeFileSync(dataPath, out, "utf8")

  const disk = parseCountries().countries
  const generic = disk.filter((c) => (c.history || "").includes("story is shaped"))
  const japan = disk.find((c) => c.name === "Japan")
  console.log(`\nDone. filled=${ok}, initial misses=${miss}`)
  console.log("Japan history (disk):", japan?.history?.slice(0, 220))
  console.log("generic remaining:", generic.length, generic.map((c) => c.name).slice(0, 20))
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
