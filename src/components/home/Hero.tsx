import React, { useState } from 'react';
import { ArrowRight, Code, Layout, Briefcase, FileCode } from 'lucide-react';

export default function Hero() {
  const [trails, setTrails] = useState([]);

  const handleMouseMove = (e) => {
    const newTrail = {
      x: e.clientX,
      y: e.clientY,
      id: Math.random(),
    };
    setTrails((prevTrails) => [...prevTrails, newTrail].slice(-20));
  };

  return (
    <div 
      className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300" 
      onMouseMove={handleMouseMove}
    >
      <div className="mx-auto w-11/12 lg:w-10/12 h-[90vh] px-4 sm:px-16 py-20 sm:py-40 lg:px-24">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 sm:text-7xl drop-shadow-lg">
            Transform Your Digital<br />Presence
          </h1>
          <p className="mt-6 sm:mt-10 text-lg sm:text-xl lg:text-2xl leading-8 text-gray-700 sm:text-2xl">
            Professional websites tailored for your success. From stunning portfolios to business solutions,
            we craft the perfect digital experience for you.
          </p>
          <div className="mt-8 sm:mt-12 flex items-center justify-center gap-x-6">
            <a
              href="#services"
              className="text-lg sm:text-xl rounded-full bg-indigo-600 px-8 py-4 sm:px-10 sm:py-5 text-white font-medium shadow-lg hover:shadow-indigo-500/50 transition-all transform hover:-translate-y-1 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-600 flex items-center gap-4"
            >
              Explore Services <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-16 sm:top-24 left-1/4 animate-ping text-indigo-600 opacity-60">
          <Code className="h-10 w-10 sm:h-12 sm:w-12" />
        </div>
        <div className="absolute top-1/3 right-4 sm:right-16 animate-bounce text-indigo-500 opacity-60">
          <Layout className="h-10 w-10 sm:h-12 sm:w-12" />
        </div>
        <div className="absolute bottom-1/4 left-1/8 animate-bounce text-indigo-700 opacity-60">
          <Briefcase className="h-10 w-10 sm:h-12 sm:w-12" />
        </div>
        <div className="absolute bottom-10 right-1/4 animate-ping text-indigo-400 opacity-60">
          <FileCode className="h-10 w-10 sm:h-12 sm:w-12" />
        </div>
      </div>

      {/* Background Gradient and Blur */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
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
      `}</style>
    </div>
  );
}
