"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  MapPin,
  ChevronDown,
  Phone,
  Mail,
  User,
  Menu,
  X,
  Star,
  ArrowRight,
  ArrowLeft,
  BadgeCheck,
  Building2,
  Stethoscope,
  Plane,
  Car,
  Sparkles,
  GraduationCap,
  Shirt,
  Dumbbell,
  Truck,
  Briefcase,
  Landmark,
  Home,
  Hotel,
  Film,
  Utensils,
  Wrench,
  Paintbrush,
  Bug,
  Droplets,
  Sofa,
  Refrigerator,
  Scissors,
  Baby,
  ShoppingBag,
  Monitor,
  Wifi,
  CreditCard,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Heart,
  Clock,
  Check,
  Flame,
  Navigation,
  TrendingUp,
  Zap,
  Tv,
  ChevronRight,
  Hammer,
} from "lucide-react";
import { getTrendingProducts } from "@/lib/product-data";
import { searchAll, getTypeConfig, popularCities, getRecentLocations, saveRecentLocation, type SearchSuggestion, type SuggestionType } from "@/lib/search-data";
import StoreCard from "@/components/justdial/StoreCard";

const topCategories = [
  { icon: Building2, label: "B2B", color: "#3B82F6", bg: "#EFF6FF", slug: "b2b" },
  { icon: Stethoscope, label: "Doctors", color: "#EF4444", bg: "#FEF2F2", slug: "doctors" },
  { icon: Plane, label: "Travel", color: "#F59E0B", bg: "#FFFBEB", slug: "travel" },
  { icon: Car, label: "Car Hire", color: "#10B981", bg: "#ECFDF5", slug: "car-hire" },
  { icon: Sparkles, label: "Beauty", color: "#EC4899", bg: "#FDF2F8", slug: "beauty" },
  { icon: GraduationCap, label: "Education", color: "#8B5CF6", bg: "#F5F3FF", slug: "education" },
  { icon: Shirt, label: "Fashion", color: "#F97316", bg: "#FFF7ED", slug: "fashion" },
  { icon: Dumbbell, label: "Gyms", color: "#06B6D4", bg: "#ECFEFF", slug: "gyms" },
  { icon: Truck, label: "Packers", color: "#14B8A6", bg: "#F0FDFA", slug: "packers" },
  { icon: Briefcase, label: "Jobs", color: "#6366F1", bg: "#EEF2FF", slug: "jobs" },
  { icon: Landmark, label: "Real Estate", color: "#D97706", bg: "#FFFBEB", slug: "real-estate" },
  { icon: Home, label: "Home Decor", color: "#059669", bg: "#ECFDF5", slug: "home-decor" },
  { icon: Hotel, label: "Hotels", color: "#DC2626", bg: "#FEF2F2", slug: "hotels" },
  { icon: Film, label: "Movies", color: "#7C3AED", bg: "#F5F3FF", slug: "movies" },
  { icon: Utensils, label: "Restaurants", color: "#EA580C", bg: "#FFF7ED", slug: "restaurants" },
  { icon: ShoppingBag, label: "Shopping", color: "#2563EB", bg: "#EFF6FF", slug: "shopping" },
  { icon: Monitor, label: "Electronics", color: "#4F46E5", bg: "#EEF2FF", slug: "electronics" },
  { icon: Wrench, label: "Repairs", color: "#0891B2", bg: "#ECFEFF", slug: "repairs" },
  { icon: Heart, label: "Health", color: "#E11D48", bg: "#FFF1F2", slug: "health" },
  { icon: CreditCard, label: "Loans", color: "#15803D", bg: "#F0FDF4", slug: "loans" },
  { icon: Wifi, label: "Internet", color: "#7C3AED", bg: "#F5F3FF", slug: "internet" },
  { icon: Baby, label: "Maternity", color: "#DB2777", bg: "#FCE7F3", slug: "maternity" },
  { icon: Globe, label: "Visa", color: "#1D4ED8", bg: "#EFF6FF", slug: "visa" },
  { icon: Scissors, label: "Salons", color: "#C026D3", bg: "#FAF5FF", slug: "salons" },
];

const homeServices = [
  { icon: Wrench, label: "AC Repair", rating: "4.5", pros: "1.2K", color: "#3B82F6", slug: "ac-repair" },
  { icon: Droplets, label: "Plumber", rating: "4.4", pros: "890", color: "#06B6D4", slug: "plumber" },
  { icon: Zap, label: "Electrician", rating: "4.6", pros: "1.5K", color: "#F59E0B", slug: "electrician" },
  { icon: Sofa, label: "Carpenter", rating: "4.3", pros: "640", color: "#8B5CF6", slug: "carpenter" },
  { icon: Paintbrush, label: "Painter", rating: "4.4", pros: "420", color: "#EC4899", slug: "painter" },
  { icon: Sparkles, label: "Home Cleaning", rating: "4.7", pros: "2.1K", color: "#10B981", slug: "deep-cleaning" },
  { icon: Bug, label: "Pest Control", rating: "4.5", pros: "320", color: "#A78BFA", slug: "pest-control" },
  { icon: Tv, label: "CCTV Installation", rating: "4.6", pros: "180", color: "#0EA5E9", slug: "cctv" },
];

const trendingSearches = [
  "Schools",
  "Beauty Parlours",
  "Vijay Sales",
  "Hospitals",
  "Restaurants",
  "Hotels",
  "Real Estate",
  "Car Dealers",
  "Interior Design",
  "Dentists",
  "Gyms",
  "Packers & Movers",
];

const featuredStores = [
  { name: "Shivam Fast Food", category: "Fast Food \u2022 Restaurant", rating: "4.5", reviews: "128", distance: "0.3 km", address: "Shop 12, MG Road, Andheri West", logoEmoji: "\uD83C\uDF54", img: "/images/stores/shivam-fast-food.png", storeId: "STR-10005" },
  { name: "Look & Style Salon", category: "Beauty \u2022 Salon", rating: "4.7", reviews: "96", distance: "0.5 km", address: "2nd Floor, Link Square Mall", logoEmoji: "\u2702\uFE0F", img: "/images/stores/look-style-salon.png", storeId: "STR-70001" },
  { name: "CareWell Pharmacy", category: "Medical \u2022 Pharmacy", rating: "4.6", reviews: "88", distance: "0.7 km", address: "Ground Floor, City Center", logoEmoji: "\uD83D\uDC8A", img: "/images/stores/carewell-pharmacy.png", storeId: "STR-100001" },
  { name: "Fresh Mart Grocery", category: "Grocery \u2022 Supermarket", rating: "4.4", reviews: "215", distance: "0.4 km", address: "Plot 5, SV Road, Malad West", logoEmoji: "\uD83E\uDDF1", img: "/images/stores/fresh-mart-grocery.png", storeId: "STR-40006" },
  { name: "QuickFix Electronics", category: "Electronics \u2022 Mobile", rating: "4.3", reviews: "167", distance: "0.9 km", address: "Shop 8, Heera Panna Mall", logoEmoji: "\uD83D\uDCF1", img: "/images/stores/quickfix-electronics.png", storeId: "STR-90001" },
  { name: "Green Leaf Cafe", category: "Cafe \u2022 Restaurant", rating: "4.8", reviews: "302", distance: "1.2 km", address: "1st Floor, Hill Road, Bandra", logoEmoji: "\u2615", img: "/images/stores/green-leaf-cafe.png" },
];

const trendingStores = [
  { name: "Sunrise Public School", category: "Education \u2022 School", rating: "4.6", reviews: "340", distance: "0.8 km", address: "Sector 7, DPS Road, Nerul", logoEmoji: "\uD83C\uDFEB", img: "/images/guides/schools-delhi.png", storeId: "STR-130001" },
  { name: "Glow Beauty Parlour", category: "Beauty \u2022 Parlour", rating: "4.8", reviews: "256", distance: "0.4 km", address: "Shop 3, Linking Road, Bandra", logoEmoji: "\uD83D\uDC85", img: "/images/stores/look-style-salon.png", storeId: "STR-70001" },
  { name: "Vijay Sales Store", category: "Electronics \u2022 Appliances", rating: "4.3", reviews: "512", distance: "1.1 km", address: "MG Road, Andheri East", logoEmoji: "\uD83D\uDCE6", img: "/images/stores/quickfix-electronics.png", storeId: "STR-90001" },
  { name: "Royal Banquet Hall", category: "Venue \u2022 Banquet", rating: "4.5", reviews: "189", distance: "1.5 km", address: "Juhu Tara Road, Juhu", logoEmoji: "\uD83C\uDF89", img: "/images/collections/wedding-planners.png", storeId: "STR-10005" },
  { name: "SmileCare Dental", category: "Medical \u2022 Dentist", rating: "4.7", reviews: "421", distance: "0.6 km", address: "2nd Floor, Kohinoor City", logoEmoji: "\uD83E\uDDF7", img: "/images/businesses/sharma-dental.png", storeId: "STR-60008" },
  { name: "FitPro Gym & Spa", category: "Fitness \u2022 Gym", rating: "4.4", reviews: "198", distance: "0.9 km", address: "Oberoi Mall, Goregaon", logoEmoji: "\uD83D\uDCAA", img: "/images/businesses/fitzone-gym.png", storeId: "STR-80001" },
];

export default function DesktopLayout() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("Mumbai");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);
  const trendingRef = useRef<HTMLDivElement>(null);
  const [featuredScrollPos, setFeaturedScrollPos] = useState(0);
  const [trendingScrollPos, setTrendingScrollPos] = useState(0);

  // ── Location & Search State ──
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [locationSearch, setLocationSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [recentLocations, setRecentLocations] = useState<string[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const locationDropdownRef = useRef<HTMLDivElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setRecentLocations(getRecentLocations()); }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (locationDropdownRef.current && !locationDropdownRef.current.contains(e.target as Node)) {
        setLocationDropdownOpen(false);
        setLocationSearch("");
      }
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target as Node) &&
          searchInputRef.current && !searchInputRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Debounced search
  useEffect(() => {
    if (!searchQuery.trim()) { setSuggestions([]); setShowSuggestions(false); return; }
    const t = setTimeout(() => {
      setSuggestions(searchAll(searchQuery, location, 5));
      setShowSuggestions(true);
    }, 150);
    return () => clearTimeout(t);
  }, [searchQuery, location]);

  const selectCity = useCallback((city: string) => {
    setLocation(city);
    saveRecentLocation(city);
    setRecentLocations(getRecentLocations());
    setLocationDropdownOpen(false);
    setLocationSearch("");
  }, []);

  const handleSuggestionClick = useCallback((s: SearchSuggestion) => {
    setShowSuggestions(false);
    setSearchQuery("");
    router.push(s.href);
  }, [router]);

  const scrollFeatured = (dir: 'left' | 'right') => {
    if (!featuredRef.current) return;
    const scrollAmount = 240;
    featuredRef.current.scrollBy({ left: dir === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
  };
  const scrollTrending = (dir: 'left' | 'right') => {
    if (!trendingRef.current) return;
    const scrollAmount = 240;
    trendingRef.current.scrollBy({ left: dir === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
  };

  // Track scroll positions for arrow visibility
  const handleFeaturedScroll = () => {
    if (featuredRef.current) setFeaturedScrollPos(featuredRef.current.scrollLeft);
  };
  const handleTrendingScroll = () => {
    if (trendingRef.current) setTrendingScrollPos(trendingRef.current.scrollLeft);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#0056b3] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-8">
          <div className="flex items-center gap-4">
            <span>Get App |</span>
            <span>List Your Business Free</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline flex items-center gap-1">
              <Facebook className="w-3 h-3" />
            </a>
            <a href="#" className="hover:underline flex items-center gap-1">
              <Twitter className="w-3 h-3" />
            </a>
            <a href="#" className="hover:underline flex items-center gap-1">
              <Instagram className="w-3 h-3" />
            </a>
            <a href="#" className="hover:underline flex items-center gap-1">
              <Youtube className="w-3 h-3" />
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:underline">Login</a>
            <a href="#" className="hover:underline">Sign Up</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#e42529]">J</span>
              <span className="text-2xl font-bold text-[#0056b3]">ust</span>
              <span className="text-2xl font-bold text-[#e42529]">D</span>
              <span className="text-2xl font-bold text-[#0056b3]">ial</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-6 relative" ref={suggestionsRef}>
            <div className="flex items-center border-2 border-[#0056b3] rounded-lg overflow-hidden">
              {/* Location Selector */}
              <div className="relative" ref={locationDropdownRef}>
                <button
                  onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
                  className="flex items-center px-3 py-2 border-r bg-gray-50 gap-2 min-w-[180px] h-full"
                >
                  <MapPin className="w-4 h-4 text-[#e42529]" />
                  <span className="text-sm font-medium text-gray-700 truncate">{location}</span>
                  <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${locationDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {/* Location Dropdown */}
                {locationDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-[300px] bg-white rounded-lg shadow-xl border border-gray-100 z-50 overflow-hidden">
                    <div className="p-2 border-b">
                      <div className="flex items-center bg-gray-50 rounded-md px-3 py-2 gap-2">
                        <Search className="w-3.5 h-3.5 text-gray-400" />
                        <input
                          autoFocus
                          type="text"
                          placeholder="Search city..."
                          value={locationSearch}
                          onChange={(e) => setLocationSearch(e.target.value)}
                          className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400"
                        />
                      </div>
                    </div>
                    <div className="max-h-[320px] overflow-y-auto">
                      {/* Current Location */}
                      <button
                        onClick={() => selectCity("Mumbai")}
                        className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-gray-50 text-left"
                      >
                        <span className="text-[#0056b3] text-sm">Use Current Location</span>
                      </button>
                      {recentLocations.length > 0 && (
                        <>
                          <div className="px-3 pt-2 pb-1"><span className="text-[11px] font-semibold text-gray-400 uppercase">Recent</span></div>
                          {recentLocations
                            .filter((c) => !locationSearch || c.toLowerCase().includes(locationSearch.toLowerCase()))
                            .map((city) => (
                              <button key={`r-${city}`} onClick={() => selectCity(city)} className="w-full flex items-center gap-2.5 px-3 py-1.5 hover:bg-gray-50 text-left">
                                <Clock className="w-3.5 h-3.5 text-gray-400" />
                                <span className="text-sm text-gray-700 flex-1">{city}</span>
                                {city === location && <Check className="w-3.5 h-3.5 text-[#0056b3]" />}
                              </button>
                            ))}
                        </>
                      )}
                      <div className="px-3 pt-2 pb-1"><span className="text-[11px] font-semibold text-gray-400 uppercase">Popular Cities</span></div>
                      {popularCities
                        .filter((c) => !locationSearch || c.name.toLowerCase().includes(locationSearch.toLowerCase()) || c.state.toLowerCase().includes(locationSearch.toLowerCase()))
                        .map((c) => (
                          <button key={c.name} onClick={() => selectCity(c.name)} className="w-full flex items-center gap-2.5 px-3 py-1.5 hover:bg-gray-50 text-left">
                            <MapPin className="w-3.5 h-3.5 text-gray-400" />
                            <span className="text-sm text-gray-700 flex-1">{c.name}</span>
                            <span className="text-xs text-gray-400">{c.state}</span>
                            {c.name === location && <Check className="w-3.5 h-3.5 text-[#0056b3]" />}
                          </button>
                        ))}
                    </div>
                  </div>
                )}
              </div>
              {/* Search Input */}
              <div className="flex-1 flex items-center px-3 py-2">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search for products, services and businesses"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => { if (searchQuery.trim()) { setSuggestions(searchAll(searchQuery, location, 5)); setShowSuggestions(true); } }}
                  className="w-full text-sm outline-none text-gray-700 placeholder-gray-400"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && searchQuery) {
                      const results = searchAll(searchQuery, location, 1);
                      if (results.length > 0) {
                        handleSuggestionClick(results[0]);
                      }
                    }
                  }}
                />
              </div>
              <button
                onClick={() => {
                  if (!searchQuery) return;
                  const results = searchAll(searchQuery, location, 1);
                  if (results.length > 0) handleSuggestionClick(results[0]);
                }}
                className="bg-[#e42529] text-white px-6 py-2.5 text-sm font-semibold hover:bg-[#c91e22] transition-colors"
              >
                Search
              </button>
            </div>

            {/* Search Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-100 z-50 max-h-[420px] overflow-y-auto">
                {(() => {
                  const groups: { type: SuggestionType; items: SearchSuggestion[] }[] = [];
                  let currentType: SuggestionType | null = null;
                  for (const s of suggestions) {
                    if (s.type !== currentType) {
                      currentType = s.type;
                      groups.push({ type: s.type, items: [s] });
                    } else {
                      groups[groups.length - 1].items.push(s);
                    }
                  }
                  return groups.map((group) => (
                    <div key={group.type}>
                      <div className="px-3 pt-2.5 pb-1">
                        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                          {getTypeConfig(group.type).emoji} {getTypeConfig(group.type).label}
                        </span>
                      </div>
                      {group.items.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => handleSuggestionClick(s)}
                          className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 text-left transition-colors"
                        >
                          <span className="text-base flex-shrink-0">{s.emoji}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-800 truncate">{s.label}</p>
                            <p className="text-xs text-gray-400 truncate">{s.subtitle}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  ));
                })()}
              </div>
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a href="#" className="text-xs text-gray-600 hover:text-[#0056b3] flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>Get App</span>
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-[#0056b3]">
              Advertise
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-[#0056b3] flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>Login</span>
            </a>
          </div>
        </div>

        {/* Sub Navigation */}
        <div className="border-t bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-6 h-10 text-xs font-medium text-gray-600 overflow-x-auto">
            {["Home", "Near Me", "B2B Marketplace", "Jobs", "Real Estate", "Movies", "Rent & Hire", "Deals", "Trending"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className={`whitespace-nowrap hover:text-[#0056b3] transition-colors ${item === "Home" ? "text-[#0056b3] font-bold border-b-2 border-[#0056b3]" : ""}`}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-[#0056b3] to-[#003d80] text-white">
          <div className="max-w-7xl mx-auto px-4 py-10 flex items-center justify-between">
            <div className="max-w-lg">
              <h1 className="text-3xl font-bold mb-3">India&apos;s No. 1 Local Search Engine</h1>
              <p className="text-blue-100 mb-5 text-sm leading-relaxed">
                Find the best businesses, services, and products near you. Get contact details, reviews, ratings, and more.
              </p>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/10 rounded-lg px-4 py-2 text-center">
                  <div className="text-2xl font-bold">18 Cr+</div>
                  <div className="text-xs text-blue-200">People Searching</div>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2 text-center">
                  <div className="text-2xl font-bold">3.5 Cr+</div>
                  <div className="text-xs text-blue-200">Listed Businesses</div>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2 text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-xs text-blue-200">Cities Covered</div>
                </div>
              </div>
              <button className="bg-[#e42529] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#c91e22] transition-colors">
                List Your Business for FREE
              </button>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 rounded-2xl p-8 w-80">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Search className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Search</div>
                      <div className="text-xs text-blue-200">Find anything locally</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Call</div>
                      <div className="text-xs text-blue-200">Connect instantly</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Review</div>
                      <div className="text-xs text-blue-200">Read & write reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-gray-800">Explore Popular Categories</h2>
            <Link href="/categories" className="text-[#0056b3] text-sm font-medium hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-6 lg:grid-cols-8 gap-3">
            {topCategories.map((cat) => (
              <Link
                key={cat.label}
                href={`/category/${cat.slug}`}
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:shadow-md hover:bg-white transition-all group"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: cat.bg }}
                >
                  <cat.icon className="w-7 h-7" style={{ color: cat.color }} />
                </div>
                <span className="text-xs font-medium text-gray-700 text-center leading-tight">{cat.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Stores */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0056b3] to-[#0077E6] flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 leading-tight">Featured Stores Near You</h2>
                <p className="text-[11px] text-gray-500 font-medium leading-tight">Top-rated businesses in your area</p>
              </div>
            </div>
            <Link href="/explore?category=doctors" className="text-[#0056b3] text-sm font-semibold hover:underline flex items-center gap-1 bg-[#0056b3]/8 px-3 py-1.5 rounded-full">
              See All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="relative group/featured">
            <div ref={featuredRef} onScroll={handleFeaturedScroll} className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {featuredStores.map((store) => (
                <Link
                  key={store.name}
                  href={`/store/${store.storeId}`}
                  className="flex-shrink-0 w-[260px] bg-white rounded-2xl overflow-hidden shadow-sm shadow-black/[0.06] ring-1 ring-black/[0.04] hover:shadow-lg hover:shadow-black/[0.1] hover:-translate-y-0.5 transition-all group cursor-pointer"
                >
                  {/* Banner image (reduced height) */}
                  <div className="relative h-[100px] overflow-hidden">
                    <Image
                      src={store.img}
                      alt={store.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="240px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/5" />

                    {/* Top: Featured + Open */}
                    <div className="absolute top-2 left-2.5 right-2.5 flex items-center justify-between">
                      <span className="bg-amber-500/95 backdrop-blur-sm text-white text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center gap-0.5 shadow-sm">
                        <Flame className="w-2.5 h-2.5" />
                        Featured
                      </span>
                      <span className="bg-emerald-500/95 backdrop-blur-sm text-white text-[9.5px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        Open
                      </span>
                    </div>

                    {/* Bottom-left: Rating pill */}
                    <div className="absolute bottom-2 left-2.5">
                      <div className="bg-white/95 backdrop-blur-sm text-gray-900 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        {store.rating}
                      </div>
                    </div>

                    {/* Floating logo with trusted tick — z-indexed above content */}
                    <div className="absolute -bottom-5 right-3 z-10">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-lg ring-2 ring-white">
                          {store.logoEmoji}
                        </div>
                        {/* Trusted tick badge */}
                        <div className="absolute -bottom-0.5 -left-0.5 w-[18px] h-[18px] bg-[#0056b3] rounded-full flex items-center justify-center ring-2 ring-white">
                          <Check className="w-[11px] h-[11px] text-white" strokeWidth={4} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-3 pt-3 pb-3">
                    {/* Name */}
                    <div className="mb-1 pr-12">
                      <h3 className="text-[14px] font-bold text-gray-900 leading-tight truncate">{store.name}</h3>
                    </div>

                    {/* Category */}
                    <p className="text-[11px] text-gray-500 font-medium truncate mb-1.5">{store.category}</p>

                    {/* Address */}
                    <div className="flex items-center gap-1 mb-2">
                      <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0" />
                      <span className="text-[10.5px] text-gray-500 truncate">{store.address}</span>
                    </div>

                    {/* Reviews + Distance chip */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <span className="text-[10.5px] text-gray-400 font-medium">{store.reviews} reviews</span>
                      <span className="bg-[#0056b3]/8 text-[#0056b3] text-[10.5px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                        <Navigation className="w-3 h-3" />
                        {store.distance}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {featuredScrollPos > 0 && (
              <button onClick={() => scrollFeatured('left')} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-9 h-9 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 opacity-0 group-hover/featured:opacity-100 transition-opacity z-10">
                <ArrowLeft className="w-4 h-4 text-gray-700" />
              </button>
            )}
            <button onClick={() => scrollFeatured('right')} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-9 h-9 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 opacity-0 group-hover/featured:opacity-100 transition-opacity z-10">
              <ArrowRight className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </section>

        {/* CTA Banner — Home Services (Desktop only, image-based) */}
        <section className="max-w-7xl mx-auto px-4 pt-8">
          <Link
            href="/register"
            className="group block relative rounded-3xl overflow-hidden ring-1 ring-gray-200 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="relative w-full aspect-[1200/420]">
              <Image
                src="/banners/home-services-cta.png"
                alt="Home Services — Find trusted professionals for your home needs"
                fill
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </Link>
        </section>

        {/* Home Services — Desktop 2-column layout (info + 2x4 cards grid) */}
        <section className="bg-gradient-to-b from-[#FAFAFC] to-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-12 gap-8 items-start">
              {/* Left column: heading + info + CTA */}
              <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-24">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 bg-[#0056b3]/8 text-[#0056b3] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    <Home className="w-3 h-3" />
                    Home Services
                  </span>
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 leading-tight mb-3">
                  Find Trusted<br />
                  <span className="bg-gradient-to-r from-[#0056b3] to-[#0077E6] bg-clip-text text-transparent">
                    Home Service
                  </span>{" "}
                  Professionals
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-sm">
                  Book reliable professionals for your home needs — verified experts, transparent pricing, and on-time service guaranteed.
                </p>

                {/* Location indicator */}
                <div className="flex items-center gap-2 mb-6 text-sm text-gray-700">
                  <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-400 font-medium leading-none mb-0.5">Near you</div>
                    <div className="font-semibold text-gray-900 text-[13px] leading-none">Kaithal, Haryana</div>
                  </div>
                </div>

                {/* CTA button */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-[#0056b3] hover:bg-[#0047a3] text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-lg shadow-[#0056b3]/20 hover:shadow-xl hover:shadow-[#0056b3]/30 hover:-translate-y-0.5 transition-all"
                >
                  View All Services
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Trust stats */}
                <div className="flex items-center gap-5 mt-8 pt-6 border-t border-gray-100">
                  <div>
                    <div className="text-xl font-bold text-gray-900">10K+</div>
                    <div className="text-[11px] text-gray-500 font-medium">Verified Pros</div>
                  </div>
                  <div className="w-px h-8 bg-gray-200" />
                  <div>
                    <div className="text-xl font-bold text-gray-900">4.6★</div>
                    <div className="text-[11px] text-gray-500 font-medium">Avg Rating</div>
                  </div>
                  <div className="w-px h-8 bg-gray-200" />
                  <div>
                    <div className="text-xl font-bold text-gray-900">30min</div>
                    <div className="text-[11px] text-gray-500 font-medium">Response</div>
                  </div>
                </div>
              </div>

              {/* Right column: 2x4 service cards grid */}
              <div className="col-span-12 lg:col-span-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {homeServices.map((service) => (
                    <Link
                      key={service.label}
                      href={`/services?category=${service.slug}`}
                      className="group relative bg-white rounded-2xl p-4 ring-1 ring-black/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all cursor-pointer overflow-hidden"
                    >
                      {/* Subtle gradient glow on hover */}
                      <div
                        className="absolute -top-8 -right-8 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity"
                        style={{ background: service.color }}
                      />

                      {/* Icon container — circular gradient */}
                      <div
                        className="relative w-12 h-12 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                        style={{
                          background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                          boxShadow: `0 6px 14px ${service.color}40`,
                        }}
                      >
                        <service.icon className="w-5 h-5 text-white" strokeWidth={2.2} />
                      </div>

                      {/* Service name */}
                      <h3 className="text-[14px] font-bold text-gray-900 leading-tight mb-1.5">
                        {service.label}
                      </h3>

                      {/* Rating + Pros count */}
                      <div className="flex items-center gap-1.5 mb-2.5">
                        <div className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                          <span className="text-[11px] font-bold text-gray-800">{service.rating}</span>
                        </div>
                        <span className="w-0.5 h-0.5 rounded-full bg-gray-300" />
                        <span className="text-[11px] text-gray-500 font-medium">{service.pros} pros</span>
                      </div>

                      {/* Available Today badge */}
                      <div
                        className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: service.color + "14",
                          color: service.color,
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }} />
                        Available Today
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Bottom trust row */}
                <div className="mt-4 flex items-center justify-between gap-3 bg-gradient-to-r from-[#0056b3]/[0.04] to-transparent rounded-xl px-4 py-3">
                  <div className="flex items-center gap-2 text-[12px] text-gray-600">
                    <BadgeCheck className="w-4 h-4 text-[#0056b3]" />
                    <span className="font-medium">Background-verified professionals</span>
                  </div>
                  <Link href="/services" className="text-[12px] font-semibold text-[#0056b3] hover:underline flex items-center gap-1">
                    Browse all <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Banner */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 flex items-center justify-between">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-1">Get Loan Against Property</h3>
              <p className="text-green-100 text-sm">Starting from 9.00% interest rate. Quick approval & easy process.</p>
            </div>
            <button className="bg-white text-green-700 px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-green-50 transition-colors whitespace-nowrap">
              Apply Now
            </button>
          </div>
        </section>

        {/* Trending Searches Near You */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-gray-800">Trending Searches Near You</h2>
            <Link href="/explore?category=doctors" className="text-[#0056b3] text-sm font-medium hover:underline flex items-center gap-1">
              See All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative group/trending">
            <div ref={trendingRef} onScroll={handleTrendingScroll} className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {trendingStores.map((store, i) => (
                <StoreCard
                  key={`${store.name}-${i}`}
                  name={store.name}
                  category={store.category}
                  rating={store.rating}
                  reviews={store.reviews}
                  distance={store.distance}
                  address={store.address}
                  logoEmoji={store.logoEmoji}
                  img={store.img}
                  storeId={store.storeId}
                  variant="desktop"
                  index={i}
                />
              ))}
            </div>
            {trendingScrollPos > 0 && (
              <button onClick={() => scrollTrending('left')} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-9 h-9 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 opacity-0 group-hover/trending:opacity-100 transition-opacity z-10">
                <ArrowLeft className="w-4 h-4 text-gray-700" />
              </button>
            )}
            <button onClick={() => scrollTrending('right')} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-9 h-9 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 opacity-0 group-hover/trending:opacity-100 transition-opacity z-10">
              <ArrowRight className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </section>

        {/* Featured Business Listings */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-gray-800">Popular Businesses in {location}</h2>
            <Link href="/explore?category=restaurants" className="text-[#0056b3] text-sm font-medium hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[
              { name: "Sharma Dental Clinic", category: "Dentists", rating: 4.6, reviews: 1240, location: "Andheri West", img: "/images/businesses/sharma-dental.png", storeId: "STR-60008" },
              { name: "TechFix Electronics", category: "Electronics Repair", rating: 4.3, reviews: 856, location: "Bandra East", img: "/images/businesses/techfix-electronics.png" },
              { name: "FreshBite Restaurant", category: "Restaurants", rating: 4.5, reviews: 2100, location: "Juhu", img: "/images/businesses/freshbite-restaurant.png" },
              { name: "QuickMove Packers", category: "Packers & Movers", rating: 4.2, reviews: 670, location: "Goregaon", img: "/images/businesses/quickmove-packers.png" },
              { name: "StyleHub Salon", category: "Beauty Parlours", rating: 4.7, reviews: 1890, location: "Vile Parle", img: "/images/businesses/stylehub-salon.png" },
              { name: "FitZone Gym", category: "Gyms & Fitness", rating: 4.4, reviews: 920, location: "Malad", img: "/images/businesses/fitzone-gym.png", storeId: "STR-80001" },
            ].map((biz, i) => (
              <StoreCard
                key={`${biz.name}-${i}`}
                name={biz.name}
                category={biz.category}
                rating={biz.rating}
                reviews={biz.reviews}
                address={biz.location}
                img={biz.img}
                storeId={biz.storeId}
                variant="desktop"
                index={i}
              />
            ))}
          </div>
        </section>

        {/* Explore Top Tourist Places */}
        <section className="bg-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-lg font-bold text-gray-800 mb-5">Explore Top Tourist Places</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "India Gate", desc: "Historical Monuments", img: "/images/tourist/delhi.png", slug: "india-gate" },
                { name: "Taj Mahal", desc: "Wonder of the World", img: "/images/tourist/agra.png", slug: "taj-mahal" },
                { name: "Laxman Jhula", desc: "Adventure Sports", img: "/images/tourist/rishikesh.png", slug: "rishikesh" },
                { name: "Robbers Cave", desc: "Hill Station", img: "/images/tourist/dehradun.png", slug: "dehradun" },
                { name: "Gateway of India", desc: "Iconic Landmark", img: "/images/tourist/delhi.png", slug: "gateway-of-india" },
                { name: "Red Fort", desc: "Mughal Heritage", img: "/images/tourist/agra.png", slug: "red-fort" },
              ].map((place) => (
                <Link
                  key={place.name}
                  href={`/place/${place.slug}`}
                  className="relative rounded-xl overflow-hidden hover:shadow-lg transition-all group h-40 block"
                >
                  <Image src={place.img} alt={place.name} fill className="object-cover group-hover:scale-105 transition-transform" sizes="300px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-bold text-white text-sm">{place.name}</h3>
                    <p className="text-xs text-white/80">{place.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Products */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🔥</span>
                <h2 className="text-lg font-bold text-gray-800">Trending Products</h2>
              </div>
              <p className="text-sm text-gray-500 mt-0.5">Popular products from verified businesses</p>
            </div>
            <Link href="/services" className="text-[#0056b3] text-sm font-medium hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative group/trending-products">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {getTrendingProducts().map((product) => {
                const origNum = product.originalPrice ? parseInt(product.originalPrice.replace(/[^\d]/g, ""), 10) : 0;
                const currNum = parseInt(product.price.replace(/[^\d]/g, ""), 10);
                const discount = origNum > 0 ? Math.round(((origNum - currNum) / origNum) * 100) : 0;
                const catGradients: Record<string, string> = {
                  Ayurvedic: "from-green-50 to-emerald-100", "Pain Relief": "from-blue-50 to-sky-100",
                  Nutrition: "from-orange-50 to-amber-100", Grocery: "from-yellow-50 to-lime-100",
                  "Cooking Oil": "from-amber-50 to-yellow-100", Flour: "from-orange-50 to-yellow-100",
                  Dairy: "from-sky-50 to-blue-100", Rice: "from-green-50 to-lime-100",
                  "Instant Food": "from-red-50 to-orange-100", "Mobile Accessories": "from-slate-50 to-gray-100",
                  Cables: "from-gray-50 to-slate-100", Audio: "from-violet-50 to-purple-100",
                  "Power Banks": "from-green-50 to-teal-100", Snacks: "from-orange-50 to-red-50",
                  Supplements: "from-red-50 to-pink-100", Equipment: "from-blue-50 to-indigo-100",
                  Accessories: "from-pink-50 to-rose-100", Makeup: "from-pink-50 to-fuchsia-100",
                  Skincare: "from-teal-50 to-cyan-100", Wearables: "from-indigo-50 to-violet-100",
                  Speakers: "from-purple-50 to-indigo-100", Chargers: "from-yellow-50 to-orange-100",
                  "Computer Peripherals": "from-slate-50 to-zinc-100", Spices: "from-red-50 to-orange-100",
                  "Frozen Food": "from-cyan-50 to-sky-100", "Hair Care": "from-pink-50 to-purple-100",
                  "Hair Color": "from-purple-50 to-fuchsia-100", Pickles: "from-green-50 to-emerald-100",
                };
                const gradient = catGradients[product.category] || "from-gray-50 to-slate-100";
                const emojiMap: Record<string, string> = {
                  Ayurvedic: "🌿", "Pain Relief": "💉", Nutrition: "💊", Grocery: "🛒",
                  "Cooking Oil": "🫒", Flour: "🌾", Dairy: "🥛", Rice: "🍚",
                  "Instant Food": "🍜", "Mobile Accessories": "📱", Cables: "🔌",
                  Audio: "🎧", "Power Banks": "🔋", Snacks: "🍪", Supplements: "💪",
                  Equipment: "🏋️", Accessories: "🧤", Makeup: "💄", Skincare: "🧴",
                  Wearables: "⌚", Speakers: "🔊", Chargers: "⚡",
                  "Computer Peripherals": "⌨️", Spices: "🌶️", "Frozen Food": "🧊",
                  "Hair Care": "💇", "Hair Color": "🎨", Pickles: "🥒",
                };
                const emoji = emojiMap[product.category] || "📦";
                return (
                  <Link
                    key={product.id}
                    href={`/store/${product.storeId}?product=${product.id}`}
                    className="flex-shrink-0 w-52 bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
                  >
                    <div className={`relative h-44 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                      <span className="text-7xl select-none group-hover:scale-110 transition-transform duration-300">{emoji}</span>
                      {discount > 0 && (
                        <span className="absolute top-2.5 left-2.5 bg-[#e42529] text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                          {discount}% OFF
                        </span>
                      )}
                      {product.badge && (
                        <span className="absolute top-2.5 right-2.5 bg-amber-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-3.5">
                      <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug min-h-[40px]">{product.name}</h3>
                      <div className="flex items-center gap-1 mt-1.5">
                        <span className="text-xs text-gray-500 truncate">{product.storeName}</span>
                        <BadgeCheck className="w-3.5 h-3.5 text-[#0056b3] flex-shrink-0" />
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="flex items-center gap-0.5 bg-green-50 px-1.5 py-0.5 rounded">
                          <Star className="w-3 h-3 fill-orange-500 text-orange-500" />
                          <span className="text-[11px] font-semibold text-gray-700">{product.rating}</span>
                        </div>
                        <span className="text-[11px] text-gray-400">({product.reviews.toLocaleString()})</span>
                      </div>
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-base font-bold text-gray-900">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <button onClick={() => {}} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-9 h-9 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 opacity-0 group-hover/trending-products:opacity-100 transition-opacity z-10">
              <ArrowLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button onClick={() => {}} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-9 h-9 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 opacity-0 group-hover/trending-products:opacity-100 transition-opacity z-10">
              <ArrowRight className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </section>

        {/* Download App Banner */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-[#0056b3] to-[#003d80] rounded-2xl p-8 flex items-center justify-between">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Download the JustDial App</h3>
              <p className="text-blue-100 text-sm mb-1">Get the best local search experience on your phone</p>
              <p className="text-blue-200 text-xs">Available on Android & iOS</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-black rounded-lg px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-900 transition-colors">
                <span className="text-white text-lg">🍎</span>
                <div>
                  <div className="text-[10px] text-gray-400">Download on the</div>
                  <div className="text-xs text-white font-semibold">App Store</div>
                </div>
              </div>
              <div className="bg-black rounded-lg px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-900 transition-colors">
                <span className="text-white text-lg">▶️</span>
                <div>
                  <div className="text-[10px] text-gray-400">Get it on</div>
                  <div className="text-xs text-white font-semibold">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">About JustDial</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">For Businesses</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">List Your Business</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Advertise</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">JD Pay</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business Apps</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Popular Cities</h4>
              <ul className="space-y-2 text-xs">
                {popularCities.map((c) => (
                  <li key={c.name}><a href="#" className="hover:text-white transition-colors">{c.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Free Listing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Near Me</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Movies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Deals & Offers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trending Searches</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#e42529]">J</span>
              <span className="text-xl font-bold text-blue-400">ust</span>
              <span className="text-xl font-bold text-[#e42529]">D</span>
              <span className="text-xl font-bold text-blue-400">ial</span>
            </div>
            <p className="text-xs text-gray-500">© 2024 JustDial. All rights reserved. | Terms | Privacy</p>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-white"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}