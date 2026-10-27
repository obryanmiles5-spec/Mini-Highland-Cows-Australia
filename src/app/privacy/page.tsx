import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Dunblane Highlands Ranch LLC',
  description: 'Privacy policy and customer data protection procedures for Dunblane Highlands Ranch LLC (Canton, Texas, USA).',
  alternates: {
    canonical: 'https://minihighlandcows.store/privacy/',
    languages: {
      'en-US': 'https://minihighlandcows.store/privacy/',
      'x-default': 'https://minihighlandcows.store/privacy/',
    },
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#FDFBF7] py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#1E293B]/60 mb-8 font-medium">
          <Link href="/" className="hover:text-[#C2673F] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#1C3B2B] font-bold">Privacy Policy</span>
        </nav>

        <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-[#1E293B]/10">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C3B2B] mb-2">Privacy Policy</h1>
          <p className="text-xs text-[#1E293B]/50 uppercase tracking-wider mb-8 font-semibold">
            Last Updated: 2026 • Dunblane Highlands Ranch LLC • Canton, TX 75103, USA
          </p>

          <div className="space-y-8 text-sm text-[#1E293B]/80 leading-relaxed">
            <section>
              <h2 className="font-serif text-xl font-bold text-[#1C3B2B] mb-3">1. Information We Collect</h2>
              <p>
                Dunblane Highlands Ranch LLC collects information necessary to process livestock inquiries, 
                reservations, USDA interstate movement documentation (840 RFID and CVI health certificates), and secure payments. This includes your name, 
                contact telephone number, email address, physical farm delivery address, and livestock premise information.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-[#1C3B2B] mb-3">2. Use of Information</h2>
              <p>
                Your personal details are used solely to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Respond to inquiries regarding miniature highland cattle adoptions and purchases.</li>
                <li>Process reservation deposits and balance transactions via Zelle, ACH/Bank Wire, Credit Card, or Crypto.</li>
                <li>Complete mandatory statutory livestock movement paperwork including USDA 840 RFID transfers and Certificates of Veterinary Inspection (CVI).</li>
                <li>Coordinate safe, scheduled road freight to your property address across the United States.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-[#1C3B2B] mb-3">3. Data Security &amp; Confidentiality</h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties or marketing agencies. 
                All digital communications and inquiry forms are processed over secure SSL/TLS encrypted channels.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-[#1C3B2B] mb-3">4. Contact Us</h2>
              <p>
                If you have questions about your personal data or wish to update your contact details, please contact:
              </p>
              <p className="mt-2 font-medium text-[#1C3B2B]">
                Dunblane Highlands Ranch LLC<br />
                Canton, TX 75103, USA<br />
                Email: info@minihighlandcows.store<br />
                Phone: +1 (512) 842-9840
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
