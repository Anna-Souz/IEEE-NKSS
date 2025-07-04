
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/ieee-logo.png" 
                alt="IEEE Logo" 
                className="h-8 w-auto filter brightness-0 invert"
              />
              <div>
                <h3 className="text-lg font-bold">IEEE NKSS</h3>
                <p className="text-sm text-gray-400">North Karnataka</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advancing technology for humanity through student engagement, 
              professional development, and technical innovation in North Karnataka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/executive" className="text-gray-400 hover:text-white transition-colors">Executive Committee</a></li>
              <li><a href="/events" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          
          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold mb-2">IEEE Membership</h5>
              <p className="text-gray-400 text-sm">
                Join the world's largest technical professional organization
              </p>
              <a 
                href="https://www.ieee.org/membership/join/index.html" 
                className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm transition-colors"
              >
                Join IEEE
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 IEEE North Karnataka Student Section. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
