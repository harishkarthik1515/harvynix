import React from 'react';
import { Briefcase, Code, Layout, FileCode } from 'lucide-react';

const services = [
  {
    title: 'Portfolio Websites',
    description: 'Showcase your work with stunning, professionally designed portfolio websites.',
    icon: Briefcase,
  },
  {
    title: 'Final-Year CS Projects',
    description: 'Complete project solutions with documentation for computer science students.',
    icon: Code,
  },
  {
    title: 'Static Websites',
    description: 'Fast, reliable, and beautiful static websites for personal and creative projects.',
    icon: Layout,
  },
  {
    title: 'Business Websites',
    description: 'Professional business websites with customizable content and modern features.',
    icon: FileCode,
  },
];

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
              <div key={service.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}