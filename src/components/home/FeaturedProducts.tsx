import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: 'Portfolio Pro',
    description: 'Modern portfolio template for creative professionals',
    image: 'https://i.ibb.co/G49JhPm4/image.png',
    category: 'Portfolio'
  },
  {
    id: 2,
    title: 'Business Plus',
    description: 'Professional business website with advanced features',
    image: 'https://i.ibb.co/gbPpyNxb/image.png',
    category: 'Business'
  },
  {
    id: 3,
    title: 'Final Year Project Hub',
    description: 'Comprehensive project solutions for computer science students',
    image: 'https://i.ibb.co/d4MG1TTd/image.png',
    category: 'Projects'
  }
];

export default function FeaturedProducts() {
  const navigate = useNavigate();

  const handleViewAllProducts = () => {
    navigate('/products');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-bold leading-7 text-indigo-600 sm:text-4xl">Featured Products</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Discover our most popular website templates</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
                  <span className="text-lg font-bold text-indigo-600">{product.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full">
                  {product.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={handleViewAllProducts}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
