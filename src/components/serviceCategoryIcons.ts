import {
  BedDouble, Building2, Bus, Car, Dumbbell, GraduationCap, Hospital, Landmark, Laptop, Mail, MapPin,
  Mountain, Pill, Scissors, Shirt, ShoppingBasket, Siren, Sofa, Stethoscope, UtensilsCrossed, Wrench, type LucideIcon,
} from "lucide-react"

/** icon per SERVICE_DIRECTORY category id (see data/regionServices.ts) */
const CATEGORY_ICON: Record<string, LucideIcon> = {
  education: GraduationCap, pharmacy: Pill, hospitals: Hospital, diagnostics: Stethoscope, groceries: ShoppingBasket,
  clothing: Shirt, home: Sofa, electronics: Laptop, finance: Landmark, transport: Bus, auto: Car, dining: UtensilsCrossed,
  lodging: BedDouble, tourism: Mountain, beauty: Scissors, sport: Dumbbell, public: Building2, safety: Siren,
  services: Wrench, communication: Mail,
}

export function serviceCategoryIcon(id: string): LucideIcon {
  return CATEGORY_ICON[id] ?? MapPin
}
