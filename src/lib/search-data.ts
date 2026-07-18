// ── Search Data Utility ────────────────────────────────────────────
// Aggregates searchable entities from all data sources into a unified
// search index. Used by both mobile and desktop header search.

import { businesses, extendedCategories, getBusinessesByCategory } from "./business-listing-data";
import { storeDatabase } from "./store-data";
import { productDatabase } from "./product-data";
import { touristPlaces } from "./tourist-place-data";
import { categoryLandingData } from "./category-landing-data";
import { serviceCategories } from "./service-category-data";

// ── Types ──────────────────────────────────────────────────────────

export type SuggestionType = "business" | "product" | "service" | "category" | "tourist_place";

export interface SearchSuggestion {
  id: string;
  type: SuggestionType;
  label: string;
  subtitle: string;      // secondary info (area, category, price, etc.)
  emoji: string;          // type icon
  href: string;           // navigation target
  query?: string;         // for services page: ?category=slug
}

// ── Location Data ──────────────────────────────────────────────────

export const popularCities = [
  { name: "Mumbai", state: "Maharashtra" },
  { name: "Delhi", state: "Delhi NCR" },
  { name: "Bangalore", state: "Karnataka" },
  { name: "Hyderabad", state: "Telangana" },
  { name: "Chennai", state: "Tamil Nadu" },
  { name: "Kolkata", state: "West Bengal" },
  { name: "Pune", state: "Maharashtra" },
  { name: "Ahmedabad", state: "Gujarat" },
  { name: "Jaipur", state: "Rajasthan" },
  { name: "Lucknow", state: "Uttar Pradesh" },
  { name: "Chandigarh", state: "Punjab" },
  { name: "Kochi", state: "Kerala" },
];

// ── Build search index (computed once at module level) ─────────────

const typeConfig: Record<SuggestionType, { emoji: string; label: string }> = {
  business:     { emoji: "🏪", label: "Business" },
  product:      { emoji: "👕", label: "Product" },
  service:      { emoji: "🛠",  label: "Service" },
  category:     { emoji: "📂", label: "Category" },
  tourist_place:{ emoji: "📍", label: "Tourist Place" },
};

/** Build a flat, searchable list from all data sources. */
function buildSearchIndex(): SearchSuggestion[] {
  const items: SearchSuggestion[] = [];

  // 1) Businesses from business-listing-data
  for (const b of businesses) {
    items.push({
      id: b.id,
      type: "business",
      label: b.name,
      subtitle: `${b.category} • ${b.area}`,
      emoji: b.logoEmoji,
      href: `/store/${b.storeId}`,
    });
  }

  // 2) Additional stores from store-data not already in businesses
  const businessStoreIds = new Set(businesses.map((b) => b.storeId));
  for (const [id, store] of Object.entries(storeDatabase)) {
    if (businessStoreIds.has(id)) continue;
    items.push({
      id: `store-${id}`,
      type: "business",
      label: store.name,
      subtitle: `${store.category} • ${store.area}`,
      emoji: store.logoEmoji,
      href: `/store/${id}`,
    });
  }

  // 3) Products from product-data
  for (const [id, p] of Object.entries(productDatabase)) {
    items.push({
      id: `prod-${id}`,
      type: "product",
      label: p.name,
      subtitle: `${p.storeName} • ${p.price}`,
      emoji: getEmojiForProductCategory(p.category),
      href: `/store/${p.storeId}?product=${id}`,
    });
  }

  // 4) Service categories
  for (const sc of serviceCategories) {
    items.push({
      id: `svc-${sc.slug}`,
      type: "service",
      label: sc.label,
      subtitle: sc.description,
      emoji: sc.icon,
      href: `/services?category=${sc.slug}`,
      query: sc.slug,
    });
  }

  // 5) Category landing pages
  for (const cl of categoryLandingData) {
    items.push({
      id: `cat-${cl.slug}`,
      type: "category",
      label: cl.label,
      subtitle: `${cl.businessCount.toLocaleString()} businesses`,
      emoji: cl.emoji,
      href: `/category/${cl.slug}`,
    });
  }

  // 6) Listing categories that may not have a landing page
  for (const ec of extendedCategories) {
    const exists = categoryLandingData.some((cl) => cl.slug === ec.slug);
    if (!exists) {
      const count = getBusinessesByCategory(ec.slug).length;
      items.push({
        id: `catl-${ec.slug}`,
        type: "category",
        label: ec.label,
        subtitle: `${count} businesses`,
        emoji: ec.icon,
        href: `/services?category=${ec.slug}`,
        query: ec.slug,
      });
    }
  }

  // 7) Tourist places
  for (const tp of touristPlaces) {
    items.push({
      id: `tp-${tp.slug}`,
      type: "tourist_place",
      label: tp.name,
      subtitle: `${tp.city}, ${tp.state} • ${tp.rating}★`,
      emoji: "📍",
      href: `/tourist/${tp.slug}`,
    });
  }

  return items;
}

const searchIndex = buildSearchIndex();

// ── Public API ─────────────────────────────────────────────────────

/** Fuzzy-search across all entities. Returns top `limit` results grouped by type. */
export function searchAll(query: string, location?: string, limit = 6): SearchSuggestion[] {
  if (!query || query.trim().length < 1) return [];

  const q = query.toLowerCase().trim();

  // Score each item
  const scored = searchIndex
    .map((item) => {
      let score = 0;
      const label = item.label.toLowerCase();
      const subtitle = item.subtitle.toLowerCase();

      // Exact prefix match on label
      if (label.startsWith(q)) score += 100;
      // Label contains query
      else if (label.includes(q)) score += 60;
      // Subtitle contains query
      else if (subtitle.includes(q)) score += 30;
      // Fuzzy: each word in query appears somewhere
      else {
        const words = q.split(/\s+/);
        const allWordsMatch = words.every((w) => label.includes(w) || subtitle.includes(w));
        if (allWordsMatch) score += 20;
      }

      // Boost verified / featured (business type)
      if (item.type === "business") {
        const biz = businesses.find((b) => b.id === item.id);
        if (biz?.isFeatured) score += 15;
        if (biz?.isVerified) score += 10;
      }

      // Location boost
      if (location && location !== "All India") {
        const loc = location.toLowerCase();
        if (subtitle.includes(loc)) score += 20;
      }

      return { item, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  // Group by type, take top N per type, then flatten
  const grouped = new Map<SuggestionType, SearchSuggestion[]>();
  for (const { item } of scored) {
    const list = grouped.get(item.type) || [];
    if (list.length < limit) list.push(item);
    grouped.set(item.type, list);
  }

  // Ordered: business → product → service → category → tourist_place
  const typeOrder: SuggestionType[] = ["business", "product", "service", "category", "tourist_place"];
  const result: SearchSuggestion[] = [];
  for (const t of typeOrder) {
    const group = grouped.get(t);
    if (group) result.push(...group);
    if (result.length >= limit * 2) break;
  }

  return result.slice(0, limit * 2);
}

/** Get type config for rendering section headers */
export function getTypeConfig(type: SuggestionType) {
  return typeConfig[type];
}

/** Get recent/searched locations from localStorage */
export function getRecentLocations(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem("jd_recent_locations");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/** Save a location to recent history */
export function saveRecentLocation(city: string) {
  if (typeof window === "undefined") return;
  try {
    let recent = getRecentLocations();
    recent = recent.filter((r) => r !== city);
    recent.unshift(city);
    recent = recent.slice(0, 5);
    localStorage.setItem("jd_recent_locations", JSON.stringify(recent));
  } catch {
    // ignore
  }
}

// ── Helpers ────────────────────────────────────────────────────────

function getEmojiForProductCategory(category: string): string {
  const map: Record<string, string> = {
    Ayurvedic: "🌿",
    Medicine: "💊",
    Grocery: "🛒",
    Beverage: "🥤",
    Snack: "🍿",
    Dairy: "🧈",
    Electronics: "📱",
    Audio: "🎧",
    Mobile: "📲",
    Appliance: "🔌",
    Food: "🍜",
    Beauty: "💄",
    Fitness: "💪",
    Spice: "🌶️",
    Personal: "🧴",
  };
  for (const [key, emoji] of Object.entries(map)) {
    if (category.toLowerCase().includes(key.toLowerCase())) return emoji;
  }
  return "👕";
}