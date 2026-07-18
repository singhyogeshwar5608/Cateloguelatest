"use client";

import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  Suspense,
  useRef,
} from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Search,
  Star,
  MapPin,
  Clock,
  Phone,
  Navigation,
  BadgeCheck,
  Heart,
  UserPlus,
  Bookmark,
  Share2,
  MessageCircle,
  ChevronDown,
  X,
  Filter,
  Eye,
  Users,
  Flame,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import {
  listingCategories,
  getBusinessesByCategory,
  getCategoryMeta,
  ListingBusiness,
} from "@/lib/business-listing-data";
import StoreCard from "@/components/justdial/StoreCard";

/* ─── Utilities ──────────────────────────────────────────────── */

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

interface SocialStats {
  likes: number;
  followers: number;
  views: number;
  reviewCount: number;
  phone: string;
  isPremium: boolean;
  isNew: boolean;
}

function getSocialStats(biz: ListingBusiness): SocialStats {
  const h = hashCode(biz.id);
  return {
    likes: (h % 4800) + 450,
    followers: ((h >> 4) % 2800) + 180,
    views: ((h >> 8) % 18000) + 4500,
    reviewCount: Math.floor(biz.totalRatings * 0.12),
    phone: `+91 ${9000000000 + (h % 9999999999)}`,
    isPremium: biz.isFeatured,
    isNew: (h % 7) === 0,
  };
}

function fmt(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

/* ─── Sort & Filter Types ────────────────────────────────────── */

type SortKey =
  | "popular"
  | "nearest"
  | "highestRated"
  | "mostViewed"
  | "mostFollowed"
  | "newest";

interface Filters {
  openNow: boolean;
  verified: boolean;
  maxDistance: number | null;
  minRating: number | null;
  priceRange: string | null;
}

const sortOptions: { value: SortKey; label: string; icon: React.ElementType }[] = [
  { value: "popular", label: "Popular", icon: Flame },
  { value: "nearest", label: "Nearest", icon: MapPin },
  { value: "highestRated", label: "Highest Rated", icon: Star },
  { value: "mostViewed", label: "Most Viewed", icon: Eye },
  { value: "mostFollowed", label: "Most Followed", icon: Users },
  { value: "newest", label: "Newest", icon: Sparkles },
];

const distanceOptions = [
  { label: "1 km", value: 1 },
  { label: "3 km", value: 3 },
  { label: "5 km", value: 5 },
  { label: "10 km", value: 10 },
  { label: "Any", value: null },
];

const ratingOptions = [
  { label: "3+", value: 3 },
  { label: "3.5+", value: 3.5 },
  { label: "4+", value: 4 },
  { label: "4.5+", value: 4.5 },
  { label: "Any", value: null },
];

const priceOptions = [
  { label: "$", value: "$" },
  { label: "$$", value: "$$" },
  { label: "$$$", value: "$$$" },
  { label: "$$$$", value: "$$$$" },
  { label: "Any", value: null },
];

/* ─── Skeleton Components ────────────────────────────────────── */

function SkeletonCard() {
  return (
    <div className="mx-4 mb-3 rounded-[20px] bg-white overflow-hidden shadow-sm">
      <div className="h-36 bg-gray-200 animate-pulse" />
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gray-200 animate-pulse shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded-full animate-pulse w-3/4" />
            <div className="h-3 bg-gray-200 rounded-full animate-pulse w-1/2" />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-3 bg-gray-200 rounded-full animate-pulse w-16" />
          <div className="h-3 bg-gray-200 rounded-full animate-pulse w-20" />
        </div>
        <div className="flex gap-2">
          <div className="h-3 bg-gray-200 rounded-full animate-pulse w-12" />
          <div className="h-3 bg-gray-200 rounded-full animate-pulse w-12" />
          <div className="h-3 bg-gray-200 rounded-full animate-pulse w-14" />
        </div>
        <div className="flex gap-1 pt-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-9 flex-1 bg-gray-100 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SkeletonLoader() {
  return (
    <div
      className="min-h-screen bg-[#F2F2F7]"
      style={{ maxWidth: 480, margin: "0 auto" }}
    >
      <div className="h-14 bg-white" />
      <div className="px-4 py-3 bg-white border-b border-gray-100">
        <div className="h-10 bg-gray-200 rounded-xl animate-pulse" />
      </div>
      <div className="px-4 py-2 bg-white border-b border-gray-100">
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-8 w-16 bg-gray-200 rounded-full animate-pulse"
            />
          ))}
        </div>
      </div>
      <div className="pt-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
}

/* ─── Sort Bottom Sheet ──────────────────────────────────────── */

function SortSheet({
  open,
  selected,
  onClose,
  onSelect,
}: {
  open: boolean;
  selected: SortKey;
  onClose: () => void;
  onSelect: (v: SortKey) => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-[60]"
            onClick={onClose}
            style={{ maxWidth: 480, margin: "0 auto" }}
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-[61] pb-6"
            style={{ maxWidth: 480, margin: "0 auto" }}
          >
            <div className="flex items-center justify-between px-5 pt-4 pb-2">
              <h3 className="text-lg font-bold text-gray-900">Sort By</h3>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <div className="px-3 pt-1 space-y-1">
              {sortOptions.map((opt) => {
                const Icon = opt.icon;
                const active = selected === opt.value;
                return (
                  <motion.button
                    key={opt.value}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      onSelect(opt.value);
                      onClose();
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-colors ${
                      active
                        ? "bg-[#0056b3]/8 text-[#0056b3]"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        active ? "text-[#0056b3]" : "text-gray-400"
                      }`}
                    />
                    <span className={`flex-1 font-medium text-[15px] ${active ? "text-[#0056b3]" : ""}`}>
                      {opt.label}
                    </span>
                    {active && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5 rounded-full bg-[#0056b3] flex items-center justify-center"
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── Filter Bottom Sheet ────────────────────────────────────── */

function FilterSheet({
  open,
  filters,
  onClose,
  onApply,
  onReset,
}: {
  open: boolean;
  filters: Filters;
  onClose: () => void;
  onApply: (f: Filters) => void;
  onReset: () => void;
}) {
  const [local, setLocal] = useState<Filters>(filters);

  useEffect(() => {
    if (open) setLocal(filters);
  }, [open, filters]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-[60]"
            onClick={onClose}
            style={{ maxWidth: 480, margin: "0 auto" }}
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-[61]"
            style={{ maxWidth: 480, margin: "0 auto" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-4 pb-3">
              <h3 className="text-lg font-bold text-gray-900">Filters</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    onReset();
                    setLocal({
                      openNow: false,
                      verified: false,
                      maxDistance: null,
                      minRating: null,
                      priceRange: null,
                    });
                  }}
                  className="text-xs font-semibold text-[#0056b3]"
                >
                  Reset All
                </button>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="px-5 pb-4 space-y-5 max-h-[60vh] overflow-y-auto">
              {/* Distance */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2.5">
                  Distance
                </p>
                <div className="flex flex-wrap gap-2">
                  {distanceOptions.map((d) => (
                    <motion.button
                      key={d.label}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        setLocal((p) => ({ ...p, maxDistance: d.value }))
                      }
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        local.maxDistance === d.value
                          ? "bg-[#0056b3] text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {d.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2.5">
                  Rating
                </p>
                <div className="flex flex-wrap gap-2">
                  {ratingOptions.map((r) => (
                    <motion.button
                      key={r.label}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        setLocal((p) => ({ ...p, minRating: r.value }))
                      }
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1 ${
                        local.minRating === r.value
                          ? "bg-[#0056b3] text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {r.value && <Star className="w-3.5 h-3.5 text-amber-500" />}
                      {r.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2.5">
                  Price Range
                </p>
                <div className="flex flex-wrap gap-2">
                  {priceOptions.map((p) => (
                    <motion.button
                      key={p.label}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        setLocal((prev) => ({ ...prev, priceRange: p.value }))
                      }
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        local.priceRange === p.value
                          ? "bg-[#0056b3] text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {p.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Toggles */}
              <div className="flex gap-3">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    setLocal((p) => ({ ...p, openNow: !p.openNow }))
                  }
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold transition-colors border ${
                    local.openNow
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-white text-gray-500 border-gray-200"
                  }`}
                >
                  <Clock className="w-4 h-4" />
                  Open Now
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    setLocal((p) => ({ ...p, verified: !p.verified }))
                  }
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold transition-colors border ${
                    local.verified
                      ? "bg-blue-50 text-blue-700 border-blue-200"
                      : "bg-white text-gray-500 border-gray-200"
                  }`}
                >
                  <BadgeCheck className="w-4 h-4" />
                  Verified
                </motion.button>
              </div>
            </div>

            {/* Apply Button */}
            <div className="px-5 pb-6 pt-2 border-t border-gray-100">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  onApply(local);
                  onClose();
                }}
                className="w-full py-3.5 rounded-2xl bg-[#0056b3] text-white font-semibold text-[15px]"
              >
                Apply Filters
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── Business Card ──────────────────────────────────────────── */

function BusinessCard({
  biz,
}: {
  biz: ListingBusiness;
  categoryColor: string;
  onLike: () => void;
  onFollow: () => void;
  onSave: () => void;
  liked: boolean;
  followed: boolean;
  saved: boolean;
}) {
  // Unified card design — matches home page "Featured Stores" template.
  // Legacy like/follow/save state is preserved in props but no longer rendered,
  // per design unification (single consistent card UI across the app).
  return (
    <div className="mx-4 mb-3">
      <StoreCard
        name={biz.name}
        category={`${biz.category} · ${biz.area}`}
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
        fluid
      />
    </div>
  );
}

/* ─── Main Content ───────────────────────────────────────────── */

function MobileBusinessListingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const category = searchParams.get("category") || "restaurants";
  const location = searchParams.get("location") || "India Gate";

  /* State */
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortKey>("popular");
  const [filters, setFilters] = useState<Filters>({
    openNow: false,
    verified: false,
    maxDistance: null,
    minRating: null,
    priceRange: null,
  });
  const [showSortSheet, setShowSortSheet] = useState(false);
  const [showFilterSheet, setShowFilterSheet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);
  const [likedSet, setLikedSet] = useState<Set<string>>(new Set());
  const [followedSet, setFollowedSet] = useState<Set<string>>(new Set());
  const [savedSet, setSavedSet] = useState<Set<string>>(new Set());

  /* Data */
  const categoryMeta = getCategoryMeta(category);
  const allBusinesses = getBusinessesByCategory(category);

  /* Skeleton loading */
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(t);
  }, [category]);

  /* Load persisted sets from localStorage */
  useEffect(() => {
    try {
      const l = localStorage.getItem("bl_liked");
      const f = localStorage.getItem("bl_followed");
      const s = localStorage.getItem("bl_saved");
      if (l) setLikedSet(new Set(JSON.parse(l)));
      if (f) setFollowedSet(new Set(JSON.parse(f)));
      if (s) setSavedSet(new Set(JSON.parse(s)));
    } catch {}
  }, []);

  /* Persist sets */
  useEffect(() => {
    try {
      localStorage.setItem("bl_liked", JSON.stringify([...likedSet]));
    } catch {}
  }, [likedSet]);

  useEffect(() => {
    try {
      localStorage.setItem("bl_followed", JSON.stringify([...followedSet]));
    } catch {}
  }, [followedSet]);

  useEffect(() => {
    try {
      localStorage.setItem("bl_saved", JSON.stringify([...savedSet]));
    } catch {}
  }, [savedSet]);

  /* Reset visible count on category/filter change */
  useEffect(() => {
    setVisibleCount(6);
    setIsLoading(true);
    const t = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(t);
  }, [category, sortBy, filters]);

  /* Toggle helpers */
  const toggleLike = useCallback((id: string) => {
    setLikedSet((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleFollow = useCallback((id: string) => {
    setFollowedSet((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleSave = useCallback((id: string) => {
    setSavedSet((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  /* Filtered + Sorted */
  const processed = useMemo(() => {
    let result = [...allBusinesses];

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q) ||
          b.area.toLowerCase().includes(q)
      );
    }

    // Filters
    if (filters.openNow) result = result.filter((b) => b.isOpen);
    if (filters.verified) result = result.filter((b) => b.isVerified);
    if (filters.maxDistance)
      result = result.filter(
        (b) => parseFloat(b.distance) <= filters.maxDistance!
      );
    if (filters.minRating)
      result = result.filter((b) => b.rating >= filters.minRating!);
    if (filters.priceRange)
      result = result.filter((b) => b.priceRange === filters.priceRange);

    // Sort
    const socialCache = new Map<string, SocialStats>();
    const getSocial = (biz: ListingBusiness) => {
      if (!socialCache.has(biz.id))
        socialCache.set(biz.id, getSocialStats(biz));
      return socialCache.get(biz.id)!;
    };

    switch (sortBy) {
      case "nearest":
        result.sort(
          (a, b) =>
            parseFloat(a.distance) - parseFloat(b.distance)
        );
        break;
      case "highestRated":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "mostViewed":
        result.sort(
          (a, b) => getSocial(b).views - getSocial(a).views
        );
        break;
      case "mostFollowed":
        result.sort(
          (a, b) => getSocial(b).followers - getSocial(a).followers
        );
        break;
      case "newest":
        result.sort((a, b) => {
          const aNew = getSocial(a).isNew ? 0 : 1;
          const bNew = getSocial(b).isNew ? 0 : 1;
          return aNew - bNew;
        });
        break;
      case "popular":
      default:
        result.sort((a, b) => {
          const aS = getSocial(a);
          const bS = getSocial(b);
          const aScore = aS.views + aS.likes * 5 + aS.followers * 3 + b.rating * 100;
          const bScore = bS.views + bS.likes * 5 + bS.followers * 3 + a.rating * 100;
          return bScore - aScore;
        });
        break;
    }

    // Featured first
    result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));

    return result;
  }, [allBusinesses, searchQuery, filters, sortBy]);

  const visibleBusinesses = processed.slice(0, visibleCount);
  const hasMore = visibleCount < processed.length;
  const activeFilterCount = [
    filters.openNow,
    filters.verified,
    filters.maxDistance,
    filters.minRating,
    filters.priceRange,
  ].filter(Boolean).length;

  /* Category change */
  const handleCategoryChange = useCallback(
    (slug: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("category", slug);
      router.push(`?${params.toString()}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [searchParams, router]
  );

  /* Social proof */
  const totalViews = useMemo(
    () =>
      allBusinesses.reduce((acc, b) => acc + getSocialStats(b).views, 0),
    [allBusinesses]
  );
  const totalFollowers = useMemo(
    () =>
      allBusinesses.reduce(
        (acc, b) => acc + getSocialStats(b).followers,
        0
      ),
    [allBusinesses]
  );

  /* Render */
  return (
    <div
      className="min-h-screen bg-[#F2F2F7]"
      style={{ maxWidth: 480, margin: "0 auto" }}
    >
      {/* ── Sticky Header ── */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="flex items-center justify-center w-9 h-9 -ml-1 rounded-full active:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-lg">{categoryMeta?.icon || "📋"}</span>
            <span className="font-bold text-gray-900 text-[15px]">
              {categoryMeta?.label || category}
            </span>
          </div>
          <div className="w-9" />
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-2">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search businesses..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(6);
              }}
              className="w-full h-10 pl-10 pr-10 rounded-2xl bg-[#F2F2F7] text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#0056b3]/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setVisibleCount(6);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center"
              >
                <X className="w-3 h-3 text-white" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 px-4 pb-3 overflow-x-auto no-scrollbar">
          {/* Quick toggle chips */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              setFilters((p) => ({ ...p, openNow: !p.openNow }))
            }
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-colors ${
              filters.openNow
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <Clock className="w-3 h-3" />
            Open Now
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              setFilters((p) => ({ ...p, verified: !p.verified }))
            }
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-colors ${
              filters.verified
                ? "bg-[#0056b3] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <BadgeCheck className="w-3 h-3" />
            Verified
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowSortSheet(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 shrink-0"
          >
            <TrendingUp className="w-3 h-3" />
            Sort
            <ChevronDown className="w-3 h-3" />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowFilterSheet(true)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-colors relative ${
              activeFilterCount > 0
                ? "bg-[#0056b3] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <Filter className="w-3 h-3" />
            Filters
            {activeFilterCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#e42529] text-white text-[9px] font-bold flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </motion.button>
        </div>
      </div>

      {/* ── Category Tabs ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="flex gap-2 px-4 py-2.5 overflow-x-auto no-scrollbar">
          {listingCategories.map((cat) => (
            <motion.button
              key={cat.slug}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(cat.slug)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold shrink-0 transition-all ${
                cat.slug === category
                  ? "bg-[#0056b3] text-white shadow-md shadow-[#0056b3]/25"
                  : "bg-[#F2F2F7] text-gray-600"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── Results Info + Social Proof ── */}
      <div className="px-4 pt-3 pb-1">
        <p className="text-xs text-gray-500">
          <span className="font-bold text-gray-900">
            {processed.length}
          </span>{" "}
          {categoryMeta?.label || category} found near{" "}
          <span className="font-semibold text-gray-700">{location}</span>
        </p>
        <div className="flex items-center gap-3 mt-1.5">
          <span className="text-[10px] text-gray-400 flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {fmt(totalViews)} views today
          </span>
          <span className="text-[10px] text-gray-400 flex items-center gap-1">
            <Users className="w-3 h-3" />
            {fmt(totalFollowers)} followers this week
          </span>
        </div>
      </div>

      {/* ── Business Cards ── */}
      {isLoading ? (
        <div className="pt-2">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : processed.length > 0 ? (
        <>
          <div className="pt-2">
            {visibleBusinesses.map((biz) => (
              <BusinessCard
                key={biz.id}
                biz={biz}
                categoryColor={categoryMeta?.color || "#0056b3"}
                onLike={() => toggleLike(biz.id)}
                onFollow={() => toggleFollow(biz.id)}
                onSave={() => toggleSave(biz.id)}
                liked={likedSet.has(biz.id)}
                followed={followedSet.has(biz.id)}
                saved={savedSet.has(biz.id)}
              />
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div ref={loadMoreRef} className="py-4 flex justify-center">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setVisibleCount((p) => Math.min(p + 6, processed.length))
                }
                className="px-8 py-3 rounded-2xl bg-white text-[#0056b3] font-semibold text-sm shadow-sm border border-gray-100 flex items-center gap-2"
              >
                Load More
                <span className="text-xs text-gray-400">
                  ({processed.length - visibleCount} remaining)
                </span>
              </motion.button>
            </div>
          )}

          {/* End of list */}
          {!hasMore && processed.length > 6 && (
            <div className="py-6 text-center">
              <p className="text-xs text-gray-400">
                You&apos;ve seen all{" "}
                {processed.length} businesses
              </p>
            </div>
          )}
        </>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-5">
            <Search className="w-8 h-8 text-gray-300" />
          </div>
          <h3 className="font-bold text-gray-900 text-lg">
            No businesses found
          </h3>
          <p className="text-sm text-gray-500 mt-2 max-w-[260px] leading-relaxed">
            Try adjusting your filters or expanding the search radius to
            discover more businesses near you.
          </p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setFilters({
                openNow: false,
                verified: false,
                maxDistance: null,
                minRating: null,
                priceRange: null,
              });
              setSearchQuery("");
            }}
            className="mt-5 px-6 py-2.5 rounded-2xl bg-[#0056b3] text-white font-semibold text-sm"
          >
            Clear All Filters
          </motion.button>
        </div>
      )}

      {/* Safe area bottom */}
      <div
        className="h-6"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      />

      {/* ── Bottom Sheets ── */}
      <SortSheet
        open={showSortSheet}
        selected={sortBy}
        onClose={() => setShowSortSheet(false)}
        onSelect={setSortBy}
      />
      <FilterSheet
        open={showFilterSheet}
        filters={filters}
        onClose={() => setShowFilterSheet(false)}
        onApply={setFilters}
        onReset={() =>
          setFilters({
            openNow: false,
            verified: false,
            maxDistance: null,
            minRating: null,
            priceRange: null,
          })
        }
      />
    </div>
  );
}

/* ─── Export ─────────────────────────────────────────────────── */

export default function MobileBusinessListingPage() {
  return (
    <Suspense fallback={<SkeletonLoader />}>
      <MobileBusinessListingContent />
    </Suspense>
  );
}