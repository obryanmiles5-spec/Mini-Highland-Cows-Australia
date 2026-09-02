const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

const target = `<video 
                    src={item.src} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />`;

const replacement = `<video 
                    src={item.src + '#t=0.001'}
                    controls
                    playsInline 
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" 
                  />`;

if (code.includes('autoPlay')) {
  // Try to replace
  let newCode = code.replace(target, replacement);
  if (newCode !== code) {
    fs.writeFileSync('src/app/page.tsx', newCode);
    console.log("Video controls added successfully.");
  } else {
    console.log("Target string didn't match exactly. Let me use a regex.");
    const regex = /<video[\s\S]*?\/>/;
    const videoMatch = code.match(regex);
    if (videoMatch) {
      newCode = code.replace(regex, replacement);
      fs.writeFileSync('src/app/page.tsx', newCode);
      console.log("Video replaced using regex.");
    }
  }
}
