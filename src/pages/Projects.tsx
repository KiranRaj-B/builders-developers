import React from 'react';
import { MapPin, Ruler, Building } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Skyline Residences",
      type: "Residential",
      area: "75,000 sq ft",
      location: "Downtown District",
      completion: "2024",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      name: "Tech Hub Plaza",
      type: "Commercial",
      area: "120,000 sq ft",
      location: "Innovation Park",
      completion: "2023",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      name: "Green Valley Homes",
      type: "Residential",
      area: "45,000 sq ft",
      location: "Suburban Area",
      completion: "2024",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      name: "City Center Mall",
      type: "Commercial",
      area: "200,000 sq ft",
      location: "City Center",
      completion: "2025",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      name: "Marina Heights",
      type: "Mixed Use",
      area: "150,000 sq ft",
      location: "Waterfront",
      completion: "2024",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      name: "Smart Office Tower",
      type: "Commercial",
      area: "180,000 sq ft",
      location: "Business Bay",
      completion: "2025",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 7,
      name: "Eco Apartments",
      type: "Residential",
      area: "90,000 sq ft",
      location: "Green Zone",
      completion: "2024",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 8,
      name: "Innovation Campus",
      type: "Educational",
      area: "250,000 sq ft",
      location: "Education City",
      completion: "2025",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 9,
      name: "Healthcare Complex",
      type: "Healthcare",
      area: "160,000 sq ft",
      location: "Medical District",
      completion: "2025",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80&w=2000"
            alt="Projects Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl md:text-2xl">Building Tomorrow's Landmarks Today</p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 transition-opacity duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                    <div className="text-white text-center p-4">
                      <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-center space-x-2">
                          <Building size={16} />
                          <span>{project.type}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Ruler size={16} />
                          <span>{project.area}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <MapPin size={16} />
                          <span>{project.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-gray-600">Completion: {project.completion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;