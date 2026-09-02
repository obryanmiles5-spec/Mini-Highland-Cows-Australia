const fs = require('fs');

let content = fs.readFileSync('src/app/process/page.tsx', 'utf8');

const oldReturn = content.slice(content.indexOf('return ('));
const newReturn = `return (
    <div className="bg-[#FDFBF7] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-serif text-5xl font-bold text-[#1C3B2B] mb-8 text-center">Adoption & Sales Process</h1>
        
        <p className="text-xl leading-relaxed text-[#1E293B]/80 font-light mb-16 text-center">
          We want to ensure our miniature highlands go to safe, suitable, and loving homes. 
          Our transparent, six-step sales process is meticulously designed to support you from your very first inquiry right through to delivery and ongoing care.
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
                The first step is reaching out to us regarding an available calf. To legally own cattle in Australia, we require all prospective buyers to hold a valid <strong>Property Identification Code (PIC)</strong> issued by your state government. We will discuss your acreage, fencing type, water sources, and herd requirements to ensure a miniature highland is the right fit for your property. Please note that Highlands are herd animals—they form strong bonds and cannot be kept alone. If you do not currently have cattle, you will need to purchase a pair or have suitable companion animals.
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
                Once your property is approved and you have selected your calf, a non-refundable 20% deposit is required to secure the animal. Upon receipt of the deposit, we will issue a formal, legally binding sales contract detailing the animal&apos;s pedigree, health guarantees, agreed purchase price, and tentative handover date. The calf&apos;s status on our website will immediately be updated to &quot;Reserved&quot;.
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
                Weaning & Halter Training <ShieldCheck className="w-5 h-5 text-[#C2673F]" />
              </h3>
              <p className="text-[#1E293B]/70 leading-relaxed mb-4">
                We never rush the weaning process. Calves remain with their mothers until they are naturally ready (usually around 5-6 months of age) to ensure strong immune systems and proper socialization. During this period, we work closely with the calves to halter train them, brush them daily, and desensitize them to human contact, dogs, and farm machinery. We will provide you with regular video and photo updates of your calf&apos;s progress.
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
                Health Check & Documentation <ShieldCheck className="w-5 h-5 text-[#C2673F]" />
              </h3>
              <p className="text-[#1E293B]/70 leading-relaxed mb-4">
                Prior to leaving our farm, every calf undergoes a rigorous final veterinary health check. They are drenched for internal and external parasites, fully vaccinated (7-in-1), and their NLIS (National Livestock Identification System) tag is prepared for transfer. We will handle all the paperwork, preparing the National Vendor Declaration (NVD) and transferring the DNA parentage certificates and registration directly into your name.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex gap-6 items-start">
            <div className="w-16 h-16 bg-[#1C3B2B] text-white rounded-full flex items-center justify-center shrink-0 font-serif text-2xl">
              5
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-3 flex items-center gap-2">
                Transport & Handover <Truck className="w-5 h-5 text-[#C2673F]" />
              </h3>
              <p className="text-[#1E293B]/70 leading-relaxed mb-4">
                The remaining balance must be cleared prior to transport. We accept Pay ID, Bank Transfer, Credit Card, and Crypto (USDT, BTC). You can arrange to float the calf yourself from our Queensland property, or we can recommend trusted, climate-controlled livestock transport services that operate nationwide. We offer <strong>free delivery to the same city as our address (QLD 4725)</strong>. A customized feeding and care guide is provided upon handover.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex gap-6 items-start">
            <div className="w-16 h-16 bg-[#1C3B2B] text-white rounded-full flex items-center justify-center shrink-0 font-serif text-2xl">
              6
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-3 flex items-center gap-2">
                Lifetime Support
              </h3>
              <p className="text-[#1E293B]/70 leading-relaxed mb-4">
                Our relationship doesn&apos;t end when the calf leaves our farm. We provide lifetime breeder support to all our buyers. Whether you have questions about pasture management, winter feeding schedules, or integrating the calf into your existing herd, we are just a phone call or email away. We love receiving updates and photos as your miniature highland grows!
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}`;

content = content.replace(oldReturn, newReturn);
fs.writeFileSync('src/app/process/page.tsx', content);
