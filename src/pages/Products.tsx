import React from 'react';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">Our Products</h1>
        {/* Add product content here */}
      </div>
    </motion.div>
  );
}