import { useState, useEffect, useCallback, useMemo, useRef } from "react"
import {
  Globe, Search, MapPin, Star, Heart, ChevronRight, Menu, X,
  Users, Plane, Utensils, Bus, Shield, Map,
  Mountain, Building2, Waves, Trees, Diamond, BookOpen,
  Calendar, DollarSign, Clock, Phone, AlertTriangle, CheckCircle,
  Send, Filter, ArrowRight, Play,
  Compass, Zap,
  MessageSquare, Eye,
  BarChart3, Settings, LogOut, Upload,
  Navigation, Train, Car, Bike, Ship, CreditCard,
  Sun, Languages,
  BadgeCheck, Flag, Globe2
} from "lucide-react"
import HomeGlobe from "./components/HomeGlobe"
import CityPicker from "./components/CityPicker"
import CatalogCityPicker from "./components/CatalogCityPicker"
import RegionPicker from "./components/RegionPicker"
import DateRangeSearch from "./components/date-range/DateRangeSearch"
import TripPricingPanel from "./components/pricing/TripPricingPanel"
import CountryHistory from "./components/CountryHistory"
import CountryCulture from "./components/CountryCulture"
import { hasPricingCatalog } from "./data/destinations/catalog"
import {
  COUNTRIES,
  findCountry,
  getCountryOrDefault,
  searchCountries,
  type Country,
} from "./data/countries"

// Social icon placeholders (lucide v1.x uses different names)
const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)
const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)
const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
)
const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
)

type Page =
  | "home"
  | "countries"
  | "country-detail"
  | "hotels"
  | "restaurants"
  | "transport"
  | "culture"
  | "safety"
  | "map"
  | "trip-planner"
  | "ai-assistant"
  | "gallery"
  | "profile"
  | "admin"

type NavigateFn = (p: Page, country?: string) => void

const HERO_IMAGES = {
  home: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1800&h=900&fit=crop&auto=format",
  countries: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&h=600&fit=crop&auto=format",
  japan: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1800&h=700&fit=crop&auto=format",
  hotels: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1800&h=600&fit=crop&auto=format",
  restaurants: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&h=600&fit=crop&auto=format",
  transport: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1800&h=600&fit=crop&auto=format",
  culture: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1800&h=600&fit=crop&auto=format",
  safety: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=1800&h=600&fit=crop&auto=format",
  gallery: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&h=600&fit=crop&auto=format",
}

const FEATURED_COUNTRY_NAMES = [
  "Japan",
  "Italy",
  "France",
  "Spain",
  "Thailand",
  "Greece",
  "United States",
  "Australia",
  "Brazil",
  "Morocco",
  "Turkey",
  "Portugal",
  "Georgia",
  "United Kingdom",
  "Germany",
  "Egypt",
]

const HOTELS = [
  { name: "Park Hyatt Tokyo", location: "Shinjuku, Tokyo", stars: 5, rating: 4.9, price: 580, image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&h=400&fit=crop&auto=format", facilities: ["WiFi", "Pool", "SPA"], reviews: 2847 },
  { name: "Hotel de Crillon", location: "Paris, France", stars: 5, rating: 4.9, price: 920, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&auto=format", facilities: ["WiFi", "Restaurant", "Bar"], reviews: 1923 },
  { name: "Mandarin Oriental Rome", location: "Rome, Italy", stars: 5, rating: 4.8, price: 750, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop&auto=format", facilities: ["WiFi", "Pool", "Gym"], reviews: 3102 },
  { name: "Aman Tokyo", location: "Marunouchi, Tokyo", stars: 5, rating: 4.9, price: 1100, image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=600&h=400&fit=crop&auto=format", facilities: ["Pool", "SPA", "Restaurant"], reviews: 892 },
  { name: "Six Senses Kaplankaya", location: "Bodrum, Turkey", stars: 5, rating: 4.8, price: 680, image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&h=400&fit=crop&auto=format", facilities: ["Pool", "Beach", "SPA"], reviews: 1456 },
  { name: "Rosewood Barcelona", location: "Barcelona, Spain", stars: 5, rating: 4.8, price: 640, image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600&h=400&fit=crop&auto=format", facilities: ["WiFi", "Pool", "Restaurant"], reviews: 2103 },
]

const BLOG_POSTS = [
  { title: "10 Unmissable Experiences in Kyoto's Ancient Temples", author: "Sarah Chen", date: "July 8, 2026", image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=400&fit=crop&auto=format", category: "Culture" },
  { title: "The Ultimate Budget Guide to Backpacking Southeast Asia", author: "Marco Rossi", date: "July 5, 2026", image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=400&fit=crop&auto=format", category: "Budget" },
  { title: "Hidden Beaches of the Greek Cyclades Islands", author: "Elena Papadaki", date: "July 2, 2026", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&fit=crop&auto=format", category: "Beach" },
]

const REVIEWS = [
  { name: "Alexandra Turner", country: "United Kingdom", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&auto=format", rating: 5, comment: "TravelWorld helped me plan my Japan trip in just a few hours. The country detail page had everything — hotels, transport, safety info. Absolutely brilliant platform!", trips: 12 },
  { name: "Hiroshi Tanaka", country: "Japan", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format", rating: 5, comment: "The AI assistant recommended hidden gems in Rome that I would have never found on my own. It felt like talking to a local expert.", trips: 8 },
  { name: "Sofia Vasquez", country: "Argentina", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format", rating: 5, comment: "The trip planner is exceptional. I organized a 3-week European adventure with day-by-day itineraries. Everything went perfectly!", trips: 23 },
]

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" }) {
  const sz = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`${sz} ${i <= Math.floor(rating) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`} />
      ))}
    </div>
  )
}

function Tag({ label }: { label: string }) {
  const colors: Record<string, string> = {
    Culture: "bg-purple-100 text-purple-700",
    Food: "bg-orange-100 text-orange-700",
    Nature: "bg-green-100 text-green-700",
    Beach: "bg-blue-100 text-blue-700",
    History: "bg-yellow-100 text-yellow-700",
    Adventure: "bg-red-100 text-red-700",
    Luxury: "bg-pink-100 text-pink-700",
    Budget: "bg-teal-100 text-teal-700",
  }
  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${colors[label] ?? "bg-gray-100 text-gray-600"}`}>
      {label}
    </span>
  )
}

function Header({ currentPage, onNavigate }: { currentPage: Page; onNavigate: NavigateFn }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems: Array<{ label: string; page: Page }> = [
    { label: "Home", page: "home" },
    { label: "Countries", page: "countries" },
    { label: "Hotels", page: "hotels" },
    { label: "Transport", page: "transport" },
    { label: "Culture", page: "culture" },
    { label: "Safety", page: "safety" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1F3A]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-3">
        <button onClick={() => onNavigate("home")} className="flex items-center gap-2.5 cursor-pointer min-w-0">
          <div className="w-9 h-9 rounded-xl bg-[#1677FF] flex items-center justify-center shrink-0">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold text-lg sm:text-xl tracking-tight truncate">TravelWorld</span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                currentPage === page ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => onNavigate("map")}
            className="p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <Map className="w-5 h-5" />
          </button>
          <button
            onClick={() => onNavigate("ai-assistant")}
            className="p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <MessageSquare className="w-5 h-5" />
          </button>
          <button
            onClick={() => onNavigate("profile")}
            className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => onNavigate("trip-planner")}
            className="px-4 py-2 rounded-xl bg-[#1677FF] text-white text-sm font-semibold hover:bg-blue-600 transition-colors cursor-pointer"
          >
            Start Exploring
          </button>
        </div>

        <button
          className="lg:hidden inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-white cursor-pointer hover:bg-white/10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto bg-[#0B1F3A] border-t border-white/10 px-4 sm:px-6 py-4 flex flex-col gap-1">
          {navItems.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => { onNavigate(page); setMobileOpen(false) }}
              className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                currentPage === page ? "text-white bg-white/10" : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {label}
            </button>
          ))}
          <div className="my-2 border-t border-white/10" />
          <button
            onClick={() => { onNavigate("map"); setMobileOpen(false) }}
            className="flex items-center gap-3 text-left px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium cursor-pointer"
          >
            <Map className="w-5 h-5 shrink-0" /> Map
          </button>
          <button
            onClick={() => { onNavigate("ai-assistant"); setMobileOpen(false) }}
            className="flex items-center gap-3 text-left px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 shrink-0" /> AI Assistant
          </button>
          <button
            onClick={() => { onNavigate("profile"); setMobileOpen(false) }}
            className="text-left px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => { onNavigate("trip-planner"); setMobileOpen(false) }}
            className="mt-1 px-4 py-3 rounded-xl bg-[#1677FF] text-white text-sm font-semibold hover:bg-blue-600 cursor-pointer"
          >
            Start Exploring
          </button>
        </div>
      )}
    </header>
  )
}

function Footer({ onNavigate }: { onNavigate: NavigateFn }) {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#1677FF] flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">TravelWorld</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              One platform for the whole world. Discover, plan and experience every destination.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white/90">Explore</h4>
            <ul className="space-y-2.5">
              {(["countries", "hotels", "restaurants", "map"] as Page[]).map((p) => (
                <li key={p}>
                  <button onClick={() => onNavigate(p)} className="text-white/50 hover:text-white text-sm transition-colors capitalize cursor-pointer">
                    {p.replace("-", " ")}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white/90">Support</h4>
            <ul className="space-y-2.5">
              {["Help Center", "Contact Us", "Safety Tips", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white/90">Follow Us</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1677FF] flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© 2026 TravelWorld. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white/80 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/80 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ——————————————————————————————————————————————————
// PAGE: HOME
// ——————————————————————————————————————————————————

function HomePage({ onNavigate }: { onNavigate: NavigateFn }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [travelType, setTravelType] = useState("Culture")
  const [activeReview, setActiveReview] = useState(0)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeSuggestion, setActiveSuggestion] = useState(0)
  const searchWrapRef = useRef<HTMLDivElement>(null)

  const usePricingFlow = Boolean(
    selectedCountry && hasPricingCatalog(selectedCountry.name),
  )

  const suggestions = useMemo(
    () => (searchQuery.trim().length >= 1 ? searchCountries(searchQuery, 8) : []),
    [searchQuery],
  )

  useEffect(() => {
    setActiveSuggestion(0)
  }, [searchQuery])

  useEffect(() => {
    const onDocDown = (e: MouseEvent) => {
      if (!searchWrapRef.current?.contains(e.target as Node)) setSearchOpen(false)
    }
    document.addEventListener("mousedown", onDocDown)
    return () => document.removeEventListener("mousedown", onDocDown)
  }, [])

  const selectCountry = useCallback((country: Country) => {
    setSelectedCountry(country)
    setSelectedRegion(null)
    setSelectedCity(null)
    setSearchQuery(country.name)
    setSearchOpen(false)
  }, [])

  const handleSearchSubmit = useCallback(() => {
    const country = selectedCountry ?? findCountry(searchQuery) ?? suggestions[0]
    if (country) {
      onNavigate("country-detail", country.name)
      return
    }
  }, [selectedCountry, searchQuery, suggestions, onNavigate])

  const handleGlobeCountry = useCallback(
    (countryName: string) => {
      const match = findCountry(countryName)
      if (match) {
        onNavigate("country-detail", match.name)
      }
    },
    [onNavigate],
  )

  const featuredCountries = FEATURED_COUNTRY_NAMES
    .map((name) => findCountry(name))
    .filter((c): c is Country => Boolean(c))

  const categories = [
    { label: "Adventure", icon: Mountain, color: "bg-orange-500" },
    { label: "Culture", icon: Building2, color: "bg-purple-500" },
    { label: "Food", icon: Utensils, color: "bg-red-500" },
    { label: "Beach", icon: Waves, color: "bg-blue-500" },
    { label: "Nature", icon: Trees, color: "bg-green-500" },
    { label: "Luxury", icon: Diamond, color: "bg-pink-500" },
  ]

  const destinations = [
    { name: "Tokyo", country: "Japan", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=700&fit=crop&auto=format", rating: 4.9, desc: "Neon-lit streets meet ancient temples" },
    { name: "Paris", country: "France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=700&fit=crop&auto=format", rating: 4.8, desc: "The city of art, cuisine and romance" },
    { name: "Santorini", country: "Greece", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=700&fit=crop&auto=format", rating: 4.9, desc: "Iconic white domes over the Aegean Sea" },
    { name: "Rome", country: "Italy", image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=600&h=700&fit=crop&auto=format", rating: 4.8, desc: "The Eternal City of millennia of history" },
  ]

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Interactive Earth hero */}
      <section className="relative h-[58svh] min-h-[300px] max-h-[560px] sm:h-[72svh] sm:min-h-[420px] sm:max-h-[720px] overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(22,119,255,0.18)_0%,_transparent_55%)] pointer-events-none" />
        <HomeGlobe featuredCountries={FEATURED_COUNTRY_NAMES} onCountrySelect={handleGlobeCountry} />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 pt-16 sm:pt-20 px-4 sm:px-6 text-center">
          <div className="home-hero-glass mx-auto">
            <p className="home-hero-brand text-white text-3xl sm:text-4xl md:text-5xl tracking-[0.06em]">
              TravelWorld
            </p>
            <p className="text-white/80 text-sm sm:text-base md:text-lg font-light">
              Click a country — we fly you in
            </p>
            <p className="text-white/40 text-xs md:text-sm">
              Drag to orbit · Scroll to zoom · Pinch on touch
            </p>
          </div>
        </div>
      </section>

      {/* Search Box + date range */}
      <section className="relative z-20 -mt-10 sm:-mt-16 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4">
          <div className="rounded-2xl border border-white/50 bg-white/80 p-5 shadow-xl shadow-black/10 backdrop-blur-xl sm:p-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#94A3B8]">
              Where do you want to go?
            </p>
            <div className="flex flex-col gap-4 md:flex-row">
              <div ref={searchWrapRef} className="relative flex-1">
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/70 px-4 py-3 backdrop-blur focus-within:border-[#1677FF] focus-within:ring-2 focus-within:ring-[#1677FF]/15">
                  <MapPin className="h-5 w-5 shrink-0 text-[#1677FF]" />
                  <input
                    value={searchQuery}
                    onChange={(e) => {
                      const next = e.target.value
                      setSearchQuery(next)
                      setSearchOpen(true)
                      if (!selectedCountry || next.trim().toLowerCase() !== selectedCountry.name.toLowerCase()) {
                        setSelectedCountry(null)
                        setSelectedRegion(null)
                        setSelectedCity(null)
                      }
                    }}
                    onFocus={() => setSearchOpen(true)}
                    onKeyDown={(e) => {
                      if (!searchOpen || suggestions.length === 0) {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          if (selectedCountry) handleSearchSubmit()
                          else if (suggestions[0]) selectCountry(suggestions[0])
                        }
                        return
                      }
                      if (e.key === "ArrowDown") {
                        e.preventDefault()
                        setActiveSuggestion((i) => (i + 1) % suggestions.length)
                      } else if (e.key === "ArrowUp") {
                        e.preventDefault()
                        setActiveSuggestion((i) => (i - 1 + suggestions.length) % suggestions.length)
                      } else if (e.key === "Enter") {
                        e.preventDefault()
                        selectCountry(suggestions[activeSuggestion] ?? suggestions[0])
                      } else if (e.key === "Escape") {
                        setSearchOpen(false)
                      }
                    }}
                    placeholder="Type a country… e.g. Japan, საქართველო"
                    autoComplete="off"
                    role="combobox"
                    aria-expanded={searchOpen && suggestions.length > 0}
                    aria-controls="home-country-suggestions"
                    aria-autocomplete="list"
                    className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder-gray-400"
                  />
                </div>

                {selectedCountry && (
                  <p className="mt-2 flex flex-wrap items-center gap-2 text-xs font-medium text-[#1677FF]">
                    <span className="text-base leading-none">{selectedCountry.flag}</span>
                    Selected: {selectedCountry.name}
                    {selectedRegion ? ` · ${selectedRegion}` : usePricingFlow ? " · pick a region" : ""}
                    {selectedCity ? ` · ${selectedCity}` : selectedRegion || !usePricingFlow ? " · pick a city" : ""}
                  </p>
                )}

                {searchOpen && searchQuery.trim().length >= 1 && !selectedCountry && (
                  <ul
                    id="home-country-suggestions"
                    role="listbox"
                    className="absolute left-0 right-0 top-[calc(100%+0.4rem)] z-40 max-h-72 overflow-y-auto rounded-xl border border-gray-100 bg-white py-1.5 shadow-xl shadow-black/10"
                  >
                    {suggestions.length === 0 ? (
                      <li className="px-4 py-3 text-sm text-[#94A3B8]">No countries found</li>
                    ) : (
                      suggestions.map((country, index) => (
                        <li key={country.iso2} role="option" aria-selected={index === activeSuggestion}>
                          <button
                            type="button"
                            onMouseEnter={() => setActiveSuggestion(index)}
                            onClick={() => selectCountry(country)}
                            className={`flex w-full cursor-pointer items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                              index === activeSuggestion ? "bg-[#1677FF]/08" : "hover:bg-gray-50"
                            }`}
                          >
                            <span className="text-2xl leading-none" aria-hidden>
                              {country.flag}
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block truncate text-sm font-semibold text-[#111827]">
                                {country.name}
                              </span>
                              <span className="block truncate text-xs text-[#94A3B8]">
                                {country.nameKa} · {country.capital}
                              </span>
                            </span>
                            <span className="hidden sm:inline shrink-0 text-[11px] font-medium uppercase tracking-wide text-[#94A3B8]">
                              {country.region}
                            </span>
                          </button>
                        </li>
                      ))
                    )}
                  </ul>
                )}
              </div>
              <div className="flex w-full items-center gap-3 rounded-xl border border-gray-200 bg-white/70 px-4 py-3 backdrop-blur md:w-auto md:min-w-[140px]">
                <Compass className="h-5 w-5 shrink-0 text-[#1677FF]" />
                <select
                  value={travelType}
                  onChange={(e) => setTravelType(e.target.value)}
                  className="w-full cursor-pointer bg-transparent text-sm text-gray-700 outline-none"
                >
                  {["Adventure", "Culture", "Relax", "Luxury", "Family"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleSearchSubmit}
                disabled={!selectedCountry}
                className="flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#1677FF] px-6 sm:px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:bg-[#1677FF] md:w-auto"
              >
                <Search className="h-4 w-4" /> Open country
              </button>
            </div>
          </div>

          {selectedCountry && usePricingFlow && (
            <RegionPicker
              countryName={selectedCountry.name}
              selectedRegion={selectedRegion}
              onSelectRegion={(region) => {
                setSelectedRegion(region)
                setSelectedCity(null)
              }}
            />
          )}

          {selectedCountry && usePricingFlow && selectedRegion && (
            <CatalogCityPicker
              countryName={selectedCountry.name}
              regionName={selectedRegion}
              selectedCity={selectedCity}
              onSelectCity={setSelectedCity}
            />
          )}

          {selectedCountry && !usePricingFlow && (
            <CityPicker
              country={selectedCountry}
              selectedCity={selectedCity}
              onSelectCity={setSelectedCity}
            />
          )}

          {selectedCountry && usePricingFlow && selectedRegion && selectedCity && (
            <TripPricingPanel
              country={selectedCountry.name}
              region={selectedRegion}
              city={selectedCity}
            />
          )}

          {selectedCountry && !usePricingFlow && selectedCity && (
            <DateRangeSearch
              countryQuery={selectedCountry.name}
              cityQuery={selectedCity}
            />
          )}
        </div>
      </section>

      {/* Featured Countries */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10">
          <div>
            <p className="text-[#1677FF] text-sm font-semibold uppercase tracking-wider mb-2">Popular Countries</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111827]">Explore Popular Countries</h2>
            <p className="text-[#94A3B8] mt-2 text-sm sm:text-base">Discover amazing places around the world</p>
          </div>
          <button onClick={() => onNavigate("countries")} className="flex items-center gap-2 text-[#1677FF] font-semibold hover:gap-3 transition-all cursor-pointer shrink-0">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCountries.slice(0, 4).map((c) => (
            <div
              key={c.name}
              onClick={() => onNavigate("country-detail", c.name)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  {c.tags.slice(0, 1).map(t => <Tag key={t} label={t} />)}
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{c.flag}</span>
                    <h3 className="font-bold text-[#111827] text-lg">{c.name}</h3>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-semibold text-[#111827]">{c.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mb-4 text-[#94A3B8] text-sm">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{c.capital}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                  <div>
                    <p className="text-[#94A3B8]">Language</p>
                    <p className="font-medium text-[#111827] truncate">{c.language}</p>
                  </div>
                  <div>
                    <p className="text-[#94A3B8]">Currency</p>
                    <p className="font-medium text-[#111827]">{c.currency}</p>
                  </div>
                  <div>
                    <p className="text-[#94A3B8]">Population</p>
                    <p className="font-medium text-[#111827]">{c.population}</p>
                  </div>
                </div>
                <button className="w-full py-2.5 bg-[#0B1F3A] text-white text-sm font-semibold rounded-xl hover:bg-[#1677FF] transition-colors cursor-pointer">
                  Explore {c.name} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-[#1677FF] text-sm font-semibold uppercase tracking-wider mb-2">Travel Styles</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111827]">Find Your Perfect Experience</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {categories.map(({ label, icon: Icon, color }) => (
              <button
                key={label}
                onClick={() => onNavigate("countries")}
                className="group flex flex-col items-center gap-3 p-4 sm:p-6 rounded-2xl border border-gray-100 hover:border-[#1677FF]/30 hover:shadow-md transition-all cursor-pointer"
              >
                <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <span className="font-semibold text-[#111827] text-sm">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10">
          <div>
            <p className="text-[#1677FF] text-sm font-semibold uppercase tracking-wider mb-2">Must Visit</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111827]">Most Visited Places</h2>
          </div>
          <button onClick={() => onNavigate("countries")} className="flex items-center gap-2 text-[#1677FF] font-semibold hover:gap-3 transition-all cursor-pointer shrink-0">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {destinations.map((d, i) => (
            <div
              key={d.name}
              onClick={() => onNavigate("country-detail", d.country)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${i === 0 ? "md:col-span-2 md:row-span-2 h-80 md:h-auto" : "h-52"}`}
              style={{ minHeight: i === 0 ? 320 : 208 }}
            >
              <img src={d.image} alt={d.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-gray-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-white font-bold text-xl">{d.name}</h3>
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-white text-xs font-semibold">{d.rating}</span>
                  </div>
                </div>
                <p className="text-white/70 text-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {d.country}
                </p>
                {i === 0 && <p className="text-white/60 text-sm mt-2">{d.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0B1F3A] py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-[#1677FF] text-sm font-semibold uppercase tracking-wider mb-2">Why TravelWorld</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-white">Everything You Need For Travel</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Complete Information", desc: "Comprehensive country guides, culture, local rules and insider tips." },
              { icon: Shield, title: "Safe Travel", desc: "Real-time safety scores, emergency contacts and health alerts." },
              { icon: Calendar, title: "Smart Planning", desc: "AI-powered itinerary builder to craft your perfect trip." },
              { icon: Compass, title: "Local Experience", desc: "Discover authentic places beyond tourist hotspots." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="group p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#1677FF]/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#1677FF]/10 flex items-center justify-center mb-5 group-hover:bg-[#1677FF]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#1677FF]" />
                </div>
                <div className="text-white/30 text-xs font-mono mb-2">0{i + 1}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Preview */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#1677FF] text-sm font-semibold uppercase tracking-wider mb-3">AI Powered</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111827] mb-4">Your Personal Travel Assistant</h2>
            <p className="text-[#94A3B8] text-lg mb-8 leading-relaxed">Ask anything about destinations, hotels, local food, transport or safety. Get instant expert answers 24/7.</p>
            <div className="flex gap-3">
              <button onClick={() => onNavigate("ai-assistant")} className="flex items-center gap-2 px-6 py-3.5 bg-[#1677FF] text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors cursor-pointer">
                Try Assistant <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-[#0B1F3A] px-5 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1677FF] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">TravelWorld AI</p>
                <p className="text-white/50 text-xs">Always available</p>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full bg-[#22C55E]" />
            </div>
            <div className="p-5 space-y-4 min-h-[280px]">
              <div className="flex justify-end">
                <div className="bg-[#1677FF] text-white text-sm rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%]">
                  Best places to visit in Tokyo?
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-[#0B1F3A] flex items-center justify-center shrink-0 mt-1">
                  <Zap className="w-3.5 h-3.5 text-[#1677FF]" />
                </div>
                <div className="bg-gray-50 border border-gray-100 text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] text-[#111827] leading-relaxed">
                  Tokyo has incredible diversity! Here are my top picks:<br /><br />
                  <strong>🏯 Senso-ji Temple</strong> — Asakusa's iconic Buddhist temple<br />
                  <strong>🌸 Shinjuku Gyoen</strong> — Stunning gardens & cherry blossoms<br />
                  <strong>🗼 Tokyo Skytree</strong> — Panoramic city views at 634m<br />
                  <strong>🍣 Tsukiji Outer Market</strong> — Freshest sushi breakfasts
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-2.5">
                <input className="flex-1 text-sm outline-none bg-transparent text-gray-500" placeholder="Ask about any destination..." readOnly />
                <button onClick={() => onNavigate("ai-assistant")} className="w-7 h-7 bg-[#1677FF] rounded-lg flex items-center justify-center cursor-pointer">
                  <Send className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-8 sm:mb-10">
            <div>
              <p className="text-[#1677FF] text-sm font-semibold uppercase tracking-wider mb-2">Travel Stories</p>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#111827]">Latest Travel Stories</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <div key={post.title} className="group bg-[#F5F7FA] rounded-2xl overflow-hidden hover:shadow-md transition-all cursor-pointer">
                <div className="relative h-52 overflow-hidden bg-gray-200">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <Tag label={post.category} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#111827] text-lg mb-3 leading-snug group-hover:text-[#1677FF] transition-colors">{post.title}</h3>
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#1677FF] flex items-center justify-center text-white text-xs font-bold">{post.author[0]}</div>
                    <div>
                      <p className="text-xs font-medium text-[#111827]">{post.author}</p>
                      <p className="text-xs text-[#94A3B8]">{post.date}</p>
                    </div>
                    <button className="ml-auto text-[#1677FF] text-xs font-semibold hover:underline cursor-pointer">Read More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <div className="text-center mb-12">
          <p className="text-[#1677FF] text-sm font-semibold uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#111827]">What Travelers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={r.name} className={`p-7 rounded-2xl border transition-all ${i === activeReview ? "bg-[#0B1F3A] border-[#0B1F3A]" : "bg-white border-gray-100 hover:shadow-md"} cursor-pointer`} onClick={() => setActiveReview(i)}>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <p className={`text-sm leading-relaxed mb-6 ${i === activeReview ? "text-white/80" : "text-[#94A3B8]"}`}>"{r.comment}"</p>
              <div className="flex items-center gap-3">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover bg-gray-200" />
                <div>
                  <p className={`font-semibold text-sm ${i === activeReview ? "text-white" : "text-[#111827]"}`}>{r.name}</p>
                  <p className={`text-xs ${i === activeReview ? "text-white/50" : "text-[#94A3B8]"}`}>{r.country} · {r.trips} trips</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#1677FF] py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Get Travel Inspiration</h2>
            <p className="text-white/70">Weekly destination guides, deals, and travel tips straight to your inbox.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              placeholder="Enter your email"
              className="flex-1 md:w-72 px-4 py-3 rounded-xl text-sm outline-none text-[#111827] placeholder-gray-400"
            />
            <button className="px-6 py-3 bg-[#0B1F3A] text-white rounded-xl font-semibold hover:bg-[#111827] transition-colors whitespace-nowrap cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

// ——————————————————————————————————————————————————
// PAGE: COUNTRIES EXPLORER
// ——————————————————————————————————————————————————

function CountriesPage({ onNavigate }: { onNavigate: NavigateFn }) {
  const [region, setRegion] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [_budgetFilter, _setBudgetFilter] = useState("All")

  const regions = ["All", "Asia", "Europe", "America", "Africa", "Oceania"]
  const filtered = COUNTRIES.filter(c =>
    (region === "All" || c.region === region) &&
    (c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     c.nameKa.toLowerCase().includes(searchQuery.toLowerCase()) ||
     c.capital.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Hero */}
      <section className="relative h-64 flex items-end overflow-hidden">
        <img src={HERO_IMAGES.countries} alt="World map" className="absolute inset-0 w-full h-full object-cover bg-gray-800" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/50 to-transparent" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-10 pt-24 w-full">
          <h1 className="text-5xl font-extrabold text-white mb-2">Explore Countries</h1>
          <p className="text-white/60">{COUNTRIES.length} widely recognized countries — click any card to open its guide</p>
        </div>
      </section>

      {/* Search + Filter bar */}
      <div className="bg-white border-b border-gray-100 sticky top-16 sm:top-20 z-30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-4 flex flex-col md:flex-row gap-4 items-stretch md:items-center">
          <div className="flex items-center gap-3 flex-1 border border-gray-200 rounded-xl px-4 py-2.5">
            <Search className="w-4 h-4 text-[#94A3B8]" />
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search country or capital..."
              className="flex-1 text-sm outline-none text-[#111827] placeholder-gray-400"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {regions.map(r => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${region === r ? "bg-[#0B1F3A] text-white" : "bg-gray-100 text-[#94A3B8] hover:text-[#111827]"}`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-[#94A3B8] text-sm">{filtered.length} countries found</p>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#94A3B8]" />
            <select className="text-sm outline-none text-[#94A3B8] bg-transparent cursor-pointer">
              <option>Sort: Popular</option>
              <option>Sort: Rating</option>
              <option>Sort: A-Z</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((c) => (
            <div
              key={c.name}
              onClick={() => onNavigate("country-detail", c.name)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className="relative h-44 overflow-hidden bg-gray-200">
                <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 flex gap-1">
                  {c.tags.slice(0, 2).map(t => <Tag key={t} label={t} />)}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xl shrink-0">{c.flag}</span>
                    <div className="min-w-0">
                      <h3 className="font-bold text-[#111827] truncate">{c.name}</h3>
                      <p className="text-[#94A3B8] text-xs truncate">{c.nameKa}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-[#111827]">{c.rating}</span>
                  </div>
                </div>
                <p className="text-[#94A3B8] text-xs flex items-center gap-1 mb-4">
                  <MapPin className="w-3 h-3" /> {c.capital} · {c.region}
                </p>
                <div className="flex justify-between text-xs text-[#94A3B8] border-t border-gray-100 pt-3">
                  <span><span className="text-[#111827] font-medium">{c.language}</span><br />Language</span>
                  <span><span className="text-[#111827] font-medium">{c.currency}</span><br />Currency</span>
                  <span><span className="text-[#111827] font-medium">{c.population}</span><br />Population</span>
                </div>
                <button className="w-full mt-4 py-2 bg-[#F5F7FA] text-[#0B1F3A] text-sm font-semibold rounded-xl hover:bg-[#0B1F3A] hover:text-white transition-colors cursor-pointer">
                  Explore Country
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ——————————————————————————————————————————————————
// PAGE: COUNTRY DETAIL (all 195)
// ——————————————————————————————————————————————————

function CountryDetailPage({
  onNavigate,
  selectedCountry,
}: {
  onNavigate: NavigateFn
  selectedCountry: string
}) {
  const [activeTab, setActiveTab] = useState("Overview")
  const tabs = ["Overview", "History", "Culture", "Food", "Places", "Hotels", "Transport", "Safety"]
  const country = getCountryOrDefault(selectedCountry)
  const safetyScore = Math.min(98, Math.round(country.rating * 20))
  const foods = country.foods ?? []
  const places = country.places ?? []
  const countryHotels = HOTELS.filter((h) =>
    h.location.toLowerCase().includes(country.name.toLowerCase()) ||
    h.location.toLowerCase().includes(country.capital.toLowerCase()),
  )
  const hotelsToShow = countryHotels.length > 0 ? countryHotels.slice(0, 3) : HOTELS.slice(0, 3)

  useEffect(() => {
    setActiveTab("Overview")
  }, [country.name])

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-[#111827] mb-4">About {country.name}</h3>
              <p className="text-[#94A3B8] leading-relaxed mb-6">{country.about}</p>
              <p className="text-[#94A3B8] leading-relaxed">
                Plan hotels, transport, safety tips and itineraries for {country.name} with TravelWorld.
                Best season to visit: <span className="text-[#111827] font-medium">{country.bestSeason}</span>.
              </p>
              {country.nameKa && (
                <p className="text-[#94A3B8] text-sm mt-4">
                  Also known as: <span className="text-[#111827] font-medium">{country.nameKa}</span>
                </p>
              )}
            </div>
            <div className="space-y-4">
              {[
                { label: "Population", value: country.population },
                { label: "Capital", value: country.capital },
                { label: "Language", value: country.language },
                { label: "Currency", value: country.currency },
                { label: "Region", value: `${country.region}${country.subregion ? ` · ${country.subregion}` : ""}` },
                { label: "Rating", value: String(country.rating) },
                { label: "Best Season", value: country.bestSeason },
                { label: "Emergency", value: country.emergency },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center gap-4 py-3 border-b border-gray-100 last:border-0">
                  <span className="text-[#94A3B8] text-sm shrink-0">{label}</span>
                  <span className="font-medium text-[#111827] text-sm text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )
      case "History":
        return <CountryHistory country={country} />
      case "Culture":
        return <CountryCulture country={country} />
      case "Food":
        return (
          <div>
            <h3 className="text-2xl font-bold text-[#111827] mb-6">Food in {country.name}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {foods.map((f) => (
                <div key={f.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
                  <div className="h-40 overflow-hidden bg-gray-200">
                    <img src={f.image} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-[#111827] mb-1">{f.name}</h4>
                    <p className="text-[#94A3B8] text-xs leading-relaxed mb-3">{f.desc}</p>
                    <p className="text-[#1677FF] text-xs font-semibold">{f.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case "Places":
        return (
          <div>
            <h3 className="text-2xl font-bold text-[#111827] mb-6">Best Places To Visit</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {places.map((p) => (
                <div key={p.name} className="group relative h-56 rounded-2xl overflow-hidden cursor-pointer bg-gray-300">
                  <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-white font-bold text-xl">{p.name}</h4>
                      <div className="flex items-center gap-1 bg-white/20 rounded-full px-2 py-0.5">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="text-white text-xs">{p.rating}</span>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case "Safety":
        return (
          <div>
            <h3 className="text-2xl font-bold text-[#111827] mb-6">Travel Safety in {country.name}</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-8 max-w-3xl">{country.safety}</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <div className="bg-[#0B1F3A] rounded-2xl p-6 text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-[#22C55E]/20 flex items-center justify-center mb-4">
                    <span className="text-3xl font-extrabold text-[#22C55E]">{safetyScore}%</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Safety Score</h4>
                  <p className="text-white/50 text-sm mb-5">Traveler readiness index for {country.name}</p>
                  <div className="space-y-3">
                    {[
                      { label: "Overall", value: country.rating >= 4.7 ? "Very Good" : "Good", color: "text-[#22C55E]" },
                      { label: "Best Season", value: country.bestSeason, color: "text-white" },
                      { label: "Emergency", value: country.emergency, color: "text-[#FF9F43]" },
                    ].map(({ label, value, color }) => (
                      <div key={label} className="flex justify-between gap-3 text-sm">
                        <span className="text-white/50 shrink-0">{label}</span>
                        <span className={`font-semibold text-right ${color}`}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Phone, label: "Emergency", number: country.emergency, color: "bg-red-100 text-red-600" },
                  { icon: Shield, label: "Calling code", number: country.callingCode || "Local", color: "bg-blue-100 text-blue-600" },
                  { icon: Globe, label: "Capital", number: country.capital, color: "bg-purple-100 text-purple-600" },
                  { icon: Languages, label: "Language", number: country.language.split(" / ")[0], color: "bg-orange-100 text-orange-600" },
                ].map(({ icon: Icon, label, number, color }) => (
                  <div key={label} className="bg-white rounded-2xl p-5 border border-gray-100">
                    <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-3`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="font-semibold text-[#111827]">{label}</p>
                    <p className="text-lg font-bold text-[#1677FF] mt-1 leading-snug">{number}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      case "Hotels":
        return (
          <div>
            <h3 className="text-2xl font-bold text-[#111827] mb-6">Recommended Hotels in {country.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {hotelsToShow.map((h) => (
                <div key={h.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer">
                  <div className="h-44 overflow-hidden bg-gray-200 relative">
                    <img src={h.image} alt={h.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 right-3 bg-white/90 rounded-lg px-2 py-1 text-xs font-bold text-[#111827]">
                      ${h.price}/night
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-[#111827] mb-1">{h.name}</h4>
                    <p className="text-[#94A3B8] text-xs flex items-center gap-1 mb-3"><MapPin className="w-3 h-3" />{h.location}</p>
                    <div className="flex items-center justify-between">
                      <StarRating rating={h.stars} />
                      <button onClick={() => onNavigate("hotels")} className="px-3 py-1.5 bg-[#1677FF] text-white text-xs rounded-lg font-medium cursor-pointer">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {countryHotels.length === 0 && (
              <p className="text-[#94A3B8] text-sm mt-4">Showing popular worldwide picks while {country.name}-specific hotels are added.</p>
            )}
          </div>
        )
      case "Transport":
        return (
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-[#111827] mb-4">Getting Around {country.name}</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-4">{country.transport}</p>
            <button
              onClick={() => onNavigate("transport")}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1677FF] text-white rounded-xl text-sm font-semibold cursor-pointer"
            >
              Open transport guide <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )
      default:
        return (
          <div className="text-center py-16 text-[#94A3B8]">
            <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>Content for {activeTab} coming soon...</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <section className="relative h-[50svh] min-h-[280px] sm:min-h-[400px] sm:h-[65vh] flex items-end overflow-hidden">
        <img src={country.image} alt={country.name} className="absolute inset-0 w-full h-full object-cover bg-gray-800" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/40 to-transparent" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10 pt-20 sm:pt-24 w-full">
          <div className="flex items-end justify-between flex-wrap gap-4 sm:gap-6">
            <div className="min-w-0 max-w-full">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-3">
                <button onClick={() => onNavigate("countries")} className="text-white/60 text-sm hover:text-white cursor-pointer">Countries</button>
                <ChevronRight className="w-4 h-4 text-white/40 shrink-0" />
                <span className="text-white/60 text-sm truncate max-w-[40vw] sm:max-w-none">{country.region}</span>
                <ChevronRight className="hidden sm:block w-4 h-4 text-white/40 shrink-0" />
                <span className="hidden sm:inline text-white/60 text-sm truncate">{country.capital}</span>
              </div>
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3">
                <span className="text-3xl sm:text-5xl leading-none shrink-0">{country.flag}</span>
                <div className="min-w-0">
                  <h1 className="text-3xl sm:text-5xl font-extrabold text-white break-words">{country.name}</h1>
                  <p className="text-white/60 text-sm sm:text-lg mt-1">{country.tagline}</p>
                  <p className="text-white/40 text-sm mt-1">{country.nameKa}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex flex-wrap items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.round(country.rating) ? "fill-amber-400 text-amber-400" : "fill-white/20 text-white/20"}`} />
                  ))}
                  <span className="text-white font-bold ml-1">{country.rating}</span>
                  <span className="text-white/50 text-sm">Traveler rating</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
              <button className="flex flex-1 sm:flex-none items-center justify-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">
                <Heart className="w-4 h-4" /> Save Country
              </button>
              <button onClick={() => onNavigate("trip-planner")} className="flex flex-1 sm:flex-none items-center justify-center gap-2 px-5 py-2.5 bg-[#1677FF] text-white rounded-xl text-sm font-semibold hover:bg-blue-600 transition-colors cursor-pointer">
                <Calendar className="w-4 h-4" /> Plan Trip
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: "Population", value: country.population, icon: Users },
            { label: "Capital", value: country.capital, icon: MapPin },
            { label: "Language", value: country.language, icon: Languages },
            { label: "Currency", value: country.currency, icon: CreditCard },
            { label: "Region", value: country.region, icon: Globe },
            { label: "Rating", value: String(country.rating), icon: Star },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1677FF]/10 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-[#1677FF]" />
              </div>
              <div className="min-w-0">
                <p className="text-[#94A3B8] text-xs">{label}</p>
                <p className="font-semibold text-[#111827] text-sm leading-tight truncate">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-white border-b border-gray-100 sticky top-16 sm:top-20 z-30 mt-6">
        <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-10">
          <div className="flex flex-nowrap gap-1 overflow-x-auto overscroll-x-contain py-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`snap-start px-4 sm:px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors cursor-pointer rounded-lg shrink-0 ${
                  activeTab === tab ? "text-[#1677FF] bg-[#1677FF]/5" : "text-[#94A3B8] hover:text-[#111827]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
        {renderTabContent()}
      </div>
    </div>
  )
}

// ——————————————————————————————————————————————————
// PAGE: HOTELS
// ——————————————————————————————————————————————————

function HotelsPage({ onNavigate: _onNavigate }: { onNavigate: NavigateFn }) {
  const [_priceFilter, _setPriceFilter] = useState("All")
  const [typeFilter, setTypeFilter] = useState("All")
  const [destination, setDestination] = useState("")

  const types = ["All", "Hotel", "Apartment", "Villa", "Resort"]

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Hero */}
      <section className="relative h-80 flex items-end overflow-hidden">
        <img src={HERO_IMAGES.hotels} alt="Luxury hotel" className="absolute inset-0 w-full h-full object-cover bg-gray-800" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] to-[#0B1F3A]/30" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full pb-8">
          <h1 className="text-5xl font-extrabold text-white mb-2">Find Your Perfect Stay</h1>
          <p className="text-white/60 mb-8">Compare hotels, apartments and resorts around the world</p>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex flex-col md:flex-row gap-3">
            <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-2.5">
              <MapPin className="w-4 h-4 text-[#1677FF]" />
              <input value={destination} onChange={e => setDestination(e.target.value)} placeholder="Destination" className="flex-1 text-sm outline-none text-[#111827]" />
            </div>
            <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-2.5 min-w-[160px]">
              <Calendar className="w-4 h-4 text-[#1677FF]" />
              <span className="text-sm text-gray-500">Check-in</span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-2.5 min-w-[160px]">
              <Calendar className="w-4 h-4 text-[#1677FF]" />
              <span className="text-sm text-gray-500">Check-out</span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-2.5 min-w-[120px]">
              <Users className="w-4 h-4 text-[#1677FF]" />
              <span className="text-sm text-gray-500">2 Guests</span>
            </div>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-[#1677FF] text-white rounded-xl font-semibold text-sm cursor-pointer whitespace-nowrap hover:bg-blue-600 transition-colors">
              <Search className="w-4 h-4" /> Search
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-center mb-8">
          <div className="flex gap-2">
            {types.map(t => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${typeFilter === t ? "bg-[#0B1F3A] text-white" : "bg-white text-[#94A3B8] border border-gray-200 hover:text-[#111827]"}`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-3">
            <span className="text-sm text-[#94A3B8]">{HOTELS.length} hotels found</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOTELS.map(h => (
            <div key={h.name} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="relative h-52 overflow-hidden bg-gray-200">
                <img src={h.image} alt={h.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
                <div className="absolute bottom-3 left-3 bg-white/95 rounded-lg px-3 py-1.5">
                  <span className="text-[#0B1F3A] font-bold text-sm">${h.price}</span>
                  <span className="text-[#94A3B8] text-xs"> /night</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-[#111827] text-lg">{h.name}</h3>
                  <div className="flex items-center gap-1 bg-amber-50 rounded-lg px-2 py-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-bold text-[#111827]">{h.rating}</span>
                  </div>
                </div>
                <p className="text-[#94A3B8] text-sm flex items-center gap-1 mb-4">
                  <MapPin className="w-3.5 h-3.5" /> {h.location}
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {h.facilities.map(f => (
                    <span key={f} className="text-xs px-2.5 py-1 bg-[#F5F7FA] text-[#94A3B8] rounded-lg font-medium">{f}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 py-2.5 border border-[#1677FF] text-[#1677FF] text-sm rounded-xl font-semibold hover:bg-[#1677FF]/5 transition-colors cursor-pointer">
                    View Details
                  </button>
                  <button className="flex-1 py-2.5 bg-[#1677FF] text-white text-sm rounded-xl font-semibold hover:bg-blue-600 transition-colors cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ——————————————————————————————————————————————————
// PAGE: TRANSPORT
// ——————————————————————————————————————————————————

function TransportPage() {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")

  const transportTypes = [
    { icon: Plane, label: "Airplane", desc: "International & domestic flights", color: "bg-blue-500" },
    { icon: Train, label: "Train", desc: "High-speed & regional rail networks", color: "bg-green-500" },
    { icon: Navigation, label: "Metro", desc: "Urban subway & underground", color: "bg-purple-500" },
    { icon: Bus, label: "Bus", desc: "City and intercity coaches", color: "bg-orange-500" },
    { icon: Car, label: "Taxi / Rideshare", desc: "On-demand private transport", color: "bg-yellow-500" },
    { icon: Car, label: "Car Rental", desc: "Self-drive across any country", color: "bg-red-500" },
    { icon: Bike, label: "Bike", desc: "Cycling & e-scooter rentals", color: "bg-teal-500" },
    { icon: Ship, label: "Ferry", desc: "Island hops & coastal routes", color: "bg-indigo-500" },
  ]

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <section className="relative h-64 flex items-end overflow-hidden">
        <img src={HERO_IMAGES.transport} alt="Transport" className="absolute inset-0 w-full h-full object-cover bg-gray-800" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] to-transparent" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-10 pt-24 w-full">
          <h1 className="text-5xl font-extrabold text-white mb-2">Move Around Easily</h1>
          <p className="text-white/60">Find the best transport options in any country</p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
        {/* Route Planner */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-10">
          <h2 className="text-xl font-bold text-[#111827] mb-5">Route Planner</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3">
              <MapPin className="w-4 h-4 text-[#22C55E]" />
              <input value={from} onChange={e => setFrom(e.target.value)} placeholder="From: Current Location" className="flex-1 text-sm outline-none text-[#111827]" />
            </div>
            <div className="flex-1 flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3">
              <MapPin className="w-4 h-4 text-[#1677FF]" />
              <input value={to} onChange={e => setTo(e.target.value)} placeholder="To: Destination" className="flex-1 text-sm outline-none text-[#111827]" />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#1677FF] text-white rounded-xl font-semibold text-sm cursor-pointer hover:bg-blue-600 transition-colors">
              <Navigation className="w-4 h-4" /> Find Route
            </button>
          </div>
          {from && to && (
            <div className="mt-5 grid grid-cols-3 gap-4">
              {[
                { icon: Train, label: "Train", time: "2h 30m", price: "¥4,280", color: "border-green-200 bg-green-50" },
                { icon: Car, label: "Car", time: "3h 15m", price: "¥6,500", color: "border-blue-200 bg-blue-50" },
                { icon: Bus, label: "Bus", time: "4h 00m", price: "¥2,100", color: "border-orange-200 bg-orange-50" },
              ].map(({ icon: Icon, label, time, price, color }) => (
                <div key={label} className={`border rounded-xl p-4 ${color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-[#111827]" />
                    <span className="font-semibold text-[#111827]">{label}</span>
                  </div>
                  <p className="text-2xl font-bold text-[#111827]">{time}</p>
                  <p className="text-[#94A3B8] text-sm">{price} estimated</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Transport Types */}
        <h2 className="text-2xl font-bold text-[#111827] mb-6">Transport Options</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {transportTypes.map(({ icon: Icon, label, desc, color }) => (
            <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group">
              <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-[#111827] mb-1">{label}</h3>
              <p className="text-[#94A3B8] text-xs">{desc}</p>
            </div>
          ))}
        </div>

        {/* Cost Calculator */}
        <div className="bg-[#0B1F3A] rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Travel Cost Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              { label: "Transport Type", input: <select className="w-full text-sm outline-none bg-transparent text-white cursor-pointer"><option>Train</option><option>Bus</option><option>Taxi</option></select> },
              { label: "Distance (km)", input: <input type="number" placeholder="120" className="w-full text-sm outline-none bg-transparent text-white placeholder-white/30" /> },
              { label: "Passengers", input: <input type="number" placeholder="2" className="w-full text-sm outline-none bg-transparent text-white placeholder-white/30" /> },
            ].map(({ label, input }) => (
              <div key={label}>
                <label className="text-white/50 text-xs mb-2 block">{label}</label>
                <div className="border border-white/10 rounded-xl px-4 py-3">{input}</div>
              </div>
            ))}
          </div>
          <div className="bg-white/10 rounded-xl p-5 flex items-center justify-between">
            <div>
              <p className="text-white/50 text-sm mb-1">Estimated Total Cost</p>
              <p className="text-3xl font-extrabold text-white">¥4,280</p>
            </div>
            <button className="px-6 py-3 bg-[#1677FF] text-white rounded-xl font-semibold text-sm cursor-pointer hover:bg-blue-600 transition-colors">
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ——————————————————————————————————————————————————
// PAGE: CULTURE
// ——————————————————————————————————————————————————

function CulturePage() {
  const experiences = [
    { title: "Tea Ceremony", desc: "Experience the art of Japanese tea preparation", image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop&auto=format", tag: "Japan" },
    { title: "Flamenco Dance", desc: "Passionate Spanish dance rooted in Andalusian culture", image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400&h=300&fit=crop&auto=format", tag: "Spain" },
    { title: "Cooking Class", desc: "Master authentic local recipes with expert chefs", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format", tag: "Italy" },
    { title: "Village Experience", desc: "Live like a local in traditional communities", image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&h=300&fit=crop&auto=format", tag: "Thailand" },
    { title: "Museum Tour", desc: "Guided tours through world-class cultural institutions", image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=300&fit=crop&auto=format", tag: "France" },
    { title: "Traditional Workshop", desc: "Hands-on craft experiences with artisan masters", image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=400&h=300&fit=crop&auto=format", tag: "Morocco" },
  ]

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <section className="relative h-64 flex items-end overflow-hidden">
        <img src={HERO_IMAGES.culture} alt="Culture" className="absolute inset-0 w-full h-full object-cover bg-gray-800" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] to-transparent" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-10 pt-24 w-full">
          <h1 className="text-5xl font-extrabold text-white mb-2">Discover Local Culture</h1>
          <p className="text-white/60">Understand traditions, people and lifestyle before your journey</p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
        {/* Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {[
            { icon: Languages, label: "Language", value: "195 Languages" },
            { icon: BookOpen, label: "Religion", value: "World Faiths" },
            { icon: Flag, label: "Traditions", value: "Thousands" },
            { icon: Sun, label: "Lifestyle", value: "Diverse" },
            { icon: BadgeCheck, label: "Etiquette", value: "Local Rules" },
            { icon: Globe2, label: "Identity", value: "National Pride" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center hover:shadow-md transition-all cursor-pointer">
              <div className="w-10 h-10 mx-auto rounded-xl bg-purple-100 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-purple-600" />
              </div>
              <p className="font-bold text-[#111827] text-sm">{label}</p>
              <p className="text-[#94A3B8] text-xs mt-0.5">{value}</p>
            </div>
          ))}
        </div>

        {/* Etiquette */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-10">
          <h2 className="text-2xl font-bold text-[#111827] mb-6">Local Rules & Etiquette</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🤝", label: "How To Greet", desc: "Bowing in Japan, handshakes in Europe, cheek kisses in France" },
              { icon: "🏛️", label: "Public Behavior", desc: "Quiet in public transport, no loud music in residential areas" },
              { icon: "🍽️", label: "Restaurant Rules", desc: "Tipping customs vary widely — research before you visit" },
              { icon: "🕌", label: "Religious Places", desc: "Cover shoulders and knees, remove shoes when required" },
              { icon: "📷", label: "Photography", desc: "Always ask before photographing people or sacred sites" },
              { icon: "👗", label: "Dress Code", desc: "Respect local standards — conservative dress in many regions" },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="p-5 rounded-2xl bg-[#F5F7FA] hover:bg-purple-50 transition-colors">
                <span className="text-2xl mb-3 block">{icon}</span>
                <h3 className="font-semibold text-[#111827] text-sm mb-1">{label}</h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Experiences */}
        <h2 className="text-2xl font-bold text-[#111827] mb-6">Cultural Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences.map(e => (
            <div key={e.title} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="relative h-44 overflow-hidden bg-gray-200">
                <img src={e.image} alt={e.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-white/90 rounded-full px-3 py-1 text-xs font-semibold text-[#111827]">{e.tag}</div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#111827] mb-1">{e.title}</h3>
                <p className="text-[#94A3B8] text-sm">{e.desc}</p>
                <button className="mt-4 text-[#1677FF] text-sm font-semibold hover:underline cursor-pointer">Learn More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ——————————————————————————————————————————————————
// PAGE: SAFETY
// ——————————————————————————————————————————————————

function SafetyPage() {
  const [checklist, setChecklist] = useState<Record<string, boolean>>({})
  const items = ["Valid Passport", "Travel Visa", "Travel Insurance", "Emergency Contacts", "Local Currency", "Medicine Supply", "Backup Documents", "Mobile Data Plan"]

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <section className="relative h-64 flex items-end overflow-hidden">
        <img src={HERO_IMAGES.safety} alt="Safety" className="absolute inset-0 w-full h-full object-cover bg-gray-800" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] to-transparent" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-10 pt-24 w-full">
          <h1 className="text-5xl font-extrabold text-white mb-2">Travel Safe Anywhere</h1>
          <p className="text-white/60">Important safety information before and during your trip</p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Safety Score */}
          <div className="bg-[#0B1F3A] rounded-2xl p-8 text-center">
            <div className="w-32 h-32 mx-auto rounded-full border-4 border-[#22C55E] flex items-center justify-center mb-5">
              <div>
                <p className="text-4xl font-extrabold text-[#22C55E]">95%</p>
                <p className="text-white/50 text-xs">Safe</p>
              </div>
            </div>
            <h3 className="text-white font-bold text-xl mb-5">Japan Safety Score</h3>
            <div className="space-y-3 text-left">
              {[
                { label: "Crime Level", value: "Very Low", pct: 95 },
                { label: "Healthcare", value: "Excellent", pct: 97 },
                { label: "Transport Safety", value: "High", pct: 98 },
                { label: "Emergency Response", value: "Excellent", pct: 96 },
              ].map(({ label, value, pct }) => (
                <div key={label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/50">{label}</span>
                    <span className="text-[#22C55E] font-medium">{value}</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#22C55E] rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#111827] mb-5">Emergency Contacts</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "Police", number: "110", color: "bg-blue-500", light: "bg-blue-50" },
                { icon: Phone, label: "Ambulance", number: "119", color: "bg-red-500", light: "bg-red-50" },
                { icon: AlertTriangle, label: "Fire Dept.", number: "119", color: "bg-orange-500", light: "bg-orange-50" },
                { icon: Globe, label: "Embassy", number: "+81-3-3224-5000", color: "bg-purple-500", light: "bg-purple-50" },
              ].map(({ icon: Icon, label, number, color, light }) => (
                <div key={label} className={`${light} rounded-2xl p-6 border border-gray-100`}>
                  <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[#94A3B8] text-sm mb-1">{label}</p>
                  <p className="text-2xl font-extrabold text-[#111827]">{number}</p>
                  <button className={`mt-4 w-full py-2 ${color} text-white text-sm rounded-xl font-medium cursor-pointer hover:opacity-90 transition-opacity`}>
                    Call Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Travel Checklist */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-[#111827] mb-6">Pre-Travel Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {items.map(item => (
              <label key={item} className="flex items-center gap-3 p-4 rounded-xl hover:bg-[#F5F7FA] cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={!!checklist[item]}
                  onChange={() => setChecklist(prev => ({ ...prev, [item]: !prev[item] }))}
                  className="w-5 h-5 rounded accent-[#1677FF] cursor-pointer"
                />
                <span className={`font-medium text-sm ${checklist[item] ? "line-through text-[#94A3B8]" : "text-[#111827]"}`}>
                  {item}
                </span>
                {checklist[item] && <CheckCircle className="w-4 h-4 text-[#22C55E] ml-auto" />}
              </label>
            ))}
          </div>
          <div className="mt-6 p-4 bg-[#F5F7FA] rounded-xl flex items-center justify-between">
            <span className="text-sm text-[#94A3B8]">{Object.values(checklist).filter(Boolean).length} of {items.length} items checked</span>
            <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#22C55E] rounded-full transition-all"
                style={{ width: `${(Object.values(checklist).filter(Boolean).length / items.length) * 100}%` }}
              />
            </div>
            <span className="text-sm font-bold text-[#22C55E]">
              {Math.round((Object.values(checklist).filter(Boolean).length / items.length) * 100)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ——————————————————————————————————————————————————
// PAGE: MAP
// ——————————————————————————————————————————————————

function MapPage() {
  const [activeFilter, setActiveFilter] = useState("Attractions")
  const filters = ["Attractions", "Hotels", "Restaurants", "Museums", "Hospitals", "Transport"]

  const markers = [
    { name: "Senso-ji Temple", type: "Attractions", lat: 45, lng: 30, rating: 4.9, desc: "Tokyo's most visited shrine, founded in 628 AD" },
    { name: "Park Hyatt Tokyo", type: "Hotels", lat: 65, lng: 20, rating: 4.9, desc: "Iconic luxury hotel in Shinjuku" },
    { name: "Sukiyabashi Jiro", type: "Restaurants", lat: 55, lng: 55, rating: 4.8, desc: "World-famous sushi restaurant" },
    { name: "Tokyo National Museum", type: "Museums", lat: 30, lng: 65, rating: 4.7, desc: "Japan's oldest and largest art museum" },
    { name: "St. Luke's International", type: "Hospitals", lat: 70, lng: 45, rating: 4.6, desc: "Premier international hospital in Tokyo" },
    { name: "Shinjuku Station", type: "Transport", lat: 40, lng: 75, rating: 4.5, desc: "World's busiest train station" },
  ]

  const visibleMarkers = markers.filter(m => m.type === activeFilter)

  const typeColors: Record<string, string> = {
    Attractions: "bg-blue-500",
    Hotels: "bg-purple-500",
    Restaurants: "bg-orange-500",
    Museums: "bg-yellow-500",
    Hospitals: "bg-red-500",
    Transport: "bg-green-500",
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-24 pb-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-extrabold text-[#111827]">Explore The World Map</h1>
            <p className="text-[#94A3B8] mt-1">Discover places, hotels, restaurants and more</p>
          </div>
          <div className="flex items-center gap-3 border border-gray-200 bg-white rounded-xl px-4 py-2.5">
            <Search className="w-4 h-4 text-[#94A3B8]" />
            <input placeholder="Search location..." className="text-sm outline-none text-[#111827] placeholder-gray-400 w-48" />
          </div>
        </div>

        <div className="flex gap-2 mb-5 flex-wrap">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${activeFilter === f ? `${typeColors[f]} text-white` : "bg-white text-[#94A3B8] border border-gray-200 hover:text-[#111827]"}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="lg:col-span-3">
            <div className="bg-[#0B1F3A] rounded-2xl overflow-hidden" style={{ height: 520 }}>
              <div className="relative w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=600&fit=crop&auto=format"
                  alt="World map"
                  className="w-full h-full object-cover opacity-60"
                />
                {markers.map((m) => (
                  <div
                    key={m.name}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all ${m.type === activeFilter ? "scale-100 opacity-100" : "scale-75 opacity-30"}`}
                    style={{ left: `${m.lng}%`, top: `${m.lat}%` }}
                  >
                    <div className={`w-4 h-4 rounded-full ${typeColors[m.type]} border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform`} title={m.name} />
                  </div>
                ))}
                <div className="absolute bottom-5 right-5 flex flex-col gap-2">
                  {["+", "−", "⊙"].map(ctrl => (
                    <button key={ctrl} className="w-9 h-9 bg-white rounded-lg shadow flex items-center justify-center text-[#111827] font-bold cursor-pointer hover:bg-gray-50 text-sm">
                      {ctrl}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-[#111827]">{activeFilter} ({visibleMarkers.length})</h3>
            {visibleMarkers.map(m => (
              <div key={m.name} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 ${typeColors[m.type]} rounded-xl flex items-center justify-center shrink-0`}>
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#111827] text-sm">{m.name}</p>
                    <p className="text-[#94A3B8] text-xs mt-0.5">{m.desc}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-semibold text-[#111827]">{m.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ——————————————————————————————————————————————————
// PAGE: TRIP PLANNER
// ——————————————————————————————————————————————————

function TripPlannerPage() {
  const [step, setStep] = useState(1)
  const [tripData, setTripData] = useState({ destination: "", dateFrom: "", dateTo: "", people: "2", budget: "Medium", style: "Culture" })
  const [days, _setDays] = useState([
    {
      day: 1, date: "July 20", activities: [
        { time: "Morning", title: "Senso-ji Temple", type: "Attraction" },
        { time: "Afternoon", title: "Asakusa District Walk", type: "Exploration" },
        { time: "Evening", title: "Sushi Dinner in Ginza", type: "Food" },
      ]
    },
    {
      day: 2, date: "July 21", activities: [
        { time: "Morning", title: "Meiji Shrine", type: "Attraction" },
        { time: "Afternoon", title: "Harajuku & Shibuya", type: "Shopping" },
        { time: "Evening", title: "Shibuya Crossing", type: "Exploration" },
      ]
    },
  ])

  const styles = ["Adventure", "Relax", "Culture", "Luxury", "Family"]
  const budgets = ["Budget", "Medium", "Luxury"]

  const activityColors: Record<string, string> = {
    Attraction: "bg-blue-100 text-blue-700",
    Exploration: "bg-green-100 text-green-700",
    Food: "bg-orange-100 text-orange-700",
    Shopping: "bg-purple-100 text-purple-700",
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-28 pb-10">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-[#111827] mb-3">Create Your Perfect Trip</h1>
          <p className="text-[#94A3B8] text-lg">Plan every detail in one place</p>
        </div>

        {step === 1 && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#111827] mb-6">Where are you going?</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-[#94A3B8] mb-1.5 block">Destination</label>
                  <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3">
                    <MapPin className="w-4 h-4 text-[#1677FF]" />
                    <input value={tripData.destination} onChange={e => setTripData(p => ({ ...p, destination: e.target.value }))} placeholder="Japan, Tokyo, Paris..." className="flex-1 text-sm outline-none text-[#111827]" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-[#94A3B8] mb-1.5 block">From</label>
                    <input type="date" value={tripData.dateFrom} onChange={e => setTripData(p => ({ ...p, dateFrom: e.target.value }))} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none text-[#111827]" />
                  </div>
                  <div>
                    <label className="text-sm text-[#94A3B8] mb-1.5 block">To</label>
                    <input type="date" value={tripData.dateTo} onChange={e => setTripData(p => ({ ...p, dateTo: e.target.value }))} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none text-[#111827]" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-[#94A3B8] mb-1.5 block">Budget Level</label>
                  <div className="flex gap-3">
                    {budgets.map(b => (
                      <button key={b} onClick={() => setTripData(p => ({ ...p, budget: b }))} className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer border ${tripData.budget === b ? "bg-[#0B1F3A] text-white border-[#0B1F3A]" : "border-gray-200 text-[#94A3B8] hover:text-[#111827]"}`}>{b}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm text-[#94A3B8] mb-1.5 block">Travel Style</label>
                  <div className="flex gap-2 flex-wrap">
                    {styles.map(s => (
                      <button key={s} onClick={() => setTripData(p => ({ ...p, style: s }))} className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer border ${tripData.style === s ? "bg-[#1677FF] text-white border-[#1677FF]" : "border-gray-200 text-[#94A3B8] hover:text-[#111827]"}`}>{s}</button>
                    ))}
                  </div>
                </div>
                <button onClick={() => setStep(2)} className="w-full py-3.5 bg-[#1677FF] text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors cursor-pointer mt-2">
                  Generate Itinerary →
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#111827]">Your Japan Itinerary</h2>
                <button onClick={() => setStep(1)} className="text-sm text-[#1677FF] font-medium cursor-pointer hover:underline">← Edit Trip</button>
              </div>
              <div className="space-y-5">
                {days.map(day => (
                  <div key={day.day} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-[#1677FF] flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{day.day}</span>
                      </div>
                      <div>
                        <p className="font-bold text-[#111827]">Day {day.day}</p>
                        <p className="text-[#94A3B8] text-sm">{day.date}, 2026</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {day.activities.map(a => (
                        <div key={a.title} className="flex items-center gap-4 p-3 rounded-xl bg-[#F5F7FA]">
                          <div className="w-20 text-xs text-[#94A3B8] font-medium shrink-0">{a.time}</div>
                          <div className="w-1 h-8 bg-[#E2E8F0] rounded-full shrink-0" />
                          <div className="flex-1">
                            <p className="font-semibold text-[#111827] text-sm">{a.title}</p>
                          </div>
                          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${activityColors[a.type] ?? "bg-gray-100 text-gray-600"}`}>{a.type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-4">Budget Breakdown</h3>
                {[
                  { label: "Hotels (2 nights)", cost: "$1,160", color: "bg-blue-500" },
                  { label: "Food & Dining", cost: "$280", color: "bg-orange-500" },
                  { label: "Transport", cost: "$120", color: "bg-green-500" },
                  { label: "Activities", cost: "$200", color: "bg-purple-500" },
                ].map(({ label, cost, color }) => (
                  <div key={label} className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
                      <span className="text-[#94A3B8] text-sm">{label}</span>
                    </div>
                    <span className="font-semibold text-[#111827] text-sm">{cost}</span>
                  </div>
                ))}
                <div className="mt-4 pt-4 flex justify-between">
                  <span className="font-bold text-[#111827]">Total</span>
                  <span className="font-extrabold text-[#1677FF] text-lg">$1,760</span>
                </div>
              </div>
              <button className="w-full py-3.5 bg-[#0B1F3A] text-white rounded-xl font-semibold hover:bg-[#1677FF] transition-colors cursor-pointer">
                Save Trip
              </button>
              <button className="w-full py-3.5 border border-[#1677FF] text-[#1677FF] rounded-xl font-semibold hover:bg-[#1677FF]/5 transition-colors cursor-pointer">
                Share Itinerary
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ——————————————————————————————————————————————————
// PAGE: AI ASSISTANT
// ——————————————————————————————————————————————————

function AIAssistantPage() {
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hello! I'm your personal TravelWorld AI assistant. Ask me anything about destinations, hotels, local food, transport, safety or trip planning. I'm here to make your travels extraordinary! 🌍" }
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const quickQuestions = [
    "Best places in Tokyo?",
    "Cheap hotels in Paris?",
    "Local food in Thailand?",
    "Is Japan safe for solo travel?",
    "How to get from Rome to Naples?",
    "Best time to visit Greece?",
  ]

  const fakeResponses: Record<string, string> = {
    "Best places in Tokyo?": "Tokyo's must-visits:\n\n🏯 Senso-ji Temple (Asakusa) — Tokyo's most iconic shrine\n🌸 Shinjuku Gyoen — 144 acres of stunning gardens\n🗼 Tokyo Skytree — 634m tall with panoramic views\n🍣 Tsukiji Outer Market — freshest sushi breakfast experience\n🎮 Akihabara — the global hub of electronics and anime culture\n🌆 Shibuya Crossing — the world's busiest pedestrian crossing",
    "Cheap hotels in Paris?": "Budget-friendly Paris stays:\n\n🏨 Generator Paris (from $35/night) — stylish hostel in the 10th\n🏨 Ibis Paris Bastille (from $89/night) — solid central location\n🏨 Hotel du Nord (from $75/night) — charming canal-side spot\n\nTip: Stay in the 11th or 18th arrondissement for better rates while still being metro-connected to everything.",
    "Local food in Thailand?": "Thailand's essential dishes:\n\n🍜 Pad Thai — stir-fried rice noodles with egg, tamarind and peanuts\n🌶️ Som Tum — green papaya salad, spicy and refreshing\n🍲 Tom Yum Soup — hot & sour lemongrass broth with prawns\n🥘 Massaman Curry — rich, mild coconut curry with potatoes\n🍚 Mango Sticky Rice — the perfect sweet finish",
  }

  const sendMessage = (text?: string) => {
    const msg = text ?? input.trim()
    if (!msg) return
    setMessages(prev => [...prev, { from: "user", text: msg }])
    setInput("")
    setLoading(true)
    setTimeout(() => {
      const reply = fakeResponses[msg] ?? `Great question about "${msg}"! Japan is one of the world's safest destinations with a safety score of 95%. The local emergency number is 110 for police and 119 for ambulance. The people are incredibly helpful, and most major cities have English signage. Would you like specific details about any city or region?`
      setMessages(prev => [...prev, { from: "ai", text: reply }])
      setLoading(false)
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] pt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col" style={{ height: 680 }}>
              {/* Header */}
              <div className="bg-[#0B1F3A] px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1677FF] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold">TravelWorld AI</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                    <p className="text-white/50 text-xs">Online — responds instantly</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "gap-3"}`}>
                    {m.from === "ai" && (
                      <div className="w-8 h-8 rounded-full bg-[#0B1F3A] flex items-center justify-center shrink-0 mt-1">
                        <Zap className="w-4 h-4 text-[#1677FF]" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                        m.from === "user"
                          ? "bg-[#1677FF] text-white rounded-tr-sm"
                          : "bg-[#F5F7FA] border border-gray-100 text-[#111827] rounded-tl-sm"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0B1F3A] flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-[#1677FF]" />
                    </div>
                    <div className="bg-[#F5F7FA] border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3">
                      <div className="flex gap-1.5">
                        {[0, 1, 2].map(i => (
                          <div key={i} className="w-2 h-2 rounded-full bg-[#94A3B8] animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-100">
                <div className="flex gap-3">
                  <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && sendMessage()}
                    placeholder="Ask about any destination..."
                    className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none text-[#111827] placeholder-gray-400 focus:border-[#1677FF] transition-colors"
                  />
                  <button
                    onClick={() => sendMessage()}
                    className="w-10 h-10 bg-[#1677FF] rounded-xl flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#111827] mb-4">Quick Questions</h3>
              <div className="flex flex-col gap-2">
                {quickQuestions.map(q => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-left text-sm px-4 py-2.5 rounded-xl bg-[#F5F7FA] text-[#111827] hover:bg-[#1677FF]/5 hover:text-[#1677FF] transition-colors cursor-pointer font-medium"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#0B1F3A] rounded-2xl p-5">
              <h3 className="font-bold text-white mb-4">AI Features</h3>
              <div className="space-y-3">
                {[
                  { icon: Calendar, label: "Trip Planning", desc: "Full itinerary creation" },
                  { icon: DollarSign, label: "Budget Advice", desc: "Cost estimates & tips" },
                  { icon: Languages, label: "Translation", desc: "Phrase & sign help" },
                  { icon: Shield, label: "Safety Tips", desc: "Real-time alerts" },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1677FF]/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#1677FF]" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{label}</p>
                      <p className="text-white/40 text-xs">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ——————————————————————————————————————————————————
// PAGE: GALLERY
// ——————————————————————————————————————————————————

function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"Photos" | "Videos" | "360°">("Photos")

  const photos = [
    { image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600&h=800&fit=crop&auto=format", location: "Kyoto", country: "Japan", author: "Yuki Tanaka", likes: 2847 },
    { image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop&auto=format", location: "Paris", country: "France", author: "Claire Dubois", likes: 1923 },
    { image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=700&fit=crop&auto=format", location: "Santorini", country: "Greece", author: "Nikos Papadopoulos", likes: 3412 },
    { image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop&auto=format", location: "Tokyo", country: "Japan", author: "Hiroshi M.", likes: 4201 },
    { image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600&h=600&fit=crop&auto=format", location: "Rome", country: "Italy", author: "Marco Ferrari", likes: 1756 },
    { image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&auto=format", location: "Sydney", country: "Australia", author: "Sarah K.", likes: 2103 },
    { image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&h=700&fit=crop&auto=format", location: "Seville", country: "Spain", author: "Pedro García", likes: 987 },
    { image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&h=500&fit=crop&auto=format", location: "Rio de Janeiro", country: "Brazil", author: "Ana Costa", likes: 3891 },
  ]

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <section className="relative h-64 flex items-end overflow-hidden">
        <img src={HERO_IMAGES.gallery} alt="Gallery" className="absolute inset-0 w-full h-full object-cover bg-gray-800" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] to-transparent" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-10 pt-24 w-full">
          <h1 className="text-5xl font-extrabold text-white mb-2">Explore The World Through Photos</h1>
          <p className="text-white/60">Discover amazing places captured by travelers</p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2">
            {(["Photos", "Videos", "360°"] as const).map(t => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${activeTab === t ? "bg-[#0B1F3A] text-white" : "bg-white text-[#94A3B8] border border-gray-200 hover:text-[#111827]"}`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 border border-gray-200 bg-white rounded-xl px-4 py-2.5">
            <Search className="w-4 h-4 text-[#94A3B8]" />
            <input placeholder="Search destination..." className="text-sm outline-none text-[#111827] placeholder-gray-400 w-40" />
          </div>
        </div>

        {activeTab === "Photos" && (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {photos.map(p => (
              <div key={p.image} className="group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-200 break-inside-avoid">
                <img src={p.image} alt={p.location} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-sm">{p.location}</p>
                  <p className="text-white/70 text-xs">{p.country}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-white/60 text-xs">{p.author}</span>
                    <div className="flex items-center gap-1 text-white/80">
                      <Heart className="w-3.5 h-3.5" />
                      <span className="text-xs">{p.likes.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Videos" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {["Tokyo Street Life", "Paris Morning Walk", "Santorini Sunset", "Rome Ancient Streets", "Tokyo Shibuya Night", "Kyoto Bamboo Forest"].map((title, i) => (
              <div key={title} className="group relative h-52 rounded-2xl overflow-hidden cursor-pointer bg-gray-300">
                <img
                  src={photos[i % photos.length].image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm">{title}</p>
                  <p className="text-white/60 text-xs mt-0.5">4:32 · TravelWorld Original</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "360°" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {["Tokyo Shibuya Crossing", "Paris Eiffel Tower Base", "Santorini Caldera View"].map((title, i) => (
              <div key={title} className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer bg-gray-300">
                <img src={photos[i].image} alt={title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-white" />
                  <span className="text-white text-xs font-medium">360°</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Compass className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold">{title}</p>
                  <p className="text-white/60 text-xs mt-0.5">Interactive 360° Tour</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upload */}
        <div className="mt-12 border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-[#1677FF] transition-colors cursor-pointer group">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#F5F7FA] group-hover:bg-[#1677FF]/10 flex items-center justify-center mb-4 transition-colors">
            <Upload className="w-7 h-7 text-[#94A3B8] group-hover:text-[#1677FF] transition-colors" />
          </div>
          <p className="font-bold text-[#111827] text-lg mb-1">Share Your Travel Photos</p>
          <p className="text-[#94A3B8] text-sm mb-4">Drag & drop photos or click to browse</p>
          <button className="px-6 py-2.5 bg-[#1677FF] text-white rounded-xl font-semibold text-sm hover:bg-blue-600 transition-colors cursor-pointer">
            Upload Photos
          </button>
        </div>
      </div>
    </div>
  )
}

// ——————————————————————————————————————————————————
// PAGE: USER PROFILE
// ——————————————————————————————————————————————————

function ProfilePage({ onNavigate }: { onNavigate: NavigateFn }) {
  const [activeSection, setActiveSection] = useState("My Trips")
  const sections = ["My Trips", "Saved Countries", "Favorites", "Reviews", "Settings"]

  const myTrips = [
    { destination: "Japan", dates: "July 20–30, 2026", budget: "$2,800", status: "Upcoming", image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=400&h=250&fit=crop&auto=format" },
    { destination: "Italy", dates: "Oct 5–15, 2026", budget: "$3,200", status: "Planning", image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=250&fit=crop&auto=format" },
    { destination: "Greece", dates: "May 1–10, 2026", budget: "$2,100", status: "Completed", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&h=250&fit=crop&auto=format" },
  ]

  const statusColors: Record<string, string> = {
    Upcoming: "bg-blue-100 text-blue-700",
    Planning: "bg-orange-100 text-orange-700",
    Completed: "bg-green-100 text-green-700",
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] pt-20">
      {/* Profile Header */}
      <div className="bg-[#0B1F3A]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
          <div className="flex items-center gap-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&auto=format"
                alt="Profile"
                className="w-24 h-24 rounded-2xl object-cover border-4 border-white/20 bg-gray-400"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#22C55E] rounded-full border-2 border-[#0B1F3A]" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-white">Alexandra Turner</h1>
              <p className="text-white/60 mt-1">United Kingdom · Joined March 2024</p>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
                  <BadgeCheck className="w-4 h-4 text-[#1677FF]" />
                  <span className="text-white text-sm font-medium">Explorer Level</span>
                </div>
                <span className="text-white/60 text-sm">12 trips · 28 countries</span>
              </div>
            </div>
            <button className="ml-auto px-5 py-2.5 border border-white/20 text-white rounded-xl text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              {sections.map(s => (
                <button
                  key={s}
                  onClick={() => setActiveSection(s)}
                  className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${activeSection === s ? "bg-[#1677FF]/10 text-[#1677FF]" : "text-[#94A3B8] hover:text-[#111827] hover:bg-gray-50"}`}
                >
                  {s}
                  {activeSection === s && <ChevronRight className="w-4 h-4 ml-auto" />}
                </button>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button
                  onClick={() => onNavigate("admin")}
                  className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#94A3B8] hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" /> Admin Dashboard
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {activeSection === "My Trips" && (
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-2xl font-bold text-[#111827]">My Trips</h2>
                  <button onClick={() => onNavigate("trip-planner")} className="flex items-center gap-2 px-4 py-2 bg-[#1677FF] text-white rounded-xl text-sm font-semibold cursor-pointer hover:bg-blue-600 transition-colors">
                    <Calendar className="w-4 h-4" /> New Trip
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {myTrips.map(t => (
                    <div key={t.destination} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer">
                      <div className="h-36 overflow-hidden bg-gray-200 relative">
                        <img src={t.image} alt={t.destination} className="w-full h-full object-cover" />
                        <div className="absolute top-3 right-3">
                          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[t.status]}`}>{t.status}</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-[#111827]">{t.destination}</h3>
                        <p className="text-[#94A3B8] text-xs mt-1">{t.dates}</p>
                        <p className="text-[#1677FF] font-semibold text-sm mt-1">{t.budget}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "Saved Countries" && (
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-5">Saved Countries</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {COUNTRIES.slice(0, 8).map(c => (
                    <div key={c.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer">
                      <div className="h-28 overflow-hidden bg-gray-200">
                        <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-3">
                        <div className="flex items-center gap-1.5">
                          <span>{c.flag}</span>
                          <p className="font-semibold text-[#111827] text-sm">{c.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "Settings" && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#111827] mb-6">Account Settings</h2>
                <div className="space-y-4">
                  {[
                    { label: "Full Name", value: "Alexandra Turner", type: "text" },
                    { label: "Email", value: "alex.turner@gmail.com", type: "email" },
                    { label: "Country", value: "United Kingdom", type: "text" },
                  ].map(({ label, value, type }) => (
                    <div key={label}>
                      <label className="text-sm text-[#94A3B8] mb-1.5 block">{label}</label>
                      <input type={type} defaultValue={value} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none text-[#111827] focus:border-[#1677FF] transition-colors" />
                    </div>
                  ))}
                  <div className="pt-4">
                    <button className="px-6 py-3 bg-[#1677FF] text-white rounded-xl font-semibold text-sm cursor-pointer hover:bg-blue-600 transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {(activeSection === "Favorites" || activeSection === "Reviews") && (
              <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center">
                <Globe className="w-14 h-14 mx-auto text-[#94A3B8] opacity-30 mb-4" />
                <p className="text-[#94A3B8] font-medium">{activeSection} section — coming soon</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ——————————————————————————————————————————————————
// PAGE: ADMIN DASHBOARD
// ——————————————————————————————————————————————————

function AdminPage({ onNavigate }: { onNavigate: NavigateFn }) {
  const [activeAdmin, setActiveAdmin] = useState("Dashboard")
  const adminSections = ["Dashboard", "Countries", "Hotels", "Users", "Reviews", "Settings"]

  const stats = [
    { label: "Total Users", value: "2.4M", change: "+12%", color: "bg-blue-500" },
    { label: "Countries", value: "195", change: "+3", color: "bg-green-500" },
    { label: "Trips Created", value: "892K", change: "+18%", color: "bg-orange-500" },
    { label: "Reviews", value: "4.1M", change: "+7%", color: "bg-purple-500" },
  ]

  const users = [
    { name: "Alexandra Turner", email: "alex@gmail.com", country: "UK", status: "Active", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&auto=format" },
    { name: "Hiroshi Tanaka", email: "hiroshi@mail.jp", country: "Japan", status: "Active", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&auto=format" },
    { name: "Sofia Vasquez", email: "sofia@correo.ar", country: "Argentina", status: "Inactive", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&auto=format" },
    { name: "Marco Rossi", email: "marco@posta.it", country: "Italy", status: "Active", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&auto=format" },
  ]

  return (
    <div className="min-h-screen bg-[#F5F7FA] pt-20 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0B1F3A] min-h-screen fixed left-0 top-20 p-5 hidden lg:block">
        <p className="text-white/30 text-xs uppercase tracking-wider mb-4 px-3">Management</p>
        {adminSections.map(s => (
          <button
            key={s}
            onClick={() => setActiveAdmin(s)}
            className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium mb-1 transition-colors cursor-pointer ${activeAdmin === s ? "bg-[#1677FF] text-white" : "text-white/60 hover:text-white hover:bg-white/5"}`}
          >
            {s}
          </button>
        ))}
        <div className="absolute bottom-10 left-5 right-5">
          <button onClick={() => onNavigate("home")} className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-colors cursor-pointer">
            ← Back to Site
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-0 lg:ml-64 flex-1 p-8">
        {activeAdmin === "Dashboard" && (
          <>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-extrabold text-[#111827]">Dashboard</h1>
                <p className="text-[#94A3B8]">Welcome back, Admin</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                <Clock className="w-4 h-4" />
                <span>Last updated: July 13, 2026</span>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {stats.map(({ label, value, change, color }) => (
                <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center mb-3`}>
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-3xl font-extrabold text-[#111827]">{value}</p>
                  <p className="text-[#94A3B8] text-sm mt-0.5">{label}</p>
                  <p className="text-[#22C55E] text-xs font-semibold mt-1">{change} this month</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-5">Popular Countries This Month</h3>
                {[
                  { name: "Japan 🇯🇵", views: 284700, pct: 92 },
                  { name: "France 🇫🇷", views: 241300, pct: 78 },
                  { name: "Italy 🇮🇹", views: 198200, pct: 64 },
                  { name: "Thailand 🇹🇭", views: 156800, pct: 51 },
                  { name: "Greece 🇬🇷", views: 143100, pct: 46 },
                ].map(({ name, views, pct }) => (
                  <div key={name} className="mb-4 last:mb-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-[#111827]">{name}</span>
                      <span className="text-xs text-[#94A3B8]">{views.toLocaleString()} views</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#1677FF] rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#111827] mb-5">Recent Users</h3>
                <div className="space-y-4">
                  {users.map(u => (
                    <div key={u.email} className="flex items-center gap-3">
                      <img src={u.avatar} alt={u.name} className="w-10 h-10 rounded-full object-cover bg-gray-200" />
                      <div className="flex-1">
                        <p className="font-semibold text-[#111827] text-sm">{u.name}</p>
                        <p className="text-[#94A3B8] text-xs">{u.email}</p>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${u.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                        {u.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeAdmin !== "Dashboard" && (
          <div className="text-center py-24">
            <Settings className="w-14 h-14 mx-auto text-[#94A3B8] opacity-20 mb-4" />
            <h2 className="text-2xl font-bold text-[#111827] mb-2">{activeAdmin}</h2>
            <p className="text-[#94A3B8]">This section is ready for data integration</p>
          </div>
        )}
      </main>
    </div>
  )
}

// ——————————————————————————————————————————————————
// ROOT APP
// ——————————————————————————————————————————————————

function IntroSplash({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const done = window.setTimeout(onDone, reduceMotion ? 0 : 3200)
    return () => window.clearTimeout(done)
  }, [onDone])

  return (
    <div className="intro-splash" aria-live="polite" aria-label="Loading TravelWorld">
      <div className="intro-splash__earth" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1200&h=1200&fit=crop&auto=format"
          alt=""
          className="intro-splash__earth-img"
        />
      </div>
      <div className="intro-splash__glow" />
      <p className="intro-splash__brand">TravelWorld</p>
      <h1 className="intro-splash__text">Discover the Whole World</h1>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState<Page>("home")
  const [selectedCountry, setSelectedCountry] = useState("Japan")
  const [showIntro, setShowIntro] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )

  const navigate: NavigateFn = (p, country) => {
    if (country) setSelectedCountry(country)
    setPage(p)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const showHeader = page !== "admin"
  const showFooter = !["admin", "ai-assistant", "map"].includes(page)
  const contentPad = showHeader && page !== "home"

  return (
    <div className="font-sans">
      {showIntro && <IntroSplash onDone={() => setShowIntro(false)} />}

      <div className={showIntro ? "invisible" : "animate-app-reveal"}>
        {showHeader && <Header currentPage={page} onNavigate={navigate} />}

        <div className={contentPad ? "pt-20" : ""}>
          {page === "home" && <HomePage onNavigate={navigate} />}
          {page === "countries" && <CountriesPage onNavigate={navigate} />}
          {page === "country-detail" && (
            <CountryDetailPage onNavigate={navigate} selectedCountry={selectedCountry} />
          )}
          {page === "hotels" && <HotelsPage onNavigate={navigate} />}
          {page === "transport" && <TransportPage />}
          {page === "culture" && <CulturePage />}
          {page === "safety" && <SafetyPage />}
          {page === "map" && <MapPage />}
          {page === "trip-planner" && <TripPlannerPage />}
          {page === "ai-assistant" && <AIAssistantPage />}
          {page === "gallery" && <GalleryPage />}
          {page === "profile" && <ProfilePage onNavigate={navigate} />}
          {page === "admin" && <AdminPage onNavigate={navigate} />}
          {page === "restaurants" && (
            <div className="text-center py-32">
              <Utensils className="w-14 h-14 mx-auto text-[#94A3B8] opacity-20 mb-4" />
              <h2 className="text-2xl font-bold text-[#111827]">Restaurants & Food</h2>
              <p className="text-[#94A3B8]">Coming soon...</p>
            </div>
          )}
        </div>

        {showFooter && <Footer onNavigate={navigate} />}
      </div>
    </div>
  )
}
