import React, { useState } from 'react';
import { Code, Palette, Rocket, BarChart, ArrowRight, CheckCircle, MonitorSmartphone, Brush, TrendingUp, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../../store/themeStore';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  features: string[];
  cta: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Creating custom, responsive websites with cutting-edge technologies that deliver exceptional user experiences.",
    icon: <MonitorSmartphone className="w-10 h-10 text-blue-400" />,
    benefits: [
      "Custom application development",
      "Responsive & mobile-first design",
      "E-commerce solutions",
      "Progressive web apps"
    ],
    features: [
      "Modern tech stack",
      "SEO optimization",
      "Performance focused",
      "Scalable architecture"
    ],
    cta: "View Development Process"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Designing beautiful, intuitive interfaces that engage users and create meaningful connections with your brand.",
    icon: <Brush className="w-10 h-10 text-blue-400" />,
    benefits: [
      "User research & testing",
      "Wireframing & prototyping",
      "Visual identity design",
      "Interactive mockups"
    ],
    features: [
      "User-centered design",
      "Accessibility focus",
      "Brand consistency",
      "Design systems"
    ],
    cta: "Explore Design Services"
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Driving growth with data-driven strategies that connect your brand with the right audience at the right time.",
    icon: <TrendingUp className="w-10 h-10 text-blue-400" />,
    benefits: [
      "SEO optimization",
      "Content marketing",
      "Social media management",
      "Email marketing campaigns"
    ],
    features: [
      "Market analysis",
      "Campaign tracking",
      "ROI optimization",
      "Audience targeting"
    ],
    cta: "Discover Marketing Plans"
  },
  {
    id: 4,
    title: "Analytics & Insights",
    description: "Turning data into actionable insights that guide strategic decisions and optimize your digital presence.",
    icon: <PieChart className="w-10 h-10 text-blue-400" />,
    benefits: [
      "Custom dashboard creation",
      "Performance tracking",
      "Conversion optimization",
      "A/B testing & analysis"
    ],
    features: [
      "Real-time monitoring",
      "Custom reporting",
      "Data visualization",
      "Predictive analytics"
    ],
    cta: "Learn About Analytics"
  }
];

const Services: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const handleFlip = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section id="services" className={`relative py-20 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-[#080816] to-[#0d1033]' 
        : 'bg-gradient-to-b from-gray-50 to-gray-100'
    } overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-0 right-0 w-full h-64 ${
          isDarkMode 
            ? 'bg-gradient-to-b from-blue-900/10' 
            : 'bg-gradient-to-b from-blue-100/50'
        } to-transparent`}></div>
        <div className={`absolute -bottom-32 -left-32 w-64 h-64 rounded-full ${
          isDarkMode ? 'bg-blue-900/10' : 'bg-blue-100/50'
        } filter blur-3xl animate-pulse`}></div>
        <div className={`absolute top-1/3 right-0 w-64 h-64 rounded-full ${
          isDarkMode ? 'bg-indigo-900/10' : 'bg-indigo-100/50'
        } filter blur-3xl animate-pulse`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-block text-3xl md:text-4xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            } mb-3 font-[Poppins] relative`}
          >
            Our <span className="text-blue-400">Services</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent"></span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            } text-lg`}
          >
            We offer comprehensive digital solutions tailored to your business needs, helping you stay ahead in today's competitive landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="perspective-1000"
            >
              <div 
                className={`relative h-[450px] transition-all duration-700 transform-style-3d cursor-pointer ${
                  flippedCard === service.id ? 'rotate-y-180' : ''
                }`}
                onClick={() => handleFlip(service.id)}
              >
                {/* Front of card */}
                <div className={`absolute inset-0 backface-hidden ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-[#121330] to-[#0a0a1a]' 
                    : 'bg-white'
                } rounded-xl shadow-xl p-8 flex flex-col transition-all duration-300 hover:shadow-blue-900/20 group`}>
                  <div className="flex justify-center items-center h-16 mb-6 relative">
                    <div className="absolute inset-0 bg-blue-500/10 rounded-full filter blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="transform group-hover:rotate-12 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } mb-4 text-center font-[Poppins] group-hover:text-blue-400 transition-colors`}>
                    {service.title}
                  </h3>
                  <p className={`${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  } text-center flex-grow`}>{service.description}</p>
                  <ul className="mt-6 space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className={`w-4 h-4 ${
                          isDarkMode ? 'text-blue-400' : 'text-blue-500'
                        } mr-2 flex-shrink-0`} />
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Back of card */}
                <div className={`absolute inset-0 backface-hidden rotate-y-180 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-[#1a1a40] to-[#0d0d29]' 
                    : 'bg-gradient-to-br from-gray-50 to-white'
                } rounded-xl shadow-xl p-8 flex flex-col`}>
                  <h3 className={`text-xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } mb-6 text-center font-[Poppins]`}>{service.title}</h3>
                  
                  <div className="flex-grow">
                    <div className="mb-6">
                      <h4 className={`text-sm font-semibold ${
                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      } mb-3`}>Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                            <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className={`text-sm font-semibold ${
                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      } mb-3`}>Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                            <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="mt-6 w-full bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-2 px-4 rounded transition-all duration-300 flex items-center justify-center group">
                    {service.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;