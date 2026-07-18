"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Search, SlidersHorizontal, Star, MapPin,
  Heart, Phone, MessageCircle, Navigation, Home, Grid3x3, Calendar,
  User, ChevronDown, BadgeCheck, ChevronRight, X,
} from "lucide-react";
import {
  getServiceCategory, getServiceProviders, getAllServiceProviders,
  getCategorizedProviders,
  serviceCategories,
} from "@/lib/service-category-data";

/* ═══════════════════════════════════════════════════
   STATIC CONFIG — quick filters, sort options, bottom nav
   ═══════════════════════════════════════════════════ */

const sortOptions = ["Recommended", "Top Rated", "Nearest", "Low Price"];

const bottomNavItems = [
  { icon: Home,     label: "Home",       href: "/",            active: false },
  { icon: Grid3x3,  label: "Categories", href: "/categories",  active: false },
  { icon: Calendar, label: "Bookings",   href: "#",            active: false },
  { icon: Heart,    label: "Favorites",  href: "#",            active: false },
  { icon: User,     label: "Profile",    href: "#",            active: false },
];

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */

export default function MobileServiceCategoryPage({ selectedCategory }: { selectedCategory?: string }) {
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Recommended");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  // Local chip selection — when user taps a category chip on /services landing,
  // the provider list below updates dynamically without navigation.
  const [pickedSlug, setPickedSlug] = useState<string | null>(null);

  // ── Real data ──
  // `selectedCategory` comes from the URL (`/service/[category]` page).
  // On the `/services` landing page, the user can also pick a category via chips;
  // `pickedSlug` takes priority over the URL when set.
  const activeSlug = pickedSlug || selectedCategory;
  const category = activeSlug ? getServiceCategory(activeSlug) : undefined;
  const isLanding = !activeSlug || !category;

  // When no category picked → show ALL providers. Otherwise filter by category.
  const allProviders = isLanding
    ? getAllServiceProviders()
    : getServiceProviders(activeSlug!);

  const categoryLabel = category?.label || "Home Services";
  const categoryColor = category?.color || "#0056b3";
  const categoryIcon  = category?.icon  || "🏠";
  const heroTitle     = isLanding ? "Home Services" : `${categoryLabel} Services`;
  const heroSubtitle  = isLanding
    ? "Book trusted home service professionals near you"
    : `Book trusted ${categoryLabel} professionals near you`;
  const professionalCount = Math.max(250, allProviders.length * 35);

  // When user is on /services landing AND has not picked a chip (i.e. "All" is active),
  // we render one section per category with its own grid + "View All" link,
  // instead of dumping every provider into a single grid.
  const showCategorySections = isLanding && !pickedSlug;
  const categorizedProviders = useMemo(
    () => (showCategorySections ? getCategorizedProviders() : []),
    [showCategorySections],
  );

  // ── Sorting ──
  const filteredProviders = useMemo(() => {
    let list = [...allProviders];
    if (selectedSort === "Top Rated") {
      list.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    } else if (selectedSort === "Low Price") {
      list.sort((a, b) => {
        const pa = parseInt((a.services[0]?.price || "₹999").replace(/\D/g, ""), 10);
        const pb = parseInt((b.services[0]?.price || "₹999").replace(/\D/g, ""), 10);
        return pa - pb;
      });
    }
    return list;
  }, [allProviders, selectedSort]);

  const toggleFav = (id: string) =>
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));

  // ── Provider card renderer ──
  // Reused by both the single-category grid view AND the per-category
  // sections view ("All" chip selected) to keep card markup in sync.
  const renderProviderCard = (p: typeof allProviders[number], idx: number, distanceSeed = 0) => {
    const isFav = favorites[p.id] || false;
    const distance = ((distanceSeed + idx + 1) * 1.2).toFixed(1);
    const startingPrice = p.services[0]?.price || p.priceRange?.split(" - ")[0] || "₹499";

    return (
      <motion.article
        key={p.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.04, duration: 0.3 }}
        className="bg-white rounded-2xl overflow-hidden shadow-sm shadow-black/[0.06] ring-1 ring-black/[0.04] flex flex-col"
      >
        {/* ─ Cover image area ─ */}
        <div className="relative h-24 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${p.coverColor}`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl opacity-95 drop-shadow-sm" aria-hidden>
              {p.logoEmoji}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

          {/* Available Today badge */}
          <span className="absolute top-1.5 left-1.5 bg-emerald-500 text-white text-[8.5px] font-bold px-1.5 py-0.5 rounded-md shadow-sm uppercase tracking-wide flex items-center gap-0.5">
            <span className="w-1 h-1 bg-white rounded-full" />
            Open
          </span>

          {/* Heart / favorite */}
          <button
            type="button"
            onClick={() => toggleFav(p.id)}
            aria-label="Save to favorites"
            className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm active:scale-90 transition-transform"
          >
            <Heart
              className={`w-3 h-3 ${
                isFav ? "fill-rose-500 text-rose-500" : "text-gray-700"
              }`}
            />
          </button>
        </div>

        {/* ─ Body ─ */}
        <div className="p-2.5 flex flex-col flex-1">
          {/* Name + verified */}
          <div className="flex items-start gap-1 mb-1">
            <h3 className="text-[12px] font-bold text-gray-900 leading-tight line-clamp-2 flex-1">
              {p.name}
            </h3>
            {p.verified && (
              <BadgeCheck className="w-3.5 h-3.5 text-[#0056b3] shrink-0 mt-0.5" />
            )}
          </div>

          {/* Rating row */}
          <div className="flex items-center gap-1 text-[10px] mb-1.5">
            <span className="flex items-center gap-0.5 bg-emerald-50 text-emerald-700 px-1 py-0.5 rounded font-bold">
              <Star className="w-2.5 h-2.5 fill-emerald-700 text-emerald-700" />
              {p.rating}
            </span>
            <span className="text-gray-400 truncate">
              {p.totalReviews}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-500 whitespace-nowrap">{p.yearsInBusiness}</span>
          </div>

          {/* Sub-category */}
          <p className="text-[10px] text-gray-500 mb-2 line-clamp-1 leading-tight">
            {p.subCategory}
          </p>

          {/* Location row */}
          <div className="flex items-center gap-0.5 mb-1.5 text-[10px]">
            <MapPin className="w-2.5 h-2.5 text-gray-400 shrink-0" />
            <span className="text-gray-600 truncate flex-1">{p.area}</span>
            <span className="inline-flex items-center gap-0.5 bg-[#0056b3]/8 text-[#0056b3] font-bold px-1 py-0.5 rounded-full whitespace-nowrap">
              <Navigation className="w-2 h-2" />
              {distance}km
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between pt-1.5 mb-2 border-t border-gray-100">
            <span className="text-[9px] text-gray-400">Starts from</span>
            <span className="text-[11px] font-bold text-emerald-700">
              {startingPrice}
            </span>
          </div>

          {/* Action buttons row */}
          <div className="grid grid-cols-3 gap-1 mt-auto">
            <a
              href={`tel:${p.phone.replace(/\s+/g, "")}`}
              aria-label="Call"
              className="flex items-center justify-center bg-[#0056b3]/8 text-[#0056b3] rounded-lg py-1.5 active:scale-95 transition-transform"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
            <a
              href={`https://wa.me/${p.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex items-center justify-center bg-emerald-500/10 text-emerald-700 rounded-lg py-1.5 active:scale-95 transition-transform"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
            <Link
              href={`/store/${p.id}`}
              aria-label="View details"
              className="flex items-center justify-center bg-amber-500/10 text-amber-700 rounded-lg py-1.5 active:scale-95 transition-transform"
            >
              <Navigation className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </motion.article>
    );
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 pb-24"
      style={{ maxWidth: 480, margin: "0 auto" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="flex items-center gap-1 px-3 py-3">
          <Link
            href={isLanding ? "/" : "/services"}
            className="flex items-center justify-center w-9 h-9 -ml-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5 text-gray-800" />
          </Link>
          <h1 className="flex-1 text-[17px] font-bold text-gray-900 truncate px-1">
            {categoryLabel}
          </h1>
          <button
            className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Search"
          >
            <Search className="w-[19px] h-[19px] text-gray-800" />
          </button>
          <button
            className="flex items-center justify-center w-9 h-9 -mr-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Filter"
          >
            <SlidersHorizontal className="w-[18px] h-[18px] text-gray-800" />
          </button>
        </div>
      </header>

      {/* ── Hero Banner ── */}
      <motion.section
        className="mx-3 mt-3 rounded-2xl overflow-hidden relative"
        style={{ background: `linear-gradient(135deg, ${categoryColor}1A, ${categoryColor}0D)` }}
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.05, duration: 0.35 }}
      >
        {/* Decorative bubbles */}
        <div
          className="absolute -top-8 -right-8 w-28 h-28 rounded-full"
          style={{ background: `${categoryColor}14` }}
        />
        <div
          className="absolute -bottom-6 right-20 w-16 h-16 rounded-full"
          style={{ background: `${categoryColor}10` }}
        />

        <div className="relative p-5 flex items-start gap-3">
          <div className="flex-1 min-w-0">
            <h2 className="text-[18px] font-bold text-gray-900 leading-tight">
              {heroTitle}
            </h2>
            <p className="text-[12px] text-gray-600 mt-1.5 leading-snug">
              {heroSubtitle}
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 bg-white rounded-full pl-2 pr-3 py-1.5 shadow-sm">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: `${categoryColor}22` }}
              >
                <User className="w-3 h-3" style={{ color: categoryColor }} />
              </div>
              <span className="text-[11px] font-bold text-gray-900">
                {professionalCount.toLocaleString()}+ Professionals Available
              </span>
            </div>
          </div>

          {/* Category illustration tile */}
          <div
            className="w-[68px] h-[68px] rounded-2xl flex items-center justify-center text-4xl shrink-0 shadow-sm"
            style={{ background: "#fff" }}
          >
            <span aria-hidden>{categoryIcon}</span>
          </div>
        </div>
      </motion.section>

      {/* ── Service Categories horizontal scroll (only on /services landing) ── */}
      {(!selectedCategory) && (
        <motion.section
          className="mt-4"
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.35 }}
        >
          {/* Section header with See All */}
          <div className="flex items-center justify-between px-3 mb-3">
            <h2 className="text-[15px] font-bold text-gray-900">Browse by Category</h2>
            <Link
              href="/categories"
              className="text-[12px] text-[#0056b3] font-semibold flex items-center gap-0.5"
            >
              See All <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Horizontal scroll — pill-shaped chips with emoji + label.
              Tap a chip → provider list below updates dynamically (no navigation).
              Tap an active chip again → deselects and shows all providers. */}
          <div
            className="flex gap-2 overflow-x-auto px-3 pb-2 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* "All" chip — clears the selection */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <button
                type="button"
                onClick={() => setPickedSlug(null)}
                className={`inline-flex items-center gap-1.5 h-9 rounded-full pl-3 pr-3.5 border transition-colors ${
                  !pickedSlug
                    ? "bg-[#0056b3] border-[#0056b3] text-white"
                    : "bg-white border-gray-200 text-gray-700"
                }`}
              >
                <span className="text-[12px] font-semibold whitespace-nowrap">All</span>
              </button>
            </motion.div>

            {serviceCategories.map((cat, idx) => {
              const active = pickedSlug === cat.slug;
              return (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03, duration: 0.25 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0"
                >
                  <button
                    type="button"
                    onClick={() => setPickedSlug(active ? null : cat.slug)}
                    className="inline-flex items-center gap-1.5 h-9 rounded-full pl-2.5 pr-3 border transition-all"
                    style={{
                      backgroundColor: active ? cat.color : "#fff",
                      borderColor: active ? cat.color : `${cat.color}33`,
                    }}
                  >
                    {/* Emoji bubble */}
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[12px] shrink-0"
                      style={{
                        backgroundColor: active ? "rgba(255,255,255,0.25)" : `${cat.color}1A`,
                      }}
                      aria-hidden
                    >
                      {cat.icon}
                    </span>
                    {/* Label */}
                    <span
                      className="text-[12px] font-semibold whitespace-nowrap"
                      style={{ color: active ? "#fff" : cat.color }}
                    >
                      {cat.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      )}

      {/* ── Sort + Filter Bar (only in single-category / picked-chip view) ── */}
      {!showCategorySections && (
        <motion.section
          className="px-3 mt-4 flex items-center justify-between"
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.35 }}
        >
          <div className="flex items-center gap-2">
            <span className="text-[12px] text-gray-500">Sort by:</span>
            <div className="relative">
              <button
                type="button"
                onClick={() => setSortOpen(o => !o)}
                className="flex items-center gap-1 bg-white border border-gray-200 rounded-full pl-3 pr-2 py-1.5 text-[12px] font-semibold text-gray-900 shadow-sm"
              >
                {selectedSort}
                <ChevronDown
                  className={`w-3.5 h-3.5 text-gray-400 transition-transform ${sortOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {sortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg z-30 min-w-[150px] py-1"
                  >
                    {sortOptions.map((o) => (
                      <button
                        key={o}
                        type="button"
                        onClick={() => {
                          setSelectedSort(o);
                          setSortOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-[12px] hover:bg-gray-50 transition-colors ${
                          selectedSort === o
                            ? "font-bold text-[#0056b3]"
                            : "text-gray-700"
                        }`}
                      >
                        {o}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button
            type="button"
            className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-[12px] font-semibold text-gray-900 shadow-sm active:scale-95 transition-transform"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-gray-600" />
            Filters
          </button>
        </motion.section>
      )}

      {/* ── Result count + active category indicator (only in single-category view) ── */}
      {!showCategorySections && (
        <div className="px-3 mt-2 flex items-center gap-2 flex-wrap">
          <span className="text-[11px] text-gray-500">
            {filteredProviders.length} {filteredProviders.length === 1 ? "provider" : "providers"} found
          </span>
          {pickedSlug && category && (
            <button
              type="button"
              onClick={() => setPickedSlug(null)}
              className="inline-flex items-center gap-1.5 bg-[#0056b3] text-white text-[11px] font-semibold px-3 py-1 rounded-full"
            >
              {category.icon} {category.label}
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      )}

      {/* ── Body: either per-category sections ("All" view) or single grid ── */}
      {showCategorySections ? (
        <div className="mt-4 space-y-8">
          {categorizedProviders.map(({ category: cat, providers }, sectionIdx) => {
            // Skip categories with zero providers
            if (providers.length === 0) return null;
            // Show up to 3 cards per category; "View All" goes to /service/{slug}
            const visibleProviders = providers.slice(0, 3);
            const totalProviders = providers.length;
            const professionalCountForCat = Math.max(50, totalProviders * 35);

            return (
              <motion.section
                key={cat.slug}
                id={`cat-section-${cat.slug}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIdx * 0.05, duration: 0.35 }}
              >
                {/* Section header — highlighted */}
                <div
                  className="mx-3 mb-4 rounded-2xl p-3.5 flex items-center justify-between"
                  style={{ background: `linear-gradient(135deg, ${cat.color}12, ${cat.color}08)`, borderLeft: `3px solid ${cat.color}` }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-[18px] shrink-0 shadow-sm"
                      style={{ background: `${cat.color}22` }}
                      aria-hidden
                    >
                      {cat.icon}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[15px] font-extrabold text-gray-900 leading-tight truncate">
                        {cat.label}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span
                          className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                          style={{ background: `${cat.color}18`, color: cat.color }}
                        >
                          {professionalCountForCat.toLocaleString()}+ Pros
                        </span>
                        <span className="text-[10px] text-gray-400">{totalProviders} listed</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/service/${cat.slug}`}
                    className="inline-flex items-center gap-0.5 text-[11px] font-bold shrink-0 px-2.5 py-1.5 rounded-lg"
                    style={{ background: `${cat.color}15`, color: cat.color }}
                  >
                    View All
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* 2-col grid of provider cards */}
                <div className="px-3 grid grid-cols-2 gap-3">
                  {visibleProviders.map((p, idx) => renderProviderCard(p, idx, sectionIdx * 4))}
                </div>
              </motion.section>
            );
          })}
        </div>
      ) : (
        <section className="px-3 mt-3">
          {filteredProviders.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-sm text-gray-400">No providers available</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {filteredProviders.map((p, idx) => renderProviderCard(p, idx))}
            </div>
          )}
        </section>
      )}

      {/* ── Bottom Navigation ── */}
      <nav
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full bg-white/95 backdrop-blur-xl border-t border-gray-200/70 z-40"
        style={{ maxWidth: 480 }}
      >
        <div className="flex items-center justify-around py-1.5">
          {bottomNavItems.map((item) => {
            const content = (
              <>
                <item.icon className="w-5 h-5 text-gray-400" />
                <span className="text-[10px] font-medium text-gray-400">
                  {item.label}
                </span>
              </>
            );
            if (item.href === "#") {
              return (
                <button
                  key={item.label}
                  type="button"
                  className="flex flex-col items-center gap-0.5 px-3 py-1"
                >
                  {content}
                </button>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex flex-col items-center gap-0.5 px-3 py-1"
              >
                {content}
              </Link>
            );
          })}
        </div>
        <div className="h-[env(safe-area-inset-bottom)]" />
      </nav>
    </motion.div>
  );
}
