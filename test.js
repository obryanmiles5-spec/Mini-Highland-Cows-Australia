const fs = require('fs');
let code = fs.readFileSync('src/data/calves.ts', 'utf8');
console.log(code.match(/temp: 'Confident, friendly\.',\n  },\n  \{/));
