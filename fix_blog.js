const fs = require('fs');

let pageCode = fs.readFileSync('src/app/blog/[slug]/page.tsx', 'utf8');
pageCode = pageCode.replace(/\\`/g, "`");
pageCode = pageCode.replace(/\\\$/g, "$");
fs.writeFileSync('src/app/blog/[slug]/page.tsx', pageCode);

let indexCode = fs.readFileSync('src/app/blog/page.tsx', 'utf8');
indexCode = indexCode.replace(/\\`/g, "`");
indexCode = indexCode.replace(/\\\$/g, "$");
fs.writeFileSync('src/app/blog/page.tsx', indexCode);

console.log('Fixed escaping.');
