import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=harvynix@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailLink, '_blank');
  };

  return (
    <div className="w-full max-w-xl lg:max-w-4xl xl:max-w-5xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg border border-gray-200 transition-all duration-300">
      <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
          <textarea
            id="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200"
        >
          Send Message
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}
