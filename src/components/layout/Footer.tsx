import React from 'react';
import { ArrowUp, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import Logo from '../ui/Logo';
import { useThemeStore } from '../../store/themeStore';

const Footer: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`relative ${isDarkMode ? 'bg-black' : 'bg-white'} ${isDarkMode ? 'text-white' : 'text-gray-800'} overflow-hidden`}>
      {/* Footer Wave */}
      <div className="relative">
        <svg 
          className={`${isDarkMode ? 'fill-[#070720]' : 'fill-gray-100'} w-full`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 100"
        >
          <path d="M0,96L80,90.7C160,85,320,75,480,74.7C640,75,800,85,960,80C1120,75,1280,53,1360,42.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Logo />
            <p className={`mt-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Creating innovative digital solutions that help businesses thrive in the modern world.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="#"
                className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-blue-900/20 hover:bg-blue-800/30' : 'bg-blue-100 hover:bg-blue-200'} flex items-center justify-center transition-colors`}
              >
                <Twitter className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </a>
              <a 
                href="#"
                className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-blue-900/20 hover:bg-blue-800/30' : 'bg-blue-100 hover:bg-blue-200'} flex items-center justify-center transition-colors`}
              >
                <Facebook className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </a>
              <a 
                href="#"
                className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-blue-900/20 hover:bg-blue-800/30' : 'bg-blue-100 hover:bg-blue-200'} flex items-center justify-center transition-colors`}
              >
                <Linkedin className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </a>
              <a 
                href="#"
                className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-blue-900/20 hover:bg-blue-800/30' : 'bg-blue-100 hover:bg-blue-200'} flex items-center justify-center transition-colors`}
              >
                <Instagram className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-[Poppins]">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'UI/UX Design', 'Digital Marketing', 'Analytics & Insights', 'Mobile Apps'].map(service => (
                <li key={service}>
                  <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}>{service}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-[Poppins]">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Our Team', 'Careers', 'Blog', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-[Poppins]">Legal</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'].map(item => (
                <li key={item}>
                  <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className={`mt-12 pt-6 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} border-t flex flex-col md:flex-row justify-between items-center`}>
          <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-600'} text-sm`}>
            &copy; {new Date().getFullYear()} Harvynix. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className={`mt-4 md:mt-0 ${
              isDarkMode 
                ? 'bg-blue-900/20 hover:bg-blue-800/30 text-blue-400' 
                : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
            } rounded-full p-2 transition-colors focus:outline-none group`}
          >
            <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;