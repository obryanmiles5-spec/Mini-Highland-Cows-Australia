export const dynamic = 'force-dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { CALVES_DATA } from '@/data/calves';
import { Award, Compass, Feather, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Miniature Highland Cattle Breed Guide & Standards USA',
  description: 'Complete guide to Miniature Scottish Highland cattle in the USA. Learn about breed traits, mature heights, paddock requirements, temperament, and care.',
  alternates: {
    canonical: 'https://minihighlandcows.store/miniature-highland-cattle/',
    languages: {
      'en-US': 'https://minihighlandcows.store/miniature-highland-cattle/',
      'x-default': 'https://minihighlandcows.store/miniature-highland-cattle/',
    },
  },
  openGraph: {
    title: 'Miniature Highland Cattle Breed Guide & Standards USA',
    description: 'Complete guide to Miniature Scottish Highland cattle in the USA. Learn about breed traits, mature heights, paddock requirements, and care.',
    url: 'https://minihighlandcows.store/miniature-highland-cattle/',
    siteName: 'Dunblane Highlands USA',
    images: [
      {
        url: 'https://minihighlandcows.store/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Miniature Highland Cattle USA - Dunblane Highlands',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miniature Highland Cattle Breed Guide & Standards USA',
    description: 'Learn everything about miniature Scottish Highland cattle in the USA: height, care, pasture, and temperament.',
    images: ['https://minihighlandcows.store/images/hero.jpg'],
  },
};

export default function MiniatureHighlandCattlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Miniature Highland Cattle Breed Guide and American Standards",
    "description": "An exhaustive guide covering Scottish miniature highland cattle heights, paddock space, double hair coats, docile temperaments, and USDA livestock requirements in the USA.",
    "author": {
      "@type": "Organization",
      "name": "Dunblane Highlands Ranch LLC"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dunblane Highlands USA",
      "logo": {
        "@type": "ImageObject",
        "url": "https://minihighlandcows.store/favicon.ico"
      }
    },
    "mainEntityOfPage": "https://minihighlandcows.store/miniature-highland-cattle/"
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
          <span className="text-[#1C3B2B] font-bold">Miniature Highland Cattle Guide</span>
        </nav>

        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C2673F] font-bold block mb-3">
            American Breeder Reference Guide
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C3B2B] leading-tight mb-6">
            Miniature Highland Cattle in the USA
          </h1>
          <p className="text-lg text-[#1E293B]/80 leading-relaxed max-w-3xl mx-auto mb-8">
            The Miniature Scottish Highland cow is one of the world&apos;s oldest and most recognizable breeds. 
            Beloved for their long fringe (&ldquo;dossan&rdquo;), wide sweeping horns, and extraordinarily calm demeanor, 
            miniature cattle bring heritage charm and gentle companionship to hobby farms and homesteads across the United States.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/calves/"
              className="px-8 py-3.5 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors shadow-sm"
            >
              See Available Calves
            </Link>
            <Link
              href="/prices/"
              className="px-8 py-3.5 border border-[#1C3B2B] text-[#1C3B2B] font-medium rounded-sm hover:bg-[#1C3B2B]/5 transition-colors"
            >
              View Price Guide ($USD)
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/10">
            <Award className="w-10 h-10 text-[#C2673F] mb-4" />
            <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-2">Breed Height Standards</h3>
            <p className="text-sm text-[#1E293B]/70 leading-relaxed">
              Standard miniatures measure 38&quot; to 42&quot; at the hip at 3 years. Micro miniatures measure 36&quot; and under, while maintaining true Highland proportions and robust bone density.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/10">
            <Feather className="w-10 h-10 text-[#C2673F] mb-4" />
            <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-2">Double Coat Structure</h3>
            <p className="text-sm text-[#1E293B]/70 leading-relaxed">
              Their iconic shaggy appearance consists of a coarse, waterproof outer hair coat and a dense downy undercoat that naturally protects against rain, wind, heat, and cold.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/10">
            <Compass className="w-10 h-10 text-[#C2673F] mb-4" />
            <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-2">Pasture &amp; Homestead Life</h3>
            <p className="text-sm text-[#1E293B]/70 leading-relaxed">
              Miniature Highlands are exceptionally efficient foragers, grazing tough woody weeds, wild brush, and native grasses while exerting low ground pressure on small pastures.
            </p>
          </div>
        </div>

        {/* Detailed Characteristics */}
        <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-[#1E293B]/10 mb-16">
          <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-8">
            Breed Standard Conformation &amp; Traits
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-[#1E293B]/80 leading-relaxed">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B]">Head &amp; Horns</h3>
              <p>
                The head should be proportionate, broad between the eyes, with short face lines and prominent nostrils. 
                Horns should sweep outward and upward in heifers/cows, or forward and level in steers/bulls. Polled or tipped horns can also be managed safely.
              </p>
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B]">Color Variations</h3>
              <p>
                Recognized highland cattle colors include Red, Black, Yellow (Blonde), Dun (Slate/Silver Grey), White, and Brindle. Dunblane Highlands specializes in rare Silver Dun and White bloodlines.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B]">Body &amp; Frame</h3>
              <p>
                The back should be straight and level, with deep ribs, sound leg alignment, and strong hooves. In miniature highlands, height at the hook/hip bone must not exceed 42 inches at 3 years of age.
              </p>
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B]">American Standards &amp; Regulatory Guidelines</h3>
              <p>
                All stock transfers with official USDA 840 RFID ear tags and interstate Certificates of Veterinary Inspection (CVI). Registration is maintained with the American Highland Cattle Association (AHCA) and the International Miniature Cattle Breeder&apos;s Registry (IMCBR).
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-[#F4EFE6] p-8 sm:p-12 rounded-sm border border-[#1E293B]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-2">Ready to choose your miniature calf?</h3>
            <p className="text-sm text-[#1E293B]/70">Explore our current pedigree heifers, steers, and young bulls.</p>
          </div>
          <Link
            href="/calves/"
            className="px-8 py-3.5 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors whitespace-nowrap"
          >
            Browse Available Calves &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
