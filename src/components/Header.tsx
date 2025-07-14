
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


interface NavigationItem {
  name: string;
  href: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavigation = (item: NavigationItem) => {
    if (item.href.startsWith('#')) {
      // Scroll to section on current page or navigate to home first
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(item.href) as HTMLElement | null;
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(item.href) as HTMLElement | null;
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(item.href);
    }
    setIsMenuOpen(false);

    // If contact is clicked, navigate to the contact page
    if (item.name === 'Contact') {
      navigate(item.href);
    }
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-platchem-navy text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+260 767 771 006 / +260 969 999 222</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>platchem@platchemgroup.com</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <span className="text-platchem-lime">Lusaka:</span>
            <span>Plot No.10, Kawama Road, Woodlands</span>
          </div>
        </div>
      </div>

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
    </>
  );
};

export default Header;
