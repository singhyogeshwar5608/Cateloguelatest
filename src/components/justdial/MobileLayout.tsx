"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Search, SlidersHorizontal, Home, LayoutGrid, CalendarDays,
  Heart, User, Star, MapPin, Navigation, Wrench, Paintbrush,
  Droplets, Zap, Sparkles, Bug, Hammer, Scissors, ShieldCheck,
  ChevronRight, Users,
} from "lucide-react";
import StoreCard from "./StoreCard";
import { searchAll, getRecentLocations, saveRecentLocation, type SearchSuggestion } from "@/lib/search-data";

/* ═══════════════════════════════════════════════════════════════
   DATA — all static content that feeds the page sections
   ═══════════════════════════════════════════════════════════════ */

const quickServices = [
  { icon: Wrench, label: "AC Repair", bg: "#F3F4F6", color: "#3B82F6", slug: "ac-repair" },
  { icon: Paintbrush, label: "Painter", bg: "#FEF3C7", color: "#D97706", slug: "painter" },
  { icon: Droplets, label: "Plumber", bg: "#D1FAE5", color: "#059669", slug: "plumber" },
  { icon: Zap, label: "Electrician", bg: "#FEF3C7", color: "#B45309", slug: "electrician" },
  { icon: Sparkles, label: "Cleaning", bg: "#DBEAFE", color: "#2563EB", slug: "deep-cleaning" },
  { icon: Bug, label: "Pest Control", bg: "#FCE7F3", color: "#DB2777", slug: "pest-control" },
];

const categoryChips = ["All", "Popular", "Top Rated", "Nearby", "Open Now", "Verified"];

const popularServices = [
  { name: "CoolAir AC Services", category: "AC Repair • Installation", rating: "4.8", reviews: "256", distance: "0.3 km", address: "Andheri West, Mumbai", logoIcon: Wrench, coverGradient: "from-blue-500 to-blue-700", storeId: "STR-10001", href: "/service/ac-repair" },
  { name: "ShineHome Painters", category: "Interior • Exterior Painting", rating: "4.6", reviews: "189", distance: "0.5 km", address: "Malad West, Mumbai", logoIcon: Paintbrush, coverGradient: "from-amber-500 to-orange-600", storeId: "STR-10002", href: "/service/painter" },
  { name: "FixRight Plumbing", category: "Plumbing • Repairs", rating: "4.7", reviews: "312", distance: "0.8 km", address: "Bandra West, Mumbai", logoIcon: Droplets, coverGradient: "from-emerald-500 to-green-600", storeId: "STR-10003", href: "/service/plumber" },
  { name: "BrightSpark Electric", category: "Electrical • Wiring", rating: "4.5", reviews: "145", distance: "1.2 km", address: "Khar West, Mumbai", logoIcon: Zap, coverGradient: "from-yellow-500 to-amber-600", storeId: "STR-10004", href: "/service/electrician" },
  { name: "GleamClean Services", category: "Deep Cleaning • Sanitization", rating: "4.8", reviews: "428", distance: "0.6 km", address: "Juhu, Mumbai", logoIcon: Sparkles, coverGradient: "from-cyan-500 to-blue-600", storeId: "STR-10005", href: "/service/deep-cleaning" },
  { name: "PestFree Solutions", category: "Pest Control • Fumigation", rating: "4.4", reviews: "97", distance: "1.5 km", address: "Goregaon, Mumbai", logoIcon: Bug, coverGradient: "from-pink-500 to-rose-600", storeId: "STR-10006", href: "/service/pest-control" },
];

const allCategories = [
  { emoji: "❄️", label: "AC Repair", pros: "250+", slug: "ac-repair" },
  { emoji: "🖌️", label: "Painters", pros: "180+", slug: "painter" },
  { emoji: "🚰", label: "Plumbers", pros: "180+", slug: "plumber" },
  { emoji: "⚡", label: "Electricians", pros: "320+", slug: "electrician" },
  { emoji: "🐛", label: "Pest Control", pros: "60+", slug: "pest-control" },
  { emoji: "🔨", label: "Carpenters", pros: "95+", slug: "carpenter" },
  { emoji: "✨", label: "Deep Cleaning", pros: "400+", slug: "deep-cleaning" },
  { emoji: "💇", label: "Salons at Home", pros: "175+", slug: "salon-home" },
];

const recentlyViewed = [
  { icon: Wrench, name: "CoolAir AC Services", rating: "4.6", color: "#3B82F6", bg: "#EFF6FF", href: "/service/ac-repair" },
  { icon: Droplets, name: "FixRight Plumbing", rating: "4.4", color: "#059669", bg: "#ECFDF5", href: "/service/plumber" },
  { icon: Sparkles, name: "GleamClean Services", rating: "4.8", color: "#2563EB", bg: "#DBEAFE", href: "/service/deep-cleaning" },
  { icon: Zap, name: "BrightSpark Electric", rating: "4.5", color: "#B45309", bg: "#FFFBEB", href: "/service/electrician" },
  { icon: Paintbrush, name: "ShineHome Painters", rating: "4.6", color: "#D97706", bg: "#FEF3C7", href: "/service/painter" },
];

const bottomNavItems = [
  { icon: Home, label: "Home", id: "home" },
  { icon: LayoutGrid, label: "Categories", id: "categories" },
  { icon: CalendarDays, label: "Bookings", id: "bookings" },
  { icon: Heart, label: "Favorites", id: "favorites" },
  { icon: User, label: "Profile", id: "profile" },
];

/* ═══════════════════════════════════════════════════════════════
   SECTION HEADING — reused across multiple sections
   ═══════════════════════════════════════════════════════════════ */

function SectionHeading({ title, action, onAction }: {
  title: string;
  action?: string;
  onAction?: () => void;
}) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-[17px] font-bold text-gray-900 leading-tight">{title}</h2>
      {action && (
        <button
          onClick={onAction}
          className="text-[13px] font-semibold text-blue-500 flex items-center gap-0.5 active:opacity-60"
        >
          {action}
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MobileLayout() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [activeChip, setActiveChip] = useState("All");
  const [activeNav, setActiveNav] = useState("home");
  const [showSearch, setShowSearch] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Debounced search
  useEffect(() => {
    if (!searchQuery.trim()) { setSuggestions([]); setShowSuggestions(false); return; }
    const t = setTimeout(() => {
      setSuggestions(searchAll(searchQuery, selectedCity, 4));
      setShowSuggestions(true);
    }, 150);
    return () => clearTimeout(t);
  }, [searchQuery, selectedCity]);

  // Focus search when opened
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  const handleSuggestionTap = useCallback((s: SearchSuggestion) => {
    setShowSearch(false);
    setShowSuggestions(false);
    setSearchQuery("");
    router.push(s.href);
  }, [router]);

  /* ── 1. STICKY APP HEADER ─────────────────────────────────── */
  const renderHeader = () => (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100/80">
      <div className="flex items-center justify-between px-4 h-[56px]">
        <h1 className="text-[16px] font-bold text-gray-900">Home Services</h1>
        <div className="flex items-center gap-3">
          <button
            onClick={() => { setShowSearch(true); }}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 active:bg-gray-100"
          >
            <Search className="w-[18px] h-[18px] text-gray-600" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 active:bg-gray-100">
            <SlidersHorizontal className="w-[18px] h-[18px] text-gray-600" />
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      {showSearch && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-x-0 top-0 z-50 bg-white shadow-lg"
        >
          <div className="flex items-center gap-2 px-4 h-[56px]">
            <button
              onClick={() => { setShowSearch(false); setShowSuggestions(false); setSearchQuery(""); }}
              className="text-blue-500 text-[15px] font-medium"
            >
              Cancel
            </button>
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services..."
                className="w-full h-9 pl-9 pr-3 bg-gray-100 rounded-full text-[14px] text-gray-900 placeholder:text-gray-400 outline-none"
              />
            </div>
          </div>
          {/* Suggestions dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="border-t border-gray-100 bg-white max-h-[60vh] overflow-y-auto">
              {suggestions.map((s, i) => (
                <button
                  key={`${s.label}-${i}`}
                  onClick={() => handleSuggestionTap(s)}
                  className="w-full flex items-center gap-3 px-4 py-3 active:bg-gray-50 border-b border-gray-50"
                >
                  <span className="text-[18px]">{s.emoji}</span>
                  <div className="text-left flex-1 min-w-0">
                    <p className="text-[14px] font-medium text-gray-900 truncate">{s.label}</p>
                    <p className="text-[12px] text-gray-400">{s.type}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );

  /* ── 2. HERO BANNER ───────────────────────────────────────── */
  const renderHeroBanner = () => (
    <div className="px-4 pt-4">
      <div className="relative rounded-2xl overflow-hidden h-[200px] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        {/* Decorative circles */}
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-500/30 rounded-full blur-2xl" />
        <div className="absolute -bottom-12 -left-6 w-32 h-32 bg-blue-400/20 rounded-full blur-xl" />

        <div className="relative z-10 h-full flex flex-col justify-between p-5">
          {/* Top badge */}
          <div className="flex items-center gap-1.5 self-start">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-[11px] font-semibold text-white">Live Tracking Available</span>
            </div>
          </div>

          {/* Main text */}
          <div>
            <h2 className="text-white text-[19px] font-bold leading-tight mb-1.5">
              Professional Home Services
            </h2>
            <p className="text-blue-100 text-[13px] leading-snug mb-3">
              Book trusted experts for all your home service needs
            </p>
            <button className="bg-white rounded-full px-3.5 py-2 flex items-center gap-2 shadow-md active:scale-95 transition-transform">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-[13px] font-bold text-blue-600">1,680+ Professionals Available</span>
            </button>
          </div>

          {/* Technician silhouette area */}
          <div className="absolute right-3 bottom-3 w-[100px] h-[120px] bg-gradient-to-t from-white/10 to-transparent rounded-t-full flex items-end justify-center overflow-hidden">
            <div className="w-16 h-16 bg-white/15 rounded-full mb-2 backdrop-blur-sm flex items-center justify-center">
              <Wrench className="w-8 h-8 text-white/70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  /* ── 3. QUICK SERVICES ────────────────────────────────────── */
  const renderQuickServices = () => (
    <div className="mt-6 px-4">
      <SectionHeading title="Quick Services" action="See All" onAction={() => router.push("/services")} />
      <div className="flex gap-0 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-1">
        {quickServices.map((svc) => {
          const Icon = svc.icon;
          return (
            <Link
              key={svc.slug}
              href={`/service/${svc.slug}`}
              className="flex flex-col items-center gap-2 flex-shrink-0 w-[68px] active:scale-95 transition-transform"
            >
              <div
                className="w-[48px] h-[48px] rounded-full flex items-center justify-center"
                style={{ backgroundColor: svc.bg }}
              >
                <Icon className="w-5 h-5" style={{ color: svc.color }} strokeWidth={2} />
              </div>
              <span className="text-[12px] font-medium text-gray-600 text-center leading-tight w-full">
                {svc.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );

  /* ── 4. BROWSE BY CATEGORY (CHIPS) ────────────────────────── */
  const renderCategoryChips = () => (
    <div className="mt-6 px-4">
      <SectionHeading title="Browse by Category" action="See All" onAction={() => router.push("/categories")} />
      <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-1">
        {categoryChips.map((chip) => (
          <button
            key={chip}
            onClick={() => setActiveChip(chip)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-[13px] font-semibold transition-all active:scale-95 ${
              activeChip === chip
                ? "bg-blue-500 text-white shadow-md shadow-blue-500/25"
                : "bg-gray-100 text-gray-500 active:bg-gray-200"
            }`}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );

  /* ── 5. POPULAR SERVICES NEAR YOU ─────────────────────────── */
  const renderPopularServices = () => (
    <div className="mt-6">
      <div className="px-4">
        <SectionHeading title="Popular Services Near You" action="View All" onAction={() => router.push("/services")} />
      </div>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-2">
        {popularServices.map((svc, i) => (
          <StoreCard
            key={svc.name}
            variant="mobile"
            index={i}
            name={svc.name}
            category={svc.category}
            rating={svc.rating}
            reviews={svc.reviews}
            distance={svc.distance}
            address={svc.address}
            logoIcon={svc.logoIcon}
            coverGradient={svc.coverGradient}
            storeId={svc.storeId}
            href={svc.href}
          />
        ))}
      </div>
    </div>
  );

  /* ── 6. ALL CATEGORIES ────────────────────────────────────── */
  const renderAllCategories = () => (
    <div className="mt-6 px-4">
      <SectionHeading title="All Categories" />
      <div className="grid grid-cols-4 gap-2.5">
        {allCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/service/${cat.slug}`}
            className="bg-white rounded-xl p-2.5 flex flex-col items-center gap-1.5 shadow-sm shadow-black/[0.04] ring-1 ring-black/[0.04] active:scale-95 transition-transform"
          >
            <span className="text-[26px]">{cat.emoji}</span>
            <span className="text-[12px] font-bold text-gray-900 text-center leading-tight">{cat.label}</span>
            <span className="text-[10px] font-medium text-gray-400">{cat.pros} Pros</span>
          </Link>
        ))}
      </div>
    </div>
  );

  /* ── 7. RECENTLY VIEWED ───────────────────────────────────── */
  const renderRecentlyViewed = () => (
    <div className="mt-6">
      <div className="px-4">
        <SectionHeading title="Recently Viewed" action="View All" />
      </div>
      <div className="flex gap-2.5 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-1">
        {recentlyViewed.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-2.5 flex-shrink-0 bg-white rounded-xl px-3 py-2.5 shadow-sm shadow-black/[0.04] ring-1 ring-black/[0.04] active:scale-95 transition-transform min-w-[180px]"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: item.bg }}
              >
                <Icon className="w-[18px] h-[18px]" style={{ color: item.color }} strokeWidth={2} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-semibold text-gray-900 truncate leading-tight">{item.name}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="text-[11px] font-semibold text-gray-500">{item.rating}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );

  /* ── 8. TRUST BANNER / VERIFIED PROFESSIONALS ─────────────── */
  const renderTrustBanner = () => (
    <div className="mt-6 px-4">
      <div className="bg-emerald-50 rounded-2xl p-4 flex items-center gap-3.5 border border-emerald-100/60">
        <div className="w-11 h-11 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/25">
          <ShieldCheck className="w-6 h-6 text-white" strokeWidth={2.5} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[14px] font-bold text-gray-900 leading-tight">Verified Professionals</p>
          <p className="text-[12px] text-gray-500 leading-snug mt-0.5">
            All professionals are background verified for your safety and peace of mind.
          </p>
        </div>
        <Link
          href="/services"
          className="flex-shrink-0 bg-emerald-500 text-white text-[13px] font-bold rounded-full px-4 py-2.5 shadow-md shadow-emerald-500/25 active:scale-95 transition-transform"
        >
          Book Now
        </Link>
      </div>
    </div>
  );

  /* ── 9. BOTTOM NAVIGATION ─────────────────────────────────── */
  const renderBottomNav = () => (
    <div className="fixed bottom-0 inset-x-0 z-50">
      {/* Fade edge */}
      <div className="h-3 bg-gradient-to-t from-white to-transparent" />
      <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/60 shadow-[0_-2px_20px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-around h-[60px] mx-3 mb-2 bg-white rounded-2xl shadow-lg shadow-black/[0.06] border border-gray-100/80">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-1.5 rounded-xl transition-colors ${
                  isActive ? "text-blue-500" : "text-gray-400 active:text-gray-600"
                }`}
              >
                <Icon className={`w-[22px] h-[22px] ${isActive ? "stroke-[2.2]" : "stroke-[1.8]"}`} />
                <span className={`text-[10px] leading-none ${isActive ? "font-bold" : "font-medium"}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  /* ═══════════════════════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════════════════════ */
  return (
    <div className="min-h-screen bg-white pb-24">
      {renderHeader()}
      {renderHeroBanner()}
      {renderQuickServices()}
      {renderCategoryChips()}
      {renderPopularServices()}
      {renderAllCategories()}
      {renderRecentlyViewed()}
      {renderTrustBanner()}
      {renderBottomNav()}
    </div>
  );
}