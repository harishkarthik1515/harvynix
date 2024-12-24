import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  mobile?: boolean;
}

export function Link({ href, children, className = '', mobile = false }: LinkProps) {
  const baseStyles = mobile
    ? 'block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
    : 'inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900';

  return (
    <a href={href} className={`${baseStyles} ${className}`}>
      {children}
    </a>
  );
}