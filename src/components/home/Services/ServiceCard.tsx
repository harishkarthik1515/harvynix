import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="flex flex-col">
      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
        <Icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
        {title}
      </dt>
      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
        <p className="flex-auto">{description}</p>
        <p className="mt-6">
          <a href="#" className="text-sm font-semibold leading-6 text-indigo-600">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </p>
      </dd>
    </div>
  );
}