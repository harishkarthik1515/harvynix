import React from 'react';
import { Briefcase, Code, Layout, FileCode } from 'lucide-react';

const services = [
  {
    title: 'Portfolio Websites',
    description: 'Showcase your work with stunning, professionally designed portfolio websites.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Final-Year CS Projects',
    description: 'Complete project solutions with documentation for computer science students.',
    icon: Code,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=8000',
  },
  {
    title: 'Static Websites',
    description: 'Fast, reliable, and beautiful static websites for personal and creative projects.',
    icon: Layout,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Business Websites',
    description: 'Professional business websites with customizable content and modern features.',
    icon: FileCode,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Services() {
  return (
    <div id="services" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-bold leading-7 text-indigo-600 sm:text-4xl">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for your digital success
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From personal portfolios to business solutions, we provide comprehensive web development
            services tailored to your needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden bg-white shadow-lg"
              >
                <div className="w-full h-32 overflow-hidden rounded-t-lg relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <service.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span className="text-xl font-bold text-gray-900">{service.title}</span>
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-gray-600">{service.description}</dd>
                  <p className="mt-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-800">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
