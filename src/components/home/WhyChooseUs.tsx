import React from 'react';
import { Shield, Clock, Sparkles, Users } from 'lucide-react';

const features = [
  {
    name: 'Quality Assurance',
    description: 'Every template and project undergoes rigorous testing for optimal performance.',
    icon: Shield
  },
  {
    name: 'Quick Delivery',
    description: 'Get your website up and running in no time with our streamlined process.',
    icon: Clock
  },
  {
    name: 'Custom Solutions',
    description: 'Tailored solutions to match your unique requirements and brand identity.',
    icon: Sparkles
  },
  {
    name: 'Expert Support',
    description: '24/7 support from our team of experienced developers and designers.',
    icon: Users
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-600">
            We deliver excellence in every aspect of our service
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="text-center">
              <div className="mx-auto h-12 w-12 text-indigo-600">
                <feature.icon className="h-12 w-12" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}