import Image from "next/image"
import AuthForm from "./auth-form"
import Logo from "./logo"

export default function AuthenticationPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-50">
        <Image
          src="/images/fashion-models.png"
          alt="Two elegant women in white outfits"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side - Authentication Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Logo />
            <h1 className="mt-6 text-2xl font-semibold text-gray-900">Welcome Back!</h1>
          </div>
          <AuthForm />
        </div>
      </div>
    </div>
  )
}
