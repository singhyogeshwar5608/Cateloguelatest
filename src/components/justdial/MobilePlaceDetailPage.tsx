"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { TouristPlace } from "@/lib/tourist-place-data";
import StoreCard from "@/components/justdial/StoreCard";
import {
  ArrowLeft, Share2, Bookmark, BookmarkCheck, Star, MapPin, Clock,
  Navigation, Heart, ChevronRight, Calendar, Ticket, Car, X, Phone,
  ThumbsUp, Hotel, Utensils, Coffee, ShoppingBag, Car as Taxi, Building2,
  Fuel, Landmark, Eye, MessageSquare, Send, ChevronDown, Minus, Plus,
  Camera, Globe, Shield, Users, Sun, Moon, CloudRain, Wind,
} from "lucide-react";

export default function MobilePlaceDetailPage({ place }: { place: TouristPlace }) {
  // ─── State ───────────────────────────────────────────────────────
  const [currentSlide, setCurrentSlide] = useState(0);
  const [saved, setSaved] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const touchStartX = useRef(0);
  const touchCurrentX = useRef(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ─── Gradient Carousel Data ─────────────────────────────────────
  const gradients = [
    "from-blue-600 via-blue-700 to-indigo-900",
    "from-emerald-600 via-teal-700 to-cyan-900",
    "from-amber-500 via-orange-600 to-red-800",
  ];

  // ─── Related place gradient colors ───────────────────────────────
  const relatedGradients = [
    "from-violet-500 via-purple-600 to-indigo-700",
    "from-rose-500 via-pink-600 to-fuchsia-700",
    "from-sky-500 via-cyan-600 to-teal-700",
    "from-orange-400 via-amber-500 to-yellow-600",
    "from-emerald-500 via-green-600 to-lime-700",
    "from-red-500 via-rose-600 to-pink-700",
  ];

  // ─── Auto-advance carousel ──────────────────────────────────────
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gradients.length);
    }, 4000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  // ─── Touch swipe handlers ────────────────────────────────────────
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchCurrentX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchCurrentX.current;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setCurrentSlide((prev) => (prev + 1) % gradients.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + gradients.length) % gradients.length);
      }
    }
    // Restart auto-play
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gradients.length);
    }, 4000);
  }, []);

  // ─── Fade-in animation variant ───────────────────────────────────
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-[100dvh] bg-[#F2F2F7] max-w-[480px] mx-auto pb-24 scrollbar-hide">
      {/* ─── 1. STICKY HEADER (glassmorphism) ─────────────────────── */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50"
      >
        <div className="bg-white/80 backdrop-blur-2xl border-b border-black/[0.04] pt-[env(safe-area-inset-top)]">
          <div className="flex items-center justify-between px-2 h-12">
            <Link
              href="/"
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm"
            >
              <ArrowLeft className="w-5 h-5 text-gray-800" />
            </Link>
            <div className="flex items-center gap-1">
              <motion.button
                whileTap={{ scale: 0.88 }}
                className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm"
              >
                <Share2 className="w-[18px] h-[18px] text-gray-700" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.88 }}
                onClick={() => setSaved(!saved)}
                className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm"
              >
                {saved ? (
                  <BookmarkCheck className="w-[18px] h-[18px] text-[#0056b3]" />
                ) : (
                  <Bookmark className="w-[18px] h-[18px] text-gray-700" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ─── 2. HERO IMAGE CAROUSEL ───────────────────────────────── */}
      <div
        className="relative h-[300px] w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`absolute inset-0 bg-gradient-to-br ${gradients[currentSlide]}`}
          >
            {/* Decorative watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="text-white/[0.07] text-[80px] font-black leading-none tracking-tighter text-center px-8">
                {place.name}
              </span>
            </div>
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {gradients.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width: i === currentSlide ? 24 : 6,
                backgroundColor: i === currentSlide ? "#ffffff" : "rgba(255,255,255,0.4)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="h-1.5 rounded-full"
            />
          ))}
        </div>

        {/* Photo count badge */}
        <div className="absolute bottom-4 right-4 z-10 bg-black/40 backdrop-blur-md rounded-full px-2.5 py-1 flex items-center gap-1">
          <Camera className="w-3 h-3 text-white" />
          <span className="text-[11px] text-white font-medium">1/{gradients.length}</span>
        </div>
      </div>

      {/* ─── 3. FLOATING PLACE INFO CARD ──────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
        className="mx-4 -mt-8 relative z-10 bg-white rounded-[24px] p-5 shadow-xl shadow-black/10"
      >
        <h1 className="text-[22px] font-bold text-gray-900 leading-tight">{place.name}</h1>
        <div className="flex items-center gap-1 mt-1.5">
          <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <p className="text-[14px] text-gray-500">
            {place.city}, {place.state}
          </p>
        </div>

        <div className="flex items-center gap-2 mt-3 flex-wrap">
          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-[16px] font-bold text-amber-600">{place.rating}</span>
            <span className="text-[13px] text-gray-400">({place.totalRatings.toLocaleString()})</span>
          </div>
          {/* Verified badge for high ratings */}
          {place.rating > 4.5 && (
            <div className="flex items-center gap-1 bg-blue-50 text-[#0056b3] text-[11px] font-semibold px-2.5 py-1 rounded-full">
              <Shield className="w-3 h-3" />
              <span>Verified</span>
            </div>
          )}
        </div>

        {/* Open / Closed status */}
        <div className="flex items-center gap-1.5 mt-2.5">
          <div className="relative flex items-center justify-center">
            <div
              className={`w-2 h-2 rounded-full ${place.isOpen ? "bg-green-500" : "bg-red-500"}`}
            />
            {place.isOpen && (
              <motion.div
                animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute w-2 h-2 rounded-full bg-green-500"
              />
            )}
          </div>
          <span className={`text-[13px] font-medium ${place.isOpen ? "text-green-600" : "text-red-500"}`}>
            {place.isOpen ? "Open Now" : "Closed"}
          </span>
        </div>
      </motion.div>

      {/* ─── 4. QUICK ACTIONS ─────────────────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        variants={fadeUp}
        className="grid grid-cols-4 gap-2 mx-4 mt-4"
      >
        {[
          { icon: <Navigation className="w-[18px] h-[18px] text-white" />, label: "Direction", bg: "bg-blue-500" },
          { icon: <Heart className="w-[18px] h-[18px] text-white" />, label: "Save", bg: "bg-pink-500" },
          { icon: <Share2 className="w-[18px] h-[18px] text-white" />, label: "Share", bg: "bg-green-500" },
          { icon: <MapPin className="w-[18px] h-[18px] text-white" />, label: "Nearby", bg: "bg-orange-500" },
        ].map((action) => (
          <motion.button
            key={action.label}
            whileTap={{ scale: 0.88 }}
            className="bg-white rounded-[16px] py-3 flex flex-col items-center gap-1.5 shadow-sm active:bg-gray-50 transition-colors"
          >
            <div className={`w-10 h-10 rounded-full ${action.bg} flex items-center justify-center shadow-md`}>
              {action.icon}
            </div>
            <span className="text-[11px] font-medium text-gray-600">{action.label}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* ─── 5. ABOUT PLACE ───────────────────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        variants={fadeUp}
        className="mx-4 mt-5 bg-white rounded-[20px] p-4 shadow-sm"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center">
            <Eye className="w-4 h-4 text-[#0056b3]" />
          </div>
          <h2 className="text-[16px] font-bold text-gray-900">About</h2>
        </div>
        <p className="text-[14px] text-gray-600 leading-relaxed">
          {showFullDesc
            ? place.shortDescription
            : place.shortDescription.length > 160
              ? place.shortDescription.slice(0, 160) + "..."
              : place.shortDescription}
        </p>
        {place.shortDescription.length > 160 && (
          <button
            onClick={() => setShowFullDesc(!showFullDesc)}
            className="text-[13px] font-semibold text-[#0056b3] mt-1.5 flex items-center gap-0.5"
          >
            {showFullDesc ? "Read less" : "Read more"}
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${showFullDesc ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </motion.div>

      {/* ─── 6. INFO GRID (2x2) ───────────────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        variants={fadeUp}
        className="grid grid-cols-2 gap-2.5 mx-4 mt-3"
      >
        {[
          { icon: <Calendar className="w-[18px] h-[18px]" />, label: "Best Time", value: place.bestTimeToVisit, color: "text-emerald-600 bg-emerald-50" },
          { icon: <Clock className="w-[18px] h-[18px]" />, label: "Hours", value: place.timings, color: "text-blue-600 bg-blue-50" },
          { icon: <Ticket className="w-[18px] h-[18px]" />, label: "Entry Fee", value: place.entryFee, color: "text-amber-600 bg-amber-50" },
          { icon: <Car className="w-[18px] h-[18px]" />, label: "Parking", value: place.parking, color: "text-purple-600 bg-purple-50" },
        ].map((item) => (
          <div key={item.label} className="bg-white rounded-[16px] p-3.5 shadow-sm">
            <div className={`w-8 h-8 rounded-xl ${item.color} flex items-center justify-center mb-2`}>
              {item.icon}
            </div>
            <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">{item.label}</p>
            <p className="text-[13px] font-semibold text-gray-800 mt-0.5 leading-snug">{item.value}</p>
          </div>
        ))}
      </motion.div>

      {/* ─── 7. MAP PREVIEW ───────────────────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        variants={fadeUp}
        className="mx-4 mt-5 bg-white rounded-[20px] overflow-hidden shadow-sm"
      >
        <div className="h-[160px] bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center gap-2 relative">
          {/* Decorative map grid lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-0 right-0 h-px bg-blue-300" />
            <div className="absolute top-2/4 left-0 right-0 h-px bg-blue-300" />
            <div className="absolute top-3/4 left-0 right-0 h-px bg-blue-300" />
            <div className="absolute top-0 bottom-0 left-1/4 w-px bg-blue-300" />
            <div className="absolute top-0 bottom-0 left-2/4 w-px bg-blue-300" />
            <div className="absolute top-0 bottom-0 left-3/4 w-px bg-blue-300" />
          </div>
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-blue-400" />
            </div>
            <p className="text-[14px] font-semibold text-blue-700">View on Map</p>
            <p className="text-[12px] text-blue-400">{place.city}, {place.state}</p>
          </div>
        </div>
        <div className="px-4 py-3 border-t border-gray-50">
          <a
            href={`https://www.google.com/maps?q=${place.lat},${place.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-[13px] font-semibold text-[#0056b3] w-full py-2"
          >
            <Navigation className="w-4 h-4" />
            Open in Google Maps
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>

      {/* ─── 8. EXPLORE NEARBY (category pills) ──────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        variants={fadeUp}
        className="mx-4 mt-5"
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[16px] font-bold text-gray-900">Explore Nearby</h2>
          <button className="flex items-center gap-0.5 text-[13px] font-semibold text-[#0056b3]">
            See all <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4">
          {place.nearbyCategories.map((cat) => (
            <motion.div
              whileTap={{ scale: 0.92 }}
              key={cat.slug}
              className="flex-shrink-0 bg-white rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-sm min-w-[120px]"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[20px]"
                style={{ backgroundColor: cat.bg }}
              >
                {cat.icon}
              </div>
              <div>
                <p className="text-[13px] font-semibold text-gray-800">{cat.label}</p>
                <p className="text-[11px] text-gray-400">{cat.count}+ near</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ─── 9. NEARBY BUSINESSES (horizontal cards) ──────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        variants={fadeUp}
        className="mt-5"
      >
        <div className="flex items-center justify-between mx-4 mb-3">
          <h2 className="text-[16px] font-bold text-gray-900">Nearby Businesses</h2>
          <button className="flex items-center gap-0.5 text-[13px] font-semibold text-[#0056b3]">
            See all <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-4 px-4">
          {place.popularBusinesses.map((biz, i) => (
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
              storeId={biz.id}
              isOpen={biz.isOpen}
              variant="mobile"
              index={i}
            />
          ))}
        </div>
      </motion.div>

      {/* ─── 10. REVIEWS & RATINGS ────────────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        variants={fadeUp}
        className="mt-5"
      >
        <div className="flex items-center justify-between mx-4 mb-3">
          <div className="flex items-center gap-2">
            <h2 className="text-[16px] font-bold text-gray-900">Reviews & Ratings</h2>
            <span className="text-[12px] text-gray-400 font-medium">({place.reviews.length})</span>
          </div>
          <button className="flex items-center gap-0.5 text-[13px] font-semibold text-[#0056b3]">
            All reviews <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="flex flex-col gap-3 mx-4">
          {place.reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-[20px] p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-[13px] font-bold flex-shrink-0">
                  {review.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[13px] font-semibold text-gray-900">{review.userName}</h4>
                  <p className="text-[11px] text-gray-400">{review.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i <= review.rating ? "text-amber-500 fill-amber-500" : "text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[13px] text-gray-600 leading-relaxed">{review.text}</p>
              <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-gray-50">
                <ThumbsUp className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-[11px] text-gray-400 font-medium">
                  Helpful ({review.helpful})
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ─── 11. RELATED PLACES (You May Also Like) ──────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        variants={fadeUp}
        className="mt-5"
      >
        <div className="flex items-center justify-between mx-4 mb-3">
          <h2 className="text-[16px] font-bold text-gray-900">You May Also Like</h2>
          <button className="flex items-center gap-0.5 text-[13px] font-semibold text-[#0056b3]">
            See all <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-4 px-4">
          {place.similarPlaces.map((related, idx) => (
            <Link
              key={related.id}
              href={`/place/${related.slug}`}
              className="flex-shrink-0"
            >
              <motion.div
                whileTap={{ scale: 0.96 }}
                className="w-[160px] h-[110px] rounded-[20px] overflow-hidden relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${relatedGradients[idx % relatedGradients.length]}`}
                />
                {/* Decorative circles */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/10" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5" />
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-3">
                  <h4 className="text-[14px] font-bold text-white leading-tight drop-shadow-sm">
                    {related.name}
                  </h4>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                      <span className="text-[12px] font-semibold text-white/90">{related.rating}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <Navigation className="w-2.5 h-2.5 text-white/60" />
                      <span className="text-[11px] text-white/70">{related.distance}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* ─── 12. STICKY BOTTOM CTA BAR ────────────────────────────── */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 bg-white/95 backdrop-blur-2xl border-t border-black/[0.04] px-4 py-3 pb-[calc(12px+env(safe-area-inset-bottom))]"
      >
        <div className="flex gap-3">
          <motion.button
            whileTap={{ scale: 0.96 }}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border-2 border-[#0056b3] text-[#0056b3] text-[14px] font-bold"
          >
            <Navigation className="w-4 h-4" /> Directions
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.96 }}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#0056b3] text-white text-[14px] font-bold shadow-lg shadow-[#0056b3]/20"
          >
            <Phone className="w-4 h-4" /> Book Visit
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}