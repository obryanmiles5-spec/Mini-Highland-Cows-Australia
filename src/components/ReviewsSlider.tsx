'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const REVIEWS = [
  { name: 'Sarah Jenkins', date: '2 days ago', title: 'A wonderful experience from start to finish', body: 'Adopting our miniature highland was seamless. The farm provided us with all the history, health certificates, and answered our endless questions.' },
  { name: 'The Harrison Family', date: '1 week ago', title: 'Our new farm companion is perfect', body: 'Hamish settled into our acreage immediately. He is so docile and clearly has been handled with incredible care. Highly recommend!' },
  { name: 'Mark & Elena', date: '3 weeks ago', title: 'Professional and caring breeders', body: 'You can tell they genuinely care about their cattle. We were given a comprehensive handover pack and felt fully prepared.' },
  { name: 'Lucy T.', date: '1 month ago', title: 'Absolutely in love with our calf!', body: 'Our little girl is healthy, happy, and so sweet. The communication throughout the entire adoption process was fantastic.' },
  { name: 'James W.', date: '1 month ago', title: 'Top quality miniature highlands', body: 'I’ve been around cattle all my life, and the structural quality and temperament of these calves are second to none.' },
  { name: 'The Miller Farm', date: '2 months ago', title: 'Smooth interstate transport', body: 'We were worried about getting our calf from QLD to Victoria, but they arranged everything perfectly. Arrived completely unstressed.' },
  { name: 'Sophie L.', date: '2 months ago', title: 'Incredible post-adoption support', body: 'Even months after we took our calf home, they have been available to answer our questions and give advice on feeding.' },
  { name: 'David & Emma', date: '3 months ago', title: 'Ethical and responsible breeding', body: 'We visited the property and were blown away by the conditions and care the herd receives. True ethical breeders.' },
  { name: 'Chloe R.', date: '4 months ago', title: 'Beautiful colours and genetics', body: 'Our silver dun calf is just stunning. The DNA verification and health guarantees provided enormous peace of mind.' },
  { name: 'T. Hendersen', date: '5 months ago', title: 'Docile and halter trained!', body: 'They aren’t kidding about the temperament. Our calf walked on the halter from day one and loves being brushed.' },
  { name: 'Amanda Clarke', date: '6 months ago', title: 'Highly recommend for first-time owners', body: 'As first-time cattle owners, we were nervous. They walked us through every step and made sure our paddocks were ready.' },
  { name: 'The O’Connors', date: '6 months ago', title: 'Perfect addition to our hobby farm', body: 'Our two calves have become the stars of our farm. They are so gentle with our young children.' },
  { name: 'Gareth V.', date: '7 months ago', title: 'Exactly as described', body: 'The transparency was refreshing. The photos, videos, and descriptions were 100% accurate. No surprises.' },
  { name: 'Natalie B.', date: '8 months ago', title: 'A dream come true', body: 'I’ve wanted a miniature highland for years. I’m so glad I waited and chose Dunblane Highlands. Excellent service.' },
  { name: 'R. Simmons', date: '9 months ago', title: 'Healthy, happy calves', body: 'Vet checked our calf the day after arrival and was incredibly impressed with her condition and health. Thank you!' },
];

export default function ReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerPage = isMobile ? 1 : 3;
  const maxIndex = Math.ceil(REVIEWS.length / itemsPerPage) - 1;

  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <div className="relative">
      <div className="overflow-hidden px-2 py-4">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {REVIEWS.map((review, i) => (
            <div key={i} className="w-full md:w-1/3 flex-shrink-0 px-4">
              <div className="bg-white p-8 border border-[#1E293B]/10 rounded-sm shadow-sm flex flex-col h-full">
                <div className="flex text-[#00B67A] mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#00B67A]" />
                  ))}
                </div>
                <h4 className="font-bold text-[#1E293B] mb-2">{review.title}</h4>
                <p className="text-[#1E293B]/70 text-sm mb-6 flex-1">{review.body}</p>
                <div className="flex justify-between items-center text-xs text-[#1E293B]/50 mt-auto border-t border-[#1E293B]/10 pt-4">
                  <span className="font-medium text-[#1E293B]/70">{review.name}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 -left-2 md:-left-12 -translate-y-1/2 w-10 h-10 bg-white shadow-md border border-[#1E293B]/10 flex items-center justify-center rounded-full text-[#1C3B2B] hover:bg-[#FDFBF7] hover:scale-105 transition-all z-10"
        aria-label="Previous reviews"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 -right-2 md:-right-12 -translate-y-1/2 w-10 h-10 bg-white shadow-md border border-[#1E293B]/10 flex items-center justify-center rounded-full text-[#1C3B2B] hover:bg-[#FDFBF7] hover:scale-105 transition-all z-10"
        aria-label="Next reviews"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      
      <div className="flex justify-center mt-6 gap-2">
        {[...Array(maxIndex + 1)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              idx === currentIndex ? 'bg-[#C2673F]' : 'bg-[#1E293B]/20'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
