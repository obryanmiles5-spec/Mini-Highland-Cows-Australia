export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { Truck, MapPin, ShieldCheck, Clock, FileText, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Nationwide USA Miniature Cow Delivery & Transport | Dunblane Highlands',
  description: 'Learn about livestock delivery and transport for miniature highland cows across the United States. Free local delivery, climate-controlled interstate logistics to Texas, Ohio, Missouri, Florida, and all 48 states.',
  alternates: {
    canonical: 'https://minihighlandcows.store/delivery/',
    languages: {
      'en-US': 'https://minihighlandcows.store/delivery/',
      'x-default': 'https://minihighlandcows.store/delivery/',
    },
  },
  openGraph: {
    title: 'Nationwide USA Miniature Cow Delivery & Transport | Dunblane Highlands',
    description: 'Learn about livestock delivery and transport for miniature highland cows across the United States. Free local delivery, climate-controlled interstate logistics.',
    url: 'https://minihighlandcows.store/delivery/',
    siteName: 'Dunblane Highlands USA',
    images: [
      {
        url: 'https://minihighlandcows.store/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Livestock Transport Miniature Cows USA - Dunblane Highlands',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nationwide USA Miniature Cow Delivery & Transport | Dunblane Highlands',
    description: 'Safe, humane livestock transport for miniature highland cattle across the United States.',
    images: ['https://minihighlandcows.store/images/hero.jpg'],
  },
};

export default function DeliveryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Livestock Transportation and Delivery",
    "provider": {
      "@type": "Organization",
      "name": "Dunblane Highlands Ranch LLC"
    },
    "areaServed": "US",
    "description": "Professional and stress-free livestock transportation for pedigree miniature highland cattle across Texas, the Midwest, the South, East Coast, and all 48 continental states."
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
          <span className="text-[#1C3B2B] font-bold">Delivery &amp; Transport</span>
        </nav>

        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C2673F] font-bold block mb-3">
            Safe, Humane Nationwide US Logistics
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C3B2B] leading-tight mb-6">
            Miniature Cow Delivery &amp; Transport
          </h1>
          <p className="text-lg text-[#1E293B]/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Getting your new miniature highland calf safely home is our top priority. 
            We offer <strong>free delivery within the same city or local county as our ranch (Canton, TX 75103)</strong>, along with scheduled 
            humane climate-controlled livestock routes across all 48 continental states.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/calves/"
              className="px-8 py-3.5 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors shadow-sm"
            >
              Browse Available Calves
            </Link>
            <Link
              href="/contact/"
              className="px-8 py-3.5 border border-[#1C3B2B] text-[#1C3B2B] font-medium rounded-sm hover:bg-[#1C3B2B]/5 transition-colors"
            >
              Get a Freight Quote
            </Link>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/10">
            <MapPin className="w-10 h-10 text-[#C2673F] mb-4" />
            <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-2">Free Local Delivery</h3>
            <p className="text-sm text-[#1E293B]/70 leading-relaxed">
              If your delivery property is located in the same city or local county as our Texas ranch (Van Zandt County / Canton, TX 75103), road transport is 100% complimentary.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/10">
            <Truck className="w-10 h-10 text-[#C2673F] mb-4" />
            <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-2">Interstate Road Freight</h3>
            <p className="text-sm text-[#1E293B]/70 leading-relaxed">
              We coordinate with vetted, specialized livestock carriers traveling weekly routes to Texas, Oklahoma, Ohio, Missouri, Florida, North Carolina, and all 48 continental states.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/10">
            <FileText className="w-10 h-10 text-[#C2673F] mb-4" />
            <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-2">USDA CVI Compliance</h3>
            <p className="text-sm text-[#1E293B]/70 leading-relaxed">
              We provide the official USDA Interstate Certificate of Veterinary Inspection (CVI), electronic 840 RFID tags, and state import permits so your delivery is 100% compliant.
            </p>
          </div>
        </div>

        {/* Regional Breakdown */}
        <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-[#1E293B]/10 mb-16">
          <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-8">
            Regional Transport Guidelines (USA)
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-[#1E293B]/80 leading-relaxed">
            <div className="border-l-2 border-[#C2673F] pl-6 space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B]">Texas &amp; Southwest</h3>
              <p>
                Departs directly from our Canton, Texas ranch. Regular routes to Dallas-Fort Worth, Houston, Austin, San Antonio, East Texas, Oklahoma City, Tulsa, Phoenix, and Albuquerque.
              </p>
            </div>
            <div className="border-l-2 border-[#C2673F] pl-6 space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B]">Midwest &amp; Heartland</h3>
              <p>
                Weekly livestock freight down I-35, I-44, and I-70 serving Missouri (Kansas City, Springfield, St. Louis), Ohio (Columbus, Cincinnati), Indiana, Illinois, Iowa, and Wisconsin.
              </p>
            </div>
            <div className="border-l-2 border-[#C2673F] pl-6 space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B]">Southeast &amp; Gulf Coast</h3>
              <p>
                Regular transfers through Louisiana, Mississippi, Alabama, Georgia (Atlanta), Florida (Ocala, Orlando, Tampa), Tennessee (Nashville), and North Carolina with rested overnight stops.
              </p>
            </div>
            <div className="border-l-2 border-[#C2673F] pl-6 space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B]">West Coast &amp; Mountain States</h3>
              <p>
                Coordinated with accredited interstate livestock haulers ensuring regulated hydration breaks, veterinary checks, and deep-bedded air-flow trailers serving Colorado, Utah, Idaho, California, Oregon, and Washington.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-[#1C3B2B] text-[#FDFBF7] p-8 sm:p-12 rounded-sm text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Request a Delivery Quote for Your Property</h2>
          <p className="text-sm text-[#FDFBF7]/80 max-w-xl mx-auto mb-8">
            Provide your city and zip code, and our logistics team will calculate the most cost-effective and stress-free route for your calf.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact/" className="px-8 py-3.5 bg-[#C2673F] text-white font-medium rounded-sm hover:bg-[#A85532] transition-colors">
              Contact Logistics Team
            </Link>
            <Link href="/process/" className="px-8 py-3.5 border border-[#FDFBF7]/30 text-white font-medium rounded-sm hover:bg-white/10 transition-colors">
              Read Adoption Process
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
