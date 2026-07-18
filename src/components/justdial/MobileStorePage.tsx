"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  MapPin,
  Phone,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  ChevronRight,
  BadgeCheck,
  Heart,
  Eye,
  ThumbsUp,
  MessageSquare,
  Globe,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Shield,
  Calendar,
  CreditCard,
  Wifi,
  Car,
  Users,
  Sparkles,
  TrendingUp,
  Flame,
} from "lucide-react";
import { StoreData, getBusinessTabs, getBusinessType, getBusinessTypeLabel } from "@/lib/store-data";

interface Props {
  store: StoreData;
  highlightProductId?: string;
}

function parseNum(s: string): number {
  return parseInt(s.replace(/[^0-9]/g, ""), 10) || 0;
}

export default function MobileStorePage({ store, highlightProductId }: Props) {
  const [liked, setLiked] = useState(false);
  const [followed, setFollowed] = useState(false);
  const tabs = getBusinessTabs(store);
  const hasProductsTab = tabs.some(t => t.id === "products");
  const [activeTab, setActiveTab] = useState(highlightProductId && hasProductsTab ? "products" : tabs[0].id);
  const productsSectionRef = useRef<HTMLDivElement>(null);
  const businessType = getBusinessType(store.category);
  const [helpfulClicked, setHelpfulClicked] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [enquiryText, setEnquiryText] = useState("");
  const [enquirySent, setEnquirySent] = useState(false);

  // ── Social Engagement State ──
  const [likeCount, setLikeCount] = useState(() => parseNum(store.likes));
  const [followerCount, setFollowerCount] = useState(() => parseNum(store.followers));
  const [viewCount, setViewCount] = useState(() => parseNum(store.views));
  const [heartBurst, setHeartBurst] = useState(false);
  const [followPulse, setFollowPulse] = useState(false);
  const [saved, setSaved] = useState(false);

  // Auto-increment view count on mount
  useEffect(() => { setViewCount((c) => c + 1); }, []);

  const toggleLike = useCallback(() => {
    setLiked((prev) => {
      if (!prev) { setLikeCount((c) => c + 1); setHeartBurst(true); setTimeout(() => setHeartBurst(false), 400); }
      else { setLikeCount((c) => c - 1); }
      return !prev;
    });
  }, []);

  const toggleFollow = useCallback(() => {
    setFollowed((prev) => {
      if (!prev) { setFollowerCount((c) => c + 1); setFollowPulse(true); setTimeout(() => setFollowPulse(false), 400); }
      else { setFollowerCount((c) => c - 1); }
      return !prev;
    });
  }, []);

  const handleShare = useCallback(() => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({ title: store.name, text: `${store.name} - ${store.category}, ${store.area}`, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [store.name, store.category, store.area]);

  // Auto-scroll to highlighted product
  useEffect(() => {
    if (highlightProductId) {
      const timer = setTimeout(() => {
        const el = document.getElementById(`product-${highlightProductId}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [highlightProductId]);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(store.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleHelpful = (id: string) => {
    setHelpfulClicked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSendEnquiry = () => {
    if (enquiryText.trim()) {
      setEnquirySent(true);
      setEnquiryText("");
      setTimeout(() => {
        setEnquirySent(false);
        setShowEnquiry(false);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 max-w-[480px] mx-auto relative">
      {/* Sticky Top Bar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="flex items-center justify-between px-3 py-2.5">
          <Link href="/" className="flex items-center gap-1.5 text-gray-700 active:scale-95 transition-transform">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-xs font-medium">Back</span>
          </Link>
          <div className="flex items-center gap-3">
            <button onClick={() => setCopied(true)} className="active:scale-95 transition-transform">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
            <button onClick={() => setBookmarked(!bookmarked)} className="active:scale-95 transition-transform">
              <Bookmark className={`w-5 h-5 ${bookmarked ? "fill-[#e42529] text-[#e42529]" : "text-gray-600"}`} />
            </button>
          </div>
        </div>
      </header>

      <main className="pb-20">
        {/* Cover + Logo */}
        <section className="relative">
          <div className={`h-32 bg-gradient-to-br ${store.coverColor}`} />
          <div className="absolute -bottom-8 left-4 w-16 h-16 rounded-2xl bg-white shadow-lg border-2 border-white flex items-center justify-center text-3xl">
            {store.logoEmoji}
          </div>
        </section>

        {/* Store Name + Info */}
        <section className="px-4 pt-11 pb-3">
          <div className="flex items-start gap-1.5">
            <h1 className="text-[16px] font-bold text-gray-900 leading-tight flex-1">{store.name}</h1>
            {store.verified && <BadgeCheck className="w-4.5 h-4.5 text-[#1D9BF0] flex-shrink-0 mt-0.5" />}
          </div>
          <p className="text-[11px] text-gray-500 mt-1">{store.subCategory}</p>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
              <span className="text-sm font-bold text-gray-800">{store.rating}</span>
              <span className="text-[10px] text-gray-400">({store.totalRatings})</span>
            </div>
            <span className="text-[10px] text-gray-300">|</span>
            <div className="flex items-center gap-1">
              <MessageSquare className="w-3 h-3 text-gray-400" />
              <span className="text-[10px] text-gray-500">{store.totalReviews} Reviews</span>
            </div>
          </div>

          {/* ── Business Statistics Chips ── */}
          <div className="flex items-center gap-1.5 mt-3 overflow-x-auto scrollbar-hide pb-0.5">
            <div className="flex items-center gap-1 bg-orange-50 border border-orange-100 rounded-full px-2.5 py-1 shrink-0">
              <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
              <span className="text-[10px] font-bold text-orange-700">{store.rating}</span>
            </div>
            <div className="flex items-center gap-1 bg-red-50 border border-red-100 rounded-full px-2.5 py-1 shrink-0">
              <Heart className="w-3 h-3 text-red-500" />
              <span className="text-[10px] font-bold text-red-600">{likeCount >= 1000 ? `${(likeCount / 1000).toFixed(1)}K` : likeCount}</span>
            </div>
            <div className="flex items-center gap-1 bg-blue-50 border border-blue-100 rounded-full px-2.5 py-1 shrink-0">
              <Users className="w-3 h-3 text-[#0056b3]" />
              <span className="text-[10px] font-bold text-[#0056b3]">{followerCount >= 1000 ? `${(followerCount / 1000).toFixed(1)}K` : followerCount}</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-50 border border-gray-100 rounded-full px-2.5 py-1 shrink-0">
              <Eye className="w-3 h-3 text-gray-500" />
              <span className="text-[10px] font-bold text-gray-600">{viewCount >= 1000 ? `${(viewCount / 1000).toFixed(0)}K` : viewCount}</span>
            </div>
            {store.verified && (
              <div className="flex items-center gap-1 bg-sky-50 border border-sky-100 rounded-full px-2.5 py-1 shrink-0">
                <BadgeCheck className="w-3 h-3 text-[#1D9BF0]" />
                <span className="text-[10px] font-bold text-[#1D9BF0]">Verified</span>
              </div>
            )}
          </div>

          {/* ── Action Buttons: Like / Follow / Save / Share ── */}
          <div className="flex items-center gap-2 mt-3">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={toggleLike}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 border transition-colors text-[11px] font-semibold ${liked ? "bg-red-50 border-red-200 text-red-600" : "bg-gray-50 border-gray-200 text-gray-500"}`}
            >
              <span className="relative">
                <Heart className={`w-3.5 h-3.5 ${liked ? "text-red-500 fill-red-500" : ""}`} />
                <AnimatePresence>
                  {heartBurst && (
                    <motion.span
                      initial={{ scale: 0.5, opacity: 1 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
              {liked ? "Liked" : "Like"}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={toggleFollow}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 border transition-colors text-[11px] font-semibold ${followed ? "bg-[#0056b3]/10 border-[#0056b3]/20 text-[#0056b3]" : "bg-gray-50 border-gray-200 text-gray-500"}`}
            >
              <motion.span animate={followPulse ? { scale: [1, 1.3, 1] } : {}} transition={{ duration: 0.3 }}>
                <Users className={`w-3.5 h-3.5 ${followed ? "text-[#0056b3]" : ""}`} />
              </motion.span>
              {followed ? "Following" : "Follow"}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setSaved(!saved)}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 border transition-colors text-[11px] font-semibold ${saved ? "bg-amber-50 border-amber-200 text-amber-700" : "bg-gray-50 border-gray-200 text-gray-500"}`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${saved ? "fill-amber-500 text-amber-500" : ""}`} />
              {saved ? "Saved" : "Save"}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={handleShare}
              className="flex items-center gap-1.5 rounded-full px-3.5 py-2 border bg-gray-50 border-gray-200 text-gray-500 transition-colors text-[11px] font-semibold"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Share2 className="w-3.5 h-3.5" />}
              {copied ? "Copied" : "Share"}
            </motion.button>
          </div>

          {/* ── Trending in your city ── */}
          <div className="mt-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-3 border border-orange-100/60">
            <div className="flex items-center gap-1.5 mb-2">
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              <span className="text-[10px] font-bold text-orange-700">Trending in your city</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[9px] text-gray-500 flex items-center gap-1"><Eye className="w-2.5 h-2.5" />{Math.floor(viewCount * 0.12)} people viewed today</span>
              <span className="text-[9px] text-gray-300">|</span>
              <span className="text-[9px] text-gray-500 flex items-center gap-1"><Users className="w-2.5 h-2.5" />{Math.floor(followerCount * 0.04)} new followers this week</span>
              <span className="text-[9px] text-gray-300">|</span>
              <span className="text-[9px] text-gray-500 flex items-center gap-1"><Heart className="w-2.5 h-2.5" />95% recommend</span>
            </div>
          </div>
        </section>

        {/* Quick Action Buttons */}
        <section className="px-4 pb-3">
          <div className="flex items-center gap-2">
            <a href={`tel:${store.phone}`} className="flex-1 flex items-center justify-center gap-1.5 bg-[#e42529] text-white text-[11px] font-bold py-2.5 rounded-lg active:scale-95 transition-transform">
              <Phone className="w-3.5 h-3.5" /> Call Now
            </a>
            <button onClick={() => setShowEnquiry(true)} className="flex-1 flex items-center justify-center gap-1.5 bg-[#0056b3] text-white text-[11px] font-bold py-2.5 rounded-lg active:scale-95 transition-transform">
              <MessageSquare className="w-3.5 h-3.5" /> Enquiry
            </button>
            <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg active:scale-95 transition-transform">
              <MapPin className="w-4 h-4 text-gray-600" />
            </button>
            {store.website && (
              <a href={store.website} className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg active:scale-95 transition-transform">
                <Globe className="w-4 h-4 text-gray-600" />
              </a>
            )}
          </div>
        </section>

        {/* Tabs */}
        <section className="px-4">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2.5 text-[11px] font-bold tracking-wide transition-colors ${
                  activeTab === tab.id
                    ? "text-[#0056b3] border-b-2 border-[#0056b3]"
                    : "text-gray-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <>
            {/* About */}
            <section className="px-4 py-4">
              <h2 className="text-[13px] font-bold text-gray-800 mb-2">About</h2>
              <p className="text-[11px] text-gray-600 leading-relaxed">{store.description}</p>
            </section>

            {/* Info Cards */}
            <section className="px-4 pb-4 space-y-2.5">
              {/* Timing */}
              <div className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4.5 h-4.5 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-gray-800">{store.timing}</p>
                  <p className="text-[9px] text-gray-400">{store.timingNote}</p>
                </div>
                <span className="text-[9px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-md">Open Now</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4.5 h-4.5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-gray-800">{store.phone}</p>
                  {store.phone2 && <p className="text-[9px] text-gray-400">{store.phone2}</p>}
                </div>
                <button onClick={handleCopyPhone} className="text-[9px] text-[#0056b3] font-medium flex items-center gap-0.5">
                  {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              {/* Address */}
              <div className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4.5 h-4.5 text-red-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-gray-800">{store.address}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300" />
              </div>

              {/* Years */}
              <div className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4.5 h-4.5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-bold text-gray-800">{store.yearsInBusiness} Years in Business</p>
                </div>
              </div>

              {/* Email */}
              {store.email && (
                <div className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4.5 h-4.5 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-bold text-gray-800">{store.email}</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-300" />
                </div>
              )}
            </section>

            {/* Payment Methods */}
            <section className="px-4 pb-4">
              <h2 className="text-[13px] font-bold text-gray-800 mb-2">Payment Methods</h2>
              <div className="flex flex-wrap gap-2">
                {store.paymentMethods.map((method) => (
                  <div key={method} className="flex items-center gap-1.5 bg-white border border-gray-100 rounded-lg px-2.5 py-1.5">
                    <CreditCard className="w-3 h-3 text-gray-400" />
                    <span className="text-[10px] font-medium text-gray-600">{method}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Amenities */}
            <section className="px-4 pb-4">
              <h2 className="text-[13px] font-bold text-gray-800 mb-2">Amenities</h2>
              <div className="flex flex-wrap gap-2">
                {store.amenities.map((amenity) => (
                  <span key={amenity} className="text-[10px] font-medium text-gray-600 bg-gray-100 rounded-lg px-2.5 py-1.5">
                    {amenity}
                  </span>
                ))}
              </div>
            </section>

            {/* Popular Items Preview - context aware */}
            {businessType === "product_store" && store.products.length > 0 && (
              <section className="px-4 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-[13px] font-bold text-gray-800">Featured Products</h2>
                  <button onClick={() => setActiveTab("products")} className="text-[10px] text-[#0056b3] font-medium flex items-center gap-0.5">
                    View All <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {store.products.filter(p => p.badge).slice(0, 4).map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      className="flex items-center gap-2 bg-white rounded-lg p-2.5 border border-gray-100"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-lg flex-shrink-0">
                        {product.category === "Beverages" ? "\u{1F964}" : product.category === "Spices" ? "\u{1F336}\u{FE0F}" : product.category === "Frozen Food" ? "\u{1F9CA}" : product.category === "Hair Care" ? "\u{1F9B4}" : product.category === "Audio" ? "\u{1F3A7}" : product.category === "Mobile Accessories" ? "\u{1F4F1}" : product.category === "Supplements" ? "\u{1F4AA}" : product.category === "Dental Care" ? "\u{1FAA5}" : product.category === "Skincare" ? "\u{1F9F4}" : product.category === "Makeup" ? "\u{1F484}" : product.category === "Chargers" ? "\u26A1" : product.category === "Grocery" ? "\u{1F6D2}" : product.category === "Wearables" ? "\u231A" : product.category === "Speakers" ? "\u{1F50A}" : product.category === "Nutrition" ? "\u{1F48A}" : product.category === "Ayurvedic" ? "\u{1F33F}" : product.category === "Snacks" ? "\u{1F36A}" : product.category === "Equipment" ? "\u{1F3CB}\u{FE0F}" : product.category === "Dairy" ? "\u{1F95B}" : product.category === "Instant Food" ? "\u{1F35C}" : product.category === "Rice" ? "\u{1F35A}" : "\u{1F4E6}"}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-semibold text-gray-800 line-clamp-1">{product.name}</p>
                        <p className="text-[10px] font-bold text-gray-900">{product.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
            {(businessType === "service_provider" || businessType === "restaurant") && store.services.filter((s) => s.popular).length > 0 && (
              <section className="px-4 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-[13px] font-bold text-gray-800">
                    {businessType === "restaurant" ? "Popular Dishes" : "Popular Services"}
                  </h2>
                  <button 
                    onClick={() => setActiveTab(businessType === "restaurant" ? "menu" : "services")} 
                    className="text-[10px] text-[#0056b3] font-medium flex items-center gap-0.5"
                  >
                    View All <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                <div className="space-y-1.5">
                  {store.services
                    .filter((s) => s.popular)
                    .slice(0, 3)
                    .map((service) => (
                      <div key={service.name} className="flex items-center justify-between bg-white rounded-lg p-2.5 border border-gray-100">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                          <span className="text-[11px] font-medium text-gray-700">{service.name}</span>
                        </div>
                        {service.price && <span className="text-[11px] font-bold text-gray-800">{service.price}</span>}
                      </div>
                    ))}
                </div>
              </section>
            )}

            {/* Rating Distribution */}
            <section className="px-4 pb-4">
              <h2 className="text-[13px] font-bold text-gray-800 mb-2">Rating Summary</h2>
              <div className="bg-white rounded-xl p-3 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">{store.rating}</div>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-3 h-3 ${s <= Math.round(Number(store.rating)) ? "text-orange-500 fill-orange-500" : "text-gray-200"}`}
                        />
                      ))}
                    </div>
                    <p className="text-[9px] text-gray-400 mt-0.5">{store.totalRatings} ratings</p>
                  </div>
                  <div className="flex-1 space-y-1">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const pct = star === 5 ? 62 : star === 4 ? 24 : star === 3 ? 8 : star === 2 ? 4 : 2;
                      return (
                        <div key={star} className="flex items-center gap-1.5">
                          <span className="text-[9px] text-gray-500 w-3">{star}</span>
                          <Star className="w-2.5 h-2.5 text-orange-500 fill-orange-500" />
                          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500 rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="text-[9px] text-gray-400 w-6 text-right">{pct}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* SERVICES TAB */}
        {(activeTab === "services" || activeTab === "menu") && (
          <section className="px-4 py-4">
            <h2 className="text-[13px] font-bold text-gray-800 mb-3">
              {activeTab === "menu" ? "Menu & Pricing" : "Services & Price Menu"}
              {store.services.filter((s) => s.price).length > 0 && (
                <span className="font-normal text-gray-400 ml-1">({store.services.length} items)</span>
              )}
            </h2>
            <div className="space-y-2">
              {store.services.map((service) => (
                <div key={service.name} className="flex items-center justify-between bg-white rounded-xl p-3 border border-gray-100 active:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2.5 flex-1 min-w-0">
                    {service.popular && (
                      <div className="w-5 h-5 rounded bg-amber-50 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-3 h-3 text-amber-500" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-gray-800 truncate">{service.name}</p>
                      {service.duration && (
                        <p className="text-[9px] text-gray-400 flex items-center gap-0.5 mt-0.5">
                          <Clock className="w-2.5 h-2.5" />{service.duration}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-2">
                    {service.price ? (
                      <p className="text-[11px] font-bold text-gray-800">{service.price}</p>
                    ) : (
                      <span className="text-[9px] text-gray-400">On Request</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PRODUCTS TAB */}
        {activeTab === "products" && (
          <section ref={productsSectionRef} className="px-4 py-4">
            <h2 className="text-[13px] font-bold text-gray-800 mb-3">
              Products ({store.products.length})
            </h2>
            <div className="grid grid-cols-2 gap-2.5">
              {store.products.map((product) => (
                <Link
                  key={product.id}
                  id={`product-${product.id}`}
                  href={`/product/${product.id}`}
                  className={`bg-white rounded-xl border overflow-hidden active:scale-95 transition-all block ${highlightProductId === product.id ? "border-[#0056b3] ring-2 ring-[#0056b3]/20 shadow-md" : "border-gray-100"}`}
                >
                  <div className="h-28 bg-gray-100 flex items-center justify-center relative">
                    <div className="text-4xl">
                      {product.category === "Beverages" ? "🥤" : product.category === "Spices" ? "🌶️" : product.category === "Frozen Food" ? "🧊" : product.category === "Hair Care" ? "💇" : product.category === "Hair Color" ? "🎨" : product.category === "Grocery" ? "🛒" : product.category === "Cooking Oil" ? "🫒" : product.category === "Flour" ? "🌾" : product.category === "Dairy" ? "🥛" : product.category === "Rice" ? "🍚" : product.category === "Instant Food" ? "🍜" : product.category === "Mobile Accessories" ? "📱" : product.category === "Cables" ? "🔌" : product.category === "Audio" ? "🎧" : product.category === "Power Banks" ? "🔋" : product.category === "Snacks" ? "🍪" : product.category === "Supplements" ? "💪" : product.category === "Equipment" ? "🏋️" : product.category === "Accessories" ? "🧤" : product.category === "Makeup" ? "💄" : product.category === "Skincare" ? "🧴" : product.category === "Medical Devices" ? "🩺" : product.category === "Antiseptics" ? "🧴" : product.category === "Dental Care" ? "🪥" : product.category === "Dental Devices" ? "🦷" : product.category === "Nutrition" ? "💊" : product.category === "Ayurvedic" ? "🌿" : product.category === "Pain Relief" ? "💉" : product.category === "Chargers" ? "⚡" : product.category === "Computer Peripherals" ? "⌨️" : product.category === "Wearables" ? "⌚" : product.category === "Speakers" ? "🔊" : product.category === "Storage" ? "💾" : product.category === "Pickles" ? "🥒" : "📦"}
                    </div>
                    {product.badge && (
                      <span className="absolute top-1.5 left-1.5 bg-[#e42529] text-white text-[7px] font-bold px-1.5 py-0.5 rounded-md">
                        {product.badge}
                      </span>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-gray-500">Out of Stock</span>
                      </div>
                    )}
                  </div>
                  <div className="p-2.5">
                    <p className="text-[10px] font-semibold text-gray-800 line-clamp-2 leading-tight">{product.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-2.5 h-2.5 text-orange-500 fill-orange-500" />
                      <span className="text-[9px] font-bold text-gray-700">{product.rating}</span>
                      <span className="text-[8px] text-gray-400">({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <span className="text-[11px] font-bold text-gray-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-[9px] text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* REVIEWS TAB */}
        {activeTab === "reviews" && (
          <section className="px-4 py-4">
            {/* Rating Summary */}
            <div className="bg-white rounded-xl p-3 border border-gray-100 mb-4">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{store.rating}</div>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className={`w-3 h-3 ${s <= Math.round(Number(store.rating)) ? "text-orange-500 fill-orange-500" : "text-gray-200"}`} />
                    ))}
                  </div>
                  <p className="text-[9px] text-gray-400 mt-0.5">{store.totalReviews} reviews</p>
                </div>
                <div className="flex-1 space-y-1">
                  {[5, 4, 3, 2, 1].map((star) => {
                    const pct = star === 5 ? 62 : star === 4 ? 24 : star === 3 ? 8 : star === 2 ? 4 : 2;
                    return (
                      <div key={star} className="flex items-center gap-1.5">
                        <span className="text-[9px] text-gray-500 w-3">{star}</span>
                        <Star className="w-2.5 h-2.5 text-orange-500 fill-orange-500" />
                        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500 rounded-full" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="text-[9px] text-gray-400 w-6 text-right">{pct}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Review Cards */}
            <div className="space-y-3">
              {store.reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-xl p-3 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-[10px] font-bold text-blue-700">
                      {review.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold text-gray-800">{review.name}</p>
                      <p className="text-[9px] text-gray-400">{review.date}</p>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
                      <span className="text-[10px] font-bold text-gray-700">{review.rating}</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-600 leading-relaxed">{review.text}</p>
                  <div className="flex items-center justify-end mt-2">
                    <button
                      onClick={() => handleHelpful(review.id)}
                      className={`flex items-center gap-1 text-[9px] font-medium px-2 py-1 rounded-md transition-colors ${
                        helpfulClicked.has(review.id)
                          ? "bg-blue-50 text-[#0056b3]"
                          : "bg-gray-50 text-gray-400"
                      }`}
                    >
                      <ThumbsUp className="w-3 h-3" />
                      Helpful ({review.helpful + (helpfulClicked.has(review.id) ? 1 : 0)})
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Similar Stores */}
        <section className="px-4 py-4">
          <h2 className="text-[13px] font-bold text-gray-800 mb-3">Similar Stores Nearby</h2>
          <div className="space-y-2">
            {store.similarStores.map((s) => (
              <Link
                key={s.id}
                href={`/store/${s.id}`}
                className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 active:bg-gray-50 transition-colors block"
              >
                <div className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center text-xl flex-shrink-0">
                  {s.logoEmoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <p className="text-[11px] font-bold text-gray-800 truncate">{s.name}</p>
                    <BadgeCheck className="w-3 h-3 text-[#1D9BF0] flex-shrink-0" />
                  </div>
                  <p className="text-[9px] text-gray-400">{s.category} • {s.area}</p>
                </div>
                <div className="flex items-center gap-0.5 flex-shrink-0">
                  <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
                  <span className="text-[10px] font-bold text-gray-700">{s.rating}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Verified Badge Section */}
        <section className="px-4 pb-6">
          <div className="bg-blue-50 rounded-xl p-3 flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[#0056b3] flex-shrink-0" />
            <div>
              <p className="text-[10px] font-bold text-gray-800">Verified Business</p>
              <p className="text-[9px] text-gray-500">This business is verified by JustDial. ID &amp; documents verified.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Enquiry Bottom Sheet */}
      {showEnquiry && (
        <div className="fixed inset-0 z-[60] bg-black/40" onClick={() => setShowEnquiry(false)}>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white rounded-t-2xl p-4" onClick={(e) => e.stopPropagation()}>
            <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4" />
            <h3 className="text-[14px] font-bold text-gray-800 mb-1">Send Enquiry to {store.name}</h3>
            <p className="text-[10px] text-gray-400 mb-3">We&apos;ll share your enquiry with the business</p>
            {enquirySent ? (
              <div className="bg-green-50 rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">✅</div>
                <p className="text-[12px] font-bold text-green-700">Enquiry Sent Successfully!</p>
                <p className="text-[10px] text-green-600">The business will contact you soon.</p>
              </div>
            ) : (
              <>
                <textarea
                  value={enquiryText}
                  onChange={(e) => setEnquiryText(e.target.value)}
                  placeholder="Hi, I'd like to know more about..."
                  className="w-full h-24 text-[11px] text-gray-700 bg-gray-50 border border-gray-200 rounded-xl p-3 outline-none focus:border-[#0056b3] resize-none placeholder-gray-400"
                />
                <button
                  onClick={handleSendEnquiry}
                  className="w-full bg-[#0056b3] text-white text-[12px] font-bold py-2.5 rounded-xl mt-2 active:scale-[0.98] transition-transform"
                >
                  Send Enquiry
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white border-t border-gray-100 z-50 p-3">
        <div className="flex items-center gap-2">
          <a href={`tel:${store.phone}`} className="flex-1 flex items-center justify-center gap-1.5 bg-[#e42529] text-white text-[12px] font-bold py-2.5 rounded-xl active:scale-95 transition-transform">
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <button onClick={() => setShowEnquiry(true)} className="flex-1 flex items-center justify-center gap-1.5 bg-[#0056b3] text-white text-[12px] font-bold py-2.5 rounded-xl active:scale-95 transition-transform">
            <MessageSquare className="w-4 h-4" /> Send Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}