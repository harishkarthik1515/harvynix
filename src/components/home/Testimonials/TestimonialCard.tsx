import React from 'react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
}

export default function TestimonialCard({ content, author, role }: TestimonialCardProps) {
  return (
    <div className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
      <blockquote className="text-gray-900">
        <p>{`"${content}"`}</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-x-4">
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-gray-600">{role}</div>
        </div>
      </figcaption>
    </div>
  );
}