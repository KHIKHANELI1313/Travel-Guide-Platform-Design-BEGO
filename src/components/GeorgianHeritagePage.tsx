import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type RefObject } from "react"
import "./georgian-heritage.css"
import "./georgian-heritage-pages.css"
import GeorgiaAntiqueMap, { type MonumentIcon } from "./GeorgiaAntiqueMap"
import { AUTO_REVEAL_SELECTOR, canAutoReveal } from "@/lib/autoReveal"
import { INNER_BORDERS_D, OUTLINE_D, type MapAreaId as Kutkhe } from "./georgiaMapGeo"

type Lang = "ka" | "en"
type Theme = "dark" | "light"
export type View = "home" | "regions" | "history" | "customs" | "legends" | "archive"

interface GeorgianHeritagePageProps {
  onBack: () => void
  /** fromView is the view the region was opened from, so the region page can come back to it */
  onSelectRegion: (regionId: string, fromView: View) => void
  initialView?: View
  onPlanTrip: () => void
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
  { areas: ["kartli"], year: "ძვ. წ. IV–III სს.", title: "ქართლის (იბერიის) სამეფო", text: "ტრადიცია ქართლის პირველ მეფედ ფარნავაზს მიიჩნევს, რომელსაც ქართული დამწერლობის შექმნასაც მიაწერს. დედაქალაქი — მცხეთა." },
  TIMELINE_SHORT[1],
  { areas: ["kvemo"], year: "V ს.", title: "უძველესი ქართული წარწერები და წიგნი", text: "ბოლნისისა და პალესტინის ქართული წარწერები, „შუშანიკის წამება“ — ქართული მწერლობის უძველესი ძეგლები." },
  TIMELINE_SHORT[2],
  { areas: ["kvemo","tbilisi"], year: "1121", title: "დიდგორის ბრძოლა", text: "დავით აღმაშენებლის გამარჯვება, რომლის შემდეგაც 1122 წელს თბილისი კვლავ ქართული სამეფოს დედაქალაქი ხდება." },
  TIMELINE_SHORT[3],
  { areas: [], year: "XII ს.", title: "„ვეფხისტყაოსანი“", text: "შოთა რუსთაველის პოემა — ქართული ლიტერატურის მწვერვალი, თამარ მეფის ეპოქის სულისკვეთების ანარეკლი." },
  TIMELINE_SHORT[4],
  { areas: ["kartli","kakheti"], year: "1801", title: "რუსეთის იმპერიის შემადგენლობაში", text: "ქართლ-კახეთის სამეფოს გაუქმება; XIX საუკუნეში დანარჩენი ქართული სამეფო-სამთავროებიც იმპერიას უერთდება." },
  { areas: [], year: "1918", title: "საქართველოს დემოკრატიული რესპუბლიკა", text: "26 მაისს გამოცხადდა დამოუკიდებლობა. 1921 წელს წითელი არმიის შემოჭრის შემდეგ ქვეყანა საბჭოთა კავშირის ნაწილი ხდება." },
  { areas: [], year: "1991", title: "დამოუკიდებლობის აღდგენა", text: "9 აპრილს საქართველომ სახელმწიფოებრივი დამოუკიდებლობა აღადგინა." },
  TIMELINE_SHORT[5],
  { areas: ["guria","kakheti"], year: "2001–2016", title: "არამატერიალური მემკვიდრეობა", text: "იუნესკომ აღიარა ქართული მრავალხმიანი სიმღერა (2001), ქვევრის ღვინის დაყენების მეთოდი (2013) და ქართული ანბანის სამი სახეობის ცოცხალი კულტურა (2016)." },
]

const CUSTOMS = [
  { areas: [], icon: "🍷", title: "სუფრა და თამადა", region: "მთელი საქართველო", text: "ქართული სუფრა რიტუალია: თამადა წარმართავს სადღეგრძელოებს — მშვიდობის, წინაპრების, მეგობრობის. სტუმარი „ღვთისაა“, ასე ამბობს ძველი სიტყვა." },
  { areas: ["kakheti","imereti"], icon: "🏺", title: "ქვევრის ღვინო", region: "კახეთი · იმერეთი", text: "მიწაში ჩაფლულ თიხის ქვევრში ყურძნის დადუღება 8000-წლიანი ტრადიციაა. მეთოდი იუნესკოს არამატერიალური მემკვიდრეობის სიაშია (2013)." },
  { areas: ["guria","svaneti","kakheti"], icon: "🎶", title: "მრავალხმიანი სიმღერა", region: "გურია · სვანეთი · კახეთი", text: "სამხმიანი სიმღერა — „ჩაკრულო“, „ლილე“, გურული კრიმანჭული. იუნესკომ ქართული პოლიფონია 2001 წელს აღიარა." },
  { areas: ["khevsureti"], icon: "🧥", title: "ჩოხა და ტრადიციული სამოსი", region: "მთელი საქართველო", text: "ჩოხა, ახალუხი, ხევსურული ნაქარგი პერანგი — სამოსი, რომელიც კუთხის, სტატუსისა და დღესასწაულის ენაზე „ლაპარაკობს“." },
  { areas: ["adjara","khevsureti"], icon: "💃", title: "ქართული ცეკვა", region: "კუთხეების ცეკვები", text: "ქართული, ხორუმი, ხევსურული, აჭარული — ცეკვები, რომლებშიც ომიც, სიყვარულიც და მთის რიტმიც ცოცხლობს." },
  { areas: ["svaneti"], icon: "🔥", title: "ლამპრობა", region: "სვანეთი", text: "ზამთრის ბოლოს სვანეთში ჩირაღდნებით გადიან — ცეცხლით ლოცავენ ოჯახში ვაჟების სიცოცხლესა და მომავალ წელს." },
  { areas: [], icon: "✍️", title: "ქართული ანბანი", region: "ასომთავრული · ნუსხური · მხედრული", text: "სამი დამწერლობის ცოცხალი კულტურა იუნესკოს არამატერიალური მემკვიდრეობის სიაშია (2016) — ერთ-ერთი უნიკალური ანბანი მსოფლიოში." },
  { areas: [], icon: "🤼", title: "ჭიდაობა", region: "მთელი საქართველო", text: "ქართული ჭიდაობა დოლ-ზურნის თანხლებით — სახალხო დღესასწაულების განუყოფელი ნაწილი, იუნესკოს სიაში 2018 წლიდან." },
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

const PAGE_HERO: Record<Exclude<View, "home">, { img: string; eyebrow: string; title: string; sub: string }> = {
  regions: { img: "HsYlX0J2VDTJfFnX", eyebrow: "ინტერაქტიული ატლასი", title: "საქართველოს კუთხეები", sub: "12 ისტორიულ-ეთნოგრაფიული მხარე — მთიანეთიდან ზღვისპირეთამდე. აირჩიე კუთხე და გაიცანი მისი ისტორია." },
  history: { img: "fkQYrZB1ZU6oDjUg", eyebrow: "ქრონოლოგია", title: "საქართველოს ისტორია", sub: "კოლხეთიდან დამოუკიდებლობამდე — ათასწლეულების გზა, რომელმაც ქართული კულტურა ჩამოაყალიბა." },
  customs: { img: "6spWZQrYvFFuBNwb", eyebrow: "ცოცხალი მემკვიდრეობა", title: "ადათ-წესები", sub: "სუფრა, სიმღერა, ქვევრი და ჩოხა — ტრადიციები, რომლებიც დღესაც ცოცხლობს ოჯახებსა და სოფლებში." },
  legends: { img: "GnuUxvVGfsjcN7yA", eyebrow: "მითები და თქმულებები", title: "ლეგენდები", sub: "ამირანიდან ოქროს საწმისამდე — ამბები, რომლებიც თაობიდან თაობას გადაეცემა." },
  archive: { img: "udCSb0N7UMcdNPVt", eyebrow: "ციფრული არქივი", title: "ციფრული არქივი", sub: "ფოტოები და ისტორიული მასალა — თითოეულ ექსპონატს აქვს წყარო და ლიცენზია." },
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

/* ---------- full-screen slides instead of page scrolling ----------
   Every top-level child of the container is a slide (data-fp = prev | active | next, styled in CSS).
   Wheel / keys / swipe move between slides; a slide taller than the screen, or any inner scroll
   area (map panel lists, carousels…), scrolls natively first and only hands over at its edge. */
const FP_LOCK_MS = 1000
/** transition effects, cycled per slide: slide i enters with FP_FX[(i - 1) % n] */
const FP_FX = ["rise", "slide", "zoom", "circle", "diagonal", "drop", "flip"]

/** px of leftover scroll to ignore — sub-pixel rounding and reveal offsets leave a few px of overflow */
const FP_SCROLL_SLACK = 24

/** true when something between `target` and the container can still scroll in direction `dir` */
function canScrollInside(target: EventTarget | null, dir: number, container: HTMLElement) {
  for (let el = target as HTMLElement | null; el && el !== container; el = el.parentElement) {
    const oy = getComputedStyle(el).overflowY
    if ((oy === "auto" || oy === "scroll") && el.scrollHeight > el.clientHeight + FP_SCROLL_SLACK) {
      if (dir > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 1) return true
      if (dir < 0 && el.scrollTop > 0) return true
    }
  }
  return false
}

function useFullPage(ref: RefObject<HTMLElement | null>, resetKey: string, onChange: (index: number, count: number) => void) {
  const [index, setIndex] = useState(0)
  const [labels, setLabels] = useState<string[]>([])
  const state = useRef({ index: 0, count: 0, locked: false, acc: 0 })
  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  const goTo = useCallback((i: number) => {
    const s = state.current
    const next = Math.max(0, Math.min(s.count - 1, i))
    if (next === s.index) return
    s.index = next
    s.locked = true
    window.setTimeout(() => { s.locked = false }, FP_LOCK_MS)
    setIndex(next)
  }, [])

  // a new page starts at its first slide
  useLayoutEffect(() => {
    state.current.index = 0
    setIndex(0)
  }, [resetKey])

  // after every render: mark slide states, keep count + labels in sync with the content
  useLayoutEffect(() => {
    const root = ref.current
    if (!root) return
    const slides = Array.from(root.children) as HTMLElement[]
    state.current.count = slides.length
    if (state.current.index > slides.length - 1) state.current.index = Math.max(0, slides.length - 1)
    slides.forEach((el, i) => {
      const s = i < state.current.index ? "prev" : i === state.current.index ? "active" : "next"
      if (el.dataset.fp !== s) el.dataset.fp = s
      // fx: how this slide comes in; out: how it leaves when the following slide comes in
      el.dataset.fx = FP_FX[(i + FP_FX.length - 1) % FP_FX.length]
      el.dataset.out = FP_FX[i % FP_FX.length]
      el.toggleAttribute("inert", i !== state.current.index)
    })
    const next = slides.map((el) =>
      (el.dataset.fpLabel ?? el.querySelector(".eyebrow, h1, h2")?.textContent ?? "").trim() || "ინფორმაცია",
    )
    setLabels((prev) => (prev.join("|") === next.join("|") ? prev : next))
  })

  useEffect(() => {
    onChangeRef.current(index, state.current.count)
  }, [index, labels])

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const html = document.documentElement
    const prevOverflow = html.style.overflow
    html.style.overflow = "hidden"
    window.scrollTo(0, 0)

    const step = (dir: number) => goTo(state.current.index + dir)
    const onWheel = (e: WheelEvent) => {
      if (e.defaultPrevented || e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return
      const dir = Math.sign(e.deltaY)
      if (!dir || canScrollInside(e.target, dir, root)) return
      e.preventDefault()
      const s = state.current
      if (s.locked) return
      s.acc += e.deltaY
      if (Math.abs(s.acc) < 40) return
      s.acc = 0
      step(dir)
    }
    const onKey = (e: KeyboardEvent) => {
      const t = e.target instanceof Element ? e.target : null
      if (e.altKey || e.ctrlKey || e.metaKey || t?.closest("input, textarea, select, [contenteditable]")) return
      if (e.key === " " && t?.closest("button, a, summary, [role=button]")) return // space presses the focused control
      const dir = ["ArrowDown", "PageDown"].includes(e.key) || (e.key === " " && !e.shiftKey) ? 1
        : ["ArrowUp", "PageUp"].includes(e.key) || (e.key === " " && e.shiftKey) ? -1 : 0
      if (e.key === "Home" || e.key === "End") {
        e.preventDefault()
        goTo(e.key === "Home" ? 0 : state.current.count - 1)
        return
      }
      if (!dir) return
      e.preventDefault()
      const slide = root.children[state.current.index] as HTMLElement | undefined
      // a tall slide pages through its own content before moving on
      if (slide && canScrollInside(slide, dir, root)) {
        slide.scrollBy({ top: dir * slide.clientHeight * 0.8, behavior: "smooth" })
        return
      }
      if (!state.current.locked) step(dir)
    }
    let touch: { x: number; y: number; canDown: boolean; canUp: boolean } | null = null
    const onTouchStart = (e: TouchEvent) => {
      const p = e.touches[0]
      // the zoomed map pans with touch, so swipes there never change slides
      if ((e.target as HTMLElement).closest(".amap-svg.zoomed")) { touch = null; return }
      touch = { x: p.clientX, y: p.clientY, canDown: canScrollInside(e.target, 1, root), canUp: canScrollInside(e.target, -1, root) }
    }
    const onTouchEnd = (e: TouchEvent) => {
      if (!touch) return
      const p = e.changedTouches[0]
      const dy = touch.y - p.clientY
      const dx = touch.x - p.clientX
      const t = touch
      touch = null
      if (Math.abs(dy) < 50 || Math.abs(dx) > Math.abs(dy) || state.current.locked) return
      if (dy > 0 && !t.canDown) step(1)
      if (dy < 0 && !t.canUp) step(-1)
    }

    // shrink a slide's content (down to 70%) when it is taller than the screen, so nothing needs scrolling
    const FIT = ":scope > .wrap, :scope > .hero-grid, :scope > .page-hero-inner"
    let fitFrame = 0
    const fit = () => {
      cancelAnimationFrame(fitFrame)
      fitFrame = requestAnimationFrame(() => {
        for (const slide of Array.from(root.children) as HTMLElement[]) {
          const content = slide.querySelector<HTMLElement>(FIT)
          if (!content) continue
          content.style.zoom = ""
          // layout heights (offsetHeight ignores reveal transforms, which only shift elements visually)
          const cs = getComputedStyle(slide)
          let avail = slide.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom)
          for (const sib of Array.from(slide.children) as HTMLElement[]) {
            const pos = getComputedStyle(sib).position
            if (sib !== content && pos !== "absolute" && pos !== "fixed") avail -= sib.offsetHeight
          }
          const h = content.offsetHeight
          if (h > avail + 1) content.style.zoom = Math.max(0.7, avail / h).toFixed(3)
        }
      })
    }
    const ro = new ResizeObserver(fit)
    ro.observe(root)
    for (const slide of Array.from(root.children)) {
      const content = slide.querySelector(FIT)
      if (content) ro.observe(content)
    }

    root.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("keydown", onKey)
    root.addEventListener("touchstart", onTouchStart, { passive: true })
    root.addEventListener("touchend", onTouchEnd, { passive: true })
    return () => {
      html.style.overflow = prevOverflow
      ro.disconnect()
      cancelAnimationFrame(fitFrame)
      root.removeEventListener("wheel", onWheel)
      window.removeEventListener("keydown", onKey)
      root.removeEventListener("touchstart", onTouchStart)
      root.removeEventListener("touchend", onTouchEnd)
    }
  }, [ref, goTo, resetKey])

  return { index, count: labels.length, labels, goTo }
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

const delay = (i: number) => (i % 4 ? ` d${i % 4}` : "")

export default function GeorgianHeritagePage({ onBack, onSelectRegion: selectRegion, onPlanTrip, initialView = "home" }: GeorgianHeritagePageProps) {
  const [theme, setTheme] = useState<Theme>(() => (readStored("gh-theme") === "light" ? "light" : "dark"))
  const [lang, setLang] = useState<Lang>(() => (readStored("gh-lang") === "en" ? "en" : "ka"))
  const [view, setView] = useState<View>(initialView)
  const onSelectRegion = (regionId: string) => selectRegion(regionId, view)
  const [wipeKey, setWipeKey] = useState(0)
  const [wipeLabel, setWipeLabel] = useState("")
  const [archCat, setArchCat] = useState<ArchCat | "all">("all")
  const [kutkhe, setKutkhe] = useState<Kutkhe | "all">("all")
  const [nextOpen, setNextOpen] = useState<View | null>(null)
  const [showcase, setShowcase] = useState(0)
  const [showcasePaused, setShowcasePaused] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [navHidden, setNavHidden] = useState(false)
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null)
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
    setWipeLabel(navItems.find(([, nv]) => nv === next)?.[0] ?? "")
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
  const viewLabel = navItems.find(([, v]) => v === view)?.[0] ?? ""

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

  const timeline = (items: typeof TIMELINE_FULL) => {
    const half = Math.ceil(items.length / 2)
    return (
      <div className="grid grid-2">
        {[items.slice(0, half), items.slice(half)].map((col, ci) => (
          <div className="timeline" key={ci}>
            {col.map((item, i) => (
              <div key={item.year + item.title} className={`tl-item reveal ${ci ? "right" : "left"}${delay(i)}`}>
                <div className="year">{item.year}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }

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

  const stories = (list: typeof STORIES = STORIES) => (
    <div className="grid stories-grid">
      {list.map((s, i) => (
        <div
          key={s.title}
          className={`art-card reveal${s.regionId ? " link" : ""}`}
          style={{ "--i": i } as CSSProperties}
          onClick={s.regionId ? () => onSelectRegion(s.regionId!) : undefined}
        >
          <div className="im"><img src={IMG(s.img, 1200)} alt={s.alt} loading="lazy" /></div>
          <div className="tx">
            <span className={`tag ${s.tagClass}`}>{s.tag}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <div className="art-meta">
              {s.meta.map((m, j) => <span key={m}>{j > 0 && "· "}{m}</span>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const archiveGrid = (list: typeof ARCHIVE) => (
    <div className="grid grid-4">
      {list.map((a, i) => (
        <figure
          key={a.title}
          className={`arch-item reveal zoom${delay(i)}`}
          onClick={() => setLightbox({ src: IMG(a.img, 1800), caption: a.caption })}
        >
          <div className="im">
            <img src={IMG(a.img, 1000)} alt={a.alt} loading="lazy" />
            <span className="type">ფოტო</span>
          </div>
          <div className="tx">
            <h4>{a.title}</h4>
            <div className="meta">წყარო: Flickr · <span className="lic">CC ლიცენზია</span></div>
          </div>
        </figure>
      ))}
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
      <div className="filters">
        <button className={`filter-btn${kutkhe === "all" ? " active" : ""}`} onClick={() => setKutkhe("all")}>
          ყველა <span className="n">{items.length}</span>
        </button>
        {KUTKHEEBI.map((k) => {
          const n = items.filter((x) => x.areas.includes(k.id)).length
          return (
            <button
              key={k.id}
              className={`filter-btn${kutkhe === k.id ? " active" : ""}${n ? "" : " empty"}`}
              onClick={() => setKutkhe(k.id)}
            >
              {k.name} <span className="n">{n}</span>
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
            <button className="btn btn-line" onClick={onPlanTrip}>{t.trip}</button>
          </div>
        </div>
      </section>
    </>
  )

  const pageHero = (v: Exclude<View, "home">) => {
    const h = PAGE_HERO[v]
    return (
      <section className="page-hero">
        <div className="hero-bg" ref={parallaxRef}>
          <img src={IMG(h.img, 2200)} alt="" />
        </div>
        <div className="hero-veil" />
        <div className="wrap page-hero-inner">
          <div className="crumbs reveal">
            <button onClick={() => go("home")}>{t.navHome}</button>
            <span>/</span>
            <b>{viewLabel}</b>
          </div>
          <span className="eyebrow reveal d1">{h.eyebrow}</span>
          <h1 className="reveal d2"><span className="grad-text">{h.title}</span></h1>
          <p className="sub reveal d3">{h.sub}</p>
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

  const subPage = (v: Exclude<View, "home">) => {
    let body: React.ReactNode
    switch (v) {
      case "regions": {
        // the map is the whole page here; no card grid below it
        body = null
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
                <div className="grid grid-4">
                  {list.map((c, i) => (
                    <div key={c.title} className={`custom-card reveal zoom${delay(i)}`}>
                      <div className="custom-icon">{c.icon}</div>
                      <h3>{c.title}</h3>
                      <div className="custom-region">{c.region}</div>
                      <p>{c.text}</p>
                    </div>
                  ))}
                </div>
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
                <div className="grid grid-3">
                  {list.map((l, i) => (
                    <article key={l.title} className={`legend-card reveal zoom${delay(i)}`}>
                      <div className="im"><img src={IMG(l.img, 1000)} alt={l.title} loading="lazy" /><span className="type">{l.kind}</span></div>
                      <div className="tx">
                        <div className="custom-region">{l.region}</div>
                        <h3>{l.title}</h3>
                        <p>{l.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              ) : !storyList.length && kutkheEmpty()}
              {storyList.length > 0 && (
                <div style={{ marginTop: list.length ? 90 : 0 }}>
                  {secHead("სარედაქციო განყოფილება", t.storiesTitle, t.storiesSub)}
                  {stories(storyList)}
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
            <div key={`${kutkhe}-${archCat}`}>{list.length ? archiveGrid(list) : kutkheEmpty()}</div>
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
        <section className="sec sec-alt next-pages" data-fp-label="გააგრძელე მოგზაურობა">
          <div className="wrap">
            <div className="nx-head">
              <span className="eyebrow reveal">გააგრძელე მოგზაურობა</span>
              <h2 className="reveal d1">სად <span className="grad-text">გავაგრძელოთ?</span></h2>
              <p className="reveal d2">აირჩიე გვერდი — ან გახსენი და პირდაპირ კონკრეტულ კუთხეზე გადადი.</p>
            </div>
            <ol className="nx-list">
              {navItems.filter(([, nv]) => nv !== v && nv !== "home").map(([label, nv], i) => {
                // pages with region-tagged content open their region list right under the row instead of navigating
                const items = kutkheItems(nv)
                const open = nextOpen === nv
                const hero = PAGE_HERO[nv as Exclude<View, "home">]
                return (
                  <li key={nv} className={`nx-row reveal${open ? " open" : ""}${nextOpen && !open ? " dim" : ""}`} style={{ "--i": i } as CSSProperties}>
                    <button
                      className="nx-btn"
                      aria-expanded={items ? open : undefined}
                      onClick={() => (items ? setNextOpen(open ? null : nv) : go(nv))}
                    >
                      <span className="nx-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="nx-photo"><img src={IMG(hero.img, 500)} alt="" loading="lazy" /></span>
                      <span className="nx-text">
                        <span className="nx-eyebrow">{hero.eyebrow}</span>
                        <span className="nx-title"><span>{label}</span></span>
                      </span>
                      <span className="nx-meta">
                        {items ? <><b>{items.length}</b> მასალა · <b>{KUTKHEEBI.length}</b> კუთხე</> : "ინტერაქტიული რუკა"}
                      </span>
                      <i className="nx-arrow" aria-hidden="true">{items ? "▾" : "→"}</i>
                    </button>
                    {items && (
                      <div className="next-regions-wrap" aria-hidden={!open}>
                        <div className="next-regions-clip">
                          <div className="next-regions">
                            <div className="filters">
                              <button className="filter-btn all" style={{ animationDelay: "0s" }} onClick={() => go(nv)} tabIndex={open ? 0 : -1}>
                                ყველა <span className="n">{items.length}</span>
                              </button>
                              {KUTKHEEBI.map((k, ki) => {
                                const n = items.filter((x) => x.areas.includes(k.id)).length
                                return (
                                  <button
                                    key={k.id}
                                    className={`filter-btn${n ? "" : " empty"}`}
                                    style={{ animationDelay: `${0.03 * (ki + 1)}s` }}
                                    onClick={() => go(nv, k.id)}
                                    tabIndex={open ? 0 : -1}
                                  >
                                    {k.name} <span className="n">{n}</span>
                                  </button>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                )
              })}
            </ol>
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
            <button className="foot-pill" onClick={onPlanTrip}>{t.trip}</button>
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
        <button style={{ transitionDelay: menuOpen ? `${0.08 + navItems.length * 0.05}s` : "0s" }} onClick={onPlanTrip}>{t.trip}</button>
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
