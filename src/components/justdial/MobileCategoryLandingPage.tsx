"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Search,
  Share2,
  ChevronRight,
  Star,
  MapPin,
  BadgeCheck,
  Heart,
  Phone,
  Clock,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { CategoryLandingInfo, getCategoryLanding } from "@/lib/category-landing-data";
import {
  getBusinessesByCategory,
  ListingBusiness,
} from "@/lib/business-listing-data";
import { getStoreById, StoreData } from "@/lib/store-data";
import { getTrendingProducts, ProductDetail } from "@/lib/product-data";
import StoreCard from "@/components/justdial/StoreCard";

// ── Props ────────────────────────────────────────────────────────────

interface Props {
  category: CategoryLandingInfo;
}

// ── Animation helpers ────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const sectionInView = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ── Section wrapper ──────────────────────────────────────────────────

function Section({ title, action, children }: { title: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <motion.section
      className="pt-6"
      variants={sectionInView}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      <div className="flex items-center justify-between px-4 mb-3">
        <h2 className="text-[17px] font-bold text-gray-900">{title}</h2>
        {action}
      </div>
      {children}
    </motion.section>
  );
}

// ── Main Component ───────────────────────────────────────────────────

export default function MobileCategoryLandingPage({ category }: Props) {
  const [wishlistedProducts, setWishlistedProducts] = useState<Set<string>>(new Set());

  // ── Data fetching ─────────────────────────────────────────────────

  const businesses = useMemo<ListingBusiness[]>(() => {
    if (category.listingSlug) {
      return getBusinessesByCategory(category.listingSlug);
    }
    // Fallback inline businesses
    return [
      { id: `${category.slug}-fb-1`, storeId: `${category.slug}-fb-1`, name: `${category.label} Hub`, category: category.label, area: "MG Road", rating: 4.6, totalRatings: 1840, distance: "1.2 km", priceRange: "₹₹", logoEmoji: category.emoji, coverGradient: category.gradient, isOpen: true, isVerified: true, isFeatured: true, businessType: "service" },
      { id: `${category.slug}-fb-2`, storeId: `${category.slug}-fb-2`, name: `Premium ${category.label}`, category: category.label, area: "Andheri West", rating: 4.4, totalRatings: 960, distance: "2.5 km", priceRange: "₹₹₹", logoEmoji: category.emoji, coverGradient: category.gradient, isOpen: true, isVerified: true, isFeatured: true, businessType: "service" },
      { id: `${category.slug}-fb-3`, storeId: `${category.slug}-fb-3`, name: `${category.label} Express`, category: category.label, area: "Bandra", rating: 4.3, totalRatings: 720, distance: "3.1 km", priceRange: "₹", logoEmoji: category.emoji, coverGradient: category.gradient, isOpen: false, isVerified: false, isFeatured: true, businessType: "store" },
      { id: `${category.slug}-fb-4`, storeId: `${category.slug}-fb-4`, name: `Royal ${category.label}`, category: category.label, area: "Juhu", rating: 4.8, totalRatings: 2100, distance: "4.8 km", priceRange: "₹₹₹", logoEmoji: category.emoji, coverGradient: category.gradient, isOpen: true, isVerified: true, isFeatured: true, businessType: "restaurant" },
    ];
  }, [category]);

  const trendingProducts = useMemo(() => getTrendingProducts().slice(0, 6), []);

  const services = useMemo(() => {
    if (category.subCategories.length > 0) {
      return category.subCategories.slice(0, 5).map((sub) => ({
        name: sub.label,
        emoji: sub.emoji,
        price: `₹${(Math.floor(Math.random() * 9) + 1) * 100}`,
      }));
    }
    return [
      { name: `Basic ${category.label}`, emoji: category.emoji, price: "₹299" },
      { name: `Standard ${category.label}`, emoji: category.emoji, price: "₹599" },
      { name: `Premium ${category.label}`, emoji: category.emoji, price: "₹999" },
      { name: `Custom ${category.label}`, emoji: category.emoji, price: "₹1,499" },
      { name: `Emergency ${category.label}`, emoji: category.emoji, price: "₹199" },
    ];
  }, [category]);

  const nearbyBusinesses = useMemo(() => businesses.slice(0, 4), [businesses]);

  const topRated = useMemo(
    () => [...businesses].sort((a, b) => b.rating - a.rating).slice(0, 6),
    [businesses],
  );

  const recentlyAdded = useMemo(
    () =>
      businesses.slice(0, 3).map((b, i) => ({
        ...b,
        date: `${i + 1} day${i > 0 ? "s" : ""} ago`,
      })),
    [businesses],
  );

  // Get related categories
  const relatedCategories = useMemo(() => {
    return category.relatedSlugs.slice(0, 8).map((slug) => {
      const match = getCategoryLanding(slug);
      return match
        ? { slug: match.slug, label: match.label, emoji: match.emoji, gradient: match.gradient }
        : { slug, label: slug, emoji: "📁", gradient: "from-gray-400 to-gray-500" };
    });
  }, [category]);

  const toggleWishlist = (productId: string) => {
    setWishlistedProducts((prev) => {
      const next = new Set(prev);
      if (next.has(productId)) next.delete(productId);
      else next.add(productId);
      return next;
    });
  };

  // ── Render ────────────────────────────────────────────────────────

  return (
    <div className="min-h-[100dvh] bg-[#F2F2F7] max-w-[480px] mx-auto pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      {/* ═══════════════════════════════════════════════════════════════
          1. STICKY FROSTED GLASS HEADER
      ═══════════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 bg-white/80 backdrop-blur-2xl border-b border-black/[0.04]">
        <div
          className="flex items-center justify-between px-3"
          style={{ height: 44, paddingTop: "env(safe-area-inset-top)" }}
        >
          <motion.div whileTap={{ scale: 0.88 }} className="flex items-center justify-center w-11 h-11 -ml-2 rounded-full active:bg-gray-100 transition-colors">
            <Link href="/" aria-label="Go back">
              <ArrowLeft className="w-[22px] h-[22px] text-gray-800" strokeWidth={2.2} />
            </Link>
          </motion.div>

          <div className="flex items-center gap-1.5">
            <span className="text-[17px] leading-none">{category.emoji}</span>
            <span className="text-[15px] font-semibold text-gray-900 truncate max-w-[180px]">
              {category.label}
            </span>
          </div>

          <div className="flex items-center gap-0.5 -mr-1">
            <motion.button whileTap={{ scale: 0.88 }} className="flex items-center justify-center w-11 h-11 rounded-full active:bg-gray-100 transition-colors" aria-label="Search">
              <Search className="w-[20px] h-[20px] text-gray-700" />
            </motion.button>
            <motion.button whileTap={{ scale: 0.88 }} className="flex items-center justify-center w-11 h-11 rounded-full active:bg-gray-100 transition-colors" aria-label="Share">
              <Share2 className="w-[20px] h-[20px] text-gray-700" />
            </motion.button>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════
          2. HERO BANNER
      ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`relative bg-gradient-to-br ${category.gradient} px-5 pb-7 pt-[calc(44px+env(safe-area-inset-top)+20px)] rounded-b-[28px] overflow-hidden`}
      >
        {/* Decorative circles */}
        <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-black/10 blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 15 }}
            className="text-6xl mb-3"
          >
            {category.emoji}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-[22px] font-bold text-white leading-tight mb-1.5"
          >
            {category.label}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.4 }}
            className="text-[13px] text-white/80 leading-relaxed mb-4 max-w-[280px]"
          >
            {category.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="flex items-center gap-5"
          >
            <div className="flex items-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-[14px] font-bold text-white leading-tight">
                  {category.businessCount.toLocaleString("en-IN")}
                </p>
                <p className="text-[11px] text-white/70">Businesses</p>
              </div>
            </div>

            <div className="w-px h-8 bg-white/20" />

            <div className="flex items-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                <BadgeCheck className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-[14px] font-bold text-white leading-tight">
                  {category.verifiedCount.toLocaleString("en-IN")}
                </p>
                <p className="text-[11px] text-white/70">Verified</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════
          3. SEARCH BAR (overlaps hero by -mt-5)
      ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.35 }}
        className="relative z-20 -mt-5 px-3"
      >
        <div className="bg-white rounded-2xl shadow-sm shadow-black/[0.08] flex items-center gap-3 px-4 py-3">
          <Search className="w-[18px] h-[18px] text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder={`Search in ${category.label}...`}
            className="flex-1 bg-transparent text-[15px] text-gray-800 placeholder-gray-400 outline-none"
            readOnly
          />
          <motion.div whileTap={{ scale: 0.92 }} className="flex items-center justify-center w-8 h-8 rounded-xl bg-gray-100 flex-shrink-0">
            <Zap className="w-4 h-4 text-gray-500" />
          </motion.div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════
          4. POPULAR SUB CATEGORIES
      ═══════════════════════════════════════════════════════════════ */}
      <Section
        title="Popular Sub Categories"
        action={
          <Link href="/" className="flex items-center gap-0.5 text-[13px] font-semibold" style={{ color: category.color }}>
            See All <ChevronRight className="w-4 h-4" />
          </Link>
        }
      >
        <div className="flex gap-2.5 overflow-x-auto px-4 pb-1 snap-x snap-mandatory scrollbar-hide">
          {category.subCategories.map((sub, i) => (
            <motion.div
              key={sub.slug}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link href={`/category/${category.slug}?sub=${sub.slug}`}>
                <motion.div
                  whileTap={{ scale: 0.94 }}
                  className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-2.5 shadow-sm shadow-black/[0.04] whitespace-nowrap snap-start"
                >
                  <span className="text-[16px]">{sub.emoji}</span>
                  <span className="text-[13px] font-medium text-gray-700">{sub.label}</span>
                  <span className="text-[11px] text-gray-400 font-medium">{sub.count}</span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          5. FEATURED BUSINESSES
      ═══════════════════════════════════════════════════════════════ */}
      <Section
        title="Featured Businesses"
        action={
          <Link href="/" className="flex items-center gap-0.5 text-[13px] font-semibold" style={{ color: category.color }}>
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        }
      >
        <div className="flex gap-3 overflow-x-auto px-4 pb-1 snap-x snap-mandatory scrollbar-hide">
          {businesses.slice(0, 6).map((biz, i) => (
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
              isOpen={biz.isOpen}
              isVerified={biz.isVerified}
              variant="mobile"
              index={i}
            />
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          6. TRENDING PRODUCTS
      ═══════════════════════════════════════════════════════════════ */}
      <Section
        title="Trending Products"
        action={
          <Link href="/" className="flex items-center gap-0.5 text-[13px] font-semibold" style={{ color: category.color }}>
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        }
      >
        <div className="flex gap-3 overflow-x-auto px-4 pb-1 snap-x snap-mandatory scrollbar-hide">
          {trendingProducts.map((product, i) => (
            <motion.div
              key={product.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link href={`/store/${product.storeId}?product=${product.id}`}>
                <motion.div
                  whileTap={{ scale: 0.96 }}
                  className="w-[155px] flex-shrink-0 snap-start bg-white rounded-[18px] shadow-sm shadow-black/[0.06] overflow-hidden"
                >
                  {/* Product image area with gradient */}
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-[120px] flex items-center justify-center">
                    <span className="text-5xl">{product.storeEmoji}</span>
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-2 left-2">
                        <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          {product.badge}
                        </span>
                      </div>
                    )}
                    {/* Wishlist */}
                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                      className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center shadow-sm"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          wishlistedProducts.has(product.id)
                            ? "text-red-500 fill-red-500"
                            : "text-gray-400"
                        }`}
                      />
                    </motion.button>
                  </div>

                  {/* Product info */}
                  <div className="px-3 py-2.5">
                    <h3 className="text-[12px] font-semibold text-gray-900 leading-snug line-clamp-2 mb-1.5">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[13px] font-bold text-gray-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-[11px] text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span className="text-[11px] font-semibold text-gray-700">{product.rating}</span>
                      <span className="text-[10px] text-gray-400">({product.reviews})</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          7. POPULAR SERVICES
      ═══════════════════════════════════════════════════════════════ */}
      <Section title="Popular Services">
        <div className="px-4 flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {services.map((service, i) => (
            <StoreCard
              key={service.name}
              name={service.name}
              category={category.label}
              logoEmoji={service.emoji}
              coverGradient={category.gradient}
              price={service.price}
              storeId={`svc-${category.slug}-${i}`}
              variant="mobile"
              index={i}
              isFeatured={false}
              isVerified={false}
            />
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          8. NEARBY BUSINESSES
      ═══════════════════════════════════════════════════════════════ */}
      <Section
        title="Nearby Businesses"
        action={
          <Link href="/" className="flex items-center gap-0.5 text-[13px] font-semibold" style={{ color: category.color }}>
            Map View <MapPin className="w-4 h-4" />
          </Link>
        }
      >
        <div className="px-4 space-y-2.5">
          {nearbyBusinesses.map((biz, i) => (
            <motion.div
              key={biz.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link href={`/store/${biz.storeId}`}>
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3.5 bg-white rounded-2xl p-3.5 shadow-sm shadow-black/[0.04]"
                >
                  {/* Logo emoji */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${biz.coverGradient} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-2xl">{biz.logoEmoji}</span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <h3 className="text-[14px] font-semibold text-gray-900 truncate">{biz.name}</h3>
                      {biz.isVerified && <BadgeCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />}
                    </div>
                    <div className="flex items-center gap-3 text-[12px] text-gray-500">
                      <div className="flex items-center gap-0.5">
                        <MapPin className="w-3 h-3" />
                        <span>{biz.area}</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span className="font-semibold text-gray-700">{biz.rating}</span>
                        <span>({biz.totalRatings})</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] text-gray-400">{biz.distance}</span>
                      <span className="text-[11px] text-gray-300">•</span>
                      <div className="flex items-center gap-0.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${biz.isOpen ? "bg-green-500" : "bg-red-400"}`} />
                        <span className={`text-[11px] ${biz.isOpen ? "text-green-600" : "text-red-500"}`}>
                          {biz.isOpen ? "Open now" : "Closed"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Call button */}
                  <motion.div
                    whileTap={{ scale: 0.88 }}
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: category.bgLight }}
                  >
                    <Phone className="w-[18px] h-[18px]" style={{ color: category.color }} />
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          9. TOP RATED
      ═══════════════════════════════════════════════════════════════ */}
      <Section
        title="Top Rated"
        action={
          <div className="flex items-center gap-1 text-[13px] font-medium text-gray-500">
            <TrendingUp className="w-4 h-4" />
            <span>Best first</span>
          </div>
        }
      >
        <div className="flex gap-3 overflow-x-auto px-4 pb-1 snap-x snap-mandatory scrollbar-hide">
          {topRated.map((biz, i) => (
            <motion.div
              key={biz.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link href={`/store/${biz.storeId}`}>
                <motion.div
                  whileTap={{ scale: 0.96 }}
                  className="w-[150px] flex-shrink-0 snap-start bg-white rounded-[18px] shadow-sm shadow-black/[0.06] p-3.5 text-center"
                >
                  {/* Rank */}
                  <div
                    className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold text-white mb-2"
                    style={{ backgroundColor: i === 0 ? "#F59E0B" : i === 1 ? "#94A3B8" : i === 2 ? "#D97706" : category.color }}
                  >
                    {i + 1}
                  </div>

                  <div className={`w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br ${biz.coverGradient} flex items-center justify-center mb-2`}>
                    <span className="text-xl">{biz.logoEmoji}</span>
                  </div>

                  <h3 className="text-[13px] font-semibold text-gray-900 truncate mb-1">{biz.name}</h3>

                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="text-[13px] font-bold text-gray-800">{biz.rating}</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5">{biz.totalRatings} ratings</p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          10. RECENTLY ADDED
      ═══════════════════════════════════════════════════════════════ */}
      <Section title="Recently Added">
        <div className="px-4 space-y-2.5">
          {recentlyAdded.map((biz, i) => (
            <motion.div
              key={biz.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link href={`/store/${biz.storeId}`}>
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3.5 bg-white rounded-2xl p-3.5 shadow-sm shadow-black/[0.04]"
                >
                  <div className="flex-1 min-w-0 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${biz.coverGradient} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-lg">{biz.logoEmoji}</span>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="text-[14px] font-semibold text-gray-900 truncate">{biz.name}</h3>
                        <span className="flex-shrink-0 inline-flex items-center gap-0.5 bg-green-50 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          <CheckCircle className="w-3 h-3" />
                          New
                        </span>
                      </div>
                      <p className="text-[12px] text-gray-500">{biz.category} • {biz.area}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-gray-400 flex-shrink-0">
                    <Clock className="w-3 h-3" />
                    <span>{biz.date}</span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          11. RELATED CATEGORIES
      ═══════════════════════════════════════════════════════════════ */}
      <Section
        title="Related Categories"
        action={
          <Link href="/" className="flex items-center gap-0.5 text-[13px] font-semibold" style={{ color: category.color }}>
            All <ChevronRight className="w-4 h-4" />
          </Link>
        }
      >
        <div className="flex gap-4 overflow-x-auto px-4 pb-1 snap-x snap-mandatory scrollbar-hide">
          {relatedCategories.map((rel, i) => (
            <motion.div
              key={rel.slug}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link href={`/category/${rel.slug}`}>
                <motion.div
                  whileTap={{ scale: 0.92 }}
                  className="flex flex-col items-center gap-2 snap-start w-[72px]"
                >
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${rel.gradient} flex items-center justify-center shadow-sm shadow-black/[0.08]`}>
                    <span className="text-2xl">{rel.emoji}</span>
                  </div>
                  <span className="text-[11px] font-medium text-gray-600 text-center leading-tight line-clamp-2">
                    {rel.label}
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Bottom spacer for safe area + breathing room */}
      <div className="h-8" />
    </div>
  );
}