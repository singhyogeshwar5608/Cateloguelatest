const fs = require('fs');
const result = fs.readFileSync('src/lib/store-data.ts', 'utf8');

const productEntries = {
  "shivam-fast-food": ["sff-pavbhaji", "sff-chole", "sff-paneer", "sff-manchurian", "sff-thali", "sff-friedrice"],
  "look-style-salon": ["lss-waxing", "lss-facial", "lss-haircolor", "lss-keratin", "lss-haircut", "lss-bridal"],
  "carewell-pharmacy": ["cwp-vitc", "cwp-protein", "cwp-firstaid", "cwp-ors"],
  "fresh-mart-grocery": ["fmg-atta", "fmg-oil", "fmg-dal", "fmg-rice", "fmg-kit"],
  "quickfix-electronics": ["qfe-tempered", "qfe-case", "qfe-charger", "qfe-earbuds", "qfe-cable"],
  "green-leaf-cafe": ["glc-avocado", "glc-bowl", "glc-juice", "glc-coffee", "glc-acai"],
  "stylehub-salon": ["shs-keratin", "shs-facial", "shs-haircut", "shs-coloring", "shs-beard"],
  "freshbite-restaurant": ["fbr-biryani", "fbr-butter", "fbr-paneer", "fbr-thali", "fbr-naan", "fbr-coldcoffee"],
  "fitzone-gym": ["fzg-monthly", "fzg-personal", "fzg-zumba", "fzg-annual", "fzg-shake"],
  "techfix-electronics": ["tfe-iphone", "tfe-samsung", "tfe-battery", "tfe-data", "tfe-accessory"],
  "quickmove-packers": ["qmp-local", "qmp-office", "qmp-car", "qmp-warehouse", "qmp-pack"],
  "sharma-dental": ["sdc-checkup", "sdc-scaling", "sdc-implant", "sdc-whitening", "sdc-braces"],
  "sunrise-public-school": ["sps-nursery", "sps-primary", "sps-camp", "sps-uniform", "sps-books"],
  "glow-beauty-parlour": ["gbp-facial", "gbp-bridal", "gbp-wax", "gbp-manicure", "gbp-hairspa"],
  "vijay-sales": ["vs-tv", "vs-ac", "vs-washing", "vs-mobile", "vs-laptop"],
  "royal-banquet-hall": ["rbh-wedding", "rbh-corporate", "rbh-birthday", "rbh-decor", "rbh-dj"],
  "smilecare-dental": ["scd-checkup", "scd-cleaning", "scd-whitening", "scd-implant", "scd-crown"],
  "fitpro-gym": ["fpg-monthly", "fpg-spa", "fpg-zumba", "fpg-annual", "fpg-shake"],
};

function getViews(totalRatings) {
  const num = parseInt(totalRatings.replace(/,/g, '')) || 100;
  return (num * 12 + Math.floor(Math.random() * num * 3)).toLocaleString('en-IN');
}
function getFollowers(totalRatings) {
  const num = parseInt(totalRatings.replace(/,/g, '')) || 100;
  return (Math.floor(num * 0.3) + 50).toLocaleString('en-IN');
}

let updated = result;

for (const [storeId, prodIds] of Object.entries(productEntries)) {
  const prodStr = prodIds.map(pid => `products["${pid}"]`).join(',\n    ');
  const rMatch = updated.match(new RegExp(`"${storeId}"[\\s\\S]*?rating: "(\\d+\\.\\d+)"`));
  const totalRatings = rMatch ? rMatch[1] : '100';
  const views = getViews(totalRatings);
  const followers = getFollowers(totalRatings);

  // Replace: photos: ["storeId.jpg"]  =>  photos: ["storeId.jpg"] + products + views + followers
  updated = updated.replace(
    `  photos: ["${storeId}.jpg"]`,
    `  photos: ["${storeId}.jpg"];\n  products: [\n    ${prodStr}\n  ],\n  views: "${views}";\n  followers: "${followers}";`
  );
}

fs.writeFileSync('src/lib/store-data.ts', updated);
console.log('DONE - All 18 stores updated with products, views, followers');