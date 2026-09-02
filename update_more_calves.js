const fs = require('fs');
let code = fs.readFileSync('src/data/calves.ts', 'utf8');

function replaceImage(name, newImageId) {
  const regex = new RegExp(`(name:\\s*'${name}',[\\s\\S]*?images:\\s*\\[).*?(\\])`);
  code = code.replace(regex, `$1'https://drive.google.com/uc?export=view&id=${newImageId}'$2`);
}

replaceImage('Fergus Silvercrest', '1MygMRHaueDf6K-jkb_AgJ1raulqKxcjc');
replaceImage('Maisie Belle', '1F27Zd_0c3mAP-aKXHqtbcmkjjGTS6kOk');
replaceImage('Morag Honey', '1ewFCocgaAL1bbxcdx-PDxNUL2obF2KVv');
replaceImage('Fiona Silvermist', '1v3fljaEMpGJj9zVJ0UkPHWFm-IruVe8y');
replaceImage('Callum Snow', '19aVrI240d13lT-rlQjLtM3CZIQdt3jg4');

fs.writeFileSync('src/data/calves.ts', code);
console.log('Updated 5 calves images successfully.');
