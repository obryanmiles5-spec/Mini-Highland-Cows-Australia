const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace the first featured calf image with priority
content = content.replace(
  /<Image src=\{calf\.images\[0\]\} alt=\{calf\.name\} fill className="object-cover group-hover:scale-105 transition-transform duration-500"\s*referrerPolicy="no-referrer" \/>/,
  '<Image src={calf.images[0]} alt={calf.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" priority={index < 4} />'
);

// We should map index in featuredCalves
content = content.replace(
  '{featuredCalves.map((calf) => (',
  '{featuredCalves.map((calf, index) => ('
);

fs.writeFileSync('src/app/page.tsx', content);
