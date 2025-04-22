import React, { useState, useEffect } from 'react';
import { content } from '../../constants/content';
import { Menu, X, Zap } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Industries', href: '#industries' },
    { name: 'Resources', href: '#resources' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center text-2xl font-bold text-secondary-600">
          <Zap className="w-8 h-8 text-accent-500 mr-2" />
          {content.siteInfo.logo}
        </a>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-${isScrolled ? 'secondary-600' : 'white'} hover:text-accent-500 transition-colors font-medium`}
            >
              {link.name}
            </a>
          ))}
          <Button href="#contact" variant="primary">Contact</Button>
        </nav>

        <button
          className="md:hidden text-secondary-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="container py-5">
          <div className="flex items-center justify-between mb-8">
            <a href="#" className="flex items-center text-2xl font-bold text-secondary-600">
              <Zap className="w-8 h-8 text-accent-500 mr-2" />
              {content.siteInfo.logo}
            </a>
            <button
              className="text-secondary-600 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-secondary-600 text-lg hover:text-accent-500 transition-colors"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <Button href="#contact" variant="primary" className="mt-4" onClick={toggleMenu}>
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;