import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import './HeroSection.css'; // For custom styles

const HeroSection: FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to navigating to /contact if the section is not on the current page
      window.location.href = '/#contact';
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(12, 21, 39, 0.7), rgba(12, 21, 39, 0.7)), url("/lovable-uploads/team1.png")',
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight font-inter text-white">
            <span className="block">Engineering</span>
            <span className="text-platchem-lime block animate-scale-in font-light" style={{ 
              animationDelay: '0.3s',
              textShadow: '0 0 10px rgba(162, 215, 41, 0.5)'
            }}>
              Zambia's Industrial
            </span>
            <span className="block animate-scale-in text-white" style={{ animationDelay: '0.6s' }}>
              Future
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.9s' }}>
            Innovative, certified and sustainable engineering solutions delivering excellence across the Mining, Power and Industrial sectors since 2008.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('#services')}
              className="bg-platchem-lime hover:bg-platchem-lime-hover text-platchem-navy font-semibold px-8 py-4 text-lg group shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              onClick={handleContactClick}
              variant="outline" 
              className="border-2 border-platchem-gray-light text-platchem-gray-light hover:bg-platchem-lime hover:text-platchem-navy font-semibold px-8 py-4 text-lg group shadow-lg backdrop-blur-sm transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Talk to Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection('#about')}
      >
        <div className="w-6 h-10 border-2 border-platchem-gray-light rounded-full flex justify-center hover:border-platchem-lime transition-colors duration-300">
          <div className="w-1 h-3 bg-platchem-gray-light rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};




export default HeroSection;
