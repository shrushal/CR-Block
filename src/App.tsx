import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Ecosystem from './components/Ecosystem';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import Footer from './components/Footer';
import BuyPage from './components/BuyPage';
import Slider from './components/Slider';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {currentPath !== '/buy' && (
        <>
          <Navbar />
          <Slider />
        </>
      )}
      {currentPath === '/' && (
        <>
          <Hero />
          <Features />
          <Ecosystem />
          <Roadmap />
          <Community />
        </>
      )}
      {currentPath === '/buy' && <BuyPage />}
      {currentPath !== '/buy' && <Footer />}
    </div>
  );
}

export default App;
