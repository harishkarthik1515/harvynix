import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

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
    <section id="testimonials"className={`py-20 ${isDarkMode ? 'bg-[#070720]' : 'bg-gray-50'} relative overflow-hidden`}>
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
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div
                className={`${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-[#121330] to-[#0a0a1a]' 
                    : 'bg-white'
                } rounded-xl p-6 relative h-full shadow-md`}
              >
                <div className="absolute -top-4 -right-4">
                  <Quote className={`w-8 h-8 ${
                    isDarkMode ? 'text-blue-400/20' : 'text-blue-200'
                  } transform rotate-180`} />
                </div>

                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-transparent">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className={`font-bold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{testimonial.name}</h3>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{testimonial.company}</p>
                  </div>
                </div>

                <p className={`mb-6 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{testimonial.content}</p>

                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
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