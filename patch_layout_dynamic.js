const fs = require('fs');
let content = fs.readFileSync('src/app/layout.tsx', 'utf8');

content = content.replace("export const dynamic = 'force-dynamic';\n", "");

fs.writeFileSync('src/app/layout.tsx', content);
