const fs = require('fs');
const { execSync } = require('child_process');

const files = execSync('find src -type f -name "*.ts" -o -name "*.tsx"').toString().split('\n').filter(Boolean);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  content = content.replace(/https:\/\/drive\.google\.com\/uc\?export=view&id=([A-Za-z0-9_-]+)/g, "https://drive.google.com/thumbnail?id=$1&sz=w1000");

  if (original !== content) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
}
