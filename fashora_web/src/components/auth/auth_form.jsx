"use client"

import { useState } from "react"
import LoginForm from "./login-form"
import SignupForm from "./signup-form"

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="space-y-6">
      {isLogin ? <LoginForm /> : <SignupForm />}

      <div className="text-center">
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
  )
}
