import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

export default function ProductCard({ title, description, price, image, features }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-indigo-600">{price}</span>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
}