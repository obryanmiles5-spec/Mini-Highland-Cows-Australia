const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldGrid = `<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            'https://drive.google.com/uc?export=view&id=1CPbeYJ3jyT4WWXclRjJI5Vd8Bh6j0BP7',
            'https://drive.google.com/uc?export=view&id=1uQxZzPUrbv2vN1KX6KclB4ZFrBcJEHVS',
            'https://drive.google.com/uc?export=view&id=1Jj3rBhq6oav7vaMo0HkiDl_ZbRVQGcMZ',
            'https://drive.google.com/uc?export=view&id=10PLbbX5Z_zIl0BwGoYMRXjnjlb-Fz6Ij',
            'https://drive.google.com/uc?export=view&id=1b6JRarh929BTLZIV4HEhgomYEcPNg9k9'
          ].map((src, i) => (
            <div key={i} className="relative aspect-square md:aspect-[4/5] rounded-sm overflow-hidden group">
              <Image src={src} alt={\`Dunblane Highlands Ranch Gallery Image \${i + 1}\`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>`;

const newGrid = `<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {[
            'https://drive.google.com/uc?export=view&id=1CPbeYJ3jyT4WWXclRjJI5Vd8Bh6j0BP7',
            'https://drive.google.com/uc?export=view&id=1uQxZzPUrbv2vN1KX6KclB4ZFrBcJEHVS',
            'https://drive.google.com/uc?export=view&id=1Jj3rBhq6oav7vaMo0HkiDl_ZbRVQGcMZ',
            'https://drive.google.com/uc?export=view&id=10PLbbX5Z_zIl0BwGoYMRXjnjlb-Fz6Ij',
            'https://drive.google.com/uc?export=view&id=1b6JRarh929BTLZIV4HEhgomYEcPNg9k9'
          ].map((src, i) => {
            let itemClass = "relative rounded-sm overflow-hidden group";
            if (i === 0) itemClass += " sm:col-span-2 md:row-span-2"; // 1st item big square
            if (i === 3) itemClass += " md:col-span-2"; // 4th item wide rectangle
            
            return (
              <div key={i} className={itemClass}>
                <Image src={src} alt={\`Dunblane Highlands Ranch Gallery Image \${i + 1}\`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            );
          })}
        </div>`;

if(code.includes('grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4')) {
  // Regex to match the whole block since template strings can have slight whitespace differences
  const regex = /<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">[\s\S]*?<\/div>\s*<\/section>/;
  const match = code.match(regex);
  if(match) {
    code = code.replace(regex, newGrid + '\n      </section>');
    fs.writeFileSync('src/app/page.tsx', code);
    console.log('Replaced grid successfully.');
  } else {
    console.log('Could not find exact block to replace');
  }
} else {
  console.log('Could not find start of grid block');
}
