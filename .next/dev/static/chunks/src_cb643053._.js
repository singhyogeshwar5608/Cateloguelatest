(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/service-category-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllServiceProviders",
    ()=>getAllServiceProviders,
    "getCategorizedProviders",
    ()=>getCategorizedProviders,
    "getServiceCategory",
    ()=>getServiceCategory,
    "getServiceProviderById",
    ()=>getServiceProviderById,
    "getServiceProviders",
    ()=>getServiceProviders,
    "serviceCategories",
    ()=>serviceCategories
]);
const serviceCategories = [
    {
        slug: "ac-repair",
        label: "AC Repair",
        icon: "🔧",
        description: "Expert AC repair, installation, gas refilling & servicing at your doorstep",
        color: "#2563EB"
    },
    {
        slug: "painters",
        label: "Painters",
        icon: "🎨",
        description: "Professional wall painting, exterior finishing & waterproofing",
        color: "#059669"
    },
    {
        slug: "pest-control",
        label: "Pest Control",
        icon: "🐛",
        description: "Termite control, cockroach treatment, bed bug removal & fumigation",
        color: "#DC2626"
    },
    {
        slug: "plumbers",
        label: "Plumbers",
        icon: "🔧",
        description: "Pipe fitting, leakage repair, bathroom plumbing & water heater installation",
        color: "#0891B2"
    },
    {
        slug: "carpenters",
        label: "Carpenters",
        icon: "🪚",
        description: "Custom furniture, wood repair, modular kitchen & wardrobe installation",
        color: "#D97706"
    },
    {
        slug: "electricians",
        label: "Electricians",
        icon: "⚡",
        description: "Wiring, switchboard repair, fan installation & electrical safety inspection",
        color: "#7C3AED"
    },
    {
        slug: "salons-at-home",
        label: "Salons at Home",
        icon: "💇",
        description: "Home salon services: hair, facial, manicure, pedicure & bridal makeup",
        color: "#EC4899"
    },
    {
        slug: "deep-cleaning",
        label: "Deep Cleaning",
        icon: "✨",
        description: "Deep home cleaning, kitchen cleaning, bathroom sanitization & sofa cleaning",
        color: "#F59E0B"
    }
];
function makeProvider(base) {
    return {
        ...base,
        address: `Shop No. 45, ${base.area}, Mumbai - 4000${String(Math.abs(base.id.split("").reduce((a, c)=>a + c.charCodeAt(0), 0) % 90) + 10).padStart(2, "0")}`,
        coverColor: base.coverColor || "from-blue-500 to-blue-700",
        verified: base.verified ?? true,
        totalRatings: base.totalRatings || "2,847",
        totalReviews: base.totalReviews || "1,256",
        city: base.city || "Mumbai",
        phone: base.phone || "+91 " + String(9000000000 + (base.id.charCodeAt(0) * 111 + base.id.charCodeAt(1) * 37 + base.id.charCodeAt(2) * 7) % 999999999),
        yearsInBusiness: base.yearsInBusiness || "5+",
        description: base.description || `Professional ${base.category} service provider in ${base.area}, Mumbai. Trusted by hundreds of customers for reliable and affordable ${base.subCategory.toLowerCase()} services.`,
        timing: base.timing || "8:00 AM - 9:00 PM",
        timingNote: base.timingNote || "Open all 7 days",
        paymentMethods: base.paymentMethods || [
            "Cash",
            "UPI",
            "Card"
        ],
        amenities: base.amenities || [
            "Home Visit",
            "Verified Professional",
            "Background Checked"
        ],
        services: base.services || [],
        reviews: base.reviews || [],
        photos: base.photos || [],
        products: base.products || [],
        views: base.views || "12,450",
        followers: base.followers || "680",
        likes: base.likes || "412",
        similarStores: base.similarStores || []
    };
}
// ── Provider Data ──────────────────────────────────────────────────
const allProviders = [
    // ─── AC Repair ─────────────────────────────────────────────────
    makeProvider({
        id: "ac-repair-expert-mumbai",
        name: "AC Repair Expert Mumbai",
        category: "AC Repair",
        subCategory: "AC Repair • Installation • Gas Refilling",
        logoEmoji: "🌀",
        area: "Andheri West",
        rating: "4.6",
        priceRange: "₹499 - ₹1,499",
        totalRatings: "3,241",
        totalReviews: "1,487",
        phone: "+91 98765 43210",
        yearsInBusiness: "8+",
        views: "45,200",
        followers: "1,820",
        likes: "1,340",
        services: [
            {
                name: "AC Gas Refilling",
                price: "₹999",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "AC Installation",
                price: "₹1,499",
                popular: true,
                duration: "2-3 hrs"
            },
            {
                name: "AC Deep Cleaning",
                price: "₹599",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "Annual Maintenance Contract",
                price: "₹2,999",
                duration: "4 visits/year"
            }
        ],
        reviews: [
            {
                id: "acr1",
                name: "Rajesh Kumar",
                avatar: "RK",
                rating: 5,
                date: "3 days ago",
                text: "Excellent AC repair service! Very professional and punctual. Will definitely use again.",
                helpful: 24
            },
            {
                id: "acr2",
                name: "Priya Nair",
                avatar: "PN",
                rating: 4,
                date: "1 week ago",
                text: "Good service at reasonable price. The professional was well-trained and cleaned up after work.",
                helpful: 18
            }
        ]
    }),
    makeProvider({
        id: "coolair-services",
        name: "CoolAir Services",
        category: "AC Repair",
        subCategory: "AC Repair • Servicing • Installation",
        logoEmoji: "❄️",
        area: "Bandra West",
        rating: "4.8",
        priceRange: "₹399 - ₹1,299",
        totalRatings: "4,102",
        totalReviews: "2,011",
        phone: "+91 99876 54321",
        yearsInBusiness: "12+",
        views: "52,800",
        followers: "2,150",
        likes: "1,620",
        services: [
            {
                name: "AC Servicing & Cleaning",
                price: "₹399",
                popular: true,
                duration: "1 hr"
            },
            {
                name: "AC Gas Top-up",
                price: "₹899",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "AC Repair (General)",
                price: "₹699",
                duration: "1-2 hrs"
            },
            {
                name: "Split AC Installation",
                price: "₹1,299",
                popular: true,
                duration: "2-3 hrs"
            }
        ],
        reviews: [
            {
                id: "ca1",
                name: "Amit Shah",
                avatar: "AS",
                rating: 5,
                date: "2 days ago",
                text: "Best AC service in Bandra! They arrived on time and fixed the issue within an hour. Highly recommended.",
                helpful: 31
            },
            {
                id: "ca2",
                name: "Sneha Desai",
                avatar: "SD",
                rating: 5,
                date: "5 days ago",
                text: "Very professional team. They explained the problem clearly and charged a fair price.",
                helpful: 22
            }
        ]
    }),
    makeProvider({
        id: "quick-ac-fix",
        name: "Quick AC Fix",
        category: "AC Repair",
        subCategory: "AC Repair • Gas Refilling • Deep Clean",
        logoEmoji: "🔧",
        area: "Goregaon",
        rating: "4.4",
        priceRange: "₹299 - ₹999",
        totalRatings: "1,876",
        totalReviews: "892",
        phone: "+91 91234 56789",
        yearsInBusiness: "4+",
        views: "28,300",
        followers: "980",
        likes: "670",
        services: [
            {
                name: "Basic AC Service",
                price: "₹299",
                popular: true,
                duration: "45 min"
            },
            {
                name: "AC Deep Cleaning",
                price: "₹599",
                duration: "2 hrs"
            },
            {
                name: "Gas Refilling (R32)",
                price: "₹799",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "AC PCB Repair",
                price: "₹999",
                duration: "2-3 hrs"
            }
        ],
        reviews: [
            {
                id: "qa1",
                name: "Vikram Patel",
                avatar: "VP",
                rating: 5,
                date: "1 day ago",
                text: "Quick response and affordable pricing. Got my AC fixed the same day I called.",
                helpful: 19
            },
            {
                id: "qa2",
                name: "Meera Joshi",
                avatar: "MJ",
                rating: 4,
                date: "4 days ago",
                text: "Decent service. The technician was knowledgeable but arrived 30 minutes late.",
                helpful: 11
            }
        ]
    }),
    makeProvider({
        id: "shree-ac-repair",
        name: "Shree AC Repair",
        category: "AC Repair",
        subCategory: "AC Repair • Installation • AMC",
        logoEmoji: "🏠",
        area: "Malad West",
        rating: "4.5",
        priceRange: "₹449 - ₹1,199",
        totalRatings: "2,543",
        totalReviews: "1,104",
        phone: "+91 93456 78901",
        yearsInBusiness: "7+",
        views: "36,100",
        followers: "1,340",
        likes: "920",
        services: [
            {
                name: "Window AC Service",
                price: "₹449",
                popular: true,
                duration: "1 hr"
            },
            {
                name: "Split AC Service",
                price: "₹599",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "AC Uninstallation",
                price: "₹499",
                duration: "1 hr"
            },
            {
                name: "Annual AMC Plan",
                price: "₹1,199",
                duration: "4 visits/year"
            }
        ],
        reviews: [
            {
                id: "sh1",
                name: "Suresh Menon",
                avatar: "SM",
                rating: 4,
                date: "6 days ago",
                text: "Reliable AC repair service in Malad. They have been servicing my ACs for 3 years now.",
                helpful: 16
            },
            {
                id: "sh2",
                name: "Kavita Rao",
                avatar: "KR",
                rating: 5,
                date: "1 week ago",
                text: "Great value for money. The AMC plan is worth every penny.",
                helpful: 13
            }
        ]
    }),
    makeProvider({
        id: "mumbai-ac-solutions",
        name: "Mumbai AC Solutions",
        category: "AC Repair",
        subCategory: "AC Repair • Installation • Duct Cleaning",
        logoEmoji: "🌡️",
        area: "Kandivali",
        rating: "4.7",
        priceRange: "₹599 - ₹1,799",
        totalRatings: "3,890",
        totalReviews: "1,756",
        phone: "+91 95678 90123",
        yearsInBusiness: "10+",
        views: "48,500",
        followers: "1,980",
        likes: "1,470",
        services: [
            {
                name: "Comprehensive AC Service",
                price: "₹599",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "AC Duct Cleaning",
                price: "₹1,299",
                duration: "3-4 hrs"
            },
            {
                name: "Inverter AC Repair",
                price: "₹899",
                popular: true,
                duration: "2 hrs"
            },
            {
                name: "Cassette AC Installation",
                price: "₹1,799",
                duration: "3-4 hrs"
            }
        ],
        reviews: [
            {
                id: "ma1",
                name: "Deepak Verma",
                avatar: "DV",
                rating: 5,
                date: "2 days ago",
                text: "Top-notch service! They handled my inverter AC repair with great expertise.",
                helpful: 28
            },
            {
                id: "ma2",
                name: "Anjali Iyer",
                avatar: "AI",
                rating: 4,
                date: "1 week ago",
                text: "Very professional and thorough. The duct cleaning made a huge difference in air quality.",
                helpful: 20
            }
        ]
    }),
    makeProvider({
        id: "cooling-master",
        name: "Cooling Master AC",
        category: "AC Repair",
        subCategory: "AC Repair • Gas Refilling • Servicing",
        logoEmoji: "❄️",
        area: "Juhu",
        rating: "4.3",
        priceRange: "₹349 - ₹1,099",
        totalRatings: "1,654",
        totalReviews: "743",
        phone: "+91 97890 12345",
        yearsInBusiness: "3+",
        views: "22,700",
        followers: "820",
        likes: "540",
        services: [
            {
                name: "AC Filter Cleaning",
                price: "₹349",
                popular: true,
                duration: "30 min"
            },
            {
                name: "AC Gas Refill (R410a)",
                price: "₹899",
                duration: "1-2 hrs"
            },
            {
                name: "AC Coil Cleaning",
                price: "₹549",
                popular: true,
                duration: "1 hr"
            },
            {
                name: "AC Leak Repair",
                price: "₹1,099",
                duration: "2-3 hrs"
            }
        ],
        reviews: [
            {
                id: "cm1",
                name: "Rahul Deshmukh",
                avatar: "RD",
                rating: 4,
                date: "3 days ago",
                text: "Affordable and quick service. Got my AC cooling perfectly in no time.",
                helpful: 14
            },
            {
                id: "cm2",
                name: "Pooja Sharma",
                avatar: "PS",
                rating: 4,
                date: "5 days ago",
                text: "Good service. Could improve on punctuality but the work quality is solid.",
                helpful: 9
            }
        ]
    }),
    // ─── Painters ──────────────────────────────────────────────────
    makeProvider({
        id: "colorcraft-painters",
        name: "ColorCraft Painters",
        category: "Painters",
        subCategory: "Interior Painting • Exterior Finishing",
        logoEmoji: "🎨",
        area: "Andheri East",
        rating: "4.5",
        priceRange: "₹8,999 - ₹25,000",
        totalRatings: "2,312",
        totalReviews: "1,087",
        phone: "+91 98123 45678",
        yearsInBusiness: "9+",
        views: "31,400",
        followers: "1,120",
        likes: "830",
        services: [
            {
                name: "Single Room Painting",
                price: "₹8,999",
                popular: true,
                duration: "1-2 days"
            },
            {
                name: "Full Home Interior",
                price: "₹25,000",
                popular: true,
                duration: "5-7 days"
            },
            {
                name: "Exterior Painting",
                price: "₹18,000",
                duration: "4-6 days"
            },
            {
                name: "Waterproofing",
                price: "₹12,000",
                duration: "2-3 days"
            }
        ],
        reviews: [
            {
                id: "cc1",
                name: "Sanjay Gupta",
                avatar: "SG",
                rating: 5,
                date: "4 days ago",
                text: "ColorCraft did an amazing job with our 2BHK flat. Clean work and on-time delivery.",
                helpful: 21
            },
            {
                id: "cc2",
                name: "Nisha Kulkarni",
                avatar: "NK",
                rating: 4,
                date: "1 week ago",
                text: "Good painting service. The team was courteous and finished within the promised timeline.",
                helpful: 15
            }
        ]
    }),
    makeProvider({
        id: "asian-paints-service",
        name: "Asian Paints Service",
        category: "Painters",
        subCategory: "Interior • Exterior • Waterproofing",
        logoEmoji: "🖌️",
        area: "Bandra",
        rating: "4.7",
        priceRange: "₹12,000 - ₹35,000",
        totalRatings: "3,567",
        totalReviews: "1,689",
        phone: "+91 99234 56789",
        yearsInBusiness: "15+",
        views: "55,200",
        followers: "2,340",
        likes: "1,780",
        services: [
            {
                name: "Premium Interior Painting (2BHK)",
                price: "₹18,000",
                popular: true,
                duration: "4-5 days"
            },
            {
                name: "Luxury Texture Painting",
                price: "₹35,000",
                duration: "7-10 days"
            },
            {
                name: "Exterior Weather Shield",
                price: "₹22,000",
                popular: true,
                duration: "5-7 days"
            },
            {
                name: "Bathroom Waterproofing",
                price: "₹12,000",
                duration: "2-3 days"
            }
        ],
        reviews: [
            {
                id: "ap1",
                name: "Arvind Mehta",
                avatar: "AM",
                rating: 5,
                date: "1 day ago",
                text: "Authorized Asian Paints dealer — the quality of paint and finish is unmatched. Absolutely love the texture work!",
                helpful: 34
            },
            {
                id: "ap2",
                name: "Swati Bhatt",
                avatar: "SB",
                rating: 5,
                date: "3 days ago",
                text: "Professional team, clean workspace, and beautiful results. Worth every rupee.",
                helpful: 26
            }
        ]
    }),
    makeProvider({
        id: "perfect-finish-painters",
        name: "Perfect Finish",
        category: "Painters",
        subCategory: "Wall Painting • Wallpaper • Texture",
        logoEmoji: "🏗️",
        area: "Goregaon",
        rating: "4.4",
        priceRange: "₹7,999 - ₹22,000",
        totalRatings: "1,678",
        totalReviews: "756",
        phone: "+91 91345 67890",
        yearsInBusiness: "5+",
        views: "24,800",
        followers: "890",
        likes: "610",
        services: [
            {
                name: "Single Wall Accent",
                price: "₹7,999",
                popular: true,
                duration: "1 day"
            },
            {
                name: "Full Room Makeover",
                price: "₹15,000",
                duration: "2-3 days"
            },
            {
                name: "Full Home Painting",
                price: "₹22,000",
                popular: true,
                duration: "5-6 days"
            },
            {
                name: "Wallpaper Installation",
                price: "₹10,000",
                duration: "1-2 days"
            }
        ],
        reviews: [
            {
                id: "pf1",
                name: "Manish Tiwari",
                avatar: "MT",
                rating: 4,
                date: "5 days ago",
                text: "Good quality work at competitive prices. The accent wall looks fantastic.",
                helpful: 12
            },
            {
                id: "pf2",
                name: "Ritu Agarwal",
                avatar: "RA",
                rating: 5,
                date: "1 week ago",
                text: "They helped us choose the perfect color combination. Very creative team!",
                helpful: 17
            }
        ]
    }),
    makeProvider({
        id: "sharma-painters",
        name: "Sharma Painters",
        category: "Painters",
        subCategory: "Interior Painting • Wood Polishing",
        logoEmoji: "🎨",
        area: "Malad",
        rating: "4.6",
        priceRange: "₹9,999 - ₹28,000",
        totalRatings: "2,456",
        totalReviews: "1,123",
        phone: "+91 92456 78901",
        yearsInBusiness: "11+",
        views: "38,100",
        followers: "1,560",
        likes: "1,180",
        services: [
            {
                name: "2BHK Complete Painting",
                price: "₹16,000",
                popular: true,
                duration: "4-5 days"
            },
            {
                name: "3BHK Complete Painting",
                price: "₹28,000",
                popular: true,
                duration: "6-8 days"
            },
            {
                name: "Wood Polishing & Painting",
                price: "₹9,999",
                duration: "2-3 days"
            },
            {
                name: "Pop & Ceiling Work",
                price: "₹14,000",
                duration: "3-4 days"
            }
        ],
        reviews: [
            {
                id: "sp1",
                name: "Rakesh Soni",
                avatar: "RS",
                rating: 5,
                date: "2 days ago",
                text: "Sharma Painters have painted 3 of my properties. Consistent quality every single time.",
                helpful: 23
            },
            {
                id: "sp2",
                name: "Divya Reddy",
                avatar: "DR",
                rating: 4,
                date: "6 days ago",
                text: "Great wood polishing work. The furniture looks brand new after their treatment.",
                helpful: 14
            }
        ]
    }),
    makeProvider({
        id: "rainbow-painting-co",
        name: "Rainbow Painting Co",
        category: "Painters",
        subCategory: "Interior • Exterior • Industrial",
        logoEmoji: "🌈",
        area: "Kandivali",
        rating: "4.3",
        priceRange: "₹10,000 - ₹30,000",
        totalRatings: "1,432",
        totalReviews: "634",
        phone: "+91 93567 89012",
        yearsInBusiness: "6+",
        views: "21,500",
        followers: "760",
        likes: "490",
        services: [
            {
                name: "1BHK Painting Package",
                price: "₹10,000",
                popular: true,
                duration: "2-3 days"
            },
            {
                name: "2BHK Painting Package",
                price: "₹18,000",
                duration: "4-5 days"
            },
            {
                name: "Exterior Facelift",
                price: "₹30,000",
                duration: "6-8 days"
            },
            {
                name: "Commercial Space Painting",
                price: "₹25,000",
                duration: "5-7 days"
            }
        ],
        reviews: [
            {
                id: "rp1",
                name: "Prakash Jha",
                avatar: "PJ",
                rating: 4,
                date: "4 days ago",
                text: "Decent work for the price. They completed my 1BHK in just 2 days.",
                helpful: 10
            },
            {
                id: "rp2",
                name: "Tanvi Nadkar",
                avatar: "TN",
                rating: 4,
                date: "1 week ago",
                text: "Reliable and affordable. Good option for budget painting needs.",
                helpful: 8
            }
        ]
    }),
    makeProvider({
        id: "premium-wall-art",
        name: "Premium Wall Art",
        category: "Painters",
        subCategory: "Designer Walls • Murals • Textures",
        logoEmoji: "✨",
        area: "Juhu",
        rating: "4.8",
        priceRange: "₹15,000 - ₹45,000",
        totalRatings: "2,890",
        totalReviews: "1,345",
        phone: "+91 94678 90123",
        yearsInBusiness: "13+",
        views: "42,300",
        followers: "1,870",
        likes: "1,440",
        services: [
            {
                name: "Feature Wall Design",
                price: "₹15,000",
                popular: true,
                duration: "1-2 days"
            },
            {
                name: "Custom Mural Painting",
                price: "₹35,000",
                duration: "3-5 days"
            },
            {
                name: "Full Home Designer Finish",
                price: "₹45,000",
                popular: true,
                duration: "8-12 days"
            },
            {
                name: "Kids Room Theme Painting",
                price: "₹18,000",
                duration: "2-3 days"
            }
        ],
        reviews: [
            {
                id: "pw1",
                name: "Karan Malhotra",
                avatar: "KM",
                rating: 5,
                date: "1 day ago",
                text: "Absolutely stunning mural work! They transformed our living room into a work of art.",
                helpful: 36
            },
            {
                id: "pw2",
                name: "Isha Banerjee",
                avatar: "IB",
                rating: 5,
                date: "3 days ago",
                text: "The kids room theme painting is magical. My children love their new room!",
                helpful: 29
            }
        ]
    }),
    // ─── Pest Control ──────────────────────────────────────────────
    makeProvider({
        id: "pestkill-solutions",
        name: "PestKill Solutions",
        category: "Pest Control",
        subCategory: "Termite Control • Cockroach Treatment",
        logoEmoji: "🛡️",
        area: "Andheri",
        rating: "4.6",
        priceRange: "₹799 - ₹2,999",
        totalRatings: "2,987",
        totalReviews: "1,345",
        phone: "+91 98234 56789",
        yearsInBusiness: "8+",
        views: "34,600",
        followers: "1,230",
        likes: "890",
        services: [
            {
                name: "Cockroach Control (1BHK)",
                price: "₹799",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "Full Home Termite Treatment",
                price: "₹2,999",
                popular: true,
                duration: "4-6 hrs"
            },
            {
                name: "Bed Bug Treatment",
                price: "₹1,499",
                duration: "2-3 hrs"
            },
            {
                name: "Ant & Spider Control",
                price: "₹999",
                duration: "1-2 hrs"
            }
        ],
        reviews: [
            {
                id: "pk1",
                name: "Nikhil Shah",
                avatar: "NS",
                rating: 5,
                date: "2 days ago",
                text: "Completely eliminated the termite problem in my flat. Very thorough treatment.",
                helpful: 22
            },
            {
                id: "pk2",
                name: "Pallavi Dave",
                avatar: "PD",
                rating: 4,
                date: "5 days ago",
                text: "Effective cockroach treatment. No pests seen since the service.",
                helpful: 16
            }
        ]
    }),
    makeProvider({
        id: "godrej-pest-control",
        name: "Godrej Pest Control",
        category: "Pest Control",
        subCategory: "Pest Control • Fumigation • Sanitization",
        logoEmoji: "🏢",
        area: "Bandra",
        rating: "4.8",
        priceRange: "₹999 - ₹3,499",
        totalRatings: "4,234",
        totalReviews: "2,012",
        phone: "+91 99345 67890",
        yearsInBusiness: "20+",
        views: "58,900",
        followers: "2,450",
        likes: "1,890",
        services: [
            {
                name: "General Pest Control (1BHK)",
                price: "₹999",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "Termite Control (2BHK)",
                price: "₹2,499",
                popular: true,
                duration: "4-5 hrs"
            },
            {
                name: "Complete Fumigation",
                price: "₹3,499",
                duration: "6-8 hrs"
            },
            {
                name: "Mosquito Control Treatment",
                price: "₹1,299",
                duration: "1-2 hrs"
            }
        ],
        reviews: [
            {
                id: "gc1",
                name: "Harsh Parekh",
                avatar: "HP",
                rating: 5,
                date: "1 day ago",
                text: "Godrej brand trust plus excellent service. Our office has been pest-free for 6 months now.",
                helpful: 38
            },
            {
                id: "gc2",
                name: "Sunita Chauhan",
                avatar: "SC",
                rating: 5,
                date: "4 days ago",
                text: "Most professional pest control service I have used. They explain everything clearly.",
                helpful: 27
            }
        ]
    }),
    makeProvider({
        id: "quick-pest-eliminator",
        name: "Quick Pest Eliminator",
        category: "Pest Control",
        subCategory: "Pest Control • Bed Bug Removal",
        logoEmoji: "🪳",
        area: "Goregaon",
        rating: "4.4",
        priceRange: "₹699 - ₹2,499",
        totalRatings: "1,567",
        totalReviews: "698",
        phone: "+91 91456 78901",
        yearsInBusiness: "4+",
        views: "19,800",
        followers: "720",
        likes: "480",
        services: [
            {
                name: "Single Room Treatment",
                price: "₹699",
                popular: true,
                duration: "1 hr"
            },
            {
                name: "Bed Bug Extermination",
                price: "₹1,799",
                duration: "3-4 hrs"
            },
            {
                name: "Full Flat Pest Control",
                price: "₹2,499",
                popular: true,
                duration: "3-4 hrs"
            },
            {
                name: "Rodent Control",
                price: "₹999",
                duration: "2 hrs"
            }
        ],
        reviews: [
            {
                id: "qe1",
                name: "Avinash Kulkarni",
                avatar: "AK",
                rating: 4,
                date: "3 days ago",
                text: "Quick and effective bed bug treatment. Much better than what I expected at this price.",
                helpful: 13
            },
            {
                id: "qe2",
                name: "Neeta Pawar",
                avatar: "NP",
                rating: 4,
                date: "1 week ago",
                text: "Good service for the money. The technician was polite and professional.",
                helpful: 10
            }
        ]
    }),
    makeProvider({
        id: "mumbai-pest-control",
        name: "Mumbai Pest Control",
        category: "Pest Control",
        subCategory: "Pest Control • Termite • Cockroach",
        logoEmoji: "🛡️",
        area: "Malad",
        rating: "4.5",
        priceRange: "₹899 - ₹2,799",
        totalRatings: "2,123",
        totalReviews: "967",
        phone: "+91 92567 89012",
        yearsInBusiness: "7+",
        views: "29,400",
        followers: "1,050",
        likes: "740",
        services: [
            {
                name: "Cockroach Gel Treatment",
                price: "₹899",
                popular: true,
                duration: "45 min"
            },
            {
                name: "Termite Pre-construction",
                price: "₹2,799",
                duration: "Full day"
            },
            {
                name: "2BHK Complete Treatment",
                price: "₹1,999",
                popular: true,
                duration: "3-4 hrs"
            },
            {
                name: "Wood Borer Treatment",
                price: "₹1,499",
                duration: "2-3 hrs"
            }
        ],
        reviews: [
            {
                id: "mp1",
                name: "Dinesh Patil",
                avatar: "DP",
                rating: 5,
                date: "2 days ago",
                text: "Very effective cockroach treatment. The gel method is clean and works great.",
                helpful: 18
            },
            {
                id: "mp2",
                name: "Shalini Kapoor",
                avatar: "SK",
                rating: 4,
                date: "6 days ago",
                text: "Good service for my 2BHK flat. They covered all areas thoroughly.",
                helpful: 12
            }
        ]
    }),
    makeProvider({
        id: "herbal-pest-care",
        name: "Herbal Pest Care",
        category: "Pest Control",
        subCategory: "Organic Pest Control • Herbal Treatment",
        logoEmoji: "🌿",
        area: "Kandivali",
        rating: "4.3",
        priceRange: "₹1,099 - ₹3,999",
        totalRatings: "1,345",
        totalReviews: "589",
        phone: "+91 93678 90123",
        yearsInBusiness: "5+",
        views: "17,600",
        followers: "640",
        likes: "410",
        services: [
            {
                name: "Herbal Cockroach Control",
                price: "₹1,099",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "Organic Termite Treatment",
                price: "₹3,999",
                duration: "5-6 hrs"
            },
            {
                name: "Herbal Mosquito Control",
                price: "₹1,499",
                duration: "1-2 hrs"
            },
            {
                name: "Baby-Safe Pest Control",
                price: "₹2,499",
                popular: true,
                duration: "2-3 hrs"
            }
        ],
        reviews: [
            {
                id: "hp1",
                name: "Meghna Rastogi",
                avatar: "MR",
                rating: 5,
                date: "4 days ago",
                text: "Love that they use herbal products! Safe for my toddler and pets. Great concept.",
                helpful: 20
            },
            {
                id: "hp2",
                name: "Sunil Bhosle",
                avatar: "SB",
                rating: 4,
                date: "1 week ago",
                text: "Effective and eco-friendly. Slightly more expensive but worth it for safety.",
                helpful: 14
            }
        ]
    }),
    makeProvider({
        id: "total-pest-solutions",
        name: "Total Pest Solutions",
        category: "Pest Control",
        subCategory: "Pest Control • Fumigation • Rodent",
        logoEmoji: "🪳",
        area: "Juhu",
        rating: "4.7",
        priceRange: "₹999 - ₹3,299",
        totalRatings: "3,456",
        totalReviews: "1,578",
        phone: "+91 94789 01234",
        yearsInBusiness: "12+",
        views: "41,200",
        followers: "1,680",
        likes: "1,230",
        services: [
            {
                name: "General Pest Control (2BHK)",
                price: "₹1,299",
                popular: true,
                duration: "2-3 hrs"
            },
            {
                name: "Termite Post-construction",
                price: "₹3,299",
                popular: true,
                duration: "5-7 hrs"
            },
            {
                name: "Rodent Control Package",
                price: "₹999",
                duration: "2 hrs"
            },
            {
                name: "Warehouse Fumigation",
                price: "₹2,499",
                duration: "4-6 hrs"
            }
        ],
        reviews: [
            {
                id: "tp1",
                name: "Ashok Jain",
                avatar: "AJ",
                rating: 5,
                date: "1 day ago",
                text: "Total Pest Solutions lives up to its name. Complete eradication of termites from our bungalow.",
                helpful: 30
            },
            {
                id: "tp2",
                name: "Rekha Menon",
                avatar: "RM",
                rating: 5,
                date: "3 days ago",
                text: "Very thorough fumigation service. They covered every nook and corner.",
                helpful: 22
            }
        ]
    }),
    // ─── Plumbers ──────────────────────────────────────────────────
    makeProvider({
        id: "quick-fix-plumbing",
        name: "Quick Fix Plumbing",
        category: "Plumbers",
        subCategory: "Pipe Repair • Leakage Fix • Installation",
        logoEmoji: "🔧",
        area: "Andheri West",
        rating: "4.5",
        priceRange: "₹399 - ₹1,499",
        totalRatings: "2,678",
        totalReviews: "1,234",
        phone: "+91 98345 67890",
        yearsInBusiness: "7+",
        views: "33,200",
        followers: "1,150",
        likes: "820",
        services: [
            {
                name: "Tap & Faucet Repair",
                price: "₹399",
                popular: true,
                duration: "30-60 min"
            },
            {
                name: "Pipe Leakage Repair",
                price: "₹799",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "Water Heater Installation",
                price: "₹1,499",
                duration: "2-3 hrs"
            },
            {
                name: "Bathroom Plumbing Overhaul",
                price: "₹1,299",
                duration: "3-4 hrs"
            }
        ],
        reviews: [
            {
                id: "qf1",
                name: "Vijay Sharma",
                avatar: "VS",
                rating: 5,
                date: "2 days ago",
                text: "Fixed a major pipe leakage in under an hour. Very skilled plumber!",
                helpful: 20
            },
            {
                id: "qf2",
                name: "Aarti Deshmukh",
                avatar: "AD",
                rating: 4,
                date: "5 days ago",
                text: "Reliable plumbing service. The water heater installation was done perfectly.",
                helpful: 15
            }
        ]
    }),
    makeProvider({
        id: "mumbai-plumber",
        name: "Mumbai Plumber",
        category: "Plumbers",
        subCategory: "Plumbing • Drain Cleaning • Fitting",
        logoEmoji: "🔩",
        area: "Bandra",
        rating: "4.7",
        priceRange: "₹499 - ₹1,799",
        totalRatings: "3,890",
        totalReviews: "1,823",
        phone: "+91 99456 78901",
        yearsInBusiness: "14+",
        views: "47,500",
        followers: "2,040",
        likes: "1,520",
        services: [
            {
                name: "Emergency Plumber Visit",
                price: "₹499",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "Drain Cleaning & Unblocking",
                price: "₹999",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "Full Bathroom Renovation Plumbing",
                price: "₹1,799",
                duration: "1-2 days"
            },
            {
                name: "Kitchen Sink & Pipeline Setup",
                price: "₹1,299",
                duration: "2-3 hrs"
            }
        ],
        reviews: [
            {
                id: "mp1",
                name: "Rohan Bhat",
                avatar: "RB",
                rating: 5,
                date: "1 day ago",
                text: "Called them for an emergency at midnight and they actually came! Saved us from flooding.",
                helpful: 35
            },
            {
                id: "mp2",
                name: "Kavita Subramaniam",
                avatar: "KS",
                rating: 5,
                date: "3 days ago",
                text: "Most reliable plumber in Bandra. Have used them multiple times over the years.",
                helpful: 24
            }
        ]
    }),
    makeProvider({
        id: "pipe-master",
        name: "Pipe Master",
        category: "Plumbers",
        subCategory: "Pipe Fitting • Bathroom • Kitchen",
        logoEmoji: "🚿",
        area: "Goregaon",
        rating: "4.4",
        priceRange: "₹349 - ₹1,299",
        totalRatings: "1,789",
        totalReviews: "812",
        phone: "+91 91567 89012",
        yearsInBusiness: "5+",
        views: "23,400",
        followers: "830",
        likes: "560",
        services: [
            {
                name: "Minor Leak Fix",
                price: "₹349",
                popular: true,
                duration: "30 min"
            },
            {
                name: "Toilet Repair & Installation",
                price: "₹799",
                duration: "1-2 hrs"
            },
            {
                name: "Shower & Mixer Installation",
                price: "₹999",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "Motor & Tank Plumbing",
                price: "₹1,299",
                duration: "2-3 hrs"
            }
        ],
        reviews: [
            {
                id: "pm1",
                name: "Ganesh Patil",
                avatar: "GP",
                rating: 4,
                date: "4 days ago",
                text: "Quick fix for my leaking toilet. Fair pricing and honest work.",
                helpful: 11
            },
            {
                id: "pm2",
                name: "Sangeeta Rao",
                avatar: "SR",
                rating: 4,
                date: "6 days ago",
                text: "Good plumber for basic needs. Installed our new shower efficiently.",
                helpful: 9
            }
        ]
    }),
    makeProvider({
        id: "reliable-plumbing",
        name: "Reliable Plumbing",
        category: "Plumbers",
        subCategory: "Plumbing • Water Heater • Pipeline",
        logoEmoji: "🔧",
        area: "Malad",
        rating: "4.6",
        priceRange: "₹449 - ₹1,599",
        totalRatings: "2,345",
        totalReviews: "1,067",
        phone: "+91 92678 90123",
        yearsInBusiness: "9+",
        views: "35,800",
        followers: "1,280",
        likes: "940",
        services: [
            {
                name: "Tap Replacement",
                price: "₹449",
                popular: true,
                duration: "30 min"
            },
            {
                name: "Geyser Repair & Service",
                price: "₹899",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "Sewer Line Cleaning",
                price: "₹1,299",
                duration: "2-3 hrs"
            },
            {
                name: "Water Purifier Installation",
                price: "₹1,599",
                duration: "1-2 hrs"
            }
        ],
        reviews: [
            {
                id: "rl1",
                name: "Pradeep Mishra",
                avatar: "PM",
                rating: 5,
                date: "2 days ago",
                text: "Truly reliable! They fixed our geyser issue that two other plumbers couldn't solve.",
                helpful: 19
            },
            {
                id: "rl2",
                name: "Neha Saxena",
                avatar: "NS",
                rating: 4,
                date: "5 days ago",
                text: "Good plumbing service at reasonable rates. The technician was well-equipped.",
                helpful: 13
            }
        ]
    }),
    makeProvider({
        id: "a1-plumbers",
        name: "A1 Plumbers",
        category: "Plumbers",
        subCategory: "General Plumbing • Fitting • Repair",
        logoEmoji: "🛠️",
        area: "Kandivali",
        rating: "4.3",
        priceRange: "₹399 - ₹1,399",
        totalRatings: "1,456",
        totalReviews: "645",
        phone: "+91 93789 01234",
        yearsInBusiness: "4+",
        views: "18,900",
        followers: "670",
        likes: "430",
        services: [
            {
                name: "Basic Plumbing Visit",
                price: "₹399",
                popular: true,
                duration: "1 hr"
            },
            {
                name: "Pipeline Replacement",
                price: "₹1,399",
                duration: "3-4 hrs"
            },
            {
                name: "Bathroom Fittings Installation",
                price: "₹999",
                duration: "2-3 hrs"
            },
            {
                name: "Overhead Tank Cleaning",
                price: "₹799",
                duration: "2 hrs"
            }
        ],
        reviews: [
            {
                id: "a1p1",
                name: "Mukesh Tiwari",
                avatar: "MT",
                rating: 4,
                date: "3 days ago",
                text: "Decent plumbing work. They replaced our old pipelines quickly.",
                helpful: 10
            },
            {
                id: "a1p2",
                name: "Anita Verma",
                avatar: "AV",
                rating: 4,
                date: "1 week ago",
                text: "Affordable and efficient. Got my bathroom fittings installed properly.",
                helpful: 8
            }
        ]
    }),
    makeProvider({
        id: "24x7-plumber",
        name: "24x7 Plumber",
        category: "Plumbers",
        subCategory: "Emergency Plumbing • 24/7 Service",
        logoEmoji: "🔩",
        area: "Juhu",
        rating: "4.8",
        priceRange: "₹599 - ₹1,999",
        totalRatings: "4,012",
        totalReviews: "1,890",
        phone: "+91 94890 12345",
        yearsInBusiness: "11+",
        views: "51,300",
        followers: "2,180",
        likes: "1,650",
        services: [
            {
                name: "Emergency Call-out (Day)",
                price: "₹599",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "Emergency Call-out (Night)",
                price: "₹999",
                duration: "1-2 hrs"
            },
            {
                name: "Burst Pipe Repair",
                price: "₹1,499",
                popular: true,
                duration: "2-3 hrs"
            },
            {
                name: "Complete Plumbing Inspection",
                price: "₹1,999",
                duration: "2-3 hrs"
            }
        ],
        reviews: [
            {
                id: "24p1",
                name: "Raj Malhotra",
                avatar: "RM",
                rating: 5,
                date: "1 day ago",
                text: "True 24/7 service! Called at 2 AM for a burst pipe and they were here in 30 minutes.",
                helpful: 42
            },
            {
                id: "24p2",
                name: "Farnaz Contractor",
                avatar: "FC",
                rating: 5,
                date: "2 days ago",
                text: "Lifesavers! They handled our bathroom flood emergency professionally and quickly.",
                helpful: 33
            }
        ]
    }),
    // ─── Carpenters ────────────────────────────────────────────────
    makeProvider({
        id: "skillcraft-carpenters",
        name: "SkillCraft Carpenters",
        category: "Carpenters",
        subCategory: "Custom Furniture • Wood Repair",
        logoEmoji: "🪚",
        area: "Andheri",
        rating: "4.5",
        priceRange: "₹1,999 - ₹8,999",
        totalRatings: "2,234",
        totalReviews: "1,023",
        phone: "+91 98456 78901",
        yearsInBusiness: "8+",
        views: "30,100",
        followers: "1,080",
        likes: "780",
        services: [
            {
                name: "Door & Window Repair",
                price: "₹1,999",
                popular: true,
                duration: "2-3 hrs"
            },
            {
                name: "Custom Shelving",
                price: "₹4,999",
                duration: "1-2 days"
            },
            {
                name: "Furniture Repair",
                price: "₹2,499",
                popular: true,
                duration: "3-4 hrs"
            },
            {
                name: "Wooden Partition",
                price: "₹8,999",
                duration: "2-3 days"
            }
        ],
        reviews: [
            {
                id: "sc1",
                name: "Tarun Kapoor",
                avatar: "TK",
                rating: 5,
                date: "3 days ago",
                text: "Excellent carpentry work! Built custom shelves that fit perfectly in our living room.",
                helpful: 19
            },
            {
                id: "sc2",
                name: "Manisha Goel",
                avatar: "MG",
                rating: 4,
                date: "6 days ago",
                text: "Good quality furniture repair. The carpenter was skilled and courteous.",
                helpful: 14
            }
        ]
    }),
    makeProvider({
        id: "woodcraft-mumbai",
        name: "WoodCraft Mumbai",
        category: "Carpenters",
        subCategory: "Furniture • Wardrobe • Cabinet",
        logoEmoji: "🪵",
        area: "Bandra",
        rating: "4.7",
        priceRange: "₹2,999 - ₹12,000",
        totalRatings: "3,456",
        totalReviews: "1,623",
        phone: "+91 99567 89012",
        yearsInBusiness: "13+",
        views: "46,700",
        followers: "1,950",
        likes: "1,480",
        services: [
            {
                name: "Wardrobe Installation",
                price: "₹6,999",
                popular: true,
                duration: "1-2 days"
            },
            {
                name: "TV Unit Design & Build",
                price: "₹8,999",
                duration: "2-3 days"
            },
            {
                name: "Custom Bed Frame",
                price: "₹12,000",
                popular: true,
                duration: "3-4 days"
            },
            {
                name: "Bookshelf Design",
                price: "₹4,999",
                duration: "1-2 days"
            }
        ],
        reviews: [
            {
                id: "wc1",
                name: "Aditya Narayan",
                avatar: "AN",
                rating: 5,
                date: "2 days ago",
                text: "WoodCraft built an incredible TV unit for us. The woodwork quality is outstanding.",
                helpful: 28
            },
            {
                id: "wc2",
                name: "Preeti Shetty",
                avatar: "PS",
                rating: 5,
                date: "4 days ago",
                text: "Best carpenters in Bandra! The wardrobe they built is both beautiful and functional.",
                helpful: 21
            }
        ]
    }),
    makeProvider({
        id: "quick-carpenter",
        name: "Quick Carpenter",
        category: "Carpenters",
        subCategory: "Quick Repair • Furniture Fix",
        logoEmoji: "🏗️",
        area: "Goregaon",
        rating: "4.4",
        priceRange: "₹1,499 - ₹6,999",
        totalRatings: "1,567",
        totalReviews: "701",
        phone: "+91 91678 90123",
        yearsInBusiness: "4+",
        views: "20,300",
        followers: "720",
        likes: "470",
        services: [
            {
                name: "Chair & Table Repair",
                price: "₹1,499",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "Door Lock & Hinge Fix",
                price: "₹999",
                duration: "1 hr"
            },
            {
                name: "Custom Table Top",
                price: "₹3,499",
                duration: "1 day"
            },
            {
                name: "Plywood Work",
                price: "₹6,999",
                duration: "1-2 days"
            }
        ],
        reviews: [
            {
                id: "qc1",
                name: "Suresh Yadav",
                avatar: "SY",
                rating: 4,
                date: "5 days ago",
                text: "Quick and affordable furniture repair. Fixed my wobbly dining table perfectly.",
                helpful: 12
            },
            {
                id: "qc2",
                name: "Rashmi Hegde",
                avatar: "RH",
                rating: 4,
                date: "1 week ago",
                text: "Good for small carpentry jobs. Fair pricing and punctual arrival.",
                helpful: 9
            }
        ]
    }),
    makeProvider({
        id: "furniture-fix",
        name: "Furniture Fix",
        category: "Carpenters",
        subCategory: "Furniture Repair • Upholstery • Polish",
        logoEmoji: "🪑",
        area: "Malad",
        rating: "4.6",
        priceRange: "₹999 - ₹4,999",
        totalRatings: "2,012",
        totalReviews: "923",
        phone: "+91 92789 01234",
        yearsInBusiness: "6+",
        views: "27,600",
        followers: "960",
        likes: "690",
        services: [
            {
                name: "Furniture Polishing",
                price: "₹999",
                popular: true,
                duration: "2-3 hrs"
            },
            {
                name: "Sofa Frame Repair",
                price: "₹2,499",
                duration: "3-4 hrs"
            },
            {
                name: "Drawer & Cabinet Fix",
                price: "₹1,499",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "Upholstery Work",
                price: "₹4,999",
                duration: "1-2 days"
            }
        ],
        reviews: [
            {
                id: "ff1",
                name: "Anil Kumar",
                avatar: "AK",
                rating: 5,
                date: "2 days ago",
                text: "Brought my grandmother's old chair back to life! Amazing polishing work.",
                helpful: 17
            },
            {
                id: "ff2",
                name: "Geeta Nair",
                avatar: "GN",
                rating: 4,
                date: "5 days ago",
                text: "Good sofa repair work. The frame is sturdier than before now.",
                helpful: 11
            }
        ]
    }),
    makeProvider({
        id: "modular-kitchen-pro",
        name: "Modular Kitchen Pro",
        category: "Carpenters",
        subCategory: "Modular Kitchen • Wardrobe • Cabinet",
        logoEmoji: "🏠",
        area: "Kandivali",
        rating: "4.8",
        priceRange: "₹5,999 - ₹25,000",
        totalRatings: "3,890",
        totalReviews: "1,812",
        phone: "+91 93890 12345",
        yearsInBusiness: "16+",
        views: "54,200",
        followers: "2,300",
        likes: "1,780",
        services: [
            {
                name: "Modular Kitchen Design",
                price: "₹25,000",
                popular: true,
                duration: "7-10 days"
            },
            {
                name: "Sliding Wardrobe",
                price: "₹15,000",
                popular: true,
                duration: "3-4 days"
            },
            {
                name: "Kitchen Trolley",
                price: "₹5,999",
                duration: "1-2 days"
            },
            {
                name: "Full Kitchen Renovation",
                price: "₹20,000",
                duration: "5-7 days"
            }
        ],
        reviews: [
            {
                id: "mk1",
                name: "Vikram Choudhary",
                avatar: "VC",
                rating: 5,
                date: "1 day ago",
                text: "Our modular kitchen looks like it's from a magazine! Absolutely stunning craftsmanship.",
                helpful: 40
            },
            {
                id: "mk2",
                name: "Sunita Jaiswal",
                avatar: "SJ",
                rating: 5,
                date: "3 days ago",
                text: "Best kitchen renovation experience. They handled everything from design to installation.",
                helpful: 32
            }
        ]
    }),
    makeProvider({
        id: "royal-woodworks",
        name: "Royal Woodworks",
        category: "Carpenters",
        subCategory: "Premium Furniture • Wood Carving",
        logoEmoji: "👑",
        area: "Juhu",
        rating: "4.3",
        priceRange: "₹2,499 - ₹10,000",
        totalRatings: "1,678",
        totalReviews: "745",
        phone: "+91 94901 23456",
        yearsInBusiness: "10+",
        views: "22,400",
        followers: "840",
        likes: "560",
        services: [
            {
                name: "Decorative Wall Paneling",
                price: "₹7,999",
                duration: "2-3 days"
            },
            {
                name: "Custom Mirror Frame",
                price: "₹2,499",
                duration: "1 day"
            },
            {
                name: "Wooden Flooring Repair",
                price: "₹10,000",
                duration: "2-3 days"
            },
            {
                name: "Pooja Room Cabinet",
                price: "₹5,999",
                popular: true,
                duration: "1-2 days"
            }
        ],
        reviews: [
            {
                id: "rw1",
                name: "Jignesh Patel",
                avatar: "JP",
                rating: 4,
                date: "4 days ago",
                text: "Beautiful wall paneling work. Adds a royal touch to our living room.",
                helpful: 15
            },
            {
                id: "rw2",
                name: "Komal Shah",
                avatar: "KS",
                rating: 4,
                date: "1 week ago",
                text: "The pooja room cabinet is exquisite. Good craftsmanship.",
                helpful: 11
            }
        ]
    }),
    // ─── Electricians ──────────────────────────────────────────────
    makeProvider({
        id: "spark-electric",
        name: "Spark Electric",
        category: "Electricians",
        subCategory: "Wiring • Switchboard • Fan Installation",
        logoEmoji: "⚡",
        area: "Andheri West",
        rating: "4.5",
        priceRange: "₹299 - ₹999",
        totalRatings: "2,890",
        totalReviews: "1,312",
        phone: "+91 98567 89012",
        yearsInBusiness: "7+",
        views: "36,700",
        followers: "1,280",
        likes: "940",
        services: [
            {
                name: "Switch & Socket Repair",
                price: "₹299",
                popular: true,
                duration: "30 min"
            },
            {
                name: "Ceiling Fan Installation",
                price: "₹499",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "MCB / Fuse Repair",
                price: "₹699",
                duration: "1-2 hrs"
            },
            {
                name: "Wiring Repair (per room)",
                price: "₹999",
                duration: "2-3 hrs"
            }
        ],
        reviews: [
            {
                id: "se1",
                name: "Manoj Pandey",
                avatar: "MP",
                rating: 5,
                date: "2 days ago",
                text: "Quick and efficient fan installation. The electrician was very knowledgeable.",
                helpful: 18
            },
            {
                id: "se2",
                name: "Shruti Kulkarni",
                avatar: "SK",
                rating: 4,
                date: "5 days ago",
                text: "Fixed all our switch issues in one visit. Good pricing and clean work.",
                helpful: 13
            }
        ]
    }),
    makeProvider({
        id: "mumbai-electrician",
        name: "Mumbai Electrician",
        category: "Electricians",
        subCategory: "Electrical Work • Safety • Installation",
        logoEmoji: "💡",
        area: "Bandra",
        rating: "4.7",
        priceRange: "₹349 - ₹1,199",
        totalRatings: "3,678",
        totalReviews: "1,734",
        phone: "+91 99678 90123",
        yearsInBusiness: "12+",
        views: "49,800",
        followers: "2,100",
        likes: "1,560",
        services: [
            {
                name: "Electrical Safety Inspection",
                price: "₹349",
                popular: true,
                duration: "1 hr"
            },
            {
                name: "Inverter Installation",
                price: "₹999",
                popular: true,
                duration: "2-3 hrs"
            },
            {
                name: "LED Light Setup",
                price: "₹599",
                duration: "1-2 hrs"
            },
            {
                name: "Full Home Rewiring",
                price: "₹1,199",
                duration: "2-3 days"
            }
        ],
        reviews: [
            {
                id: "me1",
                name: "Sandeep Verma",
                avatar: "SV",
                rating: 5,
                date: "1 day ago",
                text: "Most thorough electrical inspection I've ever had. Found issues that could have been dangerous.",
                helpful: 32
            },
            {
                id: "me2",
                name: "Rashmi Desai",
                avatar: "RD",
                rating: 5,
                date: "3 days ago",
                text: "Excellent inverter installation. The electrician explained everything about maintenance.",
                helpful: 24
            }
        ]
    }),
    makeProvider({
        id: "power-fix",
        name: "Power Fix Electrical",
        category: "Electricians",
        subCategory: "Electrical Repair • Appliance Wiring",
        logoEmoji: "🔌",
        area: "Goregaon",
        rating: "4.4",
        priceRange: "₹249 - ₹899",
        totalRatings: "1,789",
        totalReviews: "812",
        phone: "+91 91789 01234",
        yearsInBusiness: "5+",
        views: "22,100",
        followers: "780",
        likes: "520",
        services: [
            {
                name: "Plug Point Installation",
                price: "₹249",
                popular: true,
                duration: "30 min"
            },
            {
                name: "Geyser Wiring",
                price: "₹599",
                duration: "1 hr"
            },
            {
                name: "Tube Light / LED Repair",
                price: "₹349",
                popular: true,
                duration: "30 min"
            },
            {
                name: "DB Box Repair",
                price: "₹899",
                duration: "1-2 hrs"
            }
        ],
        reviews: [
            {
                id: "pf1",
                name: "Rajendra Singh",
                avatar: "RS",
                rating: 4,
                date: "4 days ago",
                text: "Affordable electrical work. Installed 6 new plug points quickly.",
                helpful: 11
            },
            {
                id: "pf2",
                name: "Madhuri Joshi",
                avatar: "MJ",
                rating: 4,
                date: "6 days ago",
                text: "Good for small electrical jobs. The geyser wiring was done neatly.",
                helpful: 8
            }
        ]
    }),
    makeProvider({
        id: "safe-wire-electric",
        name: "Safe Wire Electric",
        category: "Electricians",
        subCategory: "Safety Wiring • Earthing • Stabilizer",
        logoEmoji: "⚡",
        area: "Malad",
        rating: "4.6",
        priceRange: "₹399 - ₹1,299",
        totalRatings: "2,456",
        totalReviews: "1,123",
        phone: "+91 92890 12345",
        yearsInBusiness: "9+",
        views: "32,400",
        followers: "1,140",
        likes: "830",
        services: [
            {
                name: "Earthing Installation",
                price: "₹999",
                popular: true,
                duration: "2-3 hrs"
            },
            {
                name: "Stabilizer Installation",
                price: "₹499",
                duration: "1 hr"
            },
            {
                name: "Short Circuit Repair",
                price: "₹699",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "Electric Door Lock Setup",
                price: "₹1,299",
                duration: "2-3 hrs"
            }
        ],
        reviews: [
            {
                id: "sw1",
                name: "Deepak Thakur",
                avatar: "DT",
                rating: 5,
                date: "2 days ago",
                text: "Proper earthing work done. My voltage fluctuations are completely resolved.",
                helpful: 16
            },
            {
                id: "sw2",
                name: "Usha Iyer",
                avatar: "UI",
                rating: 4,
                date: "5 days ago",
                text: "Safe and professional work. The short circuit issue was diagnosed and fixed quickly.",
                helpful: 12
            }
        ]
    }),
    makeProvider({
        id: "quick-wire",
        name: "Quick Wire Solutions",
        category: "Electricians",
        subCategory: "Quick Fix • Wiring • Installation",
        logoEmoji: "🔧",
        area: "Kandivali",
        rating: "4.3",
        priceRange: "₹299 - ₹999",
        totalRatings: "1,345",
        totalReviews: "598",
        phone: "+91 93901 23456",
        yearsInBusiness: "3+",
        views: "16,800",
        followers: "590",
        likes: "380",
        services: [
            {
                name: "Bulb & Tube Replacement",
                price: "₹299",
                popular: true,
                duration: "20 min"
            },
            {
                name: "Exhaust Fan Installation",
                price: "₹499",
                duration: "1 hr"
            },
            {
                name: "Extension Wiring",
                price: "₹699",
                duration: "1-2 hrs"
            },
            {
                name: "Door Bell Installation",
                price: "₹399",
                duration: "30 min"
            }
        ],
        reviews: [
            {
                id: "qw1",
                name: "Kishore Agarwal",
                avatar: "KA",
                rating: 4,
                date: "3 days ago",
                text: "Quick response time and fair pricing. Got my exhaust fan fixed fast.",
                helpful: 9
            },
            {
                id: "qw2",
                name: "Suman Devi",
                avatar: "SD",
                rating: 4,
                date: "1 week ago",
                text: "Simple electrical jobs done well. Reliable for minor repairs.",
                helpful: 7
            }
        ]
    }),
    makeProvider({
        id: "pro-electric-mumbai",
        name: "Pro Electric Mumbai",
        category: "Electricians",
        subCategory: "Commercial • Industrial • Home Electrical",
        logoEmoji: "💡",
        area: "Juhu",
        rating: "4.8",
        priceRange: "₹499 - ₹1,499",
        totalRatings: "4,123",
        totalReviews: "1,945",
        phone: "+91 94012 34567",
        yearsInBusiness: "15+",
        views: "53,100",
        followers: "2,240",
        likes: "1,700",
        services: [
            {
                name: "Smart Switch Installation",
                price: "₹999",
                popular: true,
                duration: "2-3 hrs"
            },
            {
                name: "AC Wiring Setup",
                price: "₹699",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "Electrical Panel Upgrade",
                price: "₹1,499",
                duration: "3-4 hrs"
            },
            {
                name: "CCTV Wiring",
                price: "₹1,199",
                duration: "2-3 hrs"
            }
        ],
        reviews: [
            {
                id: "pe1",
                name: "Arjun Khanna",
                avatar: "AK",
                rating: 5,
                date: "1 day ago",
                text: "Installed smart switches throughout my home. The future is here! Amazing work.",
                helpful: 37
            },
            {
                id: "pe2",
                name: "Trupti Mohite",
                avatar: "TM",
                rating: 5,
                date: "2 days ago",
                text: "Professional electricians with deep knowledge. Upgraded our electrical panel safely.",
                helpful: 28
            }
        ]
    }),
    // ─── Salons at Home ────────────────────────────────────────────
    makeProvider({
        id: "glam-home-salon",
        name: "Glam Home Salon",
        category: "Salons at Home",
        subCategory: "Hair • Facial • Bridal Makeup",
        logoEmoji: "💇",
        area: "Andheri",
        rating: "4.6",
        priceRange: "₹499 - ₹2,499",
        totalRatings: "3,123",
        totalReviews: "1,456",
        phone: "+91 98678 90123",
        yearsInBusiness: "6+",
        views: "42,300",
        followers: "1,780",
        likes: "1,340",
        services: [
            {
                name: "Haircut at Home",
                price: "₹499",
                popular: true,
                duration: "45 min"
            },
            {
                name: "Facial (Gold)",
                price: "₹999",
                popular: true,
                duration: "1 hr"
            },
            {
                name: "Manicure & Pedicure",
                price: "₹799",
                duration: "1 hr"
            },
            {
                name: "Bridal Makeup Package",
                price: "₹2,499",
                duration: "3-4 hrs"
            }
        ],
        reviews: [
            {
                id: "gh1",
                name: "Ananya Rao",
                avatar: "AR",
                rating: 5,
                date: "2 days ago",
                text: "Amazing bridal makeup! I looked stunning at my wedding. Thank you Glam!",
                helpful: 26
            },
            {
                id: "gh2",
                name: "Priti Luthra",
                avatar: "PL",
                rating: 4,
                date: "5 days ago",
                text: "Very convenient home salon service. The facial was relaxing and effective.",
                helpful: 18
            }
        ]
    }),
    makeProvider({
        id: "beauty-at-doorstep",
        name: "Beauty at Doorstep",
        category: "Salons at Home",
        subCategory: "Hair • Skin • Nail • Makeup",
        logoEmoji: "💅",
        area: "Bandra",
        rating: "4.8",
        priceRange: "₹599 - ₹2,999",
        totalRatings: "4,567",
        totalReviews: "2,189",
        phone: "+91 99789 01234",
        yearsInBusiness: "9+",
        views: "56,700",
        followers: "2,420",
        likes: "1,860",
        services: [
            {
                name: "Hair Spa at Home",
                price: "₹899",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "Full Body Waxing",
                price: "₹1,499",
                popular: true,
                duration: "2 hrs"
            },
            {
                name: "Party Makeup",
                price: "₹1,999",
                duration: "1-2 hrs"
            },
            {
                name: "Complete Bridal Package",
                price: "₹2,999",
                duration: "4-5 hrs"
            }
        ],
        reviews: [
            {
                id: "bd1",
                name: "Shraddha Kapoor",
                avatar: "SK",
                rating: 5,
                date: "1 day ago",
                text: "Best home salon in Bandra! The hair spa was so relaxing and my hair feels amazing.",
                helpful: 34
            },
            {
                id: "bd2",
                name: "Nisha Marwah",
                avatar: "NM",
                rating: 5,
                date: "3 days ago",
                text: "Professional beauticians who bring everything to your doorstep. Love this service!",
                helpful: 27
            }
        ]
    }),
    makeProvider({
        id: "home-glow-salon",
        name: "Home Glow Salon",
        category: "Salons at Home",
        subCategory: "Facial • Cleanup • Hair",
        logoEmoji: "✂️",
        area: "Goregaon",
        rating: "4.4",
        priceRange: "₹449 - ₹2,199",
        totalRatings: "1,890",
        totalReviews: "856",
        phone: "+91 91890 12345",
        yearsInBusiness: "4+",
        views: "25,100",
        followers: "890",
        likes: "610",
        services: [
            {
                name: "Haircut (Women)",
                price: "₹449",
                popular: true,
                duration: "45 min"
            },
            {
                name: "Cleanup Facial",
                price: "₹699",
                duration: "1 hr"
            },
            {
                name: "Threading & Wax Combo",
                price: "₹599",
                popular: true,
                duration: "45 min"
            },
            {
                name: "Engagement Makeup",
                price: "₹2,199",
                duration: "2-3 hrs"
            }
        ],
        reviews: [
            {
                id: "hg1",
                name: "Kavita Jaggi",
                avatar: "KJ",
                rating: 4,
                date: "4 days ago",
                text: "Good home facial service. My skin felt fresh and glowing afterwards.",
                helpful: 13
            },
            {
                id: "hg2",
                name: "Ritu Sharma",
                avatar: "RS",
                rating: 4,
                date: "1 week ago",
                text: "Convenient and affordable. The haircut was done well.",
                helpful: 10
            }
        ]
    }),
    makeProvider({
        id: "urban-salon-home",
        name: "Urban Salon Home",
        category: "Salons at Home",
        subCategory: "Hair • Makeup • Grooming",
        logoEmoji: "💇",
        area: "Malad",
        rating: "4.5",
        priceRange: "₹549 - ₹2,699",
        totalRatings: "2,456",
        totalReviews: "1,134",
        phone: "+91 92901 23456",
        yearsInBusiness: "7+",
        views: "34,200",
        followers: "1,260",
        likes: "920",
        services: [
            {
                name: "Men's Grooming Package",
                price: "₹799",
                popular: true,
                duration: "1 hr"
            },
            {
                name: "Hair Colouring",
                price: "₹1,499",
                duration: "2-3 hrs"
            },
            {
                name: "Anti-aging Facial",
                price: "₹1,299",
                duration: "1-2 hrs"
            },
            {
                name: "Reception Makeup",
                price: "₹2,699",
                duration: "2-3 hrs"
            }
        ],
        reviews: [
            {
                id: "us1",
                name: "Pankaj Dubey",
                avatar: "PD",
                rating: 5,
                date: "2 days ago",
                text: "Great men's grooming at home. The haircut and beard trim were perfect.",
                helpful: 15
            },
            {
                id: "us2",
                name: "Nidhi Saxena",
                avatar: "NS",
                rating: 4,
                date: "5 days ago",
                text: "Good hair coloring service. The beautician was professional and skilled.",
                helpful: 11
            }
        ]
    }),
    makeProvider({
        id: "style-home-services",
        name: "Style Home Services",
        category: "Salons at Home",
        subCategory: "Hair • Skin • Nail Art",
        logoEmoji: "🌟",
        area: "Kandivali",
        rating: "4.3",
        priceRange: "₹399 - ₹1,999",
        totalRatings: "1,567",
        totalReviews: "698",
        phone: "+91 93012 34567",
        yearsInBusiness: "3+",
        views: "19,400",
        followers: "680",
        likes: "440",
        services: [
            {
                name: "Basic Haircut",
                price: "₹399",
                popular: true,
                duration: "30 min"
            },
            {
                name: "Head Massage + Wash",
                price: "₹499",
                duration: "45 min"
            },
            {
                name: "Nail Art (Hands)",
                price: "₹799",
                duration: "1 hr"
            },
            {
                name: "HD Makeup",
                price: "₹1,999",
                duration: "2 hrs"
            }
        ],
        reviews: [
            {
                id: "sh1",
                name: "Sakshi Mehta",
                avatar: "SM",
                rating: 4,
                date: "3 days ago",
                text: "Affordable home salon. The nail art was creative and lasted long.",
                helpful: 10
            },
            {
                id: "sh2",
                name: "Vivek Jain",
                avatar: "VJ",
                rating: 4,
                date: "1 week ago",
                text: "Good head massage at home. Very relaxing experience.",
                helpful: 7
            }
        ]
    }),
    makeProvider({
        id: "premium-beauty-home",
        name: "Premium Beauty Home",
        category: "Salons at Home",
        subCategory: "Premium Salon • Bridal • Skin Care",
        logoEmoji: "💅",
        area: "Juhu",
        rating: "4.7",
        priceRange: "₹799 - ₹3,499",
        totalRatings: "3,890",
        totalReviews: "1,823",
        phone: "+91 94123 45678",
        yearsInBusiness: "11+",
        views: "48,600",
        followers: "2,080",
        likes: "1,580",
        services: [
            {
                name: "Diamond Facial",
                price: "₹1,499",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "Keratin Hair Treatment",
                price: "₹2,999",
                duration: "3-4 hrs"
            },
            {
                name: "Full Body Polishing",
                price: "₹2,499",
                popular: true,
                duration: "2-3 hrs"
            },
            {
                name: "Luxury Bridal Package",
                price: "₹3,499",
                duration: "5-6 hrs"
            }
        ],
        reviews: [
            {
                id: "pb1",
                name: "Tanya Shah",
                avatar: "TS",
                rating: 5,
                date: "1 day ago",
                text: "The diamond facial was incredible! My skin has never looked this good. Premium quality service.",
                helpful: 38
            },
            {
                id: "pb2",
                name: "Richa Agarwal",
                avatar: "RA",
                rating: 5,
                date: "3 days ago",
                text: "Got keratin treatment at home. salon-quality results without stepping out!",
                helpful: 29
            }
        ]
    }),
    // ─── Deep Cleaning ─────────────────────────────────────────────
    makeProvider({
        id: "sparkle-clean",
        name: "Sparkle Clean",
        category: "Deep Cleaning",
        subCategory: "Home Cleaning • Kitchen • Bathroom",
        logoEmoji: "✨",
        area: "Andheri",
        rating: "4.6",
        priceRange: "₹1,499 - ₹4,999",
        totalRatings: "2,678",
        totalReviews: "1,234",
        phone: "+91 98789 01234",
        yearsInBusiness: "6+",
        views: "35,400",
        followers: "1,340",
        likes: "980",
        services: [
            {
                name: "1BHK Deep Cleaning",
                price: "₹1,499",
                popular: true,
                duration: "3-4 hrs"
            },
            {
                name: "2BHK Deep Cleaning",
                price: "₹2,499",
                popular: true,
                duration: "5-6 hrs"
            },
            {
                name: "Kitchen Deep Clean",
                price: "₹1,999",
                duration: "3-4 hrs"
            },
            {
                name: "Sofa & Carpet Cleaning",
                price: "₹1,299",
                duration: "2-3 hrs"
            }
        ],
        reviews: [
            {
                id: "sc1",
                name: "Prachi Bhatt",
                avatar: "PB",
                rating: 5,
                date: "2 days ago",
                text: "Our 2BHK was spotless after Sparkle Clean's service. They even cleaned corners we forgot existed!",
                helpful: 22
            },
            {
                id: "sc2",
                name: "Amit Banerjee",
                avatar: "AB",
                rating: 4,
                date: "5 days ago",
                text: "Very thorough kitchen cleaning. The chimneys and tiles look brand new.",
                helpful: 16
            }
        ]
    }),
    makeProvider({
        id: "deep-clean-mumbai",
        name: "Deep Clean Mumbai",
        category: "Deep Cleaning",
        subCategory: "Deep Cleaning • Sanitization • Disinfection",
        logoEmoji: "🧹",
        area: "Bandra",
        rating: "4.8",
        priceRange: "₹1,999 - ₹5,999",
        totalRatings: "4,123",
        totalReviews: "1,967",
        phone: "+91 99890 12345",
        yearsInBusiness: "10+",
        views: "52,100",
        followers: "2,200",
        likes: "1,680",
        services: [
            {
                name: "3BHK Complete Deep Clean",
                price: "₹3,999",
                popular: true,
                duration: "6-8 hrs"
            },
            {
                name: "Bathroom Sanitization (All)",
                price: "₹1,999",
                duration: "3-4 hrs"
            },
            {
                name: "Move-in/Move-out Cleaning",
                price: "₹5,999",
                popular: true,
                duration: "Full day"
            },
            {
                name: "Office Deep Cleaning",
                price: "₹4,999",
                duration: "6-8 hrs"
            }
        ],
        reviews: [
            {
                id: "dc1",
                name: "Ritu Malhotra",
                avatar: "RM",
                rating: 5,
                date: "1 day ago",
                text: "Best deep cleaning service in Mumbai! Used them for our move-in cleaning and the flat was pristine.",
                helpful: 35
            },
            {
                id: "dc2",
                name: "Karan Wadhwa",
                avatar: "KW",
                rating: 5,
                date: "3 days ago",
                text: "Professional team with industrial-grade equipment. The bathroom sanitization is top-notch.",
                helpful: 27
            }
        ]
    }),
    makeProvider({
        id: "home-shine-services",
        name: "Home Shine Services",
        category: "Deep Cleaning",
        subCategory: "Home Cleaning • Disinfection",
        logoEmoji: "🏠",
        area: "Goregaon",
        rating: "4.4",
        priceRange: "₹1,299 - ₹4,499",
        totalRatings: "1,789",
        totalReviews: "812",
        phone: "+91 91901 23456",
        yearsInBusiness: "4+",
        views: "22,800",
        followers: "810",
        likes: "540",
        services: [
            {
                name: "1BHK Regular Deep Clean",
                price: "₹1,299",
                popular: true,
                duration: "3 hrs"
            },
            {
                name: "2BHK Regular Deep Clean",
                price: "₹2,199",
                duration: "4-5 hrs"
            },
            {
                name: "Full Home Disinfection",
                price: "₹3,499",
                duration: "4-5 hrs"
            },
            {
                name: "Window & Glass Cleaning",
                price: "₹999",
                duration: "2-3 hrs"
            }
        ],
        reviews: [
            {
                id: "hs1",
                name: "Vikas Chauhan",
                avatar: "VC",
                rating: 4,
                date: "4 days ago",
                text: "Good value for money. The cleaning team was thorough and well-organized.",
                helpful: 12
            },
            {
                id: "hs2",
                name: "Snehal Patil",
                avatar: "SP",
                rating: 4,
                date: "1 week ago",
                text: "Reliable cleaning service. The disinfection gave us peace of mind.",
                helpful: 9
            }
        ]
    }),
    makeProvider({
        id: "clean-pro-mumbai",
        name: "CleanPro Mumbai",
        category: "Deep Cleaning",
        subCategory: "Deep Cleaning • Kitchen • Bathroom • Sofa",
        logoEmoji: "🧽",
        area: "Malad",
        rating: "4.5",
        priceRange: "₹1,599 - ₹5,299",
        totalRatings: "2,345",
        totalReviews: "1,089",
        phone: "+91 92012 34567",
        yearsInBusiness: "7+",
        views: "31,200",
        followers: "1,180",
        likes: "860",
        services: [
            {
                name: "Kitchen Deep Cleaning",
                price: "₹1,599",
                popular: true,
                duration: "3-4 hrs"
            },
            {
                name: "Bathroom Deep Cleaning (2)",
                price: "₹1,799",
                duration: "3-4 hrs"
            },
            {
                name: "2BHK Complete Package",
                price: "₹4,499",
                popular: true,
                duration: "6-7 hrs"
            },
            {
                name: "Sofa Deep Cleaning",
                price: "₹1,299",
                duration: "2 hrs"
            }
        ],
        reviews: [
            {
                id: "cp1",
                name: "Neha Goyal",
                avatar: "NG",
                rating: 5,
                date: "2 days ago",
                text: "CleanPro made our kitchen sparkle! The grease and grime buildup was completely removed.",
                helpful: 18
            },
            {
                id: "cp2",
                name: "Manish Rastogi",
                avatar: "MR",
                rating: 4,
                date: "5 days ago",
                text: "Good sofa cleaning service. Our old sofa looks fresh and clean now.",
                helpful: 13
            }
        ]
    }),
    makeProvider({
        id: "quick-deep-clean",
        name: "Quick Deep Clean",
        category: "Deep Cleaning",
        subCategory: "Quick Cleaning • Sanitization",
        logoEmoji: "✨",
        area: "Kandivali",
        rating: "4.3",
        priceRange: "₹1,199 - ₹3,999",
        totalRatings: "1,456",
        totalReviews: "645",
        phone: "+91 93123 45678",
        yearsInBusiness: "3+",
        views: "18,100",
        followers: "640",
        likes: "410",
        services: [
            {
                name: "Studio/1RK Cleaning",
                price: "₹1,199",
                popular: true,
                duration: "2 hrs"
            },
            {
                name: "1BHK Quick Clean",
                price: "₹1,799",
                duration: "3-4 hrs"
            },
            {
                name: "Bathroom Deep Clean (1)",
                price: "₹899",
                duration: "1-2 hrs"
            },
            {
                name: "Post-Party Cleanup",
                price: "₹3,999",
                duration: "4-5 hrs"
            }
        ],
        reviews: [
            {
                id: "qd1",
                name: "Akash Thakur",
                avatar: "AT",
                rating: 4,
                date: "3 days ago",
                text: "Quick and efficient cleaning. Perfect for my 1RK apartment.",
                helpful: 10
            },
            {
                id: "qd2",
                name: "Pooja Mehta",
                avatar: "PM",
                rating: 4,
                date: "1 week ago",
                text: "Used them for post-party cleanup. They handled the mess impressively.",
                helpful: 8
            }
        ]
    }),
    makeProvider({
        id: "total-hygiene",
        name: "Total Hygiene Services",
        category: "Deep Cleaning",
        subCategory: "Complete Hygiene • Disinfection • Sanitization",
        logoEmoji: "🧹",
        area: "Juhu",
        rating: "4.7",
        priceRange: "₹2,499 - ₹7,999",
        totalRatings: "3,678",
        totalReviews: "1,734",
        phone: "+91 94234 56789",
        yearsInBusiness: "14+",
        views: "47,900",
        followers: "2,050",
        likes: "1,560",
        services: [
            {
                name: "Premium Home Deep Clean (2BHK)",
                price: "₹4,999",
                popular: true,
                duration: "6-8 hrs"
            },
            {
                name: "Full Home Sanitization (3BHK)",
                price: "₹5,999",
                duration: "Full day"
            },
            {
                name: "Move-out Deep Clean (2BHK)",
                price: "₹7,999",
                popular: true,
                duration: "Full day"
            },
            {
                name: "Mattress & Upholstery Cleaning",
                price: "₹2,499",
                duration: "3-4 hrs"
            }
        ],
        reviews: [
            {
                id: "th1",
                name: "Swati Kumari",
                avatar: "SK",
                rating: 5,
                date: "1 day ago",
                text: "Total Hygiene is the real deal! The 2BHK deep clean was the most thorough I've ever experienced.",
                helpful: 40
            },
            {
                id: "th2",
                name: "Rahul Kohli",
                avatar: "RK",
                rating: 5,
                date: "2 days ago",
                text: "Used for move-out cleaning. Got our full deposit back thanks to their incredible work!",
                helpful: 33
            }
        ]
    })
];
// ── Lookup Functions ──────────────────────────────────────────────
/** Map category slug → array of providers. */ const providersByCategory = {};
for (const provider of allProviders){
    // Match provider to its category by looking up the subCategory → slug mapping
    const catSlug = inferCategorySlug(provider.category);
    if (!providersByCategory[catSlug]) {
        providersByCategory[catSlug] = [];
    }
    providersByCategory[catSlug].push(provider);
}
function inferCategorySlug(category) {
    const map = {
        "AC Repair": "ac-repair",
        "Painters": "painters",
        "Pest Control": "pest-control",
        "Plumbers": "plumbers",
        "Carpenters": "carpenters",
        "Electricians": "electricians",
        "Salons at Home": "salons-at-home",
        "Deep Cleaning": "deep-cleaning"
    };
    return map[category] || category.toLowerCase().replace(/\s+/g, "-");
}
/** Index providers by id for fast lookup. */ const providerById = {};
for (const p of allProviders){
    providerById[p.id] = p;
}
function getServiceCategory(slug) {
    return serviceCategories.find((c)=>c.slug === slug);
}
function getServiceProviders(categorySlug) {
    return providersByCategory[categorySlug] || [];
}
function getAllServiceProviders() {
    return allProviders;
}
function getCategorizedProviders() {
    return serviceCategories.map((category)=>({
            category,
            providers: providersByCategory[category.slug] || []
        }));
}
function getServiceProviderById(id) {
    return providerById[id];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/justdial/MobileServiceCategoryPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileServiceCategoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3x3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3x3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-client] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$service$2d$category$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/service-category-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* ═══════════════════════════════════════════════════
   STATIC CONFIG — quick filters, sort options, bottom nav
   ═══════════════════════════════════════════════════ */ const sortOptions = [
    "Recommended",
    "Top Rated",
    "Nearest",
    "Low Price"
];
const bottomNavItems = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        label: "Home",
        href: "/",
        active: false
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3x3$3e$__["Grid3x3"],
        label: "Categories",
        href: "/categories",
        active: false
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        label: "Bookings",
        href: "#",
        active: false
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        label: "Favorites",
        href: "#",
        active: false
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
        label: "Profile",
        href: "#",
        active: false
    }
];
function MobileServiceCategoryPage({ selectedCategory }) {
    _s();
    const [sortOpen, setSortOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedSort, setSelectedSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Recommended");
    const [favorites, setFavorites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Local chip selection — when user taps a category chip on /services landing,
    // the provider list below updates dynamically without navigation.
    const [pickedSlug, setPickedSlug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ── Real data ──
    // `selectedCategory` comes from the URL (`/service/[category]` page).
    // On the `/services` landing page, the user can also pick a category via chips;
    // `pickedSlug` takes priority over the URL when set.
    const activeSlug = pickedSlug || selectedCategory;
    const category = activeSlug ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$service$2d$category$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getServiceCategory"])(activeSlug) : undefined;
    const isLanding = !activeSlug || !category;
    // When no category picked → show ALL providers. Otherwise filter by category.
    const allProviders = isLanding ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$service$2d$category$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllServiceProviders"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$service$2d$category$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getServiceProviders"])(activeSlug);
    const categoryLabel = category?.label || "Home Services";
    const categoryColor = category?.color || "#0056b3";
    const categoryIcon = category?.icon || "🏠";
    const heroTitle = isLanding ? "Home Services" : `${categoryLabel} Services`;
    const heroSubtitle = isLanding ? "Book trusted home service professionals near you" : `Book trusted ${categoryLabel} professionals near you`;
    const professionalCount = Math.max(250, allProviders.length * 35);
    // When user is on /services landing AND has not picked a chip (i.e. "All" is active),
    // we render one section per category with its own grid + "View All" link,
    // instead of dumping every provider into a single grid.
    const showCategorySections = isLanding && !pickedSlug;
    const categorizedProviders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MobileServiceCategoryPage.useMemo[categorizedProviders]": ()=>showCategorySections ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$service$2d$category$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategorizedProviders"])() : []
    }["MobileServiceCategoryPage.useMemo[categorizedProviders]"], [
        showCategorySections
    ]);
    // ── Sorting ──
    const filteredProviders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MobileServiceCategoryPage.useMemo[filteredProviders]": ()=>{
            let list = [
                ...allProviders
            ];
            if (selectedSort === "Top Rated") {
                list.sort({
                    "MobileServiceCategoryPage.useMemo[filteredProviders]": (a, b)=>parseFloat(b.rating) - parseFloat(a.rating)
                }["MobileServiceCategoryPage.useMemo[filteredProviders]"]);
            } else if (selectedSort === "Low Price") {
                list.sort({
                    "MobileServiceCategoryPage.useMemo[filteredProviders]": (a, b)=>{
                        const pa = parseInt((a.services[0]?.price || "₹999").replace(/\D/g, ""), 10);
                        const pb = parseInt((b.services[0]?.price || "₹999").replace(/\D/g, ""), 10);
                        return pa - pb;
                    }
                }["MobileServiceCategoryPage.useMemo[filteredProviders]"]);
            }
            return list;
        }
    }["MobileServiceCategoryPage.useMemo[filteredProviders]"], [
        allProviders,
        selectedSort
    ]);
    const toggleFav = (id)=>setFavorites((prev)=>({
                ...prev,
                [id]: !prev[id]
            }));
    // ── Provider card renderer ──
    // Reused by both the single-category grid view AND the per-category
    // sections view ("All" chip selected) to keep card markup in sync.
    const renderProviderCard = (p, idx, distanceSeed = 0)=>{
        const isFav = favorites[p.id] || false;
        const distance = ((distanceSeed + idx + 1) * 1.2).toFixed(1);
        const startingPrice = p.services[0]?.price || p.priceRange?.split(" - ")[0] || "₹499";
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
            initial: {
                opacity: 0,
                y: 12
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                delay: idx * 0.04,
                duration: 0.3
            },
            className: "bg-white rounded-2xl overflow-hidden shadow-sm shadow-black/[0.06] ring-1 ring-black/[0.04] flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-24 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute inset-0 bg-gradient-to-br ${p.coverColor}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-4xl opacity-95 drop-shadow-sm",
                                "aria-hidden": true,
                                children: p.logoEmoji
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute top-1.5 left-1.5 bg-emerald-500 text-white text-[8.5px] font-bold px-1.5 py-0.5 rounded-md shadow-sm uppercase tracking-wide flex items-center gap-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1 h-1 bg-white rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                "Open"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>toggleFav(p.id),
                            "aria-label": "Save to favorites",
                            className: "absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm active:scale-90 transition-transform",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: `w-3 h-3 ${isFav ? "fill-rose-500 text-rose-500" : "text-gray-700"}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2.5 flex flex-col flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-1 mb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[12px] font-bold text-gray-900 leading-tight line-clamp-2 flex-1",
                                    children: p.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                p.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                    className: "w-3.5 h-3.5 text-[#0056b3] shrink-0 mt-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 text-[10px] mb-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-0.5 bg-emerald-50 text-emerald-700 px-1 py-0.5 rounded font-bold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "w-2.5 h-2.5 fill-emerald-700 text-emerald-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this),
                                        p.rating
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-400 truncate",
                                    children: p.totalReviews
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-500 whitespace-nowrap",
                                    children: p.yearsInBusiness
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-gray-500 mb-2 line-clamp-1 leading-tight",
                            children: p.subCategory
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-0.5 mb-1.5 text-[10px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "w-2.5 h-2.5 text-gray-400 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-600 truncate flex-1",
                                    children: p.area
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-0.5 bg-[#0056b3]/8 text-[#0056b3] font-bold px-1 py-0.5 rounded-full whitespace-nowrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                            className: "w-2 h-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this),
                                        distance,
                                        "km"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pt-1.5 mb-2 border-t border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] text-gray-400",
                                    children: "Starts from"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-bold text-emerald-700",
                                    children: startingPrice
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-1 mt-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:${p.phone.replace(/\s+/g, "")}`,
                                    "aria-label": "Call",
                                    className: "flex items-center justify-center bg-[#0056b3]/8 text-[#0056b3] rounded-lg py-1.5 active:scale-95 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `https://wa.me/${p.phone.replace(/[^0-9]/g, "")}`,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    "aria-label": "WhatsApp",
                                    className: "flex items-center justify-center bg-emerald-500/10 text-emerald-700 rounded-lg py-1.5 active:scale-95 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/store/${p.id}`,
                                    "aria-label": "View details",
                                    className: "flex items-center justify-center bg-amber-500/10 text-amber-700 rounded-lg py-1.5 active:scale-95 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            ]
        }, p.id, true, {
            fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
            lineNumber: 101,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "min-h-screen bg-gray-50 pb-24",
        style: {
            maxWidth: 480,
            margin: "0 auto"
        },
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.3
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 bg-white border-b border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1 px-3 py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: isLanding ? "/" : "/services",
                            className: "flex items-center justify-center w-9 h-9 -ml-1 rounded-full hover:bg-gray-100 transition-colors",
                            "aria-label": "Back",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-5 h-5 text-gray-800"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "flex-1 text-[17px] font-bold text-gray-900 truncate px-1",
                            children: categoryLabel
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition-colors",
                            "aria-label": "Search",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "w-[19px] h-[19px] text-gray-800"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex items-center justify-center w-9 h-9 -mr-1 rounded-full hover:bg-gray-100 transition-colors",
                            "aria-label": "Filter",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                className: "w-[18px] h-[18px] text-gray-800"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                className: "mx-3 mt-3 rounded-2xl overflow-hidden relative",
                style: {
                    background: `linear-gradient(135deg, ${categoryColor}1A, ${categoryColor}0D)`
                },
                initial: {
                    y: 16,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    delay: 0.05,
                    duration: 0.35
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-8 -right-8 w-28 h-28 rounded-full",
                        style: {
                            background: `${categoryColor}14`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-6 right-20 w-16 h-16 rounded-full",
                        style: {
                            background: `${categoryColor}10`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative p-5 flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[18px] font-bold text-gray-900 leading-tight",
                                        children: heroTitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12px] text-gray-600 mt-1.5 leading-snug",
                                        children: heroSubtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                        lineNumber: 277,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 inline-flex items-center gap-1.5 bg-white rounded-full pl-2 pr-3 py-1.5 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-5 h-5 rounded-full flex items-center justify-center",
                                                style: {
                                                    background: `${categoryColor}22`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "w-3 h-3",
                                                    style: {
                                                        color: categoryColor
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                                lineNumber: 281,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-bold text-gray-900",
                                                children: [
                                                    professionalCount.toLocaleString(),
                                                    "+ Professionals Available"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                                lineNumber: 287,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[68px] h-[68px] rounded-2xl flex items-center justify-center text-4xl shrink-0 shadow-sm",
                                style: {
                                    background: "#fff"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": true,
                                    children: categoryIcon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            !selectedCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                className: "mt-4",
                initial: {
                    y: 14,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    delay: 0.08,
                    duration: 0.35
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-3 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[15px] font-bold text-gray-900",
                                children: "Browse by Category"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/categories",
                                className: "text-[12px] text-[#0056b3] font-semibold flex items-center gap-0.5",
                                children: [
                                    "See All ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                        lineNumber: 318,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                        lineNumber: 312,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 overflow-x-auto px-3 pb-2 scroll-smooth",
                        style: {
                            scrollbarWidth: "none",
                            msOverflowStyle: "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 6
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.2
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setPickedSlug(null),
                                    className: `inline-flex items-center gap-1.5 h-9 rounded-full pl-3 pr-3.5 border transition-colors ${!pickedSlug ? "bg-[#0056b3] border-[#0056b3] text-white" : "bg-white border-gray-200 text-gray-700"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[12px] font-semibold whitespace-nowrap",
                                        children: "All"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                        lineNumber: 346,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                    lineNumber: 337,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                lineNumber: 330,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$service$2d$category$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceCategories"].map((cat, idx)=>{
                                const active = pickedSlug === cat.slug;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 6
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: idx * 0.03,
                                        duration: 0.25
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    className: "flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setPickedSlug(active ? null : cat.slug),
                                        className: "inline-flex items-center gap-1.5 h-9 rounded-full pl-2.5 pr-3 border transition-all",
                                        style: {
                                            backgroundColor: active ? cat.color : "#fff",
                                            borderColor: active ? cat.color : `${cat.color}33`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-5 h-5 rounded-full flex items-center justify-center text-[12px] shrink-0",
                                                style: {
                                                    backgroundColor: active ? "rgba(255,255,255,0.25)" : `${cat.color}1A`
                                                },
                                                "aria-hidden": true,
                                                children: cat.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                                lineNumber: 371,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[12px] font-semibold whitespace-nowrap",
                                                style: {
                                                    color: active ? "#fff" : cat.color
                                                },
                                                children: cat.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                                lineNumber: 381,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                        lineNumber: 361,
                                        columnNumber: 19
                                    }, this)
                                }, cat.slug, false, {
                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                    lineNumber: 353,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                        lineNumber: 325,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                lineNumber: 305,
                columnNumber: 9
            }, this),
            !showCategorySections && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                className: "px-3 mt-4 flex items-center justify-between",
                initial: {
                    y: 12,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    delay: 0.15,
                    duration: 0.35
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[12px] text-gray-500",
                                children: "Sort by:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                lineNumber: 404,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setSortOpen((o)=>!o),
                                        className: "flex items-center gap-1 bg-white border border-gray-200 rounded-full pl-3 pr-2 py-1.5 text-[12px] font-semibold text-gray-900 shadow-sm",
                                        children: [
                                            selectedSort,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: `w-3.5 h-3.5 text-gray-400 transition-transform ${sortOpen ? "rotate-180" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                                lineNumber: 412,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                        lineNumber: 406,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: sortOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: -8
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: -8
                                            },
                                            transition: {
                                                duration: 0.18
                                            },
                                            className: "absolute top-full left-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg z-30 min-w-[150px] py-1",
                                            children: sortOptions.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setSelectedSort(o);
                                                        setSortOpen(false);
                                                    },
                                                    className: `w-full text-left px-3 py-2 text-[12px] hover:bg-gray-50 transition-colors ${selectedSort === o ? "font-bold text-[#0056b3]" : "text-gray-700"}`,
                                                    children: o
                                                }, o, false, {
                                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                            lineNumber: 418,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                        lineNumber: 416,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                lineNumber: 405,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                        lineNumber: 403,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-[12px] font-semibold text-gray-900 shadow-sm active:scale-95 transition-transform",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                className: "w-3.5 h-3.5 text-gray-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                lineNumber: 452,
                                columnNumber: 13
                            }, this),
                            "Filters"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                        lineNumber: 448,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                lineNumber: 397,
                columnNumber: 9
            }, this),
            !showCategorySections && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 mt-2 flex items-center gap-2 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] text-gray-500",
                        children: [
                            filteredProviders.length,
                            " ",
                            filteredProviders.length === 1 ? "provider" : "providers",
                            " found"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                        lineNumber: 461,
                        columnNumber: 11
                    }, this),
                    pickedSlug && category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setPickedSlug(null),
                        className: "inline-flex items-center gap-1.5 bg-[#0056b3] text-white text-[11px] font-semibold px-3 py-1 rounded-full",
                        children: [
                            category.icon,
                            " ",
                            category.label,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                lineNumber: 471,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                        lineNumber: 465,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                lineNumber: 460,
                columnNumber: 9
            }, this),
            showCategorySections ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 space-y-8",
                children: categorizedProviders.map(({ category: cat, providers }, sectionIdx)=>{
                    // Skip categories with zero providers
                    if (providers.length === 0) return null;
                    // Show up to 3 cards per category; "View All" goes to /service/{slug}
                    const visibleProviders = providers.slice(0, 3);
                    const totalProviders = providers.length;
                    const professionalCountForCat = Math.max(50, totalProviders * 35);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        id: `cat-section-${cat.slug}`,
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: sectionIdx * 0.05,
                            duration: 0.35
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-3 mb-4 rounded-2xl p-3.5 flex items-center justify-between",
                                style: {
                                    background: `linear-gradient(135deg, ${cat.color}12, ${cat.color}08)`,
                                    borderLeft: `3px solid ${cat.color}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-10 h-10 rounded-xl flex items-center justify-center text-[18px] shrink-0 shadow-sm",
                                                style: {
                                                    background: `${cat.color}22`
                                                },
                                                "aria-hidden": true,
                                                children: cat.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                                lineNumber: 502,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-[15px] font-extrabold text-gray-900 leading-tight truncate",
                                                        children: cat.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                                        lineNumber: 510,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 mt-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-bold px-1.5 py-0.5 rounded-full",
                                                                style: {
                                                                    background: `${cat.color}18`,
                                                                    color: cat.color
                                                                },
                                                                children: [
                                                                    professionalCountForCat.toLocaleString(),
                                                                    "+ Pros"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                                                lineNumber: 514,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-gray-400",
                                                                children: [
                                                                    totalProviders,
                                                                    " listed"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                                                lineNumber: 520,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                                        lineNumber: 513,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                                lineNumber: 509,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                        lineNumber: 501,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/service/${cat.slug}`,
                                        className: "inline-flex items-center gap-0.5 text-[11px] font-bold shrink-0 px-2.5 py-1.5 rounded-lg",
                                        style: {
                                            background: `${cat.color}15`,
                                            color: cat.color
                                        },
                                        children: [
                                            "View All",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                                lineNumber: 530,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                        lineNumber: 524,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                lineNumber: 497,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 grid grid-cols-2 gap-3",
                                children: visibleProviders.map((p, idx)=>renderProviderCard(p, idx, sectionIdx * 4))
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                lineNumber: 535,
                                columnNumber: 17
                            }, this)
                        ]
                    }, cat.slug, true, {
                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                        lineNumber: 489,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                lineNumber: 479,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-3 mt-3",
                children: filteredProviders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-16 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: "No providers available"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                        lineNumber: 546,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                    lineNumber: 545,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: filteredProviders.map((p, idx)=>renderProviderCard(p, idx))
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                    lineNumber: 549,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                lineNumber: 543,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed bottom-0 left-1/2 -translate-x-1/2 w-full bg-white/95 backdrop-blur-xl border-t border-gray-200/70 z-40",
                style: {
                    maxWidth: 480
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-around py-1.5",
                        children: bottomNavItems.map((item)=>{
                            const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                        className: "w-5 h-5 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                        lineNumber: 565,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-medium text-gray-400",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                        lineNumber: 566,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true);
                            if (item.href === "#") {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "flex flex-col items-center gap-0.5 px-3 py-1",
                                    children: content
                                }, item.label, false, {
                                    fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                    lineNumber: 573,
                                    columnNumber: 17
                                }, this);
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "flex flex-col items-center gap-0.5 px-3 py-1",
                                children: content
                            }, item.label, false, {
                                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                                lineNumber: 583,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                        lineNumber: 561,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[env(safe-area-inset-bottom)]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                        lineNumber: 593,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
                lineNumber: 557,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/justdial/MobileServiceCategoryPage.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
_s(MobileServiceCategoryPage, "S1JQFV68IMXLpSWY4seQHbUphRI=");
_c = MobileServiceCategoryPage;
var _c;
__turbopack_context__.k.register(_c, "MobileServiceCategoryPage");
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
"[project]/src/components/justdial/DesktopServiceCategoryPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesktopServiceCategoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paintbrush.js [app-client] (ecmascript) <export default as Paintbrush>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-client] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scissors.js [app-client] (ecmascript) <export default as Scissors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sofa$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sofa$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sofa.js [app-client] (ecmascript) <export default as Sofa>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fan$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/fan.js [app-client] (ecmascript) <export default as Fan>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-client] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-client] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/justdial/StoreCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$service$2d$category$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/service-category-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/* ═══════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════ */ const serviceCategories = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fan$3e$__["Fan"],
        label: "AC Repair",
        slug: "ac-repair",
        providers: 1200,
        bg: "#DBEAFE",
        color: "#1D4ED8"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        label: "Electrician",
        slug: "electrician",
        providers: 980,
        bg: "#FEF3C7",
        color: "#B45309"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        label: "Plumber",
        slug: "plumber",
        providers: 850,
        bg: "#D1FAE5",
        color: "#047857"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__["Paintbrush"],
        label: "Painter",
        slug: "painter",
        providers: 670,
        bg: "#FCE7F3",
        color: "#BE185D"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sofa$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sofa$3e$__["Sofa"],
        label: "Carpenter",
        slug: "carpenter",
        providers: 540,
        bg: "#FED7AA",
        color: "#C2410C"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"],
        label: "Pest Control",
        slug: "pest-control",
        providers: 430,
        bg: "#E0E7FF",
        color: "#4338CA"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        label: "Cleaning",
        slug: "deep-cleaning",
        providers: 760,
        bg: "#CCFBF1",
        color: "#0F766E"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
        label: "Salon at Home",
        slug: "salon-at-home",
        providers: 620,
        bg: "#FDF2F8",
        color: "#BE185D"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        label: "Appliance Repair",
        slug: "appliance-repair",
        providers: 890,
        bg: "#FEE2E2",
        color: "#DC2626"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
        label: "AC Installation",
        slug: "ac-installation",
        providers: 340,
        bg: "#EDE9FE",
        color: "#7C3AED"
    }
];
const topProviders = [
    {
        name: "Rajesh AC Services",
        service: "AC Repair & Service",
        rating: 4.8,
        reviews: 2340,
        jobs: 5600,
        price: "\u20b9299",
        verified: true,
        gradient: "from-blue-500 to-blue-600",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fan$3e$__["Fan"],
        experience: "8 yrs",
        slug: "ac-repair"
    },
    {
        name: "Sharma Electric Works",
        service: "Electrician & Wiring",
        rating: 4.7,
        reviews: 1890,
        jobs: 4200,
        price: "\u20b9199",
        verified: true,
        gradient: "from-amber-500 to-orange-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        experience: "12 yrs",
        slug: "electrician"
    },
    {
        name: "DeepClean Pro",
        service: "Deep Home Cleaning",
        rating: 4.9,
        reviews: 3120,
        jobs: 7800,
        price: "\u20b9499",
        verified: true,
        gradient: "from-emerald-500 to-teal-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        experience: "5 yrs",
        slug: "deep-cleaning"
    },
    {
        name: "Gupta Plumbing",
        service: "Plumber & Fitting",
        rating: 4.6,
        reviews: 980,
        jobs: 2100,
        price: "\u20b9249",
        verified: true,
        gradient: "from-green-500 to-emerald-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        experience: "10 yrs",
        slug: "plumber"
    },
    {
        name: "ColorCraft Painters",
        service: "Painting & Wall Work",
        rating: 4.5,
        reviews: 870,
        jobs: 1500,
        price: "\u20b91,499",
        verified: false,
        gradient: "from-purple-500 to-indigo-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__["Paintbrush"],
        experience: "6 yrs",
        slug: "painter"
    },
    {
        name: "StyleAtHome Salon",
        service: "Salon at Home",
        rating: 4.8,
        reviews: 1560,
        jobs: 3400,
        price: "\u20b9399",
        verified: true,
        gradient: "from-pink-500 to-rose-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
        experience: "4 yrs",
        slug: "salon-at-home"
    },
    {
        name: "PestShield Control",
        service: "Pest Control Services",
        rating: 4.7,
        reviews: 720,
        jobs: 1800,
        price: "\u20b9599",
        verified: true,
        gradient: "from-indigo-500 to-violet-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"],
        experience: "7 yrs",
        slug: "pest-control"
    },
    {
        name: "QuickFix Appliances",
        service: "Appliance Repair",
        rating: 4.6,
        reviews: 1340,
        jobs: 2900,
        price: "\u20b9349",
        verified: true,
        gradient: "from-red-500 to-rose-600",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        experience: "9 yrs",
        slug: "appliance-repair"
    }
];
const popularServices = [
    {
        name: "AC Gas Refill",
        price: "\u20b9999",
        rating: 4.5,
        reviews: 1450,
        gradient: "from-sky-400 to-blue-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fan$3e$__["Fan"],
        tag: "Bestseller",
        slug: "ac-repair"
    },
    {
        name: "Full Home Cleaning",
        price: "\u20b9749",
        rating: 4.7,
        reviews: 2890,
        gradient: "from-teal-400 to-emerald-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        tag: "Popular",
        slug: "deep-cleaning"
    },
    {
        name: "Wiring & Rewiring",
        price: "\u20b9399",
        rating: 4.6,
        reviews: 1120,
        gradient: "from-amber-400 to-orange-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        tag: "",
        slug: "electrician"
    },
    {
        name: "Bathroom Cleaning",
        price: "\u20b9349",
        rating: 4.4,
        reviews: 980,
        gradient: "from-cyan-400 to-teal-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        tag: "",
        slug: "plumber"
    },
    {
        name: "Kitchen Deep Clean",
        price: "\u20b9599",
        rating: 4.8,
        reviews: 1670,
        gradient: "from-lime-400 to-green-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        tag: "Trending",
        slug: "deep-cleaning"
    },
    {
        name: "AC Installation",
        price: "\u20b91,299",
        rating: 4.6,
        reviews: 890,
        gradient: "from-blue-400 to-indigo-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fan$3e$__["Fan"],
        tag: "",
        slug: "ac-installation"
    },
    {
        name: "Pest Control Treatment",
        price: "\u20b9599",
        rating: 4.7,
        reviews: 650,
        gradient: "from-violet-400 to-purple-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"],
        tag: "",
        slug: "pest-control"
    },
    {
        name: "Salon at Home",
        price: "\u20b9399",
        rating: 4.4,
        reviews: 1560,
        gradient: "from-pink-400 to-rose-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
        tag: "New",
        slug: "salon-at-home"
    }
];
const howItWorks = [
    {
        step: 1,
        title: "Choose Service",
        desc: "Browse our extensive catalogue and select the home service that fits your needs.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
        color: "#2563EB"
    },
    {
        step: 2,
        title: "Book Appointment",
        desc: "Pick a convenient time slot, confirm your booking, and get instant confirmation.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"],
        color: "#059669"
    },
    {
        step: 3,
        title: "Get it Done",
        desc: "A verified professional arrives at your doorstep and completes the job to perfection.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
        color: "#D97706"
    }
];
const reviews = [
    {
        name: "Priya Sharma",
        location: "Mumbai",
        rating: 5,
        text: "Amazing AC repair service! The technician was professional and fixed the issue in 20 minutes. Will definitely book again.",
        service: "AC Repair",
        avatar: "PS",
        slug: "ac-repair"
    },
    {
        name: "Amit Kumar",
        location: "Delhi",
        rating: 5,
        text: "Booked a deep cleaning session for my 3BHK. The team was punctual, thorough, and extremely professional. Highly recommended!",
        service: "Deep Cleaning",
        avatar: "AK",
        slug: "deep-cleaning"
    },
    {
        name: "Sneha Reddy",
        location: "Bangalore",
        rating: 4,
        text: "Electrician came on time and solved the complex wiring issue. Fair pricing and quality work. Very satisfied with the service.",
        service: "Electrician",
        avatar: "SR",
        slug: "electrician"
    },
    {
        name: "Rahul Verma",
        location: "Pune",
        rating: 5,
        text: "Used their painting service for my entire flat. The finish is excellent and they completed it within the promised timeline.",
        service: "Painter",
        avatar: "RV",
        slug: "painter"
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
function DesktopServiceCategoryPage({ selectedCategory }) {
    _s();
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const providersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const catSectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [providersScrollPos, setProvidersScrollPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const selectedCat = serviceCategories.find((c)=>c.slug === selectedCategory);
    const _filteredProviders = selectedCategory ? topProviders.filter((p)=>p.slug === selectedCategory) : topProviders;
    const filteredProviders = _filteredProviders.length > 0 ? _filteredProviders : topProviders;
    const _filteredPopular = selectedCategory ? popularServices.filter((s)=>s.slug === selectedCategory) : popularServices;
    const filteredPopular = _filteredPopular.length > 0 ? _filteredPopular : popularServices;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesktopServiceCategoryPage.useEffect": ()=>{
            if (selectedCategory && catSectionRef.current) {
                setTimeout({
                    "DesktopServiceCategoryPage.useEffect": ()=>catSectionRef.current?.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                }["DesktopServiceCategoryPage.useEffect"], 300);
            }
        }
    }["DesktopServiceCategoryPage.useEffect"], [
        selectedCategory
    ]);
    const scrollProviders = (dir)=>{
        if (!providersRef.current) return;
        providersRef.current.scrollBy({
            left: dir === "right" ? 300 : -300,
            behavior: "smooth"
        });
    };
    const handleProvidersScroll = ()=>{
        if (providersRef.current) {
            setProvidersScrollPos(providersRef.current.scrollLeft);
        }
    };
    const stats = [
        {
            label: "Service Providers",
            value: "50,000+",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        },
        {
            label: "Services Completed",
            value: "2M+",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"]
        },
        {
            label: "Cities Covered",
            value: "500+",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"]
        },
        {
            label: "Avg Rating",
            value: "4.6",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
        }
    ];
    const getIconColor = (gradient)=>{
        if (gradient.includes("blue")) return "#1D4ED8";
        if (gradient.includes("amber") || gradient.includes("orange")) return "#B45309";
        if (gradient.includes("emerald") || gradient.includes("green") || gradient.includes("teal") || gradient.includes("lime")) return "#047857";
        if (gradient.includes("pink") || gradient.includes("rose")) return "#BE185D";
        if (gradient.includes("purple") || gradient.includes("violet") || gradient.includes("indigo")) return "#7C3AED";
        if (gradient.includes("red")) return "#DC2626";
        if (gradient.includes("cyan") || gradient.includes("sky")) return "#0284C7";
        return "#374151";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "min-h-screen bg-gray-50",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.3
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 flex items-center justify-between h-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex items-center gap-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-gray-400 hover:text-[#0056b3] transition-colors flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        " Home"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-3.5 h-3.5 text-gray-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-900 font-medium",
                                    children: "Home Services"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        " Share"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSaved(!saved),
                                    className: `flex items-center gap-1.5 px-3 py-1.5 text-sm border rounded-lg transition-colors ${saved ? "border-amber-300 bg-amber-50 text-amber-700" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                            className: `w-4 h-4 ${saved ? "fill-amber-500 text-amber-500" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        saved ? "Saved" : "Save"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gradient-to-br from-[#0056b3] to-[#003d80]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 py-14",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative rounded-3xl overflow-hidden",
                        style: {
                            background: "linear-gradient(135deg, #E0F2FE 0%, #F0F9FF 100%)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/30"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-8 right-32 w-28 h-28 rounded-full bg-white/20"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-16 right-48 w-4 h-4 rounded-full bg-blue-300/40"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-24 right-24 w-3 h-3 rounded-full bg-blue-400/30"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-12 right-12 w-2 h-2 rounded-full bg-blue-300/50"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-8 left-[35%] w-3 h-3 rounded-full bg-blue-200/50"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-center justify-between gap-12 px-10 py-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 max-w-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-[#0056b3]/10 text-[#0056b3] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider",
                                                    children: "India's #1 Home Services Platform"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl font-extrabold text-gray-900 leading-tight",
                                                children: "Trusted Home Services at Your Doorstep"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base text-gray-500 mt-3 leading-relaxed",
                                                children: "From AC repair to deep cleaning, get verified professionals delivered to your home with guaranteed satisfaction and best prices."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-lg shadow-black/5 border border-gray-100",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                className: "w-5 h-5 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                lineNumber: 195,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: searchQuery,
                                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                                placeholder: "Search for home services...",
                                                                className: "flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 21
                                                            }, this),
                                                            searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setSearchQuery(""),
                                                                className: "text-gray-400 hover:text-gray-600",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                    lineNumber: 205,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "bg-[#2563EB] text-white rounded-xl px-7 py-3.5 text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20",
                                                        children: "Search"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-6 mt-8",
                                                children: stats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-10 h-10 rounded-xl bg-white/80 shadow-sm flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                                                    className: "w-5 h-5 text-[#0056b3]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-lg font-bold text-gray-900",
                                                                        children: stat.value
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                        lineNumber: 222,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-400",
                                                                        children: stat.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                        lineNumber: 223,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, stat.label, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 hidden lg:block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-48 h-48 rounded-3xl bg-white/60 backdrop-blur-sm shadow-xl flex items-center justify-center text-8xl",
                                            children: "🏗️"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: catSectionRef,
                className: "max-w-7xl mx-auto px-6 py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-gray-900",
                                        children: "All Service Categories"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-400 mt-0.5",
                                        children: "Browse all available home services"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            selectedCat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/services",
                                className: "inline-flex items-center gap-1.5 bg-[#0056b3] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#004494] transition-colors",
                                children: [
                                    selectedCat.label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2",
                        style: {
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        },
                        children: [
                            serviceCategories.map((cat, idx)=>{
                                const isActive = selectedCategory === cat.slug;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 12
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.03 * idx
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    className: "flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: isActive ? "/services" : `/services?category=${cat.slug}`,
                                        className: "flex flex-col items-center gap-2 w-[96px] p-2 rounded-2xl hover:bg-white hover:shadow-md transition-all group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${isActive ? "scale-105" : ""}`,
                                                style: {
                                                    backgroundColor: isActive ? cat.color + "20" : cat.bg,
                                                    boxShadow: isActive ? `0 0 0 2px ${cat.color}` : undefined
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(cat.icon, {
                                                    className: "w-7 h-7",
                                                    style: {
                                                        color: cat.color
                                                    },
                                                    strokeWidth: 2.2
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-xs font-semibold leading-tight ${isActive ? "text-[#0056b3]" : "text-gray-800"}`,
                                                        children: cat.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-gray-400 mt-0.5",
                                                        children: [
                                                            cat.providers.toLocaleString(),
                                                            "+ Pros"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 284,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                        lineNumber: 271,
                                        columnNumber: 17
                                    }, this)
                                }, cat.slug, false, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 263,
                                    columnNumber: 15
                                }, this);
                            }),
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
                                    delay: 0.03 * serviceCategories.length
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/categories",
                                    className: "flex flex-col items-center gap-2 w-[96px] p-2 rounded-2xl hover:bg-white hover:shadow-md transition-all group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ring-1 ring-gray-200 group-hover:scale-110 transition-transform",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                className: "w-7 h-7 text-gray-600",
                                                strokeWidth: 2.5
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 306,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-semibold text-gray-700 leading-tight",
                                                    children: "More"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-gray-400 mt-0.5",
                                                    children: "View All"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 308,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            !selectedCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl sm:text-2xl font-extrabold text-gray-900",
                                children: "Browse Providers by Category"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                lineNumber: 326,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-1",
                                children: "Top-rated professionals grouped by service category"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                        lineNumber: 325,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-10",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$service$2d$category$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategorizedProviders"])().map(({ category: cat, providers }, sectionIdx)=>{
                            if (providers.length === 0) return null;
                            const visible = providers.slice(0, 3);
                            const totalCount = providers.length;
                            const professionalCount = Math.max(50, totalCount * 35);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 16
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true,
                                    margin: "-80px"
                                },
                                transition: {
                                    delay: sectionIdx * 0.03,
                                    duration: 0.4
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-5 pb-4 rounded-2xl px-4 py-3",
                                        style: {
                                            background: `linear-gradient(135deg, ${cat.color}0D, ${cat.color}06)`,
                                            borderLeft: `4px solid ${cat.color}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-11 h-11 rounded-xl flex items-center justify-center text-[22px] shrink-0 shadow-sm",
                                                        style: {
                                                            background: `${cat.color}22`
                                                        },
                                                        "aria-hidden": true,
                                                        children: cat.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-base sm:text-lg font-extrabold text-gray-900 leading-tight",
                                                                children: cat.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                lineNumber: 361,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[11px] font-bold px-2 py-0.5 rounded-full",
                                                                        style: {
                                                                            background: `${cat.color}18`,
                                                                            color: cat.color
                                                                        },
                                                                        children: [
                                                                            professionalCount.toLocaleString(),
                                                                            "+ Professionals"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                        lineNumber: 365,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-gray-500",
                                                                        children: [
                                                                            totalCount,
                                                                            " listed near you"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                        lineNumber: 371,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 352,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/service/${cat.slug}`,
                                                className: "inline-flex items-center gap-1 text-sm font-bold shrink-0 px-3.5 py-2 rounded-xl hover:opacity-90 transition-opacity",
                                                style: {
                                                    background: `${cat.color}15`,
                                                    color: cat.color
                                                },
                                                children: [
                                                    "View All",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 375,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                        lineNumber: 348,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5",
                                        children: visible.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/store/${p.id}`,
                                                className: "group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative h-32 overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `absolute inset-0 bg-gradient-to-br ${p.coverColor}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                lineNumber: 395,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-0 flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-5xl opacity-95 drop-shadow-sm group-hover:scale-110 transition-transform",
                                                                    "aria-hidden": true,
                                                                    children: p.logoEmoji
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                    lineNumber: 397,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                lineNumber: 396,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                lineNumber: 401,
                                                                columnNumber: 27
                                                            }, this),
                                                            p.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute top-2 left-2 inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm text-[10px] font-bold text-[#0056b3] px-2 py-1 rounded-md shadow-sm uppercase tracking-wide",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                        lineNumber: 404,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    " Verified"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute top-2 right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm uppercase tracking-wide flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-1 h-1 bg-white rounded-full"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                        lineNumber: 408,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    " Open"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                lineNumber: 407,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 flex flex-col flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-sm font-bold text-gray-900 leading-tight line-clamp-1",
                                                                children: p.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-gray-500 mt-1 line-clamp-1",
                                                                children: p.subCategory
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                lineNumber: 416,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5 mt-2 text-[11px]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-flex items-center gap-0.5 bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                                className: "w-3 h-3 fill-emerald-700 text-emerald-700"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                                lineNumber: 421,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            p.rating
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                        lineNumber: 420,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-400",
                                                                        children: p.totalReviews
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                        lineNumber: 424,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-300",
                                                                        children: "·"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                        lineNumber: 425,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-500 whitespace-nowrap",
                                                                        children: p.yearsInBusiness
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                        lineNumber: 426,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                lineNumber: 419,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1 mt-2 text-[11px] text-gray-500",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                        className: "w-3 h-3 shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                        lineNumber: 429,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "truncate",
                                                                        children: [
                                                                            p.area,
                                                                            ", Mumbai"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                        lineNumber: 430,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                lineNumber: 428,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between pt-3 mt-auto border-t border-gray-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] text-gray-400",
                                                                        children: "Starts from"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                        lineNumber: 433,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm font-bold text-emerald-700",
                                                                        children: p.services[0]?.price || p.priceRange?.split(" - ")[0] || "₹499"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                        lineNumber: 434,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, p.id, true, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 388,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                        lineNumber: 386,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, cat.slug, true, {
                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                lineNumber: 340,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                        lineNumber: 332,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                lineNumber: 324,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white border-y border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 py-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-gray-900",
                                            children: selectedCategory ? `${selectedCat?.label || ''} Providers` : "Top Rated Providers"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 454,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400 mt-0.5",
                                            children: "Most trusted professionals near you"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 455,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 453,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-sm text-[#0056b3] font-semibold flex items-center gap-1 hover:underline",
                                    children: [
                                        "View All ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 458,
                                            columnNumber: 24
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 457,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                            lineNumber: 452,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative group/providers",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: providersRef,
                                    onScroll: handleProvidersScroll,
                                    className: "flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth",
                                    style: {
                                        scrollbarWidth: "none",
                                        msOverflowStyle: "none"
                                    },
                                    children: filteredProviders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full py-12 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400",
                                            children: "No providers found for this category"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 470,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                        lineNumber: 469,
                                        columnNumber: 17
                                    }, this) : filteredProviders.map((provider, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            name: provider.name,
                                            category: provider.service,
                                            rating: provider.rating,
                                            reviews: provider.reviews,
                                            logoIcon: provider.icon,
                                            coverGradient: provider.gradient,
                                            href: `/explore?category=${provider.slug}`,
                                            isVerified: provider.verified,
                                            variant: "desktop",
                                            index: idx
                                        }, provider.name, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 473,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 462,
                                    columnNumber: 13
                                }, this),
                                providersScrollPos > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollProviders("left"),
                                    className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 opacity-0 group-hover/providers:opacity-100 transition-opacity z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-5 h-5 text-gray-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                        lineNumber: 494,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 490,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollProviders("right"),
                                    className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 opacity-0 group-hover/providers:opacity-100 transition-opacity z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-5 h-5 text-gray-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 497,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                            lineNumber: 461,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                    lineNumber: 451,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                lineNumber: 450,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-gray-900",
                                        children: "Popular Services"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                        lineNumber: 511,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-400 mt-0.5",
                                        children: "Most booked services near you"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                        lineNumber: 512,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                lineNumber: 510,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-sm text-[#0056b3] font-semibold flex items-center gap-1 hover:underline",
                                children: [
                                    "See All ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                        lineNumber: 515,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                lineNumber: 514,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                        lineNumber: 509,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5",
                        children: filteredPopular.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full py-12 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400",
                                children: "No popular services found for this category"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                lineNumber: 521,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                            lineNumber: 520,
                            columnNumber: 13
                        }, this) : filteredPopular.map((service, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                name: service.name,
                                category: service.tag || "Service",
                                rating: service.rating,
                                reviews: service.reviews,
                                price: service.price,
                                logoIcon: service.icon,
                                coverGradient: service.gradient,
                                href: `/explore?category=${service.slug}`,
                                variant: "desktop",
                                index: idx,
                                isFeatured: false,
                                isVerified: false
                            }, service.name, false, {
                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                lineNumber: 524,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                        lineNumber: 518,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                lineNumber: 508,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white border-y border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-900",
                                    children: "How It Works"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 547,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400 mt-2",
                                    children: "Get your home service done in 3 simple steps"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 548,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                            lineNumber: 546,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-8 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block absolute top-10 left-[calc(16.67%+40px)] w-[calc(33.33%-80px)] border-t-2 border-dashed border-blue-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 552,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(33.33%-80px)] border-t-2 border-dashed border-blue-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 553,
                                    columnNumber: 13
                                }, this),
                                howItWorks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-5 relative z-10 shadow-xl",
                                                style: {
                                                    backgroundColor: item.color
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                    className: "w-8 h-8"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                    lineNumber: 560,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 556,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-gray-800",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 562,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-400 mt-2 max-w-[280px] leading-relaxed",
                                                children: item.desc
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 563,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.step, true, {
                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                        lineNumber: 555,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                            lineNumber: 550,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                    lineNumber: 545,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                lineNumber: 544,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-gray-900 mb-6 text-center",
                        children: "Why Choose JustDial Home Services"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                        lineNumber: 572,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5",
                        children: [
                            {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                                label: "Verified Professionals",
                                desc: "All providers are background verified and trained for quality service delivery.",
                                color: "#2563EB",
                                bg: "#EFF6FF",
                                slug: "ac-repair"
                            },
                            {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
                                label: "Best Price Guarantee",
                                desc: "We match the lowest price in the market. No hidden charges, no surprises.",
                                color: "#059669",
                                bg: "#ECFDF5",
                                slug: "deep-cleaning"
                            },
                            {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                                label: "On-Time Service",
                                desc: "Punctual professionals who respect your time. Track them in real-time.",
                                color: "#D97706",
                                bg: "#FFFBEB",
                                slug: "plumber"
                            },
                            {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"],
                                label: "100% Satisfaction",
                                desc: "Not happy with the service? Get a full refund, no questions asked.",
                                color: "#DC2626",
                                bg: "#FEF2F2",
                                slug: "electrician"
                            }
                        ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/explore?category=${item.slug}`,
                                    className: "block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                                            style: {
                                                backgroundColor: item.bg
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                className: "w-6 h-6",
                                                style: {
                                                    color: item.color
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 588,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 587,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-gray-900",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 590,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400 mt-1.5 leading-relaxed",
                                            children: item.desc
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 591,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 586,
                                    columnNumber: 15
                                }, this)
                            }, item.label, false, {
                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                lineNumber: 580,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                        lineNumber: 573,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                lineNumber: 571,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white border-y border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 py-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-gray-900",
                                            children: "Customer Reviews"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 603,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400 mt-0.5",
                                            children: "What our customers say about us"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 604,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 602,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "w-4 h-4 text-amber-500 fill-amber-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 607,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-bold text-gray-800",
                                            children: "4.6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 608,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-400",
                                            children: "avg rating"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 609,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 606,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                            lineNumber: 601,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5",
                            children: reviews.map((review, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/explore?category=${review.slug}`,
                                        className: "block bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-full bg-gradient-to-br from-[#0056b3] to-[#2563EB] flex items-center justify-center text-white text-sm font-bold",
                                                        children: review.avatar
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                        lineNumber: 622,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-bold text-gray-900",
                                                                children: review.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                lineNumber: 626,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-400",
                                                                children: [
                                                                    review.location,
                                                                    " \\u2022 ",
                                                                    review.service
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                                lineNumber: 627,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                        lineNumber: 625,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 621,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-0.5 mb-2.5",
                                                children: Array.from({
                                                    length: 5
                                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                        className: `w-3.5 h-3.5 ${i < review.rating ? "text-amber-500 fill-amber-500" : "text-gray-200"}`
                                                    }, i, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                        lineNumber: 632,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 630,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 leading-relaxed",
                                                children: review.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 635,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                        lineNumber: 620,
                                        columnNumber: 17
                                    }, this)
                                }, review.name, false, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 614,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                            lineNumber: 612,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                    lineNumber: 600,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                lineNumber: 599,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl sm:rounded-3xl overflow-hidden relative p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-10",
                    style: {
                        background: "linear-gradient(135deg, #059669, #10B981)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                            lineNumber: 649,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-4 right-40 w-16 h-16 rounded-full bg-white/8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                            lineNumber: 650,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-12 right-24 w-3 h-3 rounded-full bg-white/30"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                            lineNumber: 651,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex-1 max-w-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-extrabold text-white",
                                    children: "Become a Service Provider"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 653,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/80 mt-3 leading-relaxed",
                                    children: "Join 50,000+ professionals on JustDial. Grow your business, get more leads, and reach millions of customers across India."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 654,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-white text-emerald-700 rounded-xl px-8 py-3 text-sm font-bold hover:bg-emerald-50 transition-colors shadow-lg",
                                            children: "Register Free \\u2192"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 658,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-white/80 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                    lineNumber: 662,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "100% Free. No commission."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                    lineNumber: 663,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 661,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 657,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                            lineNumber: 652,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 hidden lg:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-36 h-36 rounded-3xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-7xl shadow-2xl",
                                children: "💻"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                lineNumber: 668,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                            lineNumber: 667,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                    lineNumber: 645,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                lineNumber: 644,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-gray-900 text-gray-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-white mb-2",
                                            children: "JustDial"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 680,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400 leading-relaxed",
                                            children: "India's #1 local search engine for home services, businesses, and more."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 681,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-4 text-sm text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                    lineNumber: 685,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "1800-123-4567"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                    lineNumber: 685,
                                                    columnNumber: 47
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 684,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-1.5 text-sm text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                    lineNumber: 688,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "support@justdial.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                    lineNumber: 688,
                                                    columnNumber: 46
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 687,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 679,
                                    columnNumber: 13
                                }, this),
                                Object.entries(footerLinks).map(([title, links])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-semibold text-white mb-4",
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 693,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2.5",
                                                children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "text-sm text-gray-400 hover:text-white transition-colors",
                                                            children: link
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                            lineNumber: 697,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, link, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                        lineNumber: 696,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 694,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, title, true, {
                                        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                        lineNumber: 692,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                            lineNumber: 678,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: "\\u00a9 2025 JustDial Clone. All rights reserved."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 705,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"]
                                    ].map((Icon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-gray-500 hover:text-white transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                                lineNumber: 708,
                                                columnNumber: 98
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                            lineNumber: 708,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                                    lineNumber: 706,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                            lineNumber: 704,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                    lineNumber: 677,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
                lineNumber: 676,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/justdial/DesktopServiceCategoryPage.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_s(DesktopServiceCategoryPage, "3mRk9nwV1Tw3ggze92YJSCQCpbg=");
_c = DesktopServiceCategoryPage;
var _c;
__turbopack_context__.k.register(_c, "DesktopServiceCategoryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/services/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$MobileServiceCategoryPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/justdial/MobileServiceCategoryPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$DesktopServiceCategoryPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/justdial/DesktopServiceCategoryPage.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useWindowSize() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "useWindowSize.useSyncExternalStore": (cb)=>{
            window.addEventListener("resize", cb);
            return ({
                "useWindowSize.useSyncExternalStore": ()=>window.removeEventListener("resize", cb)
            })["useWindowSize.useSyncExternalStore"];
        }
    }["useWindowSize.useSyncExternalStore"], {
        "useWindowSize.useSyncExternalStore": ()=>window.innerWidth
    }["useWindowSize.useSyncExternalStore"], {
        "useWindowSize.useSyncExternalStore": ()=>1024
    }["useWindowSize.useSyncExternalStore"]);
}
_s(useWindowSize, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
function ServicesContent() {
    _s1();
    const isMobile = useWindowSize() < 768;
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const selectedCategory = searchParams.get("category") || undefined;
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServicesContent.useEffect": ()=>{
            setMounted(true);
        }
    }["ServicesContent.useEffect"], []);
    // Avoid hydration mismatch: server renders desktop (1024), client may render mobile.
    // Show nothing until client-side mount confirms the correct layout.
    if (!mounted) {
        return null;
    }
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$MobileServiceCategoryPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            selectedCategory: selectedCategory
        }, void 0, false, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 33,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$DesktopServiceCategoryPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        selectedCategory: selectedCategory
    }, void 0, false, {
        fileName: "[project]/src/app/services/page.tsx",
        lineNumber: 36,
        columnNumber: 10
    }, this);
}
_s1(ServicesContent, "bqjBNaEBX2Zv8ZyyAJROlCeZ6Kk=", false, function() {
    return [
        useWindowSize,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = ServicesContent;
function ServicesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: null,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServicesContent, {}, void 0, false, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/services/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c1 = ServicesPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "ServicesContent");
__turbopack_context__.k.register(_c1, "ServicesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_cb643053._.js.map