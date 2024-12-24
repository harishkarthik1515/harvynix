import React from 'react';
import { motion, useAnimation } from 'framer-motion';

interface FloatingIconProps {
  icon: React.ReactNode;
  dimensions: { width: number; height: number };
  index: number;
}

export default function FloatingIcon({ icon, dimensions, index }: FloatingIconProps) {
  const controls = useAnimation();
  const iconRef = React.useRef<HTMLDivElement>(null);

  const randomPosition = () => ({
    x: Math.random() * dimensions.width,
    y: Math.random() * dimensions.height
  });

  const basePosition = randomPosition();

  React.useEffect(() => {
    const moveIcon = async () => {
      while (true) {
        const newPosition = randomPosition();
        await controls.start({
          x: newPosition.x,
          y: newPosition.y,
          transition: {
            duration: 10 + Math.random() * 20,
            ease: "linear"
          }
        });
      }
    };

    moveIcon();
  }, [controls, dimensions]);

  return (
    <motion.div
      ref={iconRef}
      className="absolute"
      initial={basePosition}
      animate={controls}
      whileHover={{ scale: 1.2 }}
      style={{
        filter: 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.5))',
      }}
    >
      <div className="text-indigo-600 opacity-40 hover:opacity-80 transition-opacity duration-300">
        {icon}
      </div>
    </motion.div>
  );
}