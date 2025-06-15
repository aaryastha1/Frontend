import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import LoginForm from '../components/auth/loginForm'
import { AuthContext } from '../auth/authProvider'

export default function Login() {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const returnToHome = (event) => {
    if (event) event.preventDefault()
    navigate('/')
  }

  if (user) {
    return (
      <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow text-center">
        <p className="text-lg font-semibold text-gray-700">
          You are already logged in.
        </p>
        <button
          onClick={returnToHome}
          className="mt-4 inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-6 rounded transition"
        >
          Go to Home
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded shadow">
      <nav className="flex justify-between mb-6 text-sm font-medium text-pink-600">
        <NavLink to="/" className="hover:underline">
          ← Back to Home
        </NavLink>
        <Link to="/register" className="hover:underline">
          Register
        </Link>
      </nav>

      <LoginForm />

      <button
        onClick={returnToHome}
        className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded transition"
      >
        Return Home
      </button>
    </div>
  )
}
