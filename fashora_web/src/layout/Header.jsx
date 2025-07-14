

// import React, { useEffect, useState } from 'react';
// import { NavLink, useNavigate, useLocation } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function Header() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     // Check token presence for login state
//     const token = localStorage.getItem('token');
//     setIsLoggedIn(!!token);

//     // Show toast once after login success using location.state.fromLogin
//     if (location.state?.fromLogin) {
//       toast.success('Logged in successfully');
//       // Clear state so toast won't show again on reload
//       navigate(location.pathname, { replace: true, state: {} });
//     }
//   }, [location, navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     // toast.success('Logged out successfully');
//     setTimeout(() => {
//       navigate('/dashboard');
//     }, 1200);
//   };

//   return (
//     <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-30">
//       <ToastContainer position="top-center" />
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
//         {/* Logo */}
//         <div className="flex items-center mr-8">
//           <div className="flex flex-col items-start">
//             <img src="/fashoraa.png" alt="Fashora Logo" className="h-15 w-24 mt-1" />
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 flex items-center justify-center gap-7">
//           {[
//             { to: '/', label: 'HOME' },
//             { to: '/tops', label: 'TOPS' },
//             { to: '/dresses', label: 'DRESSES' },
//             { to: '/shirts', label: 'SHIRTS' },
//             { to: '/pants', label: 'PANTS' },
//             { to: '/knitwear', label: 'KNITWEAR' },
//             { to: '/offers', label: 'OFFERS' },
//           ].map(({ to, label }) => (
//             <NavLink
//               key={to}
//               to={to}
//               className={({ isActive }) =>
//                 `text-sm font-medium uppercase tracking-wide px-1 hover:text-[#744f28] transition-colors ${
//                   isActive ? 'text-[#744f28]' : 'text-gray-900'
//                 }`
//               }
//             >
//               {label}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Icons + Auth Buttons */}
//         <div className="flex items-center gap-4 ml-8">
//           <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Search">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-700"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
//               />
//             </svg>
//           </button>

//           <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Wishlist">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-700"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
//               />
//             </svg>
//           </button>

//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="ml-2 px-4 py-1.5 text-sm bg-gray-100 text-gray-900 rounded hover:bg-[#744f28] hover:text-white border border-gray-200 hover:border-[#744f28] transition font-medium"
//             >
//               LOGOUT
//             </button>
//           ) : (
//             <>
//               <NavLink
//                 to="/login"
//                 className="ml-2 px-4 py-1.5 text-sm bg-gray-100 text-gray-900 rounded hover:bg-[#744f28] hover:text-white border border-gray-200 hover:border-[#744f28] transition font-medium"
//               >
//                 SIGNIN
//               </NavLink>
//               <NavLink
//                 to="/register"
//                 className="ml-2 px-4 py-1.5 text-sm bg-gray-100 text-gray-900 rounded hover:bg-[#744f28] hover:text-white border border-gray-200 hover:border-[#744f28] transition font-medium"
//               >
//                 SIGNUP
//               </NavLink>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }



import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
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

  const categories = [
    'Home',
    'Tops',
    'Dresses',
    'Shirts',
    'Pants',
    'Knitwear',
    'Offers',
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-30">
      <ToastContainer position="top-center" />
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center mr-8">
          <div className="flex flex-col items-start">
            <img src="/fashoraa.png" alt="Fashora Logo" className="h-15 w-24 mt-1" />
          </div>
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
        <div className="flex items-center gap-4 ml-8">
          <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </button>

          <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Wishlist">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
              />
            </svg>
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
