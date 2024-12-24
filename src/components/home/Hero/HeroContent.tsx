import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroContent() {
  return (
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Transform Your Digital Presence
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Professional websites tailored for your success. From stunning portfolios to business solutions,
        we craft the perfect digital experience for you.
      </p>
      <div className="mt-10 flex items-center gap-x-6">
        <a
          href="#services"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center gap-2"
        >
          Explore Services <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}