"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MapPin, Navigation, Flame, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Unified StoreCard — matches the home page "Featured Stores Near You" design.
 *
 * Used everywhere a store / business / provider card is rendered so the visual
 * template stays consistent across the app. Two size variants:
 *   - "desktop"  → 260px wide, 100px banner, 48px logo (matches DesktopLayout.tsx)
 *   - "mobile"   → 185px wide,  78px banner, 40px logo (matches MobileLayout.tsx)
 *
 * Data normalization is handled via props — callers map their local data shape
 * (ListingBusiness, topProviders, similarStores, etc.) into the unified props.
 */

export interface StoreCardProps {
  name: string;
  category?: string;
  rating?: string | number;
  reviews?: string | number;
  distance?: string;
  address?: string;
  /** Emoji logo (preferred for stores) */
  logoEmoji?: string;
  /** Lucide icon logo (used by service providers like AC/Electrician) */
  logoIcon?: LucideIcon;
  /** Real image URL — when provided, renders as the banner image */
  img?: string;
  /** Tailwind gradient classes (e.g. "from-blue-500 to-blue-600") used when no `img` */
  coverGradient?: string;
  /** Used to build the link `/store/${storeId}` if `href` is not provided */
  storeId?: string;
  /** Override the link target entirely */
  href?: string;
  /** Show "Featured" pill (default: true to match reference) */
  isFeatured?: boolean;
  /** Show "Open" / "Closed" pill (default: true = Open) */
  isOpen?: boolean;
  /** Show trusted-tick on logo (default: true to match reference) */
  isVerified?: boolean;
  /** Size variant — "desktop" or "mobile" */
  variant: "desktop" | "mobile";
  /** Stagger index for mobile entrance animation */
  index?: number;
  /** When true, card uses w-full instead of fixed width — use inside grid containers */
  fluid?: boolean;
  /** Price chip text (e.g. "₹999") — shown in footer-right when `distance` is not provided.
   *  Used by "Popular Services" cards. */
  price?: string;
}

export default function StoreCard({
  name,
  category,
  rating,
  reviews,
  distance,
  address,
  logoEmoji,
  logoIcon: Logo,
  img,
  coverGradient,
  storeId,
  href,
  isFeatured = true,
  isOpen = true,
  isVerified = true,
  variant,
  index = 0,
  fluid = false,
  price,
}: StoreCardProps) {
  const isMobile = variant === "mobile";

  // ── Size config per variant ──
  const cfg = isMobile
    ? {
        cardWidth: "w-[185px]",
        bannerHeight: "h-[78px]",
        logoSize: "w-10 h-10",
        logoEmojiSize: "text-[16px]",
        logoIconSize: "w-[18px] h-[18px]",
        tickSize: "w-[14px] h-[14px]",
        tickIconSize: "w-[9px] h-[9px]",
        pillText: "text-[8.5px]",
        pillPx: "px-1.5 py-0.5",
        flameSize: "w-2 h-2",
        dotSize: "w-1 h-1",
        ratingText: "text-[10px]",
        ratingPx: "px-1.5 py-0.5",
        starSize: "w-2.5 h-2.5",
        pillTop: "top-1.5",
        pillLR: "left-1.5 right-1.5",
        ratingPos: "bottom-1.5 left-1.5",
        logoPos: "-bottom-4 right-2.5",
        bodyPadding: "px-2.5 pt-2.5 pb-2.5",
        namePr: "pr-11",
        nameText: "text-[12.5px]",
        categoryText: "text-[10px]",
        addressText: "text-[9.5px]",
        mapPinSize: "w-2.5 h-2.5",
        footerText: "text-[9.5px]",
        footerPx: "px-1.5 py-0.5",
        navIconSize: "w-2.5 h-2.5",
        coverIconSize: "w-10 h-10",
      }
    : {
        cardWidth: "w-[260px]",
        bannerHeight: "h-[100px]",
        logoSize: "w-12 h-12",
        logoEmojiSize: "text-lg",
        logoIconSize: "w-5 h-5",
        tickSize: "w-[18px] h-[18px]",
        tickIconSize: "w-[11px] h-[11px]",
        pillText: "text-[9.5px]",
        pillPx: "px-2 py-0.5",
        flameSize: "w-2.5 h-2.5",
        dotSize: "w-1.5 h-1.5",
        ratingText: "text-[11px]",
        ratingPx: "px-2 py-0.5",
        starSize: "w-3 h-3",
        pillTop: "top-2",
        pillLR: "left-2.5 right-2.5",
        ratingPos: "bottom-2 left-2.5",
        logoPos: "-bottom-5 right-3",
        bodyPadding: "px-3 pt-3 pb-3",
        namePr: "pr-12",
        nameText: "text-[14px]",
        categoryText: "text-[11px]",
        addressText: "text-[10.5px]",
        mapPinSize: "w-3 h-3",
        footerText: "text-[10.5px]",
        footerPx: "px-2 py-0.5",
        navIconSize: "w-3 h-3",
        coverIconSize: "w-12 h-12",
      };

  const linkHref = href || (storeId ? `/store/${storeId}` : "#");

  const cardClasses = `${fluid ? "w-full" : `flex-shrink-0 ${cfg.cardWidth}`} bg-white rounded-2xl overflow-hidden shadow-sm shadow-black/[0.06] ring-1 ring-black/[0.04] hover:shadow-lg hover:shadow-black/[0.1] hover:-translate-y-0.5 transition-all group cursor-pointer`;

  const banner = (
    <div className={`relative ${cfg.bannerHeight} overflow-hidden`}>
      {img ? (
        <>
          <Image
            src={img}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes={isMobile ? "185px" : "260px"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/5" />
        </>
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${coverGradient || "from-gray-400 to-gray-500"}`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {Logo ? (
              <Logo className={`${cfg.coverIconSize} text-white/90`} strokeWidth={1.5} />
            ) : (
              <span className="text-5xl opacity-90 drop-shadow-sm">{logoEmoji || "🏪"}</span>
            )}
          </div>
          {/* subtle darkening for pill legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-black/5" />
        </div>
      )}

      {/* Top row: Featured + Open/Closed */}
      <div className={`absolute ${cfg.pillTop} ${cfg.pillLR} flex items-center justify-between`}>
        {isFeatured && (
          <span
            className={`bg-amber-500/95 backdrop-blur-sm text-white ${cfg.pillText} font-bold uppercase tracking-wider ${cfg.pillPx} rounded-full flex items-center gap-0.5 shadow-sm`}
          >
            <Flame className={cfg.flameSize} />
            Featured
          </span>
        )}
        <span
          className={`${isOpen ? "bg-emerald-500/95" : "bg-rose-500/95"} backdrop-blur-sm text-white ${cfg.pillText} font-bold ${cfg.pillPx} rounded-full flex items-center gap-1 shadow-sm ${isFeatured ? "" : "ml-auto"}`}
        >
          <span className={`${cfg.dotSize} bg-white rounded-full`} />
          {isOpen ? "Open" : "Closed"}
        </span>
      </div>

      {/* Rating pill (bottom-left) */}
      {rating !== undefined && rating !== null && rating !== "" && (
        <div className={`absolute ${cfg.ratingPos}`}>
          <div
            className={`bg-white/95 backdrop-blur-sm text-gray-900 ${cfg.ratingText} font-bold ${cfg.ratingPx} rounded-full flex items-center gap-1 shadow-sm`}
          >
            <Star className={`${cfg.starSize} text-amber-500 fill-amber-500`} />
            {rating}
          </div>
        </div>
      )}

      {/* Floating logo with trusted tick (only if emoji or icon provided) */}
      {(logoEmoji || Logo) && (
        <div className={`absolute ${cfg.logoPos} z-10`}>
          <div className="relative">
            <div
              className={`${cfg.logoSize} rounded-full bg-white shadow-md flex items-center justify-center ${cfg.logoEmojiSize} ring-2 ring-white`}
            >
              {Logo ? (
                <Logo className={cfg.logoIconSize} strokeWidth={2.2} />
              ) : (
                logoEmoji
              )}
            </div>
            {isVerified && (
              <div
                className={`absolute -bottom-0.5 -left-0.5 ${cfg.tickSize} bg-[#0056b3] rounded-full flex items-center justify-center ring-2 ring-white`}
              >
                <Check className={`${cfg.tickIconSize} text-white`} strokeWidth={4} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );

  const body = (
    <div className={cfg.bodyPadding}>
      {/* Name */}
      <div className={`mb-1 ${cfg.namePr}`}>
        <h3 className={`${cfg.nameText} font-bold text-gray-900 leading-tight truncate`}>{name}</h3>
      </div>

      {/* Category */}
      {category && (
        <p className={`${cfg.categoryText} text-gray-500 font-medium truncate mb-1.5`}>{category}</p>
      )}

      {/* Address */}
      {address && (
        <div className="flex items-center gap-1 mb-2">
          <MapPin className={`${cfg.mapPinSize} text-gray-400 flex-shrink-0`} />
          <span className={`${cfg.addressText} text-gray-500 truncate`}>{address}</span>
        </div>
      )}

      {/* Footer: reviews + distance/price */}
      {(reviews !== undefined || distance || price) && (
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          {reviews !== undefined ? (
            <span className={`${cfg.footerText} text-gray-400 font-medium`}>{reviews} reviews</span>
          ) : (
            <span />
          )}
          {distance ? (
            <span
              className={`bg-[#0056b3]/8 text-[#0056b3] ${cfg.footerText} font-bold ${cfg.footerPx} rounded-full flex items-center gap-0.5`}
            >
              <Navigation className={cfg.navIconSize} />
              {distance}
            </span>
          ) : price ? (
            <span
              className={`bg-emerald-500/10 text-emerald-700 ${cfg.footerText} font-bold ${cfg.footerPx} rounded-full flex items-center gap-0.5`}
            >
              {price}
            </span>
          ) : null}
        </div>
      )}
    </div>
  );

  // Mobile wraps card in motion.div for entrance + tap animation
  if (isMobile) {
    return (
      <motion.div
        key={`${name}-${index}`}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.3 }}
        whileTap={{ scale: 0.97 }}
        className={cardClasses}
      >
        <Link href={linkHref} className="block">
          {banner}
          {body}
        </Link>
      </motion.div>
    );
  }

  return (
    <Link href={linkHref} className={cardClasses}>
      {banner}
      {body}
    </Link>
  );
}
