"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star, ChevronRight, Share2, Bookmark, Search, Phone, Mail,
  MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight,
  Home as HomeIcon, X, CheckCircle2,
  Users, TrendingUp, Shield, Award, Clock, ThumbsUp,
  Mic, LayoutGrid, Briefcase, Flame,
} from "lucide-react";
import CategoryGrid from "@/components/category/CategoryGrid";
import RecentCategories from "@/components/category/RecentCategories";
import StoreCard from "@/components/justdial/StoreCard";
import {
  extendedCategories,
  businesses,
  getBusinessesByCategory,
  type ListingBusiness,
} from "@/lib/business-listing-data";

const recentlyViewedSlugs = ["restaurants", "doctors", "salons", "electronics", "cafes"];

/* ═══════════════════════════════════════════════════
   STATIC DATA (How It Works, Why Choose, Reviews)
   ═══════════════════════════════════════════════════ */

const howItWorks = [
  { step: 1, title: "Choose Category", desc: "Browse our extensive directory and pick the business category that matches what you're looking for.", icon: Search, color: "#2563EB" },
  { step: 2, title: "Compare Businesses", desc: "View ratings, reviews, photos, and contact details to compare top businesses near you.", icon: TrendingUp, color: "#059669" },
  { step: 3, title: "Connect & Book", desc: "Call, message, or visit the business directly. Get the best deals and verified contacts.", icon: CheckCircle2, color: "#D97706" },
];

const reviews = [
  { name: "Priya Sharma", location: "Mumbai", rating: 5, text: "Found an amazing restaurant through JustDial. The reviews and photos helped me choose the perfect place for our anniversary dinner. Highly recommended!", service: "Restaurants", avatar: "PS", slug: "restaurants" },
  { name: "Amit Kumar", location: "Delhi", rating: 5, text: "Booked a salon appointment through the platform. The listing had all details I needed — prices, services, timings. Very satisfied with the experience.", service: "Salons", avatar: "AK", slug: "salons" },
  { name: "Sneha Reddy", location: "Bangalore", rating: 4, text: "Found a reliable AC repair service. Verified badge gave me confidence. The technician came on time and fixed the issue. Great platform!", service: "AC Repair", avatar: "SR", slug: "ac-repair" },
  { name: "Rahul Verma", location: "Pune", rating: 5, text: "Compared multiple gyms in my area. The ratings and reviews were genuine. Got a great discount on annual membership. Will use again!", service: "Gyms", avatar: "RV", slug: "gyms" },
];

const footerLinks = {
  "About Us": ["About JustDial", "Careers", "Blog", "Advertise"],
  "Support": ["Help Center", "Safety Tips", "Contact Us", "Report Fraud"],
  "Legal": ["Terms of Use", "Privacy Policy", "Cookie Policy", "Grievance"],
};

export default function DesktopCategoryListingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [saved, setSaved] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [focused, setFocused] = useState(false);
  // Sync selectedCategory with ?category= query param (matches /services behavior)
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "");
  }, [searchParams]);

  const handleSelectCategory = (slug: string) => {
    setSelectedCategory(slug);
    // Update URL without full reload
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
    if (!searchQuery.trim()) return extendedCategories;
    const q = searchQuery.toLowerCase();
    return extendedCategories.filter((c) => c.label.toLowerCase().includes(q));
  }, [searchQuery]);

  const stats = [
    { label: "Categories", value: `${extendedCategories.length}+`, icon: LayoutGrid },
    { label: "Businesses", value: "2M+", icon: Users },
    { label: "Cities Covered", value: "500+", icon: MapPin },
    { label: "Avg Rating", value: "4.6", icon: Star },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gray-50"
    >
      {/* ── Top Nav Bar ── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-[#0056b3] transition-colors flex items-center gap-1">
              <HomeIcon className="w-4 h-4" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <span className="text-gray-900 font-medium">Categories</span>
          </nav>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Share2 className="w-4 h-4" /> Share
            </button>
            <button
              onClick={() => setSaved(!saved)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-sm border rounded-lg transition-colors ${
                saved ? "border-amber-300 bg-amber-50 text-amber-700" : "border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Bookmark className={`w-4 h-4 ${saved ? "fill-amber-500 text-amber-500" : ""}`} />
              {saved ? "Saved" : "Save"}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero Banner ── */}
      <section className="bg-gradient-to-br from-[#0056b3] to-[#003d80]">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="relative rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #E0F2FE 0%, #F0F9FF 100%)" }}>
            {/* Decorative */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/30" />
            <div className="absolute -bottom-8 right-32 w-28 h-28 rounded-full bg-white/20" />
            <div className="absolute top-16 right-48 w-4 h-4 rounded-full bg-blue-300/40" />
            <div className="absolute top-24 right-24 w-3 h-3 rounded-full bg-blue-400/30" />
            <div className="absolute bottom-12 right-12 w-2 h-2 rounded-full bg-blue-300/50" />
            <div className="absolute top-8 left-[35%] w-3 h-3 rounded-full bg-blue-200/50" />

            <div className="relative flex items-center justify-between gap-12 px-10 py-10">
              {/* Left */}
              <div className="flex-1 max-w-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#0056b3]/10 text-[#0056b3] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    India&apos;s #1 Local Search Engine
                  </span>
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                  Explore All Categories Near You
                </h2>
                <p className="text-base text-gray-500 mt-3 leading-relaxed">
                  From restaurants to AC repair, discover verified businesses across {extendedCategories.length}+ categories. Get contact details, reviews, ratings, and more.
                </p>

                {/* Search Bar */}
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className={`flex-1 flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-lg shadow-black/5 border transition-all ${
                      focused ? "border-[#0056b3] ring-2 ring-[#0056b3]/10" : "border-gray-100"
                    }`}
                  >
                    <Search className={`w-5 h-5 transition-colors ${focused ? "text-[#0056b3]" : "text-gray-400"}`} />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      placeholder="Search categories — try 'salon', 'ac repair'..."
                      className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none font-medium"
                    />
                    {searchQuery && (
                      <button onClick={() => setSearchQuery("")} className="text-gray-400 hover:text-gray-600">
                        <X className="w-4 h-4" />
                      </button>
                    )}
                    <div className="w-px h-4 bg-gray-200" />
                    <Mic className="w-5 h-5 text-[#0056b3] cursor-pointer hover:scale-110 transition-transform" />
                  </div>
                  <button className="bg-[#2563EB] text-white rounded-xl px-7 py-3.5 text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                    Search
                  </button>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 mt-8 flex-wrap">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-white/80 shadow-sm flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-[#0056b3]" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                        <p className="text-xs text-gray-400">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Illustration */}
              <div className="flex-shrink-0 hidden lg:block">
                <div className="w-48 h-48 rounded-3xl bg-white/60 backdrop-blur-sm shadow-xl flex items-center justify-center">
                  <LayoutGrid className="w-24 h-24 text-[#0056b3]" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* All Categories — horizontal scroll with circular SVG icons + More tile (matches /services) */}
        <CategoryGrid
          categories={filtered}
          variant="desktop"
          layout="scroll"
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Showing badge — mirrors /services active filter chip */}
        <AnimatePresence>
          {selectedCat && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 overflow-hidden"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Showing:</span>
                <button
                  onClick={() => handleSelectCategory("")}
                  className="inline-flex items-center gap-1.5 bg-[#0056b3] text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-[#004494] transition-colors"
                >
                  {selectedCat.label}
                  <X className="w-3 h-3" />
                </button>
                <span className="text-xs text-gray-400">• {getBusinessesByCategory(selectedCategory).length} businesses</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Featured Stores — Top Rated Businesses (matches /services Top Rated Providers) */}
        {(!searchQuery || selectedCategory) && (
          <section className="bg-white border-y border-gray-100 -mx-6 px-6 py-10 mt-10">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0056b3] to-[#0077E6] flex items-center justify-center shadow-sm shadow-blue-200">
                    <TrendingUp className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                      {selectedCat ? `${selectedCat.label} Near You` : "Featured Stores Near You"}
                    </h2>
                    <p className="text-sm text-gray-400 mt-0.5 font-medium">
                      {selectedCat ? `Top-rated ${selectedCat.label.toLowerCase()} in your area` : "Top-rated businesses in your area"}
                    </p>
                  </div>
                </div>
                <Link href={selectedCategory ? `/explore?category=${selectedCategory}` : "/explore?category=doctors"} className="text-sm text-[#0056b3] font-semibold flex items-center gap-1 hover:underline bg-[#0056b3]/8 px-3.5 py-1.5 rounded-full">
                  View All <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative group/featured">
                {featuredStores.length === 0 ? (
                  <div className="w-full py-12 text-center">
                    <p className="text-sm text-gray-400">No businesses found for this category</p>
                  </div>
                ) : (
                  <div
                    className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
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
                        variant="desktop"
                        index={idx}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Divider */}
        {!searchQuery && (
          <div className="mt-10 mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          </div>
        )}

        {/* Popular Picks — StoreCard Grid (matches /services "Popular Services" section) */}
        {(!searchQuery || selectedCategory) && (
          <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-sm shadow-orange-200">
                  <Flame className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                    {selectedCat ? `Popular in ${selectedCat.label}` : "Popular Picks"}
                  </h2>
                  <p className="text-sm text-gray-400 mt-0.5 font-medium">
                    {selectedCat ? `More ${selectedCat.label.toLowerCase()} you might like` : "Most viewed businesses near you"}
                  </p>
                </div>
              </div>
              <Link href={selectedCategory ? `/explore?category=${selectedCategory}` : "/explore"} className="text-sm text-[#0056b3] font-semibold flex items-center gap-1 hover:underline bg-[#0056b3]/8 px-3.5 py-1.5 rounded-full">
                See All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            {popularBusinesses.length === 0 ? (
              <div className="w-full py-12 text-center">
                <p className="text-sm text-gray-400">No more businesses found for this category</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
                    variant="desktop"
                    fluid
                    index={idx}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {/* Recently Viewed */}
        {!searchQuery && !selectedCategory && <RecentCategories categories={recent} variant="desktop" />}
      </main>

      {/* ── How It Works ── */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">How It Works</h2>
            <p className="text-sm text-gray-400 mt-2">Find the right business in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector lines */}
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+40px)] w-[calc(33.33%-80px)] border-t-2 border-dashed border-blue-200" />
            <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(33.33%-80px)] border-t-2 border-dashed border-blue-200" />
            {howItWorks.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-5 relative z-10 shadow-xl"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-2 max-w-[280px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Why Choose JustDial Categories</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Shield, label: "Verified Businesses", desc: "All listed businesses are verified and trusted by millions of users across India.", color: "#2563EB", bg: "#EFF6FF", slug: "restaurants" },
            { icon: Award, label: "Genuine Reviews", desc: "Real customer reviews and ratings to help you make the right choice every time.", color: "#059669", bg: "#ECFDF5", slug: "doctors" },
            { icon: Clock, label: "Always Available", desc: "Access business details, contact info, and timings 24/7 from anywhere.", color: "#D97706", bg: "#FFFBEB", slug: "salons" },
            { icon: ThumbsUp, label: "Best Local Picks", desc: "Curated list of the best businesses in your area, updated regularly.", color: "#DC2626", bg: "#FEF2F2", slug: "gyms" },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * idx }}
            >
              <Link href={`/explore?category=${item.slug}`} className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: item.bg }}>
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="text-sm font-bold text-gray-900">{item.label}</h3>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Customer Reviews ── */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Customer Reviews</h2>
              <p className="text-sm text-gray-400 mt-0.5">What our customers say about us</p>
            </div>
            <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-lg">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-sm font-bold text-gray-800">4.6</span>
              <span className="text-xs text-gray-400">avg rating</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((review, idx) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * idx }}
              >
                <Link href={`/explore?category=${review.slug}`} className="block bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0056b3] to-[#2563EB] flex items-center justify-center text-white text-sm font-bold">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{review.name}</p>
                      <p className="text-xs text-gray-400">{review.location} • {review.service}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 mb-2.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? "text-amber-500 fill-amber-500" : "text-gray-200"}`} />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{review.text}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div
          className="rounded-3xl overflow-hidden relative p-10 flex items-center justify-between gap-10"
          style={{ background: "linear-gradient(135deg, #059669, #10B981)" }}
        >
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
          <div className="absolute bottom-4 right-40 w-16 h-16 rounded-full bg-white/8" />
          <div className="absolute top-12 right-24 w-3 h-3 rounded-full bg-white/30" />
          <div className="relative flex-1 max-w-xl">
            <h2 className="text-3xl font-extrabold text-white">List Your Business Free</h2>
            <p className="text-white/80 mt-3 leading-relaxed">
              Join 2M+ businesses on JustDial. Get more visibility, reach millions of customers, and grow your business across India.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <button className="bg-white text-emerald-700 rounded-xl px-8 py-3 text-sm font-bold hover:bg-emerald-50 transition-colors shadow-lg">
                Register Free →
              </button>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>100% Free. No hidden charges.</span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 hidden lg:block">
            <div className="w-36 h-36 rounded-3xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-2xl">
              <Briefcase className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">JustDial</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                India&apos;s #1 local search engine for businesses, services, and categories.
              </p>
              <div className="flex items-center gap-2 mt-4 text-sm text-gray-400">
                <Phone className="w-4 h-4" /> <span>1800-123-4567</span>
              </div>
              <div className="flex items-center gap-2 mt-1.5 text-sm text-gray-400">
                <Mail className="w-4 h-4" /> <span>support@justdial.com</span>
              </div>
            </div>
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">© 2025 JustDial Clone. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors"><Icon className="w-5 h-5" /></a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
