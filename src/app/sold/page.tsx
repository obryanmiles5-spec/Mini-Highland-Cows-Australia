import Image from 'next/image';
import { CALVES_DATA } from '@/data/calves';
import Link from 'next/link';

export const metadata = {
  title: 'Miniature Highland Cows | Dunblane Pastoral',
  description: 'Discover our beautiful miniature highland calves.',
  alternates: {
    canonical: 'https://dunblane.com.au/sold',
  },
  openGraph: {
    title: 'Miniature Highland Cows | Dunblane Pastoral',
    description: 'Discover our beautiful miniature highland calves.',
    url: 'https://dunblane.com.au/sold',
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


export default function SoldPage() {
  const soldCalves = CALVES_DATA.filter(calf => calf.status !== 'Available');

  
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
        "name": "Sold Calves",
        "item": "https://dunblane.com.au/sold"
      }
    ]
  };

  return (
    <div className="bg-[#FDFBF7] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="font-serif text-5xl font-bold text-[#1C3B2B] mb-4">Sold & Reserved Calves</h1>
          <p className="text-lg text-[#1E293B]/70 max-w-3xl">
            Browse our previously sold and currently reserved pedigree miniature highland calves. 
            This gallery showcases the quality and varied colors of our past breeding seasons.
          </p>
        </div>

        {soldCalves.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-sm shadow-sm border border-[#1E293B]/5">
            <h3 className="font-serif text-2xl text-[#1C3B2B] font-bold mb-2">No past calves to display yet</h3>
            <p className="text-[#1E293B]/70">Check back later as we update our past successful adoptions.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {soldCalves.map((calf) => (
              <div key={calf.id} className="bg-white rounded-sm overflow-hidden shadow-sm border border-[#1E293B]/5 group opacity-80 hover:opacity-100 transition-opacity">
                <Link href={`/calves/${calf.id}`} className="aspect-[4/3] relative overflow-hidden bg-[#F4EFE6] block">
                  <Image
                    src="/blank.png"
                    alt={calf.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm z-10 ${calf.status === 'Sold' ? 'text-red-600 bg-white border border-red-600' : 'bg-[#C2673F] text-white'}`}>
                    {calf.status}
                  </span>
                </Link>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] leading-tight">{calf.name}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-[#1E293B]/80">
                    <div>
                      <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1">Sex</span>
                      {calf.sex}
                    </div>
                    <div>
                      <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1">Coat</span>
                      {calf.coat}
                    </div>
                    <div>
                      <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1">Proj. Height</span>
                      {calf.height}
                    </div>
                    <div>
                      <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1">Status</span>
                      {calf.status}
                    </div>
                  </div>

                  <p className="text-sm text-[#1E293B]/70 mb-6 leading-relaxed">
                    {calf.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
