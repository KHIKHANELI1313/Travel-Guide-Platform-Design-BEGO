export type ServiceUnit = "night" | "person" | "day" | "booking" | "info"

export type TourismService = {
  id: string
  name: string
  price: number
  unit: ServiceUnit
}

export type TourismCategory = {
  id: string
  title: string
  items: TourismService[]
}

/** Full tourist services catalog (Georgian). User picks what they need. */
export const TOURISM_CATEGORIES: TourismCategory[] = [
  {
    id: "accommodation",
    title: "1. განთავსება",
    items: [
      { id: "acc-hotel", name: "სასტუმროები", price: 280, unit: "night" },
      { id: "acc-apartment", name: "აპარტამენტები", price: 220, unit: "night" },
      { id: "acc-guesthouse", name: "საოჯახო სასტუმროები", price: 150, unit: "night" },
      { id: "acc-hostel", name: "ჰოსტელები", price: 60, unit: "night" },
      { id: "acc-villa", name: "ვილები", price: 450, unit: "night" },
      { id: "acc-cottage", name: "მთის კოტეჯები", price: 320, unit: "night" },
      { id: "acc-resort", name: "ლუქს კურორტები", price: 650, unit: "night" },
    ],
  },
  {
    id: "food",
    title: "2. კვება და რესტორნები",
    items: [
      { id: "food-georgian", name: "ქართული რესტორნები", price: 70, unit: "person" },
      { id: "food-local", name: "ადგილობრივი სამზარეულო", price: 55, unit: "person" },
      { id: "food-seafood", name: "ზღვის პროდუქტების რესტორნები", price: 85, unit: "person" },
      { id: "food-cafe", name: "კაფეები", price: 30, unit: "person" },
      { id: "food-bar", name: "ბარები", price: 40, unit: "person" },
      { id: "food-wine", name: "ღვინის დეგუსტაცია", price: 65, unit: "person" },
      { id: "food-culinary", name: "კულინარიული ტურები", price: 120, unit: "person" },
    ],
  },
  {
    id: "transport",
    title: "3. ტრანსპორტი",
    items: [
      { id: "tr-airport", name: "აეროპორტის ტრანსფერი", price: 60, unit: "booking" },
      { id: "tr-taxi", name: "ტაქსი", price: 15, unit: "day" },
      { id: "tr-car", name: "მანქანის ქირაობა", price: 120, unit: "day" },
      { id: "tr-scooter", name: "სკუტერის ქირაობა", price: 45, unit: "day" },
      { id: "tr-bike", name: "ველოსიპედის ქირაობა", price: 25, unit: "day" },
      { id: "tr-driver", name: "პირადი მძღოლი", price: 220, unit: "day" },
      { id: "tr-public", name: "საზოგადოებრივი ტრანსპორტის ინფორმაცია", price: 0, unit: "info" },
    ],
  },
  {
    id: "tours",
    title: "4. ტურები და გამოცდილებები",
    items: [
      { id: "tour-city", name: "ქალაქის ტურები", price: 55, unit: "person" },
      { id: "tour-history", name: "ისტორიული ტურები", price: 60, unit: "person" },
      { id: "tour-culture", name: "კულტურული ტურები", price: 65, unit: "person" },
      { id: "tour-mountain", name: "მთის ტურები", price: 95, unit: "person" },
      { id: "tour-hike", name: "ლაშქრობები", price: 70, unit: "person" },
      { id: "tour-adventure", name: "სათავგადასავლო ტურები", price: 140, unit: "person" },
      { id: "tour-wine", name: "ღვინის ტურები", price: 110, unit: "person" },
      { id: "tour-boat", name: "ნავით ტურები", price: 90, unit: "person" },
      { id: "tour-photo", name: "ფოტოგრაფიის ტურები", price: 130, unit: "person" },
    ],
  },
  {
    id: "sights",
    title: "5. ღირსშესანიშნაობები",
    items: [
      { id: "sight-museum", name: "მუზეუმები", price: 30, unit: "person" },
      { id: "sight-historic", name: "ისტორიული ადგილები", price: 25, unit: "person" },
      { id: "sight-fortress", name: "ციხეები", price: 20, unit: "person" },
      { id: "sight-monument", name: "ძეგლები", price: 0, unit: "info" },
      { id: "sight-park", name: "ეროვნული პარკები", price: 35, unit: "person" },
      { id: "sight-waterfall", name: "ჩანჩქერები", price: 40, unit: "person" },
      { id: "sight-beach", name: "პლაჟები", price: 15, unit: "day" },
      { id: "sight-viewpoint", name: "ხედის წერტილები", price: 20, unit: "person" },
    ],
  },
  {
    id: "activities",
    title: "6. აქტივობები",
    items: [
      { id: "act-hike", name: "ლაშქრობა", price: 50, unit: "person" },
      { id: "act-raft", name: "რაფტინგი", price: 120, unit: "person" },
      { id: "act-horse", name: "ცხენით გასეირნება", price: 90, unit: "person" },
      { id: "act-ski", name: "სათხილამურო აქტივობები", price: 150, unit: "day" },
      { id: "act-dive", name: "დაივინგი", price: 180, unit: "person" },
      { id: "act-fish", name: "თევზაობა", price: 70, unit: "person" },
      { id: "act-para", name: "პარაპლანი", price: 250, unit: "person" },
      { id: "act-camp", name: "კემპინგი", price: 80, unit: "day" },
    ],
  },
  {
    id: "entertainment",
    title: "7. გართობა",
    items: [
      { id: "ent-concert", name: "კონცერტები", price: 60, unit: "person" },
      { id: "ent-festival", name: "ფესტივალები", price: 45, unit: "person" },
      { id: "ent-club", name: "ღამის კლუბები", price: 40, unit: "person" },
      { id: "ent-show", name: "შოუები", price: 55, unit: "person" },
      { id: "ent-family", name: "საოჯახო გასართობები", price: 50, unit: "person" },
    ],
  },
  {
    id: "shopping",
    title: "8. შოპინგი",
    items: [
      { id: "shop-souvenir", name: "სუვენირების მაღაზიები", price: 40, unit: "booking" },
      { id: "shop-market", name: "ადგილობრივი ბაზრები", price: 30, unit: "booking" },
      { id: "shop-mall", name: "სავაჭრო ცენტრები", price: 0, unit: "info" },
      { id: "shop-craft", name: "ხელნაკეთი ნივთები", price: 50, unit: "booking" },
    ],
  },
  {
    id: "assistance",
    title: "9. ტურისტული დახმარება",
    items: [
      { id: "help-guide", name: "ტურისტული გიდი", price: 150, unit: "day" },
      { id: "help-translator", name: "თარჯიმანი", price: 130, unit: "day" },
      { id: "help-insurance", name: "სამოგზაურო დაზღვევა", price: 45, unit: "person" },
      { id: "help-emergency", name: "გადაუდებელი დახმარება", price: 0, unit: "info" },
      { id: "help-medical", name: "სამედიცინო დახმარება", price: 0, unit: "info" },
      { id: "help-pharmacy", name: "აფთიაქები", price: 0, unit: "info" },
      { id: "help-embassy", name: "საელჩოების ინფორმაცია", price: 0, unit: "info" },
    ],
  },
  {
    id: "premium",
    title: "10. პრემიუმ სერვისები",
    items: [
      { id: "prem-vip", name: "VIP ტურები", price: 350, unit: "person" },
      { id: "prem-guide", name: "პირადი გიდი", price: 200, unit: "day" },
      { id: "prem-luxcar", name: "ლუქს ტრანსპორტი", price: 280, unit: "day" },
      { id: "prem-yacht", name: "იახტის დაქირავება", price: 900, unit: "booking" },
      { id: "prem-heli", name: "ვერტმფრენის ტურები", price: 1200, unit: "booking" },
      { id: "prem-chef", name: "პირადი მზარეული", price: 400, unit: "day" },
      { id: "prem-photo", name: "პროფესიონალი ფოტოგრაფი", price: 220, unit: "booking" },
    ],
  },
  {
    id: "planning",
    title: "11. მოგზაურობის დაგეგმვა",
    items: [
      { id: "plan-ai", name: "AI მოგზაურობის დამგეგმავი", price: 25, unit: "booking" },
      { id: "plan-route", name: "პერსონალური მარშრუტი", price: 40, unit: "booking" },
      { id: "plan-budget", name: "ბიუჯეტის კალკულატორი", price: 0, unit: "info" },
      { id: "plan-weather", name: "ამინდის ინფორმაცია", price: 0, unit: "info" },
      { id: "plan-map", name: "ინტერაქტიული რუკა", price: 0, unit: "info" },
      { id: "plan-offline", name: "ოფლაინ გზამკვლევი", price: 15, unit: "booking" },
    ],
  },
]

export function getAllTourismServices(): TourismService[] {
  return TOURISM_CATEGORIES.flatMap((c) => c.items)
}

export function findTourismService(id: string): TourismService | undefined {
  return getAllTourismServices().find((s) => s.id === id)
}

export function unitLabel(unit: ServiceUnit): string {
  switch (unit) {
    case "night":
      return "/ ღამე"
    case "person":
      return "/ ადამიანი"
    case "day":
      return "/ დღე"
    case "booking":
      return "/ ჯავშანი"
    case "info":
      return "ინფო"
  }
}
