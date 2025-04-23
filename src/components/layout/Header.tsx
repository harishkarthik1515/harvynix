import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from '../ui/Logo';
import { useThemeStore } from '../../store/themeStore';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? isDarkMode 
            ? 'bg-black/90 backdrop-blur-md' 
            : 'bg-white/90 backdrop-blur-md'
          : 'bg-transparent'
      } py-4`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo />
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`${
                  isDarkMode 
                    ? 'text-white hover:text-blue-400' 
                    : 'text-gray-800 hover:text-blue-600'
                } transition-colors relative group font-medium`}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDarkMode 
                  ? 'bg-gray-800 text-yellow-400' 
                  : 'bg-gray-100 text-gray-800'
              } hover:bg-opacity-80 transition-colors`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>
          
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      <div 
        className={`fixed inset-0 ${
          isDarkMode ? 'bg-black/95' : 'bg-white/95'
        } backdrop-blur-lg flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className={`${
              isDarkMode 
                ? 'text-white hover:text-blue-400' 
                : 'text-gray-800 hover:text-blue-600'
            } text-2xl font-medium transition-all duration-300`}
            onClick={() => setIsOpen(false)}
          >
            {item}
          </a>
        ))}
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full ${
            isDarkMode 
              ? 'bg-gray-800 text-yellow-400' 
              : 'bg-gray-100 text-gray-800'
          } hover:bg-opacity-80 transition-colors`}
        >
          {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
};

export default Header;