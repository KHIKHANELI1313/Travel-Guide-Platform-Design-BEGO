import type { MapAreaId } from "@/components/georgiaMapGeo"

export type MonumentKind = "church" | "fortress" | "bridge"

export type Monument = { ka: string; en: string; kind: MonumentKind; lat: number; lon: number; area: MapAreaId }

// coordinates are approximate (± a few hundred metres) — good for an overview map, check before navigating
export const MONUMENTS: Monument[] = [
  // churches and monasteries
  { ka: "სვეტიცხოველი", en: "Svetitskhoveli Cathedral", kind: "church", lat: 41.8421, lon: 44.7208, area: "kartli" },
  { ka: "ჯვრის მონასტერი", en: "Jvari Monastery", kind: "church", lat: 41.8383, lon: 44.7336, area: "kartli" },
  { ka: "შიომღვიმე", en: "Shio-Mgvime Monastery", kind: "church", lat: 41.8653, lon: 44.6286, area: "kartli" },
  { ka: "სამთავისი", en: "Samtavisi Cathedral", kind: "church", lat: 41.9600, lon: 44.4300, area: "kartli" },
  { ka: "ატენის სიონი", en: "Ateni Sioni", kind: "church", lat: 41.9050, lon: 44.0930, area: "kartli" },
  { ka: "სამება (წმინდა სამების საკათედრო ტაძარი)", en: "Holy Trinity Cathedral", kind: "church", lat: 41.6973, lon: 44.8166, area: "tbilisi" },
  { ka: "სიონის ტაძარი", en: "Sioni Cathedral", kind: "church", lat: 41.6914, lon: 44.8075, area: "tbilisi" },
  { ka: "მეტეხის ეკლესია", en: "Metekhi Church", kind: "church", lat: 41.6896, lon: 44.8114, area: "tbilisi" },
  { ka: "გერგეტის სამება", en: "Gergeti Trinity Church", kind: "church", lat: 42.6625, lon: 44.6203, area: "khevi" },
  { ka: "გელათის მონასტერი", en: "Gelati Monastery", kind: "church", lat: 42.2947, lon: 42.7681, area: "imereti" },
  { ka: "ბაგრატის ტაძარი", en: "Bagrati Cathedral", kind: "church", lat: 42.2770, lon: 42.7045, area: "imereti" },
  { ka: "მოწამეთა", en: "Motsameta Monastery", kind: "church", lat: 42.2820, lon: 42.7600, area: "imereti" },
  { ka: "ნიკორწმინდა", en: "Nikortsminda Cathedral", kind: "church", lat: 42.4650, lon: 43.1100, area: "racha" },
  { ka: "მარტვილის მონასტერი", en: "Martvili Monastery", kind: "church", lat: 42.4139, lon: 42.3797, area: "samegrelo" },
  { ka: "ალავერდი", en: "Alaverdi Cathedral", kind: "church", lat: 42.0325, lon: 45.3772, area: "kakheti" },
  { ka: "ბოდბის მონასტერი", en: "Bodbe Monastery", kind: "church", lat: 41.6067, lon: 45.9339, area: "kakheti" },
  { ka: "ნეკრესი", en: "Nekresi Monastery", kind: "church", lat: 41.9720, lon: 45.7500, area: "kakheti" },
  { ka: "ბოლნისის სიონი", en: "Bolnisi Sioni", kind: "church", lat: 41.4467, lon: 44.5389, area: "kvemo" },
  { ka: "საფარა", en: "Sapara Monastery", kind: "church", lat: 41.5870, lon: 42.8570, area: "samtskhe" },
  { ka: "ზარზმა", en: "Zarzma Monastery", kind: "church", lat: 41.6600, lon: 42.7100, area: "samtskhe" },
  { ka: "ლამარია, უშგული", en: "Lamaria Church, Ushguli", kind: "church", lat: 42.9150, lon: 43.0060, area: "svaneti" },
  { ka: "ბიჭვინთის ტაძარი", en: "Pitsunda Cathedral", kind: "church", lat: 43.1594, lon: 40.3417, area: "abkhazia" },
  { ka: "ახალი ათონის მონასტერი", en: "New Athos Monastery", kind: "church", lat: 43.0880, lon: 40.8150, area: "abkhazia" },

  // fortresses and castles
  { ka: "ნარიყალა", en: "Narikala Fortress", kind: "fortress", lat: 41.6880, lon: 44.8086, area: "tbilisi" },
  { ka: "ანანური", en: "Ananuri Fortress", kind: "fortress", lat: 42.1640, lon: 44.7031, area: "mtiuleti" },
  { ka: "რაბათი", en: "Rabati Castle", kind: "fortress", lat: 41.6403, lon: 42.9792, area: "samtskhe" },
  { ka: "ხერთვისი", en: "Khertvisi Fortress", kind: "fortress", lat: 41.4800, lon: 43.2850, area: "samtskhe" },
  { ka: "თმოგვი", en: "Tmogvi Fortress", kind: "fortress", lat: 41.4130, lon: 43.3260, area: "samtskhe" },
  { ka: "გონიო", en: "Gonio Fortress", kind: "fortress", lat: 41.5619, lon: 41.5739, area: "adjara" },
  { ka: "პეტრა", en: "Petra Fortress", kind: "fortress", lat: 41.7710, lon: 41.7540, area: "adjara" },
  { ka: "შატილი", en: "Shatili", kind: "fortress", lat: 42.6580, lon: 45.1580, area: "khevsureti" },
  { ka: "მუცო", en: "Mutso", kind: "fortress", lat: 42.5960, lon: 45.2190, area: "khevsureti" },
  { ka: "კესელო", en: "Keselo Fortress", kind: "fortress", lat: 42.3750, lon: 45.6350, area: "tusheti" },
  { ka: "გრემი", en: "Gremi Citadel", kind: "fortress", lat: 42.0050, lon: 45.6700, area: "kakheti" },
  { ka: "უჯარმა", en: "Ujarma Fortress", kind: "fortress", lat: 41.7940, lon: 45.1600, area: "kakheti" },
  { ka: "სიღნაღის გალავანი", en: "Sighnaghi Walls", kind: "fortress", lat: 41.6200, lon: 45.9220, area: "kakheti" },
  { ka: "სურამის ციხე", en: "Surami Fortress", kind: "fortress", lat: 42.0230, lon: 43.5550, area: "kartli" },
  { ka: "ნოქალაქევი", en: "Nokalakevi", kind: "fortress", lat: 42.3570, lon: 42.2310, area: "samegrelo" },

  // bridges
  { ka: "მშვიდობის ხიდი", en: "Bridge of Peace", kind: "bridge", lat: 41.6929, lon: 44.8086, area: "tbilisi" },
  { ka: "მახუნცეთის (თამარის) ხიდი", en: "Makhuntseti Bridge", kind: "bridge", lat: 41.5720, lon: 41.8530, area: "adjara" },
  { ka: "დანდალოს ხიდი", en: "Dandalo Bridge", kind: "bridge", lat: 41.6030, lon: 42.0450, area: "adjara" },
  { ka: "რკონის ხიდი", en: "Rkoni Bridge", kind: "bridge", lat: 41.8320, lon: 44.3140, area: "kartli" },
  { ka: "თეთრი ხიდი, ქუთაისი", en: "White Bridge, Kutaisi", kind: "bridge", lat: 42.2710, lon: 42.7020, area: "imereti" },
  { ka: "ბესლეთის ხიდი", en: "Besleti Bridge", kind: "bridge", lat: 43.0270, lon: 41.0380, area: "abkhazia" },
]
