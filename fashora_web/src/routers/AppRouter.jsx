import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/login'
import Register from '../pages/Register'
import HomePage from '../pages/Homepage'  // ✅ Add this

import MainLayout from '../layout/Mainlayout'
import AuthContextProvider from '../auth/authProvider'

export default function AppRouter() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} /> {/* ✅ Fix homepage */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}
