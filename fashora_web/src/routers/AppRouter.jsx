// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Login from '../pages/login'
// import Register from '../pages/Register'
// import HomePage from '../pages/Homepage'  // ✅ Add this
// import MainLayout from '../layout/Mainlayout'
// import AuthContextProvider from '../auth/AuthProvider'



// export default function AppRouter() {
//   return (
//     <AuthContextProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route element={<MainLayout />}>
//             <Route path="/" element={<HomePage />} /> {/* ✅ Fix homepage */}
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/dashboard" element={<HomePage />} />
           
          
//           </Route>
          
//         </Routes>
//       </BrowserRouter>
//     </AuthContextProvider>
//   )
// }


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import HomePage from '../pages/HomePage';
import MainLayout from '../layout/MainLayout';
import AuthContextProvider from '../auth/AuthProvider';

// Admin pages and layout
import AdminLayout from '../layout/admin/adminlayout';
import Dashboard from '../pages/admin/Dashboard';
import Products from '../pages/admin/product';
import Categories from '../pages/admin/categories';

// import CategoryManagement from '../pages/admin/CategoryManagement';
// // import ProductManagement from '../pages/admin/ProductManagemnt';
// import ViewCategory from '../pages/admin/ViewCategory';
// import UpdateCategory from '../pages/admin/updateCategory';
// import CreateCategory from '../pages/admin/CreateCategory';





export default function AppRouter() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes inside MainLayout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<HomePage />} />
          </Route>

          {/* Admin routes inside AdminLayout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="categories" element={<Categories />} />
            
            {/* Add more admin routes here */}
          </Route>

            <Route element={<AdminLayout/>}>
          <Route path='/admin/*'>
            {/* <Route path='products' element={<ProductManagement />}></Route> */}
            
            {/* <Route path='category' element={<CategoryManagement/>}></Route>
            <Route path='category/:id' element={<ViewCategory/>}></Route>
            <Route path='category/:id/edit' element={<UpdateCategory/>}></Route>
            <Route path='category/create' element={<CreateCategory/>}></Route> */}
          </Route>
        </Route>



          
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}
