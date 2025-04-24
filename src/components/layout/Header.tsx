import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from '../ui/Logo';
import { useThemeStore } from '../../store/themeStore';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useThemeStore();
  
  // Create a consistent array of navigation items to use in both places
  const navItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact', 'Testimonials'];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleNavClick = (item: string) => {
    setIsOpen(false);
    
    // This ensures the browser smoothly scrolls to the section
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
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
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
                className={`${
                  isDarkMode 
                    ? 'text-white hover:text-blue-400' 
                    : 'text-gray-800 hover:text-blue-600'
                } transition-colors relative group font-medium cursor-pointer`}
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
            className={`md:hidden ${isDarkMode ? 'text-white' : 'text-gray-800'} focus:outline-none`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu - Fixed position with higher z-index */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Solid background with maximum z-index */}
          <div 
            className={`fixed inset-0 ${isDarkMode ? 'bg-black' : 'bg-white'}`}
            style={{ zIndex: 99 }}
          ></div>
          
          {/* Menu content with even higher z-index */}
          <div className="fixed inset-0 flex flex-col" style={{ zIndex: 100 }}>
            {/* Header area with close button */}
            <div className="flex justify-end p-4">
              <button 
                className={`p-2 rounded-full ${
                  isDarkMode 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } shadow-md`}
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Menu items container */}
            <div className="flex-1 flex flex-col justify-center items-center space-y-8">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className={`${
                    isDarkMode 
                      ? 'text-white hover:text-blue-400' 
                      : 'text-gray-800 hover:text-blue-600'
                  } text-2xl font-medium transition-all duration-300 cursor-pointer`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                >
                  {item}
                </a>
              ))}
              
              {/* Theme toggle button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleTheme();
                }}
                className={`mt-8 p-3 rounded-full ${
                  isDarkMode 
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } shadow-md transition-colors`}
              >
                {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;