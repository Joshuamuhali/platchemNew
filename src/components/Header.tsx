
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import GreenForm from './GreenForm';
import TopBar from './TopBar';


interface NavigationItem {
  name: string;
  href: string;
  isSection?: boolean;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', isSection: false },
    { name: 'About', href: 'about', isSection: true },
    { name: 'Services', href: '/services', isSection: false },
    { name: 'Industries', href: 'industries', isSection: true },
    { name: 'Gallery', href: '/gallery', isSection: false },
    { name: 'Contact', href: '/contact', isSection: false },
  ];

  const handleNavigation = (item: NavigationItem) => {
    if (item.isSection) {
      // For section links, scroll to the section on the home page
      if (window.location.pathname !== '/') {
        navigate('/');
        // Wait for the home page to load before scrolling
        setTimeout(() => {
          const element = document.getElementById(item.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // For regular navigation, use React Router
      navigate(item.href);
    }
    
    setIsMenuOpen(false);

    // If contact is clicked, show the contact form modal
    if (item.name === 'Contact') {
      setShowContactForm(true);
    }
  };

  return (
    <>
      <TopBar />

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg backdrop-blur-md' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <div className="bg-platchem-lime p-2 rounded-lg shadow-md">
                <img 
                  src="/lovable-uploads/f8693ab6-eddf-42aa-835c-1192015823ef.png" 
                  alt="Platchem Ltd Logo" 
                  className="h-10 w-auto"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="text-platchem-navy hover:text-platchem-lime font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-platchem-lime transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>



            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-platchem-navy hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-fade-in">
              <nav className="py-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className="block w-full text-left px-4 py-3 text-platchem-navy hover:text-platchem-lime hover:bg-gray-50 transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ))}

              </nav>
            </div>
          )}
        </div>
      </header>

      {/* GreenForm Modal */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            onClick={() => setShowContactForm(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <GreenForm onClose={() => setShowContactForm(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
