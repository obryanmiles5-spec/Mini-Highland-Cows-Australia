import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Script from 'next/script';
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
    default: 'Miniature Highland Cows for Sale Australia | Dunblane',
    template: '%s | Dunblane Highlands Australia',
  },
  description: "Buy premium, DNA verified, halter-trained miniature highland calves in Australia. Discover fluffy mini cows, micro miniatures, and teacup highlands for your farm.",
  verification: {
    google: 'vWD42gGRYaftq6Ac4pjAznZgYM2nEjnJuMgItsVmh3o',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miniature Highland Cows for Sale Australia | Dunblane',
    description: 'Buy premium, DNA verified, halter-trained miniature highland calves in Australia. Discover fluffy mini cows, micro miniatures, and teacup highlands for your farm.',
    images: ['https://minihighlandcows.store/images/hero.jpg'],
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Dunblane Highlands',
    title: 'Miniature Highland Cows for Sale Australia | Dunblane',
    description: 'Buy premium, DNA verified, halter-trained miniature highland calves in Australia. Discover fluffy mini cows, micro miniatures, and teacup highlands for your farm.',
    images: [
      {
        url: 'https://minihighlandcows.store/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Miniature Highland Cows for Sale Australia - Dunblane Highlands',
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
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <meta name="google-site-verification" content="vWD42gGRYaftq6Ac4pjAznZgYM2nEjnJuMgItsVmh3o" />
      </head>
      <body suppressHydrationWarning className="antialiased bg-[#FDFBF7] text-[#1E293B] font-sans font-bold selection:bg-[#C2673F] selection:text-white flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md flex flex-col">
          <div className="w-full bg-[#1C3B2B] text-[#FDFBF7] overflow-hidden flex items-center h-10 text-xs sm:text-sm font-medium tracking-wide">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center whitespace-nowrap shrink-0">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="flex items-center shrink-0">
                      <span className="px-4 sm:px-8">Entity name: Dunblane Pastoral Holdings Pty Ltd</span>
                      <span className="text-[#C2673F]">•</span>
                      <span className="px-4 sm:px-8">ABN 81 131 156 922</span>
                      <span className="text-[#C2673F]">•</span>
                      <span className="px-4 sm:px-8">Main business location: QLD 4725</span>
                      <span className="text-[#C2673F]">•</span>
                      <span className="px-4 sm:px-8">Secure Payments via Pay ID, Bank Transfer, Credit Card & Crypto (USDT, BTC)</span>
                      <span className="text-[#C2673F]">•</span>
                      <span className="px-4 sm:px-8">Free delivery to same city as address</span>
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
                <h3 className="font-serif text-xl font-bold">Dunblane Highlands</h3>
              </div>
              <p className="text-[#FDFBF7]/80 leading-relaxed text-sm mb-4">
                Preserving the heritage of Scottish Highland cattle in the Australian landscape. Registered, docile, DNA-verified micro and teacup miniature calves bred with sound conformation.
              </p>
              <div className="text-xs text-[#D4A373] space-y-1">
                <p>Entity: Dunblane Pastoral Holdings Pty Ltd</p>
                <p>ABN: 81 131 156 922 • PIC: 3ABCD123</p>
                <p>NLIS Registered Breeder Australia</p>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-base font-bold mb-4 text-[#D4A373]">Our Cattle</h4>
              <ul className="space-y-2 text-sm text-[#FDFBF7]/80">
                <li><Link href="/calves" className="hover:text-[#D4A373] transition-colors">Available Calves</Link></li>
                <li><Link href="/micro-highland-cows" className="hover:text-[#D4A373] transition-colors">Micro Highland Cows</Link></li>
                <li><Link href="/teacup-highland-cows" className="hover:text-[#D4A373] transition-colors">Teacup / Pocket Cows</Link></li>
                <li><Link href="/miniature-highland-cattle" className="hover:text-[#D4A373] transition-colors">Breed Standards Guide</Link></li>
                <li><Link href="/prices" className="hover:text-[#D4A373] transition-colors">Price &amp; Cost Guide</Link></li>
                <li><Link href="/sold" className="hover:text-[#D4A373] transition-colors">Sold Calves Gallery</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-base font-bold mb-4 text-[#D4A373]">Adoption &amp; Care</h4>
              <ul className="space-y-2 text-sm text-[#FDFBF7]/80">
                <li><Link href="/process" className="hover:text-[#D4A373] transition-colors">Adoption Process</Link></li>
                <li><Link href="/delivery" className="hover:text-[#D4A373] transition-colors">Delivery &amp; Freight</Link></li>
                <li><Link href="/reserve" className="hover:text-[#D4A373] transition-colors">Reserve a Calf</Link></li>
                <li><Link href="/blog" className="hover:text-[#D4A373] transition-colors">Educational Blog</Link></li>
                <li><Link href="/faq" className="hover:text-[#D4A373] transition-colors">FAQ</Link></li>
                <li><Link href="/about" className="hover:text-[#D4A373] transition-colors">About Our Farm</Link></li>
                <li><Link href="/contact" className="hover:text-[#D4A373] transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-base font-bold mb-4 text-[#D4A373]">Contact &amp; Hours</h4>
              <ul className="space-y-2 text-[#FDFBF7]/80 text-sm">
                <li>info@minihighlandcows.store</li>
                <li>0468 187 340</li>
                <li>Central Queensland, 4725</li>
                <li className="text-[#D4A373] font-semibold text-xs pt-1">Free delivery to same city as address</li>
                <li className="pt-2 text-xs">Farm Visits by Appointment</li>
                <li className="text-xs">Mon-Sat: 8:00 AM - 5:00 PM</li>
                <li className="pt-2 text-xs"><strong>Secure Payments:</strong><br/>Pay ID, Bank Transfer, Card &amp; Crypto</li>
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-[#FDFBF7]/10 flex flex-col md:flex-row justify-between items-center text-[#FDFBF7]/60 text-xs gap-4">
            <p>&copy; {new Date().getFullYear()} Dunblane Pastoral Holdings Pty Ltd. All rights reserved.</p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link href="/privacy" className="hover:text-[#D4A373] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#D4A373] transition-colors">Terms of Service</Link>
              <Link href="/urls" className="text-[#D4A373] hover:underline font-semibold flex items-center gap-1">
                Google Search Console URL Directory &rarr;
              </Link>
            </div>
          </div>
        </footer>
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69e1beeedbff4b1c36f8ae51/1jmct3lia';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
