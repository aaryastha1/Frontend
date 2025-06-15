export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">F</span>
              </div>
              <span className="text-pink-700 font-semibold text-lg">Fashora</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Discover the latest fashion trends at Fashora. From everyday essentials to statement pieces, we bring style to your doorstep with ease and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-pink-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>support@fashora.com</li>
              <li>+977 9800000000</li>
              <li>Sun–Fri 10AM–6PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Fashora. All rights reserved. | <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
