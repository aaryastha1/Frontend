import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaSearch, FaHeart, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    if (location.state?.fromLogin) {
      toast.success('Logged in successfully');
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setTimeout(() => {
      navigate('/dashboard');
    }, 1200);
  };

  const categories = ['Home', 'Tops', 'Dresses', 'Shirts', 'Pants', 'Knitwear', 'Offers'];

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-30">
      <ToastContainer position="top-center" />
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center mr-8">
          <img src="/fashoraa.png" alt="Fashora Logo" className="h-15 w-24 mt-1" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex items-center justify-center gap-7">
          {categories.map((label) => (
            <NavLink
              key={label}
              to={label === 'Home' ? '/' : `/category/${label}`}
              className={({ isActive }) =>
                `text-sm font-medium uppercase tracking-wide px-1 hover:text-[#744f28] transition-colors ${
                  isActive ? 'text-[#744f28]' : 'text-gray-900'
                }`
              }
            >
              {label.toUpperCase()}
            </NavLink>
          ))}
        </nav>

        {/* Icons + Auth Buttons */}
        <div className="flex items-center gap-4 ml-8 text-gray-700">
          <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Search">
            <FaSearch className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Favorites">
            <FaHeart className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Cart">
            <FaShoppingCart className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Profile">
            <FaUserCircle className="h-5 w-5" />
          </button>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="ml-2 px-4 py-1.5 text-sm bg-gray-100 text-gray-900 rounded hover:bg-[#744f28] hover:text-white border border-gray-200 hover:border-[#744f28] transition font-medium"
            >
              LOGOUT
            </button>
          ) : (
            <>
              <NavLink
                to="/login"
                className="ml-2 px-4 py-1.5 text-sm bg-gray-100 text-gray-900 rounded hover:bg-[#744f28] hover:text-white border border-gray-200 hover:border-[#744f28] transition font-medium"
              >
                SIGNIN
              </NavLink>
              <NavLink
                to="/register"
                className="ml-2 px-4 py-1.5 text-sm bg-gray-100 text-gray-900 rounded hover:bg-[#744f28] hover:text-white border border-gray-200 hover:border-[#744f28] transition font-medium"
              >
                SIGNUP
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
