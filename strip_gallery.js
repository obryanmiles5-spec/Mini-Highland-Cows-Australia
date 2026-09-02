const fs = require('fs');
let code = fs.readFileSync('src/data/calves.ts', 'utf8');

const regex = /images:\s*\[(.*?)\]/gs;

code = code.replace(regex, (match, innerContent) => {
  const firstStringMatch = innerContent.match(/['"](.*?)['"]/);
  if (firstStringMatch) {
    return `images: ['${firstStringMatch[1]}']`;
  }
  return match;
});

fs.writeFileSync('src/data/calves.ts', code);
console.log('Stripped gallery images successfully.');
