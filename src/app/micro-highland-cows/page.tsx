export const dynamic = 'force-dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { CALVES_DATA, getCalfSlug } from '@/data/calves';
import { Shield, Check, Heart, Ruler, ArrowRight, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Micro Highland Cows USA | Verified Under 36 Inch Calves',
  description: 'Looking for a micro miniature highland cow in the USA? Dunblane Highlands breeds authentic, DNA-verified micro calves maturing under 36 inches with nationwide delivery.',
  alternates: {
    canonical: 'https://minihighlandcows.store/micro-highland-cows/',
    languages: {
      'en-US': 'https://minihighlandcows.store/micro-highland-cows/',
      'x-default': 'https://minihighlandcows.store/micro-highland-cows/',
    },
  },
  openGraph: {
    title: 'Micro Highland Cows USA | Verified Under 36 Inch Calves',
    description: 'Looking for a micro miniature highland cow in the USA? Dunblane Highlands breeds authentic, DNA-verified micro calves maturing under 36 inches.',
    url: 'https://minihighlandcows.store/micro-highland-cows/',
    siteName: 'Dunblane Highlands USA',
    images: [
      {
        url: 'https://minihighlandcows.store/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Micro Highland Cows USA - Dunblane Highlands',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Micro Highland Cows USA | Verified Under 36 Inch Calves',
    description: 'Discover authentic, DNA-verified micro miniature highland calves in the USA. Maturing under 36 inches.',
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
        "name": "Micro Miniature Highland Cattle USA",
        "description": "Authentic DNA-verified micro miniature highland calves maturing under 36 inches, bred in Canton, Texas with delivery across the United States.",
        "brand": {
          "@type": "Brand",
          "name": "Dunblane Highlands USA"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "5500",
          "highPrice": "10000",
          "offerCount": microCalves.length
        }
      }
    ]
  };

  return (
    <div className="bg-[#FDFBF7] py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-xs text-[#1E293B]/60 mb-6 flex gap-2">
          <Link href="/" className="hover:text-[#C2673F]">Home</Link> &gt; 
          <span className="text-[#1C3B2B] font-semibold">Micro Highland Cows</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#C2673F] tracking-widest uppercase mb-2 block">
            Genetically Small • Naturally Proportionate
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C3B2B] mb-6">
            Micro Highland Cows for Sale USA
          </h1>
          <p className="text-lg text-[#1E293B]/80 leading-relaxed mb-8">
            Micro Miniature Highlands are the smallest class of Scottish Highland cattle, standing at <strong>36 inches or under at the hip</strong> at maturity (3 years of age). All calves are 100% DNA parentage verified, halter trained, and genetically tested negative for Chondrodysplasia (dwarfism).
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/calves/"
              className="px-8 py-3.5 bg-[#C2673F] text-white font-medium rounded-sm hover:bg-[#A85532] transition-colors"
            >
              Browse Available Calves
            </Link>
            <Link
              href="/prices/"
              className="px-8 py-3.5 border border-[#1C3B2B] text-[#1C3B2B] font-medium rounded-sm hover:bg-[#1C3B2B]/5 transition-colors"
            >
              Micro Cow Price Guide
            </Link>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-sm border border-[#1E293B]/10 shadow-xs">
            <Ruler className="w-8 h-8 text-[#C2673F] mb-4" />
            <h3 className="font-serif text-xl font-bold text-[#1C3B2B] mb-2">Under 36 Inches</h3>
            <p className="text-sm text-[#1E293B]/70 leading-relaxed">
              True micro frame size achieved through generations of selective breeding of naturally compact Scottish Highland cattle.
            </p>
          </div>
          <div className="bg-white p-8 rounded-sm border border-[#1E293B]/10 shadow-xs">
            <Shield className="w-8 h-8 text-[#C2673F] mb-4" />
            <h3 className="font-serif text-xl font-bold text-[#1C3B2B] mb-2">Chondro-Free Tested</h3>
            <p className="text-sm text-[#1E293B]/70 leading-relaxed">
              Every calf is lab-tested negative for skeletal dwarfism genes, guaranteeing proportionate legs, healthy joints, and normal lifespan.
            </p>
          </div>
          <div className="bg-white p-8 rounded-sm border border-[#1E293B]/10 shadow-xs">
            <Heart className="w-8 h-8 text-[#C2673F] mb-4" />
            <h3 className="font-serif text-xl font-bold text-[#1C3B2B] mb-2">Gentle &amp; Halter-Trained</h3>
            <p className="text-sm text-[#1E293B]/70 leading-relaxed">
              Handled daily from birth. Our micro calves are lead-broken, desensitized to brushes, and eager for human interaction.
            </p>
          </div>
        </div>

        {/* Detailed Guide Content */}
        <div className="bg-white rounded-sm border border-[#1E293B]/10 p-8 md:p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-[#C2673F] tracking-widest uppercase mb-2 block">
                Standard vs Micro Frame
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-6">
                What Makes a Highland Cow &quot;Micro&quot;?
              </h2>
              <div className="space-y-4 text-sm text-[#1E293B]/80 leading-relaxed">
                <p>
                  Standard Scottish Highland cows typically measure between 44 and 50 inches at the hip. Standard miniatures stand between 38 and 42 inches. A <strong>Micro Miniature Highland</strong> is defined as 36 inches or less at three years of age.
                </p>
                <p>
                  Because true micro genetics are rare, ethical breeding requires meticulous parentage tracking and health verification. At Dunblane Highlands USA, our micro bloodlines trace back to foundation stock selected for compact stature, wide chests, thick double coats, and docile personalities.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1C3B2B]" /> <strong>Full Grown Height:</strong> 32&quot; – 36&quot; at the hip
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1C3B2B]" /> <strong>Weight Range:</strong> 400 – 650 lbs at maturity
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1C3B2B]" /> <strong>Pasture Needs:</strong> 0.5 to 1 acre per cow pair
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1C3B2B]" /> <strong>Lifespan:</strong> 15 – 20 years with proper care
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-sm">
              <Image
                src="https://drive.google.com/thumbnail?id=1dVP0WPimbOub0myAQVRgBA0JrcHENgtB&sz=w1000"
                alt="Micro Miniature Highland Calf grazing in lush Texas pasture"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Micro Calves Showcase */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-bold text-[#C2673F] uppercase tracking-wider block mb-1">Current Availability</span>
              <h2 className="font-serif text-3xl font-bold text-[#1C3B2B]">Featured Micro &amp; Compact Calves</h2>
            </div>
            <Link href="/calves/" className="text-sm font-bold text-[#C2673F] hover:text-[#A85532] flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microCalves.map((calf) => {
              const slug = getCalfSlug(calf.name);
              return (
                <div key={calf.id} className="bg-white rounded-sm overflow-hidden shadow-sm border border-[#1E293B]/10 group">
                  <Link href={`/calves/${slug}/`} className="aspect-[4/3] relative overflow-hidden bg-[#F4EFE6] block">
                    <Image
                      src={calf.images[0]}
                      alt={`${calf.name} - Micro Miniature Highland Calf USA`}
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
                    <p className="text-sm text-[#1E293B]/60 mb-4">{calf.coat} {calf.sex} • Projected {calf.height}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#1E293B]/10">
                      <span className="font-serif text-xl font-bold text-[#1C3B2B]">${calf.price.toLocaleString()} USD</span>
                      <Link href={`/calves/${slug}/`} className="text-sm font-bold text-[#C2673F] hover:text-[#A85532]">
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
                Micro Highland cattle are bred over multiple generations by selecting small, proportionate parent stock. Dunblane Highlands conducts genetic chondrodysplasia testing to ensure compact size is achieved naturally without structural deformities.
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
                How much does a micro highland cow cost in the US?
              </h3>
              <p className="text-sm text-[#1E293B]/80 leading-relaxed">
                Prices for DNA-verified, halter-trained micro calves in the USA typically range from $5,500 to $10,000+ USD depending on sex, pedigree bloodlines, coat color (white, dun, silver, yellow), and projected mature frame size.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#C2673F]" />
                Do you deliver micro calves nationwide across the USA?
              </h3>
              <p className="text-sm text-[#1E293B]/80 leading-relaxed">
                Yes! We coordinate professional, stress-free livestock road transport across Texas, Oklahoma, the Midwest, Florida, California, and all 48 continental states with complete USDA CVI documentation and vet health clearances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
