import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service & Livestock Agreement | Dunblane Highlands',
  description: 'Terms of service, livestock sales agreements, holding deposit policies, and health warranties for Dunblane Pastoral Holdings Pty Ltd.',
  alternates: {
    canonical: 'https://minihighlandcows.store/terms/',
  },
};

export default function TermsPage() {
  return (
    <div className="bg-[#FDFBF7] py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#1E293B]/60 mb-8 font-medium">
          <Link href="/" className="hover:text-[#C2673F] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#1C3B2B] font-bold">Terms of Service</span>
        </nav>

        <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-[#1E293B]/10">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C3B2B] mb-2">
            Terms of Service &amp; Livestock Agreement
          </h1>
          <p className="text-xs text-[#1E293B]/50 uppercase tracking-wider mb-8 font-semibold">
            Dunblane Pastoral Holdings Pty Ltd (ABN 81 131 156 922)
          </p>

          <div className="space-y-8 text-sm text-[#1E293B]/80 leading-relaxed">
            <section>
              <h2 className="font-serif text-xl font-bold text-[#1C3B2B] mb-3">1. Cattle Reservations &amp; Deposits</h2>
              <p>
                To reserve a specific miniature highland calf, a non-refundable holding deposit of $500 to $1,000 AUD is required. 
                This deposit secures the calf exclusively in your name and covers continued daily feed, veterinary health assessments, 
                and ongoing halter training until the agreed collection or transit date.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-[#1C3B2B] mb-3">2. Health Guarantee &amp; Vet Inspections</h2>
              <p>
                Every calf undergoes a comprehensive veterinary health check prior to departure. We guarantee that all livestock leaving 
                our property are structurally sound, free of infectious disease, up to date on 5-in-1 vaccinations and worming, and tagged 
                with registered NLIS RFID devices.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-[#1C3B2B] mb-3">3. Property Identification Code (PIC)</h2>
              <p>
                In accordance with Australian biosecurity regulations, purchasers must supply a valid Property Identification Code (PIC) 
                issued by their state agricultural department prior to livestock departure.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-[#1C3B2B] mb-3">4. Payments &amp; Delivery</h2>
              <p>
                The remaining purchase balance is due prior to loading or at scheduled handover. 
                Accepted payment methods include Pay ID, Direct Bank Transfer, Credit Card, and Cryptocurrency (USDT, BTC). 
                Complimentary delivery applies to the same city or local district as our registered business address (QLD 4725). 
                Interstate freight is coordinated via insured livestock carriers at established carrier rates.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
