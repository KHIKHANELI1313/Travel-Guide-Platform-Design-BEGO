import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, "..", "src", "data", "countries.ts")

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

const src = readFileSync(dataPath, "utf8")
const match = src.match(/export const COUNTRIES: Country\[\] = (\[[\s\S]*?\n\])\n\nconst aliasIndex/)
const countries = JSON.parse(match[1])

let n = 0
for (const [name, history] of Object.entries(MANUAL)) {
  const c =
    countries.find((x) => x.name === name) ||
    countries.find((x) => x.name.normalize("NFC") === name.normalize("NFC")) ||
    countries.find((x) => /ivoire|ivory/i.test(x.name) && name.includes("Ivoire"))
  if (!c) {
    console.log("missing country record", name)
    continue
  }
  c.history = history
  n++
  console.log("fixed", c.name)
}

const out = src.replace(
  /export const COUNTRIES: Country\[\] = \[[\s\S]*?\n\]\n\nconst aliasIndex/,
  `export const COUNTRIES: Country[] = ${JSON.stringify(countries, null, 2)}\n\nconst aliasIndex`,
)
writeFileSync(dataPath, out, "utf8")

const stillGeneric = countries.filter(
  (c) =>
    !c.history ||
    c.history.includes("story is shaped") ||
    c.history.includes("Layer visits with cultural sites") ||
    c.history.length < 120,
)
console.log("saved; fixed", n, "; still generic/short:", stillGeneric.map((c) => c.name))
