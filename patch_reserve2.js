const fs = require('fs');
let code = fs.readFileSync('src/app/reserve/page.tsx', 'utf8');

code = code.replace(/-\s*\$\\\{calf\.price\\\}/g, '- ${calf.price}');

fs.writeFileSync('src/app/reserve/page.tsx', code);
