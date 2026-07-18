module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/business-listing-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "businesses",
    ()=>businesses,
    "extendedCategories",
    ()=>extendedCategories,
    "getBusinessById",
    ()=>getBusinessById,
    "getBusinessCountByCategory",
    ()=>getBusinessCountByCategory,
    "getBusinessCountByCategoryName",
    ()=>getBusinessCountByCategoryName,
    "getBusinessesByCategory",
    ()=>getBusinessesByCategory,
    "getCategoryMeta",
    ()=>getCategoryMeta,
    "getFeaturedByCategory",
    ()=>getFeaturedByCategory,
    "listingCategories",
    ()=>listingCategories
]);
const listingCategories = [
    {
        slug: "restaurants",
        label: "Restaurants",
        icon: "\ud83c\udf7d\ufe0f",
        color: "#D97706",
        bg: "#FEF3C7"
    },
    {
        slug: "hotels",
        label: "Hotels",
        icon: "\ud83c\udfe8",
        color: "#2563EB",
        bg: "#DBEAFE"
    },
    {
        slug: "cafes",
        label: "Cafes",
        icon: "\u2615",
        color: "#7C3AED",
        bg: "#F3E8FF"
    },
    {
        slug: "shopping",
        label: "Shopping",
        icon: "\ud83d\udecd\ufe0f",
        color: "#DC2626",
        bg: "#FEE2E2"
    },
    {
        slug: "photographers",
        label: "Photographers",
        icon: "\ud83d\udcf8",
        color: "#059669",
        bg: "#ECFDF5"
    },
    {
        slug: "doctors",
        label: "Doctors",
        icon: "\ud83c\udfe5",
        color: "#0891B2",
        bg: "#ECFEFF"
    },
    {
        slug: "salons",
        label: "Salons",
        icon: "\ud83d\udc87",
        color: "#DB2777",
        bg: "#FCE7F3"
    },
    {
        slug: "gyms",
        label: "Gyms",
        icon: "\ud83d\udcaa",
        color: "#EA580C",
        bg: "#FFF7ED"
    },
    {
        slug: "electronics",
        label: "Electronics",
        icon: "\ud83d\udd27",
        color: "#4F46E5",
        bg: "#EEF2FF"
    },
    {
        slug: "pharmacies",
        label: "Pharmacies",
        icon: "\ud83d\udc8a",
        color: "#16A34A",
        bg: "#F0FDF4"
    },
    {
        slug: "travel-agents",
        label: "Travel Agents",
        icon: "\ud83d\udea2",
        color: "#0284C7",
        bg: "#E0F2FE"
    },
    {
        slug: "wedding-planners",
        label: "Wedding Planners",
        icon: "\ud83d\udc8d",
        color: "#BE185D",
        bg: "#FDF2F8"
    },
    {
        slug: "schools",
        label: "Schools",
        icon: "\ud83c\udfeb",
        color: "#1D4ED8",
        bg: "#DBEAFE"
    },
    {
        slug: "interior-design",
        label: "Interior Design",
        icon: "\ud83c\udfe0",
        color: "#B45309",
        bg: "#FFFBEB"
    },
    {
        slug: "ac-repair",
        label: "AC Repair",
        icon: "\u2744\ufe0f",
        color: "#0D9488",
        bg: "#F0FDFA"
    },
    {
        slug: "plumbers",
        label: "Plumbers",
        icon: "\ud83d\udd27",
        color: "#2563EB",
        bg: "#EFF6FF"
    },
    {
        slug: "electricians",
        label: "Electricians",
        icon: "\u26a1",
        color: "#CA8A04",
        bg: "#FEFCE8"
    },
    {
        slug: "painters",
        label: "Painters",
        icon: "\ud83c\udfa8",
        color: "#9333EA",
        bg: "#FAF5FF"
    },
    {
        slug: "pest-control",
        label: "Pest Control",
        icon: "\ud83d\udc1b",
        color: "#15803D",
        bg: "#F0FDF4"
    },
    {
        slug: "carpenters",
        label: "Carpenters",
        icon: "\ud83e\ude9a",
        color: "#92400E",
        bg: "#FFFBEB"
    },
    {
        slug: "deep-cleaning",
        label: "Deep Cleaning",
        icon: "\u2728",
        color: "#6366F1",
        bg: "#EEF2FF"
    }
];
const businesses = [
    // ---- Restaurants ----
    {
        id: "biz-r-001",
        storeId: "STR-10001",
        name: "Bukhara - ITC Maurya",
        category: "Restaurant",
        area: "Diplomatic Enclave, Delhi",
        rating: 4.7,
        totalRatings: 8900,
        distance: "3.2 km",
        priceRange: "$$$$",
        logoEmoji: "\ud83c\udf7d\ufe0f",
        coverGradient: "from-orange-500 to-red-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "restaurant"
    },
    {
        id: "biz-r-002",
        storeId: "STR-10002",
        name: "Saravana Bhavan",
        category: "Restaurant",
        area: "Connaught Place, Delhi",
        rating: 4.3,
        totalRatings: 12400,
        distance: "1.8 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udf5b",
        coverGradient: "from-green-500 to-emerald-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "restaurant"
    },
    {
        id: "biz-r-003",
        storeId: "STR-10003",
        name: "Trishna Restaurant",
        category: "Restaurant",
        area: "Kala Ghoda, Mumbai",
        rating: 4.5,
        totalRatings: 6700,
        distance: "2.4 km",
        priceRange: "$$$",
        logoEmoji: "\ud83c\udf63",
        coverGradient: "from-red-500 to-rose-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "restaurant"
    },
    {
        id: "biz-r-004",
        storeId: "STR-10004",
        name: "Pind Balluchi",
        category: "Restaurant",
        area: "Nehru Place, Delhi",
        rating: 4.1,
        totalRatings: 5600,
        distance: "5.1 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udf56",
        coverGradient: "from-amber-500 to-orange-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "restaurant"
    },
    {
        id: "biz-r-005",
        storeId: "STR-10005",
        name: "Bademiya Roadside Kitchen",
        category: "Restaurant",
        area: "Taj Mahal Palace, Mumbai",
        rating: 4.4,
        totalRatings: 9200,
        distance: "1.1 km",
        priceRange: "$$",
        logoEmoji: "\ud83e\udd69",
        coverGradient: "from-yellow-500 to-red-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "restaurant"
    },
    {
        id: "biz-r-006",
        storeId: "STR-10006",
        name: "Pinch of Spice",
        category: "Restaurant",
        area: "Sadar Bazaar, Agra",
        rating: 4.4,
        totalRatings: 5100,
        distance: "3.2 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udf36\ufe0f",
        coverGradient: "from-red-600 to-orange-700",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "restaurant"
    },
    {
        id: "biz-r-007",
        storeId: "STR-10007",
        name: "Karim's",
        category: "Restaurant",
        area: "Jama Masjid, Delhi",
        rating: 4.5,
        totalRatings: 15800,
        distance: "4.5 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udf57",
        coverGradient: "from-red-700 to-amber-800",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "restaurant"
    },
    {
        id: "biz-r-008",
        storeId: "STR-10008",
        name: "Cafe Mondegar",
        category: "Restaurant",
        area: "Colaba, Mumbai",
        rating: 4.2,
        totalRatings: 4300,
        distance: "0.8 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udf7a",
        coverGradient: "from-teal-500 to-cyan-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "restaurant"
    },
    // ---- Hotels ----
    {
        id: "biz-h-001",
        storeId: "STR-20001",
        name: "The Taj Mahal Palace",
        category: "Hotel",
        area: "Apollo Bunder, Mumbai",
        rating: 4.8,
        totalRatings: 12400,
        distance: "1.0 km",
        priceRange: "$$$$",
        logoEmoji: "\ud83c\udfe8",
        coverGradient: "from-slate-600 to-zinc-700",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "store"
    },
    {
        id: "biz-h-002",
        storeId: "STR-20002",
        name: "The Oberoi Amarvilas",
        category: "Hotel",
        area: "Taj East Gate Road, Agra",
        rating: 4.9,
        totalRatings: 7800,
        distance: "5.0 km",
        priceRange: "$$$$",
        logoEmoji: "\ud83c\udfe0",
        coverGradient: "from-purple-500 to-violet-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "store"
    },
    {
        id: "biz-h-003",
        storeId: "STR-20003",
        name: "ITC Maurya",
        category: "Hotel",
        area: "Diplomatic Enclave, Delhi",
        rating: 4.7,
        totalRatings: 8900,
        distance: "3.2 km",
        priceRange: "$$$$",
        logoEmoji: "\ud83c\udfe8",
        coverGradient: "from-amber-600 to-yellow-700",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "store"
    },
    {
        id: "biz-h-004",
        storeId: "STR-20004",
        name: "Hotel Trident",
        category: "Hotel",
        area: "Nariman Point, Mumbai",
        rating: 4.5,
        totalRatings: 6200,
        distance: "2.8 km",
        priceRange: "$$$",
        logoEmoji: "\ud83d\udcdc",
        coverGradient: "from-blue-500 to-indigo-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-h-005",
        storeId: "STR-20005",
        name: "Radisson Blu Agra",
        category: "Hotel",
        area: "Fatehabad Road, Agra",
        rating: 4.2,
        totalRatings: 3400,
        distance: "5.5 km",
        priceRange: "$$$",
        logoEmoji: "\ud83c\udfe8",
        coverGradient: "from-sky-500 to-blue-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-h-006",
        storeId: "STR-20006",
        name: "The Lalit New Delhi",
        category: "Hotel",
        area: "Barakhamba, Delhi",
        rating: 4.4,
        totalRatings: 5100,
        distance: "2.1 km",
        priceRange: "$$$",
        logoEmoji: "\ud83c\udfe0",
        coverGradient: "from-rose-500 to-pink-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-h-007",
        storeId: "STR-20007",
        name: "Hotel Marina",
        category: "Hotel",
        area: "Colaba, Mumbai",
        rating: 3.9,
        totalRatings: 2800,
        distance: "1.2 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udfe8",
        coverGradient: "from-cyan-500 to-teal-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-h-008",
        storeId: "STR-20008",
        name: "Hotel Clarks Shiraz",
        category: "Hotel",
        area: "Fatehabad Road, Agra",
        rating: 4.1,
        totalRatings: 4100,
        distance: "5.2 km",
        priceRange: "$$$",
        logoEmoji: "\ud83c\udfe8",
        coverGradient: "from-emerald-500 to-green-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    // ---- Cafes ----
    {
        id: "biz-c-001",
        storeId: "STR-30001",
        name: "Barista Coffee",
        category: "Cafe",
        area: "Connaught Place, Delhi",
        rating: 4.0,
        totalRatings: 7800,
        distance: "1.5 km",
        priceRange: "$$",
        logoEmoji: "\u2615",
        coverGradient: "from-amber-600 to-yellow-700",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "restaurant"
    },
    {
        id: "biz-c-002",
        storeId: "STR-30002",
        name: "The Bombay Canteen",
        category: "Cafe",
        area: "Kamala Mills, Mumbai",
        rating: 4.5,
        totalRatings: 6200,
        distance: "4.2 km",
        priceRange: "$$$",
        logoEmoji: "\ud83c\udf77",
        coverGradient: "from-emerald-500 to-green-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "restaurant"
    },
    {
        id: "biz-c-003",
        storeId: "STR-30003",
        name: "Kunzum Travel Cafe",
        category: "Cafe",
        area: "Hauz Khas, Delhi",
        rating: 4.3,
        totalRatings: 3100,
        distance: "6.8 km",
        priceRange: "$",
        logoEmoji: "\u2708\ufe0f",
        coverGradient: "from-orange-500 to-amber-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "restaurant"
    },
    {
        id: "biz-c-004",
        storeId: "STR-30004",
        name: "Leopold Cafe",
        category: "Cafe",
        area: "Colaba, Mumbai",
        rating: 4.3,
        totalRatings: 9400,
        distance: "1.0 km",
        priceRange: "$$",
        logoEmoji: "\u2615",
        coverGradient: "from-yellow-500 to-amber-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "restaurant"
    },
    {
        id: "biz-c-005",
        storeId: "STR-30005",
        name: "United Coffee House",
        category: "Cafe",
        area: "Connaught Place, Delhi",
        rating: 4.2,
        totalRatings: 5600,
        distance: "1.8 km",
        priceRange: "$$",
        logoEmoji: "\u2615",
        coverGradient: "from-brown-500 to-amber-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "restaurant"
    },
    {
        id: "biz-c-006",
        storeId: "STR-30006",
        name: "Prithvi Cafe",
        category: "Cafe",
        area: "Juhu, Mumbai",
        rating: 4.4,
        totalRatings: 4500,
        distance: "8.5 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udf7a",
        coverGradient: "from-teal-500 to-emerald-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "restaurant"
    },
    {
        id: "biz-c-007",
        storeId: "STR-30007",
        name: "Shah Jahan Cafe & Lounge",
        category: "Cafe",
        area: "Fatehabad Road, Agra",
        rating: 4.3,
        totalRatings: 1800,
        distance: "5.1 km",
        priceRange: "$$",
        logoEmoji: "\u2615",
        coverGradient: "from-violet-500 to-purple-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "restaurant"
    },
    {
        id: "biz-c-008",
        storeId: "STR-30008",
        name: "Blue Tokai Coffee Roasters",
        category: "Cafe",
        area: "Saket, Delhi",
        rating: 4.6,
        totalRatings: 3900,
        distance: "5.4 km",
        priceRange: "$$",
        logoEmoji: "\u2615",
        coverGradient: "from-sky-600 to-blue-700",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "restaurant"
    },
    {
        id: "biz-c-009",
        storeId: "STR-30009",
        name: "Kala Ghoda Cafe",
        category: "Cafe",
        area: "Kala Ghoda, Mumbai",
        rating: 4.4,
        totalRatings: 3200,
        distance: "2.0 km",
        priceRange: "$$",
        logoEmoji: "\ud83e\uddcb",
        coverGradient: "from-fuchsia-500 to-pink-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "restaurant"
    },
    // ---- Shopping ----
    {
        id: "biz-s-001",
        storeId: "STR-40001",
        name: "Chandni Chowk Market",
        category: "Shopping",
        area: "Old Delhi, Delhi",
        rating: 4.0,
        totalRatings: 18200,
        distance: "4.5 km",
        priceRange: "$",
        logoEmoji: "\ud83d\udecd\ufe0f",
        coverGradient: "from-orange-500 to-red-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "store"
    },
    {
        id: "biz-s-002",
        storeId: "STR-40002",
        name: "Colaba Causeway Market",
        category: "Shopping",
        area: "Colaba, Mumbai",
        rating: 4.1,
        totalRatings: 11500,
        distance: "1.2 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udecd\ufe0f",
        coverGradient: "from-pink-500 to-rose-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "store"
    },
    {
        id: "biz-s-003",
        storeId: "STR-40003",
        name: "Sadar Bazaar",
        category: "Shopping",
        area: "Sadar Bazaar, Delhi",
        rating: 3.9,
        totalRatings: 9800,
        distance: "3.8 km",
        priceRange: "$",
        logoEmoji: "\ud83c\udfea",
        coverGradient: "from-amber-500 to-yellow-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-s-004",
        storeId: "STR-40004",
        name: "Linking Road Market",
        category: "Shopping",
        area: "Bandra, Mumbai",
        rating: 4.0,
        totalRatings: 7600,
        distance: "7.2 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udecd\ufe0f",
        coverGradient: "from-violet-500 to-purple-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-s-005",
        storeId: "STR-40005",
        name: "Kinari Bazaar",
        category: "Shopping",
        area: "Jama Masjid, Agra",
        rating: 4.1,
        totalRatings: 4300,
        distance: "5.0 km",
        priceRange: "$",
        logoEmoji: "\ud83d\udecd\ufe0f",
        coverGradient: "from-rose-500 to-pink-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-s-006",
        storeId: "STR-40006",
        name: "Select Citywalk Mall",
        category: "Shopping",
        area: "Saket, Delhi",
        rating: 4.4,
        totalRatings: 14200,
        distance: "5.6 km",
        priceRange: "$$$",
        logoEmoji: "\ud83c\udfed",
        coverGradient: "from-blue-500 to-indigo-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "store"
    },
    {
        id: "biz-s-007",
        storeId: "STR-40007",
        name: "Phoenix Marketcity",
        category: "Shopping",
        area: "Kurla, Mumbai",
        rating: 4.3,
        totalRatings: 12800,
        distance: "9.5 km",
        priceRange: "$$$",
        logoEmoji: "\ud83c\udfed",
        coverGradient: "from-emerald-500 to-teal-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-s-008",
        storeId: "STR-40008",
        name: "Palika Bazaar",
        category: "Shopping",
        area: "Connaught Place, Delhi",
        rating: 3.8,
        totalRatings: 8900,
        distance: "1.6 km",
        priceRange: "$",
        logoEmoji: "\ud83d\udecd\ufe0f",
        coverGradient: "from-red-500 to-orange-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "store"
    },
    // ---- Photographers ----
    {
        id: "biz-p-001",
        storeId: "STR-50001",
        name: "Canvera Digital Studio",
        category: "Photographer",
        area: "Karol Bagh, Delhi",
        rating: 4.5,
        totalRatings: 3400,
        distance: "4.2 km",
        priceRange: "$$$",
        logoEmoji: "\ud83d\udcf8",
        coverGradient: "from-emerald-500 to-teal-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-p-002",
        storeId: "STR-50002",
        name: "The Wedding Story",
        category: "Photographer",
        area: "Bandra, Mumbai",
        rating: 4.8,
        totalRatings: 2800,
        distance: "7.8 km",
        priceRange: "$$$$",
        logoEmoji: "\ud83d\udcf7",
        coverGradient: "from-rose-500 to-pink-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-p-003",
        storeId: "STR-50003",
        name: "Delhi Photography Studio",
        category: "Photographer",
        area: "Pragati Maidan, Delhi",
        rating: 4.4,
        totalRatings: 1200,
        distance: "3.0 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udcf8",
        coverGradient: "from-sky-500 to-blue-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-p-004",
        storeId: "STR-50004",
        name: "Agra Photo Studio",
        category: "Photographer",
        area: "Sadar Bazaar, Agra",
        rating: 4.5,
        totalRatings: 980,
        distance: "4.8 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udcf8",
        coverGradient: "from-green-500 to-emerald-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-p-005",
        storeId: "STR-50005",
        name: "Mumbai Photo Tours",
        category: "Photographer",
        area: "Colaba, Mumbai",
        rating: 4.6,
        totalRatings: 780,
        distance: "1.3 km",
        priceRange: "$$$",
        logoEmoji: "\ud83d\udcf7",
        coverGradient: "from-cyan-500 to-teal-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-p-006",
        storeId: "STR-50006",
        name: "Dreambox Photography",
        category: "Photographer",
        area: "Lajpat Nagar, Delhi",
        rating: 4.3,
        totalRatings: 2100,
        distance: "6.1 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udcf8",
        coverGradient: "from-purple-500 to-violet-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-p-007",
        storeId: "STR-50007",
        name: "Taj Photowalks by Ravi",
        category: "Photographer",
        area: "Taj Ganj, Agra",
        rating: 4.7,
        totalRatings: 620,
        distance: "5.1 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udcf7",
        coverGradient: "from-amber-500 to-orange-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    // ---- Doctors ----
    {
        id: "biz-d-001",
        storeId: "STR-60001",
        name: "Dr. Rajesh Sharma - General Physician",
        category: "Doctor",
        area: "Safdarjung Enclave, Delhi",
        rating: 4.6,
        totalRatings: 5600,
        distance: "3.8 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udfe5",
        coverGradient: "from-cyan-500 to-teal-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-d-002",
        storeId: "STR-60002",
        name: "Dr. Anita Desai - Dermatologist",
        category: "Doctor",
        area: "Andheri, Mumbai",
        rating: 4.7,
        totalRatings: 3400,
        distance: "6.2 km",
        priceRange: "$$$",
        logoEmoji: "\ud83d\udc69\u200d\u2695\ufe0f",
        coverGradient: "from-rose-500 to-pink-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-d-003",
        storeId: "STR-60003",
        name: "Dr. Suresh Gupta - Orthopedic",
        category: "Doctor",
        area: "Karol Bagh, Delhi",
        rating: 4.4,
        totalRatings: 4200,
        distance: "4.5 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udfe5",
        coverGradient: "from-blue-500 to-indigo-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-d-004",
        storeId: "STR-60004",
        name: "Dr. Priya Mehta - Pediatrician",
        category: "Doctor",
        area: "Breach Candy, Mumbai",
        rating: 4.8,
        totalRatings: 2800,
        distance: "5.1 km",
        priceRange: "$$$",
        logoEmoji: "\ud83d\udc67\u200d\u2695\ufe0f",
        coverGradient: "from-emerald-500 to-green-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-d-005",
        storeId: "STR-60005",
        name: "Dr. VK Agarwal - ENT Specialist",
        category: "Doctor",
        area: "Civil Lines, Agra",
        rating: 4.3,
        totalRatings: 1900,
        distance: "5.5 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udfe5",
        coverGradient: "from-sky-500 to-blue-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-d-006",
        storeId: "STR-60006",
        name: "Dr. Meena Kapoor - Gynecologist",
        category: "Doctor",
        area: "Greater Kailash, Delhi",
        rating: 4.5,
        totalRatings: 3800,
        distance: "7.2 km",
        priceRange: "$$$",
        logoEmoji: "\ud83c\udfe5",
        coverGradient: "from-pink-500 to-rose-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-d-007",
        storeId: "STR-60007",
        name: "Dr. Arun Jha - Cardiologist",
        category: "Doctor",
        area: "Parel, Mumbai",
        rating: 4.6,
        totalRatings: 2200,
        distance: "8.0 km",
        priceRange: "$$$",
        logoEmoji: "\u2764\ufe0f",
        coverGradient: "from-red-500 to-rose-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-d-008",
        storeId: "STR-60008",
        name: "Dr. Rakesh Verma - Dentist",
        category: "Doctor",
        area: "MG Road, Agra",
        rating: 4.2,
        totalRatings: 1500,
        distance: "4.8 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udfe5",
        coverGradient: "from-teal-500 to-cyan-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    // ---- Salons ----
    {
        id: "biz-sa-001",
        storeId: "STR-70001",
        name: "Lakme Salon",
        category: "Salon",
        area: "Connaught Place, Delhi",
        rating: 4.3,
        totalRatings: 8900,
        distance: "1.4 km",
        priceRange: "$$$",
        logoEmoji: "\ud83d\udc87",
        coverGradient: "from-pink-500 to-rose-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-sa-002",
        storeId: "STR-70002",
        name: "Jawed Habib Hair & Beauty",
        category: "Salon",
        area: "Dwarka, Delhi",
        rating: 4.0,
        totalRatings: 12400,
        distance: "8.5 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udc87",
        coverGradient: "from-fuchsia-500 to-purple-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-sa-003",
        storeId: "STR-70003",
        name: "Enrich Salon",
        category: "Salon",
        area: "Bandra, Mumbai",
        rating: 4.4,
        totalRatings: 5600,
        distance: "7.5 km",
        priceRange: "$$$",
        logoEmoji: "\ud83d\udc87",
        coverGradient: "from-rose-400 to-pink-500",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-sa-004",
        storeId: "STR-70004",
        name: "Natural Salon & Spa",
        category: "Salon",
        area: "MG Road, Agra",
        rating: 4.1,
        totalRatings: 2300,
        distance: "5.0 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udc87",
        coverGradient: "from-violet-500 to-purple-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-sa-005",
        storeId: "STR-70005",
        name: "Truefitt & Hill",
        category: "Salon",
        area: "India Gate, Delhi",
        rating: 4.6,
        totalRatings: 3200,
        distance: "2.8 km",
        priceRange: "$$$$",
        logoEmoji: "\ud83e\udde5",
        coverGradient: "from-amber-500 to-yellow-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-sa-006",
        storeId: "STR-70006",
        name: "BBlunt Salon",
        category: "Salon",
        area: "Juhu, Mumbai",
        rating: 4.3,
        totalRatings: 4100,
        distance: "8.8 km",
        priceRange: "$$$",
        logoEmoji: "\ud83d\udc87",
        coverGradient: "from-cyan-500 to-blue-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-sa-007",
        storeId: "STR-70007",
        name: "Green Trends Unisex Salon",
        category: "Salon",
        area: "Noida Sector 18, Delhi NCR",
        rating: 3.9,
        totalRatings: 6800,
        distance: "12.0 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udc87",
        coverGradient: "from-green-500 to-emerald-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-sa-008",
        storeId: "STR-70008",
        name: "Looks Salon",
        category: "Salon",
        area: "Kamla Nagar, Delhi",
        rating: 4.2,
        totalRatings: 3500,
        distance: "5.5 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udc87",
        coverGradient: "from-orange-400 to-red-500",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    // ---- Gyms ----
    {
        id: "biz-g-001",
        storeId: "STR-80001",
        name: "Gold's Gym",
        category: "Gym",
        area: "Saket, Delhi",
        rating: 4.3,
        totalRatings: 7200,
        distance: "5.2 km",
        priceRange: "$$$",
        logoEmoji: "\ud83d\udcaa",
        coverGradient: "from-orange-500 to-red-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-g-002",
        storeId: "STR-80002",
        name: "Cult.fit",
        category: "Gym",
        area: "Koramangala, Mumbai",
        rating: 4.4,
        totalRatings: 9800,
        distance: "6.5 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udfcb\ufe0f",
        coverGradient: "from-purple-500 to-violet-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-g-003",
        storeId: "STR-80003",
        name: "Anytime Fitness",
        category: "Gym",
        area: "Connaught Place, Delhi",
        rating: 4.2,
        totalRatings: 4500,
        distance: "1.8 km",
        priceRange: "$$$",
        logoEmoji: "\ud83d\udcaa",
        coverGradient: "from-red-500 to-orange-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-g-004",
        storeId: "STR-80004",
        name: "Talwalkars Gym",
        category: "Gym",
        area: "Andheri, Mumbai",
        rating: 4.0,
        totalRatings: 5600,
        distance: "7.0 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udcaa",
        coverGradient: "from-blue-500 to-indigo-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-g-005",
        storeId: "STR-80005",
        name: "Power House Gym",
        category: "Gym",
        area: "Sadar Bazaar, Agra",
        rating: 4.1,
        totalRatings: 1800,
        distance: "4.5 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udfcb\ufe0f",
        coverGradient: "from-emerald-500 to-green-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-g-006",
        storeId: "STR-80006",
        name: "CrossFit Omnis",
        category: "Gym",
        area: "Okhla, Delhi",
        rating: 4.5,
        totalRatings: 2100,
        distance: "7.8 km",
        priceRange: "$$$",
        logoEmoji: "\ud83d\udcaa",
        coverGradient: "from-amber-500 to-orange-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-g-007",
        storeId: "STR-80007",
        name: "Fitso by Cult",
        category: "Gym",
        area: "Bandra, Mumbai",
        rating: 4.3,
        totalRatings: 3400,
        distance: "8.0 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udfcb\ufe0f",
        coverGradient: "from-teal-500 to-cyan-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    // ---- Electronics ----
    {
        id: "biz-e-001",
        storeId: "STR-90001",
        name: "Croma Electronics",
        category: "Electronics",
        area: "Nehru Place, Delhi",
        rating: 4.2,
        totalRatings: 8900,
        distance: "5.1 km",
        priceRange: "$$$",
        logoEmoji: "\ud83d\udd27",
        coverGradient: "from-blue-500 to-indigo-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "store"
    },
    {
        id: "biz-e-002",
        storeId: "STR-90002",
        name: "Vijay Sales",
        category: "Electronics",
        area: "Connaught Place, Delhi",
        rating: 4.1,
        totalRatings: 6700,
        distance: "1.5 km",
        priceRange: "$$$",
        logoEmoji: "\ud83d\udcf1",
        coverGradient: "from-red-500 to-rose-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-e-003",
        storeId: "STR-90003",
        name: "Reliance Digital",
        category: "Electronics",
        area: "Phoenix Marketcity, Mumbai",
        rating: 4.0,
        totalRatings: 5400,
        distance: "9.5 km",
        priceRange: "$$$",
        logoEmoji: "\ud83d\udcf1",
        coverGradient: "from-indigo-500 to-purple-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-e-004",
        storeId: "STR-90004",
        name: "Bajaj Electronics",
        category: "Electronics",
        area: "MG Road, Agra",
        rating: 4.3,
        totalRatings: 3200,
        distance: "4.8 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udcbb",
        coverGradient: "from-sky-500 to-blue-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-e-005",
        storeId: "STR-90005",
        name: "Poorvika Mobiles",
        category: "Electronics",
        area: "T. Nagar, Mumbai",
        rating: 4.1,
        totalRatings: 4200,
        distance: "10.2 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udcf1",
        coverGradient: "from-emerald-500 to-teal-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-e-006",
        storeId: "STR-90006",
        name: "Gadgets 360 Store",
        category: "Electronics",
        area: "Karol Bagh, Delhi",
        rating: 3.9,
        totalRatings: 2800,
        distance: "4.0 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udcf1",
        coverGradient: "from-violet-500 to-purple-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-e-007",
        storeId: "STR-90007",
        name: "Apple Store BKC",
        category: "Electronics",
        area: "Bandra Kurla Complex, Mumbai",
        rating: 4.7,
        totalRatings: 11200,
        distance: "8.3 km",
        priceRange: "$$$$",
        logoEmoji: "\ud83d\udcf1",
        coverGradient: "from-gray-600 to-zinc-700",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "store"
    },
    {
        id: "biz-e-008",
        storeId: "STR-90008",
        name: "Sangeeta Mobiles",
        category: "Electronics",
        area: "Lajpat Nagar, Delhi",
        rating: 4.0,
        totalRatings: 3600,
        distance: "6.3 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udcf1",
        coverGradient: "from-orange-500 to-amber-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    // ---- Pharmacies ----
    {
        id: "biz-ph-001",
        storeId: "STR-100001",
        name: "Apollo Pharmacy",
        category: "Pharmacy",
        area: "Safdarjung, Delhi",
        rating: 4.4,
        totalRatings: 7800,
        distance: "3.5 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udc8a",
        coverGradient: "from-green-500 to-emerald-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "store"
    },
    {
        id: "biz-ph-002",
        storeId: "STR-100002",
        name: "MedPlus Pharmacy",
        category: "Pharmacy",
        area: "Andheri, Mumbai",
        rating: 4.2,
        totalRatings: 5600,
        distance: "6.0 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udc8a",
        coverGradient: "from-teal-500 to-cyan-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-ph-003",
        storeId: "STR-100003",
        name: "Netmeds Pharmacy",
        category: "Pharmacy",
        area: "Connaught Place, Delhi",
        rating: 4.1,
        totalRatings: 4200,
        distance: "1.6 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udc8a",
        coverGradient: "from-emerald-500 to-green-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-ph-004",
        storeId: "STR-100004",
        name: "1mg Pharmacy",
        category: "Pharmacy",
        area: "Civil Lines, Agra",
        rating: 4.3,
        totalRatings: 2800,
        distance: "5.2 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udc8a",
        coverGradient: "from-sky-500 to-blue-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-ph-005",
        storeId: "STR-100005",
        name: "MediBuddy Pharmacy",
        category: "Pharmacy",
        area: "Dadar, Mumbai",
        rating: 4.0,
        totalRatings: 3100,
        distance: "5.8 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udc8a",
        coverGradient: "from-lime-500 to-green-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-ph-006",
        storeId: "STR-100006",
        name: "Fortis Pharmacy",
        category: "Pharmacy",
        area: "Vasant Kunj, Delhi",
        rating: 4.5,
        totalRatings: 2200,
        distance: "8.0 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udc8a",
        coverGradient: "from-red-500 to-rose-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "store"
    },
    {
        id: "biz-ph-007",
        storeId: "STR-100007",
        name: "PharmEasy Store",
        category: "Pharmacy",
        area: "Ghatkopar, Mumbai",
        rating: 4.2,
        totalRatings: 3800,
        distance: "9.0 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udc8a",
        coverGradient: "from-cyan-500 to-teal-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    // ---- Travel Agents ----
    {
        id: "biz-ta-001",
        storeId: "STR-110001",
        name: "MakeMyTrip Office",
        category: "Travel Agent",
        area: "Connaught Place, Delhi",
        rating: 4.3,
        totalRatings: 8900,
        distance: "1.2 km",
        priceRange: "$$",
        logoEmoji: "\u2708\ufe0f",
        coverGradient: "from-blue-500 to-indigo-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-ta-002",
        storeId: "STR-110002",
        name: "SOTC Travel",
        category: "Travel Agent",
        area: "Nariman Point, Mumbai",
        rating: 4.2,
        totalRatings: 5400,
        distance: "3.0 km",
        priceRange: "$$$",
        logoEmoji: "\ud83d\udea2",
        coverGradient: "from-sky-500 to-blue-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-ta-003",
        storeId: "STR-110003",
        name: "Thomas Cook India",
        category: "Travel Agent",
        area: "Ashram Road, Mumbai",
        rating: 4.1,
        totalRatings: 4200,
        distance: "4.5 km",
        priceRange: "$$$",
        logoEmoji: "\ud83c\udf0d",
        coverGradient: "from-emerald-500 to-green-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-ta-004",
        storeId: "STR-110004",
        name: "Delhi Heritage Tours",
        category: "Travel Agent",
        area: "Paharganj, Delhi",
        rating: 4.4,
        totalRatings: 3200,
        distance: "3.8 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udea2",
        coverGradient: "from-amber-500 to-orange-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-ta-005",
        storeId: "STR-110005",
        name: "Mughal Heritage Tours",
        category: "Travel Agent",
        area: "Fatehabad Road, Agra",
        rating: 4.6,
        totalRatings: 2100,
        distance: "5.0 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udea2",
        coverGradient: "from-orange-500 to-red-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-ta-006",
        storeId: "STR-110006",
        name: "Cox & Kings",
        category: "Travel Agent",
        area: "Fort, Mumbai",
        rating: 4.3,
        totalRatings: 3800,
        distance: "2.5 km",
        priceRange: "$$$",
        logoEmoji: "\ud83c\udf0d",
        coverGradient: "from-violet-500 to-purple-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-ta-007",
        storeId: "STR-110007",
        name: "Yatra Travel Services",
        category: "Travel Agent",
        area: "Rajouri Garden, Delhi",
        rating: 4.0,
        totalRatings: 2900,
        distance: "7.2 km",
        priceRange: "$$",
        logoEmoji: "\u2708\ufe0f",
        coverGradient: "from-rose-500 to-pink-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    // ---- Wedding Planners ----
    {
        id: "biz-wp-001",
        storeId: "STR-120001",
        name: "The Wedding Design Company",
        category: "Wedding Planner",
        area: "Greater Kailash, Delhi",
        rating: 4.7,
        totalRatings: 3400,
        distance: "7.5 km",
        priceRange: "$$$$",
        logoEmoji: "\ud83d\udc8d",
        coverGradient: "from-rose-500 to-pink-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-wp-002",
        storeId: "STR-120002",
        name: "Shaadi Squad",
        category: "Wedding Planner",
        area: "Bandra, Mumbai",
        rating: 4.6,
        totalRatings: 2800,
        distance: "8.0 km",
        priceRange: "$$$$",
        logoEmoji: "\ud83d\udc8d",
        coverGradient: "from-pink-500 to-fuchsia-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-wp-003",
        storeId: "STR-120003",
        name: "Amit & Associates Wedding Planners",
        category: "Wedding Planner",
        area: "Mehrauli, Delhi",
        rating: 4.4,
        totalRatings: 1900,
        distance: "8.2 km",
        priceRange: "$$$",
        logoEmoji: "\ud83d\udc8d",
        coverGradient: "from-purple-500 to-violet-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-wp-004",
        storeId: "STR-120004",
        name: "The A-Cube Project",
        category: "Wedding Planner",
        area: "Juhu, Mumbai",
        rating: 4.5,
        totalRatings: 2200,
        distance: "9.0 km",
        priceRange: "$$$$",
        logoEmoji: "\ud83d\udc8d",
        coverGradient: "from-amber-500 to-orange-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-wp-005",
        storeId: "STR-120005",
        name: "Agra Royal Weddings",
        category: "Wedding Planner",
        area: "Fatehabad Road, Agra",
        rating: 4.3,
        totalRatings: 1200,
        distance: "5.2 km",
        priceRange: "$$$",
        logoEmoji: "\ud83d\udc8d",
        coverGradient: "from-red-500 to-rose-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-wp-006",
        storeId: "STR-120006",
        name: "WeddingSutra Planning",
        category: "Wedding Planner",
        area: "Linking Road, Mumbai",
        rating: 4.6,
        totalRatings: 1800,
        distance: "7.8 km",
        priceRange: "$$$$",
        logoEmoji: "\ud83d\udc8d",
        coverGradient: "from-fuchsia-500 to-pink-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-wp-007",
        storeId: "STR-120007",
        name: "Dream Day Weddings",
        category: "Wedding Planner",
        area: "Lajpat Nagar, Delhi",
        rating: 4.2,
        totalRatings: 1500,
        distance: "6.0 km",
        priceRange: "$$$",
        logoEmoji: "\ud83d\udc8d",
        coverGradient: "from-teal-500 to-cyan-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    // ---- Schools ----
    {
        id: "biz-sc-001",
        storeId: "STR-130001",
        name: "Delhi Public School",
        category: "School",
        area: "Mathura Road, Delhi",
        rating: 4.5,
        totalRatings: 6800,
        distance: "6.2 km",
        priceRange: "$$$",
        logoEmoji: "\ud83c\udfeb",
        coverGradient: "from-blue-500 to-indigo-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "store"
    },
    {
        id: "biz-sc-002",
        storeId: "STR-130002",
        name: "Dhirubhai Ambani International School",
        category: "School",
        area: "Bandra Kurla Complex, Mumbai",
        rating: 4.8,
        totalRatings: 4200,
        distance: "8.5 km",
        priceRange: "$$$$",
        logoEmoji: "\ud83c\udfeb",
        coverGradient: "from-emerald-500 to-green-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "store"
    },
    {
        id: "biz-sc-003",
        storeId: "STR-130003",
        name: "Modern School",
        category: "School",
        area: "Barakhamba, Delhi",
        rating: 4.6,
        totalRatings: 5400,
        distance: "2.0 km",
        priceRange: "$$$",
        logoEmoji: "\ud83c\udfeb",
        coverGradient: "from-sky-500 to-blue-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-sc-004",
        storeId: "STR-130004",
        name: "Cathedral and John Connon School",
        category: "School",
        area: "Mumbai",
        rating: 4.7,
        totalRatings: 3100,
        distance: "4.5 km",
        priceRange: "$$$$",
        logoEmoji: "\ud83c\udfeb",
        coverGradient: "from-violet-500 to-purple-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-sc-005",
        storeId: "STR-130005",
        name: "St. Peter's College",
        category: "School",
        area: "Agra",
        rating: 4.2,
        totalRatings: 2800,
        distance: "5.8 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udfeb",
        coverGradient: "from-amber-500 to-orange-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-sc-006",
        storeId: "STR-130006",
        name: "Sanskriti School",
        category: "School",
        area: "Chanakyapuri, Delhi",
        rating: 4.5,
        totalRatings: 3600,
        distance: "4.0 km",
        priceRange: "$$$",
        logoEmoji: "\ud83c\udfeb",
        coverGradient: "from-teal-500 to-cyan-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-sc-007",
        storeId: "STR-130007",
        name: "Campion School",
        category: "School",
        area: "Cooperage, Mumbai",
        rating: 4.4,
        totalRatings: 2400,
        distance: "3.2 km",
        priceRange: "$$$",
        logoEmoji: "\ud83c\udfeb",
        coverGradient: "from-rose-500 to-pink-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    // ---- Interior Design ----
    {
        id: "biz-id-001",
        storeId: "STR-140001",
        name: "Livspace Interior Design",
        category: "Interior Design",
        area: "Nehru Place, Delhi",
        rating: 4.4,
        totalRatings: 5600,
        distance: "5.0 km",
        priceRange: "$$$",
        logoEmoji: "\ud83c\udfe0",
        coverGradient: "from-amber-500 to-orange-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "store"
    },
    {
        id: "biz-id-002",
        storeId: "STR-140002",
        name: "Urban Ladder Interiors",
        category: "Interior Design",
        area: "Lower Parel, Mumbai",
        rating: 4.3,
        totalRatings: 4200,
        distance: "5.8 km",
        priceRange: "$$$",
        logoEmoji: "\ud83c\udfe0",
        coverGradient: "from-brown-500 to-amber-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-id-003",
        storeId: "STR-140003",
        name: "Design Cafe",
        category: "Interior Design",
        area: "HSR Layout, Mumbai",
        rating: 4.5,
        totalRatings: 3400,
        distance: "9.0 km",
        priceRange: "$$$",
        logoEmoji: "\ud83c\udfe0",
        coverGradient: "from-emerald-500 to-teal-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "store"
    },
    {
        id: "biz-id-004",
        storeId: "STR-140004",
        name: "Moglix Interiors",
        category: "Interior Design",
        area: "Lajpat Nagar, Delhi",
        rating: 4.1,
        totalRatings: 2800,
        distance: "6.2 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udfe0",
        coverGradient: "from-violet-500 to-purple-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-id-005",
        storeId: "STR-140005",
        name: "Agra Home Decor Studio",
        category: "Interior Design",
        area: "Sadar Bazaar, Agra",
        rating: 4.2,
        totalRatings: 1600,
        distance: "4.5 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udfe0",
        coverGradient: "from-sky-500 to-blue-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-id-006",
        storeId: "STR-140006",
        name: "Bonito Designs",
        category: "Interior Design",
        area: "Koramangala, Mumbai",
        rating: 4.4,
        totalRatings: 3900,
        distance: "8.2 km",
        priceRange: "$$$",
        logoEmoji: "\ud83c\udfe0",
        coverGradient: "from-rose-500 to-pink-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "store"
    },
    {
        id: "biz-id-007",
        storeId: "STR-140007",
        name: "Spacejoy Interiors",
        category: "Interior Design",
        area: "Rajouri Garden, Delhi",
        rating: 4.3,
        totalRatings: 2100,
        distance: "7.5 km",
        priceRange: "$$$",
        logoEmoji: "\ud83c\udfe0",
        coverGradient: "from-cyan-500 to-teal-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "store"
    },
    // ---- AC Repair ----
    {
        id: "biz-ac-001",
        storeId: "STR-150001",
        name: "Quick AC Repair Services",
        category: "AC Repair",
        area: "Karol Bagh, Delhi",
        rating: 4.2,
        totalRatings: 6700,
        distance: "4.0 km",
        priceRange: "$$",
        logoEmoji: "\u2744\ufe0f",
        coverGradient: "from-cyan-500 to-blue-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-ac-002",
        storeId: "STR-150002",
        name: "Urban Company AC Service",
        category: "AC Repair",
        area: "Andheri, Mumbai",
        rating: 4.4,
        totalRatings: 9200,
        distance: "6.5 km",
        priceRange: "$$",
        logoEmoji: "\u2744\ufe0f",
        coverGradient: "from-teal-500 to-cyan-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-ac-003",
        storeId: "STR-150003",
        name: "Sai Cooling Solutions",
        category: "AC Repair",
        area: "Laxmi Nagar, Delhi",
        rating: 4.0,
        totalRatings: 3400,
        distance: "5.8 km",
        priceRange: "$$",
        logoEmoji: "\u2744\ufe0f",
        coverGradient: "from-blue-500 to-indigo-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-ac-004",
        storeId: "STR-150004",
        name: "Agra Aircon Services",
        category: "AC Repair",
        area: "Sadar Bazaar, Agra",
        rating: 4.1,
        totalRatings: 1800,
        distance: "4.8 km",
        priceRange: "$$",
        logoEmoji: "\u2744\ufe0f",
        coverGradient: "from-sky-500 to-cyan-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-ac-005",
        storeId: "STR-150005",
        name: "CoolAir Experts",
        category: "AC Repair",
        area: "Borivali, Mumbai",
        rating: 4.3,
        totalRatings: 4100,
        distance: "11.0 km",
        priceRange: "$$",
        logoEmoji: "\u2744\ufe0f",
        coverGradient: "from-emerald-500 to-teal-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-ac-006",
        storeId: "STR-150006",
        name: "HomeLane AC Services",
        category: "AC Repair",
        area: "Dwarka, Delhi",
        rating: 4.2,
        totalRatings: 2800,
        distance: "9.0 km",
        priceRange: "$$",
        logoEmoji: "\u2744\ufe0f",
        coverGradient: "from-indigo-500 to-blue-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-ac-007",
        storeId: "STR-150007",
        name: "Jain Refrigeration",
        category: "AC Repair",
        area: "Pitampura, Delhi",
        rating: 4.1,
        totalRatings: 2200,
        distance: "8.5 km",
        priceRange: "$$",
        logoEmoji: "\u2744\ufe0f",
        coverGradient: "from-violet-500 to-purple-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    // ---- Plumbers ----
    {
        id: "biz-pl-001",
        storeId: "STR-160001",
        name: "Urban Company Plumbing",
        category: "Plumber",
        area: "Multiple Locations, Delhi",
        rating: 4.3,
        totalRatings: 11200,
        distance: "2.0 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udd27",
        coverGradient: "from-blue-500 to-indigo-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-pl-002",
        storeId: "STR-160002",
        name: "Sharma Plumbing Works",
        category: "Plumber",
        area: "Connaught Place, Delhi",
        rating: 4.1,
        totalRatings: 4500,
        distance: "1.5 km",
        priceRange: "$$",
        logoEmoji: "\ud83e\udea0",
        coverGradient: "from-sky-500 to-blue-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-pl-003",
        storeId: "STR-160003",
        name: "Patel Plumbing Services",
        category: "Plumber",
        area: "Dadar, Mumbai",
        rating: 4.2,
        totalRatings: 3800,
        distance: "5.5 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udd27",
        coverGradient: "from-cyan-500 to-teal-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-pl-004",
        storeId: "STR-160004",
        name: "Agra Pipe Fittings",
        category: "Plumber",
        area: "Sadar Bazaar, Agra",
        rating: 4.0,
        totalRatings: 2100,
        distance: "4.5 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udd27",
        coverGradient: "from-emerald-500 to-green-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-pl-005",
        storeId: "STR-160005",
        name: "Kuber Plumbing Solutions",
        category: "Plumber",
        area: "Malad, Mumbai",
        rating: 4.3,
        totalRatings: 2800,
        distance: "10.5 km",
        priceRange: "$$",
        logoEmoji: "\ud83e\udea0",
        coverGradient: "from-violet-500 to-purple-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-pl-006",
        storeId: "STR-160006",
        name: "Gupta Sanitary Store & Plumbing",
        category: "Plumber",
        area: "Nehru Place, Delhi",
        rating: 4.0,
        totalRatings: 3200,
        distance: "5.2 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udd27",
        coverGradient: "from-amber-500 to-orange-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    // ---- Electricians ----
    {
        id: "biz-el-001",
        storeId: "STR-170001",
        name: "Urban Company Electrician",
        category: "Electrician",
        area: "Multiple Locations, Delhi",
        rating: 4.4,
        totalRatings: 9800,
        distance: "2.0 km",
        priceRange: "$$",
        logoEmoji: "\u26a1",
        coverGradient: "from-yellow-500 to-amber-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-el-002",
        storeId: "STR-170002",
        name: "Agarwal Electricals",
        category: "Electrician",
        area: "Chandni Chowk, Delhi",
        rating: 4.1,
        totalRatings: 4200,
        distance: "4.2 km",
        priceRange: "$$",
        logoEmoji: "\u26a1",
        coverGradient: "from-amber-500 to-yellow-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-el-003",
        storeId: "STR-170003",
        name: "Powermax Electrical Services",
        category: "Electrician",
        area: "Goregaon, Mumbai",
        rating: 4.2,
        totalRatings: 3100,
        distance: "9.8 km",
        priceRange: "$$",
        logoEmoji: "\u26a1",
        coverGradient: "from-orange-500 to-red-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-el-004",
        storeId: "STR-170004",
        name: "Agra Wire & Electrical Works",
        category: "Electrician",
        area: "MG Road, Agra",
        rating: 4.0,
        totalRatings: 1800,
        distance: "5.0 km",
        priceRange: "$$",
        logoEmoji: "\u26a1",
        coverGradient: "from-cyan-500 to-blue-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-el-005",
        storeId: "STR-170005",
        name: "Shakti Electricals",
        category: "Electrician",
        area: "Kandivali, Mumbai",
        rating: 4.3,
        totalRatings: 2500,
        distance: "11.5 km",
        priceRange: "$$",
        logoEmoji: "\u26a1",
        coverGradient: "from-red-500 to-orange-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-el-006",
        storeId: "STR-170006",
        name: "Krishna Electrical Works",
        category: "Electrician",
        area: "Rohini, Delhi",
        rating: 4.1,
        totalRatings: 3400,
        distance: "10.0 km",
        priceRange: "$$",
        logoEmoji: "\u26a1",
        coverGradient: "from-emerald-500 to-teal-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-el-007",
        storeId: "STR-170007",
        name: "Singh Electrical Services",
        category: "Electrician",
        area: "Saket, Delhi",
        rating: 4.2,
        totalRatings: 2900,
        distance: "5.5 km",
        priceRange: "$$",
        logoEmoji: "\u26a1",
        coverGradient: "from-violet-500 to-purple-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    // ---- Painters ----
    {
        id: "biz-pa-001",
        storeId: "STR-180001",
        name: "Asian Paints Colour Studio",
        category: "Painter",
        area: "Connaught Place, Delhi",
        rating: 4.4,
        totalRatings: 5600,
        distance: "1.4 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udfa8",
        coverGradient: "from-purple-500 to-violet-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-pa-002",
        storeId: "STR-180002",
        name: "Berger Express Painting",
        category: "Painter",
        area: "Andheri, Mumbai",
        rating: 4.2,
        totalRatings: 4200,
        distance: "6.5 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udfa8",
        coverGradient: "from-rose-500 to-pink-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-pa-003",
        storeId: "STR-180003",
        name: "Nerolac Paints Dealer",
        category: "Painter",
        area: "Sadar Bazaar, Agra",
        rating: 4.1,
        totalRatings: 2800,
        distance: "4.8 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udfa8",
        coverGradient: "from-amber-500 to-orange-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-pa-004",
        storeId: "STR-180004",
        name: "HomeLane Painting Services",
        category: "Painter",
        area: "Noida, Delhi NCR",
        rating: 4.3,
        totalRatings: 3400,
        distance: "12.0 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udfa8",
        coverGradient: "from-blue-500 to-indigo-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-pa-005",
        storeId: "STR-180005",
        name: "Dulux Paint Centre",
        category: "Painter",
        area: "Bandra, Mumbai",
        rating: 4.2,
        totalRatings: 3100,
        distance: "7.8 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udfa8",
        coverGradient: "from-teal-500 to-cyan-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-pa-006",
        storeId: "STR-180006",
        name: "Rajasthan Painting Works",
        category: "Painter",
        area: "Karol Bagh, Delhi",
        rating: 4.0,
        totalRatings: 2200,
        distance: "4.2 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udfa8",
        coverGradient: "from-red-500 to-rose-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-pa-007",
        storeId: "STR-180007",
        name: "Shalimar Paints Store",
        category: "Painter",
        area: "Lajpat Nagar, Delhi",
        rating: 3.9,
        totalRatings: 1800,
        distance: "6.0 km",
        priceRange: "$$",
        logoEmoji: "\ud83c\udfa8",
        coverGradient: "from-emerald-500 to-green-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    // ---- Pest Control ----
    {
        id: "biz-pc-001",
        storeId: "STR-190001",
        name: "Pest Control India",
        category: "Pest Control",
        area: "Connaught Place, Delhi",
        rating: 4.3,
        totalRatings: 6800,
        distance: "1.6 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udc1b",
        coverGradient: "from-green-500 to-emerald-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-pc-002",
        storeId: "STR-190002",
        name: "Hicare Pest Control",
        category: "Pest Control",
        area: "Powai, Mumbai",
        rating: 4.2,
        totalRatings: 4500,
        distance: "8.0 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udc1b",
        coverGradient: "from-lime-500 to-green-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-pc-003",
        storeId: "STR-190003",
        name: "Urban Company Pest Control",
        category: "Pest Control",
        area: "Multiple Locations, Delhi",
        rating: 4.4,
        totalRatings: 8900,
        distance: "2.0 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udc1b",
        coverGradient: "from-emerald-500 to-teal-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-pc-004",
        storeId: "STR-190004",
        name: "Agra Pest Solutions",
        category: "Pest Control",
        area: "Civil Lines, Agra",
        rating: 4.0,
        totalRatings: 2100,
        distance: "5.5 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udc1b",
        coverGradient: "from-sky-500 to-blue-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-pc-005",
        storeId: "STR-190005",
        name: "Rentokil PCI",
        category: "Pest Control",
        area: "Andheri, Mumbai",
        rating: 4.3,
        totalRatings: 3400,
        distance: "7.0 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udc1b",
        coverGradient: "from-teal-500 to-cyan-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-pc-006",
        storeId: "STR-190006",
        name: "Godrej Pest Control",
        category: "Pest Control",
        area: "Dwarka, Delhi",
        rating: 4.1,
        totalRatings: 2800,
        distance: "8.8 km",
        priceRange: "$$",
        logoEmoji: "\ud83d\udc1b",
        coverGradient: "from-amber-500 to-yellow-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    // ---- Carpenters ----
    {
        id: "biz-ca-001",
        storeId: "STR-200001",
        name: "Urban Company Carpentry",
        category: "Carpenter",
        area: "Multiple Locations, Delhi",
        rating: 4.3,
        totalRatings: 7600,
        distance: "2.0 km",
        priceRange: "$$",
        logoEmoji: "\ud83e\ude9a",
        coverGradient: "from-amber-600 to-yellow-700",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-ca-002",
        storeId: "STR-200002",
        name: "Sharma Furniture Works",
        category: "Carpenter",
        area: "Kirti Nagar, Delhi",
        rating: 4.2,
        totalRatings: 4200,
        distance: "7.0 km",
        priceRange: "$$",
        logoEmoji: "\ud83e\ude9a",
        coverGradient: "from-orange-500 to-amber-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-ca-003",
        storeId: "STR-200003",
        name: "Mumbai Woodcraft Studio",
        category: "Carpenter",
        area: "Sion, Mumbai",
        rating: 4.3,
        totalRatings: 3100,
        distance: "7.5 km",
        priceRange: "$$",
        logoEmoji: "\ud83e\ude9a",
        coverGradient: "from-brown-500 to-amber-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-ca-004",
        storeId: "STR-200004",
        name: "Agra Furniture Makers",
        category: "Carpenter",
        area: "Sadar Bazaar, Agra",
        rating: 4.0,
        totalRatings: 1800,
        distance: "4.5 km",
        priceRange: "$$",
        logoEmoji: "\ud83e\ude9a",
        coverGradient: "from-emerald-500 to-green-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-ca-005",
        storeId: "STR-200005",
        name: "Featherlite Furniture",
        category: "Carpenter",
        area: "Malad, Mumbai",
        rating: 4.1,
        totalRatings: 2600,
        distance: "10.8 km",
        priceRange: "$$",
        logoEmoji: "\ud83e\ude9a",
        coverGradient: "from-violet-500 to-purple-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-ca-006",
        storeId: "STR-200006",
        name: "Godrej Interio Showroom",
        category: "Carpenter",
        area: "Nehru Place, Delhi",
        rating: 4.4,
        totalRatings: 5100,
        distance: "5.0 km",
        priceRange: "$$$",
        logoEmoji: "\ud83e\ude9a",
        coverGradient: "from-blue-500 to-indigo-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-ca-007",
        storeId: "STR-200007",
        name: "Chauhan Wood Works",
        category: "Carpenter",
        area: "Lajpat Nagar, Delhi",
        rating: 4.0,
        totalRatings: 2000,
        distance: "6.2 km",
        priceRange: "$$",
        logoEmoji: "\ud83e\ude9a",
        coverGradient: "from-rose-500 to-pink-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    // ---- Deep Cleaning ----
    {
        id: "biz-dc-001",
        storeId: "STR-210001",
        name: "Urban Company Deep Cleaning",
        category: "Deep Cleaning",
        area: "Multiple Locations, Delhi",
        rating: 4.4,
        totalRatings: 10200,
        distance: "2.0 km",
        priceRange: "$$",
        logoEmoji: "\u2728",
        coverGradient: "from-indigo-500 to-purple-600",
        isOpen: true,
        isVerified: true,
        isFeatured: true,
        businessType: "service"
    },
    {
        id: "biz-dc-002",
        storeId: "STR-210002",
        name: "Bro4u Cleaning Services",
        category: "Deep Cleaning",
        area: "Koramangala, Mumbai",
        rating: 4.2,
        totalRatings: 4800,
        distance: "8.5 km",
        priceRange: "$$",
        logoEmoji: "\u2728",
        coverGradient: "from-sky-500 to-blue-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-dc-003",
        storeId: "STR-210003",
        name: "Jisko Deep Cleaning",
        category: "Deep Cleaning",
        area: "Dwarka, Delhi",
        rating: 4.1,
        totalRatings: 3200,
        distance: "8.8 km",
        priceRange: "$$",
        logoEmoji: "\u2728",
        coverGradient: "from-cyan-500 to-teal-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-dc-004",
        storeId: "STR-210004",
        name: "Agra Clean Services",
        category: "Deep Cleaning",
        area: "MG Road, Agra",
        rating: 4.0,
        totalRatings: 1600,
        distance: "5.0 km",
        priceRange: "$$",
        logoEmoji: "\u2728",
        coverGradient: "from-emerald-500 to-green-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-dc-005",
        storeId: "STR-210005",
        name: "ServiceNow Cleaning",
        category: "Deep Cleaning",
        area: "Thane, Mumbai",
        rating: 4.3,
        totalRatings: 3800,
        distance: "12.0 km",
        priceRange: "$$",
        logoEmoji: "\u2728",
        coverGradient: "from-violet-500 to-purple-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-dc-006",
        storeId: "STR-210006",
        name: "DeepClean Professionals",
        category: "Deep Cleaning",
        area: "Rohini, Delhi",
        rating: 4.2,
        totalRatings: 2900,
        distance: "10.0 km",
        priceRange: "$$",
        logoEmoji: "\u2728",
        coverGradient: "from-amber-500 to-orange-600",
        isOpen: true,
        isVerified: false,
        isFeatured: false,
        businessType: "service"
    },
    {
        id: "biz-dc-007",
        storeId: "STR-210007",
        name: "MyCleanHome Services",
        category: "Deep Cleaning",
        area: "Vashi, Mumbai",
        rating: 4.1,
        totalRatings: 2400,
        distance: "11.2 km",
        priceRange: "$$",
        logoEmoji: "\u2728",
        coverGradient: "from-rose-500 to-pink-600",
        isOpen: true,
        isVerified: true,
        isFeatured: false,
        businessType: "service"
    }
];
const categorySlugToCategory = {
    restaurants: "Restaurant",
    hotels: "Hotel",
    cafes: "Cafe",
    shopping: "Shopping",
    photographers: "Photographer",
    doctors: "Doctor",
    salons: "Salon",
    gyms: "Gym",
    electronics: "Electronics",
    pharmacies: "Pharmacy",
    "travel-agents": "Travel Agent",
    "wedding-planners": "Wedding Planner",
    schools: "School",
    "interior-design": "Interior Design",
    "ac-repair": "AC Repair",
    plumbers: "Plumber",
    electricians: "Electrician",
    painters: "Painter",
    "pest-control": "Pest Control",
    carpenters: "Carpenter",
    "deep-cleaning": "Deep Cleaning"
};
function getBusinessesByCategory(slug) {
    const category = categorySlugToCategory[slug];
    if (!category) return [];
    return businesses.filter((b)=>b.category === category);
}
function getCategoryMeta(slug) {
    return listingCategories.find((c)=>c.slug === slug);
}
function getFeaturedByCategory(slug) {
    return getBusinessesByCategory(slug).filter((b)=>b.isFeatured);
}
function getBusinessById(id) {
    return businesses.find((b)=>b.id === id || b.storeId === id);
}
function getBusinessCountByCategory(slug) {
    return getBusinessesByCategory(slug).length;
}
function getBusinessCountByCategoryName(name) {
    return businesses.filter((b)=>b.category === name).length;
}
const extendedCategories = [
    {
        slug: "restaurants",
        label: "Restaurants",
        icon: "🍽️",
        color: "#D97706",
        bg: "#FEF3C7",
        lucideIcon: "UtensilsCrossed",
        isPopular: true
    },
    {
        slug: "hotels",
        label: "Hotels",
        icon: "🏨",
        color: "#2563EB",
        bg: "#DBEAFE",
        lucideIcon: "Hotel",
        isPopular: true
    },
    {
        slug: "cafes",
        label: "Cafes",
        icon: "☕",
        color: "#7C3AED",
        bg: "#F3E8FF",
        lucideIcon: "Coffee",
        isPopular: true
    },
    {
        slug: "shopping",
        label: "Shopping",
        icon: "🛍️",
        color: "#DC2626",
        bg: "#FEE2E2",
        lucideIcon: "ShoppingBag",
        isPopular: true
    },
    {
        slug: "photographers",
        label: "Photographers",
        icon: "📷",
        color: "#059669",
        bg: "#ECFDF5",
        lucideIcon: "Camera",
        isPopular: true
    },
    {
        slug: "doctors",
        label: "Doctors",
        icon: "🏥",
        color: "#0891B2",
        bg: "#ECFEFF",
        lucideIcon: "Stethoscope",
        isPopular: true
    },
    {
        slug: "salons",
        label: "Salons",
        icon: "💇",
        color: "#DB2777",
        bg: "#FCE7F3",
        lucideIcon: "Scissors",
        isPopular: true
    },
    {
        slug: "gyms",
        label: "Gyms",
        icon: "💪",
        color: "#EA580C",
        bg: "#FFF7ED",
        lucideIcon: "Dumbbell",
        isPopular: true
    },
    {
        slug: "electronics",
        label: "Electronics",
        icon: "🔧",
        color: "#4F46E5",
        bg: "#EEF2FF",
        lucideIcon: "Cpu",
        isPopular: true
    },
    {
        slug: "pharmacies",
        label: "Pharmacies",
        icon: "💊",
        color: "#16A34A",
        bg: "#F0FDF4",
        lucideIcon: "Pill",
        isPopular: true
    },
    {
        slug: "travel-agents",
        label: "Travel Agents",
        icon: "✈️",
        color: "#0284C7",
        bg: "#E0F2FE",
        lucideIcon: "Plane",
        isPopular: true
    },
    {
        slug: "wedding-planners",
        label: "Wedding Planners",
        icon: "💍",
        color: "#BE185D",
        bg: "#FDF2F8",
        lucideIcon: "Heart",
        isPopular: false
    },
    {
        slug: "schools",
        label: "Schools",
        icon: "🏫",
        color: "#1D4ED8",
        bg: "#DBEAFE",
        lucideIcon: "GraduationCap",
        isPopular: false
    },
    {
        slug: "interior-design",
        label: "Interior Design",
        icon: "🏠",
        color: "#B45309",
        bg: "#FFFBEB",
        lucideIcon: "Paintbrush",
        isPopular: false
    },
    {
        slug: "ac-repair",
        label: "AC Repair",
        icon: "❄️",
        color: "#0D9488",
        bg: "#F0FDFA",
        lucideIcon: "Snowflake",
        isPopular: false
    },
    {
        slug: "plumbers",
        label: "Plumbers",
        icon: "🔧",
        color: "#2563EB",
        bg: "#EFF6FF",
        lucideIcon: "Droplets",
        isPopular: false
    },
    {
        slug: "electricians",
        label: "Electricians",
        icon: "⚡",
        color: "#CA8A04",
        bg: "#FEFCE8",
        lucideIcon: "Zap",
        isPopular: false
    },
    {
        slug: "painters",
        label: "Painters",
        icon: "🎨",
        color: "#9333EA",
        bg: "#FAF5FF",
        lucideIcon: "Palette",
        isPopular: false
    },
    {
        slug: "pest-control",
        label: "Pest Control",
        icon: "🐛",
        color: "#15803D",
        bg: "#F0FDF4",
        lucideIcon: "Bug",
        isPopular: false
    },
    {
        slug: "carpenters",
        label: "Carpenters",
        icon: "🪚",
        color: "#92400E",
        bg: "#FFFBEB",
        lucideIcon: "Hammer",
        isPopular: false
    },
    {
        slug: "deep-cleaning",
        label: "Deep Cleaning",
        icon: "✨",
        color: "#6366F1",
        bg: "#EEF2FF",
        lucideIcon: "Sparkles",
        isPopular: false
    }
];
}),
"[project]/src/components/category/CategoryCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-ssr] (ecmascript) <export default as UtensilsCrossed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hotel.js [app-ssr] (ecmascript) <export default as Hotel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-ssr] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-ssr] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scissors.js [app-ssr] (ecmascript) <export default as Scissors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dumbbell.js [app-ssr] (ecmascript) <export default as Dumbbell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pill.js [app-ssr] (ecmascript) <export default as Pill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plane.js [app-ssr] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paintbrush.js [app-ssr] (ecmascript) <export default as Paintbrush>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$snowflake$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Snowflake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/snowflake.js [app-ssr] (ecmascript) <export default as Snowflake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-ssr] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-ssr] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hammer.js [app-ssr] (ecmascript) <export default as Hammer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-listing-data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const iconMap = {
    UtensilsCrossed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__["UtensilsCrossed"],
    Hotel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"],
    Coffee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"],
    ShoppingBag: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"],
    Camera: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
    Stethoscope: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
    Scissors: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
    Dumbbell: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"],
    Cpu: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
    Pill: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__["Pill"],
    Plane: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"],
    Heart: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
    GraduationCap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
    Paintbrush: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__["Paintbrush"],
    Snowflake: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$snowflake$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Snowflake$3e$__["Snowflake"],
    Droplets: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
    Zap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    Bug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"],
    Hammer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__["Hammer"],
    Sparkles: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
    Palette: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
};
function CategoryCard({ category, index = 0, variant = "mobile" }) {
    const Icon = iconMap[category.lucideIcon] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"];
    const count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBusinessCountByCategory"])(category.slug);
    const isMobile = variant === "mobile";
    // ── Mobile: premium 2-col app card — rounded icon, label, count, soft shadow, lift-on-tap.
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 14,
                scale: 0.96
            },
            animate: {
                opacity: 1,
                y: 0,
                scale: 1
            },
            transition: {
                duration: 0.28,
                delay: Math.min(index * 0.03, 0.3),
                ease: [
                    0.25,
                    0.46,
                    0.45,
                    0.94
                ]
            },
            whileTap: {
                scale: 0.96
            },
            className: "relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: `/explore?category=${category.slug}`,
                className: "block relative bg-white rounded-[20px] p-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03] active:bg-gray-50 transition-all overflow-hidden",
                "aria-label": `${category.label} - ${count} businesses`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-50 blur-xl pointer-events-none",
                        style: {
                            background: category.bg
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/CategoryCard.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-12 h-12 rounded-2xl flex items-center justify-center mb-2.5",
                        style: {
                            backgroundColor: category.bg
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "w-6 h-6",
                            style: {
                                color: category.color
                            },
                            strokeWidth: 2.2
                        }, void 0, false, {
                            fileName: "[project]/src/components/category/CategoryCard.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/CategoryCard.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-[13px] font-bold text-gray-900 leading-tight truncate",
                                children: category.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/CategoryCard.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10.5px] text-gray-400 font-medium mt-0.5",
                                children: [
                                    count.toLocaleString(),
                                    " ",
                                    count === 1 ? "place" : "places"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/category/CategoryCard.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/category/CategoryCard.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    index < 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2 right-2 px-1.5 py-0.5 rounded-full bg-amber-50 border border-amber-100 flex items-center gap-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                className: "w-2 h-2 text-amber-500",
                                strokeWidth: 3
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/CategoryCard.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[7.5px] font-bold text-amber-600 uppercase tracking-wide",
                                children: "Hot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/CategoryCard.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/category/CategoryCard.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/category/CategoryCard.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/category/CategoryCard.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    // ── Desktop: polished — rounded icon + label + count, hover lift, premium feel.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 16,
            scale: 0.97
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        transition: {
            duration: 0.25,
            delay: Math.min(index * 0.03, 0.3),
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ]
        },
        whileTap: {
            scale: 0.97
        },
        className: "flex flex-col items-center justify-center bg-white rounded-2xl p-5 shadow-sm border border-gray-100/80 min-h-[140px] hover:shadow-xl hover:shadow-black/[0.06] hover:-translate-y-1 hover:border-gray-200 transition-all cursor-pointer group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-14 h-14 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300",
                style: {
                    backgroundColor: category.bg
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "w-7 h-7",
                    style: {
                        color: category.color
                    },
                    strokeWidth: 2.2
                }, void 0, false, {
                    fileName: "[project]/src/components/category/CategoryCard.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/category/CategoryCard.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-gray-800 truncate text-[13px]",
                        children: category.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/CategoryCard.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400 mt-0.5 font-medium",
                        children: [
                            count.toLocaleString(),
                            " ",
                            count === 1 ? "Business" : "Businesses"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/category/CategoryCard.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/category/CategoryCard.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/category/CategoryCard.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/category/CategoryGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-ssr] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-ssr] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-ssr] (ecmascript) <export default as UtensilsCrossed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hotel.js [app-ssr] (ecmascript) <export default as Hotel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-ssr] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-ssr] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scissors.js [app-ssr] (ecmascript) <export default as Scissors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dumbbell.js [app-ssr] (ecmascript) <export default as Dumbbell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pill.js [app-ssr] (ecmascript) <export default as Pill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plane.js [app-ssr] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paintbrush.js [app-ssr] (ecmascript) <export default as Paintbrush>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$snowflake$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Snowflake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/snowflake.js [app-ssr] (ecmascript) <export default as Snowflake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-ssr] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-ssr] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hammer.js [app-ssr] (ecmascript) <export default as Hammer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$CategoryCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/category/CategoryCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-listing-data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const iconMap = {
    UtensilsCrossed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__["UtensilsCrossed"],
    Hotel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"],
    Coffee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"],
    ShoppingBag: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"],
    Camera: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
    Stethoscope: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
    Scissors: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
    Dumbbell: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"],
    Cpu: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
    Pill: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__["Pill"],
    Plane: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"],
    Heart: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
    GraduationCap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
    Paintbrush: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__["Paintbrush"],
    Snowflake: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$snowflake$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Snowflake$3e$__["Snowflake"],
    Droplets: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
    Zap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    Bug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"],
    Hammer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__["Hammer"],
    Sparkles: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
    Palette: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
};
function CategoryGrid({ categories, variant = "mobile", layout = "grid", selectedCategory, onSelectCategory }) {
    const isMobile = variant === "mobile";
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scroll = (dir)=>{
        if (!scrollRef.current) return;
        const amount = isMobile ? 280 : 360;
        scrollRef.current.scrollBy({
            left: dir === "left" ? -amount : amount,
            behavior: "smooth"
        });
    };
    // Helper: clicking a category in scroll layout toggles selection
    const handleCategoryClick = (e, slug)=>{
        if (layout !== "scroll" || !onSelectCategory) return;
        e.preventDefault();
        onSelectCategory(selectedCategory === slug ? "" : slug);
    };
    // ── Empty state ──
    if (categories.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            className: `flex flex-col items-center justify-center ${isMobile ? "py-16" : "py-20"} px-4`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0.8,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    transition: {
                        duration: 0.3,
                        type: "spring"
                    },
                    className: `flex items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mb-5 ${isMobile ? "w-20 h-20" : "w-24 h-24"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: isMobile ? "text-4xl" : "text-5xl",
                        children: "📂"
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/CategoryGrid.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/category/CategoryGrid.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: `${isMobile ? "text-sm" : "text-base"} font-bold text-gray-800 mb-1.5`,
                    children: "No Categories Found"
                }, void 0, false, {
                    fileName: "[project]/src/components/category/CategoryGrid.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `${isMobile ? "text-xs" : "text-sm"} text-gray-400 mb-5 text-center max-w-xs`,
                    children: "We couldn't find anything matching your search. Try a different keyword."
                }, void 0, false, {
                    fileName: "[project]/src/components/category/CategoryGrid.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "bg-[#0056b3] text-white text-xs font-semibold px-5 py-2.5 rounded-xl active:scale-95 hover:bg-[#004494] transition-all shadow-md shadow-blue-200",
                    children: "Explore Home"
                }, void 0, false, {
                    fileName: "[project]/src/components/category/CategoryGrid.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/category/CategoryGrid.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this);
    }
    // ── Section header (shared across layouts) ──
    const header = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-between ${isMobile ? "px-3 mb-3" : "mb-6"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    x: -10
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    duration: 0.25
                },
                className: "flex items-center gap-2.5",
                children: [
                    !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-lg bg-gradient-to-br from-[#0056b3] to-[#0077E6] flex items-center justify-center shadow-sm shadow-blue-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                            className: "w-4 h-4 text-white",
                            strokeWidth: 2.5
                        }, void 0, false, {
                            fileName: "[project]/src/components/category/CategoryGrid.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/CategoryGrid.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: `font-bold text-gray-900 ${isMobile ? "text-sm" : "text-xl tracking-tight"}`,
                                children: "All Categories"
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/CategoryGrid.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 font-medium mt-0.5",
                                children: "Complete directory of business types"
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/CategoryGrid.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/category/CategoryGrid.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/category/CategoryGrid.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            layout === "scroll" && !isMobile ? // Desktop scroll: arrow buttons (matches /services)
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>scroll("left"),
                        className: "w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all shadow-sm",
                        "aria-label": "Scroll left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "w-4 h-4 text-gray-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/category/CategoryGrid.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/CategoryGrid.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>scroll("right"),
                        className: "w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all shadow-sm",
                        "aria-label": "Scroll right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-4 h-4 text-gray-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/category/CategoryGrid.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/CategoryGrid.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/category/CategoryGrid.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 0.15
                },
                className: `${isMobile ? "text-[11px]" : "text-xs"} text-gray-400 font-semibold bg-white px-2.5 py-1 rounded-full border border-gray-100`,
                children: [
                    categories.length,
                    " ",
                    isMobile ? "items" : "categories"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/category/CategoryGrid.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/category/CategoryGrid.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
    // ── LAYOUT: scroll (horizontal circular SVG icons + More tile — mirrors /services) ──
    if (layout === "scroll") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: isMobile ? "pt-5" : "pt-2",
            children: [
                header,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: scrollRef,
                    className: `flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth ${isMobile ? "px-3 pb-2 snap-x snap-mandatory" : "pb-2"}`,
                    style: {
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    },
                    children: [
                        categories.map((cat, i)=>{
                            const count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBusinessCountByCategory"])(cat.slug);
                            const Icon = iconMap[cat.lucideIcon] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"];
                            const isActive = selectedCategory === cat.slug;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 12
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.28,
                                    delay: i * 0.03,
                                    ease: [
                                        0.25,
                                        0.46,
                                        0.45,
                                        0.94
                                    ]
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                className: "flex-shrink-0 snap-start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/explore?category=${cat.slug}`,
                                    onClick: (e)=>handleCategoryClick(e, cat.slug),
                                    className: `flex flex-col items-center gap-2 ${isMobile ? "w-[72px] p-1.5" : "w-[110px] p-3"} rounded-2xl hover:bg-white hover:shadow-md transition-all group`,
                                    "aria-label": `${cat.label} - ${count} businesses`,
                                    "aria-pressed": isActive,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-full flex items-center justify-center transition-all group-hover:scale-110 ${isMobile ? "w-14 h-14" : "w-20 h-20"} ${isActive ? "scale-105" : ""}`,
                                            style: {
                                                backgroundColor: isActive ? cat.color + "20" : cat.bg,
                                                boxShadow: isActive ? `0 0 0 2px ${cat.color}` : undefined
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: isMobile ? "w-6 h-6" : "w-8 h-8",
                                                style: {
                                                    color: cat.color
                                                },
                                                strokeWidth: 2.2
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/CategoryGrid.tsx",
                                                lineNumber: 181,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/CategoryGrid.tsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `font-semibold leading-tight ${isActive ? "text-[#0056b3]" : "text-gray-800"} ${isMobile ? "text-[11px]" : "text-xs"}`,
                                                    children: cat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/CategoryGrid.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-gray-400 mt-0.5 font-medium ${isMobile ? "text-[9px]" : "text-[10px]"}`,
                                                    children: [
                                                        count.toLocaleString(),
                                                        "+ ",
                                                        isMobile ? "places" : "Businesses"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/category/CategoryGrid.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/category/CategoryGrid.tsx",
                                            lineNumber: 187,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/category/CategoryGrid.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this)
                            }, cat.slug, false, {
                                fileName: "[project]/src/components/category/CategoryGrid.tsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.28,
                                delay: categories.length * 0.03,
                                ease: [
                                    0.25,
                                    0.46,
                                    0.45,
                                    0.94
                                ]
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            className: "flex-shrink-0 snap-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/explore",
                                className: `flex flex-col items-center gap-2 ${isMobile ? "w-[72px] p-1.5" : "w-[110px] p-3"} rounded-2xl hover:bg-white hover:shadow-md transition-all group`,
                                "aria-label": "More categories",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ring-1 ring-gray-200 group-hover:scale-110 transition-transform ${isMobile ? "w-14 h-14" : "w-20 h-20"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                            className: isMobile ? "w-6 h-6 text-gray-600" : "w-8 h-8 text-gray-600",
                                            strokeWidth: 2.5
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/CategoryGrid.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/category/CategoryGrid.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `font-semibold leading-tight text-gray-700 ${isMobile ? "text-[11px]" : "text-xs"}`,
                                                children: "More"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/CategoryGrid.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-gray-400 mt-0.5 font-medium ${isMobile ? "text-[9px]" : "text-[10px]"}`,
                                                children: "View All"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/CategoryGrid.tsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/category/CategoryGrid.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/category/CategoryGrid.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/category/CategoryGrid.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/category/CategoryGrid.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/category/CategoryGrid.tsx",
            lineNumber: 147,
            columnNumber: 7
        }, this);
    }
    // ── LAYOUT: grid (default 2/6-col premium cards) ──
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: isMobile ? "pt-5" : "pt-2",
        children: [
            header,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `grid gap-2.5 ${isMobile ? "grid-cols-2 px-3" : "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "popLayout",
                    children: categories.map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$CategoryCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            category: cat,
                            index: i,
                            variant: variant
                        }, cat.slug, false, {
                            fileName: "[project]/src/components/category/CategoryGrid.tsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/category/CategoryGrid.tsx",
                    lineNumber: 247,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/category/CategoryGrid.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/category/CategoryGrid.tsx",
        lineNumber: 238,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/category/RecentCategories.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecentCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-listing-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-ssr] (ecmascript) <export default as UtensilsCrossed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hotel.js [app-ssr] (ecmascript) <export default as Hotel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-ssr] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-ssr] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scissors.js [app-ssr] (ecmascript) <export default as Scissors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dumbbell.js [app-ssr] (ecmascript) <export default as Dumbbell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pill.js [app-ssr] (ecmascript) <export default as Pill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plane.js [app-ssr] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paintbrush.js [app-ssr] (ecmascript) <export default as Paintbrush>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$snowflake$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Snowflake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/snowflake.js [app-ssr] (ecmascript) <export default as Snowflake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-ssr] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-ssr] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hammer.js [app-ssr] (ecmascript) <export default as Hammer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
"use client";
;
;
;
;
;
;
const iconMap = {
    UtensilsCrossed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__["UtensilsCrossed"],
    Hotel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"],
    Coffee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"],
    ShoppingBag: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"],
    Camera: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
    Stethoscope: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
    Scissors: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
    Dumbbell: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"],
    Cpu: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
    Pill: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__["Pill"],
    Plane: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"],
    Heart: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
    GraduationCap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
    Paintbrush: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__["Paintbrush"],
    Snowflake: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$snowflake$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Snowflake$3e$__["Snowflake"],
    Droplets: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
    Zap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    Bug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"],
    Hammer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__["Hammer"],
    Sparkles: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
    Palette: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
};
function RecentCategories({ categories, variant = "mobile" }) {
    const isMobile = variant === "mobile";
    if (categories.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: isMobile ? "pt-6 pb-4" : "pt-10 pb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-center justify-between ${isMobile ? "px-3 mb-3" : "mb-6"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: -10
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: 0.25
                    },
                    className: "flex items-center gap-2.5",
                    children: [
                        !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-sm shadow-purple-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "w-4 h-4 text-white",
                                strokeWidth: 2.5
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/RecentCategories.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/category/RecentCategories.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "w-3.5 h-3.5 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/RecentCategories.tsx",
                                    lineNumber: 45,
                                    columnNumber: 26
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `font-bold text-gray-900 ${isMobile ? "text-sm" : "text-xl tracking-tight"}`,
                                    children: "Recently Viewed"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/RecentCategories.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/category/RecentCategories.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-400 font-medium ml-2",
                            children: "Pick up where you left off"
                        }, void 0, false, {
                            fileName: "[project]/src/components/category/RecentCategories.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/category/RecentCategories.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/category/RecentCategories.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex gap-3 overflow-x-auto scrollbar-hide ${isMobile ? "px-3 snap-x snap-mandatory" : "snap-x snap-mandatory"}`,
                style: isMobile ? {
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                } : undefined,
                children: categories.map((cat, i)=>{
                    const Icon = iconMap[cat.lucideIcon] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"];
                    const count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBusinessCountByCategory"])(cat.slug);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 0.25,
                            delay: i * 0.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        className: "flex-shrink-0 snap-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/explore?category=${cat.slug}`,
                            className: `
                  flex items-center gap-2.5 bg-white rounded-2xl
                  border border-gray-100/80 shadow-sm overflow-hidden
                  active:scale-95 transition-all
                  ${isMobile ? "pr-3" : "pr-4 hover:shadow-lg hover:shadow-black/[0.05] hover:-translate-y-0.5 hover:border-gray-200"}
                `,
                            "aria-label": `Recently viewed: ${cat.label}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center justify-center shrink-0 ${isMobile ? "w-10 h-10" : "w-12 h-12"}`,
                                    style: {
                                        backgroundColor: cat.bg
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: isMobile ? "w-5 h-5" : "w-6 h-6",
                                        style: {
                                            color: cat.color
                                        },
                                        strokeWidth: 2.2
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/category/RecentCategories.tsx",
                                        lineNumber: 86,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/RecentCategories.tsx",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `font-semibold text-gray-800 ${isMobile ? "text-[11px]" : "text-sm"}`,
                                            children: cat.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/RecentCategories.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-gray-400 font-medium ${isMobile ? "text-[9px]" : "text-[10px]"}`,
                                            children: [
                                                count.toLocaleString(),
                                                " businesses"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/category/RecentCategories.tsx",
                                            lineNumber: 96,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/category/RecentCategories.tsx",
                                    lineNumber: 92,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/category/RecentCategories.tsx",
                            lineNumber: 72,
                            columnNumber: 15
                        }, this)
                    }, cat.slug, false, {
                        fileName: "[project]/src/components/category/RecentCategories.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/category/RecentCategories.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/category/RecentCategories.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/justdial/StoreCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoreCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-ssr] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
"use client";
;
;
;
;
;
function StoreCard({ name, category, rating, reviews, distance, address, logoEmoji, logoIcon: Logo, img, coverGradient, storeId, href, isFeatured = true, isOpen = true, isVerified = true, variant, index = 0, fluid = false, price }) {
    const isMobile = variant === "mobile";
    // ── Size config per variant ──
    const cfg = isMobile ? {
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
        coverIconSize: "w-10 h-10"
    } : {
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
        coverIconSize: "w-12 h-12"
    };
    const linkHref = href || (storeId ? `/store/${storeId}` : "#");
    const cardClasses = `${fluid ? "w-full" : `flex-shrink-0 ${cfg.cardWidth}`} bg-white rounded-2xl overflow-hidden shadow-sm shadow-black/[0.06] ring-1 ring-black/[0.04] hover:shadow-lg hover:shadow-black/[0.1] hover:-translate-y-0.5 transition-all group cursor-pointer`;
    const banner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${cfg.bannerHeight} overflow-hidden`,
        children: [
            img ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: img,
                        alt: name,
                        fill: true,
                        className: "object-cover group-hover:scale-105 transition-transform duration-300",
                        sizes: isMobile ? "185px" : "260px"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/StoreCard.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/StoreCard.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 bg-gradient-to-br ${coverGradient || "from-gray-400 to-gray-500"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: Logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {
                            className: `${cfg.coverIconSize} text-white/90`,
                            strokeWidth: 1.5
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/StoreCard.tsx",
                            lineNumber: 166,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-5xl opacity-90 drop-shadow-sm",
                            children: logoEmoji || "🏪"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/StoreCard.tsx",
                            lineNumber: 168,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/StoreCard.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-black/5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/StoreCard.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/StoreCard.tsx",
                lineNumber: 161,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute ${cfg.pillTop} ${cfg.pillLR} flex items-center justify-between`,
                children: [
                    isFeatured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `bg-amber-500/95 backdrop-blur-sm text-white ${cfg.pillText} font-bold uppercase tracking-wider ${cfg.pillPx} rounded-full flex items-center gap-0.5 shadow-sm`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                className: cfg.flameSize
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/StoreCard.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this),
                            "Featured"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/StoreCard.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${isOpen ? "bg-emerald-500/95" : "bg-rose-500/95"} backdrop-blur-sm text-white ${cfg.pillText} font-bold ${cfg.pillPx} rounded-full flex items-center gap-1 shadow-sm ${isFeatured ? "" : "ml-auto"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `${cfg.dotSize} bg-white rounded-full`
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/StoreCard.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            isOpen ? "Open" : "Closed"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/StoreCard.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/StoreCard.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            rating !== undefined && rating !== null && rating !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute ${cfg.ratingPos}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `bg-white/95 backdrop-blur-sm text-gray-900 ${cfg.ratingText} font-bold ${cfg.ratingPx} rounded-full flex items-center gap-1 shadow-sm`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                            className: `${cfg.starSize} text-amber-500 fill-amber-500`
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/StoreCard.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, this),
                        rating
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/StoreCard.tsx",
                    lineNumber: 197,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/StoreCard.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, this),
            (logoEmoji || Logo) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute ${cfg.logoPos} z-10`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${cfg.logoSize} rounded-full bg-white shadow-md flex items-center justify-center ${cfg.logoEmojiSize} ring-2 ring-white`,
                            children: Logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {
                                className: cfg.logoIconSize,
                                strokeWidth: 2.2
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/StoreCard.tsx",
                                lineNumber: 214,
                                columnNumber: 17
                            }, this) : logoEmoji
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/StoreCard.tsx",
                            lineNumber: 210,
                            columnNumber: 13
                        }, this),
                        isVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute -bottom-0.5 -left-0.5 ${cfg.tickSize} bg-[#0056b3] rounded-full flex items-center justify-center ring-2 ring-white`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: `${cfg.tickIconSize} text-white`,
                                strokeWidth: 4
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/StoreCard.tsx",
                                lineNumber: 223,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/StoreCard.tsx",
                            lineNumber: 220,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/StoreCard.tsx",
                    lineNumber: 209,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/StoreCard.tsx",
                lineNumber: 208,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/justdial/StoreCard.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
    const body = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cfg.bodyPadding,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mb-1 ${cfg.namePr}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: `${cfg.nameText} font-bold text-gray-900 leading-tight truncate`,
                    children: name
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/StoreCard.tsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/StoreCard.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `${cfg.categoryText} text-gray-500 font-medium truncate mb-1.5`,
                children: category
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/StoreCard.tsx",
                lineNumber: 241,
                columnNumber: 9
            }, this),
            address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                        className: `${cfg.mapPinSize} text-gray-400 flex-shrink-0`
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/StoreCard.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${cfg.addressText} text-gray-500 truncate`,
                        children: address
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/StoreCard.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/StoreCard.tsx",
                lineNumber: 246,
                columnNumber: 9
            }, this),
            (reviews !== undefined || distance || price) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-2 border-t border-gray-100",
                children: [
                    reviews !== undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${cfg.footerText} text-gray-400 font-medium`,
                        children: [
                            reviews,
                            " reviews"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/StoreCard.tsx",
                        lineNumber: 256,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/src/components/justdial/StoreCard.tsx",
                        lineNumber: 258,
                        columnNumber: 13
                    }, this),
                    distance ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `bg-[#0056b3]/8 text-[#0056b3] ${cfg.footerText} font-bold ${cfg.footerPx} rounded-full flex items-center gap-0.5`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                className: cfg.navIconSize
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/StoreCard.tsx",
                                lineNumber: 264,
                                columnNumber: 15
                            }, this),
                            distance
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/StoreCard.tsx",
                        lineNumber: 261,
                        columnNumber: 13
                    }, this) : price ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `bg-emerald-500/10 text-emerald-700 ${cfg.footerText} font-bold ${cfg.footerPx} rounded-full flex items-center gap-0.5`,
                        children: price
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/StoreCard.tsx",
                        lineNumber: 268,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/StoreCard.tsx",
                lineNumber: 254,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/justdial/StoreCard.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, this);
    // Mobile wraps card in motion.div for entrance + tap animation
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 12
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: true
            },
            transition: {
                delay: index * 0.05,
                duration: 0.3
            },
            whileTap: {
                scale: 0.97
            },
            className: cardClasses,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: linkHref,
                className: "block",
                children: [
                    banner,
                    body
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/StoreCard.tsx",
                lineNumber: 291,
                columnNumber: 9
            }, this)
        }, `${name}-${index}`, false, {
            fileName: "[project]/src/components/justdial/StoreCard.tsx",
            lineNumber: 282,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: linkHref,
        className: cardClasses,
        children: [
            banner,
            body
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/justdial/StoreCard.tsx",
        lineNumber: 300,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/category/MobileCategoryListingPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileCategoryListingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-ssr] (ecmascript) <export default as Newspaper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-ssr] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-ssr] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-ssr] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-ssr] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-ssr] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-ssr] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-ssr] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-ssr] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-ssr] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-ssr] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$CategoryGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/category/CategoryGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$RecentCategories$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/category/RecentCategories.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/justdial/StoreCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-listing-data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
const recentlyViewedSlugs = [
    "restaurants",
    "doctors",
    "salons",
    "electronics",
    "cafes"
];
// Filter chips — app-like horizontal scrollable pills
const filterChips = [
    {
        id: "all",
        label: "All",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"]
    },
    {
        id: "popular",
        label: "Popular",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"]
    },
    {
        id: "food",
        label: "Food & Drink",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
    },
    {
        id: "services",
        label: "Home Services",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
    },
    {
        id: "health",
        label: "Health",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
    },
    {
        id: "shopping",
        label: "Shopping",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
    }
];
// Map category slugs to chip ids for filtering
const chipCategoryMap = {
    popular: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendedCategories"].filter((c)=>c.isPopular).map((c)=>c.slug),
    food: [
        "restaurants",
        "cafes",
        "hotels"
    ],
    services: [
        "ac-repair",
        "plumbers",
        "electricians",
        "painters",
        "pest-control",
        "carpenters",
        "deep-cleaning",
        "interior-design"
    ],
    health: [
        "doctors",
        "pharmacies",
        "gyms",
        "salons"
    ],
    shopping: [
        "shopping",
        "electronics",
        "photographers",
        "travel-agents",
        "wedding-planners",
        "schools"
    ]
};
const bottomNavTabs = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        label: "Home",
        id: "Home",
        href: "/"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        label: "Leads",
        id: "Leads",
        href: "#"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
        label: "B2B",
        id: "B2B",
        href: "#"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"],
        label: "News",
        id: "News",
        href: "#"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"],
        label: "More",
        id: "More",
        href: "#"
    }
];
const howItWorks = [
    {
        step: 1,
        title: "Choose Category",
        desc: "Browse categories",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
        color: "#2563EB"
    },
    {
        step: 2,
        title: "Compare",
        desc: "View ratings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        color: "#059669"
    },
    {
        step: 3,
        title: "Connect",
        desc: "Call or visit",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
        color: "#D97706"
    }
];
const reviews = [
    {
        name: "Priya Sharma",
        location: "Mumbai",
        rating: 5,
        text: "Found an amazing restaurant through JustDial. Reviews and photos were super helpful!",
        service: "Restaurants",
        avatar: "PS",
        slug: "restaurants"
    },
    {
        name: "Amit Kumar",
        location: "Delhi",
        rating: 5,
        text: "Booked a salon appointment. All details I needed were there. Very satisfied!",
        service: "Salons",
        avatar: "AK",
        slug: "salons"
    },
    {
        name: "Sneha Reddy",
        location: "Bangalore",
        rating: 4,
        text: "Found a reliable AC repair service. Verified badge gave me confidence.",
        service: "AC Repair",
        avatar: "SR",
        slug: "ac-repair"
    },
    {
        name: "Rahul Verma",
        location: "Pune",
        rating: 5,
        text: "Compared multiple gyms in my area. Genuine reviews. Got a great discount!",
        service: "Gyms",
        avatar: "RV",
        slug: "gyms"
    }
];
function MobileCategoryListingPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeNav, setActiveNav] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Home");
    const [activeChip, setActiveChip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Sync selectedCategory with ?category= query param (matches /services behavior)
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSelectedCategory(searchParams.get("category") || "");
    }, [
        searchParams
    ]);
    const handleSelectCategory = (slug)=>{
        setSelectedCategory(slug);
        const params = new URLSearchParams(Array.from(searchParams.entries()));
        if (slug) {
            params.set("category", slug);
        } else {
            params.delete("category");
        }
        const qs = params.toString();
        router.replace(qs ? `/categories?${qs}` : "/categories", {
            scroll: false
        });
    };
    const selectedCat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendedCategories"].find((c)=>c.slug === selectedCategory), [
        selectedCategory
    ]);
    // Tiny mount delay → shows skeleton briefly for native app feel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = setTimeout(()=>setMounted(true), 280);
        return ()=>clearTimeout(t);
    }, []);
    const recent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendedCategories"].filter((c)=>recentlyViewedSlugs.includes(c.slug)), []);
    // Featured businesses — filtered by selected category when set
    const featuredStores = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (selectedCategory) {
            const list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBusinessesByCategory"])(selectedCategory).filter((b)=>b.isFeatured);
            return list.length > 0 ? list : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBusinessesByCategory"])(selectedCategory).slice(0, 10);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["businesses"].filter((b)=>b.isFeatured).slice(0, 10);
    }, [
        selectedCategory
    ]);
    // Popular Picks — when category selected, show businesses from that category not already in featured
    const popularBusinesses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (selectedCategory) {
            const featuredIds = new Set(featuredStores.map((b)=>b.id));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBusinessesByCategory"])(selectedCategory).filter((b)=>!featuredIds.has(b.id)).sort((a, b)=>b.totalRatings - a.totalRatings).slice(0, 8);
        }
        const featuredIds = new Set(featuredStores.map((b)=>b.id));
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["businesses"].filter((b)=>!featuredIds.has(b.id) && b.isVerified && b.rating >= 4.4).sort((a, b)=>b.totalRatings - a.totalRatings).slice(0, 8);
    }, [
        featuredStores,
        selectedCategory
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let list = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendedCategories"];
        // Apply chip filter first
        if (activeChip !== "all" && chipCategoryMap[activeChip]) {
            const allowed = new Set(chipCategoryMap[activeChip]);
            list = list.filter((c)=>allowed.has(c.slug));
        }
        // Then search query
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            list = list.filter((c)=>c.label.toLowerCase().includes(q));
        }
        return list;
    }, [
        searchQuery,
        activeChip
    ]);
    const totalBusinesses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendedCategories"].reduce((acc, c)=>acc + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBusinessCountByCategory"])(c.slug), 0), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.25
        },
        className: "min-h-screen bg-gray-50 pb-24",
        style: {
            maxWidth: 480,
            margin: "0 auto",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5 px-3 py-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center justify-center w-9 h-9 -ml-1 rounded-full hover:bg-gray-100 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-5 h-5 text-gray-700"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-[17px] font-bold text-gray-900 truncate",
                                    children: "Categories"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSaved(!saved),
                                className: "flex items-center justify-center w-9 h-9 -mr-1 rounded-full hover:bg-gray-100 transition-colors",
                                "aria-label": "Save",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                    className: `w-[18px] h-[18px] ${saved ? "fill-amber-500 text-amber-500" : "text-gray-600"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition-colors",
                                "aria-label": "Share",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                    className: "w-[18px] h-[18px] text-gray-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 pb-2.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchHeaderInline, {
                            query: searchQuery,
                            onQueryChange: setSearchQuery
                        }, void 0, false, {
                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 pb-2.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 bg-[#F0F4FF] text-[#0056b3] px-3 py-1.5 rounded-full w-fit",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-medium",
                                    children: "Mumbai, Maharashtra"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "overflow-y-auto pb-28 [-ms-overflow-style:none] [scrollbar-width:none]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                        className: "mx-3 mt-3 rounded-2xl overflow-hidden relative",
                        style: {
                            background: "linear-gradient(135deg, #0056b3, #2563EB)"
                        },
                        initial: {
                            y: 20,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        transition: {
                            delay: 0.1,
                            duration: 0.4
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-6 right-16 w-20 h-20 rounded-full bg-white/8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-12 right-24 w-3 h-3 rounded-full bg-white/20"
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-8 right-8 w-2 h-2 rounded-full bg-white/30"
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative p-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 mb-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-white/20 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider",
                                                        children: "India's #1 Search Engine"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-white font-bold text-[18px] leading-tight",
                                                    children: "Explore All Categories Near You"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/70 text-[12px] mt-1.5",
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendedCategories"].length,
                                                        "+ categories • ",
                                                        totalBusinesses.toLocaleString(),
                                                        "+ verified businesses"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#all-categories",
                                                    className: "mt-3.5 inline-block bg-white text-[#0056b3] rounded-xl px-5 py-2.5 text-[13px] font-bold active:scale-[0.97] transition-all shadow-lg shadow-black/10",
                                                    children: "Explore Now"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0 w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                                className: "w-8 h-8 text-white",
                                                strokeWidth: 1.8
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-[156px] z-30 bg-gray-50/95 backdrop-blur-md pt-3 pb-2.5 mb-1 px-3",
                        style: {
                            top: "calc(env(safe-area-inset-top) + 156px)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory",
                            style: {
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            },
                            children: filterChips.map((chip)=>{
                                const isActive = activeChip === chip.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: ()=>setActiveChip(chip.id),
                                    whileTap: {
                                        scale: 0.94
                                    },
                                    className: `flex-shrink-0 snap-start flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[12px] font-bold transition-all ${isActive ? "bg-[#0056b3] text-white shadow-md shadow-blue-200/60" : "bg-white text-gray-600 ring-1 ring-black/[0.04] active:bg-gray-50"}`,
                                    "aria-pressed": isActive,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(chip.icon, {
                                            className: `w-3.5 h-3.5 ${isActive ? "text-white" : "text-gray-400"}`,
                                            strokeWidth: 2.5
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 269,
                                            columnNumber: 19
                                        }, this),
                                        chip.label
                                    ]
                                }, chip.id, true, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 258,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    !mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonContent, {}, void 0, false, {
                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                        lineNumber: 282,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 8
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -4
                            },
                            transition: {
                                duration: 0.2
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "all-categories",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$CategoryGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        categories: filtered,
                                        variant: "mobile",
                                        layout: "scroll",
                                        selectedCategory: selectedCategory,
                                        onSelectCategory: handleSelectCategory
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                        lineNumber: 294,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 293,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: selectedCat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            height: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            height: "auto"
                                        },
                                        exit: {
                                            opacity: 0,
                                            height: 0
                                        },
                                        className: "px-3 mt-2 mb-1 overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-gray-500",
                                                    children: "Showing:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleSelectCategory(""),
                                                    className: "inline-flex items-center gap-1 bg-[#0056b3] text-white text-[11px] font-semibold px-3 py-1 rounded-full active:scale-95 transition-transform",
                                                    children: [
                                                        selectedCat.label,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                            lineNumber: 319,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-gray-400",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBusinessesByCategory"])(selectedCategory).length,
                                                        " places"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 312,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                        lineNumber: 306,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 304,
                                    columnNumber: 15
                                }, this),
                                (activeChip === "all" || selectedCategory) && !searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                                    className: "mt-5",
                                    initial: {
                                        y: 20,
                                        opacity: 0
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.2,
                                        duration: 0.4
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between px-3 mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-7 h-7 rounded-lg bg-gradient-to-br from-[#0056b3] to-[#0077E6] flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                className: "w-3.5 h-3.5 text-white",
                                                                strokeWidth: 2.5
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                                lineNumber: 338,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                            lineNumber: 337,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-[15px] font-bold text-gray-900 tracking-tight",
                                                            children: selectedCat ? selectedCat.label : "Featured Stores"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                            lineNumber: 340,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-semibold text-[#0056b3]",
                                                    children: "See All"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 335,
                                            columnNumber: 19
                                        }, this),
                                        featuredStores.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-3 py-8 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: "No businesses found for this category"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                lineNumber: 348,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 347,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 overflow-x-auto px-3 pb-2 scrollbar-hide",
                                            children: featuredStores.map((biz, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    name: biz.name,
                                                    category: biz.category,
                                                    rating: biz.rating,
                                                    reviews: biz.totalRatings,
                                                    distance: biz.distance,
                                                    address: biz.area,
                                                    logoEmoji: biz.logoEmoji,
                                                    coverGradient: biz.coverGradient,
                                                    storeId: biz.storeId,
                                                    isFeatured: biz.isFeatured,
                                                    isVerified: biz.isVerified,
                                                    isOpen: biz.isOpen,
                                                    variant: "mobile",
                                                    index: idx
                                                }, biz.id, false, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 351,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 329,
                                    columnNumber: 17
                                }, this),
                                activeChip === "all" && !searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-3 mt-5 mb-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                        lineNumber: 379,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 378,
                                    columnNumber: 17
                                }, this),
                                (activeChip === "all" || selectedCategory) && !searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                                    className: "mt-5",
                                    initial: {
                                        y: 20,
                                        opacity: 0
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.25,
                                        duration: 0.4
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between px-3 mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                                className: "w-3.5 h-3.5 text-white",
                                                                strokeWidth: 2.5
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-[15px] font-bold text-gray-900 tracking-tight",
                                                            children: selectedCat ? `More ${selectedCat.label}` : "Popular Picks"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-semibold text-[#0056b3]",
                                                    children: "See All"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 391,
                                            columnNumber: 19
                                        }, this),
                                        popularBusinesses.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-3 py-8 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: "No more businesses found for this category"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                lineNumber: 404,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 403,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 overflow-x-auto px-3 pb-2 scrollbar-hide",
                                            children: popularBusinesses.map((biz, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    name: biz.name,
                                                    category: biz.category,
                                                    rating: biz.rating,
                                                    reviews: biz.totalRatings,
                                                    distance: biz.distance,
                                                    address: biz.area,
                                                    logoEmoji: biz.logoEmoji,
                                                    coverGradient: biz.coverGradient,
                                                    storeId: biz.storeId,
                                                    isFeatured: false,
                                                    isVerified: biz.isVerified,
                                                    isOpen: biz.isOpen,
                                                    variant: "mobile",
                                                    index: idx
                                                }, biz.id, false, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 407,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 385,
                                    columnNumber: 17
                                }, this),
                                activeChip === "all" && !searchQuery && !selectedCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$RecentCategories$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    categories: recent,
                                    variant: "mobile"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 434,
                                    columnNumber: 17
                                }, this),
                                activeChip === "all" && !searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                                    className: "mt-7 px-3",
                                    initial: {
                                        y: 20,
                                        opacity: 0
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.35,
                                        duration: 0.4
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-[15px] font-bold text-gray-900 text-center mb-5",
                                            children: "How It Works"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 445,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-6 left-6 right-6 border-t-2 border-dashed border-blue-200 z-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between gap-2 relative z-10",
                                                    children: howItWorks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 flex flex-col items-center text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-12 rounded-full flex items-center justify-center text-white mb-2.5 shadow-lg",
                                                                    style: {
                                                                        backgroundColor: item.color
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                                        lineNumber: 456,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                                    lineNumber: 452,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] font-bold text-gray-800 leading-tight",
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                                    lineNumber: 458,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[9px] text-gray-400 mt-0.5 leading-tight max-w-[90px]",
                                                                    children: item.desc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                                    lineNumber: 459,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, item.step, true, {
                                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                            lineNumber: 451,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 446,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 439,
                                    columnNumber: 17
                                }, this),
                                activeChip === "all" && !searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                                    className: "mt-7 px-3",
                                    initial: {
                                        y: 20,
                                        opacity: 0
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.4,
                                        duration: 0.4
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-[15px] font-bold text-gray-900 mb-3 px-1",
                                            children: "Why Choose Us"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 475,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2.5",
                                            children: [
                                                {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                                                    label: "Verified",
                                                    desc: "Background checked businesses",
                                                    color: "#2563EB",
                                                    bg: "#EFF6FF",
                                                    slug: "restaurants"
                                                },
                                                {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
                                                    label: "Genuine Reviews",
                                                    desc: "Real customer feedback",
                                                    color: "#059669",
                                                    bg: "#ECFDF5",
                                                    slug: "doctors"
                                                },
                                                {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                                                    label: "24/7 Access",
                                                    desc: "Business details anytime",
                                                    color: "#D97706",
                                                    bg: "#FFFBEB",
                                                    slug: "salons"
                                                },
                                                {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"],
                                                    label: "Best Picks",
                                                    desc: "Curated local businesses",
                                                    color: "#DC2626",
                                                    bg: "#FEF2F2",
                                                    slug: "gyms"
                                                }
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/explore?category=${item.slug}`,
                                                    className: "bg-white rounded-2xl p-3.5 shadow-sm border border-gray-50 active:scale-[0.97] transition-transform",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-9 h-9 rounded-xl flex items-center justify-center mb-2",
                                                            style: {
                                                                backgroundColor: item.bg
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                                className: "w-4 h-4",
                                                                style: {
                                                                    color: item.color
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                                lineNumber: 485,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                            lineNumber: 484,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[12px] font-bold text-gray-800",
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-gray-400 mt-0.5 leading-tight",
                                                            children: item.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, item.label, true, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 483,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 476,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 469,
                                    columnNumber: 17
                                }, this),
                                activeChip === "all" && !searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                                    className: "mt-7",
                                    initial: {
                                        y: 20,
                                        opacity: 0
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.45,
                                        duration: 0.4
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between px-3 mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-[15px] font-bold text-gray-900",
                                                    children: "Customer Reviews"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 504,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            className: "w-3 h-3 text-amber-500 fill-amber-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                            lineNumber: 506,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] font-bold text-gray-800",
                                                            children: "4.6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 503,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 overflow-x-auto px-3 pb-2 scrollbar-hide",
                                            children: reviews.map((review, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    whileTap: {
                                                        scale: 0.98
                                                    },
                                                    initial: {
                                                        opacity: 0,
                                                        x: 15
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    transition: {
                                                        delay: 0.06 * idx
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/explore?category=${review.slug}`,
                                                        className: "flex-shrink-0 w-[240px] bg-white rounded-2xl p-4 shadow-sm border border-gray-50 block",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-2.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-9 h-9 rounded-full bg-gradient-to-br from-[#0056b3] to-[#2563EB] flex items-center justify-center text-white text-[11px] font-bold",
                                                                        children: review.avatar
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                                        lineNumber: 524,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[12px] font-bold text-gray-900",
                                                                                children: review.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                                                lineNumber: 528,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[10px] text-gray-400",
                                                                                children: [
                                                                                    review.location,
                                                                                    " • ",
                                                                                    review.service
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                                                lineNumber: 529,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                                        lineNumber: 527,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                                lineNumber: 523,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-0.5 mb-2",
                                                                children: Array.from({
                                                                    length: 5
                                                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                        className: `w-3 h-3 ${i < review.rating ? "text-amber-500 fill-amber-500" : "text-gray-200"}`
                                                                    }, i, false, {
                                                                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                                        lineNumber: 534,
                                                                        columnNumber: 31
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                                lineNumber: 532,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-gray-500 leading-relaxed",
                                                                children: review.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                                lineNumber: 537,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                        lineNumber: 519,
                                                        columnNumber: 25
                                                    }, this)
                                                }, review.name, false, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 512,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 510,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 497,
                                    columnNumber: 17
                                }, this),
                                activeChip === "all" && !searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                                    className: "mt-7 mx-3",
                                    initial: {
                                        y: 20,
                                        opacity: 0
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.5,
                                        duration: 0.4
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl overflow-hidden relative p-5 flex items-center justify-between gap-4",
                                        style: {
                                            background: "linear-gradient(135deg, #059669, #10B981)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                lineNumber: 557,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-2 right-20 w-10 h-10 rounded-full bg-white/8"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                lineNumber: 558,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-white font-bold text-[16px] leading-tight",
                                                        children: "List Your Business Free"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                        lineNumber: 560,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/70 text-[10.5px] mt-1 leading-relaxed",
                                                        children: "Join 2M+ businesses. Reach millions of customers across India."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                        lineNumber: 561,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "mt-3 bg-white text-emerald-700 rounded-xl px-4 py-2 text-[12px] font-bold active:scale-[0.97] transition-all shadow-lg shadow-black/10",
                                                        children: "Register Free →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                lineNumber: 559,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0 w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                    className: "w-7 h-7 text-white",
                                                    strokeWidth: 1.6
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                lineNumber: 568,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                        lineNumber: 553,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 547,
                                    columnNumber: 17
                                }, this),
                                activeChip === "all" && !searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].footer, {
                                    className: "mt-7 bg-gray-900 text-gray-400 px-5 py-8",
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.55
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "w-4 h-4 text-gray-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px]",
                                                    children: "1800-123-4567"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 585,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 583,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "w-4 h-4 text-gray-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px]",
                                                    children: "support@justdial.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 589,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 587,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-5",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"]
                                            ].map((Icon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "text-gray-500 hover:text-white transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 25
                                                    }, this)
                                                }, i, false, {
                                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                                    lineNumber: 593,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 591,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-gray-500",
                                            children: "© 2025 JustDial Clone. All rights reserved."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                            lineNumber: 598,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 577,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 603,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `${activeChip}-${searchQuery}`, true, {
                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                            lineNumber: 285,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                        lineNumber: 284,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white/95 backdrop-blur-xl border-t border-gray-100/80 z-50 shadow-[0_-2px_12px_rgba(0,0,0,0.04)]",
                style: {
                    paddingBottom: "env(safe-area-inset-bottom)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex items-center justify-around px-2 py-2",
                    role: "navigation",
                    "aria-label": "Main navigation",
                    children: bottomNavTabs.map((item)=>{
                        const isActive = activeNav === item.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            onClick: ()=>setActiveNav(item.id),
                            className: "flex flex-col items-center gap-0.5 active:scale-90 transition-transform min-w-[48px] py-1",
                            "aria-label": item.label,
                            "aria-current": isActive ? "page" : undefined,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileTap: {
                                        scale: 0.85
                                    },
                                    className: `p-1 rounded-lg transition-colors ${isActive ? "bg-blue-50" : ""}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                        className: `w-[22px] h-[22px] ${isActive ? "text-[#0056b3]" : "text-gray-400"}`,
                                        fill: isActive ? "#0056b3" : "none",
                                        strokeWidth: 2.2
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                        lineNumber: 634,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 630,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-[9.5px] font-semibold ${isActive ? "text-[#0056b3]" : "text-gray-400"}`,
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                    lineNumber: 640,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                            lineNumber: 622,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                    lineNumber: 614,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                lineNumber: 610,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
/* ── Inline search bar (matches /services mobile) ── */ function SearchHeaderInline({ query, onQueryChange }) {
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-2.5 bg-gray-100 rounded-2xl px-4 py-2.5 transition-all duration-200 ${focused ? "bg-white ring-2 ring-[#0056b3]/20 shadow-sm" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "w-4 h-4 text-gray-400 shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                lineNumber: 665,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Search categories...",
                value: query,
                onChange: (e)=>onQueryChange(e.target.value),
                onFocus: ()=>setFocused(true),
                onBlur: ()=>setFocused(false),
                className: "flex-1 bg-transparent text-[13px] text-gray-800 placeholder-gray-400 outline-none min-w-0"
            }, void 0, false, {
                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                lineNumber: 666,
                columnNumber: 7
            }, this),
            query ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onQueryChange(""),
                className: "shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-4 h-4 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                    lineNumber: 677,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                lineNumber: 676,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                className: "w-4 h-4 text-[#0056b3] shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                lineNumber: 680,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
        lineNumber: 660,
        columnNumber: 5
    }, this);
}
/* ── Skeleton loader — native app launch feel ── */ function SkeletonContent() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-3 pt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3.5 w-32 rounded-full bg-gray-200/80 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                        lineNumber: 692,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 w-10 rounded-full bg-gray-200/80 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                        lineNumber: 693,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                lineNumber: 691,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 overflow-hidden",
                children: [
                    0,
                    1,
                    2,
                    3
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 w-[116px] p-3.5 rounded-2xl bg-white ring-1 ring-black/[0.03]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-14 h-14 rounded-2xl bg-gray-200/70 mx-auto mb-2.5 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                lineNumber: 698,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2.5 w-16 mx-auto rounded-full bg-gray-200/70 animate-pulse mb-1.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                lineNumber: 699,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 w-10 mx-auto rounded-full bg-gray-200/50 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                lineNumber: 700,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                        lineNumber: 697,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                lineNumber: 695,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 mb-3 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3.5 w-28 rounded-full bg-gray-200/80 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                        lineNumber: 707,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 w-12 rounded-full bg-gray-200/80 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                        lineNumber: 708,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                lineNumber: 706,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-2.5",
                children: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3.5 rounded-[20px] bg-white ring-1 ring-black/[0.03]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-2xl bg-gray-200/70 mb-2.5 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                lineNumber: 713,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2.5 w-20 rounded-full bg-gray-200/70 animate-pulse mb-1.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                lineNumber: 714,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 w-12 rounded-full bg-gray-200/50 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                                lineNumber: 715,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                        lineNumber: 712,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
                lineNumber: 710,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/category/MobileCategoryListingPage.tsx",
        lineNumber: 689,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/category/DesktopCategoryListingPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesktopCategoryListingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-ssr] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-ssr] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-ssr] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-ssr] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-ssr] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-ssr] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-ssr] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-ssr] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-ssr] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$CategoryGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/category/CategoryGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$RecentCategories$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/category/RecentCategories.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/justdial/StoreCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-listing-data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
const recentlyViewedSlugs = [
    "restaurants",
    "doctors",
    "salons",
    "electronics",
    "cafes"
];
/* ═══════════════════════════════════════════════════
   STATIC DATA (How It Works, Why Choose, Reviews)
   ═══════════════════════════════════════════════════ */ const howItWorks = [
    {
        step: 1,
        title: "Choose Category",
        desc: "Browse our extensive directory and pick the business category that matches what you're looking for.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
        color: "#2563EB"
    },
    {
        step: 2,
        title: "Compare Businesses",
        desc: "View ratings, reviews, photos, and contact details to compare top businesses near you.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        color: "#059669"
    },
    {
        step: 3,
        title: "Connect & Book",
        desc: "Call, message, or visit the business directly. Get the best deals and verified contacts.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
        color: "#D97706"
    }
];
const reviews = [
    {
        name: "Priya Sharma",
        location: "Mumbai",
        rating: 5,
        text: "Found an amazing restaurant through JustDial. The reviews and photos helped me choose the perfect place for our anniversary dinner. Highly recommended!",
        service: "Restaurants",
        avatar: "PS",
        slug: "restaurants"
    },
    {
        name: "Amit Kumar",
        location: "Delhi",
        rating: 5,
        text: "Booked a salon appointment through the platform. The listing had all details I needed — prices, services, timings. Very satisfied with the experience.",
        service: "Salons",
        avatar: "AK",
        slug: "salons"
    },
    {
        name: "Sneha Reddy",
        location: "Bangalore",
        rating: 4,
        text: "Found a reliable AC repair service. Verified badge gave me confidence. The technician came on time and fixed the issue. Great platform!",
        service: "AC Repair",
        avatar: "SR",
        slug: "ac-repair"
    },
    {
        name: "Rahul Verma",
        location: "Pune",
        rating: 5,
        text: "Compared multiple gyms in my area. The ratings and reviews were genuine. Got a great discount on annual membership. Will use again!",
        service: "Gyms",
        avatar: "RV",
        slug: "gyms"
    }
];
const footerLinks = {
    "About Us": [
        "About JustDial",
        "Careers",
        "Blog",
        "Advertise"
    ],
    "Support": [
        "Help Center",
        "Safety Tips",
        "Contact Us",
        "Report Fraud"
    ],
    "Legal": [
        "Terms of Use",
        "Privacy Policy",
        "Cookie Policy",
        "Grievance"
    ]
};
function DesktopCategoryListingPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Sync selectedCategory with ?category= query param (matches /services behavior)
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSelectedCategory(searchParams.get("category") || "");
    }, [
        searchParams
    ]);
    const handleSelectCategory = (slug)=>{
        setSelectedCategory(slug);
        // Update URL without full reload
        const params = new URLSearchParams(Array.from(searchParams.entries()));
        if (slug) {
            params.set("category", slug);
        } else {
            params.delete("category");
        }
        const qs = params.toString();
        router.replace(qs ? `/categories?${qs}` : "/categories", {
            scroll: false
        });
    };
    const selectedCat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendedCategories"].find((c)=>c.slug === selectedCategory), [
        selectedCategory
    ]);
    const recent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendedCategories"].filter((c)=>recentlyViewedSlugs.includes(c.slug)), []);
    // Featured businesses — filtered by selected category when set
    const featuredStores = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (selectedCategory) {
            const list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBusinessesByCategory"])(selectedCategory).filter((b)=>b.isFeatured);
            return list.length > 0 ? list : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBusinessesByCategory"])(selectedCategory).slice(0, 10);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["businesses"].filter((b)=>b.isFeatured).slice(0, 10);
    }, [
        selectedCategory
    ]);
    // Popular Picks — when category selected, show businesses from that category not already in featured
    const popularBusinesses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (selectedCategory) {
            const featuredIds = new Set(featuredStores.map((b)=>b.id));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBusinessesByCategory"])(selectedCategory).filter((b)=>!featuredIds.has(b.id)).sort((a, b)=>b.totalRatings - a.totalRatings).slice(0, 8);
        }
        const featuredIds = new Set(featuredStores.map((b)=>b.id));
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["businesses"].filter((b)=>!featuredIds.has(b.id) && b.isVerified && b.rating >= 4.4).sort((a, b)=>b.totalRatings - a.totalRatings).slice(0, 8);
    }, [
        featuredStores,
        selectedCategory
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!searchQuery.trim()) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendedCategories"];
        const q = searchQuery.toLowerCase();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendedCategories"].filter((c)=>c.label.toLowerCase().includes(q));
    }, [
        searchQuery
    ]);
    const stats = [
        {
            label: "Categories",
            value: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendedCategories"].length}+`,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"]
        },
        {
            label: "Businesses",
            value: "2M+",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        },
        {
            label: "Cities Covered",
            value: "500+",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"]
        },
        {
            label: "Avg Rating",
            value: "4.6",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.3
        },
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 flex items-center justify-between h-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex items-center gap-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-gray-400 hover:text-[#0056b3] transition-colors flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this),
                                        " Home"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-3.5 h-3.5 text-gray-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-900 font-medium",
                                    children: "Categories"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        " Share"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSaved(!saved),
                                    className: `flex items-center gap-1.5 px-3 py-1.5 text-sm border rounded-lg transition-colors ${saved ? "border-amber-300 bg-amber-50 text-amber-700" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                            className: `w-4 h-4 ${saved ? "fill-amber-500 text-amber-500" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        saved ? "Saved" : "Save"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gradient-to-br from-[#0056b3] to-[#003d80]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 py-14",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative rounded-3xl overflow-hidden",
                        style: {
                            background: "linear-gradient(135deg, #E0F2FE 0%, #F0F9FF 100%)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/30"
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-8 right-32 w-28 h-28 rounded-full bg-white/20"
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-16 right-48 w-4 h-4 rounded-full bg-blue-300/40"
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-24 right-24 w-3 h-3 rounded-full bg-blue-400/30"
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-12 right-12 w-2 h-2 rounded-full bg-blue-300/50"
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-8 left-[35%] w-3 h-3 rounded-full bg-blue-200/50"
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-center justify-between gap-12 px-10 py-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 max-w-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-[#0056b3]/10 text-[#0056b3] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider",
                                                    children: "India's #1 Local Search Engine"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl font-extrabold text-gray-900 leading-tight",
                                                children: "Explore All Categories Near You"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base text-gray-500 mt-3 leading-relaxed",
                                                children: [
                                                    "From restaurants to AC repair, discover verified businesses across ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendedCategories"].length,
                                                    "+ categories. Get contact details, reviews, ratings, and more."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex-1 flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-lg shadow-black/5 border transition-all ${focused ? "border-[#0056b3] ring-2 ring-[#0056b3]/10" : "border-gray-100"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                className: `w-5 h-5 transition-colors ${focused ? "text-[#0056b3]" : "text-gray-400"}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: searchQuery,
                                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                                onFocus: ()=>setFocused(true),
                                                                onBlur: ()=>setFocused(false),
                                                                placeholder: "Search categories — try 'salon', 'ac repair'...",
                                                                className: "flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none font-medium"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 21
                                                            }, this),
                                                            searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setSearchQuery(""),
                                                                className: "text-gray-400 hover:text-gray-600",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                                    lineNumber: 203,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-px h-4 bg-gray-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                                className: "w-5 h-5 text-[#0056b3] cursor-pointer hover:scale-110 transition-transform"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "bg-[#2563EB] text-white rounded-xl px-7 py-3.5 text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20",
                                                        children: "Search"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-6 mt-8 flex-wrap",
                                                children: stats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-10 h-10 rounded-xl bg-white/80 shadow-sm flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                                                    className: "w-5 h-5 text-[#0056b3]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-lg font-bold text-gray-900",
                                                                        children: stat.value
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                                        lineNumber: 222,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-400",
                                                                        children: stat.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                                        lineNumber: 223,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, stat.label, true, {
                                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 hidden lg:block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-48 h-48 rounded-3xl bg-white/60 backdrop-blur-sm shadow-xl flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                                className: "w-24 h-24 text-[#0056b3]",
                                                strokeWidth: 1.5
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 233,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-6 py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$CategoryGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        categories: filtered,
                        variant: "desktop",
                        layout: "scroll",
                        selectedCategory: selectedCategory,
                        onSelectCategory: handleSelectCategory
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: selectedCat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                height: 0
                            },
                            animate: {
                                opacity: 1,
                                height: "auto"
                            },
                            exit: {
                                opacity: 0,
                                height: 0
                            },
                            className: "mt-4 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: "Showing:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                        lineNumber: 262,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelectCategory(""),
                                        className: "inline-flex items-center gap-1.5 bg-[#0056b3] text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-[#004494] transition-colors",
                                        children: [
                                            selectedCat.label,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 268,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            "• ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBusinessesByCategory"])(selectedCategory).length,
                                            " businesses"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                        lineNumber: 270,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                lineNumber: 261,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this),
                    (!searchQuery || selectedCategory) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-white border-y border-gray-100 -mx-6 px-6 py-10 mt-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 rounded-lg bg-gradient-to-br from-[#0056b3] to-[#0077E6] flex items-center justify-center shadow-sm shadow-blue-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                        className: "w-4 h-4 text-white",
                                                        strokeWidth: 2.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-xl font-bold text-gray-900 tracking-tight",
                                                            children: selectedCat ? `${selectedCat.label} Near You` : "Featured Stores Near You"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-400 mt-0.5 font-medium",
                                                            children: selectedCat ? `Top-rated ${selectedCat.label.toLowerCase()} in your area` : "Top-rated businesses in your area"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                            lineNumber: 289,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 281,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: selectedCategory ? `/explore?category=${selectedCategory}` : "/explore?category=doctors",
                                            className: "text-sm text-[#0056b3] font-semibold flex items-center gap-1 hover:underline bg-[#0056b3]/8 px-3.5 py-1.5 rounded-full",
                                            children: [
                                                "View All ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 28
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 294,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group/featured",
                                    children: featuredStores.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full py-12 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400",
                                            children: "No businesses found for this category"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 301,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                        lineNumber: 300,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-2",
                                        style: {
                                            scrollbarWidth: 'none',
                                            msOverflowStyle: 'none'
                                        },
                                        children: featuredStores.map((biz, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                name: biz.name,
                                                category: biz.category,
                                                rating: biz.rating,
                                                reviews: biz.totalRatings,
                                                distance: biz.distance,
                                                address: biz.area,
                                                logoEmoji: biz.logoEmoji,
                                                coverGradient: biz.coverGradient,
                                                storeId: biz.storeId,
                                                isFeatured: biz.isFeatured,
                                                isVerified: biz.isVerified,
                                                isOpen: biz.isOpen,
                                                variant: "desktop",
                                                index: idx
                                            }, biz.id, false, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 309,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                        lineNumber: 304,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 298,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                            lineNumber: 279,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                        lineNumber: 278,
                        columnNumber: 11
                    }, this),
                    !searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 mb-6 flex items-center gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                            lineNumber: 337,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, this),
                    (!searchQuery || selectedCategory) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-sm shadow-orange-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                    className: "w-4 h-4 text-white",
                                                    strokeWidth: 2.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 346,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-bold text-gray-900 tracking-tight",
                                                        children: selectedCat ? `Popular in ${selectedCat.label}` : "Popular Picks"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-400 mt-0.5 font-medium",
                                                        children: selectedCat ? `More ${selectedCat.label.toLowerCase()} you might like` : "Most viewed businesses near you"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 349,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                        lineNumber: 345,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: selectedCategory ? `/explore?category=${selectedCategory}` : "/explore",
                                        className: "text-sm text-[#0056b3] font-semibold flex items-center gap-1 hover:underline bg-[#0056b3]/8 px-3.5 py-1.5 rounded-full",
                                        children: [
                                            "See All ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 359,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                lineNumber: 344,
                                columnNumber: 13
                            }, this),
                            popularBusinesses.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full py-12 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400",
                                    children: "No more businesses found for this category"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 364,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                lineNumber: 363,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",
                                children: popularBusinesses.map((biz, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        name: biz.name,
                                        category: biz.category,
                                        rating: biz.rating,
                                        reviews: biz.totalRatings,
                                        distance: biz.distance,
                                        address: biz.area,
                                        logoEmoji: biz.logoEmoji,
                                        coverGradient: biz.coverGradient,
                                        storeId: biz.storeId,
                                        isFeatured: false,
                                        isVerified: biz.isVerified,
                                        isOpen: biz.isOpen,
                                        variant: "desktop",
                                        fluid: true,
                                        index: idx
                                    }, biz.id, false, {
                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                        lineNumber: 369,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                lineNumber: 367,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this),
                    !searchQuery && !selectedCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$RecentCategories$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        categories: recent,
                        variant: "desktop"
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                        lineNumber: 394,
                        columnNumber: 47
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white border-y border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 py-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-900",
                                    children: "How It Works"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 401,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400 mt-2",
                                    children: "Find the right business in 3 simple steps"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 402,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                            lineNumber: 400,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-8 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block absolute top-10 left-[calc(16.67%+40px)] w-[calc(33.33%-80px)] border-t-2 border-dashed border-blue-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 406,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(33.33%-80px)] border-t-2 border-dashed border-blue-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 407,
                                    columnNumber: 13
                                }, this),
                                howItWorks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-5 relative z-10 shadow-xl",
                                                style: {
                                                    backgroundColor: item.color
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                    className: "w-8 h-8"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 410,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-gray-800",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 416,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-400 mt-2 max-w-[280px] leading-relaxed",
                                                children: item.desc
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 417,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.step, true, {
                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                        lineNumber: 409,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                    lineNumber: 399,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                lineNumber: 398,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-7xl mx-auto px-6 py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-gray-900 mb-6 text-center",
                        children: "Why Choose JustDial Categories"
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 lg:grid-cols-4 gap-5",
                        children: [
                            {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                                label: "Verified Businesses",
                                desc: "All listed businesses are verified and trusted by millions of users across India.",
                                color: "#2563EB",
                                bg: "#EFF6FF",
                                slug: "restaurants"
                            },
                            {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
                                label: "Genuine Reviews",
                                desc: "Real customer reviews and ratings to help you make the right choice every time.",
                                color: "#059669",
                                bg: "#ECFDF5",
                                slug: "doctors"
                            },
                            {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                                label: "Always Available",
                                desc: "Access business details, contact info, and timings 24/7 from anywhere.",
                                color: "#D97706",
                                bg: "#FFFBEB",
                                slug: "salons"
                            },
                            {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"],
                                label: "Best Local Picks",
                                desc: "Curated list of the best businesses in your area, updated regularly.",
                                color: "#DC2626",
                                bg: "#FEF2F2",
                                slug: "gyms"
                            }
                        ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.05 * idx
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/explore?category=${item.slug}`,
                                    className: "block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                                            style: {
                                                backgroundColor: item.bg
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                className: "w-6 h-6",
                                                style: {
                                                    color: item.color
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 442,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 441,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-gray-900",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 444,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400 mt-1.5 leading-relaxed",
                                            children: item.desc
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 445,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 440,
                                    columnNumber: 15
                                }, this)
                            }, item.label, false, {
                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                lineNumber: 434,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                        lineNumber: 427,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white border-y border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 py-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-gray-900",
                                            children: "Customer Reviews"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 457,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400 mt-0.5",
                                            children: "What our customers say about us"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 458,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 456,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "w-4 h-4 text-amber-500 fill-amber-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 461,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-bold text-gray-800",
                                            children: "4.6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 462,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-400",
                                            children: "avg rating"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 463,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 460,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                            lineNumber: 455,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5",
                            children: reviews.map((review, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 15
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.05 * idx
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/explore?category=${review.slug}`,
                                        className: "block bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-full bg-gradient-to-br from-[#0056b3] to-[#2563EB] flex items-center justify-center text-white text-sm font-bold",
                                                        children: review.avatar
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                        lineNumber: 476,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-bold text-gray-900",
                                                                children: review.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                                lineNumber: 480,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-400",
                                                                children: [
                                                                    review.location,
                                                                    " • ",
                                                                    review.service
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                                lineNumber: 481,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                        lineNumber: 479,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 475,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-0.5 mb-2.5",
                                                children: Array.from({
                                                    length: 5
                                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                        className: `w-3.5 h-3.5 ${i < review.rating ? "text-amber-500 fill-amber-500" : "text-gray-200"}`
                                                    }, i, false, {
                                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                        lineNumber: 486,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 484,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 leading-relaxed",
                                                children: review.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 489,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                        lineNumber: 474,
                                        columnNumber: 17
                                    }, this)
                                }, review.name, false, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 468,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                            lineNumber: 466,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                    lineNumber: 454,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                lineNumber: 453,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-7xl mx-auto px-6 py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-3xl overflow-hidden relative p-10 flex items-center justify-between gap-10",
                    style: {
                        background: "linear-gradient(135deg, #059669, #10B981)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                            lineNumber: 503,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-4 right-40 w-16 h-16 rounded-full bg-white/8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                            lineNumber: 504,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-12 right-24 w-3 h-3 rounded-full bg-white/30"
                        }, void 0, false, {
                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                            lineNumber: 505,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex-1 max-w-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-extrabold text-white",
                                    children: "List Your Business Free"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 507,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/80 mt-3 leading-relaxed",
                                    children: "Join 2M+ businesses on JustDial. Get more visibility, reach millions of customers, and grow your business across India."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 508,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-white text-emerald-700 rounded-xl px-8 py-3 text-sm font-bold hover:bg-emerald-50 transition-colors shadow-lg",
                                            children: "Register Free →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 512,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-white/80 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                    lineNumber: 516,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "100% Free. No hidden charges."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 515,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 511,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                            lineNumber: 506,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 hidden lg:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-36 h-36 rounded-3xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                    className: "w-16 h-16 text-white",
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 523,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                lineNumber: 522,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                            lineNumber: 521,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                    lineNumber: 499,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                lineNumber: 498,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-gray-900 text-gray-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-white mb-2",
                                            children: "JustDial"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 534,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400 leading-relaxed",
                                            children: "India's #1 local search engine for businesses, services, and categories."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 535,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-4 text-sm text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "1800-123-4567"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 47
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 538,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-1.5 text-sm text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "support@justdial.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 46
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 541,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 533,
                                    columnNumber: 13
                                }, this),
                                Object.entries(footerLinks).map(([title, links])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-semibold text-white mb-4",
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 547,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2.5",
                                                children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "text-sm text-gray-400 hover:text-white transition-colors",
                                                            children: link
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                            lineNumber: 551,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, link, false, {
                                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                        lineNumber: 550,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 548,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, title, true, {
                                        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                        lineNumber: 546,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                            lineNumber: 532,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: "© 2025 JustDial Clone. All rights reserved."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 559,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"]
                                    ].map((Icon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-gray-500 hover:text-white transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                                lineNumber: 562,
                                                columnNumber: 98
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                            lineNumber: 562,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                                    lineNumber: 560,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                            lineNumber: 558,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                    lineNumber: 531,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
                lineNumber: 530,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/category/DesktopCategoryListingPage.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/categories/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoriesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$MobileCategoryListingPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/category/MobileCategoryListingPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$DesktopCategoryListingPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/category/DesktopCategoryListingPage.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function useWindowSize() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])((cb)=>{
        window.addEventListener("resize", cb);
        return ()=>window.removeEventListener("resize", cb);
    }, ()=>window.innerWidth, ()=>1024);
}
function CategoryView() {
    const isMobile = useWindowSize() < 768;
    if (isMobile) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$MobileCategoryListingPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/categories/page.tsx",
        lineNumber: 21,
        columnNumber: 24
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$DesktopCategoryListingPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/categories/page.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
function CategoriesPage() {
    // useSearchParams() inside Mobile/Desktop components requires a Suspense
    // boundary for static prerender to succeed.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50"
        }, void 0, false, {
            fileName: "[project]/src/app/categories/page.tsx",
            lineNumber: 29,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryView, {}, void 0, false, {
            fileName: "[project]/src/app/categories/page.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/categories/page.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5621fddb._.js.map