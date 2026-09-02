const fs = require('fs');

let file = 'src/app/contact/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// replace form
const formRegex = /<form className="space-y-4">[\s\S]*?<\/form>/;
content = content.replace(formRegex, '<ContactForm />');

// add import
if (!content.includes('ContactForm')) {
  content = `import ContactForm from '@/components/ContactForm';\n` + content;
}

fs.writeFileSync(file, content);
console.log('Patched contact page');
