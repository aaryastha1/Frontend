"use client"

import { useState } from "react"
import LoginForm from "./login-form"
import SignupForm from "./signup-form"
import Logo from "./logo"

export default function AuthContainer() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-8">
        <div className="text-center mb-6">
          <Logo />
          <h1 className="mt-4 text-2xl font-semibold text-gray-900">{isLogin ? "Welcome Back!" : "Create Account"}</h1>
        </div>

        {isLogin ? <LoginForm /> : <SignupForm />}

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-amber-700 hover:text-amber-800 underline transition-colors"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
