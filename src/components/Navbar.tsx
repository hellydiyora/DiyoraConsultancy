import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center" onClick={closeMenu}>
          <Briefcase 
            className={`mr-2 transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`} 
            size={28} 
          />
          <span 
            className={`font-serif text-2xl font-semibold transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            Diyora Consultancy
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Services', 'Reviews', 'Achievements', 'Contact'].map((item) => (
              <li key={item}>
                <NavLink
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={({ isActive }) => `
                    font-medium transition-colors hover:text-primary
                    ${isScrolled 
                      ? (isActive ? 'text-primary' : 'text-gray-700') 
                      : (isActive ? 'text-white font-semibold' : 'text-white')}
                  `}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={isScrolled ? 'text-primary' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-primary' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`
          fixed top-0 right-0 h-full w-full md:hidden bg-white transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="focus:outline-none" title="Close menu">
            <X className="text-primary" size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 pt-10">
          {['Home', 'About', 'Services', 'Reviews', 'Achievements', 'Contact'].map((item) => (
            <li key={item} className="w-full text-center">
              <NavLink
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) => `
                  block py-2 text-lg font-medium transition-colors
                  ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}
                `}
                onClick={closeMenu}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;