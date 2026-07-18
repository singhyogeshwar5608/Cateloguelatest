"use client";

import { useState, useEffect, useCallback, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  Clock,
  Users,
  Building2,
  Navigation,
  BadgeCheck,
  Share2,
  Bookmark,
  SlidersHorizontal,
  X,
  Plus,
  ChevronRight as BreadcrumbChevron,
  Eye,
  Flame,
  Sparkles,
  ArrowRight,
  Search,
  Filter,
  ChevronDown,
  TrendingUp,
} from "lucide-react";
import {
  listingCategories,
  getBusinessesByCategory,
  getCategoryMeta,
  ListingBusiness,
} from "@/lib/business-listing-data";
import StoreCard from "@/components/justdial/StoreCard";

/* ─── Utilities (shared logic) ───────────────────────────────── */

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

/* ─── Types ──────────────────────────────────────────────────── */

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

/* ─── Desktop Business Card ──────────────────────────────────── */

function DesktopBusinessCard({
  biz,
}: {
  biz: ListingBusiness;
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
      variant="desktop"
      fluid
    />
  );
}

/* ─── Main Content ───────────────────────────────────────────── */

function DesktopBusinessListingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

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
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);
  const [likedSet, setLikedSet] = useState<Set<string>>(new Set());
  const [followedSet, setFollowedSet] = useState<Set<string>>(new Set());
  const [savedSet, setSavedSet] = useState<Set<string>>(new Set());

  /* Data */
  const categoryMeta = getCategoryMeta(category);
  const allBusinesses = getBusinessesByCategory(category);

  /* localStorage */
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

  /* Reset on filter/category change */
  useEffect(() => {
    setVisibleCount(9);
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

  /* Close dropdown on outside click */
  useEffect(() => {
    if (!showSortDropdown) return;
    const handler = () => setShowSortDropdown(false);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [showSortDropdown]);

  /* Filtered + Sorted */
  const processed = useMemo(() => {
    let result = [...allBusinesses];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q) ||
          b.area.toLowerCase().includes(q)
      );
    }

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

    const socialCache = new Map<string, SocialStats>();
    const getSocial = (biz: ListingBusiness) => {
      if (!socialCache.has(biz.id))
        socialCache.set(biz.id, getSocialStats(biz));
      return socialCache.get(biz.id)!;
    };

    switch (sortBy) {
      case "nearest":
        result.sort(
          (a, b) => parseFloat(a.distance) - parseFloat(b.distance)
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
          const aScore =
            aS.views + aS.likes * 5 + aS.followers * 3 + b.rating * 100;
          const bScore =
            bS.views + bS.likes * 5 + bS.followers * 3 + a.rating * 100;
          return bScore - aScore;
        });
        break;
    }

    result.sort(
      (a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0)
    );

    return result;
  }, [allBusinesses, searchQuery, filters, sortBy]);

  const visibleBusinesses = processed.slice(0, visibleCount);
  const hasMore = visibleCount < processed.length;

  const avgRating =
    allBusinesses.length === 0
      ? "0"
      : (
          allBusinesses.reduce((acc, b) => acc + b.rating, 0) /
          allBusinesses.length
        ).toFixed(1);
  const openCount = allBusinesses.filter((b) => b.isOpen).length;
  const verifiedCount = allBusinesses.filter((b) => b.isVerified).length;

  const handleCategoryChange = useCallback(
    (slug: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("category", slug);
      router.push(`?${params.toString()}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [searchParams, router]
  );

  const activeFilterCount = [
    filters.openNow,
    filters.verified,
    filters.maxDistance,
    filters.minRating,
    filters.priceRange,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link
                href="/"
                className="hover:text-[#0056b3] transition-colors"
              >
                Home
              </Link>
              <BreadcrumbChevron className="w-3.5 h-3.5" />
              <span className="hover:text-[#0056b3] cursor-pointer transition-colors">
                Explore
              </span>
              <BreadcrumbChevron className="w-3.5 h-3.5" />
              <span className="text-gray-900 font-medium">
                {categoryMeta?.label || category}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <Bookmark className="w-4 h-4" />
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      {categoryMeta && (
        <div
          className="relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${categoryMeta.color}, ${categoryMeta.color}dd, ${categoryMeta.color}bb)`,
          }}
        >
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/10" />
          <div className="absolute top-20 right-40 w-20 h-20 rounded-full bg-white/5" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-4xl backdrop-blur-sm">
                {categoryMeta.icon}
              </div>
              <div>
                <h1 className="text-white font-bold text-3xl">
                  {categoryMeta.label}
                </h1>
                <p className="text-white/80 text-base mt-1">
                  Discover the best {categoryMeta.label.toLowerCase()} near{" "}
                  {location}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white/15 rounded-2xl p-4 text-center backdrop-blur-sm">
                <Building2 className="w-6 h-6 text-white/90 mx-auto mb-2" />
                <p className="text-white font-bold text-2xl">
                  {allBusinesses.length}
                </p>
                <p className="text-white/70 text-sm">Places Found</p>
              </div>
              <div className="bg-white/15 rounded-2xl p-4 text-center backdrop-blur-sm">
                <Star className="w-6 h-6 text-white/90 mx-auto mb-2" />
                <p className="text-white font-bold text-2xl">{avgRating}</p>
                <p className="text-white/70 text-sm">Avg Rating</p>
              </div>
              <div className="bg-white/15 rounded-2xl p-4 text-center backdrop-blur-sm">
                <Clock className="w-6 h-6 text-white/90 mx-auto mb-2" />
                <p className="text-white font-bold text-2xl">{openCount}</p>
                <p className="text-white/70 text-sm">Open Now</p>
              </div>
              <div className="bg-white/15 rounded-2xl p-4 text-center backdrop-blur-sm">
                <Users className="w-6 h-6 text-white/90 mx-auto mb-2" />
                <p className="text-white font-bold text-2xl">
                  {verifiedCount}
                </p>
                <p className="text-white/70 text-sm">Verified</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page Header + Filters */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Left: Category Title */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{
                backgroundColor: `${categoryMeta?.bg || "#F0F4FF"}`,
              }}
            >
              {categoryMeta?.icon || "📋"}
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              {categoryMeta?.label || category}
            </h2>
          </div>

          {/* Right: Search + Filter controls */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(9);
                }}
                className="w-56 h-9 pl-9 pr-8 rounded-xl bg-gray-100 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#0056b3]/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setVisibleCount(9);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors"
                >
                  <X className="w-3 h-3 text-white" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSortDropdown(!showSortDropdown);
                }}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Sort</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {showSortDropdown && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-50">
                  {sortOptions.map((opt) => {
                    const Icon = opt.icon;
                    const active = sortBy === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSortBy(opt.value);
                          setShowSortDropdown(false);
                          setVisibleCount(9);
                        }}
                        className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                          active
                            ? "bg-[#0056b3]/8 text-[#0056b3]"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="flex-1 text-left">{opt.label}</span>
                        {active && (
                          <div className="w-4 h-4 rounded-full bg-[#0056b3] flex items-center justify-center">
                            <svg
                              className="w-2.5 h-2.5 text-white"
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
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Filter Toggle */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowFilterPanel(!showFilterPanel)}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg border transition-colors relative ${
                activeFilterCount > 0
                  ? "bg-[#0056b3] text-white border-[#0056b3]"
                  : "text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#e42529] text-white text-[10px] font-bold flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </motion.button>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilterPanel && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-900">Filters</h4>
              <button
                onClick={() =>
                  setFilters({
                    openNow: false,
                    verified: false,
                    maxDistance: null,
                    minRating: null,
                    priceRange: null,
                  })
                }
                className="text-xs font-semibold text-[#0056b3] hover:underline"
              >
                Reset All
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Distance */}
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                  Distance
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {distanceOptions.map((d) => (
                    <button
                      key={d.label}
                      onClick={() =>
                        setFilters((p) => ({
                          ...p,
                          maxDistance: d.value,
                        }))
                      }
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        filters.maxDistance === d.value
                          ? "bg-[#0056b3] text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                  Rating
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {ratingOptions.map((r) => (
                    <button
                      key={r.label}
                      onClick={() =>
                        setFilters((p) => ({
                          ...p,
                          minRating: r.value,
                        }))
                      }
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 ${
                        filters.minRating === r.value
                          ? "bg-[#0056b3] text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {r.value && (
                        <Star className="w-3 h-3 text-amber-500" />
                      )}
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                  Price Range
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {priceOptions.map((p) => (
                    <button
                      key={p.label}
                      onClick={() =>
                        setFilters((prev) => ({
                          ...prev,
                          priceRange: p.value,
                        }))
                      }
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        filters.priceRange === p.value
                          ? "bg-[#0056b3] text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggles */}
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                  Status
                </p>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() =>
                      setFilters((p) => ({
                        ...p,
                        openNow: !p.openNow,
                      }))
                    }
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${
                      filters.openNow
                        ? "bg-green-50 text-green-700 border-green-200"
                        : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <Clock className="w-4 h-4" />
                    Open Now
                  </button>
                  <button
                    onClick={() =>
                      setFilters((p) => ({
                        ...p,
                        verified: !p.verified,
                      }))
                    }
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${
                      filters.verified
                        ? "bg-blue-50 text-blue-700 border-blue-200"
                        : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <BadgeCheck className="w-4 h-4" />
                    Verified
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Category Tabs */}
        <div className="flex gap-2 mt-5 overflow-x-auto no-scrollbar pb-1">
          {listingCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => handleCategoryChange(cat.slug)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium shrink-0 transition-all ${
                cat.slug === category
                  ? "bg-[#0056b3] text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Bar */}
      <div className="max-w-7xl mx-auto px-6 mb-5">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-900">
              {processed.length}
            </span>{" "}
            results found
            {searchQuery && (
              <span>
                {" "}
                for &ldquo;
                <span className="text-gray-900">{searchQuery}</span>&rdquo;
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Business Grid */}
      <div className="max-w-7xl mx-auto px-6">
        {processed.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {visibleBusinesses.map((biz) => (
                <DesktopBusinessCard
                  key={biz.id}
                  biz={biz}
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
              <div className="flex justify-center py-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    setVisibleCount((p) =>
                      Math.min(p + 9, processed.length)
                    )
                  }
                  className="px-8 py-3 rounded-xl bg-white text-[#0056b3] font-semibold text-sm shadow-sm border border-gray-200 hover:border-[#0056b3]/30 transition-colors"
                >
                  Load More ({processed.length - visibleCount} remaining)
                </motion.button>
              </div>
            )}

            {!hasMore && processed.length > 9 && (
              <div className="py-8 text-center">
                <p className="text-sm text-gray-400">
                  Showing all {processed.length} businesses
                </p>
              </div>
            )}
          </>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-7xl mb-6">🔍</div>
            <h3 className="font-bold text-gray-900 text-2xl">
              No businesses found
            </h3>
            <p className="text-gray-500 mt-3 max-w-md text-base">
              We couldn&apos;t find any{" "}
              {categoryMeta?.label?.toLowerCase() || category} matching
              your criteria. Try adjusting your filters or expanding the
              search radius.
            </p>
            <button
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
              className="mt-5 px-6 py-2.5 rounded-xl bg-[#0056b3] text-white font-semibold text-sm hover:bg-[#0056b3]/90 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      {processed.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 py-8 mt-8 border-t border-gray-200 bg-white">
          <p className="text-center text-sm text-gray-500">
            Showing{" "}
            <span className="font-medium text-gray-700">
              {categoryMeta?.label || category}
            </span>{" "}
            near{" "}
            <span className="font-medium text-gray-700">{location}</span>
          </p>
        </div>
      )}
    </div>
  );
}

/* ─── Export ─────────────────────────────────────────────────── */

export default function DesktopBusinessListingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-10 border-3 border-[#0056b3] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-gray-500 mt-4">Loading listings...</p>
          </div>
        </div>
      }
    >
      <DesktopBusinessListingContent />
    </Suspense>
  );
}