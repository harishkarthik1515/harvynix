import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../../store/themeStore';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  clientName?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Data Analytics Dashboard",
    category: "Web Development",
    image: "https://i.ibb.co/xSKytdGZ/image.png",
    description: "Interactive dashboard for data visualization using React, Node.js, MongoDB, and D3.js.",
    clientName: "LaLiga Analytics",
    link: "https://laliga-analytics.vercel.app"
  },
  {
    id: 2,
    title: "Recommendation System",
    category: "AI Solutions",
    image: "https://i.ibb.co/7drNrrbS/image.png",
    description: "Games recommendation system based on user preferences using React, Node.js, MongoDB, Express, Python, and Flask.",
    clientName: "GameFlix",
    link: "https://gameflix-six.vercel.app/"
  },
  {
    id: 3,
    title: "Attendance System",
    category: "AI Solutions",
    image: "https://i.ibb.co/Tx1dGLM6/image.png",
    description: "Attendance system using face recognition technology with React, Firebase, OpenCV, and Python.",
    clientName: "Smart Canteen",
    link: "https://smartcanteenversion2.vercel.app/"
  },
  {
    id: 4,
    title: "Portfolio Techy",
    category: "Portfolio",
    image: "https://i.ibb.co/spgDY4cQ/image.png",
    description: "Modern portfolio website for tech enthusiasts with customizable sections.",
    clientName: "Tech Professionals",
    link: "https://harishkarthik1515.github.io/modern_port_1/"
  },
  {
    id: 5,
    title: "The Modern Portfolio",
    category: "Portfolio",
    image: "https://i.ibb.co/1fPd5D0p/image.png",
    description: "A sleek and modern portfolio website with a clean, professional design.",
    clientName: "Creative Professionals",
    link: "https://harishkarthik1515.github.io/modern_port_2/"
  },
  {
    id: 6,
    title: "Portfolio Fashion",
    category: "Portfolio",
    image: "https://i.ibb.co/20GcHg3X/image.png",
    description: "A stylish portfolio designed specifically for fashion enthusiasts and professionals.",
    clientName: "Fashion Designers",
    link: "https://harishkarthik1515.github.io/modern_port_3/"
  },
  {
    id: 7,
    title: "Portfolio Pro",
    category: "Portfolio",
    image: "https://i.ibb.co/G49JhPm4/image.png",
    description: "Modern portfolio template for creative professionals with customizable sections, mobile responsiveness, and SEO optimization.",
    clientName: "Hardy",
    link: "https://hardy-gilt.vercel.app"
  },
  {
    id: 8,
    title: "Business Plus",
    category: "Web Development",
    image: "https://i.ibb.co/gbPpyNxb/image.png",
    description: "Professional business website featuring contact forms, analytics integration, and comprehensive product showcase.",
    clientName: "All Is Well",
    link: "https://alliswell-lac.vercel.app/"
  },
  {
    id: 9,
    title: "Final Year Project",
    category: "E-Commerce",
    image: "https://i.ibb.co/d4MG1TTd/image.png",
    description: "Comprehensive project solution for computer science students with shopping cart, payment integration, and inventory management.",
    clientName: "LaLiga Analytics",
    link: "https://laliga-analytics.vercel.app/"
  },
];
const Portfolio: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <section id="portfolio" className={`relative py-20 ${
      isDarkMode ? 'bg-gradient-to-b from-[#0d1033] to-[#070720]' : 'bg-gradient-to-b from-gray-100 to-white'
    } overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <div className={`absolute bottom-0 left-0 w-full h-64 ${
          isDarkMode ? 'bg-gradient-to-t from-blue-900/5' : 'bg-gradient-to-t from-blue-100/50'
        } to-transparent`}></div>
        <div className={`absolute top-1/4 right-1/4 w-64 h-64 rounded-full ${
          isDarkMode ? 'bg-blue-900/5' : 'bg-blue-100/50'
        } filter blur-3xl`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`inline-block text-3xl md:text-4xl font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          } mb-3 font-[Poppins] relative`}>
            Our <span className="text-blue-400">Portfolio</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent"></span>
          </h2>
          <p className={`max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          } text-lg`}>
            Explore our collection of innovative projects that demonstrate our expertise and creative approach to solving complex challenges.
          </p>
        </div>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, EffectCoverflow]}
          className="w-full py-10"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <div className={`${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-[#121330] to-[#0a0a1a]' 
                    : 'bg-white'
                } rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 h-full`}>
                  <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-64 transition-all duration-700 transform group-hover:scale-110"
                    />
                    
                    <div className={`absolute inset-0 ${
                      isDarkMode 
                        ? 'bg-gradient-to-t from-black via-black/50 to-transparent' 
                        : 'bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent'
                    } opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6`}>
                      <span className="text-blue-400 text-sm font-medium mb-2">{project.category}</span>
                      <h3 className="text-xl font-bold text-white mb-2 font-[Poppins]">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                      
                      {project.clientName && (
                        <p className="text-gray-400 text-sm mb-2">Client: <span className="text-gray-300">{project.clientName}</span></p>
                      )}
                      
                      {project.link && (
                        <a 
                          href={project.link} 
                          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                        >
                          View Project <ExternalLink className="ml-1 w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;