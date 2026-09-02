const fs = require('fs');
let content = fs.readFileSync('src/app/api/contact/route.ts', 'utf8');

content = content.replace(
  "} catch (error) {",
  "} catch (error: any) {"
);

fs.writeFileSync('src/app/api/contact/route.ts', content);
