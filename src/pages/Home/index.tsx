import React from 'react';
import Hero from '../../components/home/Hero';
import Services from '../../components/home/Services';
import FeaturedProducts from '../../components/home/FeaturedProducts';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import Testimonials from '../../components/home/Testimonials';
import CallToAction from '../../components/home/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
}