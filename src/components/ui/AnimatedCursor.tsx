import React, { useState, useEffect } from 'react';

const AnimatedCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseenter', () => setHidden(false));
    window.addEventListener('mouseleave', () => setHidden(true));
    
    // Wait for the DOM to be fully loaded
    if (document.readyState === 'complete') {
      handleLinkHoverEvents();
    } else {
      window.addEventListener('load', handleLinkHoverEvents);
    }

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseenter', () => setHidden(false));
      window.removeEventListener('mouseleave', () => setHidden(true));
      window.removeEventListener('load', handleLinkHoverEvents);
    };
  }, []);

  return (
    <>
      <div 
        className={`fixed rounded-full pointer-events-none transition-transform duration-100 z-50 mix-blend-difference ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-75' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: linkHovered ? '60px' : '24px',
          height: linkHovered ? '60px' : '24px',
          backgroundColor: '#ffffff',
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div 
        className={`fixed rounded-full pointer-events-none transition-transform duration-300 z-50 ${
          hidden ? 'opacity-0' : 'opacity-70'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '8px',
          height: '8px',
          backgroundColor: '#ffffff',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  );
};

export default AnimatedCursor;