import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

const images = [
  { prompt: "AC repair technician fixing split AC on wall, professional service, clean indoor, realistic photo, high quality", output: "public/images/services/ac-repair.png", size: "1024x1024" as const },
  { prompt: "Professional painter painting wall with roller, clean room, paint buckets, realistic photo, high quality", output: "public/images/services/painters.png", size: "1024x1024" as const },
  { prompt: "Pest control professional spraying treatment, protective equipment, realistic photo, high quality", output: "public/images/services/pest-control.png", size: "1024x1024" as const },
  { prompt: "Plumber fixing pipe under sink, professional tools, clean bathroom, realistic photo, high quality", output: "public/images/services/plumbers.png", size: "1024x1024" as const },
  { prompt: "Carpenter working with wood making furniture, workshop with tools, realistic photo, high quality", output: "public/images/services/carpenters.png", size: "1024x1024" as const },
  { prompt: "Electrician working on electrical panel wiring, professional tools, realistic photo, high quality", output: "public/images/services/electricians.png", size: "1024x1024" as const },
  { prompt: "Mobile hair salon service at home, stylist cutting hair, realistic photo, high quality", output: "public/images/services/salon-home.png", size: "1024x1024" as const },
  { prompt: "Deep cleaning service professional cleaning living room with steam cleaner, realistic photo, high quality", output: "public/images/services/deep-cleaning.png", size: "1024x1024" as const },
  { prompt: "Car rental service fleet of clean modern cars parked, realistic photo, high quality", output: "public/images/rent/vehicles.png", size: "1024x1024" as const },
  { prompt: "Traditional Indian clothes on rent, colorful lehengas and sherwanis on hangers, realistic photo, high quality", output: "public/images/rent/clothes.png", size: "1024x1024" as const },
  { prompt: "Furniture on rent modern sofa set and table in showroom, realistic photo, high quality", output: "public/images/rent/furniture.png", size: "1024x1024" as const },
  { prompt: "Home appliances on rent refrigerator washing machine AC on display, realistic photo, high quality", output: "public/images/rent/appliances.png", size: "1024x1024" as const },
];

async function main() {
  const zai = await ZAI.create();
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    try {
      console.log(`[${i+1}/12] ${img.output}...`);
      const r = await zai.images.generations.create({ prompt: img.prompt, size: img.size });
      fs.writeFileSync(img.output, Buffer.from(r.data[0].base64, 'base64'));
      console.log(`  OK`);
    } catch(e: any) { console.error(`  FAIL: ${e.message}`); }
  }
  console.log("Done - services & rent");
}
main();