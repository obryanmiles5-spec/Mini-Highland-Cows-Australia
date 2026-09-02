const fs = require('fs');
let code = fs.readFileSync('src/data/calves.ts', 'utf8');

const additions = `, 'https://drive.google.com/uc?export=view&id=1l2DtI48M_2aok8S9eCzpyHCKUT9D365H', 'https://drive.google.com/uc?export=view&id=1nCt6xj9shFn9f-Uz_7YDD4SgOkFnVl4k'`;

// Regex to find images array with exactly two strings in it
// This catches the images we previously added and the older pairs
const regex = /images:\s*\[('[^']+',\s*'[^']+')\]/g;

code = code.replace(regex, (match, p1) => {
  // Check if it already has our additions to avoid duplicating them
  if (p1.includes('1l2DtI48M_2aok8S9eCzpyHCKUT9D365H')) {
    return match;
  }
  return `images: [${p1}${additions}]`;
});

fs.writeFileSync('src/data/calves.ts', code);
console.log('Patched pair images to have galleries successfully.');
