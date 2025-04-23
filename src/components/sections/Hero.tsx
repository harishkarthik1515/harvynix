import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, Code, PieChart, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../../store/themeStore';

const Hero: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  const [text, setText] = useState('');
  const fullText = "Transform your business with cutting-edge solutions";
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Innovate.", "Create.", "Transform.", "Succeed."];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(wordInterval);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Feature cards that will appear on the sides
  const features = [
    { 
      icon: <Code />, 
      title: "Custom Development", 
      description: "Tailored solutions for your unique business needs" 
    },
    { 
      icon: <PieChart />, 
      title: "Data Analytics", 
      description: "Transform your data into actionable insights" 
    },
    { 
      icon: <ShieldCheck />, 
      title: "Secure Systems", 
      description: "Enterprise-grade security for your applications" 
    },
    { 
      icon: <Zap />, 
      title: "Performance", 
      description: "Blazing fast solutions optimized for scale" 
    }
  ];

  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center justify-center ${
        isDarkMode ? 'bg-black' : 'bg-gray-50'
      } overflow-hidden`}
    >
      <div className={`absolute inset-0 z-0 ${isDarkMode ? 'bg-gradient-to-b from-[#0d0d0d] to-black' : 'bg-gradient-to-b from-gray-100 to-gray-50'}`}>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Gradient Rays */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-conic from-blue-500 via-transparent to-transparent rotate-45"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-conic from-indigo-500 via-transparent to-transparent -rotate-45"></div>
          </div>
          
          {/* Animated Lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-slide-right"></div>
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-slide-left"></div>
            <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-slide-right"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-slide-left"></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-float opacity-50"></div>
            <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-indigo-500 rounded-full animate-float-delayed opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-500 rounded-full animate-float-slow opacity-50"></div>
          </div>

          {/* Radial Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/5 to-black/20"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side Feature Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex lg:col-span-3 flex-col space-y-4"
          >
            {features.slice(0, 2).map((feature, index) => (
              <motion.div
                key={`left-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: isDarkMode ? "0 4px 20px rgba(30, 64, 175, 0.2)" : "0 4px 20px rgba(59, 130, 246, 0.15)"
                }}
                className={`p-4 rounded-xl ${
                  isDarkMode 
                    ? 'bg-blue-950/30 border border-blue-900/50 backdrop-blur-sm' 
                    : 'bg-white/70 border border-blue-100 backdrop-blur-sm shadow-sm'
                } transition-all duration-300 cursor-pointer`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{feature.title}</h3>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Main Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-center justify-center text-center"
          >
            <motion.div 
              className="mb-6 relative flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="inline-block relative">
                <span className={`absolute inset-0 rounded-full ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-600/50 to-indigo-600/50' 
                    : 'bg-gradient-to-r from-blue-400/50 to-indigo-400/50'
                } animate-pulse blur-2xl opacity-75`}></span>

                <div className={`relative p-5 rounded-full ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-700 to-indigo-800' 
                    : 'bg-gradient-to-r from-blue-500 to-indigo-600'
                }`}>
                  <div className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center animate-float">
                    <div className={`absolute inset-0 rounded-full ${
                      isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
                    } animate-ping opacity-30`}></div>
                    <div className="flex items-center justify-center w-full h-full">
                      <img 
                        src="https://i.ibb.co/JFthZwhP/My-Chat-GPT-image-2-removebg-preview.png" 
                        alt="Logo" 
                        className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain -ml-1 md:-ml-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-[Poppins] ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Welcome to{' '}
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                  Harvynix
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </motion.h1>
          
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className={`max-w-2xl ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              } mb-4 text-lg md:text-xl`}
            >
              {text}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className={`text-2xl md:text-3xl font-bold ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              } mb-10`}
            >
              {words[currentWordIndex]}
            </motion.div>
          
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              {/* Explore Services Button */}
              <button 
                onClick={scrollToServices}
                className={`group relative overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg shadow-blue-900/30' 
                    : 'bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30'
                } text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40`}
              >
                <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></span>
                <span className="relative flex items-center justify-center text-sm md:text-base">
                  Explore Services
                  <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </button>
          
              {/* View Portfolio Button */}
              <button 
                onClick={scrollToPortfolio}
                className={`group relative overflow-hidden ${
                  isDarkMode 
                    ? 'bg-black/30 backdrop-blur-sm border border-blue-700/50 text-white' 
                    : 'bg-white/70 backdrop-blur-sm border border-blue-400/30 text-gray-800'
                } font-medium py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center`}
              >
                <span className={`absolute inset-0 w-0 ${
                  isDarkMode ? 'bg-blue-800/30' : 'bg-blue-50/70'
                } transition-all duration-500 ease-out group-hover:w-full`}></span>
                <span className="relative flex items-center justify-center text-sm md:text-base">
                  View Portfolio
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right Side Feature Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex lg:col-span-3 flex-col space-y-4"
          >
            {features.slice(2, 4).map((feature, index) => (
              <motion.div
                key={`right-${index}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: isDarkMode ? "0 4px 20px rgba(30, 64, 175, 0.2)" : "0 4px 20px rgba(59, 130, 246, 0.15)"
                }}
                className={`p-4 rounded-xl ${
                  isDarkMode 
                    ? 'bg-blue-950/30 border border-blue-900/50 backdrop-blur-sm' 
                    : 'bg-white/70 border border-blue-100 backdrop-blur-sm shadow-sm'
                } transition-all duration-300 cursor-pointer`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{feature.title}</h3>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Mobile feature cards have been removed as requested */}
    </section>
  );
};

export default Hero;