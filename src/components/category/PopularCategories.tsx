"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles, Flame } from "lucide-react";
import { motion } from "framer-motion";
import type { CategoryExtended } from "@/lib/business-listing-data";
import { getBusinessCountByCategory } from "@/lib/business-listing-data";
import {
  UtensilsCrossed, Hotel, Coffee, ShoppingBag, Camera, Stethoscope,
  Scissors, Dumbbell, Cpu, Pill, Plane, Heart, GraduationCap,
  Paintbrush, Snowflake, Droplets, Zap, Bug, Hammer, Sparkles as SparklesIcon, Palette,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  UtensilsCrossed, Hotel, Coffee, ShoppingBag, Camera, Stethoscope,
  Scissors, Dumbbell, Cpu, Pill, Plane, Heart, GraduationCap,
  Paintbrush, Snowflake, Droplets, Zap, Bug, Hammer, Sparkles: SparklesIcon, Palette,
};

interface PopularCategoriesProps {
  categories: CategoryExtended[];
  variant?: "mobile" | "desktop";
}

export default function PopularCategories({ categories, variant = "mobile" }: PopularCategoriesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = variant === "mobile";

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = isMobile ? 280 : 360;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  if (categories.length === 0) return null;

  return (
    <section className={isMobile ? "pt-4" : "pt-2"}>
      {/* Section header — matches /services design language */}
      <div className={`flex items-center justify-between ${isMobile ? "px-3 mb-4" : "mb-6"}`}>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="flex items-center gap-2.5"
        >
          {!isMobile && (
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-sm shadow-orange-200">
              <Flame className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
          )}
          <div>
            <h2 className={`font-bold text-gray-900 ${isMobile ? "text-[15px] tracking-tight" : "text-xl tracking-tight"}`}>
              Popular Categories
            </h2>
            {!isMobile && (
              <p className="text-xs text-gray-400 font-medium mt-0.5">Trending near you right now</p>
            )}
          </div>
        </motion.div>
        {isMobile ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="flex items-center gap-1 text-[10.5px] font-semibold text-[#0056b3]"
          >
            <Flame className="w-3 h-3 text-amber-500" strokeWidth={2.5} />
            Hot
          </motion.span>
        ) : (
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
        )}
      </div>

      {/* Horizontal scroll — circular SVG icons (matches /services "All Service Categories") */}
      <div
        ref={scrollRef}
        className={`flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth ${isMobile ? "px-3 pb-2" : "pb-2"}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((cat, i) => {
          const count = getBusinessCountByCategory(cat.slug);
          const Icon = iconMap[cat.lucideIcon] || ShoppingBag;
          return (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.28,
                delay: i * 0.03,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 snap-start"
            >
              <Link
                href={`/explore?category=${cat.slug}`}
                className={`flex flex-col items-center gap-2 ${isMobile ? "w-[72px] p-1.5" : "w-[110px] p-3"} rounded-2xl hover:bg-white hover:shadow-md transition-all group`}
                aria-label={`${cat.label} - ${count} businesses`}
              >
                {/* Circular SVG icon */}
                <div
                  className={`rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${isMobile ? "w-14 h-14" : "w-20 h-20"}`}
                  style={{ backgroundColor: cat.bg }}
                >
                  <Icon
                    className={isMobile ? "w-6 h-6" : "w-8 h-8"}
                    style={{ color: cat.color }}
                    strokeWidth={2.2}
                  />
                </div>
                <div className="text-center">
                  <p className={`font-semibold leading-tight text-gray-800 ${isMobile ? "text-[11px]" : "text-xs"}`}>
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
      </div>
    </section>
  );
}
