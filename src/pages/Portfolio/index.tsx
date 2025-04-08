import React from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from './PortfolioCard';
import { portfolioItems } from './portfolioData';

export default function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Portfolios</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}