import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

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
  title: 'Miniature Highland Cows for Sale Australia | Micro, Teacup & Mini Calves | Dunblane Highlands',
  description: "Looking for a miniature highland cow for sale in Australia? We breed premium, DNA-verified, halter-trained micro miniature and teacup highland calves.",
  twitter: {
    card: 'summary_large_image',
    title: 'Miniature Highland Cows for Sale Australia | Micro, Teacup & Mini Calves | Dunblane Highlands',
    description: 'Looking for a miniature highland cow for sale in Australia? We breed premium, DNA-verified, halter-trained micro miniature and teacup highland calves.',
    images: ['https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&w=1200&q=80'],
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Dunblane Highlands',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Highland Cow in a field',
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
          <div className="border-b border-[#1E293B]/10">
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
              <CowLogo className="w-8 h-8 text-[#1C3B2B]" />
              <div>
                <span className="font-serif text-2xl font-bold text-[#1C3B2B] leading-none block">Dunblane</span>
                <p className="text-[10px] tracking-widest text-[#C2673F] font-semibold uppercase mt-1">Highlands Australia</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-bold hover:text-[#C2673F] transition-colors">Home</Link>
              <Link href="/calves" className="text-sm font-bold hover:text-[#C2673F] transition-colors">Available Calves</Link>
              <Link href="/sold" className="text-sm font-bold hover:text-[#C2673F] transition-colors">Sold</Link>
              <Link href="/blog" className="text-sm font-bold hover:text-[#C2673F] transition-colors">Blog</Link>
              <Link href="/faq" className="text-sm font-bold hover:text-[#C2673F] transition-colors">FAQ</Link>
              <Link href="/about" className="text-sm font-bold hover:text-[#C2673F] transition-colors">About</Link>
              <Link href="/contact" className="text-sm font-bold hover:text-[#C2673F] transition-colors">Contact</Link>
              <Link href="/process" className="text-sm font-bold hover:text-[#C2673F] transition-colors">Adoption/Sales Process</Link>
              <Link href="/reserve" className="text-sm font-bold px-4 py-2 bg-[#1C3B2B] text-white rounded-sm hover:bg-[#152C20] transition-colors">Reserve Now</Link>
            </nav>
          </div>
          </div>
        </header>

        <main id="main" className="flex-1">
          {children}
        </main>

        <footer className="bg-[#1C3B2B] text-[#FDFBF7] py-10 mt-auto">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 text-center md:text-left">
            <div>
              <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
                <CowLogo className="w-6 h-6 text-[#D4A373]" />
                <h3 className="font-serif text-xl font-bold">Dunblane Highlands</h3>
              </div>
              <p className="text-[#FDFBF7]/80 leading-relaxed text-sm">
                Preserving the heritage of Scottish Highland cattle in the Australian landscape. Registered, docile, and beautifully bred.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold mb-6 text-[#D4A373]">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-[#FDFBF7]/80 hover:text-[#D4A373] transition-colors text-sm">Home</Link></li>
                <li><Link href="/calves" className="text-[#FDFBF7]/80 hover:text-[#D4A373] transition-colors text-sm">Available Calves</Link></li>
                <li><Link href="/sold" className="text-[#FDFBF7]/80 hover:text-[#D4A373] transition-colors text-sm">Sold</Link></li>
                <li><Link href="/blog" className="text-[#FDFBF7]/80 hover:text-[#D4A373] transition-colors text-sm">Blog</Link></li>
                <li><Link href="/faq" className="text-[#FDFBF7]/80 hover:text-[#D4A373] transition-colors text-sm">FAQ</Link></li>
                <li><Link href="/process" className="text-[#FDFBF7]/80 hover:text-[#D4A373] transition-colors text-sm">Adoption Process</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold mb-6 text-[#D4A373]">Contact & Hours</h4>
              <ul className="space-y-3 text-[#FDFBF7]/80 text-sm">
                <li>info@minihighlandcows.store</li>
                <li>0468 187 340</li>
                <li>QLD 4725</li>
                <li><strong>Free delivery to same city as address</strong></li>
                <li className="pt-2 text-[#D4A373]">Farm Visits by Appointment</li>
                <li>Mon-Sat: 8:00 AM - 5:00 PM</li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold mb-6 text-[#D4A373]">Accreditations</h4>
              <ul className="space-y-3 text-[#FDFBF7]/80 text-sm">
                <li>Entity name: Dunblane Pastoral Holdings Pty Ltd</li>
                <li>ABN 81 131 156 922</li>
                <li>PIC: 3ABCD123</li>
                <li>NLIS Registered Breeder</li>
                <li>100% DNA Parentage Verified</li>
                <li className="pt-2"><strong>Secure Payments:</strong><br/>Pay ID, Bank Transfer, Credit Card & Crypto (USDT, BTC)</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-[#FDFBF7]/10 flex flex-col md:flex-row justify-between items-center text-[#FDFBF7]/60 text-sm gap-4">
            <p>&copy; {new Date().getFullYear()} Dunblane Pastoral Holdings Pty Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-[#D4A373] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#D4A373] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
