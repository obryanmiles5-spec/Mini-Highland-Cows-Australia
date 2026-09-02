const fs = require('fs');
let code = fs.readFileSync('src/app/reserve/page.tsx', 'utf8');

// Add import
if (!code.includes('CALVES_DATA')) {
  code = code.replace(
    "import Link from 'next/link';",
    "import Link from 'next/link';\nimport { CALVES_DATA } from '@/data/calves';"
  );
}

// Replace the hardcoded options
const optionsRegex = /<option value="hamish">[\s\S]*?<option value="fiona">[^<]*<\/option>/;
const dynamicOptions = `{CALVES_DATA.filter((calf) => calf.status === 'Available').map((calf) => (
                  <option key={calf.id} value={calf.ear_tag}>
                    {calf.name} ({calf.ear_tag}) - $\\{calf.price\\}
                  </option>
                ))}`;

code = code.replace(optionsRegex, dynamicOptions);
fs.writeFileSync('src/app/reserve/page.tsx', code);
