const fs = require('fs');
let c = fs.readFileSync('next.config.ts', 'utf8');
c = c.replace(
  "{ protocol: 'https', hostname: '**.googleusercontent.com' },",
  "{ protocol: 'https', hostname: '**.googleusercontent.com' },\n      { protocol: 'https', hostname: '**.usercontent.google.com' },"
);
fs.writeFileSync('next.config.ts', c);
