import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import "./georgian-heritage.css"
import "./georgian-heritage-pages.css"
import GeorgiaAntiqueMap, { type MonumentIcon } from "./GeorgiaAntiqueMap"

type Lang = "ka" | "en"
type Theme = "dark" | "light"
type View = "home" | "regions" | "history" | "customs" | "legends" | "archive" | "voice"

interface GeorgianHeritagePageProps {
  onBack: () => void
  onSelectRegion: (regionId: string) => void
  onPlanTrip: () => void
}

const IMG = (id: string, width: number) => `https://sspark.genspark.ai/i/${id}?width=${width}`

type Zone = "mountain" | "sea" | "valley"

// regionId links a card to an existing region detail page (see data/georgiaRegions.ts)
const REGIONS: { ka: string; en: string; lon: number; lat: number; icon: MonumentIcon; img: string; alt: string; desc: string; zone: Zone; regionId?: string }[] = [
  { ka: "სვანეთი", en: "Svaneti", lon: 42.7, lat: 43, icon: "tower", img: "fu29FaDzh3624NIW", alt: "მესტია, სვანეთი", zone: "mountain", regionId: "svaneti", desc: "კოშკებიანი სოფლები, ლამარია და უძველესი მთიული ტრადიციები — იუნესკოს მსოფლიო მემკვიდრეობა." },
  { ka: "კახეთი", en: "Kakheti", lon: 45.62, lat: 41.93, icon: "church", img: "HsYlX0J2VDTJfFnX", alt: "სიღნაღი, კახეთი", zone: "valley", regionId: "kakheti", desc: "ღვინის სამშობლო: ალაზნის ველი, ქალაქი-სიმაგრე სიღნაღი და ქართლურ-კახური ტაძრები." },
  { ka: "თბილისი", en: "Tbilisi", lon: 44.86, lat: 41.66, icon: "fortress", img: "jjOmHfVQPImWIMho", alt: "ძველი თბილისი და ნარიყალა", zone: "valley", desc: "აბანოების უბანი, ხის აივნები და მრავალსაუკუნოვანი მრავალეროვანი კულტურა." },
  { ka: "აჭარა", en: "Adjara", lon: 42.02, lat: 41.73, icon: "fortress", img: "Xd32m9fOP1J74Urx", alt: "ბათუმი, აჭარა", zone: "sea", regionId: "adjara", desc: "შავი ზღვის სანაპირო, მთიანი ხინოს უღელტეხილი და მაჭახლის უნიკალური სოფლური კულტურა." },
  { ka: "სამეგრელო", en: "Samegrelo", lon: 42.15, lat: 42.4, icon: "fortress", img: "I72M3lBSTf9EJVn8", alt: "მარტვილის კანიონი, სამეგრელო", zone: "sea", desc: "კოლხური დაბლობი, ტბები და კანიონები; მეგრული ენა და სამზარეულო." },
  { ka: "იმერეთი", en: "Imereti", lon: 42.72, lat: 42.22, icon: "church", img: "fkQYrZB1ZU6oDjUg", alt: "ბაგრატის ტაძარი, ქუთაისი", zone: "valley", desc: "ქუთაისი — უძველესი დედაქალაქი, ბაგრატი და გელათი, ქვევრის ღვინო და ხელოსნური ტრადიციები." },
  { ka: "თუშეთი", en: "Tusheti", lon: 45.63, lat: 42.37, icon: "tower", img: "KU1gZAB04l0ixryO", alt: "კესელოს კოშკები, თუშეთი", zone: "mountain", desc: "ომალო, დართლო, კესელოს კოშკები — ერთ-ერთი ყველაზე იზოლირებული მთიული კულტურა." },
  { ka: "ხევსურეთი", en: "Khevsureti", lon: 45.13, lat: 42.48, icon: "tower", img: "FrGDd2uxyFH4E7g0", alt: "მუცო, ხევსურეთი", zone: "mountain", desc: "მუცო, შატილი, ხახმათი — საგუშაგო კოშკები და ხევსურული საომარი ტრადიციები." },
  { ka: "ხევი", en: "Khevi", lon: 44.66, lat: 42.58, icon: "church", img: "GnuUxvVGfsjcN7yA", alt: "გერგეტის სამების ეკლესია, ხევი", zone: "mountain", regionId: "kazbegi", desc: "ყაზბეგის მიდამოები და გერგეტის სამება — საქართველოს ყველაზე ფოტოგენური სალოცავი." },
  { ka: "სამცხე-ჯავახეთი", en: "Samtskhe-Javakheti", lon: 43.2, lat: 41.52, icon: "cave", img: "5w0mZLBWlE7r71zC", alt: "ვარძია, სამცხე-ჯავახეთი", zone: "mountain", regionId: "samtskhe-javakheti", desc: "ვარძია, რაბათი, ფარავნის ტბა — გამოქვაბულების ცივილიზაცია მესხეთის მთებში." },
  { ka: "რაჭა-ლეჩხუმი", en: "Racha-Lechkhumi", lon: 43.2, lat: 42.55, icon: "church", img: "6spWZQrYvFFuBNwb", alt: "შაორის წყალსაცავი, რაჭა", zone: "mountain", desc: "„ქართული შვეიცარია“: შაორი, ხვანჭკარა და სასანტლის ვენახები." },
  { ka: "აფხაზეთი", en: "Abkhazia", lon: 41.3, lat: 43.1, icon: "church", img: "ljZFei9DNOBkYcgD", alt: "ახალი ათონის მონასტერი, აფხაზეთი", zone: "sea", desc: "ბიჭვინთა, ანაკოფია და ახალი ათონი — შავიზღვისპირა ისტორიულ-კულტურული მემკვიდრეობა." },
]

const ZONES: { id: Zone | "all"; label: string }[] = [
  { id: "all", label: "ყველა" },
  { id: "mountain", label: "მთიანეთი" },
  { id: "sea", label: "ზღვისპირეთი" },
  { id: "valley", label: "ბარი და ქალაქები" },
]

const TIMELINE_SHORT = [
  { year: "ძვ. წ. VI–IV სს.", title: "კოლხეთის სამეფო", text: "ანტიკური წყაროები აღწერს შავი ზღვის აღმოსავლეთ სანაპიროს მდიდარ, ოქროთი ცნობილ სამეფოს — დღევანდელი დასავლეთ საქართველოს ტერიტორიას." },
  { year: "IV ს.", title: "ქრისტიანობა — სახელმწიფო რელიგია", text: "ქართლში ქრისტიანობის გამოცხადებამ (ტრადიციული თარიღი — 330 წ.) განსაზღვრა საქართველოს კულტურული გზა საუკუნეების მანძილზე." },
  { year: "V ს.", title: "თბილისის დაარსება", text: "ტრადიცია თბილისის დაარსებას მეფე ვახტანგ გორგასალს უკავშირებს (დაახლ. 458 წ.) — ქალაქი ცხელი აბანოების აღმოჩენის ამბავთან ერთად." },
  { year: "XI–XII სს.", title: "„ოქროს ხანა“", text: "დავით აღმაშენებელი და თამარ მეფე — გაერთიანებული საქართველოს ძლიერების ხანა: გელათის აკადემია, ვარძია, შუა საუკუნეების ხელოვნების აღმავლობა." },
  { year: "XIII–XVIII სს.", title: "დანაწევრება და წინააღმდეგობა", text: "მონღოლთა და შემდგომი შემოსევების შემდეგ სამეფო-სამთავროებად დაყოფილი ქვეყანა კვლავ ინარჩუნებს მთიულ და სამონასტრო ტრადიციებს." },
  { year: "1994–1996", title: "იუნესკოს მსოფლიო მემკვიდრეობა", text: "მცხეთა (1994) და ზემო სვანეთი (1996) იუნესკოს მსოფლიო მემკვიდრეობის სიაში შედის — ციფრული მუზეუმის იდეის ერთ-ერთი საფუძველი." },
]

const TIMELINE_FULL = [
  TIMELINE_SHORT[0],
  { year: "ძვ. წ. IV–III სს.", title: "ქართლის (იბერიის) სამეფო", text: "ტრადიცია ქართლის პირველ მეფედ ფარნავაზს მიიჩნევს, რომელსაც ქართული დამწერლობის შექმნასაც მიაწერს. დედაქალაქი — მცხეთა." },
  TIMELINE_SHORT[1],
  { year: "V ს.", title: "უძველესი ქართული წარწერები და წიგნი", text: "ბოლნისისა და პალესტინის ქართული წარწერები, „შუშანიკის წამება“ — ქართული მწერლობის უძველესი ძეგლები." },
  TIMELINE_SHORT[2],
  { year: "1121", title: "დიდგორის ბრძოლა", text: "დავით აღმაშენებლის გამარჯვება, რომლის შემდეგაც 1122 წელს თბილისი კვლავ ქართული სამეფოს დედაქალაქი ხდება." },
  TIMELINE_SHORT[3],
  { year: "XII ს.", title: "„ვეფხისტყაოსანი“", text: "შოთა რუსთაველის პოემა — ქართული ლიტერატურის მწვერვალი, თამარ მეფის ეპოქის სულისკვეთების ანარეკლი." },
  TIMELINE_SHORT[4],
  { year: "1801", title: "რუსეთის იმპერიის შემადგენლობაში", text: "ქართლ-კახეთის სამეფოს გაუქმება; XIX საუკუნეში დანარჩენი ქართული სამეფო-სამთავროებიც იმპერიას უერთდება." },
  { year: "1918", title: "საქართველოს დემოკრატიული რესპუბლიკა", text: "26 მაისს გამოცხადდა დამოუკიდებლობა. 1921 წელს წითელი არმიის შემოჭრის შემდეგ ქვეყანა საბჭოთა კავშირის ნაწილი ხდება." },
  { year: "1991", title: "დამოუკიდებლობის აღდგენა", text: "9 აპრილს საქართველომ სახელმწიფოებრივი დამოუკიდებლობა აღადგინა." },
  TIMELINE_SHORT[5],
  { year: "2001–2016", title: "არამატერიალური მემკვიდრეობა", text: "იუნესკომ აღიარა ქართული მრავალხმიანი სიმღერა (2001), ქვევრის ღვინის დაყენების მეთოდი (2013) და ქართული ანბანის სამი სახეობის ცოცხალი კულტურა (2016)." },
]

const CUSTOMS = [
  { icon: "🍷", title: "სუფრა და თამადა", region: "მთელი საქართველო", text: "ქართული სუფრა რიტუალია: თამადა წარმართავს სადღეგრძელოებს — მშვიდობის, წინაპრების, მეგობრობის. სტუმარი „ღვთისაა“, ასე ამბობს ძველი სიტყვა." },
  { icon: "🏺", title: "ქვევრის ღვინო", region: "კახეთი · იმერეთი", text: "მიწაში ჩაფლულ თიხის ქვევრში ყურძნის დადუღება 8000-წლიანი ტრადიციაა. მეთოდი იუნესკოს არამატერიალური მემკვიდრეობის სიაშია (2013)." },
  { icon: "🎶", title: "მრავალხმიანი სიმღერა", region: "გურია · სვანეთი · კახეთი", text: "სამხმიანი სიმღერა — „ჩაკრულო“, „ლილე“, გურული კრიმანჭული. იუნესკომ ქართული პოლიფონია 2001 წელს აღიარა." },
  { icon: "🧥", title: "ჩოხა და ტრადიციული სამოსი", region: "მთელი საქართველო", text: "ჩოხა, ახალუხი, ხევსურული ნაქარგი პერანგი — სამოსი, რომელიც კუთხის, სტატუსისა და დღესასწაულის ენაზე „ლაპარაკობს“." },
  { icon: "💃", title: "ქართული ცეკვა", region: "კუთხეების ცეკვები", text: "ქართული, ხორუმი, ხევსურული, აჭარული — ცეკვები, რომლებშიც ომიც, სიყვარულიც და მთის რიტმიც ცოცხლობს." },
  { icon: "🔥", title: "ლამპრობა", region: "სვანეთი", text: "ზამთრის ბოლოს სვანეთში ჩირაღდნებით გადიან — ცეცხლით ლოცავენ ოჯახში ვაჟების სიცოცხლესა და მომავალ წელს." },
  { icon: "✍️", title: "ქართული ანბანი", region: "ასომთავრული · ნუსხური · მხედრული", text: "სამი დამწერლობის ცოცხალი კულტურა იუნესკოს არამატერიალური მემკვიდრეობის სიაშია (2016) — ერთ-ერთი უნიკალური ანბანი მსოფლიოში." },
  { icon: "🤼", title: "ჭიდაობა", region: "მთელი საქართველო", text: "ქართული ჭიდაობა დოლ-ზურნის თანხლებით — სახალხო დღესასწაულების განუყოფელი ნაწილი, იუნესკოს სიაში 2018 წლიდან." },
]

const LEGENDS = [
  { img: "GnuUxvVGfsjcN7yA", title: "ამირანი — კავკასიონზე მიჯაჭვული გმირი", region: "კავკასიონი", kind: "მითი", text: "ქართული ეპოსის გმირი, რომელმაც ღმერთს შეჰბედა და ამისთვის კავკასიონის კლდეზე მიაჯაჭვეს. ამბავი ბერძნულ პრომეთეს მითს ეხმიანება — ხალხში ამბობენ, რომ ჯაჭვს ერთგული ძაღლი დღემდე ლოკავს." },
  { img: "I72M3lBSTf9EJVn8", title: "ოქროს საწმისი და არგონავტები", region: "კოლხეთი · სამეგრელო", kind: "მითი", text: "ბერძნული მითით იასონი და არგონავტები კოლხეთში მეფე აიეტთან ოქროს საწმისისთვის ჩამოვიდნენ, მათ მედეა დაეხმარა. მკვლევრები მითს ძველ კოლხურ ოქროს მოპოვებას უკავშირებენ." },
  { img: "jjOmHfVQPImWIMho", title: "ხოხობი და თბილი წყაროები", region: "თბილისი", kind: "თქმულება", text: "ვახტანგ გორგასალს ნადირობისას ხოხობი ცხელ წყაროში ჩაუვარდა და მოიხარშა. მეფემ ადგილის სითბოთი მოხიბლულმა აქ ქალაქის აშენება ბრძანა — სახელიც „თბილისი“ ამ სითბოსგან მოდის." },
  { img: "NdqxwOI6eY0U1C0e", title: "„აქ ვარ, ძია!“ — ვარძიის სახელი", region: "სამცხე-ჯავახეთი", kind: "თქმულება", text: "გადმოცემით, პატარა თამარი გამოქვაბულებში დაიკარგა და ბიძას გასძახა: „აქ ვარ, ძია!“ — აქედან უნდა წარმოშობილიყო ქვაბთა ქალაქის სახელი." },
  { img: "fu29FaDzh3624NIW", title: "დალი — ნადირობის ქალღმერთი", region: "სვანეთი", kind: "ზეპირი გადმოცემა", text: "სვანური გადმოცემებით, მთის ნადირის მფარველი დალი ოქროსთმიანი ქალია, რომელიც მონადირეს ზომიერებას სთხოვს — ხარბ მონადირეს კი კლდიდან ჩამოაგდებს." },
  { img: "udCSb0N7UMcdNPVt", title: "უფლის კვართი და სვეტიცხოველი", region: "მცხეთა", kind: "გადმოცემა", text: "ტრადიციით, ქრისტეს კვართი მცხეთაში ელიოზმა ჩამოიტანა და სიდონიამ ჩაიკრა გულში — მის საფლავზე ამოიზარდა კედარი, საიდანაც სვეტიცხოვლის სახელი მოდის." },
]

const STORIES: { img: string; alt: string; tagClass: string; tag: string; title: string; text: string; meta: string[]; regionId?: string }[] = [
  { img: "NdqxwOI6eY0U1C0e", alt: "ვარძიის ღვთისმშობლის ეკლესიის ფრესკები", tagClass: "legend", tag: "ლეგენდა + ისტორია", regionId: "samtskhe-javakheti", title: "ვარძია — გამოქვაბული, რომელსაც სახელი მაცხოვრებელმა დაუტოვა", text: "თამარ მეფის სახელთან დაკავშირებული თქმულება — და ის, რასაც ისტორიული წყაროები ვარძიის აშენების შესახებ გვეუბნება.", meta: ["სამცხე-ჯავახეთი", "8 წთ კითხვა", "2026-01-12"] },
  { img: "imUv4nTweClsx1gI", alt: "ანანურის ციხესიმაგრე", tagClass: "oral", tag: "ზეპირი გადმოცემა", title: "ანანური — ციხე, რომელსაც წყალი მიუახლოვდა", text: "ადგილობრივი თქმულებები ჟინვალის წყალსაცავის მშენებლობისა და წყალქვეშ დარჩენილი სოფლების შესახებ — და რა ითქმის ამაზე დოკუმენტებში.", meta: ["დუშეთი · მცხეთა-მთიანეთი", "6 წთ კითხვა", "2026-01-05"] },
  { img: "GnuUxvVGfsjcN7yA", alt: "გერგეტის სამების ეკლესია ყაზბეგის მიდამოებში", tagClass: "fact", tag: "ისტორიული ფაქტი", regionId: "kazbegi", title: "გერგეტის სამება — სალოცავი უღელტეხილზე", text: "როგორ აღწერს წყაროები გერგეტის სამების ეკლესიის ისტორიას, მცხეთის სიწმინდეების შენახვას და საბჭოთა პერიოდში დახურული სალოცავის ბედს.", meta: ["ხევი · ყაზბეგი", "7 წთ კითხვა", "2025-12-20"] },
]

const VOICES = [
  { title: "„როგორ აშენდებოდა სვანური კოშკი“", who: "მთხრობელი — უშგულიდან · სვანეთი · 6:24", wave: [40, 70, 55, 90, 45, 75, 35, 60, 85, 50, 65, 30, 80, 55] },
  { title: "„დართლოს ზამთარი — ოჯახის ისტორია“", who: "მთხრობელი — თუშეთიდან · 4:57", wave: [60, 35, 75, 50, 90, 40, 70, 55, 85, 45, 65, 80, 30, 60] },
  { title: "„კრიმანჭული — როგორ ვისწავლე“", who: "მომღერალი — ოზურგეთიდან · გურია · 5:12", wave: [50, 80, 40, 65, 90, 55, 35, 75, 60, 85, 45, 70, 50, 65] },
  { title: "„ქვევრის საიდუმლო“", who: "მექვევრე — იმერეთიდან · 7:03", wave: [70, 45, 85, 55, 40, 75, 60, 90, 35, 65, 80, 50, 70, 45] },
  { title: "„შატილის ზღაპრები ბებიისგან“", who: "მთხრობელი — ხევსურეთიდან · 3:48", wave: [35, 60, 80, 45, 70, 50, 90, 40, 65, 55, 85, 30, 75, 60] },
]

type ArchCat = "temple" | "mountain" | "city" | "nature"
const ARCH_CATS: { id: ArchCat | "all"; label: string }[] = [
  { id: "all", label: "ყველა" },
  { id: "temple", label: "ტაძრები" },
  { id: "mountain", label: "მთის სოფლები" },
  { id: "city", label: "ქალაქები" },
  { id: "nature", label: "ბუნება" },
]
const ARCHIVE: { img: string; alt: string; title: string; caption: string; cat: ArchCat }[] = [
  { img: "udCSb0N7UMcdNPVt", alt: "მცხეთა და სვეტიცხოველი ზემოდან", title: "მცხეთა — სვეტიცხოველი", cat: "temple", caption: "მცხეთა ფრინველის ხედვიდან — სვეტიცხოველი. ფოტო: Flickr (CC)" },
  { img: "fu29FaDzh3624NIW", alt: "მესტიის კოშკი", title: "მესტიის კოშკი, სვანეთი", cat: "mountain", caption: "მესტიის კოშკი ქართული დროშით. ფოტო: Flickr (CC)" },
  { img: "SpPnO6MUAmA5T9o6", alt: "ლამარიას ეკლესია უშგულში", title: "ლამარია, უშგული", cat: "temple", caption: "ლამარიას ეკლესია და სვანური კოშკი, უშგული. ფოტო: Flickr (CC)" },
  { img: "NdqxwOI6eY0U1C0e", alt: "ვარძიის ინტერიერი", title: "ვარძიის ფრესკები", cat: "temple", caption: "ვარძიის ღვთისმშობლის ეკლესიის ინტერიერი — თამარ მეფის ფრესკა. ფოტო: Flickr (CC)" },
  { img: "GxpZw8gO36Dy5gz8", alt: "უშგულის სოფელი შემოდგომაზე", title: "უშგული შემოდგომით", cat: "mountain", caption: "უშგული — ევროპის ერთ-ერთი უმაღლესი მუდმივად დასახლებული სოფელი. ფოტო: Flickr (CC)" },
  { img: "HsYlX0J2VDTJfFnX", alt: "სიღნაღი, კახეთი", title: "სიღნაღი", cat: "city", caption: "სიღნაღი — ქალაქი-სიმაგრე ალაზნის ველის თავზე. ფოტო: Flickr (CC)" },
  { img: "jjOmHfVQPImWIMho", alt: "ძველი თბილისი და ნარიყალა", title: "ძველი თბილისი", cat: "city", caption: "ძველი თბილისი და ნარიყალას ციხე. ფოტო: Flickr (CC)" },
  { img: "Xd32m9fOP1J74Urx", alt: "ბათუმი, აჭარა", title: "ბათუმი", cat: "city", caption: "ბათუმი — შავი ზღვის კარიბჭე. ფოტო: Flickr (CC)" },
  { img: "fkQYrZB1ZU6oDjUg", alt: "ბაგრატის ტაძარი, ქუთაისი", title: "ბაგრატის ტაძარი", cat: "temple", caption: "ბაგრატის ტაძარი, ქუთაისი. ფოტო: Flickr (CC)" },
  { img: "KU1gZAB04l0ixryO", alt: "კესელოს კოშკები, თუშეთი", title: "კესელოს კოშკები", cat: "mountain", caption: "კესელოს კოშკები, ომალო, თუშეთი. ფოტო: Flickr (CC)" },
  { img: "I72M3lBSTf9EJVn8", alt: "მარტვილის კანიონი", title: "მარტვილის კანიონი", cat: "nature", caption: "მარტვილის კანიონი, სამეგრელო. ფოტო: Flickr (CC)" },
  { img: "6spWZQrYvFFuBNwb", alt: "შაორის წყალსაცავი, რაჭა", title: "შაორი, რაჭა", cat: "nature", caption: "შაორის წყალსაცავი, რაჭა. ფოტო: Flickr (CC)" },
]

const PAGE_HERO: Record<Exclude<View, "home">, { img: string; eyebrow: string; title: string; sub: string }> = {
  regions: { img: "HsYlX0J2VDTJfFnX", eyebrow: "ინტერაქტიული ატლასი", title: "საქართველოს კუთხეები", sub: "12 ისტორიულ-ეთნოგრაფიული მხარე — მთიანეთიდან ზღვისპირეთამდე. აირჩიე კუთხე და გაიცანი მისი ისტორია." },
  history: { img: "fkQYrZB1ZU6oDjUg", eyebrow: "ქრონოლოგია", title: "საქართველოს ისტორია", sub: "კოლხეთიდან დამოუკიდებლობამდე — ათასწლეულების გზა, რომელმაც ქართული კულტურა ჩამოაყალიბა." },
  customs: { img: "6spWZQrYvFFuBNwb", eyebrow: "ცოცხალი მემკვიდრეობა", title: "ადათ-წესები", sub: "სუფრა, სიმღერა, ქვევრი და ჩოხა — ტრადიციები, რომლებიც დღესაც ცოცხლობს ოჯახებსა და სოფლებში." },
  legends: { img: "GnuUxvVGfsjcN7yA", eyebrow: "მითები და თქმულებები", title: "ლეგენდები", sub: "ამირანიდან ოქროს საწმისამდე — ამბები, რომლებიც თაობიდან თაობას გადაეცემა." },
  archive: { img: "udCSb0N7UMcdNPVt", eyebrow: "ციფრული არქივი", title: "ციფრული არქივი", sub: "ფოტოები და ისტორიული მასალა — თითოეულ ექსპონატს აქვს წყარო და ლიცენზია." },
  voice: { img: "KU1gZAB04l0ixryO", eyebrow: "ზეპირი ისტორიები", title: "საქართველოს ხმა", sub: "მთხრობელები, მომღერლები და ოსტატები სხვადასხვა კუთხიდან. (დემო პლეერი — ვიზუალური კონცეფცია.)" },
}

const T = {
  ka: {
    navHome: "მთავარი", navRegions: "საქართველოს კუთხეები", navHistory: "ისტორია", navCustoms: "ადათ-წესები",
    navLegends: "ლეგენდები", navArchive: "ციფრული არქივი", navVoice: "საქართველოს ხმა", back: "← TravelWorld",
    heroTitle: ["აღმოაჩინე ", "საქართველოს", " საუკუნოვანი ისტორია"],
    heroSub: "გაეცანი საქართველოს კუთხეებს, ხალხის მეხსიერებაში შემონახულ ამბებს, ტრადიციებსა და კულტურულ მემკვიდრეობას.",
    cta1: "გამოიკვლიე საქართველო", cta2: "აღმოაჩინე ლეგენდები",
    regionsTitle: "საქართველოს ისტორიული კუთხეები",
    regionsSub: "ისტორიულ-ეთნოგრაფიული მხარეები — შავი ზღვიდან კავკასიონის უღელტეხილებამდე. თითოეული კუთხე — ცალკე ციფრული კულტურული სივრცე.",
    storiesTitle: "ამბები, რომლებიც საუკუნეებს გადაურჩა",
    storiesSub: "ისტორიული ფაქტი, ზეპირი გადმოცემა, ლეგენდა და თანამედროვე ინტერპრეტაცია — ყოველთვის მკაფიოდ გამიჯნული.",
    voiceTitle: "საქართველოს ხმა — Stories of Georgia",
    voiceSub: "მთხრობელები სხვადასხვა კუთხიდან: ოჯახური ისტორიები, ძველი სიმღერები და ტრადიციული ცოდნა. (ჩანაწერების გამოქვეყნება — მხოლოდ თანხმობით.)",
    archiveTitle: "ძველი რუკები, ფოტოები, ხელნაწერები",
    archiveSub: "საჯარო დომენისა და CC-ლიცენზიის მქონე ისტორიული მასალა — თითოეულ ექსპონატს აქვს წყარო, თარიღი და ლიცენზია.",
    trip: "მოგზაურობის დაგეგმვა", all: "ყველას ნახვა →",
  },
  en: {
    navHome: "Home", navRegions: "Regions", navHistory: "History", navCustoms: "Customs",
    navLegends: "Legends", navArchive: "Archive", navVoice: "Voice of Georgia", back: "← TravelWorld",
    heroTitle: ["Discover ", "Georgia’s", " Living Heritage"],
    heroSub: "Explore the regions of Georgia — stories preserved in the memory of its people, traditions and cultural heritage.",
    cta1: "Explore Georgia", cta2: "Discover Legends",
    regionsTitle: "Historical Regions of Georgia",
    regionsSub: "An interactive atlas of historical-ethnographic provinces — from the Black Sea to the Caucasus passes.",
    storiesTitle: "Stories That Survived the Centuries",
    storiesSub: "Editorial articles where historical fact, oral tradition, legend and contemporary interpretation are clearly separated.",
    voiceTitle: "The Voice of Georgia — Stories of Georgia",
    voiceSub: "Recordings, family histories and local tales from people of every corner of the country. (Concept demo — sample players.)",
    archiveTitle: "Digital Archive of Cultural Heritage",
    archiveSub: "Historical photographs, old maps, manuscripts, traditional dress and architecture — with sources and licenses.",
    trip: "Plan a Trip", all: "View all →",
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

const delay = (i: number) => (i % 4 ? ` d${i % 4}` : "")

export default function GeorgianHeritagePage({ onBack, onSelectRegion, onPlanTrip }: GeorgianHeritagePageProps) {
  const [theme, setTheme] = useState<Theme>(() => (readStored("gh-theme") === "light" ? "light" : "dark"))
  const [lang, setLang] = useState<Lang>(() => (readStored("gh-lang") === "en" ? "en" : "ka"))
  const [view, setView] = useState<View>("home")
  const [wipeKey, setWipeKey] = useState(0)
  const [zone, setZone] = useState<Zone | "all">("all")
  const [archCat, setArchCat] = useState<ArchCat | "all">("all")
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [navHidden, setNavHidden] = useState(false)
  const [playing, setPlaying] = useState<number | null>(null)
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null)
  const [indicator, setIndicator] = useState<{ left: number; width: number; visible: boolean }>({ left: 0, width: 0, visible: false })
  const rootRef = useRef<HTMLDivElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
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

  // Reveal on scroll — re-run whenever the rendered content changes
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target) }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    )
    root.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [view, zone, archCat])

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

  const go = (next: View) => {
    setMenuOpen(false)
    if (next === view) { window.scrollTo({ top: 0, behavior: "smooth" }); return }
    if (prefersReducedMotion()) { setView(next); window.scrollTo({ top: 0 }); return }
    // Colour wipe covers the screen, content swaps underneath at its midpoint
    setWipeKey((k) => k + 1)
    window.clearTimeout(switchTimer.current)
    switchTimer.current = window.setTimeout(() => {
      setView(next)
      setZone("all")
      setArchCat("all")
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
    [t.navVoice, "voice"],
  ]
  const viewLabel = navItems.find(([, v]) => v === view)?.[0] ?? ""

  /* ---------- reusable blocks ---------- */

  const regionGrid = (list: typeof REGIONS) => (
    <div className="grid grid-3">
      {list.map((r, i) => (
        <div
          key={r.en}
          id={`gh-region-${r.en}`}
          className={`region-card reveal zoom${delay(i)}${r.regionId ? " link" : ""}`}
          onClick={r.regionId ? () => onSelectRegion(r.regionId!) : undefined}
          role={r.regionId ? "link" : undefined}
          tabIndex={r.regionId ? 0 : undefined}
          onKeyDown={r.regionId ? (e) => { if (e.key === "Enter") onSelectRegion(r.regionId!) } : undefined}
        >
          <img src={IMG(r.img, 1600)} alt={r.alt} loading="lazy" />
          <div className="veil" />
          <span className="num">{String(REGIONS.indexOf(r) + 1).padStart(2, "0")}</span>
          <div className="body">
            <h3>{lang === "en" ? r.en : r.ka}</h3>
            <div className="en-name">{lang === "en" ? r.ka : r.en}</div>
            <p>{r.desc}</p>
            {r.regionId && <span className="card-more">გვერდის ნახვა →</span>}
          </div>
        </div>
      ))}
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

  const stories = () => (
    <div className="grid" style={{ gridTemplateColumns: "1fr" }}>
      {STORIES.map((s, i) => (
        <div
          key={s.title}
          className={`art-card reveal ${i % 2 ? "right" : "left"}${s.regionId ? " link" : ""}`}
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

  const voices = (list: typeof VOICES) => (
    <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 16, maxWidth: 900 }}>
      {list.map((v, i) => {
        const idx = VOICES.indexOf(v)
        const on = playing === idx
        return (
          <div key={v.title} className={`audio-card reveal right${delay(i)}${on ? " on" : ""}`}>
            <button className={`play-btn${on ? " on" : ""}`} aria-label={on ? "პაუზა" : "მოსმენა"} onClick={() => setPlaying(on ? null : idx)}>
              {on ? "❚❚" : "▶"}
            </button>
            <div className="who">
              <h4>{v.title}</h4>
              <p>{v.who}</p>
            </div>
            <div className={`wave${on ? " on" : ""}`} aria-hidden="true">
              {v.wave.map((h, j) => <i key={j} style={{ height: `${h}%` }} />)}
            </div>
          </div>
        )
      })}
      <div style={{ marginTop: 6 }} className="reveal">
        <span className="demo-chip">დემო პლეერი — ვიზუალური კონცეფცია</span>
      </div>
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

  const filters = <F extends string>(items: { id: F; label: string }[], active: F, set: (v: F) => void) => (
    <div className="filters reveal">
      {items.map((f) => (
        <button key={f.id} className={`filter-btn${active === f.id ? " active" : ""}`} onClick={() => set(f.id)}>{f.label}</button>
      ))}
    </div>
  )

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
      <section className="hero">
        <div className="hero-bg" ref={parallaxRef}>
          <img src={IMG("wKrt3CLm6pX8C6K4", 2560)} alt="უშგული, ზემო სვანეთი — სვანური კოშკები და მთა შხარა" fetchPriority="high" />
        </div>
        <div className="hero-veil" />
        <div className="orb red" />
        <div className="orb blue" />
        <div className="orb green" />
        <div className="hero-content">
          <span className="eyebrow reveal">საქართველოს ციფრული კულტურული ატლასი</span>
          <h1 className="reveal d1">{t.heroTitle[0]}<span className="grad-text">{t.heroTitle[1]}</span>{t.heroTitle[2]}</h1>
          <p className="sub reveal d2">{t.heroSub}</p>
          <div className="hero-cta reveal d3">
            <button className="btn btn-gold" onClick={() => go("regions")}>{t.cta1}</button>
            <button className="btn btn-ghost" onClick={() => go("legends")}>{t.cta2}</button>
          </div>
        </div>
        <div className="hero-meta"><div className="scroll-hint">სქროლე</div></div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...REGIONS, ...REGIONS].map((r, i) => <span key={i}>{lang === "en" ? r.en : r.ka}</span>)}
        </div>
      </div>

      <section className="sec" style={{ paddingTop: 70 }}>
        <div className="wrap">
          <div className="stats">
            <div className="stat reveal zoom"><CountUp to={20} suffix="+" /><span>ისტორიულ-ეთნოგრაფიული მხარე</span></div>
            <div className="stat reveal zoom d1"><CountUp to={12} /><span>კუთხე ატლასში</span></div>
            <div className="stat reveal zoom d2"><CountUp to={8} /><span>ცოცხალი ტრადიცია</span></div>
            <div className="stat reveal zoom d3"><b>KA · EN</b><span>ორენოვანი ინტერფეისი</span></div>
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap">
          {secHead("ინტერაქტიული ატლასი", t.regionsTitle, t.regionsSub, "regions")}
          {regionGrid(REGIONS.slice(0, 6))}
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div
            className="ph reveal left"
            onClick={() => setLightbox({ src: IMG("GxpZw8gO36Dy5gz8", 1800), caption: "უშგული — ევროპის ერთ-ერთი უმაღლესი მუდმივად დასახლებული სოფელი. ფოტო: Flickr (CC)" })}
          >
            <img src={IMG("GxpZw8gO36Dy5gz8", 1800)} alt="უშგულის სოფელი შემოდგომაზე" loading="lazy" />
            <span className="badge">უშგული · ზემო სვანეთი</span>
          </div>
          <div>
            <span className="eyebrow reveal right">რეგიონის დეტალური გვერდი</span>
            <h2 className="reveal right d1" style={{ fontSize: "clamp(28px,3.6vw,44px)", margin: "16px 0" }}>სვანეთი — კოშკების მიწა</h2>
            <p className="reveal right d2" style={{ color: "var(--muted)" }}>
              ზემო სვანეთის კოშკებიანი სოფლები საუკუნეების მანძილზე იცავდა მთიელებს და ინახავდა უძველეს ქართულ სამართალს, სიმღერასა და წეს-ჩვეულებებს.
            </p>
            <ul className="reveal right d3">
              <li>ისტორიული ქრონოლოგია</li>
              <li>ადათ-წესები, სამოსი და ხელობა</li>
              <li>ლეგენდები და ხალხური გადმოცემები</li>
              <li>ძეგლების რუკა და ფოტოგალერეა</li>
            </ul>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }} className="reveal right d4">
              <button className="btn btn-gold" onClick={() => onSelectRegion("svaneti")}>გვერდის ნახვა</button>
              <button className="btn btn-line" onClick={() => go("customs")}>ადათ-წესები →</button>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap">
          {secHead("ქრონოლოგია", "საუკუნეების გზა", "მთავარი ისტორიული ეტაპები — სრული ქრონოლოგია ისტორიის გვერდზეა.", "history")}
          {timeline(TIMELINE_SHORT)}
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          {secHead("სარედაქციო განყოფილება", t.storiesTitle, t.storiesSub, "legends")}
          {stories()}
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap">
          {secHead("ზეპირი ისტორიები", t.voiceTitle, t.voiceSub, "voice")}
          {voices(VOICES.slice(0, 2))}
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          {secHead("ციფრული არქივი", t.archiveTitle, t.archiveSub, "archive")}
          {archiveGrid(ARCHIVE.slice(0, 4))}
        </div>
      </section>

      <section className="sec sec-alt">
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
        <div className="orb red" />
        <div className="orb blue" />
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

  // Map markers open the region page when one exists, otherwise scroll to (and flash) the card below
  const openFromMap = (en: string) => {
    const r = REGIONS.find((x) => x.en === en)
    if (!r) return
    if (r.regionId) { onSelectRegion(r.regionId); return }
    setZone("all")
    window.setTimeout(() => {
      const card = document.getElementById(`gh-region-${en}`)
      if (!card) return
      card.classList.add("in")
      card.scrollIntoView({ behavior: "smooth", block: "center" })
      card.classList.remove("flash")
      void card.offsetWidth
      card.classList.add("flash")
    }, 60)
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
        const list = zone === "all" ? REGIONS : REGIONS.filter((r) => r.zone === zone)
        body = (
          <>
            {filters(ZONES, zone, setZone)}
            <div key={zone}>{regionGrid(list)}</div>
            <div className="reveal" style={{ marginTop: 44 }}>
              <button className="btn btn-gold" onClick={onPlanTrip}>{t.trip} →</button>
            </div>
          </>
        )
        break
      }
      case "history":
        body = timeline(TIMELINE_FULL)
        break
      case "customs":
        body = (
          <div className="grid grid-4">
            {CUSTOMS.map((c, i) => (
              <div key={c.title} className={`custom-card reveal zoom${delay(i)}`}>
                <div className="custom-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <div className="custom-region">{c.region}</div>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        )
        break
      case "legends":
        body = (
          <>
            <div className="grid grid-3">
              {LEGENDS.map((l, i) => (
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
            <div style={{ marginTop: 90 }}>
              {secHead("სარედაქციო განყოფილება", t.storiesTitle, t.storiesSub)}
              {stories()}
            </div>
          </>
        )
        break
      case "archive": {
        const list = archCat === "all" ? ARCHIVE : ARCHIVE.filter((a) => a.cat === archCat)
        body = (
          <>
            {filters(ARCH_CATS, archCat, setArchCat)}
            <div key={archCat}>{archiveGrid(list)}</div>
          </>
        )
        break
      }
      case "voice":
        body = voices(VOICES)
        break
    }
    return (
      <>
        {v === "regions" ? regionsMap : pageHero(v)}
        <section className="sec">
          <div className="wrap">{body}</div>
        </section>
        <section className="sec sec-alt next-pages">
          <div className="wrap">
            <span className="eyebrow reveal">გააგრძელე მოგზაურობა</span>
            <div className="next-grid">
              {navItems.filter(([, nv]) => nv !== v && nv !== "home").map(([label, nv], i) => (
                <button key={nv} className={`next-card reveal${delay(i)}`} onClick={() => go(nv)}>
                  <span>{label}</span><i>→</i>
                </button>
              ))}
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <div className="gh" data-theme={theme} lang={lang} ref={rootRef}>
      <div className="progress" ref={progressRef} />
      {wipeKey > 0 && (
        <div className="wipe" key={wipeKey} aria-hidden="true">
          <div className="wipe-flag">
            <GeorgianFlag />
            <div className="wipe-shine" />
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

      <main className="page" key={view}>
        {view === "home" ? homePage : subPage(view)}
      </main>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <div className="logo" style={{ marginBottom: 14 }}><b>GEORGIAN HERITAGE</b><span>საქართველოს ციფრული ატლასი</span></div>
              <p style={{ color: "var(--muted)", fontSize: 14, maxWidth: "44ch" }}>
                ციფრული მუზეუმის, ისტორიული ენციკლოპედიისა და ინტერაქტიული ატლასის ერთიანი კონცეფცია — საქართველოს ყველა კუთხის ისტორიისა და კულტურის შესანარჩუნებლად.
              </p>
            </div>
            <div>
              <h4>განყოფილებები</h4>
              {navItems.slice(1).map(([label, v]) => (
                <button key={v} className="foot-link" onClick={() => go(v)}>{label}</button>
              ))}
            </div>
            <div>
              <h4>ინფორმაცია</h4>
              <button className="foot-link" onClick={onPlanTrip}>{t.trip}</button>
              <button className="foot-link" onClick={onBack}>TravelWorld — მთავარი</button>
              <button className="foot-link" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>უკან ზემოთ ↑</button>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 GEORGIAN HERITAGE — დიზაინის კონცეფცია (დემო).</span>
            <span>ფოტოები: Flickr CC · Wikimedia (საჯარო დომენი)</span>
          </div>
        </div>
      </footer>

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
