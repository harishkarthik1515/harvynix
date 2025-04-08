import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
      <div className="space-y-6">
        <div className="flex items-start">
          <Mail className="h-6 w-6 text-indigo-600 mt-1" />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Email</h3>
            <p className="text-gray-600">harvynix@gmail.com</p>
          </div>
        </div>
        <div className="flex items-start">
          <Phone className="h-6 w-6 text-indigo-600 mt-1" />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Phone</h3>
            <p className="text-gray-600">+91 9884995814</p>
          </div>
        </div>
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Address</h3>
            <p className="text-gray-600">Perumbakkam,chennai,India.</p>
          </div>
        </div>
      </div>
    </div>
  );
}