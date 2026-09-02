const fs = require('fs');

let content = fs.readFileSync('src/data/calves.ts', 'utf8');

const getSeoDesc = (name, coat, sex) => {
  return `Buy ${name}, a premium ${coat.toLowerCase()} miniature highland ${sex.toLowerCase()} from Dunblane Pastoral Holdings Pty Ltd. DNA verified, halter-trained, and ideal for acreage living. Australia-wide delivery available.`;
};

// Use a replacer function
content = content.replace(/name:\s*'([^']+)',[\s\S]*?sex:\s*'([^']+)',[\s\S]*?coat:\s*'([^']+)',[\s\S]*?desc:\s*'([^']+)'/g, (match, name, sex, coat, oldDesc) => {
  const newDesc = getSeoDesc(name, coat, sex);
  return match.replace(`desc: '${oldDesc}'`, `desc: '${newDesc}'`);
});

fs.writeFileSync('src/data/calves.ts', content, 'utf8');
