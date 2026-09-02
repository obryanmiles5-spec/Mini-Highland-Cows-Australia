import { Metadata } from 'next';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Miniature Highland Cow FAQs | Top Questions Answered (Australia)',
  description: 'Answers to the top questions about miniature highland cows: size, cost in Australia, care, land requirements, and whether micro teacup mini cows are real.',
  alternates: {
    canonical: 'https://dunblane.com.au/faq',
  },
  openGraph: {
    title: 'Miniature Highland Cow FAQs | Top Questions Answered (Australia)',
    description: 'Answers to the top questions about miniature highland cows: size, cost in Australia, care, land requirements, and whether micro teacup mini cows are real.',
    url: 'https://dunblane.com.au/faq',
    siteName: 'Dunblane Highlands',
    images: [
      {
        url: 'https://dunblane.com.au/images/hero.jpg', // Placeholder for OG image
        width: 1200,
        height: 630,
        alt: 'Miniature Highland Cow FAQs | Top Questions Answered (Australia)',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miniature Highland Cow FAQs | Top Questions Answered (Australia)',
    description: 'Answers to the top questions about miniature highland cows: size, cost in Australia, care, land requirements, and whether micro teacup mini cows are real.',
    images: ['https://dunblane.com.au/images/hero.jpg'],
  },
};

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

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq, idx) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "url": `https://dunblane.com.au/faq#faq-${idx}`
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
        "item": "https://dunblane.com.au/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "FAQ",
        "item": "https://dunblane.com.au/faq"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1C3B2B] mb-6">
            Miniature Highland Cow FAQs
          </h1>
          <p className="text-[#1E293B]/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about adopting, raising, and caring for miniature highland cattle in Australia. We&apos;ve compiled the top search questions to help you understand our fluffy mini cows.
          </p>
        </div>
        
        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <details key={idx} id={`faq-${idx}`} className="group bg-white rounded-sm shadow-sm border border-[#1E293B]/5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-lg text-[#1C3B2B] hover:bg-[#FDFBF7] transition-colors">
                {faq.question}
                <span className="transition duration-300 group-open:-rotate-180 ml-4 flex-shrink-0">
                  <ChevronDown className="w-6 h-6 text-[#1C3B2B]/50" />
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 text-[#1E293B]/80 leading-relaxed text-base border-t border-[#1C3B2B]/5">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-4">Ready to adopt your own?</h2>
          <p className="text-[#1E293B]/80 mb-8">
            Browse our currently available DNA-verified miniature highland calves for sale across Australia.
          </p>
          <Link href="/calves" className="inline-flex items-center px-8 py-4 bg-[#C2673F] text-white font-medium rounded-sm hover:bg-[#A95531] transition-colors">
            View Available Calves
          </Link>
        </div>
      </div>
    </div>
  );
}
