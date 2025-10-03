import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [listings, setListings] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (!userInfo) {
      router.push('/login');
      return;
    }
    setUser(userInfo);
    fetchUserListings();
  }, []);

  const fetchUserListings = async () => {
    try {
      const token = localStorage.getItem('token');
      // This would call your backend API
      // const response = await fetch('/api/listings/my-listings', {
      //   headers: { 'Authorization': `Bearer ${token}` }
      // });
      // For now, we'll use mock data
      setListings([]);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Dashboard - Aman Cajoler</title>
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome, {user.name}!
          </h1>
          <p className="text-gray-600 mb-6">
            Manage your listings and account
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-green-700 text-lg">My Listings</h3>
              <p className="text-2xl font-bold text-green-600">{listings.length}</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-blue-700 text-lg">Active</h3>
              <p className="text-2xl font-bold text-blue-600">
                {listings.filter(l => l.status === 'active').length}
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-purple-700 text-lg">Region</h3>
              <p className="text-lg font-bold text-purple-600 capitalize">{user.region}</p>
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">My Listings</h2>
              <a 
                href="/add-listing" 
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                + Add New Listing
              </a>
            </div>

            {listings.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No listings yet</h3>
                <p className="text-gray-600 mb-6">Start by creating your first listing</p>
                <a 
                  href="/add-listing" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                >
                  Create Your First Listing
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Listings would be mapped here */}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
