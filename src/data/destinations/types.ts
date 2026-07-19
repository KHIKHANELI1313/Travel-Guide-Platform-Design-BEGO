export type BudgetType = "budget" | "standard" | "luxury"

export type HotelPrices = {
  budget: number
  standard: number
  luxury: number
}

export type RestaurantPrices = {
  breakfast: number
  lunch: number
  dinner: number
}

export type TransportPrices = {
  airportTransfer: number
  taxi: number
  carRental: number
}

export type PricedService = {
  id: string
  name: string
  price: number
  image: string
  description: string
}

export type CityPricing = {
  name: string
  image: string
  tagline: string
  hotels: HotelPrices
  restaurants: RestaurantPrices
  transport: TransportPrices
  activities: PricedService[]
  extras: PricedService[]
}

export type RegionPricing = {
  name: string
  cities: Record<string, CityPricing>
}

export type CountryPricing = {
  name: string
  currency: "GEL"
  /** GEL → USD multiply factor */
  usdRate: number
  regions: Record<string, RegionPricing>
}

export type DestinationCatalog = Record<string, CountryPricing>
