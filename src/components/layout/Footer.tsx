import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from './Link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Harvynix</h3>
            <p className="text-gray-400">
              Creating beautiful digital experiences for businesses and individuals.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/projects">CS Projects</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                contact@harvynix.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                123 Web Street, Digital City
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-indigo-400"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-indigo-400"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-indigo-400"><Linkedin className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Harvynix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}