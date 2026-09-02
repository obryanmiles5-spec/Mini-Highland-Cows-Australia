import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Dunblane Highlands',
  robots: {
    index: false,
    follow: true,
  },
};
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-[#FDFBF7] min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="text-center">
        <h1 className="font-serif text-6xl font-bold text-[#1C3B2B] mb-4">404</h1>
        <h2 className="text-2xl text-[#1E293B] mb-6 font-medium">Calf Not Found</h2>
        <p className="text-[#1E293B]/70 mb-8 max-w-md mx-auto">
          We couldn&apos;t find the calf you were looking for. It may have been sold or the link might be incorrect.
        </p>
        <Link href="/calves" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors">
          <ArrowLeft className="w-4 h-4" /> View Available Calves
        </Link>
      </div>
    </div>
  );
}
