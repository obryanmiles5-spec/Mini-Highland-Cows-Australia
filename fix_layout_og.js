const fs = require('fs');
let c = fs.readFileSync('src/app/layout.tsx', 'utf8');
c = c.replace(/openGraph: \{/, "openGraph: {\n    type: 'website',\n    locale: 'en_AU',\n    siteName: 'Dunblane Highlands',");
fs.writeFileSync('src/app/layout.tsx', c);
