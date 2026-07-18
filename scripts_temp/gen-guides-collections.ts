import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

const images = [
  { prompt: "Best restaurants in Mumbai, aerial view of Mumbai skyline, food spread, warm lighting, professional photography, high quality", output: "public/images/guides/restaurants-mumbai.png", size: "1344x768" as const },
  { prompt: "Top schools in Delhi, beautiful school building with students, green campus, modern architecture, professional photography, high quality", output: "public/images/guides/schools-delhi.png", size: "1344x768" as const },
  { prompt: "Beautiful Indian wedding decoration with flowers and lights, grand mandap setup, elegant arrangement, professional photography, high quality", output: "public/images/collections/wedding-planners.png", size: "1344x768" as const },
  { prompt: "Modern luxury home interior design, minimalist living room, elegant furniture, warm lighting, professional interior photography, high quality", output: "public/images/collections/home-interior.png", size: "1344x768" as const },
];

async function main() {
  const zai = await ZAI.create();
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    try {
      console.log(`[${i+1}/4] ${img.output}...`);
      const r = await zai.images.generations.create({ prompt: img.prompt, size: img.size });
      fs.writeFileSync(img.output, Buffer.from(r.data[0].base64, 'base64'));
      console.log(`  OK`);
    } catch(e: any) { console.error(`  FAIL: ${e.message}`); }
  }
  console.log("Done - guides & collections");
}
main();