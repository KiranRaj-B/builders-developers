
import { Building, Users, CheckCircle, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <CheckCircle size={40} className="text-black mb-4" />,
      value: "100%",
      label: "Quality Assurance",
      description: "Commitment to excellence in every project"
    },
    {
      icon: <Users size={40} className="text-black mb-8" />,
      value: "1000+",
      label: "Satisfied Clients",
      description: "Trust and satisfaction guaranteed"
    },
    {
      icon: <Building size={40} className="text-black mb-4" />,
      value: "200+",
      label: "Completed Projects",
      description: "Successful project deliveries"
    },
    {
      icon: <Clock size={40} className="text-black mb-4" />,
      value: "20+",
      label: "Years Experience",
      description: "Industry expertise and knowledge"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000"
            alt="About Us Hero"
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl">Building Excellence Since 2005</p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2005, Builders & Developers has established itself as a leading force in the construction and development industry. Our journey began with a simple yet powerful vision: to transform spaces into lasting landmarks of excellence.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we stand proud as a company that has not just built structures, but has created communities, shaped skylines, and influenced the very way people live and work.
              </p>
              <p className="text-gray-600">
                Our team of experienced professionals brings together expertise across architecture, engineering, and construction management, ensuring that every project we undertake meets the highest standards of quality and innovation.
              </p>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1556156653-e5a7c69cc263?auto=format&fit=crop&q=80&w=800"
                alt="Our Team"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and innovative construction company, setting new standards in building excellence and sustainable development while creating lasting value for our clients and communities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional construction and development solutions through innovation, quality craftsmanship, and unwavering commitment to client satisfaction, while maintaining the highest standards of safety and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Quick Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-10 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-16 h-10 rounded-full">
                    {stat.icon}
                  </div>
                  </div>
                  <div className="text-4xl font-bold text-black mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;