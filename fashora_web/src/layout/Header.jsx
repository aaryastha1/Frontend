import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo and tagline */}
        <div className="flex items-center mr-8">
          <div className="flex flex-col items-start">
            {/* <span className="text-2xl font-bold text-[#744f28] leading-none font-serif">Fashora</span> */}
            <img src="/fashoraa.png" alt="Fashora Logo" className="h-15 w-24 mt-1" />
          </div>
        </div>
        {/* Navigation */}
        <nav className="flex-1 flex items-center justify-center gap-7">
          {[
            { to: '/', label: 'HOME' },
            { to: '/tops', label: 'TOPS' },
            { to: '/dresses', label: 'DRESSES' },
            { to: '/knitwear', label: 'KNITWEAR' },
            { to: '/offers', label: 'OFFERS' },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium uppercase tracking-wide px-1 hover:text-[#744f28] transition-colors ${
                  isActive ? 'text-[#744f28]' : 'text-gray-900'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        {/* Icons and Auth */}
        <div className="flex items-center gap-4 ml-8">
          {/* Search Icon */}
          <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </button>
          {/* Wishlist Icon */}
          <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Wishlist">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
            </svg>
          </button>
          {/* Login Button */}
         <NavLink
            to="/Login"
            className="ml-2 px-4 py-1.5 text-sm bg-gray-100 text-gray-900 rounded hover:bg-[#744f28] hover:text-white border border-gray-200 hover:border-[#744f28] transition font-medium"
          >
            SIGNIN
          </NavLink>
          {/* Signup Button */}
          <NavLink
            to="/register"
            className="ml-2 px-4 py-1.5 text-sm bg-gray-100 text-gray-900 rounded hover:bg-[#744f28] hover:text-white border border-gray-200 hover:border-[#744f28] transition font-medium"
          >
            SIGNUP
          </NavLink>
        </div>
      </div>
    </header>
  );
}
