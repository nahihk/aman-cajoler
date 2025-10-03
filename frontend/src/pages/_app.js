import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Check authentication on route change
    const handleRouteChange = () => {
      const publicPaths = ['/', '/login', '/register'];
      const user = JSON.parse(localStorage.getItem('userInfo') || 'null');
      
      if (!user && !publicPaths.includes(router.pathname)) {
        router.push('/login');
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
