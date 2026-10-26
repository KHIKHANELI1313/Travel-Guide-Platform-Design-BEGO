import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react"
import "./georgian-heritage.css"
import "./georgian-heritage-pages.css"
import "./georgian-heritage-planner.css"
import GeorgiaAntiqueMap, { type MonumentIcon } from "./GeorgiaAntiqueMap"
import { AUTO_REVEAL_SELECTOR, canAutoReveal } from "@/lib/autoReveal"
import { FP_LOCK_MS, useFullPage } from "@/lib/useFullPage"
import { INNER_BORDERS_D, OUTLINE_D, type MapAreaId as Kutkhe } from "./georgiaMapGeo"

type Lang = "ka" | "en"
type Theme = "dark" | "light"
export type View = "home" | "regions" | "history" | "customs" | "legends" | "archive" | "plan"

interface GeorgianHeritagePageProps {
  onBack: () => void
  /** fromView is the view the region was opened from, so the region page can come back to it */
  onSelectRegion: (regionId: string, fromView: View) => void
  initialView?: View
  /** the atlas has its own Georgia planner ("plan" view); kept for callers that still pass it */
  onPlanTrip?: () => void
}

const IMG = (id: string, width: number) => `https://sspark.genspark.ai/i/${id}?width=${width}`

// regionId links a card to an existing region detail page (see data/georgiaRegions.ts)
const REGIONS: { ka: string; en: string; lon: number; lat: number; icon: MonumentIcon; img: string; alt: string; desc: string; regionId?: string }[] = [
  { ka: "სვანეთი", en: "Svaneti", lon: 42.7, lat: 43, icon: "tower", img: "fu29FaDzh3624NIW", alt: "მესტია, სვანეთი", regionId: "svaneti", desc: "კოშკებიანი სოფლები, ლამარია და უძველესი მთიული ტრადიციები — იუნესკოს მსოფლიო მემკვიდრეობა." },
  { ka: "კახეთი", en: "Kakheti", lon: 45.62, lat: 41.93, icon: "church", img: "HsYlX0J2VDTJfFnX", alt: "სიღნაღი, კახეთი", regionId: "kakheti", desc: "ღვინის სამშობლო: ალაზნის ველი, ქალაქი-სიმაგრე სიღნაღი და ქართლურ-კახური ტაძრები." },
  { ka: "თბილისი", en: "Tbilisi", lon: 44.86, lat: 41.66, icon: "fortress", img: "jjOmHfVQPImWIMho", alt: "ძველი თბილისი და ნარიყალა", desc: "აბანოების უბანი, ხის აივნები და მრავალსაუკუნოვანი მრავალეროვანი კულტურა." },
  { ka: "აჭარა", en: "Adjara", lon: 42.02, lat: 41.73, icon: "fortress", img: "Xd32m9fOP1J74Urx", alt: "ბათუმი, აჭარა", regionId: "adjara", desc: "შავი ზღვის სანაპირო, მთიანი ხინოს უღელტეხილი და მაჭახლის უნიკალური სოფლური კულტურა." },
  { ka: "სამეგრელო", en: "Samegrelo", lon: 42.15, lat: 42.4, icon: "fortress", img: "I72M3lBSTf9EJVn8", alt: "მარტვილის კანიონი, სამეგრელო", desc: "კოლხური დაბლობი, ტბები და კანიონები; მეგრული ენა და სამზარეულო." },
  { ka: "იმერეთი", en: "Imereti", lon: 42.72, lat: 42.22, icon: "church", img: "fkQYrZB1ZU6oDjUg", alt: "ბაგრატის ტაძარი, ქუთაისი", desc: "ქუთაისი — უძველესი დედაქალაქი, ბაგრატი და გელათი, ქვევრის ღვინო და ხელოსნური ტრადიციები." },
  { ka: "თუშეთი", en: "Tusheti", lon: 45.63, lat: 42.37, icon: "tower", img: "KU1gZAB04l0ixryO", alt: "კესელოს კოშკები, თუშეთი", desc: "ომალო, დართლო, კესელოს კოშკები — ერთ-ერთი ყველაზე იზოლირებული მთიული კულტურა." },
  { ka: "ხევსურეთი", en: "Khevsureti", lon: 45.13, lat: 42.48, icon: "tower", img: "FrGDd2uxyFH4E7g0", alt: "მუცო, ხევსურეთი", desc: "მუცო, შატილი, ხახმათი — საგუშაგო კოშკები და ხევსურული საომარი ტრადიციები." },
  { ka: "ხევი", en: "Khevi", lon: 44.66, lat: 42.58, icon: "church", img: "GnuUxvVGfsjcN7yA", alt: "გერგეტის სამების ეკლესია, ხევი", regionId: "kazbegi", desc: "ყაზბეგის მიდამოები და გერგეტის სამება — საქართველოს ყველაზე ფოტოგენური სალოცავი." },
  { ka: "სამცხე-ჯავახეთი", en: "Samtskhe-Javakheti", lon: 43.2, lat: 41.52, icon: "cave", img: "5w0mZLBWlE7r71zC", alt: "ვარძია, სამცხე-ჯავახეთი", regionId: "samtskhe-javakheti", desc: "ვარძია, რაბათი, ფარავნის ტბა — გამოქვაბულების ცივილიზაცია მესხეთის მთებში." },
  { ka: "რაჭა-ლეჩხუმი", en: "Racha-Lechkhumi", lon: 43.2, lat: 42.55, icon: "church", img: "6spWZQrYvFFuBNwb", alt: "შაორის წყალსაცავი, რაჭა", desc: "„ქართული შვეიცარია“: შაორი, ხვანჭკარა და სასანტლის ვენახები." },
  { ka: "აფხაზეთი", en: "Abkhazia", lon: 41.3, lat: 43.1, icon: "church", img: "ljZFei9DNOBkYcgD", alt: "ახალი ათონის მონასტერი, აფხაზეთი", desc: "ბიჭვინთა, ანაკოფია და ახალი ათონი — შავიზღვისპირა ისტორიულ-კულტურული მემკვიდრეობა." },
]


// historical regions, west → east; items below carry `areas` (empty = country-wide)
const KUTKHEEBI: { id: Kutkhe; name: string }[] = [
  { id: "abkhazia", name: "აფხაზეთი" }, { id: "samegrelo", name: "სამეგრელო" }, { id: "svaneti", name: "სვანეთი" },
  { id: "guria", name: "გურია" }, { id: "adjara", name: "აჭარა" }, { id: "imereti", name: "იმერეთი" },
  { id: "racha", name: "რაჭა-ლეჩხუმი" }, { id: "samtskhe", name: "სამცხე-ჯავახეთი" }, { id: "kartli", name: "შიდა ქართლი" },
  { id: "kvemo", name: "ქვემო ქართლი" }, { id: "tbilisi", name: "თბილისი" }, { id: "mtiuleti", name: "მთიულეთი" },
  { id: "khevi", name: "ხევი" }, { id: "khevsureti", name: "ხევსურეთი" }, { id: "tusheti", name: "თუშეთი" },
  { id: "kakheti", name: "კახეთი" },
]
// a photo per kutkhe: the matching REGIONS card, otherwise a nearby landmark
const KUTKHE_IMG_FALLBACK: Partial<Record<Kutkhe, string>> = {
  guria: "I72M3lBSTf9EJVn8", kartli: "udCSb0N7UMcdNPVt", kvemo: "NdqxwOI6eY0U1C0e", mtiuleti: "imUv4nTweClsx1gI",
}
const kutkheImg = (k: { id: Kutkhe; name: string }) =>
  REGIONS.find((r) => r.ka === k.name)?.img ?? KUTKHE_IMG_FALLBACK[k.id] ?? "GnuUxvVGfsjcN7yA"

const TIMELINE_SHORT = [
  { areas: ["samegrelo","imereti","guria","adjara","abkhazia"], year: "ძვ. წ. VI–IV სს.", img: "I72M3lBSTf9EJVn8", alt: "მარტვილის კანიონი — კოლხეთის დაბლობი", title: "კოლხეთის სამეფო", text: "ანტიკური წყაროები აღწერს შავი ზღვის აღმოსავლეთ სანაპიროს მდიდარ, ოქროთი ცნობილ სამეფოს — დღევანდელი დასავლეთ საქართველოს ტერიტორიას." },
  { areas: ["kartli"], year: "IV ს.", img: "udCSb0N7UMcdNPVt", alt: "მცხეთა და სვეტიცხოველი", title: "ქრისტიანობა — სახელმწიფო რელიგია", text: "ქართლში ქრისტიანობის გამოცხადებამ (ტრადიციული თარიღი — 330 წ.) განსაზღვრა საქართველოს კულტურული გზა საუკუნეების მანძილზე." },
  { areas: ["tbilisi"], year: "V ს.", img: "jjOmHfVQPImWIMho", alt: "ძველი თბილისი და ნარიყალა", title: "თბილისის დაარსება", text: "ტრადიცია თბილისის დაარსებას მეფე ვახტანგ გორგასალს უკავშირებს (დაახლ. 458 წ.) — ქალაქი ცხელი აბანოების აღმოჩენის ამბავთან ერთად." },
  { areas: ["imereti","samtskhe"], year: "XI–XII სს.", img: "5w0mZLBWlE7r71zC", alt: "ვარძია — თამარ მეფის კლდის ქალაქი", title: "„ოქროს ხანა“", text: "დავით აღმაშენებელი და თამარ მეფე — გაერთიანებული საქართველოს ძლიერების ხანა: გელათის აკადემია, ვარძია, შუა საუკუნეების ხელოვნების აღმავლობა." },
  { areas: [], year: "XIII–XVIII სს.", img: "imUv4nTweClsx1gI", alt: "ანანურის ციხესიმაგრე", title: "დანაწევრება და წინააღმდეგობა", text: "მონღოლთა და შემდგომი შემოსევების შემდეგ სამეფო-სამთავროებად დაყოფილი ქვეყანა კვლავ ინარჩუნებს მთიულ და სამონასტრო ტრადიციებს." },
  { areas: ["kartli","svaneti"], year: "1994–1996", img: "SpPnO6MUAmA5T9o6", alt: "ლამარიას ეკლესია, უშგული", title: "იუნესკოს მსოფლიო მემკვიდრეობა", text: "მცხეთა (1994) და ზემო სვანეთი (1996) იუნესკოს მსოფლიო მემკვიდრეობის სიაში შედის — ციფრული მუზეუმის იდეის ერთ-ერთი საფუძველი." },
]

const TIMELINE_FULL = [
  TIMELINE_SHORT[0],
  { areas: ["kartli"], year: "ძვ. წ. IV–III სს.", img: "udCSb0N7UMcdNPVt", alt: "მცხეთა — ქართლის ძველი დედაქალაქი", title: "ქართლის (იბერიის) სამეფო", text: "ტრადიცია ქართლის პირველ მეფედ ფარნავაზს მიიჩნევს, რომელსაც ქართული დამწერლობის შექმნასაც მიაწერს. დედაქალაქი — მცხეთა." },
  TIMELINE_SHORT[1],
  { areas: ["kvemo"], year: "V ს.", img: "NdqxwOI6eY0U1C0e", alt: "შუა საუკუნეების ქართული ფრესკები", title: "უძველესი ქართული წარწერები და წიგნი", text: "ბოლნისისა და პალესტინის ქართული წარწერები, „შუშანიკის წამება“ — ქართული მწერლობის უძველესი ძეგლები." },
  TIMELINE_SHORT[2],
  { areas: ["kvemo","tbilisi"], year: "1121", img: "FrGDd2uxyFH4E7g0", alt: "მუცოს ციხე-სოფელი", title: "დიდგორის ბრძოლა", text: "დავით აღმაშენებლის გამარჯვება, რომლის შემდეგაც 1122 წელს თბილისი კვლავ ქართული სამეფოს დედაქალაქი ხდება." },
  TIMELINE_SHORT[3],
  { areas: [], year: "XII ს.", img: "fkQYrZB1ZU6oDjUg", alt: "ბაგრატის ტაძარი, ქუთაისი", title: "„ვეფხისტყაოსანი“", text: "შოთა რუსთაველის პოემა — ქართული ლიტერატურის მწვერვალი, თამარ მეფის ეპოქის სულისკვეთების ანარეკლი." },
  TIMELINE_SHORT[4],
  { areas: ["kartli","kakheti"], year: "1801", img: "HsYlX0J2VDTJfFnX", alt: "სიღნაღი, კახეთი", title: "რუსეთის იმპერიის შემადგენლობაში", text: "ქართლ-კახეთის სამეფოს გაუქმება; XIX საუკუნეში დანარჩენი ქართული სამეფო-სამთავროებიც იმპერიას უერთდება." },
  { areas: [], year: "1918", img: "GnuUxvVGfsjcN7yA", alt: "გერგეტის სამების ეკლესია, ხევი", title: "საქართველოს დემოკრატიული რესპუბლიკა", text: "26 მაისს გამოცხადდა დამოუკიდებლობა. 1921 წელს წითელი არმიის შემოჭრის შემდეგ ქვეყანა საბჭოთა კავშირის ნაწილი ხდება." },
  { areas: [], year: "1991", img: "GxpZw8gO36Dy5gz8", alt: "უშგულის სოფელი შემოდგომაზე", title: "დამოუკიდებლობის აღდგენა", text: "9 აპრილს საქართველომ სახელმწიფოებრივი დამოუკიდებლობა აღადგინა." },
  TIMELINE_SHORT[5],
  { areas: ["guria","kakheti"], year: "2001–2016", img: "6spWZQrYvFFuBNwb", alt: "შაორის წყალსაცავი, რაჭა", title: "არამატერიალური მემკვიდრეობა", text: "იუნესკომ აღიარა ქართული მრავალხმიანი სიმღერა (2001), ქვევრის ღვინის დაყენების მეთოდი (2013) და ქართული ანბანის სამი სახეობის ცოცხალი კულტურა (2016)." },
]

const CUSTOMS = [
  { areas: [], icon: "🍷", img: "jjOmHfVQPImWIMho", alt: "ძველი თბილისი და ნარიყალა", title: "სუფრა და თამადა", region: "მთელი საქართველო", text: "ქართული სუფრა რიტუალია: თამადა წარმართავს სადღეგრძელოებს — მშვიდობის, წინაპრების, მეგობრობის. სტუმარი „ღვთისაა“, ასე ამბობს ძველი სიტყვა." },
  { areas: ["kakheti","imereti"], icon: "🏺", img: "HsYlX0J2VDTJfFnX", alt: "სიღნაღი და ალაზნის ველი, კახეთი", title: "ქვევრის ღვინო", region: "კახეთი · იმერეთი", text: "მიწაში ჩაფლულ თიხის ქვევრში ყურძნის დადუღება 8000-წლიანი ტრადიციაა. მეთოდი იუნესკოს არამატერიალური მემკვიდრეობის სიაშია (2013)." },
  { areas: ["guria","svaneti","kakheti"], icon: "🎶", img: "GxpZw8gO36Dy5gz8", alt: "უშგულის სოფელი შემოდგომაზე", title: "მრავალხმიანი სიმღერა", region: "გურია · სვანეთი · კახეთი", text: "სამხმიანი სიმღერა — „ჩაკრულო“, „ლილე“, გურული კრიმანჭული. იუნესკომ ქართული პოლიფონია 2001 წელს აღიარა." },
  { areas: ["khevsureti"], icon: "🧥", img: "FrGDd2uxyFH4E7g0", alt: "მუცო, ხევსურეთი", title: "ჩოხა და ტრადიციული სამოსი", region: "მთელი საქართველო", text: "ჩოხა, ახალუხი, ხევსურული ნაქარგი პერანგი — სამოსი, რომელიც კუთხის, სტატუსისა და დღესასწაულის ენაზე „ლაპარაკობს“." },
  { areas: ["adjara","khevsureti"], icon: "💃", img: "Xd32m9fOP1J74Urx", alt: "ბათუმი, აჭარა", title: "ქართული ცეკვა", region: "კუთხეების ცეკვები", text: "ქართული, ხორუმი, ხევსურული, აჭარული — ცეკვები, რომლებშიც ომიც, სიყვარულიც და მთის რიტმიც ცოცხლობს." },
  { areas: ["svaneti"], icon: "🔥", img: "fu29FaDzh3624NIW", alt: "მესტია, სვანეთი", title: "ლამპრობა", region: "სვანეთი", text: "ზამთრის ბოლოს სვანეთში ჩირაღდნებით გადიან — ცეცხლით ლოცავენ ოჯახში ვაჟების სიცოცხლესა და მომავალ წელს." },
  { areas: [], icon: "✍️", img: "NdqxwOI6eY0U1C0e", alt: "ვარძიის ღვთისმშობლის ეკლესიის ფრესკები", title: "ქართული ანბანი", region: "ასომთავრული · ნუსხური · მხედრული", text: "სამი დამწერლობის ცოცხალი კულტურა იუნესკოს არამატერიალური მემკვიდრეობის სიაშია (2016) — ერთ-ერთი უნიკალური ანბანი მსოფლიოში." },
  { areas: [], icon: "🤼", img: "KU1gZAB04l0ixryO", alt: "კესელოს კოშკები, თუშეთი", title: "ჭიდაობა", region: "მთელი საქართველო", text: "ქართული ჭიდაობა დოლ-ზურნის თანხლებით — სახალხო დღესასწაულების განუყოფელი ნაწილი, იუნესკოს სიაში 2018 წლიდან." },
]

const LEGENDS = [
  { areas: ["khevi"], img: "GnuUxvVGfsjcN7yA", title: "ამირანი — კავკასიონზე მიჯაჭვული გმირი", region: "კავკასიონი", kind: "მითი", text: "ქართული ეპოსის გმირი, რომელმაც ღმერთს შეჰბედა და ამისთვის კავკასიონის კლდეზე მიაჯაჭვეს. ამბავი ბერძნულ პრომეთეს მითს ეხმიანება — ხალხში ამბობენ, რომ ჯაჭვს ერთგული ძაღლი დღემდე ლოკავს." },
  { areas: ["samegrelo","imereti"], img: "I72M3lBSTf9EJVn8", title: "ოქროს საწმისი და არგონავტები", region: "კოლხეთი · სამეგრელო", kind: "მითი", text: "ბერძნული მითით იასონი და არგონავტები კოლხეთში მეფე აიეტთან ოქროს საწმისისთვის ჩამოვიდნენ, მათ მედეა დაეხმარა. მკვლევრები მითს ძველ კოლხურ ოქროს მოპოვებას უკავშირებენ." },
  { areas: ["tbilisi"], img: "jjOmHfVQPImWIMho", title: "ხოხობი და თბილი წყაროები", region: "თბილისი", kind: "თქმულება", text: "ვახტანგ გორგასალს ნადირობისას ხოხობი ცხელ წყაროში ჩაუვარდა და მოიხარშა. მეფემ ადგილის სითბოთი მოხიბლულმა აქ ქალაქის აშენება ბრძანა — სახელიც „თბილისი“ ამ სითბოსგან მოდის." },
  { areas: ["samtskhe"], img: "NdqxwOI6eY0U1C0e", title: "„აქ ვარ, ძია!“ — ვარძიის სახელი", region: "სამცხე-ჯავახეთი", kind: "თქმულება", text: "გადმოცემით, პატარა თამარი გამოქვაბულებში დაიკარგა და ბიძას გასძახა: „აქ ვარ, ძია!“ — აქედან უნდა წარმოშობილიყო ქვაბთა ქალაქის სახელი." },
  { areas: ["svaneti"], img: "fu29FaDzh3624NIW", title: "დალი — ნადირობის ქალღმერთი", region: "სვანეთი", kind: "ზეპირი გადმოცემა", text: "სვანური გადმოცემებით, მთის ნადირის მფარველი დალი ოქროსთმიანი ქალია, რომელიც მონადირეს ზომიერებას სთხოვს — ხარბ მონადირეს კი კლდიდან ჩამოაგდებს." },
  { areas: ["kartli"], img: "udCSb0N7UMcdNPVt", title: "უფლის კვართი და სვეტიცხოველი", region: "მცხეთა", kind: "გადმოცემა", text: "ტრადიციით, ქრისტეს კვართი მცხეთაში ელიოზმა ჩამოიტანა და სიდონიამ ჩაიკრა გულში — მის საფლავზე ამოიზარდა კედარი, საიდანაც სვეტიცხოვლის სახელი მოდის." },
]

const STORIES: { areas: Kutkhe[]; img: string; alt: string; tagClass: string; tag: string; title: string; text: string; meta: string[]; regionId?: string }[] = [
  { areas: ["samtskhe"], img: "NdqxwOI6eY0U1C0e", alt: "ვარძიის ღვთისმშობლის ეკლესიის ფრესკები", tagClass: "legend", tag: "ლეგენდა + ისტორია", regionId: "samtskhe-javakheti", title: "ვარძია — გამოქვაბული, რომელსაც სახელი მაცხოვრებელმა დაუტოვა", text: "თამარ მეფის სახელთან დაკავშირებული თქმულება — და ის, რასაც ისტორიული წყაროები ვარძიის აშენების შესახებ გვეუბნება.", meta: ["სამცხე-ჯავახეთი", "8 წთ კითხვა", "2026-01-12"] },
  { areas: ["mtiuleti"], img: "imUv4nTweClsx1gI", alt: "ანანურის ციხესიმაგრე", tagClass: "oral", tag: "ზეპირი გადმოცემა", title: "ანანური — ციხე, რომელსაც წყალი მიუახლოვდა", text: "ადგილობრივი თქმულებები ჟინვალის წყალსაცავის მშენებლობისა და წყალქვეშ დარჩენილი სოფლების შესახებ — და რა ითქმის ამაზე დოკუმენტებში.", meta: ["დუშეთი · მცხეთა-მთიანეთი", "6 წთ კითხვა", "2026-01-05"] },
  { areas: ["khevi"], img: "GnuUxvVGfsjcN7yA", alt: "გერგეტის სამების ეკლესია ყაზბეგის მიდამოებში", tagClass: "fact", tag: "ისტორიული ფაქტი", regionId: "kazbegi", title: "გერგეტის სამება — სალოცავი უღელტეხილზე", text: "როგორ აღწერს წყაროები გერგეტის სამების ეკლესიის ისტორიას, მცხეთის სიწმინდეების შენახვას და საბჭოთა პერიოდში დახურული სალოცავის ბედს.", meta: ["ხევი · ყაზბეგი", "7 წთ კითხვა", "2025-12-20"] },
]

// one shape for everything shown as a photo mosaic tile and in the full-screen viewer
type Spot = { key: string; img: string; alt: string; title: string; text: string; region: string; icon?: string; badge?: string; meta?: string; regionId?: string }
const areaNames = (areas: readonly string[], fallback = "მთელი საქართველო") =>
  areas.map((a) => KUTKHEEBI.find((k) => k.id === a)?.name).filter(Boolean).join(" · ") || fallback

type ArchCat = "temple" | "mountain" | "city" | "nature"
const ARCH_CATS: { id: ArchCat | "all"; label: string }[] = [
  { id: "all", label: "ყველა" },
  { id: "temple", label: "ტაძრები" },
  { id: "mountain", label: "მთის სოფლები" },
  { id: "city", label: "ქალაქები" },
  { id: "nature", label: "ბუნება" },
]
const ARCHIVE: { areas: Kutkhe[]; img: string; alt: string; title: string; caption: string; cat: ArchCat }[] = [
  { areas: ["kartli"], img: "udCSb0N7UMcdNPVt", alt: "მცხეთა და სვეტიცხოველი ზემოდან", title: "მცხეთა — სვეტიცხოველი", cat: "temple", caption: "მცხეთა ფრინველის ხედვიდან — სვეტიცხოველი. ფოტო: Flickr (CC)" },
  { areas: ["svaneti"], img: "fu29FaDzh3624NIW", alt: "მესტიის კოშკი", title: "მესტიის კოშკი, სვანეთი", cat: "mountain", caption: "მესტიის კოშკი ქართული დროშით. ფოტო: Flickr (CC)" },
  { areas: ["svaneti"], img: "SpPnO6MUAmA5T9o6", alt: "ლამარიას ეკლესია უშგულში", title: "ლამარია, უშგული", cat: "temple", caption: "ლამარიას ეკლესია და სვანური კოშკი, უშგული. ფოტო: Flickr (CC)" },
  { areas: ["samtskhe"], img: "NdqxwOI6eY0U1C0e", alt: "ვარძიის ინტერიერი", title: "ვარძიის ფრესკები", cat: "temple", caption: "ვარძიის ღვთისმშობლის ეკლესიის ინტერიერი — თამარ მეფის ფრესკა. ფოტო: Flickr (CC)" },
  { areas: ["svaneti"], img: "GxpZw8gO36Dy5gz8", alt: "უშგულის სოფელი შემოდგომაზე", title: "უშგული შემოდგომით", cat: "mountain", caption: "უშგული — ევროპის ერთ-ერთი უმაღლესი მუდმივად დასახლებული სოფელი. ფოტო: Flickr (CC)" },
  { areas: ["kakheti"], img: "HsYlX0J2VDTJfFnX", alt: "სიღნაღი, კახეთი", title: "სიღნაღი", cat: "city", caption: "სიღნაღი — ქალაქი-სიმაგრე ალაზნის ველის თავზე. ფოტო: Flickr (CC)" },
  { areas: ["tbilisi"], img: "jjOmHfVQPImWIMho", alt: "ძველი თბილისი და ნარიყალა", title: "ძველი თბილისი", cat: "city", caption: "ძველი თბილისი და ნარიყალას ციხე. ფოტო: Flickr (CC)" },
  { areas: ["adjara"], img: "Xd32m9fOP1J74Urx", alt: "ბათუმი, აჭარა", title: "ბათუმი", cat: "city", caption: "ბათუმი — შავი ზღვის კარიბჭე. ფოტო: Flickr (CC)" },
  { areas: ["imereti"], img: "fkQYrZB1ZU6oDjUg", alt: "ბაგრატის ტაძარი, ქუთაისი", title: "ბაგრატის ტაძარი", cat: "temple", caption: "ბაგრატის ტაძარი, ქუთაისი. ფოტო: Flickr (CC)" },
  { areas: ["tusheti"], img: "KU1gZAB04l0ixryO", alt: "კესელოს კოშკები, თუშეთი", title: "კესელოს კოშკები", cat: "mountain", caption: "კესელოს კოშკები, ომალო, თუშეთი. ფოტო: Flickr (CC)" },
  { areas: ["samegrelo"], img: "I72M3lBSTf9EJVn8", alt: "მარტვილის კანიონი", title: "მარტვილის კანიონი", cat: "nature", caption: "მარტვილის კანიონი, სამეგრელო. ფოტო: Flickr (CC)" },
  { areas: ["racha"], img: "6spWZQrYvFFuBNwb", alt: "შაორის წყალსაცავი, რაჭა", title: "შაორი, რაჭა", cat: "nature", caption: "შაორის წყალსაცავი, რაჭა. ფოტო: Flickr (CC)" },
]

// photos each page header cycles through (the first is the page's `img`)
const PAGE_SLIDES: Record<Exclude<View, "home">, { img: string; alt: string }[]> = {
  regions: [
    { img: "HsYlX0J2VDTJfFnX", alt: "სიღნაღი, კახეთი" }, { img: "fu29FaDzh3624NIW", alt: "მესტია, სვანეთი" },
    { img: "Xd32m9fOP1J74Urx", alt: "ბათუმი, აჭარა" }, { img: "KU1gZAB04l0ixryO", alt: "კესელოს კოშკები, თუშეთი" },
  ],
  history: [
    { img: "fkQYrZB1ZU6oDjUg", alt: "ბაგრატის ტაძარი, ქუთაისი" }, { img: "5w0mZLBWlE7r71zC", alt: "ვარძია, სამცხე-ჯავახეთი" },
    { img: "udCSb0N7UMcdNPVt", alt: "მცხეთა და სვეტიცხოველი" }, { img: "imUv4nTweClsx1gI", alt: "ანანურის ციხესიმაგრე" },
  ],
  customs: [
    { img: "6spWZQrYvFFuBNwb", alt: "შაორის წყალსაცავი, რაჭა" }, { img: "HsYlX0J2VDTJfFnX", alt: "სიღნაღი, კახეთი" },
    { img: "KU1gZAB04l0ixryO", alt: "კესელოს კოშკები, თუშეთი" }, { img: "GxpZw8gO36Dy5gz8", alt: "უშგულის სოფელი შემოდგომაზე" },
  ],
  legends: [
    { img: "GnuUxvVGfsjcN7yA", alt: "გერგეტის სამების ეკლესია, ხევი" }, { img: "FrGDd2uxyFH4E7g0", alt: "მუცო, ხევსურეთი" },
    { img: "fu29FaDzh3624NIW", alt: "მესტია, სვანეთი" }, { img: "I72M3lBSTf9EJVn8", alt: "მარტვილის კანიონი, სამეგრელო" },
  ],
  archive: [
    { img: "udCSb0N7UMcdNPVt", alt: "მცხეთა და სვეტიცხოველი" }, { img: "NdqxwOI6eY0U1C0e", alt: "ვარძიის ღვთისმშობლის ეკლესიის ფრესკები" },
    { img: "SpPnO6MUAmA5T9o6", alt: "ლამარიას ეკლესია, უშგული" }, { img: "jjOmHfVQPImWIMho", alt: "ძველი თბილისი და ნარიყალა" },
  ],
  plan: [
    { img: "GxpZw8gO36Dy5gz8", alt: "უშგულის სოფელი შემოდგომაზე" }, { img: "HsYlX0J2VDTJfFnX", alt: "სიღნაღი, კახეთი" },
    { img: "GnuUxvVGfsjcN7yA", alt: "გერგეტის სამების ეკლესია, ხევი" }, { img: "Xd32m9fOP1J74Urx", alt: "ბათუმი, აჭარა" },
  ],
}
const HERO_SLIDE_MS = 6000

const PAGE_HERO: Record<Exclude<View, "home">, { img: string; eyebrow: string; title: string; sub: string }> = {
  regions: { img: "HsYlX0J2VDTJfFnX", eyebrow: "ინტერაქტიული ატლასი", title: "საქართველოს კუთხეები", sub: "12 ისტორიულ-ეთნოგრაფიული მხარე — მთიანეთიდან ზღვისპირეთამდე. აირჩიე კუთხე და გაიცანი მისი ისტორია." },
  history: { img: "fkQYrZB1ZU6oDjUg", eyebrow: "ქრონოლოგია", title: "საქართველოს ისტორია", sub: "კოლხეთიდან დამოუკიდებლობამდე — ათასწლეულების გზა, რომელმაც ქართული კულტურა ჩამოაყალიბა." },
  customs: { img: "6spWZQrYvFFuBNwb", eyebrow: "ცოცხალი მემკვიდრეობა", title: "ადათ-წესები", sub: "სუფრა, სიმღერა, ქვევრი და ჩოხა — ტრადიციები, რომლებიც დღესაც ცოცხლობს ოჯახებსა და სოფლებში." },
  legends: { img: "GnuUxvVGfsjcN7yA", eyebrow: "მითები და თქმულებები", title: "ლეგენდები", sub: "ამირანიდან ოქროს საწმისამდე — ამბები, რომლებიც თაობიდან თაობას გადაეცემა." },
  archive: { img: "udCSb0N7UMcdNPVt", eyebrow: "ციფრული არქივი", title: "ციფრული არქივი", sub: "ფოტოები და ისტორიული მასალა — თითოეულ ექსპონატს აქვს წყარო და ლიცენზია." },
  plan: { img: "GxpZw8gO36Dy5gz8", eyebrow: "მოგზაურობის დამგეგმავი", title: "დაგეგმე შენი საქართველო", sub: "აირჩიე კუთხეები, დღეები და ინტერესები — მარშრუტს ატლასის ადგილებით, ლეგენდებითა და ტრადიციებით შეგიდგენთ." },
}

/* ---------- trip planner: builds a day-by-day route out of the atlas's own material ---------- */

type Interest = "history" | "customs" | "legends" | "nature" | "photo"
const INTERESTS: { id: Interest; icon: string; label: string }[] = [
  { id: "history", icon: "🏛", label: "ისტორია და ტაძრები" },
  { id: "customs", icon: "🍷", label: "ადათ-წესები და სუფრა" },
  { id: "legends", icon: "📜", label: "ლეგენდები" },
  { id: "nature", icon: "🏔", label: "მთები და ბუნება" },
  { id: "photo", icon: "📷", label: "ფოტოგრაფია" },
]
const PACES = [
  { label: "მშვიდი", hint: "2 აქტივობა დღეში", slots: ["დილა", "საღამო"] },
  { label: "ზომიერი", hint: "3 აქტივობა დღეში", slots: ["დილა", "შუადღე", "საღამო"] },
  { label: "აქტიური", hint: "4 აქტივობა დღეში", slots: ["დილა", "შუადღე", "ნაშუადღევი", "საღამო"] },
]
// occupied territory: shown on the map of regions, but no route can go there
const PLAN_BLOCKED: Kutkhe[] = ["abkhazia"]
type PlanForm = { regions: Kutkhe[]; from: string; days: number; people: number; interests: Interest[]; pace: number }
type PlanAct = Spot & { slot: string; kind: string }
type PlanDay = { k: Kutkhe; name: string; img: string; desc: string; date: string | null; travelFrom?: string; acts: PlanAct[] }

const planRegion = (k: Kutkhe) => {
  const kk = KUTKHEEBI.find((x) => x.id === k) ?? { id: k, name: "" }
  const r = REGIONS.find((x) => x.ka === kk.name)
  return { name: kk.name, img: kutkheImg(kk), desc: r?.desc ?? `${kk.name} — ისტორიული კუთხე, რომლის სოფლები, ტაძრები და ბაზრები ფეხით უკეთ იხსნება.` }
}

function buildPlan(f: PlanForm): PlanDay[] {
  const regions = f.regions.slice(0, f.days)
  if (!regions.length) return []
  const slots = PACES[f.pace].slots
  const want = new Set(f.interests)
  const score = (tags: Interest[]) => tags.filter((x) => want.has(x)).length
  const start = f.from ? new Date(`${f.from}T00:00`) : null
  const fmt = new Intl.DateTimeFormat("ka-GE", { weekday: "long", day: "numeric", month: "long" })

  // the region's material, best match for the chosen interests first; country-wide customs and a walk fill the gaps
  const usedWide = new Set<string>()
  const poolFor = (k: Kutkhe) => {
    const r = planRegion(k)
    const items: { s: number; a: Omit<PlanAct, "slot" | "key"> }[] = [
      ...ARCHIVE.filter((a) => a.areas.includes(k)).map((a) => ({
        s: score(a.cat === "temple" || a.cat === "city" ? ["history", "photo"] : ["nature", "photo"]) + 0.5,
        a: { img: a.img, alt: a.alt, title: a.title, text: a.caption, region: r.name, icon: "📍", kind: "სანახაობა", badge: "სანახაობა" },
      })),
      ...LEGENDS.filter((l) => (l.areas as string[]).includes(k)).map((l) => ({
        s: score(["legends"]),
        a: { img: l.img, alt: l.title, title: l.title, text: l.text, region: r.name, icon: "📜", kind: l.kind, badge: l.kind },
      })),
      ...STORIES.filter((s) => s.areas.includes(k)).map((s) => ({
        s: score(["legends", "history"]),
        a: { img: s.img, alt: s.alt, title: s.title, text: s.text, region: r.name, icon: "📖", kind: s.tag, badge: s.tag, regionId: s.regionId },
      })),
      ...CUSTOMS.filter((c) => (c.areas as string[]).includes(k)).map((c) => ({
        s: score(["customs"]) + 0.25,
        a: { img: c.img, alt: c.alt, title: c.title, text: c.text, region: r.name, icon: c.icon, kind: "ტრადიცია", badge: "ტრადიცია" },
      })),
      ...TIMELINE_FULL.filter((t) => (t.areas as string[]).includes(k)).map((t) => ({
        s: score(["history"]),
        a: { img: t.img, alt: t.alt, title: t.title, text: t.text, region: r.name, icon: "🏛", kind: t.year, badge: t.year },
      })),
    ]
    items.sort((x, y) => y.s - x.s)
    const wide = CUSTOMS.filter((c) => !c.areas.length && !usedWide.has(c.title)).map((c) => ({
      img: c.img, alt: c.alt, title: c.title, text: c.text, region: "მთელი საქართველო", icon: c.icon, kind: "ტრადიცია", badge: "ტრადიცია",
    }))
    return { r, list: items.map((x) => x.a), wide }
  }

  const days: PlanDay[] = []
  const base = Math.floor(f.days / regions.length)
  const extra = f.days % regions.length
  regions.forEach((k, ri) => {
    const { r, list, wide } = poolFor(k)
    const n = base + (ri < extra ? 1 : 0)
    let li = 0
    let wi = 0
    let walks = 0
    for (let d = 0; d < n; d++) {
      const di = days.length
      const acts = slots.map((slot, si) => {
        // evenings prefer a table / song / dance custom; otherwise the region's own material, then fillers
        const evening = si === slots.length - 1 && slots.length > 1
        let a: Omit<PlanAct, "slot" | "key"> | undefined
        if (evening && want.has("customs") && wi < wide.length) a = wide[wi++]
        if (!a && li < list.length) a = list[li++]
        if (!a && wi < wide.length) a = wide[wi++]
        if (!a) {
          walks++
          a = walks % 2
            ? { img: r.img, alt: r.name, title: `${r.name}: ფეხით გასეირნება`, text: r.desc, region: r.name, icon: "🥾", kind: "გასეირნება", badge: "გასეირნება" }
            : { img: r.img, alt: r.name, title: `${r.name}: ადგილობრივი სამზარეულო`, text: `ოჯახური მარანი ან სასტუმრო სახლი — სცადე კუთხის კერძები და ღვინო. ${r.desc}`, region: r.name, icon: "🍽", kind: "სამზარეულო", badge: "სამზარეულო" }
        }
        if (a.region === "მთელი საქართველო") usedWide.add(a.title)
        return { ...a, slot, key: `${di}-${si}` }
      })
      days.push({
        k, name: r.name, img: r.img, desc: r.desc, acts,
        date: start ? fmt.format(new Date(start.getFullYear(), start.getMonth(), start.getDate() + di)) : null,
        travelFrom: d === 0 && ri > 0 ? planRegion(regions[ri - 1]).name : undefined,
      })
    }
  })
  return days
}

const T = {
  ka: {
    navHome: "მთავარი", navRegions: "საქართველოს კუთხეები", navHistory: "ისტორია", navCustoms: "ადათ-წესები",
    navLegends: "ლეგენდები", navArchive: "ციფრული არქივი", back: "← TravelWorld",
    heroTitle: ["აღმოაჩინე ", "საქართველოს", " საუკუნოვანი ისტორია"],
    heroSub: "გაეცანი საქართველოს კუთხეებს, ხალხის მეხსიერებაში შემონახულ ამბებს, ტრადიციებსა და კულტურულ მემკვიდრეობას.",
    cta1: "გამოიკვლიე საქართველო", cta2: "აღმოაჩინე ლეგენდები",
    regionsTitle: "საქართველოს ისტორიული კუთხეები",
    regionsSub: "ისტორიულ-ეთნოგრაფიული მხარეები — შავი ზღვიდან კავკასიონის უღელტეხილებამდე. თითოეული კუთხე — ცალკე ციფრული კულტურული სივრცე.",
    storiesTitle: "ამბები, რომლებიც საუკუნეებს გადაურჩა",
    storiesSub: "ისტორიული ფაქტი, ზეპირი გადმოცემა, ლეგენდა და თანამედროვე ინტერპრეტაცია — ყოველთვის მკაფიოდ გამიჯნული.",
    archiveTitle: "ძველი რუკები, ფოტოები, ხელნაწერები",
    archiveSub: "საჯარო დომენისა და CC-ლიცენზიის მქონე ისტორიული მასალა — თითოეულ ექსპონატს აქვს წყარო, თარიღი და ლიცენზია.",
    trip: "მოგზაურობის დაგეგმვა", all: "ყველას ნახვა →",
    heroEyebrow: "საქართველოს ციფრული კულტურული ატლასი", scroll: "სქროლე",
    statRegions: "ისტორიული კუთხე", statLegends: "ლეგენდა", statHistory: "ისტორიული ეტაპი", statArchive: "საარქივო ფოტო",
  },
  en: {
    navHome: "Home", navRegions: "Regions", navHistory: "History", navCustoms: "Customs",
    navLegends: "Legends", navArchive: "Archive", back: "← TravelWorld",
    heroTitle: ["Discover ", "Georgia’s", " Living Heritage"],
    heroSub: "Explore the regions of Georgia — stories preserved in the memory of its people, traditions and cultural heritage.",
    cta1: "Explore Georgia", cta2: "Discover Legends",
    regionsTitle: "Historical Regions of Georgia",
    regionsSub: "An interactive atlas of historical-ethnographic provinces — from the Black Sea to the Caucasus passes.",
    storiesTitle: "Stories That Survived the Centuries",
    storiesSub: "Editorial articles where historical fact, oral tradition, legend and contemporary interpretation are clearly separated.",
    archiveTitle: "Digital Archive of Cultural Heritage",
    archiveSub: "Historical photographs, old maps, manuscripts, traditional dress and architecture — with sources and licenses.",
    trip: "Plan a Trip", all: "View all →",
    heroEyebrow: "A digital cultural atlas of Georgia", scroll: "Scroll",
    statRegions: "historical regions", statLegends: "legends", statHistory: "eras of history", statArchive: "archive photos",
  },
} satisfies Record<Lang, Record<string, string | string[]>>

function readStored(key: string): string | null {
  try { return localStorage.getItem(key) } catch { return null }
}

function writeStored(key: string, value: string) {
  try { localStorage.setItem(key, value) } catch { /* storage unavailable */ }
}
const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLElement>(null)
  const [value, setValue] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) { setValue(to); return }
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min((now - start) / 1600, 1)
        setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [to])
  return <b ref={ref}>{value}{suffix}</b>
}

// Five-cross flag: St George's cross plus four bolnur-katskhuri crosses, 3:2 proportions
const SMALL_CROSS = "M-2.5-2.5L-6-17Q0-14 6-17L2.5-2.5L17-6Q14 0 17 6L2.5 2.5L6 17Q0 14-6 17L-2.5 2.5L-17 6Q-14 0-17-6Z"
function GeorgianFlag() {
  return (
    <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="200" fill="#fff" />
      <rect x="130" width="40" height="200" fill="#E8112D" />
      <rect y="80" width="300" height="40" fill="#E8112D" />
      {[[65, 40], [235, 40], [65, 160], [235, 160]].map(([x, y]) => (
        <path key={`${x}-${y}`} d={SMALL_CROSS} transform={`translate(${x} ${y})`} fill="#E8112D" />
      ))}
    </svg>
  )
}


export default function GeorgianHeritagePage({ onBack, onSelectRegion: selectRegion, initialView = "home" }: GeorgianHeritagePageProps) {
  const [theme, setTheme] = useState<Theme>(() => (readStored("gh-theme") === "light" ? "light" : "dark"))
  const [lang, setLang] = useState<Lang>(() => (readStored("gh-lang") === "en" ? "en" : "ka"))
  const [view, setView] = useState<View>(initialView)
  const onSelectRegion = (regionId: string) => selectRegion(regionId, view)
  const [wipeKey, setWipeKey] = useState(0)
  const [wipeLabel, setWipeLabel] = useState("")
  const [archCat, setArchCat] = useState<ArchCat | "all">("all")
  const [kutkhe, setKutkhe] = useState<Kutkhe | "all">("all")
  const [nextOpen, setNextOpen] = useState<View | null>(null)
  // the card under the pointer lends its photo to the whole section background
  const [nextHover, setNextHover] = useState<View | null>(null)
  const [heroSlide, setHeroSlide] = useState(0)
  const [planForm, setPlanForm] = useState<PlanForm>({ regions: ["tbilisi", "kakheti"], from: "", days: 5, people: 2, interests: ["history", "customs"], pace: 1 })
  const [planStage, setPlanStage] = useState<"form" | "loading" | "result">("form")
  const [planDays, setPlanDays] = useState<PlanDay[]>([])
  const planTimer = useRef(0)
  useEffect(() => () => window.clearTimeout(planTimer.current), [])
  const [showcase, setShowcase] = useState(0)
  const [showcasePaused, setShowcasePaused] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [navHidden, setNavHidden] = useState(false)
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null)
  const [cx, setCx] = useState<{ group: string; list: Spot[]; i: number; prev: number; from: { t: number; r: number; b: number; l: number } | null; closing?: boolean } | null>(null)
  const cxKeys = useRef<(e: KeyboardEvent) => void>(() => {})
  const [indicator, setIndicator] = useState<{ left: number; width: number; visible: boolean }>({ left: 0, width: 0, visible: false })
  const rootRef = useRef<HTMLDivElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const fpRef = useRef<HTMLElement>(null)
  // slides replace page scrolling: nav state and the top progress bar follow the active slide
  const fp = useFullPage(fpRef, view, (i, count) => {
    setScrolled(i > 0)
    setNavHidden(false)
    if (progressRef.current) progressRef.current.style.transform = `scaleX(${count > 1 ? i / (count - 1) : 0})`
    playSlide(i)
  })
  // a slide's texts and photos animate in as it arrives, and reset once it has left so they replay on the next visit
  const slideTimers = useRef<number[]>([])
  const playSlide = (i: number) => {
    const slides = Array.from(fpRef.current?.children ?? [])
    slideTimers.current.forEach((id) => window.clearTimeout(id))
    slideTimers.current = [
      window.setTimeout(() => {
        const slide = slides[i]
        if (!slide) return
        slide.querySelectorAll(".reveal").forEach((el) => { el.classList.add("in"); revealed.current.add(el) })
        // remaining headings, text and photos get the site-wide entrance (index.css .ar), one after another
        let n = 0
        slide.querySelectorAll<HTMLElement>(AUTO_REVEAL_SELECTOR).forEach((el) => {
          if (!el.classList.contains("ar") && !canAutoReveal(el)) return
          el.style.setProperty("--ar-d", `${Math.min(n++ * 70, 700)}ms`)
          el.classList.add("ar", "ar-in")
        })
      }, i === 0 ? 0 : 380),
      window.setTimeout(() => slides.forEach((slide, j) => {
        if (j === i) return
        slide.querySelectorAll(".reveal.in").forEach((el) => { el.classList.remove("in"); revealed.current.delete(el) })
        slide.querySelectorAll(".ar-in").forEach((el) => el.classList.remove("ar-in"))
      }), FP_LOCK_MS),
    ]
  }
  useEffect(() => () => slideTimers.current.forEach((id) => window.clearTimeout(id)), [])
  const navRef = useRef<HTMLElement>(null)
  const switchTimer = useRef<number | undefined>(undefined)
  const t = T[lang]

  useEffect(() => writeStored("gh-theme", theme), [theme])
  useEffect(() => writeStored("gh-lang", lang), [lang])
  useEffect(() => () => window.clearTimeout(switchTimer.current), [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  // the viewer takes the keyboard first (capture), so arrows don't also page the full-screen slides behind it
  const cxIsOpen = cx !== null
  useEffect(() => {
    if (!cxIsOpen) return
    const onKey = (e: KeyboardEvent) => cxKeys.current(e)
    window.addEventListener("keydown", onKey, true)
    document.body.style.overflow = "hidden"
    return () => { window.removeEventListener("keydown", onKey, true); document.body.style.overflow = "" }
  }, [cxIsOpen])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightbox])

  // Nav state (hide on scroll down), scroll progress + gentle hero parallax
  useEffect(() => {
    const reduced = prefersReducedMotion()
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      const prevY = lastY
      setNavHidden((prev) => (y <= 320 ? false : y > prevY + 4 ? true : y < prevY - 4 ? false : prev))
      lastY = y
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`
      const el = parallaxRef.current
      if (!reduced && el?.parentElement) {
        const r = el.parentElement.getBoundingClientRect()
        const off = (r.top + r.height / 2 - window.innerHeight / 2) * -0.08
        el.style.transform = `translate3d(0,${off.toFixed(1)}px,0)`
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Reveal on scroll — re-run whenever the rendered content changes.
  // "in" is added to the DOM directly, so a re-render that changes an element's className
  // (e.g. a card gaining "open") would wipe it and hide the element again; `revealed`
  // remembers shown elements and the layout effect below puts "in" back before paint.
  const revealed = useRef(new WeakSet<Element>())
  useLayoutEffect(() => {
    rootRef.current?.querySelectorAll(".reveal:not(.in)").forEach((el) => {
      if (revealed.current.has(el)) el.classList.add("in")
    })
  })
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        // on a full-screen page only the active slide reveals; the others play when they arrive (playSlide)
        if ((e.target.closest(".fp > *") as HTMLElement | null)?.dataset.fp !== "active") return
        if (e.isIntersecting) { e.target.classList.add("in"); revealed.current.add(e.target); io.unobserve(e.target) }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    )
    root.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [view, archCat, kutkhe])
  // page header slideshow: restart on page change; a timeout (not an interval) so picking a photo resets the clock
  useEffect(() => { setHeroSlide(0) }, [view])
  useEffect(() => {
    if (view === "home" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = window.setTimeout(() => setHeroSlide((s) => s + 1), HERO_SLIDE_MS)
    return () => window.clearTimeout(id)
  }, [view, heroSlide])

  // Sliding underline: follows hover, rests on the active page
  const moveIndicator = useCallback((target: HTMLElement | null) => {
    const nav = navRef.current
    if (!nav || !target) { setIndicator((p) => ({ ...p, visible: false })); return }
    const n = nav.getBoundingClientRect()
    const r = target.getBoundingClientRect()
    setIndicator({ left: r.left - n.left, width: r.width, visible: true })
  }, [])
  const resetIndicator = useCallback(() => {
    moveIndicator(navRef.current?.querySelector<HTMLElement>("button.active") ?? null)
  }, [moveIndicator])
  useLayoutEffect(() => { resetIndicator() }, [view, lang, resetIndicator])
  useEffect(() => {
    window.addEventListener("resize", resetIndicator)
    return () => window.removeEventListener("resize", resetIndicator)
  }, [resetIndicator])

  // k: region to preselect on the next page (from the "continue" cards)
  const go = (next: View, k: Kutkhe | "all" = "all") => {
    setMenuOpen(false)
    setNextOpen(null)
    if (next === view) { fp.goTo(0); return }
    if (prefersReducedMotion()) { setView(next); setKutkhe(k); window.scrollTo({ top: 0 }); return }
    // Panels cover the screen, content swaps underneath while they hold
    setWipeLabel(navItems.find(([, nv]) => nv === next)?.[0] ?? (next === "plan" ? t.trip : ""))
    setWipeKey((k) => k + 1)
    window.clearTimeout(switchTimer.current)
    switchTimer.current = window.setTimeout(() => {
      setView(next)
      setArchCat("all")
      setKutkhe(k)
      setNavHidden(false)
      window.scrollTo({ top: 0 })
    }, 880)
  }

  const navItems: [string, View][] = [
    [t.navHome, "home"],
    [t.navRegions, "regions"],
    [t.navHistory, "history"],
    [t.navCustoms, "customs"],
    [t.navLegends, "legends"],
    [t.navArchive, "archive"],
  ]
  const viewLabel = navItems.find(([, v]) => v === view)?.[0] ?? (view === "plan" ? t.trip : "")

  /* ---------- reusable blocks ---------- */

  // Region accordion: one strip per region, the active one opens wide; auto-advances (paused on hover)
  const regionShowcase = () => (
    <div className="kx reveal">
      <div className="kx-strip" onMouseEnter={() => setShowcasePaused(true)} onMouseLeave={() => setShowcasePaused(false)}>
        {REGIONS.map((r, i) => {
          const on = i === showcase
          const open = () => (r.regionId ? onSelectRegion(r.regionId) : go("regions"))
          return (
            <div
              key={r.en}
              className={`kx-item${on ? " on" : ""}`}
              onMouseEnter={() => setShowcase(i)}
              onClick={() => (on ? open() : setShowcase(i))}
              role="button"
              tabIndex={0}
              aria-expanded={on}
              onKeyDown={(e) => { if (e.key === "Enter") (on ? open() : setShowcase(i)) }}
            >
              <img src={IMG(r.img, on ? 1600 : 700)} alt={r.alt} loading="lazy" />
              <div className="kx-veil" />
              <span className="kx-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="kx-vname">{lang === "en" ? r.en : r.ka}</span>
              <div className="kx-body">
                <span className="kx-place">{r.alt}</span>
                <h3>{lang === "en" ? r.en : r.ka}</h3>
                <div className="kx-en">{lang === "en" ? r.ka : r.en}</div>
                <p>{r.desc}</p>
                <span className="kx-more">{r.regionId ? "გვერდის ნახვა →" : "რუკაზე ნახვა →"}</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className="kx-progress" aria-hidden="true">
        {REGIONS.map((r, i) => (
          <button key={r.en} className={i === showcase ? "on" : i < showcase ? "done" : undefined} onClick={() => setShowcase(i)} tabIndex={-1}>
            {i === showcase && (
              <i
                key={showcase}
                style={{ animationPlayState: showcasePaused ? "paused" : "running" }}
                onAnimationEnd={() => setShowcase((s) => (s + 1) % REGIONS.length)}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )

  // history: one spine down the middle, a photo + text pair per event, sides alternating
  const timeline = (items: typeof TIMELINE_FULL) => (
    <ol className="htl">
      {items.map((item, i) => (
        <li key={item.year + item.title} className={`htl-item reveal${i % 2 ? " flip" : ""}`}>
          <button
            className="htl-photo"
            data-cx={`timeline-${i}`}
            onClick={(e) => openCx("timeline", timelineSpots(items), i, e.currentTarget)}
            aria-label={`${item.title} — სრულ ეკრანზე`}
          >
            <img src={IMG(item.img, 900)} alt={item.alt} loading="lazy" />
            <span className="htl-year">{item.year}</span>
          </button>
          <span className="htl-dot" aria-hidden="true" />
          <div className="htl-body">
            <span className="htl-num">{String(i + 1).padStart(2, "0")}</span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
            {item.areas.length > 0 && (
              <div className="htl-tags">
                {item.areas.map((a) => <span key={a}>{KUTKHEEBI.find((k) => k.id === a)?.name}</span>)}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  )

  // home chronology: era rail on top, a photo card per era below
  const photoTimeline = (items: typeof TIMELINE_SHORT) => (
    <div className="ptl">
      <ol className="ptl-rail reveal" aria-hidden="true">
        {items.map((item, i) => <li key={item.year} style={{ animationDelay: `${0.5 + i * 0.15}s` }}><i />{item.year}</li>)}
      </ol>
      <div className="ptl-grid">
        {items.map((item, i) => (
          <article key={item.year} className="ptl-card reveal" style={{ animationDelay: `${0.25 + i * 0.12}s` }}>
            <button
              className="ptl-photo"
              onClick={() => setLightbox({ src: IMG(item.img, 1800), caption: `${item.alt} — ${item.title} (${item.year})` })}
              aria-label={`${item.alt} — გადიდება`}
            >
              <img src={IMG(item.img, 700)} alt={item.alt} loading="lazy" />
              <span className="ptl-num">{String(i + 1).padStart(2, "0")}</span>
            </button>
            <div className="ptl-body">
              <div className="year">{item.year}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )

  // home page: big-photo mosaics with little text — a feature story beside two smaller ones,
  // and the archive as a bento of photos (details live on the legends / archive pages)
  const storyMosaic = (list: typeof STORIES) => (
    <div className="mosaic mosaic-stories">
      {list.map((s, i) => (
        <button
          key={s.title}
          className="mo-tile reveal"
          style={{ "--i": i } as CSSProperties}
          onClick={() => (s.regionId ? onSelectRegion(s.regionId) : go("legends"))}
        >
          <img src={IMG(s.img, i ? 1000 : 1600)} alt={s.alt} loading="lazy" />
          <span className="mo-body">
            <span className={`tag ${s.tagClass}`}>{s.tag}</span>
            <span className="mo-title"><span>{s.title}</span></span>
            <span className="mo-meta">{s.meta.slice(0, 2).join(" · ")}</span>
          </span>
          <i className="mo-arrow" aria-hidden="true">→</i>
        </button>
      ))}
    </div>
  )

  const archiveMosaic = (list: typeof ARCHIVE) => (
    <div className="mosaic mosaic-archive">
      {list.map((a, i) => (
        <button
          key={a.title}
          className="mo-tile reveal"
          style={{ "--i": i } as CSSProperties}
          onClick={() => setLightbox({ src: IMG(a.img, 1800), caption: a.caption })}
          aria-label={`${a.title} — გადიდება`}
        >
          <img src={IMG(a.img, i ? 900 : 1500)} alt={a.alt} loading="lazy" />
          <span className="mo-body">
            <span className="mo-cat">{ARCH_CATS.find((c) => c.id === a.cat)?.label}</span>
            <span className="mo-title"><span>{a.title}</span></span>
            <span className="mo-meta">Flickr · CC</span>
          </span>
          <i className="mo-arrow" aria-hidden="true">⤢</i>
        </button>
      ))}
    </div>
  )

  const filters = <F extends string>(items: { id: F; label: string }[], active: F, set: (v: F) => void) => (
    <div className="filters reveal">
      {items.map((f) => (
        <button key={f.id} className={`filter-btn${active === f.id ? " active" : ""}`} onClick={() => set(f.id)}>{f.label}</button>
      ))}
    </div>
  )

  // region list at the top of history / customs / legends / archive; counts are for this page's items
  const inKutkhe = <T extends { areas: readonly string[] }>(list: T[]) =>
    kutkhe === "all" ? list : list.filter((x) => x.areas.includes(kutkhe))
  const kutkheBar = (items: { areas: readonly string[] }[]) => (
    <div className="kutkhe-bar reveal">
      <span className="kutkhe-label">საქართველოს კუთხეები</span>
      <div className="kt-strip">
        <button className={`kt-tile all${kutkhe === "all" ? " active" : ""}`} onClick={() => setKutkhe("all")}>
          <span className="kt-name">ყველა</span>
          <span className="kt-n">{items.length}</span>
        </button>
        {KUTKHEEBI.map((k, i) => {
          const n = items.filter((x) => x.areas.includes(k.id)).length
          return (
            <button
              key={k.id}
              className={`kt-tile${kutkhe === k.id ? " active" : ""}${n ? "" : " empty"}`}
              style={{ "--i": i + 1 } as CSSProperties}
              onClick={() => setKutkhe(k.id)}
            >
              <img src={IMG(kutkheImg(k), 300)} alt="" loading="lazy" />
              <span className="kt-name">{k.name}</span>
              <span className="kt-n">{n}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
  // the items each page filters by region (regions view has none — it is the map)
  const kutkheItems = (v: View): { areas: readonly string[] }[] | null =>
    v === "history" ? TIMELINE_FULL
    : v === "customs" ? CUSTOMS
    : v === "legends" ? [...LEGENDS, ...STORIES]
    : v === "archive" ? ARCHIVE
    : null
  const kutkheEmpty = () => {
    const name = KUTKHEEBI.find((k) => k.id === kutkhe)?.name
    return (
      <div className="kutkhe-empty reveal">
        <p>{name ? `${name} — ამ განყოფილებაში მასალა ჯერ არ არის.` : "მასალა ჯერ არ არის."}</p>
        <button className="btn btn-line" onClick={() => setKutkhe("all")}>ყველას ნახვა</button>
      </div>
    )
  }

  const secHead = (eyebrow: string, title: string, sub: string, more?: View) => (
    <div className="sec-head-row">
      <div className="sec-head reveal">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{sub}</p>
      </div>
      {more && <button className="btn btn-line reveal right" onClick={() => go(more)}>{t.all}</button>}
    </div>
  )

  /* ---------- pages ---------- */

  const homePage = (
    <>
      <section
        className="hero hero-v2"
        onMouseMove={(e) => {
          // gentle depth parallax for the arch photos (-1…1 from the hero centre)
          const r = e.currentTarget.getBoundingClientRect()
          e.currentTarget.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3))
          e.currentTarget.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3))
        }}
      >
        <div className="hero-bg" ref={parallaxRef}>
          <img src={IMG("wKrt3CLm6pX8C6K4", 2560)} alt="" fetchPriority="high" />
        </div>
        <div className="hero-veil" />
        <div className="hero-ornament" aria-hidden="true" />

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow hero-in" style={{ animationDelay: ".1s" }}>{t.heroEyebrow}</span>
            <h1>
              {[t.heroTitle[0], t.heroTitle[1], t.heroTitle[2]].flatMap((part, pi) =>
                part.trim().split(/\s+/).map((word, wi, arr) => (
                  <span key={`${pi}-${wi}`} className="w">
                    <span className={pi === 1 ? "grad-text" : undefined} style={{ animationDelay: `${0.25 + (pi * 2 + wi) * 0.09}s` }}>
                      {word}
                    </span>
                    {wi < arr.length - 1 || pi < 2 ? " " : ""}
                  </span>
                )),
              )}
            </h1>
            <p className="sub hero-in" style={{ animationDelay: ".75s" }}>{t.heroSub}</p>
            <div className="hero-cta hero-in" style={{ animationDelay: ".9s" }}>
              <button className="btn btn-gold" onClick={() => go("regions")}>{t.cta1} <span aria-hidden="true">→</span></button>
              <button className="btn btn-ghost" onClick={() => go("legends")}>{t.cta2}</button>
            </div>
            <dl className="hero-stats hero-in" style={{ animationDelay: "1.05s" }}>
              {([
                [KUTKHEEBI.length, t.statRegions],
                [LEGENDS.length, t.statLegends],
                [TIMELINE_FULL.length, t.statHistory],
                [ARCHIVE.length, t.statArchive],
              ] as const).map(([n, label]) => (
                <div key={label}><dt>{n}</dt><dd>{label}</dd></div>
              ))}
            </dl>
          </div>

          <div className="hero-arches" aria-label={t.navRegions}>
            {([
              { img: "wKrt3CLm6pX8C6K4", name: lang === "en" ? "Svaneti" : "სვანეთი", place: lang === "en" ? "Ushguli" : "უშგული", regionId: "svaneti" },
              { img: "NdqxwOI6eY0U1C0e", name: lang === "en" ? "Samtskhe-Javakheti" : "სამცხე-ჯავახეთი", place: lang === "en" ? "Vardzia" : "ვარძია", regionId: "samtskhe-javakheti" },
              { img: "GnuUxvVGfsjcN7yA", name: lang === "en" ? "Khevi" : "ხევი", place: lang === "en" ? "Gergeti Trinity" : "გერგეტის სამება", regionId: "kazbegi" },
            ]).map((a, i) => (
              <button
                key={a.img}
                className={`arch arch-${i + 1}`}
                style={{ animationDelay: `${0.35 + i * 0.15}s` }}
                onClick={() => onSelectRegion(a.regionId)}
              >
                <img src={IMG(a.img, 900)} alt={`${a.place}, ${a.name}`} loading={i ? "lazy" : "eager"} />
                <span className="arch-cap"><b>{a.name}</b>{a.place}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="hero-meta">
          <div className="scroll-mouse" aria-hidden="true"><i /></div>
          <span>{t.scroll}</span>
        </div>
      </section>

      {/* "in numbers" bento: map tile draws Georgia, chips drift, tradition icons pop, the KA/EN tile really switches language */}
      <section className="sec stats-sec" data-fp-label="ციფრებში">
        <div className="wrap">
          <div className="bento-head reveal">
            <span className="eyebrow">ციფრებში</span>
            <h2>საქართველო — <span className="grad-text">ერთი ატლასი</span></h2>
          </div>
          <div
            className="bento"
            onMouseMove={(e) => {
              // glow follows the cursor inside whichever tile it is over
              const tile = (e.target as HTMLElement).closest<HTMLElement>(".bento-tile")
              if (!tile) return
              const r = tile.getBoundingClientRect()
              tile.style.setProperty("--gx", `${e.clientX - r.left}px`)
              tile.style.setProperty("--gy", `${e.clientY - r.top}px`)
            }}
          >
            <div className="bento-tile t-map reveal">
              <svg className="bento-map" viewBox="80 120 1050 560" aria-hidden="true">
                <path d={INNER_BORDERS_D} className="bm-inner" pathLength={1} />
                <path d={OUTLINE_D} className="bm-outline" pathLength={1} />
                {REGIONS.map((r, i) => (
                  <circle key={r.en} cx={60 + (r.lon - 39.75) * 150} cy={110 + (43.75 - r.lat) * 205} r="7" className="bm-dot" style={{ animationDelay: `${1.2 + i * 0.12}s` }} />
                ))}
              </svg>
              <div className="bento-num"><CountUp to={20} suffix="+" /></div>
              <div className="bento-label">ისტორიულ-ეთნოგრაფიული მხარე</div>
              <p className="bento-note">შავი ზღვიდან კავკასიონის უღელტეხილებამდე — თითოეულს თავისი დიალექტი, სამზარეულო და ხუროთმოძღვრება.</p>
            </div>

            <div className="bento-tile t-regions reveal d1">
              <div className="bento-num"><CountUp to={REGIONS.length} /></div>
              <div className="bento-label">კუთხე ატლასში</div>
              <div className="bento-marquee" aria-hidden="true">
                {[0, 1].map((row) => (
                  <div key={row} className={`bm-row${row ? " rev" : ""}`}>
                    {[...REGIONS, ...REGIONS].map((r, i) => <span key={i}>{lang === "en" ? r.en : r.ka}</span>)}
                  </div>
                ))}
              </div>
            </div>

            <div className="bento-tile t-customs reveal d2">
              <div className="bento-num"><CountUp to={CUSTOMS.length} /></div>
              <div className="bento-label">ცოცხალი ტრადიცია</div>
              <div className="bento-icons">
                {CUSTOMS.map((c, i) => (
                  <span key={c.title} title={c.title} style={{ animationDelay: `${0.6 + i * 0.09}s` }}>{c.icon}</span>
                ))}
              </div>
            </div>

            <div className="bento-tile t-lang reveal d3">
              <div className="bento-num lang">KA · EN</div>
              <div className="bento-label">ორენოვანი ინტერფეისი</div>
              <button
                className={`bento-switch${lang === "en" ? " en" : ""}`}
                onClick={() => setLang(lang === "ka" ? "en" : "ka")}
                aria-label="ენის გადამრთველი"
              >
                <span className="knob" />
                <b>ქართ</b><b>ENG</b>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap">
          {secHead("ინტერაქტიული ატლასი", t.regionsTitle, t.regionsSub, "regions")}
          {regionShowcase()}
        </div>
      </section>

      {/* region spotlight: curtain-reveal photo with floating facts, topic cards open pages pre-filtered to Svaneti */}
      <section className="sec spot-sec">
        <div className="wrap spot">
          <div className="spot-media reveal">
            <button
              className="spot-photo"
              onClick={() => setLightbox({ src: IMG("GxpZw8gO36Dy5gz8", 1800), caption: "უშგული — ევროპის ერთ-ერთი უმაღლესი მუდმივად დასახლებული სოფელი. ფოტო: Flickr (CC)" })}
            >
              <img src={IMG("GxpZw8gO36Dy5gz8", 1800)} alt="უშგულის სოფელი შემოდგომაზე" loading="lazy" />
            </button>
            <span className="spot-badge">უშგული · ზემო სვანეთი</span>
            {/* facts from data/georgiaRegions.ts (Svaneti) */}
            <div className="spot-fact f1"><b>~2100 მ</b><span>უშგული — ევროპის ერთ-ერთი უმაღლესი დასახლება</span></div>
            <div className="spot-fact f2"><b>1996</b><span>იუნესკოს მსოფლიო მემკვიდრეობა</span></div>
            <div className="spot-fact f3"><b>200-მდე</b><span>შუა საუკუნეების კოშკი</span></div>
          </div>

          <div className="spot-copy">
            <span className="eyebrow reveal">რეგიონის დეტალური გვერდი</span>
            <h2 className="reveal d1">სვანეთი — <span className="grad-text">კოშკების მიწა</span></h2>
            <p className="reveal d2">
              ზემო სვანეთის კოშკებიანი სოფლები საუკუნეების მანძილზე იცავდა მთიელებს და ინახავდა უძველეს ქართულ სამართალს, სიმღერასა და წეს-ჩვეულებებს.
            </p>
            <div className="spot-topics">
              {([
                ["🏛️", "ისტორიული ქრონოლოგია", () => go("history", "svaneti")],
                ["🔥", "ადათ-წესები, სამოსი და ხელობა", () => go("customs", "svaneti")],
                ["📜", "ლეგენდები და ხალხური გადმოცემები", () => go("legends", "svaneti")],
                ["🗺️", "ძეგლების რუკა და ფოტოგალერეა", () => go("regions")],
              ] as const).map(([icon, label, open], i) => (
                <button key={label} className="spot-topic reveal" style={{ animationDelay: `${0.7 + i * 0.12}s` }} onClick={open}>
                  <span className="ic" aria-hidden="true" style={{ animationDelay: `${0.9 + i * 0.12}s` }}>{icon}</span>
                  <span className="lb">{label}</span>
                  <i aria-hidden="true">→</i>
                </button>
              ))}
            </div>
            <div className="spot-cta reveal d3">
              <button className="btn btn-gold" onClick={() => onSelectRegion("svaneti")}>გვერდის ნახვა <span aria-hidden="true">→</span></button>
              <button className="btn btn-line" onClick={() => go("customs", "svaneti")}>ადათ-წესები →</button>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap">
          {secHead("ქრონოლოგია", "საუკუნეების გზა", "მთავარი ისტორიული ეტაპები — სრული ქრონოლოგია ისტორიის გვერდზეა.", "history")}
          {photoTimeline(TIMELINE_SHORT)}
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          {secHead("სარედაქციო განყოფილება", t.storiesTitle, t.storiesSub, "legends")}
          {storyMosaic(STORIES.slice(0, 3))}
        </div>
      </section>


      <section className="sec sec-alt">
        <div className="wrap">
          {secHead("ციფრული არქივი", t.archiveTitle, t.archiveSub, "archive")}
          {archiveMosaic(ARCHIVE.slice(0, 4))}
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 800 }}>
          <div className="ornament reveal">
            <svg viewBox="0 0 60 20" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M30 1 L40 10 L30 19 L20 10 Z" /><circle cx="6" cy="10" r="2.5" /><circle cx="54" cy="10" r="2.5" />
            </svg>
          </div>
          <h2 className="reveal d1" style={{ fontSize: "clamp(28px,3.6vw,44px)" }}>კულტურული მემკვიდრეობა — ყველასთვის</h2>
          <p className="reveal d2" style={{ color: "var(--muted)", margin: "14px 0 34px" }}>
            გაიცანი საქართველოს კუთხეები ახლოდან — დაგეგმე მოგზაურობა ისტორიული ძეგლებისა და ტრადიციების გზაზე.
          </p>
          <div className="reveal d3" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-gold" onClick={() => go("regions")}>გამოიკვლიე კუთხეები</button>
            <button className="btn btn-line" onClick={() => go("plan")}>{t.trip}</button>
          </div>
        </div>
      </section>
    </>
  )

  // words wrapped for a staggered entrance (--w is the word's position); spaces stay outside the
  // inline-block wrappers, where they would collapse
  const splitWords = (s: string, cls?: string) =>
    s.split(" ").flatMap((w, i) => [
      i ? " " : null,
      <span key={i} className="hw" style={{ "--w": i } as CSSProperties}>
        <span className={cls}>{w}</span>
      </span>,
    ])

  // full-screen viewer: opens out of the clicked card (clip-path from its rect), closes back into it
  const cardInset = (el: Element | null) => {
    if (!el) return null
    const r = el.getBoundingClientRect()
    if (r.bottom < 0 || r.top > window.innerHeight) return null // off screen: plain fade instead
    return { t: r.top, r: window.innerWidth - r.right, b: window.innerHeight - r.bottom, l: r.left }
  }
  const openCx = (group: string, list: Spot[], i: number, el: Element) => setCx({ group, list, i, prev: -1, from: cardInset(el) })
  const showCx = (i: number) => setCx((s) => (s && s.i !== i && !s.closing ? { ...s, prev: s.i, i } : s))
  const stepCx = (d: number) => setCx((s) => (s && !s.closing ? { ...s, prev: s.i, i: (s.i + d + s.list.length) % s.list.length } : s))
  const closeCx = () => {
    setCx((s) => (s && !s.closing ? { ...s, closing: true, from: cardInset(document.querySelector(`[data-cx="${s.group}-${s.i}"]`)) } : s))
    window.setTimeout(() => setCx(null), 650)
  }

  // photo mosaic: big and wide tiles mixed in; text slides up on hover, the card tilts toward the pointer,
  // a click opens the viewer
  const mosaic = (group: string, items: Spot[]) => (
    <div className="cx-grid">
      {items.map((c, i) => (
        <article
          key={c.key}
          className="cx-card reveal"
          style={{ "--i": i } as CSSProperties}
          data-cx={`${group}-${i}`}
          role="button"
          tabIndex={0}
          aria-label={`${c.title} — სრულ ეკრანზე`}
          onClick={(e) => openCx(group, items, i, e.currentTarget)}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openCx(group, items, i, e.currentTarget) } }}
          onPointerMove={(e) => {
            if (e.pointerType !== "mouse") return
            const r = e.currentTarget.getBoundingClientRect()
            e.currentTarget.style.setProperty("--rx", `${((e.clientY - r.top) / r.height - 0.5) * -8}deg`)
            e.currentTarget.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 10}deg`)
          }}
          onPointerLeave={(e) => { e.currentTarget.style.removeProperty("--rx"); e.currentTarget.style.removeProperty("--ry") }}
        >
          <div className="cx-inner">
            <div className="cx-photo">
              <img src={IMG(c.img, 1000)} alt={c.alt} loading="lazy" />
            </div>
            {c.icon ? <span className="cx-icon" aria-hidden="true">{c.icon}</span> : c.badge && <span className="cx-badge">{c.badge}</span>}
            <span className="cx-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="cx-expand" aria-hidden="true">⤢</span>
            <div className="cx-body">
              <span className="cx-region">{c.region}</span>
              <h3>{splitWords(c.title)}</h3>
              <p>{c.text}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
  const customSpots = (list: typeof CUSTOMS): Spot[] =>
    list.map((c) => ({ key: c.title, img: c.img, alt: c.alt, title: c.title, text: c.text, region: c.region, icon: c.icon }))
  const legendSpots = (list: typeof LEGENDS): Spot[] =>
    list.map((l) => ({ key: l.title, img: l.img, alt: l.title, title: l.title, text: l.text, region: l.region, badge: l.kind }))
  const storySpots = (list: typeof STORIES): Spot[] =>
    list.map((s) => ({ key: s.title, img: s.img, alt: s.alt, title: s.title, text: s.text, region: s.meta[0], badge: s.tag, meta: s.meta.slice(1).join(" · "), regionId: s.regionId }))
  const archiveSpots = (list: typeof ARCHIVE): Spot[] =>
    list.map((a) => ({ key: a.title, img: a.img, alt: a.alt, title: a.title, text: a.caption, region: areaNames(a.areas), badge: ARCH_CATS.find((c) => c.id === a.cat)?.label, meta: "წყარო: Flickr · CC ლიცენზია" }))
  const timelineSpots = (list: typeof TIMELINE_FULL): Spot[] =>
    list.map((t) => ({ key: t.year + t.title, img: t.img, alt: t.alt, title: t.title, text: t.text, region: areaNames(t.areas), badge: t.year }))

  // sub-page header: a crossfading photo slideshow; title and caption animate word by word
  const pageHero = (v: Exclude<View, "home">) => {
    const h = PAGE_HERO[v]
    const slides = PAGE_SLIDES[v]
    const cur = heroSlide % slides.length
    return (
      <section className="page-hero" key={v} data-no-reveal>
        <div className="hero-bg ph-slides" ref={parallaxRef}>
          {slides.map((s, i) => (
            <img
              key={s.img}
              src={IMG(s.img, 2200)}
              alt=""
              className={i === cur ? "on" : i === (cur - 1 + slides.length) % slides.length ? "prev" : undefined}
            />
          ))}
        </div>
        <div className="hero-veil" />
        <div className="wrap page-hero-inner">
          <div className="crumbs reveal">
            <button onClick={() => go("home")}>{t.navHome}</button>
            <span>/</span>
            <b>{viewLabel}</b>
          </div>
          <span className="eyebrow ph-eyebrow">{h.eyebrow}</span>
          <h1 className="ph-title">{splitWords(h.title, "grad-text")}</h1>
          <p className="sub ph-sub">{splitWords(h.sub)}</p>
          <div className="ph-bar">
            <div className="ph-dots">
              {slides.map((s, i) => (
                <button key={s.img} className={i === cur ? "on" : undefined} onClick={() => setHeroSlide(i)} aria-label={s.alt}>
                  <img src={IMG(s.img, 200)} alt="" />
                  {i === cur && <i key={heroSlide} style={{ animationDuration: `${HERO_SLIDE_MS}ms` }} />}
                </button>
              ))}
            </div>
            <span className="ph-caption" key={cur}>
              <b>{String(cur + 1).padStart(2, "0")}</b> / {String(slides.length).padStart(2, "0")} — {splitWords(slides[cur].alt)}
            </span>
          </div>
        </div>
      </section>
    )
  }

  // Map markers open the region page when one exists
  const openFromMap = (en: string) => {
    const r = REGIONS.find((x) => x.en === en)
    if (r?.regionId) onSelectRegion(r.regionId)
  }

  const regionsMap = (
    <section className="amap-section">
      <div className="wrap">
        <div className="amap-intro">
          <div>
            <div className="crumbs reveal">
              <button onClick={() => go("home")}>{t.navHome}</button>
              <span>/</span>
              <b>{viewLabel}</b>
            </div>
            <span className="eyebrow reveal d1">ინტერაქტიული ატლასი</span>
          </div>
          <p className="reveal d2">{PAGE_HERO.regions.sub}</p>
        </div>
        <GeorgiaAntiqueMap
          regions={REGIONS.map((r) => ({
            key: r.en,
            name: lang === "en" ? r.en : r.ka,
            sub: lang === "en" ? r.ka : r.en,
            img: IMG(r.img, 600),
            desc: r.desc,
            lon: r.lon,
            lat: r.lat,
            icon: r.icon,
            linked: Boolean(r.regionId),
          }))}
          medallions={[
            "fu29FaDzh3624NIW", "udCSb0N7UMcdNPVt", "NdqxwOI6eY0U1C0e", "fkQYrZB1ZU6oDjUg", "SpPnO6MUAmA5T9o6",
            "GnuUxvVGfsjcN7yA", "imUv4nTweClsx1gI", "KU1gZAB04l0ixryO", "5w0mZLBWlE7r71zC", "FrGDd2uxyFH4E7g0",
          ].map((id) => ({ img: IMG(id, 300), alt: "" }))}
          onOpen={openFromMap}
        />
      </div>
    </section>
  )

  // trip planner: form → short "building" beat → the route, day by day, made of atlas material
  const setPF = (patch: Partial<PlanForm>) => setPlanForm((f) => ({ ...f, ...patch }))
  const toggleIn = <T,>(list: T[], x: T) => (list.includes(x) ? list.filter((y) => y !== x) : [...list, x])
  const buildRoute = () => {
    setPlanDays(buildPlan(planForm))
    setPlanStage("loading")
    window.clearTimeout(planTimer.current)
    planTimer.current = window.setTimeout(() => setPlanStage("result"), prefersReducedMotion() ? 0 : 1700)
  }
  const planner = () => {
    const f = planForm
    const usable = KUTKHEEBI
    const stepper = (label: string, value: number, min: number, max: number, set: (n: number) => void, unit: string) => (
      <div className="tp-stepper">
        <span className="tp-label">{label}</span>
        <div className="tp-step-ctrl">
          <button onClick={() => set(Math.max(min, value - 1))} disabled={value <= min} aria-label={`${label} −`}>−</button>
          <b key={value}>{value}</b>
          <button onClick={() => set(Math.min(max, value + 1))} disabled={value >= max} aria-label={`${label} +`}>+</button>
        </div>
        <span className="tp-unit">{unit}</span>
      </div>
    )

    if (planStage === "loading") {
      return (
        <div className="tp-loading" data-no-reveal>
          <div className="tp-load-photos">
            {f.regions.slice(0, f.days).map((k, i) => (
              <img key={k} src={IMG(planRegion(k).img, 300)} alt="" style={{ "--i": i } as CSSProperties} />
            ))}
          </div>
          <h3>{splitWords("მარშრუტს ვადგენთ…")}</h3>
          <p>ვარჩევთ ადგილებს, ლეგენდებსა და ტრადიციებს შენი ინტერესების მიხედვით</p>
          <div className="tp-load-bar"><i /></div>
        </div>
      )
    }

    if (planStage === "result") {
      const all = planDays.flatMap((d) => d.acts)
      const spots: Spot[] = all.map((a) => ({ ...a, title: `${a.slot} · ${a.title}` }))
      const regionRuns = planDays.reduce<{ k: Kutkhe; name: string; img: string; from: number; to: number }[]>((runs, d, i) => {
        const last = runs[runs.length - 1]
        if (last && last.k === d.k) last.to = i + 1
        else runs.push({ k: d.k, name: d.name, img: d.img, from: i + 1, to: i + 1 })
        return runs
      }, [])
      let actIndex = 0
      return (
        <div className="tp-result" data-no-reveal>
          <div className="tp-summary">
            <div>
              <span className="eyebrow">შენი მარშრუტი</span>
              <h2>{splitWords(regionRuns.map((r) => r.name).join(" → "))}</h2>
            </div>
            <div className="tp-stats">
              {[[planDays.length, "დღე"], [regionRuns.length, "კუთხე"], [all.length, "აქტივობა"], [f.people, "მოგზაური"]].map(([n, l], i) => (
                <span key={l} style={{ "--i": i } as CSSProperties}><b>{n}</b>{l}</span>
              ))}
            </div>
            <div className="tp-actions">
              <button className="btn btn-line" onClick={() => setPlanStage("form")}>← შეცვლა</button>
              <button className="btn btn-line" onClick={() => window.print()}>ბეჭდვა</button>
            </div>
          </div>

          {/* route ribbon: one photo stop per region, joined by a line that draws itself */}
          <ol className="tp-ribbon">
            {regionRuns.map((r, i) => (
              <li key={r.k} style={{ "--i": i } as CSSProperties}>
                <img src={IMG(r.img, 300)} alt="" />
                <b>{r.name}</b>
                <span>{r.from === r.to ? `დღე ${r.from}` : `დღე ${r.from}–${r.to}`}</span>
              </li>
            ))}
          </ol>

          <div className="tp-days">
            {planDays.map((d, di) => (
              <article key={di} className={`tp-day${di % 2 ? " flip" : ""}`} style={{ "--i": di } as CSSProperties}>
                <div className="tp-day-photo">
                  <img src={IMG(d.img, 1100)} alt={d.name} loading="lazy" />
                  <span className="tp-day-num"><small>დღე</small>{String(di + 1).padStart(2, "0")}</span>
                  <span className="tp-day-region">{d.name}</span>
                </div>
                <div className="tp-day-body">
                  <div className="tp-day-head">
                    {d.date && <span className="tp-date">{d.date}</span>}
                    {d.travelFrom && <span className="tp-travel">🚗 გზა: {d.travelFrom} → {d.name}</span>}
                  </div>
                  <ol className="tp-acts">
                    {d.acts.map((a, ai) => {
                      const idx = actIndex++
                      return (
                        <li key={a.key} style={{ "--a": ai } as CSSProperties}>
                          <button data-cx={`plan-${idx}`} onClick={(e) => openCx("plan", spots, idx, e.currentTarget)}>
                            <span className="tp-slot">{a.slot}</span>
                            <span className="tp-thumb"><img src={IMG(a.img, 240)} alt="" loading="lazy" /><i aria-hidden="true">{a.icon}</i></span>
                            <span className="tp-act-tx">
                              <span className="tp-kind">{a.kind}</span>
                              <b>{a.title}</b>
                              <span className="tp-act-p">{a.text}</span>
                            </span>
                            <span className="tp-open" aria-hidden="true">⤢</span>
                          </button>
                        </li>
                      )
                    })}
                  </ol>
                </div>
              </article>
            ))}
          </div>
          <p className="tp-note">მარშრუტი ატლასის მასალიდან დგება — გზის ხანგრძლივობა, ამინდი და მთის უღელტეხილების მდგომარეობა წინასწარ გადაამოწმე.</p>
        </div>
      )
    }

    const fewDays = f.regions.length > f.days
    return (
      <div className="tp-form" data-no-reveal>
        <section className="tp-sec" style={{ "--s": 0 } as CSSProperties}>
          <header><span className="tp-n">01</span><h3>სად გინდა წასვლა?</h3><span className="tp-hint">აირჩიე ერთი ან მეტი კუთხე — თანმიმდევრობა მარშრუტის რიგი იქნება</span></header>
          <div className="tp-regions">
            {usable.map((k, i) => {
              const r = planRegion(k.id)
              const order = f.regions.indexOf(k.id)
              const blocked = PLAN_BLOCKED.includes(k.id)
              return (
                <button
                  key={k.id}
                  className={`tp-region${order >= 0 ? " on" : ""}${blocked ? " blocked" : ""}`}
                  style={{ "--i": i } as CSSProperties}
                  disabled={blocked}
                  aria-pressed={order >= 0}
                  onClick={() => setPF({ regions: toggleIn(f.regions, k.id) })}
                >
                  <img src={IMG(r.img, 500)} alt="" loading="lazy" />
                  <span className="tp-region-name">{k.name}</span>
                  {order >= 0 && <span className="tp-check" key={order}>{order + 1}</span>}
                  {blocked && <span className="tp-blocked">ოკუპირებული ტერიტორია</span>}
                </button>
              )
            })}
          </div>
        </section>

        <section className="tp-sec" style={{ "--s": 1 } as CSSProperties}>
          <header><span className="tp-n">02</span><h3>როდის და რამდენი ხნით?</h3></header>
          <div className="tp-when">
            <label className="tp-date-in">
              <span className="tp-label">დაწყების თარიღი</span>
              <input type="date" value={f.from} onChange={(e) => setPF({ from: e.target.value })} />
            </label>
            {stepper("ხანგრძლივობა", f.days, 1, 14, (n) => setPF({ days: n }), "დღე")}
            {stepper("მოგზაურები", f.people, 1, 12, (n) => setPF({ people: n }), "ადამიანი")}
          </div>
          {fewDays && <p className="tp-warn">დღეები ნაკლებია კუთხეებზე — მარშრუტში პირველი {f.days} კუთხე მოხვდება.</p>}
        </section>

        <section className="tp-sec" style={{ "--s": 2 } as CSSProperties}>
          <header><span className="tp-n">03</span><h3>რა გაინტერესებს?</h3></header>
          <div className="tp-chips">
            {INTERESTS.map((x, i) => (
              <button
                key={x.id}
                className={f.interests.includes(x.id) ? "on" : undefined}
                style={{ "--i": i } as CSSProperties}
                aria-pressed={f.interests.includes(x.id)}
                onClick={() => setPF({ interests: toggleIn(f.interests, x.id) })}
              >
                <i aria-hidden="true">{x.icon}</i>{x.label}
              </button>
            ))}
          </div>
        </section>

        <section className="tp-sec" style={{ "--s": 3 } as CSSProperties}>
          <header><span className="tp-n">04</span><h3>რა ტემპით?</h3></header>
          <div className="tp-paces">
            {PACES.map((p, i) => (
              <button key={p.label} className={f.pace === i ? "on" : undefined} aria-pressed={f.pace === i} onClick={() => setPF({ pace: i })}>
                <span className="tp-pace-dots" aria-hidden="true">{p.slots.map((s) => <i key={s} />)}</span>
                <b>{p.label}</b>
                <span>{p.hint}</span>
              </button>
            ))}
          </div>
        </section>

        <div className="tp-cta">
          <div className="tp-cta-sum">
            {f.regions.length
              ? <><b>{Math.min(f.regions.length, f.days)}</b> კუთხე · <b>{f.days}</b> დღე · <b>{f.people}</b> მოგზაური</>
              : "აირჩიე მინიმუმ ერთი კუთხე"}
          </div>
          <button className="tp-go" disabled={!f.regions.length} onClick={buildRoute}>მარშრუტის შექმნა →</button>
        </div>
      </div>
    )
  }

  const subPage = (v: Exclude<View, "home">) => {
    let body: React.ReactNode
    switch (v) {
      case "regions": {
        // the map is the whole page here; no card grid below it
        body = null
        break
      }
      case "plan": {
        body = <div key={planStage}>{planner()}</div>
        break
      }
      case "history": {
        const list = inKutkhe(TIMELINE_FULL)
        body = (
          <>
            {kutkheBar(TIMELINE_FULL)}
            <div key={kutkhe}>{list.length ? timeline(list) : kutkheEmpty()}</div>
          </>
        )
        break
      }
      case "customs": {
        const list = inKutkhe(CUSTOMS)
        body = (
          <>
            {kutkheBar(CUSTOMS)}
            <div key={kutkhe}>
              {list.length ? (
                mosaic("custom", customSpots(list))
              ) : kutkheEmpty()}
            </div>
          </>
        )
        break
      }
      case "legends": {
        const list = inKutkhe(LEGENDS)
        const storyList = inKutkhe(STORIES)
        body = (
          <>
            {kutkheBar([...LEGENDS, ...STORIES])}
            <div key={kutkhe}>
              {list.length ? (
                mosaic("legend", legendSpots(list))
              ) : !storyList.length && kutkheEmpty()}
              {storyList.length > 0 && (
                <div style={{ marginTop: list.length ? 90 : 0 }}>
                  {secHead("სარედაქციო განყოფილება", t.storiesTitle, t.storiesSub)}
                  {mosaic("story", storySpots(storyList))}
                </div>
              )}
            </div>
          </>
        )
        break
      }
      case "archive": {
        const list = inKutkhe(ARCHIVE).filter((a) => archCat === "all" || a.cat === archCat)
        body = (
          <>
            {kutkheBar(ARCHIVE)}
            {filters(ARCH_CATS, archCat, setArchCat)}
            <div key={`${kutkhe}-${archCat}`}>{list.length ? mosaic("archive", archiveSpots(list)) : kutkheEmpty()}</div>
          </>
        )
        break
      }
    }
    return (
      <>
        {v === "regions" ? regionsMap : pageHero(v)}
        {body && (
          <section className="sec">
            <div className="wrap">{body}</div>
          </section>
        )}
        <section className={`sec sec-alt next-pages${nextHover ? " has-bg" : ""}`} data-fp-label="გააგრძელე მოგზაურობა">
          <div className="nx-backdrop" aria-hidden="true">
            {navItems.filter(([, nv]) => nv !== v && nv !== "home").map(([, nv]) => (
              <img key={nv} src={IMG(PAGE_SLIDES[nv as Exclude<View, "home">][0].img, 1600)} alt="" loading="lazy" className={nextHover === nv ? "on" : undefined} />
            ))}
          </div>
          <div className="wrap">
            <div className="nx-head">
              <span className="eyebrow reveal">გააგრძელე მოგზაურობა</span>
              <h2 className="reveal d1">სად <span className="grad-text">გავაგრძელოთ?</span></h2>
            </div>
            <ol className={`nx-grid${nextOpen ? " has-open" : ""}`}>
              {navItems.filter(([, nv]) => nv !== v && nv !== "home").map(([label, nv], i) => {
                // pages with region-tagged content open a strip of region photos under the grid instead of navigating
                const items = kutkheItems(nv)
                const open = nextOpen === nv
                const hero = PAGE_HERO[nv as Exclude<View, "home">]
                return (
                  <li key={nv} className={`nx-card reveal${open ? " open" : ""}`} style={{ "--i": i } as CSSProperties}>
                    <button
                      className="nx-btn"
                      onMouseEnter={() => setNextHover(nv)}
                      onMouseLeave={() => setNextHover(null)}
                      onFocus={() => setNextHover(nv)}
                      onBlur={() => setNextHover(null)}
                      aria-expanded={items ? open : undefined}
                      onClick={() => (items ? setNextOpen(open ? null : nv) : go(nv))}
                    >
                      <span className="nx-photo">
                        {PAGE_SLIDES[nv as Exclude<View, "home">].map((s, si) => (
                          <img key={s.img} src={IMG(s.img, 900)} alt="" loading="lazy" style={{ "--s": si } as CSSProperties} />
                        ))}
                      </span>
                      <span className="nx-num">{String(i + 1).padStart(2, "0")}</span>
                      {items && <span className="nx-count"><b>{items.length}</b></span>}
                      <span className="nx-text">
                        <span className="nx-eyebrow">{hero.eyebrow}</span>
                        <span className="nx-title"><span>{label}</span></span>
                      </span>
                      <i className="nx-arrow" aria-hidden="true">{items ? "+" : "→"}</i>
                    </button>
                  </li>
                )
              })}
            </ol>
            {nextOpen && (() => {
              const items = kutkheItems(nextOpen) ?? []
              const hero = PAGE_HERO[nextOpen as Exclude<View, "home">]
              return (
                <div className="nx-panel" key={nextOpen}>
                  <div className="nx-panel-head">
                    <h3>{hero.eyebrow}</h3>
                    <button className="nx-all" onClick={() => go(nextOpen)}>ყველა <b>{items.length}</b> →</button>
                  </div>
                  <div className="nx-regions">
                    {KUTKHEEBI.map((k, ki) => {
                      const n = items.filter((x) => x.areas.includes(k.id)).length
                      const img = kutkheImg(k)
                      return (
                        <button
                          key={k.id}
                          className={`nx-region${n ? "" : " empty"}`}
                          style={{ "--i": ki } as CSSProperties}
                          onClick={() => go(nextOpen, k.id)}
                        >
                          <img src={IMG(img, 400)} alt="" loading="lazy" />
                          <span className="nx-region-name">{k.name}</span>
                          <span className="nx-region-n">{n}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })()}
          </div>
        </section>
      </>
    )
  }

  // footer: photo backdrop, sections as photo tiles, a drifting strip of region photos
  const footer = (
    <footer data-fp-label="ინფორმაცია" className="foot">
      <div className="foot-bg" aria-hidden="true"><img src={IMG("GnuUxvVGfsjcN7yA", 2000)} alt="" loading="lazy" /></div>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <div className="logo reveal"><b>GEORGIAN HERITAGE</b><span>საქართველოს ციფრული ატლასი</span></div>
            <h2 className="foot-title reveal d1">ყველა კუთხე — <span className="grad-text">ერთ სივრცეში</span></h2>
          </div>
          <p className="foot-lead reveal d2">
            ციფრული მუზეუმის, ისტორიული ენციკლოპედიისა და ინტერაქტიული ატლასის ერთიანი კონცეფცია — საქართველოს ყველა კუთხის ისტორიისა და კულტურის შესანარჩუნებლად.
          </p>
        </div>

        <nav className="foot-tiles" aria-label="განყოფილებები">
          {navItems.slice(1).map(([label, nv], i) => {
            const hero = PAGE_HERO[nv as Exclude<View, "home">]
            return (
              <button key={nv} className="foot-tile reveal" style={{ "--i": i } as CSSProperties} onClick={() => go(nv)}>
                <img src={IMG(hero.img, 600)} alt="" loading="lazy" />
                <span className="ft-eyebrow">{hero.eyebrow}</span>
                <span className="ft-label">{label} <i aria-hidden="true">→</i></span>
              </button>
            )
          })}
        </nav>

        <div className="foot-strip reveal" aria-hidden="true">
          <div className="foot-strip-track">
            {[...REGIONS, ...REGIONS].map((r, i) => (
              <span key={i} className="foot-chip"><img src={IMG(r.img, 240)} alt="" loading="lazy" />{r.ka}</span>
            ))}
          </div>
        </div>

        <div className="foot-bottom reveal">
          <div className="foot-actions">
            <button className="foot-pill" onClick={() => go("plan")}>{t.trip}</button>
            <button className="foot-pill" onClick={onBack}>TravelWorld — მთავარი</button>
            <button className="foot-pill up" onClick={() => fp.goTo(0)}>უკან ზემოთ ↑</button>
          </div>
          <div className="foot-credits">
            <span>© 2026 GEORGIAN HERITAGE — დიზაინის კონცეფცია (დემო).</span>
            <span>ფოტოები: Flickr CC · Wikimedia (საჯარო დომენი)</span>
          </div>
        </div>
      </div>
    </footer>
  )

  return (
    <div className="gh" data-theme={theme} lang={lang} ref={rootRef}>
      <div className="progress" ref={progressRef} />
      {wipeKey > 0 && (
        // three panels sweep up over the page, the destination's name shows while they cover it
        <div className="wipe" key={wipeKey} aria-hidden="true">
          <div className="wipe-panel p1" />
          <div className="wipe-panel p2" />
          <div className="wipe-panel p3" />
          <div className="wipe-label">
            <span className="wipe-flag-badge"><GeorgianFlag /></span>
            <b>{wipeLabel}</b>
          </div>
        </div>
      )}

      {/* NAV */}
      <header className={`nav${scrolled ? " scrolled" : ""}${navHidden && !menuOpen ? " hidden" : ""}`}>
        <div className="nav-inner">
          <button className="logo" onClick={() => go("home")}>
            <b>GEORGIAN HERITAGE</b>
            <span>საქართველოს ციფრული ატლასი</span>
          </button>
          <nav className="nav-links" ref={navRef} onMouseLeave={resetIndicator}>
            {navItems.map(([label, v], i) => (
              <button
                key={v}
                className={view === v ? "active" : ""}
                style={{ animationDelay: `${0.15 + i * 0.06}s` }}
                onClick={() => go(v)}
                onMouseEnter={(e) => moveIndicator(e.currentTarget)}
                aria-current={view === v ? "page" : undefined}
              >
                {label}
              </button>
            ))}
            <span
              className="nav-indicator"
              style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width, opacity: indicator.visible ? 1 : 0 }}
            />
          </nav>
          <div className="nav-tools">
            <button className="pill-btn" onClick={onBack}>{t.back}</button>
            <button className="pill-btn" aria-label="ენის გადამრთველი" onClick={() => setLang(lang === "ka" ? "en" : "ka")}>
              {lang === "ka" ? <><b>KA</b> / EN</> : <>KA / <b>EN</b></>}
            </button>
            <button className="pill-btn theme" aria-label="მუქი/ღია რეჟიმი" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? "☾" : "☀"}
            </button>
            <button className={`burger${menuOpen ? " open" : ""}`} aria-label="მენიუ" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {navItems.map(([label, v], i) => (
          <button key={v} className={view === v ? "active" : ""} style={{ transitionDelay: menuOpen ? `${0.08 + i * 0.05}s` : "0s" }} onClick={() => go(v)}>
            {label}
          </button>
        ))}
        <button style={{ transitionDelay: menuOpen ? `${0.08 + navItems.length * 0.05}s` : "0s" }} onClick={() => go("plan")}>{t.trip}</button>
      </div>

      {/* each top-level child of <main> is one full-screen slide (see useFullPage) */}
      <main className="page fp" key={view} ref={fpRef}>
        {view === "home" ? homePage : subPage(view)}
        {footer}
      </main>

      {fp.count > 1 && (
        <nav className="fp-dots" aria-label="გვერდის სექციები">
          <span className="fp-count">{String(fp.index + 1).padStart(2, "0")} <i>/ {String(fp.count).padStart(2, "0")}</i></span>
          {fp.labels.map((label, i) => (
            <button
              key={i}
              className={i === fp.index ? "on" : undefined}
              onClick={() => fp.goTo(i)}
              aria-label={label}
              aria-current={i === fp.index ? "step" : undefined}
            >
              <span>{label}</span>
            </button>
          ))}
        </nav>
      )}

      {/* PHOTO VIEWER (customs, legends, stories, archive, timeline) */}
      {cx && cx.list[cx.i] && (() => {
        const c = cx.list[cx.i]
        const f = cx.from
        cxKeys.current = (e) => {
          if (e.key === "Escape") closeCx()
          else if (e.key === "ArrowRight") stepCx(1)
          else if (e.key === "ArrowLeft") stepCx(-1)
          else if (!["ArrowUp", "ArrowDown", "PageUp", "PageDown", " ", "Home", "End"].includes(e.key)) return
          e.preventDefault()
          e.stopImmediatePropagation()
        }
        let touchX: number | null = null
        return (
          <div
            className={`cxv${cx.closing ? " closing" : ""}${f ? " from-card" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label={c.title}
            style={f ? ({ "--ct": `${f.t}px`, "--cr": `${f.r}px`, "--cb": `${f.b}px`, "--cl": `${f.l}px` } as CSSProperties) : undefined}
            onTouchStart={(e) => { touchX = e.touches[0].clientX }}
            onTouchEnd={(e) => {
              if (touchX === null) return
              const dx = e.changedTouches[0].clientX - touchX
              touchX = null
              if (Math.abs(dx) > 50) stepCx(dx < 0 ? 1 : -1)
            }}
          >
            <div className="cxv-photos">
              {cx.list.map((p, i) => (
                <img
                  key={p.key}
                  src={IMG(p.img, 2000)}
                  alt={i === cx.i ? p.alt : ""}
                  className={i === cx.i ? "on" : i === cx.prev ? "prev" : undefined}
                />
              ))}
            </div>
            <div className="cxv-veil" />
            <button className="cxv-close" onClick={closeCx} aria-label="დახურვა">×</button>
            <div className="cxv-content" key={cx.i}>
              <div className="cxv-top">
                {c.icon && <span className="cxv-icon" aria-hidden="true">{c.icon}</span>}
                <span className="cxv-count"><b>{String(cx.i + 1).padStart(2, "0")}</b> / {String(cx.list.length).padStart(2, "0")}</span>
              </div>
              {c.badge && <span className="cxv-badge">{c.badge}</span>}
              <span className="cxv-region">{c.region}</span>
              <h2>{splitWords(c.title)}</h2>
              <p>{splitWords(c.text)}</p>
              {c.meta && <span className="cxv-meta">{c.meta}</span>}
              {c.regionId && (
                <button className="cxv-go" onClick={() => { const id = c.regionId!; setCx(null); onSelectRegion(id) }}>კუთხის გვერდი →</button>
              )}
              <span className="cxv-cap">{c.alt}</span>
            </div>
            {cx.list.length > 1 && (
              <>
                <button className="cxv-nav prev" onClick={() => stepCx(-1)} aria-label="წინა">←</button>
                <button className="cxv-nav next" onClick={() => stepCx(1)} aria-label="შემდეგი">→</button>
                <div className="cxv-thumbs">
                  {cx.list.map((p, i) => (
                    <button key={p.key} className={i === cx.i ? "on" : undefined} onClick={() => showCx(i)} aria-label={p.title}>
                      <img src={IMG(p.img, 240)} alt="" />
                      {p.icon && <span aria-hidden="true">{p.icon}</span>}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )
      })()}

      {/* LIGHTBOX */}
      <div className={`lightbox${lightbox ? " open" : ""}`} onClick={() => setLightbox(null)}>
        <button className="close" aria-label="დახურვა" onClick={() => setLightbox(null)}>×</button>
        {lightbox && (
          <>
            <img src={lightbox.src} alt="" onClick={(e) => e.stopPropagation()} />
            <p className="cap">{lightbox.caption}</p>
          </>
        )}
      </div>
    </div>
  )
}
