import React from 'react';
import { motion } from 'framer-motion';
import PricingSection from './PricingSection';
import { pricingPlans } from './pricingData';

export default function GetStarted() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Get Started</h1>
        <PricingSection plans={pricingPlans} />
      </div>
    </motion.div>
  );
}