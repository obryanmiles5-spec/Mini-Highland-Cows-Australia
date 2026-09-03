'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80",
  "https://drive.google.com/thumbnail?id=1DumkODs92AK33z6YOtBYGazdnw1EWZiO&sz=w1000"
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[75vh] sm:min-h-[80vh] flex items-center justify-center py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <Image key={index}
            src={slide}
            alt={`Miniature Highland Cows for Sale Australia - Dunblane Highlands Pasture slide ${index + 1}`}
            fill
            className={`object-cover object-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            priority={index === 0}
            referrerPolicy="no-referrer" />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C3B2B]/60 via-[#1C3B2B]/40 to-[#1C3B2B]/70" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-4 sm:mb-6 leading-tight [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
          Miniature Highland Cows for Sale Australia
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-white/95 font-medium mb-6 sm:mb-8 max-w-2xl mx-auto [text-shadow:_0_1px_8px_rgba(0,0,0,0.6)]">
          Premium DNA Verified Micro, Teacup &amp; Mini Calves
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto font-light leading-relaxed [text-shadow:_0_1px_6px_rgba(0,0,0,0.5)]">
          Discover docile, DNA-verified miniature highland calves bred for the Australian lifestyle. 
          Queensland-based with Australia-wide delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/calves" 
            className="px-8 py-4 bg-[#C2673F] text-white font-medium rounded-sm hover:bg-[#A85532] transition-colors shadow-sm"
          >
            View Available Calves
          </Link>
          <Link 
            href="/process" 
            className="px-8 py-4 bg-white/15 backdrop-blur-md text-white font-medium rounded-sm border border-white/30 hover:bg-white/25 transition-colors shadow-sm"
          >
            Learn Our Process
          </Link>
        </div>
      </div>
    </section>
  );
}
