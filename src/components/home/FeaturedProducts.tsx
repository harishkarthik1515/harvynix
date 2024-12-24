import React from 'react';

const products = [
  {
    id: 1,
    title: 'Portfolio Pro',
    description: 'Modern portfolio template for creative professionals',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    price: '$99',
    category: 'Portfolio'
  },
  {
    id: 2,
    title: 'Business Plus',
    description: 'Professional business website with advanced features',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
    price: '$149',
    category: 'Business'
  },
  {
    id: 3,
    title: 'E-Commerce Starter',
    description: 'Complete e-commerce solution for small businesses',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    price: '$199',
    category: 'E-Commerce'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <p className="mt-4 text-xl text-gray-600">Discover our most popular website templates</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
          <a
            href="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}