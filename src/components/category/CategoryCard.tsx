"use client";

import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import type { CategoryExtended } from "@/lib/business-listing-data";
import {
  UtensilsCrossed, Hotel, Coffee, ShoppingBag, Camera, Stethoscope,
  Scissors, Dumbbell, Cpu, Pill, Plane, Heart, GraduationCap,
  Paintbrush, Snowflake, Droplets, Zap, Bug, Hammer, Sparkles, Palette,
  type LucideIcon,
} from "lucide-react";
import { getBusinessCountByCategory } from "@/lib/business-listing-data";

const iconMap: Record<string, LucideIcon> = {
  UtensilsCrossed, Hotel, Coffee, ShoppingBag, Camera, Stethoscope,
  Scissors, Dumbbell, Cpu, Pill, Plane, Heart, GraduationCap,
  Paintbrush, Snowflake, Droplets, Zap, Bug, Hammer, Sparkles, Palette,
};

interface CategoryCardProps {
  category: CategoryExtended;
  index?: number;
  variant?: "mobile" | "desktop";
}

export default function CategoryCard({ category, index = 0, variant = "mobile" }: CategoryCardProps) {
  const Icon = iconMap[category.lucideIcon] || ShoppingBag;
  const count = getBusinessCountByCategory(category.slug);
  const isMobile = variant === "mobile";

  // ── Mobile: premium 2-col app card — rounded icon, label, count, soft shadow, lift-on-tap.
  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.28,
          delay: Math.min(index * 0.03, 0.3),
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        whileTap={{ scale: 0.96 }}
        className="relative"
      >
        <Link
          href={`/explore?category=${category.slug}`}
          className="block relative bg-white rounded-[20px] p-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03] active:bg-gray-50 transition-all overflow-hidden"
          aria-label={`${category.label} - ${count} businesses`}
        >
          {/* subtle color glow on top-right (matches brand bg color) */}
          <div
            className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-50 blur-xl pointer-events-none"
            style={{ background: category.bg }}
          />

          {/* rounded SVG icon (lucide, matches design language of /services) */}
          <div
            className="relative w-12 h-12 rounded-2xl flex items-center justify-center mb-2.5"
            style={{ backgroundColor: category.bg }}
          >
            <Icon className="w-6 h-6" style={{ color: category.color }} strokeWidth={2.2} />
          </div>

          {/* label + count */}
          <div className="relative">
            <h3 className="text-[13px] font-bold text-gray-900 leading-tight truncate">
              {category.label}
            </h3>
            <p className="text-[10.5px] text-gray-400 font-medium mt-0.5">
              {count.toLocaleString()} {count === 1 ? "place" : "places"}
            </p>
          </div>

          {/* "Hot" badge for first 3 cards */}
          {index < 3 && (
            <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full bg-amber-50 border border-amber-100 flex items-center gap-0.5">
              <TrendingUp className="w-2 h-2 text-amber-500" strokeWidth={3} />
              <span className="text-[7.5px] font-bold text-amber-600 uppercase tracking-wide">Hot</span>
            </div>
          )}
        </Link>
      </motion.div>
    );
  }

  // ── Desktop: polished — rounded icon + label + count, hover lift, premium feel.
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.25,
        delay: Math.min(index * 0.03, 0.3),
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileTap={{ scale: 0.97 }}
      className="flex flex-col items-center justify-center bg-white rounded-2xl p-5 shadow-sm border border-gray-100/80 min-h-[140px] hover:shadow-xl hover:shadow-black/[0.06] hover:-translate-y-1 hover:border-gray-200 transition-all cursor-pointer group"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: category.bg }}
      >
        <Icon className="w-7 h-7" style={{ color: category.color }} strokeWidth={2.2} />
      </div>

      <div className="text-center">
        <h3 className="font-bold text-gray-800 truncate text-[13px]">
          {category.label}
        </h3>
        <p className="text-xs text-gray-400 mt-0.5 font-medium">
          {count.toLocaleString()} {count === 1 ? "Business" : "Businesses"}
        </p>
      </div>
    </motion.div>
  );
}
