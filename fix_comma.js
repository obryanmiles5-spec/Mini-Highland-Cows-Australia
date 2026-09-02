const fs = require('fs');
let code = fs.readFileSync('src/data/calves.ts', 'utf8');

code = code.replace(/temp: 'Confident, friendly\.',\n  }\n\n  \{/g, "temp: 'Confident, friendly.',\n  },\n  {");

fs.writeFileSync('src/data/calves.ts', code);
console.log('Fixed missing comma.');
