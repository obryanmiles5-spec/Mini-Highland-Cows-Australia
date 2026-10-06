import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, DollarSign, Dna, ShieldCheck, ChevronRight, HelpCircle, Phone, ArrowRight, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Artificial Insemination in Cattle (Bovine AI) | Dunblane Australia',
  description: 'Comprehensive guide to bovine artificial insemination (AI) in cattle, livestock breeding procedures, AI bull semen straws, and cow insemination costs in Australia.',
  alternates: {
    canonical: 'https://minihighlandcows.store/artificial-insemination-cattle/',
  },
  openGraph: {
    title: 'Artificial Insemination in Cattle (Bovine AI) & Breeding Costs | Dunblane',
    description: 'Expert guide to cattle artificial insemination, bovine AI procedures, AI bull semen straws, and cow insemination costs in Australia.',
    url: 'https://minihighlandcows.store/artificial-insemination-cattle/',
    siteName: 'Dunblane Highlands',
    images: [
      {
        url: 'https://minihighlandcows.store/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Artificial Insemination in Cattle - Dunblane Highlands Australia',
      },
    ],
    locale: 'en_AU',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artificial Insemination in Cattle (Bovine AI) | Dunblane Australia',
    description: 'Expert guide to cattle artificial insemination, bovine AI procedures, AI bull semen straws, and cow insemination costs.',
    images: ['https://minihighlandcows.store/images/hero.jpg'],
  },
};

const FAQS = [
  {
    q: "How much does artificial insemination cost for cows in Australia?",
    a: "In Australia, the cost of artificial insemination (AI) for cows typically ranges from $75 to $220 AUD per cow per cycle. This total includes the semen straw ($35 to $120 AUD depending on bull pedigree and breed rarity), estrus synchronization medications such as CIDR and prostaglandin ($25 to $45 AUD), and the professional AI technician or veterinary callout fee ($35 to $75 AUD per head when servicing multiple cows). In the United States, bovine AI costs average $45 to $150 USD per cow."
  },
  {
    q: "What is the bovine artificial insemination procedure?",
    a: "The bovine artificial insemination procedure involves four core stages: 1) Estrus detection or fixed-time AI (FTAI) synchronization using progesterone CIDRs and GnRH; 2) Semen preparation by thawing frozen semen straws in a 35°C–37°C water bath for exactly 30 to 45 seconds; 3) Loading the pre-warmed AI catheter gun with a sanitary sheath; and 4) Transrectal cervical manipulation, where the technician guides the gun through the cow's cervix via rectal palpation to deposit semen precisely into the uterine body."
  },
  {
    q: "Can miniature highland cows be bred using artificial insemination?",
    a: "Yes. Miniature highland cattle can be successfully bred using bovine artificial insemination. However, because miniature highland heifers and cows possess smaller pelvic canals and shorter cervical tracts than commercial dairy or beef cows, artificial breeding must be conducted by an experienced livestock technician using appropriate mini-breed catheters and calibrated semen dosages to avoid cervical trauma."
  },
  {
    q: "How does artificial breeding compare to keeping an AI bull on-farm?",
    a: "Artificial breeding of cattle eliminates the high annual feed, fencing, and safety risks of managing a live herd bull (which costs $1,500 to $3,000+ AUD annually to maintain). AI grants smallholders and registered studs direct access to champion, genetically verified Scottish Highland and miniature herd sires worldwide for a fraction of the cost while completely preventing venereal diseases like Trichomoniasis and Campylobacteriosis."
  },
  {
    q: "What is the conception rate for cow artificial insemination?",
    a: "Average first-service conception rates for bovine artificial insemination range between 55% and 70% in well-managed herds. Utilizing timed artificial insemination (FTAI) protocols with high-motility straws from proven AI bulls and ensuring low stress during insemination consistently yields conception rates over 65%."
  }
];

export default function ArtificialInseminationCattlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://minihighlandcows.store/artificial-insemination-cattle/#article",
        "headline": "Artificial Insemination in Cattle (Bovine AI): Breeding Guide & Cost Breakdown",
        "description": "Complete authoritative guide on artificial breeding of animals, cattle artificial insemination procedures, AI bull semen straws, and cow insemination costs in Australia.",
        "inLanguage": "en-AU",
        "author": {
          "@type": "Organization",
          "name": "Dunblane Pastoral Holdings Pty Ltd"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Dunblane Highlands",
          "logo": {
            "@type": "ImageObject",
            "url": "https://minihighlandcows.store/favicon.ico"
          }
        },
        "mainEntityOfPage": "https://minihighlandcows.store/artificial-insemination-cattle/"
      },
      {
        "@type": "FAQPage",
        "@id": "https://minihighlandcows.store/artificial-insemination-cattle/#faq",
        "mainEntity": FAQS.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      },
      {
        "@type": "Service",
        "@id": "https://minihighlandcows.store/artificial-insemination-cattle/#service",
        "name": "Bovine Artificial Insemination & Genetics Program",
        "provider": {
          "@type": "Organization",
          "name": "Dunblane Highlands"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "serviceType": "Livestock Artificial Insemination & Bovine Breeding",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "AUD",
          "price": "75.00",
          "priceValidUntil": "2026-12-31"
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
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#1E293B]/60 mb-8 font-medium">
          <Link href="/" className="hover:text-[#C2673F] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/miniature-highland-cattle/" className="hover:text-[#C2673F] transition-colors">Breed Guide</Link>
          <span>/</span>
          <span className="text-[#1C3B2B] font-bold">Artificial Insemination (Bovine AI)</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C2673F] font-bold block mb-3">
            Bovine Artificial Breeding &amp; Livestock Genetics
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C3B2B] leading-tight mb-6">
            Artificial Insemination in Cattle (Bovine AI Guide &amp; Costs)
          </h1>
          <p className="text-lg text-[#1E293B]/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Everything livestock owners, hobby farmers, and miniature cattle studs need to know about 
            <strong> cow artificial insemination</strong>, <strong>artificial breeding of cattle</strong>, 
            veterinary procedures, semen straws, and accurate 2026 costs in Australia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/prices/"
              className="px-8 py-3.5 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors shadow-sm"
            >
              View Cattle &amp; Semen Prices
            </Link>
            <Link
              href="/contact/"
              className="px-8 py-3.5 border border-[#1C3B2B] text-[#1C3B2B] font-medium rounded-sm hover:bg-[#1C3B2B]/5 transition-colors"
            >
              Breeding Consultation
            </Link>
          </div>
        </div>

        {/* GEO Direct Answer Extraction Block */}
        <div className="bg-[#1C3B2B] text-[#FDFBF7] p-8 sm:p-10 rounded-sm shadow-md mb-16 border-l-4 border-[#D4A373]">
          <span className="text-xs font-bold text-[#D4A373] uppercase tracking-wider block mb-2">
            AI Overview &amp; Direct Answer Definition
          </span>
          <p className="text-base sm:text-lg leading-relaxed font-serif">
            <strong>Artificial insemination in cattle (bovine AI)</strong> refers to the assisted reproductive technology 
            where cryopreserved semen harvested from elite, genetically verified AI bulls is manually deposited into a female cow’s 
            uterine body during estrus using a sterile catheter. In Australia, artificial breeding costs <strong>$75 to $220 AUD per cow</strong>, 
            providing smallholders direct access to championship genetics, disease prevention, and calving ease without housing a live herd sire.
          </p>
        </div>

        {/* Core Breakdown 1: AI Cost Table */}
        <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-[#1E293B]/10 mb-16">
          <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-4">
            How Much Does Artificial Insemination Cost for Cows? (2026 Price Breakdown)
          </h2>
          <p className="text-sm text-[#1E293B]/70 mb-8 max-w-3xl leading-relaxed">
            Prospective cattle breeders frequently ask: <em>&ldquo;How much is artificial insemination for a cow?&rdquo;</em> 
            or <em>&ldquo;What is the cost of artificial insemination in cattle?&rdquo;</em> The table below outlines real-world 
            commercial and registered stud expenses across Australia and international benchmarks.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#1C3B2B] text-[#FDFBF7] text-xs uppercase tracking-wider">
                  <th className="p-4 rounded-tl-sm">Cost Component</th>
                  <th className="p-4">Estimated Range (AUD)</th>
                  <th className="p-4">Estimated Range (USD)</th>
                  <th className="p-4 rounded-tr-sm">Details &amp; Inclusions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E293B]/10 text-[#1E293B]/80">
                <tr className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-4 font-bold text-[#1C3B2B]">Semen Straw (AI Bull)</td>
                  <td className="p-4">$35 – $120 AUD</td>
                  <td className="p-4">$25 – $80 USD</td>
                  <td className="p-4 text-xs">High-motility cryopreserved straw from registered, DNA-tested Highland or Mini sire.</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-4 font-bold text-[#1C3B2B]">Estrus Synchronization Drugs</td>
                  <td className="p-4">$25 – $45 AUD</td>
                  <td className="p-4">$18 – $35 USD</td>
                  <td className="p-4 text-xs">CIDR insert (progesterone), Prostaglandin (PGF2α), and GnRH hormone protocol.</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-4 font-bold text-[#1C3B2B]">AI Technician / Vet Callout</td>
                  <td className="p-4">$35 – $75 AUD</td>
                  <td className="p-4">$25 – $55 USD</td>
                  <td className="p-4 text-xs">Professional catheter insertion and cervical deposit per cow (volume discounts apply).</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-4 font-bold text-[#1C3B2B]">Liquid Nitrogen Storage Tank</td>
                  <td className="p-4">$30 – $60 AUD/yr</td>
                  <td className="p-4">$20 – $45 USD/yr</td>
                  <td className="p-4 text-xs">Tank rental/dry shipper fee or local genetics center liquid nitrogen topping.</td>
                </tr>
                <tr className="bg-[#F4EFE6] font-bold text-[#1C3B2B]">
                  <td className="p-4">Total Cost Per Cow (Single AI Cycle)</td>
                  <td className="p-4 text-[#C2673F] text-base font-serif">$95 – $240 AUD</td>
                  <td className="p-4 text-[#C2673F] text-base font-serif">$68 – $170 USD</td>
                  <td className="p-4 text-xs font-normal">Complete cycle cost. Typical first-service conception rate: 60%–70%.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Core Breakdown 2: Bovine AI Procedure Step-by-Step */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          <div className="bg-white p-8 sm:p-10 rounded-sm shadow-sm border border-[#1E293B]/10">
            <span className="text-xs font-bold text-[#C2673F] uppercase tracking-wider block mb-2">Technical Protocol</span>
            <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-6">
              Bovine Artificial Insemination Procedure (Step-by-Step)
            </h2>
            <div className="space-y-6 text-sm text-[#1E293B]/80 leading-relaxed">
              <div className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-[#1C3B2B] text-white flex items-center justify-center font-bold text-sm shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-[#1C3B2B] mb-1">Estrus Detection &amp; Synchronization (FTAI)</h4>
                  <p className="text-xs">
                    Cows are tracked for standing heat (AM/PM rule: cows in heat in the morning are inseminated in the evening). Alternatively, Fixed-Time AI (FTAI) uses a 7-day CIDR + GnRH protocol so breeding occurs at an exact hour without heat checking.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-[#1C3B2B] text-white flex items-center justify-center font-bold text-sm shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-[#1C3B2B] mb-1">Precision Thawing of Semen Straws</h4>
                  <p className="text-xs">
                    Cryopreserved straws stored in liquid nitrogen at -196°C are rapidly transferred using forceps into a controlled water bath at 35°C to 37°C (95°F–98°F) for exactly 35 to 45 seconds, then dried completely before loading.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-[#1C3B2B] text-white flex items-center justify-center font-bold text-sm shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-[#1C3B2B] mb-1">Rectovaginal Insemination Technique</h4>
                  <p className="text-xs">
                    The AI technician dons an obstetrical shoulder-length glove, clears rectal manure, grasps the cervix through the rectal wall, and gently guides the warm AI gun through the vulva and vagina at an upward 30-degree angle.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-[#1C3B2B] text-white flex items-center justify-center font-bold text-sm shrink-0">4</span>
                <div>
                  <h4 className="font-bold text-[#1C3B2B] mb-1">Deposition into the Uterine Body</h4>
                  <p className="text-xs">
                    The gun is threaded through the three annular rings of the cervix. Once the technician&apos;s finger confirms the tip is 1 cm past the internal cervical os into the body of the uterus, the plunger is smoothly depressed over 5 seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F4EFE6] p-8 sm:p-10 rounded-sm border border-[#1E293B]/10">
            <span className="text-xs font-bold text-[#1C3B2B] uppercase tracking-wider block mb-2">Natural Service vs Bovine AI</span>
            <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-6">
              Why Choose Artificial Breeding for Cattle?
            </h2>
            <div className="space-y-4 text-sm text-[#1E293B]/80 leading-relaxed">
              <div className="bg-white p-4 rounded-sm shadow-xs border border-[#1E293B]/5">
                <h4 className="font-bold text-[#1C3B2B] mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C2673F]" /> Complete Biosecurity &amp; Disease Prevention
                </h4>
                <p className="text-xs text-[#1E293B]/70">
                  Eliminates venereal transmission of Vibriosis, Trichomoniasis, Leptospirosis, and Bovine Viral Diarrhea (BVDV) that can cause catastrophic embryonic losses in natural breeding herds.
                </p>
              </div>

              <div className="bg-white p-4 rounded-sm shadow-xs border border-[#1E293B]/5">
                <h4 className="font-bold text-[#1C3B2B] mb-1 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C2673F]" /> Access to World-Class AI Bull Genetics
                </h4>
                <p className="text-xs text-[#1E293B]/70">
                  Hobby farms and small acreage owners cannot justify purchasing a $10,000 champion herd sire. Artificial insemination delivers proven Scottish and Australian sire genetics with known birth weights, high milk EBVs, and Chondrodysplasia-negative status.
                </p>
              </div>

              <div className="bg-white p-4 rounded-sm shadow-xs border border-[#1E293B]/5">
                <h4 className="font-bold text-[#1C3B2B] mb-1 flex items-center gap-2">
                  <Dna className="w-4 h-4 text-[#C2673F]" /> Calving Ease &amp; Mini Frame Preservation
                </h4>
                <p className="text-xs text-[#1E293B]/70">
                  Using sexed semen straws or verified low-birthweight miniature bulls prevents dystocia (calving difficulty) in miniature heifers, ensuring safe, natural unassisted deliveries.
                </p>
              </div>

              <div className="bg-white p-4 rounded-sm shadow-xs border border-[#1E293B]/5">
                <h4 className="font-bold text-[#1C3B2B] mb-1 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#C2673F]" /> Massive Cost Savings on Bull Maintenance
                </h4>
                <p className="text-xs text-[#1E293B]/70">
                  A mature bull consumes 2.5% of his bodyweight in dry matter daily, damages perimeter fencing, and requires dedicated bull paddocks. Artificial breeding costs a tiny fraction of year-round bull upkeep.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Dunblane Highlands AI Sire Program */}
        <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-[#1E293B]/10 mb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold text-[#C2673F] uppercase tracking-wider block mb-2">Genetics Program</span>
              <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-4">
                Dunblane Miniature Highland AI Bull Genetics
              </h2>
              <p className="text-sm text-[#1E293B]/80 leading-relaxed mb-4">
                At Dunblane Highlands, our breeding herd sires are selected under stringent veterinary criteria. 
                All AI bull straws are processed in certified Australian biosecurity facilities with guaranteed post-thaw progressive motility exceeding 50%.
              </p>
              <ul className="space-y-2.5 text-xs text-[#1E293B]/80 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C3B2B]" /> 100% DNA parentage verified &amp; registered with Australian Highland Cattle Society (AHCS)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C3B2B]" /> Non-carriers of the Chondrodysplasia dwarfism gene (100% Chondro-Free)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C3B2B]" /> Tested negative for Pestivirus (BVDV PI), Johnes Disease (J-BAS 7+), and Tick Fever
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C3B2B]" /> Available for nationwide courier delivery in dry-shipper liquid nitrogen dewars
                </li>
              </ul>
              <div className="flex gap-4">
                <Link
                  href="/calves/"
                  className="px-6 py-3 bg-[#1C3B2B] text-white text-sm font-medium rounded-sm hover:bg-[#152C20] transition-colors"
                >
                  View Sired Calves
                </Link>
                <Link
                  href="/reserve/"
                  className="px-6 py-3 border border-[#1C3B2B] text-[#1C3B2B] text-sm font-medium rounded-sm hover:bg-[#1C3B2B]/5 transition-colors"
                >
                  Inquire for Semen Straws
                </Link>
              </div>
            </div>

            <div className="bg-[#FDFBF7] p-6 rounded-sm border border-[#1E293B]/10">
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B] mb-4">Artificial Breeding Best Practices Checklist</h3>
              <div className="space-y-3 text-xs text-[#1E293B]/80">
                <div className="p-3 bg-white rounded-sm border border-[#1E293B]/5">
                  <strong>1. Record Heat Cycles:</strong> Highland cows cycle every 18 to 24 days (average 21 days). Track mucus discharge, mounting activity, and chin-resting behaviors.
                </div>
                <div className="p-3 bg-white rounded-sm border border-[#1E293B]/5">
                  <strong>2. Maintain Body Condition Score (BCS):</strong> Heifers and cows should enter breeding season at BCS 2.5 to 3.0 out of 5 for optimal ovarian response.
                </div>
                <div className="p-3 bg-white rounded-sm border border-[#1E293B]/5">
                  <strong>3. Mineral &amp; Trace Element Nutrition:</strong> Supplement organic Copper, Selenium, Vitamin E, and Phosphorus 4 weeks prior to AI.
                </div>
                <div className="p-3 bg-white rounded-sm border border-[#1E293B]/5">
                  <strong>4. Calm Low-Stress Handling:</strong> Elevated cortisol levels during insemination reduce uterine contractions and lower conception rates by up to 20%.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Structured Transactional FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#C2673F] uppercase tracking-wider block mb-2">High-Intent Q&amp;A</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C3B2B] mb-4">
              Artificial Insemination in Cattle FAQ
            </h2>
            <p className="text-sm text-[#1E293B]/70">
              Direct answers to real search queries from Australian cattle owners and breeders.
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

        {/* Call to Action Bar */}
        <div className="bg-[#1C3B2B] text-white p-8 sm:p-12 rounded-sm text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Ready to Upgrade Your Cattle Genetics?</h2>
          <p className="text-sm text-[#FDFBF7]/80 max-w-xl mx-auto mb-8">
            Explore our available miniature highland calves, genetics consultation, and nationwide livestock transport across Australia.
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
              Contact Our Farm Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
