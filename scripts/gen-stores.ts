import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

const images = [
  { prompt: "Indian fast food restaurant interior, colorful, warm lighting, burgers and chaat on tables, realistic photo, high quality", output: "public/images/stores/shivam-fast-food.png", size: "1024x1024" as const },
  { prompt: "Modern beauty salon interior, stylish hair styling chairs, mirrors, elegant decor, soft pink lighting, professional photography, high quality", output: "public/images/stores/look-style-salon.png", size: "1024x1024" as const },
  { prompt: "Well organized pharmacy store interior, medicine shelves, clean white interiors, bright lighting, professional photography, high quality", output: "public/images/stores/carewell-pharmacy.png", size: "1024x1024" as const },
  { prompt: "Modern Indian grocery supermarket aisle, fresh vegetables and fruits, organized shelves, bright lighting, realistic photo, high quality", output: "public/images/stores/fresh-mart-grocery.png", size: "1024x1024" as const },
  { prompt: "Modern electronics mobile phone shop interior, smartphones on display, LED lights, sleek counters, realistic photo, high quality", output: "public/images/stores/quickfix-electronics.png", size: "1024x1024" as const },
  { prompt: "Cozy green leaf cafe interior, plants on walls, wooden tables, coffee cups, warm ambient lighting, realistic photo, high quality", output: "public/images/stores/green-leaf-cafe.png", size: "1024x1024" as const },
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
  console.log("Done - stores");
}
main();