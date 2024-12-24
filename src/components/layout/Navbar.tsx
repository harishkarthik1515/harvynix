import React from 'react';
import { Menu, X, ShoppingCart, Home } from 'lucide-react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../contexts/CartContext';
import logo from "../images/logo.png";


export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { items } = useCart();

  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <RouterLink
      to={to}
      className={`relative px-3 py-2 text-sm font-medium transition-colors ${
        isActive(to)
          ? 'text-indigo-600'
          : 'text-gray-500 hover:text-gray-900'
      }`}
    >
      {children}
      {isActive(to) && (
        <motion.div
          layoutId="underline"
          className="absolute left-0 right-0 h-0.5 bg-indigo-600 bottom-0"
        />
      )}
    </RouterLink>
  );

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <RouterLink to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
              <span className="ml-2 text-xl font-bold text-indigo-600">Harvynix</span>
            </RouterLink>
            
            <div className="hidden sm:flex space-x-8">
              <NavLink to="/">
                <span className="flex items-center gap-2">
                  Home
                </span>
              </NavLink>
              <NavLink to="/products">Products</NavLink>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/projects">CS Projects</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <RouterLink to="/cart" className="text-gray-600 hover:text-gray-900 relative">
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </RouterLink>
            <RouterLink
              to="/get-started"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </RouterLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <RouterLink to="/cart" className="text-gray-600 hover:text-gray-900 relative mr-4">
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </RouterLink>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="sm:hidden"
        >
          <div className="pt-2 pb-3 space-y-1">
            <RouterLink
              to="/"
              className="flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              
              Home
            </RouterLink>
            <RouterLink
              to="/products"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Products
            </RouterLink>
            <RouterLink
              to="/portfolio"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Portfolio
            </RouterLink>
            <RouterLink
              to="/projects"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              CS Projects
            </RouterLink>
            <RouterLink
              to="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About
            </RouterLink>
            <RouterLink
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Contact
            </RouterLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
