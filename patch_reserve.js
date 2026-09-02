const fs = require('fs');
let content = fs.readFileSync('src/components/ReserveForm.tsx', 'utf8');

// Remove data mapping
content = content.replace(/pic:\s*formData\.get\('pic'\),\n?\s*/g, '');

// Remove the whole <div>...r_pic...</div>
content = content.replace(/<div>\s*<label htmlFor="r_pic"[\s\S]*?<\/div>/g, '');

fs.writeFileSync('src/components/ReserveForm.tsx', content);
