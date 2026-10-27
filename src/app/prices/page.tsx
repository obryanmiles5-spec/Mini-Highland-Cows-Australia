import { Metadata } from 'next';
import Link from 'next/link';
import { DollarSign, CheckCircle2, Shield, HelpCircle, ArrowRight, ChevronRight, Calculator, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mini Highland Cow Cost & Price Guide USA | 2026 Prices',
  description: 'How much does a mini highland cow cost? Complete 2026 price guide for miniature highland cows, micro mini cow price, teacup calf costs, and ongoing care in the USA.',
  alternates: {
    canonical: 'https://minihighlandcows.store/prices/',
    languages: {
      'en-US': 'https://minihighlandcows.store/prices/',
      'x-default': 'https://minihighlandcows.store/prices/',
    },
  },
  openGraph: {
    title: 'Mini Highland Cow Cost & Price Guide USA | 2026 Prices',
    description: 'How much does a miniature highland cow cost in the USA? Detailed 2026 price guide for heifers, steers, bulls, micro cows, holding deposits, and ongoing care costs.',
    url: 'https://minihighlandcows.store/prices/',
    siteName: 'Dunblane Highlands USA',
    images: [
      {
        url: 'https://minihighlandcows.store/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Miniature Highland Cow Prices USA - Dunblane Highlands',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mini Highland Cow Cost & Price Guide USA | 2026 Prices',
    description: 'Transparent 2026 pricing for American miniature highland calves. Inclusions, deposits, and payment methods.',
    images: ['https://minihighlandcows.store/images/hero.jpg'],
  },
};

const PRICE_FAQS = [
  {
    q: "How much does a mini highland cow cost in the United States?",
    a: "In the United States, a mini highland cow costs between $4,000 and $10,000+ USD. A castrated pet steer typically costs between $4,000 and $6,500 USD, making them the most affordable option for acreage pets and brush clearing. A registered breeding heifer costs between $6,500 and $10,000 USD, while rare micro mini highland cows or unique colors (such as silver, dun, or white) can reach $10,000 to $12,500 USD."
  },
  {
    q: "How much is a micro miniature highland cow?",
    a: "A micro miniature highland cow (maturing at 36 inches or less at the hip) costs between $7,500 and $12,500 USD. Micro mini cows command a premium due to years of careful selective breeding of naturally small, Chondrodysplasia-free genetics and high demand across Texas, the Midwest, Florida, and nationwide."
  },
  {
    q: "How much is a teacup mini highland cow?",
    a: "While 'teacup' is an informal marketing term for pocket or micro miniature cattle, calves marketed under this category typically cost between $8,000 and $14,000 USD. Ethical American breeders test all breeding stock to ensure compact size is achieved through natural small-frame genetics rather than skeletal dwarfism genes."
  },
  {
    q: "How much does it cost to keep and feed a mini cow per year in the US?",
    a: "Ongoing annual maintenance for a miniature highland cow in the United States averages between $500 and $1,100 USD per cow. This includes supplemental grass/alfalfa hay ($300–$600), mineral salt blocks ($40–$80), routine annual vaccinations (bovine 7-in-1 / 8-in-1, $35), bi-annual deworming ($40), and occasional hoof trimming ($80–$150)."
  },
  {
    q: "What is included in the purchase price at Dunblane Highlands USA?",
    a: "Every calf purchased from Dunblane Highlands includes official USDA 840 RFID ear tagging, full veterinary Certificate of Veterinary Inspection (CVI), current vaccinations, broad-spectrum deworming, DNA parentage verification, comprehensive halter and lead training, and complimentary delivery within the local county or same city."
  },
  {
    q: "How much holding deposit is required to reserve a calf?",
    a: "A standard holding deposit of $500 to $1,000 USD is required to reserve an available calf. Once placed, your calf is officially reserved, taken off the open market, and you receive weekly video progress updates until weaning and transport."
  }
];

export default function PricesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PriceSpecification",
        "@id": "https://minihighlandcows.store/prices/#pricing",
        "name": "American Miniature Highland Cattle Pricing Guide",
        "priceCurrency": "USD",
        "minPrice": "4000",
        "maxPrice": "10000",
        "description": "Comprehensive pricing overview for miniature, micro, and teacup Scottish Highland calves bred by Dunblane Highlands Ranch in Canton, Texas, USA."
      },
      {
        "@type": "FAQPage",
        "@id": "https://minihighlandcows.store/prices/#faq",
        "mainEntity": PRICE_FAQS.map(f => ({
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
          <span className="text-[#1C3B2B] font-bold">Price Guide</span>
        </nav>

        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C2673F] font-bold block mb-3">
            Transparent Breeder Pricing 2026 (USA)
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C3B2B] leading-tight mb-6">
            Miniature Highland Cow Price Guide (USA)
          </h1>
          <p className="text-lg text-[#1E293B]/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Wondering <strong>how much does a mini highland cow cost</strong> or <strong>what is the miniature cow price range</strong> in the United States? 
            At Dunblane Highlands, our prices range between $4,000 and $10,000+ USD depending on sex, pedigree genetics, 
            coat color, and mature projected height.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/calves/"
              className="px-8 py-3.5 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors shadow-sm"
            >
              View Available Calves
            </Link>
            <Link
              href="/reserve/"
              className="px-8 py-3.5 border border-[#1C3B2B] text-[#1C3B2B] font-medium rounded-sm hover:bg-[#1C3B2B]/5 transition-colors"
            >
              Reserve a Calf
            </Link>
          </div>
        </div>

        {/* GEO Direct Answer Extraction Block */}
        <div className="bg-[#1C3B2B] text-[#FDFBF7] p-8 sm:p-10 rounded-sm shadow-md mb-16 border-l-4 border-[#D4A373]">
          <span className="text-xs font-bold text-[#D4A373] uppercase tracking-wider block mb-2">
            AI Overview &amp; Direct Answer Definition
          </span>
          <p className="text-base sm:text-lg leading-relaxed font-serif">
            In the United States, the cost of a <strong>miniature highland cow</strong> ranges from <strong>$4,000 to $10,000+ USD</strong>. 
            Castrated pet steers cost $4,000 to $6,500 USD, registered breeding heifers cost $6,500 to $10,000 USD, and micro miniature cattle 
            (under 36 inches) cost $7,500 to $12,500 USD. Prices reflect DNA parentage verification, Chondrodysplasia-free testing, halter training, USDA 840 RFID tags, and interstate veterinary inspection.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#C2673F] uppercase tracking-wider block mb-2">Pet &amp; Lawn Mowers</span>
              <h3 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-2">Steers (Pets)</h3>
              <div className="mb-4">
                <span className="text-4xl font-serif font-bold text-[#1C3B2B]">$4,000 - $6,500</span>
                <span className="text-xs text-[#1E293B]/60 block mt-1">USD • Complete Package</span>
              </div>
              <p className="text-sm text-[#1E293B]/70 leading-relaxed mb-6">
                Castrated males make the most affectionate, docile lifestyle homestead pets. They retain full fluffy double coats without breeding hormonal behaviors.
              </p>
              <ul className="space-y-2.5 text-xs text-[#1E293B]/80 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C3B2B]" /> Castrated and healed cleanly
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C3B2B]" /> Daily halter training &amp; lead ready
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C3B2B]" /> USDA 840 ear tagged &amp; fully vaccinated
                </li>
              </ul>
            </div>
            <Link
              href="/calves/"
              className="w-full py-3 text-center border border-[#1C3B2B] text-[#1C3B2B] font-medium rounded-sm hover:bg-[#1C3B2B] hover:text-white transition-colors text-sm"
            >
              View Available Steers
            </Link>
          </div>

          <div className="bg-[#1C3B2B] text-[#FDFBF7] p-8 rounded-sm shadow-md relative flex flex-col justify-between">
            <span className="absolute top-4 right-4 bg-[#C2673F] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
              High Demand
            </span>
            <div>
              <span className="text-xs font-bold text-[#D4A373] uppercase tracking-wider block mb-2">Breeding &amp; Family Milk</span>
              <h3 className="font-serif text-3xl font-bold text-white mb-2">Heifers (Females)</h3>
              <div className="mb-4">
                <span className="text-4xl font-serif font-bold text-white">$6,500 - $10,000+</span>
                <span className="text-xs text-[#FDFBF7]/70 block mt-1">USD • Complete Pedigree</span>
              </div>
              <p className="text-sm text-[#FDFBF7]/80 leading-relaxed mb-6">
                Registered breeding females from proven maternal bloodlines. Capable of producing rich homestead milk and future registered miniature calves.
              </p>
              <ul className="space-y-2.5 text-xs text-[#FDFBF7]/90 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A373]" /> 100% DNA parentage verification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A373]" /> Chondro-tested non-carrier
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A373]" /> Docile temperament &amp; hand-fed
                </li>
              </ul>
            </div>
            <Link
              href="/calves/"
              className="w-full py-3 text-center bg-[#C2673F] text-white font-medium rounded-sm hover:bg-[#A85532] transition-colors text-sm"
            >
              View Available Heifers
            </Link>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#C2673F] uppercase tracking-wider block mb-2">Micro &amp; Rare Genetics</span>
              <h3 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-2">Micro Mini Cows</h3>
              <div className="mb-4">
                <span className="text-4xl font-serif font-bold text-[#1C3B2B]">$7,500 - $12,500</span>
                <span className="text-xs text-[#1E293B]/60 block mt-1">USD • Ultra Compact (&le;36&quot;)</span>
              </div>
              <p className="text-sm text-[#1E293B]/70 leading-relaxed mb-6">
                Naturally small genetics standing under 36 inches at 3 years. Selected for small lifestyle homesteads, therapy companions, and rare coat colors.
              </p>
              <ul className="space-y-2.5 text-xs text-[#1E293B]/80 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C3B2B]" /> Guaranteed proportionate dwarfism-free
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C3B2B]" /> Extremely docile and gentle around kids
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C3B2B]" /> Rare silver, dun, white &amp; black fleece
                </li>
              </ul>
            </div>
            <Link
              href="/micro-highland-cows/"
              className="w-full py-3 text-center border border-[#1C3B2B] text-[#1C3B2B] font-medium rounded-sm hover:bg-[#1C3B2B] hover:text-white transition-colors text-sm"
            >
              View Micro Highlands
            </Link>
          </div>
        </div>

        {/* Master Comparison Matrix Table */}
        <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-[#1E293B]/10 mb-16">
          <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-4">
            Complete Miniature Cow Price Range Matrix (2026 USD)
          </h2>
          <p className="text-sm text-[#1E293B]/70 mb-8 max-w-3xl leading-relaxed">
            Quick reference guide answering <em>&ldquo;how much are miniature highland cows&rdquo;</em> and <em>&ldquo;cost of a mini cow&rdquo;</em> in the USA.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#1C3B2B] text-[#FDFBF7] text-xs uppercase tracking-wider">
                  <th className="p-4 rounded-tl-sm">Cattle Classification</th>
                  <th className="p-4">Height Range</th>
                  <th className="p-4">Price Range (USD)</th>
                  <th className="p-4 rounded-tr-sm">Primary Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E293B]/10 text-[#1E293B]/80">
                <tr className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-4 font-bold text-[#1C3B2B]">Standard Miniature Steer</td>
                  <td className="p-4">38&quot; – 42&quot;</td>
                  <td className="p-4 text-[#C2673F] font-bold font-serif">$4,000 – $6,500 USD</td>
                  <td className="p-4 text-xs">Pasture pet, brush clearing, family companion</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-4 font-bold text-[#1C3B2B]">Registered Miniature Heifer</td>
                  <td className="p-4">38&quot; – 42&quot;</td>
                  <td className="p-4 text-[#C2673F] font-bold font-serif">$6,500 – $10,000 USD</td>
                  <td className="p-4 text-xs">Foundation breeding cow, rich homestead milk</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-4 font-bold text-[#1C3B2B]">Micro Mini Highland Cow</td>
                  <td className="p-4">&le; 36&quot;</td>
                  <td className="p-4 text-[#C2673F] font-bold font-serif">$7,500 – $12,500 USD</td>
                  <td className="p-4 text-xs">Ultra-compact homesteads, therapy cattle</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-4 font-bold text-[#1C3B2B]">Teacup Miniature Calf</td>
                  <td className="p-4">&le; 34&quot;</td>
                  <td className="p-4 text-[#C2673F] font-bold font-serif">$8,000 – $14,000 USD</td>
                  <td className="p-4 text-xs">Rare pocket size, show companion</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-4 font-bold text-[#1C3B2B]">Breeding Herd Bull (Sire)</td>
                  <td className="p-4">38&quot; – 44&quot;</td>
                  <td className="p-4 text-[#C2673F] font-bold font-serif">$6,000 – $9,500 USD</td>
                  <td className="p-4 text-xs">Certified stud sire, proven fertility</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-4 font-bold text-[#1C3B2B]">AI Bull Semen Straw</td>
                  <td className="p-4">Cryopreserved</td>
                  <td className="p-4 text-[#C2673F] font-bold font-serif">$25 – $80 USD / straw</td>
                  <td className="p-4 text-xs">Bovine artificial insemination program</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Inclusions */}
        <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-[#1E293B]/10 mb-16">
          <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-6">
            What is Included in the Purchase Price?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-[#1E293B]/80 leading-relaxed">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1C3B2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C3B2B]">Veterinary Health Clearance &amp; CVI</h4>
                  <p className="text-xs text-[#1E293B]/70">Full vet check, sound heart/lungs, eyes, joints, and interstate Certificate of Veterinary Inspection.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1C3B2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C3B2B]">USDA 840 RFID Tagging</h4>
                  <p className="text-xs text-[#1E293B]/70">Equipped with official USDA 840 electronic RFID ear tag for national animal traceability.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1C3B2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C3B2B]">Vaccinations &amp; Deworming</h4>
                  <p className="text-xs text-[#1E293B]/70">Current on 7-in-1 / 8-in-1 bovine clostridial vaccines, BVDV testing, and broad-spectrum deworming.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1C3B2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C3B2B]">Comprehensive Halter Training</h4>
                  <p className="text-xs text-[#1E293B]/70">Each calf is lead-trained, accustomed to humans, grooming brushes, and gentle handling.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1C3B2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C3B2B]">Free Delivery Within Local County &amp; Same City</h4>
                  <p className="text-xs text-[#1E293B]/70">Complimentary local delivery included, plus affordable nationwide livestock transport rates.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1C3B2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C3B2B]">Secure Payment Protection</h4>
                  <p className="text-xs text-[#1E293B]/70">Accepted via Bank Wire, ACH, Credit Card, Zelle &amp; Crypto (USDT, BTC).</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deposit Policy */}
        <div className="bg-[#F4EFE6] p-8 sm:p-12 rounded-sm border border-[#1E293B]/10 mb-16">
          <h2 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-4">
            Reservation &amp; Holding Deposit Policy
          </h2>
          <p className="text-sm text-[#1E293B]/80 leading-relaxed max-w-3xl mb-6">
            A standard holding deposit of <strong>$500 to $1,000 USD</strong> is required to reserve an available calf. 
            Once reserved, the calf is removed from open sale, and weekly photo and video updates are provided until pickup or delivery date. 
            The remaining balance is due prior to departure.
          </p>
          <Link
            href="/reserve/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors text-sm"
          >
            Submit a Reservation Request <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Structured Transactional FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#C2673F] uppercase tracking-wider block mb-2">Cost &amp; Budget Q&amp;A</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C3B2B] mb-4">
              Miniature Cow Prices &amp; Costs FAQ
            </h2>
            <p className="text-sm text-[#1E293B]/70">
              Clear answers to queries about mini cow cost, micro cow price, and ongoing expenses in the USA.
            </p>
          </div>

          <div className="space-y-4">
            {PRICE_FAQS.map((faq, idx) => (
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

        {/* CTA */}
        <div className="bg-[#1C3B2B] text-white p-8 sm:p-12 rounded-sm text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Ready to Choose Your Miniature Calf?</h2>
          <p className="text-sm text-[#FDFBF7]/80 max-w-xl mx-auto mb-8">
            Check our real-time catalogue of available heifers, steers, and micro miniature calves in the United States.
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
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
