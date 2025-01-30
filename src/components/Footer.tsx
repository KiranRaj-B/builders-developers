
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-black px-6 py-2 rounded font-medium hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* About Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
             Builders & Developers are the leading construction and development company committed to creating exceptional spaces that inspire and endure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Builders & Developers</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1" size={20} />
                <p className="text-gray-400">Builders and Developers, XYZ Area, XYZ District 000000</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <p className="text-gray-400">+91 9611929845</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <p className="text-gray-400">buildersdevelopers@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Builders & Developers. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2">
            Designed and developed by{' '}
            <a
              href="https://kiranrajbadakambi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Kiran Badakambi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;