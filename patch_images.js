const fs = require('fs');
const { execSync } = require('child_process');

const files = execSync('find src -type f -name "*.tsx"').toString().split('\n').filter(Boolean);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // A simple regex to add referrerPolicy="no-referrer" to <Image ... />
  // We need to be careful to only add it if it's not already there.
  content = content.replace(/<Image\s+([^>]*?)>/g, (match, p1) => {
    if (p1.includes('referrerPolicy')) return match;
    
    // Check if it ends with /
    if (p1.endsWith('/')) {
        return `<Image ${p1.slice(0, -1)} referrerPolicy="no-referrer" />`;
    } else {
        return `<Image ${p1} referrerPolicy="no-referrer">`;
    }
  });

  if (original !== content) {
    fs.writeFileSync(file, content);
    console.log(`Patched ${file}`);
  }
}
