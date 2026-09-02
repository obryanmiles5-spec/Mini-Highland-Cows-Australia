const fs = require('fs');
let code = fs.readFileSync('src/data/calves.ts', 'utf8');

const additions = `, 'https://drive.google.com/uc?export=view&id=1l2DtI48M_2aok8S9eCzpyHCKUT9D365H', 'https://drive.google.com/uc?export=view&id=1nCt6xj9shFn9f-Uz_7YDD4SgOkFnVl4k'`;

// Regex to find images array with exactly one string in it
const regex = /images:\s*\[('[^']+')\]/g;
code = code.replace(regex, (match, p1) => {
  return `images: [${p1}${additions}]`;
});

fs.writeFileSync('src/data/calves.ts', code);
console.log('Patched all single images successfully.');
