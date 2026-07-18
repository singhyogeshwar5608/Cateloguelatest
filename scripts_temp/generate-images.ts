import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const images = [
  // Featured Stores (1024x1024 square)
  { prompt: "Indian fast food restaurant interior, colorful, warm lighting, burgers and chaat on tables, realistic photo, high quality", output: "public/images/stores/shivam-fast-food.png", size: "1024x1024" },
  { prompt: "Modern beauty salon interior, stylish hair styling chairs, mirrors, elegant decor, soft pink lighting, professional photography, high quality", output: "public/images/stores/look-style-salon.png", size: "1024x1024" },
  { prompt: "Well organized pharmacy store interior, medicine shelves, clean white interiors, bright lighting, professional photography, high quality", output: "public/images/stores/carewell-pharmacy.png", size: "1024x1024" },
  { prompt: "Modern Indian grocery supermarket aisle, fresh vegetables and fruits, organized shelves, bright lighting, realistic photo, high quality", output: "public/images/stores/fresh-mart-grocery.png", size: "1024x1024" },
  { prompt: "Modern electronics mobile phone shop interior, smartphones on display, LED lights, sleek counters, realistic photo, high quality", output: "public/images/stores/quickfix-electronics.png", size: "1024x1024" },
  { prompt: "Cozy green leaf cafe interior, plants on walls, wooden tables, coffee cups, warm ambient lighting, realistic photo, high quality", output: "public/images/stores/green-leaf-cafe.png", size: "1024x1024" },

  // Movies (768x1344 portrait posters)
  { prompt: "Bollywood action movie poster, intense male lead in forest with axe, dramatic lighting, fire background, bold Hindi typography style, cinematic, high quality", output: "public/images/movies/pushpa2.png", size: "768x1344" },
  { prompt: "Bollywood action comedy movie poster, police officer with lion, dramatic orange lighting, action pose, cinematic, high quality", output: "public/images/movies/singham-again.png", size: "768x1344" },
  { prompt: "Bollywood horror comedy movie poster, haunted palace with ghost, mysterious blue lighting, spooky yet funny, cinematic, high quality", output: "public/images/movies/bhool-bhulaiyaa3.png", size: "768x1344" },

  // Popular Businesses (1344x768 landscape)
  { prompt: "Modern dental clinic interior, dentist chair, clean white room, dental equipment, professional medical photography, high quality", output: "public/images/businesses/sharma-dental.png", size: "1344x768" },
  { prompt: "Electronics repair shop, technician soldering circuit board, tools and gadgets on table, realistic photo, high quality", output: "public/images/businesses/techfix-electronics.png", size: "1344x768" },
  { prompt: "Beautiful Indian restaurant interior, colorful thali food on table, warm ambient lighting, realistic food photography, high quality", output: "public/images/businesses/freshbite-restaurant.png", size: "1344x768" },
  { prompt: "Professional packing and moving service, workers loading boxes into truck, organized logistics, realistic photo, high quality", output: "public/images/businesses/quickmove-packers.png", size: "1344x768" },
  { prompt: "Trendy hair salon interior, stylist cutting hair, modern mirrors and chairs, elegant decor, realistic photo, high quality", output: "public/images/businesses/stylehub-salon.png", size: "1344x768" },
  { prompt: "Modern gym interior with equipment, dumbbells, treadmill, motivational space, bright lighting, realistic photo, high quality", output: "public/images/businesses/fitzone-gym.png", size: "1344x768" },

  // Tourist Places (1344x768 landscape)
  { prompt: "India Gate Delhi landmark at sunset, golden hour, beautiful sky, people walking, iconic Indian monument, professional photography, high quality", output: "public/images/tourist/delhi.png", size: "1344x768" },
  { prompt: "Taj Mahal Agra, beautiful white marble mausoleum, reflecting pool, blue sky, iconic Indian landmark, professional photography, high quality", output: "public/images/tourist/agra.png", size: "1344x768" },
  { prompt: "Rishikesh India, Ganges river with Lakshman Jhula bridge, green hills, spiritual atmosphere, professional photography, high quality", output: "public/images/tourist/rishikesh.png", size: "1344x768" },
  { prompt: "Dehradun hill station India, lush green mountains, misty morning, scenic Himalayan view, professional photography, high quality", output: "public/images/tourist/dehradun.png", size: "1344x768" },

  // JD Guides (1344x768 landscape)
  { prompt: "Best restaurants in Mumbai, aerial view of Mumbai skyline with restaurants, food spread, warm lighting, professional photography, high quality", output: "public/images/guides/restaurants-mumbai.png", size: "1344x768" },
  { prompt: "Top schools in Delhi, beautiful school building with students, green campus, modern architecture, professional photography, high quality", output: "public/images/guides/schools-delhi.png", size: "1344x768" },

  // JD Collections (1344x768 landscape)
  { prompt: "Beautiful Indian wedding decoration with flowers and lights, grand mandap setup, elegant wedding planner arrangement, professional photography, high quality", output: "public/images/collections/wedding-planners.png", size: "1344x768" },
  { prompt: "Modern luxury home interior design, minimalist living room, elegant furniture, warm lighting, professional interior photography, high quality", output: "public/images/collections/home-interior.png", size: "1344x768" },

  // Home Services (1024x1024 square)
  { prompt: "AC repair technician fixing air conditioner, professional service, clean indoor environment, realistic photo, high quality", output: "public/images/services/ac-repair.png", size: "1024x1024" },
  { prompt: "Professional painter painting wall with roller, clean room, paint buckets, realistic photo, high quality", output: "public/images/services/painters.png", size: "1024x1024" },
  { prompt: "Pest control professional spraying treatment in kitchen, protective equipment, realistic photo, high quality", output: "public/images/services/pest-control.png", size: "1024x1024" },
  { prompt: "Plumber fixing pipe under sink, professional tools, clean bathroom, realistic photo, high quality", output: "public/images/services/plumbers.png", size: "1024x1024" },
  { prompt: "Carpenter working with wood, making furniture, workshop with tools, realistic photo, high quality", output: "public/images/services/carpenters.png", size: "1024x1024" },
  { prompt: "Electrician working on electrical panel, wiring, professional tools, realistic photo, high quality", output: "public/images/services/electricians.png", size: "1024x1024" },
  { prompt: "Mobile hair salon service at home, stylist cutting hair in living room, realistic photo, high quality", output: "public/images/services/salon-home.png", size: "1024x1024" },
  { prompt: "Deep cleaning service, professional cleaning a living room with steam cleaner, realistic photo, high quality", output: "public/images/services/deep-cleaning.png", size: "1024x1024" },

  // Rent & Hire (1024x1024 square)
  { prompt: "Car rental service, fleet of clean cars parked, modern vehicles, realistic photo, high quality", output: "public/images/rent/vehicles.png", size: "1024x1024" },
  { prompt: "Traditional Indian clothes on rent, colorful lehengas and sherwanis on hangers, realistic photo, high quality", output: "public/images/rent/clothes.png", size: "1024x1024" },
  { prompt: "Furniture on rent, modern sofa set and table in showroom, realistic photo, high quality", output: "public/images/rent/furniture.png", size: "1024x1024" },
  { prompt: "Home appliances on rent, refrigerator washing machine AC on display, realistic photo, high quality", output: "public/images/rent/appliances.png", size: "1024x1024" },
];

async function main() {
  console.log(`Starting batch generation of ${images.length} images...`);
  const zai = await ZAI.create();
  let success = 0;
  let failed = 0;

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const dir = path.dirname(img.output);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    try {
      console.log(`[${i + 1}/${images.length}] Generating: ${path.basename(img.output)}...`);
      const response = await zai.images.generations.create({
        prompt: img.prompt,
        size: img.size as "1024x1024",
      });
      const buffer = Buffer.from(response.data[0].base64, 'base64');
      fs.writeFileSync(img.output, buffer);
      console.log(`  Saved (${(buffer.length / 1024).toFixed(0)} KB)`);
      success++;
    } catch (err: any) {
      console.error(`  Failed: ${err.message}`);
      failed++;
    }
  }

  console.log(`\nDone! ${success} success, ${failed} failed out of ${images.length}`);
}

main().catch(console.error);