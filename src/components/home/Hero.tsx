import React, { useState } from 'react';
import { ArrowRight, ArrowDown, Code, Layout, Briefcase, FileCode, Globe, Monitor, Smartphone } from 'lucide-react';

export default function Hero() {
  const [trails, setTrails] = useState([]); // State to track mouse trail effects

  const handleMouseMove = (e: { clientX: any; clientY: any; }): void => {
    const newTrail = {
      x: e.clientX,
      y: e.clientY,
      id: Math.random(),
    };
    setTrails((prevTrails): { x: any; y: any; id: number; }[] => {
      return [...prevTrails, newTrail].slice(-20); // Limit to 20 trails
    });
  };

  function handleExploreClick() {
    // Scroll 30% down the page on button click
    window.scrollTo({
      top: window.innerHeight * 1.0, // 100% of the current viewport height
      behavior: 'smooth',
    });
  }

  return (
    <div 
      className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300" 
      onMouseMove={handleMouseMove}
    >
      <div className="mx-auto w-full h-[93vh] px-8 py-20 sm:py-32 lg:px-16 flex flex-col justify-center items-center">
        <div className="text-center max-w-4xl">
          <h1 
            className="text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 sm:text-6xl drop-shadow-2xl"
            style={{
              textShadow: '2px 4px 6px rgba(0,0,0,0.3)',
            }}
          >
            Transform Your Digital<br />Presence
          </h1>
          <p 
            className="mt-8 text-lg sm:text-xl lg:text-2xl leading-8 text-gray-800 drop-shadow-lg"
            style={{
              lineHeight: '1.75rem',
            }}
          >
            Professional websites tailored for your success. From stunning portfolios to business solutions, we craft the perfect digital experience for you.
          </p>
          <div className="mt-12 flex items-center justify-center gap-x-6 relative z-20">
            <button
              type="button"
              onClick={handleExploreClick}
              className="text-lg sm:text-xl lg:text-lg rounded-full bg-indigo-600 px-8 sm:px-10 lg:px-12 py-4 sm:py-4 lg:py-4 text-white font-medium shadow-lg hover:shadow-indigo-500/50 transition-all transform hover:-translate-y-1 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-600 flex items-center gap-4 sm:gap-5 lg:gap-6"

            >
              Explore Services
              <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-16 left-1/4 animate-ping text-indigo-600 opacity-70">
          <Code className="h-12 w-12" />
        </div>
        <div className="absolute top-1/3 right-16 animate-bounce text-indigo-500 opacity-70">
          <Layout className="h-12 w-12" />
        </div>
        <div className="absolute bottom-1/4 left-1/8 animate-bounce text-indigo-700 opacity-70">
          <Briefcase className="h-12 w-12" />
        </div>
        <div className="absolute bottom-10 right-1/4 animate-ping text-indigo-400 opacity-70">
          <FileCode className="h-12 w-12" />
        </div>
        {/* Additional Floating Elements for Desktop */}
        <div className="hidden lg:block absolute top-10 right-1/3 animate-bounce text-blue-500 opacity-70">
          <Globe className="h-12 w-12" />
        </div>
        <div className="hidden lg:block absolute top-1/2 left-1/3 animate-ping text-green-500 opacity-70">
          <Monitor className="h-12 w-12" />
        </div>
        <div className="hidden lg:block absolute bottom-2/3 right-5/8 animate-bounce text-purple-500 opacity-70">
          <Smartphone className="h-12 w-12" />
        </div>
      </div>

      {/* Background Gradient and Blur */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      {/* Cursor Sparkling Effect */}
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="absolute pointer-events-none"
          style={{
            top: trail.y,
            left: trail.x,
            width: 10 + Math.random() * 5,
            height: 10 + Math.random() * 5,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 70%)',
            boxShadow: '0 0 10px rgba(255,255,255,0.8)',
            transform: 'translate(-50%, -50%)',
            animation: 'sparkle 1s ease-out forwards',
          }}
        />
      ))}

      {/* Additional Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50 pointer-events-none" />

      <style jsx>{`
        @keyframes sparkle {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
        }

        @media (max-width: 640px) {
          .text-7xl {
            font-size: 2.5rem;
          }

          .text-lg {
            font-size: 1rem;
          }

          .mt-12 {
            margin-top: 2rem;
          }

          .gap-x-6 {
            gap: 1.5rem;
          }

          .h-6 {
            height: 24px;
            width: 24px;
          }

          .sm\:text-xl {
            font-size: 1.125rem;
          }

          .sm\:px-12 {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
