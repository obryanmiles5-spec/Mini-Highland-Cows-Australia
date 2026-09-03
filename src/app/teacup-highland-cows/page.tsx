export const dynamic = 'force-dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { CALVES_DATA, getCalfSlug } from '@/data/calves';
import { Heart, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Teacup Highland Cows Australia | Pocket Miniature Calves',
  description: 'Looking for teacup miniature highland cows in Australia? Dunblane Highlands provides ethically bred, ultra-compact pocket highland calves with healthy genetics.',
  alternates: {
    canonical: 'https://minihighlandcows.store/teacup-highland-cows/',
  },
  openGraph: {
    title: 'Teacup Highland Cows Australia | Pocket Miniature Calves',
    description: 'Looking for teacup miniature highland cows in Australia? Dunblane Highlands provides ethically bred, ultra-compact pocket highland calves.',
    url: 'https://minihighlandcows.store/teacup-highland-cows/',
    siteName: 'Dunblane Highlands',
    images: [
      {
        url: 'https://minihighlandcows.store/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Teacup Highland Cows Australia - Dunblane Highlands',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teacup Highland Cows Australia | Pocket Miniature Calves',
    description: 'Discover ultra-compact teacup highland cows in Australia. Ethically bred and halter trained.',
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
    "name": "Teacup Miniature Highland Cows Australia",
    "description": "Ethically bred pocket and teacup miniature Scottish Highland cattle in Australia, DNA parentage verified with complete halter training.",
    "brand": {
      "@type": "Brand",
      "name": "Dunblane Highlands"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "AUD",
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
            <Sparkles className="w-3.5 h-3.5" /> Ultra-Compact Heritage Genetics
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C3B2B] leading-tight mb-6">
            Teacup Highland Cows in Australia
          </h1>
          <p className="text-lg text-[#1E293B]/80 leading-relaxed max-w-2xl mx-auto mb-8">
            &ldquo;Teacup&rdquo; and &ldquo;pocket&rdquo; Highland cows are popular terms used for the smallest tier of miniature Highland cattle, 
            maturing at approximately 30 to 34 inches. At Dunblane Highlands, our emphasis is on healthy proportion, docility, 
            luxurious double coats, and verified sound genetics.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/calves"
              className="px-8 py-3.5 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors shadow-sm"
            >
              Browse Pocket Calves
            </Link>
            <Link
              href="/reserve"
              className="px-8 py-3.5 border border-[#1C3B2B] text-[#1C3B2B] font-medium rounded-sm hover:bg-[#1C3B2B]/5 transition-colors"
            >
              Reserve a Calf
            </Link>
          </div>
        </div>

        {/* Facts & Genetics Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/10">
            <div className="w-12 h-12 rounded-sm bg-[#F4EFE6] flex items-center justify-center text-[#1C3B2B] mb-6">
              <ShieldCheck className="w-6 h-6 text-[#C2673F]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-3">Ethical Breeding</h3>
            <p className="text-sm text-[#1E293B]/70 leading-relaxed">
              We do not utilize severe inbreeding or dwarfism genes (chondrodysplasia positive). Our pocket calves are bred for longevity, robust lung capacity, and natural small-frame stature.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/10">
            <div className="w-12 h-12 rounded-sm bg-[#F4EFE6] flex items-center justify-center text-[#1C3B2B] mb-6">
              <Heart className="w-6 h-6 text-[#C2673F]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-3">Halter Trained &amp; Gentle</h3>
            <p className="text-sm text-[#1E293B]/70 leading-relaxed">
              Every calf is bottle-supplemented and daily halter trained from weaning. They enjoy hand-feeding, brushing sessions, and make affectionate companions for families and children.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/10">
            <div className="w-12 h-12 rounded-sm bg-[#F4EFE6] flex items-center justify-center text-[#1C3B2B] mb-6">
              <Sparkles className="w-6 h-6 text-[#C2673F]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-3">Famous Fluffy Double Coats</h3>
            <p className="text-sm text-[#1E293B]/70 leading-relaxed">
              Featuring heavy forelocks (the iconic Scottish &ldquo;dossan&rdquo;) and dense woolly undercoats. Available in rare Silver Dun, Pure White, Blonde Yellow, and classic Red.
            </p>
          </div>
        </div>

        {/* Calves list */}
        <div className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-2">Available Small-Frame Calves</h2>
              <p className="text-sm text-[#1E293B]/70">Registered, DNA parentage-verified and ready for immediate deposit</p>
            </div>
            <Link href="/calves" className="text-sm font-bold text-[#C2673F] hover:text-[#A85532] flex items-center gap-1">
              View All Calves <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teacupCalves.map((calf) => {
              const slug = getCalfSlug(calf.name);
              return (
                <div key={calf.id} className="bg-white rounded-sm overflow-hidden shadow-sm border border-[#1E293B]/10 group">
                  <Link href={`/calves/${slug}`} className="aspect-[4/3] relative overflow-hidden bg-[#F4EFE6] block">
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
                    <Link href={`/calves/${slug}`}>
                      <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-2 group-hover:text-[#C2673F] transition-colors">
                        {calf.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-[#1E293B]/60 mb-4">{calf.coat} {calf.sex} • {calf.height} projected</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#1E293B]/10">
                      <span className="font-serif text-xl font-bold text-[#1C3B2B]">${calf.price.toLocaleString()} AUD</span>
                      <Link href={`/calves/${slug}`} className="text-sm font-bold text-[#C2673F] hover:text-[#A85532]">
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
            <Link href="/contact" className="px-8 py-3.5 bg-[#C2673F] text-white font-medium rounded-sm hover:bg-[#A85532] transition-colors">
              Contact Breeders
            </Link>
            <Link href="/faq" className="px-8 py-3.5 border border-[#FDFBF7]/30 text-white font-medium rounded-sm hover:bg-white/10 transition-colors">
              Read Common Questions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
