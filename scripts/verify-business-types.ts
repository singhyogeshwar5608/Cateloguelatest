// Quick verification script
const stores = [
  { id: "shivam-fast-food", expected: "restaurant", expectedTabs: ["overview", "menu", "products", "reviews"] },
  { id: "freshbite-restaurant", expected: "restaurant", expectedTabs: ["overview", "menu", "products", "reviews"] },
  { id: "green-leaf-cafe", expected: "restaurant", expectedTabs: ["overview", "menu", "products", "reviews"] },
  { id: "vijay-sales", expected: "product_store", expectedTabs: ["overview", "services", "products", "reviews"] },
  { id: "techfix-electronics", expected: "product_store", expectedTabs: ["overview", "services", "products", "reviews"] },
  { id: "quickfix-electronics", expected: "product_store", expectedTabs: ["overview", "services", "products", "reviews"] },
  { id: "carewell-pharmacy", expected: "product_store", expectedTabs: ["overview", "services", "products", "reviews"] },
  { id: "fresh-mart-grocery", expected: "product_store", expectedTabs: ["overview", "services", "products", "reviews"] },
  { id: "look-style-salon", expected: "service_provider", expectedTabs: ["overview", "services", "products", "reviews"] },
  { id: "stylehub-salon", expected: "service_provider", expectedTabs: ["overview", "services", "products", "reviews"] },
  { id: "glow-beauty-parlour", expected: "service_provider", expectedTabs: ["overview", "services", "products", "reviews"] },
  { id: "fitzone-gym", expected: "service_provider", expectedTabs: ["overview", "services", "products", "reviews"] },
  { id: "fitpro-gym", expected: "service_provider", expectedTabs: ["overview", "services", "products", "reviews"] },
  { id: "sharma-dental", expected: "service_provider", expectedTabs: ["overview", "services", "products", "reviews"] },
  { id: "smilecare-dental", expected: "service_provider", expectedTabs: ["overview", "services", "products", "reviews"] },
  { id: "quickmove-packers", expected: "service_provider", expectedTabs: ["overview", "services", "reviews"] },
  { id: "sunrise-public-school", expected: "service_provider", expectedTabs: ["overview", "services", "reviews"] },
  { id: "royal-banquet-hall", expected: "service_provider", expectedTabs: ["overview", "services", "reviews"] },
];

async function main() {
  const { getStoreById, getBusinessType, getBusinessTabs } = await import('../src/lib/store-data.ts');
  
  let pass = 0, fail = 0;
  for (const s of stores) {
    const store = getStoreById(s.id);
    if (!store) { console.log(`FAIL: ${s.id} not found`); fail++; continue; }
    const type = getBusinessType(store.category);
    const tabs = getBusinessTabs(store).map(t => t.id);
    
    const typeOk = type === s.expected;
    const tabsOk = JSON.stringify(tabs) === JSON.stringify(s.expectedTabs);
    
    if (typeOk && tabsOk) {
      pass++;
    } else {
      fail++;
      console.log(`${s.id}:`);
      if (!typeOk) console.log(`  type: got "${type}", expected "${s.expected}"`);
      if (!tabsOk) console.log(`  tabs: got [${tabs}], expected [${s.expectedTabs}]`);
    }
  }
  console.log(`\n${pass} passed, ${fail} failed out of ${stores.length} stores`);
}

main().catch(console.error);