import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const viewport = { themeColor: '#1C3B2B', width: 'device-width', initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL('https://minihighlandcows.store'),
  title: {
    default: 'Miniature Highland Cows for Sale USA | Dunblane Highlands',
    template: '%s | Dunblane Highlands USA',
  },
  description: "Buy premium, DNA-verified, halter-trained miniature highland calves for sale in the USA. Discover fluffy mini cows, micro miniatures, and teacup highlands with nationwide delivery.",
  alternates: {
    canonical: 'https://minihighlandcows.store/',
    languages: {
      'en-US': 'https://minihighlandcows.store/',
      'x-default': 'https://minihighlandcows.store/',
    },
  },
  verification: {
    google: 'vWD42gGRYaftq6Ac4pjAznZgYM2nEjnJuMgItsVmh3o',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miniature Highland Cows for Sale USA | Dunblane Highlands',
    description: 'Buy premium, DNA verified, halter-trained miniature highland calves in the USA. Discover fluffy mini cows, micro miniatures, and teacup highlands for your farm.',
    images: ['https://minihighlandcows.store/images/hero.jpg'],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Dunblane Highlands USA',
    title: 'Miniature Highland Cows for Sale USA | Dunblane Highlands',
    description: 'Buy premium, DNA verified, halter-trained miniature highland calves in the USA. Discover fluffy mini cows, micro miniatures, and teacup highlands for your farm.',
    images: [
      {
        url: 'https://minihighlandcows.store/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Miniature Highland Cows for Sale USA - Dunblane Highlands',
      }
    ]
  }
};

const CowLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 9C4.5 7.5 2 9 2 11.5c0 1.5 1.5 2 2.5 1" />
    <path d="M16 9c3.5-1.5 6 0 6 2.5 0 1.5-1.5 2-2.5 1" />
    <path d="M8 9c1-2 3-3 4-3s3 1 4 3c1 1.5 1.5 3 1.5 5 0 3-2 5-5 5s-5-2-5-5c0-2 .5-3.5 1.5-5z" />
    <path d="M12 6c-1 2-2 3-3 4" />
    <path d="M12 6v4.5" />
    <path d="M12 6c1 2 2 3 3 4" />
    <ellipse cx="12" cy="16" rx="2.5" ry="1.5" />
    <circle cx="11" cy="16" r="0.5" fill="currentColor" />
    <circle cx="13" cy="16" r="0.5" fill="currentColor" />
  </svg>
);

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en-US" className={`scroll-smooth ${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <meta name="google-site-verification" content="vWD42gGRYaftq6Ac4pjAznZgYM2nEjnJuMgItsVmh3o" />
        <script src="//code.jivosite.com/widget/vejv3NHseX" async></script>
      </head>
      <body suppressHydrationWarning className="antialiased bg-[#FDFBF7] text-[#1E293B] font-sans font-bold selection:bg-[#C2673F] selection:text-white flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md flex flex-col">
          <div className="w-full bg-[#1C3B2B] text-[#FDFBF7] overflow-hidden flex items-center h-10 text-xs sm:text-sm font-medium tracking-wide">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center whitespace-nowrap shrink-0">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="flex items-center shrink-0">
                      <span className="px-4 sm:px-8">Dunblane Highlands Ranch LLC</span>
                      <span className="text-[#C2673F]">•</span>
                      <span className="px-4 sm:px-8">AHCA &amp; IMCBR Registered Breeder</span>
                      <span className="text-[#C2673F]">•</span>
                      <span className="px-4 sm:px-8">USDA Interstate Certified &amp; DNA Verified</span>
                      <span className="text-[#C2673F]">•</span>
                      <span className="px-4 sm:px-8">Nationwide Climate-Controlled US Livestock Transport</span>
                      <span className="text-[#C2673F]">•</span>
                      <span className="px-4 sm:px-8">Free delivery within local county &amp; same city</span>
                      <span className="text-[#C2673F] mr-4 sm:mr-8">•</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <Navbar />
        </header>

        <main id="main" className="flex-1">
          {children}
        </main>

        <footer className="bg-[#1C3B2B] text-[#FDFBF7] py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-left">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <CowLogo className="w-7 h-7 text-[#D4A373]" />
                <h3 className="font-serif text-xl font-bold">Dunblane Highlands USA</h3>
              </div>
              <p className="text-[#FDFBF7]/80 leading-relaxed text-sm mb-4">
                Preserving the heritage of Scottish Highland cattle in the American pastoral landscape. Registered, docile, DNA-verified micro and teacup miniature calves bred with sound conformation and gentle temperaments.
              </p>
              <div className="text-xs text-[#D4A373] space-y-1">
                <p>Entity: Dunblane Highlands Ranch LLC</p>
                <p>Registry: AHCA &amp; IMCBR Member Breeder</p>
                <p>USDA Interstate Health Certified • 840 RFID Tagged</p>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-base font-bold mb-4 text-[#D4A373]">Our Cattle</h4>
              <ul className="space-y-2 text-sm text-[#FDFBF7]/80">
                <li><Link href="/calves/" className="hover:text-[#D4A373] transition-colors">Available Calves</Link></li>
                <li><Link href="/fluffy-mini-cows/" className="hover:text-[#D4A373] transition-colors">Fluffy Mini Cows</Link></li>
                <li><Link href="/micro-highland-cows/" className="hover:text-[#D4A373] transition-colors">Micro Highland Cows</Link></li>
                <li><Link href="/teacup-highland-cows/" className="hover:text-[#D4A373] transition-colors">Teacup / Pocket Cows</Link></li>
                <li><Link href="/miniature-highland-cattle/" className="hover:text-[#D4A373] transition-colors">Breed Standards Guide</Link></li>
                <li><Link href="/artificial-insemination-cattle/" className="hover:text-[#D4A373] transition-colors">Cattle AI &amp; Semen Straws</Link></li>
                <li><Link href="/mini-highland-cows-for-sale/" className="hover:text-[#D4A373] transition-colors">Cows For Sale Near Me</Link></li>
                <li><Link href="/prices/" className="hover:text-[#D4A373] transition-colors">Price &amp; Cost Guide</Link></li>
                <li><Link href="/sold/" className="hover:text-[#D4A373] transition-colors">Sold Calves Gallery</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-base font-bold mb-4 text-[#D4A373]">Adoption &amp; Care</h4>
              <ul className="space-y-2 text-sm text-[#FDFBF7]/80">
                <li><Link href="/process/" className="hover:text-[#D4A373] transition-colors">Adoption Process</Link></li>
                <li><Link href="/delivery/" className="hover:text-[#D4A373] transition-colors">Delivery &amp; Freight</Link></li>
                <li><Link href="/reserve/" className="hover:text-[#D4A373] transition-colors">Reserve a Calf</Link></li>
                <li><Link href="/blog/" className="hover:text-[#D4A373] transition-colors">Educational Blog</Link></li>
                <li><Link href="/faq/" className="hover:text-[#D4A373] transition-colors">FAQ</Link></li>
                <li><Link href="/about/" className="hover:text-[#D4A373] transition-colors">About Our Farm</Link></li>
                <li><Link href="/contact/" className="hover:text-[#D4A373] transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-base font-bold mb-4 text-[#D4A373]">Contact &amp; Hours</h4>
              <ul className="space-y-2 text-[#FDFBF7]/80 text-sm">
                <li>info@minihighlandcows.store</li>
                <li>+1 (512) 842-9840</li>
                <li>Canton, TX 75103, USA</li>
                <li className="text-[#D4A373] font-semibold text-xs pt-1">Free delivery within same city / county</li>
                <li className="pt-2 text-xs">Ranch Visits by Appointment</li>
                <li className="text-xs">Mon-Sat: 8:00 AM - 5:00 PM CST</li>
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-[#FDFBF7]/10 flex flex-col md:flex-row justify-between items-center text-[#FDFBF7]/60 text-xs gap-4">
            <p>&copy; {new Date().getFullYear()} Dunblane Highlands Ranch LLC. All rights reserved.</p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link href="/privacy/" className="hover:text-[#D4A373] transition-colors">Privacy Policy</Link>
              <Link href="/terms/" className="hover:text-[#D4A373] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
