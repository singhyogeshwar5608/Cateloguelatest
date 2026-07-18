import os, re

with open('src/lib/store-data.ts') as f:
    lines = f.readlines()

new_lines = []
skip = 0
store_prod = {}
prod_data = {
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
}

def getViews(tr):
    n = int(tr.replace(/,/g, '')) or 100
    return f"{n * 12 + (n * 3))}"

def getFollowers(tr):
    n = int(tr.replace(/,/g, '')) or 100
    return f"{int(n * 0.3) + 50}"

out = []
skip = 0
for i, line in enumerate(lines):
    if skip:
      if '"id":' not in line:
        out.append(line)
        continue
    out.append(line)

# Fix the duplicate "return { products:" that was created
fix = out[-1]
if fix and fix.strip().startswith('return { products:'):
  fix = '  return { products:'
  out.append(fix)

# Remove duplicate "return {"  products:"
final_lines = []
dup_count = 0
for i, line in enumerate(out):
  if i == len(out) - 1 and 'return {' in out[i]:
    dup_count += 1
    if dup_count:
      final_lines.append('  return { products:')
  elif 'return {' in line:
    final_lines.append(line)

fs.writeFileSync('src/lib/store-data.ts', final_lines.join('\n'))
print(f'Fixed {dup_count} duplicates. File: {len(final_lines)} lines')