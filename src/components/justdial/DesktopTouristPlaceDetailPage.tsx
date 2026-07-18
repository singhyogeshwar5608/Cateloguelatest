"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Clock,
  DollarSign,
  Car,
  Users,
  Accessibility,
  Calendar,
  MapPin,
  ThumbsUp,
  Navigation,
  Share2,
  Bookmark,
  ArrowRight,
  Phone,
  Globe,
  Home,
} from "lucide-react";
import { TouristPlace } from "@/lib/tourist-place-data";

export default function DesktopTouristPlaceDetailPage({
  place,
}: {
  place: TouristPlace;
}) {
  const [readMore, setReadMore] = useState(false);

  const quickInfo = [
    { icon: DollarSign, label: "Entry Fee", value: place.entryFee },
    { icon: Clock, label: "Timings", value: place.timings },
    { icon: Calendar, label: "Best Time", value: place.bestTimeToVisit },
    { icon: Car, label: "Parking", value: place.parking },
    { icon: Users, label: "Family Friendly", value: place.familyFriendly ? "Yes" : "No" },
    { icon: Accessibility, label: "Wheelchair Access", value: place.wheelchairAccessible ? "Yes" : "No" },
  ];

  const featuredBusinesses = place.popularBusinesses
    .filter((b) => b.rating >= 4.6)
    .slice(0, 3);

  const ratingDistribution = [
    { stars: 5, percentage: 68 },
    { stars: 4, percentage: 22 },
    { stars: 3, percentage: 7 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 },
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0056b3] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/explore"
              className="hover:text-[#0056b3] transition-colors"
            >
              Explore
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-800 font-medium">{place.name}</span>
          </nav>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <Bookmark className="w-4 h-4" />
              Save
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-700 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-6 py-12 flex items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-2.5 py-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1.5" />
                  <span className="text-sm font-bold">{place.rating}</span>
                  <span className="text-sm text-white/70 ml-1">
                    ({formatNumber(place.totalRatings)} reviews)
                  </span>
                </div>
                <div
                  className={`rounded-lg px-2.5 py-1 text-sm font-medium ${
                    place.isOpen
                      ? "bg-green-500/80 text-white"
                      : "bg-red-500/80 text-white"
                  }`}
                >
                  {place.isOpen ? "Open Now" : "Closed"}
                </div>
              </div>
              <h1 className="text-4xl font-extrabold leading-tight mb-2">
                {place.name}
              </h1>
              <div className="flex items-center gap-2 text-white/80 text-lg mb-6">
                <MapPin className="w-5 h-5" />
                <span>
                  {place.city}, {place.state}
                </span>
                <span className="text-white/40">•</span>
                <span>{place.distance} away</span>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href={`https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-gray-800 text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </Link>
                <button className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-red-700 transition-colors">
                  Book Tickets
                </button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center w-48 h-48 bg-white/10 backdrop-blur-sm rounded-2xl text-8xl">
              🏛
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
              {quickInfo.map((info, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 flex-shrink-0"
                >
                  <div className="w-9 h-9 rounded-full bg-[#E0F2FE] flex items-center justify-center">
                    <info.icon className="w-4 h-4 text-[#0056b3]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                      {info.label}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 leading-tight">
                      {info.value}
                    </p>
                  </div>
                  {i < quickInfo.length - 1 && (
                    <div className="w-px h-8 bg-gray-200 ml-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two Column Layout */}
        <section className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex gap-8">
            {/* Left Column - 2/3 */}
            <div className="flex-[2] space-y-6">
              {/* About */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-800 mb-3">About</h2>
                <p
                  className={`text-sm text-gray-600 leading-relaxed ${
                    !readMore ? "line-clamp-4" : ""
                  }`}
                >
                  {place.shortDescription}
                </p>
                <button
                  onClick={() => setReadMore(!readMore)}
                  className="text-[#0056b3] text-sm font-semibold mt-2 flex items-center gap-1 hover:underline"
                >
                  {readMore ? "Show Less" : "Read More"}
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      readMore ? "rotate-90" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Explore Nearby */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-gray-800">
                    Explore Nearby
                  </h2>
                  <Link
                    href={`/explore?location=${encodeURIComponent(place.name)}&lat=${place.lat}&lng=${place.lng}`}
                    className="text-[#0056b3] text-sm font-semibold flex items-center gap-1 hover:underline"
                  >
                    See All <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
                  {place.nearbyCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/explore?category=${cat.slug}&location=${encodeURIComponent(place.name)}&radius=5&lat=${place.lat}&lng=${place.lng}`}
                      className="flex flex-col items-center text-center p-4 rounded-xl border border-gray-100 hover:border-[#0056b3]/30 hover:shadow-md transition-all group"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: cat.bg }}
                      >
                        {cat.icon}
                      </div>
                      <span className="text-xs font-semibold text-gray-800">
                        {cat.label}
                      </span>
                      <span className="text-[11px] text-gray-400 mt-0.5">
                        {cat.count} Places
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Featured Nearby */}
              {featuredBusinesses.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-gray-800">
                      Featured Nearby
                    </h2>
                    <Link
                      href={`/explore?location=${encodeURIComponent(place.name)}&lat=${place.lat}&lng=${place.lng}`}
                      className="text-[#0056b3] text-sm font-semibold flex items-center gap-1 hover:underline"
                    >
                      See All <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {featuredBusinesses.map((biz) => (
                      <Link
                        key={biz.id}
                        href={`/store/${biz.id}`}
                        className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all group"
                      >
                        <div
                          className={`h-32 bg-gradient-to-br ${biz.coverGradient} flex items-center justify-center relative`}
                        >
                          <span className="text-5xl group-hover:scale-110 transition-transform">
                            {biz.logoEmoji}
                          </span>
                          <span className="absolute top-2 left-2 bg-yellow-400 text-[10px] font-bold text-yellow-900 px-2 py-0.5 rounded-md">
                            ⭐ Featured
                          </span>
                          <span
                            className={`absolute top-2 right-2 text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                              biz.isOpen
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {biz.isOpen ? "Open" : "Closed"}
                          </span>
                        </div>
                        <div className="p-3">
                          <h3 className="text-sm font-bold text-gray-800 truncate">
                            {biz.name}
                          </h3>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {biz.category} · {biz.area}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                              <span className="text-sm font-bold text-gray-800">
                                {biz.rating}
                              </span>
                              <span className="text-xs text-gray-400">
                                ({formatNumber(biz.totalRatings)})
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                              <MapPin className="w-3 h-3" />
                              {biz.distance}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Reviews */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Reviews & Ratings
                </h2>
                <div className="flex gap-8 mb-6">
                  {/* Rating Summary */}
                  <div className="flex-shrink-0 text-center">
                    <div className="text-5xl font-extrabold text-gray-800">
                      {place.rating}
                    </div>
                    <div className="flex items-center gap-0.5 mt-1 justify-center">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-4 h-4 ${
                            s <= Math.round(place.rating)
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      {formatNumber(place.totalRatings)} ratings
                    </p>
                  </div>
                  {/* Distribution Bars */}
                  <div className="flex-1 space-y-2">
                    {ratingDistribution.map((d) => (
                      <div key={d.stars} className="flex items-center gap-3">
                        <span className="text-xs text-gray-500 w-6 text-right">
                          {d.stars}★
                        </span>
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-500 rounded-full"
                            style={{ width: `${d.percentage}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-400 w-10 text-right">
                          {d.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Review Cards */}
                <div className="space-y-4">
                  {place.reviews.slice(0, 2).map((review) => (
                    <div
                      key={review.id}
                      className="border border-gray-100 rounded-xl p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E0F2FE] to-[#BAE6FD] flex items-center justify-center">
                          <span className="text-sm font-bold text-[#0056b3]">
                            {review.avatar}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-gray-800">
                            {review.userName}
                          </h4>
                          <div className="flex items-center gap-0.5 mt-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star
                                key={s}
                                className={`w-3 h-3 ${
                                  s <= review.rating
                                    ? "text-yellow-500 fill-yellow-500"
                                    : "text-gray-200"
                                }`}
                              />
                            ))}
                            <span className="text-xs text-gray-400 ml-2">
                              {review.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mt-3">
                        {review.text}
                      </p>
                      <button className="mt-3 flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#0056b3] transition-colors">
                        <ThumbsUp className="w-3.5 h-3.5" />
                        Helpful ({review.helpful})
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - 1/3 */}
            <div className="flex-1 space-y-6">
              {/* Map Preview */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="h-[200px] relative bg-gradient-to-br from-[#E0F2FE] to-[#F0F9FF] overflow-hidden">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 opacity-20">
                    <svg
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern
                          id="grid-d"
                          width="30"
                          height="30"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 30 0 L 0 0 0 30"
                            fill="none"
                            stroke="#94a3b8"
                            strokeWidth="0.5"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid-d)" />
                    </svg>
                  </div>
                  {/* Roads */}
                  <div className="absolute top-1/3 left-0 right-0 h-[2px] bg-gray-300/50" />
                  <div className="absolute top-0 bottom-0 left-1/3 w-[2px] bg-gray-300/50" />
                  <div className="absolute top-2/3 left-0 right-0 h-[3px] bg-yellow-400/40" />
                  <div className="absolute top-0 bottom-0 right-1/4 w-[3px] bg-yellow-400/40" />
                  <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300/30 rotate-45 origin-left" />
                  {/* Green areas */}
                  <div className="absolute top-6 left-10 w-16 h-10 bg-green-200/50 rounded-full" />
                  <div className="absolute bottom-10 right-8 w-20 h-8 bg-green-200/40 rounded-full" />
                  <div className="absolute top-12 right-16 w-10 h-14 bg-green-200/30 rounded-full" />
                  {/* Pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="bg-red-500 rounded-full p-2 shadow-lg">
                      <MapPin className="w-5 h-5 text-white fill-white" />
                    </div>
                    <div className="w-2 h-2 bg-red-400/60 rounded-full mt-1" />
                  </div>
                  {/* Coordinates */}
                  <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm rounded-lg px-2.5 py-1.5">
                    <span className="text-[10px] text-gray-500 font-mono">
                      {place.lat.toFixed(4)}°N, {place.lng.toFixed(4)}°E
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-gray-800 mb-1">
                    Location
                  </h3>
                  <p className="text-xs text-gray-400 mb-3">
                    {place.city}, {place.state}
                  </p>
                  <Link
                    href={`https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#2563EB] text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </Link>
                </div>
              </div>

              {/* Nearby at a Glance */}
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h3 className="text-sm font-bold text-gray-800 mb-3">
                  Nearby at a Glance
                </h3>
                <div className="space-y-3">
                  {place.nearbyCategories.slice(0, 5).map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/explore?category=${cat.slug}&location=${encodeURIComponent(place.name)}&radius=5&lat=${place.lat}&lng=${place.lng}`}
                      className="flex items-center justify-between py-1.5 hover:bg-gray-50 -mx-2 px-2 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                          style={{ backgroundColor: cat.bg }}
                        >
                          {cat.icon}
                        </div>
                        <span className="text-sm text-gray-700">
                          {cat.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-gray-400 font-medium">
                          {cat.count}
                        </span>
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Similar Places */}
              {place.similarPlaces.length > 0 && (
                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <h3 className="text-sm font-bold text-gray-800 mb-3">
                    Similar Places
                  </h3>
                  <div className="space-y-3">
                    {place.similarPlaces.map((sp) => (
                      <Link
                        key={sp.id}
                        href={`/tourist/${sp.slug}`}
                        className="flex items-center gap-3 p-2 -mx-2 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-105 transition-transform">
                          🏛
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-gray-800 truncate">
                            {sp.name}
                          </h4>
                          <div className="flex items-center gap-2 mt-0.5">
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                              <span className="text-xs font-semibold text-gray-700">
                                {sp.rating}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                              <MapPin className="w-3 h-3" />
                              {sp.distance}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#0056b3] flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="text-sm font-bold text-gray-800">
                JustDial Clone
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-[#0056b3] transition-colors">
                Home
              </Link>
              <Link
                href="/explore"
                className="hover:text-[#0056b3] transition-colors"
              >
                Explore
              </Link>
              <Link
                href="/"
                className="hover:text-[#0056b3] transition-colors"
              >
                About
              </Link>
              <Link
                href="/"
                className="hover:text-[#0056b3] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          <p className="text-xs text-gray-300 mt-4 text-center">
            © 2024 JustDial Clone. This is a demo project for educational purposes.
          </p>
        </div>
      </footer>

      {/* Scrollbar hide utility */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}