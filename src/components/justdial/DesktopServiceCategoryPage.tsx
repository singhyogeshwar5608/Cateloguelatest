"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star, ChevronRight, Share2, Bookmark, Search, Phone, Mail,
  MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight,
  ArrowLeft, Wrench, Zap, Droplets, Paintbrush, Bug, Scissors,
  Sofa, Sparkles, Fan, Lightbulb, CheckCircle2, BadgeCheck,
  Users, TrendingUp, CalendarDays, MessageSquare, Shield,
  Award, Clock, ThumbsUp, Home, SlidersHorizontal, X, MoreHorizontal,
} from "lucide-react";
import StoreCard from "@/components/justdial/StoreCard";
import { getCategorizedProviders } from "@/lib/service-category-data";

/* ═══════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════ */

const serviceCategories = [
  { icon: Fan, label: "AC Repair", slug: "ac-repair", providers: 1200, bg: "#DBEAFE", color: "#1D4ED8" },
  { icon: Zap, label: "Electrician", slug: "electrician", providers: 980, bg: "#FEF3C7", color: "#B45309" },
  { icon: Droplets, label: "Plumber", slug: "plumber", providers: 850, bg: "#D1FAE5", color: "#047857" },
  { icon: Paintbrush, label: "Painter", slug: "painter", providers: 670, bg: "#FCE7F3", color: "#BE185D" },
  { icon: Sofa, label: "Carpenter", slug: "carpenter", providers: 540, bg: "#FED7AA", color: "#C2410C" },
  { icon: Bug, label: "Pest Control", slug: "pest-control", providers: 430, bg: "#E0E7FF", color: "#4338CA" },
  { icon: Sparkles, label: "Cleaning", slug: "deep-cleaning", providers: 760, bg: "#CCFBF1", color: "#0F766E" },
  { icon: Scissors, label: "Salon at Home", slug: "salon-at-home", providers: 620, bg: "#FDF2F8", color: "#BE185D" },
  { icon: Lightbulb, label: "Appliance Repair", slug: "appliance-repair", providers: 890, bg: "#FEE2E2", color: "#DC2626" },
  { icon: Wrench, label: "AC Installation", slug: "ac-installation", providers: 340, bg: "#EDE9FE", color: "#7C3AED" },
];

const topProviders = [
  { name: "Rajesh AC Services", service: "AC Repair & Service", rating: 4.8, reviews: 2340, jobs: 5600, price: "\u20b9299", verified: true, gradient: "from-blue-500 to-blue-600", icon: Fan, experience: "8 yrs", slug: "ac-repair" },
  { name: "Sharma Electric Works", service: "Electrician & Wiring", rating: 4.7, reviews: 1890, jobs: 4200, price: "\u20b9199", verified: true, gradient: "from-amber-500 to-orange-500", icon: Zap, experience: "12 yrs", slug: "electrician" },
  { name: "DeepClean Pro", service: "Deep Home Cleaning", rating: 4.9, reviews: 3120, jobs: 7800, price: "\u20b9499", verified: true, gradient: "from-emerald-500 to-teal-500", icon: Sparkles, experience: "5 yrs", slug: "deep-cleaning" },
  { name: "Gupta Plumbing", service: "Plumber & Fitting", rating: 4.6, reviews: 980, jobs: 2100, price: "\u20b9249", verified: true, gradient: "from-green-500 to-emerald-500", icon: Droplets, experience: "10 yrs", slug: "plumber" },
  { name: "ColorCraft Painters", service: "Painting & Wall Work", rating: 4.5, reviews: 870, jobs: 1500, price: "\u20b91,499", verified: false, gradient: "from-purple-500 to-indigo-500", icon: Paintbrush, experience: "6 yrs", slug: "painter" },
  { name: "StyleAtHome Salon", service: "Salon at Home", rating: 4.8, reviews: 1560, jobs: 3400, price: "\u20b9399", verified: true, gradient: "from-pink-500 to-rose-500", icon: Scissors, experience: "4 yrs", slug: "salon-at-home" },
  { name: "PestShield Control", service: "Pest Control Services", rating: 4.7, reviews: 720, jobs: 1800, price: "\u20b9599", verified: true, gradient: "from-indigo-500 to-violet-500", icon: Bug, experience: "7 yrs", slug: "pest-control" },
  { name: "QuickFix Appliances", service: "Appliance Repair", rating: 4.6, reviews: 1340, jobs: 2900, price: "\u20b9349", verified: true, gradient: "from-red-500 to-rose-600", icon: Lightbulb, experience: "9 yrs", slug: "appliance-repair" },
];

const popularServices = [
  { name: "AC Gas Refill", price: "\u20b9999", rating: 4.5, reviews: 1450, gradient: "from-sky-400 to-blue-500", icon: Fan, tag: "Bestseller", slug: "ac-repair" },
  { name: "Full Home Cleaning", price: "\u20b9749", rating: 4.7, reviews: 2890, gradient: "from-teal-400 to-emerald-500", icon: Sparkles, tag: "Popular", slug: "deep-cleaning" },
  { name: "Wiring & Rewiring", price: "\u20b9399", rating: 4.6, reviews: 1120, gradient: "from-amber-400 to-orange-500", icon: Zap, tag: "", slug: "electrician" },
  { name: "Bathroom Cleaning", price: "\u20b9349", rating: 4.4, reviews: 980, gradient: "from-cyan-400 to-teal-500", icon: Droplets, tag: "", slug: "plumber" },
  { name: "Kitchen Deep Clean", price: "\u20b9599", rating: 4.8, reviews: 1670, gradient: "from-lime-400 to-green-500", icon: Sparkles, tag: "Trending", slug: "deep-cleaning" },
  { name: "AC Installation", price: "\u20b91,299", rating: 4.6, reviews: 890, gradient: "from-blue-400 to-indigo-500", icon: Fan, tag: "", slug: "ac-installation" },
  { name: "Pest Control Treatment", price: "\u20b9599", rating: 4.7, reviews: 650, gradient: "from-violet-400 to-purple-500", icon: Bug, tag: "", slug: "pest-control" },
  { name: "Salon at Home", price: "\u20b9399", rating: 4.4, reviews: 1560, gradient: "from-pink-400 to-rose-500", icon: Scissors, tag: "New", slug: "salon-at-home" },
];

const howItWorks = [
  { step: 1, title: "Choose Service", desc: "Browse our extensive catalogue and select the home service that fits your needs.", icon: Search, color: "#2563EB" },
  { step: 2, title: "Book Appointment", desc: "Pick a convenient time slot, confirm your booking, and get instant confirmation.", icon: CalendarDays, color: "#059669" },
  { step: 3, title: "Get it Done", desc: "A verified professional arrives at your doorstep and completes the job to perfection.", icon: CheckCircle2, color: "#D97706" },
];

const reviews = [
  { name: "Priya Sharma", location: "Mumbai", rating: 5, text: "Amazing AC repair service! The technician was professional and fixed the issue in 20 minutes. Will definitely book again.", service: "AC Repair", avatar: "PS", slug: "ac-repair" },
  { name: "Amit Kumar", location: "Delhi", rating: 5, text: "Booked a deep cleaning session for my 3BHK. The team was punctual, thorough, and extremely professional. Highly recommended!", service: "Deep Cleaning", avatar: "AK", slug: "deep-cleaning" },
  { name: "Sneha Reddy", location: "Bangalore", rating: 4, text: "Electrician came on time and solved the complex wiring issue. Fair pricing and quality work. Very satisfied with the service.", service: "Electrician", avatar: "SR", slug: "electrician" },
  { name: "Rahul Verma", location: "Pune", rating: 5, text: "Used their painting service for my entire flat. The finish is excellent and they completed it within the promised timeline.", service: "Painter", avatar: "RV", slug: "painter" },
];

const footerLinks = {
  "About Us": ["About JustDial", "Careers", "Blog", "Advertise"],
  "Support": ["Help Center", "Safety Tips", "Contact Us", "Report Fraud"],
  "Legal": ["Terms of Use", "Privacy Policy", "Cookie Policy", "Grievance"],
};

/* ═══════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════ */

export default function DesktopServiceCategoryPage({ selectedCategory }: { selectedCategory?: string }) {
  const [saved, setSaved] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const providersRef = useRef<HTMLDivElement>(null);
  const catSectionRef = useRef<HTMLDivElement>(null);
  const [providersScrollPos, setProvidersScrollPos] = useState(0);

  const selectedCat = serviceCategories.find(c => c.slug === selectedCategory);
  const _filteredProviders = selectedCategory
    ? topProviders.filter(p => p.slug === selectedCategory)
    : topProviders;
  const filteredProviders = _filteredProviders.length > 0 ? _filteredProviders : topProviders;
  const _filteredPopular = selectedCategory
    ? popularServices.filter(s => s.slug === selectedCategory)
    : popularServices;
  const filteredPopular = _filteredPopular.length > 0 ? _filteredPopular : popularServices;

  useEffect(() => {
    if (selectedCategory && catSectionRef.current) {
      setTimeout(() => catSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 300);
    }
  }, [selectedCategory]);

  const scrollProviders = (dir: "left" | "right") => {
    if (!providersRef.current) return;
    providersRef.current.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
  };

  const handleProvidersScroll = () => {
    if (providersRef.current) {
      setProvidersScrollPos(providersRef.current.scrollLeft);
    }
  };

  const stats = [
    { label: "Service Providers", value: "50,000+", icon: Users },
    { label: "Services Completed", value: "2M+", icon: CheckCircle2 },
    { label: "Cities Covered", value: "500+", icon: MapPin },
    { label: "Avg Rating", value: "4.6", icon: Star },
  ];

  const getIconColor = (gradient: string) => {
    if (gradient.includes("blue")) return "#1D4ED8";
    if (gradient.includes("amber") || gradient.includes("orange")) return "#B45309";
    if (gradient.includes("emerald") || gradient.includes("green") || gradient.includes("teal") || gradient.includes("lime")) return "#047857";
    if (gradient.includes("pink") || gradient.includes("rose")) return "#BE185D";
    if (gradient.includes("purple") || gradient.includes("violet") || gradient.includes("indigo")) return "#7C3AED";
    if (gradient.includes("red")) return "#DC2626";
    if (gradient.includes("cyan") || gradient.includes("sky")) return "#0284C7";
    return "#374151";
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* ── Top Nav Bar ── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-[#0056b3] transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <span className="text-gray-900 font-medium">Home Services</span>
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
                    India&apos;s #1 Home Services Platform
                  </span>
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                  Trusted Home Services at Your Doorstep
                </h2>
                <p className="text-base text-gray-500 mt-3 leading-relaxed">
                  From AC repair to deep cleaning, get verified professionals delivered to your home with guaranteed satisfaction and best prices.
                </p>

                {/* Search Bar */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-lg shadow-black/5 border border-gray-100">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for home services..."
                      className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none"
                    />
                    {searchQuery && (
                      <button onClick={() => setSearchQuery("")} className="text-gray-400 hover:text-gray-600">
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <button className="bg-[#2563EB] text-white rounded-xl px-7 py-3.5 text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                    Search
                  </button>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 mt-8">
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
                <div className="w-48 h-48 rounded-3xl bg-white/60 backdrop-blur-sm shadow-xl flex items-center justify-center text-8xl">
                  🏗️
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Categories ── */}
      <section ref={catSectionRef} className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">All Service Categories</h2>
            <p className="text-sm text-gray-400 mt-0.5">Browse all available home services</p>
          </div>
          {selectedCat && (
            <Link href="/services" className="inline-flex items-center gap-1.5 bg-[#0056b3] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#004494] transition-colors">
              {selectedCat.label}
              <X className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
        {/* Horizontal scroll — circular SVG-style icons + More tile */}
        <div
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {serviceCategories.map((cat, idx) => {
            const isActive = selectedCategory === cat.slug;
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.03 * idx }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0"
              >
                <Link
                  href={isActive ? "/services" : `/services?category=${cat.slug}`}
                  className="flex flex-col items-center gap-2 w-[96px] p-2 rounded-2xl hover:bg-white hover:shadow-md transition-all group"
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${isActive ? "scale-105" : ""}`}
                    style={{
                      backgroundColor: isActive ? cat.color + "20" : cat.bg,
                      boxShadow: isActive ? `0 0 0 2px ${cat.color}` : undefined,
                    }}
                  >
                    <cat.icon className="w-7 h-7" style={{ color: cat.color }} strokeWidth={2.2} />
                  </div>
                  <div className="text-center">
                    <p className={`text-xs font-semibold leading-tight ${isActive ? "text-[#0056b3]" : "text-gray-800"}`}>{cat.label}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{cat.providers.toLocaleString()}+ Pros</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* More tile */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.03 * serviceCategories.length }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link
              href="/categories"
              className="flex flex-col items-center gap-2 w-[96px] p-2 rounded-2xl hover:bg-white hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ring-1 ring-gray-200 group-hover:scale-110 transition-transform">
                <MoreHorizontal className="w-7 h-7 text-gray-600" strokeWidth={2.5} />
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-gray-700 leading-tight">More</p>
                <p className="text-[10px] text-gray-400 mt-0.5">View All</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Per-Category Provider Sections (only on landing / "All" view) ──
          When no `?category=` is selected, render one section per category
          from the canonical `service-category-data.ts` list. Each section
          shows a category header (icon + label + provider count) with a
          "View All" link to /service/{slug}, followed by a 4-col grid of
          up to 4 provider cards. */}
      {!selectedCategory && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-4">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">Browse Providers by Category</h2>
            <p className="text-sm text-gray-500 mt-1">
              Top-rated professionals grouped by service category
            </p>
          </div>

          <div className="space-y-10">
            {getCategorizedProviders().map(({ category: cat, providers }, sectionIdx) => {
              if (providers.length === 0) return null;
              const visible = providers.slice(0, 3);
              const totalCount = providers.length;
              const professionalCount = Math.max(50, totalCount * 35);

              return (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: sectionIdx * 0.03, duration: 0.4 }}
                >
                  {/* Section header — highlighted with color accent */}
                  <div
                    className="flex items-center justify-between mb-5 pb-4 rounded-2xl px-4 py-3"
                    style={{ background: `linear-gradient(135deg, ${cat.color}0D, ${cat.color}06)`, borderLeft: `4px solid ${cat.color}` }}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-[22px] shrink-0 shadow-sm"
                        style={{ background: `${cat.color}22` }}
                        aria-hidden
                      >
                        {cat.icon}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-extrabold text-gray-900 leading-tight">
                          {cat.label}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                            style={{ background: `${cat.color}18`, color: cat.color }}
                          >
                            {professionalCount.toLocaleString()}+ Professionals
                          </span>
                          <span className="text-xs text-gray-500">{totalCount} listed near you</span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`/service/${cat.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-bold shrink-0 px-3.5 py-2 rounded-xl hover:opacity-90 transition-opacity"
                      style={{ background: `${cat.color}15`, color: cat.color }}
                    >
                      View All
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Responsive grid: 1 col mobile, 2 sm, 3 md/lg */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {visible.map((p, idx) => (
                      <Link
                        key={p.id}
                        href={`/store/${p.id}`}
                        className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col"
                      >
                        {/* Cover */}
                        <div className="relative h-32 overflow-hidden">
                          <div className={`absolute inset-0 bg-gradient-to-br ${p.coverColor}`} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-5xl opacity-95 drop-shadow-sm group-hover:scale-110 transition-transform" aria-hidden>
                              {p.logoEmoji}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                          {p.verified && (
                            <span className="absolute top-2 left-2 inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm text-[10px] font-bold text-[#0056b3] px-2 py-1 rounded-md shadow-sm uppercase tracking-wide">
                              <BadgeCheck className="w-3 h-3" /> Verified
                            </span>
                          )}
                          <span className="absolute top-2 right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm uppercase tracking-wide flex items-center gap-1">
                            <span className="w-1 h-1 bg-white rounded-full" /> Open
                          </span>
                        </div>
                        {/* Body */}
                        <div className="p-4 flex flex-col flex-1">
                          <h4 className="text-sm font-bold text-gray-900 leading-tight line-clamp-1">
                            {p.name}
                          </h4>
                          <p className="text-[11px] text-gray-500 mt-1 line-clamp-1">
                            {p.subCategory}
                          </p>
                          <div className="flex items-center gap-1.5 mt-2 text-[11px]">
                            <span className="inline-flex items-center gap-0.5 bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold">
                              <Star className="w-3 h-3 fill-emerald-700 text-emerald-700" />
                              {p.rating}
                            </span>
                            <span className="text-gray-400">{p.totalReviews}</span>
                            <span className="text-gray-300">·</span>
                            <span className="text-gray-500 whitespace-nowrap">{p.yearsInBusiness}</span>
                          </div>
                          <div className="flex items-center gap-1 mt-2 text-[11px] text-gray-500">
                            <MapPin className="w-3 h-3 shrink-0" />
                            <span className="truncate">{p.area}, Mumbai</span>
                          </div>
                          <div className="flex items-center justify-between pt-3 mt-auto border-t border-gray-100">
                            <span className="text-[10px] text-gray-400">Starts from</span>
                            <span className="text-sm font-bold text-emerald-700">
                              {p.services[0]?.price || p.priceRange?.split(" - ")[0] || "₹499"}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* ── Top Rated Providers ── */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{selectedCategory ? `${selectedCat?.label || ''} Providers` : "Top Rated Providers"}</h2>
              <p className="text-sm text-gray-400 mt-0.5">Most trusted professionals near you</p>
            </div>
            <button className="text-sm text-[#0056b3] font-semibold flex items-center gap-1 hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="relative group/providers">
            <div
              ref={providersRef}
              onScroll={handleProvidersScroll}
              className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {filteredProviders.length === 0 ? (
                <div className="w-full py-12 text-center">
                  <p className="text-sm text-gray-400">No providers found for this category</p>
                </div>
              ) : filteredProviders.map((provider, idx) => (
                <StoreCard
                  key={provider.name}
                  name={provider.name}
                  category={provider.service}
                  rating={provider.rating}
                  reviews={provider.reviews}
                  logoIcon={provider.icon}
                  coverGradient={provider.gradient}
                  href={`/explore?category=${provider.slug}`}
                  isVerified={provider.verified}
                  variant="desktop"
                  index={idx}
                />
              ))}
            </div>
            {/* Scroll Arrows */}
            {providersScrollPos > 0 && (
              <button
                onClick={() => scrollProviders("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 opacity-0 group-hover/providers:opacity-100 transition-opacity z-10"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
            )}
            <button
              onClick={() => scrollProviders("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 opacity-0 group-hover/providers:opacity-100 transition-opacity z-10"
            >
              <ArrowRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Popular Services Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Popular Services</h2>
            <p className="text-sm text-gray-400 mt-0.5">Most booked services near you</p>
          </div>
          <button className="text-sm text-[#0056b3] font-semibold flex items-center gap-1 hover:underline">
            See All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredPopular.length === 0 ? (
            <div className="w-full py-12 text-center">
              <p className="text-sm text-gray-400">No popular services found for this category</p>
            </div>
          ) : filteredPopular.map((service, idx) => (
            <StoreCard
              key={service.name}
              name={service.name}
              category={service.tag || "Service"}
              rating={service.rating}
              reviews={service.reviews}
              price={service.price}
              logoIcon={service.icon}
              coverGradient={service.gradient}
              href={`/explore?category=${service.slug}`}
              variant="desktop"
              index={idx}
              isFeatured={false}
              isVerified={false}
            />
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">How It Works</h2>
            <p className="text-sm text-gray-400 mt-2">Get your home service done in 3 simple steps</p>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Why Choose JustDial Home Services</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {[
            { icon: Shield, label: "Verified Professionals", desc: "All providers are background verified and trained for quality service delivery.", color: "#2563EB", bg: "#EFF6FF", slug: "ac-repair" },
            { icon: Award, label: "Best Price Guarantee", desc: "We match the lowest price in the market. No hidden charges, no surprises.", color: "#059669", bg: "#ECFDF5", slug: "deep-cleaning" },
            { icon: Clock, label: "On-Time Service", desc: "Punctual professionals who respect your time. Track them in real-time.", color: "#D97706", bg: "#FFFBEB", slug: "plumber" },
            { icon: ThumbsUp, label: "100% Satisfaction", desc: "Not happy with the service? Get a full refund, no questions asked.", color: "#DC2626", bg: "#FEF2F2", slug: "electrician" },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
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
                    <p className="text-xs text-gray-400">{review.location} \u2022 {review.service}</p>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div
          className="rounded-2xl sm:rounded-3xl overflow-hidden relative p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-10"
          style={{ background: "linear-gradient(135deg, #059669, #10B981)" }}
        >
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
          <div className="absolute bottom-4 right-40 w-16 h-16 rounded-full bg-white/8" />
          <div className="absolute top-12 right-24 w-3 h-3 rounded-full bg-white/30" />
          <div className="relative flex-1 max-w-xl">
            <h2 className="text-3xl font-extrabold text-white">Become a Service Provider</h2>
            <p className="text-white/80 mt-3 leading-relaxed">
              Join 50,000+ professionals on JustDial. Grow your business, get more leads, and reach millions of customers across India.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <button className="bg-white text-emerald-700 rounded-xl px-8 py-3 text-sm font-bold hover:bg-emerald-50 transition-colors shadow-lg">
                Register Free \u2192
              </button>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>100% Free. No commission.</span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 hidden lg:block">
            <div className="w-36 h-36 rounded-3xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-7xl shadow-2xl">
              💻
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">JustDial</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                India&apos;s #1 local search engine for home services, businesses, and more.
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
            <p className="text-xs text-gray-500">\u00a9 2025 JustDial Clone. All rights reserved.</p>
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