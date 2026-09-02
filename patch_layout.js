const fs = require('fs');
let content = fs.readFileSync('src/app/layout.tsx', 'utf8');

// Insert export const dynamic = 'force-dynamic'; after the imports
content = content.replace("export const metadata = {", "export const dynamic = 'force-dynamic';\nexport const metadata = {");

fs.writeFileSync('src/app/layout.tsx', content);
