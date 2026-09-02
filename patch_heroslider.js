const fs = require('fs');
let code = fs.readFileSync('src/components/HeroSlider.tsx', 'utf8');

code = code.replace("alt={\\`Highland cattle slide \\${index + 1}\\`}", "alt={`Highland cattle slide ${index + 1}`}");
code = code.replace("className={\\`object-cover object-center transition-opacity duration-1000 \\${index === currentSlide ? 'opacity-100' : 'opacity-0'}\\`}", "className={`object-cover object-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}");

fs.writeFileSync('src/components/HeroSlider.tsx', code);
