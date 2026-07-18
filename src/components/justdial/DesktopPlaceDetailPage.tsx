"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  Clock,
  Navigation,
  Share2,
  Bookmark,
  BookmarkCheck,
  Calendar,
  Ticket,
  Car,
  ChevronRight,
  ThumbsUp,
  ArrowLeft,
  Phone,
  ExternalLink,
  Hotel,
  Utensils,
  Coffee,
  ShoppingBag,
  Car as Taxi,
  Building2,
  Fuel,
  Landmark,
} from "lucide-react";
import type { TouristPlace } from "@/lib/tourist-place-data";
import StoreCard from "@/components/justdial/StoreCard";

interface Props {
  place: TouristPlace;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

function formatNumber(num: number): string {
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
}

function getCategoryIcon(label: string) {
  const lower = label.toLowerCase();
  if (lower.includes("hotel") || lower.includes("resort") || lower.includes("stay"))
    return Hotel;
  if (lower.includes("restaurant") || lower.includes("food") || lower.includes("dine"))
    return Utensils;
  if (lower.includes("cafe") || lower.includes("coffee") || lower.includes("bakery"))
    return Coffee;
  if (lower.includes("shop") || lower.includes("mall") || lower.includes("market"))
    return ShoppingBag;
  if (lower.includes("taxi") || lower.includes("cab") || lower.includes("transport"))
    return Taxi;
  if (lower.includes("hospital") || lower.includes("clinic") || lower.includes("medical"))
    return Building2;
  if (lower.includes("fuel") || lower.includes("petrol") || lower.includes("gas"))
    return Fuel;
  if (
    lower.includes("temple") ||
    lower.includes("monument") ||
    lower.includes("museum") ||
    lower.includes("heritage")
  )
    return Landmark;
  return MapPin;
}

export default function DesktopPlaceDetailPage({ place }: Props) {
  const [isSaved, setIsSaved] = useState(false);

  const quickActions = [
    { icon: Navigation, label: "Get Directions" },
    { icon: MapPin, label: "Nearby" },
    { icon: Share2, label: "Share" },
    { icon: Bookmark, label: "Save" },
  ];

  const infoCards = [
    {
      icon: Calendar,
      title: "Best Time to Visit",
      value: place.bestTimeToVisit,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: Clock,
      title: "Opening Hours",
      value: place.timings,
      color: "text-blue-600",
      bg: "bg-blue-50",
      badge: place.isOpen ? "Open Now" : "Closed",
      badgeColor: place.isOpen
        ? "bg-emerald-100 text-emerald-700"
        : "bg-red-100 text-red-700",
    },
    {
      icon: Ticket,
      title: "Entry Fee",
      value: place.entryFee,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      icon: Car,
      title: "Parking",
      value: place.parking,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* ─── Sticky Top Header Bar ─── */}
      <header className="sticky top-0 z-40 bg-white shadow-sm h-16 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
          {/* Left: Back + Breadcrumb */}
          <div className="flex items-center gap-3 min-w-0">
            <Link
              href="/"
              className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Go back to home"
            >
              <ArrowLeft className="w-4 h-4 text-gray-700" />
            </Link>
            <nav className="flex items-center gap-1.5 text-sm text-gray-500 truncate" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#0056b3] transition-colors truncate">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" />
              <Link href="/" className="hover:text-[#0056b3] transition-colors truncate">
                Tourist Places
              </Link>
              <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" />
              <span className="text-gray-900 font-medium truncate">{place.name}</span>
            </nav>
          </div>

          {/* Right: Share + Save */}
          <div className="flex items-center gap-2 flex-shrink-0 ml-4">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: place.name,
                    text: `Check out ${place.name} in ${place.city}, ${place.state}`,
                    url: window.location.href,
                  });
                }
              }}
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Share this place"
            >
              <Share2 className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={() => setIsSaved((s) => !s)}
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label={isSaved ? "Remove from saved" : "Save this place"}
            >
              {isSaved ? (
                <BookmarkCheck className="w-4 h-4 text-[#0056b3]" />
              ) : (
                <Bookmark className="w-4 h-4 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ─── Main Content ─── */}
      <main className="max-w-6xl mx-auto px-6 py-6 w-full flex-1">
        {/* ─── Hero Section ─── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative w-full h-80 rounded-2xl overflow-hidden mb-5"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0056b3] to-[#003d80]" />

          {/* Decorative pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(30deg, transparent 40%, white 40%, white 41%, transparent 41%), linear-gradient(-30deg, transparent 40%, white 40%, white 41%, transparent 41%)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Hero Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            {place.rating > 4.5 && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="absolute top-5 right-5 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5"
              >
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                Verified Place
              </motion.div>
            )}

            <h1 className="text-3xl font-bold text-white mb-3 drop-shadow-sm max-w-2xl">
              {place.name}
            </h1>
            <div className="flex items-center gap-3 text-white/90 text-sm mb-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {place.city}, {place.state}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                {place.rating}
                <span className="text-white/70">
                  ({formatNumber(place.totalRatings)} ratings)
                </span>
              </span>
            </div>
            {place.distance && (
              <span className="text-white/70 text-xs bg-white/10 px-3 py-1 rounded-full">
                {place.distance} away
              </span>
            )}
          </div>
        </motion.section>

        {/* ─── Quick Actions Bar ─── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-wrap gap-3 mb-8"
        >
          {quickActions.map((action, i) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={action.label}
                custom={i}
                variants={fadeInUp}
                className="rounded-xl bg-white shadow-sm hover:shadow-md transition-all flex items-center gap-2 px-5 py-3 text-sm font-medium text-gray-700 hover:text-[#0056b3] group cursor-pointer"
                onClick={() => {
                  if (action.label === "Save") setIsSaved((s) => !s);
                  if (action.label === "Get Directions") {
                    window.open(
                      `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`,
                      "_blank"
                    );
                  }
                  if (action.label === "Share") {
                    if (navigator.share) {
                      navigator.share({
                        title: place.name,
                        text: `Check out ${place.name} in ${place.city}`,
                        url: window.location.href,
                      });
                    }
                  }
                }}
              >
                <Icon className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#0056b3] transition-colors" />
                {action.label === "Save" && isSaved ? "Saved" : action.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* ─── Two-Column Layout ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ─── Main Content Column ─── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* About Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0}
              variants={fadeInUp}
              className="rounded-2xl bg-white shadow-sm p-6"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-3">About</h2>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {place.shortDescription}
              </p>
            </motion.section>

            {/* Info Grid (2x2) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {infoCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    custom={i}
                    variants={fadeInUp}
                    className="rounded-2xl bg-white shadow-sm p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className={`w-5 h-5 ${card.color}`} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">
                          {card.title}
                        </p>
                        <p className="text-sm font-semibold text-gray-900 leading-snug">
                          {card.value}
                        </p>
                        {card.badge && (
                          <span
                            className={`inline-block mt-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-full ${card.badgeColor}`}
                          >
                            {card.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Photo Gallery Placeholder */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0}
              variants={fadeInUp}
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Photos</h2>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="h-40 rounded-xl bg-gray-100 flex flex-col items-center justify-center gap-2 group hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-200 group-hover:bg-gray-300 flex items-center justify-center transition-colors">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">Photos coming soon</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Map Placeholder */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0}
              variants={fadeInUp}
              className="rounded-2xl h-48 bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 hover:border-[#0056b3]/40 transition-colors"
            >
              <MapPin className="w-6 h-6 text-gray-300" />
              <p className="text-sm font-medium text-gray-500">View on Map</p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0056b3] hover:text-[#003d80] transition-colors mt-0.5"
              >
                Open in Google Maps
                <ExternalLink className="w-3 h-3" />
              </a>
            </motion.section>

            {/* Nearby Businesses */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Nearby Businesses</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {place.popularBusinesses.map((business, i) => (
                  <StoreCard
                    key={business.id}
                    name={business.name}
                    category={business.category}
                    rating={business.rating}
                    reviews={business.totalRatings}
                    distance={business.distance}
                    address={business.area}
                    logoEmoji={business.logoEmoji}
                    coverGradient={business.coverGradient}
                    storeId={business.id}
                    isOpen={business.isOpen}
                    variant="desktop"
                    fluid
                    index={i}
                  />
                ))}
              </div>
            </motion.section>

            {/* Reviews */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                Reviews ({formatNumber(place.totalRatings)})
              </h2>
              <div className="flex flex-col gap-3 max-h-[500px] overflow-y-auto pr-1">
                {place.reviews.map((review, i) => (
                  <motion.div
                    key={review.id}
                    custom={i}
                    variants={fadeInUp}
                    className="rounded-2xl bg-white shadow-sm p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center flex-shrink-0 text-sm font-semibold text-gray-600">
                        {review.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-semibold text-gray-900">
                            {review.userName}
                          </h4>
                          <span className="text-[11px] text-gray-400 flex-shrink-0">
                            {review.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-0.5 mt-1">
                          {Array.from({ length: 5 }).map((_, s) => (
                            <Star
                              key={s}
                              className={`w-3.5 h-3.5 ${
                                s < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mt-2">
                          {review.text}
                        </p>
                        <button className="flex items-center gap-1.5 mt-3 text-xs text-gray-400 hover:text-[#0056b3] transition-colors cursor-pointer">
                          <ThumbsUp className="w-3.5 h-3.5" />
                          Helpful ({review.helpful})
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Related Tourist Places */}
            {place.similarPlaces.length > 0 && (
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={staggerContainer}
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Related Tourist Places
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {place.similarPlaces.map((related, i) => (
                    <motion.div
                      key={related.id}
                      custom={i}
                      variants={fadeInUp}
                    >
                      <Link
                        href={`/place/${related.slug}`}
                        className="block rounded-2xl overflow-hidden h-32 relative group cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0056b3] to-[#003d80]" />
                        <div
                          className="absolute inset-0 opacity-[0.06]"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle, white 1px, transparent 1px)",
                            backgroundSize: "20px 20px",
                          }}
                        />
                        <div className="relative z-10 h-full flex flex-col justify-end p-4">
                          <h3 className="text-sm font-semibold text-white group-hover:underline underline-offset-2 truncate">
                            {related.name}
                          </h3>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="flex items-center gap-1 text-[11px] text-white/80">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              {related.rating}
                            </span>
                            <span className="text-[11px] text-white/60">{related.distance}</span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* ─── Sidebar ─── */}
          <aside className="lg:col-span-1 flex flex-col gap-6">
            {/* Place Summary Card (Sticky) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-sm p-5 sticky top-24"
            >
              {/* Place Name & Rating */}
              <h3 className="text-base font-bold text-gray-900 leading-snug">{place.name}</h3>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-bold text-gray-900">{place.rating}</span>
                </div>
                <span className="text-xs text-gray-400">
                  {formatNumber(place.totalRatings)} ratings
                </span>
              </div>

              {/* City / State */}
              <div className="flex items-center gap-1.5 mt-2 text-sm text-gray-600">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                {place.city}, {place.state}
              </div>

              {/* Distance Badge */}
              {place.distance && (
                <div className="mt-2.5">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold bg-blue-50 text-[#0056b3] px-2.5 py-1 rounded-full">
                    <Navigation className="w-3 h-3" />
                    {place.distance}
                  </span>
                </div>
              )}

              {/* Open / Closed Status */}
              <div className="mt-3">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
                    place.isOpen
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      place.isOpen ? "bg-emerald-500" : "bg-red-500"
                    }`}
                  />
                  {place.isOpen ? "Open Now" : "Closed"}
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-2.5 mt-5">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-4 py-2.5 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
                <button
                  onClick={() => {
                    window.open(`tel:+91XXXXXXXXXX`, "_self");
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold px-4 py-2.5 transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </button>
              </div>

              {/* Quick Info */}
              <div className="mt-5 pt-5 border-t border-gray-100 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">Entry Fee</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {place.entryFee}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">Timings</span>
                  <span className="text-sm font-semibold text-gray-900">{place.timings}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">Best Time</span>
                  <span className="text-sm font-semibold text-gray-900 text-right max-w-[60%]">
                    {place.bestTimeToVisit}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Nearby Categories */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Nearby Categories</h2>
              <div className="flex flex-wrap gap-2">
                {place.nearbyCategories.map((cat, i) => {
                  const CatIcon = getCategoryIcon(cat.label);
                  return (
                    <motion.div key={cat.slug} custom={i} variants={fadeInUp}>
                      <Link
                        href={`/explore?category=${cat.slug}`}
                        className="flex items-center gap-2 rounded-xl bg-white shadow-sm hover:shadow-md px-3.5 py-2.5 transition-all group"
                      >
                        <span className="text-base" role="img" aria-label={cat.label}>
                          {cat.icon}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-gray-900 group-hover:text-[#0056b3] transition-colors leading-tight">
                            {cat.label}
                          </span>
                          <span className="text-[11px] text-gray-400">{cat.count} places</span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          </aside>
        </div>
      </main>
    </div>
  );
}