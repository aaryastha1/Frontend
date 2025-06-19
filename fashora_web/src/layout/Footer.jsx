// import React from 'react';

// export default function Footer() {
//   return (
//     <footer className="w-full bg-stone-50 border-t border-stone-200">
//       <div className="max-w-7xl mx-auto py-8 px-4 text-center text-stone-500 text-sm sm:px-6 lg:px-8">
//         <p>&copy; 2025 Fashora Clothing Store. All rights reserved.</p>
//         <p className="mt-1">Style that speaks. Delivered with love.</p>
//       </div>
//     </footer>
//   );
// }


import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[white] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Left: Logo and tagline */}
    
            {/* <span className="text-2xl font-bold text-[#744f28] leading-none font-serif">Fashora</span> */}
            <img src="fashoraa.png" alt="Fashora Logo" className="h-20 w-30 mt-1" />

        {/* Center: Links */}
        <div className="flex flex-1 justify-center gap-16">
          <div>
            <h3 className="text-base font-semibold mb-3">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#d6a97a] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#d6a97a] transition-colors">Order Tracking</a></li>
              <li><a href="#" className="hover:text-[#d6a97a] transition-colors">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-3">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#d6a97a] transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-[#d6a97a] transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-[#d6a97a] transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        {/* Right: Social icons and newsletter */}
        <div className="flex flex-col items-end gap-4 min-w-[220px] w-full md:w-auto">
          <div className="flex gap-3 text-xl mb-2">
            <a href="#" aria-label="Facebook" className="hover:text-[#d6a97a]"><i className="fab fa-facebook-f">&#xf09a;</i></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#d6a97a]"><i className="fab fa-instagram">&#xf16d;</i></a>
            <a href="#" aria-label="X" className="hover:text-[#d6a97a]"><i className="fab fa-x-twitter">&#xf099;</i></a>
          </div>
          <form className="flex flex-col items-end w-full md:w-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full md:w-48 px-3 py-2 mb-2 border border-gray-400 bg-transparent text-white placeholder-gray-400 rounded focus:outline-none focus:border-[#744f28]"
            />
            <button type="submit" className="px-4 py-1.5 bg-white text-black rounded hover:bg-[#d6a97a] hover:text-white transition-colors text-sm">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
