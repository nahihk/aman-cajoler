import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    setUser(null);
    router.push('/');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-green-600 flex items-center">
            🏠 Aman Cajoler
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Houses
            </Link>
            <Link href="/cars" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Cars
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link href="/add-listing" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                  ➕ Add Listing
                </Link>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700">Hello, {user.name}</span>
                  <button
                    onClick={logout}
                    className="text-gray-700 hover:text-green-600 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                  Login
                </Link>
                <Link href="/register" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                  Sign Up
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                Houses
              </Link>
              <Link href="/cars" className="text-gray-700 hover:text-green-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                Cars
              </Link>
              
              {user ? (
                <>
                  <Link href="/add-listing" className="bg-green-600 text-white px-4 py-2 rounded-lg text-center font-medium" onClick={() => setIsMenuOpen(false)}>
                    Add Listing
                  </Link>
                  <span className="text-gray-700">Hello, {user.name}</span>
                  <button
                    onClick={logout}
                    className="text-red-600 hover:text-red-700 font-medium text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-gray-700 hover:text-green-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                  <Link href="/register" className="bg-green-600 text-white px-4 py-2 rounded-lg text-center font-medium" onClick={() => setIsMenuOpen(false)}>
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
