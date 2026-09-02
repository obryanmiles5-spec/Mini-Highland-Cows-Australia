const fs = require('fs');
let content = fs.readFileSync('src/app/sitemap.ts', 'utf8');

content = content.replace(/images: \[\s*\{\s*url: baseUrl \+ calf\.images\[0\],\s*title: calf\.name,\s*\}\s*\]/, "images: [baseUrl + calf.images[0]]");
content = content.replace(/images: post\.image \? \[\s*\{\s*url: baseUrl \+ post\.image,\s*title: post\.title,\s*\}\s*\] : \[\]/, "images: post.image ? [baseUrl + post.image] : []");

fs.writeFileSync('src/app/sitemap.ts', content);
