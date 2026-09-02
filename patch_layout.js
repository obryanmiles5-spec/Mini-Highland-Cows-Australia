const fs = require('fs');
let code = fs.readFileSync('src/app/layout.tsx', 'utf8');

const colorfulLogoUrl = 'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&w=1200&q=80';

// Replace the OG image
code = code.replace(
  /url:\s*'https:\/\/images\.unsplash\.com\/photo-1549429282-59599553bb44\?auto=format&fit=crop&w=1200&q=80'/g,
  `url: '${colorfulLogoUrl}'`
);

// Replace Twitter image if present
code = code.replace(
  /images:\s*\['https:\/\/images\.unsplash\.com\/photo-1549429282-59599553bb44\?auto=format&fit=crop&w=1200&q=80'\]/g,
  `images: ['${colorfulLogoUrl}']`
);

fs.writeFileSync('src/app/layout.tsx', code);
