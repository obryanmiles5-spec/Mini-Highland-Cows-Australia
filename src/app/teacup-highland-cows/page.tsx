export const dynamic = 'force-dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { CALVES_DATA, getCalfSlug } from '@/data/calves';
import { Heart, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Teacup Highland Cows USA | Pocket Miniature Calves',
  description: 'Looking for teacup miniature highland cows in the USA? Dunblane Highlands provides ethically bred, ultra-compact pocket highland calves with healthy genetics.',
  alternates: {
    canonical: 'https://minihighlandcows.store/teacup-highland-cows/',
    languages: {
      'en-US': 'https://minihighlandcows.store/teacup-highland-cows/',
      'x-default': 'https://minihighlandcows.store/teacup-highland-cows/',
    },
  },
  openGraph: {
    title: 'Teacup Highland Cows USA | Pocket Miniature Calves',
    description: 'Looking for teacup miniature highland cows in the USA? Dunblane Highlands provides ethically bred, ultra-compact pocket highland calves.',
    url: 'https://minihighlandcows.store/teacup-highland-cows/',
    siteName: 'Dunblane Highlands USA',
    images: [
      {
        url: 'https://minihighlandcows.store/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Teacup Highland Cows USA - Dunblane Highlands',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teacup Highland Cows USA | Pocket Miniature Calves',
    description: 'Discover ultra-compact teacup highland cows in the USA. Ethically bred and halter trained.',
    images: ['https://minihighlandcows.store/images/hero.jpg'],
  },
};

export default function TeacupHighlandCowsPage() {
  const teacupCalves = CALVES_DATA.filter(
    c => c.status === 'Available'
  ).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Teacup Miniature Highland Cows USA",
    "description": "Ethically bred pocket and teacup miniature Scottish Highland cattle in the United States, DNA parentage verified with complete halter training.",
    "brand": {
      "@type": "Brand",
      "name": "Dunblane Highlands USA"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "6000",
      "highPrice": "10000",
      "offerCount": teacupCalves.length
    }
  };

  return (
    <div className="bg-[#FDFBF7] py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#1E293B]/60 mb-8 font-medium">
          <Link href="/" className="hover:text-[#C2673F] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#1C3B2B] font-bold">Teacup Highland Cows</span>
        </nav>

        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C2673F]/10 text-[#C2673F] text-xs font-bold rounded-full uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Ultra-Compact Heritage Genetics USA
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C3B2B] leading-tight mb-6">
            Teacup Highland Cows in the USA
          </h1>
          <p className="text-lg text-[#1E293B]/80 leading-relaxed max-w-2xl mx-auto mb-8">
            &ldquo;Teacup&rdquo; and &ldquo;pocket&rdquo; Highland cows are popular terms used for the smallest tier of miniature Highland cattle, 
            maturing at approximately 30 to 34 inches. At Dunblane Highlands, our emphasis is on healthy proportion, docility, 
            luxurious double coats, and verified sound genetics without dwarfism.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/calves/"
              className="px-8 py-3.5 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors shadow-sm"
            >
              Browse Available Calves
            </Link>
            <Link
              href="/prices/"
              className="px-8 py-3.5 border border-[#1C3B2B] text-[#1C3B2B] font-medium rounded-sm hover:bg-[#1C3B2B]/5 transition-colors"
            >
              View Price Guide ($USD)
            </Link>
          </div>
        </div>

        {/* Key Realities Block */}
        <div className="bg-white rounded-sm border border-[#1E293B]/10 p-8 md:p-12 mb-16 shadow-xs">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B] mb-2">Ethical Breeding First</h3>
              <p className="text-sm text-[#1E293B]/70 leading-relaxed">
                We do not select for abnormal dwarfism genes (Chondrodysplasia). Our calves are genetically tested non-carriers, ensuring normal proportions, sound legs, and a full, healthy lifespan.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B] mb-2">Real Mature Size</h3>
              <p className="text-sm text-[#1E293B]/70 leading-relaxed">
                No cattle fit into a coffee cup. A mature &ldquo;teacup&rdquo; or pocket Highland will stand roughly waist-height (30–34 inches) and weigh between 350 and 550 pounds.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B] mb-2">Herd Animal Needs</h3>
              <p className="text-sm text-[#1E293B]/70 leading-relaxed">
                Even pocket-sized Highlands are herd animals. They require at least one bovine companion (or compatible livestock like sheep or goats) and cannot be kept indoors as house pets.
              </p>
            </div>
          </div>
        </div>

        {/* Available Pocket Calves Showcase */}
        <div className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-bold text-[#C2673F] uppercase tracking-wider block mb-1">Live Inventory</span>
              <h2 className="font-serif text-3xl font-bold text-[#1C3B2B]">Featured Ultra-Compact Calves</h2>
            </div>
            <Link href="/calves/" className="text-sm font-bold text-[#C2673F] hover:text-[#A85532] flex items-center gap-1">
              View All Calves <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teacupCalves.map((calf) => {
              const slug = getCalfSlug(calf.name);
              return (
                <div key={calf.id} className="bg-white rounded-sm overflow-hidden shadow-sm border border-[#1E293B]/10 group">
                  <Link href={`/calves/${slug}/`} className="aspect-[4/3] relative overflow-hidden bg-[#F4EFE6] block">
                    <Image
                      src={calf.images[0]}
                      alt={`${calf.name} - Teacup Miniature Highland Calf`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-4 right-4 bg-[#1C3B2B] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                      {calf.status}
                    </span>
                  </Link>
                  <div className="p-6">
                    <Link href={`/calves/${slug}/`}>
                      <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-2 group-hover:text-[#C2673F] transition-colors">
                        {calf.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-[#1E293B]/60 mb-4">{calf.coat} {calf.sex} • {calf.height} projected</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#1E293B]/10">
                      <span className="font-serif text-xl font-bold text-[#1C3B2B]">${calf.price.toLocaleString()} USD</span>
                      <Link href={`/calves/${slug}/`} className="text-sm font-bold text-[#C2673F] hover:text-[#A85532]">
                        Details &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Callout */}
        <div className="bg-[#1C3B2B] text-[#FDFBF7] p-8 sm:p-12 rounded-sm text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Want to Join the Teacup &amp; Pocket Waitlist?</h2>
          <p className="text-sm text-[#FDFBF7]/80 max-w-xl mx-auto mb-8">
            Due to high demand and limited calving windows, our smallest pocket calves are often reserved prior to weaning. Contact us to be notified of upcoming litters and calving schedules.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact/" className="px-8 py-3.5 bg-[#C2673F] text-white font-medium rounded-sm hover:bg-[#A85532] transition-colors">
              Contact Breeders
            </Link>
            <Link href="/faq/" className="px-8 py-3.5 border border-[#FDFBF7]/30 text-white font-medium rounded-sm hover:bg-white/10 transition-colors">
              Read Common Questions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
