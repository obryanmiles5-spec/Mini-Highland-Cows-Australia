import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { Phone, Mail, Star, Dna } from 'lucide-react';

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

export const metadata: Metadata = {
  title: 'Dunblane Highlands Australia | Pedigree Miniature Highland Cattle',
  description: "Australia's Premier Pedigree Miniature Highland Cattle Breeder. NLIS tagged, DNA verified, and halter trained calves.",
  openGraph: {
    images: [
      {
        url: 'https://images.unsplash.com/photo-1549429282-59599553bb44?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Highland Cow in a field',
      }
    ]
  }
};

const CowLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 10c-2.5 0-3.5 2.5-3 4s4 2 4 2 M19 10c2.5 0 3.5 2.5 3 4s-4 2-4 2" />
    <path d="M6 16c0 3 2 5 6 5s6-2 6-5 M9 16v-2 M15 16v-2" />
    <path d="M8 8c0-3 2.5-5 4-5s4 2 4 5" />
    <circle cx="12" cy="18" r="1.5" />
  </svg>
);

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
      <body suppressHydrationWarning className="antialiased bg-[#FDFBF7] text-[#1E293B] font-sans selection:bg-[#C2673F] selection:text-white flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md flex flex-col">
          <div className="w-full bg-[#1C3B2B] text-[#FDFBF7] overflow-hidden flex items-center h-10 text-xs sm:text-sm font-medium tracking-wide">
            <div className="flex w-max animate-marquee">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center whitespace-nowrap">
                  <span className="mx-6 sm:mx-12 flex items-center gap-2"><Phone className="text-[#D4A373] w-4 h-4" /> Call or Text: +61 468 187 340</span>
                  <span className="mx-6 sm:mx-12 flex items-center gap-2"><Mail className="text-[#D4A373] w-4 h-4" /> Email: info@minihighlandcows.store</span>
                  <span className="mx-6 sm:mx-12 flex items-center gap-2"><Star className="text-[#D4A373] w-4 h-4" /> Safe Australia-Wide Delivery</span>
                  <span className="mx-6 sm:mx-12 flex items-center gap-2"><Dna className="text-[#D4A373] w-4 h-4" /> 100% DNA Verified & NLIS Registered</span>
                  
                  {/* Repeat the set to ensure the block is extremely wide for ultra-wide monitors */}
                  <span className="mx-6 sm:mx-12 flex items-center gap-2"><Phone className="text-[#D4A373] w-4 h-4" /> Call or Text: +61 468 187 340</span>
                  <span className="mx-6 sm:mx-12 flex items-center gap-2"><Mail className="text-[#D4A373] w-4 h-4" /> Email: info@minihighlandcows.store</span>
                  <span className="mx-6 sm:mx-12 flex items-center gap-2"><Star className="text-[#D4A373] w-4 h-4" /> Safe Australia-Wide Delivery</span>
                  <span className="mx-6 sm:mx-12 flex items-center gap-2"><Dna className="text-[#D4A373] w-4 h-4" /> 100% DNA Verified & NLIS Registered</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-b border-[#1E293B]/10">
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
              <CowLogo className="w-8 h-8 text-[#1C3B2B]" />
              <div>
                <h1 className="font-serif text-2xl font-bold text-[#1C3B2B] leading-none">Dunblane</h1>
                <p className="text-[10px] tracking-widest text-[#C2673F] font-semibold uppercase mt-1">Highlands Australia</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-bold hover:text-[#C2673F] transition-colors">Home</Link>
              <Link href="/calves" className="text-sm font-bold hover:text-[#C2673F] transition-colors">Available Calves</Link>
              <Link href="/sold" className="text-sm font-bold hover:text-[#C2673F] transition-colors">Sold</Link>
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

        <footer className="bg-[#1C3B2B] text-[#FDFBF7] py-16 mt-auto">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center md:text-left">
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
                <li><Link href="/process" className="text-[#FDFBF7]/80 hover:text-[#D4A373] transition-colors text-sm">Adoption Process</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold mb-6 text-[#D4A373]">Contact</h4>
              <ul className="space-y-3 text-[#FDFBF7]/80 text-sm">
                <li>info@minihighlandcows.store</li>
                <li>+61 468 187 340</li>
                <li>Victoria, Australia</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-[#FDFBF7]/10 flex flex-col md:flex-row justify-between items-center text-[#FDFBF7]/60 text-sm gap-4">
            <p>&copy; {new Date().getFullYear()} Dunblane Highlands Australia. All rights reserved.</p>
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
