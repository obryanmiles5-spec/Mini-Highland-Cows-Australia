const fs = require('fs');
let code = fs.readFileSync('src/data/calves.ts', 'utf8');

// Replace Hamish image
code = code.replace(
  /images: \['https:\/\/images\.unsplash\.com\/photo-1596733430284-f7437764b1a9\?auto=format&fit=crop&w=800&q=80'\],/,
  "images: ['https://drive.google.com/uc?export=view&id=12m1WrJ-MRmGEAPYCUZvgMEvP6i9HR6Kt'],"
);

// Replace Bonnie Lass image
code = code.replace(
  /images: \['https:\/\/images\.unsplash\.com\/photo-1570042225831-d98fa7577f1e\?auto=format&fit=crop&w=800&q=80'\],/,
  "images: ['https://drive.google.com/uc?export=view&id=1Vz0LXrKqADM0Yp1_NnKQPRG2zI30egsf'],"
);

fs.writeFileSync('src/data/calves.ts', code);
console.log('Calves images patched successfully.');
