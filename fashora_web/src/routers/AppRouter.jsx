
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/Register';
import HomePage from '../pages/Dashboard';
import MainLayout from '../layout/MainLayout';
import AuthContextProvider from '../auth/authProvider';
import Homepage from "../pages/Homepage";


// Admin pages and layout
import AdminLayout from '../layout/admin/adminlayout';
// import Dashboard from '../pages/admin/Dashboard';
import Products from '../pages/admin/product';
import Categories from '../pages/admin/categories';
import CategoryManagement from '../pages/admin/CategoryManagement';
import ViewCategory from '../pages/admin/ViewCategory';
import UpdateCategory from '../pages/admin/updateCategory';
import CreateCategory from '../pages/admin/CreateCategory';
// import ProductManagement from '../pages/admin/ProductManagemnt'
// import CreateProduct from '../pages/admin/CreateProduct'
import UserManagement from '../pages/admin/UserManagement';
import ProductContent from '../pages/admin/productContent';
import ProductTable from '../components/admin/productTable';
import ProductDetail from '../pages/admin/productDetails';
import CreateProduct from '../pages/admin/CreateProduct';
import UpdateProduct from '../pages/admin/UpdateProduct';
import CategoryProductPage from '../pages/Categoryproduct';






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
            <Route path="/home" element={<Homepage />} />

              {/* Category route */}
         <Route path="/category/:categoryName" element={<CategoryProductPage />} />
         

            
         


          </Route>

          {/* Admin routes inside AdminLayout */}
          {/* <Route path="/admin" element={<AdminLayout />}> */}
            {/* <Route index element={<Dashboard />} /> */}
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
            {/* <Route path="products" element={<Products />} /> */}
            <Route path="categories" element={<Categories />} />
            
            {/* Add more admin routes here */}
          {/* </Route> */}

            {/* <Route element={<AdminLayout/>}>
  <Route path='/admin/*'> */}
          
            {/* <Route path='products' element={<ProductManagement />}></Route> */}
            
            {/* <Route path='category' element={<CategoryManagement/>}></Route>
            <Route path='category/:id' element={<ViewCategory/>}></Route>
            <Route path='category/:id/edit' element={<UpdateCategory/>}></Route>
            <Route path='category/create' element={<CreateCategory/>}></Route> */}
          {/* </Route> */}
        {/* </Route> */}
<Route element={<AdminLayout/>}>
          <Route path='/admins/*'>
          <Route path='categoryy' element={<CategoryManagement/>}></Route>
          <Route path='categoryy/:id' element={<ViewCategory/>}></Route>
          <Route path='categoryy/:id/edit' element={<UpdateCategory/>}></Route>
          <Route path='categoryy/create' element={<CreateCategory/>}></Route>

          <Route path='Products' element={<ProductContent />} />
          <Route path='Product' element={<ProductTable />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="product/create" element={<CreateProduct />} />
          <Route path="product/:id/edit" element={<UpdateProduct />} />
        

          

       

          
          


          
          
          


          
           {/* <Route path='productss' element={<ProductManagement />}></Route>
            <Route path='productss/create' element={<CreateProduct/>}></Route> */}

            
          <Route path='userss' element={<UserManagement />}></Route>

          </Route>
          </Route>



          
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}
