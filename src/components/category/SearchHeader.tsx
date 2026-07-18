"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Mic, SlidersHorizontal, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchHeaderProps {
  query?: string;
  onQueryChange?: (q: string) => void;
}

export default function SearchHeader({ query = "", onQueryChange }: SearchHeaderProps) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100/70 shadow-[0_1px_8px_rgba(0,0,0,0.03)]"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      {/* ── Title Bar — native app style ── */}
      <div className="flex items-center justify-between px-3 pt-2 pb-1.5 h-12">
        <Link
          href="/"
          className="w-10 h-10 flex items-center justify-center -ml-1 rounded-full active:bg-gray-100 active:scale-90 transition-all"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 text-gray-800" strokeWidth={2.4} />
        </Link>
        <div className="flex flex-col items-center">
          <h1 className="text-[16px] font-bold text-gray-900 leading-tight tracking-tight">Categories</h1>
          <div className="flex items-center gap-1 mt-0.5">
            <MapPin className="w-2.5 h-2.5 text-[#0056b3]" strokeWidth={2.6} />
            <span className="text-[9.5px] text-gray-400 font-medium">Mumbai · 400001</span>
          </div>
        </div>
        <button
          className="w-10 h-10 flex items-center justify-center -mr-1 rounded-full active:bg-gray-100 active:scale-90 transition-all"
          aria-label="Filters"
        >
          <SlidersHorizontal className="w-[18px] h-[18px] text-gray-700" strokeWidth={2.2} />
        </button>
      </div>

      {/* ── Search Bar — compact, native pill ── */}
      <div className="px-3 pb-2.5">
        <div
          className={`flex items-center rounded-2xl px-3.5 py-3 gap-2.5 transition-all duration-200 ${
            focused
              ? "bg-white ring-2 ring-[#0056b3] shadow-[0_4px_14px_rgba(0,86,179,0.14)]"
              : "bg-gray-100/80 ring-1 ring-transparent"
          }`}
        >
          <Search className={`w-[18px] h-[18px] flex-shrink-0 transition-colors ${focused ? "text-[#0056b3]" : "text-gray-500"}`} strokeWidth={2.4} />
          <input
            type="text"
            placeholder="Search categories..."
            value={query}
            onChange={(e) => onQueryChange?.(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="flex-1 bg-transparent text-[14px] outline-none text-gray-800 placeholder-gray-400 font-medium min-w-0"
            aria-label="Search categories"
          />
          <AnimatePresence>
            {query && (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                onClick={() => onQueryChange?.("")}
                className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center active:scale-90 transition-transform"
                aria-label="Clear"
              >
                <X className="w-3 h-3 text-white" strokeWidth={3} />
              </motion.button>
            )}
          </AnimatePresence>
          {!query && (
            <Mic className="w-[18px] h-[18px] text-[#0056b3] flex-shrink-0 active:scale-90 transition-transform" strokeWidth={2.2} />
          )}
        </div>
      </div>
    </motion.header>
  );
}
