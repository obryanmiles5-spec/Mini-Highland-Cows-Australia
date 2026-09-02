const fs = require('fs');
let content = fs.readFileSync('src/app/api/contact/route.ts', 'utf8');

content = content.replace(
  "console.error('Error sending email:', error);",
  "console.error('Error sending email. Please check your SMTP credentials (you may need an App Password for Zoho):', error);"
);

fs.writeFileSync('src/app/api/contact/route.ts', content);
