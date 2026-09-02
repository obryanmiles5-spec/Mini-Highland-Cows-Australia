const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-\[250px\] md:auto-rows-\[300px\]">[\s\S]*?<\/div>\s*<\/section>/;

const newGrid = `<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {[
            { type: 'video', src: 'https://drive.google.com/uc?export=view&id=1CPbeYJ3jyT4WWXclRjJI5Vd8Bh6j0BP7' },
            { type: 'video', src: 'https://drive.google.com/uc?export=view&id=1uQxZzPUrbv2vN1KX6KclB4ZFrBcJEHVS' },
            { type: 'image', src: 'https://drive.google.com/uc?export=view&id=1Jj3rBhq6oav7vaMo0HkiDl_ZbRVQGcMZ' },
            { type: 'image', src: 'https://drive.google.com/uc?export=view&id=10PLbbX5Z_zIl0BwGoYMRXjnjlb-Fz6Ij' },
            { type: 'image', src: 'https://drive.google.com/uc?export=view&id=1b6JRarh929BTLZIV4HEhgomYEcPNg9k9' }
          ].map((item, i) => {
            let itemClass = "relative rounded-sm overflow-hidden group";
            if (i === 0) itemClass += " sm:col-span-2 md:row-span-2"; // 1st item big square
            if (i === 3) itemClass += " md:col-span-2"; // 4th item wide rectangle
            
            return (
              <div key={i} className={itemClass}>
                {item.type === 'video' ? (
                  <video 
                    src={item.src} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                ) : (
                  <Image 
                    src={item.src} 
                    alt={\`Dunblane Highlands Ranch Gallery Image \${i + 1}\`} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>`;

if(match = code.match(regex)) {
  code = code.replace(regex, newGrid);
  fs.writeFileSync('src/app/page.tsx', code);
  console.log('Replaced grid media successfully.');
} else {
  console.log('Could not find grid media block');
}
