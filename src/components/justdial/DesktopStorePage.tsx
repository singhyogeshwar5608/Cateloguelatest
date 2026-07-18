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
  Sparkles,
  TrendingUp,
  Navigation,
  Facebook,
  Instagram,
  Twitter,
  Users,
  FileText,
  QrCode,
  Eye,
  Heart,
  Flame,
} from "lucide-react";
import { StoreData, getBusinessTabs, getBusinessType } from "@/lib/store-data";

interface Props {
  store: StoreData;
  highlightProductId?: string;
}

function parseNum(s: string): number {
  return parseInt(s.replace(/[^0-9]/g, ""), 10) || 0;
}

export default function DesktopStorePage({ store, highlightProductId }: Props) {
  const tabs = getBusinessTabs(store);
  const businessType = getBusinessType(store.category);
  const hasProductsTab = tabs.some(t => t.id === "products");
  const [activeTab, setActiveTab] = useState(highlightProductId && hasProductsTab ? "products" : tabs[0].id);
  const [liked, setLiked] = useState(false);
  const [followed, setFollowed] = useState(false);
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

  const socialIcons: Record<string, React.ReactNode> = {
    facebook: <Facebook className="w-4 h-4" />,
    instagram: <Instagram className="w-4 h-4" />,
    twitter: <Twitter className="w-4 h-4" />,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Nav Bar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-12">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back</span>
            </Link>
            <div className="w-px h-5 bg-gray-200" />
            <span className="text-xs text-gray-400">JustDial &gt; {store.category} &gt; {store.area}</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 transition-colors text-xs font-medium">
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
            <button onClick={() => setBookmarked(!bookmarked)} className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 transition-colors text-xs font-medium">
              <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? "fill-[#e42529] text-[#e42529]" : ""}`} /> Save
            </button>
          </div>
        </div>
      </header>

      {/* Cover Section - Full Width */}
      <div className={`h-56 bg-gradient-to-br ${store.coverColor} relative`}>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-black/5" />
        <div className="max-w-7xl mx-auto px-6 h-full flex items-end pb-0 relative z-10">
          <div className="flex items-end gap-5 -mb-8">
            {/* Logo */}
            <div className="w-24 h-24 rounded-2xl bg-white shadow-xl border-4 border-white flex items-center justify-center text-5xl">
              {store.logoEmoji}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        {/* Store Info Bar */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-2.5">
              <h1 className="text-[26px] font-bold text-gray-900 leading-tight">{store.name}</h1>
              {store.verified && <BadgeCheck className="w-5 h-5 text-[#1D9BF0] flex-shrink-0" />}
            </div>
            <p className="text-sm text-gray-500 mt-1">{store.subCategory}</p>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1.5 bg-green-600 text-white px-2.5 py-1 rounded-lg">
                <Star className="w-3.5 h-3.5 fill-white" />
                <span className="text-sm font-bold">{store.rating}</span>
              </div>
              <span className="text-sm text-gray-400">{store.totalRatings} ratings</span>
              <div className="w-px h-4 bg-gray-200" />
              <span className="text-sm text-gray-500">{store.totalReviews} Reviews</span>
              <div className="w-px h-4 bg-gray-200" />
              <div className="flex items-center gap-1 text-gray-500">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-sm">{store.area}, {store.city}</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">{viewCount >= 1000 ? `${(viewCount / 1000).toFixed(0)}K` : viewCount} views</span>
              </div>
              <div className="w-px h-4 bg-gray-200" />
              <button onClick={toggleLike} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                <span className="relative">
                  <Heart className={`w-4 h-4 ${liked ? "text-red-500 fill-red-500" : "text-gray-400"}`} />
                  <AnimatePresence>
                    {heartBurst && (
                      <motion.span initial={{ scale: 0.5, opacity: 1 }} animate={{ scale: 2.5, opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="absolute inset-0 flex items-center justify-center">
                        <Heart className="w-4 h-4 text-red-400 fill-red-400" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
                <span className="text-xs text-gray-500">{likeCount >= 1000 ? `${(likeCount / 1000).toFixed(1)}K` : likeCount}</span>
              </button>
              <div className="w-px h-4 bg-gray-200" />
              <button onClick={toggleFollow} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                <motion.span animate={followPulse ? { scale: [1, 1.3, 1] } : {}} transition={{ duration: 0.3 }}>
                  <Users className={`w-4 h-4 ${followed ? "text-[#0056b3]" : "text-gray-400"}`} />
                </motion.span>
                <span className="text-xs text-gray-500">{followerCount >= 1000 ? `${(followerCount / 1000).toFixed(1)}K` : followerCount} followers</span>
              </button>
            </div>

            {/* ── Statistics Chips (Desktop) ── */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-1.5 bg-orange-50 border border-orange-100 rounded-full px-3 py-1">
                <Star className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                <span className="text-xs font-bold text-orange-700">{store.rating}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-red-50 border border-red-100 rounded-full px-3 py-1">
                <Heart className="w-3.5 h-3.5 text-red-500" />
                <span className="text-xs font-bold text-red-600">{likeCount >= 1000 ? `${(likeCount / 1000).toFixed(1)}K` : likeCount} Likes</span>
              </div>
              <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-100 rounded-full px-3 py-1">
                <Users className="w-3.5 h-3.5 text-[#0056b3]" />
                <span className="text-xs font-bold text-[#0056b3]">{followerCount >= 1000 ? `${(followerCount / 1000).toFixed(1)}K` : followerCount} Followers</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
                <Eye className="w-3.5 h-3.5 text-gray-500" />
                <span className="text-xs font-bold text-gray-600">{viewCount >= 1000 ? `${(viewCount / 1000).toFixed(0)}K` : viewCount} Views</span>
              </div>
              <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-100 rounded-full px-3 py-1">
                <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-xs font-bold text-amber-700">{store.totalReviews} Reviews</span>
              </div>
              {store.verified && (
                <div className="flex items-center gap-1.5 bg-sky-50 border border-sky-100 rounded-full px-3 py-1">
                  <BadgeCheck className="w-3.5 h-3.5 text-[#1D9BF0]" />
                  <span className="text-xs font-bold text-[#1D9BF0]">Verified Business</span>
                </div>
              )}
            </div>

            {/* ── Action Buttons (Desktop) ── */}
            <div className="flex items-center gap-2 mt-3">
              <motion.button whileTap={{ scale: 0.95 }} onClick={toggleLike} className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 border text-xs font-semibold transition-colors ${liked ? "bg-red-50 border-red-200 text-red-600" : "bg-white border-gray-200 text-gray-500 hover:text-gray-700"}`}>
                <Heart className={`w-3.5 h-3.5 ${liked ? "text-red-500 fill-red-500" : ""}`} />
                {liked ? "Liked" : "Like"}
              </motion.button>
              <motion.button whileTap={{ scale: 0.95 }} onClick={toggleFollow} className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 border text-xs font-semibold transition-colors ${followed ? "bg-[#0056b3]/10 border-[#0056b3]/20 text-[#0056b3]" : "bg-white border-gray-200 text-gray-500 hover:text-gray-700"}`}>
                <Users className={`w-3.5 h-3.5 ${followed ? "text-[#0056b3]" : ""}`} />
                {followed ? "Following" : "Follow"}
              </motion.button>
              <motion.button whileTap={{ scale: 0.95 }} onClick={() => setBookmarked(!bookmarked)} className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 border text-xs font-semibold transition-colors ${bookmarked ? "bg-amber-50 border-amber-200 text-amber-700" : "bg-white border-gray-200 text-gray-500 hover:text-gray-700"}`}>
                <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? "fill-amber-500 text-amber-500" : ""}`} />
                {bookmarked ? "Saved" : "Save"}
              </motion.button>
              <motion.button whileTap={{ scale: 0.95 }} onClick={handleShare} className="flex items-center gap-1.5 rounded-full px-4 py-1.5 border bg-white border-gray-200 text-gray-500 hover:text-gray-700 text-xs font-semibold transition-colors">
                {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Share2 className="w-3.5 h-3.5" />}
                {copied ? "Copied!" : "Share"}
              </motion.button>
            </div>

            {/* ── Trending (Desktop) ── */}
            <div className="mt-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl px-4 py-2.5 border border-orange-100/60 inline-flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-xs text-orange-700 font-semibold"><Flame className="w-3.5 h-3.5" />Trending</span>
              <span className="text-xs text-gray-500 flex items-center gap-1"><Eye className="w-3 h-3" />{Math.floor(viewCount * 0.12)} viewed today</span>
              <span className="text-xs text-gray-500 flex items-center gap-1"><Users className="w-3 h-3" />{Math.floor(followerCount * 0.04)} new followers this week</span>
              <span className="text-xs text-gray-500 flex items-center gap-1"><Heart className="w-3 h-3" />95% recommend</span>
            </div>
          </div>
          {/* CTA Buttons */}
          <div className="flex items-center gap-2.5 flex-shrink-0 ml-6">
            <a href={`tel:${store.phone}`} className="flex items-center gap-2 bg-[#e42529] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-red-600 transition-colors shadow-sm">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <button onClick={() => setShowEnquiry(true)} className="flex items-center gap-2 bg-[#0056b3] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#004494] transition-colors shadow-sm">
              <MessageSquare className="w-4 h-4" /> Send Enquiry
            </button>
            <button className="flex items-center gap-2 bg-white text-gray-700 text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
              <Navigation className="w-4 h-4" /> Directions
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1 min-w-0">

            {/* Tabs */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mb-6 overflow-hidden">
              <div className="flex border-b border-gray-100 px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-3.5 text-sm font-semibold transition-colors relative ${
                      activeTab === tab.id ? "text-[#0056b3]" : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0056b3] rounded-full" />}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {/* OVERVIEW */}
                {activeTab === "overview" && (
                  <>
                    {/* About */}
                    <div className="mb-8">
                      <h2 className="text-lg font-bold text-gray-800 mb-3">About this Business</h2>
                      <p className="text-sm text-gray-600 leading-relaxed">{store.description}</p>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                        <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Timing</p>
                          <p className="text-sm font-semibold text-gray-800">{store.timing}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Experience</p>
                          <p className="text-sm font-semibold text-gray-800">{store.yearsInBusiness} Years</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Phone</p>
                          <p className="text-sm font-semibold text-gray-800">{store.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                        <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Location</p>
                          <p className="text-sm font-semibold text-gray-800">{store.area}</p>
                        </div>
                      </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="mb-8">
                      <h2 className="text-lg font-bold text-gray-800 mb-3">Payment Methods</h2>
                      <div className="flex flex-wrap gap-2">
                        {store.paymentMethods.map((method) => (
                          <div key={method} className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2">
                            <CreditCard className="w-3.5 h-3.5 text-gray-400" />
                            <span className="text-xs font-medium text-gray-600">{method}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-8">
                      <h2 className="text-lg font-bold text-gray-800 mb-3">Amenities & Features</h2>
                      <div className="flex flex-wrap gap-2">
                        {store.amenities.map((amenity) => (
                          <span key={amenity} className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Popular Items Preview — context-aware */}
                    {businessType === "product_store" && store.products.length > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <h2 className="text-lg font-bold text-gray-800">Featured Products</h2>
                          <button onClick={() => setActiveTab("products")} className="text-sm text-[#0056b3] font-medium hover:underline flex items-center gap-1">
                            View All <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {store.products.filter(p => p.badge).slice(0, 4).map((product) => (
                            <Link
                              key={product.id}
                              href={`/product/${product.id}`}
                              className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition-colors group"
                            >
                              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-105 transition-transform">
                                {product.category === "Beverages" ? "🥤" : product.category === "Spices" ? "🌶️" : product.category === "Frozen Food" ? "🧊" : product.category === "Hair Care" ? "💇" : product.category === "Audio" ? "🎧" : product.category === "Mobile Accessories" ? "📱" : product.category === "Supplements" ? "💪" : product.category === "Dental Care" ? "🪥" : product.category === "Skincare" ? "🧴" : product.category === "Makeup" ? "💄" : product.category === "Chargers" ? "⚡" : product.category === "Grocery" ? "🛒" : product.category === "Wearables" ? "⌚" : product.category === "Speakers" ? "🔊" : product.category === "Nutrition" ? "💊" : product.category === "Ayurvedic" ? "🌿" : product.category === "Snacks" ? "🍪" : product.category === "Equipment" ? "🏋️" : product.category === "Dairy" ? "🥛" : product.category === "Instant Food" ? "🍜" : product.category === "Rice" ? "🍚" : "📦"}
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-800 line-clamp-1">{product.name}</p>
                                <p className="text-sm font-bold text-gray-900 mt-0.5">{product.price}</p>
                                {product.originalPrice && (
                                  <p className="text-xs text-gray-400 line-through">{product.originalPrice}</p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    {(businessType === "service_provider" || businessType === "restaurant") && store.services.filter((s) => s.popular).length > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <h2 className="text-lg font-bold text-gray-800">
                            {businessType === "restaurant" ? "Popular Dishes" : "Popular Services"}
                          </h2>
                          <button 
                            onClick={() => setActiveTab(businessType === "restaurant" ? "menu" : "services")} 
                            className="text-sm text-[#0056b3] font-medium hover:underline flex items-center gap-1"
                          >
                            View All <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="space-y-2">
                          {store.services
                            .filter((s) => s.popular)
                            .slice(0, 4)
                            .map((service) => (
                              <div key={service.name} className="flex items-center justify-between bg-gray-50 rounded-xl p-3.5">
                                <div className="flex items-center gap-2.5">
                                  <Sparkles className="w-4 h-4 text-amber-500" />
                                  <span className="text-sm font-medium text-gray-700">{service.name}</span>
                                </div>
                                {service.price && <span className="text-sm font-bold text-gray-800">{service.price}</span>}
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* SERVICES */}
                {(activeTab === "services" || activeTab === "menu") && (
                  <>
                    <div className="flex items-center justify-between mb-5">
                      <h2 className="text-lg font-bold text-gray-800">
                        {activeTab === "menu" ? "Menu & Pricing" : "Services & Price Menu"}
                        <span className="font-normal text-gray-400 ml-2 text-sm">({store.services.length} items)</span>
                      </h2>
                    </div>
                    {/* Popular first */}
                    {store.services.filter((s) => s.popular).length > 0 && (
                      <>
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="w-4 h-4 text-amber-500" />
                          <h3 className="text-sm font-bold text-gray-600">Popular</h3>
                        </div>
                        <div className="space-y-2 mb-6">
                          {store.services
                            .filter((s) => s.popular)
                            .map((service) => (
                              <div key={service.name} className="flex items-center justify-between bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors cursor-pointer">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                                    <Sparkles className="w-4 h-4 text-amber-500" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-gray-800">{service.name}</p>
                                    {service.duration && (
                                      <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                                        <Clock className="w-3 h-3" />{service.duration}
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <div className="text-right">
                                  {service.price ? (
                                    <p className="text-sm font-bold text-gray-800">{service.price}</p>
                                  ) : (
                                    <span className="text-xs text-gray-400">On Request</span>
                                  )}
                                </div>
                              </div>
                            ))}
                        </div>
                      </>
                    )}
                    {/* Other services */}
                    {store.services.filter((s) => !s.popular).length > 0 && (
                      <>
                        <h3 className="text-sm font-bold text-gray-600 mb-3">All Services</h3>
                        <div className="space-y-2">
                          {store.services
                            .filter((s) => !s.popular)
                            .map((service) => (
                              <div key={service.name} className="flex items-center justify-between bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors cursor-pointer">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                    <FileText className="w-4 h-4 text-gray-400" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-gray-700">{service.name}</p>
                                    {service.duration && (
                                      <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                                        <Clock className="w-3 h-3" />{service.duration}
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <div className="text-right">
                                  {service.price ? (
                                    <p className="text-sm font-bold text-gray-800">{service.price}</p>
                                  ) : (
                                    <span className="text-xs text-gray-400">On Request</span>
                                  )}
                                </div>
                              </div>
                            ))}
                        </div>
                      </>
                    )}
                  </>
                )}

                {/* PRODUCTS */}
                {activeTab === "products" && (
                  <div>
                    <h3 className="text-base font-bold text-gray-800 mb-4">Products ({store.products.length})</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {store.products.map((product) => (
                        <Link
                          key={product.id}
                          id={`product-${product.id}`}
                          href={`/product/${product.id}`}
                          className={`bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-all group cursor-pointer ${highlightProductId === product.id ? "border-[#0056b3] ring-2 ring-[#0056b3]/20 shadow-lg" : "border-gray-100"}`}
                        >
                          <div className="h-40 bg-gray-50 flex items-center justify-center relative">
                            <div className="text-5xl group-hover:scale-110 transition-transform">
                              {product.category === "Beverages" ? "🥤" : product.category === "Spices" ? "🌶️" : product.category === "Frozen Food" ? "🧊" : product.category === "Hair Care" ? "💇" : product.category === "Hair Color" ? "🎨" : product.category === "Grocery" ? "🛒" : product.category === "Cooking Oil" ? "🫒" : product.category === "Flour" ? "🌾" : product.category === "Dairy" ? "🥛" : product.category === "Rice" ? "🍚" : product.category === "Instant Food" ? "🍜" : product.category === "Mobile Accessories" ? "📱" : product.category === "Cables" ? "🔌" : product.category === "Audio" ? "🎧" : product.category === "Power Banks" ? "🔋" : product.category === "Snacks" ? "🍪" : product.category === "Supplements" ? "💪" : product.category === "Equipment" ? "🏋️" : product.category === "Accessories" ? "🧤" : product.category === "Makeup" ? "💄" : product.category === "Skincare" ? "🧴" : product.category === "Medical Devices" ? "🩺" : product.category === "Antiseptics" ? "🧴" : product.category === "Dental Care" ? "🪥" : product.category === "Dental Devices" ? "🦷" : product.category === "Nutrition" ? "💊" : product.category === "Ayurvedic" ? "🌿" : product.category === "Pain Relief" ? "💉" : product.category === "Chargers" ? "⚡" : product.category === "Computer Peripherals" ? "⌨️" : product.category === "Wearables" ? "⌚" : product.category === "Speakers" ? "🔊" : product.category === "Storage" ? "💾" : product.category === "Pickles" ? "🥒" : "📦"}
                            </div>
                            {product.badge && (
                              <span className="absolute top-2 left-2 bg-[#e42529] text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                                {product.badge}
                              </span>
                            )}
                            {!product.inStock && (
                              <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                                <span className="text-sm font-bold text-gray-500">Out of Stock</span>
                              </div>
                            )}
                          </div>
                          <div className="p-3">
                            <p className="text-sm font-semibold text-gray-800 line-clamp-2 leading-tight">{product.name}</p>
                            <div className="flex items-center gap-1 mt-1.5">
                              <Star className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                              <span className="text-xs font-bold text-gray-700">{product.rating}</span>
                              <span className="text-[11px] text-gray-400">({product.reviews} reviews)</span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-base font-bold text-gray-900">{product.price}</span>
                              {product.originalPrice && (
                                <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* REVIEWS */}
                {activeTab === "reviews" && (
                  <>
                    {/* Rating Summary */}
                    <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                      <div className="flex items-center gap-8">
                        <div className="text-center">
                          <div className="text-5xl font-bold text-gray-900">{store.rating}</div>
                          <div className="flex items-center gap-0.5 mt-1 justify-center">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} className={`w-4 h-4 ${s <= Math.round(Number(store.rating)) ? "text-orange-500 fill-orange-500" : "text-gray-200"}`} />
                            ))}
                          </div>
                          <p className="text-xs text-gray-400 mt-1">{store.totalRatings} ratings • {store.totalReviews} reviews</p>
                        </div>
                        <div className="flex-1 space-y-1.5">
                          {[5, 4, 3, 2, 1].map((star) => {
                            const pct = star === 5 ? 62 : star === 4 ? 24 : star === 3 ? 8 : star === 2 ? 4 : 2;
                            return (
                              <div key={star} className="flex items-center gap-2">
                                <span className="text-sm text-gray-500 w-4">{star}</span>
                                <Star className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                                <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                  <div className="h-full bg-orange-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
                                </div>
                                <span className="text-sm text-gray-400 w-8 text-right">{pct}%</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Review Cards */}
                    <div className="space-y-4">
                      {store.reviews.map((review) => (
                        <div key={review.id} className="bg-gray-50 rounded-xl p-5">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-sm font-bold text-blue-700">
                              {review.avatar}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-bold text-gray-800">{review.name}</p>
                              <p className="text-xs text-gray-400">{review.date}</p>
                            </div>
                            <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded-md">
                              <Star className="w-3 h-3 fill-white" />
                              <span className="text-xs font-bold">{review.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{review.text}</p>
                          <div className="flex items-center justify-end mt-3">
                            <button
                              onClick={() => handleHelpful(review.id)}
                              className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${
                                helpfulClicked.has(review.id)
                                  ? "bg-blue-100 text-[#0056b3]"
                                  : "bg-white text-gray-400 hover:text-gray-600"
                              }`}
                            >
                              <ThumbsUp className="w-3.5 h-3.5" />
                              Helpful ({review.helpful + (helpfulClicked.has(review.id) ? 1 : 0)})
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Similar Stores */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Similar Stores Nearby</h2>
              <div className="grid grid-cols-3 gap-3">
                {store.similarStores.map((s) => (
                  <Link
                    key={s.id}
                    href={`/store/${s.id}`}
                    className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors group block"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl mb-3 mx-auto">
                      {s.logoEmoji}
                    </div>
                    <div className="flex items-center justify-center gap-1 mb-0.5">
                      <p className="text-xs font-bold text-gray-800 truncate text-center">{s.name}</p>
                      <BadgeCheck className="w-3 h-3 text-[#1D9BF0] flex-shrink-0" />
                    </div>
                    <p className="text-[10px] text-gray-400 text-center">{s.category}</p>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
                      <span className="text-xs font-bold text-gray-700">{s.rating}</span>
                      <span className="text-[10px] text-gray-400">• {s.area}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-[300px] flex-shrink-0 space-y-4">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="text-sm font-bold text-gray-800 mb-4">Contact Information</h3>

              <div className="space-y-3">
                <a href={`tel:${store.phone}`} className="flex items-center gap-3 p-3 bg-red-50 rounded-xl hover:bg-red-100 transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-[#e42529] flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-400">Phone</p>
                    <p className="text-sm font-semibold text-gray-800">{store.phone}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </a>

                {store.phone2 && (
                  <a href={`tel:${store.phone2}`} className="flex items-center gap-3 p-3 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-[#e42529]/80 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400">Alternate Phone</p>
                      <p className="text-sm font-semibold text-gray-800">{store.phone2}</p>
                    </div>
                  </a>
                )}

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-9 h-9 rounded-lg bg-green-500 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-400">Timing</p>
                    <p className="text-sm font-semibold text-gray-800">{store.timing}</p>
                    <p className="text-[10px] text-green-600 font-medium">{store.timingNote}</p>
                  </div>
                  <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-md">Open</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-9 h-9 rounded-lg bg-red-500 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-400">Address</p>
                    <p className="text-xs font-medium text-gray-700 leading-relaxed">{store.address}</p>
                  </div>
                </div>

                {store.email && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-9 h-9 rounded-lg bg-purple-500 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400">Email</p>
                      <p className="text-xs font-medium text-gray-700 truncate">{store.email}</p>
                    </div>
                  </div>
                )}

                {store.website && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400">Website</p>
                      <p className="text-xs font-medium text-gray-700 truncate">{store.website}</p>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-300" />
                  </div>
                )}
              </div>
            </div>

            {/* Quick Enquiry Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="text-sm font-bold text-gray-800 mb-1">Quick Enquiry</h3>
              <p className="text-xs text-gray-400 mb-3">Get a callback from the business</p>
              {enquirySent ? (
                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <p className="text-xs font-bold text-green-700">Enquiry Sent!</p>
                  <p className="text-[10px] text-green-600 mt-0.5">They&apos;ll contact you soon.</p>
                </div>
              ) : (
                <>
                  <textarea
                    value={enquiryText}
                    onChange={(e) => setEnquiryText(e.target.value)}
                    placeholder="I'd like to know about..."
                    className="w-full h-20 text-xs text-gray-700 bg-gray-50 border border-gray-200 rounded-xl p-3 outline-none focus:border-[#0056b3] resize-none placeholder-gray-400 mb-3"
                  />
                  <button
                    onClick={handleSendEnquiry}
                    className="w-full bg-[#0056b3] text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-[#004494] transition-colors"
                  >
                    Send Enquiry
                  </button>
                </>
              )}
            </div>

            {/* Verified Badge */}
            <div className="bg-blue-50 rounded-2xl p-4 flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#0056b3] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-gray-800">JustDial Verified</p>
                <p className="text-[11px] text-gray-500 leading-relaxed mt-0.5">Business identity, address &amp; documents verified by JustDial team.</p>
              </div>
            </div>

            {/* Social Links */}
            {store.socialLinks && store.socialLinks.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="text-sm font-bold text-gray-800 mb-3">Connect</h3>
                <div className="flex items-center gap-2">
                  {store.socialLinks.map((link) => (
                    <button
                      key={link.platform}
                      className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-[#0056b3] hover:border-blue-100 transition-colors"
                    >
                      {socialIcons[link.platform] || <Globe className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}