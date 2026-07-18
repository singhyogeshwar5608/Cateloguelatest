import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

const images = [
  { prompt: "Bollywood action movie poster, intense male lead in forest with axe, dramatic lighting, fire background, cinematic, high quality", output: "public/images/movies/pushpa2.png", size: "768x1344" as const },
  { prompt: "Bollywood action comedy movie poster, police officer with lion, dramatic orange lighting, action pose, cinematic, high quality", output: "public/images/movies/singham-again.png", size: "768x1344" as const },
  { prompt: "Bollywood horror comedy movie poster, haunted palace with ghost, mysterious blue lighting, spooky yet funny, cinematic, high quality", output: "public/images/movies/bhool-bhulaiyaa3.png", size: "768x1344" as const },
  { prompt: "India Gate Delhi landmark at sunset, golden hour, beautiful sky, iconic Indian monument, professional photography, high quality", output: "public/images/tourist/delhi.png", size: "1344x768" as const },
  { prompt: "Taj Mahal Agra, beautiful white marble mausoleum, reflecting pool, blue sky, iconic Indian landmark, professional photography, high quality", output: "public/images/tourist/agra.png", size: "1344x768" as const },
  { prompt: "Rishikesh India, Ganges river with Lakshman Jhula bridge, green hills, spiritual atmosphere, professional photography, high quality", output: "public/images/tourist/rishikesh.png", size: "1344x768" as const },
  { prompt: "Dehradun hill station India, lush green mountains, misty morning, scenic Himalayan view, professional photography, high quality", output: "public/images/tourist/dehradun.png", size: "1344x768" as const },
];

async function main() {
  const zai = await ZAI.create();
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    try {
      console.log(`[${i+1}/7] ${img.output}...`);
      const r = await zai.images.generations.create({ prompt: img.prompt, size: img.size });
      fs.writeFileSync(img.output, Buffer.from(r.data[0].base64, 'base64'));
      console.log(`  OK`);
    } catch(e: any) { console.error(`  FAIL: ${e.message}`); }
  }
  console.log("Done - movies & tourist");
}
main();