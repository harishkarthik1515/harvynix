import React from 'react';
import { motion } from 'framer-motion';
import { Code, Star } from 'lucide-react';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  difficulty: string;
}

export default function ProjectCard({ title, description, image, technologies, difficulty }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span className="flex items-center text-sm text-yellow-600">
            <Star className="h-4 w-4 mr-1" fill="currentColor" />
            {difficulty}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center justify-center">
          <Code className="h-4 w-4 mr-2" />
          View Project
        </button>
      </div>
    </motion.div>
  );
}