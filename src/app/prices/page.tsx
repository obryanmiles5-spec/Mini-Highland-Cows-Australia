export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { CALVES_DATA } from '@/data/calves';
import { DollarSign, CheckCircle2, Shield, HelpCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Miniature Highland Cow Price Guide Australia | 2026 Costs',
  description: 'How much does a miniature highland cow cost in Australia? Detailed 2026 price guide for heifers, steers, bulls, micro cows, holding deposits, and ongoing care costs.',
  alternates: {
    canonical: 'https://minihighlandcows.store/prices/',
  },
  openGraph: {
    title: 'Miniature Highland Cow Price Guide Australia | 2026 Costs',
    description: 'How much does a miniature highland cow cost in Australia? Detailed 2026 price guide for heifers, steers, bulls, micro cows, and deposits.',
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
    title: 'Miniature Highland Cow Price Guide Australia | 2026 Costs',
    description: 'Transparent 2026 pricing for Australian miniature highland calves. Inclusions, deposits, and payment methods.',
    images: ['https://minihighlandcows.store/images/hero.jpg'],
  },
};

export default function PricesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "Australian Miniature Highland Cattle Pricing Guide",
    "priceCurrency": "AUD",
    "minPrice": "4000",
    "maxPrice": "10000",
    "description": "Comprehensive pricing overview for miniature, micro, and teacup Scottish Highland calves bred by Dunblane Highlands in Queensland, Australia."
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
            Transparent Breeder Pricing
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C3B2B] leading-tight mb-6">
            Miniature Highland Cow Price Guide (Australia)
          </h1>
          <p className="text-lg text-[#1E293B]/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Wondering how much miniature highland cattle cost in Australia? 
            At Dunblane Highlands, our prices range between $4,000 and $10,000+ AUD depending on sex, pedigree genetics, 
            coat color, and mature projected height.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/calves"
              className="px-8 py-3.5 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors shadow-sm"
            >
              View Available Calves
            </Link>
            <Link
              href="/reserve"
              className="px-8 py-3.5 border border-[#1C3B2B] text-[#1C3B2B] font-medium rounded-sm hover:bg-[#1C3B2B]/5 transition-colors"
            >
              Reserve a Calf
            </Link>
          </div>
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
              href="/calves"
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
              href="/calves"
              className="w-full py-3 text-center bg-[#C2673F] text-white font-medium rounded-sm hover:bg-[#A85532] transition-colors text-sm"
            >
              View Available Heifers
            </Link>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#C2673F] uppercase tracking-wider block mb-2">Herd Sires</span>
              <h3 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-2">Registered Bulls</h3>
              <div className="mb-4">
                <span className="text-4xl font-serif font-bold text-[#1C3B2B]">$6,000 - $9,500</span>
                <span className="text-xs text-[#1E293B]/60 block mt-1">AUD • Breeding Quality</span>
              </div>
              <p className="text-sm text-[#1E293B]/70 leading-relaxed mb-6">
                Selected for structural soundness, compact size, masculine breed characteristics, and easy handling qualities for registered studs.
              </p>
              <ul className="space-y-2.5 text-xs text-[#1E293B]/80 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C3B2B]" /> Veterinary fertility &amp; sound assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C3B2B]" /> Full ancestral pedigree registration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C3B2B]" /> Hand-reared for gentle handling
                </li>
              </ul>
            </div>
            <Link
              href="/calves"
              className="w-full py-3 text-center border border-[#1C3B2B] text-[#1C3B2B] font-medium rounded-sm hover:bg-[#1C3B2B] hover:text-white transition-colors text-sm"
            >
              View Available Bulls
            </Link>
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
        <div className="bg-[#F4EFE6] p-8 sm:p-12 rounded-sm border border-[#1E293B]/10">
          <h2 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-4">
            Reservation &amp; Holding Deposit Policy
          </h2>
          <p className="text-sm text-[#1E293B]/80 leading-relaxed max-w-3xl mb-6">
            A standard holding deposit of <strong>$500 to $1,000 AUD</strong> is required to reserve an available calf. 
            Once reserved, the calf is removed from open sale, and weekly photo and video updates are provided until pickup or delivery date. 
            The remaining balance is due prior to departure.
          </p>
          <Link
            href="/reserve"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors text-sm"
          >
            Submit a Reservation Request <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
