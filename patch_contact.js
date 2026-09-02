const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src/components/ContactForm.tsx');
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/<label className="(.*?)">First Name<\/label>\s*<input type="text" name="firstName"/g, '<label htmlFor="firstName" className="$1">First Name</label>\n          <input id="firstName" type="text" name="firstName"');
content = content.replace(/<label className="(.*?)">Last Name<\/label>\s*<input type="text" name="lastName"/g, '<label htmlFor="lastName" className="$1">Last Name</label>\n          <input id="lastName" type="text" name="lastName"');
content = content.replace(/<label className="(.*?)">Email Address<\/label>\s*<input type="email" name="email"/g, '<label htmlFor="email" className="$1">Email Address</label>\n        <input id="email" type="email" name="email"');
content = content.replace(/<label className="(.*?)">Message<\/label>\s*<textarea name="message"/g, '<label htmlFor="message" className="$1">Message</label>\n        <textarea id="message" name="message"');

fs.writeFileSync(file, content);
