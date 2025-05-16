"use client";

import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const YouTubeVideoSlider = ({ videoLinks }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  // Auto Slide Logic
  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (sliderRef.current) {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft >= maxScrollLeft) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRight();
        }
      }
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black"
        onClick={scrollLeft}
      >
        <ChevronLeft />
      </button>

      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth"
      >
        {videoLinks.map((link, index) => (
          <div key={index} className="min-w-[300px] max-w-[300px]">
            <iframe
              className="w-full h-[200px] rounded-lg"
              src={`https://www.youtube.com/embed/${link}`}
              title={`YouTube Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black"
        onClick={scrollRight}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default YouTubeVideoSlider;