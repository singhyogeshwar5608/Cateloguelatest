// ── Types ────────────────────────────────────────────────────────────

export interface SubCategory {
  slug: string;
  label: string;
  emoji: string;
  count: number;
}

export interface CategoryLandingInfo {
  slug: string;
  label: string;
  emoji: string;
  description: string;
  color: string;          // primary hex like "#3B82F6"
  gradient: string;       // tailwind gradient like "from-blue-500 to-indigo-600"
  bgLight: string;        // light bg like "#EFF6FF"
  businessCount: number;
  verifiedCount: number;
  subCategories: SubCategory[];
  listingSlug?: string;   // maps to business-listing-data slug for real data
  relatedSlugs: string[]; // related category slugs from this same data
}

// ── Data ─────────────────────────────────────────────────────────────

export const categoryLandingData: CategoryLandingInfo[] = [
  // ─── 1. B2B ──────────────────────────────────────────────────────
  {
    slug: "b2b",
    label: "B2B Services",
    emoji: "🤝",
    description:
      "Connect with trusted B2B suppliers, wholesalers, manufacturers, and corporate service providers. Streamline your business procurement with verified vendors across industries.",
    color: "#4F46E5",
    gradient: "from-indigo-500 to-violet-600",
    bgLight: "#EEF2FF",
    businessCount: 5600,
    verifiedCount: 1960,
    subCategories: [
      { slug: "wholesale-suppliers", label: "Wholesale Suppliers", emoji: "📦", count: 1840 },
      { slug: "manufacturers", label: "Manufacturers", emoji: "🏭", count: 980 },
      { slug: "corporate-gifting", label: "Corporate Gifting", emoji: "🎁", count: 640 },
      { slug: "it-services", label: "IT Services", emoji: "💻", count: 1120 },
      { slug: "logistics-freight", label: "Logistics & Freight", emoji: "🚚", count: 520 },
      { slug: "office-equipment", label: "Office Equipment", emoji: "🖨️", count: 340 },
      { slug: "raw-materials", label: "Raw Materials", emoji: "🧱", count: 160 },
    ],
    relatedSlugs: ["shopping", "electronics", "rent-hire"],
  },

  // ─── 2. Doctors ──────────────────────────────────────────────────
  {
    slug: "doctors",
    label: "Doctors",
    emoji: "🏥",
    description:
      "Find top-rated doctors, specialists, and clinics near you. Book consultations with verified physicians across all major specialities including general medicine, cardiology, dermatology, and orthopaedics.",
    color: "#0891B2",
    gradient: "from-cyan-500 to-teal-600",
    bgLight: "#ECFEFF",
    businessCount: 12400,
    verifiedCount: 4464,
    listingSlug: "doctors",
    subCategories: [
      { slug: "general-physician", label: "General Physician", emoji: "🩺", count: 3420 },
      { slug: "dentist", label: "Dentist", emoji: "🦷", count: 2180 },
      { slug: "dermatologist", label: "Dermatologist", emoji: "🧴", count: 1640 },
      { slug: "orthopaedic", label: "Orthopaedic", emoji: "🦴", count: 1280 },
      { slug: "cardiologist", label: "Cardiologist", emoji: "❤️", count: 960 },
      { slug: "paediatrician", label: "Paediatrician", emoji: "👶", count: 1520 },
      { slug: "ent-specialist", label: "ENT Specialist", emoji: "👂", count: 880 },
      { slug: "ophthalmologist", label: "Ophthalmologist", emoji: "👁️", count: 520 },
    ],
    relatedSlugs: ["health", "gyms", "pharmacies"],
  },

  // ─── 3. Travel ───────────────────────────────────────────────────
  {
    slug: "travel",
    label: "Travel",
    emoji: "✈️",
    description:
      "Plan your perfect trip with trusted travel agents, tour operators, and transport services. From flight bookings to curated holiday packages, explore the world with confidence.",
    color: "#0284C7",
    gradient: "from-sky-500 to-blue-600",
    bgLight: "#E0F2FE",
    businessCount: 7800,
    verifiedCount: 2730,
    listingSlug: "travel-agents",
    subCategories: [
      { slug: "tour-operators", label: "Tour Operators", emoji: "🗺️", count: 2340 },
      { slug: "flight-booking", label: "Flight Booking", emoji: "🛫", count: 1560 },
      { slug: "holiday-packages", label: "Holiday Packages", emoji: "🏖️", count: 1420 },
      { slug: "visa-services", label: "Visa Services", emoji: "📑", count: 860 },
      { slug: "car-rentals", label: "Car Rentals", emoji: "🚗", count: 940 },
      { slug: "cruise-packages", label: "Cruise Packages", emoji: "🚢", count: 380 },
      { slug: "adventure-sports", label: "Adventure Sports", emoji: "🧗", count: 300 },
    ],
    relatedSlugs: ["hotels", "car-hire", "restaurants"],
  },

  // ─── 4. Car Hire ─────────────────────────────────────────────────
  {
    slug: "car-hire",
    label: "Car Hire",
    emoji: "🚘",
    description:
      "Rent cars, taxis, and luxury vehicles for your daily commute or special occasions. Choose from self-drive options, chauffeured cabs, and airport transfers at competitive rates.",
    color: "#DC2626",
    gradient: "from-red-500 to-rose-600",
    bgLight: "#FEF2F2",
    businessCount: 4200,
    verifiedCount: 1470,
    subCategories: [
      { slug: "self-drive-cars", label: "Self-Drive Cars", emoji: "🔑", count: 1240 },
      { slug: "chauffeured-cabs", label: "Chauffeured Cabs", emoji: "🚖", count: 1080 },
      { slug: "airport-transfers", label: "Airport Transfers", emoji: "🛬", count: 860 },
      { slug: "luxury-car-rental", label: "Luxury Car Rental", emoji: "🏎️", count: 440 },
      { slug: "outstation-cabs", label: "Outstation Cabs", emoji: "🛣️", count: 380 },
      { slug: "tempo-traveller", label: "Tempo Traveller", emoji: "🚐", count: 200 },
    ],
    relatedSlugs: ["travel", "rent-hire", "pg-hostel"],
  },

  // ─── 5. Beauty ───────────────────────────────────────────────────
  {
    slug: "beauty",
    label: "Beauty & Wellness",
    emoji: "💇",
    description:
      "Discover the best salons, spas, and beauty parlours in your city. From haircuts and skincare to bridal makeup and wellness therapies, look and feel your best every day.",
    color: "#DB2777",
    gradient: "from-pink-500 to-rose-600",
    bgLight: "#FCE7F3",
    businessCount: 9600,
    verifiedCount: 3360,
    listingSlug: "salons",
    subCategories: [
      { slug: "hair-salon", label: "Hair Salon", emoji: "💇‍♀️", count: 2880 },
      { slug: "bridal-makeup", label: "Bridal Makeup", emoji: "👰", count: 1440 },
      { slug: "spa-massage", label: "Spa & Massage", emoji: "💆", count: 1680 },
      { slug: "skincare", label: "Skincare Clinic", emoji: "✨", count: 1240 },
      { slug: "nail-art", label: "Nail Art & Pedicure", emoji: "💅", count: 960 },
      { slug: "tattoo-studio", label: "Tattoo Studio", emoji: "🎨", count: 720 },
      { slug: "mens-grooming", label: "Men's Grooming", emoji: "🪒", count: 680 },
    ],
    relatedSlugs: ["wedding", "health", "gyms"],
  },

  // ─── 6. Education ────────────────────────────────────────────────
  {
    slug: "education",
    label: "Education",
    emoji: "📚",
    description:
      "Find schools, coaching centres, training institutes, and online tutors for every stage of learning. From preschool to professional certifications, empower your future with the right education.",
    color: "#1D4ED8",
    gradient: "from-blue-500 to-indigo-600",
    bgLight: "#DBEAFE",
    businessCount: 14200,
    verifiedCount: 4970,
    listingSlug: "schools",
    subCategories: [
      { slug: "schools", label: "Schools", emoji: "🏫", count: 3840 },
      { slug: "coaching-centres", label: "Coaching Centres", emoji: "📝", count: 3200 },
      { slug: "computer-training", label: "Computer Training", emoji: "🖥️", count: 1840 },
      { slug: "language-classes", label: "Language Classes", emoji: "🌍", count: 1480 },
      { slug: "music-dance-classes", label: "Music & Dance", emoji: "🎵", count: 1620 },
      { slug: "professional-courses", label: "Professional Courses", emoji: "🎓", count: 1240 },
      { slug: "preschool-daycare", label: "Preschool & Daycare", emoji: "🧸", count: 980 },
    ],
    relatedSlugs: ["jobs", "real-estate", "b2b"],
  },

  // ─── 7. Fashion ──────────────────────────────────────────────────
  {
    slug: "fashion",
    label: "Fashion",
    emoji: "👗",
    description:
      "Explore trending boutiques, designer stores, and tailoring services. From ethnic wear to western fashion, find the perfect style for every occasion — bridal, casual, or festive.",
    color: "#BE185D",
    gradient: "from-fuchsia-500 to-pink-600",
    bgLight: "#FDF2F8",
    businessCount: 8400,
    verifiedCount: 2940,
    subCategories: [
      { slug: "womens-wear", label: "Women's Wear", emoji: "👗", count: 2460 },
      { slug: "mens-wear", label: "Men's Wear", emoji: "🤵", count: 1980 },
      { slug: "bridal-wear", label: "Bridal Wear", emoji: "👘", count: 1240 },
      { slug: "kids-wear", label: "Kids' Wear", emoji: "🧒", count: 960 },
      { slug: "tailoring-alteration", label: "Tailoring & Alteration", emoji: "🧵", count: 1080 },
      { slug: "accessories", label: "Accessories", emoji: "💍", count: 680 },
    ],
    relatedSlugs: ["wedding", "shopping", "beauty"],
  },

  // ─── 8. Wedding ──────────────────────────────────────────────────
  {
    slug: "wedding",
    label: "Wedding",
    emoji: "💍",
    description:
      "Plan your dream wedding with the best vendors in town. From wedding planners and photographers to caterers and decorators, everything you need for a perfect celebration under one roof.",
    color: "#9333EA",
    gradient: "from-purple-500 to-violet-600",
    bgLight: "#FAF5FF",
    businessCount: 6200,
    verifiedCount: 2170,
    listingSlug: "wedding-planners",
    subCategories: [
      { slug: "wedding-planners", label: "Wedding Planners", emoji: "📋", count: 1480 },
      { slug: "wedding-photographers", label: "Wedding Photographers", emoji: "📸", count: 1240 },
      { slug: "caterers", label: "Caterers", emoji: "🍽️", count: 1160 },
      { slug: "wedding-venues", label: "Wedding Venues", emoji: "💒", count: 840 },
      { slug: "bridal-makeup", label: "Bridal Makeup", emoji: "💄", count: 720 },
      { slug: "mehendi-artists", label: "Mehendi Artists", emoji: "🤲", count: 460 },
      { slug: "decorators", label: "Decorators", emoji: "🎈", count: 300 },
    ],
    relatedSlugs: ["beauty", "fashion", "restaurants"],
  },

  // ─── 9. Packers ──────────────────────────────────────────────────
  {
    slug: "packers",
    label: "Packers & Movers",
    emoji: "📦",
    description:
      "Relocate hassle-free with verified packers and movers. Get professional packing, safe transportation, and timely delivery for household goods, vehicles, and office equipment across India.",
    color: "#EA580C",
    gradient: "from-orange-500 to-amber-600",
    bgLight: "#FFF7ED",
    businessCount: 4800,
    verifiedCount: 1680,
    subCategories: [
      { slug: "household-shifting", label: "Household Shifting", emoji: "🏠", count: 1640 },
      { slug: "office-relocation", label: "Office Relocation", emoji: "🏢", count: 820 },
      { slug: "car-transport", label: "Car & Bike Transport", emoji: "🚗", count: 960 },
      { slug: "intercity-movers", label: "Intercity Movers", emoji: "🚛", count: 740 },
      { slug: "storage-warehousing", label: "Storage & Warehousing", emoji: "🏗️", count: 380 },
      { slug: "international-shifting", label: "International Shifting", emoji: "🌍", count: 260 },
    ],
    relatedSlugs: ["real-estate", "rent-hire", "repairs"],
  },

  // ─── 10. Gyms ────────────────────────────────────────────────────
  {
    slug: "gyms",
    label: "Gyms & Fitness",
    emoji: "💪",
    description:
      "Get fit with the best gyms, yoga studios, and fitness centres near you. Whether you prefer weight training, cardio, Zumba, or CrossFit, find the perfect workout space that matches your goals.",
    color: "#F97316",
    gradient: "from-orange-500 to-red-500",
    bgLight: "#FFF7ED",
    businessCount: 7200,
    verifiedCount: 2520,
    listingSlug: "gyms",
    subCategories: [
      { slug: "gym", label: "Gym & Weight Training", emoji: "🏋️", count: 2880 },
      { slug: "yoga-studio", label: "Yoga Studio", emoji: "🧘", count: 1640 },
      { slug: "crossfit", label: "CrossFit", emoji: "🔥", count: 820 },
      { slug: "zumba-dance", label: "Zumba & Dance Fitness", emoji: "💃", count: 960 },
      { slug: "swimming-pool", label: "Swimming Pool", emoji: "🏊", count: 440 },
      { slug: "personal-trainer", label: "Personal Trainer", emoji: "🥊", count: 460 },
    ],
    relatedSlugs: ["health", "beauty", "sports"],
  },

  // ─── 11. Rent & Hire ────────────────────────────────────────────
  {
    slug: "rent-hire",
    label: "Rent & Hire",
    emoji: "🔄",
    description:
      "Save big by renting instead of buying. Find furniture, appliances, equipment, vehicles, and more on flexible rental plans — perfect for short-term needs or trying before you buy.",
    color: "#059669",
    gradient: "from-emerald-500 to-teal-600",
    bgLight: "#ECFDF5",
    businessCount: 3800,
    verifiedCount: 1330,
    subCategories: [
      { slug: "furniture-rental", label: "Furniture Rental", emoji: "🛋️", count: 920 },
      { slug: "appliance-rental", label: "Appliance Rental", emoji: "📺", count: 780 },
      { slug: "equipment-rental", label: "Equipment Rental", emoji: "🔧", count: 640 },
      { slug: "vehicle-rental", label: "Vehicle Rental", emoji: "🚐", count: 580 },
      { slug: "costume-rental", label: "Costume Rental", emoji: "🎭", count: 440 },
      { slug: "camera-lens-rental", label: "Camera & Lens Rental", emoji: "📷", count: 440 },
    ],
    relatedSlugs: ["car-hire", "real-estate", "electronics"],
  },

  // ─── 12. Jobs ────────────────────────────────────────────────────
  {
    slug: "jobs",
    label: "Jobs & Employment",
    emoji: "💼",
    description:
      "Discover job opportunities, recruitment agencies, and career services. From entry-level positions to senior executive roles, connect with employers and consultants across all industries.",
    color: "#2563EB",
    gradient: "from-blue-600 to-indigo-700",
    bgLight: "#EFF6FF",
    businessCount: 9400,
    verifiedCount: 3290,
    subCategories: [
      { slug: "it-jobs", label: "IT Jobs", emoji: "💻", count: 2640 },
      { slug: "recruitment-agencies", label: "Recruitment Agencies", emoji: "🤝", count: 1880 },
      { slug: "part-time-jobs", label: "Part-Time Jobs", emoji: "⏰", count: 1420 },
      { slug: "fresher-jobs", label: "Fresher Jobs", emoji: "🌱", count: 1240 },
      { slug: "work-from-home", label: "Work from Home", emoji: "🏡", count: 1120 },
      { slug: "government-jobs", label: "Government Jobs", emoji: "🏛️", count: 680 },
      { slug: "resume-services", label: "Resume Services", emoji: "📄", count: 420 },
    ],
    relatedSlugs: ["education", "b2b", "real-estate"],
  },

  // ─── 13. Loans ───────────────────────────────────────────────────
  {
    slug: "loans",
    label: "Loans & Finance",
    emoji: "🏦",
    description:
      "Compare loan offers from banks, NBFCs, and fintech lenders. Find the best rates for home loans, personal loans, business loans, and more with expert guidance and quick approvals.",
    color: "#15803D",
    gradient: "from-green-600 to-emerald-700",
    bgLight: "#F0FDF4",
    businessCount: 5200,
    verifiedCount: 1820,
    subCategories: [
      { slug: "home-loan", label: "Home Loan", emoji: "🏡", count: 1480 },
      { slug: "personal-loan", label: "Personal Loan", emoji: "💵", count: 1240 },
      { slug: "business-loan", label: "Business Loan", emoji: "📈", count: 860 },
      { slug: "car-loan", label: "Car Loan", emoji: "🚗", count: 640 },
      { slug: "education-loan", label: "Education Loan", emoji: "🎓", count: 480 },
      { slug: "gold-loan", label: "Gold Loan", emoji: "🥇", count: 340 },
      { slug: "credit-cards", label: "Credit Cards", emoji: "💳", count: 160 },
    ],
    relatedSlugs: ["real-estate", "b2b", "jobs"],
  },

  // ─── 14. Real Estate ─────────────────────────────────────────────
  {
    slug: "real-estate",
    label: "Real Estate",
    emoji: "🏘️",
    description:
      "Buy, sell, or rent properties with ease. Browse verified listings for apartments, villas, commercial spaces, and plots from trusted real estate agents and builders across top cities.",
    color: "#B45309",
    gradient: "from-amber-600 to-yellow-700",
    bgLight: "#FFFBEB",
    businessCount: 11600,
    verifiedCount: 4060,
    subCategories: [
      { slug: "apartments", label: "Apartments / Flats", emoji: "🏢", count: 3240 },
      { slug: "independent-houses", label: "Independent Houses", emoji: "🏡", count: 2080 },
      { slug: "commercial-space", label: "Commercial Space", emoji: "🏬", count: 1840 },
      { slug: "plots-land", label: "Plots & Land", emoji: "🗺️", count: 1640 },
      { slug: "pg-hostel", label: "PG & Hostel", emoji: "🛏️", count: 1480 },
      { slug: "real-estate-agents", label: "Real Estate Agents", emoji: "📋", count: 820 },
      { slug: "co-living-spaces", label: "Co-Living Spaces", emoji: "🤝", count: 500 },
    ],
    relatedSlugs: ["packers", "loans", "home-decor", "pg-hostel"],
  },

  // ─── 15. PG & Hostel ─────────────────────────────────────────────
  {
    slug: "pg-hostel",
    label: "PG & Hostel",
    emoji: "🏠",
    description:
      "Find comfortable and affordable paying guest accommodations, hostels, and co-living spaces. Filter by location, amenities, gender, and budget to find your ideal stay.",
    color: "#7C3AED",
    gradient: "from-violet-500 to-purple-600",
    bgLight: "#F5F3FF",
    businessCount: 6800,
    verifiedCount: 2380,
    subCategories: [
      { slug: "mens-pg", label: "Men's PG", emoji: "🧑", count: 1840 },
      { slug: "womens-pg", label: "Women's PG", emoji: "👩", count: 1720 },
      { slug: "co-living", label: "Co-Living Spaces", emoji: "🛋️", count: 1280 },
      { slug: "student-hostel", label: "Student Hostel", emoji: "🎓", count: 1140 },
      { slug: "working-professional-pg", label: "Professional PG", emoji: "💼", count: 820 },
    ],
    relatedSlugs: ["real-estate", "rent-hire", "jobs"],
  },

  // ─── 16. Home Decor ──────────────────────────────────────────────
  {
    slug: "home-decor",
    label: "Home Decor",
    emoji: "🛋️",
    description:
      "Transform your living space with stunning home decor ideas and products. Connect with interior designers, furniture makers, curtain shops, and decorative item stores to create your dream home.",
    color: "#A16207",
    gradient: "from-yellow-500 to-amber-600",
    bgLight: "#FEFCE8",
    businessCount: 5400,
    verifiedCount: 1890,
    listingSlug: "interior-design",
    subCategories: [
      { slug: "interior-designers", label: "Interior Designers", emoji: "🎨", count: 1420 },
      { slug: "furniture-stores", label: "Furniture Stores", emoji: "🪑", count: 1240 },
      { slug: "curtains-blinds", label: "Curtains & Blinds", emoji: "🪟", count: 860 },
      { slug: "wall-decor", label: "Wall Decor & Art", emoji: "🖼️", count: 680 },
      { slug: "lighting", label: "Lighting & Lamps", emoji: "💡", count: 540 },
      { slug: "bedding-linen", label: "Bedding & Linen", emoji: "🛏️", count: 420 },
      { slug: "kitchen-decor", label: "Kitchen Decor", emoji: "🍳", count: 240 },
    ],
    relatedSlugs: ["repairs", "real-estate", "shopping"],
  },

  // ─── 17. Hotels ──────────────────────────────────────────────────
  {
    slug: "hotels",
    label: "Hotels",
    emoji: "🏨",
    description:
      "Book the perfect stay from budget lodges to five-star luxury hotels. Browse verified properties with genuine reviews, compare amenities, and find exclusive deals for your next trip.",
    color: "#1E40AF",
    gradient: "from-blue-600 to-indigo-700",
    bgLight: "#DBEAFE",
    businessCount: 8900,
    verifiedCount: 3115,
    listingSlug: "hotels",
    subCategories: [
      { slug: "luxury-hotels", label: "Luxury Hotels", emoji: "⭐", count: 1240 },
      { slug: "budget-hotels", label: "Budget Hotels", emoji: "💰", count: 2840 },
      { slug: "boutique-hotels", label: "Boutique Hotels", emoji: "🏰", count: 860 },
      { slug: "resorts", label: "Resorts", emoji: "🌴", count: 1080 },
      { slug: "business-hotels", label: "Business Hotels", emoji: "💼", count: 1420 },
      { slug: "homestays", label: "Homestays", emoji: "🏡", count: 1060 },
      { slug: "service-apartments", label: "Service Apartments", emoji: "🏢", count: 400 },
    ],
    relatedSlugs: ["travel", "restaurants", "car-hire"],
  },

  // ─── 18. Movies ──────────────────────────────────────────────────
  {
    slug: "movies",
    label: "Movies & Entertainment",
    emoji: "🎬",
    description:
      "Discover movie theatres, multiplexes, and entertainment venues near you. Check showtimes, book tickets, and explore events, live performances, and gaming zones for a fun-filled outing.",
    color: "#E11D48",
    gradient: "from-rose-600 to-pink-700",
    bgLight: "#FFF1F2",
    businessCount: 3400,
    verifiedCount: 1190,
    subCategories: [
      { slug: "multiplexes", label: "Multiplexes", emoji: "🎥", count: 940 },
      { slug: "single-screen", label: "Single-Screen Theatres", emoji: "🎞️", count: 680 },
      { slug: "gaming-zones", label: "Gaming Zones", emoji: "🎮", count: 520 },
      { slug: "escape-rooms", label: "Escape Rooms", emoji: "🔓", count: 280 },
      { slug: "bowling-alley", label: "Bowling Alley", emoji: "🎳", count: 340 },
      { slug: "live-events", label: "Live Events & Concerts", emoji: "🎤", count: 640 },
    ],
    relatedSlugs: ["restaurants", "shopping", "travel"],
  },

  // ─── 19. Restaurants ─────────────────────────────────────────────
  {
    slug: "restaurants",
    label: "Restaurants",
    emoji: "🍽️",
    description:
      "Satisfy your cravings with the best restaurants, cafes, and food joints in town. From fine dining to street food, explore diverse cuisines with verified reviews and real ratings.",
    color: "#D97706",
    gradient: "from-amber-500 to-orange-600",
    bgLight: "#FEF3C7",
    businessCount: 8900,
    verifiedCount: 3115,
    listingSlug: "restaurants",
    subCategories: [
      { slug: "north-indian", label: "North Indian", emoji: "🍛", count: 2460 },
      { slug: "south-indian", label: "South Indian", emoji: "🥘", count: 1840 },
      { slug: "chinese", label: "Chinese", emoji: "🥡", count: 1420 },
      { slug: "fast-food", label: "Fast Food", emoji: "🍔", count: 1680 },
      { slug: "biryani", label: "Biryani", emoji: "🍚", count: 980 },
      { slug: "italian", label: "Italian & Continental", emoji: "🍕", count: 520 },
    ],
    relatedSlugs: ["hotels", "movies", "shopping"],
  },

  // ─── 20. Shopping ────────────────────────────────────────────────
  {
    slug: "shopping",
    label: "Shopping",
    emoji: "🛍️",
    description:
      "Shop at the best retail stores, malls, and markets in your city. From clothing and electronics to groceries and handicrafts, explore verified stores with great deals and genuine products.",
    color: "#DC2626",
    gradient: "from-red-500 to-rose-600",
    bgLight: "#FEE2E2",
    businessCount: 15800,
    verifiedCount: 5530,
    listingSlug: "shopping",
    subCategories: [
      { slug: "shopping-malls", label: "Shopping Malls", emoji: "🏬", count: 2840 },
      { slug: "supermarkets", label: "Supermarkets", emoji: "🛒", count: 3240 },
      { slug: "clothing-stores", label: "Clothing Stores", emoji: "👕", count: 2820 },
      { slug: "handicrafts", label: "Handicrafts & Gifts", emoji: "🎁", count: 1640 },
      { slug: "bookstores", label: "Bookstores", emoji: "📚", count: 980 },
      { slug: "jewellery-stores", label: "Jewellery Stores", emoji: "💎", count: 1280 },
      { slug: "footwear", label: "Footwear", emoji: "👟", count: 1000 },
      { slug: "handloom-textiles", label: "Handloom & Textiles", emoji: "🧵", count: 2000 },
    ],
    relatedSlugs: ["fashion", "electronics", "home-decor"],
  },

  // ─── 21. Electronics ─────────────────────────────────────────────
  {
    slug: "electronics",
    label: "Electronics",
    emoji: "📱",
    description:
      "Find the latest gadgets, smartphones, laptops, and home appliances from authorized dealers and trusted repair centres. Compare prices, check reviews, and make informed buying decisions.",
    color: "#4F46E5",
    gradient: "from-indigo-500 to-blue-600",
    bgLight: "#EEF2FF",
    businessCount: 7200,
    verifiedCount: 2520,
    listingSlug: "electronics",
    subCategories: [
      { slug: "mobile-phones", label: "Mobile Phones", emoji: "📱", count: 2240 },
      { slug: "laptops-computers", label: "Laptops & Computers", emoji: "💻", count: 1440 },
      { slug: "home-appliances", label: "Home Appliances", emoji: "🏠", count: 1280 },
      { slug: "camera-accessories", label: "Cameras & Accessories", emoji: "📷", count: 680 },
      { slug: "audio-gadgets", label: "Audio & Gadgets", emoji: "🎧", count: 840 },
      { slug: "gaming-consoles", label: "Gaming Consoles", emoji: "🎮", count: 420 },
      { slug: "tv-displays", label: "TVs & Displays", emoji: "📺", count: 300 },
    ],
    relatedSlugs: ["repairs", "shopping", "rent-hire"],
  },

  // ─── 22. Repairs ─────────────────────────────────────────────────
  {
    slug: "repairs",
    label: "Repairs & Maintenance",
    emoji: "🔧",
    description:
      "Get quick, reliable repair services for your home and appliances. From AC and plumbing to electrical work and deep cleaning, connect with skilled professionals who get the job done right.",
    color: "#0D9488",
    gradient: "from-teal-500 to-cyan-600",
    bgLight: "#F0FDFA",
    businessCount: 10400,
    verifiedCount: 3640,
    listingSlug: "ac-repair",
    subCategories: [
      { slug: "ac-repair", label: "AC Repair & Service", emoji: "❄️", count: 2240 },
      { slug: "plumbing", label: "Plumbing", emoji: "🚿", count: 1860 },
      { slug: "electrical-repair", label: "Electrical Repair", emoji: "⚡", count: 1680 },
      { slug: "appliance-repair", label: "Appliance Repair", emoji: "🔧", count: 1420 },
      { slug: "carpentry", label: "Carpentry", emoji: "🪚", count: 980 },
      { slug: "painting", label: "Painting", emoji: "🎨", count: 840 },
      { slug: "pest-control", label: "Pest Control", emoji: "🐛", count: 720 },
      { slug: "deep-cleaning", label: "Deep Cleaning", emoji: "✨", count: 660 },
    ],
    relatedSlugs: ["home-decor", "electronics", "real-estate"],
  },

  // ─── 23. Health ──────────────────────────────────────────────────
  {
    slug: "health",
    label: "Health & Wellness",
    emoji: "❤️‍🩹",
    description:
      "Prioritise your wellbeing with comprehensive health services. Find hospitals, diagnostic labs, pharmacies, mental health counsellors, and alternative therapy centres for holistic care.",
    color: "#16A34A",
    gradient: "from-green-500 to-emerald-600",
    bgLight: "#F0FDF4",
    businessCount: 10200,
    verifiedCount: 3570,
    listingSlug: "doctors",
    subCategories: [
      { slug: "hospitals", label: "Hospitals", emoji: "🏥", count: 2240 },
      { slug: "diagnostic-labs", label: "Diagnostic Labs", emoji: "🔬", count: 1840 },
      { slug: "pharmacies", label: "Pharmacies", emoji: "💊", count: 2080 },
      { slug: "mental-health", label: "Mental Health", emoji: "🧠", count: 820 },
      { slug: "physiotherapy", label: "Physiotherapy", emoji: "🏃", count: 960 },
      { slug: "ayurveda-homeopathy", label: "Ayurveda & Homeopathy", emoji: "🌿", count: 1260 },
      { slug: "dental-clinics", label: "Dental Clinics", emoji: "🦷", count: 1000 },
    ],
    relatedSlugs: ["doctors", "gyms", "beauty"],
  },

  // ─── 24. Internet ────────────────────────────────────────────────
  {
    slug: "internet",
    label: "Internet & Telecom",
    emoji: "🌐",
    description:
      "Get the best internet, broadband, and telecom connections for your home or office. Compare plans from top ISPs, find Wi-Fi setup services, and get quick installation from verified providers.",
    color: "#6366F1",
    gradient: "from-indigo-500 to-purple-600",
    bgLight: "#EEF2FF",
    businessCount: 4600,
    verifiedCount: 1610,
    subCategories: [
      { slug: "broadband", label: "Broadband Providers", emoji: "📡", count: 1280 },
      { slug: "wifi-setup", label: "Wi-Fi Setup & Repair", emoji: "📶", count: 840 },
      { slug: "mobile-recharge", label: "Mobile Recharge & SIM", emoji: "📱", count: 1060 },
      { slug: "dsl-cable", label: "DSL & Cable Internet", emoji: "🔌", count: 680 },
      { slug: "fibre-optic", label: "Fibre Optic Internet", emoji: "⚡", count: 440 },
      { slug: "enterprise-connectivity", label: "Enterprise Connectivity", emoji: "🏢", count: 300 },
    ],
    relatedSlugs: ["electronics", "repairs", "b2b"],
  },
];

// ── Helpers ─────────────────────────────────────────────────────────

const bySlug = new Map<string, CategoryLandingInfo>(
  categoryLandingData.map((c) => [c.slug, c]),
);

/**
 * Retrieve full landing-page metadata for a single category slug.
 * Returns `undefined` when the slug does not exist in the dataset.
 */
export function getCategoryLanding(slug: string): CategoryLandingInfo | undefined {
  return bySlug.get(slug);
}

/**
 * Return every registered category slug in insertion order.
 */
export function getAllCategorySlugs(): string[] {
  return categoryLandingData.map((c) => c.slug);
}

export default categoryLandingData;