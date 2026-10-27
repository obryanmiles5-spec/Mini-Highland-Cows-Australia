import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CALVES_DATA, getCalfSlug } from '@/data/calves';
import { Heart, Sparkles, CheckCircle2, ChevronRight, ArrowRight, ShieldCheck, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fluffy Mini Cows for Sale USA | Cute Fluffy Miniature Cow Breed',
  description: 'What breed is a fluffy mini cow? Discover fluffy mini cows, micro mini fluffy calves for sale, grooming tips, and 2026 prices in the USA at Dunblane Highlands.',
  alternates: {
    canonical: 'https://minihighlandcows.store/fluffy-mini-cows/',
    languages: {
      'en-US': 'https://minihighlandcows.store/fluffy-mini-cows/',
      'x-default': 'https://minihighlandcows.store/fluffy-mini-cows/',
    },
  },
  openGraph: {
    title: 'Fluffy Mini Cows for Sale USA | Cute Fluffy Miniature Cow Breed',
    description: 'What breed is a fluffy mini cow? Discover fluffy mini cows, micro mini fluffy calves for sale, grooming tips, and 2026 prices in the USA.',
    url: 'https://minihighlandcows.store/fluffy-mini-cows/',
    siteName: 'Dunblane Highlands USA',
    images: [
      {
        url: 'https://minihighlandcows.store/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Fluffy Mini Cows for Sale USA - Dunblane Highlands',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fluffy Mini Cows for Sale USA | Cute Miniature Cattle',
    description: 'Everything about fluffy miniature cows: what breed they are, micro mini fluffy cow prices, and available calves for sale in the USA.',
    images: ['https://minihighlandcows.store/images/hero.jpg'],
  },
};

const FAQS = [
  {
    q: "What breed is a fluffy mini cow?",
    a: "The world-famous 'fluffy mini cow' is primarily the Scottish Miniature Highland cattle breed (or heritage Highland crosses such as HighPark or White Galloway crosses). Their signature fluffy appearance comes from a specialized double coat: an oily, weather-resistant outer layer and a thick, downy undercoat originally evolved to protect against freezing Scottish winters."
  },
  {
    q: "How much is a fluffy mini cow in the United States?",
    a: "In the United States, a fluffy mini cow costs between $4,000 and $10,000+ USD. Steers (castrated males) bred as fluffy pasture pets range from $4,000 to $6,500 USD, while registered breeding heifers and rare micro mini fluffy cows (maturing under 36 inches) typically range from $7,000 to $12,000+ USD depending on coat color rarity (such as silver, dun, or pure white) and verified genetics."
  },
  {
    q: "Do fluffy mini cows stay fluffy as adults?",
    a: "Yes. Genuine miniature Scottish highland cows retain their double-layered shaggy hair coat throughout their entire lives. However, they naturally shed out their dense winter undercoat during spring and summer. In warm American climates like Texas or Florida, regular brushing, clean ponds/stock tanks, and shaded pastures keep their coats looking clean, fluffy, and healthy."
  },
  {
    q: "What is a micro mini fluffy cow?",
    a: "A micro mini fluffy cow is a naturally small miniature highland that matures at 36 inches or less at the hip at three years of age. Unlike standard cattle, micro miniatures are selectively bred from generations of proportionate, Chondrodysplasia-negative bloodlines to ensure they remain tiny, docile, and safe for homestead families with small acreage."
  },
  {
    q: "Are fluffy mini cows good pets for families?",
    a: "Yes, fluffy miniature cows make exceptional homestead pets. Because Dunblane Highlands calves undergo hundreds of hours of early halter training, gentle grooming, and daily human desensitization, they are as gentle and affectionate as large dogs. They thrive on human interaction, brushing, chin scratches, and pasture cuddles."
  }
];

export default function FluffyMiniCowsPage() {
  const fluffyCalves = CALVES_DATA.filter(c => c.status === 'Available').slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "https://minihighlandcows.store/fluffy-mini-cows/#product",
        "name": "Fluffy Mini Highland Cows USA",
        "description": "Ethically bred, DNA-verified fluffy miniature highland calves and micro mini fluffy cattle for sale in the United States.",
        "brand": {
          "@type": "Brand",
          "name": "Dunblane Highlands USA"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "4000",
          "highPrice": "10000",
          "offerCount": fluffyCalves.length,
          "priceValidUntil": "2026-12-31"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://minihighlandcows.store/fluffy-mini-cows/#faq",
        "mainEntity": FAQS.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
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
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#1E293B]/60 mb-8 font-medium">
          <Link href="/" className="hover:text-[#C2673F] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/calves/" className="hover:text-[#C2673F] transition-colors">Calves</Link>
          <span>/</span>
          <span className="text-[#1C3B2B] font-bold">Fluffy Mini Cows</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C2673F] font-bold block mb-3">
            The Cutest Homestead Pets in America
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C3B2B] leading-tight mb-6">
            Fluffy Mini Cows (Miniature Highland Cattle Breed Guide &amp; Sales)
          </h1>
          <p className="text-lg text-[#1E293B]/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Searching for a <strong>fluffy mini cow</strong> or wondering <strong>what breed is a fluffy mini cow</strong>? 
            Discover the facts behind the cutest miniature cows in the world, coat care routines, and DNA-verified calves 
            available across the United States.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/calves/"
              className="px-8 py-3.5 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors shadow-sm"
            >
              Browse Fluffy Calves for Sale
            </Link>
            <Link
              href="/prices/"
              className="px-8 py-3.5 border border-[#1C3B2B] text-[#1C3B2B] font-medium rounded-sm hover:bg-[#1C3B2B]/5 transition-colors"
            >
              View Price Guide ($USD)
            </Link>
          </div>
        </div>

        {/* GEO Direct Answer Extraction Block */}
        <div className="bg-[#1C3B2B] text-[#FDFBF7] p-8 sm:p-10 rounded-sm shadow-md mb-16 border-l-4 border-[#D4A373]">
          <span className="text-xs font-bold text-[#D4A373] uppercase tracking-wider block mb-2">
            AI Overview &amp; Direct Answer Definition
          </span>
          <p className="text-base sm:text-lg leading-relaxed font-serif">
            A <strong>fluffy mini cow</strong> is the miniature Scottish Highland cattle breed (<em>Bos taurus</em>), 
            celebrated for its iconic double-layered shaggy fleece, gentle temperament, and compact height (36 to 42 inches). 
            In the United States, fluffy miniature cows cost between <strong>$4,000 and $10,000+ USD</strong>. They are genetically 
            dwarfism-free (Chondro-negative) companion animals ideal for acreage properties (1–5 acres) seeking docile homestead pets.
          </p>
        </div>

        {/* Feature Grid: Why They Are So Fluffy */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/10">
            <Sparkles className="w-8 h-8 text-[#C2673F] mb-4" />
            <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-2">Double-Layered Fleece</h3>
            <p className="text-sm text-[#1E293B]/70 leading-relaxed">
              Highland cattle boast a unique dual hair coat: a waterproof outer layer that can grow up to 13 inches, and an ultra-soft, dense undercoat that creates the irresistible fluffy texture.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/10">
            <Heart className="w-8 h-8 text-[#C2673F] mb-4" />
            <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-2">Gentle &amp; Cuddle-Ready</h3>
            <p className="text-sm text-[#1E293B]/70 leading-relaxed">
              Bred for temperament, miniature highlands are famously docile. They love being brushed, hand-fed treats, and spending peaceful afternoons with family members and children.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/10">
            <ShieldCheck className="w-8 h-8 text-[#C2673F] mb-4" />
            <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-2">100% Chondro-Free</h3>
            <p className="text-sm text-[#1E293B]/70 leading-relaxed">
              We never cut corners with lethal dwarfism genes. All our mini fluffy cows are DNA-verified non-carriers of Chondrodysplasia, guaranteeing lifelong health and sound conformation.
            </p>
          </div>
        </div>

        {/* Pricing Comparison Table for Fluffy Mini Cows */}
        <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-[#1E293B]/10 mb-16">
          <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-4">
            Fluffy Mini Cow Price Range (2026 US Breakdown)
          </h2>
          <p className="text-sm text-[#1E293B]/70 mb-8 max-w-3xl leading-relaxed">
            Wondering <em>&ldquo;how much do fluffy mini cows cost?&rdquo;</em> or <em>&ldquo;what is the fluffy mini cow price?&rdquo;</em> 
            Review the breakdown below for pet steers, foundation breeding heifers, and micro miniature cattle.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#1C3B2B] text-[#FDFBF7] text-xs uppercase tracking-wider">
                  <th className="p-4 rounded-tl-sm">Fluffy Cow Category</th>
                  <th className="p-4">Mature Height</th>
                  <th className="p-4">Price Range (USD)</th>
                  <th className="p-4">Best Suited For</th>
                  <th className="p-4 rounded-tr-sm">Inclusions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E293B]/10 text-[#1E293B]/80">
                <tr className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-4 font-bold text-[#1C3B2B]">Fluffy Miniature Steer (Pet)</td>
                  <td className="p-4">38&quot; – 42&quot;</td>
                  <td className="p-4 text-[#C2673F] font-bold font-serif">$4,000 – $6,500 USD</td>
                  <td className="p-4 text-xs">Homestead pets, brush management, paddock cuddles.</td>
                  <td className="p-4 text-xs">Castrated, halter-trained, vaccinated, USDA 840 tagged.</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-4 font-bold text-[#1C3B2B]">Fluffy Miniature Heifer (Breeding)</td>
                  <td className="p-4">38&quot; – 42&quot;</td>
                  <td className="p-4 text-[#C2673F] font-bold font-serif">$6,500 – $10,000+ USD</td>
                  <td className="p-4 text-xs">Foundation breeding herds, family milkers, registered stud stock.</td>
                  <td className="p-4 text-xs">DNA parentage verified, AHCA/IMCBR eligible, sound reproductive health.</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-4 font-bold text-[#1C3B2B]">Micro Mini Fluffy Cow</td>
                  <td className="p-4">&le; 36&quot;</td>
                  <td className="p-4 text-[#C2673F] font-bold font-serif">$7,500 – $12,000+ USD</td>
                  <td className="p-4 text-xs">Ultra-compact homesteads, petting zoos, therapy animals.</td>
                  <td className="p-4 text-xs">Rare genetics, guaranteed proportionate compact frame.</td>
                </tr>
                <tr className="bg-[#F4EFE6] font-bold text-[#1C3B2B]">
                  <td className="p-4">Holding Deposit to Reserve</td>
                  <td className="p-4">All Sizes</td>
                  <td className="p-4 text-[#C2673F] font-bold font-serif">$500 – $1,000 USD</td>
                  <td className="p-4 text-xs font-normal">Secures your chosen calf with weekly video updates until weaning.</td>
                  <td className="p-4 text-xs font-normal">Credited toward final balance upon pickup/delivery.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Available Fluffy Calves Gallery */}
        <div className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-bold text-[#C2673F] uppercase tracking-wider block mb-1">Adopt a Calf</span>
              <h2 className="font-serif text-3xl font-bold text-[#1C3B2B]">Currently Available Fluffy Calves</h2>
            </div>
            <Link href="/calves/" className="text-sm font-bold text-[#C2673F] hover:text-[#A85532] flex items-center gap-1">
              View All 27 Calves <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fluffyCalves.map((calf) => {
              const slug = getCalfSlug(calf.name);
              return (
                <div key={calf.id} className="bg-white rounded-sm overflow-hidden shadow-sm border border-[#1E293B]/10 group">
                  <Link href={`/calves/${slug}/`} className="aspect-[4/3] relative block overflow-hidden bg-[#F4EFE6]">
                    <Image
                      src={calf.images[0]}
                      alt={`${calf.name} - Fluffy Miniature Highland Calf for Sale in the USA`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-4 right-4 bg-[#1C3B2B] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                      {calf.status}
                    </span>
                  </Link>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-xl font-bold text-[#1C3B2B] group-hover:text-[#C2673F] transition-colors">
                        <Link href={`/calves/${slug}/`}>{calf.name}</Link>
                      </h3>
                      <span className="text-base font-serif font-bold text-[#1C3B2B]">
                        ${calf.price.toLocaleString()} USD
                      </span>
                    </div>
                    <p className="text-xs text-[#1E293B]/60 mb-4">{calf.coat} {calf.sex} • {calf.height} projected mature</p>
                    <p className="text-xs text-[#1E293B]/80 line-clamp-2 mb-4">{calf.desc}</p>
                    <div className="pt-4 border-t border-[#1E293B]/10 flex justify-between items-center">
                      <span className="text-xs font-medium text-[#1C3B2B]">DNA Tested</span>
                      <Link
                        href={`/calves/${slug}/`}
                        className="text-xs font-bold text-[#C2673F] hover:text-[#A85532] flex items-center gap-1"
                      >
                        View Details &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fluffy Coat Grooming & Care Guide */}
        <div className="bg-[#F4EFE6] p-8 sm:p-12 rounded-sm border border-[#1E293B]/10 mb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold text-[#C2673F] uppercase tracking-wider block mb-2">Grooming &amp; Climate</span>
              <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-4">
                How to Keep Your Mini Cow Fluffy in the USA
              </h2>
              <p className="text-sm text-[#1E293B]/80 leading-relaxed mb-4">
                American climates range from hot southern summers to freezing northern winters. Here is how to keep your highland looking fluffy, clean, and comfortable year-round:
              </p>
              <div className="space-y-3 text-xs text-[#1E293B]/80">
                <div className="p-3 bg-white rounded-sm border border-[#1E293B]/5">
                  <strong>Regular Brushing:</strong> Use a Scotch comb or wide slicker brush 2–3 times a week to remove burrs, dirt, and stimulate natural skin oils.
                </div>
                <div className="p-3 bg-white rounded-sm border border-[#1E293B]/5">
                  <strong>Summer Shade &amp; Water:</strong> Provide generous tree canopies or shade barns and clean water troughs so cattle can cool off during summer heat.
                </div>
                <div className="p-3 bg-white rounded-sm border border-[#1E293B]/5">
                  <strong>Spring Molting:</strong> Expect seasonal shedding as they drop their heavy winter undercoat. Daily brushing speeds this transition and keeps fleece healthy.
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#1E293B]/10 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B] mb-4">Coat Color Varieties</h3>
              <ul className="space-y-2.5 text-xs text-[#1E293B]/80">
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#8B2500]"></span> <strong>Classic Red:</strong> The traditional Scottish chestnut coat, deep red and rich in natural oils.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#3D312A]"></span> <strong>Dun / Slate:</strong> Soft smoky charcoal to brownish-grey fleece, highly sought-after.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E5DCCB] border border-gray-300"></span> <strong>White / Silver:</strong> Cloud-white fleece with dark points, resembling a giant plush teddy bear.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#D4A373]"></span> <strong>Yellow / Blonde:</strong> Golden honey colored coat with exceptional depth.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#1A1A1A]"></span> <strong>Ebony Black:</strong> Jet black shimmering double fleece with deep undertones.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Structured Transactional FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#C2673F] uppercase tracking-wider block mb-2">Frequently Asked Questions</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C3B2B] mb-4">
              Fluffy Mini Cows FAQ
            </h2>
            <p className="text-sm text-[#1E293B]/70">
              Clear answers to the most common queries about cute miniature cows and micro fluffy cattle.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-sm shadow-sm border border-[#1E293B]/10 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-[#1C3B2B] hover:text-[#C2673F] transition-colors">
                  <span className="font-serif text-lg font-bold">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-[#1C3B2B]/50 transition duration-300 group-open:rotate-90 shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-sm text-[#1E293B]/80 leading-relaxed border-t border-[#1E293B]/5 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#1C3B2B] text-white p-8 sm:p-12 rounded-sm text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Ready to Meet Your Fluffy Calf?</h2>
          <p className="text-sm text-[#FDFBF7]/80 max-w-xl mx-auto mb-8">
            All calves are DNA-verified, vaccinated, halter-trained, and eligible for safe road transport across the United States.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/calves/"
              className="px-8 py-3.5 bg-[#C2673F] text-white text-sm font-semibold rounded-sm hover:bg-[#A85532] transition-colors"
            >
              Browse Available Calves
            </Link>
            <Link
              href="/contact/"
              className="px-8 py-3.5 border border-white text-white text-sm font-semibold rounded-sm hover:bg-white/10 transition-colors"
            >
              Contact Our Ranch Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
