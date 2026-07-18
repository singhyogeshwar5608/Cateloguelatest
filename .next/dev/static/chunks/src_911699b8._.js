(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/category-landing-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ── Types ────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "categoryLandingData",
    ()=>categoryLandingData,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getAllCategorySlugs",
    ()=>getAllCategorySlugs,
    "getCategoryLanding",
    ()=>getCategoryLanding
]);
const categoryLandingData = [
    // ─── 1. B2B ──────────────────────────────────────────────────────
    {
        slug: "b2b",
        label: "B2B Services",
        emoji: "🤝",
        description: "Connect with trusted B2B suppliers, wholesalers, manufacturers, and corporate service providers. Streamline your business procurement with verified vendors across industries.",
        color: "#4F46E5",
        gradient: "from-indigo-500 to-violet-600",
        bgLight: "#EEF2FF",
        businessCount: 5600,
        verifiedCount: 1960,
        subCategories: [
            {
                slug: "wholesale-suppliers",
                label: "Wholesale Suppliers",
                emoji: "📦",
                count: 1840
            },
            {
                slug: "manufacturers",
                label: "Manufacturers",
                emoji: "🏭",
                count: 980
            },
            {
                slug: "corporate-gifting",
                label: "Corporate Gifting",
                emoji: "🎁",
                count: 640
            },
            {
                slug: "it-services",
                label: "IT Services",
                emoji: "💻",
                count: 1120
            },
            {
                slug: "logistics-freight",
                label: "Logistics & Freight",
                emoji: "🚚",
                count: 520
            },
            {
                slug: "office-equipment",
                label: "Office Equipment",
                emoji: "🖨️",
                count: 340
            },
            {
                slug: "raw-materials",
                label: "Raw Materials",
                emoji: "🧱",
                count: 160
            }
        ],
        relatedSlugs: [
            "shopping",
            "electronics",
            "rent-hire"
        ]
    },
    // ─── 2. Doctors ──────────────────────────────────────────────────
    {
        slug: "doctors",
        label: "Doctors",
        emoji: "🏥",
        description: "Find top-rated doctors, specialists, and clinics near you. Book consultations with verified physicians across all major specialities including general medicine, cardiology, dermatology, and orthopaedics.",
        color: "#0891B2",
        gradient: "from-cyan-500 to-teal-600",
        bgLight: "#ECFEFF",
        businessCount: 12400,
        verifiedCount: 4464,
        listingSlug: "doctors",
        subCategories: [
            {
                slug: "general-physician",
                label: "General Physician",
                emoji: "🩺",
                count: 3420
            },
            {
                slug: "dentist",
                label: "Dentist",
                emoji: "🦷",
                count: 2180
            },
            {
                slug: "dermatologist",
                label: "Dermatologist",
                emoji: "🧴",
                count: 1640
            },
            {
                slug: "orthopaedic",
                label: "Orthopaedic",
                emoji: "🦴",
                count: 1280
            },
            {
                slug: "cardiologist",
                label: "Cardiologist",
                emoji: "❤️",
                count: 960
            },
            {
                slug: "paediatrician",
                label: "Paediatrician",
                emoji: "👶",
                count: 1520
            },
            {
                slug: "ent-specialist",
                label: "ENT Specialist",
                emoji: "👂",
                count: 880
            },
            {
                slug: "ophthalmologist",
                label: "Ophthalmologist",
                emoji: "👁️",
                count: 520
            }
        ],
        relatedSlugs: [
            "health",
            "gyms",
            "pharmacies"
        ]
    },
    // ─── 3. Travel ───────────────────────────────────────────────────
    {
        slug: "travel",
        label: "Travel",
        emoji: "✈️",
        description: "Plan your perfect trip with trusted travel agents, tour operators, and transport services. From flight bookings to curated holiday packages, explore the world with confidence.",
        color: "#0284C7",
        gradient: "from-sky-500 to-blue-600",
        bgLight: "#E0F2FE",
        businessCount: 7800,
        verifiedCount: 2730,
        listingSlug: "travel-agents",
        subCategories: [
            {
                slug: "tour-operators",
                label: "Tour Operators",
                emoji: "🗺️",
                count: 2340
            },
            {
                slug: "flight-booking",
                label: "Flight Booking",
                emoji: "🛫",
                count: 1560
            },
            {
                slug: "holiday-packages",
                label: "Holiday Packages",
                emoji: "🏖️",
                count: 1420
            },
            {
                slug: "visa-services",
                label: "Visa Services",
                emoji: "📑",
                count: 860
            },
            {
                slug: "car-rentals",
                label: "Car Rentals",
                emoji: "🚗",
                count: 940
            },
            {
                slug: "cruise-packages",
                label: "Cruise Packages",
                emoji: "🚢",
                count: 380
            },
            {
                slug: "adventure-sports",
                label: "Adventure Sports",
                emoji: "🧗",
                count: 300
            }
        ],
        relatedSlugs: [
            "hotels",
            "car-hire",
            "restaurants"
        ]
    },
    // ─── 4. Car Hire ─────────────────────────────────────────────────
    {
        slug: "car-hire",
        label: "Car Hire",
        emoji: "🚘",
        description: "Rent cars, taxis, and luxury vehicles for your daily commute or special occasions. Choose from self-drive options, chauffeured cabs, and airport transfers at competitive rates.",
        color: "#DC2626",
        gradient: "from-red-500 to-rose-600",
        bgLight: "#FEF2F2",
        businessCount: 4200,
        verifiedCount: 1470,
        subCategories: [
            {
                slug: "self-drive-cars",
                label: "Self-Drive Cars",
                emoji: "🔑",
                count: 1240
            },
            {
                slug: "chauffeured-cabs",
                label: "Chauffeured Cabs",
                emoji: "🚖",
                count: 1080
            },
            {
                slug: "airport-transfers",
                label: "Airport Transfers",
                emoji: "🛬",
                count: 860
            },
            {
                slug: "luxury-car-rental",
                label: "Luxury Car Rental",
                emoji: "🏎️",
                count: 440
            },
            {
                slug: "outstation-cabs",
                label: "Outstation Cabs",
                emoji: "🛣️",
                count: 380
            },
            {
                slug: "tempo-traveller",
                label: "Tempo Traveller",
                emoji: "🚐",
                count: 200
            }
        ],
        relatedSlugs: [
            "travel",
            "rent-hire",
            "pg-hostel"
        ]
    },
    // ─── 5. Beauty ───────────────────────────────────────────────────
    {
        slug: "beauty",
        label: "Beauty & Wellness",
        emoji: "💇",
        description: "Discover the best salons, spas, and beauty parlours in your city. From haircuts and skincare to bridal makeup and wellness therapies, look and feel your best every day.",
        color: "#DB2777",
        gradient: "from-pink-500 to-rose-600",
        bgLight: "#FCE7F3",
        businessCount: 9600,
        verifiedCount: 3360,
        listingSlug: "salons",
        subCategories: [
            {
                slug: "hair-salon",
                label: "Hair Salon",
                emoji: "💇‍♀️",
                count: 2880
            },
            {
                slug: "bridal-makeup",
                label: "Bridal Makeup",
                emoji: "👰",
                count: 1440
            },
            {
                slug: "spa-massage",
                label: "Spa & Massage",
                emoji: "💆",
                count: 1680
            },
            {
                slug: "skincare",
                label: "Skincare Clinic",
                emoji: "✨",
                count: 1240
            },
            {
                slug: "nail-art",
                label: "Nail Art & Pedicure",
                emoji: "💅",
                count: 960
            },
            {
                slug: "tattoo-studio",
                label: "Tattoo Studio",
                emoji: "🎨",
                count: 720
            },
            {
                slug: "mens-grooming",
                label: "Men's Grooming",
                emoji: "🪒",
                count: 680
            }
        ],
        relatedSlugs: [
            "wedding",
            "health",
            "gyms"
        ]
    },
    // ─── 6. Education ────────────────────────────────────────────────
    {
        slug: "education",
        label: "Education",
        emoji: "📚",
        description: "Find schools, coaching centres, training institutes, and online tutors for every stage of learning. From preschool to professional certifications, empower your future with the right education.",
        color: "#1D4ED8",
        gradient: "from-blue-500 to-indigo-600",
        bgLight: "#DBEAFE",
        businessCount: 14200,
        verifiedCount: 4970,
        listingSlug: "schools",
        subCategories: [
            {
                slug: "schools",
                label: "Schools",
                emoji: "🏫",
                count: 3840
            },
            {
                slug: "coaching-centres",
                label: "Coaching Centres",
                emoji: "📝",
                count: 3200
            },
            {
                slug: "computer-training",
                label: "Computer Training",
                emoji: "🖥️",
                count: 1840
            },
            {
                slug: "language-classes",
                label: "Language Classes",
                emoji: "🌍",
                count: 1480
            },
            {
                slug: "music-dance-classes",
                label: "Music & Dance",
                emoji: "🎵",
                count: 1620
            },
            {
                slug: "professional-courses",
                label: "Professional Courses",
                emoji: "🎓",
                count: 1240
            },
            {
                slug: "preschool-daycare",
                label: "Preschool & Daycare",
                emoji: "🧸",
                count: 980
            }
        ],
        relatedSlugs: [
            "jobs",
            "real-estate",
            "b2b"
        ]
    },
    // ─── 7. Fashion ──────────────────────────────────────────────────
    {
        slug: "fashion",
        label: "Fashion",
        emoji: "👗",
        description: "Explore trending boutiques, designer stores, and tailoring services. From ethnic wear to western fashion, find the perfect style for every occasion — bridal, casual, or festive.",
        color: "#BE185D",
        gradient: "from-fuchsia-500 to-pink-600",
        bgLight: "#FDF2F8",
        businessCount: 8400,
        verifiedCount: 2940,
        subCategories: [
            {
                slug: "womens-wear",
                label: "Women's Wear",
                emoji: "👗",
                count: 2460
            },
            {
                slug: "mens-wear",
                label: "Men's Wear",
                emoji: "🤵",
                count: 1980
            },
            {
                slug: "bridal-wear",
                label: "Bridal Wear",
                emoji: "👘",
                count: 1240
            },
            {
                slug: "kids-wear",
                label: "Kids' Wear",
                emoji: "🧒",
                count: 960
            },
            {
                slug: "tailoring-alteration",
                label: "Tailoring & Alteration",
                emoji: "🧵",
                count: 1080
            },
            {
                slug: "accessories",
                label: "Accessories",
                emoji: "💍",
                count: 680
            }
        ],
        relatedSlugs: [
            "wedding",
            "shopping",
            "beauty"
        ]
    },
    // ─── 8. Wedding ──────────────────────────────────────────────────
    {
        slug: "wedding",
        label: "Wedding",
        emoji: "💍",
        description: "Plan your dream wedding with the best vendors in town. From wedding planners and photographers to caterers and decorators, everything you need for a perfect celebration under one roof.",
        color: "#9333EA",
        gradient: "from-purple-500 to-violet-600",
        bgLight: "#FAF5FF",
        businessCount: 6200,
        verifiedCount: 2170,
        listingSlug: "wedding-planners",
        subCategories: [
            {
                slug: "wedding-planners",
                label: "Wedding Planners",
                emoji: "📋",
                count: 1480
            },
            {
                slug: "wedding-photographers",
                label: "Wedding Photographers",
                emoji: "📸",
                count: 1240
            },
            {
                slug: "caterers",
                label: "Caterers",
                emoji: "🍽️",
                count: 1160
            },
            {
                slug: "wedding-venues",
                label: "Wedding Venues",
                emoji: "💒",
                count: 840
            },
            {
                slug: "bridal-makeup",
                label: "Bridal Makeup",
                emoji: "💄",
                count: 720
            },
            {
                slug: "mehendi-artists",
                label: "Mehendi Artists",
                emoji: "🤲",
                count: 460
            },
            {
                slug: "decorators",
                label: "Decorators",
                emoji: "🎈",
                count: 300
            }
        ],
        relatedSlugs: [
            "beauty",
            "fashion",
            "restaurants"
        ]
    },
    // ─── 9. Packers ──────────────────────────────────────────────────
    {
        slug: "packers",
        label: "Packers & Movers",
        emoji: "📦",
        description: "Relocate hassle-free with verified packers and movers. Get professional packing, safe transportation, and timely delivery for household goods, vehicles, and office equipment across India.",
        color: "#EA580C",
        gradient: "from-orange-500 to-amber-600",
        bgLight: "#FFF7ED",
        businessCount: 4800,
        verifiedCount: 1680,
        subCategories: [
            {
                slug: "household-shifting",
                label: "Household Shifting",
                emoji: "🏠",
                count: 1640
            },
            {
                slug: "office-relocation",
                label: "Office Relocation",
                emoji: "🏢",
                count: 820
            },
            {
                slug: "car-transport",
                label: "Car & Bike Transport",
                emoji: "🚗",
                count: 960
            },
            {
                slug: "intercity-movers",
                label: "Intercity Movers",
                emoji: "🚛",
                count: 740
            },
            {
                slug: "storage-warehousing",
                label: "Storage & Warehousing",
                emoji: "🏗️",
                count: 380
            },
            {
                slug: "international-shifting",
                label: "International Shifting",
                emoji: "🌍",
                count: 260
            }
        ],
        relatedSlugs: [
            "real-estate",
            "rent-hire",
            "repairs"
        ]
    },
    // ─── 10. Gyms ────────────────────────────────────────────────────
    {
        slug: "gyms",
        label: "Gyms & Fitness",
        emoji: "💪",
        description: "Get fit with the best gyms, yoga studios, and fitness centres near you. Whether you prefer weight training, cardio, Zumba, or CrossFit, find the perfect workout space that matches your goals.",
        color: "#F97316",
        gradient: "from-orange-500 to-red-500",
        bgLight: "#FFF7ED",
        businessCount: 7200,
        verifiedCount: 2520,
        listingSlug: "gyms",
        subCategories: [
            {
                slug: "gym",
                label: "Gym & Weight Training",
                emoji: "🏋️",
                count: 2880
            },
            {
                slug: "yoga-studio",
                label: "Yoga Studio",
                emoji: "🧘",
                count: 1640
            },
            {
                slug: "crossfit",
                label: "CrossFit",
                emoji: "🔥",
                count: 820
            },
            {
                slug: "zumba-dance",
                label: "Zumba & Dance Fitness",
                emoji: "💃",
                count: 960
            },
            {
                slug: "swimming-pool",
                label: "Swimming Pool",
                emoji: "🏊",
                count: 440
            },
            {
                slug: "personal-trainer",
                label: "Personal Trainer",
                emoji: "🥊",
                count: 460
            }
        ],
        relatedSlugs: [
            "health",
            "beauty",
            "sports"
        ]
    },
    // ─── 11. Rent & Hire ────────────────────────────────────────────
    {
        slug: "rent-hire",
        label: "Rent & Hire",
        emoji: "🔄",
        description: "Save big by renting instead of buying. Find furniture, appliances, equipment, vehicles, and more on flexible rental plans — perfect for short-term needs or trying before you buy.",
        color: "#059669",
        gradient: "from-emerald-500 to-teal-600",
        bgLight: "#ECFDF5",
        businessCount: 3800,
        verifiedCount: 1330,
        subCategories: [
            {
                slug: "furniture-rental",
                label: "Furniture Rental",
                emoji: "🛋️",
                count: 920
            },
            {
                slug: "appliance-rental",
                label: "Appliance Rental",
                emoji: "📺",
                count: 780
            },
            {
                slug: "equipment-rental",
                label: "Equipment Rental",
                emoji: "🔧",
                count: 640
            },
            {
                slug: "vehicle-rental",
                label: "Vehicle Rental",
                emoji: "🚐",
                count: 580
            },
            {
                slug: "costume-rental",
                label: "Costume Rental",
                emoji: "🎭",
                count: 440
            },
            {
                slug: "camera-lens-rental",
                label: "Camera & Lens Rental",
                emoji: "📷",
                count: 440
            }
        ],
        relatedSlugs: [
            "car-hire",
            "real-estate",
            "electronics"
        ]
    },
    // ─── 12. Jobs ────────────────────────────────────────────────────
    {
        slug: "jobs",
        label: "Jobs & Employment",
        emoji: "💼",
        description: "Discover job opportunities, recruitment agencies, and career services. From entry-level positions to senior executive roles, connect with employers and consultants across all industries.",
        color: "#2563EB",
        gradient: "from-blue-600 to-indigo-700",
        bgLight: "#EFF6FF",
        businessCount: 9400,
        verifiedCount: 3290,
        subCategories: [
            {
                slug: "it-jobs",
                label: "IT Jobs",
                emoji: "💻",
                count: 2640
            },
            {
                slug: "recruitment-agencies",
                label: "Recruitment Agencies",
                emoji: "🤝",
                count: 1880
            },
            {
                slug: "part-time-jobs",
                label: "Part-Time Jobs",
                emoji: "⏰",
                count: 1420
            },
            {
                slug: "fresher-jobs",
                label: "Fresher Jobs",
                emoji: "🌱",
                count: 1240
            },
            {
                slug: "work-from-home",
                label: "Work from Home",
                emoji: "🏡",
                count: 1120
            },
            {
                slug: "government-jobs",
                label: "Government Jobs",
                emoji: "🏛️",
                count: 680
            },
            {
                slug: "resume-services",
                label: "Resume Services",
                emoji: "📄",
                count: 420
            }
        ],
        relatedSlugs: [
            "education",
            "b2b",
            "real-estate"
        ]
    },
    // ─── 13. Loans ───────────────────────────────────────────────────
    {
        slug: "loans",
        label: "Loans & Finance",
        emoji: "🏦",
        description: "Compare loan offers from banks, NBFCs, and fintech lenders. Find the best rates for home loans, personal loans, business loans, and more with expert guidance and quick approvals.",
        color: "#15803D",
        gradient: "from-green-600 to-emerald-700",
        bgLight: "#F0FDF4",
        businessCount: 5200,
        verifiedCount: 1820,
        subCategories: [
            {
                slug: "home-loan",
                label: "Home Loan",
                emoji: "🏡",
                count: 1480
            },
            {
                slug: "personal-loan",
                label: "Personal Loan",
                emoji: "💵",
                count: 1240
            },
            {
                slug: "business-loan",
                label: "Business Loan",
                emoji: "📈",
                count: 860
            },
            {
                slug: "car-loan",
                label: "Car Loan",
                emoji: "🚗",
                count: 640
            },
            {
                slug: "education-loan",
                label: "Education Loan",
                emoji: "🎓",
                count: 480
            },
            {
                slug: "gold-loan",
                label: "Gold Loan",
                emoji: "🥇",
                count: 340
            },
            {
                slug: "credit-cards",
                label: "Credit Cards",
                emoji: "💳",
                count: 160
            }
        ],
        relatedSlugs: [
            "real-estate",
            "b2b",
            "jobs"
        ]
    },
    // ─── 14. Real Estate ─────────────────────────────────────────────
    {
        slug: "real-estate",
        label: "Real Estate",
        emoji: "🏘️",
        description: "Buy, sell, or rent properties with ease. Browse verified listings for apartments, villas, commercial spaces, and plots from trusted real estate agents and builders across top cities.",
        color: "#B45309",
        gradient: "from-amber-600 to-yellow-700",
        bgLight: "#FFFBEB",
        businessCount: 11600,
        verifiedCount: 4060,
        subCategories: [
            {
                slug: "apartments",
                label: "Apartments / Flats",
                emoji: "🏢",
                count: 3240
            },
            {
                slug: "independent-houses",
                label: "Independent Houses",
                emoji: "🏡",
                count: 2080
            },
            {
                slug: "commercial-space",
                label: "Commercial Space",
                emoji: "🏬",
                count: 1840
            },
            {
                slug: "plots-land",
                label: "Plots & Land",
                emoji: "🗺️",
                count: 1640
            },
            {
                slug: "pg-hostel",
                label: "PG & Hostel",
                emoji: "🛏️",
                count: 1480
            },
            {
                slug: "real-estate-agents",
                label: "Real Estate Agents",
                emoji: "📋",
                count: 820
            },
            {
                slug: "co-living-spaces",
                label: "Co-Living Spaces",
                emoji: "🤝",
                count: 500
            }
        ],
        relatedSlugs: [
            "packers",
            "loans",
            "home-decor",
            "pg-hostel"
        ]
    },
    // ─── 15. PG & Hostel ─────────────────────────────────────────────
    {
        slug: "pg-hostel",
        label: "PG & Hostel",
        emoji: "🏠",
        description: "Find comfortable and affordable paying guest accommodations, hostels, and co-living spaces. Filter by location, amenities, gender, and budget to find your ideal stay.",
        color: "#7C3AED",
        gradient: "from-violet-500 to-purple-600",
        bgLight: "#F5F3FF",
        businessCount: 6800,
        verifiedCount: 2380,
        subCategories: [
            {
                slug: "mens-pg",
                label: "Men's PG",
                emoji: "🧑",
                count: 1840
            },
            {
                slug: "womens-pg",
                label: "Women's PG",
                emoji: "👩",
                count: 1720
            },
            {
                slug: "co-living",
                label: "Co-Living Spaces",
                emoji: "🛋️",
                count: 1280
            },
            {
                slug: "student-hostel",
                label: "Student Hostel",
                emoji: "🎓",
                count: 1140
            },
            {
                slug: "working-professional-pg",
                label: "Professional PG",
                emoji: "💼",
                count: 820
            }
        ],
        relatedSlugs: [
            "real-estate",
            "rent-hire",
            "jobs"
        ]
    },
    // ─── 16. Home Decor ──────────────────────────────────────────────
    {
        slug: "home-decor",
        label: "Home Decor",
        emoji: "🛋️",
        description: "Transform your living space with stunning home decor ideas and products. Connect with interior designers, furniture makers, curtain shops, and decorative item stores to create your dream home.",
        color: "#A16207",
        gradient: "from-yellow-500 to-amber-600",
        bgLight: "#FEFCE8",
        businessCount: 5400,
        verifiedCount: 1890,
        listingSlug: "interior-design",
        subCategories: [
            {
                slug: "interior-designers",
                label: "Interior Designers",
                emoji: "🎨",
                count: 1420
            },
            {
                slug: "furniture-stores",
                label: "Furniture Stores",
                emoji: "🪑",
                count: 1240
            },
            {
                slug: "curtains-blinds",
                label: "Curtains & Blinds",
                emoji: "🪟",
                count: 860
            },
            {
                slug: "wall-decor",
                label: "Wall Decor & Art",
                emoji: "🖼️",
                count: 680
            },
            {
                slug: "lighting",
                label: "Lighting & Lamps",
                emoji: "💡",
                count: 540
            },
            {
                slug: "bedding-linen",
                label: "Bedding & Linen",
                emoji: "🛏️",
                count: 420
            },
            {
                slug: "kitchen-decor",
                label: "Kitchen Decor",
                emoji: "🍳",
                count: 240
            }
        ],
        relatedSlugs: [
            "repairs",
            "real-estate",
            "shopping"
        ]
    },
    // ─── 17. Hotels ──────────────────────────────────────────────────
    {
        slug: "hotels",
        label: "Hotels",
        emoji: "🏨",
        description: "Book the perfect stay from budget lodges to five-star luxury hotels. Browse verified properties with genuine reviews, compare amenities, and find exclusive deals for your next trip.",
        color: "#1E40AF",
        gradient: "from-blue-600 to-indigo-700",
        bgLight: "#DBEAFE",
        businessCount: 8900,
        verifiedCount: 3115,
        listingSlug: "hotels",
        subCategories: [
            {
                slug: "luxury-hotels",
                label: "Luxury Hotels",
                emoji: "⭐",
                count: 1240
            },
            {
                slug: "budget-hotels",
                label: "Budget Hotels",
                emoji: "💰",
                count: 2840
            },
            {
                slug: "boutique-hotels",
                label: "Boutique Hotels",
                emoji: "🏰",
                count: 860
            },
            {
                slug: "resorts",
                label: "Resorts",
                emoji: "🌴",
                count: 1080
            },
            {
                slug: "business-hotels",
                label: "Business Hotels",
                emoji: "💼",
                count: 1420
            },
            {
                slug: "homestays",
                label: "Homestays",
                emoji: "🏡",
                count: 1060
            },
            {
                slug: "service-apartments",
                label: "Service Apartments",
                emoji: "🏢",
                count: 400
            }
        ],
        relatedSlugs: [
            "travel",
            "restaurants",
            "car-hire"
        ]
    },
    // ─── 18. Movies ──────────────────────────────────────────────────
    {
        slug: "movies",
        label: "Movies & Entertainment",
        emoji: "🎬",
        description: "Discover movie theatres, multiplexes, and entertainment venues near you. Check showtimes, book tickets, and explore events, live performances, and gaming zones for a fun-filled outing.",
        color: "#E11D48",
        gradient: "from-rose-600 to-pink-700",
        bgLight: "#FFF1F2",
        businessCount: 3400,
        verifiedCount: 1190,
        subCategories: [
            {
                slug: "multiplexes",
                label: "Multiplexes",
                emoji: "🎥",
                count: 940
            },
            {
                slug: "single-screen",
                label: "Single-Screen Theatres",
                emoji: "🎞️",
                count: 680
            },
            {
                slug: "gaming-zones",
                label: "Gaming Zones",
                emoji: "🎮",
                count: 520
            },
            {
                slug: "escape-rooms",
                label: "Escape Rooms",
                emoji: "🔓",
                count: 280
            },
            {
                slug: "bowling-alley",
                label: "Bowling Alley",
                emoji: "🎳",
                count: 340
            },
            {
                slug: "live-events",
                label: "Live Events & Concerts",
                emoji: "🎤",
                count: 640
            }
        ],
        relatedSlugs: [
            "restaurants",
            "shopping",
            "travel"
        ]
    },
    // ─── 19. Restaurants ─────────────────────────────────────────────
    {
        slug: "restaurants",
        label: "Restaurants",
        emoji: "🍽️",
        description: "Satisfy your cravings with the best restaurants, cafes, and food joints in town. From fine dining to street food, explore diverse cuisines with verified reviews and real ratings.",
        color: "#D97706",
        gradient: "from-amber-500 to-orange-600",
        bgLight: "#FEF3C7",
        businessCount: 8900,
        verifiedCount: 3115,
        listingSlug: "restaurants",
        subCategories: [
            {
                slug: "north-indian",
                label: "North Indian",
                emoji: "🍛",
                count: 2460
            },
            {
                slug: "south-indian",
                label: "South Indian",
                emoji: "🥘",
                count: 1840
            },
            {
                slug: "chinese",
                label: "Chinese",
                emoji: "🥡",
                count: 1420
            },
            {
                slug: "fast-food",
                label: "Fast Food",
                emoji: "🍔",
                count: 1680
            },
            {
                slug: "biryani",
                label: "Biryani",
                emoji: "🍚",
                count: 980
            },
            {
                slug: "italian",
                label: "Italian & Continental",
                emoji: "🍕",
                count: 520
            }
        ],
        relatedSlugs: [
            "hotels",
            "movies",
            "shopping"
        ]
    },
    // ─── 20. Shopping ────────────────────────────────────────────────
    {
        slug: "shopping",
        label: "Shopping",
        emoji: "🛍️",
        description: "Shop at the best retail stores, malls, and markets in your city. From clothing and electronics to groceries and handicrafts, explore verified stores with great deals and genuine products.",
        color: "#DC2626",
        gradient: "from-red-500 to-rose-600",
        bgLight: "#FEE2E2",
        businessCount: 15800,
        verifiedCount: 5530,
        listingSlug: "shopping",
        subCategories: [
            {
                slug: "shopping-malls",
                label: "Shopping Malls",
                emoji: "🏬",
                count: 2840
            },
            {
                slug: "supermarkets",
                label: "Supermarkets",
                emoji: "🛒",
                count: 3240
            },
            {
                slug: "clothing-stores",
                label: "Clothing Stores",
                emoji: "👕",
                count: 2820
            },
            {
                slug: "handicrafts",
                label: "Handicrafts & Gifts",
                emoji: "🎁",
                count: 1640
            },
            {
                slug: "bookstores",
                label: "Bookstores",
                emoji: "📚",
                count: 980
            },
            {
                slug: "jewellery-stores",
                label: "Jewellery Stores",
                emoji: "💎",
                count: 1280
            },
            {
                slug: "footwear",
                label: "Footwear",
                emoji: "👟",
                count: 1000
            },
            {
                slug: "handloom-textiles",
                label: "Handloom & Textiles",
                emoji: "🧵",
                count: 2000
            }
        ],
        relatedSlugs: [
            "fashion",
            "electronics",
            "home-decor"
        ]
    },
    // ─── 21. Electronics ─────────────────────────────────────────────
    {
        slug: "electronics",
        label: "Electronics",
        emoji: "📱",
        description: "Find the latest gadgets, smartphones, laptops, and home appliances from authorized dealers and trusted repair centres. Compare prices, check reviews, and make informed buying decisions.",
        color: "#4F46E5",
        gradient: "from-indigo-500 to-blue-600",
        bgLight: "#EEF2FF",
        businessCount: 7200,
        verifiedCount: 2520,
        listingSlug: "electronics",
        subCategories: [
            {
                slug: "mobile-phones",
                label: "Mobile Phones",
                emoji: "📱",
                count: 2240
            },
            {
                slug: "laptops-computers",
                label: "Laptops & Computers",
                emoji: "💻",
                count: 1440
            },
            {
                slug: "home-appliances",
                label: "Home Appliances",
                emoji: "🏠",
                count: 1280
            },
            {
                slug: "camera-accessories",
                label: "Cameras & Accessories",
                emoji: "📷",
                count: 680
            },
            {
                slug: "audio-gadgets",
                label: "Audio & Gadgets",
                emoji: "🎧",
                count: 840
            },
            {
                slug: "gaming-consoles",
                label: "Gaming Consoles",
                emoji: "🎮",
                count: 420
            },
            {
                slug: "tv-displays",
                label: "TVs & Displays",
                emoji: "📺",
                count: 300
            }
        ],
        relatedSlugs: [
            "repairs",
            "shopping",
            "rent-hire"
        ]
    },
    // ─── 22. Repairs ─────────────────────────────────────────────────
    {
        slug: "repairs",
        label: "Repairs & Maintenance",
        emoji: "🔧",
        description: "Get quick, reliable repair services for your home and appliances. From AC and plumbing to electrical work and deep cleaning, connect with skilled professionals who get the job done right.",
        color: "#0D9488",
        gradient: "from-teal-500 to-cyan-600",
        bgLight: "#F0FDFA",
        businessCount: 10400,
        verifiedCount: 3640,
        listingSlug: "ac-repair",
        subCategories: [
            {
                slug: "ac-repair",
                label: "AC Repair & Service",
                emoji: "❄️",
                count: 2240
            },
            {
                slug: "plumbing",
                label: "Plumbing",
                emoji: "🚿",
                count: 1860
            },
            {
                slug: "electrical-repair",
                label: "Electrical Repair",
                emoji: "⚡",
                count: 1680
            },
            {
                slug: "appliance-repair",
                label: "Appliance Repair",
                emoji: "🔧",
                count: 1420
            },
            {
                slug: "carpentry",
                label: "Carpentry",
                emoji: "🪚",
                count: 980
            },
            {
                slug: "painting",
                label: "Painting",
                emoji: "🎨",
                count: 840
            },
            {
                slug: "pest-control",
                label: "Pest Control",
                emoji: "🐛",
                count: 720
            },
            {
                slug: "deep-cleaning",
                label: "Deep Cleaning",
                emoji: "✨",
                count: 660
            }
        ],
        relatedSlugs: [
            "home-decor",
            "electronics",
            "real-estate"
        ]
    },
    // ─── 23. Health ──────────────────────────────────────────────────
    {
        slug: "health",
        label: "Health & Wellness",
        emoji: "❤️‍🩹",
        description: "Prioritise your wellbeing with comprehensive health services. Find hospitals, diagnostic labs, pharmacies, mental health counsellors, and alternative therapy centres for holistic care.",
        color: "#16A34A",
        gradient: "from-green-500 to-emerald-600",
        bgLight: "#F0FDF4",
        businessCount: 10200,
        verifiedCount: 3570,
        listingSlug: "doctors",
        subCategories: [
            {
                slug: "hospitals",
                label: "Hospitals",
                emoji: "🏥",
                count: 2240
            },
            {
                slug: "diagnostic-labs",
                label: "Diagnostic Labs",
                emoji: "🔬",
                count: 1840
            },
            {
                slug: "pharmacies",
                label: "Pharmacies",
                emoji: "💊",
                count: 2080
            },
            {
                slug: "mental-health",
                label: "Mental Health",
                emoji: "🧠",
                count: 820
            },
            {
                slug: "physiotherapy",
                label: "Physiotherapy",
                emoji: "🏃",
                count: 960
            },
            {
                slug: "ayurveda-homeopathy",
                label: "Ayurveda & Homeopathy",
                emoji: "🌿",
                count: 1260
            },
            {
                slug: "dental-clinics",
                label: "Dental Clinics",
                emoji: "🦷",
                count: 1000
            }
        ],
        relatedSlugs: [
            "doctors",
            "gyms",
            "beauty"
        ]
    },
    // ─── 24. Internet ────────────────────────────────────────────────
    {
        slug: "internet",
        label: "Internet & Telecom",
        emoji: "🌐",
        description: "Get the best internet, broadband, and telecom connections for your home or office. Compare plans from top ISPs, find Wi-Fi setup services, and get quick installation from verified providers.",
        color: "#6366F1",
        gradient: "from-indigo-500 to-purple-600",
        bgLight: "#EEF2FF",
        businessCount: 4600,
        verifiedCount: 1610,
        subCategories: [
            {
                slug: "broadband",
                label: "Broadband Providers",
                emoji: "📡",
                count: 1280
            },
            {
                slug: "wifi-setup",
                label: "Wi-Fi Setup & Repair",
                emoji: "📶",
                count: 840
            },
            {
                slug: "mobile-recharge",
                label: "Mobile Recharge & SIM",
                emoji: "📱",
                count: 1060
            },
            {
                slug: "dsl-cable",
                label: "DSL & Cable Internet",
                emoji: "🔌",
                count: 680
            },
            {
                slug: "fibre-optic",
                label: "Fibre Optic Internet",
                emoji: "⚡",
                count: 440
            },
            {
                slug: "enterprise-connectivity",
                label: "Enterprise Connectivity",
                emoji: "🏢",
                count: 300
            }
        ],
        relatedSlugs: [
            "electronics",
            "repairs",
            "b2b"
        ]
    }
];
// ── Helpers ─────────────────────────────────────────────────────────
const bySlug = new Map(categoryLandingData.map((c)=>[
        c.slug,
        c
    ]));
function getCategoryLanding(slug) {
    return bySlug.get(slug);
}
function getAllCategorySlugs() {
    return categoryLandingData.map((c)=>c.slug);
}
const __TURBOPACK__default__export__ = categoryLandingData;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/business-listing-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/product-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProductById",
    ()=>getProductById,
    "getTrendingProducts",
    ()=>getTrendingProducts,
    "productDatabase",
    ()=>productDatabase
]);
const productDatabase = {
    // ── CareWell Pharmacy (carewell-pharmacy) ──────────────────────────────
    "cp-p1": {
        id: "cp-p1",
        name: "Dabur Chyawanprash (500g)",
        price: "₹310",
        originalPrice: "₹399",
        image: "chyawanprash",
        rating: 4.5,
        reviews: 890,
        badge: "Bestseller",
        inStock: true,
        category: "Ayurvedic",
        description: "Clinically proven immunity booster with 40+ Ayurvedic ingredients. Trusted by millions of families.",
        storeId: "carewell-pharmacy",
        storeName: "CareWell Pharmacy",
        storeEmoji: "💊",
        storeRating: "4.6",
        highlights: [
            "Contains 40+ Ayurvedic ingredients including Amla, Ashwagandha",
            "Clinically proven to boost immunity 3x",
            "Trusted by Indian families for 100+ years",
            "Suitable for all ages above 3 years"
        ],
        specifications: [
            {
                label: "Weight",
                value: "500g"
            },
            {
                label: "Brand",
                value: "Dabur"
            },
            {
                label: "Type",
                value: "Ayurvedic Supplement"
            },
            {
                label: "Shelf Life",
                value: "24 months"
            }
        ],
        deliveryEstimate: "1-2 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "cp-p2": {
        id: "cp-p2",
        name: "Volini Spray (60g)",
        price: "₹230",
        image: "volini-spray",
        rating: 4.2,
        reviews: 456,
        inStock: true,
        category: "Pain Relief",
        description: "Fast-acting pain relief spray for muscle and joint pain. Contains diclofenac diethylamine.",
        storeId: "carewell-pharmacy",
        storeName: "CareWell Pharmacy",
        storeEmoji: "💊",
        storeRating: "4.6",
        highlights: [
            "Fast-acting pain relief within minutes",
            "Contains Diclofenac Diethylamine 1.16% w/w",
            "Non-greasy, no-mess spray application",
            "Effective for back pain, joint pain, and muscle stiffness"
        ],
        specifications: [
            {
                label: "Weight",
                value: "60g"
            },
            {
                label: "Brand",
                value: "Volini (Sun Pharma)"
            },
            {
                label: "Active Ingredient",
                value: "Diclofenac Diethylamine"
            },
            {
                label: "Usage",
                value: "External use only"
            }
        ],
        deliveryEstimate: "1-2 days",
        returnPolicy: "No returns for medicines",
        warranty: "No warranty"
    },
    "cp-p3": {
        id: "cp-p3",
        name: "Ensure Protein Powder (400g)",
        price: "₹780",
        originalPrice: "₹950",
        image: "ensure-protein",
        rating: 4.7,
        reviews: 234,
        badge: "Popular",
        inStock: true,
        category: "Nutrition",
        description: "Complete nutrition powder for adults. Provides 32 essential nutrients. Vanilla flavor.",
        storeId: "carewell-pharmacy",
        storeName: "CareWell Pharmacy",
        storeEmoji: "💊",
        storeRating: "4.6",
        highlights: [
            "32 essential nutrients for complete nutrition",
            "Vanilla flavor, great taste",
            "Suitable for adults and seniors",
            "Supports muscle health and immunity"
        ],
        specifications: [
            {
                label: "Weight",
                value: "400g"
            },
            {
                label: "Brand",
                value: "Ensure (Abbott)"
            },
            {
                label: "Flavor",
                value: "Vanilla"
            },
            {
                label: "Servings",
                value: "Approx 10"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "cp-p4": {
        id: "cp-p4",
        name: "Accu-Chek Guide Glucometer Kit",
        price: "₹1,250",
        originalPrice: "₹1,800",
        image: "glucometer",
        rating: 4.6,
        reviews: 567,
        badge: "Top Rated",
        inStock: true,
        category: "Medical Devices",
        description: "Easy-to-use blood glucose monitoring system. Includes 10 test strips and lancets.",
        storeId: "carewell-pharmacy",
        storeName: "CareWell Pharmacy",
        storeEmoji: "💊",
        storeRating: "4.6",
        highlights: [
            "Easy-to-use with large display",
            "Includes 10 test strips and 10 lancets",
            "Results in just 4 seconds",
            "500 test memory with date & time"
        ],
        specifications: [
            {
                label: "Brand",
                value: "Accu-Chek (Roche)"
            },
            {
                label: "Test Time",
                value: "4 seconds"
            },
            {
                label: "Sample",
                value: "0.6 µL blood"
            },
            {
                label: "Memory",
                value: "500 readings"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement for defective units",
        warranty: "1 year manufacturer warranty"
    },
    "cp-p5": {
        id: "cp-p5",
        name: "Dettol Antiseptic Liquid (500ml)",
        price: "₹199",
        originalPrice: "₹250",
        image: "dettol-liquid",
        rating: 4.4,
        reviews: 1230,
        inStock: true,
        category: "Antiseptics",
        description: "Trusted antiseptic liquid for first aid, personal hygiene, and household cleaning.",
        storeId: "carewell-pharmacy",
        storeName: "CareWell Pharmacy",
        storeEmoji: "💊",
        storeRating: "4.6",
        highlights: [
            "Kills 100+ illness-causing germs",
            "Multi-purpose: first aid, hygiene, and household",
            "Trusted brand for over 80 years",
            "Recommended by doctors for wound care"
        ],
        specifications: [
            {
                label: "Volume",
                value: "500ml"
            },
            {
                label: "Brand",
                value: "Dettol (Reckitt)"
            },
            {
                label: "Active Ingredient",
                value: "Chloroxylenol 4.8%"
            },
            {
                label: "Usage",
                value: "Multi-purpose"
            }
        ],
        deliveryEstimate: "1-2 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    // ── Fresh Mart Grocery (fresh-mart-grocery) ────────────────────────────
    "fm-p1": {
        id: "fm-p1",
        name: "Tata Salt (1kg)",
        price: "₹28",
        image: "tata-salt",
        rating: 4.3,
        reviews: 2340,
        badge: "Essential",
        inStock: true,
        category: "Grocery",
        description: "India's most trusted salt brand. Iodized for thyroid health.",
        storeId: "fresh-mart-grocery",
        storeName: "Fresh Mart Grocery",
        storeEmoji: "🛒",
        storeRating: "4.4",
        highlights: [
            "India's most trusted salt brand",
            "Double fortified with Iron and Iodine",
            "Free-flowing crystals",
            "Essential for daily cooking"
        ],
        specifications: [
            {
                label: "Weight",
                value: "1kg"
            },
            {
                label: "Brand",
                value: "Tata"
            },
            {
                label: "Type",
                value: "Iodized Salt"
            },
            {
                label: "Shelf Life",
                value: "18 months"
            }
        ],
        deliveryEstimate: "Same day",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "fm-p2": {
        id: "fm-p2",
        name: "Fortune Sunflower Oil (1L)",
        price: "₹155",
        originalPrice: "₹180",
        image: "fortune-oil",
        rating: 4.5,
        reviews: 1567,
        inStock: true,
        category: "Cooking Oil",
        description: "Light and healthy cooking oil. Rich in Vitamin E and Omega-6 fatty acids.",
        storeId: "fresh-mart-grocery",
        storeName: "Fresh Mart Grocery",
        storeEmoji: "🛒",
        storeRating: "4.4",
        highlights: [
            "Rich in Vitamin E and Omega-6 fatty acids",
            "Light flavor that doesn't overpower food",
            "Low in saturated fats",
            "Ideal for everyday Indian cooking"
        ],
        specifications: [
            {
                label: "Volume",
                value: "1L"
            },
            {
                label: "Brand",
                value: "Fortune (Adani Wilmar)"
            },
            {
                label: "Type",
                value: "Refined Sunflower Oil"
            },
            {
                label: "Shelf Life",
                value: "9 months"
            }
        ],
        deliveryEstimate: "Same day",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "fm-p3": {
        id: "fm-p3",
        name: "Aashirvaad Atta (5kg)",
        price: "₹265",
        originalPrice: "₹310",
        image: "aashirvaad-atta",
        rating: 4.7,
        reviews: 3456,
        badge: "Bestseller",
        inStock: true,
        category: "Flour",
        description: "100% whole wheat atta made from the finest grains. Soft rotis every time.",
        storeId: "fresh-mart-grocery",
        storeName: "Fresh Mart Grocery",
        storeEmoji: "🛒",
        storeRating: "4.4",
        highlights: [
            "100% whole wheat, no maida",
            "Made from select Sharbati wheat",
            "Soft and puffy rotis every time",
            "3x sieve process for fine texture"
        ],
        specifications: [
            {
                label: "Weight",
                value: "5kg"
            },
            {
                label: "Brand",
                value: "Aashirvaad (ITC)"
            },
            {
                label: "Type",
                value: "Whole Wheat Atta"
            },
            {
                label: "Shelf Life",
                value: "6 months"
            }
        ],
        deliveryEstimate: "Same day",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "fm-p4": {
        id: "fm-p4",
        name: "Amul Butter (500g)",
        price: "₹270",
        image: "amul-butter",
        rating: 4.8,
        reviews: 4567,
        badge: "Popular",
        inStock: true,
        category: "Dairy",
        description: "Pure and creamy butter made from fresh cream. Perfect for bread, cooking, and baking.",
        storeId: "fresh-mart-grocery",
        storeName: "Fresh Mart Grocery",
        storeEmoji: "🛒",
        storeRating: "4.4",
        highlights: [
            "Made from pure fresh cream",
            "Rich, creamy texture and taste",
            "No artificial colors or flavors",
            "Versatile: spread, cook, or bake"
        ],
        specifications: [
            {
                label: "Weight",
                value: "500g"
            },
            {
                label: "Brand",
                value: "Amul (GCMMF)"
            },
            {
                label: "Type",
                value: "Pasteurized Butter"
            },
            {
                label: "Shelf Life",
                value: "9 months (refrigerated)"
            }
        ],
        deliveryEstimate: "Same day",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "fm-p5": {
        id: "fm-p5",
        name: "Basmati Rice Premium (5kg)",
        price: "₹450",
        originalPrice: "₹550",
        image: "basmati-rice",
        rating: 4.4,
        reviews: 890,
        badge: "Premium",
        inStock: true,
        category: "Rice",
        description: "Extra-long grain basmati rice aged for 2 years. Aromatic and fluffy.",
        storeId: "fresh-mart-grocery",
        storeName: "Fresh Mart Grocery",
        storeEmoji: "🛒",
        storeRating: "4.4",
        highlights: [
            "Extra-long grain basmati rice",
            "Aged for 2 years for enhanced aroma",
            "Fluffy, non-sticky texture",
            "Perfect for biryani, pulao, and daily meals"
        ],
        specifications: [
            {
                label: "Weight",
                value: "5kg"
            },
            {
                label: "Brand",
                value: "Premium Select"
            },
            {
                label: "Type",
                value: "Aged Basmati Rice"
            },
            {
                label: "Shelf Life",
                value: "12 months"
            }
        ],
        deliveryEstimate: "1-2 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "fm-p6": {
        id: "fm-p6",
        name: "Maggi Noodles (Pack of 12)",
        price: "₹168",
        originalPrice: "₹192",
        image: "maggi-noodles",
        rating: 4.6,
        reviews: 6789,
        inStock: true,
        category: "Instant Food",
        description: "India's favorite 2-minute noodles. Perfect taste in every bite.",
        storeId: "fresh-mart-grocery",
        storeName: "Fresh Mart Grocery",
        storeEmoji: "🛒",
        storeRating: "4.4",
        highlights: [
            "India's most loved 2-minute noodles",
            "Rich masala taste loved by all ages",
            "Convenient pack of 12 for family use",
            "Easy to cook - just add water"
        ],
        specifications: [
            {
                label: "Quantity",
                value: "Pack of 12 (12 × 70g)"
            },
            {
                label: "Brand",
                value: "Maggi (Nestlé)"
            },
            {
                label: "Type",
                value: "Instant Noodles"
            },
            {
                label: "Shelf Life",
                value: "6 months"
            }
        ],
        deliveryEstimate: "Same day",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    // ── QuickFix Electronics (quickfix-electronics) ─────────────────────────
    "qe-p1": {
        id: "qe-p1",
        name: "Tempered Glass Screen Protector (Pack of 2)",
        price: "₹199",
        originalPrice: "₹499",
        image: "screen-protector",
        rating: 4.2,
        reviews: 345,
        inStock: true,
        category: "Mobile Accessories",
        description: "9H hardness tempered glass. Anti-fingerprint and bubble-free installation.",
        storeId: "quickfix-electronics",
        storeName: "QuickFix Electronics",
        storeEmoji: "📱",
        storeRating: "4.3",
        highlights: [
            "9H hardness for maximum screen protection",
            "Anti-fingerprint oleophobic coating",
            "Bubble-free easy installation",
            "Pack of 2 for backup"
        ],
        specifications: [
            {
                label: "Quantity",
                value: "Pack of 2"
            },
            {
                label: "Hardness",
                value: "9H"
            },
            {
                label: "Thickness",
                value: "0.33mm"
            },
            {
                label: "Compatibility",
                value: "Universal (trim to fit)"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "qe-p2": {
        id: "qe-p2",
        name: "USB-C Fast Charging Cable (1m)",
        price: "₹299",
        originalPrice: "₹499",
        image: "usbc-cable",
        rating: 4.4,
        reviews: 567,
        badge: "Bestseller",
        inStock: true,
        category: "Cables",
        description: "Nylon braided USB-C cable with 60W PD fast charging support. Durable and tangle-free.",
        storeId: "quickfix-electronics",
        storeName: "QuickFix Electronics",
        storeEmoji: "📱",
        storeRating: "4.3",
        highlights: [
            "Nylon braided for 10x durability",
            "Supports 60W Power Delivery fast charging",
            "Tangle-free design",
            "Universal USB-C compatibility"
        ],
        specifications: [
            {
                label: "Length",
                value: "1m"
            },
            {
                label: "Connector",
                value: "USB-C to USB-C"
            },
            {
                label: "Wattage",
                value: "60W PD"
            },
            {
                label: "Material",
                value: "Nylon Braided"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement",
        warranty: "6 months warranty"
    },
    "qe-p3": {
        id: "qe-p3",
        name: "Wireless Bluetooth Earbuds",
        price: "₹899",
        originalPrice: "₹1,499",
        image: "bluetooth-earbuds",
        rating: 4.1,
        reviews: 234,
        badge: "Deal",
        inStock: true,
        category: "Audio",
        description: "True wireless earbuds with 24hr battery life, IPX5 waterproof, and touch controls.",
        storeId: "quickfix-electronics",
        storeName: "QuickFix Electronics",
        storeEmoji: "📱",
        storeRating: "4.3",
        highlights: [
            "24hr total battery life with case",
            "IPX5 waterproof - use during workouts",
            "Touch controls for music & calls",
            "Bluetooth 5.3 for stable connection"
        ],
        specifications: [
            {
                label: "Battery",
                value: "24hr total (5hr + 19hr case)"
            },
            {
                label: "Bluetooth",
                value: "5.3"
            },
            {
                label: "Water Resistance",
                value: "IPX5"
            },
            {
                label: "Driver Size",
                value: "13mm"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement",
        warranty: "6 months warranty"
    },
    "qe-p4": {
        id: "qe-p4",
        name: "Power Bank 10000mAh",
        price: "₹699",
        originalPrice: "₹999",
        image: "powerbank-10k",
        rating: 4.5,
        reviews: 789,
        badge: "Popular",
        inStock: true,
        category: "Power Banks",
        description: "Compact and lightweight power bank with dual USB output. Fast charging support.",
        storeId: "quickfix-electronics",
        storeName: "QuickFix Electronics",
        storeEmoji: "📱",
        storeRating: "4.3",
        highlights: [
            "10000mAh capacity charges 2-3 phones",
            "Dual USB output for charging 2 devices",
            "Compact and lightweight design",
            "Fast charging 18W output"
        ],
        specifications: [
            {
                label: "Capacity",
                value: "10000mAh"
            },
            {
                label: "Output",
                value: "Dual USB (18W max)"
            },
            {
                label: "Weight",
                value: "200g"
            },
            {
                label: "Input",
                value: "USB-C"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement",
        warranty: "6 months warranty"
    },
    // ── Green Leaf Cafe (green-leaf-cafe) ───────────────────────────────────
    "gl-p1": {
        id: "gl-p1",
        name: "Organic Green Tea (25 Bags)",
        price: "₹350",
        originalPrice: "₹450",
        image: "green-tea",
        rating: 4.7,
        reviews: 456,
        badge: "Bestseller",
        inStock: true,
        category: "Beverages",
        description: "Premium organic green tea sourced from Darjeeling estates. Rich in antioxidants.",
        storeId: "green-leaf-cafe",
        storeName: "Green Leaf Cafe",
        storeEmoji: "☕",
        storeRating: "4.8",
        highlights: [
            "Sourced from premium Darjeeling estates",
            "100% organic, no pesticides",
            "Rich in antioxidants and L-Theanine",
            "Individually wrapped tea bags"
        ],
        specifications: [
            {
                label: "Quantity",
                value: "25 tea bags"
            },
            {
                label: "Type",
                value: "Organic Green Tea"
            },
            {
                label: "Origin",
                value: "Darjeeling, India"
            },
            {
                label: "Caffeine",
                value: "Low (25mg per cup)"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "gl-p2": {
        id: "gl-p2",
        name: "Cold Pressed Juice Set (6 Pack)",
        price: "₹599",
        originalPrice: "₹750",
        image: "cold-juice-set",
        rating: 4.5,
        reviews: 234,
        inStock: true,
        category: "Beverages",
        description: "Assorted cold pressed juices - Orange, Apple, Mixed Berry, Green Detox, Watermelon, Carrot.",
        storeId: "green-leaf-cafe",
        storeName: "Green Leaf Cafe",
        storeEmoji: "☕",
        storeRating: "4.8",
        highlights: [
            "6 unique flavors in one pack",
            "Cold pressed to retain maximum nutrients",
            "No added sugar or preservatives",
            "Made fresh daily at our cafe"
        ],
        specifications: [
            {
                label: "Quantity",
                value: "6 bottles (250ml each)"
            },
            {
                label: "Flavors",
                value: "Orange, Apple, Berry, Green, Watermelon, Carrot"
            },
            {
                label: "Storage",
                value: "Refrigerate, consume within 3 days"
            },
            {
                label: "Type",
                value: "Cold Pressed"
            }
        ],
        deliveryEstimate: "Same day",
        returnPolicy: "No returns (perishable)",
        warranty: "No warranty"
    },
    "gl-p3": {
        id: "gl-p3",
        name: "Granola & Berries Jar (500g)",
        price: "₹420",
        image: "granola-jar",
        rating: 4.3,
        reviews: 178,
        badge: "Healthy",
        inStock: true,
        category: "Snacks",
        description: "Crunchy granola with mixed berries, honey, and oats. Perfect breakfast or snack.",
        storeId: "green-leaf-cafe",
        storeName: "Green Leaf Cafe",
        storeEmoji: "☕",
        storeRating: "4.8",
        highlights: [
            "Made with rolled oats and real honey",
            "Loaded with mixed dried berries",
            "High in fiber and protein",
            "No artificial colors or flavors"
        ],
        specifications: [
            {
                label: "Weight",
                value: "500g"
            },
            {
                label: "Type",
                value: "Granola with Mixed Berries"
            },
            {
                label: "Dietary",
                value: "Vegetarian, High Fiber"
            },
            {
                label: "Shelf Life",
                value: "3 months"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "gl-p4": {
        id: "gl-p4",
        name: "GLC Reusable Coffee Cup (350ml)",
        price: "₹550",
        originalPrice: "₹699",
        image: "coffee-cup",
        rating: 4.6,
        reviews: 89,
        badge: "New",
        inStock: true,
        category: "Merchandise",
        description: "Eco-friendly bamboo fiber coffee cup with silicone lid. BPA-free and microwave safe.",
        storeId: "green-leaf-cafe",
        storeName: "Green Leaf Cafe",
        storeEmoji: "☕",
        storeRating: "4.8",
        highlights: [
            "Eco-friendly bamboo fiber material",
            "BPA-free and microwave safe",
            "Silicone lid for spill-proof sipping",
            "Saves disposable cups - go green!"
        ],
        specifications: [
            {
                label: "Capacity",
                value: "350ml"
            },
            {
                label: "Material",
                value: "Bamboo Fiber + Silicone Lid"
            },
            {
                label: "Safety",
                value: "BPA-Free, Microwave Safe"
            },
            {
                label: "Care",
                value: "Dishwasher safe (top rack)"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    // ── Vijay Sales Store (vijay-sales) ─────────────────────────────────────
    "vs-p1": {
        id: "vs-p1",
        name: "Samsung Galaxy Buds FE",
        price: "₹4,999",
        originalPrice: "₹7,999",
        image: "galaxy-buds",
        rating: 4.4,
        reviews: 2345,
        badge: "Deal",
        inStock: true,
        category: "Audio",
        description: "Premium TWS earbuds with ANC and 30hr battery. IPX2 rated with comfortable fit.",
        storeId: "vijay-sales",
        storeName: "Vijay Sales Store",
        storeEmoji: "📦",
        storeRating: "4.3",
        highlights: [
            "Active Noise Cancellation (ANC)",
            "30hr total battery with charging case",
            "Premium sound quality with AKG tuning",
            "Comfortable wing-tip fit design"
        ],
        specifications: [
            {
                label: "Brand",
                value: "Samsung"
            },
            {
                label: "Battery",
                value: "6hr + 24hr case (ANC on)"
            },
            {
                label: "Bluetooth",
                value: "5.2"
            },
            {
                label: "Water Resistance",
                value: "IPX2"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement",
        warranty: "1 year manufacturer warranty"
    },
    "vs-p2": {
        id: "vs-p2",
        name: "boAt Rockerz 450 Headphone",
        price: "₹1,299",
        originalPrice: "₹2,990",
        image: "boAt-headphone",
        rating: 4.3,
        reviews: 5678,
        badge: "Bestseller",
        inStock: true,
        category: "Audio",
        description: "Over-ear wireless headphones with 40hr battery, ASAP charging, and padded ear cushions.",
        storeId: "vijay-sales",
        storeName: "Vijay Sales Store",
        storeEmoji: "📦",
        storeRating: "4.3",
        highlights: [
            "40hr battery life on single charge",
            "ASAP charge - 10min = 3hr playback",
            "Padded ear cushions for all-day comfort",
            "40mm dynamic drivers for powerful bass"
        ],
        specifications: [
            {
                label: "Brand",
                value: "boAt"
            },
            {
                label: "Battery",
                value: "40 hours"
            },
            {
                label: "Driver",
                value: "40mm Dynamic"
            },
            {
                label: "Bluetooth",
                value: "5.0"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement",
        warranty: "1 year manufacturer warranty"
    },
    "vs-p3": {
        id: "vs-p3",
        name: "MI Smart Band 8",
        price: "₹1,799",
        originalPrice: "₹2,499",
        image: "mi-band",
        rating: 4.5,
        reviews: 3456,
        inStock: true,
        category: "Wearables",
        description: "Advanced fitness band with 150+ sports modes, SpO2 monitor, and 16-day battery life.",
        storeId: "vijay-sales",
        storeName: "Vijay Sales Store",
        storeEmoji: "📦",
        storeRating: "4.3",
        highlights: [
            "150+ sports modes for comprehensive tracking",
            "SpO2 and heart rate monitoring 24/7",
            "16-day battery life",
            "1.62\" AMOLED display, 490 nits brightness"
        ],
        specifications: [
            {
                label: "Brand",
                value: "Xiaomi"
            },
            {
                label: "Display",
                value: "1.62\" AMOLED (490 nits)"
            },
            {
                label: "Battery",
                value: "16 days"
            },
            {
                label: "Water Resistance",
                value: "5ATM"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement",
        warranty: "1 year manufacturer warranty"
    },
    "vs-p4": {
        id: "vs-p4",
        name: "JBL Flip 6 Bluetooth Speaker",
        price: "₹9,999",
        originalPrice: "₹14,999",
        image: "jbl-flip6",
        rating: 4.7,
        reviews: 1234,
        badge: "Popular",
        inStock: true,
        category: "Speakers",
        description: "Portable Bluetooth speaker with powerful bass. IP67 waterproof and dustproof. 12hr playtime.",
        storeId: "vijay-sales",
        storeName: "Vijay Sales Store",
        storeEmoji: "📦",
        storeRating: "4.3",
        highlights: [
            "Powerful JBL Original Pro Sound",
            "IP67 waterproof and dustproof",
            "12 hours of playtime",
            "PartyBoost - link 100+ speakers"
        ],
        specifications: [
            {
                label: "Brand",
                value: "JBL"
            },
            {
                label: "Battery",
                value: "12 hours"
            },
            {
                label: "Water Resistance",
                value: "IP67"
            },
            {
                label: "Output Power",
                value: "30W"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement",
        warranty: "1 year manufacturer warranty"
    },
    "vs-p5": {
        id: "vs-p5",
        name: "Samsung 128GB Memory Card",
        price: "₹799",
        originalPrice: "₹1,299",
        image: "memory-card",
        rating: 4.2,
        reviews: 4567,
        inStock: true,
        category: "Storage",
        description: "EVO Plus microSD card with U3 Class 10 speed. 130MB/s read speed.",
        storeId: "vijay-sales",
        storeName: "Vijay Sales Store",
        storeEmoji: "📦",
        storeRating: "4.3",
        highlights: [
            "UHS-I U3 Class 10 for fast performance",
            "130MB/s read speed",
            "Waterproof, temperature-proof, X-ray proof",
            "Compatible with phones, cameras, and tablets"
        ],
        specifications: [
            {
                label: "Brand",
                value: "Samsung"
            },
            {
                label: "Capacity",
                value: "128GB"
            },
            {
                label: "Speed",
                value: "130MB/s read, U3 Class 10"
            },
            {
                label: "Durability",
                value: "Water, Temp, X-ray, Magnet proof"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement",
        warranty: "10 years manufacturer warranty"
    },
    "vs-p6": {
        id: "vs-p6",
        name: "Realme 65W Charger",
        price: "₹899",
        originalPrice: "₹1,499",
        image: "realme-charger",
        rating: 4.4,
        reviews: 2345,
        badge: "Top Rated",
        inStock: true,
        category: "Chargers",
        description: "SuperDart 65W fast charger. Compatible with most USB-C devices including laptops.",
        storeId: "vijay-sales",
        storeName: "Vijay Sales Store",
        storeEmoji: "📦",
        storeRating: "4.3",
        highlights: [
            "65W SuperDart fast charging",
            "Charges phone 0-50% in just 15 minutes",
            "Universal USB-C compatibility",
            "Compact and travel-friendly design"
        ],
        specifications: [
            {
                label: "Brand",
                value: "Realme"
            },
            {
                label: "Output",
                value: "65W (5V/3A, 11V/5A, 20V/3.25A)"
            },
            {
                label: "Connector",
                value: "USB-C"
            },
            {
                label: "Safety",
                value: "Over-voltage, over-current protection"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement",
        warranty: "6 months warranty"
    },
    // ── TechFix Electronics (techfix-electronics) ───────────────────────────
    "tf-p1": {
        id: "tf-p1",
        name: "TWS Earbuds Pro (Active NC)",
        price: "₹1,499",
        originalPrice: "₹2,999",
        image: "tws-pro",
        rating: 4.5,
        reviews: 890,
        badge: "Deal",
        inStock: true,
        category: "Audio",
        description: "Active noise cancellation earbuds with 30hr battery. IPX7 waterproof with transparency mode.",
        storeId: "techfix-electronics",
        storeName: "TechFix Electronics",
        storeEmoji: "🔧",
        storeRating: "4.4",
        highlights: [
            "Hybrid Active Noise Cancellation",
            "IPX7 waterproof - use in any weather",
            "Transparency mode for ambient awareness",
            "30hr total battery life"
        ],
        specifications: [
            {
                label: "Battery",
                value: "6hr + 24hr case"
            },
            {
                label: "ANC",
                value: "Hybrid Active"
            },
            {
                label: "Water Resistance",
                value: "IPX7"
            },
            {
                label: "Bluetooth",
                value: "5.3"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement",
        warranty: "6 months warranty"
    },
    "tf-p2": {
        id: "tf-p2",
        name: "Phone Case (Military Grade)",
        price: "₹349",
        originalPrice: "₹599",
        image: "phone-case",
        rating: 4.3,
        reviews: 1234,
        inStock: true,
        category: "Mobile Accessories",
        description: "Military-grade drop protection case. Built-in kickstand and camera lens guard.",
        storeId: "techfix-electronics",
        storeName: "TechFix Electronics",
        storeEmoji: "🔧",
        storeRating: "4.4",
        highlights: [
            "MIL-STD-810G military-grade protection",
            "Built-in kickstand for hands-free use",
            "Camera lens guard for extra protection",
            "Raised bezels for screen protection"
        ],
        specifications: [
            {
                label: "Protection",
                value: "MIL-STD-810G"
            },
            {
                label: "Material",
                value: "TPU + Polycarbonate"
            },
            {
                label: "Features",
                value: "Kickstand, Camera Guard"
            },
            {
                label: "Compatibility",
                value: "Universal (trim to fit)"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "tf-p3": {
        id: "tf-p3",
        name: "65W GaN Charger",
        price: "₹1,299",
        originalPrice: "₹1,999",
        image: "gan-charger",
        rating: 4.6,
        reviews: 567,
        badge: "Bestseller",
        inStock: true,
        category: "Chargers",
        description: "GaN technology 65W charger with 3 ports. Charges laptop, phone, and tablet simultaneously.",
        storeId: "techfix-electronics",
        storeName: "TechFix Electronics",
        storeEmoji: "🔧",
        storeRating: "4.4",
        highlights: [
            "GaN technology - 50% smaller than standard chargers",
            "3 ports: 2 USB-C + 1 USB-A",
            "Charges laptop, phone, and tablet at once",
            "65W total output with intelligent distribution"
        ],
        specifications: [
            {
                label: "Output",
                value: "65W total"
            },
            {
                label: "Ports",
                value: "2× USB-C + 1× USB-A"
            },
            {
                label: "Technology",
                value: "GaN (Gallium Nitride)"
            },
            {
                label: "Safety",
                value: "Over-current, over-voltage, short-circuit"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement",
        warranty: "1 year warranty"
    },
    "tf-p4": {
        id: "tf-p4",
        name: "Mechanical Keyboard (RGB)",
        price: "₹2,499",
        originalPrice: "₹3,499",
        image: "mech-keyboard",
        rating: 4.4,
        reviews: 345,
        badge: "New",
        inStock: true,
        category: "Computer Peripherals",
        description: "Hot-swappable mechanical keyboard with RGB backlighting. Blue switches with PBT keycaps.",
        storeId: "techfix-electronics",
        storeName: "TechFix Electronics",
        storeEmoji: "🔧",
        storeRating: "4.4",
        highlights: [
            "Hot-swappable switches - customize your feel",
            "PBT double-shot keycaps for durability",
            "Per-key RGB backlighting with effects",
            "Blue switches for satisfying tactile feedback"
        ],
        specifications: [
            {
                label: "Switches",
                value: "Blue (Hot-swappable)"
            },
            {
                label: "Keycaps",
                value: "PBT Double-shot"
            },
            {
                label: "Layout",
                value: "Full-size 104 keys"
            },
            {
                label: "Connection",
                value: "USB-C wired"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement",
        warranty: "1 year warranty"
    },
    // ── Shivam Fast Food (shivam-fast-food) ─────────────────────────────────
    "sf-p1": {
        id: "sf-p1",
        name: "Masala Chai Premix (Pack of 20)",
        price: "₹199",
        originalPrice: "₹299",
        image: "chai-premix",
        rating: 4.3,
        reviews: 89,
        badge: "Bestseller",
        inStock: true,
        category: "Beverages",
        description: "Authentic masala chai premix made with premium Assam tea and aromatic spices. Just add hot water and enjoy!",
        storeId: "shivam-fast-food",
        storeName: "Shivam Fast Food",
        storeEmoji: "🍔",
        storeRating: "4.5",
        highlights: [
            "Made with premium Assam tea leaves",
            "Blend of cardamom, ginger, and cinnamon",
            "Just add hot water - ready in seconds",
            "Same taste as our restaurant chai"
        ],
        specifications: [
            {
                label: "Quantity",
                value: "Pack of 20 sachets"
            },
            {
                label: "Type",
                value: "Masala Chai Premix"
            },
            {
                label: "Preparation",
                value: "Add 150ml hot water"
            },
            {
                label: "Shelf Life",
                value: "12 months"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "sf-p2": {
        id: "sf-p2",
        name: "Pav Bhaji Masala (200g)",
        price: "₹85",
        originalPrice: "₹120",
        image: "pavbhaji-masala",
        rating: 4.5,
        reviews: 156,
        badge: "Top Rated",
        inStock: true,
        category: "Spices",
        description: "Our secret Pav Bhaji masala blend used in the restaurant. Now you can make restaurant-style Pav Bhaji at home.",
        storeId: "shivam-fast-food",
        storeName: "Shivam Fast Food",
        storeEmoji: "🍔",
        storeRating: "4.5",
        highlights: [
            "Same secret blend used in our restaurant",
            "Made from 12 hand-picked spices",
            "Perfect for Pav Bhaji and other curries",
            "No artificial colors or preservatives"
        ],
        specifications: [
            {
                label: "Weight",
                value: "200g"
            },
            {
                label: "Type",
                value: "Spice Blend"
            },
            {
                label: "Ingredients",
                value: "12 whole spices"
            },
            {
                label: "Shelf Life",
                value: "9 months"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "sf-p3": {
        id: "sf-p3",
        name: "Mango Lassi Concentrate (1L)",
        price: "₹250",
        image: "mango-lassi",
        rating: 4.1,
        reviews: 67,
        inStock: true,
        category: "Beverages",
        description: "Thick mango lassi concentrate made from Alphonso mangoes. Mix 1:3 with cold milk for perfect lassi.",
        storeId: "shivam-fast-food",
        storeName: "Shivam Fast Food",
        storeEmoji: "🍔",
        storeRating: "4.5",
        highlights: [
            "Made from Alphonso mangoes",
            "Mix 1:3 with cold milk for perfect lassi",
            "No added preservatives",
            "Makes approximately 4 liters of lassi"
        ],
        specifications: [
            {
                label: "Volume",
                value: "1L"
            },
            {
                label: "Type",
                value: "Mango Lassi Concentrate"
            },
            {
                label: "Yield",
                value: "~4 liters when mixed"
            },
            {
                label: "Storage",
                value: "Refrigerate after opening"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "No returns (perishable)",
        warranty: "No warranty"
    },
    "sf-p4": {
        id: "sf-p4",
        name: "Frozen Chole Bhature (Pack of 5)",
        price: "₹350",
        originalPrice: "₹450",
        image: "chole-bhature-frozen",
        rating: 4.4,
        reviews: 203,
        badge: "Popular",
        inStock: true,
        category: "Frozen Food",
        description: "Ready-to-fry frozen Chole Bhature. Includes spiced chole. Just heat and serve in 10 minutes.",
        storeId: "shivam-fast-food",
        storeName: "Shivam Fast Food",
        storeEmoji: "🍔",
        storeRating: "4.5",
        highlights: [
            "Restaurant taste at home",
            "Ready-to-fry bhature, just heat and serve",
            "Includes pre-cooked spiced chole",
            "Ready in just 10 minutes"
        ],
        specifications: [
            {
                label: "Quantity",
                value: "Pack of 5 sets"
            },
            {
                label: "Type",
                value: "Frozen Prepared Meal"
            },
            {
                label: "Prep Time",
                value: "10 minutes"
            },
            {
                label: "Storage",
                value: "Keep frozen (-18°C)"
            }
        ],
        deliveryEstimate: "Same day (frozen delivery)",
        returnPolicy: "No returns (frozen food)",
        warranty: "No warranty"
    },
    // ── Look & Style Salon (look-style-salon) ───────────────────────────────
    "ls-p1": {
        id: "ls-p1",
        name: "L'Oreal Professional Shampoo (300ml)",
        price: "₹550",
        originalPrice: "₹750",
        image: "loreal-shampoo",
        rating: 4.6,
        reviews: 312,
        badge: "Bestseller",
        inStock: true,
        category: "Hair Care",
        description: "Professional grade shampoo used in our salon. Suitable for all hair types. Contains keratin and argan oil.",
        storeId: "look-style-salon",
        storeName: "Look & Style Salon",
        storeEmoji: "✂️",
        storeRating: "4.7",
        highlights: [
            "Professional salon-grade formula",
            "Enriched with Keratin and Argan Oil",
            "Suitable for all hair types",
            "Same product used in our salon treatments"
        ],
        specifications: [
            {
                label: "Volume",
                value: "300ml"
            },
            {
                label: "Brand",
                value: "L'Oreal Professionnel"
            },
            {
                label: "Key Ingredients",
                value: "Keratin, Argan Oil"
            },
            {
                label: "Hair Type",
                value: "All hair types"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "ls-p2": {
        id: "ls-p2",
        name: "Schwarzkopf Hair Color Kit",
        price: "₹420",
        image: "schwarzkopf-color",
        rating: 4.3,
        reviews: 178,
        inStock: true,
        category: "Hair Color",
        description: "Professional hair color kit with developer. Ammonia-free formula lasts up to 6 weeks.",
        storeId: "look-style-salon",
        storeName: "Look & Style Salon",
        storeEmoji: "✂️",
        storeRating: "4.7",
        highlights: [
            "Ammonia-free gentle formula",
            "Up to 100% gray coverage",
            "Lasts up to 6 weeks",
            "Includes developer and gloves"
        ],
        specifications: [
            {
                label: "Brand",
                value: "Schwarzkopf"
            },
            {
                label: "Type",
                value: "Ammonia-Free Hair Color"
            },
            {
                label: "Duration",
                value: "Up to 6 weeks"
            },
            {
                label: "Contents",
                value: "Color tube + Developer + Gloves"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement (unopened only)",
        warranty: "No warranty"
    },
    "ls-p3": {
        id: "ls-p3",
        name: "Kerastase Hair Serum (50ml)",
        price: "₹1,200",
        originalPrice: "₹1,500",
        image: "kerastase-serum",
        rating: 4.8,
        reviews: 95,
        badge: "Premium",
        inStock: true,
        category: "Hair Care",
        description: "Luxury hair serum for frizz control and shine. Enriched with camelina oil and vitamin E.",
        storeId: "look-style-salon",
        storeName: "Look & Style Salon",
        storeEmoji: "✂️",
        storeRating: "4.7",
        highlights: [
            "Luxury salon-grade hair serum",
            "Controls frizz for up to 96 hours",
            "Enriched with Camelina Oil and Vitamin E",
            "Lightweight, non-greasy formula"
        ],
        specifications: [
            {
                label: "Volume",
                value: "50ml"
            },
            {
                label: "Brand",
                value: "Kérastase (L'Oreal)"
            },
            {
                label: "Key Ingredients",
                value: "Camelina Oil, Vitamin E"
            },
            {
                label: "Hair Type",
                value: "Frizz-prone, all types"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement (unopened only)",
        warranty: "No warranty"
    },
    // ── StyleHub Salon (stylehub-salon) ─────────────────────────────────────
    "sh-p1": {
        id: "sh-p1",
        name: "Biolage SmoothProof Shampoo (340ml)",
        price: "₹650",
        originalPrice: "₹850",
        image: "biolage-shampoo",
        rating: 4.5,
        reviews: 234,
        badge: "Bestseller",
        inStock: true,
        category: "Hair Care",
        description: "Anti-frizz shampoo for smooth, shiny hair. Contains camellia oil and aloe vera.",
        storeId: "stylehub-salon",
        storeName: "StyleHub Salon",
        storeEmoji: "💅",
        storeRating: "4.8",
        highlights: [
            "Anti-frizz formula for up to 72hr smoothness",
            "Enriched with Camellia Oil and Aloe Vera",
            "Paraben-free, salon professional",
            "Leaves hair soft, shiny, and manageable"
        ],
        specifications: [
            {
                label: "Volume",
                value: "340ml"
            },
            {
                label: "Brand",
                value: "Biolage (Matrix)"
            },
            {
                label: "Key Ingredients",
                value: "Camellia Oil, Aloe Vera"
            },
            {
                label: "Hair Type",
                value: "Frizzy, unruly hair"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "sh-p2": {
        id: "sh-p2",
        name: "Wella Color Charm Toner (85ml)",
        price: "₹380",
        image: "wella-toner",
        rating: 4.4,
        reviews: 156,
        inStock: true,
        category: "Hair Color",
        description: "Professional toner for neutralizing unwanted brassy tones. Long-lasting results.",
        storeId: "stylehub-salon",
        storeName: "StyleHub Salon",
        storeEmoji: "💅",
        storeRating: "4.8",
        highlights: [
            "Professional salon-grade toner",
            "Neutralizes brassy/yellow tones effectively",
            "Long-lasting, vibrant results",
            "Used by our colorists in-salon"
        ],
        specifications: [
            {
                label: "Volume",
                value: "85ml"
            },
            {
                label: "Brand",
                value: "Wella Professionals"
            },
            {
                label: "Type",
                value: "Liquid Hair Toner"
            },
            {
                label: "Use",
                value: "Mix with Wella Developer (1:2 ratio)"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement (unopened only)",
        warranty: "No warranty"
    },
    "sh-p3": {
        id: "sh-p3",
        name: "Moroccanoil Treatment (100ml)",
        price: "₹1,450",
        originalPrice: "₹1,950",
        image: "moroccanoil",
        rating: 4.8,
        reviews: 345,
        badge: "Premium",
        inStock: true,
        category: "Hair Care",
        description: "Iconic hair treatment oil enriched with argan oil. Nourishes, smooths, and adds shine.",
        storeId: "stylehub-salon",
        storeName: "StyleHub Salon",
        storeEmoji: "💅",
        storeRating: "4.8",
        highlights: [
            "The iconic hair oil loved worldwide",
            "Enriched with Argan Oil and Vitamins",
            "Nourishes, smooths, and speeds up drying",
            "Signature Moroccanoil scent"
        ],
        specifications: [
            {
                label: "Volume",
                value: "100ml"
            },
            {
                label: "Brand",
                value: "Moroccanoil"
            },
            {
                label: "Key Ingredient",
                value: "Argan Oil"
            },
            {
                label: "Hair Type",
                value: "All hair types"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement (unopened only)",
        warranty: "No warranty"
    },
    // ── FreshBite Restaurant (freshbite-restaurant) ─────────────────────────
    "fb-p1": {
        id: "fb-p1",
        name: "Biryani Spice Mix (200g)",
        price: "₹150",
        originalPrice: "₹200",
        image: "biryani-mix",
        rating: 4.6,
        reviews: 567,
        badge: "Bestseller",
        inStock: true,
        category: "Spices",
        description: "Our signature biryani spice blend. Includes saffron strands. Makes perfect biryani every time.",
        storeId: "freshbite-restaurant",
        storeName: "FreshBite Restaurant",
        storeEmoji: "🍽️",
        storeRating: "4.6",
        highlights: [
            "Signature blend from our award-winning kitchen",
            "Includes premium saffron strands",
            "15 hand-ground spices in perfect ratio",
            "Makes restaurant-quality biryani at home"
        ],
        specifications: [
            {
                label: "Weight",
                value: "200g"
            },
            {
                label: "Type",
                value: "Biryani Spice Blend"
            },
            {
                label: "Ingredients",
                value: "15 spices + saffron"
            },
            {
                label: "Yield",
                value: "Enough for ~3kg rice biryani"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "fb-p2": {
        id: "fb-p2",
        name: "Mango Pickle (500g)",
        price: "₹220",
        image: "mango-pickle",
        rating: 4.3,
        reviews: 234,
        inStock: true,
        category: "Pickles",
        description: "Homemade-style raw mango pickle with traditional spices. Aged for 3 months for perfect taste.",
        storeId: "freshbite-restaurant",
        storeName: "FreshBite Restaurant",
        storeEmoji: "🍽️",
        storeRating: "4.6",
        highlights: [
            "Homemade-style traditional recipe",
            "Aged for 3 months for deep flavor",
            "Made with raw mango and authentic spices",
            "Pairs perfectly with any Indian meal"
        ],
        specifications: [
            {
                label: "Weight",
                value: "500g"
            },
            {
                label: "Type",
                value: "Raw Mango Pickle (Aam Ka Achar)"
            },
            {
                label: "Aging",
                value: "3 months"
            },
            {
                label: "Shelf Life",
                value: "12 months"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "fb-p3": {
        id: "fb-p3",
        name: "Frozen Paratha (Pack of 10)",
        price: "₹280",
        originalPrice: "₹350",
        image: "frozen-paratha",
        rating: 4.4,
        reviews: 890,
        inStock: true,
        category: "Frozen Food",
        description: "Flaky, layered parathas made with whole wheat. Just heat on tawa for 2 minutes.",
        storeId: "freshbite-restaurant",
        storeName: "FreshBite Restaurant",
        storeEmoji: "🍽️",
        storeRating: "4.6",
        highlights: [
            "Flaky, multi-layered texture",
            "Made with 100% whole wheat",
            "Ready in just 2 minutes on tawa",
            "No preservatives or artificial flavors"
        ],
        specifications: [
            {
                label: "Quantity",
                value: "Pack of 10 parathas"
            },
            {
                label: "Type",
                value: "Frozen Whole Wheat Paratha"
            },
            {
                label: "Prep Time",
                value: "2 minutes on tawa"
            },
            {
                label: "Storage",
                value: "Keep frozen (-18°C)"
            }
        ],
        deliveryEstimate: "Same day (frozen delivery)",
        returnPolicy: "No returns (frozen food)",
        warranty: "No warranty"
    },
    // ── FitZone Gym (fitzone-gym) ───────────────────────────────────────────
    "fz-p1": {
        id: "fz-p1",
        name: "Whey Protein (1kg)",
        price: "₹1,899",
        originalPrice: "₹2,499",
        image: "whey-protein",
        rating: 4.5,
        reviews: 567,
        badge: "Bestseller",
        inStock: true,
        category: "Supplements",
        description: "Premium whey protein isolate with 25g protein per serving. Chocolate flavor.",
        storeId: "fitzone-gym",
        storeName: "FitZone Gym",
        storeEmoji: "💪",
        storeRating: "4.5",
        highlights: [
            "25g protein per serving for muscle building",
            "Whey Protein Isolate - fast absorption",
            "Rich chocolate flavor, mixes easily",
            "Low carb, low fat formula"
        ],
        specifications: [
            {
                label: "Weight",
                value: "1kg"
            },
            {
                label: "Protein/Serving",
                value: "25g"
            },
            {
                label: "Flavor",
                value: "Chocolate"
            },
            {
                label: "Servings",
                value: "Approx 33"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement (unopened only)",
        warranty: "No warranty"
    },
    "fz-p2": {
        id: "fz-p2",
        name: "Resistance Band Set (5 Levels)",
        price: "₹499",
        originalPrice: "₹799",
        image: "resistance-bands",
        rating: 4.3,
        reviews: 234,
        inStock: true,
        category: "Equipment",
        description: "Set of 5 resistance bands with different strengths. Includes door anchor and carry bag.",
        storeId: "fitzone-gym",
        storeName: "FitZone Gym",
        storeEmoji: "💪",
        storeRating: "4.5",
        highlights: [
            "5 different resistance levels from light to extra-heavy",
            "Includes door anchor and carry bag",
            "Latex-free, skin-friendly material",
            "Perfect for home workouts and travel"
        ],
        specifications: [
            {
                label: "Quantity",
                value: "5 bands + accessories"
            },
            {
                label: "Resistance Levels",
                value: "5 (10lb - 50lb)"
            },
            {
                label: "Material",
                value: "Natural Latex"
            },
            {
                label: "Accessories",
                value: "Door anchor, carry bag, ankle straps"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement",
        warranty: "6 months warranty"
    },
    "fz-p3": {
        id: "fz-p3",
        name: "Gym Gloves with Wrist Support",
        price: "₹399",
        originalPrice: "₹599",
        image: "gym-gloves",
        rating: 4.2,
        reviews: 178,
        inStock: true,
        category: "Accessories",
        description: "Anti-slip gym gloves with wrist wrap support. Breathable mesh material.",
        storeId: "fitzone-gym",
        storeName: "FitZone Gym",
        storeEmoji: "💪",
        storeRating: "4.5",
        highlights: [
            "Anti-slip silicone grip for safety",
            "Wrist wrap for joint support",
            "Breathable mesh for comfort",
            "Padded palm for callus protection"
        ],
        specifications: [
            {
                label: "Material",
                value: "Breathable Mesh + Silicone"
            },
            {
                label: "Closure",
                value: "Velcro wrist wrap"
            },
            {
                label: "Grip",
                value: "Anti-slip silicone palm"
            },
            {
                label: "Sizes Available",
                value: "S, M, L, XL"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement",
        warranty: "3 months warranty"
    },
    "fz-p4": {
        id: "fz-p4",
        name: "BCAA Powder (500g)",
        price: "₹1,200",
        originalPrice: "₹1,600",
        image: "bcaa-powder",
        rating: 4.4,
        reviews: 145,
        badge: "Popular",
        inStock: true,
        category: "Supplements",
        description: "Branched-chain amino acids for muscle recovery. Watermelon flavor, 0 sugar.",
        storeId: "fitzone-gym",
        storeName: "FitZone Gym",
        storeEmoji: "💪",
        storeRating: "4.5",
        highlights: [
            "2:1:1 ratio of BCAAs for optimal recovery",
            "Zero sugar, zero calories",
            "Watermelon flavor, refreshing taste",
            "Reduces muscle soreness post-workout"
        ],
        specifications: [
            {
                label: "Weight",
                value: "500g"
            },
            {
                label: "BCAA Ratio",
                value: "2:1:1 (L-Leucine, L-Isoleucine, L-Valine)"
            },
            {
                label: "Flavor",
                value: "Watermelon"
            },
            {
                label: "Servings",
                value: "Approx 40"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement (unopened only)",
        warranty: "No warranty"
    },
    // ── FitPro Gym & Spa (fitpro-gym) ───────────────────────────────────────
    "fp-p1": {
        id: "fp-p1",
        name: "Creatine Monohydrate (250g)",
        price: "₹699",
        originalPrice: "₹999",
        image: "creatine",
        rating: 4.6,
        reviews: 456,
        badge: "Bestseller",
        inStock: true,
        category: "Supplements",
        description: "Micronized creatine monohydrate for strength and power. Unflavored, mixes easily.",
        storeId: "fitpro-gym",
        storeName: "FitPro Gym & Spa",
        storeEmoji: "🏋️",
        storeRating: "4.4",
        highlights: [
            "Micronized for better absorption",
            "Increases strength, power, and muscle volume",
            "Unflavored - add to any drink",
            "50 servings per container"
        ],
        specifications: [
            {
                label: "Weight",
                value: "250g"
            },
            {
                label: "Type",
                value: "Creatine Monohydrate (Micronized)"
            },
            {
                label: "Flavor",
                value: "Unflavored"
            },
            {
                label: "Servings",
                value: "50 (5g per serving)"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement (unopened only)",
        warranty: "No warranty"
    },
    "fp-p2": {
        id: "fp-p2",
        name: "Yoga Mat (6mm Thick)",
        price: "₹599",
        originalPrice: "₹899",
        image: "yoga-mat",
        rating: 4.4,
        reviews: 789,
        inStock: true,
        category: "Equipment",
        description: "Eco-friendly TPE yoga mat with alignment lines. Non-slip surface, comes with carry strap.",
        storeId: "fitpro-gym",
        storeName: "FitPro Gym & Spa",
        storeEmoji: "🏋️",
        storeRating: "4.4",
        highlights: [
            "6mm thick for joint comfort",
            "Eco-friendly TPE material - no PVC, no latex",
            "Alignment lines for proper positioning",
            "Non-slip on both sides"
        ],
        specifications: [
            {
                label: "Dimensions",
                value: "183cm × 61cm × 6mm"
            },
            {
                label: "Material",
                value: "TPE (Thermoplastic Elastomer)"
            },
            {
                label: "Weight",
                value: "800g"
            },
            {
                label: "Accessories",
                value: "Carry strap included"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement",
        warranty: "6 months warranty"
    },
    "fp-p3": {
        id: "fp-p3",
        name: "Pre-Workout Powder (500g)",
        price: "₹1,499",
        originalPrice: "₹1,999",
        image: "preworkout",
        rating: 4.3,
        reviews: 234,
        inStock: true,
        category: "Supplements",
        description: "Explosive pre-workout with caffeine, beta-alanine, and citrulline. Fruit punch flavor.",
        storeId: "fitpro-gym",
        storeName: "FitPro Gym & Spa",
        storeEmoji: "🏋️",
        storeRating: "4.4",
        highlights: [
            "200mg caffeine for explosive energy",
            "Beta-alanine for endurance boost",
            "Citrulline for enhanced blood flow",
            "Fruit punch flavor, mixes easily"
        ],
        specifications: [
            {
                label: "Weight",
                value: "500g"
            },
            {
                label: "Caffeine",
                value: "200mg per serving"
            },
            {
                label: "Flavor",
                value: "Fruit Punch"
            },
            {
                label: "Servings",
                value: "Approx 30"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement (unopened only)",
        warranty: "No warranty"
    },
    // ── Sharma Dental Clinic (sharma-dental) ────────────────────────────────
    "sd-p1": {
        id: "sd-p1",
        name: "Oral-B Pro Toothbrush (Soft)",
        price: "₹199",
        originalPrice: "₹299",
        image: "oralb-toothbrush",
        rating: 4.4,
        reviews: 567,
        inStock: true,
        category: "Dental Care",
        description: "Professional grade toothbrush with crisscross bristles. Removes up to 90% plaque.",
        storeId: "sharma-dental",
        storeName: "Sharma Dental Clinic",
        storeEmoji: "🦷",
        storeRating: "4.9",
        highlights: [
            "Crisscross bristles remove up to 90% plaque",
            "Soft bristles gentle on gums",
            "Ergonomic grip handle",
            "Recommended by dentists worldwide"
        ],
        specifications: [
            {
                label: "Brand",
                value: "Oral-B (P&G)"
            },
            {
                label: "Bristle",
                value: "Soft"
            },
            {
                label: "Features",
                value: "Crisscross bristles, tongue cleaner"
            },
            {
                label: "Replacement",
                value: "Every 3 months"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "sd-p2": {
        id: "sd-p2",
        name: "Sensodyne Repair Toothpaste (150g)",
        price: "₹230",
        image: "sensodyne-paste",
        rating: 4.6,
        reviews: 1234,
        badge: "Bestseller",
        inStock: true,
        category: "Dental Care",
        description: "Clinically proven relief from sensitivity. Builds a repairing layer over sensitive areas.",
        storeId: "sharma-dental",
        storeName: "Sharma Dental Clinic",
        storeEmoji: "🦷",
        storeRating: "4.9",
        highlights: [
            "Clinically proven sensitivity relief",
            "Builds a repairing layer over sensitive areas",
            "Recommended by 9 out of 10 dentists",
            "Twice daily use for lasting protection"
        ],
        specifications: [
            {
                label: "Weight",
                value: "150g"
            },
            {
                label: "Brand",
                value: "Sensodyne (GSK)"
            },
            {
                label: "Type",
                value: "Sensitivity Repair Toothpaste"
            },
            {
                label: "Usage",
                value: "Twice daily"
            }
        ],
        deliveryEstimate: "1-2 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "sd-p3": {
        id: "sd-p3",
        name: "Dental Floss Picks (90 Count)",
        price: "₹180",
        originalPrice: "₹220",
        image: "floss-picks",
        rating: 4.2,
        reviews: 345,
        inStock: true,
        category: "Dental Care",
        description: "Mint-flavored dental floss picks with tongue cleaner. Easy-grip handle design.",
        storeId: "sharma-dental",
        storeName: "Sharma Dental Clinic",
        storeEmoji: "🦷",
        storeRating: "4.9",
        highlights: [
            "Mint-flavored for fresh breath",
            "Built-in tongue cleaner on each pick",
            "Easy-grip handle for comfortable use",
            "90 count - 3 month supply"
        ],
        specifications: [
            {
                label: "Quantity",
                value: "90 picks"
            },
            {
                label: "Flavor",
                value: "Mint"
            },
            {
                label: "Features",
                value: "Tongue cleaner, easy-grip handle"
            },
            {
                label: "Duration",
                value: "Approx 3 months supply"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    // ── SmileCare Dental Clinic (smilecare-dental) ──────────────────────────
    "sc-p1": {
        id: "sc-p1",
        name: "Colgate Total Toothpaste (200g)",
        price: "₹210",
        originalPrice: "₹250",
        image: "colgate-total",
        rating: 4.5,
        reviews: 2345,
        inStock: true,
        category: "Dental Care",
        description: "12-in-1 complete care toothpaste. Fights cavities, plaque, gingivitis, and sensitivity.",
        storeId: "smilecare-dental",
        storeName: "SmileCare Dental Clinic",
        storeEmoji: "🦷",
        storeRating: "4.7",
        highlights: [
            "12-in-1 complete oral care protection",
            "Fights cavities, plaque, and gingivitis",
            "Helps with sensitivity and enamel protection",
            "Fresh breath that lasts up to 12 hours"
        ],
        specifications: [
            {
                label: "Weight",
                value: "200g"
            },
            {
                label: "Brand",
                value: "Colgate (P&G)"
            },
            {
                label: "Type",
                value: "Complete Care Toothpaste"
            },
            {
                label: "Benefits",
                value: "12-in-1 protection"
            }
        ],
        deliveryEstimate: "1-2 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "sc-p2": {
        id: "sc-p2",
        name: "Waterpik Water Flosser",
        price: "₹3,499",
        originalPrice: "₹4,999",
        image: "waterpik",
        rating: 4.7,
        reviews: 567,
        badge: "Premium",
        inStock: true,
        category: "Dental Devices",
        description: "Professional water flosser with 10 pressure settings. Removes 99.9% plaque from treated areas.",
        storeId: "smilecare-dental",
        storeName: "SmileCare Dental Clinic",
        storeEmoji: "🦷",
        storeRating: "4.7",
        highlights: [
            "Removes 99.9% plaque from treated areas",
            "10 adjustable pressure settings",
            "Clinically proven more effective than string floss",
            "360° rotating tip for easy reach"
        ],
        specifications: [
            {
                label: "Brand",
                value: "Waterpik"
            },
            {
                label: "Pressure Settings",
                value: "10 levels"
            },
            {
                label: "Water Capacity",
                value: "600ml"
            },
            {
                label: "Tips Included",
                value: "7 interchangeable tips"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement for defective units",
        warranty: "2 year manufacturer warranty"
    },
    "sc-p3": {
        id: "sc-p3",
        name: "Teeth Whitening Strips (14 Pack)",
        price: "₹899",
        originalPrice: "₹1,299",
        image: "whitening-strips",
        rating: 4.1,
        reviews: 345,
        badge: "New",
        inStock: true,
        category: "Dental Care",
        description: "Professional-grade whitening strips. Noticeable results in 14 days. Enamel-safe formula.",
        storeId: "smilecare-dental",
        storeName: "SmileCare Dental Clinic",
        storeEmoji: "🦷",
        storeRating: "4.7",
        highlights: [
            "Professional-grade whitening at home",
            "Visible results in just 14 days",
            "Enamel-safe formula",
            "Easy application - wear for 30 min daily"
        ],
        specifications: [
            {
                label: "Quantity",
                value: "14 strips (7 upper + 7 lower)"
            },
            {
                label: "Treatment Duration",
                value: "14 days"
            },
            {
                label: "Wear Time",
                value: "30 minutes per day"
            },
            {
                label: "Safety",
                value: "Enamel-safe"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement (unopened only)",
        warranty: "No warranty"
    },
    // ── Glow Beauty Parlour (glow-beauty-parlour) ───────────────────────────
    "gb-p1": {
        id: "gb-p1",
        name: "Lakme 9to5 Primer (30ml)",
        price: "₹499",
        originalPrice: "₹599",
        image: "lakme-primer",
        rating: 4.3,
        reviews: 678,
        inStock: true,
        category: "Makeup",
        description: "Long-lasting makeup primer that controls oil and minimizes pores. Lightweight formula.",
        storeId: "glow-beauty-parlour",
        storeName: "Glow Beauty Parlour",
        storeEmoji: "💄",
        storeRating: "4.8",
        highlights: [
            "Controls oil for up to 12 hours",
            "Minimizes pores for smooth base",
            "Lightweight, non-greasy formula",
            "Perfect base for long-lasting makeup"
        ],
        specifications: [
            {
                label: "Volume",
                value: "30ml"
            },
            {
                label: "Brand",
                value: "Lakme"
            },
            {
                label: "Finish",
                value: "Matte"
            },
            {
                label: "Skin Type",
                value: "Oily, Combination"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement (unopened only)",
        warranty: "No warranty"
    },
    "gb-p2": {
        id: "gb-p2",
        name: "Nivea Body Lotion (400ml)",
        price: "₹320",
        originalPrice: "₹399",
        image: "nivea-lotion",
        rating: 4.5,
        reviews: 2345,
        badge: "Bestseller",
        inStock: true,
        category: "Skincare",
        description: "Deep moisturizing body lotion with Vitamin E and jojoba oil. 48hr moisture lock.",
        storeId: "glow-beauty-parlour",
        storeName: "Glow Beauty Parlour",
        storeEmoji: "💄",
        storeRating: "4.8",
        highlights: [
            "48-hour deep moisture lock",
            "Enriched with Vitamin E and Jojoba Oil",
            "Fast-absorbing, non-sticky formula",
            "Dermatologically tested"
        ],
        specifications: [
            {
                label: "Volume",
                value: "400ml"
            },
            {
                label: "Brand",
                value: "Nivea"
            },
            {
                label: "Key Ingredients",
                value: "Vitamin E, Jojoba Oil"
            },
            {
                label: "Skin Type",
                value: "Normal to Dry"
            }
        ],
        deliveryEstimate: "2-3 days",
        returnPolicy: "7 days replacement",
        warranty: "No warranty"
    },
    "gb-p3": {
        id: "gb-p3",
        name: "Face Sheet Mask Set (5 Pack)",
        price: "₹199",
        originalPrice: "₹350",
        image: "sheet-masks",
        rating: 4.2,
        reviews: 456,
        badge: "Deal",
        inStock: true,
        category: "Skincare",
        description: "Assorted face sheet masks - Hydrating, Brightening, Anti-aging, Pore Minimizing, Soothing.",
        storeId: "glow-beauty-parlour",
        storeName: "Glow Beauty Parlour",
        storeEmoji: "💄",
        storeRating: "4.8",
        highlights: [
            "5 different masks for 5 skin concerns",
            "Korean-style sheet mask formula",
            "Enriched with natural extracts",
            "Instant hydration and glow"
        ],
        specifications: [
            {
                label: "Quantity",
                value: "5 sheet masks"
            },
            {
                label: "Types",
                value: "Hydrating, Brightening, Anti-aging, Pore Minimizing, Soothing"
            },
            {
                label: "Usage",
                value: "15-20 minutes per mask"
            },
            {
                label: "Skin Type",
                value: "All skin types"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement (unopened only)",
        warranty: "No warranty"
    },
    "gb-p4": {
        id: "gb-p4",
        name: "MAC Velvet Lipstick",
        price: "₹990",
        originalPrice: "₹1,200",
        image: "mac-lipstick",
        rating: 4.7,
        reviews: 890,
        badge: "Premium",
        inStock: true,
        category: "Makeup",
        description: "Velvet-textured matte lipstick with long-wear formula. Rich, saturated color in one stroke.",
        storeId: "glow-beauty-parlour",
        storeName: "Glow Beauty Parlour",
        storeEmoji: "💄",
        storeRating: "4.8",
        highlights: [
            "Rich, saturated matte color",
            "Velvet texture glides on smoothly",
            "Long-wear formula lasts up to 8 hours",
            "Wide range of iconic shades"
        ],
        specifications: [
            {
                label: "Brand",
                value: "MAC"
            },
            {
                label: "Finish",
                value: "Matte Velvet"
            },
            {
                label: "Duration",
                value: "Up to 8 hours"
            },
            {
                label: "Shade",
                value: "Multiple shades available"
            }
        ],
        deliveryEstimate: "3-5 days",
        returnPolicy: "7 days replacement (unopened only)",
        warranty: "No warranty"
    }
};
function getProductById(id) {
    return productDatabase[id];
}
function getTrendingProducts() {
    return [
        productDatabase["cp-p1"],
        productDatabase["fm-p4"],
        productDatabase["fm-p3"],
        productDatabase["fm-p6"],
        productDatabase["qe-p4"],
        productDatabase["qe-p2"],
        productDatabase["vs-p2"],
        productDatabase["vs-p1"],
        productDatabase["tf-p3"],
        productDatabase["sf-p2"],
        productDatabase["ls-p1"],
        productDatabase["fz-p1"]
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/justdial/StoreCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoreCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
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
    const banner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${cfg.bannerHeight} overflow-hidden`,
        children: [
            img ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/StoreCard.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 bg-gradient-to-br ${coverGradient || "from-gray-400 to-gray-500"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: Logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {
                            className: `${cfg.coverIconSize} text-white/90`,
                            strokeWidth: 1.5
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/StoreCard.tsx",
                            lineNumber: 166,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute ${cfg.pillTop} ${cfg.pillLR} flex items-center justify-between`,
                children: [
                    isFeatured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `bg-amber-500/95 backdrop-blur-sm text-white ${cfg.pillText} font-bold uppercase tracking-wider ${cfg.pillPx} rounded-full flex items-center gap-0.5 shadow-sm`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${isOpen ? "bg-emerald-500/95" : "bg-rose-500/95"} backdrop-blur-sm text-white ${cfg.pillText} font-bold ${cfg.pillPx} rounded-full flex items-center gap-1 shadow-sm ${isFeatured ? "" : "ml-auto"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            rating !== undefined && rating !== null && rating !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute ${cfg.ratingPos}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `bg-white/95 backdrop-blur-sm text-gray-900 ${cfg.ratingText} font-bold ${cfg.ratingPx} rounded-full flex items-center gap-1 shadow-sm`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
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
            (logoEmoji || Logo) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute ${cfg.logoPos} z-10`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${cfg.logoSize} rounded-full bg-white shadow-md flex items-center justify-center ${cfg.logoEmojiSize} ring-2 ring-white`,
                            children: Logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {
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
                        isVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute -bottom-0.5 -left-0.5 ${cfg.tickSize} bg-[#0056b3] rounded-full flex items-center justify-center ring-2 ring-white`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
    const body = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cfg.bodyPadding,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mb-1 ${cfg.namePr}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
            category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `${cfg.categoryText} text-gray-500 font-medium truncate mb-1.5`,
                children: category
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/StoreCard.tsx",
                lineNumber: 241,
                columnNumber: 9
            }, this),
            address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                        className: `${cfg.mapPinSize} text-gray-400 flex-shrink-0`
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/StoreCard.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            (reviews !== undefined || distance || price) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-2 border-t border-gray-100",
                children: [
                    reviews !== undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${cfg.footerText} text-gray-400 font-medium`,
                        children: [
                            reviews,
                            " reviews"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/StoreCard.tsx",
                        lineNumber: 256,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/src/components/justdial/StoreCard.tsx",
                        lineNumber: 258,
                        columnNumber: 13
                    }, this),
                    distance ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `bg-[#0056b3]/8 text-[#0056b3] ${cfg.footerText} font-bold ${cfg.footerPx} rounded-full flex items-center gap-0.5`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
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
                    }, this) : price ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_c = StoreCard;
var _c;
__turbopack_context__.k.register(_c, "StoreCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/justdial/MobileCategoryLandingPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileCategoryLandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-client] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$category$2d$landing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/category-landing-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-listing-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/product-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/justdial/StoreCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
// ── Animation helpers ────────────────────────────────────────────────
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 18
    },
    visible: (i)=>({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.06,
                duration: 0.4,
                ease: [
                    0.25,
                    0.46,
                    0.45,
                    0.94
                ]
            }
        })
};
const sectionInView = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ]
        }
    }
};
// ── Section wrapper ──────────────────────────────────────────────────
function Section({ title, action, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        className: "pt-6",
        variants: sectionInView,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true,
            margin: "-40px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[17px] font-bold text-gray-900",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    action
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c = Section;
function MobileCategoryLandingPage({ category }) {
    _s();
    const [wishlistedProducts, setWishlistedProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    // ── Data fetching ─────────────────────────────────────────────────
    const businesses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MobileCategoryLandingPage.useMemo[businesses]": ()=>{
            if (category.listingSlug) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBusinessesByCategory"])(category.listingSlug);
            }
            // Fallback inline businesses
            return [
                {
                    id: `${category.slug}-fb-1`,
                    storeId: `${category.slug}-fb-1`,
                    name: `${category.label} Hub`,
                    category: category.label,
                    area: "MG Road",
                    rating: 4.6,
                    totalRatings: 1840,
                    distance: "1.2 km",
                    priceRange: "₹₹",
                    logoEmoji: category.emoji,
                    coverGradient: category.gradient,
                    isOpen: true,
                    isVerified: true,
                    isFeatured: true,
                    businessType: "service"
                },
                {
                    id: `${category.slug}-fb-2`,
                    storeId: `${category.slug}-fb-2`,
                    name: `Premium ${category.label}`,
                    category: category.label,
                    area: "Andheri West",
                    rating: 4.4,
                    totalRatings: 960,
                    distance: "2.5 km",
                    priceRange: "₹₹₹",
                    logoEmoji: category.emoji,
                    coverGradient: category.gradient,
                    isOpen: true,
                    isVerified: true,
                    isFeatured: true,
                    businessType: "service"
                },
                {
                    id: `${category.slug}-fb-3`,
                    storeId: `${category.slug}-fb-3`,
                    name: `${category.label} Express`,
                    category: category.label,
                    area: "Bandra",
                    rating: 4.3,
                    totalRatings: 720,
                    distance: "3.1 km",
                    priceRange: "₹",
                    logoEmoji: category.emoji,
                    coverGradient: category.gradient,
                    isOpen: false,
                    isVerified: false,
                    isFeatured: true,
                    businessType: "store"
                },
                {
                    id: `${category.slug}-fb-4`,
                    storeId: `${category.slug}-fb-4`,
                    name: `Royal ${category.label}`,
                    category: category.label,
                    area: "Juhu",
                    rating: 4.8,
                    totalRatings: 2100,
                    distance: "4.8 km",
                    priceRange: "₹₹₹",
                    logoEmoji: category.emoji,
                    coverGradient: category.gradient,
                    isOpen: true,
                    isVerified: true,
                    isFeatured: true,
                    businessType: "restaurant"
                }
            ];
        }
    }["MobileCategoryLandingPage.useMemo[businesses]"], [
        category
    ]);
    const trendingProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MobileCategoryLandingPage.useMemo[trendingProducts]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTrendingProducts"])().slice(0, 6)
    }["MobileCategoryLandingPage.useMemo[trendingProducts]"], []);
    const services = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MobileCategoryLandingPage.useMemo[services]": ()=>{
            if (category.subCategories.length > 0) {
                return category.subCategories.slice(0, 5).map({
                    "MobileCategoryLandingPage.useMemo[services]": (sub)=>({
                            name: sub.label,
                            emoji: sub.emoji,
                            price: `₹${(Math.floor(Math.random() * 9) + 1) * 100}`
                        })
                }["MobileCategoryLandingPage.useMemo[services]"]);
            }
            return [
                {
                    name: `Basic ${category.label}`,
                    emoji: category.emoji,
                    price: "₹299"
                },
                {
                    name: `Standard ${category.label}`,
                    emoji: category.emoji,
                    price: "₹599"
                },
                {
                    name: `Premium ${category.label}`,
                    emoji: category.emoji,
                    price: "₹999"
                },
                {
                    name: `Custom ${category.label}`,
                    emoji: category.emoji,
                    price: "₹1,499"
                },
                {
                    name: `Emergency ${category.label}`,
                    emoji: category.emoji,
                    price: "₹199"
                }
            ];
        }
    }["MobileCategoryLandingPage.useMemo[services]"], [
        category
    ]);
    const nearbyBusinesses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MobileCategoryLandingPage.useMemo[nearbyBusinesses]": ()=>businesses.slice(0, 4)
    }["MobileCategoryLandingPage.useMemo[nearbyBusinesses]"], [
        businesses
    ]);
    const topRated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MobileCategoryLandingPage.useMemo[topRated]": ()=>[
                ...businesses
            ].sort({
                "MobileCategoryLandingPage.useMemo[topRated]": (a, b)=>b.rating - a.rating
            }["MobileCategoryLandingPage.useMemo[topRated]"]).slice(0, 6)
    }["MobileCategoryLandingPage.useMemo[topRated]"], [
        businesses
    ]);
    const recentlyAdded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MobileCategoryLandingPage.useMemo[recentlyAdded]": ()=>businesses.slice(0, 3).map({
                "MobileCategoryLandingPage.useMemo[recentlyAdded]": (b, i)=>({
                        ...b,
                        date: `${i + 1} day${i > 0 ? "s" : ""} ago`
                    })
            }["MobileCategoryLandingPage.useMemo[recentlyAdded]"])
    }["MobileCategoryLandingPage.useMemo[recentlyAdded]"], [
        businesses
    ]);
    // Get related categories
    const relatedCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MobileCategoryLandingPage.useMemo[relatedCategories]": ()=>{
            return category.relatedSlugs.slice(0, 8).map({
                "MobileCategoryLandingPage.useMemo[relatedCategories]": (slug)=>{
                    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$category$2d$landing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategoryLanding"])(slug);
                    return match ? {
                        slug: match.slug,
                        label: match.label,
                        emoji: match.emoji,
                        gradient: match.gradient
                    } : {
                        slug,
                        label: slug,
                        emoji: "📁",
                        gradient: "from-gray-400 to-gray-500"
                    };
                }
            }["MobileCategoryLandingPage.useMemo[relatedCategories]"]);
        }
    }["MobileCategoryLandingPage.useMemo[relatedCategories]"], [
        category
    ]);
    const toggleWishlist = (productId)=>{
        setWishlistedProducts((prev)=>{
            const next = new Set(prev);
            if (next.has(productId)) next.delete(productId);
            else next.add(productId);
            return next;
        });
    };
    // ── Render ────────────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[100dvh] bg-[#F2F2F7] max-w-[480px] mx-auto pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 bg-white/80 backdrop-blur-2xl border-b border-black/[0.04]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-3",
                    style: {
                        height: 44,
                        paddingTop: "env(safe-area-inset-top)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            whileTap: {
                                scale: 0.88
                            },
                            className: "flex items-center justify-center w-11 h-11 -ml-2 rounded-full active:bg-gray-100 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                "aria-label": "Go back",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-[22px] h-[22px] text-gray-800",
                                    strokeWidth: 2.2
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[17px] leading-none",
                                    children: category.emoji
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[15px] font-semibold text-gray-900 truncate max-w-[180px]",
                                    children: category.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-0.5 -mr-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    whileTap: {
                                        scale: 0.88
                                    },
                                    className: "flex items-center justify-center w-11 h-11 rounded-full active:bg-gray-100 transition-colors",
                                    "aria-label": "Search",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "w-[20px] h-[20px] text-gray-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    whileTap: {
                                        scale: 0.88
                                    },
                                    className: "flex items-center justify-center w-11 h-11 rounded-full active:bg-gray-100 transition-colors",
                                    "aria-label": "Share",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                        className: "w-[20px] h-[20px] text-gray-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.5
                },
                className: `relative bg-gradient-to-br ${category.gradient} px-5 pb-7 pt-[calc(44px+env(safe-area-inset-top)+20px)] rounded-b-[28px] overflow-hidden`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-4 w-32 h-32 rounded-full bg-white/10 blur-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-40 h-40 rounded-full bg-black/10 blur-3xl -translate-x-1/2 translate-y-1/2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    scale: 0.6,
                                    opacity: 0
                                },
                                animate: {
                                    scale: 1,
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.15,
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15
                                },
                                className: "text-6xl mb-3",
                                children: category.emoji
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.2,
                                    duration: 0.4
                                },
                                className: "text-[22px] font-bold text-white leading-tight mb-1.5",
                                children: category.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.28,
                                    duration: 0.4
                                },
                                className: "text-[13px] text-white/80 leading-relaxed mb-4 max-w-[280px]",
                                children: category.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 8
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.35,
                                    duration: 0.4
                                },
                                className: "flex items-center gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-4 h-4 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                lineNumber: 236,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[14px] font-bold text-white leading-tight",
                                                        children: category.businessCount.toLocaleString("en-IN")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-white/70",
                                                        children: "Businesses"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                lineNumber: 239,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-px h-8 bg-white/20"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                                    className: "w-4 h-4 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                lineNumber: 250,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[14px] font-bold text-white leading-tight",
                                                        children: category.verifiedCount.toLocaleString("en-IN")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-white/70",
                                                        children: "Verified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                lineNumber: 253,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.4,
                    duration: 0.35
                },
                className: "relative z-20 -mt-5 px-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-sm shadow-black/[0.08] flex items-center gap-3 px-4 py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "w-[18px] h-[18px] text-gray-400 flex-shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: `Search in ${category.label}...`,
                            className: "flex-1 bg-transparent text-[15px] text-gray-800 placeholder-gray-400 outline-none",
                            readOnly: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            whileTap: {
                                scale: 0.92
                            },
                            className: "flex items-center justify-center w-8 h-8 rounded-xl bg-gray-100 flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                className: "w-4 h-4 text-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                    lineNumber: 273,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Popular Sub Categories",
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-0.5 text-[13px] font-semibold",
                    style: {
                        color: category.color
                    },
                    children: [
                        "See All ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 294,
                            columnNumber: 21
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                    lineNumber: 293,
                    columnNumber: 11
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2.5 overflow-x-auto px-4 pb-1 snap-x snap-mandatory scrollbar-hide",
                    children: category.subCategories.map((sub, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            custom: i,
                            variants: fadeUp,
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: {
                                once: true
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/category/${category.slug}?sub=${sub.slug}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileTap: {
                                        scale: 0.94
                                    },
                                    className: "flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-2.5 shadow-sm shadow-black/[0.04] whitespace-nowrap snap-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[16px]",
                                            children: sub.emoji
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                            lineNumber: 313,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[13px] font-medium text-gray-700",
                                            children: sub.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                            lineNumber: 314,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] text-gray-400 font-medium",
                                            children: sub.count
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                            lineNumber: 315,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                    lineNumber: 309,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                lineNumber: 308,
                                columnNumber: 15
                            }, this)
                        }, sub.slug, false, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 300,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                    lineNumber: 298,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Featured Businesses",
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-0.5 text-[13px] font-semibold",
                    style: {
                        color: category.color
                    },
                    children: [
                        "View All ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 330,
                            columnNumber: 22
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                    lineNumber: 329,
                    columnNumber: 11
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 overflow-x-auto px-4 pb-1 snap-x snap-mandatory scrollbar-hide",
                    children: businesses.slice(0, 6).map((biz, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            isOpen: biz.isOpen,
                            isVerified: biz.isVerified,
                            variant: "mobile",
                            index: i
                        }, biz.id, false, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 336,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                    lineNumber: 334,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                lineNumber: 326,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Trending Products",
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-0.5 text-[13px] font-semibold",
                    style: {
                        color: category.color
                    },
                    children: [
                        "View All ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 364,
                            columnNumber: 22
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                    lineNumber: 363,
                    columnNumber: 11
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 overflow-x-auto px-4 pb-1 snap-x snap-mandatory scrollbar-hide",
                    children: trendingProducts.map((product, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            custom: i,
                            variants: fadeUp,
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: {
                                once: true
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/store/${product.storeId}?product=${product.id}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileTap: {
                                        scale: 0.96
                                    },
                                    className: "w-[155px] flex-shrink-0 snap-start bg-white rounded-[18px] shadow-sm shadow-black/[0.06] overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative bg-gradient-to-br from-gray-50 to-gray-100 h-[120px] flex items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-5xl",
                                                    children: product.storeEmoji
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 21
                                                }, this),
                                                product.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-2 left-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full",
                                                        children: product.badge
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileTap: {
                                                        scale: 0.8
                                                    },
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        toggleWishlist(product.id);
                                                    },
                                                    className: "absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center shadow-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                        className: `w-3.5 h-3.5 ${wishlistedProducts.has(product.id) ? "text-red-500 fill-red-500" : "text-gray-400"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                            lineNumber: 384,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-3 py-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-[12px] font-semibold text-gray-900 leading-snug line-clamp-2 mb-1.5",
                                                    children: product.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                    lineNumber: 416,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[13px] font-bold text-gray-900",
                                                            children: product.price
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                            lineNumber: 420,
                                                            columnNumber: 23
                                                        }, this),
                                                        product.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] text-gray-400 line-through",
                                                            children: product.originalPrice
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                            lineNumber: 422,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            className: "w-3 h-3 text-amber-400 fill-amber-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                            lineNumber: 426,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] font-semibold text-gray-700",
                                                            children: product.rating
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                            lineNumber: 427,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-gray-400",
                                                            children: [
                                                                "(",
                                                                product.reviews,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                            lineNumber: 428,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                            lineNumber: 415,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                    lineNumber: 379,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                lineNumber: 378,
                                columnNumber: 15
                            }, this)
                        }, product.id, false, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 370,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                    lineNumber: 368,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                lineNumber: 360,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Popular Services",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-2",
                    style: {
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    },
                    children: services.map((service, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            name: service.name,
                            category: category.label,
                            logoEmoji: service.emoji,
                            coverGradient: category.gradient,
                            price: service.price,
                            storeId: `svc-${category.slug}-${i}`,
                            variant: "mobile",
                            index: i,
                            isFeatured: false,
                            isVerified: false
                        }, service.name, false, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 444,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                    lineNumber: 442,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                lineNumber: 441,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Nearby Businesses",
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-0.5 text-[13px] font-semibold",
                    style: {
                        color: category.color
                    },
                    children: [
                        "Map View ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 468,
                            columnNumber: 22
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                    lineNumber: 467,
                    columnNumber: 11
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 space-y-2.5",
                    children: nearbyBusinesses.map((biz, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            custom: i,
                            variants: fadeUp,
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: {
                                once: true
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/store/${biz.storeId}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    className: "flex items-center gap-3.5 bg-white rounded-2xl p-3.5 shadow-sm shadow-black/[0.04]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-14 h-14 rounded-2xl bg-gradient-to-br ${biz.coverGradient} flex items-center justify-center flex-shrink-0`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl",
                                                children: biz.logoEmoji
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                lineNumber: 489,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                            lineNumber: 488,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 mb-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-[14px] font-semibold text-gray-900 truncate",
                                                            children: biz.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 23
                                                        }, this),
                                                        biz.isVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                                            className: "w-3.5 h-3.5 text-blue-500 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                            lineNumber: 496,
                                                            columnNumber: 42
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 text-[12px] text-gray-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                                    lineNumber: 500,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: biz.area
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                                    lineNumber: 501,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                            lineNumber: 499,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                    className: "w-3 h-3 text-amber-400 fill-amber-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                                    lineNumber: 504,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-gray-700",
                                                                    children: biz.rating
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                                    lineNumber: 505,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "(",
                                                                        biz.totalRatings,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                            lineNumber: 503,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                    lineNumber: 498,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] text-gray-400",
                                                            children: biz.distance
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] text-gray-300",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                            lineNumber: 511,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `w-1.5 h-1.5 rounded-full ${biz.isOpen ? "bg-green-500" : "bg-red-400"}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                                    lineNumber: 513,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-[11px] ${biz.isOpen ? "text-green-600" : "text-red-500"}`,
                                                                    children: biz.isOpen ? "Open now" : "Closed"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                                    lineNumber: 514,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                            lineNumber: 493,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            whileTap: {
                                                scale: 0.88
                                            },
                                            className: "w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0",
                                            style: {
                                                backgroundColor: category.bgLight
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "w-[18px] h-[18px]",
                                                style: {
                                                    color: category.color
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                lineNumber: 527,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                            lineNumber: 522,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                    lineNumber: 483,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                lineNumber: 482,
                                columnNumber: 15
                            }, this)
                        }, biz.id, false, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 474,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                    lineNumber: 472,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                lineNumber: 464,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Top Rated",
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1 text-[13px] font-medium text-gray-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 543,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Best first"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 544,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                    lineNumber: 542,
                    columnNumber: 11
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 overflow-x-auto px-4 pb-1 snap-x snap-mandatory scrollbar-hide",
                    children: topRated.map((biz, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            custom: i,
                            variants: fadeUp,
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: {
                                once: true
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/store/${biz.storeId}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileTap: {
                                        scale: 0.96
                                    },
                                    className: "w-[150px] flex-shrink-0 snap-start bg-white rounded-[18px] shadow-sm shadow-black/[0.06] p-3.5 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold text-white mb-2",
                                            style: {
                                                backgroundColor: i === 0 ? "#F59E0B" : i === 1 ? "#94A3B8" : i === 2 ? "#D97706" : category.color
                                            },
                                            children: i + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                            lineNumber: 564,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br ${biz.coverGradient} flex items-center justify-center mb-2`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl",
                                                children: biz.logoEmoji
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                lineNumber: 572,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                            lineNumber: 571,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[13px] font-semibold text-gray-900 truncate mb-1",
                                            children: biz.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                            lineNumber: 575,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: "w-3.5 h-3.5 text-amber-400 fill-amber-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                    lineNumber: 578,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[13px] font-bold text-gray-800",
                                                    children: biz.rating
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                            lineNumber: 577,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-gray-400 mt-0.5",
                                            children: [
                                                biz.totalRatings,
                                                " ratings"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                            lineNumber: 581,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                    lineNumber: 559,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                lineNumber: 558,
                                columnNumber: 15
                            }, this)
                        }, biz.id, false, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 550,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                    lineNumber: 548,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                lineNumber: 539,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Recently Added",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 space-y-2.5",
                    children: recentlyAdded.map((biz, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            custom: i,
                            variants: fadeUp,
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: {
                                once: true
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/store/${biz.storeId}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    className: "flex items-center gap-3.5 bg-white rounded-2xl p-3.5 shadow-sm shadow-black/[0.04]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-10 h-10 rounded-xl bg-gradient-to-br ${biz.coverGradient} flex items-center justify-center flex-shrink-0`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        children: biz.logoEmoji
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                        lineNumber: 610,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mb-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-[14px] font-semibold text-gray-900 truncate",
                                                                    children: biz.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                                    lineNumber: 614,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex-shrink-0 inline-flex items-center gap-0.5 bg-green-50 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                            className: "w-3 h-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                                            lineNumber: 616,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        "New"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                                    lineNumber: 615,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                            lineNumber: 613,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[12px] text-gray-500",
                                                            children: [
                                                                biz.category,
                                                                " • ",
                                                                biz.area
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                            lineNumber: 620,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                            lineNumber: 608,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-[11px] text-gray-400 flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: biz.date
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                    lineNumber: 625,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                            lineNumber: 623,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                    lineNumber: 604,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                lineNumber: 603,
                                columnNumber: 15
                            }, this)
                        }, biz.id, false, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 595,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                    lineNumber: 593,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                lineNumber: 592,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Related Categories",
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-0.5 text-[13px] font-semibold",
                    style: {
                        color: category.color
                    },
                    children: [
                        "All ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 641,
                            columnNumber: 17
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                    lineNumber: 640,
                    columnNumber: 11
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 overflow-x-auto px-4 pb-1 snap-x snap-mandatory scrollbar-hide",
                    children: relatedCategories.map((rel, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            custom: i,
                            variants: fadeUp,
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: {
                                once: true
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/category/${rel.slug}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileTap: {
                                        scale: 0.92
                                    },
                                    className: "flex flex-col items-center gap-2 snap-start w-[72px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-14 h-14 rounded-full bg-gradient-to-br ${rel.gradient} flex items-center justify-center shadow-sm shadow-black/[0.08]`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl",
                                                children: rel.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                                lineNumber: 661,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                            lineNumber: 660,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-medium text-gray-600 text-center leading-tight line-clamp-2",
                                            children: rel.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                            lineNumber: 663,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                    lineNumber: 656,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                                lineNumber: 655,
                                columnNumber: 15
                            }, this)
                        }, rel.slug, false, {
                            fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                            lineNumber: 647,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                    lineNumber: 645,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                lineNumber: 637,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-8"
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
                lineNumber: 674,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/justdial/MobileCategoryLandingPage.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
_s(MobileCategoryLandingPage, "N8y5sXPEm8JY7OrwJAw2GhRbzxU=");
_c1 = MobileCategoryLandingPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "Section");
__turbopack_context__.k.register(_c1, "MobileCategoryLandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/justdial/DesktopCategoryLandingPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesktopCategoryLandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-client] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-listing-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/justdial/StoreCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* ── Fallback businesses when no listingSlug is available ──── */ function makeFallbackBusinesses(cat) {
    const areas = [
        "Connaught Place",
        "MG Road",
        "Sector 18",
        "Jubilee Hills",
        "Koramangala",
        "Andheri West"
    ];
    const names = [
        `${cat.label} Express`,
        `Premium ${cat.label} Hub`,
        `${cat.label} World`,
        `Elite ${cat.label} Center`,
        `Royal ${cat.label} Services`,
        `${cat.label} Masters`
    ];
    return names.map((name, i)=>({
            id: `fb-${cat.slug}-${i}`,
            storeId: `fb-${cat.slug}-${i}`,
            name,
            category: cat.label,
            area: areas[i % areas.length],
            rating: 3.8 + Math.random() * 1.2,
            totalRatings: 120 + Math.floor(Math.random() * 800),
            distance: (0.5 + Math.random() * 6).toFixed(1) + " km",
            priceRange: [
                "₹₹",
                "₹₹₹",
                "₹",
                "₹₹₹",
                "₹₹",
                "₹₹₹₹"
            ][i],
            logoEmoji: cat.emoji,
            coverGradient: cat.gradient,
            isOpen: i % 3 !== 0,
            isVerified: i % 2 === 0,
            isFeatured: i < 2,
            businessType: "service"
        }));
}
/* ── Popular Services stub data ─────────────────────────────── */ const popularServices = [
    {
        icon: "📋",
        name: "Standard Consultation",
        price: "₹499"
    },
    {
        icon: "⭐",
        name: "Premium Service",
        price: "₹999"
    },
    {
        icon: "🚀",
        name: "Express Service",
        price: "₹1,499"
    },
    {
        icon: "🛡️",
        name: "Complete Package",
        price: "₹2,499"
    },
    {
        icon: "🎯",
        name: "Custom Solution",
        price: "₹3,999"
    },
    {
        icon: "💡",
        name: "Expert Advice",
        price: "₹699"
    }
];
function DesktopCategoryLandingPage({ category }) {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const realBusinesses = category.listingSlug ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBusinessesByCategory"])(category.listingSlug) : [];
    const businesses = realBusinesses.length > 0 ? realBusinesses : makeFallbackBusinesses(category);
    const featured = businesses.filter((b)=>b.isFeatured).slice(0, 6);
    const topRated = [
        ...businesses
    ].sort((a, b)=>b.rating - a.rating).slice(0, 6);
    const relatedCategories = category.relatedSlugs.map((slug)=>{
        const parts = slug.split("-");
        const label = parts.map((p)=>p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
        return {
            slug,
            label,
            emoji: "📂",
            count: Math.floor(400 + Math.random() * 3000)
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center h-12 text-sm text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-1 hover:text-[#0056b3] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-3.5 h-3.5 mx-1.5 text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/categories",
                                className: "hover:text-[#0056b3] transition-colors",
                                children: "Categories"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-3.5 h-3.5 mx-1.5 text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-900 font-medium",
                                children: category.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl border border-gray-100 p-6 mt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-5 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-20 h-20 rounded-2xl flex items-center justify-center text-5xl shrink-0",
                                        style: {
                                            backgroundColor: category.bgLight
                                        },
                                        children: category.emoji
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl font-bold text-gray-900",
                                                children: category.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-sm mt-1.5 max-w-2xl leading-relaxed",
                                                children: category.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-5 mt-3 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1.5 text-gray-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                className: "w-4 h-4 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-gray-800",
                                                                children: category.businessCount.toLocaleString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            "businesses"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1.5 text-gray-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                                                className: "w-4 h-4 text-[#2563EB]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-gray-800",
                                                                children: category.verifiedCount.toLocaleString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            "verified"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: `Search in ${category.label}...`,
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                className: "pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3] transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Share"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                category.subCategories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold text-gray-800 mb-5",
                            children: "Popular Sub Categories"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-3",
                            children: category.subCategories.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/category/${category.slug}?sub=${sub.slug}`,
                                    className: "flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 hover:bg-gray-50 hover:border-gray-300 transition-colors group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base",
                                            children: sub.emoji
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                            lineNumber: 201,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-700 group-hover:text-[#0056b3] transition-colors",
                                            children: sub.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                            lineNumber: 202,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-400",
                                            children: [
                                                "(",
                                                sub.count.toLocaleString(),
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                            lineNumber: 205,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, sub.slug, true, {
                                    fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                    lineNumber: 196,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                    lineNumber: 190,
                    columnNumber: 11
                }, this),
                featured.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold text-gray-800",
                                    children: "Featured Businesses"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                    lineNumber: 218,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: category.listingSlug ? `/listings?category=${category.listingSlug}` : "#",
                                    className: "flex items-center gap-1 text-sm font-medium text-[#0056b3] hover:underline",
                                    children: [
                                        "View All",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                            lineNumber: 217,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                            children: featured.map((biz)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BusinessCard, {
                                    business: biz
                                }, biz.id, false, {
                                    fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                    lineNumber: 235,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                    lineNumber: 216,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold text-gray-800 mb-5",
                            children: "Popular Services"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-4",
                            children: popularServices.map((svc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    name: svc.name,
                                    category: category.label,
                                    logoEmoji: svc.icon,
                                    coverGradient: category.gradient,
                                    price: svc.price,
                                    storeId: `svc-${category.slug}-${i}`,
                                    variant: "desktop",
                                    index: i,
                                    isFeatured: false,
                                    isVerified: false
                                }, svc.name, false, {
                                    fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                    lineNumber: 248,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold text-gray-800 mb-5",
                            children: "Top Rated"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                            children: topRated.map((biz, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/store/${biz.storeId}`,
                                    className: "flex items-center gap-4 bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold text-white shrink-0",
                                            style: {
                                                backgroundColor: idx === 0 ? "#F59E0B" : idx === 1 ? "#9CA3AF" : idx === 2 ? "#CD7F32" : category.color
                                            },
                                            children: [
                                                "#",
                                                idx + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-gray-800 truncate group-hover:text-[#0056b3] transition-colors",
                                                    children: biz.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1 text-xs",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                    className: "w-3.5 h-3.5 text-amber-500 fill-amber-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                                                    lineNumber: 296,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-gray-800",
                                                                    children: biz.rating.toFixed(1)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                                                    lineNumber: 297,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-400",
                                                            children: [
                                                                "(",
                                                                biz.totalRatings.toLocaleString(),
                                                                " reviews)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                                            lineNumber: 301,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this),
                                        biz.isVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                            className: "w-5 h-5 text-[#2563EB] shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                            lineNumber: 307,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, biz.id, true, {
                                    fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                    lineNumber: 270,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                    lineNumber: 266,
                    columnNumber: 9
                }, this),
                relatedCategories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-8 pb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold text-gray-800 mb-5",
                            children: "Explore Related Categories"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                            lineNumber: 317,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4",
                            children: relatedCategories.map((rel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/category/${rel.slug}`,
                                    className: "flex flex-col items-center gap-2.5 bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-xl flex items-center justify-center text-2xl",
                                            style: {
                                                backgroundColor: category.bgLight
                                            },
                                            children: rel.emoji
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                            lineNumber: 327,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-gray-700 text-center group-hover:text-[#0056b3] transition-colors leading-tight",
                                            children: rel.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                            lineNumber: 333,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400",
                                            children: [
                                                rel.count.toLocaleString(),
                                                " businesses"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                            lineNumber: 336,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, rel.slug, true, {
                                    fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                                    lineNumber: 322,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                            lineNumber: 320,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
                    lineNumber: 316,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(DesktopCategoryLandingPage, "4/Qdl0R3tQNJqUS4eMrvY/uMU/4=");
_c = DesktopCategoryLandingPage;
/* ── Business Card Sub-component ───────────────────────────── */ function BusinessCard({ business }) {
    // Unified card design — matches home page "Featured Stores" template.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        name: business.name,
        category: business.category,
        rating: business.rating,
        reviews: business.totalRatings,
        distance: business.distance,
        address: business.area,
        logoEmoji: business.logoEmoji,
        coverGradient: business.coverGradient,
        storeId: business.storeId,
        isFeatured: business.isFeatured,
        isOpen: business.isOpen,
        isVerified: business.isVerified,
        variant: "desktop",
        fluid: true
    }, void 0, false, {
        fileName: "[project]/src/components/justdial/DesktopCategoryLandingPage.tsx",
        lineNumber: 354,
        columnNumber: 5
    }, this);
}
_c1 = BusinessCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "DesktopCategoryLandingPage");
__turbopack_context__.k.register(_c1, "BusinessCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/category/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$category$2d$landing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/category-landing-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$MobileCategoryLandingPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/justdial/MobileCategoryLandingPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$DesktopCategoryLandingPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/justdial/DesktopCategoryLandingPage.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function subscribeToResize(callback) {
    window.addEventListener("resize", callback);
    return ()=>window.removeEventListener("resize", callback);
}
function getSnapshot() {
    return window.innerWidth;
}
function getServerSnapshot() {
    return 1024;
}
function CategoryContent() {
    _s();
    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribeToResize, getSnapshot, getServerSnapshot);
    const isMobile = width < 768;
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const slug = params.slug;
    const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$category$2d$landing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategoryLanding"])(slug);
    if (!category) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-6xl mb-4",
                        children: "\ud83d\udd0d"
                    }, void 0, false, {
                        fileName: "[project]/src/app/category/[slug]/page.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold text-gray-800",
                        children: "Category Not Found"
                    }, void 0, false, {
                        fileName: "[project]/src/app/category/[slug]/page.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400 mt-1",
                        children: "The category you're looking for doesn't exist."
                    }, void 0, false, {
                        fileName: "[project]/src/app/category/[slug]/page.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        className: "inline-block mt-4 text-sm font-medium text-[#0056b3] hover:underline",
                        children: [
                            "\u2190",
                            " Back to Home"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/category/[slug]/page.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/category/[slug]/page.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/category/[slug]/page.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this);
    }
    if (isMobile) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$MobileCategoryLandingPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        category: category
    }, void 0, false, {
        fileName: "[project]/src/app/category/[slug]/page.tsx",
        lineNumber: 37,
        columnNumber: 24
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$DesktopCategoryLandingPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        category: category
    }, void 0, false, {
        fileName: "[project]/src/app/category/[slug]/page.tsx",
        lineNumber: 38,
        columnNumber: 10
    }, this);
}
_s(CategoryContent, "/YYns0t5CYE1/a6mvm3jvlZoPwA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = CategoryContent;
function CategoryPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: null,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryContent, {}, void 0, false, {
            fileName: "[project]/src/app/category/[slug]/page.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/category/[slug]/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c1 = CategoryPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "CategoryContent");
__turbopack_context__.k.register(_c1, "CategoryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_911699b8._.js.map