"use client"

import { User } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">F</span>
            </div>
            <span className="text-pink-700 font-semibold text-xl">Fashora</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">
              Home
            </a>
            <a href="/shop" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">
              Shop
            </a>
            <a href="/about" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">
              About Us
            </a>
            <a href="/contact" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* Mobile Icon / Profile Button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-pink-600">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
