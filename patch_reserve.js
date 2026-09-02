const fs = require('fs');

let file = 'src/app/reserve/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// replace form
const formRegex = /<form className="space-y-6">[\s\S]*?<\/form>/;
content = content.replace(formRegex, '<ReserveForm />');

// add import
if (!content.includes('ReserveForm')) {
  content = `import ReserveForm from '@/components/ReserveForm';\n` + content;
}

fs.writeFileSync(file, content);
console.log('Patched reserve page');
