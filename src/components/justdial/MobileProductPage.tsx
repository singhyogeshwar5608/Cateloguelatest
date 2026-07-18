"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  ArrowLeft,
  Share2,
  Heart,
  Truck,
  RotateCcw,
  Shield,
  ChevronRight,
  BadgeCheck,
  MapPin,
  Phone,
  CheckCircle,
  ShoppingCart,
  MessageCircle,
} from "lucide-react";
import { ProductDetail } from "@/lib/product-data";
import { getStoreById } from "@/lib/store-data";

interface Props {
  product: ProductDetail;
}

const categoryEmojiMap: Record<string, string> = {
  Beverages: "\uD83E\uDD64",
  Spices: "\uD83C\uDF36\uFE0F",
  "Frozen Food": "\uD83E\uDDCA",
  "Hair Care": "\uD83D\uDC87",
  "Hair Color": "\uD83C\uDFA8",
  Grocery: "\uD83D\uDED2",
  "Cooking Oil": "\uD83E\uDDC5",
  Flour: "\uD83C\uDF3E",
  Dairy: "\uD83E\uDD5B",
  Rice: "\uD83C\uDF5A",
  "Instant Food": "\uD83C\uDF5C",
  "Mobile Accessories": "\uD83D\uDCF1",
  Cables: "\uD83D\uDD0C",
  Audio: "\uD83C\uDFA7",
  "Power Banks": "\uD83D\uDD0B",
  Snacks: "\uD83C\uDF6A",
  Supplements: "\uD83D\uDCAA",
  Equipment: "\uD83C\uDFCB\uFE0F",
  Accessories: "\uD83E\uDDE4",
  Makeup: "\uD83D\uDC84",
  Skincare: "\uD83E\uDDF4",
  "Medical Devices": "\uD83E\uDE7A",
  Antiseptics: "\uD83E\uDDF4",
  "Dental Care": "\uD83E\uDEA5",
  "Dental Devices": "\uD83E\uDEB6",
  Nutrition: "\uD83D\uDC8A",
  Ayurvedic: "\uD83C\uDF3F",
  "Pain Relief": "\uD83D\uDC89",
  Chargers: "\u26A1",
  "Computer Peripherals": "\u2328\uFE0F",
  Wearables: "\u231A",
  Speakers: "\uD83D\uDD0A",
  Storage: "\uD83D\uDCBE",
  Pickles: "\uD83E\uDD52",
};

const categoryGradients: Record<string, string> = {
  Ayurvedic: "from-emerald-100 via-green-50 to-teal-50",
  "Pain Relief": "from-sky-100 via-blue-50 to-indigo-50",
  Nutrition: "from-orange-100 via-amber-50 to-yellow-50",
  Grocery: "from-lime-100 via-green-50 to-emerald-50",
  "Cooking Oil": "from-amber-100 via-yellow-50 to-orange-50",
  Flour: "from-orange-50 via-yellow-50 to-lime-50",
  Dairy: "from-blue-100 via-sky-50 to-cyan-50",
  Rice: "from-green-100 via-lime-50 to-emerald-50",
  "Instant Food": "from-red-100 via-orange-50 to-amber-50",
  "Mobile Accessories": "from-slate-200 via-gray-100 to-zinc-100",
  Cables: "from-gray-200 via-slate-100 to-zinc-50",
  Audio: "from-violet-100 via-purple-50 to-fuchsia-50",
  "Power Banks": "from-teal-100 via-green-50 to-emerald-50",
  Snacks: "from-orange-100 via-red-50 to-rose-50",
  Supplements: "from-rose-100 via-pink-50 to-red-50",
  Equipment: "from-indigo-100 via-blue-50 to-sky-50",
  Accessories: "from-pink-100 via-rose-50 to-fuchsia-50",
  Makeup: "from-fuchsia-100 via-pink-50 to-purple-50",
  Skincare: "from-cyan-100 via-teal-50 to-emerald-50",
  Wearables: "from-violet-100 via-indigo-50 to-blue-50",
  Speakers: "from-purple-100 via-violet-50 to-indigo-50",
  Chargers: "from-yellow-100 via-orange-50 to-amber-50",
  "Computer Peripherals": "from-zinc-200 via-slate-100 to-gray-100",
  Spices: "from-red-100 via-orange-50 to-amber-50",
  "Frozen Food": "from-sky-100 via-cyan-50 to-blue-50",
  "Hair Care": "from-purple-100 via-pink-50 to-rose-50",
  "Hair Color": "from-fuchsia-100 via-purple-50 to-violet-50",
  Pickles: "from-emerald-100 via-green-50 to-lime-50",
  Beverages: "from-amber-100 via-yellow-50 to-orange-50",
  "Medical Devices": "from-blue-100 via-sky-50 to-indigo-50",
  Antiseptics: "from-teal-100 via-cyan-50 to-sky-50",
  "Dental Care": "from-cyan-100 via-sky-50 to-blue-50",
  "Dental Devices": "from-indigo-100 via-blue-50 to-slate-50",
};

function getCategoryEmoji(category: string): string {
  return categoryEmojiMap[category] ?? "\uD83D\uDCE6";
}

function parsePrice(priceStr: string): number {
  return parseInt(priceStr.replace(/[^\d]/g, ""), 10) || 0;
}

export default function MobileProductPage({ product }: Props) {
  const [wishlisted, setWishlisted] = useState(false);
  const [liked, setLiked] = useState(false);

  const emoji = getCategoryEmoji(product.category);
  const gradient = categoryGradients[product.category] || "from-gray-100 via-slate-50 to-zinc-50";
  const originalNum = product.originalPrice ? parsePrice(product.originalPrice) : 0;
  const currentNum = parsePrice(product.price);
  const discountPct =
    originalNum > 0 && currentNum > 0
      ? Math.round(((originalNum - currentNum) / originalNum) * 100)
      : 0;

  const storeData = getStoreById(product.storeId);
  const similarProducts = storeData
    ? storeData.products.filter((p) => p.id !== product.id).slice(0, 6)
    : [];

  return (
    <div className="min-h-[100dvh] bg-[#F2F2F7] max-w-[480px] mx-auto relative">
      {/* ── Frosted Glass Header ── */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 bg-white/80 backdrop-blur-2xl border-b border-black/[0.04]"
      >
        <div className="pt-[env(safe-area-inset-top)]">
          <div className="flex items-center justify-between px-3 h-11">
            <Link href="/" className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center active:scale-90 transition-transform">
              <ArrowLeft className="w-[18px] h-[18px] text-gray-800" />
            </Link>
            <span className="text-[13px] font-semibold text-gray-900">Product Details</span>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center active:scale-90 transition-transform">
                <Share2 className="w-4 h-4 text-gray-600" />
              </button>
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center active:scale-90 transition-transform"
              >
                <Heart className={`w-4 h-4 ${wishlisted ? "text-red-500 fill-red-500" : "text-gray-600"}`} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="pt-[calc(env(safe-area-inset-top)+44px)] pb-[calc(env(safe-area-inset-bottom)+72px)]">
        {/* ── Product Hero Image ── */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`relative h-[300px] bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
        >
          {/* Decorative circles */}
          <div className="absolute top-6 right-6 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute bottom-10 left-4 w-24 h-24 rounded-full bg-white/15 blur-xl" />

          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15, stiffness: 120, delay: 0.1 }}
            className="text-[100px] select-none drop-shadow-lg"
          >
            {emoji}
          </motion.span>

          {/* Badges */}
          {product.badge && (
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute top-4 left-4 bg-[#e42529] text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-sm"
            >
              {product.badge}
            </motion.span>
          )}
          {discountPct > 0 && (
            <motion.span
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute top-4 right-4 bg-green-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm"
            >
              {discountPct}% OFF
            </motion.span>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
              <span className="text-white text-sm font-bold bg-black/60 px-5 py-2 rounded-xl backdrop-blur-sm">
                Out of Stock
              </span>
            </div>
          )}
        </motion.section>

        {/* ── Product Info Card (floating up) ── */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="relative -mt-5 mx-3 bg-white rounded-2xl shadow-sm shadow-black/[0.06] p-4 z-10"
        >
          <h1 className="text-[16px] font-bold text-gray-900 leading-snug">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mt-2">
            <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 text-[10px] font-semibold px-2.5 py-1 rounded-full">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <span className="flex items-center gap-0.5 bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                <Star className="w-2.5 h-2.5 fill-white" />
                {product.rating}
              </span>
              <span className="text-[11px] text-gray-400">
                ({product.reviews.toLocaleString()})
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2.5 mt-3">
            <span className="text-[22px] font-extrabold text-gray-900">
              {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-[14px] text-gray-400 line-through">
                {product.originalPrice}
              </span>
            )}
            {discountPct > 0 && (
              <span className="text-[12px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                Save {discountPct}%
              </span>
            )}
          </div>
        </motion.section>

        {/* ── Verified Seller Card ── */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.35 }}
          className="mx-3 mt-2.5"
        >
          <Link
            href={`/store/${product.storeId}`}
            className="flex items-center gap-3 bg-white rounded-2xl shadow-sm shadow-black/[0.06] p-3.5 active:scale-[0.98] transition-transform"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0056b3]/10 to-[#0056b3]/5 flex items-center justify-center text-2xl shrink-0">
              {product.storeEmoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-[13px] font-semibold text-gray-900 truncate">
                  {product.storeName}
                </span>
                <BadgeCheck className="w-3.5 h-3.5 text-[#0056b3] shrink-0" />
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Star className="w-3 h-3 fill-orange-500 text-orange-500" />
                <span className="text-[11px] text-gray-500">{product.storeRating} rating</span>
                {storeData && (
                  <>
                    <span className="text-gray-300">|</span>
                    <MapPin className="w-3 h-3 text-gray-400" />
                    <span className="text-[11px] text-gray-500 truncate">{storeData.area}, {storeData.city}</span>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center gap-0.5 text-[#0056b3] shrink-0">
              <span className="text-[12px] font-semibold">Visit</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
        </motion.section>

        {/* ── Delivery & Trust ── */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.35 }}
          className="mx-3 mt-2.5 bg-white rounded-2xl shadow-sm shadow-black/[0.06] p-4"
        >
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-1.5">
                <Truck className="w-5 h-5 text-[#0056b3]" />
              </div>
              <span className="text-[10px] font-semibold text-gray-800">Delivery</span>
              <span className="text-[9px] text-gray-500 mt-0.5">{product.deliveryEstimate}</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-1.5">
                <RotateCcw className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-[10px] font-semibold text-gray-800">Returns</span>
              <span className="text-[9px] text-gray-500 mt-0.5">{product.returnPolicy}</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-1.5">
                <Shield className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-[10px] font-semibold text-gray-800">Warranty</span>
              <span className="text-[9px] text-gray-500 mt-0.5">{product.warranty}</span>
            </div>
          </div>
        </motion.section>

        {/* ── Highlights ── */}
        {product.highlights.length > 0 && (
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.35 }}
            className="mx-3 mt-2.5 bg-white rounded-2xl shadow-sm shadow-black/[0.06] p-4"
          >
            <h2 className="text-[14px] font-bold text-gray-900 mb-3">Highlights</h2>
            <div className="space-y-2.5">
              {product.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                  </div>
                  <span className="text-[12px] text-gray-700 leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ── Specifications ── */}
        {product.specifications.length > 0 && (
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.35 }}
            className="mx-3 mt-2.5 bg-white rounded-2xl shadow-sm shadow-black/[0.06] overflow-hidden"
          >
            <div className="px-4 pt-4 pb-2">
              <h2 className="text-[14px] font-bold text-gray-900">Specifications</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {product.specifications.map((spec, i) => (
                <div key={i} className="flex px-4 py-2.5">
                  <div className="w-2/5 text-[11px] text-gray-500 font-medium">{spec.label}</div>
                  <div className="w-3/5 text-[12px] text-gray-900 font-medium">{spec.value}</div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ── Description ── */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.35 }}
          className="mx-3 mt-2.5 bg-white rounded-2xl shadow-sm shadow-black/[0.06] p-4"
        >
          <h2 className="text-[14px] font-bold text-gray-900 mb-2">Description</h2>
          <p className="text-[12px] text-gray-600 leading-relaxed">{product.description}</p>
        </motion.section>

        {/* ── Similar Products (Horizontal Scroll) ── */}
        {similarProducts.length > 0 && (
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.35 }}
            className="mt-4 mb-2"
          >
            <div className="flex items-center justify-between px-4 mb-3">
              <h2 className="text-[14px] font-bold text-gray-900">Similar Products</h2>
              {storeData && (
                <Link href={`/store/${product.storeId}`} className="text-[12px] text-[#0056b3] font-semibold flex items-center gap-0.5">
                  View All <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
            <div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-1">
              {similarProducts.map((sp) => {
                const spOrig = sp.originalPrice ? parsePrice(sp.originalPrice) : 0;
                const spCurr = parsePrice(sp.price);
                const spDisc = spOrig > 0 ? Math.round(((spOrig - spCurr) / spOrig) * 100) : 0;
                const spGradient = categoryGradients[sp.category] || "from-gray-100 via-slate-50 to-zinc-50";
                return (
                  <Link
                    key={sp.id}
                    href={`/product/${sp.id}`}
                    className="snap-start flex-shrink-0 w-[140px]"
                  >
                    <motion.div whileTap={{ scale: 0.96 }} className="bg-white rounded-2xl overflow-hidden shadow-sm shadow-black/[0.06]">
                      <div className={`relative h-[100px] bg-gradient-to-br ${spGradient} flex items-center justify-center`}>
                        <span className="text-[40px] select-none">{getCategoryEmoji(sp.category)}</span>
                        {spDisc > 0 && (
                          <span className="absolute top-1.5 left-1.5 bg-[#e42529] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md">
                            {spDisc}% OFF
                          </span>
                        )}
                      </div>
                      <div className="p-2">
                        <p className="text-[10px] font-semibold text-gray-900 line-clamp-2 leading-tight min-h-[26px]">{sp.name}</p>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-[12px] font-bold text-gray-900">{sp.price}</span>
                          {sp.originalPrice && (
                            <span className="text-[9px] text-gray-400 line-through">{sp.originalPrice}</span>
                          )}
                        </div>
                        <div className="flex items-center gap-0.5 mt-0.5">
                          <Star className="w-2.5 h-2.5 fill-orange-500 text-orange-500" />
                          <span className="text-[9px] text-gray-500">{sp.rating}</span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.section>
        )}
      </main>

      {/* ── Premium Fixed Bottom Bar ── */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50">
        <div className="bg-white/90 backdrop-blur-xl border-t border-black/[0.06] px-3 py-2 flex items-center gap-2" style={{ paddingBottom: "max(8px, env(safe-area-inset-bottom))" }}>
          <button className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center active:bg-gray-100 transition-colors shrink-0">
            <MessageCircle className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center active:bg-gray-100 transition-colors shrink-0">
            <Phone className="w-5 h-5 text-gray-600" />
          </button>
          <button
            disabled={!product.inStock}
            className="flex-1 h-11 rounded-xl border-2 border-[#e42529] text-[#e42529] text-[13px] font-bold flex items-center justify-center gap-1.5 active:bg-red-50 transition-colors disabled:opacity-40"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
          <button
            disabled={!product.inStock}
            className="flex-1 h-11 rounded-xl bg-[#e42529] text-white text-[13px] font-bold flex items-center justify-center active:bg-red-700 transition-colors disabled:opacity-40"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}