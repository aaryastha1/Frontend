"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import SocialLogin from "./social-login"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt:", { email, password, rememberMe })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
            Sign In
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Phone / Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      <div className="flex items-center">
        <Checkbox
          id="remember-me"
          checked={rememberMe}
          onCheckedChange={(checked) => setRememberMe(checked)}
          className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
        />
        <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
          Remember Me
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
      >
        Sign In
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">OR</span>
        </div>
      </div>

      <SocialLogin />
    </form>
  )
}
