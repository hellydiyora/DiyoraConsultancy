import { NavLink } from 'react-router-dom';
import { Briefcase, Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <Briefcase className="mr-2" size={24} />
              <span className="font-serif text-2xl font-semibold">Diyora Consultancy</span>
            </div>
            <p className="text-secondary-dark mb-6">
              Providing expert consultation for all your loan needs. We connect you with the best financial solutions tailored to your requirements.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/nodiyora/" className="text-white hover:text-accent-light transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-light transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Reviews', 'Achievements', 'Contact'].map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-secondary-dark hover:text-white transition-colors"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="/services" className="text-secondary-dark hover:text-white transition-colors">Education Loan</a></li>
              <li><a href="/services" className="text-secondary-dark hover:text-white transition-colors">Mortgage Loan</a></li>
              <li><a href="/services" className="text-secondary-dark hover:text-white transition-colors">Home Loan</a></li>
              <li><a href="/services" className="text-secondary-dark hover:text-white transition-colors">Business Loan</a></li>
              <li><a href="/services" className="text-secondary-dark hover:text-white transition-colors">Loan Refinancing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 text-accent-light" size={60} />
                <span className="text-secondary-dark">112, Anupam Arcade BRTS Canal Road, Parvat Patiya, Opp Amazia Amusment Park, Surat, Gujarat 395010, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-accent-light" size={18} />
                <a href="tel:+11234567890" className="text-secondary-dark hover:text-white transition-colors">+91 - 95744 93000</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-accent-light" size={18} />
                <a href="mailto:info@diyoraconsultancy.com" className="text-secondary-dark hover:text-white transition-colors">diyoraconsultancy@gmail.com</a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 mt-1 text-accent-light" size={18} />
                <span className="text-secondary-dark">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-dark/30 mt-12 pt-8 text-center text-secondary-dark">
          <p>&copy; {new Date().getFullYear()} Diyora Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;