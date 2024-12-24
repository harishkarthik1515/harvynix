import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { icons } from './iconData';
import FloatingIcon from './FloatingIcon';

export default function IconCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
    >
      {dimensions.width > 0 && icons.map((Icon, index) => (
        <FloatingIcon
          key={index}
          icon={<Icon className="w-8 h-8" />}
          dimensions={dimensions}
          index={index}
        />
      ))}
    </div>
  );
}