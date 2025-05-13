import React, { useState } from 'react';
import { Github, Twitter, Linkedin, Mail, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    email?: string;
  }
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Harish Karthik D',
    role: 'Founder & CEO',
    image: 'https://i.ibb.co/PvrbsPwH/IMG-20231004-214348.jpg',
    description: 'Visionary leader  in tech innovation and business strategy.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      email: 'harishkarthik1515@gmail.com'
    }
  },
  {
    id: 2,
    name: 'Dhanyashree S',
    role: 'CTO',
    image: 'https://i.ibb.co/1f5StKZK/D.jpg',
    description: 'Tech enthusiast and architect behind our cutting-edge solutions with a passion for innovation.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      email: '#'
    }
  },
  {
    id: 3,
    name: 'Siddhartha Buddala',
    role: 'Design Lead',
    image: 'https://i.ibb.co/TqTT76SR/IMG-6679.jpg',
    description: 'Award-winning designer with a keen eye for aesthetics and user-centered approach.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      email: '#'
    }
  }
];

const About: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState('vision');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleCard = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveCard(activeCard === 'vision' ? 'mission' : 'vision');
    
    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <section id="about" className={`relative py-20 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-black to-[#080816]' 
        : 'bg-gradient-to-b from-gray-100 to-gray-50'
      } overflow-hidden`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full ${
          isDarkMode ? 'bg-blue-900/10' : 'bg-blue-500/5'
        } filter blur-3xl`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full ${
          isDarkMode ? 'bg-blue-800/10' : 'bg-indigo-500/5'
        } filter blur-3xl`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`inline-block text-3xl md:text-4xl font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          } mb-3 font-[Poppins] relative`}>
            About <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Us</span>
            <span className={`absolute -bottom-2 left-0 w-full h-1 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-500 to-transparent' 
                : 'bg-gradient-to-r from-blue-600 to-transparent'
            }`}></span>
          </h2>
          <p className={`max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          } text-lg`}>
            At Harvynix, we blend innovation with expertise to transform ideas into impactful digital experiences. Our dedicated team brings diverse skills to every project.
          </p>
        </div>

        {/* Vision & Mission Modern Cards */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="relative h-auto">
            {/* Navigation Tabs */}
            <div className="flex justify-center mb-6">
              <div className={`${
                isDarkMode 
                  ? 'bg-[#12132a]/50' 
                  : 'bg-white/70'
                } backdrop-blur-lg rounded-full p-1 flex items-center shadow-md`}>
                <button 
                  onClick={() => !isTransitioning && setActiveCard('vision')}
                  className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCard === 'vision' 
                      ? isDarkMode ? 'text-white' : 'text-gray-900'
                      : isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {activeCard === 'vision' && (
                    <span className={`absolute inset-0 ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-blue-600 to-blue-400'
                        : 'bg-gradient-to-r from-blue-500 to-blue-300'
                    } rounded-full blur-xs`} />
                  )}
                  <span className={`relative z-10 ${activeCard === 'vision' ? 'font-semibold' : ''}`}>Vision</span>
                </button>
                <button 
                  onClick={() => !isTransitioning && setActiveCard('mission')}
                  className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCard === 'mission' 
                      ? isDarkMode ? 'text-white' : 'text-gray-900'
                      : isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {activeCard === 'mission' && (
                    <span className={`absolute inset-0 ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-blue-600 to-blue-400'
                        : 'bg-gradient-to-r from-blue-500 to-blue-300'
                    } rounded-full blur-xs`} />
                  )}
                  <span className={`relative z-10 ${activeCard === 'mission' ? 'font-semibold' : ''}`}>Mission</span>
                </button>
              </div>
            </div>
            
            {/* Cards Container with Perspective */}
            <div className="perspective-1000">
              {/* Vision Card */}
              <div 
                className={`${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-[#12132a] to-[#0c0c20]' 
                    : 'bg-gradient-to-br from-white to-gray-50'
                } rounded-2xl shadow-2xl p-8 md:p-10 transition-all duration-500 transform ${
                  activeCard === 'vision' 
                    ? 'opacity-100 translate-y-0 rotate-y-0' 
                    : 'opacity-0 -translate-y-8 rotate-y-90 absolute inset-0'
                } ${
                  isDarkMode
                    ? 'shadow-blue-900/10'
                    : 'shadow-blue-200/50'
                }`}
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-full ${
                      isDarkMode ? 'bg-blue-500/20' : 'bg-blue-500/10'
                    } flex items-center justify-center`}>
                      <div className={`w-8 h-8 rounded-full ${
                        isDarkMode ? 'bg-blue-500/40' : 'bg-blue-500/20'
                      } flex items-center justify-center`}>
                        <div className={`w-4 h-4 rounded-full ${
                          isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                        }`}></div>
                      </div>
                    </div>
                    <h3 className={`text-2xl font-bold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    } font-[Poppins]`}>Our Vision</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <p className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    } text-lg`}>
                      To lead technological innovation by creating solutions that empower businesses and individuals to achieve their fullest potential in a rapidly evolving digital landscape.
                    </p>
                    <p className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      We envision a world where technology enhances human capabilities and creates meaningful connections.
                    </p>
                  </div>
                  
                  <button 
                    onClick={toggleCard}
                    className={`mt-8 self-end group flex items-center gap-2 ${
                      isDarkMode 
                        ? 'text-blue-400 hover:text-blue-300' 
                        : 'text-blue-600 hover:text-blue-500'
                    } transition-colors duration-300 md:hidden`}
                  >
                    <span>See Our Mission</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              
              {/* Mission Card */}
              <div 
                className={`${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-[#12132a] to-[#0c0c20]' 
                    : 'bg-gradient-to-br from-white to-gray-50'
                } rounded-2xl shadow-2xl p-8 md:p-10 transition-all duration-500 transform ${
                  activeCard === 'mission' 
                    ? 'opacity-100 translate-y-0 rotate-y-0' 
                    : 'opacity-0 -translate-y-8 rotate-y-90 absolute inset-0'
                } ${
                  isDarkMode
                    ? 'shadow-blue-900/10'
                    : 'shadow-blue-200/50'
                }`}
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-full ${
                      isDarkMode ? 'bg-blue-500/20' : 'bg-blue-500/10'
                    } flex items-center justify-center`}>
                      <div className={`w-8 h-8 rounded-full ${
                        isDarkMode ? 'bg-blue-500/40' : 'bg-blue-500/20'
                      } flex items-center justify-center`}>
                        <div className={`w-4 h-4 rounded-full ${
                          isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                        }`}></div>
                      </div>
                    </div>
                    <h3 className={`text-2xl font-bold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    } font-[Poppins]`}>Our Mission</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <p className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    } text-lg`}>
                      To deliver exceptional digital solutions that drive business growth, solve complex challenges, and create outstanding user experiences through our commitment to quality and innovation.
                    </p>
                    <p className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Every project we undertake is guided by our core values of excellence, integrity, and client satisfaction.
                    </p>
                  </div>
                  
                  <button 
                    onClick={toggleCard}
                    className={`mt-8 self-end group flex items-center gap-2 ${
                      isDarkMode 
                        ? 'text-blue-400 hover:text-blue-300' 
                        : 'text-blue-600 hover:text-blue-500'
                    } transition-colors duration-300 md:hidden`}
                  >
                    <ChevronLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
                    <span>See Our Vision</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className={`text-2xl md:text-3xl font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        } mb-10 text-center font-[Poppins]`}>
          Meet Our <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Team</span>
        </h3>

        {/* Team Member Cards - Updated with better centering and consistent sizing */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
            {teamMembers.map(member => (
              <div 
                key={member.id}
                className="flex justify-center"
              >
                <div 
                  className="group relative w-72 h-96" 
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div className={`relative w-full h-full overflow-hidden rounded-xl ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-[#121330] to-[#0a0a1a]' 
                      : 'bg-gradient-to-br from-white to-gray-50'
                    } shadow-lg transition-all duration-500 transform group-hover:-translate-y-2 ${
                    isDarkMode 
                      ? 'group-hover:shadow-blue-900/20' 
                      : 'group-hover:shadow-blue-300/30'
                    } group-hover:shadow-xl`}
                  >
                    {/* Image Container */}
                    <div className="w-full h-full relative overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="object-cover w-full h-full transition-all duration-700 transform group-hover:scale-110"
                      />
                      
                      {/* Overlay gradient - Darker at bottom for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 opacity-70 transition-opacity group-hover:opacity-90"></div>
                      
                      {/* Info Section - Positioned at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500">
                        <h4 className="text-xl font-bold text-white mb-1 font-[Poppins]">{member.name}</h4>
                        <p className={`${isDarkMode ? 'text-blue-400' : 'text-blue-300'} font-medium mb-2`}>{member.role}</p>
                        
                        {/* Description - Hidden by default, visible on hover */}
                        <p className="text-gray-300 text-sm mb-4 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                          {member.description}
                        </p>
                        
                        {/* Social Icons */}
                        <div className="flex space-x-3 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                          {member.socials.twitter && (
                            <a href={member.socials.twitter} className="text-gray-300 hover:text-blue-400 transition-colors">
                              <Twitter className="w-5 h-5" />
                            </a>
                          )}
                          {member.socials.linkedin && (
                            <a href={member.socials.linkedin} className="text-gray-300 hover:text-blue-400 transition-colors">
                              <Linkedin className="w-5 h-5" />
                            </a>
                          )}
                          {member.socials.github && (
                            <a href={member.socials.github} className="text-gray-300 hover:text-blue-400 transition-colors">
                              <Github className="w-5 h-5" />
                            </a>
                          )}
                          {member.socials.email && (
                            <a href={`mailto:${member.socials.email}`} className="text-gray-300 hover:text-blue-400 transition-colors">
                              <Mail className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;