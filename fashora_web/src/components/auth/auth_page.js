import AuthTabs from "./auth-tabs"

export default function AuthPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-center mb-6">Welcome Back!</h1>
          <AuthTabs />
        </div>
      </div>
    </div>
  )
}
