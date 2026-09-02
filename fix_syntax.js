const fs = require('fs');
let content = fs.readFileSync('src/app/api/contact/route.ts', 'utf8');

content = content.replace(/  \}, \{ status: 500 \}\);\n  \}\}/, '  }\n}');

fs.writeFileSync('src/app/api/contact/route.ts', content);
