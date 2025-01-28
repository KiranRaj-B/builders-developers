import React, { useState } from 'react';
import { Briefcase, MapPin, Mail, Phone } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const positions = [
    {
      title: "Senior Site Engineer",
      type: "Full Time",
      location: "Multiple Locations",
      experience: "5+ years",
      description: "Looking for experienced site engineers to oversee construction projects and ensure quality standards."
    },
    {
      title: "Project Manager",
      type: "Full Time",
      location: "Head Office",
      experience: "8+ years",
      description: "Seeking skilled project managers to lead construction projects from inception to completion."
    },
    {
      title: "Architect",
      type: "Full Time",
      location: "Design Studio",
      experience: "3+ years",
      description: "Join our design team to create innovative and sustainable architectural solutions."
    },
    {
      title: "Construction Supervisor",
      type: "Full Time",
      location: "Multiple Sites",
      experience: "4+ years",
      description: "Supervise construction activities and ensure project timelines are met."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('job_applications')
        .insert([formData]);

      if (error) throw error;

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      setStatus('error');
      setErrorMessage('Failed to submit application. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2000"
            alt="Careers Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl">Build Your Career with BuildersCo</p>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Briefcase className="text-black mr-2" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600"><span className="font-semibold">Type:</span> {position.type}</p>
                  <p className="text-gray-600"><span className="font-semibold">Location:</span> {position.location}</p>
                  <p className="text-gray-600"><span className="font-semibold">Experience:</span> {position.experience}</p>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, position: position.title }));
                    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Apply Now</h2>
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
                  Thank you for your application! We'll review it and get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4">
                      {errorMessage}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                        Position
                      </label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        required
                      >
                        <option value="">Select a position</option>
                        {positions.map((position, index) => (
                          <option key={index} value={position.title}>
                            {position.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Cover Letter
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors ${
                      status === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
                  </button>
                </form>
              )}
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-black" size={20} />
                  <p className="text-gray-600">123 Construction Ave, Building City, BC 12345</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-black" size={20} />
                  <p className="text-gray-600">careers@buildersco.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-black" size={20} />
                  <p className="text-gray-600">+1 234 567 8900</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;