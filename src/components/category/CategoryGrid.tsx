"use client";

import Link from "next/link";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  LayoutGrid, ChevronLeft, ChevronRight, MoreHorizontal,
  UtensilsCrossed, Hotel, Coffee, ShoppingBag, Camera, Stethoscope,
  Scissors, Dumbbell, Cpu, Pill, Plane, Heart, GraduationCap,
  Paintbrush, Snowflake, Droplets, Zap, Bug, Hammer,
  Sparkles as SparklesIcon, Palette,
  type LucideIcon,
} from "lucide-react";
import CategoryCard from "./CategoryCard";
import type { CategoryExtended } from "@/lib/business-listing-data";
import { getBusinessCountByCategory } from "@/lib/business-listing-data";

const iconMap: Record<string, LucideIcon> = {
  UtensilsCrossed, Hotel, Coffee, ShoppingBag, Camera, Stethoscope,
  Scissors, Dumbbell, Cpu, Pill, Plane, Heart, GraduationCap,
  Paintbrush, Snowflake, Droplets, Zap, Bug, Hammer,
  Sparkles: SparklesIcon, Palette,
};

interface CategoryGridProps {
  categories: CategoryExtended[];
  variant?: "mobile" | "desktop";
  /** Layout mode: "grid" (default 2/6-col cards) or "scroll" (horizontal circular SVG icons + More tile, matches /services) */
  layout?: "grid" | "scroll";
  /** Currently selected category slug (only used by `scroll` layout — highlights + click-to-toggle behavior like /services) */
  selectedCategory?: string;
  /** Callback when user clicks a category in the scroll layout (selected slug, or empty string when cleared) */
  onSelectCategory?: (slug: string) => void;
}

export default function CategoryGrid({
  categories,
  variant = "mobile",
  layout = "grid",
  selectedCategory,
  onSelectCategory,
}: CategoryGridProps) {
  const isMobile = variant === "mobile";
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = isMobile ? 280 : 360;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  // Helper: clicking a category in scroll layout toggles selection
  const handleCategoryClick = (e: React.MouseEvent, slug: string) => {
    if (layout !== "scroll" || !onSelectCategory) return;
    e.preventDefault();
    onSelectCategory(selectedCategory === slug ? "" : slug);
  };

  // ── Empty state ──
  if (categories.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`flex flex-col items-center justify-center ${isMobile ? "py-16" : "py-20"} px-4`}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, type: "spring" }}
          className={`flex items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mb-5 ${isMobile ? "w-20 h-20" : "w-24 h-24"}`}
        >
          <span className={isMobile ? "text-4xl" : "text-5xl"}>📂</span>
        </motion.div>
        <h3 className={`${isMobile ? "text-sm" : "text-base"} font-bold text-gray-800 mb-1.5`}>No Categories Found</h3>
        <p className={`${isMobile ? "text-xs" : "text-sm"} text-gray-400 mb-5 text-center max-w-xs`}>
          We couldn&apos;t find anything matching your search. Try a different keyword.
        </p>
        <Link
          href="/"
          className="bg-[#0056b3] text-white text-xs font-semibold px-5 py-2.5 rounded-xl active:scale-95 hover:bg-[#004494] transition-all shadow-md shadow-blue-200"
        >
          Explore Home
        </Link>
      </motion.div>
    );
  }

  // ── Section header (shared across layouts) ──
  const header = (
    <div className={`flex items-center justify-between ${isMobile ? "px-3 mb-3" : "mb-6"}`}>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25 }}
        className="flex items-center gap-2.5"
      >
        {!isMobile && (
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0056b3] to-[#0077E6] flex items-center justify-center shadow-sm shadow-blue-200">
            <LayoutGrid className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
        )}
        <div>
          <h2 className={`font-bold text-gray-900 ${isMobile ? "text-sm" : "text-xl tracking-tight"}`}>
            All Categories
          </h2>
          {!isMobile && (
            <p className="text-xs text-gray-400 font-medium mt-0.5">Complete directory of business types</p>
          )}
        </div>
      </motion.div>

      {layout === "scroll" && !isMobile ? (
        // Desktop scroll: arrow buttons (matches /services)
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all shadow-sm"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all shadow-sm"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      ) : (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className={`${isMobile ? "text-[11px]" : "text-xs"} text-gray-400 font-semibold bg-white px-2.5 py-1 rounded-full border border-gray-100`}
        >
          {categories.length} {isMobile ? "items" : "categories"}
        </motion.span>
      )}
    </div>
  );

  // ── LAYOUT: scroll (horizontal circular SVG icons + More tile — mirrors /services) ──
  if (layout === "scroll") {
    return (
      <section className={isMobile ? "pt-5" : "pt-2"}>
        {header}
        <div
          ref={scrollRef}
          className={`flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth ${isMobile ? "px-3 pb-2 snap-x snap-mandatory" : "pb-2"}`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((cat, i) => {
            const count = getBusinessCountByCategory(cat.slug);
            const Icon = iconMap[cat.lucideIcon] || ShoppingBag;
            const isActive = selectedCategory === cat.slug;
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: i * 0.03, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 snap-start"
              >
                <Link
                  href={`/explore?category=${cat.slug}`}
                  onClick={(e) => handleCategoryClick(e, cat.slug)}
                  className={`flex flex-col items-center gap-2 ${isMobile ? "w-[72px] p-1.5" : "w-[110px] p-3"} rounded-2xl hover:bg-white hover:shadow-md transition-all group`}
                  aria-label={`${cat.label} - ${count} businesses`}
                  aria-pressed={isActive}
                >
                  <div
                    className={`rounded-full flex items-center justify-center transition-all group-hover:scale-110 ${isMobile ? "w-14 h-14" : "w-20 h-20"} ${isActive ? "scale-105" : ""}`}
                    style={{
                      backgroundColor: isActive ? cat.color + "20" : cat.bg,
                      boxShadow: isActive ? `0 0 0 2px ${cat.color}` : undefined,
                    }}
                  >
                    <Icon
                      className={isMobile ? "w-6 h-6" : "w-8 h-8"}
                      style={{ color: cat.color }}
                      strokeWidth={2.2}
                    />
                  </div>
                  <div className="text-center">
                    <p className={`font-semibold leading-tight ${isActive ? "text-[#0056b3]" : "text-gray-800"} ${isMobile ? "text-[11px]" : "text-xs"}`}>
                      {cat.label}
                    </p>
                    <p className={`text-gray-400 mt-0.5 font-medium ${isMobile ? "text-[9px]" : "text-[10px]"}`}>
                      {count.toLocaleString()}+ {isMobile ? "places" : "Businesses"}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* More tile — mirrors /services */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, delay: categories.length * 0.03, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 snap-start"
          >
            <Link
              href="/explore"
              className={`flex flex-col items-center gap-2 ${isMobile ? "w-[72px] p-1.5" : "w-[110px] p-3"} rounded-2xl hover:bg-white hover:shadow-md transition-all group`}
              aria-label="More categories"
            >
              <div
                className={`rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ring-1 ring-gray-200 group-hover:scale-110 transition-transform ${isMobile ? "w-14 h-14" : "w-20 h-20"}`}
              >
                <MoreHorizontal
                  className={isMobile ? "w-6 h-6 text-gray-600" : "w-8 h-8 text-gray-600"}
                  strokeWidth={2.5}
                />
              </div>
              <div className="text-center">
                <p className={`font-semibold leading-tight text-gray-700 ${isMobile ? "text-[11px]" : "text-xs"}`}>
                  More
                </p>
                <p className={`text-gray-400 mt-0.5 font-medium ${isMobile ? "text-[9px]" : "text-[10px]"}`}>
                  View All
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  // ── LAYOUT: grid (default 2/6-col premium cards) ──
  return (
    <section className={isMobile ? "pt-5" : "pt-2"}>
      {header}
      <div
        className={`grid gap-2.5 ${
          isMobile
            ? "grid-cols-2 px-3"
            : "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
        }`}
      >
        <AnimatePresence mode="popLayout">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.slug} category={cat} index={i} variant={variant} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
