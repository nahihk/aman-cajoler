import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Head>
        <title>Aman Cajoler - Ethiopian Marketplace</title>
        <meta name="description" content="Buy and sell houses and cars across Ethiopia" />
      </Head>

      <Header />
      
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to Aman Cajoler! 🎉
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your Ethiopian marketplace for houses and cars across all 9 regions. 
          Join thousands of users buying and selling properties and vehicles.
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🚀 Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <span className="text-3xl mb-4 block">🏠</span>
              <h3 className="font-bold text-green-700 text-lg mb-2">Find Houses</h3>
              <p className="text-green-600">Discover your dream home across all Ethiopian regions</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <span className="text-3xl mb-4 block">🚗</span>
              <h3 className="font-bold text-blue-700 text-lg mb-2">Find Cars</h3>
              <p className="text-blue-600">Browse quality vehicles from trusted sellers</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <span className="text-3xl mb-4 block">🌍</span>
              <h3 className="font-bold text-purple-700 text-lg mb-2">9 Regions</h3>
              <p className="text-purple-600">Available across all regions of Ethiopia</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors text-center">
              Get Started Free
            </a>
            <a href="/login" className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors text-center">
              Sign In
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Aman Cajoler. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Connecting buyers and sellers across Ethiopia</p>
        </div>
      </footer>
    </div>
  );
}
