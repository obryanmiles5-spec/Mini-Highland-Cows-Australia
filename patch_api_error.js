const fs = require('fs');
let content = fs.readFileSync('src/app/api/contact/route.ts', 'utf8');

content = content.replace(
  "return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });",
  "return NextResponse.json({ success: false, message: 'Failed to send email: ' + (error.message || error.toString()) }, { status: 500 });"
);

fs.writeFileSync('src/app/api/contact/route.ts', content);
