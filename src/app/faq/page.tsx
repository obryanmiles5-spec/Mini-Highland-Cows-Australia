import { Metadata } from 'next';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Miniature Highland Cow FAQs | Top Questions Answered (Australia)',
  description: 'Answers to the top questions about miniature highland cows: size, cost in Australia, care, land requirements, and whether micro teacup mini cows are real.',
  alternates: {
    canonical: 'https://minihighlandcows.store/faq/',
  },
  openGraph: {
    title: 'Miniature Highland Cow FAQs | Top Questions Answered (Australia)',
    description: 'Answers to the top questions about miniature highland cows: size, cost in Australia, care, land requirements, and whether micro teacup mini cows are real.',
    url: 'https://minihighlandcows.store/faq/',
    siteName: 'Dunblane Highlands',
    images: [
      {
        url: 'https://minihighlandcows.store/images/hero.jpg', // Placeholder for OG image
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
    images: ['https://minihighlandcows.store/images/hero.jpg'],
  },
};

const FAQS = [
  {
    question: "How big do mini cows get? (Full grown micro teacup mini highland cow size)",
    answer: "A full grown miniature highland cow typically reaches 36 to 42 inches measured at the hip. If you are specifically looking at a 'micro mini' or what some call a 'micro teacup mini highland cow', they will mature under 36 inches. They are genetically small cattle breeds, ensuring they do stay small their entire lives. Despite their small stature, they retain the stocky, robust build and thick coats characteristic of standard Scottish Highlands."
  },
  {
    question: "How much land do you need for a miniature cow?",
    answer: "Many people ask 'can I have a mini cow in my backyard?' The reality is, to properly care for miniature cattle, you need at least 1 to 2 acres of good quality pasture for a pair. How much space a mini cow needs heavily depends on the quality of the soil, rainfall, and pasture in your area. Importantly, cows are herd animals—you cannot adopt just one mini cow. You must have a companion, meaning you need room for at least two miniature cows or other suitable livestock (like alpacas or sheep)."
  },
  {
    question: "How much does a miniature cow cost in Australia?",
    answer: "When wondering 'how much are mini cows' or 'how much is a mini fluffy cow', prices typically range from $4,000 to over $10,000 AUD. The price heavily depends on several factors: the calf's sex (heifers are generally more expensive than steers), coat color (silver/dun and white are often highly sought after), and genetic size (micro miniatures under 36 inches command a premium). The miniature cow price reflects the extensive costs to breed healthy, DNA-verified, halter-trained miniature cows."
  },
  {
    question: "Are miniature cows good pets?",
    answer: "Yes, mini cows make excellent pets! Because they are docile, intelligent, and much easier to handle than standard cattle, miniature highland cows are fantastic for small acreage and hobby farms. Our calves are handled daily and halter-trained, meaning they are used to human interaction, grooming, and petting. Many people love them as gentle paddock pets for mini cow cuddles and even farm-stay photoshoots."
  },
  {
    question: "Can you milk mini highland cows?",
    answer: "Yes, you can certainly milk miniature highland cows! While they are not a commercial dairy breed like a Holstein or Jersey, a miniature highland cow can produce 1 to 2 gallons of rich, high-butterfat milk daily. This is often the perfect amount for a single family wanting a 'family milk cow' without the overwhelming volume produced by standard dairy breeds."
  },
  {
    question: "Do miniature cows stay small?",
    answer: "Yes, true miniature highland cattle genetics mean they stay small. Unlike standard cattle that just happen to be runts, true miniatures are genetically predisposed to be small cow breeds. A full grown miniature cow will retain its compact, cute size throughout its entire life, generally maxing out their height by age 3."
  },
  {
    question: "Are teacup mini cows real?",
    answer: "While 'teacup' is often a marketing term rather than a scientific classification, micro miniature cows definitely exist. These are animals that mature under 36 inches. We breed healthy micro mini highland cows by carefully selecting smaller genetics over generations. We strictly avoid the lethal Chondrodysplasia (dwarfism) gene, ensuring our little cows are healthy, proportionate, and live long, pain-free lives."
  },
  {
    question: "Where can you buy a mini cow?",
    answer: "You should always look for registered, reputable breeders who offer DNA parentage verification and health guarantees. We offer miniature cows for sale to approved homes across Australia. We are based in Queensland, but we frequently arrange safe, climate-controlled transport for our mini calves to NSW, VIC, SA, and beyond."
  },
  {
    question: "How long does a miniature highland cow live?",
    answer: "With proper care, a miniature highland cow can live 15 to 20 years. They are an incredibly hardy, resilient breed, originally adapted to the harsh Scottish highlands. The average lifespan of a mini highland cow is very similar to standard cattle, provided they receive good quality feed, fresh water, adequate shelter, and routine veterinary care (including vaccinations and drenching)."
  },
  {
    question: "What are miniature cows good for?",
    answer: "Aside from being adorable and docile pets, miniature cattle are highly functional on a small farm. They are fantastic foragers and great for clearing brush and maintaining pasture. They can provide a family milk supply, produce high-quality organic beef, and produce rich manure for your gardens. Because they are smaller, they require less feed, are gentler on fences, and cause significantly less soil compaction than standard cattle."
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
        "url": `https://minihighlandcows.store/faq#faq-${idx}`
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
        "name": "FAQ",
        "item": "https://minihighlandcows.store/faq"
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
          <Link href="/calves/" className="inline-flex items-center px-8 py-4 bg-[#C2673F] text-white font-medium rounded-sm hover:bg-[#A95531] transition-colors">
            View Available Calves
          </Link>
        </div>
      </div>
    </div>
  );
}
