"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Mic, Bell, UserCircle, Home, BarChart3, Briefcase, Newspaper,
  MoreHorizontal, Star, MapPin, ChevronRight, ChevronDown, ChevronUp,
  ArrowRight, ArrowLeft, BadgeCheck, Building2, Stethoscope, Plane, Car,
  Sparkles, GraduationCap, Dumbbell, Truck, Briefcase as BriefcaseIcon,
  Landmark, Hotel, Film, CreditCard, Shirt, Scissors, Wrench, Paintbrush,
  Bug, Droplets, Sofa, Refrigerator, Phone, Tv, Camera, Heart, Share2,
  Navigation, Bookmark, X, Zap, TrendingUp, QrCode, Clock, Utensils, Flame,
  Crosshair, Check, Hammer,
} from "lucide-react";
import { getTrendingProducts } from "@/lib/product-data";
import { searchAll, getTypeConfig, popularCities, getRecentLocations, saveRecentLocation, type SearchSuggestion, type SuggestionType } from "@/lib/search-data";

const categories = [
  { icon: Building2, label: "B2B", color: "#3B82F6", bg: "#EFF6FF", slug: "b2b" },
  { icon: Stethoscope, label: "Doctors", color: "#EF4444", bg: "#FEF2F2", slug: "doctors" },
  { icon: Plane, label: "Travel", color: "#F59E0B", bg: "#FFFBEB", slug: "travel" },
  { icon: Car, label: "Car Hire", color: "#10B981", bg: "#ECFDF5", slug: "car-hire" },
  { icon: Sparkles, label: "Beauty", color: "#EC4899", bg: "#FDF2F8", slug: "beauty" },
  { icon: GraduationCap, label: "Education", color: "#8B5CF6", bg: "#F5F3FF", slug: "education" },
  { icon: Shirt, label: "Fashion", color: "#F97316", bg: "#FFF7ED", slug: "fashion" },
  { icon: Scissors, label: "Wedding", color: "#D946EF", bg: "#FAF5FF", slug: "wedding" },
  { icon: Truck, label: "Packers", color: "#14B8A6", bg: "#F0FDFA", slug: "packers" },
  { icon: Dumbbell, label: "Gyms", color: "#06B6D4", bg: "#ECFEFF", slug: "gyms" },
  { icon: Tv, label: "Rent/Hire", color: "#6366F1", bg: "#EEF2FF", slug: "rent-hire" },
  { icon: BriefcaseIcon, label: "Jobs", color: "#6366F1", bg: "#EEF2FF", slug: "jobs" },
  { icon: CreditCard, label: "Loans", color: "#15803D", bg: "#F0FDF4", slug: "loans" },
  { icon: Landmark, label: "Real Estate", color: "#D97706", bg: "#FFFBEB", slug: "real-estate" },
  { icon: Hotel, label: "PG/Hostel", color: "#DC2626", bg: "#FEF2F2", slug: "pg-hostel" },
];

const homeServices = [
  { icon: Wrench, label: "AC Repair", sub: "Certified Experts", color: "#3B82F6", bg: "#EFF6FF", slug: "ac-repair", rating: "4.8", reviews: "320", pros: "250", glow: "#3B82F6" },
  { icon: Droplets, label: "Plumbing", sub: "Licensed Plumbers", color: "#10B981", bg: "#ECFDF5", slug: "plumber", rating: "4.6", reviews: "180", pros: "180", glow: "#10B981" },
  { icon: Zap, label: "Electrician", sub: "Verified Pros", color: "#F59E0B", bg: "#FFFBEB", slug: "electrician", rating: "4.7", reviews: "410", pros: "320", glow: "#F59E0B" },
  { icon: Sofa, label: "Carpenter", sub: "Skilled Craftsmen", color: "#8B5CF6", bg: "#F5F3FF", slug: "carpenter", rating: "4.5", reviews: "140", pros: "95", glow: "#8B5CF6" },
  { icon: Paintbrush, label: "Painter", sub: "Pro Painters", color: "#EC4899", bg: "#FDF2F8", slug: "painter", rating: "4.6", reviews: "210", pros: "150", glow: "#EC4899" },
  { icon: Sparkles, label: "Home Cleaning", sub: "Deep Clean Team", color: "#06B6D4", bg: "#ECFEFF", slug: "deep-cleaning", rating: "4.8", reviews: "520", pros: "400", glow: "#06B6D4" },
  { icon: Bug, label: "Pest Control", sub: "Certified Experts", color: "#A78BFA", bg: "#F5F3FF", slug: "pest-control", rating: "4.5", reviews: "85", pros: "60", glow: "#A78BFA" },
  { icon: Scissors, label: "Salon at Home", sub: "Beauty Experts", color: "#F43F5E", bg: "#FFF1F2", slug: "salon-home", rating: "4.8", reviews: "290", pros: "175", glow: "#F43F5E" },
];

const rentServices = [
  { icon: Car, label: "Vehicles", color: "#2563EB", bg: "#EFF6FF" },
  { icon: Shirt, label: "Rent Clothes", color: "#EC4899", bg: "#FDF2F8" },
  { icon: Sofa, label: "Furniture", color: "#D97706", bg: "#FFFBEB" },
  { icon: Refrigerator, label: "Appliances", color: "#6366F1", bg: "#EEF2FF" },
];

const movies = [
  { title: "Pushpa 2", genre: "Action/Drama", rating: "8.2", img: "/images/movies/pushpa2.png" },
  { title: "Singham Again", genre: "Action/Comedy", rating: "7.5", img: "/images/movies/singham-again.png" },
  { title: "Bhool Bhulaiyaa 3", genre: "Comedy/Horror", rating: "7.8", img: "/images/movies/bhool-bhulaiyaa3.png" },
];

const trendingSearches = [
  { label: "Schools", emoji: "🏫" },
  { label: "Beauty Parlours", emoji: "💇" },
  { label: "Vijay Sales", emoji: "📱" },
  { label: "Interior Design", emoji: "🏠" },
  { label: "Banquet Halls", emoji: "🎉" },
  { label: "Dentists", emoji: "🦷" },
];

const touristPlaces = [
  { name: "India Gate", city: "Delhi", img: "/images/tourist/delhi.png", slug: "india-gate" },
  { name: "Taj Mahal", city: "Agra", img: "/images/tourist/agra.png", slug: "taj-mahal" },
  { name: "Laxman Jhula", city: "Rishikesh", img: "/images/tourist/rishikesh.png", slug: "rishikesh" },
  { name: "Robbers Cave", city: "Dehradun", img: "/images/tourist/dehradun.png", slug: "dehradun" },
  { name: "Gateway of India", city: "Mumbai", img: "/images/tourist/delhi.png", slug: "gateway-of-india" },
  { name: "Red Fort", city: "Delhi", img: "/images/tourist/agra.png", slug: "red-fort" },
];

const bottomNavTabs = ["SHOPPING", "FASHION", "BEAUTY", "FOOD"];

const footerSections = [
  {
    title: "Popular Categories",
    items: ["Restaurants", "Hotels", "Doctors", "Salons", "Gyms", "Real Estate"],
  },
  {
    title: "Trending Searches",
    items: ["Schools Near Me", "PG Near Me", "AC Repair", "Packers & Movers"],
  },
  {
    title: "Deals and Offers",
    items: ["Restaurant Deals", "Spa Offers", "Gym Membership", "Travel Deals"],
  },
  {
    title: "About JustDial",
    items: ["About Us", "Careers", "Blog", "Contact Us", "Privacy Policy"],
  },
];

const featuredStores = [
  { name: "Shivam Fast Food", category: "Fast Food • Restaurant", rating: "4.5", reviews: "128", distance: "0.3 km", address: "MG Road, Andheri West", logoEmoji: "🍔", img: "/images/stores/shivam-fast-food.png", storeId: "STR-10005" },
  { name: "Look & Style Salon", category: "Beauty • Salon", rating: "4.7", reviews: "96", distance: "0.5 km", address: "Link Square Mall", logoEmoji: "✂️", img: "/images/stores/look-style-salon.png", storeId: "STR-70001" },
  { name: "CareWell Pharmacy", category: "Medical • Pharmacy", rating: "4.6", reviews: "88", distance: "0.7 km", address: "City Center, Malad", logoEmoji: "💊", img: "/images/stores/carewell-pharmacy.png", storeId: "STR-100001" },
  { name: "Fresh Mart Grocery", category: "Grocery • Supermarket", rating: "4.4", reviews: "215", distance: "0.4 km", address: "SV Road, Malad West", logoEmoji: "🛒", img: "/images/stores/fresh-mart-grocery.png", storeId: "STR-40006" },
  { name: "QuickFix Electronics", category: "Electronics • Mobile", rating: "4.3", reviews: "167", distance: "0.9 km", address: "Heera Panna Mall", logoEmoji: "📱", img: "/images/stores/quickfix-electronics.png", storeId: "STR-90001" },
  { name: "Green Leaf Cafe", category: "Cafe • Restaurant", rating: "4.8", reviews: "302", distance: "1.2 km", address: "Hill Road, Bandra", logoEmoji: "☕", img: "/images/stores/green-leaf-cafe.png", storeId: "STR-30004" },
];

const trendingStores = [
  { name: "Sunrise Public School", category: "Education • School", rating: "4.6", reviews: "340", distance: "0.8 km", address: "DPS Road, Nerul", logoEmoji: "🏫", img: "/images/guides/schools-delhi.png", storeId: "STR-130001" },
  { name: "Glow Beauty Parlour", category: "Beauty • Parlour", rating: "4.8", reviews: "256", distance: "0.4 km", address: "Linking Road, Bandra", logoEmoji: "💅", img: "/images/stores/look-style-salon.png", storeId: "STR-70003" },
  { name: "Vijay Sales Store", category: "Electronics • Appliances", rating: "4.3", reviews: "512", distance: "1.1 km", address: "MG Road, Andheri East", logoEmoji: "📦", img: "/images/stores/quickfix-electronics.png", storeId: "STR-90002" },
  { name: "Royal Banquet Hall", category: "Venue • Banquet", rating: "4.5", reviews: "189", distance: "1.5 km", address: "Juhu Tara Road", logoEmoji: "🎉", img: "/images/collections/wedding-planners.png", storeId: "STR-10005" },
  { name: "SmileCare Dental", category: "Medical • Dentist", rating: "4.7", reviews: "421", distance: "0.6 km", address: "Kohinoor City", logoEmoji: "🦷", img: "/images/businesses/sharma-dental.png", storeId: "STR-60008" },
  { name: "FitPro Gym & Spa", category: "Fitness • Gym", rating: "4.4", reviews: "198", distance: "0.9 km", address: "Oberoi Mall, Goregaon", logoEmoji: "💪", img: "/images/businesses/fitzone-gym.png", storeId: "STR-80001" },
];

const navItems = [
  { icon: Home, label: "Home", id: "Home" },
  { icon: BarChart3, label: "Leads", id: "Leads" },
  { icon: Briefcase, label: "B2B", id: "B2B" },
  { icon: Newspaper, label: "News", id: "News" },
  { icon: MoreHorizontal, label: "More", id: "More" },
];

export default function MobileLayout() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeNav, setActiveNav] = useState("Home");
  const [activeTab, setActiveTab] = useState("SHOPPING");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const scrollRef = useRef<HTMLDivElement>(null);
  const [savedPlaces, setSavedPlaces] = useState<Set<string>>(new Set());
  const [wishlisted, setWishlisted] = useState<Set<string>>(new Set());
  const trendingProducts = getTrendingProducts();

  // ── Location & Search State ──
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [locationSheetOpen, setLocationSheetOpen] = useState(false);
  const [locationSearch, setLocationSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [recentLocations, setRecentLocations] = useState<string[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const locationInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setRecentLocations(getRecentLocations()); }, []);

  // Debounced search
  useEffect(() => {
    if (!searchQuery.trim()) { setSuggestions([]); setShowSuggestions(false); return; }
    const t = setTimeout(() => {
      setSuggestions(searchAll(searchQuery, selectedCity, 4));
      setShowSuggestions(true);
    }, 150);
    return () => clearTimeout(t);
  }, [searchQuery, selectedCity]);

  const selectCity = useCallback((city: string) => {
    setSelectedCity(city);
    saveRecentLocation(city);
    setRecentLocations(getRecentLocations());
    setLocationSheetOpen(false);
    setLocationSearch("");
  }, []);

  const handleSuggestionTap = useCallback((s: SearchSuggestion) => {
    setShowSuggestions(false);
    setSearchQuery("");
    router.push(s.href);
  }, [router]);

  const toggleWishlist = useCallback((id: string) => {
    setWishlisted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleSection = useCallback((title: string) => {
    setExpandedSections((prev) => ({ ...prev, [title]: !prev[title] }));
  }, []);

  const toggleSave = useCallback((slug: string) => {
    setSavedPlaces((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }, []);

  const storeCard = (store: typeof featuredStores[0], index: number) => (
    <motion.div
      key={store.name}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileTap={{ scale: 0.97 }}
      className="flex-shrink-0 w-[185px] bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]"
    >
      <Link href={`/store/${store.storeId}`} className="block">
        {/* Compact banner image (reduced height) */}
        <div className="relative h-[78px] overflow-hidden">
          <Image
            src={store.img}
            alt={store.name}
            fill
            className="object-cover"
            sizes="185px"
          />
          {/* Subtle gradient for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/5" />

          {/* Top row: Featured (left) + Open (right) */}
          <div className="absolute top-1.5 left-1.5 right-1.5 flex items-center justify-between">
            <span className="bg-amber-500/95 backdrop-blur-sm text-white text-[8.5px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full flex items-center gap-0.5 shadow-sm">
              <Flame className="w-2 h-2" />
              Featured
            </span>
            <span className="bg-emerald-500/95 backdrop-blur-sm text-white text-[8.5px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5 shadow-sm">
              <span className="w-1 h-1 bg-white rounded-full" />
              Open
            </span>
          </div>

          {/* Bottom-left: Rating pill */}
          <div className="absolute bottom-1.5 left-1.5">
            <div className="bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5 shadow-sm">
              <Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
              {store.rating}
            </div>
          </div>

          {/* Floating circular logo with trusted tick — z-indexed above content */}
          <div className="absolute -bottom-4 right-2.5 z-10">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[16px] ring-2 ring-white">
                {store.logoEmoji}
              </div>
              {/* Trusted tick badge attached to logo */}
              <div className="absolute -bottom-0.5 -left-0.5 w-[14px] h-[14px] bg-[#0056b3] rounded-full flex items-center justify-center ring-[1.5px] ring-white">
                <Check className="w-[9px] h-[9px] text-white" strokeWidth={4} />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-2.5 pt-2.5 pb-2.5">
          {/* Store name + rating reviews */}
          <div className="flex items-start gap-1 mb-0.5 pr-11">
            <h3 className="text-[12.5px] font-bold text-gray-900 leading-tight line-clamp-1 flex-1">{store.name}</h3>
          </div>

          {/* Category */}
          <p className="text-[10px] text-gray-500 font-medium truncate mb-1.5">{store.category}</p>

          {/* Address + Distance chip */}
          <div className="flex items-center justify-between gap-1 mb-1.5">
            <div className="flex items-center gap-0.5 min-w-0 flex-1">
              <MapPin className="w-2.5 h-2.5 text-gray-400 flex-shrink-0" />
              <span className="text-[9.5px] text-gray-500 truncate">{store.address}</span>
            </div>
          </div>

          {/* Distance chip + reviews row */}
          <div className="flex items-center justify-between pt-1.5 border-t border-gray-100">
            <span className="text-[9.5px] text-gray-400 font-medium">{store.reviews} reviews</span>
            <span className="bg-[#0056b3]/8 text-[#0056b3] text-[9.5px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
              <Navigation className="w-2.5 h-2.5" />
              {store.distance}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <div className="min-h-[100dvh] bg-[#F2F2F7] flex flex-col max-w-[480px] mx-auto relative overflow-hidden">
      {/* ===== 1. STICKY HEADER (redesigned — search on top, location below) ===== */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 bg-white/95 backdrop-blur-2xl shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
      >
        <div className="pt-[env(safe-area-inset-top)]">
          {/* Row 1: Compact Logo + Actions */}
          <div className="flex items-center justify-between px-4 h-10">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center">
                <span className="text-[18px] font-extrabold text-[#e42529] tracking-tight leading-none">J</span>
                <span className="text-[18px] font-extrabold text-[#0056b3] tracking-tight leading-none">ust</span>
                <span className="text-[18px] font-extrabold text-[#e42529] tracking-tight leading-none">D</span>
                <span className="text-[18px] font-extrabold text-[#0056b3] tracking-tight leading-none">ial</span>
              </div>
              <span className="text-[10px] font-semibold text-gray-400 tracking-wider uppercase hidden">India</span>
            </div>
            <div className="flex items-center gap-0.5">
              <motion.button whileTap={{ scale: 0.88 }} className="w-8 h-8 flex items-center justify-center rounded-full">
                <QrCode className="w-[18px] h-[18px] text-gray-600" />
              </motion.button>
              <motion.button whileTap={{ scale: 0.88 }} className="w-8 h-8 flex items-center justify-center rounded-full relative">
                <Bell className="w-[18px] h-[18px] text-gray-600" />
                <span className="absolute top-0.5 right-0.5 w-[14px] h-[14px] bg-[#e42529] rounded-full text-[8px] text-white flex items-center justify-center font-bold leading-none ring-2 ring-white">
                  3
                </span>
              </motion.button>
              <motion.button whileTap={{ scale: 0.88 }} className="w-8 h-8 flex items-center justify-center rounded-full">
                <UserCircle className="w-[22px] h-[22px] text-gray-400" />
              </motion.button>
            </div>
          </div>

          {/* Row 2: SEARCH BAR (primary — off-white, rounded, search icon left + mic right) */}
          <div className="px-3.5 pt-0.5 pb-2">
            <div className="flex items-center bg-[#F1F3F5] rounded-2xl px-3.5 py-2.5 gap-2.5 ring-1 ring-black/[0.04]">
              <Search className="w-[18px] h-[18px] text-gray-500 flex-shrink-0" strokeWidth={2.5} />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search home services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => { if (searchQuery.trim()) { setSuggestions(searchAll(searchQuery, selectedCity, 4)); setShowSuggestions(true); } }}
                className="flex-1 bg-transparent text-[14px] outline-none text-gray-800 placeholder-gray-500 font-medium min-w-0"
              />
              {searchQuery ? (
                <motion.button initial={{ scale: 0.8 }} animate={{ scale: 1 }} whileTap={{ scale: 0.88 }} onClick={() => { setSearchQuery(""); setShowSuggestions(false); searchInputRef.current?.blur(); }} className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <X className="w-3.5 h-3.5 text-gray-600" />
                </motion.button>
              ) : (
                <motion.button whileTap={{ scale: 0.88 }} className="w-7 h-7 rounded-full bg-[#0056b3] flex items-center justify-center flex-shrink-0 shadow-sm shadow-[#0056b3]/30">
                  <Mic className="w-3.5 h-3.5 text-white" />
                </motion.button>
              )}
            </div>
          </div>

          {/* Row 3: LOCATION BAR (below search — blue gradient, full-width pill) */}
          <div className="px-3.5 pb-2.5">
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => { setLocationSheetOpen(true); }}
              className="w-full flex items-center gap-2 bg-gradient-to-r from-[#E3F2FD] to-[#BBDEFB] rounded-xl px-3.5 py-2 ring-1 ring-[#0056b3]/10"
            >
              <div className="w-6 h-6 rounded-full bg-[#0056b3] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="flex-1 text-left min-w-0">
                <p className="text-[9px] font-semibold text-[#0056b3]/70 uppercase tracking-wider leading-tight">Deliver to</p>
                <p className="text-[13px] font-bold text-gray-800 leading-tight truncate">
                  {selectedCity}{selectedCity === "Mumbai" ? ", Maharashtra" : ""}
                </p>
              </div>
              <ChevronDown className="w-4 h-4 text-[#0056b3] flex-shrink-0" strokeWidth={2.5} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* ===== LOCATION BOTTOM SHEET ===== */}
      <AnimatePresence>
        {locationSheetOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 z-[60]"
              style={{ maxWidth: "480px", margin: "0 auto" }}
              onClick={() => { setLocationSheetOpen(false); setLocationSearch(""); }}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white rounded-t-[24px] z-[70] max-h-[75vh] flex flex-col"
              style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
            >
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 rounded-full bg-gray-300" />
              </div>

              {/* Title */}
              <div className="px-5 pb-3 flex items-center justify-between">
                <h3 className="text-[17px] font-semibold text-gray-900">Select City</h3>
                <motion.button whileTap={{ scale: 0.9 }} onClick={() => { setLocationSheetOpen(false); setLocationSearch(""); }} className="w-8 h-8 rounded-full bg-[#F2F2F7] flex items-center justify-center">
                  <X className="w-4 h-4 text-gray-500" />
                </motion.button>
              </div>

              {/* Search City */}
              <div className="px-5 pb-3">
                <div className="flex items-center bg-[#F2F2F7] rounded-xl px-3.5 py-2.5 gap-2.5">
                  <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <input
                    ref={locationInputRef}
                    autoFocus
                    type="text"
                    placeholder="Search city..."
                    value={locationSearch}
                    onChange={(e) => setLocationSearch(e.target.value)}
                    className="flex-1 bg-transparent text-[14px] outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-5 pb-4 scrollbar-hide">
                {/* Use Current Location */}
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => selectCity("Mumbai")}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0056b3]/5 mb-3"
                >
                  <div className="w-9 h-9 rounded-full bg-[#0056b3]/10 flex items-center justify-center flex-shrink-0">
                    <Crosshair className="w-4 h-4 text-[#0056b3]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[14px] font-medium text-[#0056b3]">Use Current Location</p>
                    <p className="text-[11px] text-gray-400">Detect your location automatically</p>
                  </div>
                </motion.button>

                {/* Recent Locations */}
                {recentLocations.length > 0 && (
                  <div className="mb-3">
                    <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider px-1 mb-2">Recent</p>
                    {recentLocations
                      .filter((c) => !locationSearch || c.toLowerCase().includes(locationSearch.toLowerCase()))
                      .map((city) => (
                        <motion.button
                          key={`recent-${city}`}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => selectCity(city)}
                          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-50"
                        >
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-[14px] text-gray-700">{city}</span>
                          {city === selectedCity && <Check className="w-4 h-4 text-[#0056b3] ml-auto" />}
                        </motion.button>
                      ))}
                  </div>
                )}

                {/* Popular Cities */}
                <div>
                  <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider px-1 mb-2">Popular Cities</p>
                  {popularCities
                    .filter((c) => !locationSearch || c.name.toLowerCase().includes(locationSearch.toLowerCase()) || c.state.toLowerCase().includes(locationSearch.toLowerCase()))
                    .map((c) => (
                      <motion.button
                        key={c.name}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => selectCity(c.name)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-50"
                      >
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <div className="text-left">
                          <span className="text-[14px] text-gray-700">{c.name}</span>
                          <span className="text-[12px] text-gray-400 ml-1.5">{c.state}</span>
                        </div>
                        {c.name === selectedCity && <Check className="w-4 h-4 text-[#0056b3] ml-auto" />}
                      </motion.button>
                    ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ===== SEARCH SUGGESTIONS OVERLAY ===== */}
      <AnimatePresence>
        {showSuggestions && suggestions.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              duration={0.15}
              className="fixed inset-0 bg-black/20 z-[55]"
              style={{ maxWidth: "480px", margin: "0 auto" }}
              onClick={() => { setShowSuggestions(false); searchInputRef.current?.blur(); }}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="fixed top-[148px] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[448px] bg-white rounded-2xl shadow-xl z-[58] max-h-[55vh] overflow-y-auto scrollbar-hide"
            >
              {/* Group by type */}
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
                    <div className="px-4 pt-3 pb-1.5">
                      <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                        {getTypeConfig(group.type).emoji} {getTypeConfig(group.type).label}
                      </span>
                    </div>
                    {group.items.map((s) => (
                      <motion.button
                        key={s.id}
                        whileTap={{ scale: 0.98, backgroundColor: "rgba(0,0,0,0.03)" }}
                        onClick={() => handleSuggestionTap(s)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-left"
                      >
                        <span className="text-[18px] flex-shrink-0">{s.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[14px] font-medium text-gray-800 truncate">{s.label}</p>
                          <p className="text-[12px] text-gray-400 truncate">{s.subtitle}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
                      </motion.button>
                    ))}
                  </div>
                ));
              })()}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ===== 2. MAIN SCROLL AREA ===== */}
      <main ref={scrollRef} className="flex-1 overflow-y-auto pt-[148px] pb-[calc(100px+env(safe-area-inset-bottom))] scrollbar-hide">
        {/* ===== 3. HERO CARD ===== */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="px-4 pt-3"
        >
          <div className="relative bg-gradient-to-br from-[#0056b3] via-[#004494] to-[#003060] rounded-[24px] p-5 overflow-hidden">
            <div className="absolute top-[-20px] right-[-20px] w-32 h-32 rounded-full bg-white/5" />
            <div className="absolute bottom-[-30px] left-[-10px] w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute top-4 right-4 w-20 h-20 rounded-2xl bg-white/5 rotate-12" />

            <div className="relative z-10">
              <div className="flex items-center gap-1.5 mb-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-white/80 text-[11px] font-medium tracking-wide uppercase">JustDial for Business</span>
              </div>
              <h2 className="text-white text-[20px] font-bold leading-tight mb-1">List Your Business</h2>
              <p className="text-white/70 text-[13px] mb-4">Reach 18 Cr+ customers. Free listing.</p>
              <motion.button whileTap={{ scale: 0.95 }} className="bg-white text-[#0056b3] text-[13px] font-bold px-6 py-2.5 rounded-2xl shadow-lg shadow-black/10">
                List for FREE
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* ===== 4. POPULAR CATEGORIES ===== */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="pt-6"
        >
          <div className="flex items-center justify-between px-4 mb-3">
            <h2 className="text-[17px] font-bold text-gray-900">Popular Categories</h2>
            <Link href="/categories" className="text-[13px] text-[#0056b3] font-semibold">See All</Link>
          </div>
          <div className="grid grid-cols-4 gap-1 px-1">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                whileTap={{ scale: 0.88 }}
              >
                <Link href={`/category/${cat.slug}`} className="flex flex-col items-center gap-1 py-2.5">
                  <div className="w-[54px] h-[54px] rounded-[16px] flex items-center justify-center" style={{ backgroundColor: cat.bg }}>
                    <cat.icon className="w-[26px] h-[26px]" style={{ color: cat.color }} />
                  </div>
                  <span className="text-[11px] font-medium text-gray-700 text-center leading-tight">{cat.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== 5. FEATURED STORES ===== */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="pt-6"
        >
          <div className="flex items-center justify-between px-4 mb-3">
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-[#0056b3]" />
              <h2 className="text-[17px] font-bold text-gray-900">Featured Near You</h2>
            </div>
            <Link href="#" className="text-[13px] text-[#0056b3] font-semibold">See All</Link>
          </div>
          <div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide">
            {featuredStores.map((store, index) => storeCard(store, index))}
          </div>
        </motion.section>

        {/* ===== 5c. HOME SERVICES BANNER — Compact card with human illustration (Mobile App UI) ===== */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="px-4 pt-6"
        >
          <motion.div
            whileTap={{ scale: 0.99 }}
            className="relative rounded-[20px] overflow-hidden shadow-xl shadow-slate-900/40 h-[112px] flex"
          >
            {/* Dark slate gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />
            {/* Decorative shape */}
            <div className="absolute -left-4 -bottom-4 w-16 h-16 rounded-full bg-white/5" />

            {/* Human illustration (right side, clearly visible - minimal overlay) */}
            <div className="absolute right-0 top-0 bottom-0 w-[124px] z-10 overflow-hidden">
              <Image
                src="/banners/human-illustration.png"
                alt="Home service professional"
                fill
                priority
                sizes="124px"
                className="object-cover object-right"
              />
              {/* Subtle left-edge fade (only 30% width) so human blends softly */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-900 to-transparent" />
            </div>

            {/* Left content area: text top + button bottom (no overlap) */}
            <div className="relative z-20 flex flex-col justify-between py-3 pl-4 pr-3 w-[68%]">
              {/* Top: eyebrow + heading + subtext */}
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  <Home className="w-3 h-3 text-emerald-300" strokeWidth={2.5} />
                  <p className="text-emerald-200 text-[9.5px] font-semibold tracking-wider uppercase">Home Services</p>
                </div>
                <h3 className="text-white font-bold text-[13px] leading-tight mb-0.5">
                  Trusted Pros at Your Doorstep
                </h3>
                <p className="text-slate-300 text-[10px] leading-tight">
                  AC, Plumbing, Electrician &amp; more
                </p>
              </div>

              {/* Bottom: button (left-aligned, no overlap with text) */}
              <Link
                href="/home-services"
                className="self-start inline-flex items-center gap-1 bg-emerald-500 hover:bg-emerald-400 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-md shadow-emerald-500/30 active:scale-95 transition-transform"
              >
                Book Now
                <ArrowRight className="w-2.5 h-2.5" strokeWidth={3} />
              </Link>
            </div>
          </motion.div>
        </motion.section>

        {/* ===== 6. HOME SERVICES (Light gradient + simple horizontal scroll) ===== */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="mt-6 mx-3 rounded-3xl overflow-hidden relative"
        >
          {/* Light gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
          {/* Soft decorative blobs */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-100/40 blur-3xl" />
          <div className="absolute -bottom-12 -left-10 w-36 h-36 rounded-full bg-purple-100/40 blur-3xl" />

          <div className="relative z-10 px-4 pt-4 pb-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0056b3] to-[#0077E6] flex items-center justify-center flex-shrink-0">
                  <Home className="w-3.5 h-3.5 text-white" />
                </div>
                <h2 className="text-[16px] font-bold text-gray-900 tracking-tight leading-tight">Home Services</h2>
              </div>
              <Link
                href="/services"
                className="flex items-center gap-0.5 text-[11.5px] text-[#0056b3] font-semibold bg-white/70 backdrop-blur-sm px-2.5 py-1.5 rounded-full active:scale-95 transition-transform"
              >
                View All
                <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
              </Link>
            </div>

            {/* Single row horizontal scroll — just SVG icon + name */}
            <div
              className="flex gap-4 overflow-x-auto pb-1 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {homeServices.map((service, index) => (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03, duration: 0.25 }}
                  whileTap={{ scale: 0.92 }}
                  className="flex-shrink-0"
                >
                  <Link
                    href={`/services?category=${service.slug}`}
                    className="flex flex-col items-center gap-1.5 w-[60px]"
                  >
                    {/* SVG icon in soft colored circle */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: service.bg }}
                    >
                      <service.icon
                        className="w-5 h-5"
                        style={{ color: service.color }}
                        strokeWidth={2.2}
                      />
                    </div>
                    {/* Service name */}
                    <span className="text-[10px] font-semibold text-gray-700 text-center leading-tight">
                      {service.label}
                    </span>
                  </Link>
                </motion.div>
              ))}

              {/* More tile at end */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: homeServices.length * 0.03, duration: 0.25 }}
                whileTap={{ scale: 0.92 }}
                className="flex-shrink-0"
              >
                <Link
                  href="/services"
                  className="flex flex-col items-center gap-1.5 w-[60px]"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ring-1 ring-gray-200">
                    <MoreHorizontal className="w-5 h-5 text-gray-600" strokeWidth={2.5} />
                  </div>
                  <span className="text-[10px] font-semibold text-gray-700 text-center leading-tight">
                    More
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ===== 7. PROMOTIONAL BANNER (Green Loan Banner) ===== */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="px-4 pt-6"
        >
          <motion.div whileTap={{ scale: 0.98 }} className="rounded-[20px] p-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-green-600 to-emerald-700" />
            <div className="absolute -right-4 -top-4 w-28 h-28 rounded-full bg-white/10" />
            <div className="absolute -left-6 -bottom-6 w-20 h-20 rounded-full bg-white/5" />
            <div className="absolute right-12 top-6 w-12 h-12 rounded-xl bg-white/5 rotate-45" />
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-1.5 mb-1">
                  <CreditCard className="w-4 h-4 text-green-200" />
                  <p className="text-green-100 text-[11px] font-medium">Instant Approval</p>
                </div>
                <h3 className="text-white font-bold text-[17px] leading-tight mb-1">Get Loan Against Property</h3>
                <p className="text-green-100/80 text-[13px]">Starting from 9.00% interest rate</p>
              </div>
              <motion.button whileTap={{ scale: 0.95 }} className="bg-white text-green-700 text-[13px] font-bold px-5 py-2.5 rounded-2xl shadow-lg shadow-black/10 whitespace-nowrap ml-3">
                Apply Now
              </motion.button>
            </div>
          </motion.div>
        </motion.section>

        {/* ===== 8. TRENDING NEAR YOU ===== */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="pt-6"
        >
          <div className="flex items-center justify-between px-4 mb-3">
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-orange-500" />
              <h2 className="text-[17px] font-bold text-gray-900">Trending Near You</h2>
            </div>
            <Link href="#" className="text-[13px] text-[#0056b3] font-semibold">See All</Link>
          </div>
          <div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide">
            {trendingStores.map((store, index) => storeCard(store, index))}
          </div>
        </motion.section>

        {/* ===== 8.5 TRENDING PRODUCTS (Premium Shopping Cards) ===== */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="pt-6"
        >
          <div className="flex items-center justify-between px-4 mb-3">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[16px]">🔥</span>
                <h2 className="text-[17px] font-bold text-gray-900">Trending Products</h2>
              </div>
              <p className="text-[12px] text-gray-500 mt-0.5">Popular products from verified businesses</p>
            </div>
            <Link href="/services" className="text-[13px] text-[#0056b3] font-semibold flex items-center gap-0.5">
              View All <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-1">
            {trendingProducts.map((product, index) => {
              const origNum = product.originalPrice ? parseInt(product.originalPrice.replace(/[^\d]/g, ""), 10) : 0;
              const currNum = parseInt(product.price.replace(/[^\d]/g, ""), 10);
              const discount = origNum > 0 ? Math.round(((origNum - currNum) / origNum) * 100) : 0;
              const catGradients: Record<string, string> = {
                Ayurvedic: "from-green-50 to-emerald-100",
                "Pain Relief": "from-blue-50 to-sky-100",
                Nutrition: "from-orange-50 to-amber-100",
                Grocery: "from-yellow-50 to-lime-100",
                "Cooking Oil": "from-amber-50 to-yellow-100",
                Flour: "from-orange-50 to-yellow-100",
                Dairy: "from-sky-50 to-blue-100",
                Rice: "from-green-50 to-lime-100",
                "Instant Food": "from-red-50 to-orange-100",
                "Mobile Accessories": "from-slate-50 to-gray-100",
                Cables: "from-gray-50 to-slate-100",
                Audio: "from-violet-50 to-purple-100",
                "Power Banks": "from-green-50 to-teal-100",
                Snacks: "from-orange-50 to-red-50",
                Supplements: "from-red-50 to-pink-100",
                Equipment: "from-blue-50 to-indigo-100",
                Accessories: "from-pink-50 to-rose-100",
                Makeup: "from-pink-50 to-fuchsia-100",
                Skincare: "from-teal-50 to-cyan-100",
                Wearables: "from-indigo-50 to-violet-100",
                Speakers: "from-purple-50 to-indigo-100",
                Chargers: "from-yellow-50 to-orange-100",
                "Computer Peripherals": "from-slate-50 to-zinc-100",
                Spices: "from-red-50 to-orange-100",
                "Frozen Food": "from-cyan-50 to-sky-100",
                "Hair Care": "from-pink-50 to-purple-100",
                "Hair Color": "from-purple-50 to-fuchsia-100",
                Pickles: "from-green-50 to-emerald-100",
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
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.35 }}
                  className="snap-start flex-shrink-0 w-[175px]"
                >
                  <Link href={`/store/${product.storeId}?product=${product.id}`}>
                    <motion.div
                      whileTap={{ scale: 0.96 }}
                      className="bg-white rounded-[18px] overflow-hidden shadow-sm shadow-black/[0.06] active:shadow-md transition-shadow"
                    >
                      {/* Product Image Area */}
                      <div className={`relative h-[155px] bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
                        <span className="text-[60px] select-none drop-shadow-sm">{emoji}</span>
                        {discount > 0 && (
                          <span className="absolute top-2 left-2 bg-[#e42529] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md leading-tight">
                            {discount}% OFF
                          </span>
                        )}
                        {product.badge && (
                          <span className="absolute top-2 right-2 bg-amber-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full leading-tight">
                            {product.badge}
                          </span>
                        )}
                        <motion.button
                          whileTap={{ scale: 0.8 }}
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(product.id); }}
                          className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm z-10"
                        >
                          <Heart className={`w-3.5 h-3.5 ${wishlisted.has(product.id) ? "text-red-500 fill-red-500" : "text-gray-400"}`} />
                        </motion.button>
                      </div>
                      {/* Product Info */}
                      <div className="p-2.5">
                        <h3 className="text-[12px] font-semibold text-gray-900 leading-tight line-clamp-2 min-h-[32px]">{product.name}</h3>
                        <div className="flex items-center gap-0.5 mt-1.5">
                          <span className="text-[10px] text-gray-500 truncate">{product.storeName}</span>
                          <BadgeCheck className="w-3 h-3 text-[#0056b3] flex-shrink-0" />
                        </div>
                        <div className="flex items-center gap-0.5 mt-0.5">
                          <Star className="w-2.5 h-2.5 fill-orange-500 text-orange-500" />
                          <span className="text-[10px] font-semibold text-gray-700">{product.rating}</span>
                          <span className="text-[9px] text-gray-400">({product.reviews})</span>
                        </div>
                        <div className="flex items-baseline gap-1.5 mt-1.5">
                          <span className="text-[14px] font-bold text-gray-900">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-[10px] text-gray-400 line-through">{product.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ===== 9. TOURIST PLACES (Airbnb-style Travel Cards) ===== */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="pt-6"
        >
          <div className="flex items-center justify-between px-4 mb-3">
            <div>
              <h2 className="text-[17px] font-bold text-gray-900">Explore Places</h2>
              <p className="text-[12px] text-gray-500 mt-0.5">Discover amazing destinations</p>
            </div>
            <Link href="/places" className="text-[13px] text-[#0056b3] font-semibold">See All</Link>
          </div>
          <div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            {touristPlaces.map((place, index) => (
              <motion.div
                key={place.slug}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
              >
                <Link href={`/place/${place.slug}`} className="snap-start">
                  <motion.div whileTap={{ scale: 0.96 }} className="flex-shrink-0 w-[240px] relative rounded-[24px] overflow-hidden shadow-md shadow-black/10">
                    <div className="relative h-[160px]">
                      <Image src={place.img} alt={place.name} fill className="object-cover" sizes="240px" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 via-transparent to-transparent" />
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={(e) => { e.preventDefault(); toggleSave(place.slug); }}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center z-10"
                    >
                      <Heart className={`w-4 h-4 ${savedPlaces.has(place.slug) ? "text-red-400 fill-red-400" : "text-white"}`} />
                    </motion.button>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-[16px] font-bold text-white mb-0.5">{place.name}</h3>
                      <div className="flex items-center gap-1 mb-2">
                        <MapPin className="w-3 h-3 text-white/70" />
                        <span className="text-[12px] text-white/80">{place.city}</span>
                      </div>
                      <motion.button whileTap={{ scale: 0.95 }} className="bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold px-4 py-1.5 rounded-full border border-white/20">
                        Explore →
                      </motion.button>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== 10. RENT & HIRE ===== */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="pt-6"
        >
          <div className="flex items-center justify-between px-4 mb-3">
            <h2 className="text-[17px] font-bold text-gray-900">Rent & Hire</h2>
            <Link href="/services" className="text-[13px] text-[#0056b3] font-semibold">See All</Link>
          </div>
          <div className="grid grid-cols-4 gap-2 px-4">
            {rentServices.map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.3 }}
                whileTap={{ scale: 0.88 }}
              >
                <Link href="/services" className="flex flex-col items-center gap-2 bg-white rounded-[16px] py-3.5 shadow-sm shadow-black/[0.03]">
                  <div className="w-[48px] h-[48px] rounded-[14px] flex items-center justify-center" style={{ backgroundColor: service.bg }}>
                    <service.icon className="w-[24px] h-[24px]" style={{ color: service.color }} />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-800 text-center">{service.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== 11. MOVIES (Cinematic Cards) ===== */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="pt-6"
        >
          <div className="flex items-center justify-between px-4 mb-3">
            <div className="flex items-center gap-1.5">
              <Film className="w-4 h-4 text-red-500" />
              <h2 className="text-[17px] font-bold text-gray-900">Latest Movies</h2>
            </div>
            <Link href="#" className="text-[13px] text-[#0056b3] font-semibold">See All</Link>
          </div>
          <div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide">
            {movies.map((movie, index) => (
              <motion.div
                key={movie.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileTap={{ scale: 0.96 }}
                className="flex-shrink-0 w-[140px] bg-white rounded-[20px] overflow-hidden shadow-sm shadow-black/[0.04]"
              >
                <div className="relative h-[190px] overflow-hidden">
                  <Image src={movie.img} alt={movie.title} fill className="object-cover" sizes="140px" />
                  <div className="absolute top-2 right-2 flex items-center gap-0.5 bg-black/60 backdrop-blur-sm rounded-full px-2 py-0.5">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-[10px] font-bold text-white">{movie.rating}</span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-[14px] text-gray-900 truncate">{movie.title}</h3>
                  <p className="text-[12px] text-gray-500 mt-0.5">{movie.genre}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== 12. POPULAR SEARCHES (Pill Design) ===== */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="px-4 pt-6"
        >
          <h2 className="text-[17px] font-bold text-gray-900 mb-3">Popular Searches</h2>
          <div className="flex flex-wrap gap-2">
            {trendingSearches.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-full px-4 py-2.5 shadow-sm shadow-black/[0.04] flex items-center gap-2"
              >
                <span className="text-[14px]">{item.emoji}</span>
                <span className="text-[13px] font-medium text-gray-700">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* ===== 13. JD GUIDES ===== */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="pt-6"
        >
          <div className="flex items-center justify-between px-4 mb-3">
            <h2 className="text-[17px] font-bold text-gray-900">JD Guides</h2>
            <Link href="#" className="text-[13px] text-[#0056b3] font-semibold">See All</Link>
          </div>
          <div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide">
            {[
              { title: "Best Restaurants in Mumbai", desc: "Top rated places to eat", img: "/images/guides/restaurants-mumbai.png" },
              { title: "Top Schools in Delhi", desc: "Education guide 2024", img: "/images/guides/schools-delhi.png" },
            ].map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileTap={{ scale: 0.96 }}
                className="flex-shrink-0 w-[260px] h-[140px] rounded-[24px] relative overflow-hidden shadow-sm shadow-black/[0.06]"
              >
                <Image src={guide.img} alt={guide.title} fill className="object-cover" sizes="260px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-bold text-[15px] text-white mb-0.5 leading-tight">{guide.title}</h3>
                  <p className="text-[12px] text-white/70 mb-2.5">{guide.desc}</p>
                  <motion.button whileTap={{ scale: 0.95 }} className="bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold px-4 py-1.5 rounded-full border border-white/20">
                    Explore →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== 14. JD COLLECTIONS ===== */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="pt-6"
        >
          <div className="flex items-center justify-between px-4 mb-3">
            <h2 className="text-[17px] font-bold text-gray-900">JD Collections</h2>
            <Link href="#" className="text-[13px] text-[#0056b3] font-semibold">See All</Link>
          </div>
          <div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide">
            {[
              { title: "Best Wedding Planners", desc: "Make your day special", img: "/images/collections/wedding-planners.png" },
              { title: "Home Interior Ideas", desc: "Transform your space", img: "/images/collections/home-interior.png" },
            ].map((col, index) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileTap={{ scale: 0.96 }}
                className="flex-shrink-0 w-[260px] h-[140px] rounded-[24px] relative overflow-hidden shadow-sm shadow-black/[0.06]"
              >
                <Image src={col.img} alt={col.title} fill className="object-cover" sizes="260px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-bold text-[15px] text-white mb-0.5 leading-tight">{col.title}</h3>
                  <p className="text-[12px] text-white/70 mb-2.5">{col.desc}</p>
                  <motion.button whileTap={{ scale: 0.95 }} className="bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold px-4 py-1.5 rounded-full border border-white/20">
                    Explore →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== 15. FOOTER SECTIONS (Bottom Sheet Style) ===== */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="pt-6 pb-4"
        >
          <div className="mx-4 mb-2 bg-white rounded-[20px] overflow-hidden shadow-sm shadow-black/[0.04]">
            {footerSections.map((section, index) => (
              <div key={section.title}>
                {index > 0 && <div className="mx-4 border-t border-black/[0.04]" />}
                <motion.button
                  whileTap={{ scale: 0.99 }}
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between px-4 py-3.5"
                >
                  <span className="text-[14px] font-bold text-gray-900">{section.title}</span>
                  <motion.div
                    animate={{ rotate: expandedSections[section.title] ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </motion.div>
                </motion.button>
                <AnimatePresence initial={false}>
                  {expandedSections[section.title] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-3.5 flex flex-wrap gap-2">
                        {section.items.map((item) => (
                          <motion.div
                            key={item}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#F2F2F7] rounded-full px-3.5 py-2"
                          >
                            <Link href="#" className="text-[12px] font-medium text-gray-600">
                              {item}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* App version */}
          <div className="text-center pt-2 pb-4">
            <p className="text-[11px] text-gray-400">JustDial v14.2.0</p>
          </div>
        </motion.section>
      </main>

      {/* ===== 16. STICKY BOTTOM NAVIGATION ===== */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50">
        {/* Category pills row */}
        <div className="bg-white/90 backdrop-blur-xl border-t border-black/[0.04] px-2 pt-2 pb-1">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {bottomNavTabs.map((tab) => (
              <motion.button
                key={tab}
                whileTap={{ scale: 0.92 }}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[11px] font-semibold transition-colors ${
                  activeTab === tab ? "bg-[#0056b3] text-white" : "bg-[#F2F2F7] text-gray-600"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Nav icons row */}
        <nav className="bg-white/95 backdrop-blur-xl border-t border-black/[0.04] pb-[env(safe-area-inset-bottom)]">
          <div className="flex items-center justify-around py-1.5">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.85 }}
                onClick={() => setActiveNav(item.id)}
                className="flex flex-col items-center gap-0.5 min-w-[56px] min-h-[48px] justify-center relative"
              >
                {activeNav === item.id && (
                  <motion.div layoutId="navIndicator" className="absolute -top-1.5 w-5 h-0.5 rounded-full bg-[#0056b3]" />
                )}
                <item.icon
                  className={`w-[22px] h-[22px] ${activeNav === item.id ? "text-[#0056b3]" : "text-gray-400"}`}
                  fill={activeNav === item.id ? "#0056b3" : "none"}
                  strokeWidth={activeNav === item.id ? 2.5 : 1.5}
                />
                <span className={`text-[10px] ${activeNav === item.id ? "font-semibold text-[#0056b3]" : "font-medium text-gray-400"}`}>
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}