export const dynamic = 'force-dynamic';
import Image from 'next/image';
import { CALVES_DATA, getCalfSlug } from '@/data/calves';
import Link from 'next/link';

export const metadata = {
  title: 'Available Miniature Highland Cows For Sale | Micro & Teacup Calves',
  description: 'View our current selection of available miniature, micro, and teacup highland calves for sale in Australia. All calves are DNA verified and halter trained.',
  alternates: {
    canonical: 'https://minihighlandcows.store/calves/',
  },
  openGraph: {
    title: 'Available Miniature Highland Cows For Sale | Micro & Teacup Calves',
    description: 'View our current selection of available miniature, micro, and teacup highland calves for sale in Australia. All calves are DNA verified and halter trained.',
    url: 'https://minihighlandcows.store/calves',
    siteName: 'Dunblane Highlands',
    images: [
      {
        url: 'https://minihighlandcows.store/images/hero.jpg', // Placeholder for OG image
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
    title: 'Available Miniature Highland Cows For Sale | Micro & Teacup Calves',
    description: 'View our current selection of available miniature, micro, and teacup highland calves for sale in Australia. All calves are DNA verified and halter trained.',
    images: ['https://minihighlandcows.store/images/hero.jpg'],
  },
};


export default function CalvesPage() {
  const availableCalves = CALVES_DATA.filter(calf => calf.status === 'Available');

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://minihighlandcows.store"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Available Calves",
        "item": "https://minihighlandcows.store/calves"
      }
    ]
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": CALVES_DATA.filter(c => c.status === 'Available').map((calf, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://minihighlandcows.store/calves/${calf.id}`
    }))
  };


  return (
    <div className="bg-[#FDFBF7] py-16">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="font-serif text-5xl font-bold text-[#1C3B2B] mb-4">Available Calves</h1>
          <p className="text-lg text-[#1E293B]/70 max-w-3xl">
            Browse our current selection of pedigree miniature highland calves. 
            All our calves are fully weaned, halter-trained, and structurally assessed before sale.
          </p>
        </div>

        {availableCalves.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-sm shadow-sm border border-[#1E293B]/5">
            <h3 className="font-serif text-2xl text-[#1C3B2B] font-bold mb-2">No calves currently available</h3>
            <p className="text-[#1E293B]/70 mb-4">All of our calves have found their forever homes. Please check our sold gallery or contact us to join the waitlist.</p>
            <Link href="/contact" className="inline-block px-6 py-3 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors">
              Join Waitlist
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableCalves.map((calf) => {
              const slug = getCalfSlug(calf.name);
              return (
              <div key={calf.id} className="bg-white rounded-sm overflow-hidden shadow-sm border border-[#1E293B]/5 group">
                <Link href={`/calves/${slug}`} className="aspect-[4/3] relative overflow-hidden bg-[#F4EFE6] block">
                  <Image src={calf.images[0]}
                    alt={`${calf.name} - Miniature Highland Calf for Sale in Australia`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer" />
                  <span className="absolute top-4 right-4 bg-[#1C3B2B] text-[#FDFBF7] text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm z-10">
                    Available
                  </span>
                </Link>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Link href={`/calves/${slug}`}>
                      <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] leading-tight hover:text-[#C2673F] transition-colors">{calf.name}</h3>
                    </Link>
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
                  
                  <div className="flex items-center justify-between pt-6 border-t border-[#1E293B]/10">
                    <div>
                      <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1">Price</span>
                      <span className="font-serif text-xl font-bold text-[#1C3B2B]">${calf.price.toLocaleString()}</span>
                    </div>
                    <Link href="/reserve" className="px-6 py-2 border border-[#1C3B2B] text-[#1C3B2B] hover:bg-[#1C3B2B] hover:text-white transition-colors text-sm font-medium rounded-sm">
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
