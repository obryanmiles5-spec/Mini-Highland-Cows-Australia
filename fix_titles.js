const fs = require('fs');

function fix(file) {
  let c = fs.readFileSync(file, 'utf8');
  c = c.replace(/title:\s*'Available Miniature Highland Cows For Sale \| Micro title: '"'"'Miniature Highland Cows \| Dunblane Pastoral'"'"', Teacup Calves'/g, "title: 'Available Miniature Highland Cows For Sale | Micro & Teacup Calves'");
  c = c.replace(/title:\s*'Adoption title: '"'"'Miniature Highland Cows \| Dunblane Pastoral'"'"', Sales Process \| Buying a Miniature Highland Cow'/g, "title: 'Adoption & Sales Process | Buying a Miniature Highland Cow'");
  fs.writeFileSync(file, c);
}

fix('src/app/calves/page.tsx');
fix('src/app/process/page.tsx');
