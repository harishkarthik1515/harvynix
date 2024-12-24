import React, { useState, useEffect } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    console.log('Signing up with:', email, password);
  };

  // Background color animation effect
  const [bgColor, setBgColor] = useState('#1a202c'); // Dark background color

  useEffect(() => {
    const colors = ['#1a202c', '#2d3748', '#4a5568']; // Dark shades
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      setBgColor(colors[currentIndex]);
      currentIndex = (currentIndex + 1) % colors.length;
    }, 3000); // Change color every 3 seconds
    
    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  // Generate sparkling and shooting stars
  const [stars, setStars] = useState<any[]>([]);
  const [shootingStars, setShootingStars] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      createStar();
    }, 200); // Add new sparkling star every 200ms

    const shootingStarInterval = setInterval(() => {
      createShootingStar();
    }, 3000); // Add new shooting star every 3 seconds

    return () => {
      clearInterval(interval);
      clearInterval(shootingStarInterval);
    }; // Cleanup the intervals on unmount
  }, []);

  const createStar = () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = Math.random() * 3 + 1;
    const duration = Math.random() * 1 + 0.5;

    setStars((prevStars) => [
      ...prevStars,
      { x, y, size, duration },
    ]);
  };

  const createShootingStar = () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight / 2; // Start from upper half
    const size = Math.random() * 4 + 5; // Larger size for shooting star
    const speed = Math.random() * 1 + 0.5; // Speed of shooting star
    const directionX = Math.random() > 0.5 ? 1 : -1; // Random direction

    setShootingStars((prevStars) => [
      ...prevStars,
      { x, y, size, speed, directionX },
    ]);
  };

  return (
    <div
      className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundColor: bgColor, // Dark background
        transition: 'background-color 2s ease', // Smooth transition for color change
        pointerEvents: 'none', // Ensure animations can still run when hovering over the form
      }}
    >
      {/* Sign Up Form */}
      <div
        className="w-full max-w-md space-y-8 shadow-2xl rounded-3xl p-12 mx-auto z-10 relative"
        style={{
          minHeight: '50vh', // Increased form height
          width: '80%', // Reduced form width
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background with opacity
          pointerEvents: 'auto', // Allow interaction with form elements
        }}
      >
        <div className="text-center">
          <h2 className="mt-6 text-4xl font-extrabold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              sign in to your account
            </a>
          </p>
        </div>

        <form className="mt-12 space-y-8" onSubmit={handleSubmit} action="#" method="POST">
          <div className="rounded-md shadow-sm space-y-px">
            <div className="mb-6">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Already have an account? Sign in
              </a>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>

          {/* "Sign up with" Dropdown */}
          <div className="relative mt-8">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="group relative w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up with
            </button>

            {showDropdown && (
              <div className="absolute w-full mt-2 bg-white shadow-lg rounded-md z-10">
                <button
                  className="w-full flex justify-start items-center py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => console.log('Google signup clicked')}
                >
                  <span className="mr-2">🌐</span> Google
                </button>
                <button
                  className="w-full flex justify-start items-center py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => console.log('GitHub signup clicked')}
                >
                  <span className="mr-2">🐙</span> GitHub
                </button>
                <button
                  className="w-full flex justify-start items-center py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => console.log('LinkedIn signup clicked')}
                >
                  <span className="mr-2">🔗</span> LinkedIn
                </button>
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Blinking stars effect */}
      {stars.map((star, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: star.y + 'px',
            left: star.x + 'px',
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            backgroundColor: 'white',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
            pointerEvents: 'none', // Prevent interaction with stars
            animation: `blink ${star.duration}s infinite alternate`,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: star.y + 'px',
            left: star.x + 'px',
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: 'white',
            borderRadius: '50%',
            boxShadow: '0 0 20px rgba(255, 255, 255, 1)',
            pointerEvents: 'none',
            animation: `shoot ${star.speed}s linear infinite`,
            animationDelay: `${Math.random() * 3}s`,
            transform: `translateX(${star.directionX * 100}px)`, // Move in random direction
          }}
        />
      ))}

      {/* CSS for animations */}
      <style>
        {`
          @keyframes blink {
            0% {
              opacity: 0.5;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes shoot {
            0% {
              transform: translateX(0) translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateX(1000px) translateY(500px);
              opacity: 0;
            }
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .w-full.max-w-md {
              width: 90%;
            }
            .p-12 {
              padding: 6%;
            }
          }

          @media (max-width: 768px) {
            .w-full.max-w-md {
              width: 100%;
            }
            .p-12 {
              padding: 4%;
            }
            .text-4xl {
              font-size: 2.5rem;
            }
            .mt-6 {
              margin-top: 2rem;
            }
          }

          @media (max-width: 480px) {
            .w-full.max-w-md {
              width: 100%;
            }
            .p-12 {
              padding: 4%;
            }
            .text-4xl {
              font-size: 2rem;
            }
            .mt-6 {
              margin-top: 1.5rem;
            }
          }
        `}
      </style>
    </div>
  );
}
