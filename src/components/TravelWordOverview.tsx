import { useMemo, useState } from "react"
import {
  BedDouble, Utensils, Car, Compass, Landmark, Zap, ShoppingBag, ShieldPlus,
  Briefcase, MapPin, Scale, Calculator, UserCircle, Building2, Settings,
  Languages, BadgeCheck, Coins, ListChecks, ChevronDown, Users, Target,
} from "lucide-react"

// ——————————————————————————————————————————————————
// DATA
// ——————————————————————————————————————————————————

const AUDIENCE = [
  "უცხოელი ტურისტები",
  "საქართველოს მოქალაქეები",
  "ოჯახები და ბავშვებთან ერთად მოგზაურები",
  "ინდივიდუალური მოგზაურები",
  "ტურისტული ჯგუფები",
  "ბიზნესმოგზაურები",
  "სათავგადასავლო მოგზაურობის მოყვარულები",
  "დროებით ჩამოსული სტუმრები",
]

const REGIONS: { name: string; places: string[] }[] = [
  { name: "აჭარა", places: ["ბათუმი", "ქობულეთი", "ხელვაჩაური", "ქედა", "შუახევი", "ხულო"] },
  { name: "გურია", places: ["ოზურგეთი", "ლანჩხუთი", "ჩოხატაური"] },
  { name: "სამეგრელო-ზემო სვანეთი", places: ["ზუგდიდი", "მესტია", "უშგული", "სენაკი", "ფოთი", "მარტვილი", "აბაშა", "ჩხოროწყუ", "წალენჯიხა", "ხობი"] },
  { name: "იმერეთი", places: ["ქუთაისი", "წყალტუბო", "ბაღდათი", "ზესტაფონი", "თერჯოლა", "სამტრედია", "საჩხერე", "ჭიათურა", "ხარაგაული", "ხონი", "ტყიბული", "ვანი"] },
  { name: "კახეთი", places: ["თელავი", "სიღნაღი", "ყვარელი", "გურჯაანი", "ლაგოდეხი", "ახმეტა", "საგარეჯო", "დედოფლისწყარო", "ლაგოდეხის დაცული ტერიტორიები"] },
  { name: "მცხეთა-მთიანეთი", places: ["მცხეთა", "ყაზბეგი", "გუდაური", "დუშეთი", "თიანეთი", "ფშავი", "ხევსურეთი"] },
  { name: "სამცხე-ჯავახეთი", places: ["ახალციხე", "ბორჯომი", "ბაკურიანი", "ვარძია", "ახალქალაქი", "ნინოწმინდა", "ასპინძა", "ადიგენი"] },
  { name: "რაჭა-ლეჩხუმი და ქვემო სვანეთი", places: ["ამბროლაური", "ონი", "ცაგერი", "ლენტეხი", "შაორის წყალსაცავი"] },
  { name: "შიდა ქართლი", places: ["გორი", "კასპი", "ქარელი", "ხაშური", "ატენის ხეობა"] },
  { name: "ქვემო ქართლი", places: ["რუსთავი", "ბოლნისი", "დმანისი", "მარნეული", "თეთრიწყარო", "წალკა", "გარდაბანი"] },
  { name: "თბილისი", places: ["თბილისის ცენტრი", "ძველი თბილისი", "სოლოლაკი", "ვერა", "ვაკე", "საბურთალო", "ისანი", "ავლაბარი", "ნაძალადევი", "გლდანი", "თბილისის შემოგარენი"] },
]

type ServiceGroup = { title?: string; items: string[] }
type Service = {
  id: string
  icon: typeof BedDouble
  title: string
  groups: ServiceGroup[]
  fieldsTitle?: string
  fields?: string[]
  note?: string
}

const SERVICES: Service[] = [
  {
    id: "stay", icon: BedDouble, title: "სასტუმროები და საცხოვრებელი",
    groups: [{ items: ["სასტუმროები", "საოჯახო სასტუმროები", "აპარტამენტები", "დღიურად გასაქირავებელი ბინები", "ჰოსტელები", "ჰოსტელები ზურგჩანთიანი მოგზაურებისთვის", "კოტეჯები", "მთის სახლები", "ხის სახლები", "გლემპინგი", "კემპინგის ადგილები", "კურორტის სასტუმროები", "სპა და ველნეს სასტუმროები", "ზღვისპირა საცხოვრებლები", "აუზიანი სასტუმროები", "საოჯახო დასასვენებელი სახლები", "ლუქს-კლასის ვილები", "სოფლის ტურიზმის საცხოვრებლები", "ეკოტურისტული საცხოვრებლები", "გრძელვადიანი ქირაობა"] }],
    fieldsTitle: "თითოეულ ობიექტს უნდა ჰქონდეს",
    fields: ["სახელი და მისამართი", "რეგიონი და მუნიციპალიტეტი", "ფოტოგალერეა", "ღამის ფასი", "ოთახის ტიპები", "სტუმრების მაქსიმალური რაოდენობა", "საწოლების რაოდენობა", "სააბაზანოს ტიპი", "Wi-Fi", "გათბობა და კონდიციონერი", "პარკინგი", "საუზმე", "აუზი, თუ აქვს", "შინაური ცხოველების პირობები", "შესვლისა და გასვლის საათები", "გაუქმების პირობები", "საკონტაქტო ინფორმაცია", "რუკაზე მდებარეობა", "ფასის ბოლო განახლების თარიღი"],
    note: "ფასები წარმოდგენილია ღამის, ოთახისა და საჭიროების შემთხვევაში თითოეული სტუმრის მიხედვით.",
  },
  {
    id: "food", icon: Utensils, title: "კვება და სასმელი",
    groups: [{ items: ["ქართული რესტორნები", "ადგილობრივი სამზარეულო", "საერთაშორისო სამზარეულო", "კაფეები", "საცხობები", "სწრაფი კვება", "ქუჩის საკვები", "საოჯახო სასადილოები", "ბუფეტები", "ვეგეტარიანული რესტორნები", "ვეგანური კვება", "ჰალალის კვება", "უგლუტენო კვება", "ზღვის პროდუქტები", "მთის ტრადიციული სამზარეულო", "ღვინის რესტორნები", "დესერტები და ნაყინი", "ყავის სპეციალიზებული ობიექტები", "კვების მიტანის სერვისები", "24-საათიანი ობიექტები"] }],
    fieldsTitle: "ფასების ინფორმაცია",
    fields: ["მენიუ", "კერძების დასახელებები", "თითოეული კერძის ფასი", "სასმელების ფასები", "საშუალო ხარჯი ერთ ადამიანზე", "საუზმის, სადილისა და ვახშმის ფასები", "მიტანის საფასური", "სამუშაო საათები", "მომსახურების საკომისიო", "ალერგენების ინფორმაცია", "საკონტაქტო ინფორმაცია", "რუკა", "მენიუს ბოლო განახლების თარიღი"],
    note: "საშუალო ხარჯი შეფასებითი მაჩვენებელია, კერძების ფასები კი ობიექტის რეალური მენიუდან.",
  },
  {
    id: "transport", icon: Car, title: "ტრანსპორტი და გადაადგილება",
    groups: [
      { title: "აეროპორტის მომსახურება", items: ["აეროპორტის ტრანსფერი", "კერძო მძღოლი", "ჯგუფური ტრანსფერი", "სასტუმრომდე ტრანსფერი", "მიკროავტობუსით ტრანსფერი", "VIP ტრანსფერი", "ბავშვის სავარძლით ტრანსფერი", "ბარგის გადატანა"] },
      { title: "ავტომობილები", items: ["ეკონომკლასი", "საშუალო კლასი", "SUV", "4x4", "მინივენები", "მიკროავტობუსები", "ავტომობილი მძღოლით", "ელექტრომობილები", "კაბრიოლეტები", "ლუქს-კლასი"] },
      { title: "საზოგადოებრივი ტრანსპორტი", items: ["საქალაქო ავტობუსები", "მეტრო", "მიკროავტობუსები", "საქალაქთაშორისო ავტობუსები", "მატარებლები", "რეგიონული ტრანსპორტი", "საბაგიროები", "ფუნიკულიორები", "საზღვაო და სანაპირო ტრანსპორტი"] },
      { title: "სხვა გადაადგილება", items: ["ტაქსი", "ველოსიპედის ქირაობა", "ელექტროსკუტერი", "მოტოციკლის ქირაობა", "კერძო მძღოლი", "ტურისტული ავტობუსები", "მთის ტრანსპორტი", "საბაგირო ტრანსპორტი"] },
    ],
    fieldsTitle: "მანქანაზე / მარშრუტზე უნდა ჩანდეს",
    fields: ["საათობრივი ან დღიური ფასი", "დეპოზიტი", "საწვავის პირობები", "დაზღვევა", "გარბენის ლიმიტი", "მძღოლის ასაკი", "გადაცემათა კოლოფი", "მგზავრების რაოდენობა", "აღებისა და დაბრუნების ადგილები", "დამატებითი გადასახადები", "საწყისი და საბოლოო გაჩერება", "განრიგი", "მგზავრობის ხანგრძლივობა", "ბილეთის ფასი", "ბილეთის ოფიციალური ბმული", "განრიგის განახლების თარიღი"],
  },
  {
    id: "tours", icon: Compass, title: "გიდები და ტურები",
    groups: [{ items: ["ქალაქის გიდები", "ისტორიული ტურები", "კულტურული ტურები", "გასტრონომიული ტურები", "ღვინის ტურები", "მთის გიდები", "საფეხმავლო ტურები", "სათავგადასავლო ტურები", "ჯიპტურები", "ველოტურები", "ცხენით გასეირნება", "ფოტოგრაფიული ტურები", "ოჯახური ტურები", "კერძო ტურები", "ჯგუფური ტურები", "ერთდღიანი ექსკურსიები", "მრავალდღიანი ტურები", "მომლოცველობითი ტურები", "სოფლის ტურები", "კულინარიული მასტერკლასები"] }],
    fieldsTitle: "თითოეულ მომსახურებაზე",
    fields: ["გიდის ან კომპანიის სახელი", "მომსახურების ენა", "ხანგრძლივობა", "ფასი ადამიანზე ან ჯგუფზე", "ჯგუფის მაქსიმალური ზომა", "მარშრუტი", "ფასში შემავალი მომსახურებები", "დამატებითი ხარჯები", "თავისუფალი თარიღები", "საკონტაქტო ინფორმაცია", "შეფასებები", "ლიცენზია ან კვალიფიკაცია"],
  },
  {
    id: "sights", icon: Landmark, title: "ღირსშესანიშნაობები",
    groups: [{ items: ["ისტორიული ძეგლები", "ციხესიმაგრეები", "მუზეუმები", "მონასტრები და ეკლესიები", "არქეოლოგიური ძეგლები", "გამოქვაბულები", "ჩანჩქერები", "ტბები", "მდინარეები", "მთები", "ეროვნული პარკები", "დაცული ტერიტორიები", "კანიონები", "ზღვის პლაჟები", "სათხილამურო კურორტები", "თერმული წყლები", "მინერალური წყლები", "პანორამული ხედები", "საბაგიროები", "გასართობი პარკები"] }],
    fieldsTitle: "თითოეული ადგილისთვის",
    fields: ["შესვლის ფასი", "სამუშაო საათები", "ვიზიტის ხანგრძლივობა", "მისასვლელი გზა", "ტრანსპორტის ვარიანტები", "სეზონური შეზღუდვები", "ხელმისაწვდომობის პირობები", "ოფიციალური ვებსაიტი", "რუკის მდებარეობა", "უსაფრთხოების რეკომენდაციები"],
    note: "უფასო ობიექტებიც აღირიცხება. თუ ფასი უცნობია, ეწერება „ფასი დასაზუსტებელია“ და არა გამოგონილი თანხა.",
  },
  {
    id: "activities", icon: Zap, title: "აქტივობები და გართობა",
    groups: [{ items: ["პარაპლანით ფრენა", "ჯომარდობა", "კაიაკინგი", "კანიონინგი", "ცხენოსნობა", "თევზაობა", "ლაშქრობა", "ალპინიზმი", "სათხილამურო აქტივობები", "სნოუბორდი", "კვადროციკლები", "ჯიპტურები", "ველოსიპედის ტურები", "ზიპლაინი", "საცურაო აუზები", "სპა", "მასაჟი", "თერმული აბაზანები", "გასართობი პარკები", "საბავშვო აქტივობები", "ზღვის აქტივობები", "ნავით გასეირნება", "ფოტოსესიები", "ხელნაკეთი ნივთების მასტერკლასები", "კულინარიული გაკვეთილები", "ადგილობრივი ფესტივალები"] }],
    note: "თითოეულ აქტივობაზე: ფასი, ხანგრძლივობა, ასაკობრივი შეზღუდვები, უსაფრთხოების მოთხოვნები, საჭირო აღჭურვილობა და დაჯავშნის პირობები.",
  },
  {
    id: "shops", icon: ShoppingBag, title: "მაღაზიები და ყოველდღიური საჭიროებები",
    groups: [{ items: ["სუპერმარკეტები", "სასურსათო მაღაზიები", "აფთიაქები", "ბანკები", "ბანკომატები", "ვალუტის გადამცვლელები", "მობილური ოპერატორები", "SIM და eSIM", "ტანსაცმლის მაღაზიები", "სპორტული მაღაზიები", "ტურისტული აღჭურვილობა", "სუვენირები", "სამრეცხაოები", "ბარგის შესანახი", "ბარგის შეფუთვა", "საზოგადოებრივი ტუალეტები", "საშხაპეები", "საზოგადოებრივი პარკინგი", "ელექტრომობილების დამტენები"] }],
    note: "თითოეულზე: მისამართი, სამუშაო საათები, რუკა, კონტაქტი და მომსახურების ფასი, თუ ხელმისაწვდომია.",
  },
  {
    id: "health", icon: ShieldPlus, title: "ჯანმრთელობა და უსაფრთხოება",
    groups: [{ items: ["საავადმყოფოები", "კლინიკები", "სასწრაფო დახმარება", "სტომატოლოგიური კლინიკები", "აფთიაქები", "24-საათიანი აფთიაქები", "სამედიცინო დაზღვევა", "ტურისტული დაზღვევა", "სამაშველო სამსახურები", "მთის სამაშველო ინფორმაცია", "პოლიცია", "სახანძრო-სამაშველო სამსახური", "საელჩოები და საკონსულოები", "დაკარგული ნივთები", "ტურისტული დახმარების ცენტრები"] }],
    note: "საგანგებო ნომრები და სამედიცინო მონაცემები გადამოწმდება ოფიციალური წყაროებით. საგანგებო სიტუაციაში საიტი სწრაფ წვდომას აძლევს ოფიციალურ ნომრებზე.",
  },
  {
    id: "business", icon: Briefcase, title: "ბიზნესი და სხვა მომსახურებები",
    groups: [{ items: ["ტურისტული სააგენტოები", "ავიაბილეთები", "სამოგზაურო დაზღვევა", "ღონისძიებების ორგანიზება", "ქორწილის ტურიზმი", "კონფერენციების სივრცეები", "ფოტოგრაფები", "თარჯიმნები", "დოკუმენტების თარგმნა", "ბარგის კურიერი", "მობილური ინტერნეტი", "ონლაინ სამუშაო სივრცეები", "Coworking სივრცეები", "სამრეცხაო და ქიმწმენდა", "შინაური ცხოველების სასტუმროები", "ვეტერინარული მომსახურება", "ბავშვის მომვლელი", "შშმ პირებისთვის ადაპტირებული სერვისები", "ეკოტურიზმი", "ფერმერული ტურიზმი"] }],
    note: "მომსახურებები ემატება ეტაპობრივად, რეალური მოთხოვნისა და მონაცემების ხელმისაწვდომობის მიხედვით.",
  },
]

const FEATURES: { icon: typeof MapPin; title: string; items: string[]; note?: string }[] = [
  {
    icon: MapPin, title: "რუკა და ახლომდებარე სერვისები",
    items: ["დანიშნულების ადგილის არჩევა", "ახლომდებარე სასტუმროები", "რესტორნების მოძიება", "ტრანსპორტის გაჩერებები", "აფთიაქები და კლინიკები", "ღირსშესანიშნაობები", "ფასით ფილტრაცია", "მარშრუტის დაგეგმვა", "ობიექტის დეტალური გვერდი"],
    note: "მდებარეობა აისახება მხოლოდ სანდო კოორდინატების ან დადასტურებული მისამართის საფუძველზე.",
  },
  {
    icon: Scale, title: "ფასების შედარება",
    items: ["სასტუმროების ღამის ფასები", "ბინების ქირაობა", "რესტორნების მენიუები", "ტაქსი და ტრანსფერი", "ავტომობილების ქირაობა", "გიდების მომსახურება", "ტურები", "აქტივობები", "მუზეუმების ბილეთები"],
    note: "ერთნაირი მომსახურებები დარდება ერთნაირი პირობებით — იგივე თარიღები, სტუმრების რაოდენობა და გადასახადები.",
  },
  {
    icon: UserCircle, title: "ტურისტის პირადი კაბინეტი",
    items: ["რეგისტრაცია და ავტორიზაცია", "საყვარელი ადგილები", "შენახული სასტუმროები და რესტორნები", "შენახული მარშრუტები", "დაჯავშნების ისტორია", "მოგზაურობის გეგმა", "ბიუჯეტის შენახვა", "შეფასებების დაწერა", "ენის არჩევა"],
  },
  {
    icon: Building2, title: "ბიზნესის პროფილი",
    items: ["სახელი და კატეგორია", "მისამართი და კონტაქტი", "ფოტოები", "მომსახურებები და ფასები", "სამუშაო საათები", "თავისუფალი თარიღები", "დაჯავშნის ბმული", "შეფასებები", "ბოლო განახლების თარიღი"],
    note: "ყალბი პროფილებისა და არასწორი ფასების წინააღმდეგ მოქმედებს გადამოწმების მექანიზმი.",
  },
  {
    icon: Settings, title: "ადმინისტრატორის პანელი",
    items: ["რეგიონები და მუნიციპალიტეტები", "ტურისტული ადგილები", "ბიზნესების მართვა და დადასტურება", "ფასების განახლება", "ფოტოები და კატეგორიები", "საჩივრების დამუშავება", "დუბლიკატების გასუფთავება", "საეჭვო ინფორმაციის შემოწმება", "მრავალენოვანი ტექსტები"],
    note: "ადმინისტრატორის უფლებები დაცულია სერვერზე.",
  },
  {
    icon: Coins, title: "შემოსავლის წყაროები",
    items: ["ბიზნესის ფასიანი პროფილები", "რეკლამა", "ტურების დაჯავშნის საკომისიო", "პარტნიორული ბმულები", "გიდების პოპულარიზაცია", "დამატებითი ფუნქციები ბიზნესებისთვის"],
    note: "ნებისმიერი საკომისიო წინასწარ განსაზღვრული და გამჭვირვალედ ნაჩვენებია.",
  },
]

const PHASES = [
  { label: "I ეტაპი", items: ["მთავარი გვერდი", "რეგიონების კატალოგი", "ტურისტული ადგილები", "სასტუმროები", "რესტორნები", "ტრანსპორტი", "რუკა", "რეალური ფასები", "ძიება და ფილტრაცია", "საკონტაქტო გვერდი"] },
  { label: "II ეტაპი", items: ["ტურები და გიდები", "აქტივობები", "ფასების შედარება", "ბიუჯეტის კალკულატორი", "ბიზნესის პროფილები", "ადმინისტრატორის პანელი", "მონაცემების განახლება"] },
  { label: "III ეტაპი", items: ["დაჯავშნა", "ონლაინ გადახდები", "პირადი კაბინეტი", "შეფასებები", "მრავალენოვანი კონტენტი", "AI ასისტენტი", "პერსონალიზებული მარშრუტები"] },
]

// ——————————————————————————————————————————————————
// PIECES
// ——————————————————————————————————————————————————

function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-6">
      <p className="text-[#1677FF] text-sm font-semibold uppercase tracking-wider mb-2">{eyebrow}</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">{title}</h2>
      {text && <p className="text-[#64748B] mt-2 max-w-3xl">{text}</p>}
    </div>
  )
}

function Chip({ label }: { label: string }) {
  return <span className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-[#F5F7FA] text-[#334155] border border-gray-100">{label}</span>
}

function ServiceCard({ service, open, onToggle }: { service: Service; open: boolean; onToggle: () => void }) {
  const Icon = service.icon
  const count = service.groups.reduce((n, g) => n + g.items.length, 0)
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <button onClick={onToggle} className="w-full flex items-center gap-4 p-5 text-left cursor-pointer hover:bg-[#F8FAFC] transition-colors">
        <div className="w-11 h-11 rounded-xl bg-[#1677FF]/10 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-[#1677FF]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-[#111827]">{service.title}</p>
          <p className="text-[#94A3B8] text-sm">{count} კატეგორია</p>
        </div>
        <ChevronDown className={`w-5 h-5 text-[#94A3B8] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-6 space-y-5 border-t border-gray-100 pt-5">
          {service.groups.map((g, i) => (
            <div key={i}>
              {g.title && <p className="text-sm font-semibold text-[#111827] mb-2">{g.title}</p>}
              <div className="flex flex-wrap gap-2">{g.items.map(it => <Chip key={it} label={it} />)}</div>
            </div>
          ))}
          {service.fields && (
            <div>
              <p className="text-sm font-semibold text-[#111827] mb-2">{service.fieldsTitle}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                {service.fields.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#475569]">
                    <ListChecks className="w-4 h-4 text-[#1677FF] mt-0.5 shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {service.note && <p className="text-sm text-[#0B1F3A] bg-[#1677FF]/5 border border-[#1677FF]/15 rounded-xl px-4 py-3">{service.note}</p>}
        </div>
      )}
    </div>
  )
}

function NumField({ label, value, onChange, suffix }: { label: string; value: number; onChange: (v: number) => void; suffix?: string }) {
  return (
    <label className="block">
      <span className="text-sm text-[#94A3B8] mb-1.5 block">{label}</span>
      <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2.5 focus-within:border-[#1677FF]">
        <input
          type="number" min={0} value={Number.isNaN(value) ? "" : value}
          onChange={e => onChange(Math.max(0, parseFloat(e.target.value) || 0))}
          className="flex-1 min-w-0 text-sm outline-none text-[#111827] bg-transparent"
        />
        {suffix && <span className="text-xs text-[#94A3B8] ml-2 shrink-0">{suffix}</span>}
      </div>
    </label>
  )
}

// Every price here is entered by the user — nothing is pre-filled as if it were real data.
function BudgetCalculator() {
  const [v, setV] = useState({ days: 0, people: 0, stay: 0, food: 0, transport: 0, activities: 0, extra: 0 })
  const set = (k: keyof typeof v) => (n: number) => setV(p => ({ ...p, [k]: n }))

  const r = useMemo(() => {
    const nights = Math.max(0, v.days - 1)
    const stay = v.stay * nights
    const food = v.food * v.people * v.days
    const transport = v.transport
    const activities = v.activities * v.people
    const extra = v.extra
    const total = stay + food + transport + activities + extra
    const missing = [v.days, v.people, v.stay, v.food].some(n => n === 0)
    return { nights, stay, food, transport, activities, extra, total, perPerson: v.people ? total / v.people : 0, missing }
  }, [v])

  const fmt = (n: number) => `₾${Math.round(n).toLocaleString("en-US")}`

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <div className="lg:col-span-3 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <NumField label="დღეების რაოდენობა" value={v.days} onChange={set("days")} suffix="დღე" />
          <NumField label="ადამიანების რაოდენობა" value={v.people} onChange={set("people")} suffix="ადამ." />
          <NumField label="საცხოვრებელი — ღამის ფასი" value={v.stay} onChange={set("stay")} suffix="₾ / ღამე" />
          <NumField label="კვება — საშუალო დღიური ხარჯი" value={v.food} onChange={set("food")} suffix="₾ / ადამ." />
          <NumField label="ტრანსპორტი — ჯამში" value={v.transport} onChange={set("transport")} suffix="₾" />
          <NumField label="აქტივობები — ერთ ადამიანზე" value={v.activities} onChange={set("activities")} suffix="₾ / ადამ." />
          <div className="sm:col-span-2">
            <NumField label="დამატებითი ხარჯები" value={v.extra} onChange={set("extra")} suffix="₾" />
          </div>
        </div>
        <p className="text-xs text-[#94A3B8] mt-4">შეიყვანეთ რეალური ფასები, რომლებიც კონკრეტული მომსახურების მიმწოდებლისგან მიიღეთ.</p>
      </div>
      <div className="lg:col-span-2 bg-[#0B1F3A] text-white rounded-2xl p-6">
        <p className="font-bold mb-4">სავარაუდო ბიუჯეტი</p>
        {[
          [`საცხოვრებელი (${r.nights} ღამე)`, r.stay],
          ["კვება", r.food],
          ["ტრანსპორტი", r.transport],
          ["აქტივობები", r.activities],
          ["დამატებითი", r.extra],
        ].map(([label, n]) => (
          <div key={label as string} className="flex justify-between py-2 border-b border-white/10 text-sm">
            <span className="text-white/70">{label}</span><span className="font-semibold">{fmt(n as number)}</span>
          </div>
        ))}
        <div className="flex justify-between pt-4 text-sm">
          <span className="text-white/70">ერთ ადამიანზე</span><span className="font-semibold">{fmt(r.perPerson)}</span>
        </div>
        <div className="flex justify-between items-end pt-2">
          <span className="font-bold">სულ</span><span className="text-3xl font-extrabold text-[#60A5FA]">{fmt(r.total)}</span>
        </div>
        <p className={`mt-4 text-xs rounded-lg px-3 py-2 ${r.missing ? "bg-amber-400/15 text-amber-200" : "bg-white/10 text-white/70"}`}>
          {r.missing ? "მონაცემები არასრულია — შედეგი სავარაუდოა." : "შედეგი სავარაუდოა და ეყრდნობა თქვენ მიერ შეყვანილ ფასებს."}
        </p>
      </div>
    </div>
  )
}

// ——————————————————————————————————————————————————
// MAIN
// ——————————————————————————————————————————————————

export default function TravelWordOverview() {
  const [openService, setOpenService] = useState<string | null>("stay")
  const [region, setRegion] = useState(REGIONS[0].name)
  const activeRegion = REGIONS.find(r => r.name === region) ?? REGIONS[0]

  return (
    <div className="space-y-16 mt-16">
      {/* Intro */}
      <section className="rounded-3xl bg-gradient-to-br from-[#0B1F3A] to-[#1677FF] text-white p-8 sm:p-12">
        <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-3">TravelWord</p>
        <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight max-w-3xl">საქართველოს ტურისტული სერვისების სრული პლატფორმა</h2>
        <p className="text-white/80 text-lg mt-4 max-w-3xl">
          ყველა რეგიონის ტურისტული მომსახურება ერთ სივრცეში — იპოვეთ საჭირო სერვისი, შეადარეთ ფასები, შეამოწმეთ მდებარეობა, გაეცანით პირობებს და დაუკავშირდით მიმწოდებელს.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
          {[
            [String(REGIONS.length), "რეგიონი"],
            [String(REGIONS.reduce((n, r) => n + r.places.length, 0)) + "+", "მუნიციპალიტეტი და ადგილი"],
            [String(SERVICES.length), "სერვისის მიმართულება"],
            ["2 → 6", "ენა"],
          ].map(([n, l]) => (
            <div key={l} className="bg-white/10 rounded-2xl p-4">
              <p className="text-2xl font-extrabold">{n}</p>
              <p className="text-white/70 text-sm">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audience */}
      <section>
        <SectionHead eyebrow="ვისთვისაა" title="პლატფორმის მომხმარებლები" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {AUDIENCE.map(a => (
            <div key={a} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <Users className="w-4 h-4 text-[#1677FF] shrink-0" />
              <span className="text-sm text-[#111827]">{a}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Regions */}
      <section>
        <SectionHead eyebrow="მიმართულებები" title="საქართველოს რეგიონები" text="ჩამონათვალი ივსება ოფიციალური ადმინისტრაციული დაყოფის მიხედვით — თითოეულ რეგიონს დაემატება სოფლები, კურორტები, დასახლებები და ტურისტული ადგილები." />
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
          {REGIONS.map(r => (
            <button
              key={r.name} onClick={() => setRegion(r.name)}
              className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium border cursor-pointer transition-colors ${region === r.name ? "bg-[#1677FF] text-white border-[#1677FF]" : "bg-white border-gray-200 text-[#64748B] hover:text-[#111827]"}`}
            >{r.name}</button>
          ))}
        </div>
        <div className="mt-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <p className="font-bold text-[#111827] mb-4">{activeRegion.name} <span className="text-[#94A3B8] font-normal text-sm">· {activeRegion.places.length} ადგილი</span></p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {activeRegion.places.map(p => (
              <div key={p} className="flex items-center gap-2 text-sm text-[#334155] bg-[#F5F7FA] rounded-lg px-3 py-2">
                <MapPin className="w-3.5 h-3.5 text-[#1677FF] shrink-0" />{p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <SectionHead eyebrow="კატალოგი" title="მომსახურებების კატეგორიები" text="თითოეულ კატეგორიას აქვს საკუთარი გვერდი, ძიება, ფილტრაცია და დეტალური ინფორმაცია." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          {SERVICES.map(s => (
            <ServiceCard key={s.id} service={s} open={openService === s.id} onToggle={() => setOpenService(o => (o === s.id ? null : s.id))} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section>
        <SectionHead eyebrow="ფუნქციები" title="პლატფორმის შესაძლებლობები" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ icon: Icon, title, items, note }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-[#1677FF]/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-[#1677FF]" />
              </div>
              <h3 className="font-bold text-[#111827] mb-3">{title}</h3>
              <ul className="space-y-1.5 flex-1">
                {items.map(i => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#475569]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] mt-2 shrink-0" />{i}
                  </li>
                ))}
              </ul>
              {note && <p className="text-xs text-[#64748B] mt-4 pt-4 border-t border-gray-100">{note}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Budget calculator */}
      <section>
        <div className="flex items-center gap-3 mb-2">
          <Calculator className="w-5 h-5 text-[#1677FF]" />
          <p className="text-[#1677FF] text-sm font-semibold uppercase tracking-wider">ბიუჯეტი</p>
        </div>
        <SectionHead eyebrow="" title="მოგზაურობის ბიუჯეტის კალკულატორი" text="დაითვალეთ საცხოვრებლის, კვების, ტრანსპორტისა და აქტივობების ჯამური და ერთ ადამიანზე სავარაუდო ხარჯი." />
        <BudgetCalculator />
      </section>

      {/* Price trust */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <BadgeCheck className="w-6 h-6 text-[#16A34A]" />
            <h3 className="text-xl font-bold text-[#111827]">ფასების სანდოობა</h3>
          </div>
          <p className="text-sm text-[#64748B] mb-4">ყველა ფასს ახლავს ინფორმაცია:</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["ვინ გამოაქვეყნა", "როდის განახლდა", "რა მომსახურებას ეხება", "რა ვალუტაშია", "შედის თუ არა გადასახადები", "სეზონური შეზღუდვები"].map(i => <Chip key={i} label={i} />)}
          </div>
          <p className="text-sm text-[#64748B] mb-2">ფასის წყარო:</p>
          <ul className="space-y-1.5 text-sm text-[#475569]">
            {["ბიზნესის მფლობელი", "ოფიციალური ფასების სია", "ოფიციალური დაჯავშნის სისტემა", "მომსახურების პროვაიდერის API"].map(i => (
              <li key={i} className="flex items-center gap-2"><ListChecks className="w-4 h-4 text-[#16A34A]" />{i}</li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 shrink-0">ფასი დასაზუსტებელია</span>
            <span className="text-sm text-amber-900">ასე ჩანს ფასი, რომელიც ვერ დასტურდება.</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <Languages className="w-6 h-6 text-[#1677FF]" />
            <h3 className="text-xl font-bold text-[#111827]">ენები</h3>
          </div>
          <p className="text-sm text-[#64748B] mb-2">საწყისი ეტაპი</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {["ქართული", "ინგლისური"].map(l => <span key={l} className="text-sm px-3 py-1.5 rounded-full bg-[#1677FF] text-white">{l}</span>)}
          </div>
          <p className="text-sm text-[#64748B] mb-2">შემდეგი ეტაპი</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {["რუსული", "თურქული", "არაბული", "გერმანული"].map(l => <Chip key={l} label={l} />)}
          </div>
          <p className="text-sm text-[#475569]">ენის შეცვლისას ინტერფეისი ითარგმნება, ხოლო ფასები, მისამართები და ბიზნესის სახელები უცვლელი რჩება.</p>
        </div>
      </section>

      {/* Roadmap */}
      <section>
        <SectionHead eyebrow="გეგმა" title="შექმნის პრიორიტეტები" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PHASES.map((p, i) => (
            <div key={p.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white ${i === 0 ? "bg-[#1677FF]" : i === 1 ? "bg-[#0B1F3A]" : "bg-[#94A3B8]"}`}>{i + 1}</div>
                <p className="font-bold text-[#111827]">{p.label}</p>
              </div>
              <ul className="space-y-1.5">
                {p.items.map(it => (
                  <li key={it} className="flex items-start gap-2 text-sm text-[#475569]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] mt-2 shrink-0" />{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Goal */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-6 h-6 text-[#1677FF]" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">მთავარი პრინციპი</h3>
        </div>
        <p className="text-[#475569] max-w-4xl">
          მომხმარებელს უნდა შეეძლოს საქართველოს სხვადასხვა რეგიონში რეალური მომსახურებებისა და ფასების მოძიება და შედარება. პლატფორმა არ იყენებს გამოგონილ ბიზნესებს, ყალბ შეფასებებს ან არარეალურ ფასებს — დემო მონაცემები ყოველთვის ცალკეა მონიშნული.
        </p>
      </section>
    </div>
  )
}
