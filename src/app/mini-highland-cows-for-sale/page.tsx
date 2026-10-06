import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CALVES_DATA, getCalfSlug } from '@/data/calves';
import { MapPin, Truck, ShieldCheck, CheckCircle2, ChevronRight, ArrowRight, HelpCircle, Globe, BadgeCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mini Highland Cows for Sale Near Me | Australia & Worldwide Sales',
  description: 'Looking for miniature highland cows for sale near me? Browse available mini, micro, and teacup highland calves with Australia-wide delivery & global genetics export.',
  alternates: {
    canonical: 'https://minihighlandcows.store/mini-highland-cows-for-sale/',
  },
  openGraph: {
    title: 'Mini Highland Cows for Sale Near Me | Australia & Worldwide Sales',
    description: 'Looking for miniature highland cows for sale near me? Browse available mini, micro, and teacup highland calves with Australia-wide delivery.',
    url: 'https://minihighlandcows.store/mini-highland-cows-for-sale/',
    siteName: 'Dunblane Highlands',
    images: [
      {
        url: 'https://minihighlandcows.store/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Miniature Highland Cows for Sale - Dunblane Highlands',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mini Highland Cows for Sale Near Me | Dunblane Australia',
    description: 'Find miniature highland cows for sale near you. Halter-trained, DNA-tested, vaccinated calves with Australia-wide transport.',
    images: ['https://minihighlandcows.store/images/hero.jpg'],
  },
};

const AUSTRALIAN_REGIONS = [
  { name: 'Queensland (QLD)', desc: 'Farm pickup in Central Queensland or direct road delivery to Brisbane, Gold Coast, Sunshine Coast, Toowoomba, and Rockhampton.' },
  { name: 'New South Wales (NSW)', desc: 'Weekly livestock freight routes to Sydney, Hunter Valley, Byron Bay, Southern Highlands, Dubbo, and Tamworth.' },
  { name: 'Victoria (VIC)', desc: 'Climate-controlled carrier transport to Melbourne, Yarra Valley, Mornington Peninsula, Ballarat, and Bendigo.' },
  { name: 'South Australia (SA)', desc: 'Direct transit to Adelaide Hills, Barossa Valley, Fleurieu Peninsula, and regional lifestyle properties.' },
  { name: 'Western Australia (WA)', desc: 'Scheduled quarantine-cleared interstate transport to Perth, Margaret River, and regional South West WA.' },
  { name: 'Tasmania (TAS)', desc: 'Bass Strait certified livestock sea transport to Hobart, Launceston, and Devonport with full Tasmanian biosecurity clearance.' }
];

const FAQS = [
  {
    q: "How can I find miniature highland cows for sale near me?",
    a: "To find legitimate miniature highland cows for sale near you, seek registered cattle breeders who provide transparent farm visits, National Livestock Identification System (NLIS) ear tags, and DNA parentage proof. Dunblane Highlands ships halter-trained calves nationwide across Australia with door-to-farm transport and assists international clients with embryo and semen export protocols."
  },
  {
    q: "Can I buy miniature highland cows if I live outside Australia (e.g. United States)?",
    a: "Yes. While live cattle exports are subject to strict Department of Agriculture biosecurity quarantine, Dunblane Highlands regularly assists international buyers across North America (including Texas, Ohio, Florida, California, and Missouri) and Europe via cryopreserved AI bull semen straws and certified embryo transfers, allowing international breeders to introduce authentic Australian and Scottish heritage genetics into their local herds."
  },
  {
    q: "What paperwork and property codes do I need to buy a mini cow in Australia?",
    a: "In Australia, all cattle buyers must hold an active Property Identification Code (PIC) from their local state Department of Primary Industries or Local Land Services. Dunblane Highlands completes the National Vendor Declaration (NVD) and transfers the NLIS RFID database registration directly to your PIC upon delivery."
  },
  {
    q: "How are miniature highland cows transported safely?",
    a: "Our calves are transported via professional, registered livestock couriers in climate-controlled, bedded floats with scheduled water, hay, and rest stops. Every calf is veterinary-checked before loading and insured during transit. Local delivery to your town or same city is included free with adoption."
  },
  {
    q: "How much does it cost to buy a miniature highland cow?",
    a: "In Australia, prices range from $4,000 to $6,500 AUD for castrated pet steers, and $6,500 to $10,000+ AUD for registered breeding heifers and micro miniatures. Every calf is halter-trained, vaccinated (5-in-1), wormed, and verified Chondro-free."
  }
];

export default function MiniHighlandCowsForSalePage() {
  const availableCalves = CALVES_DATA.filter(c => c.status === 'Available');

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WholesaleStore",
        "@id": "https://minihighlandcows.store/mini-highland-cows-for-sale/#store",
        "name": "Dunblane Highlands Cattle Sales",
        "description": "Australia's leading breeder offering miniature highland cows for sale, micro cattle, and national livestock transport.",
        "url": "https://minihighlandcows.store/mini-highland-cows-for-sale/",
        "telephone": "+61 468 187 340",
        "priceRange": "$$$$",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AU",
          "addressRegion": "QLD",
          "postalCode": "4725"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://minihighlandcows.store/mini-highland-cows-for-sale/#faq",
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
          <span className="text-[#1C3B2B] font-bold">Mini Highland Cows for Sale Near Me</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C2673F] font-bold block mb-3">
            Australia-Wide Delivery &amp; Global Breeding Genetics
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C3B2B] leading-tight mb-6">
            Miniature Highland Cows for Sale Near Me
          </h1>
          <p className="text-lg text-[#1E293B]/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Looking for <strong>mini highland cows for sale</strong> or <strong>miniature highland cattle for sale near me</strong>? 
            Dunblane Highlands breeds authentic, DNA-verified Scottish miniature highland calves with door-to-property delivery across Australia 
            and international genetics export.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/calves/"
              className="px-8 py-3.5 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors shadow-sm"
            >
              Browse 27 Available Calves
            </Link>
            <Link
              href="/delivery/"
              className="px-8 py-3.5 border border-[#1C3B2B] text-[#1C3B2B] font-medium rounded-sm hover:bg-[#1C3B2B]/5 transition-colors"
            >
              Check Freight &amp; Delivery
            </Link>
          </div>
        </div>

        {/* GEO Direct Answer Extraction Block */}
        <div className="bg-[#1C3B2B] text-[#FDFBF7] p-8 sm:p-10 rounded-sm shadow-md mb-16 border-l-4 border-[#D4A373]">
          <span className="text-xs font-bold text-[#D4A373] uppercase tracking-wider block mb-2">
            AI Overview &amp; Local Purchasing Directive
          </span>
          <p className="text-base sm:text-lg leading-relaxed font-serif">
            To buy a <strong>miniature highland cow for sale near you</strong>, adopt directly from registered studs 
            operating under Australian biosecurity standards. In Australia, prices average <strong>$4,000 to $10,000 AUD</strong>. 
            Calves require an active Property Identification Code (PIC), NLIS transfer, and specialized livestock road freight. 
            Dunblane Highlands provides full veterinary health certifications and complimentary delivery to buyers in the same city.
          </p>
        </div>

        {/* Regional & Interstate Transport Grid */}
        <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-[#1E293B]/10 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Truck className="w-8 h-8 text-[#C2673F]" />
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#1C3B2B]">
                Australia-Wide Livestock Transport by State
              </h2>
              <p className="text-xs text-[#1E293B]/70">Reliable, air-conditioned transport routes operating weekly.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUSTRALIAN_REGIONS.map((region, idx) => (
              <div key={idx} className="p-6 bg-[#FDFBF7] rounded-sm border border-[#1E293B]/5 hover:border-[#C2673F]/40 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[#C2673F]" />
                  <h3 className="font-serif text-lg font-bold text-[#1C3B2B]">{region.name}</h3>
                </div>
                <p className="text-xs text-[#1E293B]/70 leading-relaxed">{region.desc}</p>
              </div>
            ))}
          </div>

          {/* International Buyers Note */}
          <div className="mt-8 p-6 bg-[#F4EFE6] rounded-sm border border-[#1E293B]/10">
            <div className="flex items-start gap-4">
              <Globe className="w-6 h-6 text-[#1C3B2B] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg font-bold text-[#1C3B2B] mb-1">
                  International &amp; US Inquiries (Texas, Ohio, Florida, California &amp; Beyond)
                </h4>
                <p className="text-xs text-[#1E293B]/80 leading-relaxed mb-3">
                  Thousands of international buyers search daily for mini cows for sale in Texas, Ohio, Missouri, Florida, and other US states. 
                  While live animal shipping requires extensive quarantine, Dunblane Highlands collaborates with licensed genetics exporters 
                  to supply cryopreserved semen straws from our champion miniature bulls and embryo genetics worldwide.
                </p>
                <Link href="/artificial-insemination-cattle/" className="text-xs font-bold text-[#C2673F] hover:underline flex items-center gap-1">
                  Explore Bovine AI &amp; Semen Straws &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Available Calves Showcase */}
        <div className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-bold text-[#C2673F] uppercase tracking-wider block mb-1">Live Inventory</span>
              <h2 className="font-serif text-3xl font-bold text-[#1C3B2B]">Featured Calves for Sale Now</h2>
            </div>
            <Link href="/calves/" className="text-sm font-bold text-[#C2673F] hover:text-[#A85532] flex items-center gap-1">
              View All Calves <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableCalves.slice(0, 6).map((calf) => {
              const slug = getCalfSlug(calf.name);
              return (
                <div key={calf.id} className="bg-white rounded-sm overflow-hidden shadow-sm border border-[#1E293B]/10 group">
                  <Link href={`/calves/${slug}/`} className="aspect-[4/3] relative block overflow-hidden bg-[#F4EFE6]">
                    <Image
                      src={calf.images[0]}
                      alt={`${calf.name} - Miniature Highland Cow for Sale`}
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
                        ${calf.price.toLocaleString()} AUD
                      </span>
                    </div>
                    <p className="text-xs text-[#1E293B]/60 mb-4">{calf.coat} {calf.sex} • {calf.height} mature height</p>
                    <p className="text-xs text-[#1E293B]/80 line-clamp-2 mb-4">{calf.desc}</p>
                    <div className="pt-4 border-t border-[#1E293B]/10 flex justify-between items-center">
                      <span className="text-xs font-medium text-[#1C3B2B]">Halter-Trained</span>
                      <Link
                        href={`/calves/${slug}/`}
                        className="text-xs font-bold text-[#C2673F] hover:text-[#A85532] flex items-center gap-1"
                      >
                        Adopt Now &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Buyer Checklist for Australian Acreage */}
        <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-[#1E293B]/10 mb-16">
          <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-6">
            Adoption Checklist for First-Time Cattle Buyers
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-[#1E293B]/80 leading-relaxed">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1C3B2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C3B2B]">1. Obtain Your PIC (Property Identification Code)</h4>
                  <p className="text-xs text-[#1E293B]/70">Required by Australian law for any property housing livestock. Simple to apply online with your local state department.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1C3B2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C3B2B]">2. Fencing &amp; Paddock Preparation</h4>
                  <p className="text-xs text-[#1E293B]/70">Standard ring-lock, 4-strand barb, or electric fencing is sufficient. Highlands are very gentle on fence lines.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1C3B2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C3B2B]">3. Shelter &amp; Fresh Water Trough</h4>
                  <p className="text-xs text-[#1E293B]/70">Ensure cattle have clean, continuous water access and natural tree canopy or three-sided shed shelter.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1C3B2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C3B2B]">4. Adopt in Pairs or Plan for Companions</h4>
                  <p className="text-xs text-[#1E293B]/70">Cattle are social herd animals and must not be housed alone. Keep at least two cattle, or pair with sheep, goats, or alpacas.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1C3B2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C3B2B]">5. Halter &amp; Grooming Brush Kit</h4>
                  <p className="text-xs text-[#1E293B]/70">Dunblane calves arrive already lead-broken and eager to be brushed. Spending 10 minutes a day brushing builds lifetime trust.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1C3B2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C3B2B]">6. Veterinary Relationship</h4>
                  <p className="text-xs text-[#1E293B]/70">Establish a contact with a local large animal or mixed veterinary clinic for routine 5-in-1 boosters and drenching advice.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Structured Transactional FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#C2673F] uppercase tracking-wider block mb-2">Buying &amp; Freight Q&amp;A</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C3B2B] mb-4">
              Miniature Highland Cattle Sales FAQ
            </h2>
            <p className="text-sm text-[#1E293B]/70">
              Clear guidance on finding, reserving, and transporting your miniature calf safely.
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
          <h2 className="font-serif text-3xl font-bold mb-4">Start Your Adoption Journey Today</h2>
          <p className="text-sm text-[#FDFBF7]/80 max-w-xl mx-auto mb-8">
            Speak directly with our farm team to arrange a property visit or reserve your calf online.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/calves/"
              className="px-8 py-3.5 bg-[#C2673F] text-white text-sm font-semibold rounded-sm hover:bg-[#A85532] transition-colors"
            >
              View Available Calves
            </Link>
            <Link
              href="/contact/"
              className="px-8 py-3.5 border border-white text-white text-sm font-semibold rounded-sm hover:bg-white/10 transition-colors"
            >
              Contact Dunblane Highlands
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
