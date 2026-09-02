import Image from 'next/image';

export const metadata = {
  title: 'Miniature Highland Cows | Dunblane Pastoral',
  description: 'Discover our beautiful miniature highland calves.',
  alternates: {
    canonical: 'https://dunblane.com.au/about',
  },
  openGraph: {
    title: 'Miniature Highland Cows | Dunblane Pastoral',
    description: 'Discover our beautiful miniature highland calves.',
    url: 'https://dunblane.com.au/about',
    siteName: 'Dunblane Highlands',
    images: [
      {
        url: 'https://dunblane.com.au/images/hero.jpg', // Placeholder for OG image
        width: 1200,
        height: 630,
        alt: 'Miniature Highland Cows | Dunblane Pastoral',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miniature Highland Cows | Dunblane Pastoral',
    description: 'Discover our beautiful miniature highland calves.',
    images: ['https://dunblane.com.au/images/hero.jpg'],
  },
};


export default function AboutPage() {
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dunblane.com.au/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://dunblane.com.au/about"
      }
    ]
  };

  return (
    <div className="bg-[#FDFBF7] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-serif text-5xl font-bold text-[#1C3B2B] mb-8 text-center">About Dunblane Highlands</h1>
        
        <div className="relative aspect-[21/9] mb-12 w-full overflow-hidden rounded-sm">
          <Image
            src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80"
            alt="Dunblane Highlands Farm"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg prose-[#1E293B] max-w-none">
          <p className="text-xl leading-relaxed text-[#1E293B]/80 font-light mb-8">
            Dunblane Highlands Australia is a premier breeder of pedigree Miniature Highland Cattle, 
            located in the picturesque rolling hills of Queensland. We are dedicated to preserving the 
            rugged heritage of the Scottish Highland breed while selecting for smaller, more manageable 
            frames suited for Australian lifestyle properties.
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mt-12 mb-6">Our Breeding Philosophy</h2>
          <p className="mb-6 text-[#1E293B]/80 leading-relaxed">
            Our foundation herd was carefully selected from top bloodlines, prioritizing structural 
            correctness, docile temperaments, and classic Highland aesthetics. We do not compromise 
            on health for size. Every animal in our breeding program is DNA parentage verified and 
            tested negative for Chondrodysplasia (the bulldog dwarfism gene).
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mt-12 mb-6">Pasture Raised & Handled Daily</h2>
          <p className="mb-6 text-[#1E293B]/80 leading-relaxed">
            Our cattle are raised on lush, open pastures and acclimatized to the diverse Australian climate. 
            We believe that a Miniature Highland should be as gentle as they are beautiful. Our calves are 
            handled daily from birth, halter-trained early, and desensitized to common farm machinery and dogs.
          </p>

          <div className="bg-[#F4EFE6] p-8 mt-12 rounded-sm border-l-4 border-[#C2673F]">
            <h3 className="font-serif text-xl font-bold text-[#1C3B2B] mb-4">Our Commitment</h3>
            <p className="text-[#1E293B]/80">
              We stand behind every calf we breed. We provide lifetime support to our buyers and ensure 
              every animal leaves our property with full NLIS compliance, a comprehensive health check, 
              and a custom care guide tailored to your specific property.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
