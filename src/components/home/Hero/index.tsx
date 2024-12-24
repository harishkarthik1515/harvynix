import React from 'react';
import { motion } from 'framer-motion';
import HeroContent from './HeroContent';
import HeroBackground from './HeroBackground';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
          alt="Hero background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 relative z-10"
      >
        <HeroContent />
      </motion.div>
      <HeroBackground />
    </div>
  );
}