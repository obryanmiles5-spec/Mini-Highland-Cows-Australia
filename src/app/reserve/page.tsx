import ReserveForm from '@/components/ReserveForm';
import Link from 'next/link';
import { CALVES_DATA } from '@/data/calves';

export const metadata = {
  title: 'Reserve a Miniature Highland Calf | Dunblane Highlands',
  description: 'Secure your miniature highland calf with a formal reservation. Fill out our adoption form to start the process of bringing home your new fluffy companion.',
  alternates: {
    canonical: 'https://minihighlandcows.store/reserve',
  },
  openGraph: {
    title: 'Reserve a Miniature Highland Calf | Dunblane Highlands',
    description: 'Secure your miniature highland calf with a formal reservation. Fill out our adoption form to start the process of bringing home your new fluffy companion.',
    url: 'https://minihighlandcows.store/reserve',
    siteName: 'Dunblane Highlands',
    images: [
      {
        url: 'https://minihighlandcows.store/images/hero.jpg', // Placeholder for OG image
        width: 1200,
        height: 630,
        alt: 'Miniature Highland Cows | Dunblane Pastoral',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reserve a Miniature Highland Calf | Dunblane Highlands',
    description: 'Secure your miniature highland calf with a formal reservation. Fill out our adoption form to start the process of bringing home your new fluffy companion.',
    images: ['https://minihighlandcows.store/images/hero.jpg'],
  },
};


export default function ReservePage() {
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://minihighlandcows.store/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Reserve",
        "item": "https://minihighlandcows.store/reserve"
      }
    ]
  };

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

          <ReserveForm />
        </div>
      </div>
    </div>
  );
}
