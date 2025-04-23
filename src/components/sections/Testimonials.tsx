import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVision Inc.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    content: "Harvynix transformed our digital presence completely. Their innovative solutions and attention to detail exceeded our expectations.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Global Solutions",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    content: "Working with Harvynix was a game-changer for our business. Their team's expertise and dedication delivered exceptional results.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateLab",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    content: "The level of creativity and technical excellence Harvynix brings to each project is remarkable. They're truly industry leaders.",
    rating: 5
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO",
    company: "Digital Dynamics",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    content: "The team at Harvynix consistently delivers outstanding results. Their technical expertise and innovative approach set them apart.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-[#070720]' : 'bg-gray-50'} relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-0 left-0 w-full h-64 ${
          isDarkMode ? 'bg-gradient-to-b from-blue-900/5' : 'bg-gradient-to-b from-blue-100/50'
        } to-transparent`}></div>
        <div className={`absolute bottom-0 right-0 w-64 h-64 rounded-full ${
          isDarkMode ? 'bg-blue-900/5' : 'bg-blue-100/50'
        } filter blur-3xl`}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`inline-block text-3xl md:text-4xl font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          } mb-3 font-[Poppins] relative`}>
            Client <span className="text-blue-400">Testimonials</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent"></span>
          </h2>
          <p className={`max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          } text-lg`}>
            Hear what our clients have to say about their experience working with us.
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
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
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
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div
                className={`${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-[#121330] to-[#0a0a1a]' 
                    : 'bg-white'
                } rounded-xl p-6 relative group h-full shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 cursor-pointer`}
              >
                {/* Animated glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-purple-500/0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <div className="absolute -top-4 -right-4 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <Quote className={`w-8 h-8 ${
                    isDarkMode ? 'text-blue-400/20 group-hover:text-blue-400/40' : 'text-blue-200 group-hover:text-blue-300'
                  } transform rotate-180 transition-colors duration-300`} />
                </div>

                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-transparent group-hover:border-blue-400 transition-all duration-300">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className={`font-bold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    } group-hover:text-blue-500 transition-colors duration-300`}>{testimonial.name}</h3>
                    <p className="text-blue-400 text-sm group-hover:text-blue-500 transition-colors duration-300">{testimonial.role}</p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    } group-hover:font-medium transition-all duration-300`}>{testimonial.company}</p>
                  </div>
                </div>

                <p className={`mb-6 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                } group-hover:text-current transition-colors duration-300`}>{testimonial.content}</p>

                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current transform transition-transform duration-300 group-hover:scale-110 group-hover:text-yellow-500"
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;