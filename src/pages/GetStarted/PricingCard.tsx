import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PricingPlan } from './types';
import { useNavigate } from 'react-router-dom';

export default function PricingCard({ name, price, features, isPopular }: PricingPlan) {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login'); // Navigate to /login page when button is clicked
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`rounded-lg shadow-lg overflow-hidden ${
        isPopular ? 'border-2 border-indigo-600' : 'border border-gray-200'
      }`}
    >
      {isPopular && (
        <div className="bg-indigo-600 text-white text-center py-2 text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6 bg-white">
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        <p className="mt-4">
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-600">/month</span>
        </p>
        <ul className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-indigo-600 mt-1" />
              <span className="ml-3 text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={handleGetStarted}
          className={`mt-8 w-full py-3 px-4 rounded-md font-medium ${
            isPopular
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          Get Started
        </button>
      </div>
    </motion.div>
  );
}
