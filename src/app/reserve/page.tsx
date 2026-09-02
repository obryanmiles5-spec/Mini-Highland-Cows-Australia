import Link from 'next/link';

export default function ReservePage() {
  return (
    <div className="bg-[#FDFBF7] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-[#1C3B2B] mb-4">Reserve Now</h1>
          <p className="text-lg text-[#1E293B]/70 max-w-2xl mx-auto">
            Secure your miniature highland calf with a formal reservation deposit.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-[#1E293B]/5">
          <h2 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-6">Reservation Form</h2>
          <p className="text-[#1E293B]/80 mb-8 leading-relaxed">
            Please fill out the form below to initiate the reservation process. Note that completing this form does not immediately secure a calf; our team will review your application and property details to ensure a suitable fit. A non-refundable 20% deposit is required upon approval.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1E293B] mb-1">First Name</label>
                <input type="text" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1E293B] mb-1">Last Name</label>
                <input type="text" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1E293B] mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1E293B] mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1E293B] mb-1">Property Identification Code (PIC)</label>
              <input type="text" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors" required placeholder="Required for Australian buyers" />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1E293B] mb-1">Calf of Interest</label>
              <select className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors" required>
                <option value="">Select a calf...</option>
                <option value="hamish">Hamish of Dunblane</option>
                <option value="bonnie">Bonnie Lass</option>
                <option value="fergus">Fergus Silvercrest</option>
                <option value="isla">Isla White Rose</option>
                <option value="lachlan">Lachlan of Strathbogie</option>
                <option value="maisie">Maisie Belle</option>
                <option value="morag">Morag Honey</option>
                <option value="callum">Callum Snow</option>
                <option value="fiona">Fiona Silvermist</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1E293B] mb-1">Message or Additional Details</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors resize-none" placeholder="Tell us a bit about your property, existing herd, and experience..."></textarea>
            </div>

            <div className="pt-4 border-t border-[#1E293B]/10">
              <button type="submit" className="w-full py-4 bg-[#1C3B2B] text-white font-medium text-lg rounded-sm hover:bg-[#152C20] transition-colors">
                Submit Reservation Request
              </button>
              <p className="text-center text-sm text-[#1E293B]/50 mt-4">
                By submitting this form, you agree to our <Link href="/process" className="underline hover:text-[#C2673F]">Adoption & Sales terms</Link>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
