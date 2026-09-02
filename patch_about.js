const fs = require('fs');

let content = fs.readFileSync('src/app/about/page.tsx', 'utf8');

const oldReturn = content.slice(content.indexOf('return ('));
const newReturn = `return (
    <div className="bg-[#FDFBF7] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-serif text-5xl font-bold text-[#1C3B2B] mb-8 text-center">About Dunblane Highlands</h1>
        
        <div className="relative aspect-[21/9] mb-12 w-full overflow-hidden rounded-sm shadow-xl">
          <Image src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80"
            alt="Dunblane Highlands Farm"
            fill
            className="object-cover"
           referrerPolicy="no-referrer" />
        </div>

        <div className="prose prose-lg prose-[#1E293B] max-w-none">
          <p className="text-xl leading-relaxed text-[#1E293B]/80 font-light mb-8 text-center">
            Dunblane Highlands Australia is a premier, family-operated breeder of pedigree Miniature Highland Cattle, 
            located in the picturesque rolling hills of Queensland. We are passionately dedicated to preserving the 
            rugged heritage of the Scottish Highland breed while intentionally selecting for smaller, more manageable 
            frames perfectly suited for modern Australian lifestyle properties and hobby farms.
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mt-12 mb-6 border-b border-[#FDFBF7]/10 pb-4">Our Heritage & Breeding Philosophy</h2>
          <p className="mb-6 text-[#1E293B]/80 leading-relaxed">
            Our journey began with a deep appreciation for the majestic Scottish Highland—a breed renowned for its hardiness, intelligence, and iconic shaggy coat. However, traditional Highlands require significant acreage and specialized heavy-duty infrastructure. We saw a growing need for cattle that possessed all the charm and docility of a Highland but on a smaller, more accessible scale.
          </p>
          <p className="mb-6 text-[#1E293B]/80 leading-relaxed">
            Our foundation herd was meticulously curated from top-tier, proven bloodlines across Australia and internationally. We prioritize three core pillars: structural correctness, exceptionally docile temperaments, and classic Highland aesthetics (including proportional leg length and perfect horn sets). We <strong>never</strong> compromise on health to achieve a smaller size. Every single animal in our breeding program is DNA parentage verified and rigorously tested negative for Chondrodysplasia (the bulldog dwarfism gene), ensuring our miniature size is natural and healthy.
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mt-12 mb-6 border-b border-[#FDFBF7]/10 pb-4">Pasture Raised & Handled Daily</h2>
          <p className="mb-6 text-[#1E293B]/80 leading-relaxed">
            Our cattle are raised holistically on lush, open, rotationally-grazed pastures and are fully acclimatized to the diverse Australian climate. From the cold, crisp winter mornings to the humid summer afternoons, our Highlands are robust and adaptable. 
          </p>
          <p className="mb-6 text-[#1E293B]/80 leading-relaxed">
            We firmly believe that a Miniature Highland should be as gentle and easy to handle as they are beautiful to look at. Our calves are integrated into a daily handling routine almost from birth. We invest hundreds of hours into halter-training, daily brushing, hoof lifting, and desensitizing them to common farm stimuli such as tractors, quad bikes, loud noises, and working dogs. By the time a calf leaves our property, they are confident, friendly, and ready to bond with their new families.
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mt-12 mb-6 border-b border-[#FDFBF7]/10 pb-4">Sustainability & Ethical Farming</h2>
          <p className="mb-6 text-[#1E293B]/80 leading-relaxed">
            At Dunblane, we are stewards of the land. We practice regenerative agriculture techniques to ensure our pastures remain nutrient-dense and our soil biology thrives. We do not use harsh chemical fertilizers, relying instead on natural composts and strict rotational grazing to naturally suppress parasites and encourage deep-rooted grasses. This ethical approach ensures our cattle are eating the healthiest forage possible, directly reflecting in their shiny coats and robust immune systems.
          </p>

          <div className="bg-[#F4EFE6] p-8 mt-12 rounded-sm border-l-4 border-[#C2673F] shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-4">Our Lifetime Commitment to You</h3>
            <p className="text-[#1E293B]/80 leading-relaxed">
              We stand resolutely behind every calf we breed. Purchasing a miniature highland is a long-term commitment, and we provide lifetime breeder support to all our buyers. We ensure that every animal leaves our property with full NLIS (National Livestock Identification System) compliance, a comprehensive veterinary health check certificate, up-to-date vaccinations, and a custom care guide tailored to the specific environment of your property. You are never alone when you buy from Dunblane Highlands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}`;

content = content.replace(oldReturn, newReturn);
fs.writeFileSync('src/app/about/page.tsx', content);
