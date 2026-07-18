(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/lib/store-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllStoreIds",
    ()=>getAllStoreIds,
    "getBusinessTabs",
    ()=>getBusinessTabs,
    "getBusinessType",
    ()=>getBusinessType,
    "getBusinessTypeLabel",
    ()=>getBusinessTypeLabel,
    "getStoreById",
    ()=>getStoreById,
    "storeDatabase",
    ()=>storeDatabase
]);
function getBusinessType(category) {
    const cat = category.toLowerCase();
    if (cat.includes("restaurant")) return "restaurant";
    if (cat.includes("cafe")) return "restaurant"; // cafes share the restaurant layout (Menu tab)
    if (cat.includes("electronics") || cat.includes("pharmacy") || cat.includes("medical") || cat.includes("grocery")) return "product_store";
    // salon, gym/fitness, dental, beauty, logistics, education, venue, etc.
    return "service_provider";
}
function getBusinessTabs(store) {
    const type = getBusinessType(store.category);
    switch(type){
        case "restaurant":
            {
                // Restaurants & Cafes: Overview → Menu → [Products] → Reviews
                const tabs = [
                    {
                        id: "overview",
                        label: "Overview"
                    },
                    {
                        id: "menu",
                        label: "Menu"
                    }
                ];
                if (store.products.length > 0) tabs.push({
                    id: "products",
                    label: "Products"
                });
                tabs.push({
                    id: "reviews",
                    label: "Reviews"
                });
                return tabs;
            }
        case "product_store":
            {
                // Electronics, Pharmacy, Grocery: Overview → [Services] → Products → Reviews
                const tabs = [
                    {
                        id: "overview",
                        label: "Overview"
                    }
                ];
                if (store.services.length > 0) tabs.push({
                    id: "services",
                    label: "Services"
                });
                tabs.push({
                    id: "products",
                    label: "Products"
                });
                tabs.push({
                    id: "reviews",
                    label: "Reviews"
                });
                return tabs;
            }
        case "service_provider":
        default:
            {
                // Salons, Gyms, Dental, Beauty, Packers, School, Venue: Overview → Services → [Products] → Reviews
                const tabs = [
                    {
                        id: "overview",
                        label: "Overview"
                    },
                    {
                        id: "services",
                        label: "Services"
                    }
                ];
                if (store.products.length > 0) tabs.push({
                    id: "products",
                    label: "Products"
                });
                tabs.push({
                    id: "reviews",
                    label: "Reviews"
                });
                return tabs;
            }
    }
}
function getBusinessTypeLabel(category) {
    const type = getBusinessType(category);
    switch(type){
        case "restaurant":
            return "Menu & Food";
        case "product_store":
            return "Products & Store";
        case "service_provider":
            return "Services & Pricing";
    }
}
const storeDatabase = {
    "shivam-fast-food": {
        id: "shivam-fast-food",
        name: "Shivam Fast Food",
        category: "Restaurant",
        subCategory: "Fast Food • North Indian • Chinese",
        logoEmoji: "🍔",
        coverColor: "from-orange-500 to-red-500",
        verified: true,
        rating: "4.5",
        totalRatings: "2,847",
        totalReviews: "1,256",
        address: "Shop No. 12, MG Road, Andheri West, Mumbai - 400053",
        area: "Andheri West",
        city: "Mumbai",
        phone: "+91 98765 43210",
        phone2: "+91 22 2678 9012",
        email: "shivamfastfood@gmail.com",
        website: "www.shivamfastfood.in",
        yearsInBusiness: "8+",
        description: "Shivam Fast Food is one of the most popular fast food joints in Andheri West, Mumbai. Known for its delicious Pav Bhaji, Chole Bhature, and wide variety of Chinese dishes. We use fresh ingredients and maintain highest hygiene standards. Perfect for family dining, birthday parties, and quick meals.",
        timing: "10:00 AM - 11:30 PM",
        timingNote: "Open all 7 days",
        paymentMethods: [
            "Cash",
            "UPI",
            "Card",
            "Sodexo"
        ],
        amenities: [
            "Air Conditioned",
            "Indoor Seating",
            "Home Delivery",
            "Takeaway",
            "Parking Available",
            "WiFi"
        ],
        services: [
            {
                name: "Pav Bhaji",
                price: "₹120",
                popular: true
            },
            {
                name: "Chole Bhature",
                price: "₹150",
                popular: true
            },
            {
                name: "Veg Thali",
                price: "₹180",
                duration: "15 min"
            },
            {
                name: "Paneer Tikka",
                price: "₹220",
                popular: true
            },
            {
                name: "Manchurian",
                price: "₹160",
                duration: "12 min"
            },
            {
                name: "Fried Rice",
                price: "₹140"
            },
            {
                name: "Hakka Noodles",
                price: "₹130"
            },
            {
                name: "Cold Coffee",
                price: "₹80"
            },
            {
                name: "Mango Lassi",
                price: "₹70"
            },
            {
                name: "Butter Naan",
                price: "₹40"
            },
            {
                name: "Dal Makhani",
                price: "₹160"
            },
            {
                name: "Spring Roll",
                price: "₹120"
            }
        ],
        reviews: [
            {
                id: "r1",
                name: "Rahul Sharma",
                avatar: "RS",
                rating: 5,
                date: "2 days ago",
                text: "Amazing Pav Bhaji! The taste is exactly like the one we get at Juhu beach. Must try for fast food lovers. Service is quick and staff is friendly.",
                helpful: 24
            },
            {
                id: "r2",
                name: "Priya Patel",
                avatar: "PP",
                rating: 4,
                date: "1 week ago",
                text: "Good food, reasonable prices. The Chole Bhature is excellent. Only issue is parking can be tricky during peak hours.",
                helpful: 18
            },
            {
                id: "r3",
                name: "Amit Desai",
                avatar: "AD",
                rating: 5,
                date: "2 weeks ago",
                text: "Best fast food in Andheri West. We order from here every weekend. Paneer Tikka and Hakka Noodles are our favorites!",
                helpful: 31
            },
            {
                id: "r4",
                name: "Sneha Kulkarni",
                avatar: "SK",
                rating: 4,
                date: "3 weeks ago",
                text: "Nice family restaurant. Food quality is consistent. The Veg Thali is value for money. Would recommend for casual dining.",
                helpful: 12
            }
        ],
        photos: [
            "/images/stores/shivam-fast-food.jpg"
        ],
        likes: "1.2K",
        views: "45,230",
        followers: "856",
        products: [
            {
                "id": "sf-p1",
                "name": "Masala Chai Premix (Pack of 20)",
                "price": "₹199",
                "originalPrice": "₹299",
                "image": "chai-premix",
                "rating": 4.3,
                "reviews": 89,
                "badge": "Bestseller",
                "inStock": true,
                "category": "Beverages",
                "description": "Authentic masala chai premix made with premium Assam tea and aromatic spices. Just add hot water and enjoy!"
            },
            {
                "id": "sf-p2",
                "name": "Pav Bhaji Masala (200g)",
                "price": "₹85",
                "originalPrice": "₹120",
                "image": "pavbhaji-masala",
                "rating": 4.5,
                "reviews": 156,
                "badge": "Top Rated",
                "inStock": true,
                "category": "Spices",
                "description": "Our secret Pav Bhaji masala blend used in the restaurant. Now you can make restaurant-style Pav Bhaji at home."
            },
            {
                "id": "sf-p3",
                "name": "Mango Lassi Concentrate (1L)",
                "price": "₹250",
                "image": "mango-lassi",
                "rating": 4.1,
                "reviews": 67,
                "inStock": true,
                "category": "Beverages",
                "description": "Thick mango lassi concentrate made from Alphonso mangoes. Mix 1:3 with cold milk for perfect lassi."
            },
            {
                "id": "sf-p4",
                "name": "Frozen Chole Bhature (Pack of 5)",
                "price": "₹350",
                "originalPrice": "₹450",
                "image": "chole-bhature-frozen",
                "rating": 4.4,
                "reviews": 203,
                "badge": "Popular",
                "inStock": true,
                "category": "Frozen Food",
                "description": "Ready-to-fry frozen Chole Bhature. Includes spiced chole. Just heat and serve in 10 minutes."
            }
        ],
        similarStores: [
            {
                id: "freshbite-restaurant",
                name: "FreshBite Restaurant",
                category: "Restaurant",
                rating: "4.6",
                area: "Bandra West",
                logoEmoji: "🍽️"
            },
            {
                id: "green-leaf-cafe",
                name: "Green Leaf Cafe",
                category: "Cafe",
                rating: "4.8",
                area: "Bandra",
                logoEmoji: "☕"
            },
            {
                id: "look-style-salon",
                name: "Look & Style Salon",
                category: "Salon",
                rating: "4.7",
                area: "Malad West",
                logoEmoji: "✂️"
            }
        ],
        socialLinks: [
            {
                platform: "facebook",
                url: "#"
            },
            {
                platform: "instagram",
                url: "#"
            }
        ]
    },
    "look-style-salon": {
        id: "look-style-salon",
        name: "Look & Style Salon",
        category: "Beauty & Salon",
        subCategory: "Unisex Salon • Hair • Skin • Bridal",
        logoEmoji: "✂️",
        coverColor: "from-pink-500 to-purple-600",
        verified: true,
        rating: "4.7",
        totalRatings: "3,412",
        totalReviews: "1,890",
        address: "2nd Floor, Link Square Mall, Link Road, Malad West, Mumbai - 400064",
        area: "Malad West",
        city: "Mumbai",
        phone: "+91 87654 32109",
        phone2: "+91 22 2881 2345",
        email: "lookstyle@gmail.com",
        website: "www.lookstylesalon.com",
        yearsInBusiness: "12+",
        description: "Look & Style Salon is a premium unisex salon offering world-class hair, skin, and beauty services. Our team of experienced stylists use top-quality products from L'Oréal, Schwarzkopf, and Kerastase. From trendy haircuts to bridal makeup, we've got you covered.",
        timing: "9:00 AM - 9:30 PM",
        timingNote: "Closed on Monday",
        paymentMethods: [
            "Cash",
            "UPI",
            "Card",
            "Sodexo",
            "EMI"
        ],
        amenities: [
            "Air Conditioned",
            "WiFi",
            "Parking",
            "Music",
            "Refreshments",
            "Separate Male/Female Section"
        ],
        services: [
            {
                name: "Men's Haircut",
                price: "₹250",
                popular: true,
                duration: "30 min"
            },
            {
                name: "Women's Haircut",
                price: "₹500",
                popular: true,
                duration: "45 min"
            },
            {
                name: "Hair Coloring",
                price: "₹1,200",
                duration: "90 min"
            },
            {
                name: "Facial (Gold)",
                price: "₹800",
                popular: true,
                duration: "60 min"
            },
            {
                name: "Bridal Makeup",
                price: "₹15,000",
                duration: "3 hrs"
            },
            {
                name: "Manicure & Pedicure",
                price: "₹600",
                duration: "45 min"
            },
            {
                name: "Hair Spa",
                price: "₹700",
                popular: true,
                duration: "50 min"
            },
            {
                name: "Beard Grooming",
                price: "₹150",
                duration: "15 min"
            },
            {
                name: "Keratin Treatment",
                price: "₹4,500",
                duration: "3 hrs"
            },
            {
                name: "Waxing (Full Arms)",
                price: "₹350",
                duration: "20 min"
            },
            {
                name: "Head Massage",
                price: "₹300",
                duration: "30 min"
            },
            {
                name: "Threading",
                price: "₹50",
                duration: "10 min"
            }
        ],
        reviews: [
            {
                id: "r1",
                name: "Neha Singh",
                avatar: "NS",
                rating: 5,
                date: "3 days ago",
                text: "Best salon in Malad! Got my bridal makeup done here and it was flawless. The team is super professional and friendly.",
                helpful: 45
            },
            {
                id: "r2",
                name: "Rohan Mehta",
                avatar: "RM",
                rating: 5,
                date: "1 week ago",
                text: "Amazing haircut by Raju bhai. He understands exactly what you want. The hair spa is also very relaxing. Highly recommended!",
                helpful: 38
            },
            {
                id: "r3",
                name: "Kavita Joshi",
                avatar: "KJ",
                rating: 4,
                date: "2 weeks ago",
                text: "Good quality services. The keratin treatment made my hair super smooth. A bit pricey but worth it for the quality.",
                helpful: 22
            }
        ],
        photos: [
            "/images/stores/look-style-salon.jpg"
        ],
        likes: "2.8K",
        views: "78,450",
        followers: "2,340",
        products: [
            {
                "id": "ls-p1",
                "name": "L'Oreal Professional Shampoo (300ml)",
                "price": "₹550",
                "originalPrice": "₹750",
                "image": "loreal-shampoo",
                "rating": 4.6,
                "reviews": 312,
                "badge": "Bestseller",
                "inStock": true,
                "category": "Hair Care",
                "description": "Professional grade shampoo used in our salon. Suitable for all hair types. Contains keratin and argan oil."
            },
            {
                "id": "ls-p2",
                "name": "Schwarzkopf Hair Color Kit",
                "price": "₹420",
                "image": "schwarzkopf-color",
                "rating": 4.3,
                "reviews": 178,
                "inStock": true,
                "category": "Hair Color",
                "description": "Professional hair color kit with developer. Ammonia-free formula lasts up to 6 weeks."
            },
            {
                "id": "ls-p3",
                "name": "Kerastase Hair Serum (50ml)",
                "price": "₹1,200",
                "originalPrice": "₹1,500",
                "image": "kerastase-serum",
                "rating": 4.8,
                "reviews": 95,
                "badge": "Premium",
                "inStock": true,
                "category": "Hair Care",
                "description": "Luxury hair serum for frizz control and shine. Enriched with camelina oil and vitamin E."
            }
        ],
        similarStores: [
            {
                id: "stylehub-salon",
                name: "StyleHub Salon",
                category: "Salon",
                rating: "4.8",
                area: "Andheri West",
                logoEmoji: "💅"
            },
            {
                id: "glow-beauty",
                name: "Glow Beauty Parlour",
                category: "Beauty",
                rating: "4.8",
                area: "Bandra",
                logoEmoji: "💄"
            },
            {
                id: "shivam-fast-food",
                name: "Shivam Fast Food",
                category: "Restaurant",
                rating: "4.5",
                area: "Andheri West",
                logoEmoji: "🍔"
            }
        ],
        socialLinks: [
            {
                platform: "instagram",
                url: "#"
            },
            {
                platform: "facebook",
                url: "#"
            }
        ]
    },
    "carewell-pharmacy": {
        id: "carewell-pharmacy",
        name: "CareWell Pharmacy",
        category: "Medical",
        subCategory: "Pharmacy • Medical Store • Healthcare",
        logoEmoji: "💊",
        coverColor: "from-green-500 to-teal-600",
        verified: true,
        rating: "4.6",
        totalRatings: "1,890",
        totalReviews: "567",
        address: "Ground Floor, City Center Mall, Malad West, Mumbai - 400064",
        area: "Malad West",
        city: "Mumbai",
        phone: "+91 76543 21098",
        phone2: "+91 22 2880 1234",
        email: "carewellpharmacy@gmail.com",
        yearsInBusiness: "15+",
        description: "CareWell Pharmacy is a trusted medical store offering genuine medicines, surgical items, and healthcare products. We provide free home delivery of medicines within 5 km radius. Open 24/7 for emergency needs. All medicines are sourced directly from authorized distributors.",
        timing: "24 Hours Open",
        timingNote: "Open all days including public holidays",
        paymentMethods: [
            "Cash",
            "UPI",
            "Card",
            "Insurance"
        ],
        amenities: [
            "24/7 Open",
            "Home Delivery",
            "Free Consultation",
            "Parking",
            "Cold Storage",
            "Prescription Upload"
        ],
        services: [
            {
                name: "Prescription Medicines",
                popular: true
            },
            {
                name: "OTC Medicines",
                popular: true
            },
            {
                name: "Surgical Items",
                price: "Varies"
            },
            {
                name: "Baby Care Products"
            },
            {
                name: "Vitamins & Supplements",
                popular: true
            },
            {
                name: "Personal Care Products"
            },
            {
                name: "Medical Equipment on Rent",
                price: "₹500/day"
            },
            {
                name: "Free Home Delivery",
                popular: true
            },
            {
                name: "Health Checkup Packages",
                price: "₹999"
            },
            {
                name: "COVID Essentials"
            }
        ],
        reviews: [
            {
                id: "r1",
                name: "Dr. Suresh Rao",
                avatar: "SR",
                rating: 5,
                date: "5 days ago",
                text: "Reliable pharmacy with genuine medicines. I've been recommending this to my patients for years. The 24/7 service is a lifesaver.",
                helpful: 56
            },
            {
                id: "r2",
                name: "Meena Iyer",
                avatar: "MI",
                rating: 4,
                date: "2 weeks ago",
                text: "Very helpful staff. They deliver medicines quickly. The free health checkup package is a great initiative.",
                helpful: 29
            }
        ],
        photos: [
            "/images/stores/carewell-pharmacy.jpg"
        ],
        likes: "1.5K",
        views: "56,780",
        followers: "1,230",
        products: [
            {
                "id": "cp-p1",
                "name": "Dabur Chyawanprash (500g)",
                "price": "₹310",
                "originalPrice": "₹399",
                "image": "chyawanprash",
                "rating": 4.5,
                "reviews": 890,
                "badge": "Bestseller",
                "inStock": true,
                "category": "Ayurvedic",
                "description": "Clinically proven immunity booster with 40+ Ayurvedic ingredients. Trusted by millions of families."
            },
            {
                "id": "cp-p2",
                "name": "Volini Spray (60g)",
                "price": "₹230",
                "image": "volini-spray",
                "rating": 4.2,
                "reviews": 456,
                "inStock": true,
                "category": "Pain Relief",
                "description": "Fast-acting pain relief spray for muscle and joint pain. Contains diclofenac diethylamine."
            },
            {
                "id": "cp-p3",
                "name": "Ensure Protein Powder (400g)",
                "price": "₹780",
                "originalPrice": "₹950",
                "image": "ensure-protein",
                "rating": 4.7,
                "reviews": 234,
                "badge": "Popular",
                "inStock": true,
                "category": "Nutrition",
                "description": "Complete nutrition powder for adults. Provides 32 essential nutrients. Vanilla flavor."
            },
            {
                "id": "cp-p4",
                "name": "Accu-Chek Guide Glucometer Kit",
                "price": "₹1,250",
                "originalPrice": "₹1,800",
                "image": "glucometer",
                "rating": 4.6,
                "reviews": 567,
                "badge": "Top Rated",
                "inStock": true,
                "category": "Medical Devices",
                "description": "Easy-to-use blood glucose monitoring system. Includes 10 test strips and lancets."
            },
            {
                "id": "cp-p5",
                "name": "Dettol Antiseptic Liquid (500ml)",
                "price": "₹199",
                "originalPrice": "₹250",
                "image": "dettol-liquid",
                "rating": 4.4,
                "reviews": 1230,
                "inStock": true,
                "category": "Antiseptics",
                "description": "Trusted antiseptic liquid for first aid, personal hygiene, and household cleaning."
            }
        ],
        similarStores: [
            {
                id: "sharma-dental",
                name: "Sharma Dental Clinic",
                category: "Dentist",
                rating: "4.9",
                area: "Kandivali West",
                logoEmoji: "🦷"
            },
            {
                id: "fresh-mart-grocery",
                name: "Fresh Mart Grocery",
                category: "Grocery",
                rating: "4.4",
                area: "Malad West",
                logoEmoji: "🛒"
            },
            {
                id: "look-style-salon",
                name: "Look & Style Salon",
                category: "Salon",
                rating: "4.7",
                area: "Malad West",
                logoEmoji: "✂️"
            }
        ],
        socialLinks: [
            {
                platform: "facebook",
                url: "#"
            }
        ]
    },
    "fresh-mart-grocery": {
        id: "fresh-mart-grocery",
        name: "Fresh Mart Grocery",
        category: "Grocery",
        subCategory: "Supermarket • Grocery • Daily Needs",
        logoEmoji: "🛒",
        coverColor: "from-emerald-500 to-green-600",
        verified: true,
        rating: "4.4",
        totalRatings: "4,215",
        totalReviews: "2,100",
        address: "SV Road, Malad West, Mumbai - 400064",
        area: "Malad West",
        city: "Mumbai",
        phone: "+91 65432 10987",
        email: "freshmart@gmail.com",
        website: "www.freshmartgrocery.in",
        yearsInBusiness: "10+",
        description: "Fresh Mart Grocery is your one-stop shop for all daily needs. We offer fresh fruits, vegetables, dairy products, packaged food, household items, and much more. Our products are quality-checked and we offer the best prices in the area.",
        timing: "7:00 AM - 10:30 PM",
        timingNote: "Open all 7 days",
        paymentMethods: [
            "Cash",
            "UPI",
            "Card",
            "Sodexo"
        ],
        amenities: [
            "Air Conditioned",
            "Parking",
            "Home Delivery",
            "Bulk Orders",
            "Credit Facility",
            "Trolley Available"
        ],
        services: [
            {
                name: "Fresh Fruits & Vegetables",
                popular: true
            },
            {
                name: "Dairy Products",
                popular: true
            },
            {
                name: "Packaged Food",
                popular: true
            },
            {
                name: "Household Items"
            },
            {
                name: "Personal Care"
            },
            {
                name: "Beverages & Snacks"
            },
            {
                name: "Baby Products"
            },
            {
                name: "Monthly Grocery Kit",
                price: "₹2,999",
                popular: true
            },
            {
                name: "Free Home Delivery",
                popular: true
            }
        ],
        reviews: [
            {
                id: "r1",
                name: "Anita Sharma",
                avatar: "AS",
                rating: 4,
                date: "1 day ago",
                text: "Good quality fruits and vegetables. Prices are competitive. Home delivery is quick and reliable.",
                helpful: 15
            },
            {
                id: "r2",
                name: "Vikram Patil",
                avatar: "VP",
                rating: 5,
                date: "4 days ago",
                text: "The monthly grocery kit is excellent value for money. Fresh products and well-organized store. My go-to grocery shop.",
                helpful: 20
            }
        ],
        photos: [
            "/images/stores/fresh-mart-grocery.jpg"
        ],
        likes: "980",
        views: "34,560",
        followers: "678",
        products: [
            {
                "id": "fm-p1",
                "name": "Tata Salt (1kg)",
                "price": "₹28",
                "image": "tata-salt",
                "rating": 4.3,
                "reviews": 2340,
                "badge": "Essential",
                "inStock": true,
                "category": "Grocery",
                "description": "India's most trusted salt brand. Iodized for thyroid health."
            },
            {
                "id": "fm-p2",
                "name": "Fortune Sunflower Oil (1L)",
                "price": "₹155",
                "originalPrice": "₹180",
                "image": "fortune-oil",
                "rating": 4.5,
                "reviews": 1567,
                "inStock": true,
                "category": "Cooking Oil",
                "description": "Light and healthy cooking oil. Rich in Vitamin E and Omega-6 fatty acids."
            },
            {
                "id": "fm-p3",
                "name": "Aashirvaad Atta (5kg)",
                "price": "₹265",
                "originalPrice": "₹310",
                "image": "aashirvaad-atta",
                "rating": 4.7,
                "reviews": 3456,
                "badge": "Bestseller",
                "inStock": true,
                "category": "Flour",
                "description": "100% whole wheat atta made from the finest grains. Soft rotis every time."
            },
            {
                "id": "fm-p4",
                "name": "Amul Butter (500g)",
                "price": "₹270",
                "image": "amul-butter",
                "rating": 4.8,
                "reviews": 4567,
                "badge": "Popular",
                "inStock": true,
                "category": "Dairy",
                "description": "Pure and creamy butter made from fresh cream. Perfect for bread, cooking, and baking."
            },
            {
                "id": "fm-p5",
                "name": "Basmati Rice Premium (5kg)",
                "price": "₹450",
                "originalPrice": "₹550",
                "image": "basmati-rice",
                "rating": 4.4,
                "reviews": 890,
                "badge": "Premium",
                "inStock": true,
                "category": "Rice",
                "description": "Extra-long grain basmati rice aged for 2 years. Aromatic and fluffy."
            },
            {
                "id": "fm-p6",
                "name": "Maggi Noodles (Pack of 12)",
                "price": "₹168",
                "originalPrice": "₹192",
                "image": "maggi-noodles",
                "rating": 4.6,
                "reviews": 6789,
                "inStock": true,
                "category": "Instant Food",
                "description": "India's favorite 2-minute noodles. Perfect taste in every bite."
            }
        ],
        similarStores: [
            {
                id: "carewell-pharmacy",
                name: "CareWell Pharmacy",
                category: "Pharmacy",
                rating: "4.6",
                area: "Malad West",
                logoEmoji: "💊"
            },
            {
                id: "shivam-fast-food",
                name: "Shivam Fast Food",
                category: "Restaurant",
                rating: "4.5",
                area: "Andheri West",
                logoEmoji: "🍔"
            },
            {
                id: "quickfix-electronics",
                name: "QuickFix Electronics",
                category: "Electronics",
                rating: "4.3",
                area: "Andheri East",
                logoEmoji: "📱"
            }
        ]
    },
    "quickfix-electronics": {
        id: "quickfix-electronics",
        name: "QuickFix Electronics",
        category: "Electronics",
        subCategory: "Mobile Repair • Electronics • Accessories",
        logoEmoji: "📱",
        coverColor: "from-blue-500 to-indigo-600",
        verified: true,
        rating: "4.3",
        totalRatings: "2,156",
        totalReviews: "890",
        address: "Heera Panna Mall, Hiranandani Gardens, Powai, Mumbai - 400076",
        area: "Powai",
        city: "Mumbai",
        phone: "+91 54321 09876",
        email: "quickfix@gmail.com",
        website: "www.quickfixelectronics.in",
        yearsInBusiness: "6+",
        description: "QuickFix Electronics is your trusted destination for mobile phone repairs, laptop servicing, and electronic accessories. We use genuine parts and offer warranty on all repairs. Our certified technicians can fix any brand of phone or laptop within hours.",
        timing: "10:00 AM - 9:00 PM",
        timingNote: "Closed on Sunday",
        paymentMethods: [
            "Cash",
            "UPI",
            "Card",
            "EMI"
        ],
        amenities: [
            "Air Conditioned",
            "Waiting Area",
            "WiFi",
            "Same Day Repair",
            "Warranty",
            "Genuine Parts"
        ],
        services: [
            {
                name: "Screen Replacement",
                price: "From ₹1,500",
                popular: true,
                duration: "1-2 hrs"
            },
            {
                name: "Battery Replacement",
                price: "From ₹800",
                popular: true,
                duration: "45 min"
            },
            {
                name: "Water Damage Repair",
                price: "From ₹2,000",
                duration: "2-3 days"
            },
            {
                name: "Software Update/Flash",
                price: "₹300",
                duration: "30 min"
            },
            {
                name: "Laptop Repair",
                price: "From ₹500",
                popular: true
            },
            {
                name: "Data Recovery",
                price: "From ₹2,500",
                duration: "1-2 days"
            },
            {
                name: "Phone Accessories",
                popular: true
            },
            {
                name: "Cover & Tempered Glass",
                price: "₹99"
            },
            {
                name: "Charging Port Repair",
                price: "From ₹600",
                duration: "1 hr"
            },
            {
                name: "Speaker Repair",
                price: "From ₹400",
                duration: "1 hr"
            }
        ],
        reviews: [
            {
                id: "r1",
                name: "Karan Shah",
                avatar: "KS",
                rating: 5,
                date: "2 days ago",
                text: "Got my iPhone screen replaced here. Original quality screen, looks brand new. Done within 1.5 hours. Great service!",
                helpful: 42
            },
            {
                id: "r2",
                name: "Divya Menon",
                avatar: "DM",
                rating: 4,
                date: "1 week ago",
                text: "Good service, reasonable prices. They diagnosed my laptop issue quickly and fixed it the same day. Staff is knowledgeable.",
                helpful: 19
            }
        ],
        photos: [
            "/images/stores/quickfix-electronics.jpg"
        ],
        likes: "670",
        views: "23,450",
        followers: "445",
        products: [
            {
                "id": "qe-p1",
                "name": "Tempered Glass Screen Protector (Pack of 2)",
                "price": "₹199",
                "originalPrice": "₹499",
                "image": "screen-protector",
                "rating": 4.2,
                "reviews": 345,
                "inStock": true,
                "category": "Mobile Accessories",
                "description": "9H hardness tempered glass. Anti-fingerprint and bubble-free installation."
            },
            {
                "id": "qe-p2",
                "name": "USB-C Fast Charging Cable (1m)",
                "price": "₹299",
                "originalPrice": "₹499",
                "image": "usbc-cable",
                "rating": 4.4,
                "reviews": 567,
                "badge": "Bestseller",
                "inStock": true,
                "category": "Cables",
                "description": "Nylon braided USB-C cable with 60W PD fast charging support. Durable and tangle-free."
            },
            {
                "id": "qe-p3",
                "name": "Wireless Bluetooth Earbuds",
                "price": "₹899",
                "originalPrice": "₹1,499",
                "image": "bluetooth-earbuds",
                "rating": 4.1,
                "reviews": 234,
                "badge": "Deal",
                "inStock": true,
                "category": "Audio",
                "description": "True wireless earbuds with 24hr battery life, IPX5 waterproof, and touch controls."
            },
            {
                "id": "qe-p4",
                "name": "Power Bank 10000mAh",
                "price": "₹699",
                "originalPrice": "₹999",
                "image": "powerbank-10k",
                "rating": 4.5,
                "reviews": 789,
                "badge": "Popular",
                "inStock": true,
                "category": "Power Banks",
                "description": "Compact and lightweight power bank with dual USB output. Fast charging support."
            }
        ],
        similarStores: [
            {
                id: "techfix-electronics",
                name: "TechFix Electronics",
                category: "Electronics",
                rating: "4.4",
                area: "Hiranandani",
                logoEmoji: "🔧"
            },
            {
                id: "fresh-mart-grocery",
                name: "Fresh Mart Grocery",
                category: "Grocery",
                rating: "4.4",
                area: "Malad West",
                logoEmoji: "🛒"
            },
            {
                id: "carewell-pharmacy",
                name: "CareWell Pharmacy",
                category: "Pharmacy",
                rating: "4.6",
                area: "Malad West",
                logoEmoji: "💊"
            }
        ],
        socialLinks: [
            {
                platform: "instagram",
                url: "#"
            }
        ]
    },
    "green-leaf-cafe": {
        id: "green-leaf-cafe",
        name: "Green Leaf Cafe",
        category: "Cafe",
        subCategory: "Cafe • Healthy Food • Smoothies",
        logoEmoji: "☕",
        coverColor: "from-amber-500 to-orange-500",
        verified: true,
        rating: "4.8",
        totalRatings: "5,230",
        totalReviews: "3,012",
        address: "Hill Road, Bandra West, Mumbai - 400050",
        area: "Bandra West",
        city: "Mumbai",
        phone: "+91 43210 98765",
        phone2: "+91 22 2640 5678",
        email: "greenleafcafe@gmail.com",
        website: "www.greenleafcafe.in",
        yearsInBusiness: "5+",
        description: "Green Leaf Cafe is Mumbai's favorite health-focused cafe offering organic salads, cold-pressed juices, artisan coffee, and wholesome meals. Our ingredients are sourced from local organic farms. A perfect spot for health-conscious foodies, remote workers, and weekend brunches.",
        timing: "8:00 AM - 11:00 PM",
        timingNote: "Open all 7 days",
        paymentMethods: [
            "Cash",
            "UPI",
            "Card",
            "Sodexo"
        ],
        amenities: [
            "Air Conditioned",
            "Outdoor Seating",
            "WiFi",
            "Power Outlets",
            "Instagrammable",
            "Pet Friendly"
        ],
        services: [
            {
                name: "Avocado Toast",
                price: "₹280",
                popular: true
            },
            {
                name: "Quinoa Salad Bowl",
                price: "₹320",
                popular: true
            },
            {
                name: "Cold Pressed Juice",
                price: "₹180",
                popular: true
            },
            {
                name: "Cappuccino",
                price: "₹220",
                popular: true
            },
            {
                name: "Acai Bowl",
                price: "₹350",
                duration: "10 min"
            },
            {
                name: "Grilled Chicken Wrap",
                price: "₹260"
            },
            {
                name: "Mango Smoothie",
                price: "₹200"
            },
            {
                name: "Pancake Stack",
                price: "₹240",
                popular: true
            },
            {
                name: "Chai Latte",
                price: "₹180"
            },
            {
                name: "Detox Green Juice",
                price: "₹220"
            }
        ],
        reviews: [
            {
                id: "r1",
                name: "Zara Khan",
                avatar: "ZK",
                rating: 5,
                date: "1 day ago",
                text: "My absolute favorite cafe in Mumbai! The Acai Bowl and Cappuccino are to die for. The vibe is so cozy and Instagram-worthy. Love the outdoor seating.",
                helpful: 67
            },
            {
                id: "r2",
                name: "Arjun Reddy",
                avatar: "AR",
                rating: 5,
                date: "4 days ago",
                text: "Best healthy food in Bandra. The Quinoa Salad Bowl is fresh and filling. Great WiFi, perfect for working. Staff is super friendly.",
                helpful: 51
            },
            {
                id: "r3",
                name: "Mira Kapoor",
                avatar: "MK",
                rating: 4,
                date: "1 week ago",
                text: "Love the concept of organic and healthy food. Cold pressed juices are amazing. Slightly expensive but quality justifies the price.",
                helpful: 33
            }
        ],
        photos: [
            "/images/stores/green-leaf-cafe.jpg"
        ],
        likes: "3.1K",
        views: "89,120",
        followers: "4,560",
        products: [
            {
                "id": "gl-p1",
                "name": "Organic Green Tea (25 Bags)",
                "price": "₹350",
                "originalPrice": "₹450",
                "image": "green-tea",
                "rating": 4.7,
                "reviews": 456,
                "badge": "Bestseller",
                "inStock": true,
                "category": "Beverages",
                "description": "Premium organic green tea sourced from Darjeeling estates. Rich in antioxidants."
            },
            {
                "id": "gl-p2",
                "name": "Cold Pressed Juice Set (6 Pack)",
                "price": "₹599",
                "originalPrice": "₹750",
                "image": "cold-juice-set",
                "rating": 4.5,
                "reviews": 234,
                "inStock": true,
                "category": "Beverages",
                "description": "Assorted cold pressed juices - Orange, Apple, Mixed Berry, Green Detox, Watermelon, Carrot."
            },
            {
                "id": "gl-p3",
                "name": "Granola & Berries Jar (500g)",
                "price": "₹420",
                "image": "granola-jar",
                "rating": 4.3,
                "reviews": 178,
                "badge": "Healthy",
                "inStock": true,
                "category": "Snacks",
                "description": "Crunchy granola with mixed berries, honey, and oats. Perfect breakfast or snack."
            },
            {
                "id": "gl-p4",
                "name": "GLC Reusable Coffee Cup (350ml)",
                "price": "₹550",
                "originalPrice": "₹699",
                "image": "coffee-cup",
                "rating": 4.6,
                "reviews": 89,
                "badge": "New",
                "inStock": true,
                "category": "Merchandise",
                "description": "Eco-friendly bamboo fiber coffee cup with silicone lid. BPA-free and microwave safe."
            }
        ],
        similarStores: [
            {
                id: "shivam-fast-food",
                name: "Shivam Fast Food",
                category: "Restaurant",
                rating: "4.5",
                area: "Andheri West",
                logoEmoji: "🍔"
            },
            {
                id: "freshbite-restaurant",
                name: "FreshBite Restaurant",
                category: "Restaurant",
                rating: "4.6",
                area: "Bandra West",
                logoEmoji: "🍽️"
            },
            {
                id: "look-style-salon",
                name: "Look & Style Salon",
                category: "Salon",
                rating: "4.7",
                area: "Malad West",
                logoEmoji: "✂️"
            }
        ],
        socialLinks: [
            {
                platform: "instagram",
                url: "#"
            },
            {
                platform: "facebook",
                url: "#"
            },
            {
                platform: "twitter",
                url: "#"
            }
        ]
    },
    "stylehub-salon": {
        id: "stylehub-salon",
        name: "StyleHub Salon",
        category: "Beauty & Salon",
        subCategory: "Unisex Salon • Hair • Makeup",
        logoEmoji: "💅",
        coverColor: "from-pink-500 to-rose-600",
        verified: true,
        rating: "4.8",
        totalRatings: "4,102",
        totalReviews: "2,340",
        address: "Lokhandwala Complex, Andheri West, Mumbai - 400053",
        area: "Andheri West",
        city: "Mumbai",
        phone: "+91 98112 23344",
        email: "stylehub@gmail.com",
        yearsInBusiness: "7+",
        description: "StyleHub Salon is a trendy unisex salon known for its expert stylists, premium products, and modern ambiance. From haircuts and coloring to bridal makeup and skincare, we offer a complete beauty experience. Our team stays updated with the latest trends to give you the perfect look.",
        timing: "9:30 AM - 9:00 PM",
        timingNote: "Closed on Tuesday",
        paymentMethods: [
            "Cash",
            "UPI",
            "Card",
            "Sodexo"
        ],
        amenities: [
            "Air Conditioned",
            "WiFi",
            "Parking",
            "Music",
            "Separate Sections"
        ],
        services: [
            {
                name: "Women's Haircut",
                price: "₹450",
                popular: true,
                duration: "40 min"
            },
            {
                name: "Men's Haircut",
                price: "₹200",
                popular: true,
                duration: "25 min"
            },
            {
                name: "Hair Coloring",
                price: "₹1,500",
                duration: "90 min"
            },
            {
                name: "Bridal Makeup",
                price: "₹12,000",
                duration: "3 hrs"
            },
            {
                name: "Facial (Gold)",
                price: "₹700",
                popular: true,
                duration: "50 min"
            },
            {
                name: "Manicure & Pedicure",
                price: "₹500",
                duration: "40 min"
            },
            {
                name: "Hair Straightening",
                price: "₹3,500",
                duration: "3 hrs"
            },
            {
                name: "Beard Styling",
                price: "₹120",
                duration: "15 min"
            }
        ],
        reviews: [
            {
                id: "r1",
                name: "Ananya Verma",
                avatar: "AV",
                rating: 5,
                date: "1 day ago",
                text: "Best salon in Andheri! Got my hair colored and styled for a wedding. Absolutely loved the result. Staff is super friendly and professional.",
                helpful: 38
            },
            {
                id: "r2",
                name: "Rahul Joshi",
                avatar: "RJ",
                rating: 5,
                date: "5 days ago",
                text: "Great haircut experience. The stylist understood exactly what I wanted. Ambiance is amazing and prices are reasonable for the quality.",
                helpful: 25
            }
        ],
        photos: [
            "/images/businesses/stylehub-salon.jpg"
        ],
        likes: "2.1K",
        views: "62,340",
        followers: "1,890",
        products: [
            {
                "id": "sh-p1",
                "name": "Biolage SmoothProof Shampoo (340ml)",
                "price": "₹650",
                "originalPrice": "₹850",
                "image": "biolage-shampoo",
                "rating": 4.5,
                "reviews": 234,
                "badge": "Bestseller",
                "inStock": true,
                "category": "Hair Care",
                "description": "Anti-frizz shampoo for smooth, shiny hair. Contains camellia oil and aloe vera."
            },
            {
                "id": "sh-p2",
                "name": "Wella Color Charm Toner (85ml)",
                "price": "₹380",
                "image": "wella-toner",
                "rating": 4.4,
                "reviews": 156,
                "inStock": true,
                "category": "Hair Color",
                "description": "Professional toner for neutralizing unwanted brassy tones. Long-lasting results."
            },
            {
                "id": "sh-p3",
                "name": "Moroccanoil Treatment (100ml)",
                "price": "₹1,450",
                "originalPrice": "₹1,950",
                "image": "moroccanoil",
                "rating": 4.8,
                "reviews": 345,
                "badge": "Premium",
                "inStock": true,
                "category": "Hair Care",
                "description": "Iconic hair treatment oil enriched with argan oil. Nourishes, smooths, and adds shine."
            }
        ],
        similarStores: [
            {
                id: "look-style-salon",
                name: "Look & Style Salon",
                category: "Salon",
                rating: "4.7",
                area: "Malad West",
                logoEmoji: "✂️"
            },
            {
                id: "glow-beauty-parlour",
                name: "Glow Beauty Parlour",
                category: "Beauty",
                rating: "4.8",
                area: "Bandra",
                logoEmoji: "💄"
            },
            {
                id: "shivam-fast-food",
                name: "Shivam Fast Food",
                category: "Restaurant",
                rating: "4.5",
                area: "Andheri West",
                logoEmoji: "🍔"
            }
        ]
    },
    "freshbite-restaurant": {
        id: "freshbite-restaurant",
        name: "FreshBite Restaurant",
        category: "Restaurant",
        subCategory: "Multi-Cuisine • Family Dining • Biryani",
        logoEmoji: "🍽️",
        coverColor: "from-red-500 to-orange-600",
        verified: true,
        rating: "4.6",
        totalRatings: "6,890",
        totalReviews: "3,450",
        address: "Linking Road, Bandra West, Mumbai - 400050",
        area: "Bandra West",
        city: "Mumbai",
        phone: "+91 87654 11223",
        phone2: "+91 22 2651 7890",
        email: "freshbite@gmail.com",
        website: "www.freshbiterestaurant.in",
        yearsInBusiness: "11+",
        description: "FreshBite Restaurant is a beloved family dining spot in Bandra West known for its wide variety of cuisines including Indian, Chinese, Mughlai, and Continental. Our signature Biryani and Butter Chicken are must-tries. Spacious AC dining with rooftop seating available.",
        timing: "11:00 AM - 11:30 PM",
        timingNote: "Open all 7 days",
        paymentMethods: [
            "Cash",
            "UPI",
            "Card",
            "Sodexo"
        ],
        amenities: [
            "Air Conditioned",
            "Rooftop Seating",
            "Family Friendly",
            "Parking",
            "Live Screening",
            "Home Delivery"
        ],
        services: [
            {
                name: "Hyderabadi Biryani",
                price: "₹280",
                popular: true
            },
            {
                name: "Butter Chicken",
                price: "₹320",
                popular: true
            },
            {
                name: "Paneer Butter Masala",
                price: "₹240",
                popular: true
            },
            {
                name: "Dal Makhani",
                price: "₹180"
            },
            {
                name: "Tandoori Roti (4pc)",
                price: "₹80"
            },
            {
                name: "Chicken Tikka",
                price: "₹260",
                duration: "15 min"
            },
            {
                name: "Veg Fried Rice",
                price: "₹160"
            },
            {
                name: "Gulab Jamun",
                price: "₹60"
            },
            {
                name: "Cold Coffee",
                price: "₹120"
            },
            {
                name: "Family Pack Biryani",
                price: "₹650",
                popular: true
            }
        ],
        reviews: [
            {
                id: "r1",
                name: "Suresh Menon",
                avatar: "SM",
                rating: 5,
                date: "3 days ago",
                text: "The Biryani here is unmatched in Bandra! Perfectly spiced, generous portions. Our family's go-to restaurant for weekend dinners.",
                helpful: 55
            },
            {
                id: "r2",
                name: "Pooja Sharma",
                avatar: "PS",
                rating: 4,
                date: "1 week ago",
                text: "Great food and nice ambiance. The rooftop seating is wonderful in the evenings. Butter Chicken is highly recommended.",
                helpful: 30
            }
        ],
        photos: [
            "/images/businesses/freshbite-restaurant.jpg"
        ],
        likes: "1.8K",
        views: "52,670",
        followers: "1,450",
        products: [
            {
                "id": "fb-p1",
                "name": "Biryani Spice Mix (200g)",
                "price": "₹150",
                "originalPrice": "₹200",
                "image": "biryani-mix",
                "rating": 4.6,
                "reviews": 567,
                "badge": "Bestseller",
                "inStock": true,
                "category": "Spices",
                "description": "Our signature biryani spice blend. Includes saffron strands. Makes perfect biryani every time."
            },
            {
                "id": "fb-p2",
                "name": "Mango Pickle (500g)",
                "price": "₹220",
                "image": "mango-pickle",
                "rating": 4.3,
                "reviews": 234,
                "inStock": true,
                "category": "Pickles",
                "description": "Homemade-style raw mango pickle with traditional spices. Aged for 3 months for perfect taste."
            },
            {
                "id": "fb-p3",
                "name": "Frozen Paratha (Pack of 10)",
                "price": "₹280",
                "originalPrice": "₹350",
                "image": "frozen-paratha",
                "rating": 4.4,
                "reviews": 890,
                "inStock": true,
                "category": "Frozen Food",
                "description": "Flaky, layered parathas made with whole wheat. Just heat on tawa for 2 minutes."
            }
        ],
        similarStores: [
            {
                id: "shivam-fast-food",
                name: "Shivam Fast Food",
                category: "Restaurant",
                rating: "4.5",
                area: "Andheri West",
                logoEmoji: "🍔"
            },
            {
                id: "green-leaf-cafe",
                name: "Green Leaf Cafe",
                category: "Cafe",
                rating: "4.8",
                area: "Bandra West",
                logoEmoji: "☕"
            },
            {
                id: "carewell-pharmacy",
                name: "CareWell Pharmacy",
                category: "Pharmacy",
                rating: "4.6",
                area: "Malad West",
                logoEmoji: "💊"
            }
        ]
    },
    "fitzone-gym": {
        id: "fitzone-gym",
        name: "FitZone Gym",
        category: "Fitness",
        subCategory: "Gym • Fitness Center • Personal Training",
        logoEmoji: "💪",
        coverColor: "from-cyan-500 to-blue-600",
        verified: true,
        rating: "4.5",
        totalRatings: "3,445",
        totalReviews: "1,890",
        address: "Oberoi Mall, Goregaon, Mumbai - 400063",
        area: "Goregaon",
        city: "Mumbai",
        phone: "+91 76543 88990",
        email: "fitzonegym@gmail.com",
        website: "www.fitzonegym.in",
        yearsInBusiness: "9+",
        description: "FitZone Gym is a premium fitness center equipped with state-of-the-art machines, certified trainers, and a motivating environment. We offer personalized training programs, group classes including Zumba and Yoga, and diet consultation. Separate timing available for women.",
        timing: "5:30 AM - 10:30 PM",
        timingNote: "Open all 7 days",
        paymentMethods: [
            "Cash",
            "UPI",
            "Card",
            "EMI"
        ],
        amenities: [
            "Air Conditioned",
            "Locker Room",
            "Shower",
            "Personal Trainer",
            "Diet Consultation",
            "Parking"
        ],
        services: [
            {
                name: "General Membership (Monthly)",
                price: "₹2,500",
                popular: true
            },
            {
                name: "Personal Training (4 sessions)",
                price: "₹3,000",
                popular: true,
                duration: "1 hr each"
            },
            {
                name: "Group Yoga Class",
                price: "₹500/session",
                duration: "1 hr"
            },
            {
                name: "Zumba Class",
                price: "₹400/session",
                popular: true,
                duration: "45 min"
            },
            {
                name: "Body Composition Analysis",
                price: "₹300"
            },
            {
                name: "Annual Membership",
                price: "₹22,000",
                popular: true
            },
            {
                name: "Diet Consultation",
                price: "₹1,000",
                duration: "30 min"
            }
        ],
        reviews: [
            {
                id: "r1",
                name: "Amit Patel",
                avatar: "AP",
                rating: 5,
                date: "2 days ago",
                text: "Best gym in Goregaon! Trainers are very knowledgeable and push you to your limits. Equipment is well maintained and the ambiance keeps you motivated.",
                helpful: 42
            },
            {
                id: "r2",
                name: "Neha Kapoor",
                avatar: "NK",
                rating: 4,
                date: "1 week ago",
                text: "Good gym with all necessary equipment. The Zumba classes are fun. Only downside is it gets crowded during evening hours.",
                helpful: 18
            }
        ],
        photos: [
            "/images/businesses/fitzone-gym.jpg"
        ],
        likes: "1.3K",
        views: "38,900",
        followers: "920",
        products: [
            {
                "id": "fz-p1",
                "name": "Whey Protein (1kg)",
                "price": "₹1,899",
                "originalPrice": "₹2,499",
                "image": "whey-protein",
                "rating": 4.5,
                "reviews": 567,
                "badge": "Bestseller",
                "inStock": true,
                "category": "Supplements",
                "description": "Premium whey protein isolate with 25g protein per serving. Chocolate flavor."
            },
            {
                "id": "fz-p2",
                "name": "Resistance Band Set (5 Levels)",
                "price": "₹499",
                "originalPrice": "₹799",
                "image": "resistance-bands",
                "rating": 4.3,
                "reviews": 234,
                "inStock": true,
                "category": "Equipment",
                "description": "Set of 5 resistance bands with different strengths. Includes door anchor and carry bag."
            },
            {
                "id": "fz-p3",
                "name": "Gym Gloves with Wrist Support",
                "price": "₹399",
                "originalPrice": "₹599",
                "image": "gym-gloves",
                "rating": 4.2,
                "reviews": 178,
                "inStock": true,
                "category": "Accessories",
                "description": "Anti-slip gym gloves with wrist wrap support. Breathable mesh material."
            },
            {
                "id": "fz-p4",
                "name": "BCAA Powder (500g)",
                "price": "₹1,200",
                "originalPrice": "₹1,600",
                "image": "bcaa-powder",
                "rating": 4.4,
                "reviews": 145,
                "badge": "Popular",
                "inStock": true,
                "category": "Supplements",
                "description": "Branched-chain amino acids for muscle recovery. Watermelon flavor, 0 sugar."
            }
        ],
        similarStores: [
            {
                id: "fitpro-gym",
                name: "FitPro Gym & Spa",
                category: "Gym",
                rating: "4.4",
                area: "Goregaon",
                logoEmoji: "🏋️"
            },
            {
                id: "quickfix-electronics",
                name: "QuickFix Electronics",
                category: "Electronics",
                rating: "4.3",
                area: "Powai",
                logoEmoji: "📱"
            },
            {
                id: "fresh-mart-grocery",
                name: "Fresh Mart Grocery",
                category: "Grocery",
                rating: "4.4",
                area: "Malad West",
                logoEmoji: "🛒"
            }
        ]
    },
    "techfix-electronics": {
        id: "techfix-electronics",
        name: "TechFix Electronics",
        category: "Electronics",
        subCategory: "Electronics Repair • Mobile • Laptop",
        logoEmoji: "🔧",
        coverColor: "from-slate-500 to-gray-700",
        verified: true,
        rating: "4.4",
        totalRatings: "2,310",
        totalReviews: "980",
        address: "Hiranandani Business Park, Powai, Mumbai - 400076",
        area: "Hiranandani",
        city: "Mumbai",
        phone: "+91 65432 99887",
        email: "techfix@gmail.com",
        yearsInBusiness: "4+",
        description: "TechFix Electronics is your one-stop solution for all electronic repairs. We specialize in mobile phone repair, laptop servicing, tablet repair, and gaming console fixes. All repairs come with warranty and we use only genuine parts.",
        timing: "10:00 AM - 9:00 PM",
        timingNote: "Closed on Sunday",
        paymentMethods: [
            "Cash",
            "UPI",
            "Card"
        ],
        amenities: [
            "Waiting Area",
            "WiFi",
            "Same Day Repair",
            "Warranty",
            "Genuine Parts"
        ],
        services: [
            {
                name: "iPhone Screen Repair",
                price: "From ₹2,000",
                popular: true,
                duration: "1 hr"
            },
            {
                name: "Samsung Screen Repair",
                price: "From ₹1,500",
                popular: true,
                duration: "1 hr"
            },
            {
                name: "Laptop Screen Replacement",
                price: "From ₹3,500",
                duration: "2-3 hrs"
            },
            {
                name: "Battery Replacement",
                price: "From ₹600",
                duration: "30 min"
            },
            {
                name: "Software Issue Fix",
                price: "₹500",
                popular: true,
                duration: "1 hr"
            },
            {
                name: "Data Recovery",
                price: "From ₹2,000"
            },
            {
                name: "Motherboard Repair",
                price: "From ₹1,500"
            }
        ],
        reviews: [
            {
                id: "r1",
                name: "Vikram Singh",
                avatar: "VS",
                rating: 5,
                date: "4 days ago",
                text: "Fixed my MacBook Pro same day. The technician diagnosed the issue within minutes. Very professional and transparent pricing.",
                helpful: 35
            },
            {
                id: "r2",
                name: "Ritu Agarwal",
                avatar: "RA",
                rating: 4,
                date: "1 week ago",
                text: "Got my Samsung S24 screen replaced. Looks original. They also gave 3 months warranty. Good service overall.",
                helpful: 20
            }
        ],
        photos: [
            "/images/businesses/techfix-electronics.jpg"
        ],
        likes: "890",
        views: "28,760",
        followers: "567",
        products: [
            {
                "id": "tf-p1",
                "name": "TWS Earbuds Pro (Active NC)",
                "price": "₹1,499",
                "originalPrice": "₹2,999",
                "image": "tws-pro",
                "rating": 4.5,
                "reviews": 890,
                "badge": "Deal",
                "inStock": true,
                "category": "Audio",
                "description": "Active noise cancellation earbuds with 30hr battery. IPX7 waterproof with transparency mode."
            },
            {
                "id": "tf-p2",
                "name": "Phone Case (Military Grade)",
                "price": "₹349",
                "originalPrice": "₹599",
                "image": "phone-case",
                "rating": 4.3,
                "reviews": 1234,
                "inStock": true,
                "category": "Mobile Accessories",
                "description": "Military-grade drop protection case. Built-in kickstand and camera lens guard."
            },
            {
                "id": "tf-p3",
                "name": "65W GaN Charger",
                "price": "₹1,299",
                "originalPrice": "₹1,999",
                "image": "gan-charger",
                "rating": 4.6,
                "reviews": 567,
                "badge": "Bestseller",
                "inStock": true,
                "category": "Chargers",
                "description": "GaN technology 65W charger with 3 ports. Charges laptop, phone, and tablet simultaneously."
            },
            {
                "id": "tf-p4",
                "name": "Mechanical Keyboard (RGB)",
                "price": "₹2,499",
                "originalPrice": "₹3,499",
                "image": "mech-keyboard",
                "rating": 4.4,
                "reviews": 345,
                "badge": "New",
                "inStock": true,
                "category": "Computer Peripherals",
                "description": "Hot-swappable mechanical keyboard with RGB backlighting. Blue switches with PBT keycaps."
            }
        ],
        similarStores: [
            {
                id: "quickfix-electronics",
                name: "QuickFix Electronics",
                category: "Electronics",
                rating: "4.3",
                area: "Powai",
                logoEmoji: "📱"
            },
            {
                id: "fresh-mart-grocery",
                name: "Fresh Mart Grocery",
                category: "Grocery",
                rating: "4.4",
                area: "Malad West",
                logoEmoji: "🛒"
            },
            {
                id: "carewell-pharmacy",
                name: "CareWell Pharmacy",
                category: "Pharmacy",
                rating: "4.6",
                area: "Malad West",
                logoEmoji: "💊"
            }
        ]
    },
    "quickmove-packers": {
        id: "quickmove-packers",
        name: "QuickMove Packers & Movers",
        category: "Logistics",
        subCategory: "Packers & Movers • Relocation • Storage",
        logoEmoji: "🚚",
        coverColor: "from-yellow-500 to-amber-600",
        verified: true,
        rating: "4.7",
        totalRatings: "2,678",
        totalReviews: "1,120",
        address: "Western Express Highway, Malad East, Mumbai - 400064",
        area: "Malad East",
        city: "Mumbai",
        phone: "+91 54321 67890",
        phone2: "+91 22 2882 3456",
        email: "quickmove@gmail.com",
        website: "www.quickmovepackers.in",
        yearsInBusiness: "12+",
        description: "QuickMove Packers & Movers is one of Mumbai's most trusted relocation service providers. We offer household shifting, office relocation, vehicle transport, and warehousing services. Our trained team ensures safe packing and timely delivery with full insurance coverage.",
        timing: "8:00 AM - 9:00 PM",
        timingNote: "Open all 7 days",
        paymentMethods: [
            "Cash",
            "UPI",
            "Card",
            "NEFT"
        ],
        amenities: [
            "Insurance Coverage",
            "GPS Tracking",
            "Warehousing",
            "Vehicle Transport",
            "Professional Packing",
            "On-time Delivery"
        ],
        services: [
            {
                name: "Local Household Shifting",
                price: "₹8,000",
                popular: true
            },
            {
                name: "Office Relocation",
                price: "₹15,000",
                popular: true
            },
            {
                name: "Car Transport",
                price: "₹5,000",
                duration: "1-2 days"
            },
            {
                name: "Bike Transport",
                price: "₹2,500",
                duration: "1 day"
            },
            {
                name: "Warehousing (per month)",
                price: "₹3,000"
            },
            {
                name: "International Moving",
                price: "On Quote"
            },
            {
                name: "Packing Material Only",
                price: "₹2,000"
            }
        ],
        reviews: [
            {
                id: "r1",
                name: "Rajesh Kumar",
                avatar: "RK",
                rating: 5,
                date: "3 days ago",
                text: "Used QuickMove for my household shifting from Andheri to Thane. Excellent service! Team was punctual, packing was very careful, and everything arrived safely.",
                helpful: 48
            },
            {
                id: "r2",
                name: "Swati Deshmukh",
                avatar: "SD",
                rating: 5,
                date: "1 week ago",
                text: "Moved our entire office with zero damage. The team was professional and completed the job in just 4 hours. Highly recommended!",
                helpful: 32
            }
        ],
        photos: [
            "/images/businesses/quickmove-packers.jpg"
        ],
        likes: "450",
        views: "15,670",
        followers: "234",
        products: [],
        similarStores: [
            {
                id: "fresh-mart-grocery",
                name: "Fresh Mart Grocery",
                category: "Grocery",
                rating: "4.4",
                area: "Malad West",
                logoEmoji: "🛒"
            },
            {
                id: "quickfix-electronics",
                name: "QuickFix Electronics",
                category: "Electronics",
                rating: "4.3",
                area: "Powai",
                logoEmoji: "🔧"
            },
            {
                id: "shivam-fast-food",
                name: "Shivam Fast Food",
                category: "Restaurant",
                rating: "4.5",
                area: "Andheri West",
                logoEmoji: "🍔"
            }
        ]
    },
    "sharma-dental": {
        id: "sharma-dental",
        name: "Sharma Dental Clinic",
        category: "Dental",
        subCategory: "Dentist • Dental Clinic • Orthodontics",
        logoEmoji: "🦷",
        coverColor: "from-teal-500 to-cyan-600",
        verified: true,
        rating: "4.9",
        totalRatings: "6,270",
        totalReviews: "4,510",
        address: "SV Road, Kandivali West, Mumbai - 400067",
        area: "Kandivali West",
        city: "Mumbai",
        phone: "+91 43210 76543",
        phone2: "+91 22 2806 1234",
        email: "sharmadental@gmail.com",
        website: "www.sharmadentalclinic.com",
        yearsInBusiness: "20+",
        description: "Sharma Dental Clinic is a leading multi-specialty dental center with 20+ years of experience. We offer all dental treatments under one roof including root canal, implants, braces, teeth whitening, and pediatric dentistry. Equipped with latest digital X-ray and laser technology.",
        timing: "9:00 AM - 8:30 PM",
        timingNote: "Closed on Sunday",
        paymentMethods: [
            "Cash",
            "UPI",
            "Card",
            "Insurance",
            "EMI"
        ],
        amenities: [
            "Air Conditioned",
            "Digital X-Ray",
            "Sterilized Equipment",
            "Parking",
            "Wheelchair Accessible",
            "Kids Friendly"
        ],
        services: [
            {
                name: "Dental Checkup",
                price: "₹200",
                popular: true,
                duration: "20 min"
            },
            {
                name: "Teeth Cleaning (Scaling)",
                price: "₹800",
                popular: true,
                duration: "45 min"
            },
            {
                name: "Root Canal Treatment",
                price: "₹4,500",
                duration: "1-2 hrs"
            },
            {
                name: "Dental Implant",
                price: "₹25,000",
                duration: "2 visits"
            },
            {
                name: "Teeth Whitening",
                price: "₹8,000",
                popular: true,
                duration: "1 hr"
            },
            {
                name: "Braces (Metal)",
                price: "₹30,000"
            },
            {
                name: "Braces (Invisible)",
                price: "₹80,000"
            },
            {
                name: "Dentures",
                price: "₹5,000"
            },
            {
                name: "Pediatric Dentistry",
                price: "₹500",
                duration: "30 min"
            }
        ],
        reviews: [
            {
                id: "r1",
                name: "Dr. Meera Iyer",
                avatar: "MI",
                rating: 5,
                date: "1 day ago",
                text: "As a fellow doctor, I can say Dr. Sharma's clinic is top-notch. The sterilization protocols are excellent and the treatment quality is outstanding. Highly recommend for dental implants.",
                helpful: 72
            },
            {
                id: "r2",
                name: "Anil Kapoor",
                avatar: "AK",
                rating: 5,
                date: "3 days ago",
                text: "Got my root canal done here. Painless procedure, very professional doctor. The clinic is clean and modern. Best dental experience I've had.",
                helpful: 58
            }
        ],
        photos: [
            "/images/businesses/sharma-dental.jpg"
        ],
        likes: "980",
        views: "31,230",
        followers: "756",
        products: [
            {
                "id": "sd-p1",
                "name": "Oral-B Pro Toothbrush (Soft)",
                "price": "₹199",
                "originalPrice": "₹299",
                "image": "oralb-toothbrush",
                "rating": 4.4,
                "reviews": 567,
                "inStock": true,
                "category": "Dental Care",
                "description": "Professional grade toothbrush with crisscross bristles. Removes up to 90% plaque."
            },
            {
                "id": "sd-p2",
                "name": "Sensodyne Repair Toothpaste (150g)",
                "price": "₹230",
                "image": "sensodyne-paste",
                "rating": 4.6,
                "reviews": 1234,
                "badge": "Bestseller",
                "inStock": true,
                "category": "Dental Care",
                "description": "Clinically proven relief from sensitivity. Builds a repairing layer over sensitive areas."
            },
            {
                "id": "sd-p3",
                "name": "Dental Floss Picks (90 Count)",
                "price": "₹180",
                "originalPrice": "₹220",
                "image": "floss-picks",
                "rating": 4.2,
                "reviews": 345,
                "inStock": true,
                "category": "Dental Care",
                "description": "Mint-flavored dental floss picks with tongue cleaner. Easy-grip handle design."
            }
        ],
        similarStores: [
            {
                id: "carewell-pharmacy",
                name: "CareWell Pharmacy",
                category: "Pharmacy",
                rating: "4.6",
                area: "Malad West",
                logoEmoji: "💊"
            },
            {
                id: "smilecare-dental",
                name: "SmileCare Dental",
                category: "Dentist",
                rating: "4.7",
                area: "Goregaon",
                logoEmoji: "🦷"
            },
            {
                id: "look-style-salon",
                name: "Look & Style Salon",
                category: "Salon",
                rating: "4.7",
                area: "Malad West",
                logoEmoji: "✂️"
            }
        ]
    },
    "sunrise-public-school": {
        id: "sunrise-public-school",
        name: "Sunrise Public School",
        category: "Education",
        subCategory: "School • CBSE • Pre-Primary to Class 12",
        logoEmoji: "🏫",
        coverColor: "from-indigo-500 to-purple-600",
        verified: true,
        rating: "4.6",
        totalRatings: "3,340",
        totalReviews: "1,560",
        address: "DPS Road, Sector 7, Nerul, Navi Mumbai - 400706",
        area: "Nerul",
        city: "Navi Mumbai",
        phone: "+91 32109 87654",
        email: "sunriseschool@gmail.com",
        website: "www.sunrisepublicschool.in",
        yearsInBusiness: "18+",
        description: "Sunrise Public School is a premier CBSE-affiliated institution offering education from Pre-Primary to Class 12. Known for academic excellence, holistic development, and state-of-the-art infrastructure including smart classrooms, science labs, and sports facilities.",
        timing: "7:30 AM - 3:00 PM",
        timingNote: "Mon-Sat, Sunday Closed",
        paymentMethods: [
            "Cash",
            "UPI",
            "Card",
            "NEFT"
        ],
        amenities: [
            "Smart Classrooms",
            "Science Lab",
            "Computer Lab",
            "Library",
            "Sports Ground",
            "Bus Facility",
            "CCTV",
            "Cafeteria"
        ],
        services: [
            {
                name: "Nursery Admission",
                price: "₹45,000/year",
                popular: true
            },
            {
                name: "Primary (Class 1-5)",
                price: "₹55,000/year",
                popular: true
            },
            {
                name: "Secondary (Class 6-10)",
                price: "₹65,000/year"
            },
            {
                name: "Senior Secondary (11-12)",
                price: "₹75,000/year"
            },
            {
                name: "Day Care Facility",
                price: "₹3,000/month"
            },
            {
                name: "Summer Camp",
                price: "₹5,000",
                duration: "2 weeks"
            },
            {
                name: "Sports Coaching",
                price: "₹2,000/month"
            }
        ],
        reviews: [
            {
                id: "r1",
                name: "Mrs. Priya Nair",
                avatar: "PN",
                rating: 5,
                date: "5 days ago",
                text: "Excellent school! My daughter has been studying here for 4 years. Teachers are very caring and the academic curriculum is well-structured. Highly recommended.",
                helpful: 45
            },
            {
                id: "r2",
                name: "Rajiv Menon",
                avatar: "RM",
                rating: 4,
                date: "2 weeks ago",
                text: "Good school with decent infrastructure. The computer lab and library are well-equipped. Bus facility is reliable. Could improve on extra-curricular activities.",
                helpful: 22
            }
        ],
        photos: [
            "/images/guides/schools-delhi.jpg"
        ],
        likes: "2.5K",
        views: "67,890",
        followers: "3,200",
        products: [],
        similarStores: [
            {
                id: "glow-beauty-parlour",
                name: "Glow Beauty Parlour",
                category: "Beauty",
                rating: "4.8",
                area: "Bandra",
                logoEmoji: "💄"
            },
            {
                id: "carewell-pharmacy",
                name: "CareWell Pharmacy",
                category: "Pharmacy",
                rating: "4.6",
                area: "Malad West",
                logoEmoji: "💊"
            },
            {
                id: "fitzone-gym",
                name: "FitZone Gym",
                category: "Gym",
                rating: "4.5",
                area: "Goregaon",
                logoEmoji: "💪"
            }
        ]
    },
    "glow-beauty-parlour": {
        id: "glow-beauty-parlour",
        name: "Glow Beauty Parlour",
        category: "Beauty",
        subCategory: "Beauty Parlour • Ladies Salon • Skincare",
        logoEmoji: "💄",
        coverColor: "from-fuchsia-500 to-pink-600",
        verified: true,
        rating: "4.8",
        totalRatings: "3,256",
        totalReviews: "1,890",
        address: "Shop 3, Linking Road, Bandra West, Mumbai - 400050",
        area: "Bandra",
        city: "Mumbai",
        phone: "+91 21098 76543",
        email: "glowbeauty@gmail.com",
        yearsInBusiness: "10+",
        description: "Glow Beauty Parlour is a premium ladies beauty destination in Bandra. Specializing in skincare treatments, hair care, bridal makeup, and wellness therapies. We use only branded products and our certified beauticians ensure you get the best results every visit.",
        timing: "10:00 AM - 8:00 PM",
        timingNote: "Closed on Monday",
        paymentMethods: [
            "Cash",
            "UPI",
            "Card"
        ],
        amenities: [
            "Air Conditioned",
            "WiFi",
            "Privacy",
            "Branded Products",
            "Home Service Available"
        ],
        services: [
            {
                name: "Facial (Normal)",
                price: "₹500",
                duration: "45 min"
            },
            {
                name: "Facial (Gold)",
                price: "₹900",
                popular: true,
                duration: "60 min"
            },
            {
                name: "Bridal Makeup",
                price: "₹20,000",
                popular: true,
                duration: "4 hrs"
            },
            {
                name: "Hair Spa",
                price: "₹600",
                duration: "45 min"
            },
            {
                name: "Waxing (Full Body)",
                price: "₹1,200",
                duration: "1 hr"
            },
            {
                name: "Manicure & Pedicure",
                price: "₹500",
                popular: true,
                duration: "40 min"
            },
            {
                name: "Threading & Facial Combo",
                price: "₹700"
            },
            {
                name: "Hair Straightening",
                price: "₹3,000",
                duration: "3 hrs"
            }
        ],
        reviews: [
            {
                id: "r1",
                name: "Kavita Shah",
                avatar: "KS",
                rating: 5,
                date: "2 days ago",
                text: "Got my bridal makeup done here. Absolutely stunning result! The makeup lasted the entire day and night. Worth every penny.",
                helpful: 50
            },
            {
                id: "r2",
                name: "Nisha Patel",
                avatar: "NP",
                rating: 5,
                date: "1 week ago",
                text: "My regular go-to parlour. The gold facial is amazing, skin feels so fresh afterwards. Staff is polite and the ambiance is lovely.",
                helpful: 33
            }
        ],
        photos: [
            "/images/stores/look-style-salon.jpg"
        ],
        likes: "1.6K",
        views: "48,560",
        followers: "1,120",
        products: [
            {
                "id": "gb-p1",
                "name": "Lakme 9to5 Primer (30ml)",
                "price": "₹499",
                "originalPrice": "₹599",
                "image": "lakme-primer",
                "rating": 4.3,
                "reviews": 678,
                "inStock": true,
                "category": "Makeup",
                "description": "Long-lasting makeup primer that controls oil and minimizes pores. Lightweight formula."
            },
            {
                "id": "gb-p2",
                "name": "Nivea Body Lotion (400ml)",
                "price": "₹320",
                "originalPrice": "₹399",
                "image": "nivea-lotion",
                "rating": 4.5,
                "reviews": 2345,
                "badge": "Bestseller",
                "inStock": true,
                "category": "Skincare",
                "description": "Deep moisturizing body lotion with Vitamin E and jojoba oil. 48hr moisture lock."
            },
            {
                "id": "gb-p3",
                "name": "Face Sheet Mask Set (5 Pack)",
                "price": "₹199",
                "originalPrice": "₹350",
                "image": "sheet-masks",
                "rating": 4.2,
                "reviews": 456,
                "badge": "Deal",
                "inStock": true,
                "category": "Skincare",
                "description": "Assorted face sheet masks - Hydrating, Brightening, Anti-aging, Pore Minimizing, Soothing."
            },
            {
                "id": "gb-p4",
                "name": "MAC Velvet Lipstick",
                "price": "₹990",
                "originalPrice": "₹1,200",
                "image": "mac-lipstick",
                "rating": 4.7,
                "reviews": 890,
                "badge": "Premium",
                "inStock": true,
                "category": "Makeup",
                "description": "Velvet-textured matte lipstick with long-wear formula. Rich, saturated color in one stroke."
            }
        ],
        similarStores: [
            {
                id: "stylehub-salon",
                name: "StyleHub Salon",
                category: "Salon",
                rating: "4.8",
                area: "Andheri West",
                logoEmoji: "💅"
            },
            {
                id: "look-style-salon",
                name: "Look & Style Salon",
                category: "Salon",
                rating: "4.7",
                area: "Malad West",
                logoEmoji: "✂️"
            },
            {
                id: "sharma-dental",
                name: "Sharma Dental Clinic",
                category: "Dentist",
                rating: "4.9",
                area: "Kandivali West",
                logoEmoji: "🦷"
            }
        ]
    },
    "vijay-sales": {
        id: "vijay-sales",
        name: "Vijay Sales Store",
        category: "Electronics",
        subCategory: "Electronics Store • Appliances • Mobiles",
        logoEmoji: "📦",
        coverColor: "from-blue-600 to-indigo-700",
        verified: true,
        rating: "4.3",
        totalRatings: "5,512",
        totalReviews: "2,890",
        address: "MG Road, Andheri East, Mumbai - 400069",
        area: "Andheri East",
        city: "Mumbai",
        phone: "+91 10987 65432",
        phone2: "+91 22 2823 4567",
        email: "vijaysales@gmail.com",
        website: "www.vijaysales.com",
        yearsInBusiness: "25+",
        description: "Vijay Sales is one of India's leading electronics retail chains. We offer a wide range of TVs, washing machines, refrigerators, ACs, mobile phones, laptops, and kitchen appliances from all top brands at competitive prices with extended warranty options.",
        timing: "10:00 AM - 9:30 PM",
        timingNote: "Open all 7 days",
        paymentMethods: [
            "Cash",
            "UPI",
            "Card",
            "EMI",
            "Exchange Offer"
        ],
        amenities: [
            "Air Conditioned",
            "Parking",
            "EMI Available",
            "Exchange Offers",
            "Home Delivery",
            "Installation Service"
        ],
        services: [
            {
                name: "TV Installation",
                price: "₹499",
                popular: true,
                duration: "Same Day"
            },
            {
                name: "AC Installation",
                price: "₹799",
                popular: true,
                duration: "Same Day"
            },
            {
                name: "Extended Warranty (1 yr)",
                price: "Varies"
            },
            {
                name: "Old Exchange Value",
                price: "On Assessment"
            },
            {
                name: "Home Delivery",
                popular: true
            },
            {
                name: "Bulk/Corporate Orders",
                price: "Special Pricing"
            }
        ],
        reviews: [
            {
                id: "r1",
                name: "Deepak Gupta",
                avatar: "DG",
                rating: 4,
                date: "3 days ago",
                text: "Good store with wide range of products. Bought a Samsung TV here, got good discount with exchange offer. Installation was done the same day.",
                helpful: 28
            },
            {
                id: "r2",
                name: "Sunita Rao",
                avatar: "SR",
                rating: 4,
                date: "1 week ago",
                text: "Purchased AC and washing machine. Staff was helpful in comparing models. EMI options are convenient. Delivery was on time.",
                helpful: 22
            }
        ],
        photos: [
            "/images/stores/quickfix-electronics.jpg"
        ],
        likes: "3.5K",
        views: "1,12,340",
        followers: "5,670",
        products: [
            {
                "id": "vs-p1",
                "name": "Samsung Galaxy Buds FE",
                "price": "₹4,999",
                "originalPrice": "₹7,999",
                "image": "galaxy-buds",
                "rating": 4.4,
                "reviews": 2345,
                "badge": "Deal",
                "inStock": true,
                "category": "Audio",
                "description": "Premium TWS earbuds with ANC and 30hr battery. IPX2 rated with comfortable fit."
            },
            {
                "id": "vs-p2",
                "name": "boAt Rockerz 450 Headphone",
                "price": "₹1,299",
                "originalPrice": "₹2,990",
                "image": "boAt-headphone",
                "rating": 4.3,
                "reviews": 5678,
                "badge": "Bestseller",
                "inStock": true,
                "category": "Audio",
                "description": "Over-ear wireless headphones with 40hr battery, ASAP charging, and padded ear cushions."
            },
            {
                "id": "vs-p3",
                "name": "MI Smart Band 8",
                "price": "₹1,799",
                "originalPrice": "₹2,499",
                "image": "mi-band",
                "rating": 4.5,
                "reviews": 3456,
                "inStock": true,
                "category": "Wearables",
                "description": "Advanced fitness band with 150+ sports modes, SpO2 monitor, and 16-day battery life."
            },
            {
                "id": "vs-p4",
                "name": "JBL Flip 6 Bluetooth Speaker",
                "price": "₹9,999",
                "originalPrice": "₹14,999",
                "image": "jbl-flip6",
                "rating": 4.7,
                "reviews": 1234,
                "badge": "Popular",
                "inStock": true,
                "category": "Speakers",
                "description": "Portable Bluetooth speaker with powerful bass. IP67 waterproof and dustproof. 12hr playtime."
            },
            {
                "id": "vs-p5",
                "name": "Samsung 128GB Memory Card",
                "price": "₹799",
                "originalPrice": "₹1,299",
                "image": "memory-card",
                "rating": 4.2,
                "reviews": 4567,
                "inStock": true,
                "category": "Storage",
                "description": "EVO Plus microSD card with U3 Class 10 speed. 130MB/s read speed."
            },
            {
                "id": "vs-p6",
                "name": "Realme 65W Charger",
                "price": "₹899",
                "originalPrice": "₹1,499",
                "image": "realme-charger",
                "rating": 4.4,
                "reviews": 2345,
                "badge": "Top Rated",
                "inStock": true,
                "category": "Chargers",
                "description": "SuperDart 65W fast charger. Compatible with most USB-C devices including laptops."
            }
        ],
        similarStores: [
            {
                id: "quickfix-electronics",
                name: "QuickFix Electronics",
                category: "Electronics",
                rating: "4.3",
                area: "Powai",
                logoEmoji: "🔧"
            },
            {
                id: "techfix-electronics",
                name: "TechFix Electronics",
                category: "Electronics",
                rating: "4.4",
                area: "Hiranandani",
                logoEmoji: "🔧"
            },
            {
                id: "fresh-mart-grocery",
                name: "Fresh Mart Grocery",
                category: "Grocery",
                rating: "4.4",
                area: "Malad West",
                logoEmoji: "🛒"
            }
        ]
    },
    "royal-banquet-hall": {
        id: "royal-banquet-hall",
        name: "Royal Banquet Hall",
        category: "Venue",
        subCategory: "Banquet Hall • Wedding Venue • Events",
        logoEmoji: "🎉",
        coverColor: "from-purple-500 to-violet-700",
        verified: true,
        rating: "4.5",
        totalRatings: "2,189",
        totalReviews: "1,340",
        address: "Juhu Tara Road, Juhu, Mumbai - 400049",
        area: "Juhu",
        city: "Mumbai",
        phone: "+91 09876 54321",
        email: "royalbanquet@gmail.com",
        website: "www.royalbanquethall.com",
        yearsInBusiness: "15+",
        description: "Royal Banquet Hall is a premium event venue in Juhu ideal for weddings, receptions, corporate events, birthdays, and engagements. With a capacity of 500+ guests, in-house catering, elegant decor, and dedicated event planning team, we make every celebration memorable.",
        timing: "9:00 AM - 11:00 PM",
        timingNote: "Open all days, booking required",
        paymentMethods: [
            "Cash",
            "UPI",
            "Card",
            "NEFT"
        ],
        amenities: [
            "Air Conditioned",
            "Parking (50+ cars)",
            "In-house Catering",
            "Decor Service",
            "DJ/Music",
            "Bridal Room",
            "Valet Parking"
        ],
        services: [
            {
                name: "Wedding Package (per plate)",
                price: "₹1,200",
                popular: true
            },
            {
                name: "Corporate Event (per plate)",
                price: "₹800"
            },
            {
                name: "Birthday Party Package",
                price: "₹500/plate",
                popular: true
            },
            {
                name: "Engagement Ceremony",
                price: "₹900/plate"
            },
            {
                name: "Full Decor Package",
                price: "₹2,50,000"
            },
            {
                name: "DJ & Sound System",
                price: "₹35,000"
            },
            {
                name: "Catering Only",
                price: "₹600/plate"
            }
        ],
        reviews: [
            {
                id: "r1",
                name: "Anjali Mehta",
                avatar: "AM",
                rating: 5,
                date: "4 days ago",
                text: "Had our wedding reception here. The venue is gorgeous, food was excellent, and the staff managed everything perfectly. Our guests were very impressed!",
                helpful: 55
            },
            {
                id: "r2",
                name: "Vikram Thakur",
                avatar: "VT",
                rating: 4,
                date: "2 weeks ago",
                text: "Good venue for corporate events. The stage and sound system are professional. Food quality is good. Parking could be better during big events.",
                helpful: 20
            }
        ],
        photos: [
            "/images/collections/wedding-planners.jpg"
        ],
        likes: "1.1K",
        views: "29,890",
        followers: "890",
        products: [],
        similarStores: [
            {
                id: "shivam-fast-food",
                name: "Shivam Fast Food",
                category: "Restaurant",
                rating: "4.5",
                area: "Andheri West",
                logoEmoji: "🍔"
            },
            {
                id: "freshbite-restaurant",
                name: "FreshBite Restaurant",
                category: "Restaurant",
                rating: "4.6",
                area: "Bandra West",
                logoEmoji: "🍽️"
            },
            {
                id: "quickmove-packers",
                name: "QuickMove Packers & Movers",
                category: "Logistics",
                rating: "4.7",
                area: "Malad East",
                logoEmoji: "🚚"
            }
        ]
    },
    "smilecare-dental": {
        id: "smilecare-dental",
        name: "SmileCare Dental Clinic",
        category: "Dental",
        subCategory: "Dentist • Dental Clinic • Implants",
        logoEmoji: "🦷",
        coverColor: "from-emerald-500 to-teal-600",
        verified: true,
        rating: "4.7",
        totalRatings: "4,221",
        totalReviews: "2,890",
        address: "2nd Floor, Kohinoor City, Kurla, Mumbai - 400070",
        area: "Kohinoor City",
        city: "Mumbai",
        phone: "+91 56789 01234",
        email: "smilecaredental@gmail.com",
        website: "www.smilecaredental.in",
        yearsInBusiness: "14+",
        description: "SmileCare Dental Clinic offers comprehensive dental care with a focus on patient comfort. Services include general dentistry, cosmetic dentistry, orthodontics, and dental implants. Our modern clinic features the latest dental technology for pain-free treatments.",
        timing: "9:30 AM - 8:00 PM",
        timingNote: "Closed on Sunday",
        paymentMethods: [
            "Cash",
            "UPI",
            "Card",
            "Insurance"
        ],
        amenities: [
            "Air Conditioned",
            "Digital X-Ray",
            "Sterilization",
            "Parking",
            "Comfortable Waiting Area"
        ],
        services: [
            {
                name: "Consultation",
                price: "₹300",
                popular: true,
                duration: "20 min"
            },
            {
                name: "Teeth Cleaning",
                price: "₹700",
                popular: true,
                duration: "40 min"
            },
            {
                name: "Root Canal",
                price: "₹4,000",
                duration: "1-2 hrs"
            },
            {
                name: "Dental Implant",
                price: "₹20,000",
                popular: true
            },
            {
                name: "Teeth Whitening",
                price: "₹6,000",
                duration: "1 hr"
            },
            {
                name: "Braces (Metal)",
                price: "₹25,000"
            },
            {
                name: "Crown & Bridge",
                price: "₹3,500"
            }
        ],
        reviews: [
            {
                id: "r1",
                name: "Amita Joshi",
                avatar: "AJ",
                rating: 5,
                date: "2 days ago",
                text: "Wonderful dental clinic! Dr. Mehta is very gentle and explains everything clearly. Got my implant done here - completely painless. Highly recommend!",
                helpful: 40
            },
            {
                id: "r2",
                name: "Sanjay Verma",
                avatar: "SV",
                rating: 4,
                date: "1 week ago",
                text: "Good clinic with modern equipment. The teeth cleaning was thorough. Staff is courteous and the clinic is very clean and hygienic.",
                helpful: 25
            }
        ],
        photos: [
            "/images/businesses/sharma-dental.jpg"
        ],
        likes: "2.2K",
        views: "71,230",
        followers: "2,890",
        products: [
            {
                "id": "sc-p1",
                "name": "Colgate Total Toothpaste (200g)",
                "price": "₹210",
                "originalPrice": "₹250",
                "image": "colgate-total",
                "rating": 4.5,
                "reviews": 2345,
                "inStock": true,
                "category": "Dental Care",
                "description": "12-in-1 complete care toothpaste. Fights cavities, plaque, gingivitis, and sensitivity."
            },
            {
                "id": "sc-p2",
                "name": "Waterpik Water Flosser",
                "price": "₹3,499",
                "originalPrice": "₹4,999",
                "image": "waterpik",
                "rating": 4.7,
                "reviews": 567,
                "badge": "Premium",
                "inStock": true,
                "category": "Dental Devices",
                "description": "Professional water flosser with 10 pressure settings. Removes 99.9% plaque from treated areas."
            },
            {
                "id": "sc-p3",
                "name": "Teeth Whitening Strips (14 Pack)",
                "price": "₹899",
                "originalPrice": "₹1,299",
                "image": "whitening-strips",
                "rating": 4.1,
                "reviews": 345,
                "badge": "New",
                "inStock": true,
                "category": "Dental Care",
                "description": "Professional-grade whitening strips. Noticeable results in 14 days. Enamel-safe formula."
            }
        ],
        similarStores: [
            {
                id: "sharma-dental",
                name: "Sharma Dental Clinic",
                category: "Dentist",
                rating: "4.9",
                area: "Kandivali West",
                logoEmoji: "🦷"
            },
            {
                id: "carewell-pharmacy",
                name: "CareWell Pharmacy",
                category: "Pharmacy",
                rating: "4.6",
                area: "Malad West",
                logoEmoji: "💊"
            },
            {
                id: "stylehub-salon",
                name: "StyleHub Salon",
                category: "Salon",
                rating: "4.8",
                area: "Andheri West",
                logoEmoji: "💅"
            }
        ]
    },
    "fitpro-gym": {
        id: "fitpro-gym",
        name: "FitPro Gym & Spa",
        category: "Fitness",
        subCategory: "Gym • Spa • Wellness Center",
        logoEmoji: "🏋️",
        coverColor: "from-orange-500 to-red-600",
        verified: true,
        rating: "4.4",
        totalRatings: "2,198",
        totalReviews: "1,100",
        address: "Oberoi Mall, Goregaon, Mumbai - 400063",
        area: "Goregaon",
        city: "Mumbai",
        phone: "+91 67890 12345",
        email: "fitprogym@gmail.com",
        yearsInBusiness: "6+",
        description: "FitPro Gym & Spa offers a complete fitness and wellness experience. Our gym features modern equipment, personal trainers, group classes, and a luxury spa for post-workout recovery. We believe in holistic fitness - train hard, recover well.",
        timing: "6:00 AM - 10:00 PM",
        timingNote: "Open all 7 days",
        paymentMethods: [
            "Cash",
            "UPI",
            "Card",
            "EMI"
        ],
        amenities: [
            "Air Conditioned",
            "Locker Room",
            "Steam Bath",
            "Spa",
            "Juice Bar",
            "Personal Trainer",
            "Parking"
        ],
        services: [
            {
                name: "Monthly Membership",
                price: "₹2,000",
                popular: true
            },
            {
                name: "Personal Training",
                price: "₹600/session",
                duration: "1 hr"
            },
            {
                name: "Spa Session (60 min)",
                price: "₹1,500",
                popular: true,
                duration: "1 hr"
            },
            {
                name: "Group Class (Zumba/Yoga)",
                price: "₹350",
                duration: "45 min"
            },
            {
                name: "Annual Membership",
                price: "₹18,000",
                popular: true
            },
            {
                name: "Couple Membership",
                price: "₹3,500/month"
            },
            {
                name: "Diet Plan",
                price: "₹1,500"
            }
        ],
        reviews: [
            {
                id: "r1",
                name: "Kunal Mehta",
                avatar: "KM",
                rating: 4,
                date: "5 days ago",
                text: "Good gym with decent equipment. The spa is a nice touch after workouts. Trainers are helpful but the gym gets crowded in evenings.",
                helpful: 20
            },
            {
                id: "r2",
                name: "Priti Sharma",
                avatar: "PS",
                rating: 5,
                date: "1 week ago",
                text: "Love the Zumba classes here! The instructor is energetic and fun. The spa is relaxing. Membership pricing is reasonable for the facilities offered.",
                helpful: 28
            }
        ],
        photos: [
            "/images/businesses/fitzone-gym.jpg"
        ],
        likes: "890",
        views: "25,340",
        followers: "670",
        products: [
            {
                "id": "fp-p1",
                "name": "Creatine Monohydrate (250g)",
                "price": "₹699",
                "originalPrice": "₹999",
                "image": "creatine",
                "rating": 4.6,
                "reviews": 456,
                "badge": "Bestseller",
                "inStock": true,
                "category": "Supplements",
                "description": "Micronized creatine monohydrate for strength and power. Unflavored, mixes easily."
            },
            {
                "id": "fp-p2",
                "name": "Yoga Mat (6mm Thick)",
                "price": "₹599",
                "originalPrice": "₹899",
                "image": "yoga-mat",
                "rating": 4.4,
                "reviews": 789,
                "inStock": true,
                "category": "Equipment",
                "description": "Eco-friendly TPE yoga mat with alignment lines. Non-slip surface, comes with carry strap."
            },
            {
                "id": "fp-p3",
                "name": "Pre-Workout Powder (500g)",
                "price": "₹1,499",
                "originalPrice": "₹1,999",
                "image": "preworkout",
                "rating": 4.3,
                "reviews": 234,
                "inStock": true,
                "category": "Supplements",
                "description": "Explosive pre-workout with caffeine, beta-alanine, and citrulline. Fruit punch flavor."
            }
        ],
        similarStores: [
            {
                id: "fitzone-gym",
                name: "FitZone Gym",
                category: "Gym",
                rating: "4.5",
                area: "Goregaon",
                logoEmoji: "💪"
            },
            {
                id: "carewell-pharmacy",
                name: "CareWell Pharmacy",
                category: "Pharmacy",
                rating: "4.6",
                area: "Malad West",
                logoEmoji: "💊"
            },
            {
                id: "shivam-fast-food",
                name: "Shivam Fast Food",
                category: "Restaurant",
                rating: "4.5",
                area: "Andheri West",
                logoEmoji: "🍔"
            }
        ]
    }
};
function getStoreById(id) {
    return storeDatabase[id];
}
function getAllStoreIds() {
    return Object.keys(storeDatabase);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/tourist-place-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllTouristPlaces",
    ()=>getAllTouristPlaces,
    "getTouristPlaceBySlug",
    ()=>getTouristPlaceBySlug,
    "touristPlaces",
    ()=>touristPlaces
]);
const touristPlaces = [
    {
        id: "tp-001",
        slug: "india-gate",
        name: "India Gate",
        city: "New Delhi",
        state: "Delhi",
        lat: 28.6129,
        lng: 77.2295,
        rating: 4.6,
        totalRatings: 84520,
        distance: "2.5 km",
        entryFee: "Free",
        timings: "Open 24 hours",
        bestTimeToVisit: "October to March",
        parking: "Available - Paid parking nearby",
        familyFriendly: true,
        wheelchairAccessible: true,
        isOpen: true,
        shortDescription: "India Gate is a war memorial located along the Rajpath, on the eastern edge of the ceremonial axis of New Delhi. It stands as a tribute to the 70,000 Indian soldiers who lost their lives fighting for the British Army during World War I.",
        images: [],
        gallery: [],
        nearbyCategories: [
            {
                slug: "restaurants",
                label: "Restaurants",
                icon: "\ud83c\udf7d\ufe0f",
                bg: "#FEF3C7",
                count: 156
            },
            {
                slug: "hotels",
                label: "Hotels",
                icon: "\ud83c\udfe8",
                bg: "#DBEAFE",
                count: 89
            },
            {
                slug: "cafes",
                label: "Cafes",
                icon: "\u2615",
                bg: "#F3E8FF",
                count: 74
            },
            {
                slug: "photographers",
                label: "Photographers",
                icon: "\ud83d\udcf8",
                bg: "#ECFDF5",
                count: 32
            },
            {
                slug: "shopping",
                label: "Shopping",
                icon: "\ud83d\udecd\ufe0f",
                bg: "#FEE2E2",
                count: 210
            },
            {
                slug: "travel-agents",
                label: "Travel Agents",
                icon: "\ud83d\udea2",
                bg: "#E0F2FE",
                count: 45
            },
            {
                slug: "guides",
                label: "Tour Guides",
                icon: "\ud83d\udcdc",
                bg: "#FCE7F3",
                count: 28
            }
        ],
        popularBusinesses: [
            {
                id: "biz-ig-001",
                name: "Parikrama - The Rooftop Restaurant",
                category: "Restaurant",
                area: "Connaught Place",
                rating: 4.3,
                totalRatings: 3200,
                distance: "1.2 km",
                logoEmoji: "\ud83c\udf7d\ufe0f",
                coverGradient: "from-orange-500 to-red-600",
                isOpen: true
            },
            {
                id: "biz-ig-002",
                name: "The Imperial New Delhi",
                category: "Hotel",
                area: "Janpath",
                rating: 4.7,
                totalRatings: 5600,
                distance: "0.8 km",
                logoEmoji: "\ud83c\udfe8",
                coverGradient: "from-amber-600 to-yellow-700",
                isOpen: true
            },
            {
                id: "biz-ig-003",
                name: "United Coffee House",
                category: "Cafe",
                area: "Connaught Place",
                rating: 4.2,
                totalRatings: 4100,
                distance: "1.5 km",
                logoEmoji: "\u2615",
                coverGradient: "from-yellow-600 to-amber-700",
                isOpen: true
            },
            {
                id: "biz-ig-004",
                name: "Delhi Photography Studio",
                category: "Photographer",
                area: "Pragati Maidan",
                rating: 4.4,
                totalRatings: 890,
                distance: "1.8 km",
                logoEmoji: "\ud83d\udcf8",
                coverGradient: "from-emerald-500 to-teal-600",
                isOpen: true
            },
            {
                id: "biz-ig-005",
                name: "Palika Bazaar",
                category: "Shopping",
                area: "Connaught Place",
                rating: 3.9,
                totalRatings: 7800,
                distance: "1.3 km",
                logoEmoji: "\ud83d\udecd\ufe0f",
                coverGradient: "from-pink-500 to-rose-600",
                isOpen: true
            },
            {
                id: "biz-ig-006",
                name: "Delhi Heritage Tours",
                category: "Travel Agent",
                area: "Paharganj",
                rating: 4.1,
                totalRatings: 1200,
                distance: "3.2 km",
                logoEmoji: "\ud83d\udea2",
                coverGradient: "from-cyan-500 to-blue-600",
                isOpen: false
            },
            {
                id: "biz-ig-007",
                name: "Sarovar Tours & Travels",
                category: "Travel Agent",
                area: "Karol Bagh",
                rating: 4.0,
                totalRatings: 950,
                distance: "4.1 km",
                logoEmoji: "\u2708\ufe0f",
                coverGradient: "from-sky-500 to-indigo-600",
                isOpen: true
            }
        ],
        reviews: [
            {
                id: "rev-ig-001",
                userName: "Rajesh Kumar Sharma",
                avatar: "RK",
                rating: 5,
                text: "Absolutely stunning monument, especially at night when it is beautifully illuminated. The atmosphere is magical with families enjoying evening strolls and street food vendors all around. A must-visit place in Delhi!",
                date: "2024-11-15",
                helpful: 234
            },
            {
                id: "rev-ig-002",
                userName: "Priya Nair",
                avatar: "PN",
                rating: 4,
                text: "Great historical monument with beautiful architecture. The surrounding lawns are well-maintained. Can get very crowded on weekends. Best to visit early morning or late evening for a peaceful experience.",
                date: "2024-10-28",
                helpful: 156
            },
            {
                id: "rev-ig-003",
                userName: "Amit Patel",
                avatar: "AP",
                rating: 5,
                text: "One of the most iconic landmarks of India. The evening light show and the Amar Jawan Jyoti flame are truly moving. Plenty of street food options nearby. Parking can be a challenge though.",
                date: "2024-09-20",
                helpful: 189
            },
            {
                id: "rev-ig-004",
                userName: "Sneha Verma",
                avatar: "SV",
                rating: 4,
                text: "Beautiful place for a morning walk or evening outing with family. The monument looks gorgeous during sunset. There are vendors selling ice cream and chaat which kids absolutely love.",
                date: "2024-12-02",
                helpful: 98
            }
        ],
        similarPlaces: [
            {
                id: "sim-001",
                slug: "red-fort",
                name: "Red Fort",
                rating: 4.5,
                distance: "4.2 km"
            },
            {
                id: "sim-002",
                slug: "rashtrapati-bhavan",
                name: "Rashtrapati Bhavan",
                rating: 4.4,
                distance: "2.8 km"
            },
            {
                id: "sim-003",
                slug: "jantar-mantar",
                name: "Jantar Mantar",
                rating: 4.0,
                distance: "3.1 km"
            }
        ]
    },
    {
        id: "tp-002",
        slug: "taj-mahal",
        name: "Taj Mahal",
        city: "Agra",
        state: "Uttar Pradesh",
        lat: 27.1751,
        lng: 78.0421,
        rating: 4.8,
        totalRatings: 142300,
        distance: "5.0 km",
        entryFee: "Indians: INR 50 | Foreigners: INR 1100",
        timings: "Sunrise to Sunset (Closed on Fridays)",
        bestTimeToVisit: "October to March",
        parking: "Available - Multiple parking zones",
        familyFriendly: true,
        wheelchairAccessible: true,
        isOpen: true,
        shortDescription: "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river. It was commissioned in 1632 by Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal. It is one of the Seven Wonders of the World.",
        images: [],
        gallery: [],
        nearbyCategories: [
            {
                slug: "restaurants",
                label: "Restaurants",
                icon: "\ud83c\udf7d\ufe0f",
                bg: "#FEF3C7",
                count: 234
            },
            {
                slug: "hotels",
                label: "Hotels",
                icon: "\ud83c\udfe8",
                bg: "#DBEAFE",
                count: 178
            },
            {
                slug: "cafes",
                label: "Cafes",
                icon: "\u2615",
                bg: "#F3E8FF",
                count: 56
            },
            {
                slug: "photographers",
                label: "Photographers",
                icon: "\ud83d\udcf8",
                bg: "#ECFDF5",
                count: 67
            },
            {
                slug: "shopping",
                label: "Shopping",
                icon: "\ud83d\udecd\ufe0f",
                bg: "#FEE2E2",
                count: 312
            },
            {
                slug: "travel-agents",
                label: "Travel Agents",
                icon: "\ud83d\udea2",
                bg: "#E0F2FE",
                count: 89
            },
            {
                slug: "guides",
                label: "Tour Guides",
                icon: "\ud83d\udcdc",
                bg: "#FCE7F3",
                count: 124
            }
        ],
        popularBusinesses: [
            {
                id: "biz-tm-001",
                name: "Pinch of Spice",
                category: "Restaurant",
                area: "Sadar Bazaar",
                rating: 4.4,
                totalRatings: 5200,
                distance: "3.2 km",
                logoEmoji: "\ud83c\udf7d\ufe0f",
                coverGradient: "from-red-500 to-orange-600",
                isOpen: true
            },
            {
                id: "biz-tm-002",
                name: "The Oberoi Amarvilas",
                category: "Hotel",
                area: "Taj East Gate Road",
                rating: 4.9,
                totalRatings: 3200,
                distance: "0.6 km",
                logoEmoji: "\ud83c\udfe8",
                coverGradient: "from-purple-500 to-violet-600",
                isOpen: true
            },
            {
                id: "biz-tm-003",
                name: "Shah Jahan Cafe & Lounge",
                category: "Cafe",
                area: "Fatehabad Road",
                rating: 4.3,
                totalRatings: 1800,
                distance: "1.1 km",
                logoEmoji: "\u2615",
                coverGradient: "from-teal-500 to-cyan-600",
                isOpen: true
            },
            {
                id: "biz-tm-004",
                name: "Agra Photo Studio",
                category: "Photographer",
                area: "Sadar Bazaar",
                rating: 4.5,
                totalRatings: 670,
                distance: "3.5 km",
                logoEmoji: "\ud83d\udcf8",
                coverGradient: "from-green-500 to-emerald-600",
                isOpen: true
            },
            {
                id: "biz-tm-005",
                name: "Kinari Bazaar",
                category: "Shopping",
                area: "Jama Masjid",
                rating: 4.1,
                totalRatings: 4300,
                distance: "4.8 km",
                logoEmoji: "\ud83d\udecd\ufe0f",
                coverGradient: "from-rose-500 to-pink-600",
                isOpen: true
            },
            {
                id: "biz-tm-006",
                name: "Mughal Heritage Tours",
                category: "Travel Agent",
                area: "Fatehabad Road",
                rating: 4.6,
                totalRatings: 2100,
                distance: "1.4 km",
                logoEmoji: "\ud83d\udea2",
                coverGradient: "from-amber-500 to-orange-600",
                isOpen: true
            },
            {
                id: "biz-tm-007",
                name: "Taj Photowalks by Ravi",
                category: "Photographer",
                area: "Taj Ganj",
                rating: 4.7,
                totalRatings: 920,
                distance: "0.8 km",
                logoEmoji: "\ud83d\udcf7",
                coverGradient: "from-sky-500 to-blue-600",
                isOpen: true
            }
        ],
        reviews: [
            {
                id: "rev-tm-001",
                userName: "Vikram Singh Rathore",
                avatar: "VR",
                rating: 5,
                text: "No words can describe the beauty of the Taj Mahal. It is truly a masterpiece of Mughal architecture. The marble work, the symmetry, the gardens - everything is breathtaking. Visiting at sunrise was the best decision.",
                date: "2024-12-01",
                helpful: 567
            },
            {
                id: "rev-tm-002",
                userName: "Ananya Deshmukh",
                avatar: "AD",
                rating: 5,
                text: "The Taj Mahal exceeded all my expectations. The intricate carvings and inlay work on the marble are unbelievable. We hired an ASI-approved guide near the entrance which really enhanced the experience.",
                date: "2024-11-18",
                helpful: 432
            },
            {
                id: "rev-tm-003",
                userName: "Mohammed Irfan",
                avatar: "MI",
                rating: 4,
                text: "Spectacular monument, one of the finest I have ever seen. The only downside is the crowd management - it can get extremely packed during peak season. Weekday visits are much better. Ticket booking online saves a lot of time.",
                date: "2024-10-05",
                helpful: 298
            },
            {
                id: "rev-tm-004",
                userName: "Kavita Joshi",
                avatar: "KJ",
                rating: 5,
                text: "Visited during full moon night and it was an ethereal experience. The white marble glows under the moonlight. Make sure to book night viewing tickets in advance as they are limited. Truly magical!",
                date: "2024-11-25",
                helpful: 345
            }
        ],
        similarPlaces: [
            {
                id: "sim-004",
                slug: "agra-fort",
                name: "Agra Fort",
                rating: 4.5,
                distance: "2.5 km"
            },
            {
                id: "sim-005",
                slug: "fatehpur-sikri",
                name: "Fatehpur Sikri",
                rating: 4.3,
                distance: "38 km"
            },
            {
                id: "sim-006",
                slug: "mehtab-bagh",
                name: "Mehtab Bagh",
                rating: 4.2,
                distance: "1.2 km"
            }
        ]
    },
    {
        id: "tp-003",
        slug: "gateway-of-india",
        name: "Gateway of India",
        city: "Mumbai",
        state: "Maharashtra",
        lat: 18.922,
        lng: 72.8347,
        rating: 4.5,
        totalRatings: 67800,
        distance: "1.0 km",
        entryFee: "Free",
        timings: "Open 24 hours",
        bestTimeToVisit: "November to February",
        parking: "Limited - Public parking nearby",
        familyFriendly: true,
        wheelchairAccessible: false,
        isOpen: true,
        shortDescription: "The Gateway of India is an arch-monument built in the early 20th century to commemorate the visit of King George V and Queen Mary to India. Standing 26 metres tall on the waterfront of Mumbai Harbour, it is one of the city's most iconic landmarks.",
        images: [],
        gallery: [],
        nearbyCategories: [
            {
                slug: "restaurants",
                label: "Restaurants",
                icon: "\ud83c\udf7d\ufe0f",
                bg: "#FEF3C7",
                count: 189
            },
            {
                slug: "hotels",
                label: "Hotels",
                icon: "\ud83c\udfe8",
                bg: "#DBEAFE",
                count: 134
            },
            {
                slug: "cafes",
                label: "Cafes",
                icon: "\u2615",
                bg: "#F3E8FF",
                count: 98
            },
            {
                slug: "photographers",
                label: "Photographers",
                icon: "\ud83d\udcf8",
                bg: "#ECFDF5",
                count: 45
            },
            {
                slug: "shopping",
                label: "Shopping",
                icon: "\ud83d\udecd\ufe0f",
                bg: "#FEE2E2",
                count: 267
            },
            {
                slug: "travel-agents",
                label: "Travel Agents",
                icon: "\ud83d\udea2",
                bg: "#E0F2FE",
                count: 56
            },
            {
                slug: "guides",
                label: "Tour Guides",
                icon: "\ud83d\udcdc",
                bg: "#FCE7F3",
                count: 34
            }
        ],
        popularBusinesses: [
            {
                id: "biz-gi-001",
                name: "Leopold Cafe",
                category: "Restaurant",
                area: "Colaba",
                rating: 4.3,
                totalRatings: 8900,
                distance: "0.3 km",
                logoEmoji: "\ud83c\udf7d\ufe0f",
                coverGradient: "from-yellow-500 to-amber-600",
                isOpen: true
            },
            {
                id: "biz-gi-002",
                name: "The Taj Mahal Palace Hotel",
                category: "Hotel",
                area: "Apollo Bunder",
                rating: 4.8,
                totalRatings: 6700,
                distance: "0.1 km",
                logoEmoji: "\ud83c\udfe8",
                coverGradient: "from-slate-600 to-zinc-700",
                isOpen: true
            },
            {
                id: "biz-gi-003",
                name: "The Bombay Canteen",
                category: "Restaurant",
                area: "Kamala Mills",
                rating: 4.5,
                totalRatings: 4500,
                distance: "4.2 km",
                logoEmoji: "\ud83c\udf7d\ufe0f",
                coverGradient: "from-emerald-500 to-green-600",
                isOpen: true
            },
            {
                id: "biz-gi-004",
                name: "Kala Ghoda Cafe",
                category: "Cafe",
                area: "Kala Ghoda",
                rating: 4.4,
                totalRatings: 3200,
                distance: "1.8 km",
                logoEmoji: "\u2615",
                coverGradient: "from-violet-500 to-purple-600",
                isOpen: true
            },
            {
                id: "biz-gi-005",
                name: "Colaba Causeway Market",
                category: "Shopping",
                area: "Colaba",
                rating: 4.0,
                totalRatings: 11200,
                distance: "0.5 km",
                logoEmoji: "\ud83d\udecd\ufe0f",
                coverGradient: "from-fuchsia-500 to-pink-600",
                isOpen: true
            },
            {
                id: "biz-gi-006",
                name: "Mumbai Photo Tours",
                category: "Photographer",
                area: "Colaba",
                rating: 4.6,
                totalRatings: 780,
                distance: "0.4 km",
                logoEmoji: "\ud83d\udcf8",
                coverGradient: "from-cyan-500 to-teal-600",
                isOpen: true
            },
            {
                id: "biz-gi-007",
                name: "Maharashtra Tourism Office",
                category: "Travel Agent",
                area: "Churchgate",
                rating: 3.8,
                totalRatings: 560,
                distance: "2.5 km",
                logoEmoji: "\ud83d\udea2",
                coverGradient: "from-orange-500 to-red-600",
                isOpen: true
            }
        ],
        reviews: [
            {
                id: "rev-gi-001",
                userName: "Arjun Mehta",
                avatar: "AM",
                rating: 5,
                text: "The Gateway of India is the heart of Mumbai. The view of the Arabian Sea from here is incredible, especially during sunset. Taking the ferry to Elephanta Caves from here is a wonderful experience. The Taj Hotel in the background adds to the grandeur.",
                date: "2024-11-30",
                helpful: 312
            },
            {
                id: "rev-gi-002",
                userName: "Shruti Kulkarni",
                avatar: "SK",
                rating: 4,
                text: "Beautiful monument with great historical significance. The architecture is a blend of Hindu and Muslim styles. It gets extremely crowded on weekends and holidays. Best visited on weekday mornings for a less chaotic experience.",
                date: "2024-10-15",
                helpful: 198
            },
            {
                id: "rev-gi-003",
                userName: "Rohan Desai",
                avatar: "RD",
                rating: 5,
                text: "Evening visit is highly recommended. The entire area lights up and the sea breeze is fantastic. Lots of street food stalls nearby serving Mumbai's famous bhel puri and vada pav. A perfect evening spot!",
                date: "2024-12-05",
                helpful: 267
            },
            {
                id: "rev-gi-004",
                userName: "Nisha Agarwal",
                avatar: "NA",
                rating: 4,
                text: "Iconic landmark that lives up to the hype. The ferry rides from here are affordable and fun. Beware of persistent touts and selfie photographers. The surrounding area has many good restaurants and shops to explore.",
                date: "2024-09-28",
                helpful: 145
            }
        ],
        similarPlaces: [
            {
                id: "sim-007",
                slug: "marine-drive",
                name: "Marine Drive",
                rating: 4.6,
                distance: "3.0 km"
            },
            {
                id: "sim-008",
                slug: "elephanta-caves",
                name: "Elephanta Caves",
                rating: 4.3,
                distance: "11 km"
            },
            {
                id: "sim-009",
                slug: "chhatrapati-shivaji-maharaj-terminus",
                name: "CSMT",
                rating: 4.4,
                distance: "2.1 km"
            }
        ]
    },
    {
        id: "tp-004",
        slug: "red-fort",
        name: "Red Fort",
        city: "New Delhi",
        state: "Delhi",
        lat: 28.6562,
        lng: 77.241,
        rating: 4.5,
        totalRatings: 73100,
        distance: "4.2 km",
        entryFee: "Indians: INR 35 | Foreigners: INR 500",
        timings: "9:30 AM - 4:30 PM (Closed on Mondays)",
        bestTimeToVisit: "October to March",
        parking: "Available - Paid parking lots",
        familyFriendly: true,
        wheelchairAccessible: true,
        isOpen: true,
        shortDescription: "The Red Fort is a historic fort in Old Delhi that served as the main residence of the Mughal emperors for nearly 200 years. Built by Emperor Shah Jahan in 1639, its massive red sandstone walls enclose a complex of palaces, museums, and gardens.",
        images: [],
        gallery: [],
        nearbyCategories: [
            {
                slug: "restaurants",
                label: "Restaurants",
                icon: "\ud83c\udf7d\ufe0f",
                bg: "#FEF3C7",
                count: 198
            },
            {
                slug: "hotels",
                label: "Hotels",
                icon: "\ud83c\udfe8",
                bg: "#DBEAFE",
                count: 112
            },
            {
                slug: "cafes",
                label: "Cafes",
                icon: "\u2615",
                bg: "#F3E8FF",
                count: 65
            },
            {
                slug: "photographers",
                label: "Photographers",
                icon: "\ud83d\udcf8",
                bg: "#ECFDF5",
                count: 38
            },
            {
                slug: "shopping",
                label: "Shopping",
                icon: "\ud83d\udecd\ufe0f",
                bg: "#FEE2E2",
                count: 287
            },
            {
                slug: "travel-agents",
                label: "Travel Agents",
                icon: "\ud83d\udea2",
                bg: "#E0F2FE",
                count: 52
            },
            {
                slug: "guides",
                label: "Tour Guides",
                icon: "\ud83d\udcdc",
                bg: "#FCE7F3",
                count: 41
            }
        ],
        popularBusinesses: [
            {
                id: "biz-rf-001",
                name: "Karim's Restaurant",
                category: "Restaurant",
                area: "Jama Masjid",
                rating: 4.5,
                totalRatings: 9800,
                distance: "0.8 km",
                logoEmoji: "\ud83c\udf7d\ufe0f",
                coverGradient: "from-red-600 to-rose-700",
                isOpen: true
            },
            {
                id: "biz-rf-002",
                name: "Hotel Holiday Inn Express",
                category: "Hotel",
                area: "Chandni Chowk",
                rating: 4.1,
                totalRatings: 2300,
                distance: "1.2 km",
                logoEmoji: "\ud83c\udfe8",
                coverGradient: "from-blue-500 to-indigo-600",
                isOpen: true
            },
            {
                id: "biz-rf-003",
                name: "Chaiwala - The Tea Room",
                category: "Cafe",
                area: "Chandni Chowk",
                rating: 4.2,
                totalRatings: 1600,
                distance: "1.0 km",
                logoEmoji: "\u2615",
                coverGradient: "from-amber-500 to-yellow-600",
                isOpen: true
            },
            {
                id: "biz-rf-004",
                name: "Chandni Chowk Market",
                category: "Shopping",
                area: "Chandni Chowk",
                rating: 4.0,
                totalRatings: 15600,
                distance: "0.9 km",
                logoEmoji: "\ud83d\udecd\ufe0f",
                coverGradient: "from-orange-500 to-red-600",
                isOpen: true
            },
            {
                id: "biz-rf-005",
                name: "Delhi Heritage Walks",
                category: "Travel Agent",
                area: "Jama Masjid",
                rating: 4.6,
                totalRatings: 890,
                distance: "0.7 km",
                logoEmoji: "\ud83d\udcdc",
                coverGradient: "from-teal-500 to-emerald-600",
                isOpen: true
            },
            {
                id: "biz-rf-006",
                name: "Old Delhi Photo Tours",
                category: "Photographer",
                area: "Chandni Chowk",
                rating: 4.7,
                totalRatings: 540,
                distance: "1.1 km",
                logoEmoji: "\ud83d\udcf8",
                coverGradient: "from-purple-500 to-violet-600",
                isOpen: true
            },
            {
                id: "biz-rf-007",
                name: "Jain Soni Fashions",
                category: "Shopping",
                area: "Dariba Kalan",
                rating: 4.3,
                totalRatings: 2100,
                distance: "1.3 km",
                logoEmoji: "\ud83d\udecd\ufe0f",
                coverGradient: "from-pink-500 to-fuchsia-600",
                isOpen: false
            }
        ],
        reviews: [
            {
                id: "rev-rf-001",
                userName: "Suresh Chauhan",
                avatar: "SC",
                rating: 5,
                text: "The Red Fort is a magnificent piece of Mughal architecture. The Diwan-i-Aam and Diwan-i-Khas are absolutely stunning. The light and sound show in the evening is a must-see - it brings the history of the fort alive!",
                date: "2024-11-22",
                helpful: 345
            },
            {
                id: "rev-rf-002",
                userName: "Deepa Iyer",
                avatar: "DI",
                rating: 4,
                text: "Great historical monument with well-preserved structures. The museum inside has some fascinating artifacts from the Mughal era. Audio guides are available at the entrance which I highly recommend for a better understanding of the history.",
                date: "2024-10-12",
                helpful: 223
            },
            {
                id: "rev-rf-003",
                userName: "Manish Gupta",
                avatar: "MG",
                rating: 5,
                text: "Visited during Independence Day and the flag hoisting ceremony was a proud moment. The fort looks spectacular in red sandstone. Chhata Bazaar inside has some nice souvenirs and handicrafts. Plan at least 2-3 hours for a thorough visit.",
                date: "2024-08-15",
                helpful: 278
            },
            {
                id: "rev-rf-004",
                userName: "Pooja Reddy",
                avatar: "PR",
                rating: 4,
                text: "Beautiful fort with rich history. The marble inlay work in some sections is reminiscent of the Taj Mahal. The gardens are well-maintained. Can get very hot in summer so carry water and wear comfortable shoes.",
                date: "2024-12-08",
                helpful: 167
            }
        ],
        similarPlaces: [
            {
                id: "sim-010",
                slug: "india-gate",
                name: "India Gate",
                rating: 4.6,
                distance: "4.2 km"
            },
            {
                id: "sim-011",
                slug: "jama-masjid",
                name: "Jama Masjid",
                rating: 4.4,
                distance: "0.8 km"
            },
            {
                id: "sim-012",
                slug: "humayuns-tomb",
                name: "Humayun's Tomb",
                rating: 4.5,
                distance: "6.3 km"
            }
        ]
    },
    {
        id: "tp-005",
        slug: "rishikesh",
        name: "Laxman Jhula",
        city: "Rishikesh",
        state: "Uttarakhand",
        lat: 30.0869,
        lng: 78.2676,
        rating: 4.4,
        totalRatings: 34500,
        distance: "8.0 km",
        entryFee: "Free",
        timings: "5:00 AM - 9:00 PM",
        bestTimeToVisit: "September to November, February to May",
        parking: "Available - Paid parking near the bridge",
        familyFriendly: true,
        wheelchairAccessible: false,
        isOpen: true,
        shortDescription: "Laxman Jhula is a 450-foot-long suspended bridge over the Ganges River in Rishikesh. Built in 1939, it is one of the most iconic landmarks of the city. The bridge offers stunning views of the river and surrounding hills, and is surrounded by ancient temples and ashrams.",
        images: [],
        gallery: [],
        nearbyCategories: [
            {
                slug: "restaurants",
                label: "Restaurants",
                icon: "\ud83c\udf7d\ufe0f",
                bg: "#FEF3C7",
                count: 145
            },
            {
                slug: "hotels",
                label: "Hotels",
                icon: "\ud83c\udfe8",
                bg: "#DBEAFE",
                count: 210
            },
            {
                slug: "cafes",
                label: "Cafes",
                icon: "\u2615",
                bg: "#F3E8FF",
                count: 87
            },
            {
                slug: "adventure",
                label: "Adventure Sports",
                icon: "\ud83c\udfc2",
                bg: "#ECFDF5",
                count: 56
            },
            {
                slug: "shopping",
                label: "Shopping",
                icon: "\ud83d\udecd\ufe0f",
                bg: "#FEE2E2",
                count: 92
            },
            {
                slug: "travel-agents",
                label: "Travel Agents",
                icon: "\ud83d\udea2",
                bg: "#E0F2FE",
                count: 78
            },
            {
                slug: "yoga",
                label: "Yoga & Meditation",
                icon: "\ud83e\uddd8",
                bg: "#FCE7F3",
                count: 134
            }
        ],
        popularBusinesses: [
            {
                id: "biz-rs-001",
                name: "Chotiwala Restaurant",
                category: "Restaurant",
                area: "Laxman Jhula",
                rating: 4.2,
                totalRatings: 4500,
                distance: "0.2 km",
                logoEmoji: "\ud83c\udf7d\ufe0f",
                coverGradient: "from-orange-500 to-red-600",
                isOpen: true
            },
            {
                id: "biz-rs-002",
                name: "The Glasshouse on the Ganges",
                category: "Hotel",
                area: "Shivpuri",
                rating: 4.7,
                totalRatings: 2800,
                distance: "2.1 km",
                logoEmoji: "\ud83c\udfe8",
                coverGradient: "from-emerald-500 to-teal-600",
                isOpen: true
            },
            {
                id: "biz-rs-003",
                name: "Dev Cafe",
                category: "Cafe",
                area: "Laxman Jhula",
                rating: 4.3,
                totalRatings: 1900,
                distance: "0.1 km",
                logoEmoji: "\u2615",
                coverGradient: "from-amber-500 to-yellow-600",
                isOpen: true
            },
            {
                id: "biz-rs-004",
                name: "Red Chilli Adventure",
                category: "Adventure Sports",
                area: "Shivpuri",
                rating: 4.5,
                totalRatings: 3200,
                distance: "5.0 km",
                logoEmoji: "\ud83c\udfc2",
                coverGradient: "from-red-500 to-rose-600",
                isOpen: true
            },
            {
                id: "biz-rs-005",
                name: "Rishikesh Shopping Market",
                category: "Shopping",
                area: "Ram Jhula",
                rating: 4.0,
                totalRatings: 2100,
                distance: "0.8 km",
                logoEmoji: "\ud83d\udecd\ufe0f",
                coverGradient: "from-purple-500 to-violet-600",
                isOpen: true
            },
            {
                id: "biz-rs-006",
                name: "Parmarth Niketan Ashram",
                category: "Yoga & Meditation",
                area: "Laxman Jhula",
                rating: 4.8,
                totalRatings: 6700,
                distance: "0.3 km",
                logoEmoji: "\ud83e\uddd8",
                coverGradient: "from-sky-500 to-blue-600",
                isOpen: true
            },
            {
                id: "biz-rs-007",
                name: "Rishikesh Rafting Co.",
                category: "Adventure Sports",
                area: "Brahmpuri",
                rating: 4.6,
                totalRatings: 5400,
                distance: "3.5 km",
                logoEmoji: "\ud83c\udfde\ufe0f",
                coverGradient: "from-cyan-500 to-indigo-600",
                isOpen: true
            }
        ],
        reviews: [
            {
                id: "rev-rs-001",
                userName: "Vivek Sharma",
                avatar: "VS",
                rating: 5,
                text: "The Laxman Jhula bridge is an incredible experience. Walking across the Ganges with the sound of the river below and temples on both sides is truly spiritual. The evening aarti at nearby ghats adds to the mystical charm of this place.",
                date: "2024-11-10",
                helpful: 178
            },
            {
                id: "rev-rs-002",
                userName: "Meera Patel",
                avatar: "MP",
                rating: 4,
                text: "Beautiful bridge with amazing views of the Ganges and the hills. It can get quite crowded during peak season. There are many cafes and shops on both sides. The area has a very peaceful and spiritual vibe that you won't find anywhere else.",
                date: "2024-10-22",
                helpful: 145
            },
            {
                id: "rev-rs-003",
                userName: "Arjun Nair",
                avatar: "AN",
                rating: 5,
                text: "Rishikesh and Laxman Jhula exceeded all expectations. The combination of adventure activities like rafting and bungee jumping with the spiritual atmosphere is unique. The sunrise view from the bridge is breathtaking. A must-visit for everyone.",
                date: "2024-12-01",
                helpful: 203
            },
            {
                id: "rev-rs-004",
                userName: "Sakshi Gupta",
                avatar: "SG",
                rating: 4,
                text: "The bridge offers a wonderful experience but be prepared for crowds. The nearby Trayambakeshwar Temple and the Beatles Ashram are worth visiting. Try the street food and chai at the small stalls near the bridge entrance.",
                date: "2024-09-15",
                helpful: 112
            }
        ],
        similarPlaces: [
            {
                id: "sim-013",
                slug: "ram-jhula",
                name: "Ram Jhula",
                rating: 4.3,
                distance: "1.5 km"
            },
            {
                id: "sim-014",
                slug: "haridwar",
                name: "Har Ki Pauri",
                rating: 4.6,
                distance: "25 km"
            },
            {
                id: "sim-015",
                slug: "neelkanth",
                name: "Neelkanth Mahadev",
                rating: 4.5,
                distance: "32 km"
            }
        ]
    },
    {
        id: "tp-006",
        slug: "dehradun",
        name: "Robbers Cave",
        city: "Dehradun",
        state: "Uttarakhand",
        lat: 30.3798,
        lng: 77.9549,
        rating: 4.2,
        totalRatings: 18900,
        distance: "6.0 km",
        entryFee: "INR 25 per person",
        timings: "7:00 AM - 6:00 PM",
        bestTimeToVisit: "March to June, September to November",
        parking: "Available - Free parking",
        familyFriendly: true,
        wheelchairAccessible: false,
        isOpen: true,
        shortDescription: "Robbers Cave, also known as Guchhupani, is a natural river cave formation near Dehradun. The cave is about 600 metres long and is divided into two main parts with a narrow gorge in between. A cold water stream flows through the cave, creating a unique natural phenomenon where the water disappears underground and reappears a few metres away.",
        images: [],
        gallery: [],
        nearbyCategories: [
            {
                slug: "restaurants",
                label: "Restaurants",
                icon: "\ud83c\udf7d\ufe0f",
                bg: "#FEF3C7",
                count: 178
            },
            {
                slug: "hotels",
                label: "Hotels",
                icon: "\ud83c\udfe8",
                bg: "#DBEAFE",
                count: 234
            },
            {
                slug: "cafes",
                label: "Cafes",
                icon: "\u2615",
                bg: "#F3E8FF",
                count: 65
            },
            {
                slug: "taxis",
                label: "Taxi Services",
                icon: "\ud83d\ude95",
                bg: "#ECFDF5",
                count: 89
            },
            {
                slug: "shopping",
                label: "Shopping",
                icon: "\ud83d\udecd\ufe0f",
                bg: "#FEE2E2",
                count: 145
            },
            {
                slug: "travel-agents",
                label: "Travel Agents",
                icon: "\ud83d\udea2",
                bg: "#E0F2FE",
                count: 56
            },
            {
                slug: "hospitals",
                label: "Hospitals",
                icon: "\ud83c\udfe5",
                bg: "#FCE7F3",
                count: 42
            }
        ],
        popularBusinesses: [
            {
                id: "biz-dd-001",
                name: "Town Table Restaurant",
                category: "Restaurant",
                area: "Rajpur Road",
                rating: 4.3,
                totalRatings: 3400,
                distance: "4.2 km",
                logoEmoji: "\ud83c\udf7d\ufe0f",
                coverGradient: "from-red-500 to-orange-600",
                isOpen: true
            },
            {
                id: "biz-dd-002",
                name: "Four Points by Sheraton",
                category: "Hotel",
                area: "Vasant Vihar",
                rating: 4.5,
                totalRatings: 2100,
                distance: "5.1 km",
                logoEmoji: "\ud83c\udfe8",
                coverGradient: "from-blue-500 to-indigo-600",
                isOpen: true
            },
            {
                id: "biz-dd-003",
                name: "The Doon Cafe",
                category: "Cafe",
                area: "Paltan Bazaar",
                rating: 4.1,
                totalRatings: 1200,
                distance: "3.8 km",
                logoEmoji: "\u2615",
                coverGradient: "from-amber-500 to-yellow-600",
                isOpen: true
            },
            {
                id: "biz-dd-004",
                name: "Dehradun Cab Services",
                category: "Taxi Service",
                area: "ISBT",
                rating: 4.2,
                totalRatings: 2800,
                distance: "5.5 km",
                logoEmoji: "\ud83d\ude95",
                coverGradient: "from-green-500 to-emerald-600",
                isOpen: true
            },
            {
                id: "biz-dd-005",
                name: "Paltan Bazaar",
                category: "Shopping",
                area: "Paltan Bazaar",
                rating: 3.9,
                totalRatings: 5600,
                distance: "4.0 km",
                logoEmoji: "\ud83d\udecd\ufe0f",
                coverGradient: "from-pink-500 to-rose-600",
                isOpen: true
            },
            {
                id: "biz-dd-006",
                name: "Uttarakhand Tourism Office",
                category: "Travel Agent",
                area: "Rajpur Road",
                rating: 4.0,
                totalRatings: 890,
                distance: "4.5 km",
                logoEmoji: "\ud83d\udea2",
                coverGradient: "from-teal-500 to-cyan-600",
                isOpen: true
            },
            {
                id: "biz-dd-007",
                name: "Max Super Speciality Hospital",
                category: "Hospital",
                area: "Srinagar Colony",
                rating: 4.4,
                totalRatings: 3200,
                distance: "6.2 km",
                logoEmoji: "\ud83c\udfe5",
                coverGradient: "from-sky-500 to-blue-600",
                isOpen: true
            }
        ],
        reviews: [
            {
                id: "rev-dd-001",
                userName: "Nikhil Verma",
                avatar: "NV",
                rating: 5,
                text: "Robbers Cave is a hidden gem near Dehradun. Walking through the cold stream inside the cave is an exhilarating experience. The natural formation is fascinating and the water is crystal clear. Perfect for a day trip with family or friends.",
                date: "2024-11-05",
                helpful: 134
            },
            {
                id: "rev-dd-002",
                userName: "Anita Kumari",
                avatar: "AK",
                rating: 4,
                text: "Nice natural attraction with cold spring water flowing through a cave. The walk inside is refreshing but the path can be slippery. Wear proper shoes and carry extra clothes as you will definitely get wet. Kids love this place!",
                date: "2024-10-18",
                helpful: 98
            },
            {
                id: "rev-dd-003",
                userName: "Rahul Joshi",
                avatar: "RJ",
                rating: 4,
                text: "Good place for a half-day outing. The cave is not very long but the experience of walking through water inside a natural cave is unique. The surrounding area has been developed well with pathways and benches. Avoid monsoon season.",
                date: "2024-09-28",
                helpful: 76
            },
            {
                id: "rev-dd-004",
                userName: "Preeti Singh",
                avatar: "PS",
                rating: 5,
                text: "Beautiful natural wonder! The way the stream disappears and reappears is magical. The cave maintains a cool temperature even in summer. There are small food stalls outside. A great place for photography and nature lovers.",
                date: "2024-12-10",
                helpful: 89
            }
        ],
        similarPlaces: [
            {
                id: "sim-016",
                slug: "sahastradhara",
                name: "Sahastradhara",
                rating: 4.3,
                distance: "14 km"
            },
            {
                id: "sim-017",
                slug: "mussorie",
                name: "Mussoorie",
                rating: 4.5,
                distance: "30 km"
            },
            {
                id: "sim-018",
                slug: "forest-research",
                name: "FRI Museum",
                rating: 4.1,
                distance: "8 km"
            }
        ]
    }
];
function getTouristPlaceBySlug(slug) {
    return touristPlaces.find((place)=>place.slug === slug);
}
function getAllTouristPlaces() {
    return touristPlaces;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/lib/search-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRecentLocations",
    ()=>getRecentLocations,
    "getTypeConfig",
    ()=>getTypeConfig,
    "popularCities",
    ()=>popularCities,
    "saveRecentLocation",
    ()=>saveRecentLocation,
    "searchAll",
    ()=>searchAll
]);
// ── Search Data Utility ────────────────────────────────────────────
// Aggregates searchable entities from all data sources into a unified
// search index. Used by both mobile and desktop header search.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-listing-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/product-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tourist$2d$place$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tourist-place-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$category$2d$landing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/category-landing-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$service$2d$category$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/service-category-data.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const popularCities = [
    {
        name: "Mumbai",
        state: "Maharashtra"
    },
    {
        name: "Delhi",
        state: "Delhi NCR"
    },
    {
        name: "Bangalore",
        state: "Karnataka"
    },
    {
        name: "Hyderabad",
        state: "Telangana"
    },
    {
        name: "Chennai",
        state: "Tamil Nadu"
    },
    {
        name: "Kolkata",
        state: "West Bengal"
    },
    {
        name: "Pune",
        state: "Maharashtra"
    },
    {
        name: "Ahmedabad",
        state: "Gujarat"
    },
    {
        name: "Jaipur",
        state: "Rajasthan"
    },
    {
        name: "Lucknow",
        state: "Uttar Pradesh"
    },
    {
        name: "Chandigarh",
        state: "Punjab"
    },
    {
        name: "Kochi",
        state: "Kerala"
    }
];
// ── Build search index (computed once at module level) ─────────────
const typeConfig = {
    business: {
        emoji: "🏪",
        label: "Business"
    },
    product: {
        emoji: "👕",
        label: "Product"
    },
    service: {
        emoji: "🛠",
        label: "Service"
    },
    category: {
        emoji: "📂",
        label: "Category"
    },
    tourist_place: {
        emoji: "📍",
        label: "Tourist Place"
    }
};
/** Build a flat, searchable list from all data sources. */ function buildSearchIndex() {
    const items = [];
    // 1) Businesses from business-listing-data
    for (const b of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["businesses"]){
        items.push({
            id: b.id,
            type: "business",
            label: b.name,
            subtitle: `${b.category} • ${b.area}`,
            emoji: b.logoEmoji,
            href: `/store/${b.storeId}`
        });
    }
    // 2) Additional stores from store-data not already in businesses
    const businessStoreIds = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["businesses"].map((b)=>b.storeId));
    for (const [id, store] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storeDatabase"])){
        if (businessStoreIds.has(id)) continue;
        items.push({
            id: `store-${id}`,
            type: "business",
            label: store.name,
            subtitle: `${store.category} • ${store.area}`,
            emoji: store.logoEmoji,
            href: `/store/${id}`
        });
    }
    // 3) Products from product-data
    for (const [id, p] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productDatabase"])){
        items.push({
            id: `prod-${id}`,
            type: "product",
            label: p.name,
            subtitle: `${p.storeName} • ${p.price}`,
            emoji: getEmojiForProductCategory(p.category),
            href: `/store/${p.storeId}?product=${id}`
        });
    }
    // 4) Service categories
    for (const sc of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$service$2d$category$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceCategories"]){
        items.push({
            id: `svc-${sc.slug}`,
            type: "service",
            label: sc.label,
            subtitle: sc.description,
            emoji: sc.icon,
            href: `/services?category=${sc.slug}`,
            query: sc.slug
        });
    }
    // 5) Category landing pages
    for (const cl of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$category$2d$landing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryLandingData"]){
        items.push({
            id: `cat-${cl.slug}`,
            type: "category",
            label: cl.label,
            subtitle: `${cl.businessCount.toLocaleString()} businesses`,
            emoji: cl.emoji,
            href: `/category/${cl.slug}`
        });
    }
    // 6) Listing categories that may not have a landing page
    for (const ec of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendedCategories"]){
        const exists = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$category$2d$landing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryLandingData"].some((cl)=>cl.slug === ec.slug);
        if (!exists) {
            const count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBusinessesByCategory"])(ec.slug).length;
            items.push({
                id: `catl-${ec.slug}`,
                type: "category",
                label: ec.label,
                subtitle: `${count} businesses`,
                emoji: ec.icon,
                href: `/services?category=${ec.slug}`,
                query: ec.slug
            });
        }
    }
    // 7) Tourist places
    for (const tp of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tourist$2d$place$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["touristPlaces"]){
        items.push({
            id: `tp-${tp.slug}`,
            type: "tourist_place",
            label: tp.name,
            subtitle: `${tp.city}, ${tp.state} • ${tp.rating}★`,
            emoji: "📍",
            href: `/tourist/${tp.slug}`
        });
    }
    return items;
}
const searchIndex = buildSearchIndex();
function searchAll(query, location, limit = 6) {
    if (!query || query.trim().length < 1) return [];
    const q = query.toLowerCase().trim();
    // Score each item
    const scored = searchIndex.map((item)=>{
        let score = 0;
        const label = item.label.toLowerCase();
        const subtitle = item.subtitle.toLowerCase();
        // Exact prefix match on label
        if (label.startsWith(q)) score += 100;
        else if (label.includes(q)) score += 60;
        else if (subtitle.includes(q)) score += 30;
        else {
            const words = q.split(/\s+/);
            const allWordsMatch = words.every((w)=>label.includes(w) || subtitle.includes(w));
            if (allWordsMatch) score += 20;
        }
        // Boost verified / featured (business type)
        if (item.type === "business") {
            const biz = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$listing$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["businesses"].find((b)=>b.id === item.id);
            if (biz?.isFeatured) score += 15;
            if (biz?.isVerified) score += 10;
        }
        // Location boost
        if (location && location !== "All India") {
            const loc = location.toLowerCase();
            if (subtitle.includes(loc)) score += 20;
        }
        return {
            item,
            score
        };
    }).filter((s)=>s.score > 0).sort((a, b)=>b.score - a.score);
    // Group by type, take top N per type, then flatten
    const grouped = new Map();
    for (const { item } of scored){
        const list = grouped.get(item.type) || [];
        if (list.length < limit) list.push(item);
        grouped.set(item.type, list);
    }
    // Ordered: business → product → service → category → tourist_place
    const typeOrder = [
        "business",
        "product",
        "service",
        "category",
        "tourist_place"
    ];
    const result = [];
    for (const t of typeOrder){
        const group = grouped.get(t);
        if (group) result.push(...group);
        if (result.length >= limit * 2) break;
    }
    return result.slice(0, limit * 2);
}
function getTypeConfig(type) {
    return typeConfig[type];
}
function getRecentLocations() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem("jd_recent_locations");
        return raw ? JSON.parse(raw) : [];
    } catch  {
        return [];
    }
}
function saveRecentLocation(city) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        let recent = getRecentLocations();
        recent = recent.filter((r)=>r !== city);
        recent.unshift(city);
        recent = recent.slice(0, 5);
        localStorage.setItem("jd_recent_locations", JSON.stringify(recent));
    } catch  {
    // ignore
    }
}
// ── Helpers ────────────────────────────────────────────────────────
function getEmojiForProductCategory(category) {
    const map = {
        Ayurvedic: "🌿",
        Medicine: "💊",
        Grocery: "🛒",
        Beverage: "🥤",
        Snack: "🍿",
        Dairy: "🧈",
        Electronics: "📱",
        Audio: "🎧",
        Mobile: "📲",
        Appliance: "🔌",
        Food: "🍜",
        Beauty: "💄",
        Fitness: "💪",
        Spice: "🌶️",
        Personal: "🧴"
    };
    for (const [key, emoji] of Object.entries(map)){
        if (category.toLowerCase().includes(key.toLowerCase())) return emoji;
    }
    return "👕";
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
"[project]/src/components/justdial/DesktopLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesktopLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-client] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-client] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plane.js [app-client] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shirt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shirt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shirt.js [app-client] (ecmascript) <export default as Shirt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dumbbell.js [app-client] (ecmascript) <export default as Dumbbell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hotel.js [app-client] (ecmascript) <export default as Hotel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.js [app-client] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paintbrush.js [app-client] (ecmascript) <export default as Paintbrush>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-client] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sofa$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sofa$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sofa.js [app-client] (ecmascript) <export default as Sofa>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scissors.js [app-client] (ecmascript) <export default as Scissors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/baby.js [app-client] (ecmascript) <export default as Baby>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tv$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tv.js [app-client] (ecmascript) <export default as Tv>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/product-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/search-data.ts [app-client] (ecmascript)");
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
const topCategories = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
        label: "B2B",
        color: "#3B82F6",
        bg: "#EFF6FF",
        slug: "b2b"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
        label: "Doctors",
        color: "#EF4444",
        bg: "#FEF2F2",
        slug: "doctors"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"],
        label: "Travel",
        color: "#F59E0B",
        bg: "#FFFBEB",
        slug: "travel"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"],
        label: "Car Hire",
        color: "#10B981",
        bg: "#ECFDF5",
        slug: "car-hire"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        label: "Beauty",
        color: "#EC4899",
        bg: "#FDF2F8",
        slug: "beauty"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
        label: "Education",
        color: "#8B5CF6",
        bg: "#F5F3FF",
        slug: "education"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shirt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shirt$3e$__["Shirt"],
        label: "Fashion",
        color: "#F97316",
        bg: "#FFF7ED",
        slug: "fashion"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"],
        label: "Gyms",
        color: "#06B6D4",
        bg: "#ECFEFF",
        slug: "gyms"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
        label: "Packers",
        color: "#14B8A6",
        bg: "#F0FDFA",
        slug: "packers"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
        label: "Jobs",
        color: "#6366F1",
        bg: "#EEF2FF",
        slug: "jobs"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"],
        label: "Real Estate",
        color: "#D97706",
        bg: "#FFFBEB",
        slug: "real-estate"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        label: "Home Decor",
        color: "#059669",
        bg: "#ECFDF5",
        slug: "home-decor"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"],
        label: "Hotels",
        color: "#DC2626",
        bg: "#FEF2F2",
        slug: "hotels"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"],
        label: "Movies",
        color: "#7C3AED",
        bg: "#F5F3FF",
        slug: "movies"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"],
        label: "Restaurants",
        color: "#EA580C",
        bg: "#FFF7ED",
        slug: "restaurants"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"],
        label: "Shopping",
        color: "#2563EB",
        bg: "#EFF6FF",
        slug: "shopping"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"],
        label: "Electronics",
        color: "#4F46E5",
        bg: "#EEF2FF",
        slug: "electronics"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
        label: "Repairs",
        color: "#0891B2",
        bg: "#ECFEFF",
        slug: "repairs"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        label: "Health",
        color: "#E11D48",
        bg: "#FFF1F2",
        slug: "health"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
        label: "Loans",
        color: "#15803D",
        bg: "#F0FDF4",
        slug: "loans"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"],
        label: "Internet",
        color: "#7C3AED",
        bg: "#F5F3FF",
        slug: "internet"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__["Baby"],
        label: "Maternity",
        color: "#DB2777",
        bg: "#FCE7F3",
        slug: "maternity"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        label: "Visa",
        color: "#1D4ED8",
        bg: "#EFF6FF",
        slug: "visa"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"],
        label: "Salons",
        color: "#C026D3",
        bg: "#FAF5FF",
        slug: "salons"
    }
];
const homeServices = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
        label: "AC Repair",
        rating: "4.5",
        pros: "1.2K",
        color: "#3B82F6",
        slug: "ac-repair"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        label: "Plumber",
        rating: "4.4",
        pros: "890",
        color: "#06B6D4",
        slug: "plumber"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        label: "Electrician",
        rating: "4.6",
        pros: "1.5K",
        color: "#F59E0B",
        slug: "electrician"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sofa$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sofa$3e$__["Sofa"],
        label: "Carpenter",
        rating: "4.3",
        pros: "640",
        color: "#8B5CF6",
        slug: "carpenter"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__["Paintbrush"],
        label: "Painter",
        rating: "4.4",
        pros: "420",
        color: "#EC4899",
        slug: "painter"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        label: "Home Cleaning",
        rating: "4.7",
        pros: "2.1K",
        color: "#10B981",
        slug: "deep-cleaning"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"],
        label: "Pest Control",
        rating: "4.5",
        pros: "320",
        color: "#A78BFA",
        slug: "pest-control"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tv$3e$__["Tv"],
        label: "CCTV Installation",
        rating: "4.6",
        pros: "180",
        color: "#0EA5E9",
        slug: "cctv"
    }
];
const trendingSearches = [
    "Schools",
    "Beauty Parlours",
    "Vijay Sales",
    "Hospitals",
    "Restaurants",
    "Hotels",
    "Real Estate",
    "Car Dealers",
    "Interior Design",
    "Dentists",
    "Gyms",
    "Packers & Movers"
];
const featuredStores = [
    {
        name: "Shivam Fast Food",
        category: "Fast Food \u2022 Restaurant",
        rating: "4.5",
        reviews: "128",
        distance: "0.3 km",
        address: "Shop 12, MG Road, Andheri West",
        logoEmoji: "\uD83C\uDF54",
        img: "/images/stores/shivam-fast-food.png",
        storeId: "STR-10005"
    },
    {
        name: "Look & Style Salon",
        category: "Beauty \u2022 Salon",
        rating: "4.7",
        reviews: "96",
        distance: "0.5 km",
        address: "2nd Floor, Link Square Mall",
        logoEmoji: "\u2702\uFE0F",
        img: "/images/stores/look-style-salon.png",
        storeId: "STR-70001"
    },
    {
        name: "CareWell Pharmacy",
        category: "Medical \u2022 Pharmacy",
        rating: "4.6",
        reviews: "88",
        distance: "0.7 km",
        address: "Ground Floor, City Center",
        logoEmoji: "\uD83D\uDC8A",
        img: "/images/stores/carewell-pharmacy.png",
        storeId: "STR-100001"
    },
    {
        name: "Fresh Mart Grocery",
        category: "Grocery \u2022 Supermarket",
        rating: "4.4",
        reviews: "215",
        distance: "0.4 km",
        address: "Plot 5, SV Road, Malad West",
        logoEmoji: "\uD83E\uDDF1",
        img: "/images/stores/fresh-mart-grocery.png",
        storeId: "STR-40006"
    },
    {
        name: "QuickFix Electronics",
        category: "Electronics \u2022 Mobile",
        rating: "4.3",
        reviews: "167",
        distance: "0.9 km",
        address: "Shop 8, Heera Panna Mall",
        logoEmoji: "\uD83D\uDCF1",
        img: "/images/stores/quickfix-electronics.png",
        storeId: "STR-90001"
    },
    {
        name: "Green Leaf Cafe",
        category: "Cafe \u2022 Restaurant",
        rating: "4.8",
        reviews: "302",
        distance: "1.2 km",
        address: "1st Floor, Hill Road, Bandra",
        logoEmoji: "\u2615",
        img: "/images/stores/green-leaf-cafe.png"
    }
];
const trendingStores = [
    {
        name: "Sunrise Public School",
        category: "Education \u2022 School",
        rating: "4.6",
        reviews: "340",
        distance: "0.8 km",
        address: "Sector 7, DPS Road, Nerul",
        logoEmoji: "\uD83C\uDFEB",
        img: "/images/guides/schools-delhi.png",
        storeId: "STR-130001"
    },
    {
        name: "Glow Beauty Parlour",
        category: "Beauty \u2022 Parlour",
        rating: "4.8",
        reviews: "256",
        distance: "0.4 km",
        address: "Shop 3, Linking Road, Bandra",
        logoEmoji: "\uD83D\uDC85",
        img: "/images/stores/look-style-salon.png",
        storeId: "STR-70001"
    },
    {
        name: "Vijay Sales Store",
        category: "Electronics \u2022 Appliances",
        rating: "4.3",
        reviews: "512",
        distance: "1.1 km",
        address: "MG Road, Andheri East",
        logoEmoji: "\uD83D\uDCE6",
        img: "/images/stores/quickfix-electronics.png",
        storeId: "STR-90001"
    },
    {
        name: "Royal Banquet Hall",
        category: "Venue \u2022 Banquet",
        rating: "4.5",
        reviews: "189",
        distance: "1.5 km",
        address: "Juhu Tara Road, Juhu",
        logoEmoji: "\uD83C\uDF89",
        img: "/images/collections/wedding-planners.png",
        storeId: "STR-10005"
    },
    {
        name: "SmileCare Dental",
        category: "Medical \u2022 Dentist",
        rating: "4.7",
        reviews: "421",
        distance: "0.6 km",
        address: "2nd Floor, Kohinoor City",
        logoEmoji: "\uD83E\uDDF7",
        img: "/images/businesses/sharma-dental.png",
        storeId: "STR-60008"
    },
    {
        name: "FitPro Gym & Spa",
        category: "Fitness \u2022 Gym",
        rating: "4.4",
        reviews: "198",
        distance: "0.9 km",
        address: "Oberoi Mall, Goregaon",
        logoEmoji: "\uD83D\uDCAA",
        img: "/images/businesses/fitzone-gym.png",
        storeId: "STR-80001"
    }
];
function DesktopLayout() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Mumbai");
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const featuredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trendingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [featuredScrollPos, setFeaturedScrollPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [trendingScrollPos, setTrendingScrollPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // ── Location & Search State ──
    const [locationDropdownOpen, setLocationDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [locationSearch, setLocationSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showSuggestions, setShowSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [recentLocations, setRecentLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const locationDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const suggestionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesktopLayout.useEffect": ()=>{
            setRecentLocations((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRecentLocations"])());
        }
    }["DesktopLayout.useEffect"], []);
    // Close dropdowns on outside click
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesktopLayout.useEffect": ()=>{
            const handler = {
                "DesktopLayout.useEffect.handler": (e)=>{
                    if (locationDropdownRef.current && !locationDropdownRef.current.contains(e.target)) {
                        setLocationDropdownOpen(false);
                        setLocationSearch("");
                    }
                    if (suggestionsRef.current && !suggestionsRef.current.contains(e.target) && searchInputRef.current && !searchInputRef.current.contains(e.target)) {
                        setShowSuggestions(false);
                    }
                }
            }["DesktopLayout.useEffect.handler"];
            document.addEventListener("mousedown", handler);
            return ({
                "DesktopLayout.useEffect": ()=>document.removeEventListener("mousedown", handler)
            })["DesktopLayout.useEffect"];
        }
    }["DesktopLayout.useEffect"], []);
    // Debounced search
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesktopLayout.useEffect": ()=>{
            if (!searchQuery.trim()) {
                setSuggestions([]);
                setShowSuggestions(false);
                return;
            }
            const t = setTimeout({
                "DesktopLayout.useEffect.t": ()=>{
                    setSuggestions((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchAll"])(searchQuery, location, 5));
                    setShowSuggestions(true);
                }
            }["DesktopLayout.useEffect.t"], 150);
            return ({
                "DesktopLayout.useEffect": ()=>clearTimeout(t)
            })["DesktopLayout.useEffect"];
        }
    }["DesktopLayout.useEffect"], [
        searchQuery,
        location
    ]);
    const selectCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesktopLayout.useCallback[selectCity]": (city)=>{
            setLocation(city);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveRecentLocation"])(city);
            setRecentLocations((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRecentLocations"])());
            setLocationDropdownOpen(false);
            setLocationSearch("");
        }
    }["DesktopLayout.useCallback[selectCity]"], []);
    const handleSuggestionClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesktopLayout.useCallback[handleSuggestionClick]": (s)=>{
            setShowSuggestions(false);
            setSearchQuery("");
            router.push(s.href);
        }
    }["DesktopLayout.useCallback[handleSuggestionClick]"], [
        router
    ]);
    const scrollFeatured = (dir)=>{
        if (!featuredRef.current) return;
        const scrollAmount = 240;
        featuredRef.current.scrollBy({
            left: dir === 'right' ? scrollAmount : -scrollAmount,
            behavior: 'smooth'
        });
    };
    const scrollTrending = (dir)=>{
        if (!trendingRef.current) return;
        const scrollAmount = 240;
        trendingRef.current.scrollBy({
            left: dir === 'right' ? scrollAmount : -scrollAmount,
            behavior: 'smooth'
        });
    };
    // Track scroll positions for arrow visibility
    const handleFeaturedScroll = ()=>{
        if (featuredRef.current) setFeaturedScrollPos(featuredRef.current.scrollLeft);
    };
    const handleTrendingScroll = ()=>{
        if (trendingRef.current) setTrendingScrollPos(trendingRef.current.scrollLeft);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#0056b3] text-white text-xs",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 flex items-center justify-between h-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Get App |"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "List Your Business Free"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:underline flex items-center gap-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:underline flex items-center gap-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:underline flex items-center gap-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:underline flex items-center gap-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mx-2",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:underline",
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:underline",
                                    children: "Sign Up"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white shadow-sm sticky top-0 z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 flex items-center justify-between h-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-bold text-[#e42529]",
                                            children: "J"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-bold text-[#0056b3]",
                                            children: "ust"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-bold text-[#e42529]",
                                            children: "D"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 256,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-bold text-[#0056b3]",
                                            children: "ial"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 257,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 max-w-2xl mx-6 relative",
                                ref: suggestionsRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center border-2 border-[#0056b3] rounded-lg overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                ref: locationDropdownRef,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setLocationDropdownOpen(!locationDropdownOpen),
                                                        className: "flex items-center px-3 py-2 border-r bg-gray-50 gap-2 min-w-[180px] h-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "w-4 h-4 text-[#e42529]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 270,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-gray-700 truncate",
                                                                children: location
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 271,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                className: `w-3 h-3 text-gray-400 transition-transform ${locationDropdownOpen ? "rotate-180" : ""}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 272,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 17
                                                    }, this),
                                                    locationDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-full left-0 mt-1 w-[300px] bg-white rounded-lg shadow-xl border border-gray-100 z-50 overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2 border-b",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center bg-gray-50 rounded-md px-3 py-2 gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                            className: "w-3.5 h-3.5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                            lineNumber: 279,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            autoFocus: true,
                                                                            type: "text",
                                                                            placeholder: "Search city...",
                                                                            value: locationSearch,
                                                                            onChange: (e)=>setLocationSearch(e.target.value),
                                                                            className: "flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                            lineNumber: 280,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                    lineNumber: 278,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 277,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "max-h-[320px] overflow-y-auto",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>selectCity("Mumbai"),
                                                                        className: "w-full flex items-center gap-2.5 px-3 py-2 hover:bg-gray-50 text-left",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[#0056b3] text-sm",
                                                                            children: "Use Current Location"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                            lineNumber: 296,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 292,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    recentLocations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "px-3 pt-2 pb-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[11px] font-semibold text-gray-400 uppercase",
                                                                                    children: "Recent"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                    lineNumber: 300,
                                                                                    columnNumber: 59
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                lineNumber: 300,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            recentLocations.filter((c)=>!locationSearch || c.toLowerCase().includes(locationSearch.toLowerCase())).map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>selectCity(city),
                                                                                    className: "w-full flex items-center gap-2.5 px-3 py-1.5 hover:bg-gray-50 text-left",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                                            className: "w-3.5 h-3.5 text-gray-400"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                            lineNumber: 305,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-sm text-gray-700 flex-1",
                                                                                            children: city
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                            lineNumber: 306,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        city === location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                            className: "w-3.5 h-3.5 text-[#0056b3]"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                            lineNumber: 307,
                                                                                            columnNumber: 55
                                                                                        }, this)
                                                                                    ]
                                                                                }, `r-${city}`, true, {
                                                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                    lineNumber: 304,
                                                                                    columnNumber: 31
                                                                                }, this))
                                                                        ]
                                                                    }, void 0, true),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "px-3 pt-2 pb-1",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[11px] font-semibold text-gray-400 uppercase",
                                                                            children: "Popular Cities"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                            lineNumber: 312,
                                                                            columnNumber: 55
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 312,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popularCities"].filter((c)=>!locationSearch || c.name.toLowerCase().includes(locationSearch.toLowerCase()) || c.state.toLowerCase().includes(locationSearch.toLowerCase())).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>selectCity(c.name),
                                                                            className: "w-full flex items-center gap-2.5 px-3 py-1.5 hover:bg-gray-50 text-left",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                    className: "w-3.5 h-3.5 text-gray-400"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                    lineNumber: 317,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm text-gray-700 flex-1",
                                                                                    children: c.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                    lineNumber: 318,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs text-gray-400",
                                                                                    children: c.state
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                    lineNumber: 319,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                c.name === location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                    className: "w-3.5 h-3.5 text-[#0056b3]"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                    lineNumber: 320,
                                                                                    columnNumber: 53
                                                                                }, this)
                                                                            ]
                                                                        }, c.name, true, {
                                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                            lineNumber: 316,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 290,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 265,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 flex items-center px-3 py-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        className: "w-4 h-4 text-gray-400 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: searchInputRef,
                                                        type: "text",
                                                        placeholder: "Search for products, services and businesses",
                                                        value: searchQuery,
                                                        onChange: (e)=>setSearchQuery(e.target.value),
                                                        onFocus: ()=>{
                                                            if (searchQuery.trim()) {
                                                                setSuggestions((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchAll"])(searchQuery, location, 5));
                                                                setShowSuggestions(true);
                                                            }
                                                        },
                                                        className: "w-full text-sm outline-none text-gray-700 placeholder-gray-400",
                                                        onKeyDown: (e)=>{
                                                            if (e.key === "Enter" && searchQuery) {
                                                                const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchAll"])(searchQuery, location, 1);
                                                                if (results.length > 0) {
                                                                    handleSuggestionClick(results[0]);
                                                                }
                                                            }
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 328,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    if (!searchQuery) return;
                                                    const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchAll"])(searchQuery, location, 1);
                                                    if (results.length > 0) handleSuggestionClick(results[0]);
                                                },
                                                className: "bg-[#e42529] text-white px-6 py-2.5 text-sm font-semibold hover:bg-[#c91e22] transition-colors",
                                                children: "Search"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 348,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this),
                                    showSuggestions && suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-100 z-50 max-h-[420px] overflow-y-auto",
                                        children: (()=>{
                                            const groups = [];
                                            let currentType = null;
                                            for (const s of suggestions){
                                                if (s.type !== currentType) {
                                                    currentType = s.type;
                                                    groups.push({
                                                        type: s.type,
                                                        items: [
                                                            s
                                                        ]
                                                    });
                                                } else {
                                                    groups[groups.length - 1].items.push(s);
                                                }
                                            }
                                            return groups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-3 pt-2.5 pb-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] font-semibold text-gray-400 uppercase tracking-wider",
                                                                children: [
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTypeConfig"])(group.type).emoji,
                                                                    " ",
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTypeConfig"])(group.type).label
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 23
                                                        }, this),
                                                        group.items.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleSuggestionClick(s),
                                                                className: "w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 text-left transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-base flex-shrink-0",
                                                                        children: s.emoji
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 387,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-medium text-gray-800 truncate",
                                                                                children: s.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                lineNumber: 389,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-gray-400 truncate",
                                                                                children: s.subtitle
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                lineNumber: 390,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 388,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, s.id, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 25
                                                            }, this))
                                                    ]
                                                }, group.type, true, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 21
                                                }, this));
                                        })()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 362,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "text-xs text-gray-600 hover:text-[#0056b3] flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 404,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Get App"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 405,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 403,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "text-xs text-gray-600 hover:text-[#0056b3]",
                                        children: "Advertise"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 407,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "text-xs text-gray-600 hover:text-[#0056b3] flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 411,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Login"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 412,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 410,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t bg-gray-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4 flex items-center gap-6 h-10 text-xs font-medium text-gray-600 overflow-x-auto",
                            children: [
                                "Home",
                                "Near Me",
                                "B2B Marketplace",
                                "Jobs",
                                "Real Estate",
                                "Movies",
                                "Rent & Hire",
                                "Deals",
                                "Trending"
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: `whitespace-nowrap hover:text-[#0056b3] transition-colors ${item === "Home" ? "text-[#0056b3] font-bold border-b-2 border-[#0056b3]" : ""}`,
                                    children: item
                                }, item, false, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 422,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                            lineNumber: 419,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                        lineNumber: 418,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-gradient-to-r from-[#0056b3] to-[#003d80] text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4 py-10 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl font-bold mb-3",
                                            children: "India's No. 1 Local Search Engine"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 441,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-blue-100 mb-5 text-sm leading-relaxed",
                                            children: "Find the best businesses, services, and products near you. Get contact details, reviews, ratings, and more."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 442,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white/10 rounded-lg px-4 py-2 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl font-bold",
                                                            children: "18 Cr+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 447,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-blue-200",
                                                            children: "People Searching"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white/10 rounded-lg px-4 py-2 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl font-bold",
                                                            children: "3.5 Cr+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 451,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-blue-200",
                                                            children: "Listed Businesses"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 452,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white/10 rounded-lg px-4 py-2 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl font-bold",
                                                            children: "500+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 455,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-blue-200",
                                                            children: "Cities Covered"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 456,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 445,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-[#e42529] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#c91e22] transition-colors",
                                            children: "List Your Business for FREE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 459,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 440,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/10 rounded-2xl p-8 w-80",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 bg-white/20 rounded-full flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 468,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-semibold text-sm",
                                                                    children: "Search"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                    lineNumber: 471,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-blue-200",
                                                                    children: "Find anything locally"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                    lineNumber: 472,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 470,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 bg-white/20 rounded-full flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 477,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-semibold text-sm",
                                                                    children: "Call"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                    lineNumber: 480,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-blue-200",
                                                                    children: "Connect instantly"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                    lineNumber: 481,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 479,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 bg-white/20 rounded-full flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 486,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 485,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-semibold text-sm",
                                                                    children: "Review"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                    lineNumber: 489,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-blue-200",
                                                                    children: "Read & write reviews"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                    lineNumber: 490,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 465,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 464,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 463,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                            lineNumber: 439,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                        lineNumber: 438,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-7xl mx-auto px-4 py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold text-gray-800",
                                        children: "Explore Popular Categories"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 502,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/categories",
                                        className: "text-[#0056b3] text-sm font-medium hover:underline flex items-center gap-1",
                                        children: [
                                            "View All ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 504,
                                                columnNumber: 24
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 503,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                lineNumber: 501,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-6 lg:grid-cols-8 gap-3",
                                children: topCategories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/category/${cat.slug}`,
                                        className: "flex flex-col items-center gap-2 p-3 rounded-xl hover:shadow-md hover:bg-white transition-all group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform",
                                                style: {
                                                    backgroundColor: cat.bg
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(cat.icon, {
                                                    className: "w-7 h-7",
                                                    style: {
                                                        color: cat.color
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 514,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-gray-700 text-center leading-tight",
                                                children: cat.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 520,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, cat.label, true, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 509,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                lineNumber: 507,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                        lineNumber: 500,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-7xl mx-auto px-4 py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-lg bg-gradient-to-br from-[#0056b3] to-[#0077E6] flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    className: "w-4 h-4 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 530,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-bold text-gray-900 leading-tight",
                                                        children: "Featured Stores Near You"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-gray-500 font-medium leading-tight",
                                                        children: "Top-rated businesses in your area"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 535,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 533,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 529,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/explore?category=doctors",
                                        className: "text-[#0056b3] text-sm font-semibold hover:underline flex items-center gap-1 bg-[#0056b3]/8 px-3 py-1.5 rounded-full",
                                        children: [
                                            "See All ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 539,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 538,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                lineNumber: 528,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group/featured",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: featuredRef,
                                        onScroll: handleFeaturedScroll,
                                        className: "flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth",
                                        style: {
                                            scrollbarWidth: 'none',
                                            msOverflowStyle: 'none'
                                        },
                                        children: featuredStores.map((store)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/store/${store.storeId}`,
                                                className: "flex-shrink-0 w-[260px] bg-white rounded-2xl overflow-hidden shadow-sm shadow-black/[0.06] ring-1 ring-black/[0.04] hover:shadow-lg hover:shadow-black/[0.1] hover:-translate-y-0.5 transition-all group cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative h-[100px] overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: store.img,
                                                                alt: store.name,
                                                                fill: true,
                                                                className: "object-cover group-hover:scale-105 transition-transform duration-300",
                                                                sizes: "240px"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 552,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 559,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-2 left-2.5 right-2.5 flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "bg-amber-500/95 backdrop-blur-sm text-white text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center gap-0.5 shadow-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                                                className: "w-2.5 h-2.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                lineNumber: 564,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            "Featured"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 563,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "bg-emerald-500/95 backdrop-blur-sm text-white text-[9.5px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "w-1.5 h-1.5 bg-white rounded-full"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                lineNumber: 568,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            "Open"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 567,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 562,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute bottom-2 left-2.5",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-white/95 backdrop-blur-sm text-gray-900 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                            className: "w-3 h-3 text-amber-500 fill-amber-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                            lineNumber: 576,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        store.rating
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                    lineNumber: 575,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 574,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute -bottom-5 right-3 z-10",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-lg ring-2 ring-white",
                                                                            children: store.logoEmoji
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                            lineNumber: 584,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute -bottom-0.5 -left-0.5 w-[18px] h-[18px] bg-[#0056b3] rounded-full flex items-center justify-center ring-2 ring-white",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                className: "w-[11px] h-[11px] text-white",
                                                                                strokeWidth: 4
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                lineNumber: 589,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                            lineNumber: 588,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                    lineNumber: 583,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 582,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 551,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-3 pt-3 pb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-1 pr-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-[14px] font-bold text-gray-900 leading-tight truncate",
                                                                    children: store.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                    lineNumber: 599,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 598,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-gray-500 font-medium truncate mb-1.5",
                                                                children: store.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 603,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1 mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                        className: "w-3 h-3 text-gray-400 flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 607,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10.5px] text-gray-500 truncate",
                                                                        children: store.address
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 608,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 606,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between pt-2 border-t border-gray-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10.5px] text-gray-400 font-medium",
                                                                        children: [
                                                                            store.reviews,
                                                                            " reviews"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 613,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "bg-[#0056b3]/8 text-[#0056b3] text-[10.5px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                                                                className: "w-3 h-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                lineNumber: 615,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            store.distance
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 614,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 612,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 596,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, store.name, true, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 545,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 543,
                                        columnNumber: 13
                                    }, this),
                                    featuredScrollPos > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollFeatured('left'),
                                        className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-9 h-9 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 opacity-0 group-hover/featured:opacity-100 transition-opacity z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "w-4 h-4 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 625,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 624,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollFeatured('right'),
                                        className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-9 h-9 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 opacity-0 group-hover/featured:opacity-100 transition-opacity z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 629,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 628,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                lineNumber: 542,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                        lineNumber: 527,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-7xl mx-auto px-4 pt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/register",
                            className: "group block relative rounded-3xl overflow-hidden ring-1 ring-gray-200 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-300 hover:-translate-y-0.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full aspect-[1200/420]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/banners/home-services-cta.png",
                                    alt: "Home Services — Find trusted professionals for your home needs",
                                    fill: true,
                                    priority: true,
                                    sizes: "(min-width: 1280px) 1200px, 100vw",
                                    className: "object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 641,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                lineNumber: 640,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                            lineNumber: 636,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                        lineNumber: 635,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-gradient-to-b from-[#FAFAFC] to-white py-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-12 gap-8 items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-12 lg:col-span-4 lg:sticky lg:top-24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-1.5 bg-[#0056b3]/8 text-[#0056b3] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 661,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Home Services"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 660,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 659,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl font-extrabold text-gray-900 leading-tight mb-3",
                                                children: [
                                                    "Find Trusted",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 666,
                                                        columnNumber: 31
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-gradient-to-r from-[#0056b3] to-[#0077E6] bg-clip-text text-transparent",
                                                        children: "Home Service"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 667,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    "Professionals"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 665,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 leading-relaxed mb-5 max-w-sm",
                                                children: "Book reliable professionals for your home needs — verified experts, transparent pricing, and on-time service guaranteed."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 672,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-6 text-sm text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "w-3.5 h-3.5 text-emerald-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 679,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 678,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-gray-400 font-medium leading-none mb-0.5",
                                                                children: "Near you"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 682,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-gray-900 text-[13px] leading-none",
                                                                children: "Kaithal, Haryana"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 683,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 681,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 677,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/services",
                                                className: "inline-flex items-center gap-2 bg-[#0056b3] hover:bg-[#0047a3] text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-lg shadow-[#0056b3]/20 hover:shadow-xl hover:shadow-[#0056b3]/30 hover:-translate-y-0.5 transition-all",
                                                children: [
                                                    "View All Services",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 693,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 688,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-5 mt-8 pt-6 border-t border-gray-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xl font-bold text-gray-900",
                                                                children: "10K+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 699,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-gray-500 font-medium",
                                                                children: "Verified Pros"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 700,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 698,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-px h-8 bg-gray-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 702,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xl font-bold text-gray-900",
                                                                children: "4.6★"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 704,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-gray-500 font-medium",
                                                                children: "Avg Rating"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 705,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 703,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-px h-8 bg-gray-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 707,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xl font-bold text-gray-900",
                                                                children: "30min"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 709,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-gray-500 font-medium",
                                                                children: "Response"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 710,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 697,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 658,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-12 lg:col-span-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                                                children: homeServices.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/services?category=${service.slug}`,
                                                        className: "group relative bg-white rounded-2xl p-4 ring-1 ring-black/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all cursor-pointer overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute -top-8 -right-8 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity",
                                                                style: {
                                                                    background: service.color
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 725,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative w-12 h-12 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform",
                                                                style: {
                                                                    background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                                                                    boxShadow: `0 6px 14px ${service.color}40`
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(service.icon, {
                                                                    className: "w-5 h-5 text-white",
                                                                    strokeWidth: 2.2
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                    lineNumber: 738,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 731,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-[14px] font-bold text-gray-900 leading-tight mb-1.5",
                                                                children: service.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 742,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5 mb-2.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-0.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                                className: "w-3 h-3 text-amber-500 fill-amber-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                lineNumber: 749,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[11px] font-bold text-gray-800",
                                                                                children: service.rating
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                lineNumber: 750,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 748,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-0.5 h-0.5 rounded-full bg-gray-300"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 752,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[11px] text-gray-500 font-medium",
                                                                        children: [
                                                                            service.pros,
                                                                            " pros"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 753,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 747,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full",
                                                                style: {
                                                                    backgroundColor: service.color + "14",
                                                                    color: service.color
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-1.5 h-1.5 rounded-full",
                                                                        style: {
                                                                            backgroundColor: service.color
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 764,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Available Today"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 757,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, service.label, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 719,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 717,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 flex items-center justify-between gap-3 bg-gradient-to-r from-[#0056b3]/[0.04] to-transparent rounded-xl px-4 py-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-[12px] text-gray-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                                                className: "w-4 h-4 text-[#0056b3]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 774,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: "Background-verified professionals"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 775,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 773,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/services",
                                                        className: "text-[12px] font-semibold text-[#0056b3] hover:underline flex items-center gap-1",
                                                        children: [
                                                            "Browse all ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 778,
                                                                columnNumber: 32
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 777,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 772,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 716,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                lineNumber: 656,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                            lineNumber: 655,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                        lineNumber: 654,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-7xl mx-auto px-4 py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold mb-1",
                                            children: "Get Loan Against Property"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 790,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-green-100 text-sm",
                                            children: "Starting from 9.00% interest rate. Quick approval & easy process."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 791,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 789,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-white text-green-700 px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-green-50 transition-colors whitespace-nowrap",
                                    children: "Apply Now"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 793,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                            lineNumber: 788,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                        lineNumber: 787,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-7xl mx-auto px-4 py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold text-gray-800",
                                        children: "Trending Searches Near You"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 802,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/explore?category=doctors",
                                        className: "text-[#0056b3] text-sm font-medium hover:underline flex items-center gap-1",
                                        children: [
                                            "See All ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 804,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 803,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                lineNumber: 801,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group/trending",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: trendingRef,
                                        onScroll: handleTrendingScroll,
                                        className: "flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth",
                                        style: {
                                            scrollbarWidth: 'none',
                                            msOverflowStyle: 'none'
                                        },
                                        children: trendingStores.map((store, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                name: store.name,
                                                category: store.category,
                                                rating: store.rating,
                                                reviews: store.reviews,
                                                distance: store.distance,
                                                address: store.address,
                                                logoEmoji: store.logoEmoji,
                                                img: store.img,
                                                storeId: store.storeId,
                                                variant: "desktop",
                                                index: i
                                            }, `${store.name}-${i}`, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 810,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 808,
                                        columnNumber: 13
                                    }, this),
                                    trendingScrollPos > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollTrending('left'),
                                        className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-9 h-9 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 opacity-0 group-hover/trending:opacity-100 transition-opacity z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "w-4 h-4 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 828,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 827,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollTrending('right'),
                                        className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-9 h-9 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 opacity-0 group-hover/trending:opacity-100 transition-opacity z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 832,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 831,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                lineNumber: 807,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                        lineNumber: 800,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-7xl mx-auto px-4 py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold text-gray-800",
                                        children: [
                                            "Popular Businesses in ",
                                            location
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 840,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/explore?category=restaurants",
                                        className: "text-[#0056b3] text-sm font-medium hover:underline flex items-center gap-1",
                                        children: [
                                            "View All ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 842,
                                                columnNumber: 24
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 841,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                lineNumber: 839,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2",
                                style: {
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none'
                                },
                                children: [
                                    {
                                        name: "Sharma Dental Clinic",
                                        category: "Dentists",
                                        rating: 4.6,
                                        reviews: 1240,
                                        location: "Andheri West",
                                        img: "/images/businesses/sharma-dental.png",
                                        storeId: "STR-60008"
                                    },
                                    {
                                        name: "TechFix Electronics",
                                        category: "Electronics Repair",
                                        rating: 4.3,
                                        reviews: 856,
                                        location: "Bandra East",
                                        img: "/images/businesses/techfix-electronics.png"
                                    },
                                    {
                                        name: "FreshBite Restaurant",
                                        category: "Restaurants",
                                        rating: 4.5,
                                        reviews: 2100,
                                        location: "Juhu",
                                        img: "/images/businesses/freshbite-restaurant.png"
                                    },
                                    {
                                        name: "QuickMove Packers",
                                        category: "Packers & Movers",
                                        rating: 4.2,
                                        reviews: 670,
                                        location: "Goregaon",
                                        img: "/images/businesses/quickmove-packers.png"
                                    },
                                    {
                                        name: "StyleHub Salon",
                                        category: "Beauty Parlours",
                                        rating: 4.7,
                                        reviews: 1890,
                                        location: "Vile Parle",
                                        img: "/images/businesses/stylehub-salon.png"
                                    },
                                    {
                                        name: "FitZone Gym",
                                        category: "Gyms & Fitness",
                                        rating: 4.4,
                                        reviews: 920,
                                        location: "Malad",
                                        img: "/images/businesses/fitzone-gym.png",
                                        storeId: "STR-80001"
                                    }
                                ].map((biz, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        name: biz.name,
                                        category: biz.category,
                                        rating: biz.rating,
                                        reviews: biz.reviews,
                                        address: biz.location,
                                        img: biz.img,
                                        storeId: biz.storeId,
                                        variant: "desktop",
                                        index: i
                                    }, `${biz.name}-${i}`, false, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 854,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                lineNumber: 845,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                        lineNumber: 838,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-white py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold text-gray-800 mb-5",
                                    children: "Explore Top Tourist Places"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 873,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                                    children: [
                                        {
                                            name: "India Gate",
                                            desc: "Historical Monuments",
                                            img: "/images/tourist/delhi.png",
                                            slug: "india-gate"
                                        },
                                        {
                                            name: "Taj Mahal",
                                            desc: "Wonder of the World",
                                            img: "/images/tourist/agra.png",
                                            slug: "taj-mahal"
                                        },
                                        {
                                            name: "Laxman Jhula",
                                            desc: "Adventure Sports",
                                            img: "/images/tourist/rishikesh.png",
                                            slug: "rishikesh"
                                        },
                                        {
                                            name: "Robbers Cave",
                                            desc: "Hill Station",
                                            img: "/images/tourist/dehradun.png",
                                            slug: "dehradun"
                                        },
                                        {
                                            name: "Gateway of India",
                                            desc: "Iconic Landmark",
                                            img: "/images/tourist/delhi.png",
                                            slug: "gateway-of-india"
                                        },
                                        {
                                            name: "Red Fort",
                                            desc: "Mughal Heritage",
                                            img: "/images/tourist/agra.png",
                                            slug: "red-fort"
                                        }
                                    ].map((place)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/place/${place.slug}`,
                                            className: "relative rounded-xl overflow-hidden hover:shadow-lg transition-all group h-40 block",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: place.img,
                                                    alt: place.name,
                                                    fill: true,
                                                    className: "object-cover group-hover:scale-105 transition-transform",
                                                    sizes: "300px"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 888,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 889,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-3 left-4 right-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-white text-sm",
                                                            children: place.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 891,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-white/80",
                                                            children: place.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 892,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 890,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, place.name, true, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 883,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 874,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                            lineNumber: 872,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                        lineNumber: 871,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-7xl mx-auto px-4 py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        children: "🔥"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 905,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-bold text-gray-800",
                                                        children: "Trending Products"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 906,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 904,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 mt-0.5",
                                                children: "Popular products from verified businesses"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 908,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 903,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/services",
                                        className: "text-[#0056b3] text-sm font-medium hover:underline flex items-center gap-1",
                                        children: [
                                            "View All ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 911,
                                                columnNumber: 24
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 910,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                lineNumber: 902,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group/trending-products",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 overflow-x-auto scrollbar-hide",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$product$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTrendingProducts"])().map((product)=>{
                                            const origNum = product.originalPrice ? parseInt(product.originalPrice.replace(/[^\d]/g, ""), 10) : 0;
                                            const currNum = parseInt(product.price.replace(/[^\d]/g, ""), 10);
                                            const discount = origNum > 0 ? Math.round((origNum - currNum) / origNum * 100) : 0;
                                            const catGradients = {
                                                Ayurvedic: "from-green-50 to-emerald-100",
                                                "Pain Relief": "from-blue-50 to-sky-100",
                                                Nutrition: "from-orange-50 to-amber-100",
                                                Grocery: "from-yellow-50 to-lime-100",
                                                "Cooking Oil": "from-amber-50 to-yellow-100",
                                                Flour: "from-orange-50 to-yellow-100",
                                                Dairy: "from-sky-50 to-blue-100",
                                                Rice: "from-green-50 to-lime-100",
                                                "Instant Food": "from-red-50 to-orange-100",
                                                "Mobile Accessories": "from-slate-50 to-gray-100",
                                                Cables: "from-gray-50 to-slate-100",
                                                Audio: "from-violet-50 to-purple-100",
                                                "Power Banks": "from-green-50 to-teal-100",
                                                Snacks: "from-orange-50 to-red-50",
                                                Supplements: "from-red-50 to-pink-100",
                                                Equipment: "from-blue-50 to-indigo-100",
                                                Accessories: "from-pink-50 to-rose-100",
                                                Makeup: "from-pink-50 to-fuchsia-100",
                                                Skincare: "from-teal-50 to-cyan-100",
                                                Wearables: "from-indigo-50 to-violet-100",
                                                Speakers: "from-purple-50 to-indigo-100",
                                                Chargers: "from-yellow-50 to-orange-100",
                                                "Computer Peripherals": "from-slate-50 to-zinc-100",
                                                Spices: "from-red-50 to-orange-100",
                                                "Frozen Food": "from-cyan-50 to-sky-100",
                                                "Hair Care": "from-pink-50 to-purple-100",
                                                "Hair Color": "from-purple-50 to-fuchsia-100",
                                                Pickles: "from-green-50 to-emerald-100"
                                            };
                                            const gradient = catGradients[product.category] || "from-gray-50 to-slate-100";
                                            const emojiMap = {
                                                Ayurvedic: "🌿",
                                                "Pain Relief": "💉",
                                                Nutrition: "💊",
                                                Grocery: "🛒",
                                                "Cooking Oil": "🫒",
                                                Flour: "🌾",
                                                Dairy: "🥛",
                                                Rice: "🍚",
                                                "Instant Food": "🍜",
                                                "Mobile Accessories": "📱",
                                                Cables: "🔌",
                                                Audio: "🎧",
                                                "Power Banks": "🔋",
                                                Snacks: "🍪",
                                                Supplements: "💪",
                                                Equipment: "🏋️",
                                                Accessories: "🧤",
                                                Makeup: "💄",
                                                Skincare: "🧴",
                                                Wearables: "⌚",
                                                Speakers: "🔊",
                                                Chargers: "⚡",
                                                "Computer Peripherals": "⌨️",
                                                Spices: "🌶️",
                                                "Frozen Food": "🧊",
                                                "Hair Care": "💇",
                                                "Hair Color": "🎨",
                                                Pickles: "🥒"
                                            };
                                            const emoji = emojiMap[product.category] || "📦";
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/store/${product.storeId}?product=${product.id}`,
                                                className: "flex-shrink-0 w-52 bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all group cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `relative h-44 bg-gradient-to-br ${gradient} flex items-center justify-center`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-7xl select-none group-hover:scale-110 transition-transform duration-300",
                                                                children: emoji
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 955,
                                                                columnNumber: 23
                                                            }, this),
                                                            discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute top-2.5 left-2.5 bg-[#e42529] text-white text-[10px] font-bold px-2 py-0.5 rounded-md",
                                                                children: [
                                                                    discount,
                                                                    "% OFF"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 957,
                                                                columnNumber: 25
                                                            }, this),
                                                            product.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute top-2.5 right-2.5 bg-amber-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full",
                                                                children: product.badge
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 962,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 954,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-sm font-semibold text-gray-800 line-clamp-2 leading-snug min-h-[40px]",
                                                                children: product.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 968,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1 mt-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-gray-500 truncate",
                                                                        children: product.storeName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 970,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
                                                                        className: "w-3.5 h-3.5 text-[#0056b3] flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 971,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 969,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1 mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-0.5 bg-green-50 px-1.5 py-0.5 rounded",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                                className: "w-3 h-3 fill-orange-500 text-orange-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                lineNumber: 975,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[11px] font-semibold text-gray-700",
                                                                                children: product.rating
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                                lineNumber: 976,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 974,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[11px] text-gray-400",
                                                                        children: [
                                                                            "(",
                                                                            product.reviews.toLocaleString(),
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 978,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 973,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-baseline gap-2 mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-base font-bold text-gray-900",
                                                                        children: product.price
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 981,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    product.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-gray-400 line-through",
                                                                        children: product.originalPrice
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                        lineNumber: 983,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                                lineNumber: 980,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 967,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, product.id, true, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 949,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 915,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{},
                                        className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-9 h-9 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 opacity-0 group-hover/trending-products:opacity-100 transition-opacity z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "w-4 h-4 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 992,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 991,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{},
                                        className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-9 h-9 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 opacity-0 group-hover/trending-products:opacity-100 transition-opacity z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 995,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                        lineNumber: 994,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                lineNumber: 914,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                        lineNumber: 901,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-7xl mx-auto px-4 py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-[#0056b3] to-[#003d80] rounded-2xl p-8 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold mb-2",
                                            children: "Download the JustDial App"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1004,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-blue-100 text-sm mb-1",
                                            children: "Get the best local search experience on your phone"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1005,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-blue-200 text-xs",
                                            children: "Available on Android & iOS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1006,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 1003,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-black rounded-lg px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-900 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white text-lg",
                                                    children: "🍎"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1010,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] text-gray-400",
                                                            children: "Download on the"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 1012,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-white font-semibold",
                                                            children: "App Store"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 1013,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1011,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1009,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-black rounded-lg px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-900 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white text-lg",
                                                    children: "▶️"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1017,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] text-gray-400",
                                                            children: "Get it on"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 1019,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-white font-semibold",
                                                            children: "Google Play"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                            lineNumber: 1020,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1018,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1016,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 1008,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                            lineNumber: 1002,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                        lineNumber: 1001,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-gray-900 text-gray-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 py-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-white font-semibold mb-4 text-sm",
                                            children: "About JustDial"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1033,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white transition-colors",
                                                        children: "About Us"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 1035,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1035,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white transition-colors",
                                                        children: "Careers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 1036,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1036,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white transition-colors",
                                                        children: "Blog"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 1037,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1037,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white transition-colors",
                                                        children: "Press"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 1038,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1038,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white transition-colors",
                                                        children: "Contact Us"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 1039,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1039,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1034,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 1032,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-white font-semibold mb-4 text-sm",
                                            children: "For Businesses"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1043,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white transition-colors",
                                                        children: "List Your Business"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 1045,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1045,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white transition-colors",
                                                        children: "Advertise"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 1046,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1046,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white transition-colors",
                                                        children: "Business Dashboard"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 1047,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1047,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white transition-colors",
                                                        children: "JD Pay"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 1048,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1048,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white transition-colors",
                                                        children: "Business Apps"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 1049,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1049,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1044,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 1042,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-white font-semibold mb-4 text-sm",
                                            children: "Popular Cities"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1053,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-xs",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popularCities"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white transition-colors",
                                                        children: c.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 1056,
                                                        columnNumber: 36
                                                    }, this)
                                                }, c.name, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1056,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1054,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 1052,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-white font-semibold mb-4 text-sm",
                                            children: "Quick Links"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1061,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white transition-colors",
                                                        children: "Free Listing"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 1063,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1063,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white transition-colors",
                                                        children: "Near Me"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 1064,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1064,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white transition-colors",
                                                        children: "Movies"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 1065,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1065,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white transition-colors",
                                                        children: "Deals & Offers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 1066,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1066,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white transition-colors",
                                                        children: "Trending Searches"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                        lineNumber: 1067,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                    lineNumber: 1067,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1062,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 1060,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                            lineNumber: 1031,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-gray-800 pt-6 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-bold text-[#e42529]",
                                            children: "J"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1073,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-bold text-blue-400",
                                            children: "ust"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1074,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-bold text-[#e42529]",
                                            children: "D"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1075,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-bold text-blue-400",
                                            children: "ial"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1076,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 1072,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: "© 2024 JustDial. All rights reserved. | Terms | Privacy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 1078,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 1080,
                                                columnNumber: 56
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1080,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 1081,
                                                columnNumber: 56
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1081,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 1082,
                                                columnNumber: 56
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1082,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                                lineNumber: 1083,
                                                columnNumber: 56
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                            lineNumber: 1083,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                                    lineNumber: 1079,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                            lineNumber: 1071,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                    lineNumber: 1030,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
                lineNumber: 1029,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/justdial/DesktopLayout.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, this);
}
_s(DesktopLayout, "BRXz2/HUrTfoVJyTpXb73LPKu14=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DesktopLayout;
var _c;
__turbopack_context__.k.register(_c, "DesktopLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/justdial/MobileLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paintbrush.js [app-client] (ecmascript) <export default as Paintbrush>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-client] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/justdial/StoreCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/search-data.ts [app-client] (ecmascript)");
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
/* ═══════════════════════════════════════════════════════════════
   DATA — all static content that feeds the page sections
   ═══════════════════════════════════════════════════════════════ */ const quickServices = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
        label: "AC Repair",
        bg: "#F3F4F6",
        color: "#3B82F6",
        slug: "ac-repair"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__["Paintbrush"],
        label: "Painter",
        bg: "#FEF3C7",
        color: "#D97706",
        slug: "painter"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        label: "Plumber",
        bg: "#D1FAE5",
        color: "#059669",
        slug: "plumber"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        label: "Electrician",
        bg: "#FEF3C7",
        color: "#B45309",
        slug: "electrician"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        label: "Cleaning",
        bg: "#DBEAFE",
        color: "#2563EB",
        slug: "deep-cleaning"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"],
        label: "Pest Control",
        bg: "#FCE7F3",
        color: "#DB2777",
        slug: "pest-control"
    }
];
const categoryChips = [
    "All",
    "Popular",
    "Top Rated",
    "Nearby",
    "Open Now",
    "Verified"
];
const popularServices = [
    {
        name: "CoolAir AC Services",
        category: "AC Repair • Installation",
        rating: "4.8",
        reviews: "256",
        distance: "0.3 km",
        address: "Andheri West, Mumbai",
        logoIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
        coverGradient: "from-blue-500 to-blue-700",
        storeId: "STR-10001",
        href: "/service/ac-repair"
    },
    {
        name: "ShineHome Painters",
        category: "Interior • Exterior Painting",
        rating: "4.6",
        reviews: "189",
        distance: "0.5 km",
        address: "Malad West, Mumbai",
        logoIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__["Paintbrush"],
        coverGradient: "from-amber-500 to-orange-600",
        storeId: "STR-10002",
        href: "/service/painter"
    },
    {
        name: "FixRight Plumbing",
        category: "Plumbing • Repairs",
        rating: "4.7",
        reviews: "312",
        distance: "0.8 km",
        address: "Bandra West, Mumbai",
        logoIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        coverGradient: "from-emerald-500 to-green-600",
        storeId: "STR-10003",
        href: "/service/plumber"
    },
    {
        name: "BrightSpark Electric",
        category: "Electrical • Wiring",
        rating: "4.5",
        reviews: "145",
        distance: "1.2 km",
        address: "Khar West, Mumbai",
        logoIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        coverGradient: "from-yellow-500 to-amber-600",
        storeId: "STR-10004",
        href: "/service/electrician"
    },
    {
        name: "GleamClean Services",
        category: "Deep Cleaning • Sanitization",
        rating: "4.8",
        reviews: "428",
        distance: "0.6 km",
        address: "Juhu, Mumbai",
        logoIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        coverGradient: "from-cyan-500 to-blue-600",
        storeId: "STR-10005",
        href: "/service/deep-cleaning"
    },
    {
        name: "PestFree Solutions",
        category: "Pest Control • Fumigation",
        rating: "4.4",
        reviews: "97",
        distance: "1.5 km",
        address: "Goregaon, Mumbai",
        logoIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"],
        coverGradient: "from-pink-500 to-rose-600",
        storeId: "STR-10006",
        href: "/service/pest-control"
    }
];
const allCategories = [
    {
        emoji: "❄️",
        label: "AC Repair",
        pros: "250+",
        slug: "ac-repair"
    },
    {
        emoji: "🖌️",
        label: "Painters",
        pros: "180+",
        slug: "painter"
    },
    {
        emoji: "🚰",
        label: "Plumbers",
        pros: "180+",
        slug: "plumber"
    },
    {
        emoji: "⚡",
        label: "Electricians",
        pros: "320+",
        slug: "electrician"
    },
    {
        emoji: "🐛",
        label: "Pest Control",
        pros: "60+",
        slug: "pest-control"
    },
    {
        emoji: "🔨",
        label: "Carpenters",
        pros: "95+",
        slug: "carpenter"
    },
    {
        emoji: "✨",
        label: "Deep Cleaning",
        pros: "400+",
        slug: "deep-cleaning"
    },
    {
        emoji: "💇",
        label: "Salons at Home",
        pros: "175+",
        slug: "salon-home"
    }
];
const recentlyViewed = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
        name: "CoolAir AC Services",
        rating: "4.6",
        color: "#3B82F6",
        bg: "#EFF6FF",
        href: "/service/ac-repair"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        name: "FixRight Plumbing",
        rating: "4.4",
        color: "#059669",
        bg: "#ECFDF5",
        href: "/service/plumber"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        name: "GleamClean Services",
        rating: "4.8",
        color: "#2563EB",
        bg: "#DBEAFE",
        href: "/service/deep-cleaning"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        name: "BrightSpark Electric",
        rating: "4.5",
        color: "#B45309",
        bg: "#FFFBEB",
        href: "/service/electrician"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__["Paintbrush"],
        name: "ShineHome Painters",
        rating: "4.6",
        color: "#D97706",
        bg: "#FEF3C7",
        href: "/service/painter"
    }
];
const bottomNavItems = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        label: "Home",
        id: "home"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"],
        label: "Categories",
        id: "categories"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"],
        label: "Bookings",
        id: "bookings"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        label: "Favorites",
        id: "favorites"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
        label: "Profile",
        id: "profile"
    }
];
/* ═══════════════════════════════════════════════════════════════
   SECTION HEADING — reused across multiple sections
   ═══════════════════════════════════════════════════════════════ */ function SectionHeading({ title, action, onAction }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between mb-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-[17px] font-bold text-gray-900 leading-tight",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onAction,
                className: "text-[13px] font-semibold text-blue-500 flex items-center gap-0.5 active:opacity-60",
                children: [
                    action,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "w-3.5 h-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c = SectionHeading;
function MobileLayout() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedCity, setSelectedCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Mumbai");
    const [activeChip, setActiveChip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [activeNav, setActiveNav] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [showSearch, setShowSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuggestions, setShowSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Debounced search
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileLayout.useEffect": ()=>{
            if (!searchQuery.trim()) {
                setSuggestions([]);
                setShowSuggestions(false);
                return;
            }
            const t = setTimeout({
                "MobileLayout.useEffect.t": ()=>{
                    setSuggestions((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchAll"])(searchQuery, selectedCity, 4));
                    setShowSuggestions(true);
                }
            }["MobileLayout.useEffect.t"], 150);
            return ({
                "MobileLayout.useEffect": ()=>clearTimeout(t)
            })["MobileLayout.useEffect"];
        }
    }["MobileLayout.useEffect"], [
        searchQuery,
        selectedCity
    ]);
    // Focus search when opened
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileLayout.useEffect": ()=>{
            if (showSearch && searchInputRef.current) {
                searchInputRef.current.focus();
            }
        }
    }["MobileLayout.useEffect"], [
        showSearch
    ]);
    const handleSuggestionTap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MobileLayout.useCallback[handleSuggestionTap]": (s)=>{
            setShowSearch(false);
            setShowSuggestions(false);
            setSearchQuery("");
            router.push(s.href);
        }
    }["MobileLayout.useCallback[handleSuggestionTap]"], [
        router
    ]);
    /* ── 1. STICKY APP HEADER ─────────────────────────────────── */ const renderHeader = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100/80",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-4 h-[56px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-[16px] font-bold text-gray-900",
                            children: "Home Services"
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                            lineNumber: 134,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowSearch(true);
                                    },
                                    className: "w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 active:bg-gray-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "w-[18px] h-[18px] text-gray-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                    lineNumber: 136,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 active:bg-gray-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                        className: "w-[18px] h-[18px] text-gray-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                    lineNumber: 142,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                            lineNumber: 135,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                    lineNumber: 133,
                    columnNumber: 7
                }, this),
                showSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -8
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "absolute inset-x-0 top-0 z-50 bg-white shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 px-4 h-[56px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowSearch(false);
                                        setShowSuggestions(false);
                                        setSearchQuery("");
                                    },
                                    className: "text-blue-500 text-[15px] font-medium",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: searchInputRef,
                                            type: "text",
                                            value: searchQuery,
                                            onChange: (e)=>setSearchQuery(e.target.value),
                                            placeholder: "Search services...",
                                            className: "w-full h-9 pl-9 pr-3 bg-gray-100 rounded-full text-[14px] text-gray-900 placeholder:text-gray-400 outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        showSuggestions && suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-gray-100 bg-white max-h-[60vh] overflow-y-auto",
                            children: suggestions.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleSuggestionTap(s),
                                    className: "w-full flex items-center gap-3 px-4 py-3 active:bg-gray-50 border-b border-gray-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[18px]",
                                            children: s.emoji
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                            lineNumber: 183,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-left flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[14px] font-medium text-gray-900 truncate",
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[12px] text-gray-400",
                                                    children: s.type
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "w-4 h-4 text-gray-300 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                            lineNumber: 188,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, `${s.label}-${i}`, true, {
                                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                    lineNumber: 178,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
            lineNumber: 132,
            columnNumber: 5
        }, this);
    /* ── 2. HERO BANNER ───────────────────────────────────────── */ const renderHeroBanner = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-4 pt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative rounded-2xl overflow-hidden h-[200px] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-8 -right-8 w-40 h-40 bg-blue-500/30 rounded-full blur-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-12 -left-6 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 h-full flex flex-col justify-between p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 self-start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-semibold text-white",
                                            children: "Live Tracking Available"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-white text-[19px] font-bold leading-tight mb-1.5",
                                        children: "Professional Home Services"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-blue-100 text-[13px] leading-snug mb-3",
                                        children: "Book trusted experts for all your home service needs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-white rounded-full px-3.5 py-2 flex items-center gap-2 shadow-md active:scale-95 transition-transform",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "w-4 h-4 text-blue-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                                lineNumber: 224,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[13px] font-bold text-blue-600",
                                                children: "1,680+ Professionals Available"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                                lineNumber: 225,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-3 bottom-3 w-[100px] h-[120px] bg-gradient-to-t from-white/10 to-transparent rounded-t-full flex items-end justify-center overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-white/15 rounded-full mb-2 backdrop-blur-sm flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                        className: "w-8 h-8 text-white/70"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
            lineNumber: 200,
            columnNumber: 5
        }, this);
    /* ── 3. QUICK SERVICES ────────────────────────────────────── */ const renderQuickServices = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                    title: "Quick Services",
                    action: "See All",
                    onAction: ()=>router.push("/services")
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                    lineNumber: 243,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-0 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-1",
                    children: quickServices.map((svc)=>{
                        const Icon = svc.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/service/${svc.slug}`,
                            className: "flex flex-col items-center gap-2 flex-shrink-0 w-[68px] active:scale-95 transition-transform",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-[48px] h-[48px] rounded-full flex items-center justify-center",
                                    style: {
                                        backgroundColor: svc.bg
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-5 h-5",
                                        style: {
                                            color: svc.color
                                        },
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                        lineNumber: 257,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[12px] font-medium text-gray-600 text-center leading-tight w-full",
                                    children: svc.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                    lineNumber: 259,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, svc.slug, true, {
                            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                    lineNumber: 244,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
            lineNumber: 242,
            columnNumber: 5
        }, this);
    /* ── 4. BROWSE BY CATEGORY (CHIPS) ────────────────────────── */ const renderCategoryChips = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                    title: "Browse by Category",
                    action: "See All",
                    onAction: ()=>router.push("/categories")
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                    lineNumber: 272,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-1",
                    children: categoryChips.map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveChip(chip),
                            className: `flex-shrink-0 px-4 py-2 rounded-full text-[13px] font-semibold transition-all active:scale-95 ${activeChip === chip ? "bg-blue-500 text-white shadow-md shadow-blue-500/25" : "bg-gray-100 text-gray-500 active:bg-gray-200"}`,
                            children: chip
                        }, chip, false, {
                            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                    lineNumber: 273,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
            lineNumber: 271,
            columnNumber: 5
        }, this);
    /* ── 5. POPULAR SERVICES NEAR YOU ─────────────────────────── */ const renderPopularServices = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                        title: "Popular Services Near You",
                        action: "View All",
                        onAction: ()=>router.push("/services")
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                    lineNumber: 294,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-2",
                    children: popularServices.map((svc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$StoreCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            variant: "mobile",
                            index: i,
                            name: svc.name,
                            category: svc.category,
                            rating: svc.rating,
                            reviews: svc.reviews,
                            distance: svc.distance,
                            address: svc.address,
                            logoIcon: svc.logoIcon,
                            coverGradient: svc.coverGradient,
                            storeId: svc.storeId,
                            href: svc.href
                        }, svc.name, false, {
                            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                    lineNumber: 297,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
            lineNumber: 293,
            columnNumber: 5
        }, this);
    /* ── 6. ALL CATEGORIES ────────────────────────────────────── */ const renderAllCategories = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                    title: "All Categories"
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                    lineNumber: 322,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-4 gap-2.5",
                    children: allCategories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/service/${cat.slug}`,
                            className: "bg-white rounded-xl p-2.5 flex flex-col items-center gap-1.5 shadow-sm shadow-black/[0.04] ring-1 ring-black/[0.04] active:scale-95 transition-transform",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[26px]",
                                    children: cat.emoji
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[12px] font-bold text-gray-900 text-center leading-tight",
                                    children: cat.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-medium text-gray-400",
                                    children: [
                                        cat.pros,
                                        " Pros"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, cat.slug, true, {
                            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                    lineNumber: 323,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
            lineNumber: 321,
            columnNumber: 5
        }, this);
    /* ── 7. RECENTLY VIEWED ───────────────────────────────────── */ const renderRecentlyViewed = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                        title: "Recently Viewed",
                        action: "View All"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                    lineNumber: 342,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2.5 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-1",
                    children: recentlyViewed.map((item)=>{
                        const Icon = item.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: "flex items-center gap-2.5 flex-shrink-0 bg-white rounded-xl px-3 py-2.5 shadow-sm shadow-black/[0.04] ring-1 ring-black/[0.04] active:scale-95 transition-transform min-w-[180px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                                    style: {
                                        backgroundColor: item.bg
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-[18px] h-[18px]",
                                        style: {
                                            color: item.color
                                        },
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                        lineNumber: 358,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                    lineNumber: 354,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13px] font-semibold text-gray-900 truncate leading-tight",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 mt-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: "w-3 h-3 text-amber-400 fill-amber-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-semibold text-gray-500",
                                                    children: item.rating
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                            lineNumber: 362,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                    lineNumber: 360,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.name, true, {
                            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                            lineNumber: 349,
                            columnNumber: 13
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                    lineNumber: 345,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
            lineNumber: 341,
            columnNumber: 5
        }, this);
    /* ── 8. TRUST BANNER / VERIFIED PROFESSIONALS ─────────────── */ const renderTrustBanner = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-emerald-50 rounded-2xl p-4 flex items-center gap-3.5 border border-emerald-100/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-11 h-11 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/25",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                            className: "w-6 h-6 text-white",
                            strokeWidth: 2.5
                        }, void 0, false, {
                            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                            lineNumber: 379,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[14px] font-bold text-gray-900 leading-tight",
                                children: "Verified Professionals"
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12px] text-gray-500 leading-snug mt-0.5",
                                children: "All professionals are background verified for your safety and peace of mind."
                            }, void 0, false, {
                                fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                        lineNumber: 381,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/services",
                        className: "flex-shrink-0 bg-emerald-500 text-white text-[13px] font-bold rounded-full px-4 py-2.5 shadow-md shadow-emerald-500/25 active:scale-95 transition-transform",
                        children: "Book Now"
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                lineNumber: 377,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
            lineNumber: 376,
            columnNumber: 5
        }, this);
    /* ── 9. BOTTOM NAVIGATION ─────────────────────────────────── */ const renderBottomNav = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-0 inset-x-0 z-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-3 bg-gradient-to-t from-white to-transparent"
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                    lineNumber: 401,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/95 backdrop-blur-xl border-t border-gray-200/60 shadow-[0_-2px_20px_rgba(0,0,0,0.06)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-around h-[60px] mx-3 mb-2 bg-white rounded-2xl shadow-lg shadow-black/[0.06] border border-gray-100/80",
                        children: bottomNavItems.map((item)=>{
                            const Icon = item.icon;
                            const isActive = activeNav === item.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveNav(item.id),
                                className: `flex flex-col items-center justify-center gap-0.5 flex-1 py-1.5 rounded-xl transition-colors ${isActive ? "text-blue-500" : "text-gray-400 active:text-gray-600"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: `w-[22px] h-[22px] ${isActive ? "stroke-[2.2]" : "stroke-[1.8]"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                        lineNumber: 415,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[10px] leading-none ${isActive ? "font-bold" : "font-medium"}`,
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                        lineNumber: 416,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                                lineNumber: 408,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                        lineNumber: 403,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/justdial/MobileLayout.tsx",
                    lineNumber: 402,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/justdial/MobileLayout.tsx",
            lineNumber: 399,
            columnNumber: 5
        }, this);
    /* ═══════════════════════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════════════════════ */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white pb-24",
        children: [
            renderHeader(),
            renderHeroBanner(),
            renderQuickServices(),
            renderCategoryChips(),
            renderPopularServices(),
            renderAllCategories(),
            renderRecentlyViewed(),
            renderTrustBanner(),
            renderBottomNav()
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/justdial/MobileLayout.tsx",
        lineNumber: 431,
        columnNumber: 5
    }, this);
}
_s(MobileLayout, "r1c5Ai+j8FA9HeZsWfEXLMGIGYA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = MobileLayout;
var _c, _c1;
__turbopack_context__.k.register(_c, "SectionHeading");
__turbopack_context__.k.register(_c1, "MobileLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$DesktopLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/justdial/DesktopLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$MobileLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/justdial/MobileLayout.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function useWindowSize() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribeToResize, getSnapshot, getServerSnapshot);
}
_s(useWindowSize, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
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
function Home() {
    _s1();
    const width = useWindowSize();
    const isMobile = width < 768;
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$MobileLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 33,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$justdial$2f$DesktopLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 36,
        columnNumber: 10
    }, this);
}
_s1(Home, "uZ7Zi5GZIakZCIPMFUr4lfU117I=", false, function() {
    return [
        useWindowSize
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_38158327._.js.map