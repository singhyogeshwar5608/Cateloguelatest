import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

const images = [
  { prompt: "Modern dental clinic interior, dentist chair, clean white room, dental equipment, professional medical photography, high quality", output: "public/images/businesses/sharma-dental.png", size: "1344x768" as const },
  { prompt: "Electronics repair shop, technician soldering circuit board, tools and gadgets on table, realistic photo, high quality", output: "public/images/businesses/techfix-electronics.png", size: "1344x768" as const },
  { prompt: "Beautiful Indian restaurant interior, colorful thali food on table, warm ambient lighting, realistic food photography, high quality", output: "public/images/businesses/freshbite-restaurant.png", size: "1344x768" as const },
  { prompt: "Professional packing and moving service, workers loading boxes into truck, organized logistics, realistic photo, high quality", output: "public/images/businesses/quickmove-packers.png", size: "1344x768" as const },
  { prompt: "Trendy hair salon interior, stylist cutting hair, modern mirrors and chairs, elegant decor, realistic photo, high quality", output: "public/images/businesses/stylehub-salon.png", size: "1344x768" as const },
  { prompt: "Modern gym interior with equipment, dumbbells, treadmill, motivational space, bright lighting, realistic photo, high quality", output: "public/images/businesses/fitzone-gym.png", size: "1344x768" as const },
];

async function main() {
  const zai = await ZAI.create();
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    try {
      console.log(`[${i+1}/6] ${img.output}...`);
      const r = await zai.images.generations.create({ prompt: img.prompt, size: img.size });
      fs.writeFileSync(img.output, Buffer.from(r.data[0].base64, 'base64'));
      console.log(`  OK`);
    } catch(e: any) { console.error(`  FAIL: ${e.message}`); }
  }
  console.log("Done - businesses");
}
main();