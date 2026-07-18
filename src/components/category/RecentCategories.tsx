"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import type { CategoryExtended } from "@/lib/business-listing-data";
import { getBusinessCountByCategory } from "@/lib/business-listing-data";
import {
  UtensilsCrossed, Hotel, Coffee, ShoppingBag, Camera, Stethoscope,
  Scissors, Dumbbell, Cpu, Pill, Plane, Heart, GraduationCap,
  Paintbrush, Snowflake, Droplets, Zap, Bug, Hammer, Sparkles, Palette,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  UtensilsCrossed, Hotel, Coffee, ShoppingBag, Camera, Stethoscope,
  Scissors, Dumbbell, Cpu, Pill, Plane, Heart, GraduationCap,
  Paintbrush, Snowflake, Droplets, Zap, Bug, Hammer, Sparkles, Palette,
};

interface RecentCategoriesProps {
  categories: CategoryExtended[];
  variant?: "mobile" | "desktop";
}

export default function RecentCategories({ categories, variant = "mobile" }: RecentCategoriesProps) {
  const isMobile = variant === "mobile";
  if (categories.length === 0) return null;

  return (
    <section className={isMobile ? "pt-6 pb-4" : "pt-10 pb-4"}>
      <div className={`flex items-center justify-between ${isMobile ? "px-3 mb-3" : "mb-6"}`}>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="flex items-center gap-2.5"
        >
          {!isMobile && (
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-sm shadow-purple-200">
              <Clock className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
          )}
          <div className="flex items-center gap-1.5">
            {isMobile && <Clock className="w-3.5 h-3.5 text-gray-400" />}
            <h2 className={`font-bold text-gray-900 ${isMobile ? "text-sm" : "text-xl tracking-tight"}`}>
              Recently Viewed
            </h2>
          </div>
          {!isMobile && (
            <p className="text-xs text-gray-400 font-medium ml-2">Pick up where you left off</p>
          )}
        </motion.div>
      </div>

      <div
        className={`flex gap-3 overflow-x-auto scrollbar-hide ${isMobile ? "px-3 snap-x snap-mandatory" : "snap-x snap-mandatory"}`}
        style={isMobile ? { scrollbarWidth: 'none', msOverflowStyle: 'none' } : undefined}
      >
        {categories.map((cat, i) => {
          const Icon = iconMap[cat.lucideIcon] || ShoppingBag;
          const count = getBusinessCountByCategory(cat.slug);
          return (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 snap-start"
            >
              <Link
                href={`/explore?category=${cat.slug}`}
                className={`
                  flex items-center gap-2.5 bg-white rounded-2xl
                  border border-gray-100/80 shadow-sm overflow-hidden
                  active:scale-95 transition-all
                  ${isMobile ? "pr-3" : "pr-4 hover:shadow-lg hover:shadow-black/[0.05] hover:-translate-y-0.5 hover:border-gray-200"}
                `}
                aria-label={`Recently viewed: ${cat.label}`}
              >
                <div
                  className={`flex items-center justify-center shrink-0 ${isMobile ? "w-10 h-10" : "w-12 h-12"}`}
                  style={{ backgroundColor: cat.bg }}
                >
                  <Icon
                    className={isMobile ? "w-5 h-5" : "w-6 h-6"}
                    style={{ color: cat.color }}
                    strokeWidth={2.2}
                  />
                </div>
                <div className="flex flex-col">
                  <span className={`font-semibold text-gray-800 ${isMobile ? "text-[11px]" : "text-sm"}`}>
                    {cat.label}
                  </span>
                  <span className={`text-gray-400 font-medium ${isMobile ? "text-[9px]" : "text-[10px]"}`}>
                    {count.toLocaleString()} businesses
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
