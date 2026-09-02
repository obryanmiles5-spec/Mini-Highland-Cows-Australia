const fs = require('fs');

function fix(file) {
  let c = fs.readFileSync(file, 'utf8');
  c = c.replace(/Adoption title: 'Miniature Highland Cows \| Dunblane Pastoral', Sales Process \| Buying a Miniature Highland Cow/g, "Adoption & Sales Process | Buying a Miniature Highland Cow");
  fs.writeFileSync(file, c);
}

fix('src/app/process/page.tsx');
