import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Miniature Highland Cows | Dunblane Pastoral',
  description: 'Discover our beautiful miniature highland calves.',
  alternates: {
    canonical: 'https://dunblane.com.au/contact',
  },
  openGraph: {
    title: 'Miniature Highland Cows | Dunblane Pastoral',
    description: 'Discover our beautiful miniature highland calves.',
    url: 'https://dunblane.com.au/contact',
    siteName: 'Dunblane Highlands',
    images: [
      {
        url: 'https://dunblane.com.au/images/hero.jpg', // Placeholder for OG image
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
    title: 'Miniature Highland Cows | Dunblane Pastoral',
    description: 'Discover our beautiful miniature highland calves.',
    images: ['https://dunblane.com.au/images/hero.jpg'],
  },
};


export default function ContactPage() {
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dunblane.com.au/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://dunblane.com.au/contact"
      }
    ]
  };

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
                  <p className="text-[#1E293B]/70">QLD, Australia</p>
                  <p className="text-sm text-[#1E293B]/50 mt-1">Farm visits are strictly by appointment only for biosecurity reasons.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-sm shadow-sm border border-[#1E293B]/5">
            <h2 className="font-serif text-2xl font-bold text-[#1C3B2B] mb-6">Send an Inquiry</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
