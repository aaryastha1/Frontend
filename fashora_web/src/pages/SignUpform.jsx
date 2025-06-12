"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import SocialLogin from "./social-login"

export default function SignupForm() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Signup attempt:", { fullName, email, password, agreeTerms })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2 block">
            Full Name
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <Label htmlFor="signup-email" className="text-sm font-medium text-gray-700 mb-2 block">
            Email
          </Label>
          <Input
            id="signup-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <Label htmlFor="signup-password" className="text-sm font-medium text-gray-700 mb-2 block">
            Password
          </Label>
          <Input
            id="signup-password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      <div className="flex items-center">
        <Checkbox
          id="terms"
          checked={agreeTerms}
          onCheckedChange={(checked) => setAgreeTerms(checked)}
          required
          className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
        />
        <Label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
          I agree to the{" "}
          <a href="#" className="text-amber-700 hover:text-amber-800 underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-amber-700 hover:text-amber-800 underline">
            Privacy Policy
          </a>
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
      >
        Create Account
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
