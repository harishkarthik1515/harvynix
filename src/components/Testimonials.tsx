import React from 'react';

const testimonials = [
  {
    content: "The portfolio website they created for me perfectly showcases my work. It's professional, modern, and exactly what I needed.",
    author: "Sarah Johnson",
    role: "Freelance Designer"
  },
  {
    content: "Their final year project solution saved me countless hours. The documentation was thorough and implementation was smooth.",
    author: "Mike Chen",
    role: "CS Graduate"
  },
  {
    content: "Our business website looks amazing and was delivered on time. The customization options are exactly what we needed.",
    author: "David Wilson",
    role: "Small Business Owner"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                <blockquote className="text-gray-900">
                  <p>{`"${testimonial.content}"`}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </figcaption>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}