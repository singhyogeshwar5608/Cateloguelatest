"use client";

import { use, useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Star, MapPin, Phone, Navigation, ArrowLeft, BadgeCheck, Clock,
  Share2, Heart, Bookmark, ChevronRight, ThumbsUp, MessageSquare,
  Camera, Store, UtensilsCrossed, Wrench, Info, LayoutGrid,
  CircleDot, ExternalLink, Shield, Award, TrendingUp,
  Home, BarChart3, Briefcase, Newspaper, MoreHorizontal,
  X, CheckCircle2, Users, Zap, Eye, Send, Facebook, Instagram,
  CreditCard, Check, Mail, Globe,
} from "lucide-react";
import { useSyncExternalStore } from "react";
import { getBusinessById, getBusinessesByCategory, BusinessType, ListingBusiness } from "@/lib/business-listing-data";
import { getStoreById } from "@/lib/store-data";
import MobileStoreDetailView from "@/components/justdial/MobileStorePage";
import DesktopStoreDetailView from "@/components/justdial/DesktopStorePage";
import StoreCard from "@/components/justdial/StoreCard";

/* ═══════════════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════════════ */

function useWindowSize() {
  return useSyncExternalStore(
    (cb) => { window.addEventListener("resize", cb); return () => window.removeEventListener("resize", cb); },
    () => window.innerWidth,
    () => 1024,
  );
}

function useScrollThreshold(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return scrolled;
}

/* ═══════════════════════════════════════════════════
   TAB CONFIG
   ═══════════════════════════════════════════════════ */

const TAB_CONFIG: Record<BusinessType, Array<{ key: string; label: string; icon: typeof Store }>> = {
  restaurant: [
    { key: "overview", label: "Overview", icon: Info },
    { key: "menu", label: "Menu", icon: UtensilsCrossed },
    { key: "gallery", label: "Photos", icon: Camera },
    { key: "reviews", label: "Reviews", icon: MessageSquare },
    { key: "about", label: "About", icon: LayoutGrid },
  ],
  service: [
    { key: "overview", label: "Overview", icon: Info },
    { key: "services", label: "Services", icon: Wrench },
    { key: "gallery", label: "Photos", icon: Camera },
    { key: "reviews", label: "Reviews", icon: MessageSquare },
    { key: "about", label: "About", icon: LayoutGrid },
  ],
  store: [
    { key: "overview", label: "Overview", icon: Info },
    { key: "products", label: "Products", icon: Store },
    { key: "gallery", label: "Photos", icon: Camera },
    { key: "reviews", label: "Reviews", icon: MessageSquare },
    { key: "about", label: "About", icon: LayoutGrid },
  ],
};

/* ═══════════════════════════════════════════════════
   CATEGORY-SPECIFIC DATA FUNCTIONS
   ═══════════════════════════════════════════════════ */

const CATEGORY_SLUG_MAP: Record<string, string> = {
  "Restaurant": "restaurants", "Hotel": "hotels", "Cafe": "cafes",
  "Shopping": "shopping", "Photographer": "photographers", "Doctor": "doctors",
  "Salon": "salons", "Gym": "gyms", "Electronics": "electronics",
  "Pharmacy": "pharmacies", "Travel Agent": "travel-agents",
  "Wedding Planner": "wedding-planners", "School": "schools",
  "Interior Design": "interior-design", "AC Repair": "ac-repair",
};

function getCategoryAbout(business: ListingBusiness): string {
  const c = business.category;
  const name = business.name;
  const area = business.area;
  const rating = business.rating;
  const reviews = business.totalRatings.toLocaleString();

  const abouts: Record<string, string> = {
    "Restaurant": `${name} is a well-known restaurant in ${area} celebrated for its authentic North Indian and Chinese cuisine. With a focus on fresh ingredients and traditional recipes, it offers a delightful family dining experience. The restaurant has earned a stellar ${rating}/5 rating from ${reviews} reviews, making it a top choice for food lovers in the area. Whether it's a casual meal or a special celebration, ${name} delivers consistent quality and warm hospitality every time.`,
    "Cafe": `${name} is a charming cafe nestled in ${area}, known for its artisanal coffee, freshly baked pastries, and cozy ambiance. Rated ${rating}/5 by ${reviews} happy customers, this cafe has become a favorite spot for casual meetups, remote work, and leisurely brunches. The menu features an eclectic mix of continental and Indian dishes crafted with locally sourced ingredients. Perfect for unwinding after a long day or catching up with friends over a perfectly brewed cup.`,
    "Salon": `${name} is a professional beauty salon in ${area} offering comprehensive hair care, skin treatments, and grooming services. With ${rating}/5 rating from ${reviews} satisfied clients, the salon is staffed by experienced stylists and trained beauty professionals who stay updated with the latest trends. From haircuts and coloring to facials and bridal packages, ${name} provides a premium salon experience in a hygienic and welcoming environment.`,
    "Gym": `${name} is a state-of-the-art fitness center in ${area} equipped with modern machines, free weights, and dedicated zones for cardio, strength training, and functional fitness. With a ${rating}/5 rating from ${reviews} members, the gym features certified personal trainers, group classes including yoga and Zumba, and personalized diet consultation. Whether you're a beginner or a fitness enthusiast, ${name} offers the perfect environment to achieve your health and fitness goals.`,
    "Doctor": `${name} is a well-established medical facility in ${area} providing comprehensive healthcare services. Rated ${rating}/5 by ${reviews} patients, the clinic is staffed by experienced doctors and specialists across multiple disciplines. Equipped with modern diagnostic equipment and an in-house laboratory, ${name} ensures accurate diagnosis and effective treatment. The caring medical team is committed to providing compassionate healthcare for individuals and families.`,
    "Hotel": `${name} is a premium hotel in ${area} offering comfortable accommodations and excellent hospitality. With a ${rating}/5 rating from ${reviews} guests, the hotel features well-appointed rooms, modern amenities, and attentive staff. Whether traveling for business or leisure, guests enjoy a pleasant stay with convenient access to local attractions. ${name} is dedicated to making every guest's experience memorable with its warm service and attention to detail.`,
    "Shopping": `${name} is a popular shopping destination in ${area} offering a wide range of quality products at competitive prices. Rated ${rating}/5 by ${reviews} shoppers, the store features a curated selection across multiple categories with friendly and knowledgeable staff to assist you. Known for genuine products, fair pricing, and excellent customer service, ${name} has built a loyal customer base in the locality.`,
    "Photographer": `${name} is a professional photography studio in ${area} known for creative captures and stunning visual storytelling. With a ${rating}/5 rating from ${reviews} clients, the studio specializes in portraits, event coverage, pre-wedding shoots, and commercial photography. Armed with professional equipment and a keen artistic eye, the team at ${name} transforms moments into timeless memories that you'll cherish forever.`,
    "Electronics": `${name} is a leading electronics store in ${area} offering the latest gadgets, appliances, and tech accessories. Rated ${rating}/5 by ${reviews} customers, the store carries products from top brands with genuine warranty coverage. The knowledgeable staff helps you find the perfect device for your needs and budget. From smartphones and laptops to home appliances and accessories, ${name} is your one-stop tech destination.`,
    "Pharmacy": `${name} is a trusted pharmacy in ${area} offering genuine medicines, health products, and wellness essentials. With a ${rating}/5 rating from ${reviews} customers, the pharmacy stocks prescription medicines, OTC products, personal care items, and medical equipment at competitive prices. Licensed pharmacists are available for consultation, ensuring you get the right health products with expert guidance.`,
  };
  return abouts[c] || `${name} is a well-established ${c.toLowerCase()} located in ${area}. With a ${rating}/5 rating from ${reviews} reviews, this business has built a strong reputation for quality service and customer satisfaction. The dedicated team at ${name} is committed to delivering excellence and ensuring every customer has a positive experience. With consistent quality and reliable service, it has become a trusted name in the area.`;
}

function getCategoryCuisines(category: string): string[] {
  const cuisines: Record<string, string[]> = {
    "Restaurant": ["North Indian", "Chinese", "Mughlai", "Fast Food", "Biryani", "South Indian", "Desserts", "Beverages"],
    "Cafe": ["Continental", "Italian", "Mexican", "Sandwiches", "Beverages", "Bakery", "Salads", "Coffee"],
  };
  return cuisines[category] || [];
}

function getCategoryAmenities(category: string): string[] {
  const amenities: Record<string, string[]> = {
    "Restaurant": ["Air Conditioned", "Indoor Seating", "Home Delivery", "Takeaway", "Parking Available", "WiFi", "Family Friendly", "Card Accepted"],
    "Cafe": ["Air Conditioned", "Indoor Seating", "WiFi", "Parking Available", "Card Accepted", "Outdoor Seating", "Power Outlets", "Pet Friendly"],
    "Hotel": ["Free WiFi", "Swimming Pool", "Restaurant", "Room Service", "Parking", "Air Conditioned", "Gym", "Spa"],
    "Salon": ["Air Conditioned", "WiFi", "Card Accepted", "Parking", "Unisex", "Appointments", "Home Service", "Sanitized Equipment"],
    "Gym": ["Air Conditioned", "Personal Training", "Cardio Zone", "Locker Room", "Parking", "WiFi", "Shower", "Diet Consultation"],
    "Doctor": ["Air Conditioned", "Waiting Area", "Parking", "Card Accepted", "Lab Facility", "Pharmacy", "Wheelchair Accessible", "Emergency"],
    "Shopping": ["Air Conditioned", "Parking", "Card Accepted", "WiFi", "Elevator", "Trial Room", "Return Policy", "Gift Wrapping"],
    "Photographer": ["Air Conditioned", "Parking", "WiFi", "Studio Space", "Outdoor Setup", "Props Available", "Card Accepted", "Editing Suite"],
    "Electronics": ["Air Conditioned", "Parking", "Card Accepted", "WiFi", "EMI Available", "Exchange Offers", "Service Center", "Home Delivery"],
    "Pharmacy": ["Air Conditioned", "Parking", "Card Accepted", "Home Delivery", "24/7 Available", "Insurance Accepted", "Doctor Consultation", "Vaccination"],
  };
  return amenities[category] || ["Air Conditioned", "Parking", "WiFi", "Card Accepted"];
}

function getCategoryPaymentMethods(category: string): string[] {
  const methods: Record<string, string[]> = {
    "Restaurant": ["Cash", "UPI", "Card", "Sodexo", "Net Banking"],
    "Cafe": ["Cash", "UPI", "Card", "Net Banking"],
    "Hotel": ["Cash", "UPI", "Card", "Net Banking", "EMI"],
    "Salon": ["Cash", "UPI", "Card"],
    "Gym": ["Cash", "UPI", "Card", "Net Banking", "EMI"],
    "Doctor": ["Cash", "UPI", "Card", "Insurance", "Net Banking"],
    "Shopping": ["Cash", "UPI", "Card", "Net Banking", "EMI"],
    "Photographer": ["Cash", "UPI", "Card", "Net Banking"],
    "Electronics": ["Cash", "UPI", "Card", "Net Banking", "EMI", "Bajaj Finserv"],
    "Pharmacy": ["Cash", "UPI", "Card", "Insurance"],
  };
  return methods[category] || ["Cash", "UPI", "Card"];
}

function getCategoryExperience(category: string): string {
  const exp: Record<string, string> = {
    "Restaurant": "8+ Years", "Cafe": "5+ Years", "Salon": "6+ Years",
    "Gym": "10+ Years", "Doctor": "15+ Years", "Hotel": "12+ Years",
    "Shopping": "7+ Years", "Photographer": "9+ Years", "Electronics": "11+ Years",
    "Pharmacy": "14+ Years",
  };
  return exp[category] || "5+ Years";
}

function getCategoryPhone(category: string): string {
  const phones: Record<string, string> = {
    "Restaurant": "+91 98765 43210", "Cafe": "+91 98765 87654", "Salon": "+91 98765 23456",
    "Gym": "+91 98765 34567", "Doctor": "+91 98765 45678", "Hotel": "+91 98765 56789",
    "Shopping": "+91 98765 67890", "Photographer": "+91 98765 78901", "Electronics": "+91 98765 89012",
    "Pharmacy": "+91 98765 90123",
  };
  return phones[category] || "+91 98765 XXXXX";
}

function getCategoryTimings(category: string): string {
  const timings: Record<string, string> = {
    "Restaurant": "11:00 AM - 11:00 PM", "Cafe": "8:00 AM - 11:00 PM",
    "Salon": "10:00 AM - 9:00 PM", "Gym": "5:00 AM - 10:00 PM",
    "Doctor": "9:00 AM - 8:00 PM", "Hotel": "24 Hours",
    "Shopping": "10:00 AM - 9:30 PM", "Photographer": "9:00 AM - 7:00 PM",
    "Electronics": "10:00 AM - 9:00 PM", "Pharmacy": "8:00 AM - 10:00 PM",
  };
  return timings[category] || "9:00 AM - 9:00 PM";
}

function getCategoryCloseTime(category: string): string {
  const closeTimes: Record<string, string> = {
    "Restaurant": "11 PM", "Cafe": "11 PM", "Salon": "9 PM",
    "Gym": "10 PM", "Doctor": "8 PM", "Hotel": "24/7",
    "Shopping": "9:30 PM", "Photographer": "7 PM",
    "Electronics": "9 PM", "Pharmacy": "10 PM",
  };
  return closeTimes[category] || "9 PM";
}

function getCategoryItemsLabel(category: string): string {
  const labels: Record<string, string> = {
    "Restaurant": "Popular Dishes", "Cafe": "Popular Items",
    "Salon": "Popular Services", "Gym": "Popular Programs",
    "Doctor": "Popular Services", "Hotel": "Popular Amenities",
    "Shopping": "Popular Products", "Photographer": "Popular Packages",
    "Electronics": "Popular Products", "Pharmacy": "Popular Products",
  };
  return labels[category] || "Popular Items";
}

function getPopularItems(business: ListingBusiness): Array<{ name: string; price: string; emoji: string; tag: string }> {
  const c = business.category;
  const items: Record<string, Array<{ name: string; price: string; emoji: string; tag: string }>> = {
    "Restaurant": [
      { name: "Paneer Tikka", price: "\u20b9349", emoji: "\ud83e\udd56", tag: "Bestseller" },
      { name: "Butter Chicken", price: "\u20b9449", emoji: "\ud83c\udf57", tag: "Popular" },
      { name: "Dal Makhani", price: "\u20b9299", emoji: "\ud83e\udd6b", tag: "" },
      { name: "Biryani Special", price: "\u20b9399", emoji: "\ud83c\udf35", tag: "Chef Special" },
      { name: "Naan Basket", price: "\u20b999", emoji: "\ud83c\udf70", tag: "" },
      { name: "Gulab Jamun", price: "\u20b9149", emoji: "\ud83c\udf6e", tag: "Popular" },
    ],
    "Cafe": [
      { name: "Cappuccino", price: "\u20b9249", emoji: "\u2615", tag: "Bestseller" },
      { name: "Margherita Pizza", price: "\u20b9399", emoji: "\ud83c\udf55", tag: "Popular" },
      { name: "Avocado Toast", price: "\u20b9349", emoji: "\ud83e\udd51", tag: "Chef Special" },
      { name: "Cold Brew", price: "\u20b9199", emoji: "\ud83e\uddcb", tag: "" },
      { name: "Brownie Sundae", price: "\u20b9299", emoji: "\ud83c\udf6a", tag: "Popular" },
      { name: "Caesar Salad", price: "\u20b9279", emoji: "\ud83e\udd57", tag: "" },
    ],
    "Salon": [
      { name: "Haircut & Styling", price: "\u20b9299", emoji: "\u2702\ufe0f", tag: "Bestseller" },
      { name: "Gold Facial", price: "\u20b9799", emoji: "\ud83d\udc87", tag: "Popular" },
      { name: "Global Hair Color", price: "\u20b91,299", emoji: "\ud83c\udfa8", tag: "" },
      { name: "Manicure & Pedicure", price: "\u20b9599", emoji: "\ud83d\udc85", tag: "" },
      { name: "Beard Grooming", price: "\u20b9149", emoji: "\ud83e\udd5e", tag: "Popular" },
      { name: "Keratin Treatment", price: "\u20b92,999", emoji: "\u2728", tag: "Chef Special" },
    ],
    "Gym": [
      { name: "Monthly Membership", price: "\u20b92,499", emoji: "\ud83c\udfcb\ufe0f", tag: "Bestseller" },
      { name: "Personal Training", price: "\u20b94,999", emoji: "\ud83d\udcaa", tag: "Popular" },
      { name: "Yoga Classes", price: "\u20b91,499", emoji: "\ud83e\uddd8", tag: "" },
      { name: "Diet Consultation", price: "\u20b9999", emoji: "\ud83e\udd57", tag: "" },
      { name: "CrossFit Program", price: "\u20b93,499", emoji: "\ud83d\udcaa", tag: "Chef Special" },
      { name: "Body Composition", price: "\u20b9499", emoji: "\ud83d\udccb", tag: "" },
    ],
    "Doctor": [
      { name: "General Consultation", price: "\u20b9799", emoji: "\ud83c\udfe5", tag: "Bestseller" },
      { name: "Full Body Checkup", price: "\u20b92,999", emoji: "\u2764\ufe0f", tag: "Popular" },
      { name: "Dental Cleaning", price: "\u20b91,299", emoji: "\ud83e\uddba", tag: "" },
      { name: "Eye Checkup", price: "\u20b9599", emoji: "\ud83d\udc41\ufe0f", tag: "" },
      { name: "Lab Tests Package", price: "\u20b91,299", emoji: "\ud83e\udea0", tag: "Popular" },
      { name: "Online Consult", price: "\u20b9499", emoji: "\ud83d\udcf1", tag: "" },
    ],
    "Hotel": [
      { name: "Deluxe Room", price: "\u20b93,499/night", emoji: "\ud83c\udfe8", tag: "Bestseller" },
      { name: "Suite Room", price: "\u20b97,999/night", emoji: "\ud83d\udee0\ufe0f", tag: "Popular" },
      { name: "Breakfast Buffet", price: "\u20b9499", emoji: "\ud83c\udf73", tag: "" },
      { name: "Airport Transfer", price: "\u20b91,499", emoji: "\ud83d\ude97", tag: "" },
      { name: "Spa Session", price: "\u20b92,499", emoji: "\ud83e\uddd6", tag: "Popular" },
      { name: "Conference Room", price: "\u20b94,999/day", emoji: "\ud83c\udf93", tag: "" },
    ],
    "Shopping": [
      { name: "Cotton T-Shirt", price: "\u20b9499", emoji: "\ud83d\udecd", tag: "Bestseller" },
      { name: "Denim Jeans", price: "\u20b91,299", emoji: "\ud83d\udc54", tag: "Popular" },
      { name: "Running Shoes", price: "\u20b92,999", emoji: "\ud83d\udc5f", tag: "" },
      { name: "Sunglasses", price: "\u20b91,499", emoji: "\ud83d\ude97", tag: "" },
      { name: "Leather Wallet", price: "\u20b9799", emoji: "\ud83c\udf92", tag: "Popular" },
      { name: "Backpack", price: "\u20b91,899", emoji: "\ud83c\udf92", tag: "" },
    ],
    "Photographer": [
      { name: "Portrait Session", price: "\u20b94,999", emoji: "\ud83d\udcf7", tag: "Bestseller" },
      { name: "Event Coverage", price: "\u20b914,999", emoji: "\ud83c\udf8f", tag: "Popular" },
      { name: "Pre-wedding Shoot", price: "\u20b924,999", emoji: "\ud83d\udc8d", tag: "Chef Special" },
      { name: "Product Photography", price: "\u20b92,999", emoji: "\ud83d\udcf8", tag: "" },
      { name: "Photo Album", price: "\u20b93,499", emoji: "\ud83d\udcda", tag: "" },
    ],
    "Electronics": [
      { name: "Wireless Earbuds", price: "\u20b91,299", emoji: "\ud83c\udfa7", tag: "Bestseller" },
      { name: "Power Bank 20K", price: "\u20b9999", emoji: "\ud83d\udd0b", tag: "Popular" },
      { name: "Smartwatch", price: "\u20b92,499", emoji: "\u231a", tag: "" },
      { name: "USB-C Cable", price: "\u20b9299", emoji: "\ud83d\udd0c", tag: "" },
      { name: "BT Speaker", price: "\u20b91,799", emoji: "\ud83d\udd0a", tag: "Popular" },
      { name: "Phone Cover", price: "\u20b9199", emoji: "\ud83d\udcf1", tag: "" },
    ],
    "Pharmacy": [
      { name: "Vitamin C 500mg", price: "\u20b9199", emoji: "\ud83d\udc8a", tag: "Bestseller" },
      { name: "Pain Relief Gel", price: "\u20b9150", emoji: "\ud83e\ude79", tag: "Popular" },
      { name: "Face Wash", price: "\u20b9249", emoji: "\ud83e\uddd4", tag: "" },
      { name: "Sanitizer Pack", price: "\u20b999", emoji: "\ud83e\uddfc", tag: "" },
      { name: "First Aid Kit", price: "\u20b9349", emoji: "\ud83c\udfe5", tag: "Popular" },
      { name: "Protein Powder", price: "\u20b91,899", emoji: "\ud83d\udcaa", tag: "" },
    ],
  };
  return items[c] || items["Shopping"]!;
}

function getSimilarStores(business: ListingBusiness): Array<ListingBusiness> {
  const slug = CATEGORY_SLUG_MAP[business.category];
  if (!slug) return [];
  const sameCategory = getBusinessesByCategory(slug).filter((b) => b.id !== business.id);
  return sameCategory.slice(0, 3);
}

/* ═══════════════════════════════════════════════════
   MOCK DATA GENERATORS
   ═══════════════════════════════════════════════════ */

function getMockMenu(businessName: string) {
  const isVeg = businessName.toLowerCase().includes("saravana") || businessName.toLowerCase().includes("bukhara");
  return [
    { name: "Paneer Tikka", price: "\u20b9349", emoji: isVeg ? "\ud83e\udd56" : "\ud83c\udf56", tag: "Bestseller", desc: "Marinated cottage cheese grilled to perfection" },
    { name: "Butter Chicken", price: "\u20b9449", emoji: "\ud83c\udf57", tag: "Popular", desc: "Creamy tomato-based chicken curry" },
    { name: "Dal Makhani", price: "\u20b9299", emoji: "\ud83e\udd6b", tag: "", desc: "Slow-cooked black lentils in butter" },
    { name: "Naan Basket", price: "\u20b999", emoji: "\ud83c\udf70", tag: "", desc: "Assorted fresh-baked naans" },
    { name: "Biryani Special", price: "\u20b9399", emoji: "\ud83c\udf35", tag: "Chef Special", desc: "Aromatic basmati rice layered with spices" },
    { name: "Gulab Jamun", price: "\u20b9149", emoji: "\ud83c\udf6e", tag: "", desc: "Deep-fried milk dumplings in sugar syrup" },
  ];
}

function getMockProducts(category: string) {
  const base: Record<string, Array<{ name: string; price: string; emoji: string; desc: string }>> = {
    Electronics: [
      { name: "Wireless Earbuds", price: "\u20b91,299", emoji: "\ud83c\udfa7", desc: "Bluetooth 5.3, 30hr battery" },
      { name: "Phone Cover", price: "\u20b9199", emoji: "\ud83d\udcf1", desc: "Premium silicone case" },
      { name: "USB Cable", price: "\u20b9299", emoji: "\ud83d\udd0c", desc: "Fast charging Type-C" },
      { name: "Power Bank", price: "\u20b9999", emoji: "\ud83d\udd0b", desc: "20000mAh portable charger" },
      { name: "Smartwatch", price: "\u20b92,499", emoji: "\u231a", desc: "AMOLED display, health tracking" },
      { name: "Bluetooth Speaker", price: "\u20b91,799", emoji: "\ud83d\udd0a", desc: "Waterproof, 12hr playtime" },
    ],
    Shopping: [
      { name: "Cotton T-Shirt", price: "\u20b9499", emoji: "\ud83d\udecd", desc: "100% premium cotton" },
      { name: "Denim Jeans", price: "\u20b91,299", emoji: "\ud83d\udc54", desc: "Slim fit stretch denim" },
      { name: "Running Shoes", price: "\u20b92,999", emoji: "\ud83d\udc5f", desc: "Lightweight mesh upper" },
      { name: "Leather Wallet", price: "\u20b9799", emoji: "\ud83c\udf92", desc: "Genuine leather, RFID block" },
      { name: "Sunglasses", price: "\u20b91,499", emoji: "\ud83d\ude97", desc: "UV400 polarized lenses" },
      { name: "Watch", price: "\u20b93,499", emoji: "\u231a", desc: "Stainless steel, water resistant" },
    ],
    Pharmacy: [
      { name: "Vitamin C Tablets", price: "\u20b9199", emoji: "\ud83d\udc8a", desc: "500mg, 60 tablets" },
      { name: "Pain Relief Gel", price: "\u20b9150", emoji: "\ud83e\ude79", desc: "Fast action formula" },
      { name: "Face Wash", price: "\u20b9249", emoji: "\ud83e\uddd4", desc: "Charcoal deep cleanse" },
      { name: "Sanitizer Pack", price: "\u20b999", emoji: "\ud83e\uddfc", desc: "Pack of 3, 70% alcohol" },
      { name: "First Aid Kit", price: "\u20b9349", emoji: "\ud83c\udfe5", desc: "50-piece emergency kit" },
      { name: "Protein Powder", price: "\u20b91,899", emoji: "\ud83d\udcaa", desc: "Whey isolate, 1kg" },
    ],
  };
  return base[category] || base["Shopping"]!;
}

function getMockServices(category: string) {
  const base: Record<string, Array<{ name: string; price: string; emoji: string; desc: string; duration: string }>> = {
    Salon: [
      { name: "Haircut", price: "\u20b9299", emoji: "\u2702\ufe0f", desc: "Professional styling with wash", duration: "30 min" },
      { name: "Facial", price: "\u20b9799", emoji: "\ud83d\udc87", desc: "Deep cleansing gold facial", duration: "45 min" },
      { name: "Hair Color", price: "\u20b91,299", emoji: "\ud83c\udfa8", desc: "Global hair coloring", duration: "90 min" },
      { name: "Manicure", price: "\u20b9399", emoji: "\ud83d\udc85", desc: "Nail care & grooming", duration: "25 min" },
      { name: "Beard Trim", price: "\u20b9149", emoji: "\ud83e\ude5e", desc: "Precision beard shaping", duration: "15 min" },
    ],
    Gym: [
      { name: "Monthly Membership", price: "\u20b92,499", emoji: "\ud83c\udfcb\ufe0f", desc: "Full gym + cardio access", duration: "30 days" },
      { name: "Personal Training", price: "\u20b94,999", emoji: "\ud83d\udcaa", desc: "1-on-1 session package", duration: "12 sessions" },
      { name: "Yoga Classes", price: "\u20b91,499", emoji: "\ud83e\uddd8", desc: "Group yoga sessions", duration: "16 classes" },
      { name: "Diet Consultation", price: "\u20b9999", emoji: "\ud83e\udd57", desc: "Custom diet plan", duration: "1 session" },
      { name: "Body Composition", price: "\u20b9499", emoji: "\ud83d\udccb", desc: "InBody analysis report", duration: "20 min" },
    ],
    Doctor: [
      { name: "General Consultation", price: "\u20b9799", emoji: "\ud83c\udfe5", desc: "Full health checkup", duration: "20 min" },
      { name: "Follow-up Visit", price: "\u20b9399", emoji: "\ud83d\udcdd", desc: "Review & assessment", duration: "15 min" },
      { name: "Lab Tests", price: "\u20b91,299", emoji: "\ud83e\udea0", desc: "Complete blood work", duration: "1 day" },
      { name: "Health Package", price: "\u20b92,999", emoji: "\u2764\ufe0f", desc: "Full body checkup", duration: "2 hours" },
      { name: "Online Consult", price: "\u20b9499", emoji: "\ud83d\udcf1", desc: "Video consultation", duration: "15 min" },
    ],
    Photographer: [
      { name: "Portrait Session", price: "\u20b94,999", emoji: "\ud83d\udcf7", desc: "Studio portrait shoot", duration: "2 hours" },
      { name: "Event Coverage", price: "\u20b914,999", emoji: "\ud83c\udf8f", desc: "Full day event coverage", duration: "8 hours" },
      { name: "Pre-wedding Shoot", price: "\u20b924,999", emoji: "\ud83d\udc8d", desc: "Creative pre-wedding", duration: "4 hours" },
      { name: "Product Photography", price: "\u20b92,999", emoji: "\ud83d\udcf8", desc: "E-commerce ready photos", duration: "3 hours" },
      { name: "Photo Album", price: "\u20b93,499", emoji: "\ud83d\udcda", desc: "Premium album design", duration: "5 days" },
    ],
  };
  return base[category] || base["Salon"]!;
}

function getMockReviews(businessName: string) {
  return [
    { name: "Rahul S.", avatar: "RS", rating: 5, text: `Excellent experience at ${businessName}! The quality of service is outstanding. Highly recommend to everyone looking for a great experience. Will definitely visit again.`, date: "2 days ago", helpful: 24, images: 3 },
    { name: "Priya M.", avatar: "PM", rating: 4, text: `Very good place. Staff is polite and professional. The ambiance is nice and prices are reasonable. Only suggestion would be to improve the waiting time during peak hours.`, date: "1 week ago", helpful: 18, images: 1 },
    { name: "Amit K.", avatar: "AK", rating: 5, text: `Been coming here for years. ${businessName} never disappoints. Consistent quality and great customer service. One of the best in the area!`, date: "2 weeks ago", helpful: 31, images: 2 },
    { name: "Sneha R.", avatar: "SR", rating: 4, text: `Good experience overall. The place is well-maintained and the staff is courteous. Would recommend for families and groups.`, date: "3 weeks ago", helpful: 12, images: 0 },
  ];
}

function getBusinessTypeLabel(type: BusinessType) {
  const map: Record<BusinessType, string> = { restaurant: "Restaurant", service: "Service Provider", store: "Store" };
  return map[type];
}

/* ═══════════════════════════════════════════════════
   SHARED TAB COMPONENTS
   ═══════════════════════════════════════════════════ */

function SectionHeader({ title, onSeeAll, isDesktop }: { title: string; onSeeAll?: () => void; isDesktop?: boolean }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h2 className={`${isDesktop ? "text-base" : "text-sm"} font-bold text-gray-800`}>{title}</h2>
      {onSeeAll && (
        <button onClick={onSeeAll} className="text-xs font-medium text-[#0056b3] flex items-center gap-0.5 hover:underline">
          View All <ChevronRight className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}

/* ── Overview Tab ── */
function OverviewTab({ business, isActive, isDesktop }: { business: ListingBusiness; isActive: boolean; isDesktop?: boolean }) {
  if (!isActive) return null;

  const aboutText = getCategoryAbout(business);
  const cuisines = getCategoryCuisines(business.category);
  const amenities = getCategoryAmenities(business.category);
  const payments = getCategoryPaymentMethods(business.category);
  const popularItems = getPopularItems(business);
  const similarStores = getSimilarStores(business);
  const itemsLabel = getCategoryItemsLabel(business.category);
  const timings = getCategoryTimings(business.category);
  const experience = getCategoryExperience(business.category);
  const phone = getCategoryPhone(business.category);

  return (
    <div className="space-y-5">
      {/* 1. About this Business */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <SectionHeader title="About this Business" isDesktop={isDesktop} />
        <p className={`${isDesktop ? "text-sm" : "text-xs"} text-gray-500 leading-relaxed`}>{aboutText}</p>
      </div>

      {/* 2. Key Details */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <SectionHeader title="Key Details" isDesktop={isDesktop} />
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Clock, label: "Timing", value: timings, color: "bg-emerald-50 text-emerald-600" },
            { icon: Award, label: "Experience", value: experience, color: "bg-amber-50 text-amber-600" },
            { icon: Phone, label: "Phone", value: phone, color: "bg-blue-50 text-blue-600" },
            { icon: MapPin, label: "Location", value: business.area, color: "bg-purple-50 text-purple-600" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
              <div className={`w-9 h-9 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                <item.icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-gray-400">{item.label}</p>
                <p className={`${isDesktop ? "text-xs" : "text-[11px]"} font-semibold text-gray-800 truncate`}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Cuisines (Restaurant/Cafe only) */}
      {cuisines.length > 0 && (
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <SectionHeader title="Cuisines" isDesktop={isDesktop} />
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {cuisines.map((c) => (
              <span key={c} className="text-xs font-medium text-gray-700 bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-full whitespace-nowrap shrink-0">
                {c}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 4. Payment Methods */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <SectionHeader title="Payment Methods" isDesktop={isDesktop} />
        <div className="flex flex-wrap gap-2">
          {payments.map((p) => (
            <span key={p} className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <CreditCard className="w-3 h-3 text-gray-400" />{p}
            </span>
          ))}
        </div>
      </div>

      {/* 5. Amenities & Features */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <SectionHeader title="Amenities & Features" isDesktop={isDesktop} />
        <div className="grid grid-cols-2 gap-2">
          {amenities.map((a) => (
            <div key={a} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className={`${isDesktop ? "text-xs" : "text-[11px]"} text-gray-700`}>{a}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Popular Items/Dishes/Services */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <SectionHeader title={itemsLabel} isDesktop={isDesktop} onSeeAll={() => {}} />
        <div className="space-y-2">
          {popularItems.slice(0, 4).map((item) => (
            <div key={item.name} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${business.coverGradient} flex items-center justify-center text-xl shrink-0 shadow-sm`}>
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className={`${isDesktop ? "text-sm" : "text-xs"} font-bold text-gray-800 truncate`}>{item.name}</h4>
                  {item.tag && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 whitespace-nowrap">{item.tag}</span>
                  )}
                </div>
                <p className={`${isDesktop ? "text-sm" : "text-xs"} font-bold text-[#0056b3] mt-0.5`}>{item.price}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* 7. Similar Stores Nearby */}
      {similarStores.length > 0 && (
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h2 className={`${isDesktop ? "text-base" : "text-sm"} font-bold text-gray-800`}>Similar Stores Nearby</h2>
            <Link href={`/explore?category=${CATEGORY_SLUG_MAP[business.category] || ""}`} className="text-xs text-[#0056b3] font-medium flex items-center gap-0.5 hover:underline">
              See All <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {similarStores.map((store, i) => (
              <StoreCard
                key={store.storeId}
                name={store.name}
                category={store.category}
                rating={store.rating}
                reviews={store.totalRatings}
                distance={store.distance}
                address={store.area}
                logoEmoji={store.logoEmoji}
                coverGradient={store.coverGradient}
                storeId={store.storeId}
                isFeatured={store.isFeatured}
                isOpen={store.isOpen}
                isVerified={store.isVerified}
                variant={isDesktop ? "desktop" : "mobile"}
                fluid
                index={i}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Menu Tab ── */
function MenuTab({ business, isActive, isDesktop }: { business: ListingBusiness; isActive: boolean; isDesktop?: boolean }) {
  if (!isActive) return null;
  const items = getMockMenu(business.name);

  return (
    <div>
      <SectionHeader title="Popular Menu" isDesktop={isDesktop} />
      <div className={isDesktop ? "grid grid-cols-2 md:grid-cols-3 gap-4" : "grid grid-cols-2 gap-2.5"}>
        {items.map((item) => (
          <div key={item.name} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow group">
            <div className={`h-20 bg-gradient-to-br ${business.coverGradient} flex items-center justify-center relative`}>
              <span className="text-3xl group-hover:scale-110 transition-transform">{item.emoji}</span>
              {item.tag && <div className="absolute top-1.5 left-1.5 text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-500/90 text-white">{item.tag}</div>}
            </div>
            <div className="p-2.5">
              <h3 className={`${isDesktop ? "text-sm" : "text-[12px]"} font-bold text-gray-800 truncate`}>{item.name}</h3>
              <p className="text-[10px] text-gray-400 mt-0.5 truncate">{item.desc}</p>
              <p className={`${isDesktop ? "text-sm" : "text-[13px]"} font-bold text-gray-900 mt-1`}>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Products Tab ── */
function ProductsTab({ business, isActive, isDesktop }: { business: ListingBusiness; isActive: boolean; isDesktop?: boolean }) {
  if (!isActive) return null;
  const products = getMockProducts(business.category);

  return (
    <div>
      <SectionHeader title="Popular Products" isDesktop={isDesktop} />
      <div className={isDesktop ? "grid grid-cols-2 md:grid-cols-3 gap-4" : "grid grid-cols-2 gap-2.5"}>
        {products.map((item) => (
          <div key={item.name} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow group">
            <div className={`h-20 bg-gradient-to-br ${business.coverGradient} flex items-center justify-center`}>
              <span className="text-3xl group-hover:scale-110 transition-transform">{item.emoji}</span>
            </div>
            <div className="p-2.5">
              <h3 className={`${isDesktop ? "text-sm" : "text-[12px]"} font-bold text-gray-800 truncate`}>{item.name}</h3>
              <p className="text-[10px] text-gray-400 mt-0.5 truncate">{item.desc}</p>
              <p className={`${isDesktop ? "text-sm" : "text-[13px]"} font-bold text-gray-900 mt-1`}>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Services Tab ── */
function ServicesTab({ business, isActive, isDesktop }: { business: ListingBusiness; isActive: boolean; isDesktop?: boolean }) {
  if (!isActive) return null;
  const services = getMockServices(business.category);

  return (
    <div>
      <SectionHeader title="Our Services" isDesktop={isDesktop} />
      <div className={isDesktop ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-2.5"}>
        {services.map((svc) => (
          <div key={svc.name} className="flex items-center gap-3 bg-white rounded-xl p-3.5 shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${business.coverGradient} flex items-center justify-center text-2xl shrink-0 shadow-sm`}>
              {svc.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className={`${isDesktop ? "text-sm" : "text-[13px]"} font-bold text-gray-800`}>{svc.name}</h3>
              <p className="text-[11px] text-gray-400">{svc.desc}</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-[13px] font-bold text-[#0056b3]">{svc.price}</p>
                <span className="text-[10px] text-gray-300">|</span>
                <span className="text-[10px] text-gray-400 flex items-center gap-0.5"><Clock className="w-2.5 h-2.5" />{svc.duration}</span>
              </div>
            </div>
            <button className="text-[10px] font-bold text-[#0056b3] bg-blue-50 px-3 py-1.5 rounded-lg shrink-0 hover:bg-blue-100 transition-colors">
              Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Gallery Tab ── */
function GalleryTab({ business, isActive, isDesktop }: { business: ListingBusiness; isActive: boolean; isDesktop?: boolean }) {
  if (!isActive) return null;
  const gradients = [
    business.coverGradient, "from-sky-400 to-blue-600", "from-amber-400 to-orange-600",
    "from-emerald-400 to-teal-600", "from-purple-400 to-violet-600", "from-rose-400 to-pink-600",
  ];
  const emojis = [business.logoEmoji, "\ud83c\udf7d\ufe0f", "\ud83d\udcf7", "\ud83d\udccc", "\u2728", "\ud83c\udf1f"];

  return (
    <div>
      <SectionHeader title="Gallery" isDesktop={isDesktop} />
      <div className={isDesktop ? "grid grid-cols-3 gap-3" : "grid grid-cols-3 gap-2"}>
        {gradients.map((grad, i) => (
          <div key={i} className={`bg-gradient-to-br ${grad} rounded-xl flex items-center justify-center ${isDesktop ? "h-40" : "h-24"} relative overflow-hidden group cursor-pointer hover:opacity-90 transition-opacity`}>
            <span className={`${isDesktop ? "text-4xl" : "text-2xl"} opacity-60 group-hover:scale-110 transition-transform`}>{emojis[i]}</span>
          </div>
        ))}
        <div className="bg-gray-100 rounded-xl flex items-center justify-center h-24 md:h-40 cursor-pointer hover:bg-gray-200 transition-colors">
          <span className={`${isDesktop ? "text-sm" : "text-[12px]"} font-medium text-gray-500`}>+48 More</span>
        </div>
      </div>
    </div>
  );
}

/* ── Reviews Tab ── */
function ReviewsTab({ business, isActive, isDesktop }: { business: ListingBusiness; isActive: boolean; isDesktop?: boolean }) {
  if (!isActive) return null;
  const reviews = getMockReviews(business.name);

  return (
    <div className="space-y-5">
      {/* Rating Summary */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100/80">
        <div className="flex items-center gap-6">
          <div className="text-center">
            <p className={`${isDesktop ? "text-4xl" : "text-3xl"} font-bold text-gray-900`}>{business.rating}</p>
            <div className="flex items-center gap-0.5 mt-1 justify-center">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className={`w-4 h-4 ${s <= Math.round(business.rating) ? "text-amber-500 fill-amber-500" : "text-gray-200"}`} />
              ))}
            </div>
            <p className={`mt-1 ${isDesktop ? "text-xs" : "text-[11px]"} text-gray-400`}>{business.totalRatings.toLocaleString()} reviews</p>
          </div>
          <div className="flex-1 space-y-2">
            {[5, 4, 3, 2, 1].map((star) => {
              const pct = star === 5 ? 58 : star === 4 ? 26 : star === 3 ? 10 : star === 2 ? 4 : 2;
              return (
                <div key={star} className="flex items-center gap-2">
                  <span className="text-[11px] text-gray-500 w-3">{star}</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-[10px] text-gray-400 w-7 text-right">{pct}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Review Cards */}
      {reviews.map((review) => (
        <div key={review.name} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100/80">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E0F2FE] to-[#F0F9FF] flex items-center justify-center text-[12px] font-bold text-[#0056b3] shrink-0">
              {review.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className={`${isDesktop ? "text-sm" : "text-[12px]"} font-bold text-gray-900`}>{review.name}</h4>
                <span className="text-[10px] text-gray-400">{review.date}</span>
              </div>
              <div className="flex items-center gap-0.5 mt-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className={`w-3 h-3 ${s <= review.rating ? "text-amber-500 fill-amber-500" : "text-gray-200"}`} />
                ))}
              </div>
              <p className={`${isDesktop ? "text-sm" : "text-[12px]"} text-gray-500 leading-relaxed mt-2`}>{review.text}</p>
              {review.images > 0 && (
                <div className="flex gap-1.5 mt-2.5">
                  {Array.from({ length: review.images }).map((_, i) => (
                    <div key={i} className={`w-12 h-12 rounded-lg bg-gradient-to-br ${business.coverGradient} flex items-center justify-center opacity-60`}>
                      <Camera className="w-3.5 h-3.5 text-white" />
                    </div>
                  ))}
                </div>
              )}
              <div className="flex items-center gap-4 mt-2.5">
                <button className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-gray-600 transition-colors">
                  <ThumbsUp className="w-3 h-3" /> Helpful ({review.helpful})
                </button>
                <button className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-gray-600 transition-colors">
                  <MessageSquare className="w-3 h-3" /> Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── About Tab ── */
function AboutTab({ business, isActive, isDesktop }: { business: ListingBusiness; isActive: boolean; isDesktop?: boolean }) {
  if (!isActive) return null;
  const amenities = getCategoryAmenities(business.category);
  const timings = getCategoryTimings(business.category);

  return (
    <div className="space-y-5">
      {/* About Text */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100/80">
        <h2 className={`${isDesktop ? "text-base" : "text-sm"} font-bold text-gray-800 mb-3`}>About {business.name}</h2>
        <p className={`${isDesktop ? "text-sm" : "text-xs"} text-gray-500 leading-relaxed`}>
          {getCategoryAbout(business)}
        </p>
      </div>

      {/* Information Cards */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100/80">
        <h2 className={`${isDesktop ? "text-base" : "text-sm"} font-bold text-gray-800 mb-4`}>Information</h2>
        <div className="space-y-4">
          {[
            { icon: Clock, label: "Timings", value: timings, sub: "Mon - Sun" },
            { icon: MapPin, label: "Location", value: business.area, sub: business.distance },
            { icon: Star, label: "Price Range", value: business.priceRange, sub: getBusinessTypeLabel(business.businessType) },
            { icon: Phone, label: "Contact", value: getCategoryPhone(business.category), sub: "Phone & WhatsApp" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F0F4FF] flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 text-[#0056b3]" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400">{item.label}</p>
                <p className={`${isDesktop ? "text-sm" : "text-[13px]"} font-semibold text-gray-800`}>{item.value}</p>
                <p className="text-[11px] text-gray-400">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facilities */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100/80">
        <h2 className={`${isDesktop ? "text-base" : "text-sm"} font-bold text-gray-800 mb-4`}>Facilities</h2>
        <div className="flex flex-wrap gap-2">
          {amenities.map((f) => (
            <span key={f} className="text-[11px] font-medium text-gray-600 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full">
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE STORE PAGE — App-like UI
   ═══════════════════════════════════════════════════════════════ */

function MobileStorePage({ business }: { business: ListingBusiness }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [isFavorite, setIsFavorite] = useState(false);
  const [showShareSheet, setShowShareSheet] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const scrolled = useScrollThreshold(120);
  const tabs = TAB_CONFIG[business.businessType];
  const closeTime = getCategoryCloseTime(business.category);

  const heroSlides = [
    { emoji: business.logoEmoji, gradient: business.coverGradient },
    { emoji: "\ud83c\udf7d\ufe0f", gradient: "from-sky-400 to-blue-600" },
    { emoji: "\ud83d\udcf7", gradient: "from-amber-400 to-orange-600" },
    { emoji: "\u2728", gradient: "from-emerald-400 to-teal-600" },
    { emoji: "\ud83c\udf1f", gradient: "from-purple-400 to-violet-600" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((s) => (s + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleTabChange = useCallback((key: string) => {
    setActiveTab(key);
  }, []);

  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-[#F8F9FA]" style={{ paddingBottom: "7.5rem" }}>
      {/* ── Hero Carousel ── */}
      <div className="relative h-56 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 transition-all duration-700 ease-out">
          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} flex items-center justify-center transition-opacity duration-700 ${i === heroSlide ? "opacity-100" : "opacity-0"}`}
            >
              <span className="text-[80px] opacity-80 drop-shadow-lg">{slide.emoji}</span>
            </div>
          ))}
        </div>

        {/* Top Overlay Bar */}
        <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-3 pt-3">
          <Link href="/explore" className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center" aria-label="Go back">
            <ArrowLeft className="w-5 h-5 text-white" />
          </Link>
          <div className="flex items-center gap-2">
            <button onClick={() => setShowShareSheet(true)} className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center" aria-label="Share business">
              <Share2 className="w-4 h-4 text-white" />
            </button>
            <button onClick={() => setIsFavorite(!isFavorite)} className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center" aria-label="Save to favorites">
              <Heart className={`w-4 h-4 ${isFavorite ? "text-red-400 fill-red-400" : "text-white"}`} />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
          {heroSlides.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === heroSlide ? "w-5 bg-white" : "w-1.5 bg-white/50"}`} />
          ))}
        </div>

        {/* Photo Counter */}
        <div className="absolute bottom-3 right-3 z-20 bg-black/50 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
          <Camera className="w-3 h-3" /> 1/{heroSlides.length}
        </div>

        {/* Featured & Open Badges */}
        {business.isFeatured && (
          <div className="absolute top-14 left-3 z-20 text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-500/90 text-white backdrop-blur-sm">
            {"\u2b50 Featured"}
          </div>
        )}
        <div className={`absolute bottom-3 left-3 z-20 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm ${business.isOpen ? "bg-emerald-500/90 text-white" : "bg-red-500/90 text-white"}`}>
          {business.isOpen ? "Open Now" : "Closed"}
        </div>
      </div>

      {/* ── Info Card (overlapping hero) ── */}
      <div className="bg-white mx-3 -mt-10 rounded-2xl p-4 shadow-sm relative z-10 border border-gray-100/80">
        <div className="flex items-start gap-3">
          <div className={`w-[60px] h-[60px] rounded-xl bg-gradient-to-br ${business.coverGradient} flex items-center justify-center text-[28px] -mt-12 border-4 border-white shadow-md shrink-0`}>
            {business.logoEmoji}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <h1 className="text-[15px] font-bold text-gray-900 truncate leading-tight">{business.name}</h1>
              {business.isVerified && <BadgeCheck className="w-4 h-4 text-[#1D9BF0] shrink-0" />}
            </div>
            <p className="text-[11px] text-gray-400 mt-0.5 truncate">
              {business.category} {"\u2022"} {business.area}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-0.5 bg-emerald-600 text-white text-[11px] font-bold px-1.5 py-0.5 rounded-md">
                  <span>{business.rating}</span>
                  <Star className="w-2.5 h-2.5 fill-white" />
                </div>
                <span className="text-[11px] text-gray-400">({business.totalRatings.toLocaleString()})</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="text-[11px] text-gray-400 flex items-center gap-0.5">
                <MapPin className="w-3 h-3" />{business.distance}
              </span>
              <span className="text-[11px] text-gray-400">{"\u2022"}</span>
              <span className="text-[11px] text-gray-400">{business.priceRange}</span>
              <span className="text-[11px] text-gray-400">{"\u2022"}</span>
              <span className="text-[11px] text-gray-400">Closes {closeTime}</span>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex gap-2 mt-4">
          <button className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600 text-white font-semibold text-[12px] py-2.5 rounded-xl active:scale-[0.97] transition-transform shadow-sm shadow-emerald-600/20 min-h-[48px]" aria-label="Call business">
            <Phone className="w-3.5 h-3.5" /> Call
          </button>
          <button className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white font-semibold text-[12px] py-2.5 rounded-xl active:scale-[0.97] transition-transform shadow-sm shadow-green-600/20 min-h-[48px]" aria-label="Send WhatsApp message">
            <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
          </button>
          <button className="flex-1 flex items-center justify-center gap-1.5 bg-[#0056b3] text-white font-semibold text-[12px] py-2.5 rounded-xl active:scale-[0.97] transition-transform shadow-sm shadow-blue-600/20 min-h-[48px]" aria-label="Get directions">
            <Navigation className="w-3.5 h-3.5" /> Directions
          </button>
        </div>
      </div>

      {/* ── Trust Badges ── */}
      <div className="mx-3 mt-3 flex gap-2">
        {business.isVerified && (
          <div className="flex-1 bg-blue-50 rounded-xl p-2.5 flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center"><Shield className="w-3.5 h-3.5 text-blue-600" /></div>
            <div><p className="text-[10px] font-bold text-blue-800">Verified</p><p className="text-[9px] text-blue-500">Identity confirmed</p></div>
          </div>
        )}
        <div className="flex-1 bg-amber-50 rounded-xl p-2.5 flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center"><Award className="w-3.5 h-3.5 text-amber-600" /></div>
          <div><p className="text-[10px] font-bold text-amber-800">Top Rated</p><p className="text-[9px] text-amber-500">4.0+ rating</p></div>
        </div>
        <div className="flex-1 bg-emerald-50 rounded-xl p-2.5 flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center"><TrendingUp className="w-3.5 h-3.5 text-emerald-600" /></div>
          <div><p className="text-[10px] font-bold text-emerald-800">Popular</p><p className="text-[9px] text-emerald-500">{business.totalRatings.toLocaleString()}+ views</p></div>
        </div>
      </div>

      {/* ── Tab Navigation ── */}
      <div className="bg-white mt-3 border-y border-gray-100 sticky top-0 z-40">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`flex items-center gap-1.5 px-4 py-3 text-[12px] font-semibold whitespace-nowrap border-b-2 transition-all shrink-0 ${
                activeTab === tab.key
                  ? "text-[#0056b3] border-[#0056b3] bg-blue-50/50"
                  : "text-gray-400 border-transparent"
              }`}
            >
              <tab.icon className={`w-3.5 h-3.5 ${activeTab === tab.key ? "text-[#0056b3]" : ""}`} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tab Content ── */}
      <div className="mx-3 mt-3">
        <OverviewTab business={business} isActive={activeTab === "overview"} />
        {business.businessType === "store" && <ProductsTab business={business} isActive={activeTab === "products"} />}
        {business.businessType === "service" && <ServicesTab business={business} isActive={activeTab === "services"} />}
        {business.businessType === "restaurant" && <MenuTab business={business} isActive={activeTab === "menu"} />}
        <GalleryTab business={business} isActive={activeTab === "gallery"} />
        <ReviewsTab business={business} isActive={activeTab === "reviews"} />
        <AboutTab business={business} isActive={activeTab === "about"} />
      </div>

      {/* ── Share Sheet ── */}
      {showShareSheet && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[60]" onClick={() => setShowShareSheet(false)} />
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white rounded-t-2xl z-[61] p-5 animate-slide-up">
            <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
            <h3 className="text-sm font-bold text-gray-900 text-center mb-4">Share this business</h3>
            <div className="flex items-center justify-around mb-4">
              {[
                { emoji: "\ud83d\udcf1", label: "WhatsApp" },
                { emoji: "\ud83d\udce7", label: "Message" },
                { emoji: "\ud83d\udc64", label: "Instagram" },
                { emoji: "\ud83d\udc24", label: "Twitter" },
                { emoji: "\ud83d\udccb", label: "Copy Link" },
              ].map((s) => (
                <button key={s.label} className="flex flex-col items-center gap-1.5 active:scale-90 transition-transform" aria-label={`Share via ${s.label}`}>
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">{s.emoji}</div>
                  <span className="text-[10px] text-gray-500">{s.label}</span>
                </button>
              ))}
            </div>
            <button onClick={() => setShowShareSheet(false)} className="w-full py-3 text-center text-sm font-semibold text-red-500 border-t border-gray-100 mt-1">
              Cancel
            </button>
          </div>
        </>
      )}

      {/* ── Fixed Bottom Action Bar + Nav ── */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white z-50 border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        {/* CTA Buttons */}
        <div className="flex items-center gap-2 px-3 pt-3 pb-1.5">
          <button className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600 text-white font-bold text-[12px] py-3 rounded-xl active:scale-[0.97] transition-transform min-h-[48px]" aria-label="Call business now">
            <Phone className="w-4 h-4" /> Call Now
          </button>
          <button className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white font-bold text-[12px] py-3 rounded-xl active:scale-[0.97] transition-transform min-h-[48px]" aria-label="Send WhatsApp message">
            <MessageSquare className="w-4 h-4" /> WhatsApp
          </button>
          <button className="flex-1 flex items-center justify-center gap-1.5 bg-[#0056b3] text-white font-bold text-[12px] py-3 rounded-xl active:scale-[0.97] transition-transform min-h-[48px]" aria-label="Get directions">
            <Navigation className="w-4 h-4" /> Directions
          </button>
        </div>
        {/* Bottom Navigation */}
        <nav className="flex items-center justify-around pt-1 pb-1 border-t border-gray-50">
          {[
            { icon: Home, label: "Home", href: "/", active: false },
            { icon: BarChart3, label: "Leads", href: "#", active: false },
            { icon: Briefcase, label: "B2B", href: "#", active: false },
            { icon: Newspaper, label: "News", href: "#", active: false },
            { icon: MoreHorizontal, label: "More", href: "#", active: false },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="flex flex-col items-center gap-0.5 py-1.5 px-3 active:scale-90 transition-transform" aria-label={item.label}>
              <item.icon className={`w-5 h-5 ${item.active ? "text-[#0056b3]" : "text-gray-400"}`} />
              <span className={`text-[9px] font-medium ${item.active ? "text-[#0056b3]" : "text-gray-400"}`}>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="h-[env(safe-area-inset-bottom)]" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DESKTOP STORE PAGE — Premium 2-column UI
   ═══════════════════════════════════════════════════════════════ */

function DesktopStorePage({ business }: { business: ListingBusiness }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [bookmarked, setBookmarked] = useState(false);
  const [enquiryText, setEnquiryText] = useState("");
  const tabs = TAB_CONFIG[business.businessType];
  const timings = getCategoryTimings(business.category);
  const phone = getCategoryPhone(business.category);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Top Nav ── */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-12">
          <div className="flex items-center gap-4">
            <Link href="/explore" className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors" aria-label="Go back">
              <ArrowLeft className="w-4 h-4" /><span className="text-sm">Back</span>
            </Link>
            <div className="w-px h-5 bg-gray-200" />
            <span className="text-xs text-gray-400">Home &gt; {business.category} &gt; <span className="text-gray-600">{business.name}</span></span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 text-xs font-medium transition-colors" aria-label="Share business">
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
            <button onClick={() => setBookmarked(!bookmarked)} className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 text-xs font-medium transition-colors" aria-label="Save business">
              <Bookmark className={`w-3.5 h-3.5 transition-colors ${bookmarked ? "fill-[#e42529] text-[#e42529]" : ""}`} /> Save
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero Banner ── */}
      <div className={`h-72 bg-gradient-to-br ${business.coverGradient} flex items-center justify-center relative`}>
        <span className="text-[120px] opacity-50 drop-shadow-2xl">{business.logoEmoji}</span>
        {business.isFeatured && <div className="absolute top-6 left-6 text-xs font-bold px-3 py-1.5 rounded-full bg-amber-500/90 text-white backdrop-blur-sm">{"\u2b50 Featured"}</div>}
        <div className={`absolute top-6 right-6 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm ${business.isOpen ? "bg-emerald-500/90 text-white" : "bg-red-500/90 text-white"}`}>
          {business.isOpen ? "Open Now" : "Closed"}
        </div>
        <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <Camera className="w-3.5 h-3.5" /> 1/12 Photos
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* ── Main Content: 2-column layout ── */}
        <div className="flex gap-6">
          {/* LEFT COLUMN — Tabs & Content */}
          <div className="flex-1 min-w-0">
            {/* Business Info Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm -mt-12 relative z-10 mb-6 border border-gray-100">
              <div className="flex items-start gap-5">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${business.coverGradient} flex items-center justify-center text-5xl -mt-16 border-4 border-white shadow-xl shrink-0`}>
                  {business.logoEmoji}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2.5">
                    <h1 className="text-2xl font-bold text-gray-900">{business.name}</h1>
                    {business.isVerified && <BadgeCheck className="w-5 h-5 text-[#1D9BF0]" />}
                    {business.isFeatured && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">Featured</span>}
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    {business.category} {"\u2022"} {business.area}
                  </p>
                  <div className="flex items-center gap-5 mt-3">
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-0.5 bg-emerald-600 text-white text-sm font-bold px-2 py-0.5 rounded-md">
                        {business.rating} <Star className="w-3 h-3 fill-white" />
                      </div>
                      <span className="text-sm text-gray-400">({business.totalRatings.toLocaleString()} Reviews)</span>
                    </div>
                    <span className="text-sm text-gray-400 flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{business.distance}</span>
                    <span className="text-sm text-gray-400">{business.priceRange}</span>
                    <div className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${business.isOpen ? "text-emerald-600 bg-emerald-50" : "text-red-500 bg-red-50"}`}>
                      <CircleDot className={`w-2.5 h-2.5 ${business.isOpen ? "fill-emerald-500" : "fill-red-500"}`} />
                      {business.isOpen ? "Open Now" : "Closed"}
                    </div>
                  </div>

                  {/* Trust Row */}
                  <div className="flex items-center gap-3 mt-4">
                    {business.isVerified && (
                      <div className="flex items-center gap-1.5 text-xs text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full font-medium">
                        <Shield className="w-3 h-3" /> Verified
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 text-xs text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full font-medium">
                      <Award className="w-3 h-3" /> Top Rated
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full font-medium">
                      <Users className="w-3 h-3" /> {business.totalRatings.toLocaleString()}+ views
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 mt-5">
                    <button className="flex items-center gap-2 bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-600/20" aria-label="Call business">
                      <Phone className="w-4 h-4" /> Call
                    </button>
                    <button className="flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-green-700 transition-colors shadow-sm shadow-green-600/20" aria-label="Send WhatsApp message">
                      <MessageSquare className="w-4 h-4" /> WhatsApp
                    </button>
                    <button className="flex items-center gap-2 bg-[#0056b3] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#004494] transition-colors shadow-sm shadow-blue-600/20" aria-label="Get directions">
                      <Navigation className="w-4 h-4" /> Directions
                    </button>
                    <button className="flex items-center gap-2 bg-gray-100 text-gray-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-200 transition-colors" aria-label="Visit website">
                      <ExternalLink className="w-4 h-4" /> Website
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Section */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="flex border-b border-gray-100">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold border-b-2 transition-all ${
                      activeTab === tab.key
                        ? "text-[#0056b3] border-[#0056b3] bg-blue-50/30"
                        : "text-gray-400 border-transparent hover:text-gray-600 hover:bg-gray-50/50"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" /> {tab.label}
                  </button>
                ))}
              </div>
              <div className="p-6">
                <OverviewTab business={business} isActive={activeTab === "overview"} isDesktop />
                {business.businessType === "store" && <ProductsTab business={business} isActive={activeTab === "products"} isDesktop />}
                {business.businessType === "service" && <ServicesTab business={business} isActive={activeTab === "services"} isDesktop />}
                {business.businessType === "restaurant" && <MenuTab business={business} isActive={activeTab === "menu"} isDesktop />}
                <GalleryTab business={business} isActive={activeTab === "gallery"} isDesktop />
                <ReviewsTab business={business} isActive={activeTab === "reviews"} isDesktop />
                <AboutTab business={business} isActive={activeTab === "about"} isDesktop />
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="w-80 shrink-0 space-y-5">
            {/* 1. Contact Information */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm sticky top-20">
              <h3 className="text-sm font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400">Phone</p>
                    <p className="text-[13px] font-semibold text-gray-800">{phone}</p>
                    <p className="text-[11px] text-gray-400">Alt: +91 98765 11111</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400">Timings</p>
                    <p className="text-[13px] font-semibold text-gray-800">{timings}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <CircleDot className={`w-2 h-2 ${business.isOpen ? "fill-emerald-500 text-emerald-500" : "fill-red-500 text-red-500"}`} />
                      <span className={`text-[11px] font-semibold ${business.isOpen ? "text-emerald-600" : "text-red-500"}`}>
                        {business.isOpen ? "Open now" : "Closed"} &bull; Open all 7 days
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400">Full Address</p>
                    <p className="text-[13px] font-semibold text-gray-800">{business.area}, Near City Center</p>
                    <p className="text-[11px] text-gray-400">{business.distance} away</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400">Email</p>
                    <p className="text-[13px] font-semibold text-gray-800">info@{business.name.toLowerCase().replace(/\s+/g, "")}.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400">Website</p>
                    <p className="text-[13px] font-semibold text-[#0056b3] hover:underline cursor-pointer">www.{business.name.toLowerCase().replace(/\s+/g, "")}.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Quick Enquiry */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900">Quick Enquiry</h3>
              <p className="text-[11px] text-gray-400 mt-0.5 mb-3">Send an enquiry to this business</p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="I'd like to know about..."
                  value={enquiryText}
                  onChange={(e) => setEnquiryText(e.target.value)}
                  className="w-full text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3] transition-all placeholder:text-gray-300"
                  aria-label="Enquiry message"
                />
                <button className="w-full flex items-center justify-center gap-2 bg-[#0056b3] text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-[#004494] transition-colors" aria-label="Send enquiry">
                  <Send className="w-4 h-4" /> Send Enquiry
                </button>
              </div>
            </div>

            {/* 3. JustDial Verified */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-[#1D9BF0]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">JustDial Verified</h3>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-relaxed">
                    This business is verified by JustDial. Identity, address, and phone number have been confirmed.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Connect */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Connect</h3>
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#1877F2] text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-[#166FE5] transition-colors" aria-label="Connect on Facebook">
                  <Facebook className="w-4 h-4" /> Facebook
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white text-xs font-semibold py-2.5 rounded-xl hover:opacity-90 transition-opacity" aria-label="Connect on Instagram">
                  <Instagram className="w-4 h-4" /> Instagram
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function StorePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const isMobile = useWindowSize() < 768;
  const searchParams = useSearchParams();
  const highlightProductId = searchParams.get("product") || undefined;
  const business = getBusinessById(id);

  // Fallback: if not found in business-listing-data, try store-data
  const storeFromData = !business ? getStoreById(id) : undefined;

  if (!business && !storeFromData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">{"\ud83d\udd0d"}</div>
          <h1 className="text-xl font-bold text-gray-800">Business Not Found</h1>
          <p className="text-sm text-gray-400 mt-1">The business you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="inline-block mt-4 text-sm font-medium text-[#0056b3] hover:underline">Go Home</Link>
        </div>
      </div>
    );
  }

  // store-data fallback: render component-based store pages with highlight support
  if (storeFromData) {
    if (isMobile) return <MobileStoreDetailView store={storeFromData} highlightProductId={highlightProductId} />;
    return <DesktopStoreDetailView store={storeFromData} highlightProductId={highlightProductId} />;
  }

  if (isMobile) return <MobileStorePage business={business} />;
  return <DesktopStorePage business={business} />;
}