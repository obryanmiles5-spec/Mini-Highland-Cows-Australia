const fs = require('fs');
let code = fs.readFileSync('src/data/calves.ts', 'utf8');

// The issue might be missing comma between the 24th calf and the 25th calf.
code = code.replace(/temp: 'Confident, friendly\.',\s*\}\s*\{/g, "temp: 'Confident, friendly.',\n  },\n  {");

fs.writeFileSync('src/data/calves.ts', code);
console.log('Fixed syntax error!');
