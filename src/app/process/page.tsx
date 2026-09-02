import { CheckCircle2, FileText, Truck, ShieldCheck } from 'lucide-react';

export default function ProcessPage() {
  return (
    <div className="bg-[#FDFBF7] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-serif text-5xl font-bold text-[#1C3B2B] mb-8 text-center">Adoption & Sales Process</h1>
        
        <p className="text-xl leading-relaxed text-[#1E293B]/80 font-light mb-16 text-center">
          We want to ensure our miniature highlands go to safe, suitable, and loving homes. 
          Our transparent sales process is designed to support you from inquiry to delivery.
        </p>

        <div className="space-y-12">
          {/* Step 1 */}
          <div className="flex gap-6 items-start">
            <div className="w-16 h-16 bg-[#1C3B2B] text-white rounded-full flex items-center justify-center shrink-0 font-serif text-2xl">
              1
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-3 flex items-center gap-2">
                Inquiry & Property Check <CheckCircle2 className="w-5 h-5 text-[#C2673F]" />
              </h3>
              <p className="text-[#1E293B]/70 leading-relaxed mb-4">
                Reach out to us regarding an available calf. We require buyers to hold a valid Australian Property Identification Code (PIC). 
                We will discuss your acreage, fencing, and herd requirements to ensure a miniature highland is the right fit for your property. 
                Highlands are herd animals and cannot be kept alone.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-6 items-start">
            <div className="w-16 h-16 bg-[#1C3B2B] text-white rounded-full flex items-center justify-center shrink-0 font-serif text-2xl">
              2
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-3 flex items-center gap-2">
                Deposit & Reservation <FileText className="w-5 h-5 text-[#C2673F]" />
              </h3>
              <p className="text-[#1E293B]/70 leading-relaxed mb-4">
                Once approved, a non-refundable 20% deposit is required to secure your chosen calf. 
                We will issue a formal invoice and sales contract detailing the animal&apos;s pedigree, health guarantees, and agreed pickup/delivery dates. 
                The calf&apos;s status will immediately be updated to &quot;Reserved&quot;.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-6 items-start">
            <div className="w-16 h-16 bg-[#1C3B2B] text-white rounded-full flex items-center justify-center shrink-0 font-serif text-2xl">
              3
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-3 flex items-center gap-2">
                Health Check & Documentation <ShieldCheck className="w-5 h-5 text-[#C2673F]" />
              </h3>
              <p className="text-[#1E293B]/70 leading-relaxed mb-4">
                Prior to leaving our farm, every calf undergoes a final veterinary health check. 
                They are drenched, vaccinated (7-in-1), and their NLIS tag is registered for transfer. 
                We will prepare the National Vendor Declaration (NVD) and transfer the DNA parentage certificates to your name.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-6 items-start">
            <div className="w-16 h-16 bg-[#1C3B2B] text-white rounded-full flex items-center justify-center shrink-0 font-serif text-2xl">
              4
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-3 flex items-center gap-2">
                Transport & Handover <Truck className="w-5 h-5 text-[#C2673F]" />
              </h3>
              <p className="text-[#1E293B]/70 leading-relaxed mb-4">
                The remaining balance must be cleared prior to transport. We accept Bank Transfer, Escrow, and Cryptocurrency (which attracts a 10% discount). 
                You can arrange to float the calf yourself from our Queensland property, or we can recommend trusted, 
                climate-controlled livestock transport services that operate nationwide. We offer <strong>free delivery to the same city as our address (QLD 4725)</strong>. We provide a customized feeding and care guide upon handover.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
