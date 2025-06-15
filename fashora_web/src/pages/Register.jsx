import React, { useContext } from 'react'
import RegisterForm from '../components/auth/registerForm'
import { AuthContext } from '../auth/authProvider'

export default function Register() {
  const { user } = useContext(AuthContext)

  if (user) {
    return (
      <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow text-center">
        <p className="text-lg font-semibold text-gray-700">
          You are already registered.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
        Create Your Fashora Account
      </h2>
      <RegisterForm />
    </div>
  )
}
