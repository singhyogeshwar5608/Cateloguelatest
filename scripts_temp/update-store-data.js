const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'lib', 'store-data.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add `likes` field to StoreData interface (after followers)
content = content.replace(
  '  views: string;\n  followers: string;',
  '  views: string;\n  followers: string;\n  likes: string;'
);

// 2. Add likes, views, followers, products to each store
// We need to insert before `similarStores:` in each store

const storeData = {
  "shivam-fast-food": {
    likes: "1.2K", views: "45,230", followers: "856",
    products: [
      { id: "sf-p1", name: "Masala Chai Premix (Pack of 20)", price: "₹199", originalPrice: "₹299", image: "chai-premix", rating: 4.3, reviews: 89, badge: "Bestseller", inStock: true, category: "Beverages", description: "Authentic masala chai premix made with premium Assam tea and aromatic spices. Just add hot water and enjoy!" },
      { id: "sf-p2", name: "Pav Bhaji Masala (200g)", price: "₹85", originalPrice: "₹120", image: "pavbhaji-masala", rating: 4.5, reviews: 156, badge: "Top Rated", inStock: true, category: "Spices", description: "Our secret Pav Bhaji masala blend used in the restaurant. Now you can make restaurant-style Pav Bhaji at home." },
      { id: "sf-p3", name: "Mango Lassi Concentrate (1L)", price: "₹250", image: "mango-lassi", rating: 4.1, reviews: 67, inStock: true, category: "Beverages", description: "Thick mango lassi concentrate made from Alphonso mangoes. Mix 1:3 with cold milk for perfect lassi." },
      { id: "sf-p4", name: "Frozen Chole Bhature (Pack of 5)", price: "₹350", originalPrice: "₹450", image: "chole-bhature-frozen", rating: 4.4, reviews: 203, badge: "Popular", inStock: true, category: "Frozen Food", description: "Ready-to-fry frozen Chole Bhature. Includes spiced chole. Just heat and serve in 10 minutes." },
    ]
  },
  "look-style-salon": {
    likes: "2.8K", views: "78,450", followers: "2,340",
    products: [
      { id: "ls-p1", name: "L'Oreal Professional Shampoo (300ml)", price: "₹550", originalPrice: "₹750", image: "loreal-shampoo", rating: 4.6, reviews: 312, badge: "Bestseller", inStock: true, category: "Hair Care", description: "Professional grade shampoo used in our salon. Suitable for all hair types. Contains keratin and argan oil." },
      { id: "ls-p2", name: "Schwarzkopf Hair Color Kit", price: "₹420", image: "schwarzkopf-color", rating: 4.3, reviews: 178, inStock: true, category: "Hair Color", description: "Professional hair color kit with developer. Ammonia-free formula lasts up to 6 weeks." },
      { id: "ls-p3", name: "Kerastase Hair Serum (50ml)", price: "₹1,200", originalPrice: "₹1,500", image: "kerastase-serum", rating: 4.8, reviews: 95, badge: "Premium", inStock: true, category: "Hair Care", description: "Luxury hair serum for frizz control and shine. Enriched with camelina oil and vitamin E." },
    ]
  },
  "carewell-pharmacy": {
    likes: "1.5K", views: "56,780", followers: "1,230",
    products: [
      { id: "cp-p1", name: "Dabur Chyawanprash (500g)", price: "₹310", originalPrice: "₹399", image: "chyawanprash", rating: 4.5, reviews: 890, badge: "Bestseller", inStock: true, category: "Ayurvedic", description: "Clinically proven immunity booster with 40+ Ayurvedic ingredients. Trusted by millions of families." },
      { id: "cp-p2", name: "Volini Spray (60g)", price: "₹230", image: "volini-spray", rating: 4.2, reviews: 456, inStock: true, category: "Pain Relief", description: "Fast-acting pain relief spray for muscle and joint pain. Contains diclofenac diethylamine." },
      { id: "cp-p3", name: "Ensure Protein Powder (400g)", price: "₹780", originalPrice: "₹950", image: "ensure-protein", rating: 4.7, reviews: 234, badge: "Popular", inStock: true, category: "Nutrition", description: "Complete nutrition powder for adults. Provides 32 essential nutrients. Vanilla flavor." },
      { id: "cp-p4", name: "Accu-Chek Guide Glucometer Kit", price: "₹1,250", originalPrice: "₹1,800", image: "glucometer", rating: 4.6, reviews: 567, badge: "Top Rated", inStock: true, category: "Medical Devices", description: "Easy-to-use blood glucose monitoring system. Includes 10 test strips and lancets." },
      { id: "cp-p5", name: "Dettol Antiseptic Liquid (500ml)", price: "₹199", originalPrice: "₹250", image: "dettol-liquid", rating: 4.4, reviews: 1230, inStock: true, category: "Antiseptics", description: "Trusted antiseptic liquid for first aid, personal hygiene, and household cleaning." },
    ]
  },
  "fresh-mart-grocery": {
    likes: "980", views: "34,560", followers: "678",
    products: [
      { id: "fm-p1", name: "Tata Salt (1kg)", price: "₹28", image: "tata-salt", rating: 4.3, reviews: 2340, badge: "Essential", inStock: true, category: "Grocery", description: "India's most trusted salt brand. Iodized for thyroid health." },
      { id: "fm-p2", name: "Fortune Sunflower Oil (1L)", price: "₹155", originalPrice: "₹180", image: "fortune-oil", rating: 4.5, reviews: 1567, inStock: true, category: "Cooking Oil", description: "Light and healthy cooking oil. Rich in Vitamin E and Omega-6 fatty acids." },
      { id: "fm-p3", name: "Aashirvaad Atta (5kg)", price: "₹265", originalPrice: "₹310", image: "aashirvaad-atta", rating: 4.7, reviews: 3456, badge: "Bestseller", inStock: true, category: "Flour", description: "100% whole wheat atta made from the finest grains. Soft rotis every time." },
      { id: "fm-p4", name: "Amul Butter (500g)", price: "₹270", image: "amul-butter", rating: 4.8, reviews: 4567, badge: "Popular", inStock: true, category: "Dairy", description: "Pure and creamy butter made from fresh cream. Perfect for bread, cooking, and baking." },
      { id: "fm-p5", name: "Basmati Rice Premium (5kg)", price: "₹450", originalPrice: "₹550", image: "basmati-rice", rating: 4.4, reviews: 890, badge: "Premium", inStock: true, category: "Rice", description: "Extra-long grain basmati rice aged for 2 years. Aromatic and fluffy." },
      { id: "fm-p6", name: "Maggi Noodles (Pack of 12)", price: "₹168", originalPrice: "₹192", image: "maggi-noodles", rating: 4.6, reviews: 6789, inStock: true, category: "Instant Food", description: "India's favorite 2-minute noodles. Perfect taste in every bite." },
    ]
  },
  "quickfix-electronics": {
    likes: "670", views: "23,450", followers: "445",
    products: [
      { id: "qe-p1", name: "Tempered Glass Screen Protector (Pack of 2)", price: "₹199", originalPrice: "₹499", image: "screen-protector", rating: 4.2, reviews: 345, inStock: true, category: "Mobile Accessories", description: "9H hardness tempered glass. Anti-fingerprint and bubble-free installation." },
      { id: "qe-p2", name: "USB-C Fast Charging Cable (1m)", price: "₹299", originalPrice: "₹499", image: "usbc-cable", rating: 4.4, reviews: 567, badge: "Bestseller", inStock: true, category: "Cables", description: "Nylon braided USB-C cable with 60W PD fast charging support. Durable and tangle-free." },
      { id: "qe-p3", name: "Wireless Bluetooth Earbuds", price: "₹899", originalPrice: "₹1,499", image: "bluetooth-earbuds", rating: 4.1, reviews: 234, badge: "Deal", inStock: true, category: "Audio", description: "True wireless earbuds with 24hr battery life, IPX5 waterproof, and touch controls." },
      { id: "qe-p4", name: "Power Bank 10000mAh", price: "₹699", originalPrice: "₹999", image: "powerbank-10k", rating: 4.5, reviews: 789, badge: "Popular", inStock: true, category: "Power Banks", description: "Compact and lightweight power bank with dual USB output. Fast charging support." },
    ]
  },
  "green-leaf-cafe": {
    likes: "3.1K", views: "89,120", followers: "4,560",
    products: [
      { id: "gl-p1", name: "Organic Green Tea (25 Bags)", price: "₹350", originalPrice: "₹450", image: "green-tea", rating: 4.7, reviews: 456, badge: "Bestseller", inStock: true, category: "Beverages", description: "Premium organic green tea sourced from Darjeeling estates. Rich in antioxidants." },
      { id: "gl-p2", name: "Cold Pressed Juice Set (6 Pack)", price: "₹599", originalPrice: "₹750", image: "cold-juice-set", rating: 4.5, reviews: 234, inStock: true, category: "Beverages", description: "Assorted cold pressed juices - Orange, Apple, Mixed Berry, Green Detox, Watermelon, Carrot." },
      { id: "gl-p3", name: "Granola & Berries Jar (500g)", price: "₹420", image: "granola-jar", rating: 4.3, reviews: 178, badge: "Healthy", inStock: true, category: "Snacks", description: "Crunchy granola with mixed berries, honey, and oats. Perfect breakfast or snack." },
      { id: "gl-p4", name: "GLC Reusable Coffee Cup (350ml)", price: "₹550", originalPrice: "₹699", image: "coffee-cup", rating: 4.6, reviews: 89, badge: "New", inStock: true, category: "Merchandise", description: "Eco-friendly bamboo fiber coffee cup with silicone lid. BPA-free and microwave safe." },
    ]
  },
  "stylehub-salon": {
    likes: "2.1K", views: "62,340", followers: "1,890",
    products: [
      { id: "sh-p1", name: "Biolage SmoothProof Shampoo (340ml)", price: "₹650", originalPrice: "₹850", image: "biolage-shampoo", rating: 4.5, reviews: 234, badge: "Bestseller", inStock: true, category: "Hair Care", description: "Anti-frizz shampoo for smooth, shiny hair. Contains camellia oil and aloe vera." },
      { id: "sh-p2", name: "Wella Color Charm Toner (85ml)", price: "₹380", image: "wella-toner", rating: 4.4, reviews: 156, inStock: true, category: "Hair Color", description: "Professional toner for neutralizing unwanted brassy tones. Long-lasting results." },
      { id: "sh-p3", name: "Moroccanoil Treatment (100ml)", price: "₹1,450", originalPrice: "₹1,950", image: "moroccanoil", rating: 4.8, reviews: 345, badge: "Premium", inStock: true, category: "Hair Care", description: "Iconic hair treatment oil enriched with argan oil. Nourishes, smooths, and adds shine." },
    ]
  },
  "freshbite-restaurant": {
    likes: "1.8K", views: "52,670", followers: "1,450",
    products: [
      { id: "fb-p1", name: "Biryani Spice Mix (200g)", price: "₹150", originalPrice: "₹200", image: "biryani-mix", rating: 4.6, reviews: 567, badge: "Bestseller", inStock: true, category: "Spices", description: "Our signature biryani spice blend. Includes saffron strands. Makes perfect biryani every time." },
      { id: "fb-p2", name: "Mango Pickle (500g)", price: "₹220", image: "mango-pickle", rating: 4.3, reviews: 234, inStock: true, category: "Pickles", description: "Homemade-style raw mango pickle with traditional spices. Aged for 3 months for perfect taste." },
      { id: "fb-p3", name: "Frozen Paratha (Pack of 10)", price: "₹280", originalPrice: "₹350", image: "frozen-paratha", rating: 4.4, reviews: 890, inStock: true, category: "Frozen Food", description: "Flaky, layered parathas made with whole wheat. Just heat on tawa for 2 minutes." },
    ]
  },
  "fitzone-gym": {
    likes: "1.3K", views: "38,900", followers: "920",
    products: [
      { id: "fz-p1", name: "Whey Protein (1kg)", price: "₹1,899", originalPrice: "₹2,499", image: "whey-protein", rating: 4.5, reviews: 567, badge: "Bestseller", inStock: true, category: "Supplements", description: "Premium whey protein isolate with 25g protein per serving. Chocolate flavor." },
      { id: "fz-p2", name: "Resistance Band Set (5 Levels)", price: "₹499", originalPrice: "₹799", image: "resistance-bands", rating: 4.3, reviews: 234, inStock: true, category: "Equipment", description: "Set of 5 resistance bands with different strengths. Includes door anchor and carry bag." },
      { id: "fz-p3", name: "Gym Gloves with Wrist Support", price: "₹399", originalPrice: "₹599", image: "gym-gloves", rating: 4.2, reviews: 178, inStock: true, category: "Accessories", description: "Anti-slip gym gloves with wrist wrap support. Breathable mesh material." },
      { id: "fz-p4", name: "BCAA Powder (500g)", price: "₹1,200", originalPrice: "₹1,600", image: "bcaa-powder", rating: 4.4, reviews: 145, badge: "Popular", inStock: true, category: "Supplements", description: "Branched-chain amino acids for muscle recovery. Watermelon flavor, 0 sugar." },
    ]
  },
  "techfix-electronics": {
    likes: "890", views: "28,760", followers: "567",
    products: [
      { id: "tf-p1", name: "TWS Earbuds Pro (Active NC)", price: "₹1,499", originalPrice: "₹2,999", image: "tws-pro", rating: 4.5, reviews: 890, badge: "Deal", inStock: true, category: "Audio", description: "Active noise cancellation earbuds with 30hr battery. IPX7 waterproof with transparency mode." },
      { id: "tf-p2", name: "Phone Case (Military Grade)", price: "₹349", originalPrice: "₹599", image: "phone-case", rating: 4.3, reviews: 1234, inStock: true, category: "Mobile Accessories", description: "Military-grade drop protection case. Built-in kickstand and camera lens guard." },
      { id: "tf-p3", name: "65W GaN Charger", price: "₹1,299", originalPrice: "₹1,999", image: "gan-charger", rating: 4.6, reviews: 567, badge: "Bestseller", inStock: true, category: "Chargers", description: "GaN technology 65W charger with 3 ports. Charges laptop, phone, and tablet simultaneously." },
      { id: "tf-p4", name: "Mechanical Keyboard (RGB)", price: "₹2,499", originalPrice: "₹3,499", image: "mech-keyboard", rating: 4.4, reviews: 345, badge: "New", inStock: true, category: "Computer Peripherals", description: "Hot-swappable mechanical keyboard with RGB backlighting. Blue switches with PBT keycaps." },
    ]
  },
  "quickmove-packers": {
    likes: "450", views: "15,670", followers: "234",
    products: []
  },
  "sharma-dental": {
    likes: "980", views: "31,230", followers: "756",
    products: [
      { id: "sd-p1", name: "Oral-B Pro Toothbrush (Soft)", price: "₹199", originalPrice: "₹299", image: "oralb-toothbrush", rating: 4.4, reviews: 567, inStock: true, category: "Dental Care", description: "Professional grade toothbrush with crisscross bristles. Removes up to 90% plaque." },
      { id: "sd-p2", name: "Sensodyne Repair Toothpaste (150g)", price: "₹230", image: "sensodyne-paste", rating: 4.6, reviews: 1234, badge: "Bestseller", inStock: true, category: "Dental Care", description: "Clinically proven relief from sensitivity. Builds a repairing layer over sensitive areas." },
      { id: "sd-p3", name: "Dental Floss Picks (90 Count)", price: "₹180", originalPrice: "₹220", image: "floss-picks", rating: 4.2, reviews: 345, inStock: true, category: "Dental Care", description: "Mint-flavored dental floss picks with tongue cleaner. Easy-grip handle design." },
    ]
  },
  "sunrise-public-school": {
    likes: "2.5K", views: "67,890", followers: "3,200",
    products: []
  },
  "glow-beauty-parlour": {
    likes: "1.6K", views: "48,560", followers: "1,120",
    products: [
      { id: "gb-p1", name: "Lakme 9to5 Primer (30ml)", price: "₹499", originalPrice: "₹599", image: "lakme-primer", rating: 4.3, reviews: 678, inStock: true, category: "Makeup", description: "Long-lasting makeup primer that controls oil and minimizes pores. Lightweight formula." },
      { id: "gb-p2", name: "Nivea Body Lotion (400ml)", price: "₹320", originalPrice: "₹399", image: "nivea-lotion", rating: 4.5, reviews: 2345, badge: "Bestseller", inStock: true, category: "Skincare", description: "Deep moisturizing body lotion with Vitamin E and jojoba oil. 48hr moisture lock." },
      { id: "gb-p3", name: "Face Sheet Mask Set (5 Pack)", price: "₹199", originalPrice: "₹350", image: "sheet-masks", rating: 4.2, reviews: 456, badge: "Deal", inStock: true, category: "Skincare", description: "Assorted face sheet masks - Hydrating, Brightening, Anti-aging, Pore Minimizing, Soothing." },
      { id: "gb-p4", name: "MAC Velvet Lipstick", price: "₹990", originalPrice: "₹1,200", image: "mac-lipstick", rating: 4.7, reviews: 890, badge: "Premium", inStock: true, category: "Makeup", description: "Velvet-textured matte lipstick with long-wear formula. Rich, saturated color in one stroke." },
    ]
  },
  "vijay-sales": {
    likes: "3.5K", views: "1,12,340", followers: "5,670",
    products: [
      { id: "vs-p1", name: "Samsung Galaxy Buds FE", price: "₹4,999", originalPrice: "₹7,999", image: "galaxy-buds", rating: 4.4, reviews: 2345, badge: "Deal", inStock: true, category: "Audio", description: "Premium TWS earbuds with ANC and 30hr battery. IPX2 rated with comfortable fit." },
      { id: "vs-p2", name: "boAt Rockerz 450 Headphone", price: "₹1,299", originalPrice: "₹2,990", image: "boAt-headphone", rating: 4.3, reviews: 5678, badge: "Bestseller", inStock: true, category: "Audio", description: "Over-ear wireless headphones with 40hr battery, ASAP charging, and padded ear cushions." },
      { id: "vs-p3", name: "MI Smart Band 8", price: "₹1,799", originalPrice: "₹2,499", image: "mi-band", rating: 4.5, reviews: 3456, inStock: true, category: "Wearables", description: "Advanced fitness band with 150+ sports modes, SpO2 monitor, and 16-day battery life." },
      { id: "vs-p4", name: "JBL Flip 6 Bluetooth Speaker", price: "₹9,999", originalPrice: "₹14,999", image: "jbl-flip6", rating: 4.7, reviews: 1234, badge: "Popular", inStock: true, category: "Speakers", description: "Portable Bluetooth speaker with powerful bass. IP67 waterproof and dustproof. 12hr playtime." },
      { id: "vs-p5", name: "Samsung 128GB Memory Card", price: "₹799", originalPrice: "₹1,299", image: "memory-card", rating: 4.2, reviews: 4567, inStock: true, category: "Storage", description: "EVO Plus microSD card with U3 Class 10 speed. 130MB/s read speed." },
      { id: "vs-p6", name: "Realme 65W Charger", price: "₹899", originalPrice: "₹1,499", image: "realme-charger", rating: 4.4, reviews: 2345, badge: "Top Rated", inStock: true, category: "Chargers", description: "SuperDart 65W fast charger. Compatible with most USB-C devices including laptops." },
    ]
  },
  "royal-banquet-hall": {
    likes: "1.1K", views: "29,890", followers: "890",
    products: []
  },
  "smilecare-dental": {
    likes: "2.2K", views: "71,230", followers: "2,890",
    products: [
      { id: "sc-p1", name: "Colgate Total Toothpaste (200g)", price: "₹210", originalPrice: "₹250", image: "colgate-total", rating: 4.5, reviews: 2345, inStock: true, category: "Dental Care", description: "12-in-1 complete care toothpaste. Fights cavities, plaque, gingivitis, and sensitivity." },
      { id: "sc-p2", name: "Waterpik Water Flosser", price: "₹3,499", originalPrice: "₹4,999", image: "waterpik", rating: 4.7, reviews: 567, badge: "Premium", inStock: true, category: "Dental Devices", description: "Professional water flosser with 10 pressure settings. Removes 99.9% plaque from treated areas." },
      { id: "sc-p3", name: "Teeth Whitening Strips (14 Pack)", price: "₹899", originalPrice: "₹1,299", image: "whitening-strips", rating: 4.1, reviews: 345, badge: "New", inStock: true, category: "Dental Care", description: "Professional-grade whitening strips. Noticeable results in 14 days. Enamel-safe formula." },
    ]
  },
  "fitpro-gym": {
    likes: "890", views: "25,340", followers: "670",
    products: [
      { id: "fp-p1", name: "Creatine Monohydrate (250g)", price: "₹699", originalPrice: "₹999", image: "creatine", rating: 4.6, reviews: 456, badge: "Bestseller", inStock: true, category: "Supplements", description: "Micronized creatine monohydrate for strength and power. Unflavored, mixes easily." },
      { id: "fp-p2", name: "Yoga Mat (6mm Thick)", price: "₹599", originalPrice: "₹899", image: "yoga-mat", rating: 4.4, reviews: 789, inStock: true, category: "Equipment", description: "Eco-friendly TPE yoga mat with alignment lines. Non-slip surface, comes with carry strap." },
      { id: "fp-p3", name: "Pre-Workout Powder (500g)", price: "₹1,499", originalPrice: "₹1,999", image: "preworkout", rating: 4.3, reviews: 234, inStock: true, category: "Supplements", description: "Explosive pre-workout with caffeine, beta-alanine, and citrulline. Fruit punch flavor." },
    ]
  }
};

// Insert data before similarStores: in each store
for (const [storeId, data] of Object.entries(storeData)) {
  const similarStoresMarker = `    similarStores:`;
  const storeBlock = `    photos: [`;
  
  // Find the position of the store's photos line
  const storeStart = content.indexOf(`"${storeId}":`);
  if (storeStart === -1) {
    console.log(`Store ${storeId} not found`);
    continue;
  }
  
  // Find photos line within this store
  const photosPos = content.indexOf(storeBlock, storeStart);
  if (photosPos === -1) {
    console.log(`Photos not found for ${storeId}`);
    continue;
  }
  
  // Find the end of photos array
  const photosEndPos = content.indexOf('],', photosPos);
  if (photosEndPos === -1) {
    console.log(`Photos end not found for ${storeId}`);
    continue;
  }
  
  // Check if likes/views/followers already exist
  const storeEnd = content.indexOf('};', photosEndPos);
  const storeSection = content.substring(photosEndPos, storeEnd);
  
  if (storeSection.includes('likes:')) {
    console.log(`${storeId} already has likes, skipping`);
    continue;
  }
  
  const insertText = `,\n    likes: "${data.likes}",\n    views: "${data.views}",\n    followers: "${data.followers}",\n    products: ${JSON.stringify(data.products, null, 4).split('\n').map((l, i) => i === 0 ? l : '    ' + l).join('\n')}`;
  
  // Insert after the photos array closing
  const afterPhotos = photosEndPos + 2; // after '],'
  content = content.slice(0, afterPhotos) + insertText + content.slice(afterPhotos);
  console.log(`Updated ${storeId}`);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('\nDone! All stores updated.');