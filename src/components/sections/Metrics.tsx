import React from 'react';
import { Users, Code2, Award, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../../store/themeStore';

interface Metric {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const metrics: Metric[] = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "500+",
    label: "Happy Clients"
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    value: "1000+",
    label: "Projects Completed"
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: "50+",
    label: "Awards Won"
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    value: "10+",
    label: "Years Experience"
  }
];

const Metrics: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-[#070720]' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${
                isDarkMode 
                  ? 'bg-gradient-to-br from-[#121330] to-[#0a0a1a]' 
                  : 'bg-white'
              } rounded-xl p-6 text-center group hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex justify-center mb-4">
                <div className={`${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                } transform group-hover:rotate-12 transition-transform duration-300`}>
                  {metric.icon}
                </div>
              </div>
              <h3 className={`text-3xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {metric.value}
              </h3>
              <p className={`${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;