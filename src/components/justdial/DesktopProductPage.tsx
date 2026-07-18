"use client";

import Link from "next/link";
import {
  Star,
  ArrowLeft,
  Share2,
  Bookmark,
  Heart,
  Truck,
  RotateCcw,
  Shield,
  ChevronRight,
  BadgeCheck,
  MapPin,
  Phone,
  MessageSquare,
  CheckCircle,
  Home,
  ShoppingCart,
  Package,
  ExternalLink,
} from "lucide-react";
import { ProductDetail } from "@/lib/product-data";
import { getStoreById } from "@/lib/store-data";

const categoryEmojiMap: Record<string, string> = {
  Ayurvedic: "🌿",
  "Pain Relief": "💉",
  Nutrition: "💊",
  "Medical Devices": "🩺",
  Antiseptics: "🧴",
  Grocery: "🛒",
  "Cooking Oil": "🫒",
  Flour: "🌾",
  Dairy: "🥛",
  Rice: "🍚",
  "Instant Food": "🍜",
  "Mobile Accessories": "📱",
  Cables: "🔌",
  Audio: "🎧",
  "Power Banks": "🔋",
  Beverages: "🥤",
  Snacks: "🍪",
  Merchandise: "👕",
  Wearables: "⌚",
  Speakers: "🔊",
  Storage: "💾",
  Chargers: "⚡",
  "Computer Peripherals": "⌨️",
  Spices: "🌶️",
  "Frozen Food": "🧊",
  "Hair Care": "💇",
  "Hair Color": "🎨",
  Pickles: "🥒",
  Supplements: "💪",
  Equipment: "🏋️",
  Accessories: "🧤",
  Makeup: "💄",
  Skincare: "🧴",
  "Dental Care": "🪥",
  "Dental Devices": "🦷",
};

function getCategoryEmoji(category: string): string {
  return categoryEmojiMap[category] || "📦";
}

function parsePrice(priceStr: string): number {
  return parseInt(priceStr.replace(/[^\d]/g, ""), 10) || 0;
}

function getDiscount(price: string, originalPrice?: string): string | null {
  if (!originalPrice) return null;
  const p = parsePrice(price);
  const o = parsePrice(originalPrice);
  if (o === 0) return null;
  return `${Math.round(((o - p) / o) * 100)}% off`;
}

interface DesktopProductPageProps {
  product: ProductDetail;
}

export default function DesktopProductPage({ product }: DesktopProductPageProps) {
  const store = getStoreById(product.storeId);
  const similarProducts = store
    ? store.products.filter((p) => p.id !== product.id).slice(0, 4)
    : [];

  const emoji = getCategoryEmoji(product.category);
  const discount = getDiscount(product.price, product.originalPrice);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* ── 1. Top Navigation Bar ─────────────────────────────────── */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#e42529] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link
            href="/"
            className="hover:text-[#e42529] transition-colors"
          >
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link
            href="/"
            className="hover:text-[#e42529] transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-800 font-medium truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>

        {/* ── 2. Main Content ───────────────────────────────────────── */}
        <div className="flex gap-6">
          {/* ── Left Column ─────────────────────────────────────────── */}
          <div className="flex-1 space-y-5">
            {/* A. Product Hero Section */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
              <div className="flex gap-8">
                {/* Product Image Area */}
                <div className="relative w-80 h-80 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-8xl">{emoji}</span>

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#e42529] text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                      {product.badge}
                    </span>
                  )}

                  {/* Out of Stock Overlay */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <h1 className="text-xl font-bold text-gray-900 mb-3">
                      {product.name}
                    </h1>

                    {/* Category Pill */}
                    <span className="inline-block bg-orange-50 text-orange-700 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                      {product.category}
                    </span>

                    {/* Rating Row */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded">
                        <Star className="w-3 h-3 fill-current" />
                        {product.rating}
                      </div>
                      <span className="text-sm text-gray-500">
                        {product.reviews.toLocaleString("en-IN")} reviews
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-2xl font-bold text-gray-900">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through text-base">
                          {product.originalPrice}
                        </span>
                      )}
                      {discount && (
                        <span className="text-[#e42529] font-semibold text-sm">
                          {discount}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#0056b3] text-white font-semibold rounded-lg hover:bg-[#004494] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                    <button
                      className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#e42529] text-white font-semibold rounded-lg hover:bg-[#c91f22] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!product.inStock}
                    >
                      Buy Now
                    </button>
                    <button className="p-2.5 border border-gray-200 rounded-lg text-gray-500 hover:text-[#e42529] hover:border-[#e42529] transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2.5 border border-gray-200 rounded-lg text-gray-500 hover:text-[#0056b3] hover:border-[#0056b3] transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* B. Store Info Card */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center text-3xl shrink-0">
                  {product.storeEmoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {product.storeName}
                    </h3>
                    <BadgeCheck className="w-4 h-4 text-[#0056b3] shrink-0" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-0.5">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                      <span className="font-medium text-gray-700">
                        {product.storeRating}
                      </span>
                    </div>
                    <span>•</span>
                    {store && <span>{store.area}</span>}
                  </div>
                </div>
                <Link
                  href={`/store/${product.storeId}`}
                  className="flex items-center gap-1 text-sm font-medium text-[#0056b3] hover:underline whitespace-nowrap"
                >
                  View Store
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* C. Delivery & Returns */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5">
              <div className="grid grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5 text-[#0056b3]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                      Delivery Estimate
                    </p>
                    <p className="text-sm font-semibold text-gray-900 mt-0.5">
                      {product.deliveryEstimate}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center shrink-0">
                    <RotateCcw className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                      Return Policy
                    </p>
                    <p className="text-sm font-semibold text-gray-900 mt-0.5">
                      {product.returnPolicy}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                      Warranty
                    </p>
                    <p className="text-sm font-semibold text-gray-900 mt-0.5">
                      {product.warranty}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* D. Highlights */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Highlights</h3>
              <ul className="space-y-2.5">
                {product.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4.5 h-4.5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-700">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* E. Specifications Table */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5">
              <h3 className="font-semibold text-gray-900 mb-3">
                Specifications
              </h3>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specifications.map((spec, i) => (
                      <tr
                        key={i}
                        className={
                          i % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }
                      >
                        <td className="px-4 py-3 font-medium text-gray-500 w-1/3 border-r border-gray-200">
                          {spec.label}
                        </td>
                        <td className="px-4 py-3 text-gray-900">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* F. Description */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* ── Right Sidebar ──────────────────────────────────────── */}
          <div className="w-80 space-y-4 shrink-0">
            {/* Contact Store Card */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5">
              <h3 className="font-semibold text-gray-900 mb-4">Contact Store</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#e42529] text-white font-semibold rounded-lg hover:bg-[#c91f22] transition-colors">
                  <Phone className="w-4 h-4" />
                  Call Store
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0056b3] text-white font-semibold rounded-lg hover:bg-[#004494] transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  Message Store
                </button>
              </div>
              {store && (
                <div className="mt-4 flex items-start gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    {store.address}, {store.area}, {store.city}
                  </span>
                </div>
              )}
            </div>

            {/* Similar Products */}
            {similarProducts.length > 0 && (
              <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Similar Products
                </h3>
                <div className="space-y-3">
                  {similarProducts.map((p) => (
                    <Link
                      key={p.id}
                      href={`/product/${p.id}`}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl shrink-0">
                        {getCategoryEmoji(p.category)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {p.name}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-sm font-semibold text-gray-900">
                            {p.price}
                          </span>
                          {p.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">
                              {p.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── 3. Footer Area — Similar Products Grid ────────────────── */}
        {similarProducts.length > 0 && (
          <div className="mt-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-5 h-5 text-gray-700" />
              <h2 className="text-lg font-bold text-gray-900">
                Similar Products
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {similarProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.id}`}
                  className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow"
                >
                  <div className="w-full h-36 bg-gray-100 rounded-lg flex items-center justify-center text-6xl mb-3">
                    {getCategoryEmoji(p.category)}
                  </div>
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {p.name}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-base font-bold text-gray-900">
                      {p.price}
                    </span>
                    {p.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {p.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mt-1.5">
                    <Star className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                    <span className="text-xs text-gray-600">{p.rating}</span>
                    <span className="text-xs text-gray-400">
                      ({p.reviews.toLocaleString("en-IN")})
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}