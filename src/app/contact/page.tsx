import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-[#FDFBF7] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-[#1C3B2B] mb-4">Contact Us</h1>
          <p className="text-lg text-[#1E293B]/70 max-w-2xl mx-auto">
            Get in touch to discuss our available calves, arrange a farm visit, or inquire about our upcoming breeding season.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Details */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F4EFE6] flex items-center justify-center rounded-sm shrink-0">
                  <Mail className="w-6 h-6 text-[#C2673F]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1C3B2B] mb-1">Email</h3>
                  <p className="text-[#1E293B]/70">info@minihighlandcows.store</p>
                  <p className="text-sm text-[#1E293B]/50 mt-1">We typically reply within 24 hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F4EFE6] flex items-center justify-center rounded-sm shrink-0">
                  <Phone className="w-6 h-6 text-[#C2673F]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1C3B2B] mb-1">Phone</h3>
                  <p className="text-[#1E293B]/70">+61 468 187 340</p>
                  <p className="text-sm text-[#1E293B]/50 mt-1">Direct calls and SMS. Mon-Fri from 9am to 5pm AEST.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F4EFE6] flex items-center justify-center rounded-sm shrink-0">
                  <MapPin className="w-6 h-6 text-[#C2673F]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1C3B2B] mb-1">Farm Location</h3>
                  <p className="text-[#1E293B]/70">Victoria, Australia</p>
                  <p className="text-sm text-[#1E293B]/50 mt-1">Farm visits are strictly by appointment only for biosecurity reasons.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/5">
            <h2 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-6">Send an Inquiry</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-2 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-2 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1E293B] mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-2 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1E293B] mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
