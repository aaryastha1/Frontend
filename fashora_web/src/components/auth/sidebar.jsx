// Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaList
} from 'react-icons/fa';

const Sidebar = () => {
  const navItems = [
    // { name: 'Dashboard', icon: <FaTachometerAlt />, path: '/admin/dashboard' },
    { name: 'Products', icon: <FaBox />, path: '/admins/product' },
    { name: 'Categories', icon: <FaList />, path: '/admins/categoryy' },
    { name: 'User', icon: <FaTachometerAlt />, path: '/admins/userss' },
  ];

  return (
    <div className="w-64 min-h-screen bg-[#10172A] text-white p-5">
      <h1 className="text-2xl font-bold text-[#D946EF] mb-1">Fashora Admin</h1>
      <p className="text-sm text-gray-400 mb-6">Fashion Management</p>

      <ul className="space-y-2">
        {navItems.map(({ name, icon, path }) => (
          <li key={name}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive ? 'bg-[#A855F7]' : 'hover:bg-[#1F2937]'
                }`
              }
            >
              <span className="text-lg">{icon}</span>
              <span>{name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="mt-10 bg-[#1F2937] p-4 rounded flex items-center space-x-3">
        <div className="bg-[#D946EF] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">FA</div>
        <div>
          <p className="font-semibold">Fashion Admin</p>
          <p className="text-xs text-gray-400">Super Administrator</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


// import { NavLink } from 'react-router-dom';

// export default function Sidebar() {
//   const linkClass = "block px-4 py-2 hover:bg-gray-200";
//   return (
//     <div className="w-64 bg-gray-100 h-screen shadow-md fixed">
//       <h2 className="text-2xl font-bold text-center py-6">Admin Panel</h2>
//       <nav>
//         <NavLink to="/" className={linkClass}>Dashboard</NavLink>
//         <NavLink to="/categories" className={linkClass}>Categories</NavLink>
//         <NavLink to="/products" className={linkClass}>Products</NavLink>
//         <NavLink to="/users" className={linkClass}>Users</NavLink>
//       </nav>
//     </div>
//   );
// }