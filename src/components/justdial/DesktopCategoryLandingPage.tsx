"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  ChevronRight,
  Search,
  Star,
  MapPin,
  BadgeCheck,
  ArrowRight,
  Share2,
  Phone,
  Users,
  Clock,
  CheckCircle,
  ExternalLink,
  TrendingUp,
} from "lucide-react";
import { CategoryLandingInfo } from "@/lib/category-landing-data";
import {
  getBusinessesByCategory,
  ListingBusiness,
} from "@/lib/business-listing-data";
import StoreCard from "@/components/justdial/StoreCard";

interface Props {
  category: CategoryLandingInfo;
}

/* ── Fallback businesses when no listingSlug is available ──── */

function makeFallbackBusinesses(cat: CategoryLandingInfo): ListingBusiness[] {
  const areas = ["Connaught Place", "MG Road", "Sector 18", "Jubilee Hills", "Koramangala", "Andheri West"];
  const names = [
    `${cat.label} Express`,
    `Premium ${cat.label} Hub`,
    `${cat.label} World`,
    `Elite ${cat.label} Center`,
    `Royal ${cat.label} Services`,
    `${cat.label} Masters`,
  ];
  return names.map((name, i) => ({
    id: `fb-${cat.slug}-${i}`,
    storeId: `fb-${cat.slug}-${i}`,
    name,
    category: cat.label,
    area: areas[i % areas.length],
    rating: 3.8 + Math.random() * 1.2,
    totalRatings: 120 + Math.floor(Math.random() * 800),
    distance: (0.5 + Math.random() * 6).toFixed(1) + " km",
    priceRange: ["₹₹", "₹₹₹", "₹", "₹₹₹", "₹₹", "₹₹₹₹"][i],
    logoEmoji: cat.emoji,
    coverGradient: cat.gradient,
    isOpen: i % 3 !== 0,
    isVerified: i % 2 === 0,
    isFeatured: i < 2,
    businessType: "service" as const,
  }));
}

/* ── Popular Services stub data ─────────────────────────────── */

const popularServices = [
  { icon: "📋", name: "Standard Consultation", price: "₹499" },
  { icon: "⭐", name: "Premium Service", price: "₹999" },
  { icon: "🚀", name: "Express Service", price: "₹1,499" },
  { icon: "🛡️", name: "Complete Package", price: "₹2,499" },
  { icon: "🎯", name: "Custom Solution", price: "₹3,999" },
  { icon: "💡", name: "Expert Advice", price: "₹699" },
];

/* ── Component ─────────────────────────────────────────────── */

export default function DesktopCategoryLandingPage({ category }: Props) {
  const [searchQuery, setSearchQuery] = useState("");

  const realBusinesses = category.listingSlug
    ? getBusinessesByCategory(category.listingSlug)
    : [];
  const businesses =
    realBusinesses.length > 0
      ? realBusinesses
      : makeFallbackBusinesses(category);

  const featured = businesses.filter((b) => b.isFeatured).slice(0, 6);
  const topRated = [...businesses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  const relatedCategories: { slug: string; label: string; emoji: string; count: number }[] =
    category.relatedSlugs.map((slug) => {
      const parts = slug.split("-");
      const label = parts
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
        .join(" ");
      return {
        slug,
        label,
        emoji: "📂",
        count: Math.floor(400 + Math.random() * 3000),
      };
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* ── 1. BREADCRUMB NAV ─────────────────────────────── */}
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center h-12 text-sm text-gray-500">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-[#0056b3] transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-gray-400" />
            <Link
              href="/categories"
              className="hover:text-[#0056b3] transition-colors"
            >
              Categories
            </Link>
            <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-gray-400" />
            <span className="text-gray-900 font-medium">{category.label}</span>
          </div>
        </nav>

        {/* ── 2. CATEGORY HEADER ────────────────────────────── */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 mt-6">
          <div className="flex items-start justify-between gap-6">
            {/* Left */}
            <div className="flex items-start gap-5 flex-1">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-5xl shrink-0"
                style={{ backgroundColor: category.bgLight }}
              >
                {category.emoji}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {category.label}
                </h1>
                <p className="text-gray-500 text-sm mt-1.5 max-w-2xl leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center gap-5 mt-3 text-sm">
                  <span className="flex items-center gap-1.5 text-gray-600">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="font-semibold text-gray-800">
                      {category.businessCount.toLocaleString()}
                    </span>{" "}
                    businesses
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-600">
                    <BadgeCheck className="w-4 h-4 text-[#2563EB]" />
                    <span className="font-semibold text-gray-800">
                      {category.verifiedCount.toLocaleString()}
                    </span>{" "}
                    verified
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Search + Share */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={`Search in ${category.label}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3] transition-colors"
                />
              </div>
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── 3. SUB CATEGORIES ─────────────────────────────── */}
        {category.subCategories.length > 0 && (
          <section className="py-8">
            <h2 className="text-lg font-bold text-gray-800 mb-5">
              Popular Sub Categories
            </h2>
            <div className="flex flex-wrap gap-3">
              {category.subCategories.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/category/${category.slug}?sub=${sub.slug}`}
                  className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 hover:bg-gray-50 hover:border-gray-300 transition-colors group"
                >
                  <span className="text-base">{sub.emoji}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#0056b3] transition-colors">
                    {sub.label}
                  </span>
                  <span className="text-xs text-gray-400">
                    ({sub.count.toLocaleString()})
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── 4. FEATURED BUSINESSES ────────────────────────── */}
        {featured.length > 0 && (
          <section className="py-8">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-gray-800">
                Featured Businesses
              </h2>
              <Link
                href={
                  category.listingSlug
                    ? `/listings?category=${category.listingSlug}`
                    : "#"
                }
                className="flex items-center gap-1 text-sm font-medium text-[#0056b3] hover:underline"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featured.map((biz) => (
                <BusinessCard key={biz.id} business={biz} />
              ))}
            </div>
          </section>
        )}

        {/* ── 5. POPULAR SERVICES ───────────────────────────── */}
        <section className="py-8">
          <h2 className="text-lg font-bold text-gray-800 mb-5">
            Popular Services
          </h2>
          <div className="flex flex-wrap gap-4">
            {popularServices.map((svc, i) => (
              <StoreCard
                key={svc.name}
                name={svc.name}
                category={category.label}
                logoEmoji={svc.icon}
                coverGradient={category.gradient}
                price={svc.price}
                storeId={`svc-${category.slug}-${i}`}
                variant="desktop"
                index={i}
                isFeatured={false}
                isVerified={false}
              />
            ))}
          </div>
        </section>

        {/* ── 6. TOP RATED BUSINESSES ───────────────────────── */}
        <section className="py-8">
          <h2 className="text-lg font-bold text-gray-800 mb-5">Top Rated</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topRated.map((biz, idx) => (
              <Link
                key={biz.id}
                href={`/store/${biz.storeId}`}
                className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow group"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{
                    backgroundColor:
                      idx === 0
                        ? "#F59E0B"
                        : idx === 1
                          ? "#9CA3AF"
                          : idx === 2
                            ? "#CD7F32"
                            : category.color,
                  }}
                >
                  #{idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate group-hover:text-[#0056b3] transition-colors">
                    {biz.name}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1 text-xs">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span className="font-semibold text-gray-800">
                        {biz.rating.toFixed(1)}
                      </span>
                    </span>
                    <span className="text-xs text-gray-400">
                      ({biz.totalRatings.toLocaleString()} reviews)
                    </span>
                  </div>
                </div>
                {biz.isVerified && (
                  <BadgeCheck className="w-5 h-5 text-[#2563EB] shrink-0" />
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* ── 7. RELATED CATEGORIES ─────────────────────────── */}
        {relatedCategories.length > 0 && (
          <section className="py-8 pb-16">
            <h2 className="text-lg font-bold text-gray-800 mb-5">
              Explore Related Categories
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
              {relatedCategories.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/category/${rel.slug}`}
                  className="flex flex-col items-center gap-2.5 bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: category.bgLight }}
                  >
                    {rel.emoji}
                  </div>
                  <p className="text-sm font-medium text-gray-700 text-center group-hover:text-[#0056b3] transition-colors leading-tight">
                    {rel.label}
                  </p>
                  <p className="text-xs text-gray-400">
                    {rel.count.toLocaleString()} businesses
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

/* ── Business Card Sub-component ───────────────────────────── */

function BusinessCard({ business }: { business: ListingBusiness }) {
  // Unified card design — matches home page "Featured Stores" template.
  return (
    <StoreCard
      name={business.name}
      category={business.category}
      rating={business.rating}
      reviews={business.totalRatings}
      distance={business.distance}
      address={business.area}
      logoEmoji={business.logoEmoji}
      coverGradient={business.coverGradient}
      storeId={business.storeId}
      isFeatured={business.isFeatured}
      isOpen={business.isOpen}
      isVerified={business.isVerified}
      variant="desktop"
      fluid
    />
  );
}