import React, { useRef, useState, useEffect } from 'react';

const mustHaveProducts = [
  { model: 'Just in', name: 'Basic Fitted Top', code: 'No. 1999', image: 'top1.png' },
  { model: 'Just in', name: 'Pink Cotton Shirt', code: 'No. 1405', image: 'shirt.png' },
  { model: 'Just in', name: 'Cotton loose Pant', code: 'No. 1999', image: 'pant.png' },
  { model: 'Just in', name: 'Off Shoulder Top in black', code: 'No. 1492', image: 'image4.png' },
  { model: 'Just in', name: 'tee', code: 'No. 1492', image: 'tee.png' },
  { model: 'Just in', name: 'sweater', code: 'No. 1491', image: 'image.png' },
];

export default function HomePage() {
  const carouselRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 9, minutes: 15, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        else if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        else if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        else if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollCarousel = (dir) => {
    if (carouselRef.current) {
      const scrollAmount = 260;
      carouselRef.current.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white text-gray-700 min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="w-full">
        <img src="girl.png" alt="Hero" className="w-full h-full object-cover object-top block" />
      </div>

      {/* Section Title and Carousel Controls */}
      <div className="max-w-7xl mx-auto px-4 pt-8 flex items-center justify-between">
        <h2 className="text-lg md:text-xl font-bold tracking-tight">THE SPRING MUST-HAVES</h2>
        <div className="flex gap-2">
          <button onClick={() => scrollCarousel('left')} className="bg-gray-100 p-2 rounded hover:bg-gray-200">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={() => scrollCarousel('right')} className="bg-[#e6b18a] p-2 rounded hover:bg-[#d6a97a]">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Product Carousel */}
      <div className="max-w-8xl mx-auto px-4 mt-2 overflow-x-auto scrollbar-hide">
        <div ref={carouselRef} className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory">
          {mustHaveProducts.map((product, i) => (
            <div key={i} className="relative min-w-[220px] max-w-[220px] bg-white rounded-lg shadow border flex-shrink-0 snap-start">
              <button className="absolute top-2 right-2 bg-white/80 rounded-full p-1 shadow hover:bg-gray-100 z-10">
                <svg width="20" height="20" fill="none" stroke="#744f28" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
              </button>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-3">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{product.model}</p>
                <p className="text-base font-semibold text-gray-900 leading-tight">{product.name}</p>
                <p className="text-xs text-gray-500 mt-1">{product.code}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="w-full bg-[#744f28] text-white py-1.5 mt-8 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-xs font-semibold tracking-wide">
          TRAIN HARDER. LOOK SHARPER. GEAR THAT KEEPS UP WITH YOUR GRIND &nbsp; • &nbsp; TRAIN HARDER. LOOK SHARPER. GEAR THAT KEEPS UP WITH YOUR GRIND &nbsp; • &nbsp; TRAIN HARDER. LOOK SHARPER. GEAR THAT KEEPS UP WITH YOUR GRIND
        </div>
      </div>

      {/* Exclusive Offer Section */}
      <div className="w-full mt-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-white">
          {/* Left */}
          <div className="bg-gradient-to-br from-[#f5ede6] to-[#ede0d3] flex flex-col justify-center p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#744f28] opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#744f28] opacity-5 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="text-center flex flex-col items-center justify-center relative z-10">
              <div className="inline-block px-4 py-2 bg-[#744f28] text-white text-sm font-medium rounded-full mb-4 uppercase tracking-wider">Limited Time</div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-800 leading-tight">Exclusive Offer</h2>
              <p className="text-gray-600 mb-8 text-lg max-w-md leading-relaxed">TriaFash's Best-Seller Embodies Timeless Style</p>
            </div>
            <div className="flex justify-center gap-4 mb-8">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Min' },
                { value: timeLeft.seconds, label: 'Sec' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white rounded-xl shadow-lg p-3 min-w-[60px] border border-[#744f28]/10">
                    <span className="text-2xl lg:text-3xl font-bold text-[#744f28] block text-center">{item.value.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-xs font-medium text-gray-600 mt-2 uppercase tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center">
              <button className="group bg-[#744f28] hover:bg-[#5c3b1f] text-white px-10 py-4 rounded-full transition-all duration-300 uppercase tracking-wider font-semibold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
                <span className="flex items-center gap-2">
                  Shop Now
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
              <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Secure checkout
              </p>
            </div>
          </div>
          {/* Right */}
          <div className="bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6 lg:p-8 relative">
            <div className="relative group">
              <div className="relative bg-white rounded-2xl shadow-xl p-4 transform transition-transform duration-300 group-hover:scale-105">
                <img src="image1.png" alt="Fashion Model" className="object-cover rounded-xl w-full h-auto max-w-[280px] max-h-[380px]" />
                <div className="absolute top-6 right-6 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">50% OFF</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer
      <footer className="bg-[#744f28] text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Fashora</h3>
            <p>Your one-stop destination for timeless girls' fashion. Trendy, chic, and always affordable.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Tops</a></li>
              <li><a href="#" className="hover:underline">Dresses</a></li>
              <li><a href="#" className="hover:underline">Knitwear</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p>Email: support@fashora.com</p>
            <p>Phone: +977 9800000000</p>
            <p>Location: Kathmandu, Nepal</p>
          </div>
        </div>
        <div className="text-center text-xs mt-6 border-t border-white/30 pt-4">
          &copy; {new Date().getFullYear()} Fashora. All rights reserved.
        </div>
      </footer> */}

      {/* Animation CSS */}
      <style>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
