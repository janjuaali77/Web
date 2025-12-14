import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Projects', href: '#projects' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-primary-100">
      {/* Top Bar */}
      <div className="bg-primary-900 text-primary-50 py-2 text-xs md:text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="hidden md:block">Serving Rawalpindi & Islamabad since 1967</p>
          <div className="flex space-x-6">
            <a href="tel:+923315400327" className="flex items-center hover:text-primary-300 transition-colors">
              <Phone size={14} className="mr-2" /> 0331-5400327
            </a>
            <span className="flex items-center">
              <MapPin size={14} className="mr-2" /> St 3, Dhok Kaloor, Rawalpindi
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex flex-col">
            <span className="font-serif text-2xl md:text-3xl font-bold text-primary-900 leading-none">JANJUA</span>
            <span className="text-xs tracking-[0.2em] text-primary-600 uppercase">Furniture House</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-600 hover:text-primary-700 font-medium text-sm tracking-wide transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#quote" className="bg-primary-700 text-white px-6 py-2.5 rounded hover:bg-primary-800 transition-colors text-sm font-medium shadow-md">
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-700 hover:text-primary-700 font-medium py-2 border-b border-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#quote" 
              className="bg-primary-700 text-white px-4 py-3 rounded text-center mt-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
