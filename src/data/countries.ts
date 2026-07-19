/* Auto-enriched by scripts/enrich-countries.mjs — 195 countries */
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

export type HistoryFact = {
  year: string
  title: string
  text: string
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
  historyFacts?: HistoryFact[]
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

export const COUNTRIES: Country[] = [
  {
    "name": "Afghanistan",
    "nameKa": "ავღანეთი",
    "capital": "Kabul",
    "iso2": "af",
    "flag": "🇦🇫",
    "language": "Dari / Pashto / Turkmen",
    "currency": "Afghan afghani (؋)",
    "population": "44M",
    "populationRaw": 43844000,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Southern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Afghanistan",
    "about": "Afghanistan is a country in Southern Asia, with Kabul as its capital. About 44M people live here. Official / major languages include Dari / Pashto / Turkmen, and everyday transactions typically use the Afghan afghani (؋). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Afghanistan covers the development of Afghanistan from ancient times to the establishment of the Emirate of Afghanistan in 1822 and Afghanistan in modern times. This history is largely shared with that of Central Asia, the Middle East, and northern parts of the Indian subcontinent.",
    "culture": "Culture in Afghanistan is closely tied to Dari language and everyday life in Kabul. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Afghanistan classics",
        "desc": "Signature dishes and home-style cooking from Afghanistan",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Kabul",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Asia ingredients and Dari culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Kabul",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Kabul",
        "desc": "Capital city and main gateway to Afghanistan",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Kabul",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Kabul, then continue by rail, bus, taxi or domestic flights. Keep some Afghan afghani for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Afghanistan before you go. Register important numbers, keep copies of documents, and use licensed transport in Kabul. Emergency info: Local emergency · dialing code +93.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +93",
    "callingCode": "+93",
    "aliases": [
      "Afghanistan",
      "Islamic Republic of Afghanistan"
    ]
  },
  {
    "name": "Albania",
    "nameKa": "ალბანეთი",
    "capital": "Tirana",
    "iso2": "al",
    "flag": "🇦🇱",
    "language": "Albanian",
    "currency": "Albanian lek (Lek)",
    "population": "2.4M",
    "populationRaw": 2363314,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Southern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Albania",
    "about": "Albania is a country in Southern Europe, with Tirana as its capital. About 2.4M people live here. Official / major languages include Albanian, and everyday transactions typically use the Albanian lek (Lek). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "Albania’s story is shaped by its place in Southern Europe. Historic centers around Tirana, museums, and monuments help travelers understand how the country developed into the modern state it is today. Layer visits with cultural sites and neighborhood walks for a fuller picture.",
    "culture": "Culture in Albania is closely tied to Albanian language and everyday life in Tirana. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Albania classics",
        "desc": "Signature dishes and home-style cooking from Albania",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Tirana",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Europe ingredients and Albanian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Tirana",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Tirana",
        "desc": "Capital city and main gateway to Albania",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Tirana",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via Tirana, then continue by rail, bus, taxi or domestic flights. Keep some Albanian lek for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Albania before you go. Register important numbers, keep copies of documents, and use licensed transport in Tirana. Emergency info: Local emergency · dialing code +355.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +355",
    "callingCode": "+355",
    "aliases": [
      "Albania",
      "Republic of Albania"
    ]
  },
  {
    "name": "Algeria",
    "nameKa": "ალჟირი",
    "capital": "Algiers",
    "iso2": "dz",
    "flag": "🇩🇿",
    "language": "Arabic",
    "currency": "Algerian dinar (دج)",
    "population": "47M",
    "populationRaw": 47400000,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Northern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Algeria",
    "about": "Algeria is a country in Northern Africa, with Algiers as its capital. About 47M people live here. Official / major languages include Arabic, and everyday transactions typically use the Algerian dinar (دج). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Algeria's history has been shaped by its position between the Mediterranean, the Maghreb, and the Sahara. While much of its political life developed along the northern coastal plains, the region's deeper foundations lie in indigenous Amazigh societies, including the Numidians, who formed one of the earliest known states in the area. Over time, Algeria came into contact with Phoenician, Roman, Vandal, and Byzantine powers, each leaving traces on its historical landscape. The spread of Islam from the 7th century, followed by Arab migrations, gradually reshaped the region's culture, language, and religious identity, producing an Algerian identity rooted in both Arab-Islamic and Amazigh heritage. After the weakening of Umayyad authority following the Berber Revolt of 740, Algeria was ruled by several local Islamic dynasties, including the Rustamids, Fatimids, Zirids, Hammadids, Almohads, and Zayyanids. In the Ottoman era, the Regency of Algiers rose as a powerful and largely self-governing state in the western Mediterranean, maintaining only nominal allegiance to the Ottoman Empire.",
    "culture": "Culture in Algeria is closely tied to Arabic language and everyday life in Algiers. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Algeria classics",
        "desc": "Signature dishes and home-style cooking from Algeria",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Algiers",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Northern Africa ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Algiers",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Algiers",
        "desc": "Capital city and main gateway to Algeria",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Algiers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Algiers, then continue by rail, bus, taxi or domestic flights. Keep some Algerian dinar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Algeria before you go. Register important numbers, keep copies of documents, and use licensed transport in Algiers. Emergency info: Local emergency · dialing code +213.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +213",
    "callingCode": "+213",
    "aliases": [
      "Algeria",
      "People's Democratic Republic of Algeria"
    ]
  },
  {
    "name": "Andorra",
    "nameKa": "ანდორა",
    "capital": "Andorra la Vella",
    "iso2": "ad",
    "flag": "🇦🇩",
    "language": "Catalan",
    "currency": "Euro (€)",
    "population": "88K",
    "populationRaw": 88306,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Southern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Andorra",
    "about": "Andorra is a country in Southern Europe, with Andorra la Vella as its capital. About 88K people live here. Official / major languages include Catalan, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "Andorra, officially the Principality of Andorra, also called the Principality of the Valleys of Andorra, is a sovereign landlocked microstate in southwestern Europe, located in the eastern Pyrenees mountain range and is bordered by Spain and France.",
    "culture": "Culture in Andorra is closely tied to Catalan language and everyday life in Andorra la Vella. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Andorra classics",
        "desc": "Signature dishes and home-style cooking from Andorra",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Andorra la Vella",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Europe ingredients and Catalan culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Andorra la Vella",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Andorra la Vella",
        "desc": "Capital city and main gateway to Andorra",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Andorra la Vella",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Andorra la Vella, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Andorra before you go. Register important numbers, keep copies of documents, and use licensed transport in Andorra la Vella. Emergency info: Local emergency · dialing code +376.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +376",
    "callingCode": "+376",
    "aliases": [
      "Andorra",
      "Principality of Andorra"
    ]
  },
  {
    "name": "Angola",
    "nameKa": "ანგოლა",
    "capital": "Luanda",
    "iso2": "ao",
    "flag": "🇦🇴",
    "language": "Portuguese",
    "currency": "Angolan kwanza (Kz)",
    "population": "36M",
    "populationRaw": 36170961,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Middle Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Angola",
    "about": "Angola is a country in Middle Africa, with Luanda as its capital. About 36M people live here. Official / major languages include Portuguese, and everyday transactions typically use the Angolan kwanza (Kz). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Angola was first settled by San hunter-gatherer societies before the northern domains came under the rule of Bantu states such as Kongo and Ndongo. In the 15th century, Portuguese colonists began trading, and a settlement was established at Luanda during the 16th century. Portugal annexed territories in the region which were ruled as a colony from 1655, and Angola was incorporated as an overseas province of Portugal in 1951. After the Angolan War of Independence, which ended in 1974 with an army mutiny and leftist coup in Lisbon, Angola achieved independence in 1975 through the Alvor Agreement. After independence, Angola entered a long period of civil war that lasted until 2002.",
    "culture": "Culture in Angola is closely tied to Portuguese language and everyday life in Luanda. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Angola classics",
        "desc": "Signature dishes and home-style cooking from Angola",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Luanda",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Middle Africa ingredients and Portuguese culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Luanda",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Luanda",
        "desc": "Capital city and main gateway to Angola",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Luanda",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Luanda, then continue by rail, bus, taxi or domestic flights. Keep some Angolan kwanza for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Angola before you go. Register important numbers, keep copies of documents, and use licensed transport in Luanda. Emergency info: Local emergency · dialing code +244.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +244",
    "callingCode": "+244",
    "aliases": [
      "Angola",
      "Republic of Angola"
    ]
  },
  {
    "name": "Antigua and Barbuda",
    "nameKa": "ანტიგუა და ბარბუდა",
    "capital": "St. John's",
    "iso2": "ag",
    "flag": "🇦🇬",
    "language": "English",
    "currency": "Eastern Caribbean dollar ($)",
    "population": "104K",
    "populationRaw": 103603,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Caribbean",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Antigua and Barbuda",
    "about": "Antigua and Barbuda is a country in Caribbean, with St. John's as its capital. About 104K people live here. Official / major languages include English, and everyday transactions typically use the Eastern Caribbean dollar ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Antigua and Barbuda covers the period from the arrival of the Archaic peoples thousands of years ago to the present day. Prior to European colonization, the lands encompassing present-day Antigua and Barbuda were inhabited by three successive Amerindian societies. The island was claimed by England, who colonized the islands in 1632. Under English/British control, the islands witnessed an influx of both Britons and Africans to the island. In 1981, the islands were granted independence as the modern state of Antigua and Barbuda.",
    "culture": "Culture in Antigua and Barbuda is closely tied to English language and everyday life in St. John's. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Antigua and Barbuda classics",
        "desc": "Signature dishes and home-style cooking from Antigua and Barbuda",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around St. John's",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Caribbean ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in St. John's",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "St. John's",
        "desc": "Capital city and main gateway to Antigua and Barbuda",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near St. John's",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via St. John's, then continue by rail, bus, taxi or domestic flights. Keep some Eastern Caribbean dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Antigua and Barbuda before you go. Register important numbers, keep copies of documents, and use licensed transport in St. John's. Emergency info: Local emergency · dialing code +1.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +1",
    "callingCode": "+1",
    "aliases": [
      "Antigua and Barbuda"
    ]
  },
  {
    "name": "Argentina",
    "nameKa": "არგენტინა",
    "capital": "Buenos Aires",
    "iso2": "ar",
    "flag": "🇦🇷",
    "language": "Guaraní / Spanish",
    "currency": "Argentine peso ($)",
    "population": "47M",
    "populationRaw": 46735004,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "South America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Argentina",
    "about": "Argentina is a country in South America, with Buenos Aires as its capital. About 47M people live here. Official / major languages include Guaraní / Spanish, and everyday transactions typically use the Argentine peso ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Argentina can be divided into four main parts: the pre-Columbian time or early history, the colonial period (1536–1809), the period of nation-building (1810–1880), and the history of modern Argentina.",
    "culture": "Culture in Argentina is closely tied to Guaraní language and everyday life in Buenos Aires. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Argentina classics",
        "desc": "Signature dishes and home-style cooking from Argentina",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Buenos Aires",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South America ingredients and Guaraní culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Buenos Aires",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Buenos Aires",
        "desc": "Capital city and main gateway to Argentina",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Buenos Aires",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Buenos Aires, then continue by rail, bus, taxi or domestic flights. Keep some Argentine peso for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Argentina before you go. Register important numbers, keep copies of documents, and use licensed transport in Buenos Aires. Emergency info: Local emergency · dialing code +54.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +54",
    "callingCode": "+54",
    "aliases": [
      "Argentina",
      "Argentine Republic"
    ]
  },
  {
    "name": "Armenia",
    "nameKa": "სომხეთი",
    "capital": "Yerevan",
    "iso2": "am",
    "flag": "🇦🇲",
    "language": "Armenian",
    "currency": "Armenian dram (֏)",
    "population": "3.1M",
    "populationRaw": 3081100,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Western Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Armenia",
    "about": "Armenia is a country in Western Asia, with Yerevan as its capital. About 3.1M people live here. Official / major languages include Armenian, and everyday transactions typically use the Armenian dram (֏). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Armenia covers the topics related to the history of the Republic of Armenia, as well as the Armenian people, the Armenian language, and the regions of Eurasia historically and geographically considered Armenian.",
    "culture": "Culture in Armenia is closely tied to Armenian language and everyday life in Yerevan. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Armenia classics",
        "desc": "Signature dishes and home-style cooking from Armenia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Yerevan",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Asia ingredients and Armenian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Yerevan",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Yerevan",
        "desc": "Capital city and main gateway to Armenia",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Yerevan",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Yerevan, then continue by rail, bus, taxi or domestic flights. Keep some Armenian dram for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Armenia before you go. Register important numbers, keep copies of documents, and use licensed transport in Yerevan. Emergency info: Local emergency · dialing code +374.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +374",
    "callingCode": "+374",
    "aliases": [
      "Armenia",
      "Republic of Armenia"
    ]
  },
  {
    "name": "Australia",
    "nameKa": "ავსტრალია",
    "capital": "Canberra",
    "iso2": "au",
    "flag": "🇦🇺",
    "language": "English",
    "currency": "Australian dollar ($)",
    "population": "27M",
    "populationRaw": 27400013,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "tags": [
      "Beach",
      "Nature",
      "Adventure"
    ],
    "tagline": "Discover Australia",
    "about": "Australia is a country in Australia and New Zealand, with Canberra as its capital. About 27M people live here. Official / major languages include English, and everyday transactions typically use the Australian dollar ($). Travelers visit for beach, nature, adventure experiences — cities, landscapes, food, and local culture.",
    "history": "The Commonwealth of Australia was proclaimed on 1 January 1901 as a federation of six self-governing former British colonies. The human history of Australia, however, commences with the arrival of the first ancestors of Aboriginal Australians from Maritime Southeast Asia between 50,000 and 65,000 years ago, and continues to the present multicultural democracy.",
    "culture": "Culture in Australia is closely tied to English language and everyday life in Canberra. Expect festivals, markets, arts, and hospitality traditions that reflect Oceania influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Australia classics",
        "desc": "Signature dishes and home-style cooking from Australia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Canberra",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Australia and New Zealand ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Canberra",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Canberra",
        "desc": "Capital city and main gateway to Australia",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Canberra",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Canberra, then continue by rail, bus, taxi or domestic flights. Keep some Australian dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Australia before you go. Register important numbers, keep copies of documents, and use licensed transport in Canberra. Emergency info: Local emergency · dialing code +61.",
    "bestSeason": "Nov–Apr",
    "emergency": "Local emergency · dialing code +61",
    "callingCode": "+61",
    "aliases": [
      "Australia",
      "Commonwealth of Australia"
    ]
  },
  {
    "name": "Austria",
    "nameKa": "ავსტრია",
    "capital": "Vienna",
    "iso2": "at",
    "flag": "🇦🇹",
    "language": "Austro-Bavarian German",
    "currency": "Euro (€)",
    "population": "9.2M",
    "populationRaw": 9200931,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Western Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Austria",
    "about": "Austria is a country in Western Europe, with Vienna as its capital. About 9.2M people live here. Official / major languages include Austro-Bavarian German, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Austria covers the history of Austria and its predecessor states. In the late Iron Age Austria was occupied by people of the Hallstatt Celtic culture, they first organized as a Celtic kingdom referred to by the Romans as Noricum, dating from c. 800 to 400 BC. At the end of the 1st century BC, the lands south of the Danube became part of the Roman Empire. In the Migration Period, the 6th century, the Bavarii, a Germanic people, occupied these lands until it fell to the Frankish Empire established by the Germanic Franks in the 9th century. In the year 976 AD, the first state of Austria formed. The name Ostarrîchi (Austria) has been in use since 996 AD when it was a margravate of the Duchy of Bavaria and from 1156 an independent duchy of the Holy Roman Empire (962–1806).",
    "culture": "Culture in Austria is closely tied to Austro-Bavarian German language and everyday life in Vienna. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Austria classics",
        "desc": "Signature dishes and home-style cooking from Austria",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Vienna",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Europe ingredients and Austro-Bavarian German culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Vienna",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Vienna",
        "desc": "Capital city and main gateway to Austria",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Vienna",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Vienna, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Austria before you go. Register important numbers, keep copies of documents, and use licensed transport in Vienna. Emergency info: Local emergency · dialing code +43.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +43",
    "callingCode": "+43",
    "aliases": [
      "Austria",
      "Republic of Austria"
    ]
  },
  {
    "name": "Azerbaijan",
    "nameKa": "აზერბაიჯანი",
    "capital": "Baku",
    "iso2": "az",
    "flag": "🇦🇿",
    "language": "Azerbaijani / Russian",
    "currency": "Azerbaijani manat (m)",
    "population": "10M",
    "populationRaw": 10241722,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Western Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Azerbaijan",
    "about": "Azerbaijan is a country in Western Asia, with Baku as its capital. About 10M people live here. Official / major languages include Azerbaijani / Russian, and everyday transactions typically use the Azerbaijani manat (m). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "In this article, the history of Azerbaijan is understood as the history of the region now forming the Republic of Azerbaijan. Topographically, the land is contained by the southern slopes of the Caucasus Mountains in the north, the Caspian Sea in the east, and the Armenian Highlands in the west. In the south, its natural boundaries are less distinct, and here the country merges with the Iranian Plateau.",
    "culture": "Culture in Azerbaijan is closely tied to Azerbaijani language and everyday life in Baku. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Azerbaijan classics",
        "desc": "Signature dishes and home-style cooking from Azerbaijan",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Baku",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Asia ingredients and Azerbaijani culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Baku",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Baku",
        "desc": "Capital city and main gateway to Azerbaijan",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Baku",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Baku, then continue by rail, bus, taxi or domestic flights. Keep some Azerbaijani manat for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Azerbaijan before you go. Register important numbers, keep copies of documents, and use licensed transport in Baku. Emergency info: Local emergency · dialing code +994.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +994",
    "callingCode": "+994",
    "aliases": [
      "Azerbaijan",
      "Republic of Azerbaijan"
    ]
  },
  {
    "name": "Bahamas",
    "nameKa": "ბაჰამის კუნძულები",
    "capital": "Nassau",
    "iso2": "bs",
    "flag": "🇧🇸",
    "language": "English",
    "currency": "Bahamian dollar (B$)",
    "population": "398K",
    "populationRaw": 398165,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Caribbean",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Bahamas",
    "about": "Bahamas is a country in Caribbean, with Nassau as its capital. About 398K people live here. Official / major languages include English, and everyday transactions typically use the Bahamian dollar (B$). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The earliest arrival of people in the islands now known as The Bahamas was in the first millennium AD. The first inhabitants of the islands were the Lucayans, an Arawakan language-speaking Taino people, who arrived between about 500 and 800 AD from other islands of the Caribbean.",
    "culture": "Culture in Bahamas is closely tied to English language and everyday life in Nassau. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Bahamas classics",
        "desc": "Signature dishes and home-style cooking from Bahamas",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Nassau",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Caribbean ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Nassau",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Nassau",
        "desc": "Capital city and main gateway to Bahamas",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Nassau",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Nassau, then continue by rail, bus, taxi or domestic flights. Keep some Bahamian dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Bahamas before you go. Register important numbers, keep copies of documents, and use licensed transport in Nassau. Emergency info: Local emergency · dialing code +1.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +1",
    "callingCode": "+1",
    "aliases": [
      "Bahamas",
      "The Bahamas",
      "Commonwealth of the Bahamas"
    ]
  },
  {
    "name": "Bahrain",
    "nameKa": "ბაჰრეინი",
    "capital": "Manama",
    "iso2": "bh",
    "flag": "🇧🇭",
    "language": "Arabic",
    "currency": "Bahraini dinar (.د.ب)",
    "population": "1.6M",
    "populationRaw": 1594654,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Western Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Bahrain",
    "about": "Bahrain is a country in Western Asia, with Manama as its capital. About 1.6M people live here. Official / major languages include Arabic, and everyday transactions typically use the Bahraini dinar (.د.ب). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "Bahrain, an archipelago in the Persian Gulf, has been a pivotal center of trade, culture, and power for millennia, most notably as the heart of the ancient Dilmun civilization, a thriving hub of commerce and diplomacy in the Bronze Age. Its strategic location attracted a succession of influential powers, including the Persians, Sumerians, Assyrians, Babylonians, Portuguese, the Arabs, and the British, each leaving a distinct mark on its cultural and political landscape. In 1932, Bahrain became the first location in the Persian Gulf outside Iran to discover oil, ushering in a transformative era of economic growth and global significance.",
    "culture": "Culture in Bahrain is closely tied to Arabic language and everyday life in Manama. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Bahrain classics",
        "desc": "Signature dishes and home-style cooking from Bahrain",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Manama",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Asia ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Manama",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Manama",
        "desc": "Capital city and main gateway to Bahrain",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Manama",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Manama, then continue by rail, bus, taxi or domestic flights. Keep some Bahraini dinar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Bahrain before you go. Register important numbers, keep copies of documents, and use licensed transport in Manama. Emergency info: Local emergency · dialing code +973.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +973",
    "callingCode": "+973",
    "aliases": [
      "Bahrain",
      "Kingdom of Bahrain"
    ]
  },
  {
    "name": "Bangladesh",
    "nameKa": "ბანგლადეში",
    "capital": "Dhaka",
    "iso2": "bd",
    "flag": "🇧🇩",
    "language": "Bengali",
    "currency": "Bangladeshi taka (৳)",
    "population": "170M",
    "populationRaw": 169828911,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Southern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Bangladesh",
    "about": "Bangladesh is a country in Southern Asia, with Dhaka as its capital. About 170M people live here. Official / major languages include Bengali, and everyday transactions typically use the Bangladeshi taka (৳). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Bangladesh dates back over four millennia to the Chalcolithic period. The region's early history was characterized by a succession of Hindu and Buddhist kingdoms and empires that fought for control over the Bengal region. Islam arrived in the 8th century and gradually became the dominant religion from the early 13th century with conquests led by Bakhtiyar Khalji and the activities of Sunni missionaries, like Shah Jalal. Muslim rulers promoted the spread of Islam by building mosques across the region. From the 14th century onward, Bengal was ruled by the Bengal Sultanate, founded by Fakhruddin Mubarak Shah, who established an individual currency. The Bengal Sultanate expanded under rulers like Shamsuddin Ilyas Shah, leading to economic prosperity and military dominance, with Bengal being referred to by Europeans as the richest country to trade with. The region later became a part of the Mughal Empire, and according to historian C. A. Bayly, it was probably the empire's wealthiest province.",
    "culture": "Culture in Bangladesh is closely tied to Bengali language and everyday life in Dhaka. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Bangladesh classics",
        "desc": "Signature dishes and home-style cooking from Bangladesh",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Dhaka",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Asia ingredients and Bengali culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Dhaka",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Dhaka",
        "desc": "Capital city and main gateway to Bangladesh",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Dhaka",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Dhaka, then continue by rail, bus, taxi or domestic flights. Keep some Bangladeshi taka for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Bangladesh before you go. Register important numbers, keep copies of documents, and use licensed transport in Dhaka. Emergency info: Local emergency · dialing code +880.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +880",
    "callingCode": "+880",
    "aliases": [
      "Bangladesh",
      "People's Republic of Bangladesh"
    ]
  },
  {
    "name": "Barbados",
    "nameKa": "ბარბადოსი",
    "capital": "Bridgetown",
    "iso2": "bb",
    "flag": "🇧🇧",
    "language": "English",
    "currency": "Barbadian dollar (Bds$)",
    "population": "268K",
    "populationRaw": 267800,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Caribbean",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Barbados",
    "about": "Barbados is a country in Caribbean, with Bridgetown as its capital. About 268K people live here. Official / major languages include English, and everyday transactions typically use the Barbadian dollar (Bds$). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Barbados is an island country in the southeastern Caribbean Sea, situated about 100 miles (160 km) east of Saint Vincent and the Grenadines. Roughly triangular in shape, the island measures some 21 miles (34 km) from northwest to southeast and about 14 miles (23 km) from east to west at its widest point. The capital and largest town is Bridgetown, which is also the main seaport.",
    "culture": "Culture in Barbados is closely tied to English language and everyday life in Bridgetown. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Barbados classics",
        "desc": "Signature dishes and home-style cooking from Barbados",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Bridgetown",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Caribbean ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Bridgetown",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Bridgetown",
        "desc": "Capital city and main gateway to Barbados",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Bridgetown",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Bridgetown, then continue by rail, bus, taxi or domestic flights. Keep some Barbadian dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Barbados before you go. Register important numbers, keep copies of documents, and use licensed transport in Bridgetown. Emergency info: Local emergency · dialing code +1.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +1",
    "callingCode": "+1",
    "aliases": [
      "Barbados"
    ]
  },
  {
    "name": "Belarus",
    "nameKa": "ბელარუსი",
    "capital": "Minsk",
    "iso2": "by",
    "flag": "🇧🇾",
    "language": "Belarusian / Russian",
    "currency": "Belarusian ruble (Br)",
    "population": "9.1M",
    "populationRaw": 9109280,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Belarus",
    "about": "Belarus is a country in Eastern Europe, with Minsk as its capital. About 9.1M people live here. Official / major languages include Belarusian / Russian, and everyday transactions typically use the Belarusian ruble (Br). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The lands of Belarus during the Middle Ages became part of Kievan Rus' and were split between different regional principalities, including Polotsk, Turov, Vitebsk, and others. Following the Mongol invasions of the 13th century, these lands were absorbed by the Grand Duchy of Lithuania, which later was merged into the Polish–Lithuanian Commonwealth in the 16th century.",
    "culture": "Culture in Belarus is closely tied to Belarusian language and everyday life in Minsk. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Belarus classics",
        "desc": "Signature dishes and home-style cooking from Belarus",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Minsk",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Europe ingredients and Belarusian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Minsk",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Minsk",
        "desc": "Capital city and main gateway to Belarus",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Minsk",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Minsk, then continue by rail, bus, taxi or domestic flights. Keep some Belarusian ruble for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Belarus before you go. Register important numbers, keep copies of documents, and use licensed transport in Minsk. Emergency info: Local emergency · dialing code +375.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +375",
    "callingCode": "+375",
    "aliases": [
      "Belarus",
      "Republic of Belarus"
    ]
  },
  {
    "name": "Belgium",
    "nameKa": "ბელგია",
    "capital": "Brussels",
    "iso2": "be",
    "flag": "🇧🇪",
    "language": "German / French / Dutch",
    "currency": "Euro (€)",
    "population": "12M",
    "populationRaw": 11825551,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Western Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Belgium",
    "about": "Belgium is a country in Western Europe, with Brussels as its capital. About 12M people live here. Official / major languages include German / French / Dutch, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "For most of its history, what is today Belgium was either a part of a larger territory, such as the medieval Carolingian Empire, or was divided into a number of smaller states. In the Middle Ages, the territory of present-day Belgium was fragmented into numerous feudal principalities, including the Duchy of Lower Lorraine, the Duchy of Brabant, the County of Flanders, the Prince-Bishopric of Liège, the County of Namur, the County of Hainaut and the County of Luxembourg. Belgium's modern shape can be traced back at least as far as the southern core of the medieval Burgundian Netherlands. The Eighty Years' War (1568–1648) later led to the split between a northern Dutch Republic and the Southern Netherlands from which Belgium and Luxembourg developed. The area, long a Habsburg stronghold, briefly came under Bourbon control during the War of the Spanish Succession. The resulting Peace of Utrecht transferred the area back to Habsburg control, creating what is now known as the Austrian Netherlands. The French Revolutionary wars led to Belgium becoming part of France in 1795.",
    "culture": "Culture in Belgium is closely tied to German language and everyday life in Brussels. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Belgium classics",
        "desc": "Signature dishes and home-style cooking from Belgium",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Brussels",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Europe ingredients and German culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Brussels",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Brussels",
        "desc": "Capital city and main gateway to Belgium",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Brussels",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Brussels, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Belgium before you go. Register important numbers, keep copies of documents, and use licensed transport in Brussels. Emergency info: Local emergency · dialing code +32.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +32",
    "callingCode": "+32",
    "aliases": [
      "Belgium",
      "Kingdom of Belgium"
    ]
  },
  {
    "name": "Belize",
    "nameKa": "ბელიზი",
    "capital": "Belmopan",
    "iso2": "bz",
    "flag": "🇧🇿",
    "language": "Belizean Creole / English / Spanish",
    "currency": "Belize dollar ($)",
    "population": "418K",
    "populationRaw": 417634,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Central America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Belize",
    "about": "Belize is a country in Central America, with Belmopan as its capital. About 418K people live here. Official / major languages include Belizean Creole / English / Spanish, and everyday transactions typically use the Belize dollar ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Belize dates back thousands of years. The Maya civilization spread into the area of Belize between 1500 BC to 1200 BC and flourished until about 1000 AD. Several Maya ruin sites, including Cahal Pech, Caracol, Lamanai, Lubaantun, Altun Ha, and Xunantunich reflect the advanced civilization and much denser population of that period. The first recorded European incursions in the region were made by Spanish conquistadors and missionaries in the 16th century. One attraction of the area was the availability of logwood, which also brought British settlers.",
    "culture": "Culture in Belize is closely tied to Belizean Creole language and everyday life in Belmopan. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Belize classics",
        "desc": "Signature dishes and home-style cooking from Belize",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Belmopan",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Central America ingredients and Belizean Creole culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Belmopan",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Belmopan",
        "desc": "Capital city and main gateway to Belize",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Belmopan",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Belmopan, then continue by rail, bus, taxi or domestic flights. Keep some Belize dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Belize before you go. Register important numbers, keep copies of documents, and use licensed transport in Belmopan. Emergency info: Local emergency · dialing code +501.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +501",
    "callingCode": "+501",
    "aliases": [
      "Belize"
    ]
  },
  {
    "name": "Benin",
    "nameKa": "ბენინი",
    "capital": "Porto-Novo",
    "iso2": "bj",
    "flag": "🇧🇯",
    "language": "French",
    "currency": "West African CFA franc (CFA)",
    "population": "13M",
    "populationRaw": 13224860,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Western Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Benin",
    "about": "Benin is a country in Western Africa, with Porto-Novo as its capital. About 13M people live here. Official / major languages include French, and everyday transactions typically use the West African CFA franc (CFA). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Early evidence of human settlement in the area of modern Benin can be found in the Atakora mountain chain of north-western Benin. Systematic surveys and excavations have identified caves, rock shelters and open-air sites with lithic industries spanning the Early, Middle and Later Stone Age. Didier N'Dah's work at sites such as Kumaaku, Tanongou and the Pendjari area has reconstructed a chronocultural sequence from Early Stone Age to Late Stone Age, based on the typology of stone tools and comparisons with better-dated regions of West Africa. These sites have yielded a range of artefacts, including large flakes and cores associated with Middle Stone Age technologies, as well as microliths, grinding stones, polished axes and pottery that point to Later Stone Age and Neolithic occupations in the region. A wider survey of Pleistocene sites in West Africa includes localities in present-day Benin, confirming that the country forms part of the broader regional pattern of Stone Age settlement.",
    "culture": "Culture in Benin is closely tied to French language and everyday life in Porto-Novo. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Benin classics",
        "desc": "Signature dishes and home-style cooking from Benin",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Porto-Novo",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Africa ingredients and French culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Porto-Novo",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Porto-Novo",
        "desc": "Capital city and main gateway to Benin",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Porto-Novo",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Porto-Novo, then continue by rail, bus, taxi or domestic flights. Keep some West African CFA franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Benin before you go. Register important numbers, keep copies of documents, and use licensed transport in Porto-Novo. Emergency info: Local emergency · dialing code +229.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +229",
    "callingCode": "+229",
    "aliases": [
      "Benin",
      "Republic of Benin"
    ]
  },
  {
    "name": "Bhutan",
    "nameKa": "ბუტანი",
    "capital": "Thimphu",
    "iso2": "bt",
    "flag": "🇧🇹",
    "language": "Dzongkha",
    "currency": "Bhutanese ngultrum (Nu.)",
    "population": "784K",
    "populationRaw": 784043,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Southern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Bhutan",
    "about": "Bhutan is a country in Southern Asia, with Thimphu as its capital. About 784K people live here. Official / major languages include Dzongkha, and everyday transactions typically use the Bhutanese ngultrum (Nu.). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "Bhutan's early history is steeped in mythology and remains obscure. Some of the structures provide evidence that the region has been settled as early as 2000 BC. According to a legend it was ruled by a Cooch-Behar king, Sangaldip, around the 7th century BC, but not much is known prior to the introduction of Tibetan Buddhism in the 8th century, when turmoil in Tibet forced many monks to flee to Bhutan. In the 12th century, the Drukpa Kagyupa school was established and remains the dominant form of Buddhism in Bhutan today. The country's political history is intimately tied to its religious history and relations among the various monastic schools and monasteries.",
    "culture": "Culture in Bhutan is closely tied to Dzongkha language and everyday life in Thimphu. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Bhutan classics",
        "desc": "Signature dishes and home-style cooking from Bhutan",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Thimphu",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Asia ingredients and Dzongkha culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Thimphu",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Thimphu",
        "desc": "Capital city and main gateway to Bhutan",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Thimphu",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Thimphu, then continue by rail, bus, taxi or domestic flights. Keep some Bhutanese ngultrum for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Bhutan before you go. Register important numbers, keep copies of documents, and use licensed transport in Thimphu. Emergency info: Local emergency · dialing code +975.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +975",
    "callingCode": "+975",
    "aliases": [
      "Bhutan",
      "Kingdom of Bhutan"
    ]
  },
  {
    "name": "Bolivia",
    "nameKa": "ბოლივია",
    "capital": "Sucre",
    "iso2": "bo",
    "flag": "🇧🇴",
    "language": "Aymara / Guaraní / Quechua",
    "currency": "Bolivian boliviano (Bs.)",
    "population": "11M",
    "populationRaw": 11312620,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "South America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Bolivia",
    "about": "Bolivia is a country in South America, with Sucre as its capital. About 11M people live here. Official / major languages include Aymara / Guaraní / Quechua, and everyday transactions typically use the Bolivian boliviano (Bs.). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Bolivia involves thousands of years of human habitation. Lake Titicaca had been an important center of culture and development for thousands of years. The Tiwanaku people reached an advanced level of civilization before being conquered by a rapidly expanding Inca Empire in the 15th and 16th centuries. The Inca themselves were shortly afterward conquered by the Spanish led by Francisco Pizarro in the early 16th century. The region that now makes up Bolivia fell under the Viceroyalty of Peru. It was specifically known as Upper Peru, and in 1776 was transferred to the newly established Viceroyalty of Rio de la Plata with its capital in Buenos Aires.",
    "culture": "Culture in Bolivia is closely tied to Aymara language and everyday life in Sucre. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Bolivia classics",
        "desc": "Signature dishes and home-style cooking from Bolivia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Sucre",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South America ingredients and Aymara culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Sucre",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Sucre",
        "desc": "Capital city and main gateway to Bolivia",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Sucre",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Sucre, then continue by rail, bus, taxi or domestic flights. Keep some Bolivian boliviano for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Bolivia before you go. Register important numbers, keep copies of documents, and use licensed transport in Sucre. Emergency info: Local emergency · dialing code +591.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +591",
    "callingCode": "+591",
    "aliases": [
      "Bolivia",
      "Plurinational State of Bolivia"
    ]
  },
  {
    "name": "Bosnia and Herzegovina",
    "nameKa": "ბოსნია და ჰერცეგოვინა",
    "capital": "Sarajevo",
    "iso2": "ba",
    "flag": "🇧🇦",
    "language": "Bosnian / Croatian / Serbian",
    "currency": "Bosnia and Herzegovina convertible mark (KM)",
    "population": "3.4M",
    "populationRaw": 3422000,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Southern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Bosnia and Herzegovina",
    "about": "Bosnia and Herzegovina is a country in Southern Europe, with Sarajevo as its capital. About 3.4M people live here. Official / major languages include Bosnian / Croatian / Serbian, and everyday transactions typically use the Bosnia and Herzegovina convertible mark (KM). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "Bosnia and Herzegovina is a country in Southeast Europe on the Balkan Peninsula. It has had permanent settlement since the Neolithic Age. By the early historical period it was inhabited by Illyrians and Celts. Christianity arrived in the 1st century, and by the 4th century the area became part of the Western Roman Empire. Germanic tribes invaded soon after, followed by Slavs in the 6th century.",
    "culture": "Culture in Bosnia and Herzegovina is closely tied to Bosnian language and everyday life in Sarajevo. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Bosnia and Herzegovina classics",
        "desc": "Signature dishes and home-style cooking from Bosnia and Herzegovina",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Sarajevo",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Europe ingredients and Bosnian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Sarajevo",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Sarajevo",
        "desc": "Capital city and main gateway to Bosnia and Herzegovina",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Sarajevo",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Sarajevo, then continue by rail, bus, taxi or domestic flights. Keep some Bosnia and Herzegovina convertible mark for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Bosnia and Herzegovina before you go. Register important numbers, keep copies of documents, and use licensed transport in Sarajevo. Emergency info: Local emergency · dialing code +387.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +387",
    "callingCode": "+387",
    "aliases": [
      "Bosnia and Herzegovina"
    ]
  },
  {
    "name": "Botswana",
    "nameKa": "ბოტსვანა",
    "capital": "Gaborone",
    "iso2": "bw",
    "flag": "🇧🇼",
    "language": "English / Tswana",
    "currency": "Botswana pula (P)",
    "population": "2.4M",
    "populationRaw": 2359609,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Southern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Botswana",
    "about": "Botswana is a country in Southern Africa, with Gaborone as its capital. About 2.4M people live here. Official / major languages include English / Tswana, and everyday transactions typically use the Botswana pula (P). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Botswana encompasses the region's ancient and tribal history, its colonisation as the Bechuanaland Protectorate, and the present-day Republic of Botswana. The first modern humans to inhabit Botswana were the San people, and agriculture first developed approximately 2,300 years ago. The first Bantu peoples arrived c. 200 AD, and the first Tswana people arrived about 200 years later. The Tswana people split into various tribes over the following thousand years as migrations within the region continued, culminating in the Difaqane in the late 18th century. European contact first occurred in 1816, which led to the Christianization of the region.",
    "culture": "Culture in Botswana is closely tied to English language and everyday life in Gaborone. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Botswana classics",
        "desc": "Signature dishes and home-style cooking from Botswana",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Gaborone",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Africa ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Gaborone",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Gaborone",
        "desc": "Capital city and main gateway to Botswana",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Gaborone",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via Gaborone, then continue by rail, bus, taxi or domestic flights. Keep some Botswana pula for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Botswana before you go. Register important numbers, keep copies of documents, and use licensed transport in Gaborone. Emergency info: Local emergency · dialing code +267.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +267",
    "callingCode": "+267",
    "aliases": [
      "Botswana",
      "Republic of Botswana"
    ]
  },
  {
    "name": "Brazil",
    "nameKa": "ბრაზილია",
    "capital": "Brasilia",
    "iso2": "br",
    "flag": "🇧🇷",
    "language": "Portuguese",
    "currency": "Brazilian real (R$)",
    "population": "213M",
    "populationRaw": 213421037,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "South America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Brazil",
    "about": "Brazil is a country in South America, with Brasilia as its capital. About 213M people live here. Official / major languages include Portuguese, and everyday transactions typically use the Brazilian real (R$). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Before the arrival of the Europeans, the lands that now constitute Brazil were inhabited and settled by diverse tribes for thousands of years. The Portuguese landed in the so-called \"New World\" on April 22, 1500, commanded by Pedro Álvares Cabral, an explorer on his way to India under the sponsorship of the Kingdom of Portugal and the support of the Catholic Church.",
    "culture": "Culture in Brazil is closely tied to Portuguese language and everyday life in Brasilia. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Brazil classics",
        "desc": "Signature dishes and home-style cooking from Brazil",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Brasilia",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South America ingredients and Portuguese culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Brasilia",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Brasilia",
        "desc": "Capital city and main gateway to Brazil",
        "image": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Brasilia",
        "image": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Brasilia, then continue by rail, bus, taxi or domestic flights. Keep some Brazilian real for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Brazil before you go. Register important numbers, keep copies of documents, and use licensed transport in Brasilia. Emergency info: Local emergency · dialing code +55.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +55",
    "callingCode": "+55",
    "aliases": [
      "Brazil",
      "Federative Republic of Brazil"
    ]
  },
  {
    "name": "Brunei",
    "nameKa": "ბრუნეი",
    "capital": "Bandar Seri Begawan",
    "iso2": "bn",
    "flag": "🇧🇳",
    "language": "Malay",
    "currency": "Brunei dollar (B$)",
    "population": "456K",
    "populationRaw": 455500,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Brunei",
    "about": "Brunei is a country in South-Eastern Asia, with Bandar Seri Begawan as its capital. About 456K people live here. Official / major languages include Malay, and everyday transactions typically use the Brunei dollar (B$). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Brunei concerns the settlements and societies located on the north coast of the island of Borneo, which has been under the influence of Indianised kingdoms and empires for much of its history. Local scholars assume that the Islamisation of Brunei started in the fifteenth century with the formation of the Bruneian Empire, a thalassocracy that covered the northern part of Borneo and Sulu. At the end of the 17th century, Brunei entered a period of decline brought on by the Brunei Civil War, piracy, and European colonial expansion. Later, there was the brief Castilian war with Spain, in which Brunei evacuated its capital for a brief period until the Spanish withdrew. The empire lost much of its territory with the arrival of the Western powers, such as the Spanish in Luzon and Visayas and the British in Labuan, Sarawak, and North Borneo. The decline of the Bruneian Empire accelerated in the nineteenth century when Brunei gave much of its territory to the White Rajahs of Sarawak, resulting in the empire's separation into two parts.",
    "culture": "Culture in Brunei is closely tied to Malay language and everyday life in Bandar Seri Begawan. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Brunei classics",
        "desc": "Signature dishes and home-style cooking from Brunei",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Bandar Seri Begawan",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South-Eastern Asia ingredients and Malay culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Bandar Seri Begawan",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Bandar Seri Begawan",
        "desc": "Capital city and main gateway to Brunei",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Bandar Seri Begawan",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Bandar Seri Begawan, then continue by rail, bus, taxi or domestic flights. Keep some Brunei dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Brunei before you go. Register important numbers, keep copies of documents, and use licensed transport in Bandar Seri Begawan. Emergency info: Local emergency · dialing code +673.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +673",
    "callingCode": "+673",
    "aliases": [
      "Brunei",
      "Brunei Darussalam",
      "Nation of Brunei, Abode of Peace"
    ]
  },
  {
    "name": "Bulgaria",
    "nameKa": "ბულგარეთი",
    "capital": "Sofia",
    "iso2": "bg",
    "flag": "🇧🇬",
    "language": "Bulgarian",
    "currency": "Euro (€)",
    "population": "6.4M",
    "populationRaw": 6437360,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Bulgaria",
    "about": "Bulgaria is a country in Eastern Europe, with Sofia as its capital. About 6.4M people live here. Official / major languages include Bulgarian, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Bulgaria can be traced from the first settlements on the lands of modern Bulgaria to its formation as a nation-state, and includes the history of the Bulgarian people and their origins. The earliest evidence of hominid occupation discovered in what is today Bulgaria date from at least 1.4 million years ago. Around 5000 BC, a sophisticated civilization already existed which produced some of the first pottery, jewelry, and golden artifacts in the world. After 3500 BC, the Thracians appeared on the Balkan Peninsula. In the late 6th century BC, parts of what is currently Bulgaria, in particular the eastern region of the country, came under the Persian Achaemenid Empire. In the 470s BC, the Thracians formed the powerful Odrysian Kingdom which lasted until 46 BC, when it was finally conquered by the Roman Empire. Over the centuries, some Thracian tribes fell under ancient Macedonian and Hellenistic, and also Celtic domination. This mixture of ancient peoples was assimilated by the Slavs, who permanently settled on the peninsula after 500 AD.",
    "culture": "Culture in Bulgaria is closely tied to Bulgarian language and everyday life in Sofia. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Bulgaria classics",
        "desc": "Signature dishes and home-style cooking from Bulgaria",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Sofia",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Europe ingredients and Bulgarian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Sofia",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Sofia",
        "desc": "Capital city and main gateway to Bulgaria",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Sofia",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Sofia, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Bulgaria before you go. Register important numbers, keep copies of documents, and use licensed transport in Sofia. Emergency info: Local emergency · dialing code +359.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +359",
    "callingCode": "+359",
    "aliases": [
      "Bulgaria",
      "Republic of Bulgaria"
    ]
  },
  {
    "name": "Burkina Faso",
    "nameKa": "ბურკინა-ფასო",
    "capital": "Ouagadougou",
    "iso2": "bf",
    "flag": "🇧🇫",
    "language": "French",
    "currency": "West African CFA franc (CFA)",
    "population": "24M",
    "populationRaw": 24070553,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Western Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Burkina Faso",
    "about": "Burkina Faso is a country in Western Africa, with Ouagadougou as its capital. About 24M people live here. Official / major languages include French, and everyday transactions typically use the West African CFA franc (CFA). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Burkina Faso includes the history of various kingdoms within the country, such as the Mossi kingdoms, as well as the later French colonisation of the territory and its independence as the Republic of Upper Volta in 1960.",
    "culture": "Culture in Burkina Faso is closely tied to French language and everyday life in Ouagadougou. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Burkina Faso classics",
        "desc": "Signature dishes and home-style cooking from Burkina Faso",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Ouagadougou",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Africa ingredients and French culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Ouagadougou",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Ouagadougou",
        "desc": "Capital city and main gateway to Burkina Faso",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Ouagadougou",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Ouagadougou, then continue by rail, bus, taxi or domestic flights. Keep some West African CFA franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Burkina Faso before you go. Register important numbers, keep copies of documents, and use licensed transport in Ouagadougou. Emergency info: Local emergency · dialing code +226.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +226",
    "callingCode": "+226",
    "aliases": [
      "Burkina Faso"
    ]
  },
  {
    "name": "Burundi",
    "nameKa": "ბურუნდი",
    "capital": "Bujumbura",
    "iso2": "bi",
    "flag": "🇧🇮",
    "language": "French / Kirundi",
    "currency": "Burundian franc (FBu)",
    "population": "12M",
    "populationRaw": 12332788,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Burundi",
    "about": "Burundi is a country in Eastern Africa, with Bujumbura as its capital. About 12M people live here. Official / major languages include French / Kirundi, and everyday transactions typically use the Burundian franc (FBu). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Burundi originated in the 16th century as a small kingdom in the African Great Lakes region. After European contact, it was united with the Kingdom of Rwanda, becoming the colony of Ruanda-Urundi - first colonised by Germany and then by Belgium. The colony gained independence in 1962, and split once again into Rwanda and Burundi. It is one of the few countries in Africa to be a direct territorial continuation of a pre-colonial era African state.",
    "culture": "Culture in Burundi is closely tied to French language and everyday life in Bujumbura. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Burundi classics",
        "desc": "Signature dishes and home-style cooking from Burundi",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Bujumbura",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Africa ingredients and French culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Bujumbura",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Bujumbura",
        "desc": "Capital city and main gateway to Burundi",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Bujumbura",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Bujumbura, then continue by rail, bus, taxi or domestic flights. Keep some Burundian franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Burundi before you go. Register important numbers, keep copies of documents, and use licensed transport in Bujumbura. Emergency info: Local emergency · dialing code +257.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +257",
    "callingCode": "+257",
    "aliases": [
      "Burundi",
      "Republic of Burundi"
    ]
  },
  {
    "name": "Cabo Verde",
    "nameKa": "კაბო-ვერდე",
    "capital": "Praia",
    "iso2": "cv",
    "flag": "🇨🇻",
    "language": "Portuguese",
    "currency": "Cape Verdean escudo ($)",
    "population": "491K",
    "populationRaw": 491233,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Western Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Cabo Verde",
    "about": "Cabo Verde is a country in Western Africa, with Praia as its capital. About 491K people live here. Official / major languages include Portuguese, and everyday transactions typically use the Cape Verdean escudo ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The recorded history of Cape Verde begins with the Portuguese discovery of the island in 1458. Possible early references to Cape Verde date back at least 2,000 years.",
    "culture": "Culture in Cabo Verde is closely tied to Portuguese language and everyday life in Praia. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Cabo Verde classics",
        "desc": "Signature dishes and home-style cooking from Cabo Verde",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Praia",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Africa ingredients and Portuguese culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Praia",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Praia",
        "desc": "Capital city and main gateway to Cabo Verde",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Praia",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Praia, then continue by rail, bus, taxi or domestic flights. Keep some Cape Verdean escudo for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Cabo Verde before you go. Register important numbers, keep copies of documents, and use licensed transport in Praia. Emergency info: Local emergency · dialing code +238.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +238",
    "callingCode": "+238",
    "aliases": [
      "Cabo Verde",
      "Cape Verde",
      "Republic of Cabo Verde"
    ]
  },
  {
    "name": "Cambodia",
    "nameKa": "კამბოჯა",
    "capital": "Phnom Penh",
    "iso2": "kh",
    "flag": "🇰🇭",
    "language": "Khmer",
    "currency": "Cambodian riel (KHR)",
    "population": "18M",
    "populationRaw": 17577760,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Cambodia",
    "about": "Cambodia is a country in South-Eastern Asia, with Phnom Penh as its capital. About 18M people live here. Official / major languages include Khmer, and everyday transactions typically use the Cambodian riel (KHR). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Cambodia, a country in mainland Southeast Asia, begins with the earliest evidence of habitation around 5000 BCE. Detailed records of a political structure on the territory of what is now Cambodia first appear in Chinese annals in reference to Funan, a polity that encompassed the southernmost part of the Indochinese peninsula during the 1st to 6th centuries. Centered at the lower Mekong, Funan is noted as the oldest regional Hindu culture, which suggests prolonged socio-economic interaction with maritime trading partners of the Indosphere in the west. By the 6th century a civilization, called Chenla or Zhenla in Chinese annals, firmly replaced Funan, as it controlled larger, more undulating areas of Indochina and maintained more than a singular centre of power.",
    "culture": "Culture in Cambodia is closely tied to Khmer language and everyday life in Phnom Penh. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Cambodia classics",
        "desc": "Signature dishes and home-style cooking from Cambodia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Phnom Penh",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South-Eastern Asia ingredients and Khmer culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Phnom Penh",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Phnom Penh",
        "desc": "Capital city and main gateway to Cambodia",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Phnom Penh",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Phnom Penh, then continue by rail, bus, taxi or domestic flights. Keep some Cambodian riel for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Cambodia before you go. Register important numbers, keep copies of documents, and use licensed transport in Phnom Penh. Emergency info: Local emergency · dialing code +855.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +855",
    "callingCode": "+855",
    "aliases": [
      "Cambodia",
      "Kingdom of Cambodia"
    ]
  },
  {
    "name": "Cameroon",
    "nameKa": "კამერუნი",
    "capital": "Yaounde",
    "iso2": "cm",
    "flag": "🇨🇲",
    "language": "English / French",
    "currency": "Central African CFA franc (FCFA)",
    "population": "29M",
    "populationRaw": 29442327,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Middle Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Cameroon",
    "about": "Cameroon is a country in Middle Africa, with Yaounde as its capital. About 29M people live here. Official / major languages include English / French, and everyday transactions typically use the Central African CFA franc (FCFA). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "At the crossroads of West Africa and Central Africa, the territory of what is now Cameroon has seen human habitation since some time in the Middle Paleolithic, likely no later than 130,000 years ago. The earliest discovered archaeological evidence of humans dates from around 30,000 years ago at Shum Laka. The Bamenda highlands in western Cameroon near the border with Nigeria are one of the most likely origin for the Bantu peoples, whose language and culture came to dominate most of central and southern Africa between 1000 BCE and 1000 CE.",
    "culture": "Culture in Cameroon is closely tied to English language and everyday life in Yaounde. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Cameroon classics",
        "desc": "Signature dishes and home-style cooking from Cameroon",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Yaounde",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Middle Africa ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Yaounde",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Yaounde",
        "desc": "Capital city and main gateway to Cameroon",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Yaounde",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Yaounde, then continue by rail, bus, taxi or domestic flights. Keep some Central African CFA franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Cameroon before you go. Register important numbers, keep copies of documents, and use licensed transport in Yaounde. Emergency info: Local emergency · dialing code +237.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +237",
    "callingCode": "+237",
    "aliases": [
      "Cameroon",
      "Republic of Cameroon"
    ]
  },
  {
    "name": "Canada",
    "nameKa": "კანადა",
    "capital": "Ottawa",
    "iso2": "ca",
    "flag": "🇨🇦",
    "language": "English / French",
    "currency": "Canadian dollar ($)",
    "population": "42M",
    "populationRaw": 41548787,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Northern America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Canada",
    "about": "Canada is a country in Northern America, with Ottawa as its capital. About 42M people live here. Official / major languages include English / French, and everyday transactions typically use the Canadian dollar ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Canada covers the period from the arrival of the Paleo-Indians to North America thousands of years ago to the present day. The lands encompassing present-day Canada have been inhabited for millennia by Indigenous peoples, with distinct trade networks, spiritual beliefs, and styles of social organization. Some of these older civilizations had long faded by the time of the first European arrivals and have been discovered through archaeological investigations.",
    "culture": "Culture in Canada is closely tied to English language and everyday life in Ottawa. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Canada classics",
        "desc": "Signature dishes and home-style cooking from Canada",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Ottawa",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Northern America ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Ottawa",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Ottawa",
        "desc": "Capital city and main gateway to Canada",
        "image": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Ottawa",
        "image": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Ottawa, then continue by rail, bus, taxi or domestic flights. Keep some Canadian dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Canada before you go. Register important numbers, keep copies of documents, and use licensed transport in Ottawa. Emergency info: Local emergency · dialing code +1.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +1",
    "callingCode": "+1",
    "aliases": [
      "Canada"
    ]
  },
  {
    "name": "Central African Republic",
    "nameKa": "ცენტრალური აფრიკის რესპუბლიკა",
    "capital": "Bangui",
    "iso2": "cf",
    "flag": "🇨🇫",
    "language": "French / Sango",
    "currency": "Central African CFA franc (FCFA)",
    "population": "6.5M",
    "populationRaw": 6470307,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Middle Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Central African Republic",
    "about": "Central African Republic is a country in Middle Africa, with Bangui as its capital. About 6.5M people live here. Official / major languages include French / Sango, and everyday transactions typically use the Central African CFA franc (FCFA). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of the Central African Republic is roughly composed of four distinct periods. The earliest period of settlement began around 10,000 years ago when nomadic people first began to settle, farm and fish in the region. The next period began around 10,000 years prior.",
    "culture": "Culture in Central African Republic is closely tied to French language and everyday life in Bangui. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Central African Republic classics",
        "desc": "Signature dishes and home-style cooking from Central African Republic",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Bangui",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Middle Africa ingredients and French culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Bangui",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Bangui",
        "desc": "Capital city and main gateway to Central African Republic",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Bangui",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Bangui, then continue by rail, bus, taxi or domestic flights. Keep some Central African CFA franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Central African Republic before you go. Register important numbers, keep copies of documents, and use licensed transport in Bangui. Emergency info: Local emergency · dialing code +236.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +236",
    "callingCode": "+236",
    "aliases": [
      "Central African Republic"
    ]
  },
  {
    "name": "Chad",
    "nameKa": "ჩადი",
    "capital": "N'Djamena",
    "iso2": "td",
    "flag": "🇹🇩",
    "language": "Arabic / French",
    "currency": "Central African CFA franc (FCFA)",
    "population": "19M",
    "populationRaw": 19340757,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Middle Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Chad",
    "about": "Chad is a country in Middle Africa, with N'Djamena as its capital. About 19M people live here. Official / major languages include Arabic / French, and everyday transactions typically use the Central African CFA franc (FCFA). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Chad, officially the Republic of Chad, is a landlocked country in Central Africa. It borders Libya to the north, Sudan to the east, the Central African Republic to the south, Cameroon and Nigeria to the southwest, and Niger to the west. Due to its distance from the sea and its largely desert climate, the country is sometimes referred to as the \"Dead Heart of Africa\".",
    "culture": "Culture in Chad is closely tied to Arabic language and everyday life in N'Djamena. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Chad classics",
        "desc": "Signature dishes and home-style cooking from Chad",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around N'Djamena",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Middle Africa ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in N'Djamena",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "N'Djamena",
        "desc": "Capital city and main gateway to Chad",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near N'Djamena",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via N'Djamena, then continue by rail, bus, taxi or domestic flights. Keep some Central African CFA franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Chad before you go. Register important numbers, keep copies of documents, and use licensed transport in N'Djamena. Emergency info: Local emergency · dialing code +235.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +235",
    "callingCode": "+235",
    "aliases": [
      "Chad",
      "Republic of Chad"
    ]
  },
  {
    "name": "Chile",
    "nameKa": "ჩილე",
    "capital": "Santiago",
    "iso2": "cl",
    "flag": "🇨🇱",
    "language": "Spanish",
    "currency": "Chilean peso ($)",
    "population": "20M",
    "populationRaw": 20206953,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "South America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Chile",
    "about": "Chile is a country in South America, with Santiago as its capital. About 20M people live here. Official / major languages include Spanish, and everyday transactions typically use the Chilean peso ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The territory of Chile has been populated since at least 3000 BC. By the 16th century, Spanish invaders began to raid the region of present-day Chile, and the territory was a colony from 1540 to 1818, when it gained independence from Spain. The country's economic development was successively marked by the export of first agricultural produce, then saltpeter and later copper. The wealth of raw materials led to an economic upturn, but also led to dependency, and even wars with neighboring states. Chile was governed during most of its first 150 years of independence by different forms of restricted government, where the electorate was carefully vetted and controlled by an elite.",
    "culture": "Culture in Chile is closely tied to Spanish language and everyday life in Santiago. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Chile classics",
        "desc": "Signature dishes and home-style cooking from Chile",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Santiago",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South America ingredients and Spanish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Santiago",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Santiago",
        "desc": "Capital city and main gateway to Chile",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Santiago",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Santiago, then continue by rail, bus, taxi or domestic flights. Keep some Chilean peso for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Chile before you go. Register important numbers, keep copies of documents, and use licensed transport in Santiago. Emergency info: Local emergency · dialing code +56.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +56",
    "callingCode": "+56",
    "aliases": [
      "Chile",
      "Republic of Chile"
    ]
  },
  {
    "name": "China",
    "nameKa": "ჩინეთი",
    "capital": "Beijing",
    "iso2": "cn",
    "flag": "🇨🇳",
    "language": "Chinese",
    "currency": "Chinese yuan (¥)",
    "population": "1.41B",
    "populationRaw": 1408280000,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover China",
    "about": "China is a country in Eastern Asia, with Beijing as its capital. About 1.41B people live here. Official / major languages include Chinese, and everyday transactions typically use the Chinese yuan (¥). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of China spans several millennia across a wide geographical area. Each region now considered part of the Chinese world has experienced periods of unity, fracture, prosperity, and strife. Chinese civilization was traditionally thought to have first emerged in the Yellow River or Huang He valley, which along with the Yangtze basin constitutes the geographic core of the Chinese cultural sphere. However, current views have considered the origin to be a simultaneous duality of both the Yellow River and the Yangtze. China maintains a rich diversity of ethnic and linguistic people groups. The traditional lens for viewing Chinese history is the dynastic cycle: imperial dynasties rise and fall, and are ascribed certain achievements. This lens also tends to assume Chinese civilization can be traced as an unbroken thread many thousands of years into the past, making it one of the cradles of civilization.",
    "culture": "Culture in China is closely tied to Chinese language and everyday life in Beijing. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "China classics",
        "desc": "Signature dishes and home-style cooking from China",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Beijing",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Asia ingredients and Chinese culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Beijing",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Beijing",
        "desc": "Capital city and main gateway to China",
        "image": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Beijing",
        "image": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Beijing, then continue by rail, bus, taxi or domestic flights. Keep some Chinese yuan for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for China before you go. Register important numbers, keep copies of documents, and use licensed transport in Beijing. Emergency info: Local emergency · dialing code +86.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +86",
    "callingCode": "+86",
    "aliases": [
      "China",
      "People's Republic of China"
    ]
  },
  {
    "name": "Colombia",
    "nameKa": "კოლუმბია",
    "capital": "Bogotá",
    "iso2": "co",
    "flag": "🇨🇴",
    "language": "Spanish",
    "currency": "Colombian peso ($)",
    "population": "53M",
    "populationRaw": 53057212,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "South America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Colombia",
    "about": "Colombia is a country in South America, with Bogotá as its capital. About 53M people live here. Official / major languages include Spanish, and everyday transactions typically use the Colombian peso ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Colombia includes its settlement by indigenous peoples and the establishment of agrarian societies, notably the Muisca Confederation, Quimbaya Civilization, and Tairona Chiefdoms. The Spanish arrived in 1499 and initiated a period of annexation and colonization, ultimately creating the Viceroyalty of New Granada, with its capital at Bogotá. Independence from Spain was won in 1819, but by 1830 the resulting \"Gran Colombia\" Federation was dissolved. What is now Colombia and Panama emerged as the Republic of New Granada. The new nation experimented with federalism as the Granadine Confederation (1858) and then the United States of Colombia (1863) before the Republic of Colombia was finally declared in 1886. A period of constant political violence ensued, and Panama seceded in 1903. Since the 1960s, the country has suffered from an asymmetric low-intensity armed conflict which escalated in the 1990s but decreased from 2005 onward.",
    "culture": "Culture in Colombia is closely tied to Spanish language and everyday life in Bogotá. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Colombia classics",
        "desc": "Signature dishes and home-style cooking from Colombia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Bogotá",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South America ingredients and Spanish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Bogotá",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Bogotá",
        "desc": "Capital city and main gateway to Colombia",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Bogotá",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Bogotá, then continue by rail, bus, taxi or domestic flights. Keep some Colombian peso for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Colombia before you go. Register important numbers, keep copies of documents, and use licensed transport in Bogotá. Emergency info: Local emergency · dialing code +57.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +57",
    "callingCode": "+57",
    "aliases": [
      "Colombia",
      "Republic of Colombia"
    ]
  },
  {
    "name": "Comoros",
    "nameKa": "კომორის კუნძულები",
    "capital": "Moroni",
    "iso2": "km",
    "flag": "🇰🇲",
    "language": "Arabic / French / Comorian",
    "currency": "Comorian franc (CF)",
    "population": "870K",
    "populationRaw": 870038,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Comoros",
    "about": "Comoros is a country in Eastern Africa, with Moroni as its capital. About 870K people live here. Official / major languages include Arabic / French / Comorian, and everyday transactions typically use the Comorian franc (CF). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of the Comoros extends back to about 800–1000 AD when the archipelago was first inhabited. The Comoros have been inhabited by various groups and sultanates throughout this time. France colonised the islands in the 19th century, and they became independent in 1975.",
    "culture": "Culture in Comoros is closely tied to Arabic language and everyday life in Moroni. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Comoros classics",
        "desc": "Signature dishes and home-style cooking from Comoros",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Moroni",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Africa ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Moroni",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Moroni",
        "desc": "Capital city and main gateway to Comoros",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Moroni",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Moroni, then continue by rail, bus, taxi or domestic flights. Keep some Comorian franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Comoros before you go. Register important numbers, keep copies of documents, and use licensed transport in Moroni. Emergency info: Local emergency · dialing code +269.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +269",
    "callingCode": "+269",
    "aliases": [
      "Comoros",
      "Union of the Comoros"
    ]
  },
  {
    "name": "Congo",
    "nameKa": "კონგო",
    "capital": "Brazzaville",
    "iso2": "cg",
    "flag": "🇨🇬",
    "language": "French / Kikongo / Lingala",
    "currency": "Congolese Franc (FC)",
    "population": "6.1M",
    "populationRaw": 6142180,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Middle Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Congo",
    "about": "Congo is a country in Middle Africa, with Brazzaville as its capital. About 6.1M people live here. Official / major languages include French / Kikongo / Lingala, and everyday transactions typically use the Congolese Franc (FC). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of the Republic of the Congo has been marked by diverse civilisations: Indigenous, French and post-independence.",
    "culture": "Culture in Congo is closely tied to French language and everyday life in Brazzaville. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Congo classics",
        "desc": "Signature dishes and home-style cooking from Congo",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Brazzaville",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Middle Africa ingredients and French culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Brazzaville",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Brazzaville",
        "desc": "Capital city and main gateway to Congo",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Brazzaville",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Brazzaville, then continue by rail, bus, taxi or domestic flights. Keep some Congolese Franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Congo before you go. Register important numbers, keep copies of documents, and use licensed transport in Brazzaville. Emergency info: Local emergency · dialing code +242.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +242",
    "callingCode": "+242",
    "aliases": [
      "Congo",
      "Republic of the Congo",
      "Congo (Brazzaville)"
    ]
  },
  {
    "name": "Democratic Republic of the Congo",
    "nameKa": "კონგოს დემოკრატიული რესპუბლიკა",
    "capital": "Kinshasa",
    "iso2": "cd",
    "flag": "🇨🇩",
    "language": "French / Kikongo / Lingala",
    "currency": "Congolese Franc (FC)",
    "population": "113M",
    "populationRaw": 112832000,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Middle Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Democratic Republic of the Congo",
    "about": "Democratic Republic of the Congo is a country in Middle Africa, with Kinshasa as its capital. About 113M people live here. Official / major languages include French / Kikongo / Lingala, and everyday transactions typically use the Congolese Franc (FC). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The earliest known human settlements in what is now the Democratic Republic of the Congo date back to the Middle Stone Age, approximately 90,000 years ago. The first 'states', such as the Kongo, the Lunda, the Luba and Kuba, appeared south of the equatorial forest on the savannah, from the 14th century. The Kingdom of Kongo controlled much of western and central Africa, including what is now the west of the DR Congo, between the 14th and early 19th centuries. At its peak it had 500,000 people, and its capital was M'banza-Kongo. In the late 15th century, Portuguese sailors arrived in the Kongo, and this led to prosperity and consolidation, with the king's power based on Portuguese trade. King Afonso I (1506–43) had raids carried out on neighboring districts, in response to Portuguese requests for slaves. After his death, the kingdom underwent a crisis.",
    "culture": "Culture in Democratic Republic of the Congo is closely tied to French language and everyday life in Kinshasa. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Democratic Republic of the Congo classics",
        "desc": "Signature dishes and home-style cooking from Democratic Republic of the Congo",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Kinshasa",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Middle Africa ingredients and French culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Kinshasa",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Kinshasa",
        "desc": "Capital city and main gateway to Democratic Republic of the Congo",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Kinshasa",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Kinshasa, then continue by rail, bus, taxi or domestic flights. Keep some Congolese Franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Democratic Republic of the Congo before you go. Register important numbers, keep copies of documents, and use licensed transport in Kinshasa. Emergency info: Local emergency · dialing code +243.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +243",
    "callingCode": "+243",
    "aliases": [
      "Democratic Republic of the Congo",
      "Dem. Rep. Congo",
      "Congo (Kinshasa)",
      "DR Congo"
    ]
  },
  {
    "name": "Costa Rica",
    "nameKa": "კოსტა-რიკა",
    "capital": "San Jose",
    "iso2": "cr",
    "flag": "🇨🇷",
    "language": "Spanish",
    "currency": "Costa Rican colón (₡)",
    "population": "5.3M",
    "populationRaw": 5309625,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Central America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Costa Rica",
    "about": "Costa Rica is a country in Central America, with San Jose as its capital. About 5.3M people live here. Official / major languages include Spanish, and everyday transactions typically use the Costa Rican colón (₡). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The first indigenous peoples of Costa Rica were hunters and gatherers, and when the Spanish conquerors arrived, Costa Rica was divided in two distinct cultural areas due to its geographical location in the Intermediate Area, between Mesoamerican and the Andean cultures, with influences of both cultures.",
    "culture": "Culture in Costa Rica is closely tied to Spanish language and everyday life in San Jose. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Costa Rica classics",
        "desc": "Signature dishes and home-style cooking from Costa Rica",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around San Jose",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Central America ingredients and Spanish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in San Jose",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "San Jose",
        "desc": "Capital city and main gateway to Costa Rica",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near San Jose",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via San Jose, then continue by rail, bus, taxi or domestic flights. Keep some Costa Rican colón for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Costa Rica before you go. Register important numbers, keep copies of documents, and use licensed transport in San Jose. Emergency info: Local emergency · dialing code +506.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +506",
    "callingCode": "+506",
    "aliases": [
      "Costa Rica",
      "Republic of Costa Rica"
    ]
  },
  {
    "name": "Côte d'Ivoire",
    "nameKa": "კოტ-დ’ივუარი",
    "capital": "Yamoussoukro",
    "iso2": "ci",
    "flag": "🇨🇮",
    "language": "French",
    "currency": "West African CFA franc (CFA)",
    "population": "29M",
    "populationRaw": 29389150,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Western Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Côte d'Ivoire",
    "about": "Côte d'Ivoire is a country in Western Africa, with Yamoussoukro as its capital. About 29M people live here. Official / major languages include French, and everyday transactions typically use the West African CFA franc (CFA). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Human arrival in Ivory Coast has been dated to the Upper Paleolithic period, or at the minimum, the Neolithic period based on weapon and tool fragments, specifically polished shale axes and remnants of cooking and fishing. The earliest known inhabitants of Côte d'Ivoire left traces scattered throughout the territory. Historians believe these people were all either displaced or absorbed by the ancestors of the present inhabitants. Peoples who arrived before the 16th century include the Ehotilé (Aboisso), Kotrowou (Fresco), Zéhiri, Ega, and Diès (Divo).",
    "culture": "Culture in Côte d'Ivoire is closely tied to French language and everyday life in Yamoussoukro. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Côte d'Ivoire classics",
        "desc": "Signature dishes and home-style cooking from Côte d'Ivoire",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Yamoussoukro",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Africa ingredients and French culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Yamoussoukro",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Yamoussoukro",
        "desc": "Capital city and main gateway to Côte d'Ivoire",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Yamoussoukro",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Yamoussoukro, then continue by rail, bus, taxi or domestic flights. Keep some West African CFA franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Côte d'Ivoire before you go. Register important numbers, keep copies of documents, and use licensed transport in Yamoussoukro. Emergency info: Local emergency · dialing code +225.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +225",
    "callingCode": "+225",
    "aliases": [
      "Côte d'Ivoire",
      "Ivory Coast",
      "Republic of Côte d'Ivoire"
    ]
  },
  {
    "name": "Croatia",
    "nameKa": "ხორვატია",
    "capital": "Zagreb",
    "iso2": "hr",
    "flag": "🇭🇷",
    "language": "Croatian",
    "currency": "Euro (€)",
    "population": "3.9M",
    "populationRaw": 3866233,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Southern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Croatia",
    "about": "Croatia is a country in Southern Europe, with Zagreb as its capital. About 3.9M people live here. Official / major languages include Croatian, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "At the height of the Roman Empire, the area of modern Croatia comprised two Roman provinces, Pannonia and Dalmatia. After the collapse of the Western Roman Empire in the 5th century, the area was subjugated by the Ostrogoths for 50 years, before being incorporated into the Byzantine Empire.",
    "culture": "Culture in Croatia is closely tied to Croatian language and everyday life in Zagreb. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Croatia classics",
        "desc": "Signature dishes and home-style cooking from Croatia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Zagreb",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Europe ingredients and Croatian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Zagreb",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Zagreb",
        "desc": "Capital city and main gateway to Croatia",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Zagreb",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Zagreb, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Croatia before you go. Register important numbers, keep copies of documents, and use licensed transport in Zagreb. Emergency info: Local emergency · dialing code +385.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +385",
    "callingCode": "+385",
    "aliases": [
      "Croatia",
      "Republic of Croatia"
    ]
  },
  {
    "name": "Cuba",
    "nameKa": "კუბა",
    "capital": "Havana",
    "iso2": "cu",
    "flag": "🇨🇺",
    "language": "Spanish",
    "currency": "Cuban peso ($)",
    "population": "9.7M",
    "populationRaw": 9748007,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Caribbean",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Cuba",
    "about": "Cuba is a country in Caribbean, with Havana as its capital. About 9.7M people live here. Official / major languages include Spanish, and everyday transactions typically use the Cuban peso ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The island of Cuba was inhabited by various Native American cultures prior to the arrival of the explorer Christopher Columbus in 1492. After his arrival, Spain conquered Cuba and appointed Spanish governors to rule in Havana. The administrators in Cuba were subject to the Viceroy of New Spain and the local authorities in Hispaniola. In 1762–63, Havana was briefly occupied by Britain, before being returned to Spain in exchange for Florida. A series of rebellions between 1868 and 1898, led by General Máximo Gómez, failed to end Spanish rule and claimed the lives of 49,000 Cuban guerrillas and 126,000 Spanish soldiers. However, the Spanish–American War resulted in a Spanish withdrawal from the island in 1898, and following three and a half years of subsequent US military rule, Cuba gained formal independence in 1902.",
    "culture": "Culture in Cuba is closely tied to Spanish language and everyday life in Havana. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Cuba classics",
        "desc": "Signature dishes and home-style cooking from Cuba",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Havana",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Caribbean ingredients and Spanish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Havana",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Havana",
        "desc": "Capital city and main gateway to Cuba",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Havana",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Havana, then continue by rail, bus, taxi or domestic flights. Keep some Cuban peso for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Cuba before you go. Register important numbers, keep copies of documents, and use licensed transport in Havana. Emergency info: Local emergency · dialing code +53.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +53",
    "callingCode": "+53",
    "aliases": [
      "Cuba",
      "Republic of Cuba"
    ]
  },
  {
    "name": "Cyprus",
    "nameKa": "კვიპროსი",
    "capital": "Nicosia",
    "iso2": "cy",
    "flag": "🇨🇾",
    "language": "Greek / Turkish",
    "currency": "Euro (€)",
    "population": "966K",
    "populationRaw": 966400,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Southern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Cyprus",
    "about": "Cyprus is a country in Southern Europe, with Nicosia as its capital. About 966K people live here. Official / major languages include Greek / Turkish, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "Human habitation of Cyprus dates back to the Paleolithic era. Cyprus's geographic position has caused the island to be influenced by differing Eastern Mediterranean civilizations over millennia.",
    "culture": "Culture in Cyprus is closely tied to Greek language and everyday life in Nicosia. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Cyprus classics",
        "desc": "Signature dishes and home-style cooking from Cyprus",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Nicosia",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Europe ingredients and Greek culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Nicosia",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Nicosia",
        "desc": "Capital city and main gateway to Cyprus",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Nicosia",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Nicosia, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Cyprus before you go. Register important numbers, keep copies of documents, and use licensed transport in Nicosia. Emergency info: Local emergency · dialing code +357.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +357",
    "callingCode": "+357",
    "aliases": [
      "Cyprus",
      "Republic of Cyprus"
    ]
  },
  {
    "name": "Czech Republic",
    "nameKa": "ჩეხეთი",
    "capital": "Prague",
    "iso2": "cz",
    "flag": "🇨🇿",
    "language": "Czech / Slovak",
    "currency": "Czech koruna (Kč)",
    "population": "11M",
    "populationRaw": 10876875,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Czech Republic",
    "about": "Czech Republic is a country in Eastern Europe, with Prague as its capital. About 11M people live here. Official / major languages include Czech / Slovak, and everyday transactions typically use the Czech koruna (Kč). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of the Czech lands – an area roughly corresponding to the present-day Czech Republic – starts approximately 800,000 years BCE. A simple chopper from that age was discovered at the Red Hill archeological site in Brno. Many different primitive cultures left their traces throughout the Stone Age, which lasted approximately until 2000 BCE. The most widely known culture present in the Czech lands during the pre-historical era is the Únětice Culture, leaving traces for about five centuries from the end of the Stone Age to the start of the Bronze Age. Celts – who came during the 5th century BCE – are the first people known by name. One of the Celtic tribes were the Boii (plural), who gave the Czech lands their first name Boiohaemum – Latin for the Land of Boii. Before the beginning of the Common Era the Celts were mostly pushed out by Germanic tribes. The most notable of those tribes were the Marcomanni and traces of their wars with the Roman Empire were left in south Moravia.",
    "culture": "Culture in Czech Republic is closely tied to Czech language and everyday life in Prague. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Czech Republic classics",
        "desc": "Signature dishes and home-style cooking from Czech Republic",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Prague",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Europe ingredients and Czech culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Prague",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Prague",
        "desc": "Capital city and main gateway to Czech Republic",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Prague",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Prague, then continue by rail, bus, taxi or domestic flights. Keep some Czech koruna for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Czech Republic before you go. Register important numbers, keep copies of documents, and use licensed transport in Prague. Emergency info: Local emergency · dialing code +420.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +420",
    "callingCode": "+420",
    "aliases": [
      "Czech Republic",
      "Czechia"
    ]
  },
  {
    "name": "Denmark",
    "nameKa": "დანია",
    "capital": "Copenhagen",
    "iso2": "dk",
    "flag": "🇩🇰",
    "language": "Danish",
    "currency": "Danish krone (Kr.)",
    "population": "6M",
    "populationRaw": 6004342,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Northern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Denmark",
    "about": "Denmark is a country in Northern Europe, with Copenhagen as its capital. About 6M people live here. Official / major languages include Danish, and everyday transactions typically use the Danish krone (Kr.). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Denmark as a unified kingdom began in the 8th century, but prehistoric cultures populated the area for about 12,000 years, since the end of the last ice age. Historic descriptions of the area and people from around 500 AD include writings by Jordanes and Procopius. The kingdom arose before the Christianization of the Danes c. 960 AD. The Viking kings Gorm the Old and Harald Bluetooth from that time are predecessors of today's king, Frederik X, thus the monarchy of Denmark is the oldest in Europe.",
    "culture": "Culture in Denmark is closely tied to Danish language and everyday life in Copenhagen. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Denmark classics",
        "desc": "Signature dishes and home-style cooking from Denmark",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Copenhagen",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Northern Europe ingredients and Danish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Copenhagen",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Copenhagen",
        "desc": "Capital city and main gateway to Denmark",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Copenhagen",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Copenhagen, then continue by rail, bus, taxi or domestic flights. Keep some Danish krone for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Denmark before you go. Register important numbers, keep copies of documents, and use licensed transport in Copenhagen. Emergency info: Local emergency · dialing code +45.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +45",
    "callingCode": "+45",
    "aliases": [
      "Denmark",
      "Kingdom of Denmark"
    ]
  },
  {
    "name": "Djibouti",
    "nameKa": "ჯიბუტი",
    "capital": "Djibouti",
    "iso2": "dj",
    "flag": "🇩🇯",
    "language": "Arabic / French",
    "currency": "Djiboutian franc (Fdj)",
    "population": "1.1M",
    "populationRaw": 1066809,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Djibouti",
    "about": "Djibouti is a country in Eastern Africa, with Djibouti as its capital. About 1.1M people live here. Official / major languages include Arabic / French, and everyday transactions typically use the Djiboutian franc (Fdj). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Djibouti is a country in the Horn of Africa bordered by Somalia to the east, Eritrea to west and the Red Sea to the north, Ethiopia to the west and south, and the Gulf of Aden to the east.",
    "culture": "Culture in Djibouti is closely tied to Arabic language and everyday life in Djibouti. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Djibouti classics",
        "desc": "Signature dishes and home-style cooking from Djibouti",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Djibouti",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Africa ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Djibouti",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Djibouti",
        "desc": "Capital city and main gateway to Djibouti",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Djibouti",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Djibouti, then continue by rail, bus, taxi or domestic flights. Keep some Djiboutian franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Djibouti before you go. Register important numbers, keep copies of documents, and use licensed transport in Djibouti. Emergency info: Local emergency · dialing code +253.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +253",
    "callingCode": "+253",
    "aliases": [
      "Djibouti",
      "Republic of Djibouti"
    ]
  },
  {
    "name": "Dominica",
    "nameKa": "დომინიკა",
    "capital": "Roseau",
    "iso2": "dm",
    "flag": "🇩🇲",
    "language": "English",
    "currency": "Eastern Caribbean dollar ($)",
    "population": "67K",
    "populationRaw": 67408,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Caribbean",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Dominica",
    "about": "Dominica is a country in Caribbean, with Roseau as its capital. About 67K people live here. Official / major languages include English, and everyday transactions typically use the Eastern Caribbean dollar ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The first written records in the history of Dominica began in November 1493, when Christopher Columbus spotted the island. Prior to European contact, Dominica was inhabited by the Arawak. Dominica was a French colony from 1715 until the end of the Seven Years' War in 1763, and then became a British colony from 1763 to 1978. It became an independent nation in 1978.",
    "culture": "Culture in Dominica is closely tied to English language and everyday life in Roseau. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Dominica classics",
        "desc": "Signature dishes and home-style cooking from Dominica",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Roseau",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Caribbean ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Roseau",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Roseau",
        "desc": "Capital city and main gateway to Dominica",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Roseau",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via Roseau, then continue by rail, bus, taxi or domestic flights. Keep some Eastern Caribbean dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Dominica before you go. Register important numbers, keep copies of documents, and use licensed transport in Roseau. Emergency info: Local emergency · dialing code +1.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +1",
    "callingCode": "+1",
    "aliases": [
      "Dominica",
      "Commonwealth of Dominica"
    ]
  },
  {
    "name": "Dominican Republic",
    "nameKa": "დომინიკის რესპუბლიკა",
    "capital": "Santo Domingo",
    "iso2": "do",
    "flag": "🇩🇴",
    "language": "Spanish",
    "currency": "Dominican peso ($)",
    "population": "11M",
    "populationRaw": 10771504,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Caribbean",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Dominican Republic",
    "about": "Dominican Republic is a country in Caribbean, with Santo Domingo as its capital. About 11M people live here. Official / major languages include Spanish, and everyday transactions typically use the Dominican peso ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The recorded history of the Dominican Republic began in 1492 when Christopher Columbus, working for the Crown of Castile, arrived at a large island in the western Atlantic Ocean, later known as the Caribbean. The native Taíno people, an Arawakan people, had inhabited the island during the pre-Columbian era, dividing it into five chiefdoms. They referred to the eastern part of the island as Quisqueya, meaning 'mother of all lands.' Columbus claimed the island for Castile, naming it La Isla Española, which was later Latinized to Hispaniola.",
    "culture": "Culture in Dominican Republic is closely tied to Spanish language and everyday life in Santo Domingo. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Dominican Republic classics",
        "desc": "Signature dishes and home-style cooking from Dominican Republic",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Santo Domingo",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Caribbean ingredients and Spanish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Santo Domingo",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Santo Domingo",
        "desc": "Capital city and main gateway to Dominican Republic",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Santo Domingo",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Santo Domingo, then continue by rail, bus, taxi or domestic flights. Keep some Dominican peso for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Dominican Republic before you go. Register important numbers, keep copies of documents, and use licensed transport in Santo Domingo. Emergency info: Local emergency · dialing code +1.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +1",
    "callingCode": "+1",
    "aliases": [
      "Dominican Republic"
    ]
  },
  {
    "name": "Ecuador",
    "nameKa": "ეკვადორი",
    "capital": "Quito",
    "iso2": "ec",
    "flag": "🇪🇨",
    "language": "Spanish",
    "currency": "United States dollar ($)",
    "population": "18M",
    "populationRaw": 18103660,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "South America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Ecuador",
    "about": "Ecuador is a country in South America, with Quito as its capital. About 18M people live here. Official / major languages include Spanish, and everyday transactions typically use the United States dollar ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Ecuador’s story is shaped by its place in South America. Historic centers around Quito, museums, and monuments help travelers understand how the country developed into the modern state it is today. Layer visits with cultural sites and neighborhood walks for a fuller picture.",
    "culture": "Culture in Ecuador is closely tied to Spanish language and everyday life in Quito. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Ecuador classics",
        "desc": "Signature dishes and home-style cooking from Ecuador",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Quito",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South America ingredients and Spanish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Quito",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Quito",
        "desc": "Capital city and main gateway to Ecuador",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Quito",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Quito, then continue by rail, bus, taxi or domestic flights. Keep some United States dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Ecuador before you go. Register important numbers, keep copies of documents, and use licensed transport in Quito. Emergency info: Local emergency · dialing code +593.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +593",
    "callingCode": "+593",
    "aliases": [
      "Ecuador",
      "Republic of Ecuador"
    ]
  },
  {
    "name": "Egypt",
    "nameKa": "ეგვიპტე",
    "capital": "Cairo",
    "iso2": "eg",
    "flag": "🇪🇬",
    "language": "Arabic",
    "currency": "Egyptian pound (ج.م)",
    "population": "107M",
    "populationRaw": 107271260,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Northern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Egypt",
    "about": "Egypt is a country in Northern Africa, with Cairo as its capital. About 107M people live here. Official / major languages include Arabic, and everyday transactions typically use the Egyptian pound (ج.م). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Egypt, one of the world's oldest civilizations, was unified around 3150 BC by King Narmer. It later came under Persian, Greek, Roman, and Arab rule before being joined to the Ottoman Empire in 1517. Controlled by Britain in the late 19th century, it became a republic in 1953. After several political transitions, Abdel Fattah el-Sisi currently leads the country.",
    "culture": "Culture in Egypt is closely tied to Arabic language and everyday life in Cairo. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Egypt classics",
        "desc": "Signature dishes and home-style cooking from Egypt",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Cairo",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Northern Africa ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Cairo",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Cairo",
        "desc": "Capital city and main gateway to Egypt",
        "image": "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Cairo",
        "image": "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Cairo, then continue by rail, bus, taxi or domestic flights. Keep some Egyptian pound for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Egypt before you go. Register important numbers, keep copies of documents, and use licensed transport in Cairo. Emergency info: Local emergency · dialing code +20.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +20",
    "callingCode": "+20",
    "aliases": [
      "Egypt",
      "Arab Republic of Egypt"
    ]
  },
  {
    "name": "El Salvador",
    "nameKa": "ელ-სალვადორი",
    "capital": "San Salvador",
    "iso2": "sv",
    "flag": "🇸🇻",
    "language": "Spanish",
    "currency": "United States dollar ($)",
    "population": "6M",
    "populationRaw": 6029976,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Central America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover El Salvador",
    "about": "El Salvador is a country in Central America, with San Salvador as its capital. About 6M people live here. Official / major languages include Spanish, and everyday transactions typically use the United States dollar ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of El Salvador begins with several distinct groups of Mesoamerican people, especially the Pipil, the Lenca and the Maya. In the early 16th century, the Spanish Empire conquered the territory, incorporating it into the Viceroyalty of New Spain ruled from Mexico City. In 1821, El Salvador achieved independence from Spain as part of the First Mexican Empire, only to further secede as part of the Federal Republic of Central America two years later. Upon the republic's independence in 1841, El Salvador became a sovereign state until forming a short-lived union with Honduras and Nicaragua called the Greater Republic of Central America, which lasted from 1895 to 1898.",
    "culture": "Culture in El Salvador is closely tied to Spanish language and everyday life in San Salvador. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "El Salvador classics",
        "desc": "Signature dishes and home-style cooking from El Salvador",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around San Salvador",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Central America ingredients and Spanish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in San Salvador",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "San Salvador",
        "desc": "Capital city and main gateway to El Salvador",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near San Salvador",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via San Salvador, then continue by rail, bus, taxi or domestic flights. Keep some United States dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for El Salvador before you go. Register important numbers, keep copies of documents, and use licensed transport in San Salvador. Emergency info: Local emergency · dialing code +503.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +503",
    "callingCode": "+503",
    "aliases": [
      "El Salvador",
      "Republic of El Salvador"
    ]
  },
  {
    "name": "Equatorial Guinea",
    "nameKa": "ეკვატორული გვინეა",
    "capital": "Malabo",
    "iso2": "gq",
    "flag": "🇬🇶",
    "language": "French / Portuguese / Spanish",
    "currency": "Central African CFA franc (FCFA)",
    "population": "1.7M",
    "populationRaw": 1668768,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Middle Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Equatorial Guinea",
    "about": "Equatorial Guinea is a country in Middle Africa, with Malabo as its capital. About 1.7M people live here. Official / major languages include French / Portuguese / Spanish, and everyday transactions typically use the Central African CFA franc (FCFA). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The History of Equatorial Guinea is marked by centuries of colonial domination by the Portuguese, British and Spanish colonial empires, and by the local kingdoms.",
    "culture": "Culture in Equatorial Guinea is closely tied to French language and everyday life in Malabo. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Equatorial Guinea classics",
        "desc": "Signature dishes and home-style cooking from Equatorial Guinea",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Malabo",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Middle Africa ingredients and French culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Malabo",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Malabo",
        "desc": "Capital city and main gateway to Equatorial Guinea",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Malabo",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Malabo, then continue by rail, bus, taxi or domestic flights. Keep some Central African CFA franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Equatorial Guinea before you go. Register important numbers, keep copies of documents, and use licensed transport in Malabo. Emergency info: Local emergency · dialing code +240.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +240",
    "callingCode": "+240",
    "aliases": [
      "Equatorial Guinea",
      "Republic of Equatorial Guinea"
    ]
  },
  {
    "name": "Eritrea",
    "nameKa": "ერიტრეა",
    "capital": "Asmara",
    "iso2": "er",
    "flag": "🇪🇷",
    "language": "Arabic / English / Tigrinya",
    "currency": "Eritrean nakfa (Nfk)",
    "population": "3.6M",
    "populationRaw": 3607000,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Eritrea",
    "about": "Eritrea is a country in Eastern Africa, with Asmara as its capital. About 3.6M people live here. Official / major languages include Arabic / English / Tigrinya, and everyday transactions typically use the Eritrean nakfa (Nfk). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Eritrea is an ancient name and is located in the Horn of Africa, associated in the past with its Greek form Erythraia, Ἐρυθραία, and its derived Latin form Erythræa. This name relates to that of the Red Sea, then called the Erythræan Sea, from the Greek for \"red\", ἐρυθρός, erythros. But earlier Eritrea was called Mdre Bahri. The Italians created the colony of Eritrea in the 19th century around Asmara and named it with its current name. After World War II, Eritrea was annexed to Ethiopia. Following the communist Ethiopian government's defeat in 1991 by the coalition created by armed groups notably the EPLF, Eritrea declared its independence. Eritrea officially celebrated its 1st anniversary of independence on 24 May 1993.",
    "culture": "Culture in Eritrea is closely tied to Arabic language and everyday life in Asmara. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Eritrea classics",
        "desc": "Signature dishes and home-style cooking from Eritrea",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Asmara",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Africa ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Asmara",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Asmara",
        "desc": "Capital city and main gateway to Eritrea",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Asmara",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Asmara, then continue by rail, bus, taxi or domestic flights. Keep some Eritrean nakfa for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Eritrea before you go. Register important numbers, keep copies of documents, and use licensed transport in Asmara. Emergency info: Local emergency · dialing code +291.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +291",
    "callingCode": "+291",
    "aliases": [
      "Eritrea",
      "State of Eritrea"
    ]
  },
  {
    "name": "Estonia",
    "nameKa": "ესტონეთი",
    "capital": "Tallinn",
    "iso2": "ee",
    "flag": "🇪🇪",
    "language": "Estonian",
    "currency": "Euro (€)",
    "population": "1.4M",
    "populationRaw": 1369995,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Northern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Estonia",
    "about": "Estonia is a country in Northern Europe, with Tallinn as its capital. About 1.4M people live here. Official / major languages include Estonian, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Estonia forms a part of the history of Europe. Human settlement in what is now Estonia became possible 13,000–11,000 years ago, after the ice from the last glacial era had melted, and signs of the first permanent population in the region date from around 9000 BC.",
    "culture": "Culture in Estonia is closely tied to Estonian language and everyday life in Tallinn. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Estonia classics",
        "desc": "Signature dishes and home-style cooking from Estonia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Tallinn",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Northern Europe ingredients and Estonian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Tallinn",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Tallinn",
        "desc": "Capital city and main gateway to Estonia",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Tallinn",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Tallinn, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Estonia before you go. Register important numbers, keep copies of documents, and use licensed transport in Tallinn. Emergency info: Local emergency · dialing code +372.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +372",
    "callingCode": "+372",
    "aliases": [
      "Estonia",
      "Republic of Estonia"
    ]
  },
  {
    "name": "Eswatini",
    "nameKa": "ესვატინი",
    "capital": "Mbabane",
    "iso2": "sz",
    "flag": "🇸🇿",
    "language": "English / Swazi",
    "currency": "Lilangeni (E)",
    "population": "1.2M",
    "populationRaw": 1235549,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Southern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Eswatini",
    "about": "Eswatini is a country in Southern Africa, with Mbabane as its capital. About 1.2M people live here. Official / major languages include English / Swazi, and everyday transactions typically use the Lilangeni (E). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Artifacts indicating human activity dating back to the early Stone Age have been found in the Kingdom of Eswatini. The earliest known inhabitants of the region were Khoisan hunter-gatherers. Later, the population became predominantly Nguni during and after the great Bantu migrations. People speaking languages ancestral to the current Sotho and Nguni languages began settling no later than the 11th century. The country now derives its name from a 19th century king named Mswati II. Mswati II was the greatest of the fighting kings of Eswatini, and he greatly extended the area of the country to twice its current size. The people of Eswatini largely belong to a number of clans that can be categorized as Emakhandzambili, Bemdzabuko and Emafikamuva, depending on when and how they settled in Eswatini.",
    "culture": "Culture in Eswatini is closely tied to English language and everyday life in Mbabane. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Eswatini classics",
        "desc": "Signature dishes and home-style cooking from Eswatini",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Mbabane",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Africa ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Mbabane",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Mbabane",
        "desc": "Capital city and main gateway to Eswatini",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Mbabane",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Mbabane, then continue by rail, bus, taxi or domestic flights. Keep some Lilangeni for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Eswatini before you go. Register important numbers, keep copies of documents, and use licensed transport in Mbabane. Emergency info: Local emergency · dialing code +268.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +268",
    "callingCode": "+268",
    "aliases": [
      "Eswatini",
      "Swaziland",
      "Kingdom of Eswatini"
    ]
  },
  {
    "name": "Ethiopia",
    "nameKa": "ეთიოპია",
    "capital": "Addis Ababa",
    "iso2": "et",
    "flag": "🇪🇹",
    "language": "Amharic",
    "currency": "Ethiopian birr (Nkf)",
    "population": "112M",
    "populationRaw": 111652998,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Ethiopia",
    "about": "Ethiopia is a country in Eastern Africa, with Addis Ababa as its capital. About 112M people live here. Official / major languages include Amharic, and everyday transactions typically use the Ethiopian birr (Nkf). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Ethiopia is one of the oldest countries in Africa; the emergence of Ethiopian civilization dates back thousands of years. Abyssinia or rather \"Ze Etiyopia\" was ruled by the Semitic Abyssinians (Habesha) composed mainly of the Amhara, Tigrayans and the Cushitic, Oromo and Agaw. In the Eastern escarpment of the Ethiopian highlands and more so the lowlands were the home of the various Muslim groups that formed the Ifat and Adal sultanates such as the Argobba, Afars, Harari/Harla and Somalis. In the central and south were found the ancient Sidama, Semitic Gurage and Omotic Wolaita, among others. One of the first kingdoms to rise to power in the territory was the kingdom of Damot in the 10th century BC, which established its capital at Yeha. In the first century AD, the Aksumite Kingdom rose to power in the modern Tigray Region with its capital at Aksum and grew into a major power on the Red Sea, subjugating South Arabia and Meroe and its surrounding areas.",
    "culture": "Culture in Ethiopia is closely tied to Amharic language and everyday life in Addis Ababa. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Ethiopia classics",
        "desc": "Signature dishes and home-style cooking from Ethiopia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Addis Ababa",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Africa ingredients and Amharic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Addis Ababa",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Addis Ababa",
        "desc": "Capital city and main gateway to Ethiopia",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Addis Ababa",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Addis Ababa, then continue by rail, bus, taxi or domestic flights. Keep some Ethiopian birr for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Ethiopia before you go. Register important numbers, keep copies of documents, and use licensed transport in Addis Ababa. Emergency info: Local emergency · dialing code +251.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +251",
    "callingCode": "+251",
    "aliases": [
      "Ethiopia",
      "Federal Democratic Republic of Ethiopia"
    ]
  },
  {
    "name": "Fiji",
    "nameKa": "ფიჯი",
    "capital": "Suva",
    "iso2": "fj",
    "flag": "🇫🇯",
    "language": "English / Fijian / Fiji Hindi",
    "currency": "Fijian dollar (FJ$)",
    "population": "901K",
    "populationRaw": 900869,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
    "region": "Oceania",
    "subregion": "Melanesia",
    "tags": [
      "Beach",
      "Nature",
      "Adventure"
    ],
    "tagline": "Discover Fiji",
    "about": "Fiji is a country in Melanesia, with Suva as its capital. About 901K people live here. Official / major languages include English / Fijian / Fiji Hindi, and everyday transactions typically use the Fijian dollar (FJ$). Travelers visit for beach, nature, adventure experiences — cities, landscapes, food, and local culture.",
    "history": "The majority of Fiji's islands were formed through volcanic activity starting around 150 million years ago. Today, some geothermic activity still occurs on the islands of Vanua Levu and Taveuni. Fiji was settled first by the Lapita culture, around 1,500–1,000 BC, followed by a large influx of people with predominantly Melanesian genetics about the time of the beginning of the Common Era. Europeans visited Fiji from the 17th century, and, after a brief period as an independent kingdom, the British established the Colony of Fiji in 1874. Fiji was a Crown colony until 1970, when it gained independence as the Dominion of Fiji. A republic was declared in 1987, following a series of coups d'état.",
    "culture": "Culture in Fiji is closely tied to English language and everyday life in Suva. Expect festivals, markets, arts, and hospitality traditions that reflect Oceania influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Fiji classics",
        "desc": "Signature dishes and home-style cooking from Fiji",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Suva",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Melanesia ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Suva",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Suva",
        "desc": "Capital city and main gateway to Fiji",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Suva",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Suva, then continue by rail, bus, taxi or domestic flights. Keep some Fijian dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Fiji before you go. Register important numbers, keep copies of documents, and use licensed transport in Suva. Emergency info: Local emergency · dialing code +679.",
    "bestSeason": "Nov–Apr",
    "emergency": "Local emergency · dialing code +679",
    "callingCode": "+679",
    "aliases": [
      "Fiji",
      "Fiji Islands",
      "Republic of Fiji"
    ]
  },
  {
    "name": "Finland",
    "nameKa": "ფინეთი",
    "capital": "Helsinki",
    "iso2": "fi",
    "flag": "🇫🇮",
    "language": "Finnish / Swedish",
    "currency": "Euro (€)",
    "population": "5.6M",
    "populationRaw": 5645651,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Northern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Finland",
    "about": "Finland is a country in Northern Europe, with Helsinki as its capital. About 5.6M people live here. Official / major languages include Finnish / Swedish, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Finland began around 9000 BC during the end of the last glacial period. Stone Age cultures were Kunda, Comb Ceramic, Corded Ware, Kiukainen, and Pöljä cultures. The Finnish Bronze Age started in approximately 1500 BC and the Iron Age started in 500 BC and lasted until 1300 AD. Finnish Iron Age cultures can be separated into Finnish proper, Tavastian and Karelian cultures. The earliest written sources mentioning Finland start to appear from the 12th century onwards when the Catholic Church started to gain a foothold in Southwest Finland.",
    "culture": "Culture in Finland is closely tied to Finnish language and everyday life in Helsinki. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Finland classics",
        "desc": "Signature dishes and home-style cooking from Finland",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Helsinki",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Northern Europe ingredients and Finnish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Helsinki",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Helsinki",
        "desc": "Capital city and main gateway to Finland",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Helsinki",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Helsinki, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Finland before you go. Register important numbers, keep copies of documents, and use licensed transport in Helsinki. Emergency info: Local emergency · dialing code +358.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +358",
    "callingCode": "+358",
    "aliases": [
      "Finland",
      "Republic of Finland"
    ]
  },
  {
    "name": "France",
    "nameKa": "საფრანგეთი",
    "capital": "Paris",
    "iso2": "fr",
    "flag": "🇫🇷",
    "language": "French",
    "currency": "Euro (€)",
    "population": "69M",
    "populationRaw": 68688000,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Western Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover France",
    "about": "France is a country in Western Europe, with Paris as its capital. About 69M people live here. Official / major languages include French, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The first written records for the history of France appeared in the Iron Age. What is now France made up the bulk of the region known to the Romans as Gaul. Greek writers noted the presence of three main ethno-linguistic groups in the area: the Gauls, Aquitani and Belgae. Over the first millennium BC the Greeks, Romans and Carthaginians established colonies on the Mediterranean coast and offshore islands. The Roman Republic annexed southern Gaul in the late 2nd century BC, and legions under Julius Caesar conquered the rest of Gaul in the Gallic Wars of 58–51 BC. A Gallo-Roman culture emerged, and Gaul was increasingly integrated into the Roman Empire. In the later stages of the empire, Gaul was subject to barbarian raids and migration. The Frankish king Clovis I united most of Gaul in the late 5th century. Frankish power reached its fullest extent under Charlemagne. The medieval Kingdom of France emerged from the western part of Charlemagne's Carolingian Empire, known as West Francia, and achieved increasing prominence under the rule of the House of Capet, founded in 987.",
    "culture": "Culture in France is closely tied to French language and everyday life in Paris. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "France classics",
        "desc": "Signature dishes and home-style cooking from France",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Paris",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Europe ingredients and French culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Paris",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Paris",
        "desc": "Capital city and main gateway to France",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Paris",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Paris, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for France before you go. Register important numbers, keep copies of documents, and use licensed transport in Paris. Emergency info: Local emergency · dialing code +33.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +33",
    "callingCode": "+33",
    "aliases": [
      "France",
      "French Republic"
    ]
  },
  {
    "name": "Gabon",
    "nameKa": "გაბონი",
    "capital": "Libreville",
    "iso2": "ga",
    "flag": "🇬🇦",
    "language": "French",
    "currency": "Central African CFA franc (FCFA)",
    "population": "2.5M",
    "populationRaw": 2469296,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Middle Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Gabon",
    "about": "Gabon is a country in Middle Africa, with Libreville as its capital. About 2.5M people live here. Official / major languages include French, and everyday transactions typically use the Central African CFA franc (FCFA). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Present-day Gabon was first inhabited by rainforest hunter-gatherers, attested as early as c. 43,000 BC; archaeology confirms occupations from the Late Pleistocene to the Neolithic along the coast and in the Ogooué. By c. 400–300 BC, Bantu-speaking farming and ironworking communities settled in the middle Ogooué, initiating an expansion that subsequently structured settlement across the region.",
    "culture": "Culture in Gabon is closely tied to French language and everyday life in Libreville. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Gabon classics",
        "desc": "Signature dishes and home-style cooking from Gabon",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Libreville",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Middle Africa ingredients and French culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Libreville",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Libreville",
        "desc": "Capital city and main gateway to Gabon",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Libreville",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via Libreville, then continue by rail, bus, taxi or domestic flights. Keep some Central African CFA franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Gabon before you go. Register important numbers, keep copies of documents, and use licensed transport in Libreville. Emergency info: Local emergency · dialing code +241.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +241",
    "callingCode": "+241",
    "aliases": [
      "Gabon",
      "Gabonese Republic"
    ]
  },
  {
    "name": "Gambia",
    "nameKa": "გამბია",
    "capital": "Banjul",
    "iso2": "gm",
    "flag": "🇬🇲",
    "language": "English",
    "currency": "Gambian dalasi (D)",
    "population": "2.4M",
    "populationRaw": 2422712,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Western Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Gambia",
    "about": "Gambia is a country in Western Africa, with Banjul as its capital. About 2.4M people live here. Official / major languages include English, and everyday transactions typically use the Gambian dalasi (D). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The earliest inhabitants of The Gambia are unknown, but they left behind large shell middens and enigmatic stone circles attesting to diverse subsistence strategies and well-organized, hierarchical societies. In the 13th century, the Mali Empire expanded into the Gambia river valley, where Mandinka warriors and traders founded numerous small states.",
    "culture": "Culture in Gambia is closely tied to English language and everyday life in Banjul. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Gambia classics",
        "desc": "Signature dishes and home-style cooking from Gambia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Banjul",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Africa ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Banjul",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Banjul",
        "desc": "Capital city and main gateway to Gambia",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Banjul",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via Banjul, then continue by rail, bus, taxi or domestic flights. Keep some Gambian dalasi for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Gambia before you go. Register important numbers, keep copies of documents, and use licensed transport in Banjul. Emergency info: Local emergency · dialing code +220.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +220",
    "callingCode": "+220",
    "aliases": [
      "Gambia",
      "The Gambia",
      "Republic of the Gambia"
    ]
  },
  {
    "name": "Georgia",
    "nameKa": "საქართველო",
    "capital": "Tbilisi",
    "iso2": "ge",
    "flag": "🇬🇪",
    "language": "Georgian",
    "currency": "Georgian lari (ლ)",
    "population": "3.7M",
    "populationRaw": 3704500,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Where Europe meets the Caucasus",
    "about": "Georgia is a European country at the heart of the Caucasus, with Tbilisi as its capital. About 3.7M people live here. Georgian is the official language, and everyday life runs on the lari (₾). Travelers come for ancient history, mountain landscapes, Black Sea coasts, and one of the world’s oldest wine cultures.",
    "history": "Georgia’s story begins with the ancient kingdoms of Colchis and Iberia — lands linked to the Golden Fleece legend and early Christian conversion in the 4th century. In 1008 the Bagrationi dynasty unified the country. The Golden Age followed under King David IV the Builder and Queen Tamar the Great, when Georgian culture, architecture, and power reached their peak. Mongol invasions, later empires, and the 20th century Soviet period reshaped the nation, yet Georgia restored independence in 1991 and today stands as a proud European country with a living heritage of wine, faith, and mountain traditions.",
    "historyFacts": [
      {
        "year": "6th c. BC",
        "title": "Colchis & Iberia",
        "text": "Ancient kingdoms flourish on the Black Sea and in eastern Georgia — Colchis later enters world myth through Jason and the Golden Fleece."
      },
      {
        "year": "337 AD",
        "title": "Christian Georgia",
        "text": "Under King Mirian III, Iberia adopts Christianity among the earliest state conversions — churches and monasteries still shape the landscape."
      },
      {
        "year": "1008",
        "title": "Kingdom united",
        "text": "Bagrat III of the Bagrationi dynasty unites Georgian lands into a single medieval kingdom."
      },
      {
        "year": "11th–12th c.",
        "title": "Golden Age",
        "text": "David IV the Builder and Queen Tamar lead Georgia’s cultural and political peak — epic poetry, frescoes, and fortress cities bloom."
      },
      {
        "year": "1243+",
        "title": "Invasion & resilience",
        "text": "Mongol conquests fracture power; later rulers such as George V the Brilliant briefly restore strength and prestige."
      },
      {
        "year": "1801–1918",
        "title": "Empire & republic",
        "text": "Eastern Georgia enters the Russian Empire; after World War I the short-lived Democratic Republic of Georgia (1918–1921) asserts modern statehood."
      },
      {
        "year": "1991",
        "title": "Independence restored",
        "text": "Georgia reclaims independence after the Soviet era and continues as a sovereign European nation rooted in Caucasus heritage."
      }
    ],
    "culture": "Georgian culture is woven from supra feasts, polyphonic singing, Orthodox churches, and mountain hospitality. In Tbilisi, sulfur baths, wine bars, and old-town courtyards meet modern galleries. Learning a few Georgian phrases — gamarjoba, madloba — opens doors everywhere.",
    "foods": [
      {
        "name": "Georgia classics",
        "desc": "Signature dishes and home-style cooking from Georgia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Tbilisi",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Caucasus ingredients and Georgian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Tbilisi",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Tbilisi Old Town",
        "desc": "Narikala, sulfur baths, and layered streets above the Mtkvari",
        "image": "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Kazbegi / Stepantsminda",
        "desc": "Gergeti Trinity Church and alpine views of Mount Kazbek",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Batumi",
        "desc": "Black Sea boulevard, modern skyline, and Adjara gateway",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Kakheti Wine Country",
        "desc": "Qvevri cellars, vineyards, and monastery-dotted valleys",
        "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      }
    ],
    "transport": "Most international travelers arrive via Tbilisi, then continue by rail, bus, taxi or domestic flights. Keep some Georgian lari for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Georgia before you go. Register important numbers, keep copies of documents, and use licensed transport in Tbilisi. Emergency info: Local emergency · dialing code +995.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +995",
    "callingCode": "+995",
    "aliases": [
      "Georgia"
    ]
  },
  {
    "name": "Germany",
    "nameKa": "გერმანია",
    "capital": "Berlin",
    "iso2": "de",
    "flag": "🇩🇪",
    "language": "German",
    "currency": "Euro (€)",
    "population": "84M",
    "populationRaw": 83517030,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1467269204594-be2d87b333ae?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Western Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Germany",
    "about": "Germany is a country in Western Europe, with Berlin as its capital. About 84M people live here. Official / major languages include German, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The concept of Germany as a distinct region can be traced to Julius Caesar, who referred to the area east of the Rhine as Germania, distinguishing it from Gaul. Germanic tribes victory in the Battle of the Teutoburg Forest prevented annexation by the Roman Empire, although the Roman provinces of Germania Superior and Germania Inferior were established along the Rhine. Following the Fall of the Western Roman Empire, the Franks conquered the other West Germanic tribes. When the Frankish Empire was divided in 843, the eastern part became East Francia, and later Kingdom of Germany. In 962, Otto I became the first Holy Roman Emperor of the Holy Roman Empire, the medieval Germanic kingdom.",
    "culture": "Culture in Germany is closely tied to German language and everyday life in Berlin. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Germany classics",
        "desc": "Signature dishes and home-style cooking from Germany",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Berlin",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Europe ingredients and German culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Berlin",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Berlin",
        "desc": "Capital city and main gateway to Germany",
        "image": "https://images.unsplash.com/photo-1467269204594-be2d87b333ae?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Berlin",
        "image": "https://images.unsplash.com/photo-1467269204594-be2d87b333ae?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1467269204594-be2d87b333ae?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1467269204594-be2d87b333ae?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Berlin, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Germany before you go. Register important numbers, keep copies of documents, and use licensed transport in Berlin. Emergency info: Local emergency · dialing code +49.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +49",
    "callingCode": "+49",
    "aliases": [
      "Germany",
      "Federal Republic of Germany"
    ]
  },
  {
    "name": "Ghana",
    "nameKa": "განა",
    "capital": "Accra",
    "iso2": "gh",
    "flag": "🇬🇭",
    "language": "English",
    "currency": "Ghanaian cedi (GH₵)",
    "population": "34M",
    "populationRaw": 33742380,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Western Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Ghana",
    "about": "Ghana is a country in Western Africa, with Accra as its capital. About 34M people live here. Official / major languages include English, and everyday transactions typically use the Ghanaian cedi (GH₵). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The area of the Republic of Ghana became known in Europe and Arabia as the Ghana Empire after the title of its Emperor, the Ghana. Geographically, the ancient Ghana Empire was approximately 500 miles (800 km) north and west of the modern state of Ghana, and controlled territories in the area of the Sénégal River and east towards the Niger rivers, in modern Senegal, Mauritania and Mali. The empire appears to have broken up following the 1076 conquest by the Almoravid General Abu-Bakr Ibn-Umar. A reduced kingdom continued to exist after Almoravid rule ended, and the kingdom was later incorporated into subsequent Sahelian empires, such as the Mali Empire. Around the same time, south of the Mali empire in present-day northern Ghana, the Kingdom of Dagbon emerged. The decentralised states ruled by the tindaamba were unified into a kingdom. Many sub-kingdoms would later arise from Dagbon including the Mossi Kingdoms of Burkina Faso and Bouna Kingdom of Ivory Coast.",
    "culture": "Culture in Ghana is closely tied to English language and everyday life in Accra. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Ghana classics",
        "desc": "Signature dishes and home-style cooking from Ghana",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Accra",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Africa ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Accra",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Accra",
        "desc": "Capital city and main gateway to Ghana",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Accra",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Accra, then continue by rail, bus, taxi or domestic flights. Keep some Ghanaian cedi for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Ghana before you go. Register important numbers, keep copies of documents, and use licensed transport in Accra. Emergency info: Local emergency · dialing code +233.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +233",
    "callingCode": "+233",
    "aliases": [
      "Ghana",
      "Republic of Ghana"
    ]
  },
  {
    "name": "Greece",
    "nameKa": "საბერძნეთი",
    "capital": "Athens",
    "iso2": "gr",
    "flag": "🇬🇷",
    "language": "Greek",
    "currency": "Euro (€)",
    "population": "10M",
    "populationRaw": 10400720,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Southern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Greece",
    "about": "Greece is a country in Southern Europe, with Athens as its capital. About 10M people live here. Official / major languages include Greek, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Greece encompasses the history of the territory of the modern nation-state of Greece as well as that of the Greek people and the areas they inhabited and ruled historically. The scope of Greek habitation and rule has varied throughout the ages and as a result, the history of Greece is similarly elastic in what it includes.",
    "culture": "Culture in Greece is closely tied to Greek language and everyday life in Athens. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Greece classics",
        "desc": "Signature dishes and home-style cooking from Greece",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Athens",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Europe ingredients and Greek culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Athens",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Athens",
        "desc": "Capital city and main gateway to Greece",
        "image": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Athens",
        "image": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Athens, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Greece before you go. Register important numbers, keep copies of documents, and use licensed transport in Athens. Emergency info: Local emergency · dialing code +30.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +30",
    "callingCode": "+30",
    "aliases": [
      "Greece",
      "Hellenic Republic"
    ]
  },
  {
    "name": "Grenada",
    "nameKa": "გრენადა",
    "capital": "St. George's",
    "iso2": "gd",
    "flag": "🇬🇩",
    "language": "English",
    "currency": "Eastern Caribbean dollar ($)",
    "population": "109K",
    "populationRaw": 109021,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Caribbean",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Grenada",
    "about": "Grenada is a country in Caribbean, with St. George's as its capital. About 109K people live here. Official / major languages include English, and everyday transactions typically use the Eastern Caribbean dollar ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Grenada in the Caribbean, part of the Lesser Antilles group of islands, covers a period from the earliest human settlements to the establishment of the contemporary nationstate of Grenada. First settled by indigenous peoples, Grenada by the time of European contact was inhabited by the Caribs. British colonists killed most of the Caribs on the island and established plantations on the island, eventually importing African slaves to work on the sugar plantations.",
    "culture": "Culture in Grenada is closely tied to English language and everyday life in St. George's. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Grenada classics",
        "desc": "Signature dishes and home-style cooking from Grenada",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around St. George's",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Caribbean ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in St. George's",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "St. George's",
        "desc": "Capital city and main gateway to Grenada",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near St. George's",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via St. George's, then continue by rail, bus, taxi or domestic flights. Keep some Eastern Caribbean dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Grenada before you go. Register important numbers, keep copies of documents, and use licensed transport in St. George's. Emergency info: Local emergency · dialing code +1.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +1",
    "callingCode": "+1",
    "aliases": [
      "Grenada"
    ]
  },
  {
    "name": "Guatemala",
    "nameKa": "გვატემალა",
    "capital": "Guatemala City",
    "iso2": "gt",
    "flag": "🇬🇹",
    "language": "Spanish",
    "currency": "Guatemalan quetzal (Q)",
    "population": "18M",
    "populationRaw": 18079810,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Central America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Guatemala",
    "about": "Guatemala is a country in Central America, with Guatemala City as its capital. About 18M people live here. Official / major languages include Spanish, and everyday transactions typically use the Guatemalan quetzal (Q). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Guatemala traces back to the Maya civilization, with the country's modern history beginning with the Spanish conquest of Guatemala in 1524. By 1000 AD, most of the major Classic-era Maya cities in the Petén Basin, located in the northern lowlands, had been abandoned. The Maya states in the Belize central highlands continued to thrive until the Spanish conquistador Pedro de Alvarado—called \"The Invader\" by the Maya—arrived in 1525 and began to subdue the indigenous populations.",
    "culture": "Culture in Guatemala is closely tied to Spanish language and everyday life in Guatemala City. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Guatemala classics",
        "desc": "Signature dishes and home-style cooking from Guatemala",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Guatemala City",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Central America ingredients and Spanish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Guatemala City",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Guatemala City",
        "desc": "Capital city and main gateway to Guatemala",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Guatemala City",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Guatemala City, then continue by rail, bus, taxi or domestic flights. Keep some Guatemalan quetzal for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Guatemala before you go. Register important numbers, keep copies of documents, and use licensed transport in Guatemala City. Emergency info: Local emergency · dialing code +502.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +502",
    "callingCode": "+502",
    "aliases": [
      "Guatemala",
      "Republic of Guatemala"
    ]
  },
  {
    "name": "Guinea",
    "nameKa": "გვინეა",
    "capital": "Conakry",
    "iso2": "gn",
    "flag": "🇬🇳",
    "language": "French",
    "currency": "Guinean franc (FG)",
    "population": "14M",
    "populationRaw": 14363931,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Western Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Guinea",
    "about": "Guinea is a country in Western Africa, with Conakry as its capital. About 14M people live here. Official / major languages include French, and everyday transactions typically use the Guinean franc (FG). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The modern state of Guinea did not come into existence until 1958, but the history of the area stretches back well before European colonization. Its current boundaries were determined by the Berlin Conference (1884–1885) and the French, who ruled Guinea until 1958.",
    "culture": "Culture in Guinea is closely tied to French language and everyday life in Conakry. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Guinea classics",
        "desc": "Signature dishes and home-style cooking from Guinea",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Conakry",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Africa ingredients and French culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Conakry",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Conakry",
        "desc": "Capital city and main gateway to Guinea",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Conakry",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Conakry, then continue by rail, bus, taxi or domestic flights. Keep some Guinean franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Guinea before you go. Register important numbers, keep copies of documents, and use licensed transport in Conakry. Emergency info: Local emergency · dialing code +224.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +224",
    "callingCode": "+224",
    "aliases": [
      "Guinea",
      "Republic of Guinea"
    ]
  },
  {
    "name": "Guinea-Bissau",
    "nameKa": "გვინეა-ბისაუ",
    "capital": "Bissau",
    "iso2": "gw",
    "flag": "🇬🇼",
    "language": "Portuguese / Upper Guinea Creole",
    "currency": "West African CFA franc (CFA)",
    "population": "1.8M",
    "populationRaw": 1781308,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Western Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Guinea-Bissau",
    "about": "Guinea-Bissau is a country in Western Africa, with Bissau as its capital. About 1.8M people live here. Official / major languages include Portuguese / Upper Guinea Creole, and everyday transactions typically use the West African CFA franc (CFA). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The region now known as Guinea-Bissau, in West Africa, has been inhabited by humans for thousands of years. During the 13th century CE, it was a province of the Mali Empire which later became independent as the empire of Kaabu. The Portuguese Empire claimed the region during the 1450s, but its control was limited to several forts along the coast during most of this period; it gained control of the mainland after a series of \"pacification campaigns\" from 1912 to 1915, which used military forces to violently crush local resistance. The offshore Bijagos Islands were not colonized until 1936. Guinea-Bissau gained independence from Portugal in 1974. The introduction of multi-party politics in 1991 led to the first multi-party elections in 1994. A civil war broke out in 1998, which lasted until the following year.",
    "culture": "Culture in Guinea-Bissau is closely tied to Portuguese language and everyday life in Bissau. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Guinea-Bissau classics",
        "desc": "Signature dishes and home-style cooking from Guinea-Bissau",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Bissau",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Africa ingredients and Portuguese culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Bissau",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Bissau",
        "desc": "Capital city and main gateway to Guinea-Bissau",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Bissau",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Bissau, then continue by rail, bus, taxi or domestic flights. Keep some West African CFA franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Guinea-Bissau before you go. Register important numbers, keep copies of documents, and use licensed transport in Bissau. Emergency info: Local emergency · dialing code +245.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +245",
    "callingCode": "+245",
    "aliases": [
      "Guinea-Bissau",
      "Republic of Guinea-Bissau"
    ]
  },
  {
    "name": "Guyana",
    "nameKa": "გაიანა",
    "capital": "Georgetown",
    "iso2": "gy",
    "flag": "🇬🇾",
    "language": "English",
    "currency": "Guyanese dollar ($)",
    "population": "773K",
    "populationRaw": 772975,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "South America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Guyana",
    "about": "Guyana is a country in South America, with Georgetown as its capital. About 773K people live here. Official / major languages include English, and everyday transactions typically use the Guyanese dollar ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Guyana begins about 35,000 years ago with the arrival of humans coming from Eurasia. These migrants became the Kalina and Lokono tribes, who met Alonso de Ojeda's first expedition from Spain in 1499 at the Essequibo River. In the ensuing colonial era, Guyana's government was defined by the successive policies of the French, Dutch, and British settlers.",
    "culture": "Culture in Guyana is closely tied to English language and everyday life in Georgetown. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Guyana classics",
        "desc": "Signature dishes and home-style cooking from Guyana",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Georgetown",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South America ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Georgetown",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Georgetown",
        "desc": "Capital city and main gateway to Guyana",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Georgetown",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Georgetown, then continue by rail, bus, taxi or domestic flights. Keep some Guyanese dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Guyana before you go. Register important numbers, keep copies of documents, and use licensed transport in Georgetown. Emergency info: Local emergency · dialing code +592.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +592",
    "callingCode": "+592",
    "aliases": [
      "Guyana",
      "Co-operative Republic of Guyana"
    ]
  },
  {
    "name": "Haiti",
    "nameKa": "ჰაიტი",
    "capital": "Port-au-Prince",
    "iso2": "ht",
    "flag": "🇭🇹",
    "language": "French / Haitian Creole",
    "currency": "Haitian gourde (G)",
    "population": "12M",
    "populationRaw": 11867032,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Caribbean",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Haiti",
    "about": "Haiti is a country in Caribbean, with Port-au-Prince as its capital. About 12M people live here. Official / major languages include French / Haitian Creole, and everyday transactions typically use the Haitian gourde (G). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The recorded history of Haiti began in 1492, when the European captain and explorer Christopher Columbus landed on a large island in the region of the western Atlantic Ocean that later came to be known as the Caribbean Sea. The western portion of the island of Hispaniola, where Haiti is situated, was inhabited by Indigenous peoples, who called their island Ayiti. The island was promptly claimed for the Spanish Crown, where it was named La Isla Española, later Latinized to Hispaniola. By the early 17th century, the French had built a settlement on the west of Hispaniola and called it Saint-Domingue. Prior to the Seven Years' War (1756–1763), the economy of Saint-Domingue gradually expanded, with sugar and, later, coffee becoming important export crops. After the war which had disrupted maritime commerce, the colony underwent rapid expansion. In 1767, it exported indigo, cotton and 72 million pounds of raw sugar. By the end of the century, the colony encompassed a third of the entire Atlantic slave trade.",
    "culture": "Culture in Haiti is closely tied to French language and everyday life in Port-au-Prince. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Haiti classics",
        "desc": "Signature dishes and home-style cooking from Haiti",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Port-au-Prince",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Caribbean ingredients and French culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Port-au-Prince",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Port-au-Prince",
        "desc": "Capital city and main gateway to Haiti",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Port-au-Prince",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Port-au-Prince, then continue by rail, bus, taxi or domestic flights. Keep some Haitian gourde for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Haiti before you go. Register important numbers, keep copies of documents, and use licensed transport in Port-au-Prince. Emergency info: Local emergency · dialing code +509.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +509",
    "callingCode": "+509",
    "aliases": [
      "Haiti",
      "Republic of Haiti"
    ]
  },
  {
    "name": "Honduras",
    "nameKa": "ჰონდურასი",
    "capital": "Tegucigalpa",
    "iso2": "hn",
    "flag": "🇭🇳",
    "language": "Spanish",
    "currency": "Honduran lempira (L)",
    "population": "9.9M",
    "populationRaw": 9892632,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Central America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Honduras",
    "about": "Honduras is a country in Central America, with Tegucigalpa as its capital. About 9.9M people live here. Official / major languages include Spanish, and everyday transactions typically use the Honduran lempira (L). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Honduras was inhabited by many indigenous peoples when the Spanish introduced the wheel to them, in the 16th century. The western-central part of Honduras was inhabited by the Lencas, the central north coast by the Tol, the area east and west of Trujillo by the Pech, the Maya and Sumo. These autonomous groups traded with each other and with other populations as distant as Panama and Mexico. Honduras has ruins of several cities dating from the Mesoamerican pre-classic period that show the pre-Columbian past of the country.",
    "culture": "Culture in Honduras is closely tied to Spanish language and everyday life in Tegucigalpa. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Honduras classics",
        "desc": "Signature dishes and home-style cooking from Honduras",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Tegucigalpa",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Central America ingredients and Spanish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Tegucigalpa",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Tegucigalpa",
        "desc": "Capital city and main gateway to Honduras",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Tegucigalpa",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Tegucigalpa, then continue by rail, bus, taxi or domestic flights. Keep some Honduran lempira for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Honduras before you go. Register important numbers, keep copies of documents, and use licensed transport in Tegucigalpa. Emergency info: Local emergency · dialing code +504.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +504",
    "callingCode": "+504",
    "aliases": [
      "Honduras",
      "Republic of Honduras"
    ]
  },
  {
    "name": "Hungary",
    "nameKa": "უნგრეთი",
    "capital": "Budapest",
    "iso2": "hu",
    "flag": "🇭🇺",
    "language": "Hungarian",
    "currency": "Hungarian forint (Ft)",
    "population": "9.5M",
    "populationRaw": 9539502,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Hungary",
    "about": "Hungary is a country in Eastern Europe, with Budapest as its capital. About 9.5M people live here. Official / major languages include Hungarian, and everyday transactions typically use the Hungarian forint (Ft). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "Hungary in its modern (post-1946) borders roughly corresponds to the Great Hungarian Plain in Central Europe.",
    "culture": "Culture in Hungary is closely tied to Hungarian language and everyday life in Budapest. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Hungary classics",
        "desc": "Signature dishes and home-style cooking from Hungary",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Budapest",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Europe ingredients and Hungarian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Budapest",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Budapest",
        "desc": "Capital city and main gateway to Hungary",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Budapest",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Budapest, then continue by rail, bus, taxi or domestic flights. Keep some Hungarian forint for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Hungary before you go. Register important numbers, keep copies of documents, and use licensed transport in Budapest. Emergency info: Local emergency · dialing code +36.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +36",
    "callingCode": "+36",
    "aliases": [
      "Hungary"
    ]
  },
  {
    "name": "Iceland",
    "nameKa": "ისლანდია",
    "capital": "Reykjavik",
    "iso2": "is",
    "flag": "🇮🇸",
    "language": "Icelandic",
    "currency": "Icelandic króna (ko)",
    "population": "392K",
    "populationRaw": 391810,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Northern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Iceland",
    "about": "Iceland is a country in Northern Europe, with Reykjavik as its capital. About 392K people live here. Official / major languages include Icelandic, and everyday transactions typically use the Icelandic króna (ko). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The recorded history of Iceland began with the settlement by Viking explorers, mostly Norwegian, and the people they enslaved from Western Europe, particularly the British Isles, in the late ninth century. Iceland was still uninhabited long after the rest of Western Europe had been settled. Recorded settlement has conventionally been dated back to 874, although place names and storytellings indicate Gaelic monks from Ireland, known as papar from sagas, may have settled Iceland earlier.",
    "culture": "Culture in Iceland is closely tied to Icelandic language and everyday life in Reykjavik. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Iceland classics",
        "desc": "Signature dishes and home-style cooking from Iceland",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Reykjavik",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Northern Europe ingredients and Icelandic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Reykjavik",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Reykjavik",
        "desc": "Capital city and main gateway to Iceland",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Reykjavik",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Reykjavik, then continue by rail, bus, taxi or domestic flights. Keep some Icelandic króna for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Iceland before you go. Register important numbers, keep copies of documents, and use licensed transport in Reykjavik. Emergency info: Local emergency · dialing code +354.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +354",
    "callingCode": "+354",
    "aliases": [
      "Iceland"
    ]
  },
  {
    "name": "India",
    "nameKa": "ინდოეთი",
    "capital": "New Delhi",
    "iso2": "in",
    "flag": "🇮🇳",
    "language": "English / Hindi / Tamil",
    "currency": "Indian rupee (₹)",
    "population": "1.42B",
    "populationRaw": 1417492000,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Southern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover India",
    "about": "India is a country in Southern Asia, with New Delhi as its capital. About 1.42B people live here. Official / major languages include English / Hindi / Tamil, and everyday transactions typically use the Indian rupee (₹). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "Anatomically modern humans are estimated to have first arrived on the Indian subcontinent between 73,000 and 55,000 years ago. The earliest known human remains in South Asia date to 30,000 years ago. Sedentariness began in South Asia around 7000 BCE; by 4500 BCE, settled life had spread, and gradually evolved into the Indus Valley Civilisation, one of three early cradles of civilisation in the Old World, which flourished between 2500 BCE and 1900 BCE in present-day Pakistan and north-western India. Early in the second millennium BCE, persistent drought caused the population of the Indus Valley to scatter from large urban centres to villages. Around 1800 - 1500 BCE the Indo-Aryan tribes moved into the north western region of India, modern day Punjab from Central Asia in several waves of migration. The Vedic Period of the Vedic people in northern India was marked by the composition of their extensive collections of hymns (Vedas). The social structure was loosely stratified via the varna system, incorporated into the highly evolved present-day Jāti system.",
    "culture": "Culture in India is closely tied to English language and everyday life in New Delhi. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "India classics",
        "desc": "Signature dishes and home-style cooking from India",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around New Delhi",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Asia ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in New Delhi",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "New Delhi",
        "desc": "Capital city and main gateway to India",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near New Delhi",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via New Delhi, then continue by rail, bus, taxi or domestic flights. Keep some Indian rupee for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for India before you go. Register important numbers, keep copies of documents, and use licensed transport in New Delhi. Emergency info: Local emergency · dialing code +91.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +91",
    "callingCode": "+91",
    "aliases": [
      "India",
      "Republic of India"
    ]
  },
  {
    "name": "Indonesia",
    "nameKa": "ინდონეზია",
    "capital": "Jakarta",
    "iso2": "id",
    "flag": "🇮🇩",
    "language": "Indonesian",
    "currency": "Indonesian rupiah (Rp)",
    "population": "284M",
    "populationRaw": 284438782,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Indonesia",
    "about": "Indonesia is a country in South-Eastern Asia, with Jakarta as its capital. About 284M people live here. Official / major languages include Indonesian, and everyday transactions typically use the Indonesian rupiah (Rp). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Indonesia has been shaped by its geographic position, natural resources, a series of human migrations and contacts, wars and conquests, as well as by trade, economics and politics. Indonesia is an archipelagic country of more than 17,000 islands stretching along the equator in Southeast Asia and Oceania. The country's strategic sea-lane position fostered inter-island and international trade; trade has since fundamentally shaped Indonesian history. The area of Indonesia is populated by peoples of various migrations, creating a diversity of cultures, ethnicities, and languages. The archipelago's landforms and climate significantly influenced agriculture and trade, and the formation of states. The boundaries of the state of Indonesia match the 20th-century borders of the Dutch East Indies.",
    "culture": "Culture in Indonesia is closely tied to Indonesian language and everyday life in Jakarta. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Indonesia classics",
        "desc": "Signature dishes and home-style cooking from Indonesia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Jakarta",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South-Eastern Asia ingredients and Indonesian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Jakarta",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Jakarta",
        "desc": "Capital city and main gateway to Indonesia",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Jakarta",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Jakarta, then continue by rail, bus, taxi or domestic flights. Keep some Indonesian rupiah for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Indonesia before you go. Register important numbers, keep copies of documents, and use licensed transport in Jakarta. Emergency info: Local emergency · dialing code +62.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +62",
    "callingCode": "+62",
    "aliases": [
      "Indonesia",
      "Republic of Indonesia"
    ]
  },
  {
    "name": "Iran",
    "nameKa": "ირანი",
    "capital": "Tehran",
    "iso2": "ir",
    "flag": "🇮🇷",
    "language": "Persian (Farsi)",
    "currency": "Iranian rial (﷼)",
    "population": "86M",
    "populationRaw": 85961000,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Southern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Iran",
    "about": "Iran is a country in Southern Asia, with Tehran as its capital. About 86M people live here. Official / major languages include Persian (Farsi), and everyday transactions typically use the Iranian rial (﷼). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Iran is intertwined with Greater Iran, a region encompassing all areas that have witnessed significant settlement or influence by the Iranian peoples and Iranian languages – chiefly the Persians and the Persian language. Central to this region is the Iranian plateau, now covered by modern Iran. The most pronounced impact of Iranian history can be seen stretching from Anatolia in the west to the Indus Valley in the east, including the Levant, Mesopotamia, the Caucasus, and majority of Central Asia. It also stands in connection with the histories of other major civilizations, such as India, China, Greece, Rome, and Egypt.",
    "culture": "Culture in Iran is closely tied to Persian (Farsi) language and everyday life in Tehran. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Iran classics",
        "desc": "Signature dishes and home-style cooking from Iran",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Tehran",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Asia ingredients and Persian (Farsi) culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Tehran",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Tehran",
        "desc": "Capital city and main gateway to Iran",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Tehran",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Tehran, then continue by rail, bus, taxi or domestic flights. Keep some Iranian rial for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Iran before you go. Register important numbers, keep copies of documents, and use licensed transport in Tehran. Emergency info: Local emergency · dialing code +98.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +98",
    "callingCode": "+98",
    "aliases": [
      "Iran",
      "Iran (Islamic Republic of)",
      "Islamic Republic of Iran"
    ]
  },
  {
    "name": "Iraq",
    "nameKa": "ერაყი",
    "capital": "Baghdad",
    "iso2": "iq",
    "flag": "🇮🇶",
    "language": "Arabic / Aramaic / Sorani",
    "currency": "Iraqi dinar (د.ع)",
    "population": "46M",
    "populationRaw": 46118793,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Western Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Iraq",
    "about": "Iraq is a country in Western Asia, with Baghdad as its capital. About 46M people live here. Official / major languages include Arabic / Aramaic / Sorani, and everyday transactions typically use the Iraqi dinar (د.ع). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "Iraq, a country located in West Asia, largely coincides with the ancient region of Mesopotamia, often referred to as the cradle of civilization. The history of Mesopotamia extends back to the Lower Paleolithic period, with significant developments continuing through the establishment of the Caliphate in the late 7th century AD, after which the region became known as Iraq. Within its borders lies the ancient land of Sumer, which emerged between 6000 and 5000 BC during the Neolithic Ubaid period. Sumer is recognized as the world's earliest civilization, marking the beginning of urban development, written language, and monumental architecture. Iraq's territory also includes the heartlands of the Akkadian, Neo-Sumerian, Babylonian, Neo-Assyrian, and Neo-Babylonian empires, which dominated Mesopotamia and much of the Ancient Near East during the Bronze and Iron Ages.",
    "culture": "Culture in Iraq is closely tied to Arabic language and everyday life in Baghdad. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Iraq classics",
        "desc": "Signature dishes and home-style cooking from Iraq",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Baghdad",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Asia ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Baghdad",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Baghdad",
        "desc": "Capital city and main gateway to Iraq",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Baghdad",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Baghdad, then continue by rail, bus, taxi or domestic flights. Keep some Iraqi dinar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Iraq before you go. Register important numbers, keep copies of documents, and use licensed transport in Baghdad. Emergency info: Local emergency · dialing code +964.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +964",
    "callingCode": "+964",
    "aliases": [
      "Iraq",
      "Republic of Iraq"
    ]
  },
  {
    "name": "Ireland",
    "nameKa": "ირლანდია",
    "capital": "Dublin",
    "iso2": "ie",
    "flag": "🇮🇪",
    "language": "English / Irish",
    "currency": "Euro (€)",
    "population": "5.5M",
    "populationRaw": 5458600,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Northern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Ireland",
    "about": "Ireland is a country in Northern Europe, with Dublin as its capital. About 5.5M people live here. Official / major languages include English / Irish, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The first evidence of human presence in Ireland dates to around 34,000 years ago, with further findings dating the presence of Homo sapiens to 7,000 BC. The receding of the ice formed during the Younger Dryas cold phase of the Quaternary, around 9700 BC, heralds the beginning of Prehistoric Ireland, which includes the archaeological periods known as the Mesolithic, the Neolithic from about 4000 BC, and the Copper Age beginning around 2500 BC with the arrival of the Beaker Culture. The Irish Bronze Age proper begins around 2000 BC and ends with the arrival of the Iron Age of the Celtic Hallstatt culture, beginning about 600 BC. The subsequent La Tène culture brought new styles and practices by 300 BC.",
    "culture": "Culture in Ireland is closely tied to English language and everyday life in Dublin. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Ireland classics",
        "desc": "Signature dishes and home-style cooking from Ireland",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Dublin",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Northern Europe ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Dublin",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Dublin",
        "desc": "Capital city and main gateway to Ireland",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Dublin",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Dublin, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Ireland before you go. Register important numbers, keep copies of documents, and use licensed transport in Dublin. Emergency info: Local emergency · dialing code +353.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +353",
    "callingCode": "+353",
    "aliases": [
      "Ireland",
      "Republic of Ireland"
    ]
  },
  {
    "name": "Israel",
    "nameKa": "ისრაელი",
    "capital": "Jerusalem",
    "iso2": "il",
    "flag": "🇮🇱",
    "language": "Arabic / Hebrew",
    "currency": "Israeli new shekel (₪)",
    "population": "10M",
    "populationRaw": 10119400,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Western Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Israel",
    "about": "Israel is a country in Western Asia, with Jerusalem as its capital. About 10M people live here. Official / major languages include Arabic / Hebrew, and everyday transactions typically use the Israeli new shekel (₪). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Israel spans the Southern Levant, from prehistoric African migrations and the Natufian culture to the emergence of Canaanite civilization. During the Iron Age, the kingdoms of Israel and Judah formed, serving as the foundation for Judaism, Christianity, and Islam.",
    "culture": "Culture in Israel is closely tied to Arabic language and everyday life in Jerusalem. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Israel classics",
        "desc": "Signature dishes and home-style cooking from Israel",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Jerusalem",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Asia ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Jerusalem",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Jerusalem",
        "desc": "Capital city and main gateway to Israel",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Jerusalem",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Jerusalem, then continue by rail, bus, taxi or domestic flights. Keep some Israeli new shekel for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Israel before you go. Register important numbers, keep copies of documents, and use licensed transport in Jerusalem. Emergency info: Local emergency · dialing code +972.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +972",
    "callingCode": "+972",
    "aliases": [
      "Israel",
      "State of Israel"
    ]
  },
  {
    "name": "Italy",
    "nameKa": "იტალია",
    "capital": "Rome",
    "iso2": "it",
    "flag": "🇮🇹",
    "language": "Italian",
    "currency": "Euro (€)",
    "population": "59M",
    "populationRaw": 58919230,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Southern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Italy",
    "about": "Italy is a country in Southern Europe, with Rome as its capital. About 59M people live here. Official / major languages include Italian, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "Italy has been inhabited by humans since the Paleolithic. During antiquity, there were many peoples in the Italian peninsula, including Etruscans, Latins, Samnites, Umbri, Cisalpine Gauls, Greeks in Magna Graecia and others. Most significantly, Italy was the cradle of the Roman civilization. Rome was founded as a kingdom in 753 BC and became a republic in 509 BC. The Roman Republic then unified Italy forming a confederation of the Italic peoples and rose to dominate Western Europe, Northern Africa, and the Near East. The Roman Empire, established in 27 BC, ruled the Mediterranean region for centuries, contributing to the development of Western culture, philosophy, science and art.",
    "culture": "Culture in Italy is closely tied to Italian language and everyday life in Rome. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Italy classics",
        "desc": "Signature dishes and home-style cooking from Italy",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Rome",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Europe ingredients and Italian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Rome",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Rome",
        "desc": "Capital city and main gateway to Italy",
        "image": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Rome",
        "image": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Rome, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Italy before you go. Register important numbers, keep copies of documents, and use licensed transport in Rome. Emergency info: Local emergency · dialing code +39.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +39",
    "callingCode": "+39",
    "aliases": [
      "Italy",
      "Italian Republic"
    ]
  },
  {
    "name": "Jamaica",
    "nameKa": "იამაიკა",
    "capital": "Kingston",
    "iso2": "jm",
    "flag": "🇯🇲",
    "language": "English / Jamaican Patois",
    "currency": "Jamaican dollar (J$)",
    "population": "2.8M",
    "populationRaw": 2825544,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Caribbean",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Jamaica",
    "about": "Jamaica is a country in Caribbean, with Kingston as its capital. About 2.8M people live here. Official / major languages include English / Jamaican Patois, and everyday transactions typically use the Jamaican dollar (J$). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The Caribbean Island of Jamaica was initially inhabited in approximately 600 AD or 650 AD by the Redware people, often associated with redware pottery. By roughly 800 AD, a second wave of inhabitants occurred by the Arawak tribes, including the Tainos, prior to the arrival of Columbus in 1494. Early inhabitants of Jamaica named the land \"Xaymaca\", meaning \"land of wood and water\". The Spanish enslaved the Arawak, who were ravaged further by diseases that the Spanish brought with them. Early historians believe that by 1602, the Arawak-speaking Taino tribes were extinct. However, some of the Taino escaped into the forested mountains of the interior, where they mixed with runaway African slaves, and survived free from first Spanish, and then English, rule.",
    "culture": "Culture in Jamaica is closely tied to English language and everyday life in Kingston. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Jamaica classics",
        "desc": "Signature dishes and home-style cooking from Jamaica",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Kingston",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Caribbean ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Kingston",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Kingston",
        "desc": "Capital city and main gateway to Jamaica",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Kingston",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Kingston, then continue by rail, bus, taxi or domestic flights. Keep some Jamaican dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Jamaica before you go. Register important numbers, keep copies of documents, and use licensed transport in Kingston. Emergency info: Local emergency · dialing code +1.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +1",
    "callingCode": "+1",
    "aliases": [
      "Jamaica"
    ]
  },
  {
    "name": "Japan",
    "nameKa": "იაპონია",
    "capital": "Tokyo",
    "iso2": "jp",
    "flag": "🇯🇵",
    "language": "Japanese",
    "currency": "Japanese yen (¥)",
    "population": "123M",
    "populationRaw": 123300000,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Land of Tradition and Innovation",
    "about": "Japan is an island nation in East Asia, renowned worldwide for its unique blend of ancient traditions and cutting-edge modernity. From the neon-lit streets of Tokyo to the serene Zen gardens of Kyoto, Japan offers an extraordinary range of experiences that captivate millions of visitors each year. The country's four distinct seasons — cherry blossoms in spring, festivals in summer, red foliage in autumn, and snow-capped mountains in winter — each offer their own spectacular beauty.",
    "history": "Japan’s history stretches from ancient imperial courts and samurai eras to rapid modernization after the Meiji Restoration. Today’s temples, castles, and museums sit alongside futuristic cities — a living timeline travelers can explore from Kyoto to Tokyo.",
    "culture": "Japanese culture balances respect, craftsmanship, and a deep appreciation for nature and aesthetics — from tea ceremony and seasonal festivals to contemporary design, anime, and street fashion.",
    "foods": [
      {
        "name": "Sushi",
        "desc": "Fresh fish over seasoned rice — a Japanese art form",
        "price": "¥3,000–8,000",
        "image": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Ramen",
        "desc": "Rich broth noodles with toppings — Tokyo style",
        "price": "¥800–1,500",
        "image": "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Tempura",
        "desc": "Light battered seafood and vegetables",
        "price": "¥1,200–3,000",
        "image": "https://images.unsplash.com/photo-1606502973842-f64bc2785fe5?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Wagyu",
        "desc": "World-renowned marbled beef",
        "price": "¥8,000–25,000",
        "image": "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Tokyo",
        "desc": "Neon streets meet temples and world-class dining",
        "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Kyoto",
        "desc": "Ancient temples, geisha districts, bamboo forests",
        "image": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=400&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Mount Fuji",
        "desc": "Japan’s iconic peak and surrounding lakes",
        "image": "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=600&h=400&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Osaka",
        "desc": "Food capital with vibrant street life",
        "image": "https://images.unsplash.com/photo-1589452271712-64b8a66c7b71?w=600&h=400&fit=crop&auto=format",
        "rating": 4.7
      }
    ],
    "transport": "Most international travelers arrive via Tokyo, then continue by rail, bus, taxi or domestic flights. Keep some Japanese yen for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Japan is widely considered one of the world’s safest destinations, with excellent healthcare and reliable public transport. Emergency numbers: Police 110 · Ambulance/Fire 119.",
    "bestSeason": "Oct–Apr",
    "emergency": "110 (Police) / 119 (Ambulance & Fire)",
    "callingCode": "+81",
    "aliases": [
      "Japan"
    ]
  },
  {
    "name": "Jordan",
    "nameKa": "იორდანია",
    "capital": "Amman",
    "iso2": "jo",
    "flag": "🇯🇴",
    "language": "Arabic",
    "currency": "Jordanian dinar (ا.د)",
    "population": "12M",
    "populationRaw": 11734000,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Western Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Jordan",
    "about": "Jordan is a country in Western Asia, with Amman as its capital. About 12M people live here. Official / major languages include Arabic, and everyday transactions typically use the Jordanian dinar (ا.د). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Jordan refers to the history of the Hashemite Kingdom of Jordan and the background period of the Emirate of Transjordan under the British Mandate as well as the general history of the region of Transjordan.",
    "culture": "Culture in Jordan is closely tied to Arabic language and everyday life in Amman. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Jordan classics",
        "desc": "Signature dishes and home-style cooking from Jordan",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Amman",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Asia ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Amman",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Amman",
        "desc": "Capital city and main gateway to Jordan",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Amman",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Amman, then continue by rail, bus, taxi or domestic flights. Keep some Jordanian dinar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Jordan before you go. Register important numbers, keep copies of documents, and use licensed transport in Amman. Emergency info: Local emergency · dialing code +962.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +962",
    "callingCode": "+962",
    "aliases": [
      "Jordan",
      "Hashemite Kingdom of Jordan"
    ]
  },
  {
    "name": "Kazakhstan",
    "nameKa": "ყაზახეთი",
    "capital": "Astana",
    "iso2": "kz",
    "flag": "🇰🇿",
    "language": "Kazakh / Russian",
    "currency": "Kazakhstani tenge (лв)",
    "population": "20M",
    "populationRaw": 20407844,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Central Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Kazakhstan",
    "about": "Kazakhstan is a country in Central Asia, with Astana as its capital. About 20M people live here. Official / major languages include Kazakh / Russian, and everyday transactions typically use the Kazakhstani tenge (лв). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "Kazakhstan, the largest country fully within the Eurasian Steppe, has been a historical crossroads and home to numerous different peoples, states and empires throughout history. Throughout history, peoples on the territory of modern Kazakhstan used to have a nomadic lifestyle, which developed and influenced Kazakh culture.",
    "culture": "Culture in Kazakhstan is closely tied to Kazakh language and everyday life in Astana. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Kazakhstan classics",
        "desc": "Signature dishes and home-style cooking from Kazakhstan",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Astana",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Central Asia ingredients and Kazakh culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Astana",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Astana",
        "desc": "Capital city and main gateway to Kazakhstan",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Astana",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Astana, then continue by rail, bus, taxi or domestic flights. Keep some Kazakhstani tenge for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Kazakhstan before you go. Register important numbers, keep copies of documents, and use licensed transport in Astana. Emergency info: Local emergency · dialing code +7.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +7",
    "callingCode": "+7",
    "aliases": [
      "Kazakhstan",
      "Republic of Kazakhstan"
    ]
  },
  {
    "name": "Kenya",
    "nameKa": "კენია",
    "capital": "Nairobi",
    "iso2": "ke",
    "flag": "🇰🇪",
    "language": "English / Swahili",
    "currency": "Kenyan shilling (KSh)",
    "population": "53M",
    "populationRaw": 53330978,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Kenya",
    "about": "Kenya is a country in Eastern Africa, with Nairobi as its capital. About 53M people live here. Official / major languages include English / Swahili, and everyday transactions typically use the Kenyan shilling (KSh). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "A part of Eastern Africa, the territory of what is known as Kenya has seen human habitation since the beginning of the Lower Paleolithic. The Bantu expansion from a West African centre of dispersal reached the area by the 1st millennium AD. With the borders of the modern state at the crossroads of the Bantu, Nilo-Saharan and Afro-Asiatic ethno-linguistic areas of Africa, Kenya is a multi-ethnic state. The Wanga Kingdom was formally established in the late 17th century. The Kingdom covered from the Jinja in Uganda to Naivasha in the East of Kenya. This is the first time the Wanga people and Luhya tribe were united and led by a centralized leader, a king, known as the Nabongo.",
    "culture": "Culture in Kenya is closely tied to English language and everyday life in Nairobi. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Kenya classics",
        "desc": "Signature dishes and home-style cooking from Kenya",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Nairobi",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Africa ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Nairobi",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Nairobi",
        "desc": "Capital city and main gateway to Kenya",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Nairobi",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Nairobi, then continue by rail, bus, taxi or domestic flights. Keep some Kenyan shilling for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Kenya before you go. Register important numbers, keep copies of documents, and use licensed transport in Nairobi. Emergency info: Local emergency · dialing code +254.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +254",
    "callingCode": "+254",
    "aliases": [
      "Kenya",
      "Republic of Kenya"
    ]
  },
  {
    "name": "Kiribati",
    "nameKa": "კირიბატი",
    "capital": "Tarawa",
    "iso2": "ki",
    "flag": "🇰🇮",
    "language": "English / Gilbertese",
    "currency": "Australian dollar ($)",
    "population": "121K",
    "populationRaw": 120740,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
    "region": "Oceania",
    "subregion": "Micronesia",
    "tags": [
      "Beach",
      "Nature",
      "Adventure"
    ],
    "tagline": "Discover Kiribati",
    "about": "Kiribati is a country in Micronesia, with Tarawa as its capital. About 121K people live here. Official / major languages include English / Gilbertese, and everyday transactions typically use the Australian dollar ($). Travelers visit for beach, nature, adventure experiences — cities, landscapes, food, and local culture.",
    "history": "The islands which now form the Republic of Kiribati have been inhabited variously. The Gilbert Islands may have been inhabited for three or four millennia, and certainly for several hundred years. The Phoenix and Line islands, in contrast, seem to have only been inhabited intermittently, because any intended long-lived human inhabitations have been thwarted by droughts and such like. Regarding the Gilberts, the initial Austronesian peoples’ population, which remains the overwhelming majority today, was visited by Polynesian and Melanesian invaders before the first European sailors visited the islands in the 17th century. For much of the subsequent period, the islands were ruled as part of the British Empire. The country gained its independence in 1979 and has since been known as Kiribati.",
    "culture": "Culture in Kiribati is closely tied to English language and everyday life in Tarawa. Expect festivals, markets, arts, and hospitality traditions that reflect Oceania influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Kiribati classics",
        "desc": "Signature dishes and home-style cooking from Kiribati",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Tarawa",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Micronesia ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Tarawa",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Tarawa",
        "desc": "Capital city and main gateway to Kiribati",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Tarawa",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Tarawa, then continue by rail, bus, taxi or domestic flights. Keep some Australian dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Kiribati before you go. Register important numbers, keep copies of documents, and use licensed transport in Tarawa. Emergency info: Local emergency · dialing code +686.",
    "bestSeason": "Nov–Apr",
    "emergency": "Local emergency · dialing code +686",
    "callingCode": "+686",
    "aliases": [
      "Kiribati",
      "Independent and Sovereign Republic of Kiribati"
    ]
  },
  {
    "name": "North Korea",
    "nameKa": "ჩრდილოეთ კორეა",
    "capital": "Pyongyang",
    "iso2": "kp",
    "flag": "🇰🇵",
    "language": "Korean",
    "currency": "North Korean Won (₩)",
    "population": "26M",
    "populationRaw": 25950000,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover North Korea",
    "about": "North Korea is a country in Eastern Asia, with Pyongyang as its capital. About 26M people live here. Official / major languages include Korean, and everyday transactions typically use the North Korean Won (₩). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of North Korea began with the end of World War II in 1945. The end of the Japanese occupation of Korea led to the division of Korea at the 38th parallel, with the Soviet Union occupying the north, and the United States occupying the south. The Soviet Union and the United States failed to agree on a way to unify the country, and in 1948, they established two separate governments — the Soviet-aligned Democratic People's Republic of Korea and the American-aligned Republic of Korea — each claiming to be the legitimate government of all of Korea.",
    "culture": "Culture in North Korea is closely tied to Korean language and everyday life in Pyongyang. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "North Korea classics",
        "desc": "Signature dishes and home-style cooking from North Korea",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Pyongyang",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Asia ingredients and Korean culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Pyongyang",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Pyongyang",
        "desc": "Capital city and main gateway to North Korea",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Pyongyang",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Pyongyang, then continue by rail, bus, taxi or domestic flights. Keep some North Korean Won for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for North Korea before you go. Register important numbers, keep copies of documents, and use licensed transport in Pyongyang. Emergency info: Local emergency · dialing code +850.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +850",
    "callingCode": "+850",
    "aliases": [
      "North Korea",
      "Dem. Rep. Korea",
      "Korea, Democratic People's Republic of",
      "Democratic People's Republic of Korea"
    ]
  },
  {
    "name": "South Korea",
    "nameKa": "სამხრეთ კორეა",
    "capital": "Seoul",
    "iso2": "kr",
    "flag": "🇰🇷",
    "language": "Korean",
    "currency": "Won (₩)",
    "population": "51M",
    "populationRaw": 51159889,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1538481199705-c710c4e965ba?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover South Korea",
    "about": "South Korea is a country in Eastern Asia, with Seoul as its capital. About 51M people live here. Official / major languages include Korean, and everyday transactions typically use the Won (₩). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of South Korea begins with the Japanese surrender on 2 September 1945. At that time, South Korea and North Korea were divided, despite being the same people and on the same peninsula. In 1950, the Korean War broke out. North Korea overran South Korea until US-led UN forces intervened. At the end of the war in 1953, the border between South and North remained largely similar. Tensions between the two sides continued. South Korea alternated between dictatorship and liberal democracy. It underwent substantial economic development.",
    "culture": "Culture in South Korea is closely tied to Korean language and everyday life in Seoul. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "South Korea classics",
        "desc": "Signature dishes and home-style cooking from South Korea",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Seoul",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Asia ingredients and Korean culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Seoul",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Seoul",
        "desc": "Capital city and main gateway to South Korea",
        "image": "https://images.unsplash.com/photo-1538481199705-c710c4e965ba?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Seoul",
        "image": "https://images.unsplash.com/photo-1538481199705-c710c4e965ba?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1538481199705-c710c4e965ba?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1538481199705-c710c4e965ba?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Seoul, then continue by rail, bus, taxi or domestic flights. Keep some Won for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for South Korea before you go. Register important numbers, keep copies of documents, and use licensed transport in Seoul. Emergency info: Local emergency · dialing code +82.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +82",
    "callingCode": "+82",
    "aliases": [
      "South Korea",
      "Korea",
      "Korea, Republic of",
      "Republic of Korea"
    ]
  },
  {
    "name": "Kuwait",
    "nameKa": "ქუვეითი",
    "capital": "Kuwait City",
    "iso2": "kw",
    "flag": "🇰🇼",
    "language": "Arabic",
    "currency": "Kuwaiti dinar (ك.د)",
    "population": "4.9M",
    "populationRaw": 4881254,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Western Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Kuwait",
    "about": "Kuwait is a country in Western Asia, with Kuwait City as its capital. About 4.9M people live here. Official / major languages include Arabic, and everyday transactions typically use the Kuwaiti dinar (ك.د). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "Kuwait is a sovereign state in Western Asia located at the head of the Persian Gulf. The geographical region of Kuwait has been occupied by humans since antiquity, particularly due to its strategic location at the head of the Persian Gulf. In the pre-oil era, Kuwait contained a regional trade port. In the modern era, Kuwait is best known for the Persian Gulf War (1990–1991).",
    "culture": "Culture in Kuwait is closely tied to Arabic language and everyday life in Kuwait City. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Kuwait classics",
        "desc": "Signature dishes and home-style cooking from Kuwait",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Kuwait City",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Asia ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Kuwait City",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Kuwait City",
        "desc": "Capital city and main gateway to Kuwait",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Kuwait City",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via Kuwait City, then continue by rail, bus, taxi or domestic flights. Keep some Kuwaiti dinar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Kuwait before you go. Register important numbers, keep copies of documents, and use licensed transport in Kuwait City. Emergency info: Local emergency · dialing code +965.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +965",
    "callingCode": "+965",
    "aliases": [
      "Kuwait",
      "State of Kuwait"
    ]
  },
  {
    "name": "Kyrgyzstan",
    "nameKa": "ყირგიზეთი",
    "capital": "Bishkek",
    "iso2": "kg",
    "flag": "🇰🇬",
    "language": "Kyrgyz / Russian",
    "currency": "Kyrgyzstani som (лв)",
    "population": "7.3M",
    "populationRaw": 7281800,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Central Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Kyrgyzstan",
    "about": "Kyrgyzstan is a country in Central Asia, with Bishkek as its capital. About 7.3M people live here. Official / major languages include Kyrgyz / Russian, and everyday transactions typically use the Kyrgyzstani som (лв). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of the Kyrgyz people and the land now called Kyrgyzstan goes back more than 3,000 years. Although geographically isolated by its mountainous location, it had an important role as part of the historical Silk Road trade route. Turkic nomads, who trace their ancestry to many Turkic states such as the First and Second Turkic Khaganates, have inhabited the country throughout its history. In the 13th century, Kyrgyzstan was conquered by the Mongols; subsequently it regained independence but was invaded by Kalmyks, Manchus, and Uzbeks. In 1876, it became part of the Russian Empire, remaining in the USSR as the Kirghiz Soviet Socialist Republic after the Russian Revolution. Following Mikhail Gorbachev's democratic reforms in the USSR, in 1990 pro-independence candidate Askar Akayev was elected president of the SSR. On 31 August 1991, Kyrgyzstan declared independence from Moscow, and a democratic government was subsequently established.",
    "culture": "Culture in Kyrgyzstan is closely tied to Kyrgyz language and everyday life in Bishkek. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Kyrgyzstan classics",
        "desc": "Signature dishes and home-style cooking from Kyrgyzstan",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Bishkek",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Central Asia ingredients and Kyrgyz culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Bishkek",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Bishkek",
        "desc": "Capital city and main gateway to Kyrgyzstan",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Bishkek",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via Bishkek, then continue by rail, bus, taxi or domestic flights. Keep some Kyrgyzstani som for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Kyrgyzstan before you go. Register important numbers, keep copies of documents, and use licensed transport in Bishkek. Emergency info: Local emergency · dialing code +996.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +996",
    "callingCode": "+996",
    "aliases": [
      "Kyrgyzstan",
      "Kyrgyz Republic"
    ]
  },
  {
    "name": "Laos",
    "nameKa": "ლაოსი",
    "capital": "Vientiane",
    "iso2": "la",
    "flag": "🇱🇦",
    "language": "Lao",
    "currency": "Lao kip (₭)",
    "population": "7.6M",
    "populationRaw": 7647000,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Laos",
    "about": "Laos is a country in South-Eastern Asia, with Vientiane as its capital. About 7.6M people live here. Official / major languages include Lao, and everyday transactions typically use the Lao kip (₭). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "Evidence of modern human presence in the northern and central highlands of Indochina, which constitute the territories of what later is Laos, dates back to the Lower Paleolithic. These earliest human migrants are Austronesians—associated with the Hoabinhian culture—and have populated the highlands and the interior, less accessible regions of Laos and all of Southeast Asia. The subsequent Austroasiatic and Austronesian marine migration waves affected landlocked Laos, and direct Chinese and Indian cultural contact had a greater impact on the country.",
    "culture": "Culture in Laos is closely tied to Lao language and everyday life in Vientiane. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Laos classics",
        "desc": "Signature dishes and home-style cooking from Laos",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Vientiane",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South-Eastern Asia ingredients and Lao culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Vientiane",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Vientiane",
        "desc": "Capital city and main gateway to Laos",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Vientiane",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Vientiane, then continue by rail, bus, taxi or domestic flights. Keep some Lao kip for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Laos before you go. Register important numbers, keep copies of documents, and use licensed transport in Vientiane. Emergency info: Local emergency · dialing code +856.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +856",
    "callingCode": "+856",
    "aliases": [
      "Laos",
      "Lao PDR",
      "Lao People's Democratic Republic"
    ]
  },
  {
    "name": "Latvia",
    "nameKa": "ლატვია",
    "capital": "Riga",
    "iso2": "lv",
    "flag": "🇱🇻",
    "language": "Latvian",
    "currency": "Euro (€)",
    "population": "1.8M",
    "populationRaw": 1830400,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Northern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Latvia",
    "about": "Latvia is a country in Northern Europe, with Riga as its capital. About 1.8M people live here. Official / major languages include Latvian, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Latvia began around 9000 BC with the end of the last glacial period in northern Europe. Ancient Baltic peoples arrived in the area during the second millennium BC, and four distinct tribal realms in Latvia's territory were identifiable towards the end of the first millennium AD. Latvia's principal river Daugava, was at the head of an important trade route from the Baltic region through Russia into southern Europe and the Middle East that was used by the Vikings and later Nordic and German traders.",
    "culture": "Culture in Latvia is closely tied to Latvian language and everyday life in Riga. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Latvia classics",
        "desc": "Signature dishes and home-style cooking from Latvia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Riga",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Northern Europe ingredients and Latvian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Riga",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Riga",
        "desc": "Capital city and main gateway to Latvia",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Riga",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Riga, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Latvia before you go. Register important numbers, keep copies of documents, and use licensed transport in Riga. Emergency info: Local emergency · dialing code +371.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +371",
    "callingCode": "+371",
    "aliases": [
      "Latvia",
      "Republic of Latvia"
    ]
  },
  {
    "name": "Lebanon",
    "nameKa": "ლიბანი",
    "capital": "Beirut",
    "iso2": "lb",
    "flag": "🇱🇧",
    "language": "Arabic / French",
    "currency": "Lebanese pound (£)",
    "population": "5.5M",
    "populationRaw": 5490000,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Western Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Lebanon",
    "about": "Lebanon is a country in Western Asia, with Beirut as its capital. About 5.5M people live here. Official / major languages include Arabic / French, and everyday transactions typically use the Lebanese pound (£). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Lebanon covers the history of the modern Republic of Lebanon and the earlier emergence of Greater Lebanon under the French Mandate for Syria and the Lebanon, as well as the previous history of the region, covered by the modern state.",
    "culture": "Culture in Lebanon is closely tied to Arabic language and everyday life in Beirut. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Lebanon classics",
        "desc": "Signature dishes and home-style cooking from Lebanon",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Beirut",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Asia ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Beirut",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Beirut",
        "desc": "Capital city and main gateway to Lebanon",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Beirut",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Beirut, then continue by rail, bus, taxi or domestic flights. Keep some Lebanese pound for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Lebanon before you go. Register important numbers, keep copies of documents, and use licensed transport in Beirut. Emergency info: Local emergency · dialing code +961.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +961",
    "callingCode": "+961",
    "aliases": [
      "Lebanon",
      "Lebanese Republic"
    ]
  },
  {
    "name": "Lesotho",
    "nameKa": "ლესოთო",
    "capital": "Maseru",
    "iso2": "ls",
    "flag": "🇱🇸",
    "language": "English / Sotho",
    "currency": "Lesotho loti (L)",
    "population": "2.1M",
    "populationRaw": 2116427,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Southern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Lesotho",
    "about": "Lesotho is a country in Southern Africa, with Maseru as its capital. About 2.1M people live here. Official / major languages include English / Sotho, and everyday transactions typically use the Lesotho loti (L). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of people living in the area now known as Lesotho goes back thousands of years. Present Lesotho emerged as a single polity under King Moshoeshoe I in 1822. Under Moshoeshoe I, Basotho joined other clans in their struggle against the Lifaqane associated with famine and the reign of Shaka Zulu from 1818 to 1828.",
    "culture": "Culture in Lesotho is closely tied to English language and everyday life in Maseru. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Lesotho classics",
        "desc": "Signature dishes and home-style cooking from Lesotho",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Maseru",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Africa ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Maseru",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Maseru",
        "desc": "Capital city and main gateway to Lesotho",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Maseru",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Maseru, then continue by rail, bus, taxi or domestic flights. Keep some Lesotho loti for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Lesotho before you go. Register important numbers, keep copies of documents, and use licensed transport in Maseru. Emergency info: Local emergency · dialing code +266.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +266",
    "callingCode": "+266",
    "aliases": [
      "Lesotho",
      "Kingdom of Lesotho"
    ]
  },
  {
    "name": "Liberia",
    "nameKa": "ლიბერია",
    "capital": "Monrovia",
    "iso2": "lr",
    "flag": "🇱🇷",
    "language": "English",
    "currency": "Liberian dollar ($)",
    "population": "5.2M",
    "populationRaw": 5248621,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Western Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Liberia",
    "about": "Liberia is a country in Western Africa, with Monrovia as its capital. About 5.2M people live here. Official / major languages include English, and everyday transactions typically use the Liberian dollar ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Liberia is a country in West Africa founded by free people of color from the United States. The emigration of African Americans, both freeborn and recently emancipated, was funded and organized by the American Colonization Society (ACS). The mortality rate of these settlers was the highest among settlements reported with modern recordkeeping. Of the 4,571 emigrants who arrived in Liberia between 1820 and 1843, only 1,819 survived (39.8%).",
    "culture": "Culture in Liberia is closely tied to English language and everyday life in Monrovia. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Liberia classics",
        "desc": "Signature dishes and home-style cooking from Liberia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Monrovia",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Africa ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Monrovia",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Monrovia",
        "desc": "Capital city and main gateway to Liberia",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Monrovia",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Monrovia, then continue by rail, bus, taxi or domestic flights. Keep some Liberian dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Liberia before you go. Register important numbers, keep copies of documents, and use licensed transport in Monrovia. Emergency info: Local emergency · dialing code +231.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +231",
    "callingCode": "+231",
    "aliases": [
      "Liberia",
      "Republic of Liberia"
    ]
  },
  {
    "name": "Libya",
    "nameKa": "ლიბია",
    "capital": "Tripolis",
    "iso2": "ly",
    "flag": "🇱🇾",
    "language": "Arabic",
    "currency": "Libyan dinar (د.ل)",
    "population": "7.5M",
    "populationRaw": 7459000,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Northern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Libya",
    "about": "Libya is a country in Northern Africa, with Tripolis as its capital. About 7.5M people live here. Official / major languages include Arabic, and everyday transactions typically use the Libyan dinar (د.ل). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Libya's history involves its rich mix of ethnic groups, including the indigenous Berbers/Amazigh people. Amazigh have been present throughout the entire history of the country. For most of its history, Libya has been subjected to varying degrees of foreign control, from Europe, Asia, and Africa.",
    "culture": "Culture in Libya is closely tied to Arabic language and everyday life in Tripolis. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Libya classics",
        "desc": "Signature dishes and home-style cooking from Libya",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Tripolis",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Northern Africa ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Tripolis",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Tripolis",
        "desc": "Capital city and main gateway to Libya",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Tripolis",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Tripolis, then continue by rail, bus, taxi or domestic flights. Keep some Libyan dinar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Libya before you go. Register important numbers, keep copies of documents, and use licensed transport in Tripolis. Emergency info: Local emergency · dialing code +218.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +218",
    "callingCode": "+218",
    "aliases": [
      "Libya",
      "State of Libya"
    ]
  },
  {
    "name": "Liechtenstein",
    "nameKa": "ლიხტენშტაინი",
    "capital": "Vaduz",
    "iso2": "li",
    "flag": "🇱🇮",
    "language": "German",
    "currency": "Swiss franc (CHf)",
    "population": "41K",
    "populationRaw": 40900,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Western Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Liechtenstein",
    "about": "Liechtenstein is a country in Western Europe, with Vaduz as its capital. About 41K people live here. Official / major languages include German, and everyday transactions typically use the Swiss franc (CHf). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "Political identity came to the territory now occupied by the Principality of Liechtenstein in 814, with the formation of the subcountry of Lower Rhætia. Liechtenstein's borders have remained unchanged since 1434, when the Rhine established the border between the Holy Roman Empire and the Swiss cantons.",
    "culture": "Culture in Liechtenstein is closely tied to German language and everyday life in Vaduz. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Liechtenstein classics",
        "desc": "Signature dishes and home-style cooking from Liechtenstein",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Vaduz",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Europe ingredients and German culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Vaduz",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Vaduz",
        "desc": "Capital city and main gateway to Liechtenstein",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Vaduz",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via Vaduz, then continue by rail, bus, taxi or domestic flights. Keep some Swiss franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Liechtenstein before you go. Register important numbers, keep copies of documents, and use licensed transport in Vaduz. Emergency info: Local emergency · dialing code +423.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +423",
    "callingCode": "+423",
    "aliases": [
      "Liechtenstein",
      "Principality of Liechtenstein"
    ]
  },
  {
    "name": "Lithuania",
    "nameKa": "ლიეტუვა",
    "capital": "Vilnius",
    "iso2": "lt",
    "flag": "🇱🇹",
    "language": "Lithuanian",
    "currency": "Euro (€)",
    "population": "2.9M",
    "populationRaw": 2894548,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Northern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Lithuania",
    "about": "Lithuania is a country in Northern Europe, with Vilnius as its capital. About 2.9M people live here. Official / major languages include Lithuanian, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Lithuania dates back to settlements founded about 10,000 years ago, but the first written record of the name for the country dates back to 1009 AD. Lithuanians, one of the Baltic peoples, later conquered neighbouring lands and established the Grand Duchy of Lithuania in the 13th century. The Grand Duchy was a successful and lasting warrior state. It remained fiercely independent and was one of the last areas of Europe to adopt Christianity. A formidable power, it became the largest state in Europe in the 15th century spread from the Baltic Sea to the Black Sea, through the conquest of large groups of East Slavs who resided in Ruthenia.",
    "culture": "Culture in Lithuania is closely tied to Lithuanian language and everyday life in Vilnius. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Lithuania classics",
        "desc": "Signature dishes and home-style cooking from Lithuania",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Vilnius",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Northern Europe ingredients and Lithuanian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Vilnius",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Vilnius",
        "desc": "Capital city and main gateway to Lithuania",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Vilnius",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Vilnius, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Lithuania before you go. Register important numbers, keep copies of documents, and use licensed transport in Vilnius. Emergency info: Local emergency · dialing code +370.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +370",
    "callingCode": "+370",
    "aliases": [
      "Lithuania",
      "Republic of Lithuania"
    ]
  },
  {
    "name": "Luxembourg",
    "nameKa": "ლუქსემბურგი",
    "capital": "Luxembourg",
    "iso2": "lu",
    "flag": "🇱🇺",
    "language": "German / French / Luxembourgish",
    "currency": "Euro (€)",
    "population": "682K",
    "populationRaw": 681973,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Western Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Luxembourg",
    "about": "Luxembourg is a country in Western Europe, with Luxembourg as its capital. About 682K people live here. Official / major languages include German / French / Luxembourgish, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Luxembourg consists of the history of the country of Luxembourg and its geographical area.",
    "culture": "Culture in Luxembourg is closely tied to German language and everyday life in Luxembourg. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Luxembourg classics",
        "desc": "Signature dishes and home-style cooking from Luxembourg",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Luxembourg",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Europe ingredients and German culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Luxembourg",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Luxembourg",
        "desc": "Capital city and main gateway to Luxembourg",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Luxembourg",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Luxembourg, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Luxembourg before you go. Register important numbers, keep copies of documents, and use licensed transport in Luxembourg. Emergency info: Local emergency · dialing code +352.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +352",
    "callingCode": "+352",
    "aliases": [
      "Luxembourg",
      "Grand Duchy of Luxembourg"
    ]
  },
  {
    "name": "Madagascar",
    "nameKa": "მადაგასკარი",
    "capital": "Antananarivo",
    "iso2": "mg",
    "flag": "🇲🇬",
    "language": "French / Malagasy",
    "currency": "Malagasy ariary (Ar)",
    "population": "32M",
    "populationRaw": 31727042,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Madagascar",
    "about": "Madagascar is a country in Eastern Africa, with Antananarivo as its capital. About 32M people live here. Official / major languages include French / Malagasy, and everyday transactions typically use the Malagasy ariary (Ar). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The History of Madagascar started from the ancient supercontinent of Pangaea, containing amongst others the African continent and the Indian subcontinent, and by the island's late colonization by human settlers from South Borneo, Indonesia and from East Africa. These two factors facilitated the evolution and survival of thousands of endemic plant and animal species, some of which have gone extinct or are currently threatened with extinction. Trade in the Indian Ocean at the time of first colonization of Madagascar was dominated by Indonesian ships, probably of Borobudur ship and K'un-lun po types.",
    "culture": "Culture in Madagascar is closely tied to French language and everyday life in Antananarivo. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Madagascar classics",
        "desc": "Signature dishes and home-style cooking from Madagascar",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Antananarivo",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Africa ingredients and French culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Antananarivo",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Antananarivo",
        "desc": "Capital city and main gateway to Madagascar",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Antananarivo",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Antananarivo, then continue by rail, bus, taxi or domestic flights. Keep some Malagasy ariary for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Madagascar before you go. Register important numbers, keep copies of documents, and use licensed transport in Antananarivo. Emergency info: Local emergency · dialing code +261.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +261",
    "callingCode": "+261",
    "aliases": [
      "Madagascar",
      "Republic of Madagascar"
    ]
  },
  {
    "name": "Malawi",
    "nameKa": "მალავი",
    "capital": "Lilongwe",
    "iso2": "mw",
    "flag": "🇲🇼",
    "language": "English / Chewa",
    "currency": "Malawian kwacha (MK)",
    "population": "21M",
    "populationRaw": 20734262,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Malawi",
    "about": "Malawi is a country in Eastern Africa, with Lilongwe as its capital. About 21M people live here. Official / major languages include English / Chewa, and everyday transactions typically use the Malawian kwacha (MK). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Malawi covers the area of present-day Malawi. The region was once part of the Maravi Empire. In colonial times, the territory was ruled by the British, under whose control it was known first as British Central Africa and later Nyasaland. It became part of the Federation of Rhodesia and Nyasaland. The country achieved full independence, as Malawi, in 1964. After independence, Malawi was ruled as a one-party state under Hastings Banda until 1994.",
    "culture": "Culture in Malawi is closely tied to English language and everyday life in Lilongwe. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Malawi classics",
        "desc": "Signature dishes and home-style cooking from Malawi",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Lilongwe",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Africa ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Lilongwe",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Lilongwe",
        "desc": "Capital city and main gateway to Malawi",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Lilongwe",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Lilongwe, then continue by rail, bus, taxi or domestic flights. Keep some Malawian kwacha for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Malawi before you go. Register important numbers, keep copies of documents, and use licensed transport in Lilongwe. Emergency info: Local emergency · dialing code +265.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +265",
    "callingCode": "+265",
    "aliases": [
      "Malawi",
      "Republic of Malawi"
    ]
  },
  {
    "name": "Malaysia",
    "nameKa": "მალაიზია",
    "capital": "Kuala Lumpur",
    "iso2": "my",
    "flag": "🇲🇾",
    "language": "English / Malay",
    "currency": "Malaysian ringgit (RM)",
    "population": "34M",
    "populationRaw": 34231700,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Malaysia",
    "about": "Malaysia is a country in South-Eastern Asia, with Kuala Lumpur as its capital. About 34M people live here. Official / major languages include English / Malay, and everyday transactions typically use the Malaysian ringgit (RM). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "Malaysia is a modern concept, created in the second half of the 20th century. However, contemporary Malaysia regards the entire history of Malaya and Borneo, spanning thousands of years back to prehistoric times, as its own history. Significant events in Malaysia's modern history include the formation of the federation, the separation of Singapore, the racial riots, Mahathir Mohamad's era of modernisation, and the nation's political upheavals of the late 20th and early 21st centuries.",
    "culture": "Culture in Malaysia is closely tied to English language and everyday life in Kuala Lumpur. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Malaysia classics",
        "desc": "Signature dishes and home-style cooking from Malaysia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Kuala Lumpur",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South-Eastern Asia ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Kuala Lumpur",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Kuala Lumpur",
        "desc": "Capital city and main gateway to Malaysia",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Kuala Lumpur",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Kuala Lumpur, then continue by rail, bus, taxi or domestic flights. Keep some Malaysian ringgit for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Malaysia before you go. Register important numbers, keep copies of documents, and use licensed transport in Kuala Lumpur. Emergency info: Local emergency · dialing code +60.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +60",
    "callingCode": "+60",
    "aliases": [
      "Malaysia"
    ]
  },
  {
    "name": "Maldives",
    "nameKa": "მალდივები",
    "capital": "Male",
    "iso2": "mv",
    "flag": "🇲🇻",
    "language": "Maldivian",
    "currency": "Maldivian rufiyaa (Rf)",
    "population": "515K",
    "populationRaw": 515132,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Southern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Maldives",
    "about": "Maldives is a country in Southern Asia, with Male as its capital. About 515K people live here. Official / major languages include Maldivian, and everyday transactions typically use the Maldivian rufiyaa (Rf). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of the Maldives is intertwined with the history of the broader Indian subcontinent and surrounding areas in South Asia and the Indian Ocean. The Maldives is formed of 26 natural atolls, comprising 1,194 islands.",
    "culture": "Culture in Maldives is closely tied to Maldivian language and everyday life in Male. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Maldives classics",
        "desc": "Signature dishes and home-style cooking from Maldives",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Male",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Asia ingredients and Maldivian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Male",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Male",
        "desc": "Capital city and main gateway to Maldives",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Male",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Male, then continue by rail, bus, taxi or domestic flights. Keep some Maldivian rufiyaa for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Maldives before you go. Register important numbers, keep copies of documents, and use licensed transport in Male. Emergency info: Local emergency · dialing code +960.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +960",
    "callingCode": "+960",
    "aliases": [
      "Maldives",
      "Republic of the Maldives"
    ]
  },
  {
    "name": "Mali",
    "nameKa": "მალი",
    "capital": "Bamako",
    "iso2": "ml",
    "flag": "🇲🇱",
    "language": "French",
    "currency": "West African CFA franc (CFA)",
    "population": "22M",
    "populationRaw": 22395489,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Western Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Mali",
    "about": "Mali is a country in Western Africa, with Bamako as its capital. About 22M people live here. Official / major languages include French, and everyday transactions typically use the West African CFA franc (CFA). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Mali can be divided into several major periods:Pre-Imperial Mali The Mali Empire The Songhai Empire",
    "culture": "Culture in Mali is closely tied to French language and everyday life in Bamako. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Mali classics",
        "desc": "Signature dishes and home-style cooking from Mali",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Bamako",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Africa ingredients and French culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Bamako",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Bamako",
        "desc": "Capital city and main gateway to Mali",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Bamako",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Bamako, then continue by rail, bus, taxi or domestic flights. Keep some West African CFA franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Mali before you go. Register important numbers, keep copies of documents, and use licensed transport in Bamako. Emergency info: Local emergency · dialing code +223.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +223",
    "callingCode": "+223",
    "aliases": [
      "Mali",
      "Republic of Mali"
    ]
  },
  {
    "name": "Malta",
    "nameKa": "მალტა",
    "capital": "Valletta",
    "iso2": "mt",
    "flag": "🇲🇹",
    "language": "English / Maltese",
    "currency": "Euro (€)",
    "population": "574K",
    "populationRaw": 574250,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Southern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Malta",
    "about": "Malta is a country in Southern Europe, with Valletta as its capital. About 574K people live here. Official / major languages include English / Maltese, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "Malta has been inhabited since 6400 BC initially by Mesolithic hunter gatherers, who were replaced by Neolithic farmers from Sicily around 5400 BC. These farmers practiced mixed farming after clearing most of the existing conifer forest that dominated the islands, but their agricultural methods degraded the soil until the islands became uninhabitable. The islands were repopulated around 3850 BC by a civilization that at its peak built the Megalithic Temples, which today are among the oldest surviving buildings in the world. Their civilization collapsed in around 2350 BC; the islands were repopulated by Bronze Age people soon afterwards.",
    "culture": "Culture in Malta is closely tied to English language and everyday life in Valletta. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Malta classics",
        "desc": "Signature dishes and home-style cooking from Malta",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Valletta",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Europe ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Valletta",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Valletta",
        "desc": "Capital city and main gateway to Malta",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Valletta",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Valletta, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Malta before you go. Register important numbers, keep copies of documents, and use licensed transport in Valletta. Emergency info: Local emergency · dialing code +356.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +356",
    "callingCode": "+356",
    "aliases": [
      "Malta",
      "Republic of Malta"
    ]
  },
  {
    "name": "Marshall Islands",
    "nameKa": "მარშალის კუნძულები",
    "capital": "Majuro",
    "iso2": "mh",
    "flag": "🇲🇭",
    "language": "English / Marshallese",
    "currency": "United States dollar ($)",
    "population": "42K",
    "populationRaw": 42418,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
    "region": "Oceania",
    "subregion": "Micronesia",
    "tags": [
      "Beach",
      "Nature",
      "Adventure"
    ],
    "tagline": "Discover Marshall Islands",
    "about": "Marshall Islands is a country in Micronesia, with Majuro as its capital. About 42K people live here. Official / major languages include English / Marshallese, and everyday transactions typically use the United States dollar ($). Travelers visit for beach, nature, adventure experiences — cities, landscapes, food, and local culture.",
    "history": "Austronesian settlers arrived in the Marshall Islands in the 2nd millennium BC, but there are no historical or oral records of that period. Over time, the Marshallese people learned to navigate over long ocean distances by walap canoe using traditional stick charts.",
    "culture": "Culture in Marshall Islands is closely tied to English language and everyday life in Majuro. Expect festivals, markets, arts, and hospitality traditions that reflect Oceania influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Marshall Islands classics",
        "desc": "Signature dishes and home-style cooking from Marshall Islands",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Majuro",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Micronesia ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Majuro",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Majuro",
        "desc": "Capital city and main gateway to Marshall Islands",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Majuro",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via Majuro, then continue by rail, bus, taxi or domestic flights. Keep some United States dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Marshall Islands before you go. Register important numbers, keep copies of documents, and use licensed transport in Majuro. Emergency info: Local emergency · dialing code +692.",
    "bestSeason": "Nov–Apr",
    "emergency": "Local emergency · dialing code +692",
    "callingCode": "+692",
    "aliases": [
      "Marshall Islands",
      "Republic of the Marshall Islands"
    ]
  },
  {
    "name": "Mauritania",
    "nameKa": "მავრიტანია",
    "capital": "Nouakchott",
    "iso2": "mr",
    "flag": "🇲🇷",
    "language": "Arabic",
    "currency": "Mauritanian ouguiya (UM)",
    "population": "4.9M",
    "populationRaw": 4927532,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Western Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Mauritania",
    "about": "Mauritania is a country in Western Africa, with Nouakchott as its capital. About 4.9M people live here. Official / major languages include Arabic, and everyday transactions typically use the Mauritanian ouguiya (UM). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The original inhabitants of Mauritania were the Bafour, presumably a Mande ethnic group, connected to the contemporary Arabized minor social group of Imraguen (\"fishermen\") on the Atlantic coast.",
    "culture": "Culture in Mauritania is closely tied to Arabic language and everyday life in Nouakchott. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Mauritania classics",
        "desc": "Signature dishes and home-style cooking from Mauritania",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Nouakchott",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Africa ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Nouakchott",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Nouakchott",
        "desc": "Capital city and main gateway to Mauritania",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Nouakchott",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Nouakchott, then continue by rail, bus, taxi or domestic flights. Keep some Mauritanian ouguiya for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Mauritania before you go. Register important numbers, keep copies of documents, and use licensed transport in Nouakchott. Emergency info: Local emergency · dialing code +222.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +222",
    "callingCode": "+222",
    "aliases": [
      "Mauritania",
      "Islamic Republic of Mauritania"
    ]
  },
  {
    "name": "Mauritius",
    "nameKa": "მავრიკი",
    "capital": "Port Louis",
    "iso2": "mu",
    "flag": "🇲🇺",
    "language": "English / French / Mauritian Creole",
    "currency": "Mauritian rupee (₨)",
    "population": "1.2M",
    "populationRaw": 1243741,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Mauritius",
    "about": "Mauritius is a country in Eastern Africa, with Port Louis as its capital. About 1.2M people live here. Official / major languages include English / French / Mauritian Creole, and everyday transactions typically use the Mauritian rupee (₨). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Mauritius begins with discovery by Portuguese and thus its appearance on European maps in the early 16th century. Mauritius was successively colonized by the Netherlands, France and Great Britain, and became independent on 12 March 1968.",
    "culture": "Culture in Mauritius is closely tied to English language and everyday life in Port Louis. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Mauritius classics",
        "desc": "Signature dishes and home-style cooking from Mauritius",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Port Louis",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Africa ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Port Louis",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Port Louis",
        "desc": "Capital city and main gateway to Mauritius",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Port Louis",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Port Louis, then continue by rail, bus, taxi or domestic flights. Keep some Mauritian rupee for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Mauritius before you go. Register important numbers, keep copies of documents, and use licensed transport in Port Louis. Emergency info: Local emergency · dialing code +230.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +230",
    "callingCode": "+230",
    "aliases": [
      "Mauritius",
      "Republic of Mauritius"
    ]
  },
  {
    "name": "Mexico",
    "nameKa": "მექსიკა",
    "capital": "Ciudad de México",
    "iso2": "mx",
    "flag": "🇲🇽",
    "language": "Spanish",
    "currency": "Mexican peso ($)",
    "population": "131M",
    "populationRaw": 130575786,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1518659526054-0473a713fbf3?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Northern America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Mexico",
    "about": "Mexico is a country in Northern America, with Ciudad de México as its capital. About 131M people live here. Official / major languages include Spanish, and everyday transactions typically use the Mexican peso ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Mexico spans over three millennia, with the earliest evidence of hunter-gatherer settlement 13,000 years ago. Central and southern Mexico, known as Mesoamerica, saw the rise of complex civilizations that developed glyphic writing systems to record political histories and conquests. The Spanish conquest of the Aztec Empire in the early 16th century established New Spain, bringing Spanish rule, Christianity, and European influences.",
    "culture": "Culture in Mexico is closely tied to Spanish language and everyday life in Ciudad de México. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Mexico classics",
        "desc": "Signature dishes and home-style cooking from Mexico",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Ciudad de México",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Northern America ingredients and Spanish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Ciudad de México",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Ciudad de México",
        "desc": "Capital city and main gateway to Mexico",
        "image": "https://images.unsplash.com/photo-1518659526054-0473a713fbf3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Ciudad de México",
        "image": "https://images.unsplash.com/photo-1518659526054-0473a713fbf3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1518659526054-0473a713fbf3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1518659526054-0473a713fbf3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Ciudad de México, then continue by rail, bus, taxi or domestic flights. Keep some Mexican peso for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Mexico before you go. Register important numbers, keep copies of documents, and use licensed transport in Ciudad de México. Emergency info: Local emergency · dialing code +52.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +52",
    "callingCode": "+52",
    "aliases": [
      "Mexico",
      "United Mexican States"
    ]
  },
  {
    "name": "Micronesia",
    "nameKa": "მიკრონეზია",
    "capital": "Palikir",
    "iso2": "fm",
    "flag": "🇫🇲",
    "language": "English",
    "currency": "United States dollar ($)",
    "population": "106K",
    "populationRaw": 105564,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
    "region": "Oceania",
    "subregion": "Micronesia",
    "tags": [
      "Beach",
      "Nature",
      "Adventure"
    ],
    "tagline": "Discover Micronesia",
    "about": "Micronesia is a country in Micronesia, with Palikir as its capital. About 106K people live here. Official / major languages include English, and everyday transactions typically use the United States dollar ($). Travelers visit for beach, nature, adventure experiences — cities, landscapes, food, and local culture.",
    "history": "The Federated States of Micronesia are located on the Caroline Islands in the western Pacific Ocean. The history of the modern Federated States of Micronesia is one of settlement by Micronesians; colonization by Spain, Germany, and Japan; United Nations trusteeship under United States-administered Trust Territory of the Pacific Islands; and gradual independence beginning with the ratification of a sovereign constitution in 1979.",
    "culture": "Culture in Micronesia is closely tied to English language and everyday life in Palikir. Expect festivals, markets, arts, and hospitality traditions that reflect Oceania influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Micronesia classics",
        "desc": "Signature dishes and home-style cooking from Micronesia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Palikir",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Micronesia ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Palikir",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Palikir",
        "desc": "Capital city and main gateway to Micronesia",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Palikir",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Palikir, then continue by rail, bus, taxi or domestic flights. Keep some United States dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Micronesia before you go. Register important numbers, keep copies of documents, and use licensed transport in Palikir. Emergency info: Local emergency · dialing code +691.",
    "bestSeason": "Nov–Apr",
    "emergency": "Local emergency · dialing code +691",
    "callingCode": "+691",
    "aliases": [
      "Micronesia",
      "Federated States of Micronesia"
    ]
  },
  {
    "name": "Moldova",
    "nameKa": "მოლდოვა",
    "capital": "Chisinau",
    "iso2": "md",
    "flag": "🇲🇩",
    "language": "Moldavian",
    "currency": "Moldovan leu (L)",
    "population": "2.4M",
    "populationRaw": 2381300,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Moldova",
    "about": "Moldova is a country in Eastern Europe, with Chisinau as its capital. About 2.4M people live here. Official / major languages include Moldavian, and everyday transactions typically use the Moldovan leu (L). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Moldova spans prehistoric cultures, ancient and medieval empires, and periods of foreign rule and modern independence.",
    "culture": "Culture in Moldova is closely tied to Moldavian language and everyday life in Chisinau. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Moldova classics",
        "desc": "Signature dishes and home-style cooking from Moldova",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Chisinau",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Europe ingredients and Moldavian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Chisinau",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Chisinau",
        "desc": "Capital city and main gateway to Moldova",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Chisinau",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via Chisinau, then continue by rail, bus, taxi or domestic flights. Keep some Moldovan leu for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Moldova before you go. Register important numbers, keep copies of documents, and use licensed transport in Chisinau. Emergency info: Local emergency · dialing code +373.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +373",
    "callingCode": "+373",
    "aliases": [
      "Moldova",
      "Republic of Moldova"
    ]
  },
  {
    "name": "Monaco",
    "nameKa": "მონაკო",
    "capital": "Monaco",
    "iso2": "mc",
    "flag": "🇲🇨",
    "language": "French",
    "currency": "Euro (€)",
    "population": "38K",
    "populationRaw": 38423,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Western Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Monaco",
    "about": "Monaco is a country in Western Europe, with Monaco as its capital. About 38K people live here. Official / major languages include French, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The early history of Monaco is primarily concerned with the protective and strategic value of the Rock of Monaco, the area's chief geological landmark, which served first as a shelter for ancient peoples and later as a fortress. Part of Liguria's history since the fall of the Roman Empire, from the 14th to the early 15th century the area was contested for primarily political reasons. Since that point, excepting a brief period of French occupation, it has remained steadily under the control of the House of Grimaldi.",
    "culture": "Culture in Monaco is closely tied to French language and everyday life in Monaco. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Monaco classics",
        "desc": "Signature dishes and home-style cooking from Monaco",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Monaco",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Europe ingredients and French culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Monaco",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Monaco",
        "desc": "Capital city and main gateway to Monaco",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Monaco",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via Monaco, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Monaco before you go. Register important numbers, keep copies of documents, and use licensed transport in Monaco. Emergency info: Local emergency · dialing code +377.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +377",
    "callingCode": "+377",
    "aliases": [
      "Monaco",
      "Principality of Monaco"
    ]
  },
  {
    "name": "Mongolia",
    "nameKa": "მონღოლეთი",
    "capital": "Ulan Bator",
    "iso2": "mn",
    "flag": "🇲🇳",
    "language": "Mongolian",
    "currency": "Mongolian tögrög (₮)",
    "population": "3.5M",
    "populationRaw": 3544835,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Mongolia",
    "about": "Mongolia is a country in Eastern Asia, with Ulan Bator as its capital. About 3.5M people live here. Official / major languages include Mongolian, and everyday transactions typically use the Mongolian tögrög (₮). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "Various nomadic empires, including the Xiongnu, the Xianbei state, the Rouran Khaganate (330–555), the First (552–603) and Second Turkic Khaganates (682–744) and others, ruled the area of present-day Mongolia. The Khitan people, who used a para-Mongolic language, founded an empire under the Liao dynasty (916–1125), and ruled Mongolia and portions of North China, northern Korea, and the present-day Russian Far East.",
    "culture": "Culture in Mongolia is closely tied to Mongolian language and everyday life in Ulan Bator. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Mongolia classics",
        "desc": "Signature dishes and home-style cooking from Mongolia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Ulan Bator",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Asia ingredients and Mongolian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Ulan Bator",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Ulan Bator",
        "desc": "Capital city and main gateway to Mongolia",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Ulan Bator",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Ulan Bator, then continue by rail, bus, taxi or domestic flights. Keep some Mongolian tögrög for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Mongolia before you go. Register important numbers, keep copies of documents, and use licensed transport in Ulan Bator. Emergency info: Local emergency · dialing code +976.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +976",
    "callingCode": "+976",
    "aliases": [
      "Mongolia"
    ]
  },
  {
    "name": "Montenegro",
    "nameKa": "მონტენეგრო",
    "capital": "Podgorica",
    "iso2": "me",
    "flag": "🇲🇪",
    "language": "Montenegrin",
    "currency": "Euro (€)",
    "population": "623K",
    "populationRaw": 623327,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Southern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Montenegro",
    "about": "Montenegro is a country in Southern Europe, with Podgorica as its capital. About 623K people live here. Official / major languages include Montenegrin, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The early written records of the history of Montenegro begin with Illyria and its various kingdoms until the Roman Republic incorporated the region into the province of Illyricum after the Illyro-Roman Wars.",
    "culture": "Culture in Montenegro is closely tied to Montenegrin language and everyday life in Podgorica. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Montenegro classics",
        "desc": "Signature dishes and home-style cooking from Montenegro",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Podgorica",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Europe ingredients and Montenegrin culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Podgorica",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Podgorica",
        "desc": "Capital city and main gateway to Montenegro",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Podgorica",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Podgorica, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Montenegro before you go. Register important numbers, keep copies of documents, and use licensed transport in Podgorica. Emergency info: Local emergency · dialing code +382.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +382",
    "callingCode": "+382",
    "aliases": [
      "Montenegro"
    ]
  },
  {
    "name": "Morocco",
    "nameKa": "მაროკო",
    "capital": "Rabat",
    "iso2": "ma",
    "flag": "🇲🇦",
    "language": "Arabic / Berber",
    "currency": "Moroccan dirham (DH)",
    "population": "37M",
    "populationRaw": 36828330,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Northern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Morocco",
    "about": "Morocco is a country in Northern Africa, with Rabat as its capital. About 37M people live here. Official / major languages include Arabic / Berber, and everyday transactions typically use the Moroccan dirham (DH). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of human habitation in Morocco spans since the Lower Paleolithic, with the earliest known being Jebel Irhoud. Much later Morocco was part of Iberomaurusian culture, including Taforalt. It dates from the establishment of Mauretania and other ancient Berber kingdoms, to the establishment of the Moroccan state by the Idrisid dynasty followed by other Islamic dynasties, through to the colonial and independence periods.",
    "culture": "Culture in Morocco is closely tied to Arabic language and everyday life in Rabat. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Morocco classics",
        "desc": "Signature dishes and home-style cooking from Morocco",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Rabat",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Northern Africa ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Rabat",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Rabat",
        "desc": "Capital city and main gateway to Morocco",
        "image": "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Rabat",
        "image": "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Rabat, then continue by rail, bus, taxi or domestic flights. Keep some Moroccan dirham for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Morocco before you go. Register important numbers, keep copies of documents, and use licensed transport in Rabat. Emergency info: Local emergency · dialing code +212.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +212",
    "callingCode": "+212",
    "aliases": [
      "Morocco",
      "Kingdom of Morocco"
    ]
  },
  {
    "name": "Mozambique",
    "nameKa": "მოზამბიკი",
    "capital": "Maputo",
    "iso2": "mz",
    "flag": "🇲🇿",
    "language": "Portuguese",
    "currency": "Mozambican metical (MT)",
    "population": "34M",
    "populationRaw": 34090466,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Mozambique",
    "about": "Mozambique is a country in Eastern Africa, with Maputo as its capital. About 34M people live here. Official / major languages include Portuguese, and everyday transactions typically use the Mozambican metical (MT). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Mozambique was a Portuguese colony, overseas province and later a member state of Portugal. It gained independence from Portugal in 1975.",
    "culture": "Culture in Mozambique is closely tied to Portuguese language and everyday life in Maputo. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Mozambique classics",
        "desc": "Signature dishes and home-style cooking from Mozambique",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Maputo",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Africa ingredients and Portuguese culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Maputo",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Maputo",
        "desc": "Capital city and main gateway to Mozambique",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Maputo",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Maputo, then continue by rail, bus, taxi or domestic flights. Keep some Mozambican metical for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Mozambique before you go. Register important numbers, keep copies of documents, and use licensed transport in Maputo. Emergency info: Local emergency · dialing code +258.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +258",
    "callingCode": "+258",
    "aliases": [
      "Mozambique",
      "Republic of Mozambique"
    ]
  },
  {
    "name": "Myanmar",
    "nameKa": "მიანმარი",
    "capital": "Nay Pyi Taw",
    "iso2": "mm",
    "flag": "🇲🇲",
    "language": "Burmese",
    "currency": "Burmese kyat (K)",
    "population": "51M",
    "populationRaw": 51316756,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Myanmar",
    "about": "Myanmar is a country in South-Eastern Asia, with Nay Pyi Taw as its capital. About 51M people live here. Official / major languages include Burmese, and everyday transactions typically use the Burmese kyat (K). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Myanmar covers the period from the time of first-known human settlements 13,000 years ago to the present day. Native to three imperial dynasties of South-east asia, the history of Myanmar is intertwined with the socio-political and cultural developments in the region over the past millennium. The earliest inhabitants of recorded history were Tibeto-Burman-speaking people who established an array of Pyu city-states that ranged as far south as Pyay and adopted Theravada Buddhism.",
    "culture": "Culture in Myanmar is closely tied to Burmese language and everyday life in Nay Pyi Taw. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Myanmar classics",
        "desc": "Signature dishes and home-style cooking from Myanmar",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Nay Pyi Taw",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South-Eastern Asia ingredients and Burmese culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Nay Pyi Taw",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Nay Pyi Taw",
        "desc": "Capital city and main gateway to Myanmar",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Nay Pyi Taw",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Nay Pyi Taw, then continue by rail, bus, taxi or domestic flights. Keep some Burmese kyat for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Myanmar before you go. Register important numbers, keep copies of documents, and use licensed transport in Nay Pyi Taw. Emergency info: Local emergency · dialing code +95.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +95",
    "callingCode": "+95",
    "aliases": [
      "Myanmar",
      "Burma",
      "Republic of the Union of Myanmar"
    ]
  },
  {
    "name": "Namibia",
    "nameKa": "ნამიბია",
    "capital": "Windhoek",
    "iso2": "na",
    "flag": "🇳🇦",
    "language": "Afrikaans / German / English",
    "currency": "Namibian dollar ($)",
    "population": "3M",
    "populationRaw": 3022401,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Southern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Namibia",
    "about": "Namibia is a country in Southern Africa, with Windhoek as its capital. About 3M people live here. Official / major languages include Afrikaans / German / English, and everyday transactions typically use the Namibian dollar ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Namibia has passed through several distinct stages from being colonised in the late nineteenth century to Namibia's independence on 21 March 1990.",
    "culture": "Culture in Namibia is closely tied to Afrikaans language and everyday life in Windhoek. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Namibia classics",
        "desc": "Signature dishes and home-style cooking from Namibia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Windhoek",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Africa ingredients and Afrikaans culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Windhoek",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Windhoek",
        "desc": "Capital city and main gateway to Namibia",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Windhoek",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Windhoek, then continue by rail, bus, taxi or domestic flights. Keep some Namibian dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Namibia before you go. Register important numbers, keep copies of documents, and use licensed transport in Windhoek. Emergency info: Local emergency · dialing code +264.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +264",
    "callingCode": "+264",
    "aliases": [
      "Namibia",
      "Republic of Namibia"
    ]
  },
  {
    "name": "Nauru",
    "nameKa": "ნაურუ",
    "capital": "Yaren",
    "iso2": "nr",
    "flag": "🇳🇷",
    "language": "English / Nauru",
    "currency": "Australian dollar ($)",
    "population": "12K",
    "populationRaw": 11680,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
    "region": "Oceania",
    "subregion": "Micronesia",
    "tags": [
      "Beach",
      "Nature",
      "Adventure"
    ],
    "tagline": "Discover Nauru",
    "about": "Nauru is a country in Micronesia, with Yaren as its capital. About 12K people live here. Official / major languages include English / Nauru, and everyday transactions typically use the Australian dollar ($). Travelers visit for beach, nature, adventure experiences — cities, landscapes, food, and local culture.",
    "history": "Human activity is thought to have begun roughly 3,000 years ago when clans settled the island. A people and culture developed on the island, the Nauru, which had 12 tribes. At the end of the 1700s, a British ship came, and this was the first known contact with the outside world. The British ship called it \"pleasant island\", and it was a friendly greeting; the British sailed on. Thirty years later, in 1830, an escaped Irish convict took over the island and was finally evicted in 1841. There were scattered interactions with passing vessels and trade. In the mid-to-late 19th century, a devastating civil war started, which took the lives of many Nauru. This war was ended when Germany annexed the island in 1888, and negotiations ended the fighting. In the 1900s, phosphate mining started, and the Germans built some modern facilities on the island. German control ended at the end of World War I, and it was passed to Australia as protectorate. This continued until WW2, when the Empire of Japan invaded the island.",
    "culture": "Culture in Nauru is closely tied to English language and everyday life in Yaren. Expect festivals, markets, arts, and hospitality traditions that reflect Oceania influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Nauru classics",
        "desc": "Signature dishes and home-style cooking from Nauru",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Yaren",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Micronesia ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Yaren",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Yaren",
        "desc": "Capital city and main gateway to Nauru",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Yaren",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via Yaren, then continue by rail, bus, taxi or domestic flights. Keep some Australian dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Nauru before you go. Register important numbers, keep copies of documents, and use licensed transport in Yaren. Emergency info: Local emergency · dialing code +674.",
    "bestSeason": "Nov–Apr",
    "emergency": "Local emergency · dialing code +674",
    "callingCode": "+674",
    "aliases": [
      "Nauru",
      "Republic of Nauru"
    ]
  },
  {
    "name": "Nepal",
    "nameKa": "ნეპალი",
    "capital": "Kathmandu",
    "iso2": "np",
    "flag": "🇳🇵",
    "language": "Nepali",
    "currency": "Nepalese rupee (₨)",
    "population": "30M",
    "populationRaw": 29911840,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Southern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Nepal",
    "about": "Nepal is a country in Southern Asia, with Kathmandu as its capital. About 30M people live here. Official / major languages include Nepali, and everyday transactions typically use the Nepalese rupee (₨). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "Nepal is a multi-ethnic, multicultural, multi-religious, and multilingual country. The most spoken language is Nepali followed by several other ethnic languages.",
    "culture": "Culture in Nepal is closely tied to Nepali language and everyday life in Kathmandu. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Nepal classics",
        "desc": "Signature dishes and home-style cooking from Nepal",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Kathmandu",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Asia ingredients and Nepali culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Kathmandu",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Kathmandu",
        "desc": "Capital city and main gateway to Nepal",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Kathmandu",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Kathmandu, then continue by rail, bus, taxi or domestic flights. Keep some Nepalese rupee for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Nepal before you go. Register important numbers, keep copies of documents, and use licensed transport in Kathmandu. Emergency info: Local emergency · dialing code +977.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +977",
    "callingCode": "+977",
    "aliases": [
      "Nepal",
      "Federal Democratic Republic of Nepal"
    ]
  },
  {
    "name": "Netherlands",
    "nameKa": "ნიდერლანდები",
    "capital": "Amsterdam",
    "iso2": "nl",
    "flag": "🇳🇱",
    "language": "Dutch",
    "currency": "Euro (€)",
    "population": "18M",
    "populationRaw": 18080943,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Western Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Netherlands",
    "about": "Netherlands is a country in Western Europe, with Amsterdam as its capital. About 18M people live here. Official / major languages include Dutch, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of the Netherlands extends back before the founding of the modern Kingdom of the Netherlands in 1815 after the defeat of Napoleon. For thousands of years, people have been living together around the river deltas of this section of the North Sea coast. Records begin with the fourth century during which the region formed a militarized border zone of the Roman Empire. As the Western Roman Empire collapsed and the Middle Ages began, three dominant Germanic peoples coalesced in the area – Frisians in the north and coastal areas, Low Saxons in the northeast, and the Franks to the south. By 800, the Frankish Carolingian dynasty had once again integrated the area into an empire covering a large part of Western Europe. The region was part of the duchy of Lower Lotharingia within the Holy Roman Empire, but neither the empire nor the duchy were governed in a centralized manner. For several centuries, medieval lordships such as Brabant, Holland, Zeeland, Friesland, Guelders and others held a changing patchwork of territories.",
    "culture": "Culture in Netherlands is closely tied to Dutch language and everyday life in Amsterdam. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Netherlands classics",
        "desc": "Signature dishes and home-style cooking from Netherlands",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Amsterdam",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Europe ingredients and Dutch culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Amsterdam",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Amsterdam",
        "desc": "Capital city and main gateway to Netherlands",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Amsterdam",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Amsterdam, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Netherlands before you go. Register important numbers, keep copies of documents, and use licensed transport in Amsterdam. Emergency info: Local emergency · dialing code +31.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +31",
    "callingCode": "+31",
    "aliases": [
      "Netherlands",
      "Kingdom of the Netherlands"
    ]
  },
  {
    "name": "New Zealand",
    "nameKa": "ახალი ზელანდია",
    "capital": "Wellington",
    "iso2": "nz",
    "flag": "🇳🇿",
    "language": "English / Māori / New Zealand Sign Language",
    "currency": "New Zealand dollar ($)",
    "population": "5.3M",
    "populationRaw": 5324700,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1469521669194-babb455f259e?w=1200&h=700&fit=crop&auto=format",
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "tags": [
      "Beach",
      "Nature",
      "Adventure"
    ],
    "tagline": "Discover New Zealand",
    "about": "New Zealand is a country in Australia and New Zealand, with Wellington as its capital. About 5.3M people live here. Official / major languages include English / Māori / New Zealand Sign Language, and everyday transactions typically use the New Zealand dollar ($). Travelers visit for beach, nature, adventure experiences — cities, landscapes, food, and local culture.",
    "history": "The human history of New Zealand can be dated back to between 1320 and 1350 CE, when the main settlement period started, after it was discovered and settled by Polynesians, who developed a distinct Māori culture. Like other Pacific cultures, Māori society was centred on kinship links and connection with the land but, unlike them, it was adapted to a cool, temperate environment rather than a warm, tropical one. The first European explorer known to have visited New Zealand was the Dutch navigator Abel Tasman, on 13 December 1642. In 1643 he charted the west coast of the North Island, his expedition then sailed back to Batavia without setting foot on New Zealand soil. British explorer James Cook, who reached New Zealand in October 1769 on the first of his three voyages, was the first European to circumnavigate and map New Zealand. From the late 18th century, the country was regularly visited by explorers and other sailors, missionaries, traders and adventurers.",
    "culture": "Culture in New Zealand is closely tied to English language and everyday life in Wellington. Expect festivals, markets, arts, and hospitality traditions that reflect Oceania influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "New Zealand classics",
        "desc": "Signature dishes and home-style cooking from New Zealand",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Wellington",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Australia and New Zealand ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Wellington",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Wellington",
        "desc": "Capital city and main gateway to New Zealand",
        "image": "https://images.unsplash.com/photo-1469521669194-babb455f259e?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Wellington",
        "image": "https://images.unsplash.com/photo-1469521669194-babb455f259e?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1469521669194-babb455f259e?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1469521669194-babb455f259e?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Wellington, then continue by rail, bus, taxi or domestic flights. Keep some New Zealand dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for New Zealand before you go. Register important numbers, keep copies of documents, and use licensed transport in Wellington. Emergency info: Local emergency · dialing code +64.",
    "bestSeason": "Nov–Apr",
    "emergency": "Local emergency · dialing code +64",
    "callingCode": "+64",
    "aliases": [
      "New Zealand"
    ]
  },
  {
    "name": "Nicaragua",
    "nameKa": "ნიკარაგუა",
    "capital": "Managua",
    "iso2": "ni",
    "flag": "🇳🇮",
    "language": "Spanish",
    "currency": "Nicaraguan córdoba (C$)",
    "population": "6.8M",
    "populationRaw": 6803886,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Central America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Nicaragua",
    "about": "Nicaragua is a country in Central America, with Managua as its capital. About 6.8M people live here. Official / major languages include Spanish, and everyday transactions typically use the Nicaraguan córdoba (C$). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Nicaragua is a nation in Central America. It is located roughly halfway between Mexico to its north and Colombia to its south and bordered by Honduras to its north and Costa Rica to its south. Nicaragua ranges from the Caribbean Sea on its east coast to the Pacific Ocean on its west coast. Nicaragua also possesses a series of islands and cays located in the Caribbean Sea.",
    "culture": "Culture in Nicaragua is closely tied to Spanish language and everyday life in Managua. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Nicaragua classics",
        "desc": "Signature dishes and home-style cooking from Nicaragua",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Managua",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Central America ingredients and Spanish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Managua",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Managua",
        "desc": "Capital city and main gateway to Nicaragua",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Managua",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Managua, then continue by rail, bus, taxi or domestic flights. Keep some Nicaraguan córdoba for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Nicaragua before you go. Register important numbers, keep copies of documents, and use licensed transport in Managua. Emergency info: Local emergency · dialing code +505.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +505",
    "callingCode": "+505",
    "aliases": [
      "Nicaragua",
      "Republic of Nicaragua"
    ]
  },
  {
    "name": "Niger",
    "nameKa": "ნიგერი",
    "capital": "Niamey",
    "iso2": "ne",
    "flag": "🇳🇪",
    "language": "French",
    "currency": "West African CFA franc (CFA)",
    "population": "26M",
    "populationRaw": 26312034,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Western Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Niger",
    "about": "Niger is a country in Western Africa, with Niamey as its capital. About 26M people live here. Official / major languages include French, and everyday transactions typically use the West African CFA franc (CFA). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Humans have inhabited present-day Niger since prehistoric times, with evidence of early activity dating back 60,000 years. The region hosted ancient rock carvings and pastoral communities from 7,000 BCE. Once fertile, it supported large settlements and cattle herding until the climate became arid around 2500 BCE.",
    "culture": "Culture in Niger is closely tied to French language and everyday life in Niamey. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Niger classics",
        "desc": "Signature dishes and home-style cooking from Niger",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Niamey",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Africa ingredients and French culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Niamey",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Niamey",
        "desc": "Capital city and main gateway to Niger",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Niamey",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Niamey, then continue by rail, bus, taxi or domestic flights. Keep some West African CFA franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Niger before you go. Register important numbers, keep copies of documents, and use licensed transport in Niamey. Emergency info: Local emergency · dialing code +227.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +227",
    "callingCode": "+227",
    "aliases": [
      "Niger",
      "Republic of Niger"
    ]
  },
  {
    "name": "Nigeria",
    "nameKa": "ნიგერია",
    "capital": "Abuja",
    "iso2": "ng",
    "flag": "🇳🇬",
    "language": "English",
    "currency": "Nigerian naira (₦)",
    "population": "224M",
    "populationRaw": 223800000,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Western Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Nigeria",
    "about": "Nigeria is a country in Western Africa, with Abuja as its capital. About 224M people live here. Official / major languages include English, and everyday transactions typically use the Nigerian naira (₦). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Nigeria can be traced to the earliest inhabitants from at least 9000 BC through to early civilizations such as the Nok culture which began around 1500 BC. Numerous ancient African civilizations settled in the region that is known today as Nigeria, such as the Ife Empire, Kingdom of Nri, the Benin Kingdom, and the Oyo Empire. Islam reached Nigeria through the Bornu Empire between and Hausa Kingdom during the 11th century, while Christianity came to Nigeria in the 15th century through Augustinian and Capuchin monks from Portugal to the Kingdom of Warri. The Songhai Empire also occupied part of the region. Through contact with Europeans, early harbour towns such as Calabar, Badagry, and Bonny emerged along the coast after 1480, which did business in the transatlantic slave trade, among other things.",
    "culture": "Culture in Nigeria is closely tied to English language and everyday life in Abuja. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Nigeria classics",
        "desc": "Signature dishes and home-style cooking from Nigeria",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Abuja",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Africa ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Abuja",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Abuja",
        "desc": "Capital city and main gateway to Nigeria",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Abuja",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Abuja, then continue by rail, bus, taxi or domestic flights. Keep some Nigerian naira for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Nigeria before you go. Register important numbers, keep copies of documents, and use licensed transport in Abuja. Emergency info: Local emergency · dialing code +234.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +234",
    "callingCode": "+234",
    "aliases": [
      "Nigeria",
      "Federal Republic of Nigeria"
    ]
  },
  {
    "name": "North Macedonia",
    "nameKa": "ჩრდილოეთ მაკედონია",
    "capital": "Skopje",
    "iso2": "mk",
    "flag": "🇲🇰",
    "language": "Macedonian",
    "currency": "Denar (ден)",
    "population": "1.8M",
    "populationRaw": 1826247,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Southern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover North Macedonia",
    "about": "North Macedonia is a country in Southern Europe, with Skopje as its capital. About 1.8M people live here. Official / major languages include Macedonian, and everyday transactions typically use the Denar (ден). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of North Macedonia encompasses the history of the territory of the modern state of North Macedonia.",
    "culture": "Culture in North Macedonia is closely tied to Macedonian language and everyday life in Skopje. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "North Macedonia classics",
        "desc": "Signature dishes and home-style cooking from North Macedonia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Skopje",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Europe ingredients and Macedonian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Skopje",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Skopje",
        "desc": "Capital city and main gateway to North Macedonia",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Skopje",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Skopje, then continue by rail, bus, taxi or domestic flights. Keep some Denar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for North Macedonia before you go. Register important numbers, keep copies of documents, and use licensed transport in Skopje. Emergency info: Local emergency · dialing code +389.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +389",
    "callingCode": "+389",
    "aliases": [
      "North Macedonia",
      "Macedonia",
      "Republic of North Macedonia"
    ]
  },
  {
    "name": "Norway",
    "nameKa": "ნორვეგია",
    "capital": "Oslo",
    "iso2": "no",
    "flag": "🇳🇴",
    "language": "Norwegian Nynorsk / Norwegian Bokmål / Sami",
    "currency": "Norwegian krone (ko)",
    "population": "5.6M",
    "populationRaw": 5606944,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Northern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Norway",
    "about": "Norway is a country in Northern Europe, with Oslo as its capital. About 5.6M people live here. Official / major languages include Norwegian Nynorsk / Norwegian Bokmål / Sami, and everyday transactions typically use the Norwegian krone (ko). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Norway has been influenced to an extraordinary degree by the terrain and the climate of the region. About 10,000 BC, following the retreat inland of the great ice sheets, the earliest inhabitants migrated north into the territory which is now Norway. They traveled steadily northwards along the coastal areas, warmed by the Gulf Stream. They were hunter-gatherers whose diet included seafood and game, particularly reindeer as staple foods. Between 5,000 BC and 4,000 BC the earliest agricultural settlements appeared around the Oslofjord. Gradually, between 1,500 BC and 500 BC, agricultural settlements spread to the entire south Norway, while the inhabitants of the regions north of Trøndelag continued to hunt and fish.",
    "culture": "Culture in Norway is closely tied to Norwegian Nynorsk language and everyday life in Oslo. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Norway classics",
        "desc": "Signature dishes and home-style cooking from Norway",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Oslo",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Northern Europe ingredients and Norwegian Nynorsk culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Oslo",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Oslo",
        "desc": "Capital city and main gateway to Norway",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Oslo",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Oslo, then continue by rail, bus, taxi or domestic flights. Keep some Norwegian krone for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Norway before you go. Register important numbers, keep copies of documents, and use licensed transport in Oslo. Emergency info: Local emergency · dialing code +47.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +47",
    "callingCode": "+47",
    "aliases": [
      "Norway",
      "Kingdom of Norway"
    ]
  },
  {
    "name": "Oman",
    "nameKa": "ომანი",
    "capital": "Muscat",
    "iso2": "om",
    "flag": "🇴🇲",
    "language": "Arabic",
    "currency": "Omani rial (.ع.ر)",
    "population": "5.3M",
    "populationRaw": 5306976,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Western Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Oman",
    "about": "Oman is a country in Western Asia, with Muscat as its capital. About 5.3M people live here. Official / major languages include Arabic, and everyday transactions typically use the Omani rial (.ع.ر). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "Oman is a site of pre-historic human habitation, stretching back over 100,000 years. The region was impacted by powerful invaders, including other Arab tribes, Portugal and Britain. Oman, at its height, held territory that ranged from the Persian Gulf all the way south to the island of Madagascar, including the island of Zanzibar and the city of Gwadar.",
    "culture": "Culture in Oman is closely tied to Arabic language and everyday life in Muscat. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Oman classics",
        "desc": "Signature dishes and home-style cooking from Oman",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Muscat",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Asia ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Muscat",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Muscat",
        "desc": "Capital city and main gateway to Oman",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Muscat",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Muscat, then continue by rail, bus, taxi or domestic flights. Keep some Omani rial for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Oman before you go. Register important numbers, keep copies of documents, and use licensed transport in Muscat. Emergency info: Local emergency · dialing code +968.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +968",
    "callingCode": "+968",
    "aliases": [
      "Oman",
      "Sultanate of Oman"
    ]
  },
  {
    "name": "Pakistan",
    "nameKa": "პაკისტანი",
    "capital": "Islamabad",
    "iso2": "pk",
    "flag": "🇵🇰",
    "language": "English / Urdu",
    "currency": "Pakistani rupee (₨)",
    "population": "241M",
    "populationRaw": 241499431,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Southern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Pakistan",
    "about": "Pakistan is a country in Southern Asia, with Islamabad as its capital. About 241M people live here. Official / major languages include English / Urdu, and everyday transactions typically use the Pakistani rupee (₨). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Pakistan preceding the country's independence in 1947 is shared with that of Afghanistan, India, and Iran. Spanning the western expanse of the Indian subcontinent and the eastern borderlands of the Iranian plateau, the region of present-day Pakistan served both as the fertile ground of a major civilization and as the gateway of South Asia to Central Asia and the Near East.",
    "culture": "Culture in Pakistan is closely tied to English language and everyday life in Islamabad. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Pakistan classics",
        "desc": "Signature dishes and home-style cooking from Pakistan",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Islamabad",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Asia ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Islamabad",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Islamabad",
        "desc": "Capital city and main gateway to Pakistan",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Islamabad",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Islamabad, then continue by rail, bus, taxi or domestic flights. Keep some Pakistani rupee for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Pakistan before you go. Register important numbers, keep copies of documents, and use licensed transport in Islamabad. Emergency info: Local emergency · dialing code +92.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +92",
    "callingCode": "+92",
    "aliases": [
      "Pakistan",
      "Islamic Republic of Pakistan"
    ]
  },
  {
    "name": "Palau",
    "nameKa": "პალაუ",
    "capital": "Melekeok",
    "iso2": "pw",
    "flag": "🇵🇼",
    "language": "English / Palauan",
    "currency": "United States dollar ($)",
    "population": "17K",
    "populationRaw": 16733,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
    "region": "Oceania",
    "subregion": "Micronesia",
    "tags": [
      "Beach",
      "Nature",
      "Adventure"
    ],
    "tagline": "Discover Palau",
    "about": "Palau is a country in Micronesia, with Melekeok as its capital. About 17K people live here. Official / major languages include English / Palauan, and everyday transactions typically use the United States dollar ($). Travelers visit for beach, nature, adventure experiences — cities, landscapes, food, and local culture.",
    "history": "Palau’s story is shaped by its place in Micronesia. Historic centers around Melekeok, museums, and monuments help travelers understand how the country developed into the modern state it is today. Layer visits with cultural sites and neighborhood walks for a fuller picture.",
    "culture": "Culture in Palau is closely tied to English language and everyday life in Melekeok. Expect festivals, markets, arts, and hospitality traditions that reflect Oceania influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Palau classics",
        "desc": "Signature dishes and home-style cooking from Palau",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Melekeok",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Micronesia ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Melekeok",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Melekeok",
        "desc": "Capital city and main gateway to Palau",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Melekeok",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via Melekeok, then continue by rail, bus, taxi or domestic flights. Keep some United States dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Palau before you go. Register important numbers, keep copies of documents, and use licensed transport in Melekeok. Emergency info: Local emergency · dialing code +680.",
    "bestSeason": "Nov–Apr",
    "emergency": "Local emergency · dialing code +680",
    "callingCode": "+680",
    "aliases": [
      "Palau",
      "Republic of Palau"
    ]
  },
  {
    "name": "Palestine",
    "nameKa": "პალესტინა",
    "capital": "East Jerusalem",
    "iso2": "ps",
    "flag": "🇵🇸",
    "language": "Arabic",
    "currency": "Israeli new shekel (₪)",
    "population": "5.5M",
    "populationRaw": 5483450,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Western Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Palestine",
    "about": "Palestine is a country in Western Asia, with East Jerusalem as its capital. About 5.5M people live here. Official / major languages include Arabic, and everyday transactions typically use the Israeli new shekel (₪). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The region of Palestine is part of the Levant, a land bridge between Africa and Eurasia that has traditionally served as the \"crossroads of Western Asia, the Eastern Mediterranean, and Northeast Africa\". Lying to the west of the Jordan Rift Valley, Palestine is, in tectonic terms, located in the \"northwest of the Arabian Plate\".",
    "culture": "Culture in Palestine is closely tied to Arabic language and everyday life in East Jerusalem. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Palestine classics",
        "desc": "Signature dishes and home-style cooking from Palestine",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around East Jerusalem",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Asia ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in East Jerusalem",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "East Jerusalem",
        "desc": "Capital city and main gateway to Palestine",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near East Jerusalem",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via East Jerusalem, then continue by rail, bus, taxi or domestic flights. Keep some Israeli new shekel for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Palestine before you go. Register important numbers, keep copies of documents, and use licensed transport in East Jerusalem. Emergency info: Local emergency · dialing code +970.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +970",
    "callingCode": "+970",
    "aliases": [
      "Palestine",
      "West Bank",
      "Palestine, State of",
      "Palestinian Territory Occupied",
      "State of Palestine"
    ]
  },
  {
    "name": "Panama",
    "nameKa": "პანამა",
    "capital": "Panama City",
    "iso2": "pa",
    "flag": "🇵🇦",
    "language": "Spanish",
    "currency": "Panamanian balboa (B/.)",
    "population": "4.1M",
    "populationRaw": 4064780,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Central America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Panama",
    "about": "Panama is a country in Central America, with Panama City as its capital. About 4.1M people live here. Official / major languages include Spanish, and everyday transactions typically use the Panamanian balboa (B/.). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Panama’s story is shaped by its place in Central America. Historic centers around Panama City, museums, and monuments help travelers understand how the country developed into the modern state it is today. Layer visits with cultural sites and neighborhood walks for a fuller picture.",
    "culture": "Culture in Panama is closely tied to Spanish language and everyday life in Panama City. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Panama classics",
        "desc": "Signature dishes and home-style cooking from Panama",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Panama City",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Central America ingredients and Spanish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Panama City",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Panama City",
        "desc": "Capital city and main gateway to Panama",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Panama City",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Panama City, then continue by rail, bus, taxi or domestic flights. Keep some Panamanian balboa for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Panama before you go. Register important numbers, keep copies of documents, and use licensed transport in Panama City. Emergency info: Local emergency · dialing code +507.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +507",
    "callingCode": "+507",
    "aliases": [
      "Panama",
      "Republic of Panama"
    ]
  },
  {
    "name": "Papua New Guinea",
    "nameKa": "პაპუა-ახალი გვინეა",
    "capital": "Port Moresby",
    "iso2": "pg",
    "flag": "🇵🇬",
    "language": "English / Hiri Motu / Tok Pisin",
    "currency": "Papua New Guinean kina (K)",
    "population": "12M",
    "populationRaw": 11781559,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
    "region": "Oceania",
    "subregion": "Melanesia",
    "tags": [
      "Beach",
      "Nature",
      "Adventure"
    ],
    "tagline": "Discover Papua New Guinea",
    "about": "Papua New Guinea is a country in Melanesia, with Port Moresby as its capital. About 12M people live here. Official / major languages include English / Hiri Motu / Tok Pisin, and everyday transactions typically use the Papua New Guinean kina (K). Travelers visit for beach, nature, adventure experiences — cities, landscapes, food, and local culture.",
    "history": "The prehistory of Papua New Guinea can be traced to about 50,000–60,000 years ago, when people first migrated towards the Australian continent. Agriculture was established at least 7000 years ago in the New Guinea Highlands. Extensive trade networks operated throughout the region, and successive waves of migration included the spread of Austronesian languages around 3000 years ago, and the rise of the Lapita culture.",
    "culture": "Culture in Papua New Guinea is closely tied to English language and everyday life in Port Moresby. Expect festivals, markets, arts, and hospitality traditions that reflect Oceania influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Papua New Guinea classics",
        "desc": "Signature dishes and home-style cooking from Papua New Guinea",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Port Moresby",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Melanesia ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Port Moresby",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Port Moresby",
        "desc": "Capital city and main gateway to Papua New Guinea",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Port Moresby",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Port Moresby, then continue by rail, bus, taxi or domestic flights. Keep some Papua New Guinean kina for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Papua New Guinea before you go. Register important numbers, keep copies of documents, and use licensed transport in Port Moresby. Emergency info: Local emergency · dialing code +675.",
    "bestSeason": "Nov–Apr",
    "emergency": "Local emergency · dialing code +675",
    "callingCode": "+675",
    "aliases": [
      "Papua New Guinea",
      "Independent State of Papua New Guinea"
    ]
  },
  {
    "name": "Paraguay",
    "nameKa": "პარაგვაი",
    "capital": "Asunción",
    "iso2": "py",
    "flag": "🇵🇾",
    "language": "Guaraní / Spanish",
    "currency": "Paraguayan guarani (₲)",
    "population": "6.1M",
    "populationRaw": 6109644,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "South America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Paraguay",
    "about": "Paraguay is a country in South America, with Asunción as its capital. About 6.1M people live here. Official / major languages include Guaraní / Spanish, and everyday transactions typically use the Paraguayan guarani (₲). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Paraguay encompasses thousands of years of human habitation. Both agricultural and nomadic Guaycuruan lived in the region at the time of the Spanish Conquest. It became a relatively neglected part of the Spanish Empire due to its isolation and lack of mineral wealth; nonetheless, a small group of Spanish settlers came to reside in the area, increasingly intermarrying with native women to produce a mestizo population. In the 17th and 18th centuries, Jesuit missionaries organized the natives into planned communities known as reductions, and the experiment gained notable attention in Enlightenment Era Europe.",
    "culture": "Culture in Paraguay is closely tied to Guaraní language and everyday life in Asunción. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Paraguay classics",
        "desc": "Signature dishes and home-style cooking from Paraguay",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Asunción",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South America ingredients and Guaraní culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Asunción",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Asunción",
        "desc": "Capital city and main gateway to Paraguay",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Asunción",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Asunción, then continue by rail, bus, taxi or domestic flights. Keep some Paraguayan guarani for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Paraguay before you go. Register important numbers, keep copies of documents, and use licensed transport in Asunción. Emergency info: Local emergency · dialing code +595.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +595",
    "callingCode": "+595",
    "aliases": [
      "Paraguay",
      "Republic of Paraguay"
    ]
  },
  {
    "name": "Peru",
    "nameKa": "პერუ",
    "capital": "Lima",
    "iso2": "pe",
    "flag": "🇵🇪",
    "language": "Aymara / Quechua / Spanish",
    "currency": "Peruvian sol (S/.)",
    "population": "34M",
    "populationRaw": 34350244,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "South America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Peru",
    "about": "Peru is a country in South America, with Lima as its capital. About 34M people live here. Official / major languages include Aymara / Quechua / Spanish, and everyday transactions typically use the Peruvian sol (S/.). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Peru spans 15 millennia, extending back through several stages of cultural development along the country's desert coastline and in the Andes mountains. Peru's coast was home to the Norte Chico civilization, the oldest civilization in the Americas and one of the six cradles of civilization in the world. When the Spanish arrived in the sixteenth century, the highlands of southern Peru were the center of the Inca Empire, the largest and most advanced state in pre-Columbian America. After the conquest of the Incas, the Spanish Empire established a Viceroyalty with jurisdiction over most of its South American domains. Peru declared independence from Spain in 1821, but achieved independence only after the Battle of Ayacucho three years later.",
    "culture": "Culture in Peru is closely tied to Aymara language and everyday life in Lima. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Peru classics",
        "desc": "Signature dishes and home-style cooking from Peru",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Lima",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South America ingredients and Aymara culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Lima",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Lima",
        "desc": "Capital city and main gateway to Peru",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Lima",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Lima, then continue by rail, bus, taxi or domestic flights. Keep some Peruvian sol for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Peru before you go. Register important numbers, keep copies of documents, and use licensed transport in Lima. Emergency info: Local emergency · dialing code +51.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +51",
    "callingCode": "+51",
    "aliases": [
      "Peru",
      "Republic of Peru"
    ]
  },
  {
    "name": "Philippines",
    "nameKa": "ფილიპინები",
    "capital": "Manila",
    "iso2": "ph",
    "flag": "🇵🇭",
    "language": "English / Filipino",
    "currency": "Philippine peso (₱)",
    "population": "114M",
    "populationRaw": 114123600,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Philippines",
    "about": "Philippines is a country in South-Eastern Asia, with Manila as its capital. About 114M people live here. Official / major languages include English / Filipino, and everyday transactions typically use the Philippine peso (₱). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of the Philippines dates from the earliest hominin activity in the archipelago at least by 709,000 years ago. Homo luzonensis, a species of archaic humans, was present on the island of Luzon at least by 134,000 years ago. The earliest known anatomically modern human was from Tabon Caves in Palawan dating about 47,000 years. Negrito groups were the first inhabitants to settle in the prehistoric Philippines. These were followed by Austroasiatics, Papuans, and Austronesians. By around 3000 BCE, seafaring Austronesians, who form the majority of the current population, migrated southward from Taiwan.",
    "culture": "Culture in Philippines is closely tied to English language and everyday life in Manila. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Philippines classics",
        "desc": "Signature dishes and home-style cooking from Philippines",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Manila",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South-Eastern Asia ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Manila",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Manila",
        "desc": "Capital city and main gateway to Philippines",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Manila",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Manila, then continue by rail, bus, taxi or domestic flights. Keep some Philippine peso for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Philippines before you go. Register important numbers, keep copies of documents, and use licensed transport in Manila. Emergency info: Local emergency · dialing code +63.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +63",
    "callingCode": "+63",
    "aliases": [
      "Philippines",
      "Republic of the Philippines"
    ]
  },
  {
    "name": "Poland",
    "nameKa": "პოლონეთი",
    "capital": "Warsaw",
    "iso2": "pl",
    "flag": "🇵🇱",
    "language": "Polish",
    "currency": "Polish złoty (zł)",
    "population": "37M",
    "populationRaw": 37401000,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Poland",
    "about": "Poland is a country in Eastern Europe, with Warsaw as its capital. About 37M people live here. Official / major languages include Polish, and everyday transactions typically use the Polish złoty (zł). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Poland spans over a thousand years, from medieval tribes, Christianization and monarchy; through Poland's Golden Age, expansionism and becoming one of the largest European powers; to its collapse and partitions, two world wars, communism, and the restoration of democracy.",
    "culture": "Culture in Poland is closely tied to Polish language and everyday life in Warsaw. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Poland classics",
        "desc": "Signature dishes and home-style cooking from Poland",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Warsaw",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Europe ingredients and Polish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Warsaw",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Warsaw",
        "desc": "Capital city and main gateway to Poland",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Warsaw",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Warsaw, then continue by rail, bus, taxi or domestic flights. Keep some Polish złoty for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Poland before you go. Register important numbers, keep copies of documents, and use licensed transport in Warsaw. Emergency info: Local emergency · dialing code +48.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +48",
    "callingCode": "+48",
    "aliases": [
      "Poland",
      "Republic of Poland"
    ]
  },
  {
    "name": "Portugal",
    "nameKa": "პორტუგალია",
    "capital": "Lisbon",
    "iso2": "pt",
    "flag": "🇵🇹",
    "language": "Portuguese",
    "currency": "Euro (€)",
    "population": "11M",
    "populationRaw": 10749635,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Southern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Portugal",
    "about": "Portugal is a country in Southern Europe, with Lisbon as its capital. About 11M people live here. Official / major languages include Portuguese, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Portugal can be traced from circa 400,000 years ago, when the region of present-day Portugal was inhabited by Homo heidelbergensis.",
    "culture": "Culture in Portugal is closely tied to Portuguese language and everyday life in Lisbon. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Portugal classics",
        "desc": "Signature dishes and home-style cooking from Portugal",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Lisbon",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Europe ingredients and Portuguese culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Lisbon",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Lisbon",
        "desc": "Capital city and main gateway to Portugal",
        "image": "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Lisbon",
        "image": "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Lisbon, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Portugal before you go. Register important numbers, keep copies of documents, and use licensed transport in Lisbon. Emergency info: Local emergency · dialing code +351.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +351",
    "callingCode": "+351",
    "aliases": [
      "Portugal",
      "Portuguese Republic"
    ]
  },
  {
    "name": "Qatar",
    "nameKa": "კატარი",
    "capital": "Doha",
    "iso2": "qa",
    "flag": "🇶🇦",
    "language": "Arabic",
    "currency": "Qatari riyal (ق.ر)",
    "population": "3.2M",
    "populationRaw": 3173024,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Western Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Qatar",
    "about": "Qatar is a country in Western Asia, with Doha as its capital. About 3.2M people live here. Official / major languages include Arabic, and everyday transactions typically use the Qatari riyal (ق.ر). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Qatar spans from its first duration of human occupation to its formation as a modern state. Human occupation of Qatar dates back 50,000 years, and Stone Age encampments and tools have been unearthed in the Arabian Peninsula. Mesopotamia was the first civilization to have a presence in the area during the Neolithic period, evidenced by the discovery of potsherds originating from the Ubaid period near coastal encampments.",
    "culture": "Culture in Qatar is closely tied to Arabic language and everyday life in Doha. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Qatar classics",
        "desc": "Signature dishes and home-style cooking from Qatar",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Doha",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Asia ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Doha",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Doha",
        "desc": "Capital city and main gateway to Qatar",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Doha",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Doha, then continue by rail, bus, taxi or domestic flights. Keep some Qatari riyal for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Qatar before you go. Register important numbers, keep copies of documents, and use licensed transport in Doha. Emergency info: Local emergency · dialing code +974.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +974",
    "callingCode": "+974",
    "aliases": [
      "Qatar",
      "State of Qatar"
    ]
  },
  {
    "name": "Romania",
    "nameKa": "რუმინეთი",
    "capital": "Bucharest",
    "iso2": "ro",
    "flag": "🇷🇴",
    "language": "Romanian",
    "currency": "Romanian leu (lei)",
    "population": "19M",
    "populationRaw": 19036031,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Romania",
    "about": "Romania is a country in Eastern Europe, with Bucharest as its capital. About 19M people live here. Official / major languages include Romanian, and everyday transactions typically use the Romanian leu (lei). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "Romania has been inhabited by humans since the paleolithic. During antiquity, the main population that lived in the area corresponding to modern-day Romania were the Dacians. Dacian civilisation prospered from the second century BC to the second century AD, resulting in the establishment of a Dacian kingdom as a regional power. Following several wars with the Roman Empire, Dacia was conquered in 106 AD, and the kingdom's core was turned into a Roman province. The province was abandoned by 276 AD following several invasions from various barbarian peoples. Many Romanian historians believe that the origin of the Romanians can be traced back to the Dacians and Romans intermixing, which in turn formed the basis of the Romanian ethnicity.",
    "culture": "Culture in Romania is closely tied to Romanian language and everyday life in Bucharest. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Romania classics",
        "desc": "Signature dishes and home-style cooking from Romania",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Bucharest",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Europe ingredients and Romanian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Bucharest",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Bucharest",
        "desc": "Capital city and main gateway to Romania",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Bucharest",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Bucharest, then continue by rail, bus, taxi or domestic flights. Keep some Romanian leu for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Romania before you go. Register important numbers, keep copies of documents, and use licensed transport in Bucharest. Emergency info: Local emergency · dialing code +40.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +40",
    "callingCode": "+40",
    "aliases": [
      "Romania"
    ]
  },
  {
    "name": "Russia",
    "nameKa": "რუსეთი",
    "capital": "Moscow",
    "iso2": "ru",
    "flag": "🇷🇺",
    "language": "Russian",
    "currency": "Russian ruble (₽)",
    "population": "146M",
    "populationRaw": 146028325,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Russia",
    "about": "Russia is a country in Eastern Europe, with Moscow as its capital. About 146M people live here. Official / major languages include Russian, and everyday transactions typically use the Russian ruble (₽). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Russia begins with the histories of the East Slavs. The traditional start date of specifically Russian history is the establishment of the Rus' state in the north in the year 862, ruled by Varangians. In 882, Prince Oleg of Novgorod seized Kiev, uniting the northern and southern lands of the Eastern Slavs under one authority, moving the governance center to Kiev by the end of the 10th century, and maintaining northern and southern parts with significant autonomy from each other. The state adopted Christianity from the Byzantine Empire in 988, beginning the synthesis of Byzantine, Slavic and Scandinavian cultures that defined Russian culture for the next millennium. Kievan Rus' ultimately disintegrated as a state due to the Mongol invasions in 1237–1240. After the 13th century, Moscow emerged as a significant political and cultural force, driving the gathering of Russian territories.",
    "culture": "Culture in Russia is closely tied to Russian language and everyday life in Moscow. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Russia classics",
        "desc": "Signature dishes and home-style cooking from Russia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Moscow",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Europe ingredients and Russian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Moscow",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Moscow",
        "desc": "Capital city and main gateway to Russia",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Moscow",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Moscow, then continue by rail, bus, taxi or domestic flights. Keep some Russian ruble for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Russia before you go. Register important numbers, keep copies of documents, and use licensed transport in Moscow. Emergency info: Local emergency · dialing code +7.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +7",
    "callingCode": "+7",
    "aliases": [
      "Russia",
      "Russian Federation"
    ]
  },
  {
    "name": "Rwanda",
    "nameKa": "რუანდა",
    "capital": "Kigali",
    "iso2": "rw",
    "flag": "🇷🇼",
    "language": "English / French / Kinyarwanda",
    "currency": "Rwandan franc (FRw)",
    "population": "14M",
    "populationRaw": 14104969,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Rwanda",
    "about": "Rwanda is a country in Eastern Africa, with Kigali as its capital. About 14M people live here. Official / major languages include English / French / Kinyarwanda, and everyday transactions typically use the Rwandan franc (FRw). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Human occupation of Rwanda is thought to have begun shortly after the last ice age. By the 11th century, the inhabitants had organized into a number of kingdoms. In the 19th century, Mwami (king) Rwabugiri of the Kingdom of Rwanda conducted a decades-long process of military conquest and administrative consolidation that resulted in the kingdom coming to control most of what is now Rwanda. The colonial powers, Germany and Belgium, allied with the Rwandan court.",
    "culture": "Culture in Rwanda is closely tied to English language and everyday life in Kigali. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Rwanda classics",
        "desc": "Signature dishes and home-style cooking from Rwanda",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Kigali",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Africa ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Kigali",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Kigali",
        "desc": "Capital city and main gateway to Rwanda",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Kigali",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Kigali, then continue by rail, bus, taxi or domestic flights. Keep some Rwandan franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Rwanda before you go. Register important numbers, keep copies of documents, and use licensed transport in Kigali. Emergency info: Local emergency · dialing code +250.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +250",
    "callingCode": "+250",
    "aliases": [
      "Rwanda",
      "Republic of Rwanda"
    ]
  },
  {
    "name": "Saint Kitts and Nevis",
    "nameKa": "სენტ-კიტსი და ნევისი",
    "capital": "Basseterre",
    "iso2": "kn",
    "flag": "🇰🇳",
    "language": "English",
    "currency": "Eastern Caribbean dollar ($)",
    "population": "51K",
    "populationRaw": 51320,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Caribbean",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Saint Kitts and Nevis",
    "about": "Saint Kitts and Nevis is a country in Caribbean, with Basseterre as its capital. About 51K people live here. Official / major languages include English, and everyday transactions typically use the Eastern Caribbean dollar ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Saint Kitts and Nevis have one of the longest written histories in the Caribbean, both islands being among Spain's and England's first colonies in the archipelago. Despite being only two miles apart and quite diminutive in size, Saint Kitts and Nevis were widely recognized as being separate entities with distinct identities until they were forcibly united in the late 19th century.",
    "culture": "Culture in Saint Kitts and Nevis is closely tied to English language and everyday life in Basseterre. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Saint Kitts and Nevis classics",
        "desc": "Signature dishes and home-style cooking from Saint Kitts and Nevis",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Basseterre",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Caribbean ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Basseterre",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Basseterre",
        "desc": "Capital city and main gateway to Saint Kitts and Nevis",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Basseterre",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via Basseterre, then continue by rail, bus, taxi or domestic flights. Keep some Eastern Caribbean dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Saint Kitts and Nevis before you go. Register important numbers, keep copies of documents, and use licensed transport in Basseterre. Emergency info: Local emergency · dialing code +1.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +1",
    "callingCode": "+1",
    "aliases": [
      "Saint Kitts and Nevis",
      "Federation of Saint Christopher and Nevis"
    ]
  },
  {
    "name": "Saint Lucia",
    "nameKa": "სენტ-ლუსია",
    "capital": "Castries",
    "iso2": "lc",
    "flag": "🇱🇨",
    "language": "English",
    "currency": "Eastern Caribbean dollar ($)",
    "population": "184K",
    "populationRaw": 184100,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Caribbean",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Saint Lucia",
    "about": "Saint Lucia is a country in Caribbean, with Castries as its capital. About 184K people live here. Official / major languages include English, and everyday transactions typically use the Eastern Caribbean dollar ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Saint Lucia was inhabited by the Arawak and Kalinago Caribs before European contact in the early 16th century. It was colonized by the British and French in the 17th century and was the subject of several possession changes until 1814, when it was ceded to the British by France for the final time. In 1958, St. Lucia joined the short-lived semi-autonomous West Indies Federation. Saint Lucia was an associated state of the United Kingdom from 1967 to 1979 and then gained full independence on February 22, 1979.",
    "culture": "Culture in Saint Lucia is closely tied to English language and everyday life in Castries. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Saint Lucia classics",
        "desc": "Signature dishes and home-style cooking from Saint Lucia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Castries",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Caribbean ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Castries",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Castries",
        "desc": "Capital city and main gateway to Saint Lucia",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Castries",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Castries, then continue by rail, bus, taxi or domestic flights. Keep some Eastern Caribbean dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Saint Lucia before you go. Register important numbers, keep copies of documents, and use licensed transport in Castries. Emergency info: Local emergency · dialing code +1.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +1",
    "callingCode": "+1",
    "aliases": [
      "Saint Lucia"
    ]
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "nameKa": "სენტ-ვინსენტი და გრენადინები",
    "capital": "Kingstown",
    "iso2": "vc",
    "flag": "🇻🇨",
    "language": "English",
    "currency": "Eastern Caribbean dollar ($)",
    "population": "111K",
    "populationRaw": 110872,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Caribbean",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Saint Vincent and the Grenadines",
    "about": "Saint Vincent and the Grenadines is a country in Caribbean, with Kingstown as its capital. About 111K people live here. Official / major languages include English, and everyday transactions typically use the Eastern Caribbean dollar ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The Indigenous inhabitants of the islands of St. Vincent and the Grenadines were various Amerindian groups. The arrivals of Europeans in the early 16th century did not lead to long term settlement, only in 1717 did the French occupy the island in Barrouallie, though the English laid claim on St. Vincent in 1627. The Treaty of Paris (1763) saw St. Vincent ceded to Britain. Frictions with the British led to the First and Second Carib War in the mid- to late-18th century but the British held on to the islands. A Crown Colony government was installed in 1877, a Legislative Council created in 1925, and universal adult suffrage granted in 1951. Following a referendum in 1979, St. Vincent and the Grenadines became the last of the Windward Islands to gain independence on 27 October 1979.",
    "culture": "Culture in Saint Vincent and the Grenadines is closely tied to English language and everyday life in Kingstown. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Saint Vincent and the Grenadines classics",
        "desc": "Signature dishes and home-style cooking from Saint Vincent and the Grenadines",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Kingstown",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Caribbean ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Kingstown",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Kingstown",
        "desc": "Capital city and main gateway to Saint Vincent and the Grenadines",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Kingstown",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Kingstown, then continue by rail, bus, taxi or domestic flights. Keep some Eastern Caribbean dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Saint Vincent and the Grenadines before you go. Register important numbers, keep copies of documents, and use licensed transport in Kingstown. Emergency info: Local emergency · dialing code +1.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +1",
    "callingCode": "+1",
    "aliases": [
      "Saint Vincent and the Grenadines"
    ]
  },
  {
    "name": "Samoa",
    "nameKa": "სამოა",
    "capital": "Apia",
    "iso2": "ws",
    "flag": "🇼🇸",
    "language": "English / Samoan",
    "currency": "Samoan tālā (SAT)",
    "population": "206K",
    "populationRaw": 205557,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
    "region": "Oceania",
    "subregion": "Polynesia",
    "tags": [
      "Beach",
      "Nature",
      "Adventure"
    ],
    "tagline": "Discover Samoa",
    "about": "Samoa is a country in Polynesia, with Apia as its capital. About 206K people live here. Official / major languages include English / Samoan, and everyday transactions typically use the Samoan tālā (SAT). Travelers visit for beach, nature, adventure experiences — cities, landscapes, food, and local culture.",
    "history": "The Samoan Islands were first settled some 3,500 years ago as part of the Austronesian expansion. Both Samoa's early history and its more recent history are strongly connected to the histories of Tonga and Fiji, nearby islands with which Samoa has long had genealogical links as well as shared cultural traditions.",
    "culture": "Culture in Samoa is closely tied to English language and everyday life in Apia. Expect festivals, markets, arts, and hospitality traditions that reflect Oceania influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Samoa classics",
        "desc": "Signature dishes and home-style cooking from Samoa",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Apia",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Polynesia ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Apia",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Apia",
        "desc": "Capital city and main gateway to Samoa",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Apia",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Apia, then continue by rail, bus, taxi or domestic flights. Keep some Samoan tālā for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Samoa before you go. Register important numbers, keep copies of documents, and use licensed transport in Apia. Emergency info: Local emergency · dialing code +685.",
    "bestSeason": "Nov–Apr",
    "emergency": "Local emergency · dialing code +685",
    "callingCode": "+685",
    "aliases": [
      "Samoa",
      "Independent State of Samoa"
    ]
  },
  {
    "name": "San Marino",
    "nameKa": "სან-მარინო",
    "capital": "San Marino",
    "iso2": "sm",
    "flag": "🇸🇲",
    "language": "Italian",
    "currency": "Euro (€)",
    "population": "34K",
    "populationRaw": 34132,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Southern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover San Marino",
    "about": "San Marino is a country in Southern Europe, with San Marino as its capital. About 34K people live here. Official / major languages include Italian, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "As the only surviving medieval commune in the Italian Peninsula, the history of San Marino is intertwined with the medieval, Renaissance and modern-day history of the Italian peninsula, according to tradition beginning with its foundation in 301 AD.",
    "culture": "Culture in San Marino is closely tied to Italian language and everyday life in San Marino. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "San Marino classics",
        "desc": "Signature dishes and home-style cooking from San Marino",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around San Marino",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Europe ingredients and Italian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in San Marino",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "San Marino",
        "desc": "Capital city and main gateway to San Marino",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near San Marino",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via San Marino, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for San Marino before you go. Register important numbers, keep copies of documents, and use licensed transport in San Marino. Emergency info: Local emergency · dialing code +378.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +378",
    "callingCode": "+378",
    "aliases": [
      "San Marino",
      "Most Serene Republic of San Marino"
    ]
  },
  {
    "name": "Sao Tome and Principe",
    "nameKa": "სან-ტომე და პრინსიპი",
    "capital": "Sao Tome",
    "iso2": "st",
    "flag": "🇸🇹",
    "language": "Portuguese",
    "currency": "Dobra (Db)",
    "population": "210K",
    "populationRaw": 209607,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Middle Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Sao Tome and Principe",
    "about": "Sao Tome and Principe is a country in Middle Africa, with Sao Tome as its capital. About 210K people live here. Official / major languages include Portuguese, and everyday transactions typically use the Dobra (Db). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The islands of São Tomé and Príncipe were uninhabited at the time of the arrival of the Portuguese sometime between 1469 and 1471. After the islands were discovered by the explorers João de Santarém and Pero Escobar, Portuguese navigators explored the islands and decided they would be a good location for bases to trade with the mainland.",
    "culture": "Culture in Sao Tome and Principe is closely tied to Portuguese language and everyday life in Sao Tome. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Sao Tome and Principe classics",
        "desc": "Signature dishes and home-style cooking from Sao Tome and Principe",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Sao Tome",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Middle Africa ingredients and Portuguese culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Sao Tome",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Sao Tome",
        "desc": "Capital city and main gateway to Sao Tome and Principe",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Sao Tome",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Sao Tome, then continue by rail, bus, taxi or domestic flights. Keep some Dobra for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Sao Tome and Principe before you go. Register important numbers, keep copies of documents, and use licensed transport in Sao Tome. Emergency info: Local emergency · dialing code +239.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +239",
    "callingCode": "+239",
    "aliases": [
      "Sao Tome and Principe",
      "São Tomé and Príncipe",
      "Democratic Republic of São Tomé and Príncipe"
    ]
  },
  {
    "name": "Saudi Arabia",
    "nameKa": "საუდის არაბეთი",
    "capital": "Riyadh",
    "iso2": "sa",
    "flag": "🇸🇦",
    "language": "Arabic",
    "currency": "Saudi riyal (﷼)",
    "population": "35M",
    "populationRaw": 35300280,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Western Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Saudi Arabia",
    "about": "Saudi Arabia is a country in Western Asia, with Riyadh as its capital. About 35M people live here. Official / major languages include Arabic, and everyday transactions typically use the Saudi riyal (﷼). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Saudi Arabia as a nation state began with the emergence of the Al Saud dynasty in central Arabia in 1727 and the subsequent establishment of the Emirate of Diriyah. Pre-Islamic Arabia, the territory that constitutes modern Saudi Arabia, was the site of several ancient cultures and civilizations; the prehistory of Saudi Arabia shows some of the earliest traces of human activity in the world.",
    "culture": "Culture in Saudi Arabia is closely tied to Arabic language and everyday life in Riyadh. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Saudi Arabia classics",
        "desc": "Signature dishes and home-style cooking from Saudi Arabia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Riyadh",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Asia ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Riyadh",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Riyadh",
        "desc": "Capital city and main gateway to Saudi Arabia",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Riyadh",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Riyadh, then continue by rail, bus, taxi or domestic flights. Keep some Saudi riyal for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Saudi Arabia before you go. Register important numbers, keep copies of documents, and use licensed transport in Riyadh. Emergency info: Local emergency · dialing code +966.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +966",
    "callingCode": "+966",
    "aliases": [
      "Saudi Arabia",
      "Kingdom of Saudi Arabia"
    ]
  },
  {
    "name": "Senegal",
    "nameKa": "სენეგალი",
    "capital": "Dakar",
    "iso2": "sn",
    "flag": "🇸🇳",
    "language": "French",
    "currency": "West African CFA franc (CFA)",
    "population": "19M",
    "populationRaw": 18593258,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Western Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Senegal",
    "about": "Senegal is a country in Western Africa, with Dakar as its capital. About 19M people live here. Official / major languages include French, and everyday transactions typically use the West African CFA franc (CFA). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Senegal is commonly divided into a number of periods, encompassing the prehistoric era, the precolonial period, colonialism, and the contemporary era.",
    "culture": "Culture in Senegal is closely tied to French language and everyday life in Dakar. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Senegal classics",
        "desc": "Signature dishes and home-style cooking from Senegal",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Dakar",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Africa ingredients and French culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Dakar",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Dakar",
        "desc": "Capital city and main gateway to Senegal",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Dakar",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Dakar, then continue by rail, bus, taxi or domestic flights. Keep some West African CFA franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Senegal before you go. Register important numbers, keep copies of documents, and use licensed transport in Dakar. Emergency info: Local emergency · dialing code +221.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +221",
    "callingCode": "+221",
    "aliases": [
      "Senegal",
      "Republic of Senegal"
    ]
  },
  {
    "name": "Serbia",
    "nameKa": "სერბეთი",
    "capital": "Belgrade",
    "iso2": "rs",
    "flag": "🇷🇸",
    "language": "Serbian",
    "currency": "Serbian dinar (din)",
    "population": "6.6M",
    "populationRaw": 6567783,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Southern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Serbia",
    "about": "Serbia is a country in Southern Europe, with Belgrade as its capital. About 6.6M people live here. Official / major languages include Serbian, and everyday transactions typically use the Serbian dinar (din). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Serbia covers the historical development of Serbia and of its predecessor states, from the Early Stone Age to the present state, as well as that of the Serbian people and of the areas they ruled historically. Serbian habitation and rule has varied much through the ages, and as a result the history of Serbia is similarly elastic in what it includes.",
    "culture": "Culture in Serbia is closely tied to Serbian language and everyday life in Belgrade. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Serbia classics",
        "desc": "Signature dishes and home-style cooking from Serbia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Belgrade",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Europe ingredients and Serbian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Belgrade",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Belgrade",
        "desc": "Capital city and main gateway to Serbia",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Belgrade",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Belgrade, then continue by rail, bus, taxi or domestic flights. Keep some Serbian dinar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Serbia before you go. Register important numbers, keep copies of documents, and use licensed transport in Belgrade. Emergency info: Local emergency · dialing code +381.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +381",
    "callingCode": "+381",
    "aliases": [
      "Serbia",
      "Republic of Serbia"
    ]
  },
  {
    "name": "Seychelles",
    "nameKa": "სეიშელის კუნძულები",
    "capital": "Victoria",
    "iso2": "sc",
    "flag": "🇸🇨",
    "language": "Seychellois Creole / English / French",
    "currency": "Seychellois rupee (SRe)",
    "population": "123K",
    "populationRaw": 122729,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Seychelles",
    "about": "Seychelles is a country in Eastern Africa, with Victoria as its capital. About 123K people live here. Official / major languages include Seychellois Creole / English / French, and everyday transactions typically use the Seychellois rupee (SRe). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Seychelles dates back to the fourth of the Portuguese India Armadas led by Vasco da Gama, though Seychelles was likely already known to Arab navigators and other sailors for many centuries. On 15 March 1503, the scrivener Thomé Lopes noted the sighting of an elevated island, doubtless one of the granitic islands and almost certainly Silhouette Island. The first recorded landing was by the men of the English East India Company ship Ascension, which arrived in Seychelles in January 1609. The islands were claimed by France in 1756. Seychelles remained uninhabited until the first settlers arrived on board the ship Thélemaque, which arrived on 27 August 1770. Captain Leblanc Lecore landed the first colonists, comprising 15 white men, eight Africans and five Indians. The Seychellois Creole language developed as a means of communication between the different races. The British frigate Orpheus commanded by Captain Henry Newcome arrived at Mahé on 16 May 1794. Terms of capitulation were drawn up and the next day Seychelles was surrendered to Britain.",
    "culture": "Culture in Seychelles is closely tied to Seychellois Creole language and everyday life in Victoria. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Seychelles classics",
        "desc": "Signature dishes and home-style cooking from Seychelles",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Victoria",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Africa ingredients and Seychellois Creole culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Victoria",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Victoria",
        "desc": "Capital city and main gateway to Seychelles",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Victoria",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Victoria, then continue by rail, bus, taxi or domestic flights. Keep some Seychellois rupee for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Seychelles before you go. Register important numbers, keep copies of documents, and use licensed transport in Victoria. Emergency info: Local emergency · dialing code +248.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +248",
    "callingCode": "+248",
    "aliases": [
      "Seychelles",
      "Republic of Seychelles"
    ]
  },
  {
    "name": "Sierra Leone",
    "nameKa": "სიერა-ლეონე",
    "capital": "Freetown",
    "iso2": "sl",
    "flag": "🇸🇱",
    "language": "English",
    "currency": "Sierra Leonean leone (Le)",
    "population": "9.1M",
    "populationRaw": 9077691,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Western Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Sierra Leone",
    "about": "Sierra Leone is a country in Western Africa, with Freetown as its capital. About 9.1M people live here. Official / major languages include English, and everyday transactions typically use the Sierra Leonean leone (Le). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Sierra Leone first became inhabited by indigenous African peoples at least 2,500 years ago. The Limba were the first tribe known to inhabit Sierra Leone. The dense tropical rainforest partially isolated the region from other West African cultures, and it became a refuge for peoples escaping violence. Sierra Leone was named by Portuguese explorer Pedro de Sintra, who mapped the region in 1462. The Freetown estuary provided a good natural harbour for ships to shelter and replenish drinking water, and gained more international attention as coastal and trans-Atlantic trade supplanted",
    "culture": "Culture in Sierra Leone is closely tied to English language and everyday life in Freetown. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Sierra Leone classics",
        "desc": "Signature dishes and home-style cooking from Sierra Leone",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Freetown",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Africa ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Freetown",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Freetown",
        "desc": "Capital city and main gateway to Sierra Leone",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Freetown",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Freetown, then continue by rail, bus, taxi or domestic flights. Keep some Sierra Leonean leone for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Sierra Leone before you go. Register important numbers, keep copies of documents, and use licensed transport in Freetown. Emergency info: Local emergency · dialing code +232.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +232",
    "callingCode": "+232",
    "aliases": [
      "Sierra Leone",
      "Republic of Sierra Leone"
    ]
  },
  {
    "name": "Singapore",
    "nameKa": "სინგაპური",
    "capital": "Singapur",
    "iso2": "sg",
    "flag": "🇸🇬",
    "language": "English / Malay / Tamil",
    "currency": "Singapore dollar ($)",
    "population": "6M",
    "populationRaw": 6036900,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Singapore",
    "about": "Singapore is a country in South-Eastern Asia, with Singapur as its capital. About 6M people live here. Official / major languages include English / Malay / Tamil, and everyday transactions typically use the Singapore dollar ($). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of the modern state of Singapore dates back to its founding in the early 19th century; however, evidence suggests that a significant trading settlement existed on the island in the 14th century. The last ruler of the Kingdom of Singapura, Parameswara, was expelled by the Majapahit or the Siamese before he founded Malacca. Singapore then came under the Malacca Sultanate and subsequently the Johor Sultanate. In 1819, British statesman Stamford Raffles negotiated a treaty whereby Johor would allow the British to locate a trading port on the island, ultimately leading to the establishment of the Crown colony of Singapore in 1867. Important reasons for the rise of Singapore were its nodal position at the tip of the Malay Peninsula flanked by the Pacific and Indian Oceans, the presence of a natural sheltered harbour, as well as its status as a free port.",
    "culture": "Culture in Singapore is closely tied to English language and everyday life in Singapur. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Singapore classics",
        "desc": "Signature dishes and home-style cooking from Singapore",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Singapur",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South-Eastern Asia ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Singapur",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Singapur",
        "desc": "Capital city and main gateway to Singapore",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Singapur",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Singapur, then continue by rail, bus, taxi or domestic flights. Keep some Singapore dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Singapore before you go. Register important numbers, keep copies of documents, and use licensed transport in Singapur. Emergency info: Local emergency · dialing code +65.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +65",
    "callingCode": "+65",
    "aliases": [
      "Singapore",
      "Republic of Singapore"
    ]
  },
  {
    "name": "Slovakia",
    "nameKa": "სლოვაკეთი",
    "capital": "Bratislava",
    "iso2": "sk",
    "flag": "🇸🇰",
    "language": "Slovak",
    "currency": "Euro (€)",
    "population": "5.4M",
    "populationRaw": 5413813,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Slovakia",
    "about": "Slovakia is a country in Eastern Europe, with Bratislava as its capital. About 5.4M people live here. Official / major languages include Slovak, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Slovakia spans from prehistoric settlements to the modern Slovak Republic. Situated in Central Europe, the region’s earliest evidence of human habitation dates to the Palaeolithic era, with significant Neolithic and Bronze Age cultures. By the Iron Age, Celtic tribes like the Boii established settlements, later displaced by Germanic and Slavic migrations. The Slavs arrived in the 5th–6th centuries, forming the basis of Slavic states like Great Moravia, which adopted Christianity through Cyrillo-Methodian missionary activity.",
    "culture": "Culture in Slovakia is closely tied to Slovak language and everyday life in Bratislava. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Slovakia classics",
        "desc": "Signature dishes and home-style cooking from Slovakia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Bratislava",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Europe ingredients and Slovak culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Bratislava",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Bratislava",
        "desc": "Capital city and main gateway to Slovakia",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Bratislava",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Bratislava, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Slovakia before you go. Register important numbers, keep copies of documents, and use licensed transport in Bratislava. Emergency info: Local emergency · dialing code +421.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +421",
    "callingCode": "+421",
    "aliases": [
      "Slovakia",
      "Slovak Republic"
    ]
  },
  {
    "name": "Slovenia",
    "nameKa": "სლოვენია",
    "capital": "Ljubljana",
    "iso2": "si",
    "flag": "🇸🇮",
    "language": "Slovene",
    "currency": "Euro (€)",
    "population": "2.1M",
    "populationRaw": 2130638,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Southern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Slovenia",
    "about": "Slovenia is a country in Southern Europe, with Ljubljana as its capital. About 2.1M people live here. Official / major languages include Slovene, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Slovenia chronicles the period of the Slovenian territory from the 5th century BC to the present. In the Early Bronze Age, Proto-Illyrian tribes settled an area stretching from present-day Albania to the city of Trieste. The Slovenian territory was part of the Roman Empire, and it was devastated by the Migration Period's incursions during late Antiquity and the Early Middle Ages. The main route from the Pannonian plain to Italy ran through present-day Slovenia. Alpine Slavs, ancestors of modern-day Slovenians, settled the area in the late 6th Century AD. The Holy Roman Empire controlled the land for nearly 1,000 years. Between the mid-14th century through 1918 most of Slovenia was under Habsburg rule. In 1918, most Slovene territory became part of the Kingdom of Serbs, Croats, and Slovenes, and in 1929 the Drava Banovina was created within the Kingdom of Yugoslavia with its capital in Ljubljana, corresponding to Slovenian-majority territories within the state. The Socialist Republic of Slovenia was created in 1945 as part of federal Yugoslavia.",
    "culture": "Culture in Slovenia is closely tied to Slovene language and everyday life in Ljubljana. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Slovenia classics",
        "desc": "Signature dishes and home-style cooking from Slovenia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Ljubljana",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Europe ingredients and Slovene culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Ljubljana",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Ljubljana",
        "desc": "Capital city and main gateway to Slovenia",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Ljubljana",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Ljubljana, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Slovenia before you go. Register important numbers, keep copies of documents, and use licensed transport in Ljubljana. Emergency info: Local emergency · dialing code +386.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +386",
    "callingCode": "+386",
    "aliases": [
      "Slovenia",
      "Republic of Slovenia"
    ]
  },
  {
    "name": "Solomon Islands",
    "nameKa": "სოლომონის კუნძულები",
    "capital": "Honiara",
    "iso2": "sb",
    "flag": "🇸🇧",
    "language": "English",
    "currency": "Solomon Islands dollar (Si$)",
    "population": "750K",
    "populationRaw": 750325,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
    "region": "Oceania",
    "subregion": "Melanesia",
    "tags": [
      "Beach",
      "Nature",
      "Adventure"
    ],
    "tagline": "Discover Solomon Islands",
    "about": "Solomon Islands is a country in Melanesia, with Honiara as its capital. About 750K people live here. Official / major languages include English, and everyday transactions typically use the Solomon Islands dollar (Si$). Travelers visit for beach, nature, adventure experiences — cities, landscapes, food, and local culture.",
    "history": "Solomon Islands is a sovereign state in the Melanesia subregion of Oceania in the western Pacific Ocean. This page is about the history of the nation state rather than the broader geographical area of the Solomon Islands archipelago, which covers both Solomon Islands and Bougainville Island, a province of Papua New Guinea. For the history of the archipelago not covered here refer to the former administration of the British Solomon Islands Protectorate, the North Solomon Islands and the History of Bougainville.",
    "culture": "Culture in Solomon Islands is closely tied to English language and everyday life in Honiara. Expect festivals, markets, arts, and hospitality traditions that reflect Oceania influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Solomon Islands classics",
        "desc": "Signature dishes and home-style cooking from Solomon Islands",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Honiara",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Melanesia ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Honiara",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Honiara",
        "desc": "Capital city and main gateway to Solomon Islands",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Honiara",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Honiara, then continue by rail, bus, taxi or domestic flights. Keep some Solomon Islands dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Solomon Islands before you go. Register important numbers, keep copies of documents, and use licensed transport in Honiara. Emergency info: Local emergency · dialing code +677.",
    "bestSeason": "Nov–Apr",
    "emergency": "Local emergency · dialing code +677",
    "callingCode": "+677",
    "aliases": [
      "Solomon Islands"
    ]
  },
  {
    "name": "Somalia",
    "nameKa": "სომალი",
    "capital": "Mogadishu",
    "iso2": "so",
    "flag": "🇸🇴",
    "language": "Arabic / Somali",
    "currency": "Somali shilling (Sh.so.)",
    "population": "20M",
    "populationRaw": 19655000,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Somalia",
    "about": "Somalia is a country in Eastern Africa, with Mogadishu as its capital. About 20M people live here. Official / major languages include Arabic / Somali, and everyday transactions typically use the Somali shilling (Sh.so.). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Somalia, officially the Federal Republic of Somalia and formerly known as the Somali Democratic Republic, is a country located in the Horn of Africa.",
    "culture": "Culture in Somalia is closely tied to Arabic language and everyday life in Mogadishu. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Somalia classics",
        "desc": "Signature dishes and home-style cooking from Somalia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Mogadishu",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Africa ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Mogadishu",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Mogadishu",
        "desc": "Capital city and main gateway to Somalia",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Mogadishu",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Mogadishu, then continue by rail, bus, taxi or domestic flights. Keep some Somali shilling for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Somalia before you go. Register important numbers, keep copies of documents, and use licensed transport in Mogadishu. Emergency info: Local emergency · dialing code +252.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +252",
    "callingCode": "+252",
    "aliases": [
      "Somalia",
      "Federal Republic of Somalia"
    ]
  },
  {
    "name": "South Africa",
    "nameKa": "სამხრეთ აფრიკა",
    "capital": "Pretoria",
    "iso2": "za",
    "flag": "🇿🇦",
    "language": "Afrikaans / English / Southern Ndebele",
    "currency": "South African rand (R)",
    "population": "63M",
    "populationRaw": 63100945,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Southern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover South Africa",
    "about": "South Africa is a country in Southern Africa, with Pretoria as its capital. About 63M people live here. Official / major languages include Afrikaans / English / Southern Ndebele, and everyday transactions typically use the South African rand (R). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The first modern humans are believed to have inhabited South Africa more than 100,000 years ago. South Africa's first known inhabitants have been collectively referred to as the Khoisan, the Khoekhoe and the San. Starting in about 400 AD, these groups were then joined by the Bantu ethnic groups who migrated from Western and Central Africa during what is known as the Bantu expansion. The Bantu tribes were mainly limited to the area north of the Soutpansberg and the northeastern part of South Africa until the later Middle Iron Age (1000-1300), after which they started migrating south into the interior of the country.",
    "culture": "Culture in South Africa is closely tied to Afrikaans language and everyday life in Pretoria. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "South Africa classics",
        "desc": "Signature dishes and home-style cooking from South Africa",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Pretoria",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Africa ingredients and Afrikaans culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Pretoria",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Pretoria",
        "desc": "Capital city and main gateway to South Africa",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Pretoria",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Pretoria, then continue by rail, bus, taxi or domestic flights. Keep some South African rand for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for South Africa before you go. Register important numbers, keep copies of documents, and use licensed transport in Pretoria. Emergency info: Local emergency · dialing code +27.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +27",
    "callingCode": "+27",
    "aliases": [
      "South Africa",
      "Republic of South Africa"
    ]
  },
  {
    "name": "South Sudan",
    "nameKa": "სამხრეთ სუდანი",
    "capital": "Juba",
    "iso2": "ss",
    "flag": "🇸🇸",
    "language": "English",
    "currency": "South Sudanese pound (£)",
    "population": "16M",
    "populationRaw": 15786898,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Middle Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover South Sudan",
    "about": "South Sudan is a country in Middle Africa, with Juba as its capital. About 16M people live here. Official / major languages include English, and everyday transactions typically use the South Sudanese pound (£). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of South Sudan comprises the history of the territory of present-day South Sudan and the peoples inhabiting the region.",
    "culture": "Culture in South Sudan is closely tied to English language and everyday life in Juba. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "South Sudan classics",
        "desc": "Signature dishes and home-style cooking from South Sudan",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Juba",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Middle Africa ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Juba",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Juba",
        "desc": "Capital city and main gateway to South Sudan",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Juba",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Juba, then continue by rail, bus, taxi or domestic flights. Keep some South Sudanese pound for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for South Sudan before you go. Register important numbers, keep copies of documents, and use licensed transport in Juba. Emergency info: Local emergency · dialing code +211.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +211",
    "callingCode": "+211",
    "aliases": [
      "South Sudan",
      "Republic of South Sudan"
    ]
  },
  {
    "name": "Spain",
    "nameKa": "ესპანეთი",
    "capital": "Madrid",
    "iso2": "es",
    "flag": "🇪🇸",
    "language": "Spanish",
    "currency": "Euro (€)",
    "population": "49M",
    "populationRaw": 49315949,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Southern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Spain",
    "about": "Spain is a country in Southern Europe, with Madrid as its capital. About 49M people live here. Official / major languages include Spanish, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Spain dates to contact between the pre-Roman peoples of the Mediterranean coast of the Iberian Peninsula with the Greeks and Phoenicians. During Classical Antiquity, the peninsula was the site of multiple successive colonizations of Greeks, Carthaginians, and Romans. Native peoples of the peninsula, such as the Tartessos, intermingled with the colonizers to create a uniquely Iberian culture. The Romans referred to the entire peninsula as Hispania, from which the name \"Spain\" originates. As was the rest of the Western Roman Empire, Spain was subject to numerous invasions of Germanic tribes during the 4th and 5th centuries AD, resulting in the end of Roman rule and the establishment of Germanic kingdoms, marking the beginning of the Middle Ages in Spain.",
    "culture": "Culture in Spain is closely tied to Spanish language and everyday life in Madrid. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Spain classics",
        "desc": "Signature dishes and home-style cooking from Spain",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Madrid",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Europe ingredients and Spanish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Madrid",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Madrid",
        "desc": "Capital city and main gateway to Spain",
        "image": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Madrid",
        "image": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Madrid, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Spain before you go. Register important numbers, keep copies of documents, and use licensed transport in Madrid. Emergency info: Local emergency · dialing code +34.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +34",
    "callingCode": "+34",
    "aliases": [
      "Spain",
      "Kingdom of Spain"
    ]
  },
  {
    "name": "Sri Lanka",
    "nameKa": "შრი-ლანკა",
    "capital": "Colombo",
    "iso2": "lk",
    "flag": "🇱🇰",
    "language": "Sinhala / Tamil",
    "currency": "Sri Lankan rupee (Rs)",
    "population": "22M",
    "populationRaw": 21763170,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Southern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Sri Lanka",
    "about": "Sri Lanka is a country in Southern Asia, with Colombo as its capital. About 22M people live here. Official / major languages include Sinhala / Tamil, and everyday transactions typically use the Sri Lankan rupee (Rs). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Sri Lanka covers Sri Lanka and its surrounding regions of South Asia, Southeast Asia and the Indian Ocean.",
    "culture": "Culture in Sri Lanka is closely tied to Sinhala language and everyday life in Colombo. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Sri Lanka classics",
        "desc": "Signature dishes and home-style cooking from Sri Lanka",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Colombo",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Asia ingredients and Sinhala culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Colombo",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Colombo",
        "desc": "Capital city and main gateway to Sri Lanka",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Colombo",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via Colombo, then continue by rail, bus, taxi or domestic flights. Keep some Sri Lankan rupee for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Sri Lanka before you go. Register important numbers, keep copies of documents, and use licensed transport in Colombo. Emergency info: Local emergency · dialing code +94.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +94",
    "callingCode": "+94",
    "aliases": [
      "Sri Lanka",
      "Democratic Socialist Republic of Sri Lanka"
    ]
  },
  {
    "name": "Sudan",
    "nameKa": "სუდანი",
    "capital": "Khartoum",
    "iso2": "sd",
    "flag": "🇸🇩",
    "language": "Arabic / English",
    "currency": "Sudanese pound (.س.ج)",
    "population": "52M",
    "populationRaw": 51662000,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Northern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Sudan",
    "about": "Sudan is a country in Northern Africa, with Khartoum as its capital. About 52M people live here. Official / major languages include Arabic / English, and everyday transactions typically use the Sudanese pound (.س.ج). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Sudan refers to the territory that today makes up Republic of the Sudan and the state of South Sudan, which became independent in 2011. The territory of Sudan is geographically part of a larger African region, also known as \"Sudan\". The term is derived from Arabic: بلاد السودان bilād as-sūdān, or \"land of the black people\", and has sometimes been used more widely referring to the Sahel belt of West and Central Africa.",
    "culture": "Culture in Sudan is closely tied to Arabic language and everyday life in Khartoum. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Sudan classics",
        "desc": "Signature dishes and home-style cooking from Sudan",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Khartoum",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Northern Africa ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Khartoum",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Khartoum",
        "desc": "Capital city and main gateway to Sudan",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Khartoum",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Khartoum, then continue by rail, bus, taxi or domestic flights. Keep some Sudanese pound for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Sudan before you go. Register important numbers, keep copies of documents, and use licensed transport in Khartoum. Emergency info: Local emergency · dialing code +249.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +249",
    "callingCode": "+249",
    "aliases": [
      "Sudan",
      "Republic of the Sudan"
    ]
  },
  {
    "name": "Suriname",
    "nameKa": "სურინამი",
    "capital": "Paramaribo",
    "iso2": "sr",
    "flag": "🇸🇷",
    "language": "Dutch",
    "currency": "Surinamese dollar ($)",
    "population": "617K",
    "populationRaw": 616500,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "South America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Suriname",
    "about": "Suriname is a country in South America, with Paramaribo as its capital. About 617K people live here. Official / major languages include Dutch, and everyday transactions typically use the Surinamese dollar ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The early history of Suriname dates from 3000 BCE when Indigenous peoples first inhabited the area. The Dutch acquired Suriname from the English, and European settlement in any numbers dates from the 17th century, when it was a plantation colony utilising slavery for sugar cultivation. With abolition in the late 19th century, planters sought labour from China, Portugal (Madeira), the British Raj, and the Dutch colony Dutch East Indies. Dutch is Suriname's official language. Owing to its diverse population, it has also developed a creole language, Sranan Tongo.",
    "culture": "Culture in Suriname is closely tied to Dutch language and everyday life in Paramaribo. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Suriname classics",
        "desc": "Signature dishes and home-style cooking from Suriname",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Paramaribo",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South America ingredients and Dutch culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Paramaribo",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Paramaribo",
        "desc": "Capital city and main gateway to Suriname",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Paramaribo",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Paramaribo, then continue by rail, bus, taxi or domestic flights. Keep some Surinamese dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Suriname before you go. Register important numbers, keep copies of documents, and use licensed transport in Paramaribo. Emergency info: Local emergency · dialing code +597.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +597",
    "callingCode": "+597",
    "aliases": [
      "Suriname",
      "Republic of Suriname"
    ]
  },
  {
    "name": "Sweden",
    "nameKa": "შვედეთი",
    "capital": "Stockholm",
    "iso2": "se",
    "flag": "🇸🇪",
    "language": "Swedish",
    "currency": "Swedish krona (ko)",
    "population": "11M",
    "populationRaw": 10596652,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Northern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Sweden",
    "about": "Sweden is a country in Northern Europe, with Stockholm as its capital. About 11M people live here. Official / major languages include Swedish, and everyday transactions typically use the Swedish krona (ko). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Sweden can be traced back to the melting of the Northern polar ice cap. From as early as 12000 BC, humans have inhabited this area. Throughout the Stone Age, between 8000 BC and 6000 BC, early inhabitants used stone-crafting methods to make tools and weapons for hunting, gathering and fishing as means of survival. Written sources about Sweden before AD 1000 are rare and short, usually written by outsiders. It is usually accepted that Swedish recorded history, in contrast with pre-history, starts around the late 10th century, when sources are common enough that they can be contrasted with each other.",
    "culture": "Culture in Sweden is closely tied to Swedish language and everyday life in Stockholm. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Sweden classics",
        "desc": "Signature dishes and home-style cooking from Sweden",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Stockholm",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Northern Europe ingredients and Swedish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Stockholm",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Stockholm",
        "desc": "Capital city and main gateway to Sweden",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Stockholm",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Stockholm, then continue by rail, bus, taxi or domestic flights. Keep some Swedish krona for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Sweden before you go. Register important numbers, keep copies of documents, and use licensed transport in Stockholm. Emergency info: Local emergency · dialing code +46.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +46",
    "callingCode": "+46",
    "aliases": [
      "Sweden",
      "Kingdom of Sweden"
    ]
  },
  {
    "name": "Switzerland",
    "nameKa": "შვეიცარია",
    "capital": "Bern",
    "iso2": "ch",
    "flag": "🇨🇭",
    "language": "French / Swiss German / Italian",
    "currency": "Swiss franc (CHf)",
    "population": "9.1M",
    "populationRaw": 9082848,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Western Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Switzerland",
    "about": "Switzerland is a country in Western Europe, with Bern as its capital. About 9.1M people live here. Official / major languages include French / Swiss German / Italian, and everyday transactions typically use the Swiss franc (CHf). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "Since 1848, the Swiss Confederation has been a federal republic of relatively autonomous cantons, some of which have a history of federation that goes back more than 700 years, putting them among the world's oldest surviving republics.",
    "culture": "Culture in Switzerland is closely tied to French language and everyday life in Bern. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Switzerland classics",
        "desc": "Signature dishes and home-style cooking from Switzerland",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Bern",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Europe ingredients and French culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Bern",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Bern",
        "desc": "Capital city and main gateway to Switzerland",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Bern",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Bern, then continue by rail, bus, taxi or domestic flights. Keep some Swiss franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Switzerland before you go. Register important numbers, keep copies of documents, and use licensed transport in Bern. Emergency info: Local emergency · dialing code +41.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +41",
    "callingCode": "+41",
    "aliases": [
      "Switzerland",
      "Swiss Confederation"
    ]
  },
  {
    "name": "Syria",
    "nameKa": "სირია",
    "capital": "Damascus",
    "iso2": "sy",
    "flag": "🇸🇾",
    "language": "Arabic",
    "currency": "Syrian pound (LS)",
    "population": "26M",
    "populationRaw": 25620000,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Western Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Syria",
    "about": "Syria is a country in Western Asia, with Damascus as its capital. About 26M people live here. Official / major languages include Arabic, and everyday transactions typically use the Syrian pound (LS). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Syria covers events which occurred on the territory of the Syrian Arab Republic and in the region of Syria. The territory of the Syrian Arab Republic was occupied and ruled by several empires, including the Sumerians, Egyptians, Amorites, Ugarites, Hittites, Mitanni, Assyrians, Babylonians, Canaanites, Phoenicians, Arameans, Persians, Greeks and Romans. Syria is considered to have emerged as an independent country for the first time on 24 October 1945, upon the signing of the United Nations Charter by the Syrian government, effectively ending France's mandate by the League of Nations to \"render administrative advice and assistance to the population\" of Syria, which came in effect in April 1946.",
    "culture": "Culture in Syria is closely tied to Arabic language and everyday life in Damascus. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Syria classics",
        "desc": "Signature dishes and home-style cooking from Syria",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Damascus",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Asia ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Damascus",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Damascus",
        "desc": "Capital city and main gateway to Syria",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Damascus",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Damascus, then continue by rail, bus, taxi or domestic flights. Keep some Syrian pound for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Syria before you go. Register important numbers, keep copies of documents, and use licensed transport in Damascus. Emergency info: Local emergency · dialing code +963.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +963",
    "callingCode": "+963",
    "aliases": [
      "Syria",
      "Syrian Arab Republic"
    ]
  },
  {
    "name": "Tajikistan",
    "nameKa": "ტაჯიკეთი",
    "capital": "Dushanbe",
    "iso2": "tj",
    "flag": "🇹🇯",
    "language": "Russian / Tajik",
    "currency": "Tajikistani somoni (SM)",
    "population": "10M",
    "populationRaw": 10499000,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Central Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Tajikistan",
    "about": "Tajikistan is a country in Central Asia, with Dushanbe as its capital. About 10M people live here. Official / major languages include Russian / Tajik, and everyday transactions typically use the Tajikistani somoni (SM). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The Tajik people came under Russian rule in the 1860s. The Basmachi revolt broke out in the wake of the Russian Revolution of 1917 and was quelled in the early 1920s, during the Russian Civil War. In 1924, Tajikistan became an Autonomous Soviet Socialist Republic within Uzbekistan, known as the Tajik ASSR. In 1929, Tajikistan was made one of the constituent republics of the Soviet Union—the Tajik Soviet Socialist Republic —and retained this status until gaining independence in 1991, following the dissolution of the Soviet Union.",
    "culture": "Culture in Tajikistan is closely tied to Russian language and everyday life in Dushanbe. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Tajikistan classics",
        "desc": "Signature dishes and home-style cooking from Tajikistan",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Dushanbe",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Central Asia ingredients and Russian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Dushanbe",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Dushanbe",
        "desc": "Capital city and main gateway to Tajikistan",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Dushanbe",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Dushanbe, then continue by rail, bus, taxi or domestic flights. Keep some Tajikistani somoni for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Tajikistan before you go. Register important numbers, keep copies of documents, and use licensed transport in Dushanbe. Emergency info: Local emergency · dialing code +992.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +992",
    "callingCode": "+992",
    "aliases": [
      "Tajikistan",
      "Republic of Tajikistan"
    ]
  },
  {
    "name": "Tanzania",
    "nameKa": "ტანზანია",
    "capital": "Dodoma",
    "iso2": "tz",
    "flag": "🇹🇿",
    "language": "English / Swahili",
    "currency": "Tanzanian shilling (TSh)",
    "population": "68M",
    "populationRaw": 68153004,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Tanzania",
    "about": "Tanzania is a country in Eastern Africa, with Dodoma as its capital. About 68M people live here. Official / major languages include English / Swahili, and everyday transactions typically use the Tanzanian shilling (TSh). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The modern-day African Great Lakes state of Tanzania dates formally from 1964, when it was formed out of the union of the much larger mainland territory of Tanganyika and the coastal archipelago of Zanzibar. The former was a colony and part of German East Africa from the 1880s to 1919 when, under the League of Nations, it became a British mandate. It served as a British colony, providing financial help, munitions, and soldiers. In 1947, Tanganyika became a United Nations Trust Territory under British administration, a status it kept until its independence in 1961. The island of Zanzibar thrived as a trading hub, successively controlled by the Portuguese, the Sultanate of Oman, and then as a British protectorate by the end of the nineteenth century.",
    "culture": "Culture in Tanzania is closely tied to English language and everyday life in Dodoma. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Tanzania classics",
        "desc": "Signature dishes and home-style cooking from Tanzania",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Dodoma",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Africa ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Dodoma",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Dodoma",
        "desc": "Capital city and main gateway to Tanzania",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Dodoma",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Dodoma, then continue by rail, bus, taxi or domestic flights. Keep some Tanzanian shilling for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Tanzania before you go. Register important numbers, keep copies of documents, and use licensed transport in Dodoma. Emergency info: Local emergency · dialing code +255.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +255",
    "callingCode": "+255",
    "aliases": [
      "Tanzania",
      "United Republic of Tanzania"
    ]
  },
  {
    "name": "Thailand",
    "nameKa": "ტაილანდი",
    "capital": "Bangkok",
    "iso2": "th",
    "flag": "🇹🇭",
    "language": "Thai",
    "currency": "Thai baht (฿)",
    "population": "66M",
    "populationRaw": 65859640,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Thailand",
    "about": "Thailand is a country in South-Eastern Asia, with Bangkok as its capital. About 66M people live here. Official / major languages include Thai, and everyday transactions typically use the Thai baht (฿). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The History of Thailand begins with the earliest Bronze and Iron Age sites such as Ban Chiang around 1500 BCE. The region of present-day Thailand was inhabited by the main indigenous groups: Mon, Lawa, Khmer, and Malay in the 1st millennium. The Kra-Dai-speaking Tai tribes mass migrated from South China to Mainland Southeast Asia between the 8th-10th century. This intensified in the 13th century by pressure of the Mongol armies in China. The Tai tribes settled in northern and central areas like the city-state Lavo. The Tai people assimilated with the indigenous groups and adopted the Dvaravati culture which thrived in the city-states along the Chao Phraya Basin.",
    "culture": "Culture in Thailand is closely tied to Thai language and everyday life in Bangkok. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Thailand classics",
        "desc": "Signature dishes and home-style cooking from Thailand",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Bangkok",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South-Eastern Asia ingredients and Thai culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Bangkok",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Bangkok",
        "desc": "Capital city and main gateway to Thailand",
        "image": "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Bangkok",
        "image": "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Bangkok, then continue by rail, bus, taxi or domestic flights. Keep some Thai baht for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Thailand before you go. Register important numbers, keep copies of documents, and use licensed transport in Bangkok. Emergency info: Local emergency · dialing code +66.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +66",
    "callingCode": "+66",
    "aliases": [
      "Thailand",
      "Kingdom of Thailand"
    ]
  },
  {
    "name": "Timor-Leste",
    "nameKa": "ტიმორ-ლესტე",
    "capital": "Dili",
    "iso2": "tl",
    "flag": "🇹🇱",
    "language": "Portuguese / Tetum",
    "currency": "United States dollar ($)",
    "population": "1.4M",
    "populationRaw": 1391221,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Timor-Leste",
    "about": "Timor-Leste is a country in South-Eastern Asia, with Dili as its capital. About 1.4M people live here. Official / major languages include Portuguese / Tetum, and everyday transactions typically use the United States dollar ($). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "Timor-Leste, officially the Democratic Republic of Timor-Leste, is an island country in Southeast Asia. The country comprises the eastern half of the island of Timor and the nearby islands of Atauro and Jaco. The first inhabitants are thought to be descendant of Australoid and Melanesian peoples. The Portuguese began to trade with Timor by the early 16th century and colonised it throughout the mid-century. Skirmishing with the Dutch in the region eventually resulted in an 1859 treaty for which Portugal ceded the western half of the island. Imperial Japan occupied East Timor during World War II, but Portugal resumed colonial authority after the Japanese surrender.",
    "culture": "Culture in Timor-Leste is closely tied to Portuguese language and everyday life in Dili. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Timor-Leste classics",
        "desc": "Signature dishes and home-style cooking from Timor-Leste",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Dili",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South-Eastern Asia ingredients and Portuguese culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Dili",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Dili",
        "desc": "Capital city and main gateway to Timor-Leste",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Dili",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Dili, then continue by rail, bus, taxi or domestic flights. Keep some United States dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Timor-Leste before you go. Register important numbers, keep copies of documents, and use licensed transport in Dili. Emergency info: Local emergency · dialing code +670.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +670",
    "callingCode": "+670",
    "aliases": [
      "Timor-Leste",
      "East Timor",
      "Democratic Republic of Timor-Leste"
    ]
  },
  {
    "name": "Togo",
    "nameKa": "ტოგო",
    "capital": "Lome",
    "iso2": "tg",
    "flag": "🇹🇬",
    "language": "French",
    "currency": "West African CFA franc (CFA)",
    "population": "8.1M",
    "populationRaw": 8095498,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Western Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Togo",
    "about": "Togo is a country in Western Africa, with Lome as its capital. About 8.1M people live here. Official / major languages include French, and everyday transactions typically use the West African CFA franc (CFA). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Togo can be traced to archaeological finds which indicate that ancient tribes were able to produce pottery and process tin. During the period from the 11th century to the 16th century, the Ewé, the Mina, the Gun, and various other tribes entered the region. Most of them settled in coastal areas. The Portuguese arrived in the late 15th century, followed by other European powers. Until the 19th century, the coastal region was a major slave trade centre, earning Togo and the surrounding region the name \"The Slave Coast\".",
    "culture": "Culture in Togo is closely tied to French language and everyday life in Lome. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Togo classics",
        "desc": "Signature dishes and home-style cooking from Togo",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Lome",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Africa ingredients and French culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Lome",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Lome",
        "desc": "Capital city and main gateway to Togo",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Lome",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Lome, then continue by rail, bus, taxi or domestic flights. Keep some West African CFA franc for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Togo before you go. Register important numbers, keep copies of documents, and use licensed transport in Lome. Emergency info: Local emergency · dialing code +228.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +228",
    "callingCode": "+228",
    "aliases": [
      "Togo",
      "Togolese Republic"
    ]
  },
  {
    "name": "Tonga",
    "nameKa": "ტონგა",
    "capital": "Nuku'alofa",
    "iso2": "to",
    "flag": "🇹🇴",
    "language": "English / Tongan",
    "currency": "Tongan paʻanga ($)",
    "population": "100K",
    "populationRaw": 100179,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
    "region": "Oceania",
    "subregion": "Polynesia",
    "tags": [
      "Beach",
      "Nature",
      "Adventure"
    ],
    "tagline": "Discover Tonga",
    "about": "Tonga is a country in Polynesia, with Nuku'alofa as its capital. About 100K people live here. Official / major languages include English / Tongan, and everyday transactions typically use the Tongan paʻanga ($). Travelers visit for beach, nature, adventure experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Tonga is recorded since the ninth century BC. Tongatapu was the first island to be settled in Polynesia, when people from the Lapita culture settled there around 3000 years ago. The region is now controlled by the Kingdom of Tonga. Along with Samoa, Tonga served as a gateway into the rest of Polynesia. Ancient Tongan mythologies recorded by early European explorers report the islands of 'Ata and Tongatapu as the first islands having been hauled to the surface from the deep ocean by Maui.",
    "culture": "Culture in Tonga is closely tied to English language and everyday life in Nuku'alofa. Expect festivals, markets, arts, and hospitality traditions that reflect Oceania influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Tonga classics",
        "desc": "Signature dishes and home-style cooking from Tonga",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Nuku'alofa",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Polynesia ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Nuku'alofa",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Nuku'alofa",
        "desc": "Capital city and main gateway to Tonga",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Nuku'alofa",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Nuku'alofa, then continue by rail, bus, taxi or domestic flights. Keep some Tongan paʻanga for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Tonga before you go. Register important numbers, keep copies of documents, and use licensed transport in Nuku'alofa. Emergency info: Local emergency · dialing code +676.",
    "bestSeason": "Nov–Apr",
    "emergency": "Local emergency · dialing code +676",
    "callingCode": "+676",
    "aliases": [
      "Tonga",
      "Kingdom of Tonga"
    ]
  },
  {
    "name": "Trinidad and Tobago",
    "nameKa": "ტრინიდადი და ტობაგო",
    "capital": "Port of Spain",
    "iso2": "tt",
    "flag": "🇹🇹",
    "language": "English",
    "currency": "Trinidad and Tobago dollar ($)",
    "population": "1.4M",
    "populationRaw": 1368333,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Caribbean",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Trinidad and Tobago",
    "about": "Trinidad and Tobago is a country in Caribbean, with Port of Spain as its capital. About 1.4M people live here. Official / major languages include English, and everyday transactions typically use the Trinidad and Tobago dollar ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Trinidad and Tobago begins with the settlements of the islands by Indigenous First Peoples. Trinidad was visited by Christopher Columbus on his third voyage in 1498,, and claimed in the name of Spain. Trinidad was administered by Spanish hands until 1797, but it was largely settled by French colonists. Tobago changed hands between the British, French, Dutch, and Courlanders, but eventually ended up in British hands following the second Treaty of Paris (1814). In 1889, the two islands were incorporated into a single political entity. Trinidad and Tobago obtained its independence from the British Empire in 1962 and became a republic in 1976.",
    "culture": "Culture in Trinidad and Tobago is closely tied to English language and everyday life in Port of Spain. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Trinidad and Tobago classics",
        "desc": "Signature dishes and home-style cooking from Trinidad and Tobago",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Port of Spain",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Caribbean ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Port of Spain",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Port of Spain",
        "desc": "Capital city and main gateway to Trinidad and Tobago",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Port of Spain",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Port of Spain, then continue by rail, bus, taxi or domestic flights. Keep some Trinidad and Tobago dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Trinidad and Tobago before you go. Register important numbers, keep copies of documents, and use licensed transport in Port of Spain. Emergency info: Local emergency · dialing code +1.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +1",
    "callingCode": "+1",
    "aliases": [
      "Trinidad and Tobago",
      "Republic of Trinidad and Tobago"
    ]
  },
  {
    "name": "Tunisia",
    "nameKa": "ტუნისი",
    "capital": "Tunis",
    "iso2": "tn",
    "flag": "🇹🇳",
    "language": "Arabic",
    "currency": "Tunisian dinar (ت.د)",
    "population": "12M",
    "populationRaw": 11972169,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Northern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Tunisia",
    "about": "Tunisia is a country in Northern Africa, with Tunis as its capital. About 12M people live here. Official / major languages include Arabic, and everyday transactions typically use the Tunisian dinar (ت.د). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The present day Republic of Tunisia, al-Jumhuriyyah at-Tunisiyyah, is situated in Northern Africa. Geographically situated between Libya to the east, Algeria to the west and the Mediterranean Sea to the north. Tunis is the capital and the largest city ; it is near the ancient site of the city of Carthage.",
    "culture": "Culture in Tunisia is closely tied to Arabic language and everyday life in Tunis. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Tunisia classics",
        "desc": "Signature dishes and home-style cooking from Tunisia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Tunis",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Northern Africa ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Tunis",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Tunis",
        "desc": "Capital city and main gateway to Tunisia",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Tunis",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Tunis, then continue by rail, bus, taxi or domestic flights. Keep some Tunisian dinar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Tunisia before you go. Register important numbers, keep copies of documents, and use licensed transport in Tunis. Emergency info: Local emergency · dialing code +216.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +216",
    "callingCode": "+216",
    "aliases": [
      "Tunisia",
      "Tunisian Republic"
    ]
  },
  {
    "name": "Turkey",
    "nameKa": "თურქეთი",
    "capital": "Ankara",
    "iso2": "tr",
    "flag": "🇹🇷",
    "language": "Turkish",
    "currency": "Turkish lira (₺)",
    "population": "86M",
    "populationRaw": 85664944,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Western Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Turkey",
    "about": "Turkey is a country in Western Asia, with Ankara as its capital. About 86M people live here. Official / major languages include Turkish, and everyday transactions typically use the Turkish lira (₺). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Turkey, understood as the history of the area now forming the territory of the Republic of Turkey, includes the history of both Anatolia and Eastern Thrace. These two previously politically distinct regions came under control of the Roman Empire in the second century BC, eventually becoming the core of the Roman Byzantine Empire For times predating the Ottoman period, a distinction should also be made between the history of the Turkic peoples, and the history of the territories now forming the Republic of Turkey From the time when parts of what is now Turkey were conquered by the Seljuq dynasty, the history of Turkey spans the medieval history of the Seljuk Empire, the medieval to modern history of the Ottoman Empire, and the history of the Republic of Turkey since the 1920s.",
    "culture": "Culture in Turkey is closely tied to Turkish language and everyday life in Ankara. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Turkey classics",
        "desc": "Signature dishes and home-style cooking from Turkey",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Ankara",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Asia ingredients and Turkish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Ankara",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Ankara",
        "desc": "Capital city and main gateway to Turkey",
        "image": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Ankara",
        "image": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Ankara, then continue by rail, bus, taxi or domestic flights. Keep some Turkish lira for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Turkey before you go. Register important numbers, keep copies of documents, and use licensed transport in Ankara. Emergency info: Local emergency · dialing code +90.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +90",
    "callingCode": "+90",
    "aliases": [
      "Turkey",
      "Türkiye",
      "Republic of Türkiye"
    ]
  },
  {
    "name": "Turkmenistan",
    "nameKa": "თურქმენეთი",
    "capital": "Ashgabat",
    "iso2": "tm",
    "flag": "🇹🇲",
    "language": "Russian / Turkmen",
    "currency": "Turkmenistan manat (T)",
    "population": "7.1M",
    "populationRaw": 7057841,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Central Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Turkmenistan",
    "about": "Turkmenistan is a country in Central Asia, with Ashgabat as its capital. About 7.1M people live here. Official / major languages include Russian / Turkmen, and everyday transactions typically use the Turkmenistan manat (T). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Turkmenistan traditionally began with the arrival of Indo-European Iranian tribes around 2000 BC. Early tribes were nomadic or semi-nomadic due to the arid conditions of the region, preventing widespread adoption of agriculture. The steppe culture in Central Asia was an extension of a larger Eurasian series of horse cultures which spanned the entire spectrum of language families, including the Indo-Europeans and Turko-Mongol tradition groups. Some of the known early Iranian tribes included the Massagetae, the Scythians/Saka, and early Sogdia, who were most likely precursors of the Khwarazmians. Turkmenistan was a passing point for numerous migrations and invasions by tribes, which gravitated towards the settled regions of the south, including ancient Mesopotamia, Elam, and the Indus Valley Civilisation.",
    "culture": "Culture in Turkmenistan is closely tied to Russian language and everyday life in Ashgabat. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Turkmenistan classics",
        "desc": "Signature dishes and home-style cooking from Turkmenistan",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Ashgabat",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Central Asia ingredients and Russian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Ashgabat",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Ashgabat",
        "desc": "Capital city and main gateway to Turkmenistan",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Ashgabat",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Ashgabat, then continue by rail, bus, taxi or domestic flights. Keep some Turkmenistan manat for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Turkmenistan before you go. Register important numbers, keep copies of documents, and use licensed transport in Ashgabat. Emergency info: Local emergency · dialing code +993.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +993",
    "callingCode": "+993",
    "aliases": [
      "Turkmenistan"
    ]
  },
  {
    "name": "Tuvalu",
    "nameKa": "ტუვალუ",
    "capital": "Funafuti",
    "iso2": "tv",
    "flag": "🇹🇻",
    "language": "English / Tuvaluan",
    "currency": "Australian dollar ($)",
    "population": "11K",
    "populationRaw": 10643,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
    "region": "Oceania",
    "subregion": "Polynesia",
    "tags": [
      "Beach",
      "Nature",
      "Adventure"
    ],
    "tagline": "Discover Tuvalu",
    "about": "Tuvalu is a country in Polynesia, with Funafuti as its capital. About 11K people live here. Official / major languages include English / Tuvaluan, and everyday transactions typically use the Australian dollar ($). Travelers visit for beach, nature, adventure experiences — cities, landscapes, food, and local culture.",
    "history": "The first inhabitants of Tuvalu were Polynesians, so the origins of the people of Tuvalu can be traced to the spread of humans out of Southeast Asia, from Taiwan, via Melanesia and across the Pacific islands of Polynesia.",
    "culture": "Culture in Tuvalu is closely tied to English language and everyday life in Funafuti. Expect festivals, markets, arts, and hospitality traditions that reflect Oceania influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Tuvalu classics",
        "desc": "Signature dishes and home-style cooking from Tuvalu",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Funafuti",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Polynesia ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Funafuti",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Funafuti",
        "desc": "Capital city and main gateway to Tuvalu",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Funafuti",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via Funafuti, then continue by rail, bus, taxi or domestic flights. Keep some Australian dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Tuvalu before you go. Register important numbers, keep copies of documents, and use licensed transport in Funafuti. Emergency info: Local emergency · dialing code +688.",
    "bestSeason": "Nov–Apr",
    "emergency": "Local emergency · dialing code +688",
    "callingCode": "+688",
    "aliases": [
      "Tuvalu"
    ]
  },
  {
    "name": "Uganda",
    "nameKa": "უგანდა",
    "capital": "Kampala",
    "iso2": "ug",
    "flag": "🇺🇬",
    "language": "English / Swahili",
    "currency": "Ugandan shilling (USh)",
    "population": "46M",
    "populationRaw": 45905417,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Uganda",
    "about": "Uganda is a country in Eastern Africa, with Kampala as its capital. About 46M people live here. Official / major languages include English / Swahili, and everyday transactions typically use the Ugandan shilling (USh). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Uganda comprises the history of the people who inhabited the territory of present-day Uganda before the establishment of the Republic of Uganda, and the history of that country once it was established. Evidence from the Paleolithic era shows humans have inhabited Uganda for at least 50,000 years. The forests of Uganda were gradually cleared for agriculture by people who probably spoke Central Sudanic languages. The Empire of Kitara grew out of the Urewe culture in the 10th century. Following the migration and invasion of Luo peoples in about the 15th century, Kitara collapsed, and from the ashes rose various Biito kingdoms such as Bunyoro alongside Buganda.",
    "culture": "Culture in Uganda is closely tied to English language and everyday life in Kampala. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Uganda classics",
        "desc": "Signature dishes and home-style cooking from Uganda",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Kampala",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Africa ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Kampala",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Kampala",
        "desc": "Capital city and main gateway to Uganda",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Kampala",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via Kampala, then continue by rail, bus, taxi or domestic flights. Keep some Ugandan shilling for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Uganda before you go. Register important numbers, keep copies of documents, and use licensed transport in Kampala. Emergency info: Local emergency · dialing code +256.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +256",
    "callingCode": "+256",
    "aliases": [
      "Uganda",
      "Republic of Uganda"
    ]
  },
  {
    "name": "Ukraine",
    "nameKa": "უკრაინა",
    "capital": "Kyiv",
    "iso2": "ua",
    "flag": "🇺🇦",
    "language": "Ukrainian",
    "currency": "Ukrainian hryvnia (₴)",
    "population": "33M",
    "populationRaw": 32862000,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Ukraine",
    "about": "Ukraine is a country in Eastern Europe, with Kyiv as its capital. About 33M people live here. Official / major languages include Ukrainian, and everyday transactions typically use the Ukrainian hryvnia (₴). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "Prehistoric Ukraine, as a part of the Pontic steppe in Eastern Europe, played an important role in Eurasian cultural events, including the spread of the Chalcolithic and Bronze Ages, Indo-European migrations, and the domestication of the horse.",
    "culture": "Culture in Ukraine is closely tied to Ukrainian language and everyday life in Kyiv. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Ukraine classics",
        "desc": "Signature dishes and home-style cooking from Ukraine",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Kyiv",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Europe ingredients and Ukrainian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Kyiv",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Kyiv",
        "desc": "Capital city and main gateway to Ukraine",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Kyiv",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Kyiv, then continue by rail, bus, taxi or domestic flights. Keep some Ukrainian hryvnia for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Ukraine before you go. Register important numbers, keep copies of documents, and use licensed transport in Kyiv. Emergency info: Local emergency · dialing code +380.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +380",
    "callingCode": "+380",
    "aliases": [
      "Ukraine"
    ]
  },
  {
    "name": "United Arab Emirates",
    "nameKa": "არაბთა გაერთიანებული საამიროები",
    "capital": "Abu Dhabi",
    "iso2": "ae",
    "flag": "🇦🇪",
    "language": "Arabic",
    "currency": "United Arab Emirates dirham (إ.د)",
    "population": "11M",
    "populationRaw": 10678556,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Western Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover United Arab Emirates",
    "about": "United Arab Emirates is a country in Western Asia, with Abu Dhabi as its capital. About 11M people live here. Official / major languages include Arabic, and everyday transactions typically use the United Arab Emirates dirham (إ.د). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "The United Arab Emirates is a country in the eastern part of the Arabian Peninsula, located on the southeastern coast of the Persian Gulf and the northwestern coast of the Gulf of Oman. The UAE has a history of human habitation, transmigration and trade spanning over 125,000 years. Pastoralist, nomadic Paleolithic and Neolithic communities thrived in the area until the 4th millennium BCE. The area was home to the Bronze Age Magan people, known to the Sumerians, who traded with the Harappan culture of the Indus Valley, Afghanistan and Bactria, and the Levant.",
    "culture": "Culture in United Arab Emirates is closely tied to Arabic language and everyday life in Abu Dhabi. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "United Arab Emirates classics",
        "desc": "Signature dishes and home-style cooking from United Arab Emirates",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Abu Dhabi",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Asia ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Abu Dhabi",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Abu Dhabi",
        "desc": "Capital city and main gateway to United Arab Emirates",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Abu Dhabi",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Abu Dhabi, then continue by rail, bus, taxi or domestic flights. Keep some United Arab Emirates dirham for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for United Arab Emirates before you go. Register important numbers, keep copies of documents, and use licensed transport in Abu Dhabi. Emergency info: Local emergency · dialing code +971.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +971",
    "callingCode": "+971",
    "aliases": [
      "United Arab Emirates"
    ]
  },
  {
    "name": "United Kingdom",
    "nameKa": "გაერთიანებული სამეფო",
    "capital": "London",
    "iso2": "gb",
    "flag": "🇬🇧",
    "language": "English",
    "currency": "British pound (£)",
    "population": "68M",
    "populationRaw": 68265209,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Northern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover United Kingdom",
    "about": "United Kingdom is a country in Northern Europe, with London as its capital. About 68M people live here. Official / major languages include English, and everyday transactions typically use the British pound (£). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "The history of the United Kingdom begins in 1707 with the Treaty of Union and Acts of Union. The core of the United Kingdom as a unified state came into being with the political union of the kingdoms of England and Scotland, into a new unitary state called Great Britain.",
    "culture": "Culture in United Kingdom is closely tied to English language and everyday life in London. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "United Kingdom classics",
        "desc": "Signature dishes and home-style cooking from United Kingdom",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around London",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Northern Europe ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in London",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "London",
        "desc": "Capital city and main gateway to United Kingdom",
        "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near London",
        "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via London, then continue by rail, bus, taxi or domestic flights. Keep some British pound for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for United Kingdom before you go. Register important numbers, keep copies of documents, and use licensed transport in London. Emergency info: Local emergency · dialing code +44.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +44",
    "callingCode": "+44",
    "aliases": [
      "United Kingdom",
      "United Kingdom of Great Britain and Northern Ireland"
    ]
  },
  {
    "name": "United States",
    "nameKa": "ამერიკის შეერთებული შტატები",
    "capital": "Washington",
    "iso2": "us",
    "flag": "🇺🇸",
    "language": "English",
    "currency": "United States dollar ($)",
    "population": "340M",
    "populationRaw": 340110988,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "Northern America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover United States",
    "about": "United States is a country in Northern America, with Washington as its capital. About 340M people live here. Official / major languages include English, and everyday transactions typically use the United States dollar ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of the land which became the United States spans tens of thousands of years of continuous Indigenous societies; their descendants include but may not be limited to 575 federally recognized tribes. The history of the present-day United States began in 1607 with the establishment of Jamestown in modern-day Virginia by settlers who arrived from the Kingdom of England, and the landing of the Mayflower by English pilgrims to Plymouth in 1620. In the late 15th century, European colonization began and largely decimated Indigenous societies through genocides, wars, and epidemics. By the 1760s, the Thirteen Colonies, then part of British America and by extension the Kingdom of Great Britain, were established. The Southern Colonies built an agricultural system on slave labor and enslaving millions from Africa. After the British victory over the Kingdom of France in the French and Indian Wars, Parliament imposed a series of taxes and issued the Intolerable Acts on the colonies in 1773, which were designed to end self-governance.",
    "culture": "Culture in United States is closely tied to English language and everyday life in Washington. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "United States classics",
        "desc": "Signature dishes and home-style cooking from United States",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Washington",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Northern America ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Washington",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Washington",
        "desc": "Capital city and main gateway to United States",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Washington",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Washington, then continue by rail, bus, taxi or domestic flights. Keep some United States dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for United States before you go. Register important numbers, keep copies of documents, and use licensed transport in Washington. Emergency info: Local emergency · dialing code +1.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +1",
    "callingCode": "+1",
    "aliases": [
      "United States",
      "United States of America",
      "USA",
      "US"
    ]
  },
  {
    "name": "Uruguay",
    "nameKa": "ურუგვაი",
    "capital": "Montevideo",
    "iso2": "uy",
    "flag": "🇺🇾",
    "language": "Spanish",
    "currency": "Uruguayan peso ($)",
    "population": "3.5M",
    "populationRaw": 3499451,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "South America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Uruguay",
    "about": "Uruguay is a country in South America, with Montevideo as its capital. About 3.5M people live here. Official / major languages include Spanish, and everyday transactions typically use the Uruguayan peso ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Uruguay comprises different periods: the pre-Columbian time or early history, the Colonial Period (1516–1811), the Period of Nation-Building (1811–1830), and the history of Uruguay as an independent country (1830–present).",
    "culture": "Culture in Uruguay is closely tied to Spanish language and everyday life in Montevideo. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Uruguay classics",
        "desc": "Signature dishes and home-style cooking from Uruguay",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Montevideo",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South America ingredients and Spanish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Montevideo",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Montevideo",
        "desc": "Capital city and main gateway to Uruguay",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Montevideo",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Montevideo, then continue by rail, bus, taxi or domestic flights. Keep some Uruguayan peso for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Uruguay before you go. Register important numbers, keep copies of documents, and use licensed transport in Montevideo. Emergency info: Local emergency · dialing code +598.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +598",
    "callingCode": "+598",
    "aliases": [
      "Uruguay",
      "Oriental Republic of Uruguay"
    ]
  },
  {
    "name": "Uzbekistan",
    "nameKa": "უზბეკეთი",
    "capital": "Tashkent",
    "iso2": "uz",
    "flag": "🇺🇿",
    "language": "Russian / Uzbek",
    "currency": "Uzbekistani soʻm (лв)",
    "population": "38M",
    "populationRaw": 37859698,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Central Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Uzbekistan",
    "about": "Uzbekistan is a country in Central Asia, with Tashkent as its capital. About 38M people live here. Official / major languages include Russian / Uzbek, and everyday transactions typically use the Uzbekistani soʻm (лв). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "Uzbekistan is a landlocked country in Central Asia. It is itself surrounded by five landlocked countries: Kazakhstan to the north; Kyrgyzstan to the northeast; Tajikistan to the southeast; Afghanistan to the south, Turkmenistan to the south-west. Its capital and largest city is Tashkent. Uzbekistan is part of the area known as Turkestan as well as a member of the Organization of Turkic States and TÜRKSOY. Its majority native and titular ethnic group are the Uzbek people, a Turkic people. While the Uzbek language, a Turkic language, is the majority native and spoken language in Uzbekistan, Russian, a foreign language, is widely used as an inter-ethnic tongue and in government due to the country's Soviet and Russian Imperial past. Russians also form a significant minority ethnic group. Additionally, there are significant Tajik, Karakalpak, and Kazakh minorities, along with numerous smaller groups. Islam is the majority religion in Uzbekistan, most Uzbeks being Sunni Muslims.",
    "culture": "Culture in Uzbekistan is closely tied to Russian language and everyday life in Tashkent. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Uzbekistan classics",
        "desc": "Signature dishes and home-style cooking from Uzbekistan",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Tashkent",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Central Asia ingredients and Russian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Tashkent",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Tashkent",
        "desc": "Capital city and main gateway to Uzbekistan",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.8
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Tashkent",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6499999999999995
      }
    ],
    "transport": "Most international travelers arrive via Tashkent, then continue by rail, bus, taxi or domestic flights. Keep some Uzbekistani soʻm for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Uzbekistan before you go. Register important numbers, keep copies of documents, and use licensed transport in Tashkent. Emergency info: Local emergency · dialing code +998.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +998",
    "callingCode": "+998",
    "aliases": [
      "Uzbekistan",
      "Republic of Uzbekistan"
    ]
  },
  {
    "name": "Vanuatu",
    "nameKa": "ვანუატუ",
    "capital": "Port Vila",
    "iso2": "vu",
    "flag": "🇻🇺",
    "language": "Bislama / English / French",
    "currency": "Vanuatu vatu (VT)",
    "population": "321K",
    "populationRaw": 321409,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
    "region": "Oceania",
    "subregion": "Melanesia",
    "tags": [
      "Beach",
      "Nature",
      "Adventure"
    ],
    "tagline": "Discover Vanuatu",
    "about": "Vanuatu is a country in Melanesia, with Port Vila as its capital. About 321K people live here. Official / major languages include Bislama / English / French, and everyday transactions typically use the Vanuatu vatu (VT). Travelers visit for beach, nature, adventure experiences — cities, landscapes, food, and local culture.",
    "history": "Vanuatu’s story is shaped by its place in Melanesia. Historic centers around Port Vila, museums, and monuments help travelers understand how the country developed into the modern state it is today. Layer visits with cultural sites and neighborhood walks for a fuller picture.",
    "culture": "Culture in Vanuatu is closely tied to Bislama language and everyday life in Port Vila. Expect festivals, markets, arts, and hospitality traditions that reflect Oceania influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Vanuatu classics",
        "desc": "Signature dishes and home-style cooking from Vanuatu",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Port Vila",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Melanesia ingredients and Bislama culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Port Vila",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Port Vila",
        "desc": "Capital city and main gateway to Vanuatu",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Port Vila",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Port Vila, then continue by rail, bus, taxi or domestic flights. Keep some Vanuatu vatu for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Vanuatu before you go. Register important numbers, keep copies of documents, and use licensed transport in Port Vila. Emergency info: Local emergency · dialing code +678.",
    "bestSeason": "Nov–Apr",
    "emergency": "Local emergency · dialing code +678",
    "callingCode": "+678",
    "aliases": [
      "Vanuatu",
      "Republic of Vanuatu"
    ]
  },
  {
    "name": "Vatican City",
    "nameKa": "წმინდა საყდარი (ვატიკანი)",
    "capital": "Vatican City",
    "iso2": "va",
    "flag": "🇻🇦",
    "language": "Italian / Latin",
    "currency": "Euro (€)",
    "population": "882",
    "populationRaw": 882,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
    "region": "Europe",
    "subregion": "Southern Europe",
    "tags": [
      "Culture",
      "History",
      "Food"
    ],
    "tagline": "Discover Vatican City",
    "about": "Vatican City is a country in Southern Europe, with Vatican City as its capital. About 882 people live here. Official / major languages include Italian / Latin, and everyday transactions typically use the Euro (€). Travelers visit for culture, history, food experiences — cities, landscapes, food, and local culture.",
    "history": "Vatican City, officially the Vatican City State, often shortened as the Vatican, is a landlocked sovereign city-state in Southern Europe. Ruled by the pope, it is an enclave within the city of Rome, Italy, and serves as the administrative centre of the Catholic Church. Vatican City is governed by the See of Rome, commonly known as the Holy See, itself a sovereign entity under international law, which maintains its temporal power, governance, diplomacy, and spiritual independence. Vatican is also used as a metonym for the Holy See, which is the central governing body of the Catholic Church and Vatican City, comprising the pope and the Roman Curia. The independent state of Vatican City came into existence in 1929 via the Lateran Treaty between the Holy See and the Kingdom of Italy, which spoke of it as a creation, not as a vestige of the much larger Papal States (756–1870), which had previously encompassed much of Central Italy.",
    "culture": "Culture in Vatican City is closely tied to Italian language and everyday life in Vatican City. Expect festivals, markets, arts, and hospitality traditions that reflect Europe influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Vatican City classics",
        "desc": "Signature dishes and home-style cooking from Vatican City",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Vatican City",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Europe ingredients and Italian culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Vatican City",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Vatican City",
        "desc": "Capital city and main gateway to Vatican City",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Vatican City",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.300000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.2
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.25
      }
    ],
    "transport": "Most international travelers arrive via Vatican City, then continue by rail, bus, taxi or domestic flights. Keep some Euro for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Vatican City before you go. Register important numbers, keep copies of documents, and use licensed transport in Vatican City. Emergency info: Local emergency · dialing code +379.",
    "bestSeason": "May–Sep",
    "emergency": "Local emergency · dialing code +379",
    "callingCode": "+379",
    "aliases": [
      "Vatican City",
      "Vatican",
      "Holy See",
      "Holy See (Vatican City)",
      "Vatican City State (Holy See)",
      "Vatican City State"
    ]
  },
  {
    "name": "Venezuela",
    "nameKa": "ვენესუელა",
    "capital": "Caracas",
    "iso2": "ve",
    "flag": "🇻🇪",
    "language": "Spanish",
    "currency": "Bolívar (Bs)",
    "population": "29M",
    "populationRaw": 28517000,
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
    "region": "America",
    "subregion": "South America",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Venezuela",
    "about": "Venezuela is a country in South America, with Caracas as its capital. About 29M people live here. Official / major languages include Spanish, and everyday transactions typically use the Bolívar (Bs). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Venezuela reflects events in areas of the Americas colonized by Spain starting 1502; amid resistance from indigenous peoples, led by Native caciques, such as Guaicaipuro and Tamanaco. However, in the Andean region of western Venezuela, complex Andean civilization of the Timoto-Cuica people flourished before European contact.",
    "culture": "Culture in Venezuela is closely tied to Spanish language and everyday life in Caracas. Expect festivals, markets, arts, and hospitality traditions that reflect America influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Venezuela classics",
        "desc": "Signature dishes and home-style cooking from Venezuela",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Caracas",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South America ingredients and Spanish culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Caracas",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Caracas",
        "desc": "Capital city and main gateway to Venezuela",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Caracas",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6000000000000005
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.55
      }
    ],
    "transport": "Most international travelers arrive via Caracas, then continue by rail, bus, taxi or domestic flights. Keep some Bolívar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Venezuela before you go. Register important numbers, keep copies of documents, and use licensed transport in Caracas. Emergency info: Local emergency · dialing code +58.",
    "bestSeason": "Dec–Apr",
    "emergency": "Local emergency · dialing code +58",
    "callingCode": "+58",
    "aliases": [
      "Venezuela",
      "Bolivarian Republic of Venezuela"
    ]
  },
  {
    "name": "Vietnam",
    "nameKa": "ვიეტნამი",
    "capital": "Hanoi",
    "iso2": "vn",
    "flag": "🇻🇳",
    "language": "Vietnamese",
    "currency": "Vietnamese đồng (₫)",
    "population": "101M",
    "populationRaw": 101343800,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Vietnam",
    "about": "Vietnam is a country in South-Eastern Asia, with Hanoi as its capital. About 101M people live here. Official / major languages include Vietnamese, and everyday transactions typically use the Vietnamese đồng (₫). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "Vietnam, with its coastal strip, rugged mountainous interior, and two major deltas, became home to numerous cultures throughout history. Its strategic geographical position in Southeast Asia also made it a crossroads of trade and a focal point of conflict, contributing to its complex and eventful past. The first Ancient East Eurasian hunter-gatherers arrived at least 40,000 years ago. Around 4,000 years ago during the Neolithic period, Ancient Southern East Asian populations, particularly Austroasiatic and Austronesian peoples, began migrating from southern China into Southeast Asia, bringing with them rice-cultivation knowledge, languages, and much of the genetic basis of the modern population of Vietnam. In the first millennium BCE the Đông Sơn culture emerged, based on rice cultivation and focused on the indigenous chiefdoms of Văn Lang and Âu Lạc.",
    "culture": "Culture in Vietnam is closely tied to Vietnamese language and everyday life in Hanoi. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Vietnam classics",
        "desc": "Signature dishes and home-style cooking from Vietnam",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Hanoi",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "South-Eastern Asia ingredients and Vietnamese culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Hanoi",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Hanoi",
        "desc": "Capital city and main gateway to Vietnam",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Hanoi",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Hanoi, then continue by rail, bus, taxi or domestic flights. Keep some Vietnamese đồng for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Vietnam before you go. Register important numbers, keep copies of documents, and use licensed transport in Hanoi. Emergency info: Local emergency · dialing code +84.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +84",
    "callingCode": "+84",
    "aliases": [
      "Vietnam",
      "Viet Nam",
      "Socialist Republic of Vietnam"
    ]
  },
  {
    "name": "Yemen",
    "nameKa": "იემენი",
    "capital": "Sanaa",
    "iso2": "ye",
    "flag": "🇾🇪",
    "language": "Arabic",
    "currency": "Yemeni rial (﷼)",
    "population": "33M",
    "populationRaw": 32684503,
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
    "region": "Asia",
    "subregion": "Western Asia",
    "tags": [
      "Culture",
      "Food",
      "History"
    ],
    "tagline": "Discover Yemen",
    "about": "Yemen is a country in Western Asia, with Sanaa as its capital. About 33M people live here. Official / major languages include Arabic, and everyday transactions typically use the Yemeni rial (﷼). Travelers visit for culture, food, history experiences — cities, landscapes, food, and local culture.",
    "history": "Yemen is one of the oldest centers of civilization in the Near East. Its relatively fertile land and adequate rainfall in a moister climate helped sustain a stable population, a feature recognized by the ancient Greek geographer Ptolemy, who described Yemen as Eudaimon Arabia, meaning \"Fertile Arabia\" or \"Happy Arabia\". The South Arabian alphabet was developed at latest between the 12th century BC and the 6th century AD, when Yemen was successively dominated by six civilizations that controlled the lucrative spice trade: Ma'in, Qataban, Hadhramaut, Awsan, Saba, and Himyar. With the 630 AD arrival of Islam, Yemen became part of the wider Muslim world, where it has remained.",
    "culture": "Culture in Yemen is closely tied to Arabic language and everyday life in Sanaa. Expect festivals, markets, arts, and hospitality traditions that reflect Asia influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Yemen classics",
        "desc": "Signature dishes and home-style cooking from Yemen",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Sanaa",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Western Asia ingredients and Arabic culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Sanaa",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Sanaa",
        "desc": "Capital city and main gateway to Yemen",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.9
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Sanaa",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.800000000000001
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.7
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.75
      }
    ],
    "transport": "Most international travelers arrive via Sanaa, then continue by rail, bus, taxi or domestic flights. Keep some Yemeni rial for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Yemen before you go. Register important numbers, keep copies of documents, and use licensed transport in Sanaa. Emergency info: Local emergency · dialing code +967.",
    "bestSeason": "Oct–Apr",
    "emergency": "Local emergency · dialing code +967",
    "callingCode": "+967",
    "aliases": [
      "Yemen",
      "Republic of Yemen"
    ]
  },
  {
    "name": "Zambia",
    "nameKa": "ზამბია",
    "capital": "Lusaka",
    "iso2": "zm",
    "flag": "🇿🇲",
    "language": "English",
    "currency": "Zambian kwacha (ZK)",
    "population": "20M",
    "populationRaw": 19693423,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Southern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Zambia",
    "about": "Zambia is a country in Southern Africa, with Lusaka as its capital. About 20M people live here. Official / major languages include English, and everyday transactions typically use the Zambian kwacha (ZK). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "The history of Zambia experienced many stages from colonisation to independence from Britain on 24 October 1964. Northern Rhodesia became a British sphere of influence in the present-day region of Zambia in 1888, and was officially proclaimed a British protectorate in 1924. After many years of suggested mergers, Southern Rhodesia, Northern Rhodesia, and Nyasaland were merged into the British Federation of Rhodesia and Nyasaland.",
    "culture": "Culture in Zambia is closely tied to English language and everyday life in Lusaka. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Zambia classics",
        "desc": "Signature dishes and home-style cooking from Zambia",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Lusaka",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Southern Africa ingredients and English culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Lusaka",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Lusaka",
        "desc": "Capital city and main gateway to Zambia",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.6
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Lusaka",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3999999999999995
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.449999999999999
      }
    ],
    "transport": "Most international travelers arrive via Lusaka, then continue by rail, bus, taxi or domestic flights. Keep some Zambian kwacha for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Zambia before you go. Register important numbers, keep copies of documents, and use licensed transport in Lusaka. Emergency info: Local emergency · dialing code +260.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +260",
    "callingCode": "+260",
    "aliases": [
      "Zambia",
      "Republic of Zambia"
    ]
  },
  {
    "name": "Zimbabwe",
    "nameKa": "ზიმბაბვე",
    "capital": "Harare",
    "iso2": "zw",
    "flag": "🇿🇼",
    "language": "Chibarwe / English / Kalanga",
    "currency": "Zimbabwe Dollar ($)",
    "population": "17M",
    "populationRaw": 17073087,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "tags": [
      "Nature",
      "Adventure",
      "Culture"
    ],
    "tagline": "Discover Zimbabwe",
    "about": "Zimbabwe is a country in Eastern Africa, with Harare as its capital. About 17M people live here. Official / major languages include Chibarwe / English / Kalanga, and everyday transactions typically use the Zimbabwe Dollar ($). Travelers visit for nature, adventure, culture experiences — cities, landscapes, food, and local culture.",
    "history": "Until roughly 2,000 years ago, what would become Zimbabwe was populated by ancestors of the San people. Bantu inhabitants of the region arrived and developed ceramic production in the area. A series of trading empires emerged, including the Kingdom of Mapungubwe and Kingdom of Zimbabwe. In the 1880s, the British South Africa Company began its activities in the region, leading to the colonial era in Southern Rhodesia.",
    "culture": "Culture in Zimbabwe is closely tied to Chibarwe language and everyday life in Harare. Expect festivals, markets, arts, and hospitality traditions that reflect Africa influences. Learning a few local phrases goes a long way.",
    "foods": [
      {
        "name": "Zimbabwe classics",
        "desc": "Signature dishes and home-style cooking from Zimbabwe",
        "price": "Local prices",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Street food",
        "desc": "Markets and casual bites around Harare",
        "price": "Budget-friendly",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Regional flavors",
        "desc": "Eastern Africa ingredients and Chibarwe culinary traditions",
        "price": "Varies",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format"
      },
      {
        "name": "Dining out",
        "desc": "Cafés and restaurants popular with visitors in Harare",
        "price": "Mid–premium",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format"
      }
    ],
    "places": [
      {
        "name": "Harare",
        "desc": "Capital city and main gateway to Zimbabwe",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.5
      },
      {
        "name": "Historic center",
        "desc": "Heritage streets, museums and landmarks near Harare",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.4
      },
      {
        "name": "Nature & outdoors",
        "desc": "Parks, coasts or countryside popular with travelers",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.3
      },
      {
        "name": "Cultural quarter",
        "desc": "Neighborhoods for food, markets and local life",
        "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
        "rating": 4.35
      }
    ],
    "transport": "Most international travelers arrive via Harare, then continue by rail, bus, taxi or domestic flights. Keep some Zimbabwe Dollar for short hops. Check local transit apps and airport transfer options before you land.",
    "safety": "Check current travel advisories for Zimbabwe before you go. Register important numbers, keep copies of documents, and use licensed transport in Harare. Emergency info: Local emergency · dialing code +263.",
    "bestSeason": "Jun–Oct",
    "emergency": "Local emergency · dialing code +263",
    "callingCode": "+263",
    "aliases": [
      "Zimbabwe",
      "Republic of Zimbabwe"
    ]
  }
]

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

/** Ranked autocomplete: name / Georgian name / capital / aliases. */
export function searchCountries(query: string, limit = 8): Country[] {
  const q = query.trim().toLowerCase()
  if (!q) return []

  const scored: { country: Country; score: number }[] = []

  for (const country of COUNTRIES) {
    const name = country.name.toLowerCase()
    const nameKa = country.nameKa.toLowerCase()
    const capital = country.capital.toLowerCase()
    let score = 0

    if (name === q || nameKa === q) score = 100
    else if (name.startsWith(q) || nameKa.startsWith(q)) score = 80
    else if (capital.startsWith(q)) score = 70
    else if (name.includes(q) || nameKa.includes(q)) score = 50
    else if (capital.includes(q)) score = 40
    else if (country.aliases.some((a) => a.toLowerCase().startsWith(q))) score = 60
    else if (country.aliases.some((a) => a.toLowerCase().includes(q))) score = 30

    if (score > 0) scored.push({ country, score })
  }

  scored.sort((a, b) => b.score - a.score || a.country.name.localeCompare(b.country.name))
  return scored.slice(0, limit).map((s) => s.country)
}
