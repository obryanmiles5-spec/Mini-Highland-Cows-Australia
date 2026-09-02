import Link from 'next/link';
import Image from 'next/image';
import { Leaf, ArrowRight, Star, Calendar } from 'lucide-react';
import { CALVES_DATA } from '@/data/calves';
import ReviewsSlider from '@/components/ReviewsSlider';
import HeroSlider from '@/components/HeroSlider';


export const metadata = {
  title: 'Miniature Highland Cows for Sale | Micro, Teacup & Mini Calves Australia',
  description: 'Buy premium, DNA verified, halter-trained miniature highland calves in Australia. Discover fluffy mini cows, micro miniatures, and teacup highlands for your farm.',
  alternates: {
    canonical: 'https://minihighlandcows.store',
  },
  openGraph: {
    title: 'Miniature Highland Cows for Sale | Micro, Teacup & Mini Calves Australia',
    description: 'Buy premium, DNA verified, halter-trained miniature highland calves in Australia. Discover fluffy mini cows, micro miniatures, and teacup highlands for your farm.',
    url: 'https://minihighlandcows.store',
    siteName: 'Dunblane Highlands',
    images: [
      {
        url: 'https://minihighlandcows.store/images/hero.jpg', // Placeholder for OG image
        width: 1200,
        height: 630,
        alt: 'Miniature Highland Cows for Sale | Micro, Teacup & Mini Calves Australia',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miniature Highland Cows for Sale | Micro, Teacup & Mini Calves Australia',
    description: 'Buy premium, DNA verified, halter-trained miniature highland calves in Australia. Discover fluffy mini cows, micro miniatures, and teacup highlands for your farm.',
    images: ['https://minihighlandcows.store/images/hero.jpg'],
  },
};

export default function Home() {
  const featuredCalves = CALVES_DATA.slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Store", "Organization", "WebSite"],
    "name": "Dunblane Pastoral Holdings Pty Ltd",
    "description": "Premium breeder of miniature highland cows, micro miniature cattle, and fluffy mini cows in Australia.",
    "url": "https://minihighlandcows.store",
    "logo": "https://minihighlandcows.store/favicon.ico",
    "image": "https://minihighlandcows.store/images/hero.jpg",
    "foundingDate": "2010",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AU",
      "postalCode": "4725",
      "addressRegion": "QLD"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "info@minihighlandcows.store",
      "availableLanguage": "en-AU"
    },
    "sameAs": [
      "https://www.facebook.com/dunblanepastoral"
    ],
    "makesOffer": {
      "@type": "AggregateOffer",
      "priceCurrency": "AUD",
      "lowPrice": "4000",
      "highPrice": "10000",
      "offerCount": featuredCalves.length
    }
  };


  return (
    <div className="bg-[#FDFBF7]">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <HeroSlider />

      {/* Featured Products (4 Calves) */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl text-[#1C3B2B] font-bold mb-4">Featured Calves</h2>
            <p className="text-[#1E293B]/70 max-w-2xl">
              Meet our latest available miniature highland calves, each with exceptional temperament and verified genetics.
            </p>
          </div>
          <Link href="/calves" className="hidden md:flex items-center gap-2 text-[#C2673F] font-medium hover:text-[#A85532] transition-colors">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCalves.map((calf) => (
            <div key={calf.id} className="bg-white rounded-sm overflow-hidden shadow-sm border border-[#1E293B]/5 group">
              <Link href={`/calves/${calf.id}`} className="aspect-[4/3] relative overflow-hidden bg-[#F4EFE6] block">
                <Image src={calf.images[0]}
                  alt={calf.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                 referrerPolicy="no-referrer" />
                {calf.status === 'Available' ? (
                  <span className="absolute top-4 right-4 bg-[#1C3B2B] text-[#FDFBF7] text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm z-10">
                    Available
                  </span>
                ) : (
                  <span className="absolute top-4 right-4 bg-[#C2673F] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm z-10">
                    {calf.status}
                  </span>
                )}
              </Link>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-[#1C3B2B] leading-tight">{calf.name}</h3>
                </div>
                <p className="text-sm text-[#1E293B]/60 mb-4">{calf.coat} {calf.sex} • {calf.height} projected</p>
                
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#1E293B]/10">
                  <span className="font-medium text-[#1C3B2B]">${calf.price.toLocaleString()}</span>
                  <Link href="/calves" className="text-sm font-medium text-[#C2673F] hover:text-[#A85532]">
                    Details &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/calves" className="inline-flex items-center gap-2 text-[#C2673F] font-medium hover:text-[#A85532] transition-colors">
            View all calves <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Quick Info Pillars */}
      <section className="py-24 bg-[#1C3B2B] text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <Leaf className="w-10 h-10 text-[#D4A373] mb-6" />
            <h3 className="font-serif text-2xl font-bold mb-4">DNA Verified</h3>
            <p className="text-white/80 font-light">Every calf is parentage verified and tested for Chondrodysplasia, ensuring healthy, true-to-type miniature highlands.</p>
          </div>
          <div className="flex flex-col items-center">
            <Leaf className="w-10 h-10 text-[#D4A373] mb-6" />
            <h3 className="font-serif text-2xl font-bold mb-4">Docile Temperament</h3>
            <p className="text-white/80 font-light">Raised with daily human interaction. Our calves are halter trained and acclimatized to handling before leaving our property.</p>
          </div>
          <div className="flex flex-col items-center">
            <Leaf className="w-10 h-10 text-[#D4A373] mb-6" />
            <h3 className="font-serif text-2xl font-bold mb-4">Australian Standard</h3>
            <p className="text-white/80 font-light">All stock comes with complete NLIS ear tags, National Vendor Declarations, and full veterinary health certificates.</p>
          </div>
        </div>
      </section>

      {/* SEO / Brand Authority Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl text-[#1C3B2B] font-bold mb-6">
              Ethically Bred Miniature Highland Calves in Australia
            </h2>
            <p className="text-[#1E293B]/80 mb-6 leading-relaxed">
              At Dunblane Highlands, we specialise in raising exceptional <strong>mini highland cows for sale</strong>. Based in Queensland, Australia, our focus is on breeding structurally sound, docile, and true-to-type miniature highland cattle. With over a decade of experience, we pride ourselves on transparency, ethical farming practices, and matching the right calf to the right family.
            </p>
            <p className="text-[#1E293B]/80 mb-8 leading-relaxed">
              Whether you are looking for a gentle paddock pet or a foundation breeding heifer, our miniature highlands are renowned for their incredible temperaments. Every calf leaves our property fully weaned, halter-trained, and acclimatised to human interaction. We provide complete genetic transparency, including DNA parentage verification and chondrodysplasia testing.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-[#1C3B2B] mb-2 border-l-2 border-[#C2673F] pl-3">Queensland HQ</h4>
                <p className="text-sm text-[#1E293B]/70 pl-3">Raised on premium pasture with Australia-wide transport available.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#1C3B2B] mb-2 border-l-2 border-[#C2673F] pl-3">NLIS Registered</h4>
                <p className="text-sm text-[#1E293B]/70 pl-3">Complete traceability, health declarations, and veterinary certificates.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/5] rounded-sm overflow-hidden shadow-sm">
            <Image src="https://drive.google.com/uc?export=view&id=1dVP0WPimbOub0myAQVRgBA0JrcHENgtB"
              alt="Miniature highland calf looking curiously at the camera"
              fill
              className="object-cover"
             referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Trustpilot Real-Time Verified Reviews */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
            <div className="bg-[#00B67A] text-white px-2 py-1 flex items-center gap-1 font-bold rounded-sm">
              <Star className="w-4 h-4 fill-white text-white" />
              Trustpilot
            </div>
            <div className="flex items-center">
              <span className="text-[#1E293B] font-medium mr-3">Excellent</span>
              <div className="flex text-[#00B67A]">
                <Star className="w-5 h-5 fill-[#00B67A]" />
                <Star className="w-5 h-5 fill-[#00B67A]" />
                <Star className="w-5 h-5 fill-[#00B67A]" />
                <Star className="w-5 h-5 fill-[#00B67A]" />
                <Star className="w-5 h-5 fill-[#00B67A]" />
              </div>
            </div>
            <span className="text-[#1E293B]/60 text-sm md:ml-2">4.9 out of 5 based on 142 reviews</span>
          </div>
          <h2 className="font-serif text-4xl text-[#1C3B2B] font-bold mb-4">Real-Time Verified Reviews</h2>
        </div>
        <ReviewsSlider />
      </section>

      {/* News & Blog Section */}
      <section className="py-24 bg-[#F4EFE6]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl text-[#1C3B2B] font-bold mb-4">Farm News & Insights</h2>
              <p className="text-[#1E293B]/70 max-w-2xl">
                Updates from the pasture, cattle care tips, and stories from our highland family.
              </p>
            </div>
            <Link href="#" className="hidden md:flex items-center gap-2 text-[#C2673F] font-medium hover:text-[#A85532] transition-colors">
              Read all posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Preparing Your Paddock for a Miniature Highland',
                excerpt: 'Before bringing your new calf home, it is essential to ensure your fencing, shelter, and pasture are prepared. Here is our comprehensive checklist.',
                date: 'Aug 24, 2026',
                img: 'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'Understanding Chondrodysplasia in Miniature Cattle',
                excerpt: 'We take breeding genetics seriously. Learn why testing for the chondrodysplasia gene is critical for the long-term health of miniature highland herds.',
                date: 'Jul 15, 2026',
                img: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80'
              }
            ].map((post, i) => (
              <div key={i} className="bg-white rounded-sm overflow-hidden flex flex-col sm:flex-row shadow-sm border border-[#1E293B]/5 group">
                <div className="sm:w-2/5 aspect-square sm:aspect-auto relative overflow-hidden">
                  <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500"  referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs text-[#1E293B]/50 uppercase tracking-wider font-medium mb-3">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1C3B2B] mb-3 leading-tight group-hover:text-[#C2673F] transition-colors">{post.title}</h3>
                  <p className="text-[#1E293B]/70 text-sm mb-6 line-clamp-3">{post.excerpt}</p>
                  <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#C2673F] hover:text-[#A85532]">
                    Read article &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      {/* Ranch Gallery Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-serif text-4xl text-[#1C3B2B] font-bold mb-4">Ranch Gallery</h2>
          <p className="text-lg text-[#1E293B]/70 max-w-2xl mx-auto">
            A glimpse into the daily life on our Queensland property, showcasing our beautiful highland herd and premium pastures.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'https://drive.google.com/uc?export=view&id=1l2DtI48M_2aok8S9eCzpyHCKUT9D365H',
            'https://drive.google.com/uc?export=view&id=1nCt6xj9shFn9f-Uz_7YDD4SgOkFnVl4k',
            'https://drive.google.com/uc?export=view&id=1DhPsT6edcCZa452IkqhX6IXAgO2pDbew',
            'https://drive.google.com/uc?export=view&id=1Jj3rBhq6oav7vaMo0HkiDl_ZbRVQGcMZ',
            'https://drive.google.com/uc?export=view&id=10PLbbX5Z_zIl0BwGoYMRXjnjlb-Fz6Ij',
            'https://drive.google.com/uc?export=view&id=1b6JRarh929BTLZIV4HEhgomYEcPNg9k9'
          ].map((src, i) => (
            <div key={i} className="relative aspect-square rounded-sm overflow-hidden group">
              <Image src={src} 
                alt={`Dunblane Highlands Ranch Gallery Image ${i + 1}`} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
               referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      </section>
</div>
  );
}
