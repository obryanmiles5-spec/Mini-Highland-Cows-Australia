const fs = require('fs');
let code = fs.readFileSync('src/app/layout.tsx', 'utf8');

const marqueeReplacement = `
          <div className="w-full bg-[#1C3B2B] text-[#FDFBF7] overflow-hidden flex items-center h-10 text-xs sm:text-sm font-medium tracking-wide">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center whitespace-nowrap shrink-0">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="flex items-center shrink-0">
                      <span className="px-4 sm:px-8">Entity name: Dunblane Pastoral Holdings Pty Ltd</span>
                      <span className="text-[#C2673F]">•</span>
                      <span className="px-4 sm:px-8">ABN 81 131 156 922</span>
                      <span className="text-[#C2673F]">•</span>
                      <span className="px-4 sm:px-8">Main business location: QLD 4725</span>
                      <span className="text-[#C2673F]">•</span>
                      <span className="px-4 sm:px-8">10% on crypto</span>
                      <span className="text-[#C2673F]">•</span>
                      <span className="px-4 sm:px-8">Free delivery to same city as address</span>
                      <span className="text-[#C2673F] mr-4 sm:mr-8">•</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>`;

const startIdx = code.indexOf('<div className="w-full bg-[#1C3B2B]');
const endIdx = code.indexOf('          <div className="border-b');
if (startIdx !== -1 && endIdx !== -1) {
  code = code.slice(0, startIdx) + marqueeReplacement.trim() + '\n' + code.slice(endIdx);
  fs.writeFileSync('src/app/layout.tsx', code);
  console.log("Marquee patched successfully.");
} else {
  console.log("Could not find marquee section");
}
