import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif italic font-bold text-gray-900">
          Fasherie
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/collections" className="text-gray-600 hover:text-gray-900 transition-colors">
                Collections
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/auth" className="text-gray-600 hover:text-gray-900 transition-colors">
            Account
          </Link>
        </div>
      </div>
    </header>
  )
}
