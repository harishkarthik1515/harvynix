import React from 'react';

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  category: string;
}

export default function ProductCard({ title, description, image, price, category }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <span className="text-lg font-bold text-indigo-600">{price}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full">
          {category}
        </span>
      </div>
    </div>
  );
}