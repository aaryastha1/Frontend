import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />       {/* renders at "/" */}
          <Route path="login" element={<Login />} />   {/* renders at "/login" */}
          <Route path="register" element={<Register />} /> {/* renders at "/register" */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
