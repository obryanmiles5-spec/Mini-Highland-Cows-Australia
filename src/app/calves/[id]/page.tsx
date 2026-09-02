import { CALVES_DATA } from '@/data/calves';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check, Ruler, Info, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "How much space do miniature highlands need?",
    answer: "Generally, we recommend 1 to 2 acres per pair of miniature highlands, depending on the quality of your pasture and whether you plan to supplement with hay year-round. They are herd animals and must be kept with at least one other bovine companion."
  },
  {
    question: "Do they require special fencing?",
    answer: "Standard cattle fencing (like 5-strand wire or woven wire cattle panels) is completely sufficient. Miniature highlands are typically very respectful of fences and are not known to be escape artists."
  },
  {
    question: "Are they good with children and other pets?",
    answer: "Yes! Our miniature highlands are specifically bred for their docile, gentle temperaments. Because we halter-train and socialize them from a young age, they make wonderful paddock pets and are great around respectful children and farm dogs."
  },
  {
    question: "How do you manage their long coats in the Australian summer?",
    answer: "Highland cattle naturally shed their thick winter undercoat in the warmer months. Providing them with ample shade (like large trees or a shelter) and constant access to fresh, cool drinking water is all they need to stay comfortable."
  }
];

export async function generateStaticParams() {
  return CALVES_DATA.map((calf) => ({
    id: calf.id.toString(),
  }));
}

export default async function CalfDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const calf = CALVES_DATA.find((c) => c.id.toString() === id);

  if (!calf) {
    notFound();
  }

  return (
    <div className="bg-[#FDFBF7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <Link href="/calves" className="inline-flex items-center gap-2 text-[#1E293B]/70 hover:text-[#1C3B2B] transition-colors mb-8 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to all calves
        </Link>
        
        <div className="bg-white rounded-sm shadow-sm border border-[#1E293B]/5 overflow-hidden">
          <div className="grid md:grid-cols-2">
            
            {/* Image Gallery Column */}
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-[#1E293B]/5">
              <div className="aspect-[4/3] relative overflow-hidden bg-[#F4EFE6]">
                <Image
                  src={calf.images[0]}
                  alt={calf.name}
                  fill
                  priority
                  className="object-cover"
                />
                {calf.status === 'Available' ? (
                  <span className="absolute top-4 right-4 bg-[#1C3B2B] text-[#FDFBF7] text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm z-10">
                    Available
                  </span>
                ) : (
                  <span className="absolute top-4 right-4 bg-[#C2673F] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm z-10">
                    {calf.status}
                  </span>
                )}
              </div>
              {calf.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2 p-4 bg-[#F8F9FA]">
                  {calf.images.slice(1).map((img, i) => (
                    <div key={i} className="aspect-[4/3] relative overflow-hidden rounded-sm cursor-pointer border-2 border-transparent hover:border-[#1C3B2B] transition-colors">
                      <Image
                        src={img}
                        alt={`${calf.name} gallery image ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details Column */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-8 border-b border-[#1E293B]/10 pb-8">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1C3B2B] mb-4">{calf.name}</h1>
                <p className="text-xl text-[#1E293B]/80 font-light leading-relaxed">
                  {calf.desc}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-8">
                <div>
                  <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1 flex items-center gap-1"><Info className="w-3 h-3" /> Sex</span>
                  <span className="font-medium text-[#1E293B]">{calf.sex}</span>
                </div>
                <div>
                  <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1 flex items-center gap-1"><Info className="w-3 h-3" /> Coat</span>
                  <span className="font-medium text-[#1E293B]">{calf.coat}</span>
                </div>
                <div>
                  <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1 flex items-center gap-1"><Ruler className="w-3 h-3" /> Proj. Height</span>
                  <span className="font-medium text-[#1E293B]">{calf.height}</span>
                </div>
                <div>
                  <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1 flex items-center gap-1"><Info className="w-3 h-3" /> Date of Birth</span>
                  <span className="font-medium text-[#1E293B]">{calf.dob}</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1 flex items-center gap-1"><Check className="w-3 h-3" /> Chondro Status</span>
                  <span className="font-medium text-[#1E293B]">{calf.chondro}</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1 flex items-center gap-1"><Info className="w-3 h-3" /> Temperament</span>
                  <span className="font-medium text-[#1E293B]">{calf.temp}</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1 flex items-center gap-1"><Info className="w-3 h-3" /> Pedigree</span>
                  <span className="font-medium text-[#1E293B]">{calf.pedigree}</span>
                </div>
              </div>

              {calf.status === 'Available' && (
                <div className="mt-auto bg-[#F8F9FA] p-6 rounded-sm border border-[#1E293B]/10">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1">Total Price</span>
                      <span className="font-serif text-3xl font-bold text-[#1C3B2B]">${calf.price.toLocaleString()}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[#1E293B]/50 uppercase tracking-wider text-[10px] font-bold mb-1">Required Deposit</span>
                      <span className="font-medium text-[#1E293B]">${calf.deposit.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="text-xs text-[#1E293B]/70 mb-6 bg-[#1C3B2B]/5 p-3 rounded-sm border border-[#1C3B2B]/10">
                    <span className="font-bold text-[#1C3B2B]">10% Discount</span> when paying with Cryptocurrency. Free delivery to QLD 4725.
                  </div>
                  
                  <Link href="/reserve" className="block w-full py-4 text-center bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors">
                    Inquire About {calf.name}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-[#1C3B2B] mb-4">Frequently Asked Questions</h2>
            <p className="text-[#1E293B]/70">Common questions about caring for miniature highlands.</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-sm shadow-sm border border-[#1E293B]/5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-[#1C3B2B]">
                  {faq.question}
                  <span className="transition duration-300 group-open:-rotate-180">
                    <ChevronDown className="w-5 h-5 text-[#1C3B2B]/50" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[#1E293B]/70 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
