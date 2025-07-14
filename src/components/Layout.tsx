import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Twitter, Linkedin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { MobileMenu } from '@/components/MobileMenu';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSkipToContent = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Skip to content link */}
      <Button
        variant="ghost"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2"
        onClick={handleSkipToContent}
      >
        Skip to main content
      </Button>

      {/* Top Bar */}
      <div
        role="banner"
        className="bg-platchem-navy/95 text-white"
        aria-label="Top contact information"
      >
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-platchem-lime" aria-hidden="true" />
              <span className="text-sm font-medium">
                +260 767 771 006 / +260 969 999 222 / +260 761 110 505
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-platchem-lime" aria-hidden="true" />
              <span className="text-sm" role="heading" aria-level={2}>
                platchem@platchemgroup.com
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-platchem-lime hover:text-white transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="text-platchem-lime hover:text-white transition-colors"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="text-platchem-lime hover:text-white transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="bg-white border-b border-gray-200"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-platchem-lime p-2 rounded-lg">
                <Link
                  to="/"
                  className="flex items-center"
                  aria-label="Home"
                >
                  <img 
                    src="/lovable-uploads/f8693ab6-eddf-42aa-835c-1192015823ef.png" 
                    alt="Platchem Ltd Logo" 
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-600 hover:text-platchem-lime transition-colors"
                aria-current={window.location.pathname === '/' ? 'page' : undefined}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-600 hover:text-platchem-lime transition-colors"
                aria-current={window.location.pathname === '/services' ? 'page' : undefined}
              >
                Services
              </Link>
              <Link
                to="/case-studies"
                className="text-gray-600 hover:text-platchem-lime transition-colors"
                aria-current={window.location.pathname === '/case-studies' ? 'page' : undefined}
              >
                Case Studies
              </Link>
              <Link
                to="/gallery"
                className="text-gray-600 hover:text-platchem-lime transition-colors"
                aria-current={window.location.pathname === '/gallery' ? 'page' : undefined}
              >
                Gallery
              </Link>
              <Link
                to="#contact"
                className="text-gray-600 hover:text-platchem-lime transition-colors"
                aria-current={window.location.pathname === '/' && window.location.hash === '#contact' ? 'page' : undefined}
              >
                Contact
              </Link>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="md:hidden bg-white border-t border-gray-200"
        >
          <nav className="px-4 py-4">
            <Link 
              to="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-600 hover:text-platchem-lime transition-colors py-2"
              aria-current={window.location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-600 hover:text-platchem-lime transition-colors py-2"
              aria-current={window.location.pathname === '/services' ? 'page' : undefined}
            >
              Services
            </Link>
            <Link 
              to="/case-studies" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-600 hover:text-platchem-lime transition-colors py-2"
              aria-current={window.location.pathname === '/case-studies' ? 'page' : undefined}
            >
              Case Studies
            </Link>
            <Link 
              to="/gallery" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-600 hover:text-platchem-lime transition-colors py-2"
              aria-current={window.location.pathname === '/gallery' ? 'page' : undefined}
            >
              Gallery
            </Link>
            <Link 
              to="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-600 hover:text-platchem-lime transition-colors py-2"
              aria-current={window.location.pathname === '/' && window.location.hash === '#contact' ? 'page' : undefined}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main
        id="main-content"
        role="main"
        tabIndex={-1}
        className="flex-grow"
      >
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
