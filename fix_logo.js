const fs = require('fs');

let layout = fs.readFileSync('src/app/layout.tsx', 'utf8');

const oldLogo = `const CowLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 10c-2.5 0-3.5 2.5-3 4s4 2 4 2 M19 10c2.5 0 3.5 2.5 3 4s-4 2-4 2" />
    <path d="M6 16c0 3 2 5 6 5s6-2 6-5 M9 16v-2 M15 16v-2" />
    <path d="M8 8c0-3 2.5-5 4-5s4 2 4 5" />
    <circle cx="12" cy="18" r="1.5" />
  </svg>
);`;

const newLogo = `const CowLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 9C4.5 7.5 2 9 2 11.5c0 1.5 1.5 2 2.5 1" />
    <path d="M16 9c3.5-1.5 6 0 6 2.5 0 1.5-1.5 2-2.5 1" />
    <path d="M8 9c1-2 3-3 4-3s3 1 4 3c1 1.5 1.5 3 1.5 5 0 3-2 5-5 5s-5-2-5-5c0-2 .5-3.5 1.5-5z" />
    <path d="M12 6c-1 2-2 3-3 4" />
    <path d="M12 6v4.5" />
    <path d="M12 6c1 2 2 3 3 4" />
    <ellipse cx="12" cy="16" rx="2.5" ry="1.5" />
    <circle cx="11" cy="16" r="0.5" fill="currentColor" />
    <circle cx="13" cy="16" r="0.5" fill="currentColor" />
  </svg>
);`;

layout = layout.replace(oldLogo, newLogo);
fs.writeFileSync('src/app/layout.tsx', layout);
