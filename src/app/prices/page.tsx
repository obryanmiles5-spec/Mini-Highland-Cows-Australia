import { Metadata } from 'next';
import Link from 'next/link';
import { DollarSign, CheckCircle2, Shield, HelpCircle, ArrowRight, ChevronRight, Calculator, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mini Highland Cow Cost & Price Guide Australia | 2026 Prices',
  description: 'How much does a mini highland cow cost? Complete 2026 price guide for miniature highland cows, micro mini cow price, teacup calf costs, and ongoing care in Australia.',
  alternates: {
    canonical: 'https://minihighlandcows.store/prices/',
  },
  openGraph: {
    title: 'Mini Highland Cow Cost & Price Guide Australia | 2026 Prices',
    description: 'How much does a miniature highland cow cost in Australia? Detailed 2026 price guide for heifers, steers, bulls, micro cows, holding deposits, and ongoing care costs.',
    url: 'https://minihighlandcows.store/prices/',
    siteName: 'Dunblane Highlands',
    images: [
      {
        url: 'https://minihighlandcows.store/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Miniature Highland Cow Prices Australia - Dunblane Pastoral',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mini Highland Cow Cost & Price Guide Australia | 2026 Prices',
    description: 'Transparent 2026 pricing for Australian miniature highland calves. Inclusions, deposits, and payment methods.',
    images: ['https://minihighlandcows.store/images/hero.jpg'],
  },
};

const PRICE_FAQS = [
  {
    q: "How much does a mini highland cow cost in Australia?",
    a: "In Australia, a mini highland cow costs between $4,000 and $10,000+ AUD. A castrated steer typically costs between $4,000 and $6,500 AUD, making them the most affordable option for paddock pets. A registered breeding heifer costs between $6,500 and $10,000 AUD, while rare micro mini highland cows or unique colors (such as silver, dun, or white) can reach $10,000 to $12,500 AUD."
  },
  {
    q: "How much is a micro miniature highland cow?",
    a: "A micro miniature highland cow (maturing at 36 inches or less at the hip) costs between $7,500 and $12,500 AUD ($5,000 to $9,000 USD). Micro mini cows command a premium due to years of careful selective breeding of naturally small, Chondrodysplasia-free genetics and high global demand."
  },
  {
    q: "How much is a teacup mini highland cow?",
    a: "While 'teacup' is an informal marketing term for pocket or micro miniature cattle, calves marketed under this category typically cost between $8,000 and $14,000 AUD. Ethical breeders test all breeding stock to ensure compact size is achieved through natural genetics rather than skeletal dwarfism genes."
  },
  {
    q: "How much does it cost to keep and feed a mini cow per year?",
    a: "Ongoing annual maintenance for a miniature highland cow in Australia averages between $600 and $1,200 AUD per cow. This includes supplemental lucerne/pasture hay ($300–$600), trace mineral blocks ($50–$100), routine vaccinations (Ultravac 5-in-1, $40), bi-annual drenching for parasites ($50), and annual hoof trims ($100–$200)."
  },
  {
    q: "What is included in the purchase price at Dunblane Highlands?",
    a: "Every calf purchased from Dunblane Highlands includes complete NLIS electronic ear tagging, full veterinary health clearance, current 5-in-1 vaccinations, broad-spectrum drenching, DNA parentage verification, comprehensive halter and lead training, and complimentary delivery to the buyer's home city."
  },
  {
    q: "How much holding deposit is required to reserve a calf?",
    a: "A standard holding deposit of $500 to $1,000 AUD is required to reserve an available calf. Once placed, your calf is officially reserved, taken off the open market, and you receive weekly video progress updates until weaning and transport."
  }
];

export default function PricesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PriceSpecification",
        "@id": "https://minihighlandcows.store/prices/#pricing",
        "name": "Australian Miniature Highland Cattle Pricing Guide",
        "priceCurrency": "AUD",
        "minPrice": "4000",
        "maxPrice": "10000",
        "description": "Comprehensive pricing overview for miniature, micro, and teacup Scottish Highland calves bred by Dunblane Highlands in Queensland, Australia."
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
            Transparent Breeder Pricing 2026
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C3B2B] leading-tight mb-6">
            Miniature Highland Cow Price Guide (Australia)
          </h1>
          <p className="text-lg text-[#1E293B]/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Wondering <strong>how much does a mini highland cow cost</strong> or <strong>what is the miniature cow price range</strong>? 
            At Dunblane Highlands, our prices range between $4,000 and $10,000+ AUD depending on sex, pedigree genetics, 
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
            In Australia, the cost of a <strong>miniature highland cow</strong> ranges from <strong>$4,000 to $10,000+ AUD</strong> ($2,600 to $7,000+ USD). 
            Castrated pet steers cost $4,000 to $6,500 AUD, registered breeding heifers cost $6,500 to $10,000 AUD, and micro miniature cattle 
            (under 36 inches) cost $7,500 to $12,500 AUD. Price reflects DNA verification, Chondrodysplasia-free testing, halter training, and NLIS registration.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#C2673F] uppercase tracking-wider block mb-2">Pet &amp; Lawn Mowers</span>
              <h3 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-2">Steers (Wethers)</h3>
              <div className="mb-4">
                <span className="text-4xl font-serif font-bold text-[#1C3B2B]">$4,000 - $6,500</span>
                <span className="text-xs text-[#1E293B]/60 block mt-1">AUD • Complete Package</span>
              </div>
              <p className="text-sm text-[#1E293B]/70 leading-relaxed mb-6">
                Castrated males make the most affectionate, docile lifestyle farm pets. They retain full fluffy coats without breeding hormonal behaviors.
              </p>
              <ul className="space-y-2.5 text-xs text-[#1E293B]/80 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C3B2B]" /> Castrated and healed cleanly
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C3B2B]" /> Daily halter training &amp; lead ready
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C3B2B]" /> NLIS ear tagged &amp; 5-in-1 vaccinated
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
                <span className="text-xs text-[#FDFBF7]/70 block mt-1">AUD • Complete Pedigree</span>
              </div>
              <p className="text-sm text-[#FDFBF7]/80 leading-relaxed mb-6">
                Registered breeding females from proven maternal bloodlines. Capable of producing rich homestead milk and future registered mini calves.
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
                <span className="text-xs text-[#1E293B]/60 block mt-1">AUD • Ultra Compact (&le;36&quot;)</span>
              </div>
              <p className="text-sm text-[#1E293B]/70 leading-relaxed mb-6">
                Naturally small genetics standing under 36 inches at 3 years. Selected for small lifestyle acreage, therapy companions, and rare colors.
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
            Complete Miniature Cow Price Range Matrix (2026)
          </h2>
          <p className="text-sm text-[#1E293B]/70 mb-8 max-w-3xl leading-relaxed">
            Quick reference guide answering <em>&ldquo;how much are miniature highland cows&rdquo;</em> and <em>&ldquo;cost of a mini cow&rdquo;</em> across all categories.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#1C3B2B] text-[#FDFBF7] text-xs uppercase tracking-wider">
                  <th className="p-4 rounded-tl-sm">Cattle Classification</th>
                  <th className="p-4">Height Range</th>
                  <th className="p-4">Price Range (AUD)</th>
                  <th className="p-4">Price Range (USD)</th>
                  <th className="p-4 rounded-tr-sm">Primary Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E293B]/10 text-[#1E293B]/80">
                <tr className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-4 font-bold text-[#1C3B2B]">Standard Miniature Steer</td>
                  <td className="p-4">38&quot; – 42&quot;</td>
                  <td className="p-4 text-[#C2673F] font-bold font-serif">$4,000 – $6,500</td>
                  <td className="p-4 font-serif">$2,600 – $4,200</td>
                  <td className="p-4 text-xs">Paddock pet, grass mowing, photo cuddles</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-4 font-bold text-[#1C3B2B]">Registered Miniature Heifer</td>
                  <td className="p-4">38&quot; – 42&quot;</td>
                  <td className="p-4 text-[#C2673F] font-bold font-serif">$6,500 – $10,000</td>
                  <td className="p-4 font-serif">$4,200 – $6,800</td>
                  <td className="p-4 text-xs">Foundation breeding cow, rich family milk</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-4 font-bold text-[#1C3B2B]">Micro Mini Highland Cow</td>
                  <td className="p-4">&le; 36&quot;</td>
                  <td className="p-4 text-[#C2673F] font-bold font-serif">$7,500 – $12,500</td>
                  <td className="p-4 font-serif">$5,000 – $8,500</td>
                  <td className="p-4 text-xs">Ultra-compact homesteads, petting zoos</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-4 font-bold text-[#1C3B2B]">Teacup Miniature Calf</td>
                  <td className="p-4">&le; 34&quot;</td>
                  <td className="p-4 text-[#C2673F] font-bold font-serif">$8,000 – $14,000</td>
                  <td className="p-4 font-serif">$5,500 – $9,500</td>
                  <td className="p-4 text-xs">Rare pocket size, show companion</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-4 font-bold text-[#1C3B2B]">Breeding Herd Bull (Sire)</td>
                  <td className="p-4">38&quot; – 44&quot;</td>
                  <td className="p-4 text-[#C2673F] font-bold font-serif">$6,000 – $9,500</td>
                  <td className="p-4 font-serif">$4,000 – $6,500</td>
                  <td className="p-4 text-xs">Certified stud sire, high fertility</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-4 font-bold text-[#1C3B2B]">AI Bull Semen Straw</td>
                  <td className="p-4">Cryopreserved</td>
                  <td className="p-4 text-[#C2673F] font-bold font-serif">$35 – $120 / straw</td>
                  <td className="p-4 font-serif">$25 – $80 / straw</td>
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
                  <h4 className="font-bold text-[#1C3B2B]">Veterinary Health Clearance</h4>
                  <p className="text-xs text-[#1E293B]/70">Full vet check, sound heart/lungs, eyes, joints, and official movement paperwork.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1C3B2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C3B2B]">NLIS Registration &amp; Tagging</h4>
                  <p className="text-xs text-[#1E293B]/70">Registered with National Livestock Identification System (NLIS) RFID ear tag.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1C3B2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C3B2B]">Vaccinations &amp; Drenching</h4>
                  <p className="text-xs text-[#1E293B]/70">Current on Ultravac 5-in-1, Pestigard, and broad-spectrum worming.</p>
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
                  <h4 className="font-bold text-[#1C3B2B]">Free Delivery to Same City as Address</h4>
                  <p className="text-xs text-[#1E293B]/70">Complimentary local delivery included, plus discounted interstate transport rates.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1C3B2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C3B2B]">Secure Payment Protection</h4>
                  <p className="text-xs text-[#1E293B]/70">Accepted via Pay ID, Direct Bank Transfer, Credit Card &amp; Crypto (USDT, BTC).</p>
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
            A standard holding deposit of <strong>$500 to $1,000 AUD</strong> is required to reserve an available calf. 
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
              Clear answers to queries about mini cow cost, micro cow price, and ongoing expenses.
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
            Check our real-time catalogue of available heifers, steers, and micro miniature calves.
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
