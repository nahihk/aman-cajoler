import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Head>
        <title>Aman Cajoler - Ethiopian Marketplace</title>
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-600">🏠 Aman Cajoler</h1>
            <nav className="flex space-x-4">
              <button className="text-gray-600 hover:text-green-600">Houses</button>
              <button className="text-gray-600 hover:text-green-600">Cars</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Login</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to Aman Cajoler! 🎉
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your Ethiopian marketplace for houses and cars is being built with love! 
          This is just the beginning of something amazing.
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🚀 Coming Soon!</h2>
          <p className="text-gray-600 mb-6">
            We're working hard to bring you the best marketplace experience across all 9 regions of Ethiopia!
          </p>
          
          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="bg-green-50 p-4 rounded-lg">
              <span className="text-2xl">🏠</span>
              <h3 className="font-bold text-green-700">Houses</h3>
              <p className="text-sm text-green-600">Find your dream home</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <span className="text-2xl">🚗</span>
              <h3 className="font-bold text-blue-700">Cars</h3>
              <p className="text-sm text-blue-600">Discover your perfect vehicle</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Aman Cajoler. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Made with ❤️ for Ethiopia</p>
        </div>
      </footer>
    </div>
  );
}
