"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Share2,
  Heart,
  Star,
  Clock,
  DollarSign,
  Car,
  Users,
  Accessibility,
  Calendar,
  ChevronRight,
  MapPin,
  ThumbsUp,
  Navigation,
  Home,
  BarChart3,
  Briefcase,
  Newspaper,
  MoreHorizontal,
  X,
} from "lucide-react";
import { TouristPlace } from "@/lib/tourist-place-data";

export default function TouristPlaceDetailPage({
  place,
}: {
  place: TouristPlace;
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    { emoji: "🏛", gradient: "from-slate-600 to-slate-800" },
    { emoji: "🌅", gradient: "from-orange-400 to-rose-500" },
    { emoji: "🇮🇳", gradient: "from-green-500 to-emerald-700" },
    { emoji: "✨", gradient: "from-amber-400 to-yellow-600" },
  ];

  const galleryItems = [
    { emoji: "🏛", gradient: "from-slate-500 to-slate-700" },
    { emoji: "🌿", gradient: "from-green-400 to-emerald-600" },
    { emoji: "🌅", gradient: "from-orange-300 to-red-500" },
    { emoji: "📷", gradient: "from-purple-400 to-indigo-600" },
    { emoji: "👥", gradient: "from-sky-400 to-blue-600" },
    { emoji: "🎋", gradient: "from-teal-400 to-cyan-600" },
    { emoji: "🦅", gradient: "from-amber-500 to-orange-700" },
    { emoji: "🏮", gradient: "from-red-400 to-rose-600" },
  ];

  const quickInfo = [
    { icon: DollarSign, label: "Entry Fee", value: place.entryFee },
    { icon: Clock, label: "Timings", value: place.timings },
    { icon: Calendar, label: "Best Time", value: place.bestTimeToVisit },
    { icon: Car, label: "Parking", value: place.parking.split(" - ")[0] },
    { icon: Users, label: "Family", value: place.familyFriendly ? "Yes" : "No" },
    {
      icon: Accessibility,
      label: "Accessible",
      value: place.wheelchairAccessible ? "Yes" : "No",
    },
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const formatNumber = (num: number) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <div
      className="min-h-screen bg-gray-100 relative"
      style={{ paddingBottom: "9rem" }}
    >
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 transition-all duration-300 px-4 py-3 flex items-center justify-between ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          className={`w-9 h-9 rounded-full flex items-center justify-center ${
            scrolled ? "bg-gray-100" : "bg-black/30 backdrop-blur-sm"
          }`}
        >
          <ArrowLeft
            className={`w-5 h-5 ${scrolled ? "text-gray-800" : "text-white"}`}
          />
        </Link>
        <div className="flex items-center gap-2">
          <button
            className={`w-9 h-9 rounded-full flex items-center justify-center ${
              scrolled ? "bg-gray-100" : "bg-black/30 backdrop-blur-sm"
            }`}
          >
            <Share2
              className={`w-4 h-4 ${scrolled ? "text-gray-800" : "text-white"}`}
            />
          </button>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`w-9 h-9 rounded-full flex items-center justify-center ${
              scrolled ? "bg-gray-100" : "bg-black/30 backdrop-blur-sm"
            }`}
          >
            <Heart
              className={`w-4 h-4 ${
                isFavorite
                  ? "text-red-500 fill-red-500"
                  : scrolled
                  ? "text-gray-800"
                  : "text-white"
              }`}
            />
          </button>
        </div>
      </header>

      <div className="max-w-[480px] mx-auto">
        {/* Hero Image Carousel */}
        <section className="relative h-[280px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroSlides.map((slide, i) => (
              <div
                key={i}
                className={`min-w-full h-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center`}
              >
                <span className="text-7xl">{slide.emoji}</span>
              </div>
            ))}
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
            <h1 className="text-white text-xl font-bold leading-tight">
              {place.name}
            </h1>
            <p className="text-white/80 text-sm mt-0.5">
              {place.city}, {place.state}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-md px-2 py-0.5">
                <MapPin className="w-3 h-3 text-white/80 mr-1" />
                <span className="text-white text-xs">{place.distance}</span>
              </div>
              <div className="flex items-center bg-green-500 rounded-md px-2 py-0.5">
                <Star className="w-3 h-3 text-white fill-white mr-1" />
                <span className="text-white text-xs font-semibold">
                  {place.rating}
                </span>
              </div>
              <div
                className={`rounded-md px-2 py-0.5 text-xs font-medium ${
                  place.isOpen
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {place.isOpen ? "Open" : "Closed"}
              </div>
            </div>
            <Link
              href={`https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 bg-white text-[#0056b3] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </Link>
          </div>
          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentSlide ? "bg-white w-4" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Quick Information Grid */}
        <section className="mx-3 mt-3 bg-white rounded-2xl p-4 shadow-sm">
          <div className="grid grid-cols-3 gap-3">
            {quickInfo.map((info, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#E0F2FE] flex items-center justify-center mb-1.5">
                  <info.icon className="w-4.5 h-4.5 text-[#0056b3]" />
                </div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wide">
                  {info.label}
                </span>
                <span className="text-xs font-semibold text-gray-800 mt-0.5 leading-tight">
                  {info.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="mx-3 mt-3 bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="text-sm font-bold text-gray-800 mb-2">About</h2>
          <p
            className={`text-xs text-gray-600 leading-relaxed ${
              !readMore ? "line-clamp-3" : ""
            }`}
          >
            {place.shortDescription}
          </p>
          <button
            onClick={() => setReadMore(!readMore)}
            className="text-[#0056b3] text-xs font-semibold mt-2 flex items-center gap-0.5"
          >
            {readMore ? "Show Less" : "Read More"}
            <ChevronRight
              className={`w-3 h-3 transition-transform ${
                readMore ? "rotate-90" : ""
              }`}
            />
          </button>
        </section>

        {/* Explore Nearby */}
        <section className="mx-3 mt-4">
          <h2 className="text-sm font-bold text-gray-800 mb-3 px-1">
            Explore Nearby
          </h2>
          <div className="grid grid-cols-3 gap-2.5">
            {place.nearbyCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/explore?category=${cat.slug}&location=${encodeURIComponent(place.name)}&radius=5&lat=${place.lat}&lng=${place.lng}`}
                className="bg-white rounded-xl p-3 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-2"
                  style={{ backgroundColor: cat.bg }}
                >
                  {cat.icon}
                </div>
                <span className="text-[11px] font-semibold text-gray-800">
                  {cat.label}
                </span>
                <span className="text-[10px] text-gray-400 mt-0.5">
                  {cat.count} Places
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Nearby */}
        {featuredBusinesses.length > 0 && (
          <section className="mt-5">
            <div className="flex items-center justify-between px-4 mb-3">
              <h2 className="text-sm font-bold text-gray-800">
                Featured Nearby
              </h2>
              <Link
                href={`/explore?location=${encodeURIComponent(place.name)}&lat=${place.lat}&lng=${place.lng}`}
                className="text-[#0056b3] text-xs font-semibold flex items-center gap-0.5"
              >
                See All <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="flex gap-3 overflow-x-auto px-4 pb-2 no-scrollbar">
              {featuredBusinesses.map((biz) => (
                <Link
                  key={biz.id}
                  href={`/store/${biz.id}`}
                  className="min-w-[200px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex-shrink-0"
                >
                  <div
                    className={`h-24 bg-gradient-to-br ${biz.coverGradient} flex items-center justify-center relative`}
                  >
                    <span className="text-4xl">{biz.logoEmoji}</span>
                    <span className="absolute top-2 left-2 bg-yellow-400 text-[9px] font-bold text-yellow-900 px-1.5 py-0.5 rounded-md">
                      ⭐ Featured
                    </span>
                    <span
                      className={`absolute top-2 right-2 text-[9px] font-semibold px-1.5 py-0.5 rounded-md ${
                        biz.isOpen
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {biz.isOpen ? "Open" : "Closed"}
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs font-bold text-gray-800 truncate">
                      {biz.name}
                    </h3>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      {biz.category} · {biz.area}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs font-bold text-gray-800">
                          {biz.rating}
                        </span>
                        <span className="text-[10px] text-gray-400">
                          ({formatNumber(biz.totalRatings)})
                        </span>
                      </div>
                      <div className="flex items-center gap-0.5 text-[10px] text-gray-400">
                        <MapPin className="w-3 h-3" />
                        {biz.distance}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Gallery */}
        <section className="mt-5">
          <h2 className="text-sm font-bold text-gray-800 mb-3 px-4">
            Gallery
          </h2>
          <div className="flex gap-2.5 overflow-x-auto px-4 pb-2 no-scrollbar">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`min-w-[140px] h-[100px] rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}
              >
                <span className="text-4xl">{item.emoji}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="mx-3 mt-5">
          <h2 className="text-sm font-bold text-gray-800 mb-3 px-1">
            Reviews
          </h2>
          {/* Rating Summary */}
          <div className="bg-white rounded-2xl p-4 shadow-sm mb-3">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">
                  {place.rating}
                </div>
                <div className="flex items-center gap-0.5 mt-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`w-3 h-3 ${
                        s <= Math.round(place.rating)
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-[10px] text-gray-400 mt-1">
                  {formatNumber(place.totalRatings)} ratings
                </p>
              </div>
              <div className="flex-1 space-y-1.5">
                {ratingDistribution.map((d) => (
                  <div key={d.stars} className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-500 w-3 text-right">
                      {d.stars}
                    </span>
                    <Star className="w-2.5 h-2.5 text-yellow-500 fill-yellow-500" />
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-500 rounded-full"
                        style={{ width: `${d.percentage}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-gray-400 w-8 text-right">
                      {d.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Review Cards */}
          {place.reviews.slice(0, 2).map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-4 shadow-sm mb-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E0F2FE] to-[#BAE6FD] flex items-center justify-center">
                  <span className="text-xs font-bold text-[#0056b3]">
                    {review.avatar}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-gray-800">
                    {review.userName}
                  </h4>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-2.5 h-2.5 ${
                          s <= review.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-[10px] text-gray-400">{review.date}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mt-2.5">
                {review.text}
              </p>
              <button className="mt-2.5 flex items-center gap-1.5 text-[10px] text-gray-400 hover:text-[#0056b3] transition-colors">
                <ThumbsUp className="w-3 h-3" />
                Helpful ({review.helpful})
              </button>
            </div>
          ))}
        </section>

        {/* Map Preview */}
        <section className="mx-3 mt-5">
          <h2 className="text-sm font-bold text-gray-800 mb-3 px-1">
            Location
          </h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="h-[160px] relative bg-gradient-to-br from-[#E0F2FE] to-[#F0F9FF] overflow-hidden">
              {/* Grid Lines */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern
                      id="grid"
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
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              {/* Roads */}
              <div className="absolute top-1/3 left-0 right-0 h-[2px] bg-gray-300/50" />
              <div className="absolute top-0 bottom-0 left-1/3 w-[2px] bg-gray-300/50" />
              <div className="absolute top-2/3 left-0 right-0 h-[3px] bg-yellow-400/40" />
              <div className="absolute top-0 bottom-0 right-1/4 w-[3px] bg-yellow-400/40" />
              {/* Green areas */}
              <div className="absolute top-4 left-8 w-12 h-8 bg-green-200/50 rounded-full" />
              <div className="absolute bottom-8 right-12 w-16 h-6 bg-green-200/40 rounded-full" />
              {/* Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-red-500 rounded-full p-1.5 shadow-lg">
                  <MapPin className="w-4 h-4 text-white fill-white" />
                </div>
                <div className="w-1.5 h-1.5 bg-red-400/60 rounded-full mt-0.5" />
              </div>
              {/* Coordinates */}
              <div className="absolute bottom-2 left-2 bg-white/80 backdrop-blur-sm rounded-md px-2 py-1">
                <span className="text-[9px] text-gray-500 font-mono">
                  {place.lat.toFixed(4)}°N, {place.lng.toFixed(4)}°E
                </span>
              </div>
            </div>
            <div className="p-3">
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
        </section>

        {/* Similar Places */}
        {place.similarPlaces.length > 0 && (
          <section className="mt-5">
            <h2 className="text-sm font-bold text-gray-800 mb-3 px-4">
              Similar Places
            </h2>
            <div className="flex gap-3 overflow-x-auto px-4 pb-2 no-scrollbar">
              {place.similarPlaces.map((sp) => (
                <Link
                  key={sp.id}
                  href={`/tourist/${sp.slug}`}
                  className="min-w-[150px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex-shrink-0"
                >
                  <div className="h-24 bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                    <span className="text-3xl">🏛</span>
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs font-bold text-gray-800 truncate">
                      {sp.name}
                    </h3>
                    <div className="flex items-center justify-between mt-1.5">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs font-semibold text-gray-800">
                          {sp.rating}
                        </span>
                      </div>
                      <span className="text-[10px] text-gray-400">
                        {sp.distance}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom spacer */}
        <div className="h-4" />
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white z-50 border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        {/* CTA Button */}
        <div className="px-4 pt-3 pb-2">
          <Link
            href={`/explore?location=${encodeURIComponent(place.name)}&lat=${place.lat}&lng=${place.lng}`}
            className="w-full flex items-center justify-center gap-2 bg-[#0056b3] text-white text-sm font-bold py-3 rounded-xl hover:bg-[#004494] transition-colors"
          >
            <Navigation className="w-4 h-4" />
            Explore Nearby Businesses
          </Link>
        </div>
        {/* Bottom Nav */}
        <div className="flex items-center justify-around px-2 pt-1 pb-1 border-t border-gray-50">
          <Link
            href="/"
            className="flex flex-col items-center gap-0.5 py-1.5 px-3"
          >
            <Home className="w-5 h-5 text-[#0056b3]" />
            <span className="text-[9px] font-semibold text-[#0056b3]">
              Home
            </span>
          </Link>
          <Link
            href="/"
            className="flex flex-col items-center gap-0.5 py-1.5 px-3"
          >
            <BarChart3 className="w-5 h-5 text-gray-400" />
            <span className="text-[9px] font-medium text-gray-400">Leads</span>
          </Link>
          <Link
            href="/"
            className="flex flex-col items-center gap-0.5 py-1.5 px-3"
          >
            <Briefcase className="w-5 h-5 text-gray-400" />
            <span className="text-[9px] font-medium text-gray-400">B2B</span>
          </Link>
          <Link
            href="/"
            className="flex flex-col items-center gap-0.5 py-1.5 px-3"
          >
            <Newspaper className="w-5 h-5 text-gray-400" />
            <span className="text-[9px] font-medium text-gray-400">News</span>
          </Link>
          <Link
            href="/"
            className="flex flex-col items-center gap-0.5 py-1.5 px-3"
          >
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
            <span className="text-[9px] font-medium text-gray-400">More</span>
          </Link>
        </div>
        {/* Safe Area Spacer */}
        <div className="h-[env(safe-area-inset-bottom)]" />
      </div>

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