import React from 'react';
import { Target, Award, Users } from 'lucide-react';

export default function MissionSection() {
  return (
    <div className="mb-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          We are passionate about creating exceptional digital experiences that help businesses and individuals thrive in the modern world.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <Target className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">To empower businesses with innovative digital solutions.</p>
          </div>
          <div className="text-center">
            <Award className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">Excellence, innovation, and customer satisfaction.</p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p className="text-gray-600">Dedicated professionals with diverse expertise.</p>
          </div>
        </div>
      </div>
    </div>
  );
}