const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src/components/ReserveForm.tsx');
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/<label className="(.*?)">First Name<\/label>\s*<input type="text" name="firstName"/g, '<label htmlFor="r_firstName" className="$1">First Name</label>\n          <input id="r_firstName" type="text" name="firstName"');
content = content.replace(/<label className="(.*?)">Last Name<\/label>\s*<input type="text" name="lastName"/g, '<label htmlFor="r_lastName" className="$1">Last Name</label>\n          <input id="r_lastName" type="text" name="lastName"');
content = content.replace(/<label className="(.*?)">Email Address<\/label>\s*<input type="email" name="email"/g, '<label htmlFor="r_email" className="$1">Email Address</label>\n          <input id="r_email" type="email" name="email"');
content = content.replace(/<label className="(.*?)">Phone Number<\/label>\s*<input type="tel" name="phone"/g, '<label htmlFor="r_phone" className="$1">Phone Number</label>\n          <input id="r_phone" type="tel" name="phone"');
content = content.replace(/<label className="(.*?)">Property Identification Code \(PIC\)<\/label>\s*<input type="text" name="pic"/g, '<label htmlFor="r_pic" className="$1">Property Identification Code (PIC)</label>\n        <input id="r_pic" type="text" name="pic"');
content = content.replace(/<label className="(.*?)">Calf of Interest<\/label>\s*<select name="calfOfInterest"/g, '<label htmlFor="r_calf" className="$1">Calf of Interest</label>\n        <select id="r_calf" name="calfOfInterest"');
content = content.replace(/<label className="(.*?)">Message or Additional Details<\/label>\s*<textarea name="message"/g, '<label htmlFor="r_message" className="$1">Message or Additional Details</label>\n        <textarea id="r_message" name="message"');

fs.writeFileSync(file, content);
