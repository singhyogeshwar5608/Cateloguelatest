"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, BarChart3, Briefcase, Newspaper, MoreHorizontal,
  Flame, Clock, Star, TrendingUp, Sparkles, LayoutGrid,
  ArrowLeft, SlidersHorizontal, Search, Mic, X, MapPin,
  ChevronRight, Share2, Bookmark, CheckCircle2, Shield,
  Award, ThumbsUp, Phone, Mail, Facebook, Twitter, Instagram, Youtube,
} from "lucide-react";
import CategoryGrid from "@/components/category/CategoryGrid";
import RecentCategories from "@/components/category/RecentCategories";
import StoreCard from "@/components/justdial/StoreCard";
import {
  extendedCategories,
  businesses,
  getBusinessCountByCategory,
  getBusinessesByCategory,
  type ListingBusiness,
} from "@/lib/business-listing-data";

const recentlyViewedSlugs = ["restaurants", "doctors", "salons", "electronics", "cafes"];

// Filter chips — app-like horizontal scrollable pills
const filterChips = [
  { id: "all", label: "All", icon: LayoutGrid },
  { id: "popular", label: "Popular", icon: Flame },
  { id: "food", label: "Food & Drink", icon: Star },
  { id: "services", label: "Home Services", icon: Sparkles },
  { id: "health", label: "Health", icon: TrendingUp },
  { id: "shopping", label: "Shopping", icon: Star },
];

// Map category slugs to chip ids for filtering
const chipCategoryMap: Record<string, string[]> = {
  popular: extendedCategories.filter((c) => c.isPopular).map((c) => c.slug),
  food: ["restaurants", "cafes", "hotels"],
  services: ["ac-repair", "plumbers", "electricians", "painters", "pest-control", "carpenters", "deep-cleaning", "interior-design"],
  health: ["doctors", "pharmacies", "gyms", "salons"],
  shopping: ["shopping", "electronics", "photographers", "travel-agents", "wedding-planners", "schools"],
};

const bottomNavTabs = [
  { icon: Home, label: "Home", id: "Home", href: "/" },
  { icon: BarChart3, label: "Leads", id: "Leads", href: "#" },
  { icon: Briefcase, label: "B2B", id: "B2B", href: "#" },
  { icon: Newspaper, label: "News", id: "News", href: "#" },
  { icon: MoreHorizontal, label: "More", id: "More", href: "#" },
];

const howItWorks = [
  { step: 1, title: "Choose Category", desc: "Browse categories", icon: Search, color: "#2563EB" },
  { step: 2, title: "Compare", desc: "View ratings", icon: TrendingUp, color: "#059669" },
  { step: 3, title: "Connect", desc: "Call or visit", icon: CheckCircle2, color: "#D97706" },
];

const reviews = [
  { name: "Priya Sharma", location: "Mumbai", rating: 5, text: "Found an amazing restaurant through JustDial. Reviews and photos were super helpful!", service: "Restaurants", avatar: "PS", slug: "restaurants" },
  { name: "Amit Kumar", location: "Delhi", rating: 5, text: "Booked a salon appointment. All details I needed were there. Very satisfied!", service: "Salons", avatar: "AK", slug: "salons" },
  { name: "Sneha Reddy", location: "Bangalore", rating: 4, text: "Found a reliable AC repair service. Verified badge gave me confidence.", service: "AC Repair", avatar: "SR", slug: "ac-repair" },
  { name: "Rahul Verma", location: "Pune", rating: 5, text: "Compared multiple gyms in my area. Genuine reviews. Got a great discount!", service: "Gyms", avatar: "RV", slug: "gyms" },
];

export default function MobileCategoryListingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeNav, setActiveNav] = useState("Home");
  const [activeChip, setActiveChip] = useState("all");
  const [mounted, setMounted] = useState(false);
  const [saved, setSaved] = useState(false);
  // Sync selectedCategory with ?category= query param (matches /services behavior)
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "");
  }, [searchParams]);

  const handleSelectCategory = (slug: string) => {
    setSelectedCategory(slug);
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if (slug) {
      params.set("category", slug);
    } else {
      params.delete("category");
    }
    const qs = params.toString();
    router.replace(qs ? `/categories?${qs}` : "/categories", { scroll: false });
  };

  const selectedCat = useMemo(
    () => extendedCategories.find((c) => c.slug === selectedCategory),
    [selectedCategory],
  );

  // Tiny mount delay → shows skeleton briefly for native app feel
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 280);
    return () => clearTimeout(t);
  }, []);

  const recent = useMemo(
    () => extendedCategories.filter((c) => recentlyViewedSlugs.includes(c.slug)),
    [],
  );

  // Featured businesses — filtered by selected category when set
  const featuredStores = useMemo<ListingBusiness[]>(() => {
    if (selectedCategory) {
      const list = getBusinessesByCategory(selectedCategory).filter((b) => b.isFeatured);
      return list.length > 0 ? list : getBusinessesByCategory(selectedCategory).slice(0, 10);
    }
    return businesses.filter((b) => b.isFeatured).slice(0, 10);
  }, [selectedCategory]);

  // Popular Picks — when category selected, show businesses from that category not already in featured
  const popularBusinesses = useMemo<ListingBusiness[]>(() => {
    if (selectedCategory) {
      const featuredIds = new Set(featuredStores.map((b) => b.id));
      return getBusinessesByCategory(selectedCategory)
        .filter((b) => !featuredIds.has(b.id))
        .sort((a, b) => b.totalRatings - a.totalRatings)
        .slice(0, 8);
    }
    const featuredIds = new Set(featuredStores.map((b) => b.id));
    return businesses
      .filter((b) => !featuredIds.has(b.id) && b.isVerified && b.rating >= 4.4)
      .sort((a, b) => b.totalRatings - a.totalRatings)
      .slice(0, 8);
  }, [featuredStores, selectedCategory]);

  const filtered = useMemo(() => {
    let list = extendedCategories;

    // Apply chip filter first
    if (activeChip !== "all" && chipCategoryMap[activeChip]) {
      const allowed = new Set(chipCategoryMap[activeChip]);
      list = list.filter((c) => allowed.has(c.slug));
    }

    // Then search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((c) => c.label.toLowerCase().includes(q));
    }

    return list;
  }, [searchQuery, activeChip]);

  const totalBusinesses = useMemo(
    () => extendedCategories.reduce((acc, c) => acc + getBusinessCountByCategory(c.slug), 0),
    [],
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="min-h-screen bg-gray-50 pb-24"
      style={{ maxWidth: 480, margin: "0 auto", position: "relative" }}
    >
      {/* ── Glassmorphism Header (matches /services mobile) ── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/60">
        <div className="flex items-center gap-2.5 px-3 py-2.5">
          <Link href="/" className="flex items-center justify-center w-9 h-9 -ml-1 rounded-full hover:bg-gray-100 transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </Link>
          <div className="flex-1 min-w-0">
            <h1 className="text-[17px] font-bold text-gray-900 truncate">Categories</h1>
          </div>
          <button
            onClick={() => setSaved(!saved)}
            className="flex items-center justify-center w-9 h-9 -mr-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Save"
          >
            <Bookmark className={`w-[18px] h-[18px] ${saved ? "fill-amber-500 text-amber-500" : "text-gray-600"}`} />
          </button>
          <button className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition-colors" aria-label="Share">
            <Share2 className="w-[18px] h-[18px] text-gray-600" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-3 pb-2.5">
          <SearchHeaderInline query={searchQuery} onQueryChange={setSearchQuery} />
        </div>

        {/* Location Chip */}
        <div className="px-3 pb-2.5">
          <div className="flex items-center gap-1.5 bg-[#F0F4FF] text-[#0056b3] px-3 py-1.5 rounded-full w-fit">
            <MapPin className="w-3 h-3" />
            <span className="text-[11px] font-medium">Mumbai, Maharashtra</span>
            <ChevronRight className="w-3 h-3" />
          </div>
        </div>
      </header>

      {/* ── Scrollable Content ── */}
      <main className="overflow-y-auto pb-28 [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* ── Hero Banner (matches /services mobile) ── */}
        <motion.section
          className="mx-3 mt-3 rounded-2xl overflow-hidden relative"
          style={{ background: "linear-gradient(135deg, #0056b3, #2563EB)" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {/* Decorative */}
          <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/10" />
          <div className="absolute -bottom-6 right-16 w-20 h-20 rounded-full bg-white/8" />
          <div className="absolute top-12 right-24 w-3 h-3 rounded-full bg-white/20" />
          <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-white/30" />

          <div className="relative p-5">
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="bg-white/20 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    India&apos;s #1 Search Engine
                  </span>
                </div>
                <h2 className="text-white font-bold text-[18px] leading-tight">
                  Explore All Categories Near You
                </h2>
                <p className="text-white/70 text-[12px] mt-1.5">
                  {extendedCategories.length}+ categories • {totalBusinesses.toLocaleString()}+ verified businesses
                </p>
                <Link
                  href="#all-categories"
                  className="mt-3.5 inline-block bg-white text-[#0056b3] rounded-xl px-5 py-2.5 text-[13px] font-bold active:scale-[0.97] transition-all shadow-lg shadow-black/10"
                >
                  Explore Now
                </Link>
              </div>
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                <LayoutGrid className="w-8 h-8 text-white" strokeWidth={1.8} />
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Filter chips — app-style horizontal snap scroller ── */}
        <div
          className="sticky top-[156px] z-30 bg-gray-50/95 backdrop-blur-md pt-3 pb-2.5 mb-1 px-3"
          style={{ top: "calc(env(safe-area-inset-top) + 156px)" }}
        >
          <div
            className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filterChips.map((chip) => {
              const isActive = activeChip === chip.id;
              return (
                <motion.button
                  key={chip.id}
                  onClick={() => setActiveChip(chip.id)}
                  whileTap={{ scale: 0.94 }}
                  className={`flex-shrink-0 snap-start flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[12px] font-bold transition-all ${
                    isActive
                      ? "bg-[#0056b3] text-white shadow-md shadow-blue-200/60"
                      : "bg-white text-gray-600 ring-1 ring-black/[0.04] active:bg-gray-50"
                  }`}
                  aria-pressed={isActive}
                >
                  <chip.icon
                    className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-gray-400"}`}
                    strokeWidth={2.5}
                  />
                  {chip.label}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Skeleton loading on initial mount (native app feel) */}
        {!mounted ? (
          <SkeletonContent />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeChip}-${searchQuery}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              {/* All Categories — horizontal scroll with circular SVG icons + More tile (matches /services) */}
              <div id="all-categories">
                <CategoryGrid
                  categories={filtered}
                  variant="mobile"
                  layout="scroll"
                  selectedCategory={selectedCategory}
                  onSelectCategory={handleSelectCategory}
                />
              </div>

              {/* Showing chip — mirrors /services active filter chip */}
              <AnimatePresence>
                {selectedCat && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-3 mt-2 mb-1 overflow-hidden"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-gray-500">Showing:</span>
                      <button
                        onClick={() => handleSelectCategory("")}
                        className="inline-flex items-center gap-1 bg-[#0056b3] text-white text-[11px] font-semibold px-3 py-1 rounded-full active:scale-95 transition-transform"
                      >
                        {selectedCat.label}
                        <X className="w-3 h-3" />
                      </button>
                      <span className="text-[10px] text-gray-400">{getBusinessesByCategory(selectedCategory).length} places</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Featured Stores — Top Rated Businesses (matches /services Top Rated Providers) */}
              {(activeChip === "all" || selectedCategory) && !searchQuery && (
                <motion.section
                  className="mt-5"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <div className="flex items-center justify-between px-3 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0056b3] to-[#0077E6] flex items-center justify-center">
                        <TrendingUp className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                      </div>
                      <h2 className="text-[15px] font-bold text-gray-900 tracking-tight">
                        {selectedCat ? selectedCat.label : "Featured Stores"}
                      </h2>
                    </div>
                    <span className="text-[11px] font-semibold text-[#0056b3]">See All</span>
                  </div>
                  {featuredStores.length === 0 ? (
                    <div className="px-3 py-8 text-center">
                      <p className="text-xs text-gray-400">No businesses found for this category</p>
                    </div>
                  ) : (
                    <div className="flex gap-3 overflow-x-auto px-3 pb-2 scrollbar-hide">
                      {featuredStores.map((biz, idx) => (
                        <StoreCard
                          key={biz.id}
                          name={biz.name}
                          category={biz.category}
                          rating={biz.rating}
                          reviews={biz.totalRatings}
                          distance={biz.distance}
                          address={biz.area}
                          logoEmoji={biz.logoEmoji}
                          coverGradient={biz.coverGradient}
                          storeId={biz.storeId}
                          isFeatured={biz.isFeatured}
                          isVerified={biz.isVerified}
                          isOpen={biz.isOpen}
                          variant="mobile"
                          index={idx}
                        />
                      ))}
                    </div>
                  )}
                </motion.section>
              )}

              {/* Divider */}
              {activeChip === "all" && !searchQuery && (
                <div className="mx-3 mt-5 mb-1">
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                </div>
              )}

              {/* Popular Picks — StoreCard horizontal scroll (matches /services "Popular Services") */}
              {(activeChip === "all" || selectedCategory) && !searchQuery && (
                <motion.section
                  className="mt-5"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                >
                  <div className="flex items-center justify-between px-3 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                        <Flame className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                      </div>
                      <h2 className="text-[15px] font-bold text-gray-900 tracking-tight">
                        {selectedCat ? `More ${selectedCat.label}` : "Popular Picks"}
                      </h2>
                    </div>
                    <span className="text-[11px] font-semibold text-[#0056b3]">See All</span>
                  </div>
                  {popularBusinesses.length === 0 ? (
                    <div className="px-3 py-8 text-center">
                      <p className="text-xs text-gray-400">No more businesses found for this category</p>
                    </div>
                  ) : (
                    <div className="flex gap-3 overflow-x-auto px-3 pb-2 scrollbar-hide">
                      {popularBusinesses.map((biz, idx) => (
                        <StoreCard
                          key={biz.id}
                          name={biz.name}
                          category={biz.category}
                          rating={biz.rating}
                          reviews={biz.totalRatings}
                          distance={biz.distance}
                          address={biz.area}
                          logoEmoji={biz.logoEmoji}
                          coverGradient={biz.coverGradient}
                          storeId={biz.storeId}
                          isFeatured={false}
                          isVerified={biz.isVerified}
                          isOpen={biz.isOpen}
                          variant="mobile"
                          index={idx}
                        />
                      ))}
                    </div>
                  )}
                </motion.section>
              )}

              {/* Recently Viewed — horizontal snap cards */}
              {activeChip === "all" && !searchQuery && !selectedCategory && (
                <RecentCategories categories={recent} variant="mobile" />
              )}

              {/* ── How It Works ── */}
              {activeChip === "all" && !searchQuery && (
                <motion.section
                  className="mt-7 px-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                >
                  <h2 className="text-[15px] font-bold text-gray-900 text-center mb-5">How It Works</h2>
                  <div className="relative">
                    {/* Connector line */}
                    <div className="absolute top-6 left-6 right-6 border-t-2 border-dashed border-blue-200 z-0" />
                    <div className="flex items-start justify-between gap-2 relative z-10">
                      {howItWorks.map((item) => (
                        <div key={item.step} className="flex-1 flex flex-col items-center text-center">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-2.5 shadow-lg"
                            style={{ backgroundColor: item.color }}
                          >
                            <item.icon className="w-5 h-5" />
                          </div>
                          <p className="text-[11px] font-bold text-gray-800 leading-tight">{item.title}</p>
                          <p className="text-[9px] text-gray-400 mt-0.5 leading-tight max-w-[90px]">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.section>
              )}

              {/* ── Why Choose Us ── */}
              {activeChip === "all" && !searchQuery && (
                <motion.section
                  className="mt-7 px-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <h2 className="text-[15px] font-bold text-gray-900 mb-3 px-1">Why Choose Us</h2>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { icon: Shield, label: "Verified", desc: "Background checked businesses", color: "#2563EB", bg: "#EFF6FF", slug: "restaurants" },
                      { icon: Award, label: "Genuine Reviews", desc: "Real customer feedback", color: "#059669", bg: "#ECFDF5", slug: "doctors" },
                      { icon: Clock, label: "24/7 Access", desc: "Business details anytime", color: "#D97706", bg: "#FFFBEB", slug: "salons" },
                      { icon: ThumbsUp, label: "Best Picks", desc: "Curated local businesses", color: "#DC2626", bg: "#FEF2F2", slug: "gyms" },
                    ].map((item) => (
                      <Link key={item.label} href={`/explore?category=${item.slug}`} className="bg-white rounded-2xl p-3.5 shadow-sm border border-gray-50 active:scale-[0.97] transition-transform">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-2" style={{ backgroundColor: item.bg }}>
                          <item.icon className="w-4 h-4" style={{ color: item.color }} />
                        </div>
                        <p className="text-[12px] font-bold text-gray-800">{item.label}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">{item.desc}</p>
                      </Link>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* ── Customer Reviews ── */}
              {activeChip === "all" && !searchQuery && (
                <motion.section
                  className="mt-7"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.4 }}
                >
                  <div className="flex items-center justify-between px-3 mb-3">
                    <h2 className="text-[15px] font-bold text-gray-900">Customer Reviews</h2>
                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span className="text-[11px] font-bold text-gray-800">4.6</span>
                    </div>
                  </div>
                  <div className="flex gap-3 overflow-x-auto px-3 pb-2 scrollbar-hide">
                    {reviews.map((review, idx) => (
                      <motion.div
                        key={review.name}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.06 * idx }}
                      >
                        <Link
                          href={`/explore?category=${review.slug}`}
                          className="flex-shrink-0 w-[240px] bg-white rounded-2xl p-4 shadow-sm border border-gray-50 block"
                        >
                          <div className="flex items-center gap-2 mb-2.5">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0056b3] to-[#2563EB] flex items-center justify-center text-white text-[11px] font-bold">
                              {review.avatar}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[12px] font-bold text-gray-900">{review.name}</p>
                              <p className="text-[10px] text-gray-400">{review.location} • {review.service}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-0.5 mb-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className={`w-3 h-3 ${i < review.rating ? "text-amber-500 fill-amber-500" : "text-gray-200"}`} />
                            ))}
                          </div>
                          <p className="text-[11px] text-gray-500 leading-relaxed">{review.text}</p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* ── CTA Banner ── */}
              {activeChip === "all" && !searchQuery && (
                <motion.section
                  className="mt-7 mx-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <div
                    className="rounded-2xl overflow-hidden relative p-5 flex items-center justify-between gap-4"
                    style={{ background: "linear-gradient(135deg, #059669, #10B981)" }}
                  >
                    <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/10" />
                    <div className="absolute bottom-2 right-20 w-10 h-10 rounded-full bg-white/8" />
                    <div className="relative flex-1 min-w-0">
                      <h2 className="text-white font-bold text-[16px] leading-tight">List Your Business Free</h2>
                      <p className="text-white/70 text-[10.5px] mt-1 leading-relaxed">
                        Join 2M+ businesses. Reach millions of customers across India.
                      </p>
                      <button className="mt-3 bg-white text-emerald-700 rounded-xl px-4 py-2 text-[12px] font-bold active:scale-[0.97] transition-all shadow-lg shadow-black/10">
                        Register Free →
                      </button>
                    </div>
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                      <Briefcase className="w-7 h-7 text-white" strokeWidth={1.6} />
                    </div>
                  </div>
                </motion.section>
              )}

              {/* ── Footer (compact mobile) ── */}
              {activeChip === "all" && !searchQuery && (
                <motion.footer
                  className="mt-7 bg-gray-900 text-gray-400 px-5 py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-[11px]">1800-123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 mb-5">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-[11px]">support@justdial.com</span>
                  </div>
                  <div className="flex items-center gap-3 mb-5">
                    {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                      <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-500">© 2025 JustDial Clone. All rights reserved.</p>
                </motion.footer>
              )}

              {/* Bottom spacer for content safety */}
              <div className="h-4" />
            </motion.div>
          </AnimatePresence>
        )}
      </main>

      {/* ── Bottom Navigation (native app style with safe-area) ── */}
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white/95 backdrop-blur-xl border-t border-gray-100/80 z-50 shadow-[0_-2px_12px_rgba(0,0,0,0.04)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <nav
          className="flex items-center justify-around px-2 py-2"
          role="navigation"
          aria-label="Main navigation"
        >
          {bottomNavTabs.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveNav(item.id)}
                className="flex flex-col items-center gap-0.5 active:scale-90 transition-transform min-w-[48px] py-1"
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
              >
                <motion.div
                  whileTap={{ scale: 0.85 }}
                  className={`p-1 rounded-lg transition-colors ${isActive ? "bg-blue-50" : ""}`}
                >
                  <item.icon
                    className={`w-[22px] h-[22px] ${isActive ? "text-[#0056b3]" : "text-gray-400"}`}
                    fill={isActive ? "#0056b3" : "none"}
                    strokeWidth={2.2}
                  />
                </motion.div>
                <span
                  className={`text-[9.5px] font-semibold ${
                    isActive ? "text-[#0056b3]" : "text-gray-400"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
}

/* ── Inline search bar (matches /services mobile) ── */
function SearchHeaderInline({ query, onQueryChange }: { query: string; onQueryChange: (q: string) => void }) {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className={`flex items-center gap-2.5 bg-gray-100 rounded-2xl px-4 py-2.5 transition-all duration-200 ${
        focused ? "bg-white ring-2 ring-[#0056b3]/20 shadow-sm" : ""
      }`}
    >
      <Search className="w-4 h-4 text-gray-400 shrink-0" />
      <input
        type="text"
        placeholder="Search categories..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="flex-1 bg-transparent text-[13px] text-gray-800 placeholder-gray-400 outline-none min-w-0"
      />
      {query ? (
        <button onClick={() => onQueryChange("")} className="shrink-0">
          <X className="w-4 h-4 text-gray-400" />
        </button>
      ) : (
        <Mic className="w-4 h-4 text-[#0056b3] shrink-0" />
      )}
    </div>
  );
}

/* ── Skeleton loader — native app launch feel ── */
function SkeletonContent() {
  return (
    <div className="px-3 pt-4">
      {/* Popular skeleton */}
      <div className="flex items-center justify-between mb-3">
        <div className="h-3.5 w-32 rounded-full bg-gray-200/80 animate-pulse" />
        <div className="h-3 w-10 rounded-full bg-gray-200/80 animate-pulse" />
      </div>
      <div className="flex gap-3 overflow-hidden">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex-shrink-0 w-[116px] p-3.5 rounded-2xl bg-white ring-1 ring-black/[0.03]">
            <div className="w-14 h-14 rounded-2xl bg-gray-200/70 mx-auto mb-2.5 animate-pulse" />
            <div className="h-2.5 w-16 mx-auto rounded-full bg-gray-200/70 animate-pulse mb-1.5" />
            <div className="h-2 w-10 mx-auto rounded-full bg-gray-200/50 animate-pulse" />
          </div>
        ))}
      </div>

      {/* Grid skeleton */}
      <div className="mt-6 mb-3 flex items-center justify-between">
        <div className="h-3.5 w-28 rounded-full bg-gray-200/80 animate-pulse" />
        <div className="h-3 w-12 rounded-full bg-gray-200/80 animate-pulse" />
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="p-3.5 rounded-[20px] bg-white ring-1 ring-black/[0.03]">
            <div className="w-12 h-12 rounded-2xl bg-gray-200/70 mb-2.5 animate-pulse" />
            <div className="h-2.5 w-20 rounded-full bg-gray-200/70 animate-pulse mb-1.5" />
            <div className="h-2 w-12 rounded-full bg-gray-200/50 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
