import type { RegionId } from "./regions"

// The region guide (RegionGuide): per region its administrative centre, towns, natural sights and travel routes, and
// the frame of its map. The routes for Mtskheta-Mtianeti, Kakheti, Upper Svaneti and Samtskhe are the Discover
// Georgia template's; the rest follow the same idea, stops in their real order along the road. Coordinates are
// approximate (a map frame and one marker, not navigation).

export interface GuideRoute {
  title: string
  days: string
  stops: string[]
}

export interface RegionGuide {
  center: string
  /** administrative centre, for the map's marker */
  lat: number
  lon: number
  /** the map's frame: west, south, east, north */
  bbox: [number, number, number, number]
  towns: string[]
  nature: string[]
  routes: GuideRoute[]
}

export const REGION_GUIDES: Partial<Record<RegionId, RegionGuide>> = {
  tbilisi: {
    center: "თბილისი", lat: 41.7151, lon: 44.8271, bbox: [44.65, 41.62, 45.05, 41.85],
    towns: ["ძველი თბილისი", "აბანოთუბანი", "სოლოლაკი", "მთაწმინდა", "ვაკე"],
    nature: ["მთაწმინდის პარკი", "თბილისის ბოტანიკური ბაღი", "კუს ტბა", "თბილისის ზღვა"],
    routes: [
      { title: "ძველი თბილისი ფეხით", days: "1 დღე", stops: ["მეტეხი", "ნარიყალა", "აბანოთუბანი", "სიონი", "მშვიდობის ხიდი", "რუსთაველის გამზირი"] },
    ],
  },
  adjara: {
    center: "ბათუმი", lat: 41.6168, lon: 41.6367, bbox: [41.5, 41.45, 42.6, 41.95],
    towns: ["ბათუმი", "ქობულეთი", "ქედა", "შუახევი", "ხულო"],
    nature: ["მტირალას ეროვნული პარკი", "მაჭახელას ეროვნული პარკი", "ბათუმის ბოტანიკური ბაღი", "მახუნცეთის ჩანჩქერი"],
    routes: [
      { title: "ზღვისპირა აჭარა", days: "1 დღე", stops: ["სარფი", "გონიო", "ბათუმი", "მწვანე კონცხი", "ციხისძირი", "ქობულეთი"] },
      { title: "მთიანი აჭარა", days: "2 დღე", stops: ["ბათუმი", "მახუნცეთი", "ქედა", "შუახევი", "ხულო"] },
    ],
  },
  kazbegi: {
    center: "მცხეთა", lat: 41.8452, lon: 44.7188, bbox: [44.3, 41.8, 45.5, 42.8],
    towns: ["მცხეთა", "დუშეთი", "თიანეთი", "სტეფანწმინდა", "გუდაური"],
    nature: ["მყინვარწვერი (5 054 მ)", "გველეთის ჩანჩქერი", "ჯუთა", "ტრუსოს ხეობა", "ჟინვალის წყალსაცავი"],
    routes: [
      { title: "სამხედრო-ქართული გზა", days: "1–2 დღე", stops: ["თბილისი", "მცხეთა", "ანანური", "გუდაური", "სტეფანწმინდა", "გერგეტი"] },
      { title: "ხევსურეთი", days: "2–3 დღე", stops: ["ჟინვალი", "ბარისახო", "შატილი", "მუცო"] },
    ],
  },
  imereti: {
    center: "ქუთაისი", lat: 42.2662, lon: 42.718, bbox: [42.35, 41.95, 43.65, 42.55],
    towns: ["ქუთაისი", "წყალტუბო", "ჭიათურა", "ზესტაფონი", "საჩხერე"],
    nature: ["პრომეთეს მღვიმე", "საწურბლიას მღვიმე", "ოკაცეს კანიონი", "კინჩხას ჩანჩქერი"],
    routes: [
      { title: "ქუთაისი და მღვიმეები", days: "1–2 დღე", stops: ["ქუთაისი", "ბაგრატი", "გელათი", "მოწამეთა", "პრომეთეს მღვიმე"] },
    ],
  },
  kakheti: {
    center: "თელავი", lat: 41.9198, lon: 45.4731, bbox: [45.0, 41.1, 46.75, 42.6],
    towns: ["თელავი", "სიღნაღი", "ყვარელი", "გურჯაანი", "ლაგოდეხი", "ახმეტა"],
    nature: ["ალაზნის ველი", "ლაგოდეხის ნაკრძალი", "თუშეთის ეროვნული პარკი", "ვაშლოვანის ეროვნული პარკი"],
    routes: [
      { title: "ღვინის მარშრუტი კახეთში", days: "2 დღე", stops: ["თელავი", "ალავერდი", "იყალთო", "გრემი", "ყვარელი", "სიღნაღი"] },
      { title: "თუშეთი", days: "3 დღე", stops: ["ახმეტა", "აბანოს უღელტეხილი", "ომალო", "კესელო", "დართლო"] },
    ],
  },
  svaneti: {
    center: "ზუგდიდი", lat: 42.5088, lon: 41.8709, bbox: [41.55, 42.1, 43.2, 43.25],
    towns: ["ზუგდიდი", "მესტია", "მარტვილი", "ფოთი", "სენაკი"],
    nature: ["მარტვილის კანიონი", "შხარა", "უშბა", "ჭალაადის მყინვარი", "კოლხეთის ეროვნული პარკი"],
    routes: [
      { title: "ზემო სვანეთი", days: "2–3 დღე", stops: ["ზუგდიდი", "მესტია", "უშგული", "ჩაჟაში"] },
      { title: "სამეგრელოს კანიონები", days: "1 დღე", stops: ["მარტვილის კანიონი", "მარტვილის მონასტერი", "ბალდის კანიონი", "ნოქალაქევი"] },
    ],
  },
  guria: {
    center: "ოზურგეთი", lat: 41.9244, lon: 42.0068, bbox: [41.75, 41.75, 42.6, 42.15],
    towns: ["ოზურგეთი", "ლანჩხუთი", "ჩოხატაური", "ურეკი", "ბახმარო"],
    nature: ["ურეკის მაგნიტური ქვიშა", "ბახმარო", "ჩაის პლანტაციები", "ნაბეღლავის წყარო"],
    routes: [
      { title: "ზღვიდან მთამდე", days: "2 დღე", stops: ["ურეკი", "ოზურგეთი", "ჩოხატაური", "ბახმარო"] },
    ],
  },
  samtskhe: {
    center: "ახალციხე", lat: 41.639, lon: 42.9826, bbox: [42.5, 41.1, 44.1, 41.95],
    towns: ["ახალციხე", "ბორჯომი", "ბაკურიანი", "ახალქალაქი", "ასპინძა"],
    nature: ["ბორჯომ-ხარაგაულის ეროვნული პარკი", "ფარავნის ტბა", "ჯავახეთის ზეგანი", "ბორჯომის მინერალური წყაროები"],
    routes: [
      { title: "სამცხე — ვარძია და ბორჯომი", days: "2 დღე", stops: ["ბორჯომი", "ახალციხე", "ხერთვისი", "ვარძია"] },
    ],
  },
  racha: {
    center: "ამბროლაური", lat: 42.5203, lon: 43.15, bbox: [42.6, 42.35, 44.0, 42.85],
    towns: ["ამბროლაური", "ონი", "ცაგერი", "ლენტეხი"],
    nature: ["შაორის ტბა", "შოვი", "ღების ხეობა", "ხვანჭკარის ვენახები"],
    routes: [
      { title: "მთიანი რაჭა", days: "2 დღე", stops: ["ქუთაისი", "ნიკორწმინდა", "ამბროლაური", "ონი", "შოვი"] },
    ],
  },
  "shida-kartli": {
    center: "გორი", lat: 41.9842, lon: 44.1158, bbox: [43.5, 41.85, 44.6, 42.4],
    towns: ["გორი", "ხაშური", "კასპი", "ქარელი"],
    nature: ["ლიხის ქედი", "ატენის ხეობა", "მტკვრის ველი"],
    routes: [
      { title: "ქართლის ძეგლები", days: "1 დღე", stops: ["მცხეთა", "სამთავისი", "გორი", "უფლისციხე", "ატენის სიონი"] },
    ],
  },
  "kvemo-kartli": {
    center: "რუსთავი", lat: 41.5495, lon: 44.9934, bbox: [43.8, 41.1, 45.4, 41.75],
    towns: ["რუსთავი", "მარნეული", "ბოლნისი", "დმანისი", "თეთრიწყარო", "წალკა"],
    nature: ["ალგეთის ეროვნული პარკი", "წალკის წყალსაცავი", "დაშბაშის კანიონი"],
    routes: [
      { title: "სამხრეთის ძეგლები", days: "1 დღე", stops: ["თბილისი", "ბოლნისის სიონი", "დმანისი", "დაშბაშის კანიონი"] },
    ],
  },
}

/** OpenStreetMap's embed for a region's frame, with a marker on its centre */
export const osmEmbed = (g: RegionGuide) =>
  `https://www.openstreetmap.org/export/embed.html?bbox=${g.bbox.join("%2C")}&layer=mapnik&marker=${g.lat}%2C${g.lon}`
export const osmLink = (g: RegionGuide) =>
  `https://www.openstreetmap.org/?mlat=${g.lat}&mlon=${g.lon}#map=9/${g.lat}/${g.lon}`
