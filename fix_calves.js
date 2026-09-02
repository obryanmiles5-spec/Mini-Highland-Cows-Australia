const fs = require('fs');
let code = fs.readFileSync('src/app/calves/page.tsx', 'utf8');
code = code.replace(/\\n/g, '\n');
fs.writeFileSync('src/app/calves/page.tsx', code);
