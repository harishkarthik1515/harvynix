import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from './serviceData';

export default function Services() {
  return (
    <div id="services" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
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
              <ServiceCard key={service.title} {...service} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}