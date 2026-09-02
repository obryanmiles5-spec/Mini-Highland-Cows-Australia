const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-\[250px\] md:auto-rows-\[300px\]">[\s\S]*?<\/div>\s*<\/section>/;

const newGrid = `<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'https://drive.google.com/uc?export=view&id=1l2DtI48M_2aok8S9eCzpyHCKUT9D365H',
            'https://drive.google.com/uc?export=view&id=1nCt6xj9shFn9f-Uz_7YDD4SgOkFnVl4k',
            'https://drive.google.com/uc?export=view&id=1DhPsT6edcCZa452IkqhX6IXAgO2pDbew',
            'https://drive.google.com/uc?export=view&id=1Jj3rBhq6oav7vaMo0HkiDl_ZbRVQGcMZ',
            'https://drive.google.com/uc?export=view&id=10PLbbX5Z_zIl0BwGoYMRXjnjlb-Fz6Ij',
            'https://drive.google.com/uc?export=view&id=1b6JRarh929BTLZIV4HEhgomYEcPNg9k9'
          ].map((src, i) => (
            <div key={i} className="relative aspect-square rounded-sm overflow-hidden group">
              <Image 
                src={src} 
                alt={\`Dunblane Highlands Ranch Gallery Image \${i + 1}\`} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
          ))}
        </div>
      </section>`;

if (code.match(regex)) {
  code = code.replace(regex, newGrid);
  fs.writeFileSync('src/app/page.tsx', code);
  console.log('Replaced grid successfully.');
} else {
  console.log('Could not find grid block to replace.');
}
