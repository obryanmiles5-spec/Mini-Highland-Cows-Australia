import { CALVES_DATA } from '@/data/calves';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const calf = CALVES_DATA.find((c) => c.id.toString() === id);
  if (!calf) return {};
  
  return {
    title: `${calf.name} | ${calf.type} For Sale | Dunblane Highlands`,
    description: calf.desc.substring(0, 160) + (calf.desc.length > 160 ? '...' : ''),
    alternates: {
      canonical: `https://minihighlandcows.store/calves/${calf.id}`,
    },
    openGraph: {
      images: [
        {
          url: calf.images[0],
          width: 800,
          height: 600,
          alt: calf.name,
        }
      ]
    }
  };
}

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check, Ruler, Info, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "How big do mini cows get? (Full grown micro teacup mini highland cow size)",
    answer: "A full grown mini highland cow typically reaches 36 to 42 inches at the hip. If you are looking at a micro mini highland cow or 'micro teacup mini highland cow', they will mature under 36 inches. They are genetically small cattle breeds, ensuring they do stay small their entire lives."
  },
  {
    question: "How much land do you need for a miniature cow?",
    answer: "Many people ask 'can I have a mini cow in my backyard?' The truth is, to properly care for a mini cow, you need at least 1 to 2 acres. How much space does a mini cow need depends on pasture quality, but as herd animals, you must adopt a mini cow with a companion, meaning you need room for at least two fluffy mini cows."
  },
  {
    question: "How much does a miniature cow cost in Australia?",
    answer: "When wondering 'how much are mini cows' or 'how much is a mini fluffy cow', prices range from $4,000 to $10,000+ AUD depending on if it's a micro miniature highland cow, its sex, and color. The miniature cow price reflects the cost to breed healthy, DNA-verified, fluffy miniature cows for sale."
  },
  {
    question: "Are miniature cows good pets?",
    answer: "Yes, mini cows make excellent pets! Are mini cows good pets? Absolutely. Because they are docile, halter-trained, and friendly, miniature highland cows are great for small acreage. Many people love them for mini cow cuddles and photoshoots."
  },
  {
    question: "Can you milk mini highland cows?",
    answer: "Yes, you can milk miniature highland cows! Do miniature highland cows produce milk? Yes, they do. While not a commercial dairy cow, a mini cow can produce 1 to 2 gallons of rich milk daily, perfect for a family wanting a family milk cow."
  },
  {
    question: "Do miniature cows stay small?",
    answer: "Yes, true miniature highland cattle genetics mean that do mini cows stay mini? Yes. Unlike standard cattle, they are genetically predisposed to be small cow breeds. A full grown miniature cow will retain its compact, cute size."
  },
  {
    question: "Are teacup mini cows real?",
    answer: "Are teacup cows real or is there such thing as a mini cow? Yes, they exist, but 'teacup' is often a marketing term for micro miniature cows. We breed healthy micro mini highland cows without lethal dwarfism genes, ensuring our little cows for sale are healthy and proportionate."
  },
  {
    question: "Where can you buy a mini cow?",
    answer: "If you're asking 'where can I buy a miniature cow' or 'where to buy mini highland cows', you should look for registered breeders. We offer miniature cows for sale QLD, miniature cows for sale NSW, and transport our mini calves for sale across Australia."
  },
  {
    question: "How long does a miniature highland cow live?",
    answer: "With proper mini cow care, a miniature highland cow adult can live 15 to 20 years. They are hardy, resilient animals. The average lifespan of a mini highland cow is similar to standard cattle, provided they have good feed, shelter, and vet care."
  },
  {
    question: "What are miniature cows good for?",
    answer: "What are mini cows used for? Aside from being adorable pets, miniature cattle are great for clearing brush, providing family milk, and producing high-quality miniature highland cow beef. They are sustainable, require less feed, and are gentle on the land."
  }
];

export async function generateStaticParams() {
  return CALVES_DATA.map((calf) => ({
    id: calf.id.toString(),
  }));
}

export default async function CalfDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const calf = CALVES_DATA.find((c) => c.id.toString() === id);

  if (!calf) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": calf.name,
    "image": calf.images,
    "description": calf.desc,
    "sku": calf.id.toString(),
    "brand": {
      "@type": "Brand",
      "name": "Dunblane Pastoral Holdings"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://minihighlandcows.store/calves/${calf.id}`,
      "priceCurrency": "AUD",
      "price": calf.price.toString().replace(/[^0-9.]/g, ''),
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      "itemCondition": "https://schema.org/NewCondition",
      "availability": calf.status === 'Available' ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
      "seller": {
        "@type": "Organization",
        "name": "Dunblane Pastoral Holdings Pty Ltd"
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "AU",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 14,
        "returnMethod": "https://schema.org/ReturnByMail"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };


  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        "name": "Available Calves",
        "item": "https://minihighlandcows.store/calves"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": calf.name,
        "item": `https://minihighlandcows.store/calves/${calf.id}`
      }
    ]
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen py-16">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      

      <div className="max-w-7xl mx-auto px-4">
        <Link href="/calves" className="inline-flex items-center gap-2 text-[#1E293B]/70 hover:text-[#1C3B2B] transition-colors mb-8 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to all calves
        </Link>
        
        <div className="bg-white rounded-sm shadow-sm border border-[#1E293B]/5 overflow-hidden">
          <div className="grid md:grid-cols-2">
            
            {/* Image Gallery Column */}
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-[#1E293B]/5">
              <div className="aspect-[4/3] relative overflow-hidden bg-[#F4EFE6]">
                <Image src={calf.images[0]}
                  alt={calf.name}
                  fill
                  priority
                  className="object-cover"
                 referrerPolicy="no-referrer" />
                {calf.status === 'Available' ? (
                  <span className="absolute top-4 right-4 bg-[#1C3B2B] text-[#FDFBF7] text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm z-10">
                    Available
                  </span>
                ) : (
                  <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm z-10 ${calf.status === 'Sold' ? 'text-red-600 bg-white border border-red-600' : 'bg-[#C2673F] text-white'}`}>
                    {calf.status}
                  </span>
                )}
              </div>
              {calf.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2 p-4 bg-[#F8F9FA]">
                  {calf.images.slice(1).map((img, i) => (
                    <div key={i} className="aspect-[4/3] relative overflow-hidden rounded-sm cursor-pointer border-2 border-transparent hover:border-[#1C3B2B] transition-colors">
                      <Image src={img}
                        alt={`${calf.name} gallery image ${i + 1}`}
                        fill
                        className="object-cover"
                       referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details Column */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-8 border-b border-[#1E293B]/10 pb-8">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1C3B2B] mb-4">{calf.name}</h1>
                <p className="text-xl text-[#1E293B]/80 font-light leading-relaxed">
                  {calf.desc}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-8">
                <div>
                  <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1 flex items-center gap-1"><Info className="w-3 h-3" /> Sex</span>
                  <span className="font-medium text-[#1E293B]">{calf.sex}</span>
                </div>
                <div>
                  <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1 flex items-center gap-1"><Info className="w-3 h-3" /> Coat</span>
                  <span className="font-medium text-[#1E293B]">{calf.coat}</span>
                </div>
                <div>
                  <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1 flex items-center gap-1"><Ruler className="w-3 h-3" /> Proj. Height</span>
                  <span className="font-medium text-[#1E293B]">{calf.height}</span>
                </div>
                <div>
                  <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1 flex items-center gap-1"><Info className="w-3 h-3" /> Date of Birth</span>
                  <span className="font-medium text-[#1E293B]">{calf.dob}</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1 flex items-center gap-1"><Check className="w-3 h-3" /> Chondro Status</span>
                  <span className="font-medium text-[#1E293B]">{calf.chondro}</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1 flex items-center gap-1"><Info className="w-3 h-3" /> Temperament</span>
                  <span className="font-medium text-[#1E293B]">{calf.temp}</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1 flex items-center gap-1"><Info className="w-3 h-3" /> Pedigree</span>
                  <span className="font-medium text-[#1E293B]">{calf.pedigree}</span>
                </div>
              </div>

              {calf.status === 'Available' && (
                <div className="mt-auto bg-[#F8F9FA] p-6 rounded-sm border border-[#1E293B]/10">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1">Total Price</span>
                      <span className="font-serif text-3xl font-bold text-[#1C3B2B]">${calf.price.toLocaleString()}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1">Required Deposit</span>
                      <span className="font-medium text-[#1E293B]">${calf.deposit.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="text-xs text-[#1E293B]/70 mb-6 bg-[#1C3B2B]/5 p-3 rounded-sm border border-[#1C3B2B]/10">
                    Secure Payments via <span className="font-bold text-[#1C3B2B]">Pay ID, Bank Transfer, Credit Card & Crypto (USDT, BTC)</span>. Free delivery to QLD 4725.
                  </div>
                  
                  <Link href="/reserve" className="block w-full py-4 text-center bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors">
                    Inquire About {calf.name}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Related Calves */}
        <div className="mt-16 mb-16">
          <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-8 text-center">Related Calves</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CALVES_DATA.filter(c => c.id !== calf.id).slice(0, 3).map((related) => (
              <Link href={`/calves/${related.id}`} key={related.id} className="group bg-white rounded-sm shadow-sm border border-[#1E293B]/5 overflow-hidden block hover:border-[#1C3B2B]/20 transition-colors">
                <div className="aspect-[4/3] relative bg-[#F4EFE6]">
                  <Image src={related.images[0]} alt={related.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500"  referrerPolicy="no-referrer" />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-bold text-[#1C3B2B] group-hover:text-[#C2673F] transition-colors">{related.name}</h3>
                  <p className="text-sm text-[#1E293B]/70">{related.sex} • {related.coat}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-4">Frequently Asked Questions</h2>
            <p className="text-[#1E293B]/70">Common questions about caring for miniature highlands.</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-sm shadow-sm border border-[#1E293B]/5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-[#1C3B2B]">
                  {faq.question}
                  <span className="transition duration-300 group-open:-rotate-180">
                    <ChevronDown className="w-5 h-5 text-[#1C3B2B]/50" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[#1E293B]/70 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
