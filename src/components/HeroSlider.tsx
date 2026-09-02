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
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <Image key={index}
            src={slide}
            alt={`Highland cattle slide ${index + 1}`}
            fill
            className={`object-cover object-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            priority={index === 0}
           referrerPolicy="no-referrer" />
        ))}
        <div className="absolute inset-0 bg-[#1C3B2B]/40 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 drop-shadow-lg leading-tight">
          Miniature Highland Cows for Sale Australia
        </h1>
        <h2 className="text-xl md:text-2xl text-white/90 font-medium mb-8 drop-shadow-md max-w-2xl mx-auto">
          Premium DNA Verified Micro, Teacup & Mini Calves
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
          Discover docile, DNA-verified miniature highland calves bred for the Australian lifestyle. 
          Queensland-based with Australia-wide delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/calves" 
            className="px-8 py-4 bg-[#C2673F] text-white font-medium rounded-sm hover:bg-[#A85532] transition-colors"
          >
            View Available Calves
          </Link>
          <Link 
            href="/process" 
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-sm border border-white/30 hover:bg-white/20 transition-colors"
          >
            Learn Our Process
          </Link>
        </div>
      </div>
    </section>
  );
}
