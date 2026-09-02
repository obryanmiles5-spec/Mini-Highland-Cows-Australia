const fs = require('fs');
let code = fs.readFileSync('next.config.ts', 'utf8');

code = code.replace(
  /hostname: 'drive\.google\.com',\s*\},/,
  `hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'googleusercontent.com',
      },`
);

fs.writeFileSync('next.config.ts', code);
