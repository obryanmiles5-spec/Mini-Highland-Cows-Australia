const fs = require('fs');
let c = fs.readFileSync('src/app/layout.tsx', 'utf8');
if (!c.includes('twitter: {')) {
  c = c.replace(/openGraph: \{/, "twitter: {\n    card: 'summary_large_image',\n    title: 'Miniature Highland Cows for Sale Australia | Micro, Teacup & Mini Calves | Dunblane Highlands',\n    description: 'Looking for a miniature highland cow for sale in Australia? We breed premium, DNA-verified, halter-trained micro miniature and teacup highland calves.',\n    images: ['https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&w=1200&q=80'],\n  },\n  openGraph: {");
  fs.writeFileSync('src/app/layout.tsx', c);
}
