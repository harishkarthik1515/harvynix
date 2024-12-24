import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  // Array of emojis to use
  const iconPositions = [
    '💻', '🌐', '🖥️', '📦', '🔧', '🌟', '⚡', '🚀', '🔑'
  ];

  // Initial state for emojis and their positions
  const [emojis, setEmojis] = useState([]);

  const navigate = useNavigate(); // Use useNavigate

  useEffect(() => {
    const generateRandomEmojis = () => {
      return iconPositions.map((icon) => ({
        icon,
        top: Math.random() * 100, // Random top position in percentage
        left: Math.random() * 100, // Random left position in percentage
        directionTop: Math.random() < 0.5 ? 1 : -1, // Random direction for vertical movement
        directionLeft: Math.random() < 0.5 ? 1 : -1, // Random direction for horizontal movement
        speed: Math.random() * 3 + 1, // Speed between 1s and 4s
      }));
    };

    setEmojis(generateRandomEmojis()); // Generate random initial positions for emojis
  }, []);

  // Function to update emoji positions on every animation frame
  const moveEmojis = () => {
    setEmojis((prevEmojis) =>
      prevEmojis.map((emoji) => {
        let { top, left, directionTop, directionLeft, speed } = emoji;

        // Move the emoji
        top += directionTop * speed;
        left += directionLeft * speed;

        // Boundary check and reverse direction if needed
        if (top <= 0 || top >= 100) directionTop *= -1;
        if (left <= 0 || left >= 100) directionLeft *= -1;

        return { ...emoji, top, left, directionTop, directionLeft };
      })
    );
  };

  // Use `setInterval` to move emojis every 60ms
  useEffect(() => {
    const interval = setInterval(moveEmojis, 60); // 60ms interval
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="relative bg-gradient-to-br from-indigo-600 to-pink-600 min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating Emojis with Random Movement */}
      {emojis.map((emoji, index) => (
        <div
          key={index}
          className="absolute text-4xl"
          style={{
            top: `${emoji.top}%`,
            left: `${emoji.left}%`,
            transition: 'top 0.1s, left 0.1s', // Smooth transition for movement
          }}
        >
          {emoji.icon}
        </div>
      ))}

      {/* Login Form */}
      <div
        className="w-full max-w-md space-y-8 bg-white shadow-2xl rounded-3xl p-8 mx-auto z-10 relative"
        style={{
          minHeight: '60vh', // Make the form take up at least 80% of the screen height
        }}
      >
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              start your free trial
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
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>

          {/* "Sign in with" Dropdown */}
          <div className="relative mt-8">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="group relative w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in with
            </button>

            {showDropdown && (
              <div className="absolute w-full mt-2 bg-white shadow-lg rounded-md z-10">
                <button
                  className="w-full flex justify-start items-center py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => console.log('Google login clicked')}
                >
                  <span className="mr-2">🌐</span> Google
                </button>
                <button
                  className="w-full flex justify-start items-center py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => console.log('GitHub login clicked')}
                >
                  <span className="mr-2">🐙</span> GitHub
                </button>
                <button
                  className="w-full flex justify-start items-center py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => console.log('LinkedIn login clicked')}
                >
                  <span className="mr-2">🔗</span> LinkedIn
                </button>
              </div>
            )}
          </div>

          {/* Sign Up Button Inside the Form */}
          <div className="mt-8 text-center">
            <button
              type="button"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => navigate('/signup')} // Navigate to signup page
            >
              Don't have an account?{' '}
              <span className="font-semibold">Sign up</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
