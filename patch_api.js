const fs = require('fs');
let content = fs.readFileSync('src/app/api/contact/route.ts', 'utf8');

// Remove data mapping
content = content.replace(/\$\{data\.pic \? `<p><strong>Property Identification Code \(PIC\):<\/strong> \$\{data\.pic\}<\/p>` : ''\}\s*/g, '');

fs.writeFileSync('src/app/api/contact/route.ts', content);
