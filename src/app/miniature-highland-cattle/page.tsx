export const dynamic = 'force-dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { CALVES_DATA } from '@/data/calves';
import { Award, Compass, Feather, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Miniature Highland Cattle Breed Guide & Standards Australia',
  description: 'Complete guide to Miniature Scottish Highland cattle in Australia. Learn about breed traits, mature heights, paddock requirements, temperament, and care.',
  alternates: {
    canonical: 'https://minihighlandcows.store/miniature-highland-cattle/',
  },
  openGraph: {
    title: 'Miniature Highland Cattle Breed Guide & Standards Australia',
    description: 'Complete guide to Miniature Scottish Highland cattle in Australia. Learn about breed traits, mature heights, paddock requirements, and care.',
    url: 'https://minihighlandcows.store/miniature-highland-cattle/',
    siteName: 'Dunblane Highlands',
    images: [
      {
        url: 'https://minihighlandcows.store/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Miniature Highland Cattle Australia - Dunblane Pastoral',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miniature Highland Cattle Breed Guide & Standards Australia',
    description: 'Learn everything about miniature Scottish Highland cattle in Australia: height, care, pasture, and temperament.',
    images: ['https://minihighlandcows.store/images/hero.jpg'],
  },
};

export default function MiniatureHighlandCattlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Miniature Highland Cattle Breed Guide and Australian Standards",
    "description": "An exhaustive guide covering Scottish miniature highland cattle heights, paddock space, double hair coats, docile temperaments, and NLIS livestock requirements in Australia.",
    "author": {
      "@type": "Organization",
      "name": "Dunblane Pastoral Holdings Pty Ltd"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dunblane Highlands",
      "logo": {
        "@type": "ImageObject",
        "url": "https://minihighlandcows.store/images/hero.jpg"
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
            Australian Breeder Reference Guide
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C3B2B] leading-tight mb-6">
            Miniature Highland Cattle in Australia
          </h1>
          <p className="text-lg text-[#1E293B]/80 leading-relaxed max-w-3xl mx-auto mb-8">
            The Miniature Scottish Highland cow is one of the world&apos;s oldest and most recognizable breeds. 
            Beloved for their long fringe (&ldquo;dossan&rdquo;), wide sweeping horns, and extraordinarily calm demeanor, 
            miniature cattle bring heritage charm and gentle companionship to hobby farms and small acreages across Australia.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/calves"
              className="px-8 py-3.5 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors shadow-sm"
            >
              See Available Calves
            </Link>
            <Link
              href="/process"
              className="px-8 py-3.5 border border-[#1C3B2B] text-[#1C3B2B] font-medium rounded-sm hover:bg-[#1C3B2B]/5 transition-colors"
            >
              Adoption Process
            </Link>
          </div>
        </div>

        {/* Core Attributes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-sm shadow-sm border border-[#1E293B]/10">
            <Award className="w-8 h-8 text-[#C2673F] mb-4" />
            <h3 className="font-serif text-xl font-bold text-[#1C3B2B] mb-2">Hardy Constitution</h3>
            <p className="text-xs text-[#1E293B]/70 leading-relaxed">
              Adapted over centuries to the rugged Scottish Highlands. Extremely resilient to weather extremes with minimal calving difficulty.
            </p>
          </div>

          <div className="bg-white p-6 rounded-sm shadow-sm border border-[#1E293B]/10">
            <Feather className="w-8 h-8 text-[#C2673F] mb-4" />
            <h3 className="font-serif text-xl font-bold text-[#1C3B2B] mb-2">Luxurious Hair</h3>
            <p className="text-xs text-[#1E293B]/70 leading-relaxed">
              A double coat consists of an oily outer layer shedding rain and snow, and a soft downy undercoat providing climate insulation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-sm shadow-sm border border-[#1E293B]/10">
            <Compass className="w-8 h-8 text-[#C2673F] mb-4" />
            <h3 className="font-serif text-xl font-bold text-[#1C3B2B] mb-2">Low Land Impact</h3>
            <p className="text-xs text-[#1E293B]/70 leading-relaxed">
              Weighing between 200 kg and 350 kg, mini cattle inflict significantly less pugging and soil compaction than 700 kg standard commercial cows.
            </p>
          </div>

          <div className="bg-white p-6 rounded-sm shadow-sm border border-[#1E293B]/10">
            <CheckCircle2 className="w-8 h-8 text-[#C2673F] mb-4" />
            <h3 className="font-serif text-xl font-bold text-[#1C3B2B] mb-2">Gentle Temperament</h3>
            <p className="text-xs text-[#1E293B]/70 leading-relaxed">
              Naturally docile, non-aggressive, and inquisitive. Halter-trained calves quickly bond with handlers and relish brushing sessions.
            </p>
          </div>
        </div>

        {/* Detailed Breed Standard Breakdown */}
        <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-[#1E293B]/10 mb-16">
          <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-6">
            Breed Standards &amp; Conformation Requirements
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
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B]">Australian Regulatory Requirements</h3>
              <p>
                Under Australian biosecurity law, buyers must possess a Property Identification Code (PIC) from their local state department (e.g., Biosecurity Queensland, NSW Local Land Services). All calves transfer with NLIS RFID ear tags.
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
            href="/calves"
            className="px-8 py-3.5 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors whitespace-nowrap"
          >
            Browse Available Calves &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
