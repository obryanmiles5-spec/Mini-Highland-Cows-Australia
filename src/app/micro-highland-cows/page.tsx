export const dynamic = 'force-dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { CALVES_DATA, getCalfSlug } from '@/data/calves';
import { Shield, Check, Heart, Ruler, ArrowRight, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Micro Highland Cows Australia | Verified Under 36 Inch Calves',
  description: 'Looking for a micro miniature highland cow in Australia? Dunblane Highlands breeds authentic, DNA-verified micro calves maturing under 36 inches with nationwide delivery.',
  alternates: {
    canonical: 'https://minihighlandcows.store/micro-highland-cows/',
  },
  openGraph: {
    title: 'Micro Highland Cows Australia | Verified Under 36 Inch Calves',
    description: 'Looking for a micro miniature highland cow in Australia? Dunblane Highlands breeds authentic, DNA-verified micro calves maturing under 36 inches.',
    url: 'https://minihighlandcows.store/micro-highland-cows/',
    siteName: 'Dunblane Highlands',
    images: [
      {
        url: 'https://minihighlandcows.store/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Micro Highland Cows Australia - Dunblane Highlands',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Micro Highland Cows Australia | Verified Under 36 Inch Calves',
    description: 'Discover authentic, DNA-verified micro miniature highland calves in Australia. Maturing under 36 inches.',
    images: ['https://minihighlandcows.store/images/hero.jpg'],
  },
};

export default function MicroHighlandCowsPage() {
  const microCalves = CALVES_DATA.filter(
    c => c.status === 'Available' && (parseInt(c.height) <= 39 || c.desc.toLowerCase().includes('micro'))
  ).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://minihighlandcows.store/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Micro Highland Cows",
            "item": "https://minihighlandcows.store/micro-highland-cows/"
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Micro Miniature Highland Cattle",
        "description": "Authentic DNA-verified micro miniature highland calves maturing under 36 inches, bred in Queensland Australia with delivery nationwide.",
        "brand": {
          "@type": "Brand",
          "name": "Dunblane Highlands"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "AUD",
          "lowPrice": "5500",
          "highPrice": "10000",
          "offerCount": microCalves.length
        }
      }
    ]
  };

  return (
    <div className="bg-[#FDFBF7] py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-[#1E293B]/60 mb-8 font-medium">
          <Link href="/" className="hover:text-[#C2673F] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#1C3B2B] font-bold">Micro Highland Cows</span>
        </nav>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C2673F] font-bold block mb-3">
              Official Breed Classification
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C3B2B] leading-tight mb-6">
              Micro Highland Cows for Sale Australia
            </h1>
            <p className="text-lg text-[#1E293B]/80 leading-relaxed mb-6">
              Micro Highland cows represent the smallest authentic tier of Scottish Highland cattle, 
              maturing at or under 36 inches (91 cm) at the hip. At Dunblane Highlands, our micro calves 
              are selectively bred from proven small-stature bloodlines without introducing chondrodysplasia or dwarfism defects.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/calves"
                className="px-8 py-3.5 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors shadow-sm"
              >
                View Micro Calves
              </Link>
              <Link
                href="/process"
                className="px-8 py-3.5 border border-[#1C3B2B] text-[#1C3B2B] font-medium rounded-sm hover:bg-[#1C3B2B]/5 transition-colors"
              >
                Adoption Guide
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-[#1E293B]/10 pt-6">
              <div>
                <span className="block text-2xl font-serif font-bold text-[#1C3B2B]">&le; 36&quot;</span>
                <span className="text-xs text-[#1E293B]/60 uppercase font-semibold">Mature Height</span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-[#1C3B2B]">100%</span>
                <span className="text-xs text-[#1E293B]/60 uppercase font-semibold">DNA Verified</span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-[#1C3B2B]">Chondro</span>
                <span className="text-xs text-[#1E293B]/60 uppercase font-semibold">Negative Tested</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md border border-[#1E293B]/10">
            <Image
              src="/images/hero.jpg"
              alt="Micro Miniature Highland Calf grazing in lush Australian pasture"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-sm shadow-sm">
              <p className="text-xs font-bold text-[#1C3B2B]">Dunblane Pasture Assessed</p>
              <p className="text-[10px] text-[#1E293B]/70">True small frame genetics, Queensland</p>
            </div>
          </div>
        </div>

        {/* Size Standards Matrix */}
        <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-[#1E293B]/10 mb-16">
          <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-4 text-center">
            Highland Cattle Size Standards Explained
          </h2>
          <p className="text-[#1E293B]/70 text-center max-w-2xl mx-auto mb-10 text-sm">
            Understanding the distinction between Standard, Miniature, Micro, and Teacup classifications ensures you select the perfect companion for your property acreage.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 bg-[#FDFBF7] rounded-sm border border-[#1E293B]/10">
              <span className="text-xs font-bold text-[#C2673F] uppercase tracking-wider block mb-1">Class 1</span>
              <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-2">Standard Miniature</h3>
              <p className="text-sm font-semibold text-[#1C3B2B] mb-3">37&quot; to 42&quot; at 3 years</p>
              <p className="text-xs text-[#1E293B]/70 leading-relaxed">
                Ideal for family lifestyle farms, small acreages (1-2+ acres), producing rich family milk and maintaining manicured pastures.
              </p>
            </div>
            <div className="p-6 bg-[#1C3B2B] text-[#FDFBF7] rounded-sm shadow-sm relative">
              <span className="absolute top-4 right-4 bg-[#C2673F] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">Most Popular</span>
              <span className="text-xs font-bold text-[#D4A373] uppercase tracking-wider block mb-1">Class 2</span>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">Micro Miniature</h3>
              <p className="text-sm font-semibold text-[#D4A373] mb-3">33&quot; to 36&quot; at 3 years</p>
              <p className="text-xs text-[#FDFBF7]/80 leading-relaxed">
                Our signature breeding focus. Exceptional compact stature, abundant fluffy coats, teddy-bear facial structure, and calm lap-dog temperament.
              </p>
            </div>
            <div className="p-6 bg-[#FDFBF7] rounded-sm border border-[#1E293B]/10">
              <span className="text-xs font-bold text-[#C2673F] uppercase tracking-wider block mb-1">Class 3</span>
              <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-2">Teacup / Pocket</h3>
              <p className="text-sm font-semibold text-[#1C3B2B] mb-3">Under 33&quot; at 3 years</p>
              <p className="text-xs text-[#1E293B]/70 leading-relaxed">
                Extremely rare specimens resulting from multi-generational small-frame selection. Exceptional companions for hobby acreage.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Available Calves */}
        <div className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-2">Available Micro &amp; Compact Calves</h2>
              <p className="text-sm text-[#1E293B]/70">DNA-verified, halter-trained calves ready for adoption</p>
            </div>
            <Link href="/calves" className="text-sm font-bold text-[#C2673F] hover:text-[#A85532] flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microCalves.map((calf) => {
              const slug = getCalfSlug(calf.name);
              return (
                <div key={calf.id} className="bg-white rounded-sm overflow-hidden shadow-sm border border-[#1E293B]/10 group">
                  <Link href={`/calves/${slug}`} className="aspect-[4/3] relative overflow-hidden bg-[#F4EFE6] block">
                    <Image
                      src={calf.images[0]}
                      alt={`${calf.name} - Micro Miniature Highland Calf Australia`}
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
                    <p className="text-sm text-[#1E293B]/60 mb-4">{calf.coat} {calf.sex} • Projected {calf.height}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#1E293B]/10">
                      <span className="font-serif text-xl font-bold text-[#1C3B2B]">${calf.price.toLocaleString()} AUD</span>
                      <Link href={`/calves/${slug}`} className="text-sm font-bold text-[#C2673F] hover:text-[#A85532]">
                        View Details &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Micro Highland FAQ Section */}
        <div className="bg-[#F4EFE6] p-8 sm:p-12 rounded-sm border border-[#1E293B]/10">
          <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-8 text-center">
            Micro Highland Cattle FAQ
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#C2673F]" />
                How are micro highland cows bred?
              </h3>
              <p className="text-sm text-[#1E293B]/80 leading-relaxed">
                Micro Highland cattle are bred over multiple generations by breeding small, proportionate parent stock. Dunblane Pastoral conducts genetic chondrodysplasia testing to ensure size is achieved naturally without structural deformities.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#C2673F]" />
                How much land does a micro cow need?
              </h3>
              <p className="text-sm text-[#1E293B]/80 leading-relaxed">
                A pair of micro miniature cows generally requires 0.5 to 1.5 acres of good quality pasture with supplemental hay. Because cattle are herd animals, they should always be kept in pairs or with companion livestock.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#C2673F]" />
                How much does a micro highland cow cost?
              </h3>
              <p className="text-sm text-[#1E293B]/80 leading-relaxed">
                Prices for DNA-verified, halter-trained micro calves in Australia typically range from $5,500 to $10,000+ AUD depending on sex, pedigree bloodlines, coat color (white, dun, silver, yellow), and projected mature frame size.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#C2673F]" />
                Do you deliver micro calves Australia-wide?
              </h3>
              <p className="text-sm text-[#1E293B]/80 leading-relaxed">
                Yes! We coordinate professional, stress-free livestock road transport across Queensland, New South Wales, Victoria, South Australia, and interstate corridors with complete NLIS documentation and vet health clearances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
