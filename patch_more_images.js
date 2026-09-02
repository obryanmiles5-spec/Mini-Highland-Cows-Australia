const fs = require('fs');
let code = fs.readFileSync('src/data/calves.ts', 'utf8');

const galleryAdditions = `, 'https://drive.google.com/uc?export=view&id=1l2DtI48M_2aok8S9eCzpyHCKUT9D365H', 'https://drive.google.com/uc?export=view&id=1nCt6xj9shFn9f-Uz_7YDD4SgOkFnVl4k', 'https://drive.google.com/uc?export=view&id=1DhPsT6edcCZa452IkqhX6IXAgO2pDbew', 'https://drive.google.com/uc?export=view&id=1Jj3rBhq6oav7vaMo0HkiDl_ZbRVQGcMZ'`;

code = code.replace(
  /images: \['https:\/\/drive\.google\.com\/uc\?export=view&id=12m1WrJ-MRmGEAPYCUZvgMEvP6i9HR6Kt'\],/,
  `images: ['https://drive.google.com/uc?export=view&id=12m1WrJ-MRmGEAPYCUZvgMEvP6i9HR6Kt'${galleryAdditions}],`
);

code = code.replace(
  /images: \['https:\/\/drive\.google\.com\/uc\?export=view&id=1Vz0LXrKqADM0Yp1_NnKQPRG2zI30egsf'\],/,
  `images: ['https://drive.google.com/uc?export=view&id=1Vz0LXrKqADM0Yp1_NnKQPRG2zI30egsf'${galleryAdditions}],`
);

fs.writeFileSync('src/data/calves.ts', code);
console.log('Added gallery images successfully.');
