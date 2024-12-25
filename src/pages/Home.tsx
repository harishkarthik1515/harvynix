import React, { useRef } from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import FeaturedProducts from '../components/home/FeaturedProducts';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

export default function Home() {
  const servicesRef = useRef(null);  // Create a reference for the Services section

  // Function to scroll to the Services section
  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero scrollToServices={scrollToServices} />
      <Services ref={servicesRef} /> {/* Pass the ref to Services component */}
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
}
