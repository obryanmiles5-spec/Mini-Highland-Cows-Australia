const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Add import
if (!code.includes('import HeroSlider')) {
  code = code.replace("import ReviewsSlider from '@/components/ReviewsSlider';", "import ReviewsSlider from '@/components/ReviewsSlider';\nimport HeroSlider from '@/components/HeroSlider';");
}

// 2. Replace Hero Section
const heroRegex = /{\/\* Hero Section \*\/}[\s\S]*?<\/section>/;
code = code.replace(heroRegex, "{/* Hero Section */}\n      <HeroSlider />");

// 3. Replace Gallery Section
const galleryRegex = /<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-\[250px\] md:auto-rows-\[300px\]">[\s\S]*?<\/div>\s*<\/section>/;

const newGallery = `<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {[
            'https://drive.google.com/uc?export=view&id=1l2DtI48M_2aok8S9eCzpyHCKUT9D365H',
            'https://drive.google.com/uc?export=view&id=1nCt6xj9shFn9f-Uz_7YDD4SgOkFnVl4k',
            'https://drive.google.com/uc?export=view&id=1DhPsT6edcCZa452IkqhX6IXAgO2pDbew',
            'https://drive.google.com/uc?export=view&id=1Jj3rBhq6oav7vaMo0HkiDl_ZbRVQGcMZ',
            'https://drive.google.com/uc?export=view&id=10PLbbX5Z_zIl0BwGoYMRXjnjlb-Fz6Ij',
            'https://drive.google.com/uc?export=view&id=1b6JRarh929BTLZIV4HEhgomYEcPNg9k9'
          ].map((src, i) => {
            let itemClass = "relative rounded-sm overflow-hidden group";
            if (i === 0) itemClass += " sm:col-span-2 md:row-span-2"; // 1st item big square
            if (i === 3) itemClass += " md:col-span-2"; // 4th item wide rectangle
            
            return (
              <div key={i} className={itemClass}>
                <Image 
                  src={src} 
                  alt={\`Dunblane Highlands Ranch Gallery Image \${i + 1}\`} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
            );
          })}
        </div>
      </section>`;

code = code.replace(galleryRegex, newGallery);

fs.writeFileSync('src/app/page.tsx', code);
console.log("Patched page.tsx successfully.");
