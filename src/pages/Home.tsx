import { ArrowRight } from 'lucide-react';

const Home = () => {
  const projects = [
    {
      id: 1,
      name: "Luxury Apartments",
      area: "50,000 sq ft",
      location: "Downtown Area",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      name: "Commercial Complex",
      area: "75,000 sq ft",
      location: "Business District",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      name: "Smart Homes",
      area: "30,000 sq ft",
      location: "Suburban Area",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/hero_image.png"
            alt="Hero"
            className="w-full h-full object-cover"
          />

        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Building Dreams Into Reality</h1>
            <p className="text-xl md:text-2xl mb-8">Excellence in Construction & Development</p>
            <button className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors">
              Explore Projects
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Company</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With over a decade of experience in construction and development, we've built our reputation on quality,
              innovation, and customer satisfaction. Our commitment to excellence drives every project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Latest Projects</h2>
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
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                    <div className="text-white text-center p-4">
                      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                      <p className="mb-1">Area: {project.area}</p>
                      <p>Location: {project.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="inline-flex items-center bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
              View All Projects
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
      See Our Work in Action
    </h2>
    {/* Responsive iframe wrapper */}
    <div className="relative overflow-hidden rounded-lg" style={{ paddingTop: '46.25%' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/nwLQ3s3Fwtk?si=dCG_cfKdXC_U9Uty"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;