const fs = require('fs');

let file1 = 'src/app/contact/page.tsx';
let content1 = fs.readFileSync(file1, 'utf8');
if (!content1.includes('import ContactForm')) {
  content1 = `import ContactForm from '@/components/ContactForm';\n` + content1;
  fs.writeFileSync(file1, content1);
}

let file2 = 'src/app/reserve/page.tsx';
let content2 = fs.readFileSync(file2, 'utf8');
if (!content2.includes('import ReserveForm')) {
  content2 = `import ReserveForm from '@/components/ReserveForm';\n` + content2;
  fs.writeFileSync(file2, content2);
}
console.log('Fixed imports');
