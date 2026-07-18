import { getServiceCategory, getServiceProviders, getServiceProviderById } from '../src/lib/service-category-data';
import { getStoreById } from '../src/lib/store-data';

const cat = getServiceCategory('ac-repair');
console.log('Category:', cat?.label, '-', cat?.icon);

const providers = getServiceProviders('ac-repair');
console.log('Providers:', providers.length);
console.log('First:', providers[0]?.name, '|', providers[0]?.id, '|', providers[0]?.area);

const single = getServiceProviderById('ac-repair-expert-mumbai');
console.log('Lookup:', single?.name, '|', single?.services?.length, 'services');

console.log('Store DB:', getStoreById('ac-repair-expert-mumbai'), '(expected undefined)');
console.log('Combined:', (getStoreById('ac-repair-expert-mumbai') || getServiceProviderById('ac-repair-expert-mumbai'))?.name);

// Test all categories
const slugs = ['ac-repair','painters','pest-control','plumbers','carpenters','electricians','salons-at-home','deep-cleaning'];
for (const s of slugs) {
  const c = getServiceCategory(s);
  const p = getServiceProviders(s);
  console.log(`${s}: ${c?.label} - ${p.length} providers`);
}