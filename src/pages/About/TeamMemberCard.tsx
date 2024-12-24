import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import { TeamMember } from './types';

export default function TeamMemberCard({ name, role, image, linkedin, twitter }: TeamMember) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-gray-600 mb-4">{role}</p>
        <div className="flex space-x-4">
          {linkedin && (
            <a href={linkedin} className="text-gray-400 hover:text-indigo-600">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {twitter && (
            <a href={twitter} className="text-gray-400 hover:text-indigo-600">
              <Twitter className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}