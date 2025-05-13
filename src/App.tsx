import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';
import Metrics from './components/sections/Metrics';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { useThemeStore } from './store/themeStore';
import './styles/animations.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={`h-screen flex flex-col items-center justify-center ${
        isDarkMode ? 'bg-black' : 'bg-white'
      }`}>
        <div className="relative">
          <div className={`w-16 h-16 rounded-full border-t-2 border-b-2 ${
            isDarkMode ? 'border-blue-500' : 'border-blue-600'
          } animate-spin`}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-xl font-bold ${
              isDarkMode ? 'text-blue-500' : 'text-blue-600'
            }`}>H</span>
          </div>
        </div>
        <h2 className={`mt-4 text-xl font-[Poppins] ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          <span>Harvy</span>
          <span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>nix</span>
        </h2>
      </div>
    );
  }

  return (
    <div className={`min-h-screen font-[Inter] ${
      isDarkMode ? 'text-white bg-black' : 'text-gray-900 bg-white'
    }`}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App