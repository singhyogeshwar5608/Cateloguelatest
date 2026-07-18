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
"[project]/src/components/justdial/MobileBusinessListingPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileBusinessListingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-ssr] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-ssr] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-listing-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/justdial/StoreCard.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
/* ─── Utilities ──────────────────────────────────────────────── */ function hashCode(str) {
    let hash = 0;
    for(let i = 0; i < str.length; i++){
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}
function getSocialStats(biz) {
    const h = hashCode(biz.id);
    return {
        likes: h % 4800 + 450,
        followers: (h >> 4) % 2800 + 180,
        views: (h >> 8) % 18000 + 4500,
        reviewCount: Math.floor(biz.totalRatings * 0.12),
        phone: `+91 ${9000000000 + h % 9999999999}`,
        isPremium: biz.isFeatured,
        isNew: h % 7 === 0
    };
}
function fmt(n) {
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    return n.toString();
}
const sortOptions = [
    {
        value: "popular",
        label: "Popular",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"]
    },
    {
        value: "nearest",
        label: "Nearest",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"]
    },
    {
        value: "highestRated",
        label: "Highest Rated",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
    },
    {
        value: "mostViewed",
        label: "Most Viewed",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"]
    },
    {
        value: "mostFollowed",
        label: "Most Followed",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        value: "newest",
        label: "Newest",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
    }
];
const distanceOptions = [
    {
        label: "1 km",
        value: 1
    },
    {
        label: "3 km",
        value: 3
    },
    {
        label: "5 km",
        value: 5
    },
    {
        label: "10 km",
        value: 10
    },
    {
        label: "Any",
        value: null
    }
];
const ratingOptions = [
    {
        label: "3+",
        value: 3
    },
    {
        label: "3.5+",
        value: 3.5
    },
    {
        label: "4+",
        value: 4
    },
    {
        label: "4.5+",
        value: 4.5
    },
    {
        label: "Any",
        value: null
    }
];
const priceOptions = [
    {
        label: "$",
        value: "$"
    },
    {
        label: "$$",
        value: "$$"
    },
    {
        label: "$$$",
        value: "$$$"
    },
    {
        label: "$$$$",
        value: "$$$$"
    },
    {
        label: "Any",
        value: null
    }
];
/* ─── Skeleton Components ────────────────────────────────────── */ function SkeletonCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-4 mb-3 rounded-[20px] bg-white overflow-hidden shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-36 bg-gray-200 animate-pulse"
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-11 h-11 rounded-full bg-gray-200 animate-pulse shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 bg-gray-200 rounded-full animate-pulse w-3/4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-3 bg-gray-200 rounded-full animate-pulse w-1/2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-3 bg-gray-200 rounded-full animate-pulse w-16"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-3 bg-gray-200 rounded-full animate-pulse w-20"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-3 bg-gray-200 rounded-full animate-pulse w-12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-3 bg-gray-200 rounded-full animate-pulse w-12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-3 bg-gray-200 rounded-full animate-pulse w-14"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1 pt-1",
                        children: [
                            1,
                            2,
                            3,
                            4,
                            5
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-9 flex-1 bg-gray-100 rounded-xl animate-pulse"
                            }, i, false, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
function SkeletonLoader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#F2F2F7]",
        style: {
            maxWidth: 480,
            margin: "0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-14 bg-white"
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 bg-white border-b border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-10 bg-gray-200 rounded-xl animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 bg-white border-b border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        1,
                        2,
                        3,
                        4
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-8 w-16 bg-gray-200 rounded-full animate-pulse"
                        }, i, false, {
                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonCard, {}, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonCard, {}, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonCard, {}, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
/* ─── Sort Bottom Sheet ──────────────────────────────────────── */ function SortSheet({ open, selected, onClose, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "fixed inset-0 bg-black/40 z-[60]",
                    onClick: onClose,
                    style: {
                        maxWidth: 480,
                        margin: "0 auto"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                    lineNumber: 218,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        y: "100%"
                    },
                    animate: {
                        y: 0
                    },
                    exit: {
                        y: "100%"
                    },
                    transition: {
                        type: "spring",
                        damping: 28,
                        stiffness: 300
                    },
                    className: "fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-[61] pb-6",
                    style: {
                        maxWidth: 480,
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-5 pt-4 pb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-gray-900",
                                    children: "Sort By"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                        lineNumber: 241,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 pt-1 space-y-1",
                            children: sortOptions.map((opt)=>{
                                const Icon = opt.icon;
                                const active = selected === opt.value;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    whileTap: {
                                        scale: 0.97
                                    },
                                    onClick: ()=>{
                                        onSelect(opt.value);
                                        onClose();
                                    },
                                    className: `w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-colors ${active ? "bg-[#0056b3]/8 text-[#0056b3]" : "text-gray-700 hover:bg-gray-50"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: `w-5 h-5 ${active ? "text-[#0056b3]" : "text-gray-400"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                            lineNumber: 262,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `flex-1 font-medium text-[15px] ${active ? "text-[#0056b3]" : ""}`,
                                            children: opt.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                            lineNumber: 267,
                                            columnNumber: 21
                                        }, this),
                                        active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                scale: 0
                                            },
                                            animate: {
                                                scale: 1
                                            },
                                            className: "w-5 h-5 rounded-full bg-[#0056b3] flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-3 h-3 text-white",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 3,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M5 13l4 4L19 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                                lineNumber: 276,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                            lineNumber: 271,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, opt.value, true, {
                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                    lineNumber: 249,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                    lineNumber: 227,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
        lineNumber: 215,
        columnNumber: 5
    }, this);
}
/* ─── Filter Bottom Sheet ────────────────────────────────────── */ function FilterSheet({ open, filters, onClose, onApply, onReset }) {
    const [local, setLocal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(filters);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) setLocal(filters);
    }, [
        open,
        filters
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "fixed inset-0 bg-black/40 z-[60]",
                    onClick: onClose,
                    style: {
                        maxWidth: 480,
                        margin: "0 auto"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                    lineNumber: 327,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        y: "100%"
                    },
                    animate: {
                        y: 0
                    },
                    exit: {
                        y: "100%"
                    },
                    transition: {
                        type: "spring",
                        damping: 28,
                        stiffness: 300
                    },
                    className: "fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-[61]",
                    style: {
                        maxWidth: 480,
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-5 pt-4 pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-gray-900",
                                    children: "Filters"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                onReset();
                                                setLocal({
                                                    openNow: false,
                                                    verified: false,
                                                    maxDistance: null,
                                                    minRating: null,
                                                    priceRange: null
                                                });
                                            },
                                            className: "text-xs font-semibold text-[#0056b3]",
                                            children: "Reset All"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                            lineNumber: 348,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onClose,
                                            className: "w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-4 h-4 text-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                                lineNumber: 367,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                            lineNumber: 363,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                    lineNumber: 347,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                            lineNumber: 345,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-5 pb-4 space-y-5 max-h-[60vh] overflow-y-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-gray-700 mb-2.5",
                                            children: "Distance"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                            lineNumber: 375,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: distanceOptions.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    onClick: ()=>setLocal((p)=>({
                                                                ...p,
                                                                maxDistance: d.value
                                                            })),
                                                    className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${local.maxDistance === d.value ? "bg-[#0056b3] text-white" : "bg-gray-100 text-gray-600"}`,
                                                    children: d.label
                                                }, d.label, false, {
                                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                            lineNumber: 378,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                    lineNumber: 374,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-gray-700 mb-2.5",
                                            children: "Rating"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                            lineNumber: 400,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: ratingOptions.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    onClick: ()=>setLocal((p)=>({
                                                                ...p,
                                                                minRating: r.value
                                                            })),
                                                    className: `px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1 ${local.minRating === r.value ? "bg-[#0056b3] text-white" : "bg-gray-100 text-gray-600"}`,
                                                    children: [
                                                        r.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            className: "w-3.5 h-3.5 text-amber-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 35
                                                        }, this),
                                                        r.label
                                                    ]
                                                }, r.label, true, {
                                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                            lineNumber: 403,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                    lineNumber: 399,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-gray-700 mb-2.5",
                                            children: "Price Range"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                            lineNumber: 426,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: priceOptions.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    onClick: ()=>setLocal((prev)=>({
                                                                ...prev,
                                                                priceRange: p.value
                                                            })),
                                                    className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${local.priceRange === p.value ? "bg-[#0056b3] text-white" : "bg-gray-100 text-gray-600"}`,
                                                    children: p.label
                                                }, p.label, false, {
                                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                            lineNumber: 429,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                    lineNumber: 425,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                            whileTap: {
                                                scale: 0.97
                                            },
                                            onClick: ()=>setLocal((p)=>({
                                                        ...p,
                                                        openNow: !p.openNow
                                                    })),
                                            className: `flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold transition-colors border ${local.openNow ? "bg-green-50 text-green-700 border-green-200" : "bg-white text-gray-500 border-gray-200"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 19
                                                }, this),
                                                "Open Now"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                            lineNumber: 451,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                            whileTap: {
                                                scale: 0.97
                                            },
                                            onClick: ()=>setLocal((p)=>({
                                                        ...p,
                                                        verified: !p.verified
                                                    })),
                                            className: `flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold transition-colors border ${local.verified ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-white text-gray-500 border-gray-200"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 19
                                                }, this),
                                                "Verified"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                            lineNumber: 465,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                    lineNumber: 450,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                            lineNumber: 372,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-5 pb-6 pt-2 border-t border-gray-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileTap: {
                                    scale: 0.97
                                },
                                onClick: ()=>{
                                    onApply(local);
                                    onClose();
                                },
                                className: "w-full py-3.5 rounded-2xl bg-[#0056b3] text-white font-semibold text-[15px]",
                                children: "Apply Filters"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 484,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                            lineNumber: 483,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                    lineNumber: 336,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
        lineNumber: 324,
        columnNumber: 5
    }, this);
}
/* ─── Business Card ──────────────────────────────────────────── */ function BusinessCard({ biz }) {
    // Unified card design — matches home page "Featured Stores" template.
    // Legacy like/follow/save state is preserved in props but no longer rendered,
    // per design unification (single consistent card UI across the app).
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-4 mb-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            name: biz.name,
            category: `${biz.category} · ${biz.area}`,
            rating: biz.rating,
            reviews: biz.totalRatings,
            distance: biz.distance,
            address: biz.area,
            logoEmoji: biz.logoEmoji,
            coverGradient: biz.coverGradient,
            storeId: biz.storeId,
            isFeatured: biz.isFeatured,
            isOpen: biz.isOpen,
            isVerified: biz.isVerified,
            variant: "mobile",
            fluid: true
        }, void 0, false, {
            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
            lineNumber: 521,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
        lineNumber: 520,
        columnNumber: 5
    }, this);
}
/* ─── Main Content ───────────────────────────────────────────── */ function MobileBusinessListingContent() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const loadMoreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const category = searchParams.get("category") || "restaurants";
    const location = searchParams.get("location") || "India Gate";
    /* State */ const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("popular");
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        openNow: false,
        verified: false,
        maxDistance: null,
        minRating: null,
        priceRange: null
    });
    const [showSortSheet, setShowSortSheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFilterSheet, setShowFilterSheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(6);
    const [likedSet, setLikedSet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [followedSet, setFollowedSet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [savedSet, setSavedSet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    /* Data */ const categoryMeta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCategoryMeta"])(category);
    const allBusinesses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBusinessesByCategory"])(category);
    /* Skeleton loading */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = setTimeout(()=>setIsLoading(false), 1200);
        return ()=>clearTimeout(t);
    }, [
        category
    ]);
    /* Load persisted sets from localStorage */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const l = localStorage.getItem("bl_liked");
            const f = localStorage.getItem("bl_followed");
            const s = localStorage.getItem("bl_saved");
            if (l) setLikedSet(new Set(JSON.parse(l)));
            if (f) setFollowedSet(new Set(JSON.parse(f)));
            if (s) setSavedSet(new Set(JSON.parse(s)));
        } catch  {}
    }, []);
    /* Persist sets */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem("bl_liked", JSON.stringify([
                ...likedSet
            ]));
        } catch  {}
    }, [
        likedSet
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem("bl_followed", JSON.stringify([
                ...followedSet
            ]));
        } catch  {}
    }, [
        followedSet
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem("bl_saved", JSON.stringify([
                ...savedSet
            ]));
        } catch  {}
    }, [
        savedSet
    ]);
    /* Reset visible count on category/filter change */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setVisibleCount(6);
        setIsLoading(true);
        const t = setTimeout(()=>setIsLoading(false), 600);
        return ()=>clearTimeout(t);
    }, [
        category,
        sortBy,
        filters
    ]);
    /* Toggle helpers */ const toggleLike = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setLikedSet((prev)=>{
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    }, []);
    const toggleFollow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setFollowedSet((prev)=>{
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    }, []);
    const toggleSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setSavedSet((prev)=>{
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    }, []);
    /* Filtered + Sorted */ const processed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let result = [
            ...allBusinesses
        ];
        // Search
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            result = result.filter((b)=>b.name.toLowerCase().includes(q) || b.category.toLowerCase().includes(q) || b.area.toLowerCase().includes(q));
        }
        // Filters
        if (filters.openNow) result = result.filter((b)=>b.isOpen);
        if (filters.verified) result = result.filter((b)=>b.isVerified);
        if (filters.maxDistance) result = result.filter((b)=>parseFloat(b.distance) <= filters.maxDistance);
        if (filters.minRating) result = result.filter((b)=>b.rating >= filters.minRating);
        if (filters.priceRange) result = result.filter((b)=>b.priceRange === filters.priceRange);
        // Sort
        const socialCache = new Map();
        const getSocial = (biz)=>{
            if (!socialCache.has(biz.id)) socialCache.set(biz.id, getSocialStats(biz));
            return socialCache.get(biz.id);
        };
        switch(sortBy){
            case "nearest":
                result.sort((a, b)=>parseFloat(a.distance) - parseFloat(b.distance));
                break;
            case "highestRated":
                result.sort((a, b)=>b.rating - a.rating);
                break;
            case "mostViewed":
                result.sort((a, b)=>getSocial(b).views - getSocial(a).views);
                break;
            case "mostFollowed":
                result.sort((a, b)=>getSocial(b).followers - getSocial(a).followers);
                break;
            case "newest":
                result.sort((a, b)=>{
                    const aNew = getSocial(a).isNew ? 0 : 1;
                    const bNew = getSocial(b).isNew ? 0 : 1;
                    return aNew - bNew;
                });
                break;
            case "popular":
            default:
                result.sort((a, b)=>{
                    const aS = getSocial(a);
                    const bS = getSocial(b);
                    const aScore = aS.views + aS.likes * 5 + aS.followers * 3 + b.rating * 100;
                    const bScore = bS.views + bS.likes * 5 + bS.followers * 3 + a.rating * 100;
                    return bScore - aScore;
                });
                break;
        }
        // Featured first
        result.sort((a, b)=>(b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        return result;
    }, [
        allBusinesses,
        searchQuery,
        filters,
        sortBy
    ]);
    const visibleBusinesses = processed.slice(0, visibleCount);
    const hasMore = visibleCount < processed.length;
    const activeFilterCount = [
        filters.openNow,
        filters.verified,
        filters.maxDistance,
        filters.minRating,
        filters.priceRange
    ].filter(Boolean).length;
    /* Category change */ const handleCategoryChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((slug)=>{
        const params = new URLSearchParams(searchParams.toString());
        params.set("category", slug);
        router.push(`?${params.toString()}`);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [
        searchParams,
        router
    ]);
    /* Social proof */ const totalViews = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>allBusinesses.reduce((acc, b)=>acc + getSocialStats(b).views, 0), [
        allBusinesses
    ]);
    const totalFollowers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>allBusinesses.reduce((acc, b)=>acc + getSocialStats(b).followers, 0), [
        allBusinesses
    ]);
    /* Render */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#F2F2F7]",
        style: {
            maxWidth: 480,
            margin: "0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-50 bg-white/95 backdrop-blur-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center justify-center w-9 h-9 -ml-1 rounded-full active:bg-gray-100 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-5 h-5 text-gray-700"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                    lineNumber: 776,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 772,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: categoryMeta?.icon || "📋"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                        lineNumber: 779,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-gray-900 text-[15px]",
                                        children: categoryMeta?.label || category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                        lineNumber: 780,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 778,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-9"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 784,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 771,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                    lineNumber: 790,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search businesses...",
                                    value: searchQuery,
                                    onChange: (e)=>{
                                        setSearchQuery(e.target.value);
                                        setVisibleCount(6);
                                    },
                                    className: "w-full h-10 pl-10 pr-10 rounded-2xl bg-[#F2F2F7] text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#0056b3]/20 transition-all"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                    lineNumber: 791,
                                    columnNumber: 13
                                }, this),
                                searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSearchQuery("");
                                        setVisibleCount(6);
                                    },
                                    className: "absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-3 h-3 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                        lineNumber: 809,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                    lineNumber: 802,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                            lineNumber: 789,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 788,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 px-4 pb-3 overflow-x-auto no-scrollbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileTap: {
                                    scale: 0.95
                                },
                                onClick: ()=>setFilters((p)=>({
                                            ...p,
                                            openNow: !p.openNow
                                        })),
                                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-colors ${filters.openNow ? "bg-green-500 text-white" : "bg-gray-100 text-gray-600"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                        lineNumber: 829,
                                        columnNumber: 13
                                    }, this),
                                    "Open Now"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 818,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileTap: {
                                    scale: 0.95
                                },
                                onClick: ()=>setFilters((p)=>({
                                            ...p,
                                            verified: !p.verified
                                        })),
                                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-colors ${filters.verified ? "bg-[#0056b3] text-white" : "bg-gray-100 text-gray-600"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                        lineNumber: 844,
                                        columnNumber: 13
                                    }, this),
                                    "Verified"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 833,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileTap: {
                                    scale: 0.95
                                },
                                onClick: ()=>setShowSortSheet(true),
                                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                        lineNumber: 853,
                                        columnNumber: 13
                                    }, this),
                                    "Sort",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                        lineNumber: 855,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 848,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileTap: {
                                    scale: 0.95
                                },
                                onClick: ()=>setShowFilterSheet(true),
                                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-colors relative ${activeFilterCount > 0 ? "bg-[#0056b3] text-white" : "bg-gray-100 text-gray-600"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                        lineNumber: 867,
                                        columnNumber: 13
                                    }, this),
                                    "Filters",
                                    activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#e42529] text-white text-[9px] font-bold flex items-center justify-center",
                                        children: activeFilterCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                        lineNumber: 870,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 858,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 816,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                lineNumber: 769,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 px-4 py-2.5 overflow-x-auto no-scrollbar",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listingCategories"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                            whileTap: {
                                scale: 0.95
                            },
                            onClick: ()=>handleCategoryChange(cat.slug),
                            className: `flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold shrink-0 transition-all ${cat.slug === category ? "bg-[#0056b3] text-white shadow-md shadow-[#0056b3]/25" : "bg-[#F2F2F7] text-gray-600"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: cat.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                    lineNumber: 892,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: cat.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                    lineNumber: 893,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, cat.slug, true, {
                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                            lineNumber: 882,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                    lineNumber: 880,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                lineNumber: 879,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 pt-3 pb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-gray-900",
                                children: processed.length
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 902,
                                columnNumber: 11
                            }, this),
                            " ",
                            categoryMeta?.label || category,
                            " found near",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-700",
                                children: location
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 906,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 901,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mt-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-gray-400 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                        lineNumber: 910,
                                        columnNumber: 13
                                    }, this),
                                    fmt(totalViews),
                                    " views today"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 909,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-gray-400 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                        lineNumber: 914,
                                        columnNumber: 13
                                    }, this),
                                    fmt(totalFollowers),
                                    " followers this week"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 913,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 908,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                lineNumber: 900,
                columnNumber: 7
            }, this),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonCard, {}, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 923,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonCard, {}, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 924,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonCard, {}, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 925,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                lineNumber: 922,
                columnNumber: 9
            }, this) : processed.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2",
                        children: visibleBusinesses.map((biz)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BusinessCard, {
                                biz: biz,
                                categoryColor: categoryMeta?.color || "#0056b3",
                                onLike: ()=>toggleLike(biz.id),
                                onFollow: ()=>toggleFollow(biz.id),
                                onSave: ()=>toggleSave(biz.id),
                                liked: likedSet.has(biz.id),
                                followed: followedSet.has(biz.id),
                                saved: savedSet.has(biz.id)
                            }, biz.id, false, {
                                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                lineNumber: 931,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 929,
                        columnNumber: 11
                    }, this),
                    hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: loadMoreRef,
                        className: "py-4 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                            whileTap: {
                                scale: 0.95
                            },
                            onClick: ()=>setVisibleCount((p)=>Math.min(p + 6, processed.length)),
                            className: "px-8 py-3 rounded-2xl bg-white text-[#0056b3] font-semibold text-sm shadow-sm border border-gray-100 flex items-center gap-2",
                            children: [
                                "Load More",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-400",
                                    children: [
                                        "(",
                                        processed.length - visibleCount,
                                        " remaining)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                                    lineNumber: 956,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                            lineNumber: 948,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 947,
                        columnNumber: 13
                    }, this),
                    !hasMore && processed.length > 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-6 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-400",
                            children: [
                                "You've seen all",
                                " ",
                                processed.length,
                                " businesses"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                            lineNumber: 966,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 965,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true) : /* Empty State */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center py-20 px-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "w-8 h-8 text-gray-300"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                            lineNumber: 977,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 976,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-gray-900 text-lg",
                        children: "No businesses found"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 979,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mt-2 max-w-[260px] leading-relaxed",
                        children: "Try adjusting your filters or expanding the search radius to discover more businesses near you."
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 982,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: ()=>{
                            setFilters({
                                openNow: false,
                                verified: false,
                                maxDistance: null,
                                minRating: null,
                                priceRange: null
                            });
                            setSearchQuery("");
                        },
                        className: "mt-5 px-6 py-2.5 rounded-2xl bg-[#0056b3] text-white font-semibold text-sm",
                        children: "Clear All Filters"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                        lineNumber: 986,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                lineNumber: 975,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-6",
                style: {
                    paddingBottom: "env(safe-area-inset-bottom, 0px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                lineNumber: 1006,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SortSheet, {
                open: showSortSheet,
                selected: sortBy,
                onClose: ()=>setShowSortSheet(false),
                onSelect: setSortBy
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                lineNumber: 1012,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSheet, {
                open: showFilterSheet,
                filters: filters,
                onClose: ()=>setShowFilterSheet(false),
                onApply: setFilters,
                onReset: ()=>setFilters({
                        openNow: false,
                        verified: false,
                        maxDistance: null,
                        minRating: null,
                        priceRange: null
                    })
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
                lineNumber: 1018,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
        lineNumber: 764,
        columnNumber: 5
    }, this);
}
function MobileBusinessListingPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonLoader, {}, void 0, false, {
            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
            lineNumber: 1041,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileBusinessListingContent, {}, void 0, false, {
            fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
            lineNumber: 1042,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/justdial/MobileBusinessListingPage.tsx",
        lineNumber: 1041,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/justdial/DesktopBusinessListingPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesktopBusinessListingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-ssr] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-ssr] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-ssr] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-listing-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/justdial/StoreCard.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
/* ─── Utilities (shared logic) ───────────────────────────────── */ function hashCode(str) {
    let hash = 0;
    for(let i = 0; i < str.length; i++){
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}
function getSocialStats(biz) {
    const h = hashCode(biz.id);
    return {
        likes: h % 4800 + 450,
        followers: (h >> 4) % 2800 + 180,
        views: (h >> 8) % 18000 + 4500,
        reviewCount: Math.floor(biz.totalRatings * 0.12),
        phone: `+91 ${9000000000 + h % 9999999999}`,
        isPremium: biz.isFeatured,
        isNew: h % 7 === 0
    };
}
function fmt(n) {
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    return n.toString();
}
const sortOptions = [
    {
        value: "popular",
        label: "Popular",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"]
    },
    {
        value: "nearest",
        label: "Nearest",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"]
    },
    {
        value: "highestRated",
        label: "Highest Rated",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
    },
    {
        value: "mostViewed",
        label: "Most Viewed",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"]
    },
    {
        value: "mostFollowed",
        label: "Most Followed",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        value: "newest",
        label: "Newest",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
    }
];
const distanceOptions = [
    {
        label: "1 km",
        value: 1
    },
    {
        label: "3 km",
        value: 3
    },
    {
        label: "5 km",
        value: 5
    },
    {
        label: "10 km",
        value: 10
    },
    {
        label: "Any",
        value: null
    }
];
const ratingOptions = [
    {
        label: "3+",
        value: 3
    },
    {
        label: "3.5+",
        value: 3.5
    },
    {
        label: "4+",
        value: 4
    },
    {
        label: "4.5+",
        value: 4.5
    },
    {
        label: "Any",
        value: null
    }
];
const priceOptions = [
    {
        label: "$",
        value: "$"
    },
    {
        label: "$$",
        value: "$$"
    },
    {
        label: "$$$",
        value: "$$$"
    },
    {
        label: "$$$$",
        value: "$$$$"
    },
    {
        label: "Any",
        value: null
    }
];
/* ─── Desktop Business Card ──────────────────────────────────── */ function DesktopBusinessCard({ biz }) {
    // Unified card design — matches home page "Featured Stores" template.
    // Legacy like/follow/save state is preserved in props but no longer rendered,
    // per design unification (single consistent card UI across the app).
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        name: biz.name,
        category: `${biz.category} · ${biz.area}`,
        rating: biz.rating,
        reviews: biz.totalRatings,
        distance: biz.distance,
        address: biz.area,
        logoEmoji: biz.logoEmoji,
        coverGradient: biz.coverGradient,
        storeId: biz.storeId,
        isFeatured: biz.isFeatured,
        isOpen: biz.isOpen,
        isVerified: biz.isVerified,
        variant: "desktop",
        fluid: true
    }, void 0, false, {
        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
/* ─── Main Content ───────────────────────────────────────────── */ function DesktopBusinessListingContent() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const category = searchParams.get("category") || "restaurants";
    const location = searchParams.get("location") || "India Gate";
    /* State */ const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("popular");
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        openNow: false,
        verified: false,
        maxDistance: null,
        minRating: null,
        priceRange: null
    });
    const [showSortDropdown, setShowSortDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFilterPanel, setShowFilterPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(9);
    const [likedSet, setLikedSet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [followedSet, setFollowedSet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [savedSet, setSavedSet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    /* Data */ const categoryMeta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCategoryMeta"])(category);
    const allBusinesses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBusinessesByCategory"])(category);
    /* localStorage */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const l = localStorage.getItem("bl_liked");
            const f = localStorage.getItem("bl_followed");
            const s = localStorage.getItem("bl_saved");
            if (l) setLikedSet(new Set(JSON.parse(l)));
            if (f) setFollowedSet(new Set(JSON.parse(f)));
            if (s) setSavedSet(new Set(JSON.parse(s)));
        } catch  {}
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem("bl_liked", JSON.stringify([
                ...likedSet
            ]));
        } catch  {}
    }, [
        likedSet
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem("bl_followed", JSON.stringify([
                ...followedSet
            ]));
        } catch  {}
    }, [
        followedSet
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem("bl_saved", JSON.stringify([
                ...savedSet
            ]));
        } catch  {}
    }, [
        savedSet
    ]);
    /* Reset on filter/category change */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setVisibleCount(9);
    }, [
        category,
        sortBy,
        filters
    ]);
    /* Toggle helpers */ const toggleLike = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setLikedSet((prev)=>{
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    }, []);
    const toggleFollow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setFollowedSet((prev)=>{
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    }, []);
    const toggleSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setSavedSet((prev)=>{
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    }, []);
    /* Close dropdown on outside click */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!showSortDropdown) return;
        const handler = ()=>setShowSortDropdown(false);
        document.addEventListener("click", handler);
        return ()=>document.removeEventListener("click", handler);
    }, [
        showSortDropdown
    ]);
    /* Filtered + Sorted */ const processed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let result = [
            ...allBusinesses
        ];
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            result = result.filter((b)=>b.name.toLowerCase().includes(q) || b.category.toLowerCase().includes(q) || b.area.toLowerCase().includes(q));
        }
        if (filters.openNow) result = result.filter((b)=>b.isOpen);
        if (filters.verified) result = result.filter((b)=>b.isVerified);
        if (filters.maxDistance) result = result.filter((b)=>parseFloat(b.distance) <= filters.maxDistance);
        if (filters.minRating) result = result.filter((b)=>b.rating >= filters.minRating);
        if (filters.priceRange) result = result.filter((b)=>b.priceRange === filters.priceRange);
        const socialCache = new Map();
        const getSocial = (biz)=>{
            if (!socialCache.has(biz.id)) socialCache.set(biz.id, getSocialStats(biz));
            return socialCache.get(biz.id);
        };
        switch(sortBy){
            case "nearest":
                result.sort((a, b)=>parseFloat(a.distance) - parseFloat(b.distance));
                break;
            case "highestRated":
                result.sort((a, b)=>b.rating - a.rating);
                break;
            case "mostViewed":
                result.sort((a, b)=>getSocial(b).views - getSocial(a).views);
                break;
            case "mostFollowed":
                result.sort((a, b)=>getSocial(b).followers - getSocial(a).followers);
                break;
            case "newest":
                result.sort((a, b)=>{
                    const aNew = getSocial(a).isNew ? 0 : 1;
                    const bNew = getSocial(b).isNew ? 0 : 1;
                    return aNew - bNew;
                });
                break;
            case "popular":
            default:
                result.sort((a, b)=>{
                    const aS = getSocial(a);
                    const bS = getSocial(b);
                    const aScore = aS.views + aS.likes * 5 + aS.followers * 3 + b.rating * 100;
                    const bScore = bS.views + bS.likes * 5 + bS.followers * 3 + a.rating * 100;
                    return bScore - aScore;
                });
                break;
        }
        result.sort((a, b)=>(b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        return result;
    }, [
        allBusinesses,
        searchQuery,
        filters,
        sortBy
    ]);
    const visibleBusinesses = processed.slice(0, visibleCount);
    const hasMore = visibleCount < processed.length;
    const avgRating = allBusinesses.length === 0 ? "0" : (allBusinesses.reduce((acc, b)=>acc + b.rating, 0) / allBusinesses.length).toFixed(1);
    const openCount = allBusinesses.filter((b)=>b.isOpen).length;
    const verifiedCount = allBusinesses.filter((b)=>b.isVerified).length;
    const handleCategoryChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((slug)=>{
        const params = new URLSearchParams(searchParams.toString());
        params.set("category", slug);
        router.push(`?${params.toString()}`);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [
        searchParams,
        router
    ]);
    const activeFilterCount = [
        filters.openNow,
        filters.verified,
        filters.maxDistance,
        filters.minRating,
        filters.priceRange
    ].filter(Boolean).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "hover:text-[#0056b3] transition-colors",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 382,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 388,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hover:text-[#0056b3] cursor-pointer transition-colors",
                                        children: "Explore"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 389,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 392,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: categoryMeta?.label || category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 393,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                lineNumber: 381,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 399,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Share"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 400,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 398,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 403,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Save"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 404,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 402,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                lineNumber: 397,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                        lineNumber: 380,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                    lineNumber: 379,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                lineNumber: 378,
                columnNumber: 7
            }, this),
            categoryMeta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden",
                style: {
                    background: `linear-gradient(135deg, ${categoryMeta.color}, ${categoryMeta.color}dd, ${categoryMeta.color}bb)`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                        lineNumber: 419,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/10"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                        lineNumber: 420,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 right-40 w-20 h-20 rounded-full bg-white/5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                        lineNumber: 421,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-7xl mx-auto px-6 py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-4xl backdrop-blur-sm",
                                        children: categoryMeta.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 425,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-white font-bold text-3xl",
                                                children: categoryMeta.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 429,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/80 text-base mt-1",
                                                children: [
                                                    "Discover the best ",
                                                    categoryMeta.label.toLowerCase(),
                                                    " near",
                                                    " ",
                                                    location
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 432,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 428,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                lineNumber: 424,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/15 rounded-2xl p-4 text-center backdrop-blur-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                className: "w-6 h-6 text-white/90 mx-auto mb-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 441,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white font-bold text-2xl",
                                                children: allBusinesses.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 442,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/70 text-sm",
                                                children: "Places Found"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 445,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 440,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/15 rounded-2xl p-4 text-center backdrop-blur-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                className: "w-6 h-6 text-white/90 mx-auto mb-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 448,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white font-bold text-2xl",
                                                children: avgRating
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 449,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/70 text-sm",
                                                children: "Avg Rating"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 450,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 447,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/15 rounded-2xl p-4 text-center backdrop-blur-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-6 h-6 text-white/90 mx-auto mb-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 453,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white font-bold text-2xl",
                                                children: openCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 454,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/70 text-sm",
                                                children: "Open Now"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 455,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 452,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/15 rounded-2xl p-4 text-center backdrop-blur-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "w-6 h-6 text-white/90 mx-auto mb-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 458,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white font-bold text-2xl",
                                                children: verifiedCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 459,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/70 text-sm",
                                                children: "Verified"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 462,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 457,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                lineNumber: 439,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                        lineNumber: 423,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                lineNumber: 413,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-xl flex items-center justify-center text-xl",
                                        style: {
                                            backgroundColor: `${categoryMeta?.bg || "#F0F4FF"}`
                                        },
                                        children: categoryMeta?.icon || "📋"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 474,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-gray-900",
                                        children: categoryMeta?.label || category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 482,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                lineNumber: 473,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 491,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Search...",
                                                value: searchQuery,
                                                onChange: (e)=>{
                                                    setSearchQuery(e.target.value);
                                                    setVisibleCount(9);
                                                },
                                                className: "w-56 h-9 pl-9 pr-8 rounded-xl bg-gray-100 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#0056b3]/20 transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 492,
                                                columnNumber: 15
                                            }, this),
                                            searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setSearchQuery("");
                                                    setVisibleCount(9);
                                                },
                                                className: "absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-3 h-3 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 503,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 490,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    setShowSortDropdown(!showSortDropdown);
                                                },
                                                className: "flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                        lineNumber: 524,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Sort"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 517,
                                                columnNumber: 15
                                            }, this),
                                            showSortDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute right-0 top-full mt-1 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-50",
                                                children: sortOptions.map((opt)=>{
                                                    const Icon = opt.icon;
                                                    const active = sortBy === opt.value;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            setSortBy(opt.value);
                                                            setShowSortDropdown(false);
                                                            setVisibleCount(9);
                                                        },
                                                        className: `w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${active ? "bg-[#0056b3]/8 text-[#0056b3]" : "text-gray-600 hover:bg-gray-50"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                                lineNumber: 548,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex-1 text-left",
                                                                children: opt.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                                lineNumber: 549,
                                                                columnNumber: 25
                                                            }, this),
                                                            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-4 h-4 rounded-full bg-[#0056b3] flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-2.5 h-2.5 text-white",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: 3,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        d: "M5 13l4 4L19 7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                                        lineNumber: 559,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                                    lineNumber: 552,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                                lineNumber: 551,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, opt.value, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 529,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 516,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                        whileTap: {
                                            scale: 0.97
                                        },
                                        onClick: ()=>setShowFilterPanel(!showFilterPanel),
                                        className: `flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg border transition-colors relative ${activeFilterCount > 0 ? "bg-[#0056b3] text-white border-[#0056b3]" : "text-gray-600 border-gray-200 hover:bg-gray-50"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 584,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Filters"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 585,
                                                columnNumber: 15
                                            }, this),
                                            activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#e42529] text-white text-[10px] font-bold flex items-center justify-center",
                                                children: activeFilterCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 587,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 575,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                lineNumber: 488,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                        lineNumber: 471,
                        columnNumber: 9
                    }, this),
                    showFilterPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        className: "mt-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-gray-900",
                                        children: "Filters"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 604,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilters({
                                                openNow: false,
                                                verified: false,
                                                maxDistance: null,
                                                minRating: null,
                                                priceRange: null
                                            }),
                                        className: "text-xs font-semibold text-[#0056b3] hover:underline",
                                        children: "Reset All"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 605,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                lineNumber: 603,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 lg:grid-cols-4 gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider",
                                                children: "Distance"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 624,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1.5",
                                                children: distanceOptions.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setFilters((p)=>({
                                                                    ...p,
                                                                    maxDistance: d.value
                                                                })),
                                                        className: `px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${filters.maxDistance === d.value ? "bg-[#0056b3] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                                                        children: d.label
                                                    }, d.label, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                        lineNumber: 629,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 627,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 623,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider",
                                                children: "Rating"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 651,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1.5",
                                                children: ratingOptions.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setFilters((p)=>({
                                                                    ...p,
                                                                    minRating: r.value
                                                                })),
                                                        className: `px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 ${filters.minRating === r.value ? "bg-[#0056b3] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                                                        children: [
                                                            r.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                className: "w-3 h-3 text-amber-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                                lineNumber: 671,
                                                                columnNumber: 25
                                                            }, this),
                                                            r.label
                                                        ]
                                                    }, r.label, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                        lineNumber: 656,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 654,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 650,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider",
                                                children: "Price Range"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 681,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1.5",
                                                children: priceOptions.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setFilters((prev)=>({
                                                                    ...prev,
                                                                    priceRange: p.value
                                                                })),
                                                        className: `px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${filters.priceRange === p.value ? "bg-[#0056b3] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                                                        children: p.label
                                                    }, p.label, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                        lineNumber: 686,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 684,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 680,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 708,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setFilters((p)=>({
                                                                    ...p,
                                                                    openNow: !p.openNow
                                                                })),
                                                        className: `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${filters.openNow ? "bg-green-50 text-green-700 border-green-200" : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                                lineNumber: 725,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Open Now"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                        lineNumber: 712,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setFilters((p)=>({
                                                                    ...p,
                                                                    verified: !p.verified
                                                                })),
                                                        className: `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${filters.verified ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                                lineNumber: 741,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Verified"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                        lineNumber: 728,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                                lineNumber: 711,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 707,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                lineNumber: 621,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                        lineNumber: 597,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mt-5 overflow-x-auto no-scrollbar pb-1",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listingCategories"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleCategoryChange(cat.slug),
                                className: `flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium shrink-0 transition-all ${cat.slug === category ? "bg-[#0056b3] text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: cat.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 762,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: cat.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 763,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, cat.slug, true, {
                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                lineNumber: 753,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                        lineNumber: 751,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                lineNumber: 470,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 mb-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-900",
                                children: processed.length
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                lineNumber: 773,
                                columnNumber: 13
                            }, this),
                            " ",
                            "results found",
                            searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    " ",
                                    "for “",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900",
                                        children: searchQuery
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                        lineNumber: 781,
                                        columnNumber: 17
                                    }, this),
                                    "”"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                lineNumber: 778,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                        lineNumber: 772,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                    lineNumber: 771,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                lineNumber: 770,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6",
                children: processed.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
                            children: visibleBusinesses.map((biz)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopBusinessCard, {
                                    biz: biz,
                                    onLike: ()=>toggleLike(biz.id),
                                    onFollow: ()=>toggleFollow(biz.id),
                                    onSave: ()=>toggleSave(biz.id),
                                    liked: likedSet.has(biz.id),
                                    followed: followedSet.has(biz.id),
                                    saved: savedSet.has(biz.id)
                                }, biz.id, false, {
                                    fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                    lineNumber: 794,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                            lineNumber: 792,
                            columnNumber: 13
                        }, this),
                        hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center py-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: 0.97
                                },
                                onClick: ()=>setVisibleCount((p)=>Math.min(p + 9, processed.length)),
                                className: "px-8 py-3 rounded-xl bg-white text-[#0056b3] font-semibold text-sm shadow-sm border border-gray-200 hover:border-[#0056b3]/30 transition-colors",
                                children: [
                                    "Load More (",
                                    processed.length - visibleCount,
                                    " remaining)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                lineNumber: 810,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                            lineNumber: 809,
                            columnNumber: 15
                        }, this),
                        !hasMore && processed.length > 9 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-8 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400",
                                children: [
                                    "Showing all ",
                                    processed.length,
                                    " businesses"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                                lineNumber: 827,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                            lineNumber: 826,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true) : /* Empty State */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center py-24 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-7xl mb-6",
                            children: "🔍"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                            lineNumber: 836,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-gray-900 text-2xl",
                            children: "No businesses found"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                            lineNumber: 837,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 mt-3 max-w-md text-base",
                            children: [
                                "We couldn't find any",
                                " ",
                                categoryMeta?.label?.toLowerCase() || category,
                                " matching your criteria. Try adjusting your filters or expanding the search radius."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                            lineNumber: 840,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setFilters({
                                    openNow: false,
                                    verified: false,
                                    maxDistance: null,
                                    minRating: null,
                                    priceRange: null
                                });
                                setSearchQuery("");
                            },
                            className: "mt-5 px-6 py-2.5 rounded-xl bg-[#0056b3] text-white font-semibold text-sm hover:bg-[#0056b3]/90 transition-colors",
                            children: "Clear All Filters"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                            lineNumber: 846,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                    lineNumber: 835,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                lineNumber: 789,
                columnNumber: 7
            }, this),
            processed.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-8 mt-8 border-t border-gray-200 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-sm text-gray-500",
                    children: [
                        "Showing",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-gray-700",
                            children: categoryMeta?.label || category
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                            lineNumber: 870,
                            columnNumber: 13
                        }, this),
                        " ",
                        "near",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-gray-700",
                            children: location
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                            lineNumber: 874,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                    lineNumber: 868,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                lineNumber: 867,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
        lineNumber: 376,
        columnNumber: 5
    }, this);
}
function DesktopBusinessListingPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 border-3 border-[#0056b3] border-t-transparent rounded-full animate-spin mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                        lineNumber: 890,
                        columnNumber: 13
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 mt-4",
                        children: "Loading listings..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                        lineNumber: 891,
                        columnNumber: 13
                    }, void 0)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
                lineNumber: 889,
                columnNumber: 11
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
            lineNumber: 888,
            columnNumber: 9
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopBusinessListingContent, {}, void 0, false, {
            fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
            lineNumber: 896,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/justdial/DesktopBusinessListingPage.tsx",
        lineNumber: 886,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/explore/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExplorePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$MobileBusinessListingPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/justdial/MobileBusinessListingPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$DesktopBusinessListingPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/justdial/DesktopBusinessListingPage.tsx [app-ssr] (ecmascript)");
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
function ExplorePage() {
    const isMobile = useWindowSize() < 768;
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$MobileBusinessListingPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/explore/page.tsx",
            lineNumber: 19,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$DesktopBusinessListingPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/explore/page.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9ce372a7._.js.map