export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { Truck, MapPin, ShieldCheck, Clock, FileText, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Australia-Wide Miniature Cow Delivery & Transport | Dunblane',
  description: 'Learn about livestock delivery and transport for miniature highland cows across Australia. Free local city delivery, interstate logistics to QLD, NSW, VIC, SA, WA.',
  alternates: {
    canonical: 'https://minihighlandcows.store/delivery/',
  },
  openGraph: {
    title: 'Australia-Wide Miniature Cow Delivery & Transport | Dunblane',
    description: 'Learn about livestock delivery and transport for miniature highland cows across Australia. Free local city delivery, interstate logistics.',
    url: 'https://minihighlandcows.store/delivery/',
    siteName: 'Dunblane Highlands',
    images: [
      {
        url: 'https://minihighlandcows.store/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Livestock Transport Miniature Cows Australia - Dunblane',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Australia-Wide Miniature Cow Delivery & Transport | Dunblane',
    description: 'Safe, humane livestock transport for miniature highland cattle across Australia.',
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
      "name": "Dunblane Pastoral Holdings Pty Ltd"
    },
    "areaServed": "AU",
    "description": "Professional and stress-free livestock transportation for pedigree miniature highland cattle across Queensland, New South Wales, Victoria, and throughout Australia."
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
            Safe, Humane Nationwide Logistics
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C3B2B] leading-tight mb-6">
            Miniature Cow Delivery &amp; Transport
          </h1>
          <p className="text-lg text-[#1E293B]/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Getting your new miniature highland calf safely home is our top priority. 
            We offer <strong>free delivery to the same city as our address</strong>, along with scheduled 
            humane road transport routes across all Australian states and territories.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/calves"
              className="px-8 py-3.5 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors shadow-sm"
            >
              Browse Available Calves
            </Link>
            <Link
              href="/contact"
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
            <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-2">Free Same-City Delivery</h3>
            <p className="text-sm text-[#1E293B]/70 leading-relaxed">
              If your delivery property is located in the same city or local district as our main business address (QLD 4725), road transport is 100% complimentary.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/10">
            <Truck className="w-10 h-10 text-[#C2673F] mb-4" />
            <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-2">Interstate Road Freight</h3>
            <p className="text-sm text-[#1E293B]/70 leading-relaxed">
              We coordinate with vetted, specialized livestock carriers traveling weekly routes to Queensland, New South Wales, Victoria, South Australia, and Western Australia.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/10">
            <FileText className="w-10 h-10 text-[#C2673F] mb-4" />
            <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-2">NLIS &amp; PIC Compliance</h3>
            <p className="text-sm text-[#1E293B]/70 leading-relaxed">
              We complete all National Vendor Declarations (NVD), waybills, and NLIS database property-to-property transfers so you are 100% compliant with state biosecurity regulations.
            </p>
          </div>
        </div>

        {/* State by State Breakdown */}
        <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-[#1E293B]/10 mb-16">
          <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-8">
            State-by-State Transport Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-[#1E293B]/80 leading-relaxed">
            <div className="border-l-2 border-[#C2673F] pl-6 space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B]">Queensland (QLD)</h3>
              <p>
                Departs directly from our Central QLD property. Regular routes to Brisbane, Gold Coast, Sunshine Coast, Toowoomba, Mackay, Townsville, and Cairns.
              </p>
            </div>
            <div className="border-l-2 border-[#C2673F] pl-6 space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B]">New South Wales (NSW)</h3>
              <p>
                Weekly livestock freight down the Newell and Pacific Highways. Servicing Northern Rivers, Hunter Valley, Sydney basin, Southern Highlands, and Riverina.
              </p>
            </div>
            <div className="border-l-2 border-[#C2673F] pl-6 space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B]">Victoria (VIC)</h3>
              <p>
                Regular transfers via Melbourne, Yarra Valley, Mornington Peninsula, Ballarat, and Bendigo depots with rested overnight layovers.
              </p>
            </div>
            <div className="border-l-2 border-[#C2673F] pl-6 space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#1C3B2B]">South Australia &amp; WA</h3>
              <p>
                Coordinated with accredited trans-continental livestock transporters ensuring regulated hydration breaks, veterinary checks, and air-flow floats.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-[#1C3B2B] text-[#FDFBF7] p-8 sm:p-12 rounded-sm text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Request a Delivery Quote for Your Property</h2>
          <p className="text-sm text-[#FDFBF7]/80 max-w-xl mx-auto mb-8">
            Provide your Property Identification Code (PIC) or post code, and our logistics team will calculate the most cost-effective and stress-free route for your calf.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="px-8 py-3.5 bg-[#C2673F] text-white font-medium rounded-sm hover:bg-[#A85532] transition-colors">
              Contact Logistics Team
            </Link>
            <Link href="/process" className="px-8 py-3.5 border border-[#FDFBF7]/30 text-white font-medium rounded-sm hover:bg-white/10 transition-colors">
              Read Adoption Process
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
