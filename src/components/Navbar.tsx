
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-sm backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-navy">
          <span className="text-teal">C</span>ornelius
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate hover:text-teal transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-navy" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-white/95 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {['About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-navy my-4 text-xl font-medium hover:text-teal transition-colors duration-300"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

