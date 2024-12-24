import React from 'react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
}

export default function TestimonialCard({ content, author, role }: TestimonialCardProps) {
  return (
    <div className="rounded-2xl bg-gray-50 p-8 text-sm leading-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <blockquote className="text-gray-900">
        <p className="text-sm sm:text-sm md:text-base">{`"${content}"`}</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-x-4">
        <div>
          <div className="font-semibold text-gray-900 text-sm sm:text-sm md:text-base">{author}</div>
          <div className="text-gray-600 text-sm sm:text-sm md:text-base">{role}</div>
        </div>
      </figcaption>
    </div>
  );
}
