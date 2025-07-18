import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { useContext } from "react";

import React from 'react'

export default function GuestRoute() {
    const { user, loading } = useContext(AuthContext)

    if (loading) return <>Loading</>

    if (user) return <Navigate to="/" />

      if (user) {
    // Redirect based on user role
    if (user.role === 'admin') return <Navigate to="/admin/products" />;
    if (user.role === 'normal') return <Navigate to="/normal/home" />;
    // Optional: fallback if role is unrecognized
    return <Navigate to="/" />;
  }

    return <Outlet />
}