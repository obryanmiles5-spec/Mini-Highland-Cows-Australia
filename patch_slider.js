const fs = require('fs');
const file = 'src/components/ReviewsSlider.tsx';
let c = fs.readFileSync(file, 'utf8');
c = c.replace(/<button\s+key=\{idx\}\s+onClick=\{.*?\}/g, (match) => match + '\n            aria-label={`Go to slide ${idx + 1}`}');
fs.writeFileSync(file, c);
